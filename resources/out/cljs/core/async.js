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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t618552 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618552 = (function (f,fn_handler,meta618553){
this.f = f;
this.fn_handler = fn_handler;
this.meta618553 = meta618553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618552.cljs$lang$type = true;
cljs.core.async.t618552.cljs$lang$ctorStr = "cljs.core.async/t618552";
cljs.core.async.t618552.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618552");
});
cljs.core.async.t618552.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t618552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t618552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t618552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618554){var self__ = this;
var _618554__$1 = this;return self__.meta618553;
});
cljs.core.async.t618552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618554,meta618553__$1){var self__ = this;
var _618554__$1 = this;return (new cljs.core.async.t618552(self__.f,self__.fn_handler,meta618553__$1));
});
cljs.core.async.__GT_t618552 = (function __GT_t618552(f__$1,fn_handler__$1,meta618553){return (new cljs.core.async.t618552(f__$1,fn_handler__$1,meta618553));
});
}
return (new cljs.core.async.t618552(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__618556 = buff;if(G__618556)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__618556.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__618556.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__618556);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__618556);
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
{var val_618557 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_618557);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_618557);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7718__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___618558 = n;var x_618559 = 0;while(true){
if((x_618559 < n__8553__auto___618558))
{(a[x_618559] = 0);
{
var G__618560 = (x_618559 + 1);
x_618559 = G__618560;
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
var G__618561 = (i + 1);
i = G__618561;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t618565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618565 = (function (flag,alt_flag,meta618566){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta618566 = meta618566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618565.cljs$lang$type = true;
cljs.core.async.t618565.cljs$lang$ctorStr = "cljs.core.async/t618565";
cljs.core.async.t618565.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618565");
});
cljs.core.async.t618565.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t618565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t618565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t618565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618567){var self__ = this;
var _618567__$1 = this;return self__.meta618566;
});
cljs.core.async.t618565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618567,meta618566__$1){var self__ = this;
var _618567__$1 = this;return (new cljs.core.async.t618565(self__.flag,self__.alt_flag,meta618566__$1));
});
cljs.core.async.__GT_t618565 = (function __GT_t618565(flag__$1,alt_flag__$1,meta618566){return (new cljs.core.async.t618565(flag__$1,alt_flag__$1,meta618566));
});
}
return (new cljs.core.async.t618565(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t618571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618571 = (function (cb,flag,alt_handler,meta618572){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta618572 = meta618572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618571.cljs$lang$type = true;
cljs.core.async.t618571.cljs$lang$ctorStr = "cljs.core.async/t618571";
cljs.core.async.t618571.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618571");
});
cljs.core.async.t618571.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t618571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t618571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t618571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618573){var self__ = this;
var _618573__$1 = this;return self__.meta618572;
});
cljs.core.async.t618571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618573,meta618572__$1){var self__ = this;
var _618573__$1 = this;return (new cljs.core.async.t618571(self__.cb,self__.flag,self__.alt_handler,meta618572__$1));
});
cljs.core.async.__GT_t618571 = (function __GT_t618571(cb__$1,flag__$1,alt_handler__$1,meta618572){return (new cljs.core.async.t618571(cb__$1,flag__$1,alt_handler__$1,meta618572));
});
}
return (new cljs.core.async.t618571(cb,flag,alt_handler,null));
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
return (function (p1__618574_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__618574_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7730__auto__ = wport;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__618575 = (i + 1);
i = G__618575;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7730__auto__ = ret;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__7718__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7718__auto__;
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
var alts_BANG___delegate = function (ports,p__618576){var map__618578 = p__618576;var map__618578__$1 = ((cljs.core.seq_QMARK_.call(null,map__618578))?cljs.core.apply.call(null,cljs.core.hash_map,map__618578):map__618578);var opts = map__618578__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__618576 = null;if (arguments.length > 1) {
  p__618576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__618576);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__618579){
var ports = cljs.core.first(arglist__618579);
var p__618576 = cljs.core.rest(arglist__618579);
return alts_BANG___delegate(ports,p__618576);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t618587 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618587 = (function (ch,f,map_LT_,meta618588){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta618588 = meta618588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618587.cljs$lang$type = true;
cljs.core.async.t618587.cljs$lang$ctorStr = "cljs.core.async/t618587";
cljs.core.async.t618587.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618587");
});
cljs.core.async.t618587.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t618587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t618587.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t618587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t618590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618590 = (function (fn1,_,meta618588,ch,f,map_LT_,meta618591){
this.fn1 = fn1;
this._ = _;
this.meta618588 = meta618588;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta618591 = meta618591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618590.cljs$lang$type = true;
cljs.core.async.t618590.cljs$lang$ctorStr = "cljs.core.async/t618590";
cljs.core.async.t618590.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618590");
});
cljs.core.async.t618590.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t618590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t618590.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t618590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__618580_SHARP_){return f1.call(null,(((p1__618580_SHARP_ == null))?null:self__.f.call(null,p1__618580_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t618590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618592){var self__ = this;
var _618592__$1 = this;return self__.meta618591;
});
cljs.core.async.t618590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618592,meta618591__$1){var self__ = this;
var _618592__$1 = this;return (new cljs.core.async.t618590(self__.fn1,self__._,self__.meta618588,self__.ch,self__.f,self__.map_LT_,meta618591__$1));
});
cljs.core.async.__GT_t618590 = (function __GT_t618590(fn1__$1,___$2,meta618588__$1,ch__$2,f__$2,map_LT___$2,meta618591){return (new cljs.core.async.t618590(fn1__$1,___$2,meta618588__$1,ch__$2,f__$2,map_LT___$2,meta618591));
});
}
return (new cljs.core.async.t618590(fn1,___$1,self__.meta618588,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t618587.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t618587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t618587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618589){var self__ = this;
var _618589__$1 = this;return self__.meta618588;
});
cljs.core.async.t618587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618589,meta618588__$1){var self__ = this;
var _618589__$1 = this;return (new cljs.core.async.t618587(self__.ch,self__.f,self__.map_LT_,meta618588__$1));
});
cljs.core.async.__GT_t618587 = (function __GT_t618587(ch__$1,f__$1,map_LT___$1,meta618588){return (new cljs.core.async.t618587(ch__$1,f__$1,map_LT___$1,meta618588));
});
}
return (new cljs.core.async.t618587(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t618596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618596 = (function (ch,f,map_GT_,meta618597){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta618597 = meta618597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618596.cljs$lang$type = true;
cljs.core.async.t618596.cljs$lang$ctorStr = "cljs.core.async/t618596";
cljs.core.async.t618596.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618596");
});
cljs.core.async.t618596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t618596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t618596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t618596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t618596.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t618596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t618596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618598){var self__ = this;
var _618598__$1 = this;return self__.meta618597;
});
cljs.core.async.t618596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618598,meta618597__$1){var self__ = this;
var _618598__$1 = this;return (new cljs.core.async.t618596(self__.ch,self__.f,self__.map_GT_,meta618597__$1));
});
cljs.core.async.__GT_t618596 = (function __GT_t618596(ch__$1,f__$1,map_GT___$1,meta618597){return (new cljs.core.async.t618596(ch__$1,f__$1,map_GT___$1,meta618597));
});
}
return (new cljs.core.async.t618596(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t618602 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t618602 = (function (ch,p,filter_GT_,meta618603){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta618603 = meta618603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t618602.cljs$lang$type = true;
cljs.core.async.t618602.cljs$lang$ctorStr = "cljs.core.async/t618602";
cljs.core.async.t618602.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t618602");
});
cljs.core.async.t618602.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t618602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t618602.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t618602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t618602.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t618602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t618602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_618604){var self__ = this;
var _618604__$1 = this;return self__.meta618603;
});
cljs.core.async.t618602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_618604,meta618603__$1){var self__ = this;
var _618604__$1 = this;return (new cljs.core.async.t618602(self__.ch,self__.p,self__.filter_GT_,meta618603__$1));
});
cljs.core.async.__GT_t618602 = (function __GT_t618602(ch__$1,p__$1,filter_GT___$1,meta618603){return (new cljs.core.async.t618602(ch__$1,p__$1,filter_GT___$1,meta618603));
});
}
return (new cljs.core.async.t618602(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___618687 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_618666){var state_val_618667 = (state_618666[1]);if((state_val_618667 === 1))
{var state_618666__$1 = state_618666;var statearr_618668_618688 = state_618666__$1;(statearr_618668_618688[2] = null);
(statearr_618668_618688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 2))
{var state_618666__$1 = state_618666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_618666__$1,4,ch);
} else
{if((state_val_618667 === 3))
{var inst_618664 = (state_618666[2]);var state_618666__$1 = state_618666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_618666__$1,inst_618664);
} else
{if((state_val_618667 === 4))
{var inst_618648 = (state_618666[7]);var inst_618648__$1 = (state_618666[2]);var inst_618649 = (inst_618648__$1 == null);var state_618666__$1 = (function (){var statearr_618669 = state_618666;(statearr_618669[7] = inst_618648__$1);
return statearr_618669;
})();if(cljs.core.truth_(inst_618649))
{var statearr_618670_618689 = state_618666__$1;(statearr_618670_618689[1] = 5);
} else
{var statearr_618671_618690 = state_618666__$1;(statearr_618671_618690[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 5))
{var inst_618651 = cljs.core.async.close_BANG_.call(null,out);var state_618666__$1 = state_618666;var statearr_618672_618691 = state_618666__$1;(statearr_618672_618691[2] = inst_618651);
(statearr_618672_618691[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 6))
{var inst_618648 = (state_618666[7]);var inst_618653 = p.call(null,inst_618648);var state_618666__$1 = state_618666;if(cljs.core.truth_(inst_618653))
{var statearr_618673_618692 = state_618666__$1;(statearr_618673_618692[1] = 8);
} else
{var statearr_618674_618693 = state_618666__$1;(statearr_618674_618693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 7))
{var inst_618662 = (state_618666[2]);var state_618666__$1 = state_618666;var statearr_618675_618694 = state_618666__$1;(statearr_618675_618694[2] = inst_618662);
(statearr_618675_618694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 8))
{var inst_618648 = (state_618666[7]);var state_618666__$1 = state_618666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_618666__$1,11,out,inst_618648);
} else
{if((state_val_618667 === 9))
{var state_618666__$1 = state_618666;var statearr_618676_618695 = state_618666__$1;(statearr_618676_618695[2] = null);
(statearr_618676_618695[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 10))
{var inst_618659 = (state_618666[2]);var state_618666__$1 = (function (){var statearr_618677 = state_618666;(statearr_618677[8] = inst_618659);
return statearr_618677;
})();var statearr_618678_618696 = state_618666__$1;(statearr_618678_618696[2] = null);
(statearr_618678_618696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618667 === 11))
{var inst_618656 = (state_618666[2]);var state_618666__$1 = state_618666;var statearr_618679_618697 = state_618666__$1;(statearr_618679_618697[2] = inst_618656);
(statearr_618679_618697[1] = 10);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_618683 = (new Array(9));(statearr_618683[0] = state_machine__10214__auto__);
(statearr_618683[1] = 1);
return statearr_618683;
});
var state_machine__10214__auto____1 = (function (state_618666){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_618666);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e618684){if((e618684 instanceof Object))
{var ex__10217__auto__ = e618684;var statearr_618685_618698 = state_618666;(statearr_618685_618698[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_618666);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e618684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__618699 = state_618666;
state_618666 = G__618699;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_618666){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_618666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_618686 = f__10284__auto__.call(null);(statearr_618686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___618687);
return statearr_618686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_618851){var state_val_618852 = (state_618851[1]);if((state_val_618852 === 1))
{var state_618851__$1 = state_618851;var statearr_618853_618890 = state_618851__$1;(statearr_618853_618890[2] = null);
(statearr_618853_618890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 2))
{var state_618851__$1 = state_618851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_618851__$1,4,in$);
} else
{if((state_val_618852 === 3))
{var inst_618849 = (state_618851[2]);var state_618851__$1 = state_618851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_618851__$1,inst_618849);
} else
{if((state_val_618852 === 4))
{var inst_618797 = (state_618851[7]);var inst_618797__$1 = (state_618851[2]);var inst_618798 = (inst_618797__$1 == null);var state_618851__$1 = (function (){var statearr_618854 = state_618851;(statearr_618854[7] = inst_618797__$1);
return statearr_618854;
})();if(cljs.core.truth_(inst_618798))
{var statearr_618855_618891 = state_618851__$1;(statearr_618855_618891[1] = 5);
} else
{var statearr_618856_618892 = state_618851__$1;(statearr_618856_618892[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 5))
{var inst_618800 = cljs.core.async.close_BANG_.call(null,out);var state_618851__$1 = state_618851;var statearr_618857_618893 = state_618851__$1;(statearr_618857_618893[2] = inst_618800);
(statearr_618857_618893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 6))
{var inst_618797 = (state_618851[7]);var inst_618802 = f.call(null,inst_618797);var inst_618807 = cljs.core.seq.call(null,inst_618802);var inst_618808 = inst_618807;var inst_618809 = null;var inst_618810 = 0;var inst_618811 = 0;var state_618851__$1 = (function (){var statearr_618858 = state_618851;(statearr_618858[8] = inst_618811);
(statearr_618858[9] = inst_618810);
(statearr_618858[10] = inst_618808);
(statearr_618858[11] = inst_618809);
return statearr_618858;
})();var statearr_618859_618894 = state_618851__$1;(statearr_618859_618894[2] = null);
(statearr_618859_618894[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 7))
{var inst_618847 = (state_618851[2]);var state_618851__$1 = state_618851;var statearr_618860_618895 = state_618851__$1;(statearr_618860_618895[2] = inst_618847);
(statearr_618860_618895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 8))
{var inst_618811 = (state_618851[8]);var inst_618810 = (state_618851[9]);var inst_618813 = (inst_618811 < inst_618810);var inst_618814 = inst_618813;var state_618851__$1 = state_618851;if(cljs.core.truth_(inst_618814))
{var statearr_618861_618896 = state_618851__$1;(statearr_618861_618896[1] = 10);
} else
{var statearr_618862_618897 = state_618851__$1;(statearr_618862_618897[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 9))
{var inst_618844 = (state_618851[2]);var state_618851__$1 = (function (){var statearr_618863 = state_618851;(statearr_618863[12] = inst_618844);
return statearr_618863;
})();var statearr_618864_618898 = state_618851__$1;(statearr_618864_618898[2] = null);
(statearr_618864_618898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 10))
{var inst_618811 = (state_618851[8]);var inst_618809 = (state_618851[11]);var inst_618816 = cljs.core._nth.call(null,inst_618809,inst_618811);var state_618851__$1 = state_618851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_618851__$1,13,out,inst_618816);
} else
{if((state_val_618852 === 11))
{var inst_618822 = (state_618851[13]);var inst_618808 = (state_618851[10]);var inst_618822__$1 = cljs.core.seq.call(null,inst_618808);var state_618851__$1 = (function (){var statearr_618868 = state_618851;(statearr_618868[13] = inst_618822__$1);
return statearr_618868;
})();if(inst_618822__$1)
{var statearr_618869_618899 = state_618851__$1;(statearr_618869_618899[1] = 14);
} else
{var statearr_618870_618900 = state_618851__$1;(statearr_618870_618900[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 12))
{var inst_618842 = (state_618851[2]);var state_618851__$1 = state_618851;var statearr_618871_618901 = state_618851__$1;(statearr_618871_618901[2] = inst_618842);
(statearr_618871_618901[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 13))
{var inst_618811 = (state_618851[8]);var inst_618810 = (state_618851[9]);var inst_618808 = (state_618851[10]);var inst_618809 = (state_618851[11]);var inst_618818 = (state_618851[2]);var inst_618819 = (inst_618811 + 1);var tmp618865 = inst_618810;var tmp618866 = inst_618808;var tmp618867 = inst_618809;var inst_618808__$1 = tmp618866;var inst_618809__$1 = tmp618867;var inst_618810__$1 = tmp618865;var inst_618811__$1 = inst_618819;var state_618851__$1 = (function (){var statearr_618872 = state_618851;(statearr_618872[8] = inst_618811__$1);
(statearr_618872[9] = inst_618810__$1);
(statearr_618872[10] = inst_618808__$1);
(statearr_618872[14] = inst_618818);
(statearr_618872[11] = inst_618809__$1);
return statearr_618872;
})();var statearr_618873_618902 = state_618851__$1;(statearr_618873_618902[2] = null);
(statearr_618873_618902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 14))
{var inst_618822 = (state_618851[13]);var inst_618824 = cljs.core.chunked_seq_QMARK_.call(null,inst_618822);var state_618851__$1 = state_618851;if(inst_618824)
{var statearr_618874_618903 = state_618851__$1;(statearr_618874_618903[1] = 17);
} else
{var statearr_618875_618904 = state_618851__$1;(statearr_618875_618904[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 15))
{var state_618851__$1 = state_618851;var statearr_618876_618905 = state_618851__$1;(statearr_618876_618905[2] = null);
(statearr_618876_618905[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 16))
{var inst_618840 = (state_618851[2]);var state_618851__$1 = state_618851;var statearr_618877_618906 = state_618851__$1;(statearr_618877_618906[2] = inst_618840);
(statearr_618877_618906[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 17))
{var inst_618822 = (state_618851[13]);var inst_618826 = cljs.core.chunk_first.call(null,inst_618822);var inst_618827 = cljs.core.chunk_rest.call(null,inst_618822);var inst_618828 = cljs.core.count.call(null,inst_618826);var inst_618808 = inst_618827;var inst_618809 = inst_618826;var inst_618810 = inst_618828;var inst_618811 = 0;var state_618851__$1 = (function (){var statearr_618878 = state_618851;(statearr_618878[8] = inst_618811);
(statearr_618878[9] = inst_618810);
(statearr_618878[10] = inst_618808);
(statearr_618878[11] = inst_618809);
return statearr_618878;
})();var statearr_618879_618907 = state_618851__$1;(statearr_618879_618907[2] = null);
(statearr_618879_618907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 18))
{var inst_618822 = (state_618851[13]);var inst_618831 = cljs.core.first.call(null,inst_618822);var state_618851__$1 = state_618851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_618851__$1,20,out,inst_618831);
} else
{if((state_val_618852 === 19))
{var inst_618837 = (state_618851[2]);var state_618851__$1 = state_618851;var statearr_618880_618908 = state_618851__$1;(statearr_618880_618908[2] = inst_618837);
(statearr_618880_618908[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618852 === 20))
{var inst_618822 = (state_618851[13]);var inst_618833 = (state_618851[2]);var inst_618834 = cljs.core.next.call(null,inst_618822);var inst_618808 = inst_618834;var inst_618809 = null;var inst_618810 = 0;var inst_618811 = 0;var state_618851__$1 = (function (){var statearr_618881 = state_618851;(statearr_618881[8] = inst_618811);
(statearr_618881[9] = inst_618810);
(statearr_618881[10] = inst_618808);
(statearr_618881[11] = inst_618809);
(statearr_618881[15] = inst_618833);
return statearr_618881;
})();var statearr_618882_618909 = state_618851__$1;(statearr_618882_618909[2] = null);
(statearr_618882_618909[1] = 8);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_618886 = (new Array(16));(statearr_618886[0] = state_machine__10214__auto__);
(statearr_618886[1] = 1);
return statearr_618886;
});
var state_machine__10214__auto____1 = (function (state_618851){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_618851);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e618887){if((e618887 instanceof Object))
{var ex__10217__auto__ = e618887;var statearr_618888_618910 = state_618851;(statearr_618888_618910[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_618851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e618887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__618911 = state_618851;
state_618851 = G__618911;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_618851){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_618851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_618889 = f__10284__auto__.call(null);(statearr_618889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_618889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___618992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_618971){var state_val_618972 = (state_618971[1]);if((state_val_618972 === 1))
{var state_618971__$1 = state_618971;var statearr_618973_618993 = state_618971__$1;(statearr_618973_618993[2] = null);
(statearr_618973_618993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 2))
{var state_618971__$1 = state_618971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_618971__$1,4,from);
} else
{if((state_val_618972 === 3))
{var inst_618969 = (state_618971[2]);var state_618971__$1 = state_618971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_618971__$1,inst_618969);
} else
{if((state_val_618972 === 4))
{var inst_618954 = (state_618971[7]);var inst_618954__$1 = (state_618971[2]);var inst_618955 = (inst_618954__$1 == null);var state_618971__$1 = (function (){var statearr_618974 = state_618971;(statearr_618974[7] = inst_618954__$1);
return statearr_618974;
})();if(cljs.core.truth_(inst_618955))
{var statearr_618975_618994 = state_618971__$1;(statearr_618975_618994[1] = 5);
} else
{var statearr_618976_618995 = state_618971__$1;(statearr_618976_618995[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 5))
{var state_618971__$1 = state_618971;if(cljs.core.truth_(close_QMARK_))
{var statearr_618977_618996 = state_618971__$1;(statearr_618977_618996[1] = 8);
} else
{var statearr_618978_618997 = state_618971__$1;(statearr_618978_618997[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 6))
{var inst_618954 = (state_618971[7]);var state_618971__$1 = state_618971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_618971__$1,11,to,inst_618954);
} else
{if((state_val_618972 === 7))
{var inst_618967 = (state_618971[2]);var state_618971__$1 = state_618971;var statearr_618979_618998 = state_618971__$1;(statearr_618979_618998[2] = inst_618967);
(statearr_618979_618998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 8))
{var inst_618958 = cljs.core.async.close_BANG_.call(null,to);var state_618971__$1 = state_618971;var statearr_618980_618999 = state_618971__$1;(statearr_618980_618999[2] = inst_618958);
(statearr_618980_618999[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 9))
{var state_618971__$1 = state_618971;var statearr_618981_619000 = state_618971__$1;(statearr_618981_619000[2] = null);
(statearr_618981_619000[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 10))
{var inst_618961 = (state_618971[2]);var state_618971__$1 = state_618971;var statearr_618982_619001 = state_618971__$1;(statearr_618982_619001[2] = inst_618961);
(statearr_618982_619001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618972 === 11))
{var inst_618964 = (state_618971[2]);var state_618971__$1 = (function (){var statearr_618983 = state_618971;(statearr_618983[8] = inst_618964);
return statearr_618983;
})();var statearr_618984_619002 = state_618971__$1;(statearr_618984_619002[2] = null);
(statearr_618984_619002[1] = 2);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_618988 = (new Array(9));(statearr_618988[0] = state_machine__10214__auto__);
(statearr_618988[1] = 1);
return statearr_618988;
});
var state_machine__10214__auto____1 = (function (state_618971){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_618971);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e618989){if((e618989 instanceof Object))
{var ex__10217__auto__ = e618989;var statearr_618990_619003 = state_618971;(statearr_618990_619003[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_618971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e618989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__619004 = state_618971;
state_618971 = G__619004;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_618971){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_618971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_618991 = f__10284__auto__.call(null);(statearr_618991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___618992);
return statearr_618991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___619091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_619069){var state_val_619070 = (state_619069[1]);if((state_val_619070 === 1))
{var state_619069__$1 = state_619069;var statearr_619071_619092 = state_619069__$1;(statearr_619071_619092[2] = null);
(statearr_619071_619092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 2))
{var state_619069__$1 = state_619069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_619069__$1,4,ch);
} else
{if((state_val_619070 === 3))
{var inst_619067 = (state_619069[2]);var state_619069__$1 = state_619069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_619069__$1,inst_619067);
} else
{if((state_val_619070 === 4))
{var inst_619050 = (state_619069[7]);var inst_619050__$1 = (state_619069[2]);var inst_619051 = (inst_619050__$1 == null);var state_619069__$1 = (function (){var statearr_619072 = state_619069;(statearr_619072[7] = inst_619050__$1);
return statearr_619072;
})();if(cljs.core.truth_(inst_619051))
{var statearr_619073_619093 = state_619069__$1;(statearr_619073_619093[1] = 5);
} else
{var statearr_619074_619094 = state_619069__$1;(statearr_619074_619094[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 5))
{var inst_619053 = cljs.core.async.close_BANG_.call(null,tc);var inst_619054 = cljs.core.async.close_BANG_.call(null,fc);var state_619069__$1 = (function (){var statearr_619075 = state_619069;(statearr_619075[8] = inst_619053);
return statearr_619075;
})();var statearr_619076_619095 = state_619069__$1;(statearr_619076_619095[2] = inst_619054);
(statearr_619076_619095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 6))
{var inst_619050 = (state_619069[7]);var inst_619056 = p.call(null,inst_619050);var state_619069__$1 = state_619069;if(cljs.core.truth_(inst_619056))
{var statearr_619077_619096 = state_619069__$1;(statearr_619077_619096[1] = 9);
} else
{var statearr_619078_619097 = state_619069__$1;(statearr_619078_619097[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 7))
{var inst_619065 = (state_619069[2]);var state_619069__$1 = state_619069;var statearr_619079_619098 = state_619069__$1;(statearr_619079_619098[2] = inst_619065);
(statearr_619079_619098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 8))
{var inst_619062 = (state_619069[2]);var state_619069__$1 = (function (){var statearr_619080 = state_619069;(statearr_619080[9] = inst_619062);
return statearr_619080;
})();var statearr_619081_619099 = state_619069__$1;(statearr_619081_619099[2] = null);
(statearr_619081_619099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 9))
{var state_619069__$1 = state_619069;var statearr_619082_619100 = state_619069__$1;(statearr_619082_619100[2] = tc);
(statearr_619082_619100[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 10))
{var state_619069__$1 = state_619069;var statearr_619083_619101 = state_619069__$1;(statearr_619083_619101[2] = fc);
(statearr_619083_619101[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619070 === 11))
{var inst_619050 = (state_619069[7]);var inst_619060 = (state_619069[2]);var state_619069__$1 = state_619069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_619069__$1,8,inst_619060,inst_619050);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_619087 = (new Array(10));(statearr_619087[0] = state_machine__10214__auto__);
(statearr_619087[1] = 1);
return statearr_619087;
});
var state_machine__10214__auto____1 = (function (state_619069){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_619069);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e619088){if((e619088 instanceof Object))
{var ex__10217__auto__ = e619088;var statearr_619089_619102 = state_619069;(statearr_619089_619102[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e619088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__619103 = state_619069;
state_619069 = G__619103;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_619069){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_619069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_619090 = f__10284__auto__.call(null);(statearr_619090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___619091);
return statearr_619090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_619150){var state_val_619151 = (state_619150[1]);if((state_val_619151 === 7))
{var inst_619146 = (state_619150[2]);var state_619150__$1 = state_619150;var statearr_619152_619168 = state_619150__$1;(statearr_619152_619168[2] = inst_619146);
(statearr_619152_619168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619151 === 6))
{var inst_619136 = (state_619150[7]);var inst_619139 = (state_619150[8]);var inst_619143 = f.call(null,inst_619136,inst_619139);var inst_619136__$1 = inst_619143;var state_619150__$1 = (function (){var statearr_619153 = state_619150;(statearr_619153[7] = inst_619136__$1);
return statearr_619153;
})();var statearr_619154_619169 = state_619150__$1;(statearr_619154_619169[2] = null);
(statearr_619154_619169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619151 === 5))
{var inst_619136 = (state_619150[7]);var state_619150__$1 = state_619150;var statearr_619155_619170 = state_619150__$1;(statearr_619155_619170[2] = inst_619136);
(statearr_619155_619170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619151 === 4))
{var inst_619139 = (state_619150[8]);var inst_619139__$1 = (state_619150[2]);var inst_619140 = (inst_619139__$1 == null);var state_619150__$1 = (function (){var statearr_619156 = state_619150;(statearr_619156[8] = inst_619139__$1);
return statearr_619156;
})();if(cljs.core.truth_(inst_619140))
{var statearr_619157_619171 = state_619150__$1;(statearr_619157_619171[1] = 5);
} else
{var statearr_619158_619172 = state_619150__$1;(statearr_619158_619172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619151 === 3))
{var inst_619148 = (state_619150[2]);var state_619150__$1 = state_619150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_619150__$1,inst_619148);
} else
{if((state_val_619151 === 2))
{var state_619150__$1 = state_619150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_619150__$1,4,ch);
} else
{if((state_val_619151 === 1))
{var inst_619136 = init;var state_619150__$1 = (function (){var statearr_619159 = state_619150;(statearr_619159[7] = inst_619136);
return statearr_619159;
})();var statearr_619160_619173 = state_619150__$1;(statearr_619160_619173[2] = null);
(statearr_619160_619173[1] = 2);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_619164 = (new Array(9));(statearr_619164[0] = state_machine__10214__auto__);
(statearr_619164[1] = 1);
return statearr_619164;
});
var state_machine__10214__auto____1 = (function (state_619150){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_619150);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e619165){if((e619165 instanceof Object))
{var ex__10217__auto__ = e619165;var statearr_619166_619174 = state_619150;(statearr_619166_619174[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e619165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__619175 = state_619150;
state_619150 = G__619175;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_619150){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_619150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_619167 = f__10284__auto__.call(null);(statearr_619167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_619167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_619237){var state_val_619238 = (state_619237[1]);if((state_val_619238 === 1))
{var inst_619217 = cljs.core.seq.call(null,coll);var inst_619218 = inst_619217;var state_619237__$1 = (function (){var statearr_619239 = state_619237;(statearr_619239[7] = inst_619218);
return statearr_619239;
})();var statearr_619240_619258 = state_619237__$1;(statearr_619240_619258[2] = null);
(statearr_619240_619258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 2))
{var inst_619218 = (state_619237[7]);var state_619237__$1 = state_619237;if(cljs.core.truth_(inst_619218))
{var statearr_619241_619259 = state_619237__$1;(statearr_619241_619259[1] = 4);
} else
{var statearr_619242_619260 = state_619237__$1;(statearr_619242_619260[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 3))
{var inst_619235 = (state_619237[2]);var state_619237__$1 = state_619237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_619237__$1,inst_619235);
} else
{if((state_val_619238 === 4))
{var inst_619218 = (state_619237[7]);var inst_619221 = cljs.core.first.call(null,inst_619218);var state_619237__$1 = state_619237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_619237__$1,7,ch,inst_619221);
} else
{if((state_val_619238 === 5))
{var state_619237__$1 = state_619237;if(cljs.core.truth_(close_QMARK_))
{var statearr_619243_619261 = state_619237__$1;(statearr_619243_619261[1] = 8);
} else
{var statearr_619244_619262 = state_619237__$1;(statearr_619244_619262[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 6))
{var inst_619233 = (state_619237[2]);var state_619237__$1 = state_619237;var statearr_619245_619263 = state_619237__$1;(statearr_619245_619263[2] = inst_619233);
(statearr_619245_619263[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 7))
{var inst_619218 = (state_619237[7]);var inst_619223 = (state_619237[2]);var inst_619224 = cljs.core.next.call(null,inst_619218);var inst_619218__$1 = inst_619224;var state_619237__$1 = (function (){var statearr_619246 = state_619237;(statearr_619246[7] = inst_619218__$1);
(statearr_619246[8] = inst_619223);
return statearr_619246;
})();var statearr_619247_619264 = state_619237__$1;(statearr_619247_619264[2] = null);
(statearr_619247_619264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 8))
{var inst_619228 = cljs.core.async.close_BANG_.call(null,ch);var state_619237__$1 = state_619237;var statearr_619248_619265 = state_619237__$1;(statearr_619248_619265[2] = inst_619228);
(statearr_619248_619265[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 9))
{var state_619237__$1 = state_619237;var statearr_619249_619266 = state_619237__$1;(statearr_619249_619266[2] = null);
(statearr_619249_619266[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619238 === 10))
{var inst_619231 = (state_619237[2]);var state_619237__$1 = state_619237;var statearr_619250_619267 = state_619237__$1;(statearr_619250_619267[2] = inst_619231);
(statearr_619250_619267[1] = 6);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_619254 = (new Array(9));(statearr_619254[0] = state_machine__10214__auto__);
(statearr_619254[1] = 1);
return statearr_619254;
});
var state_machine__10214__auto____1 = (function (state_619237){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_619237);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e619255){if((e619255 instanceof Object))
{var ex__10217__auto__ = e619255;var statearr_619256_619268 = state_619237;(statearr_619256_619268[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e619255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__619269 = state_619237;
state_619237 = G__619269;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_619237){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_619237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_619257 = f__10284__auto__.call(null);(statearr_619257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_619257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
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
cljs.core.async.Mux = (function (){var obj619271 = {};return obj619271;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7718__auto__ = _;if(and__7718__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8333__auto__ = (((_ == null))?null:_);return (function (){var or__7730__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj619273 = {};return obj619273;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t619488 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t619488 = (function (cs,ch,mult,meta619489){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta619489 = meta619489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t619488.cljs$lang$type = true;
cljs.core.async.t619488.cljs$lang$ctorStr = "cljs.core.async/t619488";
cljs.core.async.t619488.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t619488");
});})(cs))
;
cljs.core.async.t619488.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t619488.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t619488.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t619488.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t619488.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t619488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t619488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_619490){var self__ = this;
var _619490__$1 = this;return self__.meta619489;
});})(cs))
;
cljs.core.async.t619488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_619490,meta619489__$1){var self__ = this;
var _619490__$1 = this;return (new cljs.core.async.t619488(self__.cs,self__.ch,self__.mult,meta619489__$1));
});})(cs))
;
cljs.core.async.__GT_t619488 = ((function (cs){
return (function __GT_t619488(cs__$1,ch__$1,mult__$1,meta619489){return (new cljs.core.async.t619488(cs__$1,ch__$1,mult__$1,meta619489));
});})(cs))
;
}
return (new cljs.core.async.t619488(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___619702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_619620){var state_val_619621 = (state_619620[1]);if((state_val_619621 === 32))
{var inst_619493 = (state_619620[7]);var inst_619569 = (state_619620[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_619620,31,Object,null,30);var inst_619576 = cljs.core.async.put_BANG_.call(null,inst_619569,inst_619493,done);var state_619620__$1 = state_619620;var statearr_619622_619703 = state_619620__$1;(statearr_619622_619703[2] = inst_619576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 1))
{var state_619620__$1 = state_619620;var statearr_619623_619704 = state_619620__$1;(statearr_619623_619704[2] = null);
(statearr_619623_619704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 33))
{var inst_619582 = (state_619620[9]);var inst_619584 = cljs.core.chunked_seq_QMARK_.call(null,inst_619582);var state_619620__$1 = state_619620;if(inst_619584)
{var statearr_619624_619705 = state_619620__$1;(statearr_619624_619705[1] = 36);
} else
{var statearr_619625_619706 = state_619620__$1;(statearr_619625_619706[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 2))
{var state_619620__$1 = state_619620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_619620__$1,4,ch);
} else
{if((state_val_619621 === 34))
{var state_619620__$1 = state_619620;var statearr_619626_619707 = state_619620__$1;(statearr_619626_619707[2] = null);
(statearr_619626_619707[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 3))
{var inst_619618 = (state_619620[2]);var state_619620__$1 = state_619620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_619620__$1,inst_619618);
} else
{if((state_val_619621 === 35))
{var inst_619607 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619627_619708 = state_619620__$1;(statearr_619627_619708[2] = inst_619607);
(statearr_619627_619708[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 4))
{var inst_619493 = (state_619620[7]);var inst_619493__$1 = (state_619620[2]);var inst_619494 = (inst_619493__$1 == null);var state_619620__$1 = (function (){var statearr_619628 = state_619620;(statearr_619628[7] = inst_619493__$1);
return statearr_619628;
})();if(cljs.core.truth_(inst_619494))
{var statearr_619629_619709 = state_619620__$1;(statearr_619629_619709[1] = 5);
} else
{var statearr_619630_619710 = state_619620__$1;(statearr_619630_619710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 36))
{var inst_619582 = (state_619620[9]);var inst_619586 = cljs.core.chunk_first.call(null,inst_619582);var inst_619587 = cljs.core.chunk_rest.call(null,inst_619582);var inst_619588 = cljs.core.count.call(null,inst_619586);var inst_619561 = inst_619587;var inst_619562 = inst_619586;var inst_619563 = inst_619588;var inst_619564 = 0;var state_619620__$1 = (function (){var statearr_619631 = state_619620;(statearr_619631[10] = inst_619561);
(statearr_619631[11] = inst_619562);
(statearr_619631[12] = inst_619563);
(statearr_619631[13] = inst_619564);
return statearr_619631;
})();var statearr_619632_619711 = state_619620__$1;(statearr_619632_619711[2] = null);
(statearr_619632_619711[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 5))
{var inst_619500 = cljs.core.deref.call(null,cs);var inst_619501 = cljs.core.seq.call(null,inst_619500);var inst_619502 = inst_619501;var inst_619503 = null;var inst_619504 = 0;var inst_619505 = 0;var state_619620__$1 = (function (){var statearr_619633 = state_619620;(statearr_619633[14] = inst_619504);
(statearr_619633[15] = inst_619505);
(statearr_619633[16] = inst_619503);
(statearr_619633[17] = inst_619502);
return statearr_619633;
})();var statearr_619634_619712 = state_619620__$1;(statearr_619634_619712[2] = null);
(statearr_619634_619712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 37))
{var inst_619582 = (state_619620[9]);var inst_619591 = cljs.core.first.call(null,inst_619582);var state_619620__$1 = (function (){var statearr_619635 = state_619620;(statearr_619635[18] = inst_619591);
return statearr_619635;
})();var statearr_619636_619713 = state_619620__$1;(statearr_619636_619713[2] = null);
(statearr_619636_619713[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 6))
{var inst_619552 = cljs.core.deref.call(null,cs);var inst_619553 = cljs.core.keys.call(null,inst_619552);var inst_619554 = cljs.core.count.call(null,inst_619553);var inst_619555 = cljs.core.reset_BANG_.call(null,dctr,inst_619554);var inst_619560 = cljs.core.seq.call(null,inst_619553);var inst_619561 = inst_619560;var inst_619562 = null;var inst_619563 = 0;var inst_619564 = 0;var state_619620__$1 = (function (){var statearr_619637 = state_619620;(statearr_619637[10] = inst_619561);
(statearr_619637[11] = inst_619562);
(statearr_619637[12] = inst_619563);
(statearr_619637[13] = inst_619564);
(statearr_619637[19] = inst_619555);
return statearr_619637;
})();var statearr_619638_619714 = state_619620__$1;(statearr_619638_619714[2] = null);
(statearr_619638_619714[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 38))
{var inst_619604 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619639_619715 = state_619620__$1;(statearr_619639_619715[2] = inst_619604);
(statearr_619639_619715[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 7))
{var inst_619616 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619640_619716 = state_619620__$1;(statearr_619640_619716[2] = inst_619616);
(statearr_619640_619716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 39))
{var inst_619582 = (state_619620[9]);var inst_619600 = (state_619620[2]);var inst_619601 = cljs.core.next.call(null,inst_619582);var inst_619561 = inst_619601;var inst_619562 = null;var inst_619563 = 0;var inst_619564 = 0;var state_619620__$1 = (function (){var statearr_619641 = state_619620;(statearr_619641[10] = inst_619561);
(statearr_619641[11] = inst_619562);
(statearr_619641[12] = inst_619563);
(statearr_619641[13] = inst_619564);
(statearr_619641[20] = inst_619600);
return statearr_619641;
})();var statearr_619642_619717 = state_619620__$1;(statearr_619642_619717[2] = null);
(statearr_619642_619717[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 8))
{var inst_619504 = (state_619620[14]);var inst_619505 = (state_619620[15]);var inst_619507 = (inst_619505 < inst_619504);var inst_619508 = inst_619507;var state_619620__$1 = state_619620;if(cljs.core.truth_(inst_619508))
{var statearr_619643_619718 = state_619620__$1;(statearr_619643_619718[1] = 10);
} else
{var statearr_619644_619719 = state_619620__$1;(statearr_619644_619719[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 40))
{var inst_619591 = (state_619620[18]);var inst_619592 = (state_619620[2]);var inst_619593 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_619594 = cljs.core.async.untap_STAR_.call(null,m,inst_619591);var state_619620__$1 = (function (){var statearr_619645 = state_619620;(statearr_619645[21] = inst_619593);
(statearr_619645[22] = inst_619592);
return statearr_619645;
})();var statearr_619646_619720 = state_619620__$1;(statearr_619646_619720[2] = inst_619594);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 9))
{var inst_619550 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619647_619721 = state_619620__$1;(statearr_619647_619721[2] = inst_619550);
(statearr_619647_619721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 41))
{var inst_619493 = (state_619620[7]);var inst_619591 = (state_619620[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_619620,40,Object,null,39);var inst_619598 = cljs.core.async.put_BANG_.call(null,inst_619591,inst_619493,done);var state_619620__$1 = state_619620;var statearr_619648_619722 = state_619620__$1;(statearr_619648_619722[2] = inst_619598);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 10))
{var inst_619505 = (state_619620[15]);var inst_619503 = (state_619620[16]);var inst_619511 = cljs.core._nth.call(null,inst_619503,inst_619505);var inst_619512 = cljs.core.nth.call(null,inst_619511,0,null);var inst_619513 = cljs.core.nth.call(null,inst_619511,1,null);var state_619620__$1 = (function (){var statearr_619649 = state_619620;(statearr_619649[23] = inst_619512);
return statearr_619649;
})();if(cljs.core.truth_(inst_619513))
{var statearr_619650_619723 = state_619620__$1;(statearr_619650_619723[1] = 13);
} else
{var statearr_619651_619724 = state_619620__$1;(statearr_619651_619724[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 42))
{var inst_619613 = (state_619620[2]);var state_619620__$1 = (function (){var statearr_619652 = state_619620;(statearr_619652[24] = inst_619613);
return statearr_619652;
})();var statearr_619653_619725 = state_619620__$1;(statearr_619653_619725[2] = null);
(statearr_619653_619725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 11))
{var inst_619502 = (state_619620[17]);var inst_619522 = (state_619620[25]);var inst_619522__$1 = cljs.core.seq.call(null,inst_619502);var state_619620__$1 = (function (){var statearr_619654 = state_619620;(statearr_619654[25] = inst_619522__$1);
return statearr_619654;
})();if(inst_619522__$1)
{var statearr_619655_619726 = state_619620__$1;(statearr_619655_619726[1] = 16);
} else
{var statearr_619656_619727 = state_619620__$1;(statearr_619656_619727[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 12))
{var inst_619548 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619657_619728 = state_619620__$1;(statearr_619657_619728[2] = inst_619548);
(statearr_619657_619728[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 13))
{var inst_619512 = (state_619620[23]);var inst_619515 = cljs.core.async.close_BANG_.call(null,inst_619512);var state_619620__$1 = state_619620;var statearr_619661_619729 = state_619620__$1;(statearr_619661_619729[2] = inst_619515);
(statearr_619661_619729[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 14))
{var state_619620__$1 = state_619620;var statearr_619662_619730 = state_619620__$1;(statearr_619662_619730[2] = null);
(statearr_619662_619730[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 15))
{var inst_619504 = (state_619620[14]);var inst_619505 = (state_619620[15]);var inst_619503 = (state_619620[16]);var inst_619502 = (state_619620[17]);var inst_619518 = (state_619620[2]);var inst_619519 = (inst_619505 + 1);var tmp619658 = inst_619504;var tmp619659 = inst_619503;var tmp619660 = inst_619502;var inst_619502__$1 = tmp619660;var inst_619503__$1 = tmp619659;var inst_619504__$1 = tmp619658;var inst_619505__$1 = inst_619519;var state_619620__$1 = (function (){var statearr_619663 = state_619620;(statearr_619663[14] = inst_619504__$1);
(statearr_619663[15] = inst_619505__$1);
(statearr_619663[16] = inst_619503__$1);
(statearr_619663[17] = inst_619502__$1);
(statearr_619663[26] = inst_619518);
return statearr_619663;
})();var statearr_619664_619731 = state_619620__$1;(statearr_619664_619731[2] = null);
(statearr_619664_619731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 16))
{var inst_619522 = (state_619620[25]);var inst_619524 = cljs.core.chunked_seq_QMARK_.call(null,inst_619522);var state_619620__$1 = state_619620;if(inst_619524)
{var statearr_619665_619732 = state_619620__$1;(statearr_619665_619732[1] = 19);
} else
{var statearr_619666_619733 = state_619620__$1;(statearr_619666_619733[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 17))
{var state_619620__$1 = state_619620;var statearr_619667_619734 = state_619620__$1;(statearr_619667_619734[2] = null);
(statearr_619667_619734[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 18))
{var inst_619546 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619668_619735 = state_619620__$1;(statearr_619668_619735[2] = inst_619546);
(statearr_619668_619735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 19))
{var inst_619522 = (state_619620[25]);var inst_619526 = cljs.core.chunk_first.call(null,inst_619522);var inst_619527 = cljs.core.chunk_rest.call(null,inst_619522);var inst_619528 = cljs.core.count.call(null,inst_619526);var inst_619502 = inst_619527;var inst_619503 = inst_619526;var inst_619504 = inst_619528;var inst_619505 = 0;var state_619620__$1 = (function (){var statearr_619669 = state_619620;(statearr_619669[14] = inst_619504);
(statearr_619669[15] = inst_619505);
(statearr_619669[16] = inst_619503);
(statearr_619669[17] = inst_619502);
return statearr_619669;
})();var statearr_619670_619736 = state_619620__$1;(statearr_619670_619736[2] = null);
(statearr_619670_619736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 20))
{var inst_619522 = (state_619620[25]);var inst_619532 = cljs.core.first.call(null,inst_619522);var inst_619533 = cljs.core.nth.call(null,inst_619532,0,null);var inst_619534 = cljs.core.nth.call(null,inst_619532,1,null);var state_619620__$1 = (function (){var statearr_619671 = state_619620;(statearr_619671[27] = inst_619533);
return statearr_619671;
})();if(cljs.core.truth_(inst_619534))
{var statearr_619672_619737 = state_619620__$1;(statearr_619672_619737[1] = 22);
} else
{var statearr_619673_619738 = state_619620__$1;(statearr_619673_619738[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 21))
{var inst_619543 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619674_619739 = state_619620__$1;(statearr_619674_619739[2] = inst_619543);
(statearr_619674_619739[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 22))
{var inst_619533 = (state_619620[27]);var inst_619536 = cljs.core.async.close_BANG_.call(null,inst_619533);var state_619620__$1 = state_619620;var statearr_619675_619740 = state_619620__$1;(statearr_619675_619740[2] = inst_619536);
(statearr_619675_619740[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 23))
{var state_619620__$1 = state_619620;var statearr_619676_619741 = state_619620__$1;(statearr_619676_619741[2] = null);
(statearr_619676_619741[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 24))
{var inst_619522 = (state_619620[25]);var inst_619539 = (state_619620[2]);var inst_619540 = cljs.core.next.call(null,inst_619522);var inst_619502 = inst_619540;var inst_619503 = null;var inst_619504 = 0;var inst_619505 = 0;var state_619620__$1 = (function (){var statearr_619677 = state_619620;(statearr_619677[14] = inst_619504);
(statearr_619677[15] = inst_619505);
(statearr_619677[16] = inst_619503);
(statearr_619677[17] = inst_619502);
(statearr_619677[28] = inst_619539);
return statearr_619677;
})();var statearr_619678_619742 = state_619620__$1;(statearr_619678_619742[2] = null);
(statearr_619678_619742[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 25))
{var inst_619563 = (state_619620[12]);var inst_619564 = (state_619620[13]);var inst_619566 = (inst_619564 < inst_619563);var inst_619567 = inst_619566;var state_619620__$1 = state_619620;if(cljs.core.truth_(inst_619567))
{var statearr_619679_619743 = state_619620__$1;(statearr_619679_619743[1] = 27);
} else
{var statearr_619680_619744 = state_619620__$1;(statearr_619680_619744[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 26))
{var inst_619611 = (state_619620[2]);var state_619620__$1 = (function (){var statearr_619681 = state_619620;(statearr_619681[29] = inst_619611);
return statearr_619681;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_619620__$1,42,dchan);
} else
{if((state_val_619621 === 27))
{var inst_619562 = (state_619620[11]);var inst_619564 = (state_619620[13]);var inst_619569 = cljs.core._nth.call(null,inst_619562,inst_619564);var state_619620__$1 = (function (){var statearr_619682 = state_619620;(statearr_619682[8] = inst_619569);
return statearr_619682;
})();var statearr_619683_619745 = state_619620__$1;(statearr_619683_619745[2] = null);
(statearr_619683_619745[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 28))
{var inst_619561 = (state_619620[10]);var inst_619582 = (state_619620[9]);var inst_619582__$1 = cljs.core.seq.call(null,inst_619561);var state_619620__$1 = (function (){var statearr_619687 = state_619620;(statearr_619687[9] = inst_619582__$1);
return statearr_619687;
})();if(inst_619582__$1)
{var statearr_619688_619746 = state_619620__$1;(statearr_619688_619746[1] = 33);
} else
{var statearr_619689_619747 = state_619620__$1;(statearr_619689_619747[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 29))
{var inst_619609 = (state_619620[2]);var state_619620__$1 = state_619620;var statearr_619690_619748 = state_619620__$1;(statearr_619690_619748[2] = inst_619609);
(statearr_619690_619748[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 30))
{var inst_619561 = (state_619620[10]);var inst_619562 = (state_619620[11]);var inst_619563 = (state_619620[12]);var inst_619564 = (state_619620[13]);var inst_619578 = (state_619620[2]);var inst_619579 = (inst_619564 + 1);var tmp619684 = inst_619561;var tmp619685 = inst_619562;var tmp619686 = inst_619563;var inst_619561__$1 = tmp619684;var inst_619562__$1 = tmp619685;var inst_619563__$1 = tmp619686;var inst_619564__$1 = inst_619579;var state_619620__$1 = (function (){var statearr_619691 = state_619620;(statearr_619691[10] = inst_619561__$1);
(statearr_619691[11] = inst_619562__$1);
(statearr_619691[12] = inst_619563__$1);
(statearr_619691[13] = inst_619564__$1);
(statearr_619691[30] = inst_619578);
return statearr_619691;
})();var statearr_619692_619749 = state_619620__$1;(statearr_619692_619749[2] = null);
(statearr_619692_619749[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619621 === 31))
{var inst_619569 = (state_619620[8]);var inst_619570 = (state_619620[2]);var inst_619571 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_619572 = cljs.core.async.untap_STAR_.call(null,m,inst_619569);var state_619620__$1 = (function (){var statearr_619693 = state_619620;(statearr_619693[31] = inst_619571);
(statearr_619693[32] = inst_619570);
return statearr_619693;
})();var statearr_619694_619750 = state_619620__$1;(statearr_619694_619750[2] = inst_619572);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619620__$1);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_619698 = (new Array(33));(statearr_619698[0] = state_machine__10214__auto__);
(statearr_619698[1] = 1);
return statearr_619698;
});
var state_machine__10214__auto____1 = (function (state_619620){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_619620);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e619699){if((e619699 instanceof Object))
{var ex__10217__auto__ = e619699;var statearr_619700_619751 = state_619620;(statearr_619700_619751[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e619699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__619752 = state_619620;
state_619620 = G__619752;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_619620){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_619620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_619701 = f__10284__auto__.call(null);(statearr_619701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___619702);
return statearr_619701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.Mix = (function (){var obj619754 = {};return obj619754;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t619864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t619864 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta619865){
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
this.meta619865 = meta619865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t619864.cljs$lang$type = true;
cljs.core.async.t619864.cljs$lang$ctorStr = "cljs.core.async/t619864";
cljs.core.async.t619864.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t619864");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t619864.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t619864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_619866){var self__ = this;
var _619866__$1 = this;return self__.meta619865;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t619864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_619866,meta619865__$1){var self__ = this;
var _619866__$1 = this;return (new cljs.core.async.t619864(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta619865__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t619864 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t619864(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta619865){return (new cljs.core.async.t619864(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta619865));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t619864(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___619973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_619931){var state_val_619932 = (state_619931[1]);if((state_val_619932 === 1))
{var inst_619870 = (state_619931[7]);var inst_619870__$1 = calc_state.call(null);var inst_619871 = cljs.core.seq_QMARK_.call(null,inst_619870__$1);var state_619931__$1 = (function (){var statearr_619933 = state_619931;(statearr_619933[7] = inst_619870__$1);
return statearr_619933;
})();if(inst_619871)
{var statearr_619934_619974 = state_619931__$1;(statearr_619934_619974[1] = 2);
} else
{var statearr_619935_619975 = state_619931__$1;(statearr_619935_619975[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 2))
{var inst_619870 = (state_619931[7]);var inst_619873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_619870);var state_619931__$1 = state_619931;var statearr_619936_619976 = state_619931__$1;(statearr_619936_619976[2] = inst_619873);
(statearr_619936_619976[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 3))
{var inst_619870 = (state_619931[7]);var state_619931__$1 = state_619931;var statearr_619937_619977 = state_619931__$1;(statearr_619937_619977[2] = inst_619870);
(statearr_619937_619977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 4))
{var inst_619870 = (state_619931[7]);var inst_619876 = (state_619931[2]);var inst_619877 = cljs.core.get.call(null,inst_619876,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_619878 = cljs.core.get.call(null,inst_619876,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_619879 = cljs.core.get.call(null,inst_619876,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_619880 = inst_619870;var state_619931__$1 = (function (){var statearr_619938 = state_619931;(statearr_619938[8] = inst_619880);
(statearr_619938[9] = inst_619878);
(statearr_619938[10] = inst_619879);
(statearr_619938[11] = inst_619877);
return statearr_619938;
})();var statearr_619939_619978 = state_619931__$1;(statearr_619939_619978[2] = null);
(statearr_619939_619978[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 5))
{var inst_619880 = (state_619931[8]);var inst_619883 = cljs.core.seq_QMARK_.call(null,inst_619880);var state_619931__$1 = state_619931;if(inst_619883)
{var statearr_619940_619979 = state_619931__$1;(statearr_619940_619979[1] = 7);
} else
{var statearr_619941_619980 = state_619931__$1;(statearr_619941_619980[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 6))
{var inst_619929 = (state_619931[2]);var state_619931__$1 = state_619931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_619931__$1,inst_619929);
} else
{if((state_val_619932 === 7))
{var inst_619880 = (state_619931[8]);var inst_619885 = cljs.core.apply.call(null,cljs.core.hash_map,inst_619880);var state_619931__$1 = state_619931;var statearr_619942_619981 = state_619931__$1;(statearr_619942_619981[2] = inst_619885);
(statearr_619942_619981[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 8))
{var inst_619880 = (state_619931[8]);var state_619931__$1 = state_619931;var statearr_619943_619982 = state_619931__$1;(statearr_619943_619982[2] = inst_619880);
(statearr_619943_619982[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 9))
{var inst_619888 = (state_619931[12]);var inst_619888__$1 = (state_619931[2]);var inst_619889 = cljs.core.get.call(null,inst_619888__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_619890 = cljs.core.get.call(null,inst_619888__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_619891 = cljs.core.get.call(null,inst_619888__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_619931__$1 = (function (){var statearr_619944 = state_619931;(statearr_619944[13] = inst_619891);
(statearr_619944[14] = inst_619890);
(statearr_619944[12] = inst_619888__$1);
return statearr_619944;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_619931__$1,10,inst_619889);
} else
{if((state_val_619932 === 10))
{var inst_619895 = (state_619931[15]);var inst_619896 = (state_619931[16]);var inst_619894 = (state_619931[2]);var inst_619895__$1 = cljs.core.nth.call(null,inst_619894,0,null);var inst_619896__$1 = cljs.core.nth.call(null,inst_619894,1,null);var inst_619897 = (inst_619895__$1 == null);var inst_619898 = cljs.core._EQ_.call(null,inst_619896__$1,change);var inst_619899 = (inst_619897) || (inst_619898);var state_619931__$1 = (function (){var statearr_619945 = state_619931;(statearr_619945[15] = inst_619895__$1);
(statearr_619945[16] = inst_619896__$1);
return statearr_619945;
})();if(cljs.core.truth_(inst_619899))
{var statearr_619946_619983 = state_619931__$1;(statearr_619946_619983[1] = 11);
} else
{var statearr_619947_619984 = state_619931__$1;(statearr_619947_619984[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 11))
{var inst_619895 = (state_619931[15]);var inst_619901 = (inst_619895 == null);var state_619931__$1 = state_619931;if(cljs.core.truth_(inst_619901))
{var statearr_619948_619985 = state_619931__$1;(statearr_619948_619985[1] = 14);
} else
{var statearr_619949_619986 = state_619931__$1;(statearr_619949_619986[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 12))
{var inst_619891 = (state_619931[13]);var inst_619910 = (state_619931[17]);var inst_619896 = (state_619931[16]);var inst_619910__$1 = inst_619891.call(null,inst_619896);var state_619931__$1 = (function (){var statearr_619950 = state_619931;(statearr_619950[17] = inst_619910__$1);
return statearr_619950;
})();if(cljs.core.truth_(inst_619910__$1))
{var statearr_619951_619987 = state_619931__$1;(statearr_619951_619987[1] = 17);
} else
{var statearr_619952_619988 = state_619931__$1;(statearr_619952_619988[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 13))
{var inst_619927 = (state_619931[2]);var state_619931__$1 = state_619931;var statearr_619953_619989 = state_619931__$1;(statearr_619953_619989[2] = inst_619927);
(statearr_619953_619989[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 14))
{var inst_619896 = (state_619931[16]);var inst_619903 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_619896);var state_619931__$1 = state_619931;var statearr_619954_619990 = state_619931__$1;(statearr_619954_619990[2] = inst_619903);
(statearr_619954_619990[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 15))
{var state_619931__$1 = state_619931;var statearr_619955_619991 = state_619931__$1;(statearr_619955_619991[2] = null);
(statearr_619955_619991[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 16))
{var inst_619906 = (state_619931[2]);var inst_619907 = calc_state.call(null);var inst_619880 = inst_619907;var state_619931__$1 = (function (){var statearr_619956 = state_619931;(statearr_619956[8] = inst_619880);
(statearr_619956[18] = inst_619906);
return statearr_619956;
})();var statearr_619957_619992 = state_619931__$1;(statearr_619957_619992[2] = null);
(statearr_619957_619992[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 17))
{var inst_619910 = (state_619931[17]);var state_619931__$1 = state_619931;var statearr_619958_619993 = state_619931__$1;(statearr_619958_619993[2] = inst_619910);
(statearr_619958_619993[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 18))
{var inst_619891 = (state_619931[13]);var inst_619890 = (state_619931[14]);var inst_619896 = (state_619931[16]);var inst_619913 = cljs.core.empty_QMARK_.call(null,inst_619891);var inst_619914 = inst_619890.call(null,inst_619896);var inst_619915 = cljs.core.not.call(null,inst_619914);var inst_619916 = (inst_619913) && (inst_619915);var state_619931__$1 = state_619931;var statearr_619959_619994 = state_619931__$1;(statearr_619959_619994[2] = inst_619916);
(statearr_619959_619994[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 19))
{var inst_619918 = (state_619931[2]);var state_619931__$1 = state_619931;if(cljs.core.truth_(inst_619918))
{var statearr_619960_619995 = state_619931__$1;(statearr_619960_619995[1] = 20);
} else
{var statearr_619961_619996 = state_619931__$1;(statearr_619961_619996[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 20))
{var inst_619895 = (state_619931[15]);var state_619931__$1 = state_619931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_619931__$1,23,out,inst_619895);
} else
{if((state_val_619932 === 21))
{var state_619931__$1 = state_619931;var statearr_619962_619997 = state_619931__$1;(statearr_619962_619997[2] = null);
(statearr_619962_619997[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 22))
{var inst_619888 = (state_619931[12]);var inst_619924 = (state_619931[2]);var inst_619880 = inst_619888;var state_619931__$1 = (function (){var statearr_619963 = state_619931;(statearr_619963[8] = inst_619880);
(statearr_619963[19] = inst_619924);
return statearr_619963;
})();var statearr_619964_619998 = state_619931__$1;(statearr_619964_619998[2] = null);
(statearr_619964_619998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_619932 === 23))
{var inst_619921 = (state_619931[2]);var state_619931__$1 = state_619931;var statearr_619965_619999 = state_619931__$1;(statearr_619965_619999[2] = inst_619921);
(statearr_619965_619999[1] = 22);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_619969 = (new Array(20));(statearr_619969[0] = state_machine__10214__auto__);
(statearr_619969[1] = 1);
return statearr_619969;
});
var state_machine__10214__auto____1 = (function (state_619931){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_619931);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e619970){if((e619970 instanceof Object))
{var ex__10217__auto__ = e619970;var statearr_619971_620000 = state_619931;(statearr_619971_620000[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_619931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e619970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620001 = state_619931;
state_619931 = G__620001;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_619931){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_619931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_619972 = f__10284__auto__.call(null);(statearr_619972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___619973);
return statearr_619972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.Pub = (function (){var obj620003 = {};return obj620003;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
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
return (function (topic){var or__7730__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7730__auto__,mults){
return (function (p1__620004_SHARP_){if(cljs.core.truth_(p1__620004_SHARP_.call(null,topic)))
{return p1__620004_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__620004_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t620129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t620129 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta620130){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta620130 = meta620130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t620129.cljs$lang$type = true;
cljs.core.async.t620129.cljs$lang$ctorStr = "cljs.core.async/t620129";
cljs.core.async.t620129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t620129");
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t620129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t620129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_620131){var self__ = this;
var _620131__$1 = this;return self__.meta620130;
});})(mults,ensure_mult))
;
cljs.core.async.t620129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_620131,meta620130__$1){var self__ = this;
var _620131__$1 = this;return (new cljs.core.async.t620129(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta620130__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t620129 = ((function (mults,ensure_mult){
return (function __GT_t620129(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta620130){return (new cljs.core.async.t620129(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta620130));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t620129(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___620253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_620205){var state_val_620206 = (state_620205[1]);if((state_val_620206 === 1))
{var state_620205__$1 = state_620205;var statearr_620207_620254 = state_620205__$1;(statearr_620207_620254[2] = null);
(statearr_620207_620254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 2))
{var state_620205__$1 = state_620205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_620205__$1,4,ch);
} else
{if((state_val_620206 === 3))
{var inst_620203 = (state_620205[2]);var state_620205__$1 = state_620205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_620205__$1,inst_620203);
} else
{if((state_val_620206 === 4))
{var inst_620134 = (state_620205[7]);var inst_620134__$1 = (state_620205[2]);var inst_620135 = (inst_620134__$1 == null);var state_620205__$1 = (function (){var statearr_620208 = state_620205;(statearr_620208[7] = inst_620134__$1);
return statearr_620208;
})();if(cljs.core.truth_(inst_620135))
{var statearr_620209_620255 = state_620205__$1;(statearr_620209_620255[1] = 5);
} else
{var statearr_620210_620256 = state_620205__$1;(statearr_620210_620256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 5))
{var inst_620141 = cljs.core.deref.call(null,mults);var inst_620142 = cljs.core.vals.call(null,inst_620141);var inst_620143 = cljs.core.seq.call(null,inst_620142);var inst_620144 = inst_620143;var inst_620145 = null;var inst_620146 = 0;var inst_620147 = 0;var state_620205__$1 = (function (){var statearr_620211 = state_620205;(statearr_620211[8] = inst_620147);
(statearr_620211[9] = inst_620146);
(statearr_620211[10] = inst_620144);
(statearr_620211[11] = inst_620145);
return statearr_620211;
})();var statearr_620212_620257 = state_620205__$1;(statearr_620212_620257[2] = null);
(statearr_620212_620257[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 6))
{var inst_620134 = (state_620205[7]);var inst_620182 = (state_620205[12]);var inst_620184 = (state_620205[13]);var inst_620182__$1 = topic_fn.call(null,inst_620134);var inst_620183 = cljs.core.deref.call(null,mults);var inst_620184__$1 = cljs.core.get.call(null,inst_620183,inst_620182__$1);var state_620205__$1 = (function (){var statearr_620213 = state_620205;(statearr_620213[12] = inst_620182__$1);
(statearr_620213[13] = inst_620184__$1);
return statearr_620213;
})();if(cljs.core.truth_(inst_620184__$1))
{var statearr_620214_620258 = state_620205__$1;(statearr_620214_620258[1] = 19);
} else
{var statearr_620215_620259 = state_620205__$1;(statearr_620215_620259[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 7))
{var inst_620201 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620216_620260 = state_620205__$1;(statearr_620216_620260[2] = inst_620201);
(statearr_620216_620260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 8))
{var inst_620147 = (state_620205[8]);var inst_620146 = (state_620205[9]);var inst_620149 = (inst_620147 < inst_620146);var inst_620150 = inst_620149;var state_620205__$1 = state_620205;if(cljs.core.truth_(inst_620150))
{var statearr_620220_620261 = state_620205__$1;(statearr_620220_620261[1] = 10);
} else
{var statearr_620221_620262 = state_620205__$1;(statearr_620221_620262[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 9))
{var inst_620180 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620222_620263 = state_620205__$1;(statearr_620222_620263[2] = inst_620180);
(statearr_620222_620263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 10))
{var inst_620147 = (state_620205[8]);var inst_620146 = (state_620205[9]);var inst_620144 = (state_620205[10]);var inst_620145 = (state_620205[11]);var inst_620152 = cljs.core._nth.call(null,inst_620145,inst_620147);var inst_620153 = cljs.core.async.muxch_STAR_.call(null,inst_620152);var inst_620154 = cljs.core.async.close_BANG_.call(null,inst_620153);var inst_620155 = (inst_620147 + 1);var tmp620217 = inst_620146;var tmp620218 = inst_620144;var tmp620219 = inst_620145;var inst_620144__$1 = tmp620218;var inst_620145__$1 = tmp620219;var inst_620146__$1 = tmp620217;var inst_620147__$1 = inst_620155;var state_620205__$1 = (function (){var statearr_620223 = state_620205;(statearr_620223[8] = inst_620147__$1);
(statearr_620223[9] = inst_620146__$1);
(statearr_620223[10] = inst_620144__$1);
(statearr_620223[11] = inst_620145__$1);
(statearr_620223[14] = inst_620154);
return statearr_620223;
})();var statearr_620224_620264 = state_620205__$1;(statearr_620224_620264[2] = null);
(statearr_620224_620264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 11))
{var inst_620144 = (state_620205[10]);var inst_620158 = (state_620205[15]);var inst_620158__$1 = cljs.core.seq.call(null,inst_620144);var state_620205__$1 = (function (){var statearr_620225 = state_620205;(statearr_620225[15] = inst_620158__$1);
return statearr_620225;
})();if(inst_620158__$1)
{var statearr_620226_620265 = state_620205__$1;(statearr_620226_620265[1] = 13);
} else
{var statearr_620227_620266 = state_620205__$1;(statearr_620227_620266[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 12))
{var inst_620178 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620228_620267 = state_620205__$1;(statearr_620228_620267[2] = inst_620178);
(statearr_620228_620267[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 13))
{var inst_620158 = (state_620205[15]);var inst_620160 = cljs.core.chunked_seq_QMARK_.call(null,inst_620158);var state_620205__$1 = state_620205;if(inst_620160)
{var statearr_620229_620268 = state_620205__$1;(statearr_620229_620268[1] = 16);
} else
{var statearr_620230_620269 = state_620205__$1;(statearr_620230_620269[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 14))
{var state_620205__$1 = state_620205;var statearr_620231_620270 = state_620205__$1;(statearr_620231_620270[2] = null);
(statearr_620231_620270[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 15))
{var inst_620176 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620232_620271 = state_620205__$1;(statearr_620232_620271[2] = inst_620176);
(statearr_620232_620271[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 16))
{var inst_620158 = (state_620205[15]);var inst_620162 = cljs.core.chunk_first.call(null,inst_620158);var inst_620163 = cljs.core.chunk_rest.call(null,inst_620158);var inst_620164 = cljs.core.count.call(null,inst_620162);var inst_620144 = inst_620163;var inst_620145 = inst_620162;var inst_620146 = inst_620164;var inst_620147 = 0;var state_620205__$1 = (function (){var statearr_620233 = state_620205;(statearr_620233[8] = inst_620147);
(statearr_620233[9] = inst_620146);
(statearr_620233[10] = inst_620144);
(statearr_620233[11] = inst_620145);
return statearr_620233;
})();var statearr_620234_620272 = state_620205__$1;(statearr_620234_620272[2] = null);
(statearr_620234_620272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 17))
{var inst_620158 = (state_620205[15]);var inst_620167 = cljs.core.first.call(null,inst_620158);var inst_620168 = cljs.core.async.muxch_STAR_.call(null,inst_620167);var inst_620169 = cljs.core.async.close_BANG_.call(null,inst_620168);var inst_620170 = cljs.core.next.call(null,inst_620158);var inst_620144 = inst_620170;var inst_620145 = null;var inst_620146 = 0;var inst_620147 = 0;var state_620205__$1 = (function (){var statearr_620235 = state_620205;(statearr_620235[8] = inst_620147);
(statearr_620235[9] = inst_620146);
(statearr_620235[10] = inst_620144);
(statearr_620235[11] = inst_620145);
(statearr_620235[16] = inst_620169);
return statearr_620235;
})();var statearr_620236_620273 = state_620205__$1;(statearr_620236_620273[2] = null);
(statearr_620236_620273[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 18))
{var inst_620173 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620237_620274 = state_620205__$1;(statearr_620237_620274[2] = inst_620173);
(statearr_620237_620274[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 19))
{var state_620205__$1 = state_620205;var statearr_620238_620275 = state_620205__$1;(statearr_620238_620275[2] = null);
(statearr_620238_620275[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 20))
{var state_620205__$1 = state_620205;var statearr_620239_620276 = state_620205__$1;(statearr_620239_620276[2] = null);
(statearr_620239_620276[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 21))
{var inst_620198 = (state_620205[2]);var state_620205__$1 = (function (){var statearr_620240 = state_620205;(statearr_620240[17] = inst_620198);
return statearr_620240;
})();var statearr_620241_620277 = state_620205__$1;(statearr_620241_620277[2] = null);
(statearr_620241_620277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 22))
{var inst_620195 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620242_620278 = state_620205__$1;(statearr_620242_620278[2] = inst_620195);
(statearr_620242_620278[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 23))
{var inst_620182 = (state_620205[12]);var inst_620186 = (state_620205[2]);var inst_620187 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_620182);var state_620205__$1 = (function (){var statearr_620243 = state_620205;(statearr_620243[18] = inst_620186);
return statearr_620243;
})();var statearr_620244_620279 = state_620205__$1;(statearr_620244_620279[2] = inst_620187);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620206 === 24))
{var inst_620134 = (state_620205[7]);var inst_620184 = (state_620205[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_620205,23,Object,null,22);var inst_620191 = cljs.core.async.muxch_STAR_.call(null,inst_620184);var state_620205__$1 = state_620205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620205__$1,25,inst_620191,inst_620134);
} else
{if((state_val_620206 === 25))
{var inst_620193 = (state_620205[2]);var state_620205__$1 = state_620205;var statearr_620245_620280 = state_620205__$1;(statearr_620245_620280[2] = inst_620193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620205__$1);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_620249 = (new Array(19));(statearr_620249[0] = state_machine__10214__auto__);
(statearr_620249[1] = 1);
return statearr_620249;
});
var state_machine__10214__auto____1 = (function (state_620205){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_620205);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e620250){if((e620250 instanceof Object))
{var ex__10217__auto__ = e620250;var statearr_620251_620281 = state_620205;(statearr_620251_620281[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e620250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620282 = state_620205;
state_620205 = G__620282;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_620205){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_620205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_620252 = f__10284__auto__.call(null);(statearr_620252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___620253);
return statearr_620252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
,cljs.core.range.call(null,cnt));var c__10283__auto___620419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_620389){var state_val_620390 = (state_620389[1]);if((state_val_620390 === 1))
{var state_620389__$1 = state_620389;var statearr_620391_620420 = state_620389__$1;(statearr_620391_620420[2] = null);
(statearr_620391_620420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 2))
{var inst_620352 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_620353 = 0;var state_620389__$1 = (function (){var statearr_620392 = state_620389;(statearr_620392[7] = inst_620353);
(statearr_620392[8] = inst_620352);
return statearr_620392;
})();var statearr_620393_620421 = state_620389__$1;(statearr_620393_620421[2] = null);
(statearr_620393_620421[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 3))
{var inst_620387 = (state_620389[2]);var state_620389__$1 = state_620389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_620389__$1,inst_620387);
} else
{if((state_val_620390 === 4))
{var inst_620353 = (state_620389[7]);var inst_620355 = (inst_620353 < cnt);var state_620389__$1 = state_620389;if(cljs.core.truth_(inst_620355))
{var statearr_620394_620422 = state_620389__$1;(statearr_620394_620422[1] = 6);
} else
{var statearr_620395_620423 = state_620389__$1;(statearr_620395_620423[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 5))
{var inst_620373 = (state_620389[2]);var state_620389__$1 = (function (){var statearr_620396 = state_620389;(statearr_620396[9] = inst_620373);
return statearr_620396;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_620389__$1,12,dchan);
} else
{if((state_val_620390 === 6))
{var state_620389__$1 = state_620389;var statearr_620397_620424 = state_620389__$1;(statearr_620397_620424[2] = null);
(statearr_620397_620424[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 7))
{var state_620389__$1 = state_620389;var statearr_620398_620425 = state_620389__$1;(statearr_620398_620425[2] = null);
(statearr_620398_620425[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 8))
{var inst_620371 = (state_620389[2]);var state_620389__$1 = state_620389;var statearr_620399_620426 = state_620389__$1;(statearr_620399_620426[2] = inst_620371);
(statearr_620399_620426[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 9))
{var inst_620353 = (state_620389[7]);var inst_620366 = (state_620389[2]);var inst_620367 = (inst_620353 + 1);var inst_620353__$1 = inst_620367;var state_620389__$1 = (function (){var statearr_620400 = state_620389;(statearr_620400[7] = inst_620353__$1);
(statearr_620400[10] = inst_620366);
return statearr_620400;
})();var statearr_620401_620427 = state_620389__$1;(statearr_620401_620427[2] = null);
(statearr_620401_620427[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 10))
{var inst_620357 = (state_620389[2]);var inst_620358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_620389__$1 = (function (){var statearr_620402 = state_620389;(statearr_620402[11] = inst_620357);
return statearr_620402;
})();var statearr_620403_620428 = state_620389__$1;(statearr_620403_620428[2] = inst_620358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 11))
{var inst_620353 = (state_620389[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_620389,10,Object,null,9);var inst_620362 = chs__$1.call(null,inst_620353);var inst_620363 = done.call(null,inst_620353);var inst_620364 = cljs.core.async.take_BANG_.call(null,inst_620362,inst_620363);var state_620389__$1 = state_620389;var statearr_620404_620429 = state_620389__$1;(statearr_620404_620429[2] = inst_620364);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 12))
{var inst_620375 = (state_620389[12]);var inst_620375__$1 = (state_620389[2]);var inst_620376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_620375__$1);var state_620389__$1 = (function (){var statearr_620405 = state_620389;(statearr_620405[12] = inst_620375__$1);
return statearr_620405;
})();if(cljs.core.truth_(inst_620376))
{var statearr_620406_620430 = state_620389__$1;(statearr_620406_620430[1] = 13);
} else
{var statearr_620407_620431 = state_620389__$1;(statearr_620407_620431[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 13))
{var inst_620378 = cljs.core.async.close_BANG_.call(null,out);var state_620389__$1 = state_620389;var statearr_620408_620432 = state_620389__$1;(statearr_620408_620432[2] = inst_620378);
(statearr_620408_620432[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 14))
{var inst_620375 = (state_620389[12]);var inst_620380 = cljs.core.apply.call(null,f,inst_620375);var state_620389__$1 = state_620389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620389__$1,16,out,inst_620380);
} else
{if((state_val_620390 === 15))
{var inst_620385 = (state_620389[2]);var state_620389__$1 = state_620389;var statearr_620409_620433 = state_620389__$1;(statearr_620409_620433[2] = inst_620385);
(statearr_620409_620433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620390 === 16))
{var inst_620382 = (state_620389[2]);var state_620389__$1 = (function (){var statearr_620410 = state_620389;(statearr_620410[13] = inst_620382);
return statearr_620410;
})();var statearr_620411_620434 = state_620389__$1;(statearr_620411_620434[2] = null);
(statearr_620411_620434[1] = 2);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_620415 = (new Array(14));(statearr_620415[0] = state_machine__10214__auto__);
(statearr_620415[1] = 1);
return statearr_620415;
});
var state_machine__10214__auto____1 = (function (state_620389){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_620389);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e620416){if((e620416 instanceof Object))
{var ex__10217__auto__ = e620416;var statearr_620417_620435 = state_620389;(statearr_620417_620435[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e620416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620436 = state_620389;
state_620389 = G__620436;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_620389){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_620389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_620418 = f__10284__auto__.call(null);(statearr_620418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___620419);
return statearr_620418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___620544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_620520){var state_val_620521 = (state_620520[1]);if((state_val_620521 === 1))
{var inst_620491 = cljs.core.vec.call(null,chs);var inst_620492 = inst_620491;var state_620520__$1 = (function (){var statearr_620522 = state_620520;(statearr_620522[7] = inst_620492);
return statearr_620522;
})();var statearr_620523_620545 = state_620520__$1;(statearr_620523_620545[2] = null);
(statearr_620523_620545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 2))
{var inst_620492 = (state_620520[7]);var inst_620494 = cljs.core.count.call(null,inst_620492);var inst_620495 = (inst_620494 > 0);var state_620520__$1 = state_620520;if(cljs.core.truth_(inst_620495))
{var statearr_620524_620546 = state_620520__$1;(statearr_620524_620546[1] = 4);
} else
{var statearr_620525_620547 = state_620520__$1;(statearr_620525_620547[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 3))
{var inst_620518 = (state_620520[2]);var state_620520__$1 = state_620520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_620520__$1,inst_620518);
} else
{if((state_val_620521 === 4))
{var inst_620492 = (state_620520[7]);var state_620520__$1 = state_620520;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_620520__$1,7,inst_620492);
} else
{if((state_val_620521 === 5))
{var inst_620514 = cljs.core.async.close_BANG_.call(null,out);var state_620520__$1 = state_620520;var statearr_620526_620548 = state_620520__$1;(statearr_620526_620548[2] = inst_620514);
(statearr_620526_620548[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 6))
{var inst_620516 = (state_620520[2]);var state_620520__$1 = state_620520;var statearr_620527_620549 = state_620520__$1;(statearr_620527_620549[2] = inst_620516);
(statearr_620527_620549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 7))
{var inst_620500 = (state_620520[8]);var inst_620499 = (state_620520[9]);var inst_620499__$1 = (state_620520[2]);var inst_620500__$1 = cljs.core.nth.call(null,inst_620499__$1,0,null);var inst_620501 = cljs.core.nth.call(null,inst_620499__$1,1,null);var inst_620502 = (inst_620500__$1 == null);var state_620520__$1 = (function (){var statearr_620528 = state_620520;(statearr_620528[10] = inst_620501);
(statearr_620528[8] = inst_620500__$1);
(statearr_620528[9] = inst_620499__$1);
return statearr_620528;
})();if(cljs.core.truth_(inst_620502))
{var statearr_620529_620550 = state_620520__$1;(statearr_620529_620550[1] = 8);
} else
{var statearr_620530_620551 = state_620520__$1;(statearr_620530_620551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 8))
{var inst_620501 = (state_620520[10]);var inst_620500 = (state_620520[8]);var inst_620492 = (state_620520[7]);var inst_620499 = (state_620520[9]);var inst_620504 = (function (){var c = inst_620501;var v = inst_620500;var vec__620497 = inst_620499;var cs = inst_620492;return ((function (c,v,vec__620497,cs,inst_620501,inst_620500,inst_620492,inst_620499,state_val_620521){
return (function (p1__620437_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__620437_SHARP_);
});
;})(c,v,vec__620497,cs,inst_620501,inst_620500,inst_620492,inst_620499,state_val_620521))
})();var inst_620505 = cljs.core.filterv.call(null,inst_620504,inst_620492);var inst_620492__$1 = inst_620505;var state_620520__$1 = (function (){var statearr_620531 = state_620520;(statearr_620531[7] = inst_620492__$1);
return statearr_620531;
})();var statearr_620532_620552 = state_620520__$1;(statearr_620532_620552[2] = null);
(statearr_620532_620552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 9))
{var inst_620500 = (state_620520[8]);var state_620520__$1 = state_620520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620520__$1,11,out,inst_620500);
} else
{if((state_val_620521 === 10))
{var inst_620512 = (state_620520[2]);var state_620520__$1 = state_620520;var statearr_620534_620553 = state_620520__$1;(statearr_620534_620553[2] = inst_620512);
(statearr_620534_620553[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620521 === 11))
{var inst_620492 = (state_620520[7]);var inst_620509 = (state_620520[2]);var tmp620533 = inst_620492;var inst_620492__$1 = tmp620533;var state_620520__$1 = (function (){var statearr_620535 = state_620520;(statearr_620535[11] = inst_620509);
(statearr_620535[7] = inst_620492__$1);
return statearr_620535;
})();var statearr_620536_620554 = state_620520__$1;(statearr_620536_620554[2] = null);
(statearr_620536_620554[1] = 2);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_620540 = (new Array(12));(statearr_620540[0] = state_machine__10214__auto__);
(statearr_620540[1] = 1);
return statearr_620540;
});
var state_machine__10214__auto____1 = (function (state_620520){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_620520);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e620541){if((e620541 instanceof Object))
{var ex__10217__auto__ = e620541;var statearr_620542_620555 = state_620520;(statearr_620542_620555[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e620541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620556 = state_620520;
state_620520 = G__620556;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_620520){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_620520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_620543 = f__10284__auto__.call(null);(statearr_620543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___620544);
return statearr_620543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___620649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_620626){var state_val_620627 = (state_620626[1]);if((state_val_620627 === 1))
{var inst_620603 = 0;var state_620626__$1 = (function (){var statearr_620628 = state_620626;(statearr_620628[7] = inst_620603);
return statearr_620628;
})();var statearr_620629_620650 = state_620626__$1;(statearr_620629_620650[2] = null);
(statearr_620629_620650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 2))
{var inst_620603 = (state_620626[7]);var inst_620605 = (inst_620603 < n);var state_620626__$1 = state_620626;if(cljs.core.truth_(inst_620605))
{var statearr_620630_620651 = state_620626__$1;(statearr_620630_620651[1] = 4);
} else
{var statearr_620631_620652 = state_620626__$1;(statearr_620631_620652[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 3))
{var inst_620623 = (state_620626[2]);var inst_620624 = cljs.core.async.close_BANG_.call(null,out);var state_620626__$1 = (function (){var statearr_620632 = state_620626;(statearr_620632[8] = inst_620623);
return statearr_620632;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_620626__$1,inst_620624);
} else
{if((state_val_620627 === 4))
{var state_620626__$1 = state_620626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_620626__$1,7,ch);
} else
{if((state_val_620627 === 5))
{var state_620626__$1 = state_620626;var statearr_620633_620653 = state_620626__$1;(statearr_620633_620653[2] = null);
(statearr_620633_620653[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 6))
{var inst_620621 = (state_620626[2]);var state_620626__$1 = state_620626;var statearr_620634_620654 = state_620626__$1;(statearr_620634_620654[2] = inst_620621);
(statearr_620634_620654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 7))
{var inst_620608 = (state_620626[9]);var inst_620608__$1 = (state_620626[2]);var inst_620609 = (inst_620608__$1 == null);var inst_620610 = cljs.core.not.call(null,inst_620609);var state_620626__$1 = (function (){var statearr_620635 = state_620626;(statearr_620635[9] = inst_620608__$1);
return statearr_620635;
})();if(inst_620610)
{var statearr_620636_620655 = state_620626__$1;(statearr_620636_620655[1] = 8);
} else
{var statearr_620637_620656 = state_620626__$1;(statearr_620637_620656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 8))
{var inst_620608 = (state_620626[9]);var state_620626__$1 = state_620626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620626__$1,11,out,inst_620608);
} else
{if((state_val_620627 === 9))
{var state_620626__$1 = state_620626;var statearr_620638_620657 = state_620626__$1;(statearr_620638_620657[2] = null);
(statearr_620638_620657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 10))
{var inst_620618 = (state_620626[2]);var state_620626__$1 = state_620626;var statearr_620639_620658 = state_620626__$1;(statearr_620639_620658[2] = inst_620618);
(statearr_620639_620658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620627 === 11))
{var inst_620603 = (state_620626[7]);var inst_620613 = (state_620626[2]);var inst_620614 = (inst_620603 + 1);var inst_620603__$1 = inst_620614;var state_620626__$1 = (function (){var statearr_620640 = state_620626;(statearr_620640[10] = inst_620613);
(statearr_620640[7] = inst_620603__$1);
return statearr_620640;
})();var statearr_620641_620659 = state_620626__$1;(statearr_620641_620659[2] = null);
(statearr_620641_620659[1] = 2);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_620645 = (new Array(11));(statearr_620645[0] = state_machine__10214__auto__);
(statearr_620645[1] = 1);
return statearr_620645;
});
var state_machine__10214__auto____1 = (function (state_620626){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_620626);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e620646){if((e620646 instanceof Object))
{var ex__10217__auto__ = e620646;var statearr_620647_620660 = state_620626;(statearr_620647_620660[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e620646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620661 = state_620626;
state_620626 = G__620661;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_620626){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_620626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_620648 = f__10284__auto__.call(null);(statearr_620648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___620649);
return statearr_620648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___620758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_620733){var state_val_620734 = (state_620733[1]);if((state_val_620734 === 1))
{var inst_620710 = null;var state_620733__$1 = (function (){var statearr_620735 = state_620733;(statearr_620735[7] = inst_620710);
return statearr_620735;
})();var statearr_620736_620759 = state_620733__$1;(statearr_620736_620759[2] = null);
(statearr_620736_620759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 2))
{var state_620733__$1 = state_620733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_620733__$1,4,ch);
} else
{if((state_val_620734 === 3))
{var inst_620730 = (state_620733[2]);var inst_620731 = cljs.core.async.close_BANG_.call(null,out);var state_620733__$1 = (function (){var statearr_620737 = state_620733;(statearr_620737[8] = inst_620730);
return statearr_620737;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_620733__$1,inst_620731);
} else
{if((state_val_620734 === 4))
{var inst_620713 = (state_620733[9]);var inst_620713__$1 = (state_620733[2]);var inst_620714 = (inst_620713__$1 == null);var inst_620715 = cljs.core.not.call(null,inst_620714);var state_620733__$1 = (function (){var statearr_620738 = state_620733;(statearr_620738[9] = inst_620713__$1);
return statearr_620738;
})();if(inst_620715)
{var statearr_620739_620760 = state_620733__$1;(statearr_620739_620760[1] = 5);
} else
{var statearr_620740_620761 = state_620733__$1;(statearr_620740_620761[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 5))
{var inst_620713 = (state_620733[9]);var inst_620710 = (state_620733[7]);var inst_620717 = cljs.core._EQ_.call(null,inst_620713,inst_620710);var state_620733__$1 = state_620733;if(inst_620717)
{var statearr_620741_620762 = state_620733__$1;(statearr_620741_620762[1] = 8);
} else
{var statearr_620742_620763 = state_620733__$1;(statearr_620742_620763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 6))
{var state_620733__$1 = state_620733;var statearr_620744_620764 = state_620733__$1;(statearr_620744_620764[2] = null);
(statearr_620744_620764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 7))
{var inst_620728 = (state_620733[2]);var state_620733__$1 = state_620733;var statearr_620745_620765 = state_620733__$1;(statearr_620745_620765[2] = inst_620728);
(statearr_620745_620765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 8))
{var inst_620710 = (state_620733[7]);var tmp620743 = inst_620710;var inst_620710__$1 = tmp620743;var state_620733__$1 = (function (){var statearr_620746 = state_620733;(statearr_620746[7] = inst_620710__$1);
return statearr_620746;
})();var statearr_620747_620766 = state_620733__$1;(statearr_620747_620766[2] = null);
(statearr_620747_620766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 9))
{var inst_620713 = (state_620733[9]);var state_620733__$1 = state_620733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620733__$1,11,out,inst_620713);
} else
{if((state_val_620734 === 10))
{var inst_620725 = (state_620733[2]);var state_620733__$1 = state_620733;var statearr_620748_620767 = state_620733__$1;(statearr_620748_620767[2] = inst_620725);
(statearr_620748_620767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620734 === 11))
{var inst_620713 = (state_620733[9]);var inst_620722 = (state_620733[2]);var inst_620710 = inst_620713;var state_620733__$1 = (function (){var statearr_620749 = state_620733;(statearr_620749[10] = inst_620722);
(statearr_620749[7] = inst_620710);
return statearr_620749;
})();var statearr_620750_620768 = state_620733__$1;(statearr_620750_620768[2] = null);
(statearr_620750_620768[1] = 2);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_620754 = (new Array(11));(statearr_620754[0] = state_machine__10214__auto__);
(statearr_620754[1] = 1);
return statearr_620754;
});
var state_machine__10214__auto____1 = (function (state_620733){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_620733);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e620755){if((e620755 instanceof Object))
{var ex__10217__auto__ = e620755;var statearr_620756_620769 = state_620733;(statearr_620756_620769[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e620755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620770 = state_620733;
state_620733 = G__620770;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_620733){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_620733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_620757 = f__10284__auto__.call(null);(statearr_620757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___620758);
return statearr_620757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___620905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_620875){var state_val_620876 = (state_620875[1]);if((state_val_620876 === 1))
{var inst_620838 = (new Array(n));var inst_620839 = inst_620838;var inst_620840 = 0;var state_620875__$1 = (function (){var statearr_620877 = state_620875;(statearr_620877[7] = inst_620839);
(statearr_620877[8] = inst_620840);
return statearr_620877;
})();var statearr_620878_620906 = state_620875__$1;(statearr_620878_620906[2] = null);
(statearr_620878_620906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 2))
{var state_620875__$1 = state_620875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_620875__$1,4,ch);
} else
{if((state_val_620876 === 3))
{var inst_620873 = (state_620875[2]);var state_620875__$1 = state_620875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_620875__$1,inst_620873);
} else
{if((state_val_620876 === 4))
{var inst_620843 = (state_620875[9]);var inst_620843__$1 = (state_620875[2]);var inst_620844 = (inst_620843__$1 == null);var inst_620845 = cljs.core.not.call(null,inst_620844);var state_620875__$1 = (function (){var statearr_620879 = state_620875;(statearr_620879[9] = inst_620843__$1);
return statearr_620879;
})();if(inst_620845)
{var statearr_620880_620907 = state_620875__$1;(statearr_620880_620907[1] = 5);
} else
{var statearr_620881_620908 = state_620875__$1;(statearr_620881_620908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 5))
{var inst_620839 = (state_620875[7]);var inst_620843 = (state_620875[9]);var inst_620848 = (state_620875[10]);var inst_620840 = (state_620875[8]);var inst_620847 = (inst_620839[inst_620840] = inst_620843);var inst_620848__$1 = (inst_620840 + 1);var inst_620849 = (inst_620848__$1 < n);var state_620875__$1 = (function (){var statearr_620882 = state_620875;(statearr_620882[10] = inst_620848__$1);
(statearr_620882[11] = inst_620847);
return statearr_620882;
})();if(cljs.core.truth_(inst_620849))
{var statearr_620883_620909 = state_620875__$1;(statearr_620883_620909[1] = 8);
} else
{var statearr_620884_620910 = state_620875__$1;(statearr_620884_620910[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 6))
{var inst_620840 = (state_620875[8]);var inst_620861 = (inst_620840 > 0);var state_620875__$1 = state_620875;if(cljs.core.truth_(inst_620861))
{var statearr_620886_620911 = state_620875__$1;(statearr_620886_620911[1] = 12);
} else
{var statearr_620887_620912 = state_620875__$1;(statearr_620887_620912[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 7))
{var inst_620871 = (state_620875[2]);var state_620875__$1 = state_620875;var statearr_620888_620913 = state_620875__$1;(statearr_620888_620913[2] = inst_620871);
(statearr_620888_620913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 8))
{var inst_620839 = (state_620875[7]);var inst_620848 = (state_620875[10]);var tmp620885 = inst_620839;var inst_620839__$1 = tmp620885;var inst_620840 = inst_620848;var state_620875__$1 = (function (){var statearr_620889 = state_620875;(statearr_620889[7] = inst_620839__$1);
(statearr_620889[8] = inst_620840);
return statearr_620889;
})();var statearr_620890_620914 = state_620875__$1;(statearr_620890_620914[2] = null);
(statearr_620890_620914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 9))
{var inst_620839 = (state_620875[7]);var inst_620853 = cljs.core.vec.call(null,inst_620839);var state_620875__$1 = state_620875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620875__$1,11,out,inst_620853);
} else
{if((state_val_620876 === 10))
{var inst_620859 = (state_620875[2]);var state_620875__$1 = state_620875;var statearr_620891_620915 = state_620875__$1;(statearr_620891_620915[2] = inst_620859);
(statearr_620891_620915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 11))
{var inst_620855 = (state_620875[2]);var inst_620856 = (new Array(n));var inst_620839 = inst_620856;var inst_620840 = 0;var state_620875__$1 = (function (){var statearr_620892 = state_620875;(statearr_620892[12] = inst_620855);
(statearr_620892[7] = inst_620839);
(statearr_620892[8] = inst_620840);
return statearr_620892;
})();var statearr_620893_620916 = state_620875__$1;(statearr_620893_620916[2] = null);
(statearr_620893_620916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 12))
{var inst_620839 = (state_620875[7]);var inst_620863 = cljs.core.vec.call(null,inst_620839);var state_620875__$1 = state_620875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_620875__$1,15,out,inst_620863);
} else
{if((state_val_620876 === 13))
{var state_620875__$1 = state_620875;var statearr_620894_620917 = state_620875__$1;(statearr_620894_620917[2] = null);
(statearr_620894_620917[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 14))
{var inst_620868 = (state_620875[2]);var inst_620869 = cljs.core.async.close_BANG_.call(null,out);var state_620875__$1 = (function (){var statearr_620895 = state_620875;(statearr_620895[13] = inst_620868);
return statearr_620895;
})();var statearr_620896_620918 = state_620875__$1;(statearr_620896_620918[2] = inst_620869);
(statearr_620896_620918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_620876 === 15))
{var inst_620865 = (state_620875[2]);var state_620875__$1 = state_620875;var statearr_620897_620919 = state_620875__$1;(statearr_620897_620919[2] = inst_620865);
(statearr_620897_620919[1] = 14);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_620901 = (new Array(14));(statearr_620901[0] = state_machine__10214__auto__);
(statearr_620901[1] = 1);
return statearr_620901;
});
var state_machine__10214__auto____1 = (function (state_620875){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_620875);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e620902){if((e620902 instanceof Object))
{var ex__10217__auto__ = e620902;var statearr_620903_620920 = state_620875;(statearr_620903_620920[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_620875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e620902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__620921 = state_620875;
state_620875 = G__620921;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_620875){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_620875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_620904 = f__10284__auto__.call(null);(statearr_620904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___620905);
return statearr_620904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___621064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_621034){var state_val_621035 = (state_621034[1]);if((state_val_621035 === 1))
{var inst_620993 = (new Array(0));var inst_620994 = inst_620993;var inst_620995 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_621034__$1 = (function (){var statearr_621036 = state_621034;(statearr_621036[7] = inst_620995);
(statearr_621036[8] = inst_620994);
return statearr_621036;
})();var statearr_621037_621065 = state_621034__$1;(statearr_621037_621065[2] = null);
(statearr_621037_621065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 2))
{var state_621034__$1 = state_621034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_621034__$1,4,ch);
} else
{if((state_val_621035 === 3))
{var inst_621032 = (state_621034[2]);var state_621034__$1 = state_621034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_621034__$1,inst_621032);
} else
{if((state_val_621035 === 4))
{var inst_620998 = (state_621034[9]);var inst_620998__$1 = (state_621034[2]);var inst_620999 = (inst_620998__$1 == null);var inst_621000 = cljs.core.not.call(null,inst_620999);var state_621034__$1 = (function (){var statearr_621038 = state_621034;(statearr_621038[9] = inst_620998__$1);
return statearr_621038;
})();if(inst_621000)
{var statearr_621039_621066 = state_621034__$1;(statearr_621039_621066[1] = 5);
} else
{var statearr_621040_621067 = state_621034__$1;(statearr_621040_621067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 5))
{var inst_621002 = (state_621034[10]);var inst_620998 = (state_621034[9]);var inst_620995 = (state_621034[7]);var inst_621002__$1 = f.call(null,inst_620998);var inst_621003 = cljs.core._EQ_.call(null,inst_621002__$1,inst_620995);var inst_621004 = cljs.core.keyword_identical_QMARK_.call(null,inst_620995,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_621005 = (inst_621003) || (inst_621004);var state_621034__$1 = (function (){var statearr_621041 = state_621034;(statearr_621041[10] = inst_621002__$1);
return statearr_621041;
})();if(cljs.core.truth_(inst_621005))
{var statearr_621042_621068 = state_621034__$1;(statearr_621042_621068[1] = 8);
} else
{var statearr_621043_621069 = state_621034__$1;(statearr_621043_621069[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 6))
{var inst_620994 = (state_621034[8]);var inst_621019 = inst_620994.length;var inst_621020 = (inst_621019 > 0);var state_621034__$1 = state_621034;if(cljs.core.truth_(inst_621020))
{var statearr_621045_621070 = state_621034__$1;(statearr_621045_621070[1] = 12);
} else
{var statearr_621046_621071 = state_621034__$1;(statearr_621046_621071[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 7))
{var inst_621030 = (state_621034[2]);var state_621034__$1 = state_621034;var statearr_621047_621072 = state_621034__$1;(statearr_621047_621072[2] = inst_621030);
(statearr_621047_621072[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 8))
{var inst_621002 = (state_621034[10]);var inst_620998 = (state_621034[9]);var inst_620994 = (state_621034[8]);var inst_621007 = inst_620994.push(inst_620998);var tmp621044 = inst_620994;var inst_620994__$1 = tmp621044;var inst_620995 = inst_621002;var state_621034__$1 = (function (){var statearr_621048 = state_621034;(statearr_621048[11] = inst_621007);
(statearr_621048[7] = inst_620995);
(statearr_621048[8] = inst_620994__$1);
return statearr_621048;
})();var statearr_621049_621073 = state_621034__$1;(statearr_621049_621073[2] = null);
(statearr_621049_621073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 9))
{var inst_620994 = (state_621034[8]);var inst_621010 = cljs.core.vec.call(null,inst_620994);var state_621034__$1 = state_621034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_621034__$1,11,out,inst_621010);
} else
{if((state_val_621035 === 10))
{var inst_621017 = (state_621034[2]);var state_621034__$1 = state_621034;var statearr_621050_621074 = state_621034__$1;(statearr_621050_621074[2] = inst_621017);
(statearr_621050_621074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 11))
{var inst_621002 = (state_621034[10]);var inst_620998 = (state_621034[9]);var inst_621012 = (state_621034[2]);var inst_621013 = (new Array(0));var inst_621014 = inst_621013.push(inst_620998);var inst_620994 = inst_621013;var inst_620995 = inst_621002;var state_621034__$1 = (function (){var statearr_621051 = state_621034;(statearr_621051[12] = inst_621014);
(statearr_621051[13] = inst_621012);
(statearr_621051[7] = inst_620995);
(statearr_621051[8] = inst_620994);
return statearr_621051;
})();var statearr_621052_621075 = state_621034__$1;(statearr_621052_621075[2] = null);
(statearr_621052_621075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 12))
{var inst_620994 = (state_621034[8]);var inst_621022 = cljs.core.vec.call(null,inst_620994);var state_621034__$1 = state_621034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_621034__$1,15,out,inst_621022);
} else
{if((state_val_621035 === 13))
{var state_621034__$1 = state_621034;var statearr_621053_621076 = state_621034__$1;(statearr_621053_621076[2] = null);
(statearr_621053_621076[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 14))
{var inst_621027 = (state_621034[2]);var inst_621028 = cljs.core.async.close_BANG_.call(null,out);var state_621034__$1 = (function (){var statearr_621054 = state_621034;(statearr_621054[14] = inst_621027);
return statearr_621054;
})();var statearr_621055_621077 = state_621034__$1;(statearr_621055_621077[2] = inst_621028);
(statearr_621055_621077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_621035 === 15))
{var inst_621024 = (state_621034[2]);var state_621034__$1 = state_621034;var statearr_621056_621078 = state_621034__$1;(statearr_621056_621078[2] = inst_621024);
(statearr_621056_621078[1] = 14);
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
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_621060 = (new Array(15));(statearr_621060[0] = state_machine__10214__auto__);
(statearr_621060[1] = 1);
return statearr_621060;
});
var state_machine__10214__auto____1 = (function (state_621034){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_621034);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e621061){if((e621061 instanceof Object))
{var ex__10217__auto__ = e621061;var statearr_621062_621079 = state_621034;(statearr_621062_621079[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_621034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e621061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__621080 = state_621034;
state_621034 = G__621080;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_621034){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_621034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_621063 = f__10284__auto__.call(null);(statearr_621063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___621064);
return statearr_621063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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