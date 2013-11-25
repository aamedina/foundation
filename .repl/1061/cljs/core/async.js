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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17857 = (function (f,fn_handler,meta17858){
this.f = f;
this.fn_handler = fn_handler;
this.meta17858 = meta17858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17857.cljs$lang$type = true;
cljs.core.async.t17857.cljs$lang$ctorStr = "cljs.core.async/t17857";
cljs.core.async.t17857.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17857");
});
cljs.core.async.t17857.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17859){var self__ = this;
var _17859__$1 = this;return self__.meta17858;
});
cljs.core.async.t17857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17859,meta17858__$1){var self__ = this;
var _17859__$1 = this;return (new cljs.core.async.t17857(self__.f,self__.fn_handler,meta17858__$1));
});
cljs.core.async.__GT_t17857 = (function __GT_t17857(f__$1,fn_handler__$1,meta17858){return (new cljs.core.async.t17857(f__$1,fn_handler__$1,meta17858));
});
}
return (new cljs.core.async.t17857(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17861 = buff;if(G__17861)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__17861.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17861.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17861);
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
{var val_17862 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17862);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_17862);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__5145__auto__ = ret;if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__5145__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5980__auto___17863 = n;var x_17864 = 0;while(true){
if((x_17864 < n__5980__auto___17863))
{(a[x_17864] = 0);
{
var G__17865 = (x_17864 + 1);
x_17864 = G__17865;
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
var G__17866 = (i + 1);
i = G__17866;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17870 = (function (flag,alt_flag,meta17871){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17871 = meta17871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17870.cljs$lang$type = true;
cljs.core.async.t17870.cljs$lang$ctorStr = "cljs.core.async/t17870";
cljs.core.async.t17870.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17870");
});
cljs.core.async.t17870.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t17870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t17870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17872){var self__ = this;
var _17872__$1 = this;return self__.meta17871;
});
cljs.core.async.t17870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17872,meta17871__$1){var self__ = this;
var _17872__$1 = this;return (new cljs.core.async.t17870(self__.flag,self__.alt_flag,meta17871__$1));
});
cljs.core.async.__GT_t17870 = (function __GT_t17870(flag__$1,alt_flag__$1,meta17871){return (new cljs.core.async.t17870(flag__$1,alt_flag__$1,meta17871));
});
}
return (new cljs.core.async.t17870(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17876 = (function (cb,flag,alt_handler,meta17877){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17877 = meta17877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17876.cljs$lang$type = true;
cljs.core.async.t17876.cljs$lang$ctorStr = "cljs.core.async/t17876";
cljs.core.async.t17876.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17876");
});
cljs.core.async.t17876.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17878){var self__ = this;
var _17878__$1 = this;return self__.meta17877;
});
cljs.core.async.t17876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17878,meta17877__$1){var self__ = this;
var _17878__$1 = this;return (new cljs.core.async.t17876(self__.cb,self__.flag,self__.alt_handler,meta17877__$1));
});
cljs.core.async.__GT_t17876 = (function __GT_t17876(cb__$1,flag__$1,alt_handler__$1,meta17877){return (new cljs.core.async.t17876(cb__$1,flag__$1,alt_handler__$1,meta17877));
});
}
return (new cljs.core.async.t17876(cb,flag,alt_handler,null));
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
return (function (p1__17879_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17879_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5157__auto__ = wport;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17880 = (i + 1);
i = G__17880;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5157__auto__ = ret;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__5145__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__5145__auto__;
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
var alts_BANG___delegate = function (ports,p__17881){var map__17883 = p__17881;var map__17883__$1 = ((cljs.core.seq_QMARK_.call(null,map__17883))?cljs.core.apply.call(null,cljs.core.hash_map,map__17883):map__17883);var opts = map__17883__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17881 = null;if (arguments.length > 1) {
  p__17881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17881);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17884){
var ports = cljs.core.first(arglist__17884);
var p__17881 = cljs.core.rest(arglist__17884);
return alts_BANG___delegate(ports,p__17881);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17892 = (function (ch,f,map_LT_,meta17893){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17893 = meta17893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17892.cljs$lang$type = true;
cljs.core.async.t17892.cljs$lang$ctorStr = "cljs.core.async/t17892";
cljs.core.async.t17892.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17892");
});
cljs.core.async.t17892.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t17892.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17895 = (function (fn1,_,meta17893,ch,f,map_LT_,meta17896){
this.fn1 = fn1;
this._ = _;
this.meta17893 = meta17893;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17896 = meta17896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17895.cljs$lang$type = true;
cljs.core.async.t17895.cljs$lang$ctorStr = "cljs.core.async/t17895";
cljs.core.async.t17895.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17895");
});
cljs.core.async.t17895.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t17895.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t17895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__17885_SHARP_){return f1.call(null,(((p1__17885_SHARP_ == null))?null:self__.f.call(null,p1__17885_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t17895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17897){var self__ = this;
var _17897__$1 = this;return self__.meta17896;
});
cljs.core.async.t17895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17897,meta17896__$1){var self__ = this;
var _17897__$1 = this;return (new cljs.core.async.t17895(self__.fn1,self__._,self__.meta17893,self__.ch,self__.f,self__.map_LT_,meta17896__$1));
});
cljs.core.async.__GT_t17895 = (function __GT_t17895(fn1__$1,___$2,meta17893__$1,ch__$2,f__$2,map_LT___$2,meta17896){return (new cljs.core.async.t17895(fn1__$1,___$2,meta17893__$1,ch__$2,f__$2,map_LT___$2,meta17896));
});
}
return (new cljs.core.async.t17895(fn1,___$1,self__.meta17893,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__5145__auto__ = ret;if(cljs.core.truth_(and__5145__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__5145__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17892.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17894){var self__ = this;
var _17894__$1 = this;return self__.meta17893;
});
cljs.core.async.t17892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17894,meta17893__$1){var self__ = this;
var _17894__$1 = this;return (new cljs.core.async.t17892(self__.ch,self__.f,self__.map_LT_,meta17893__$1));
});
cljs.core.async.__GT_t17892 = (function __GT_t17892(ch__$1,f__$1,map_LT___$1,meta17893){return (new cljs.core.async.t17892(ch__$1,f__$1,map_LT___$1,meta17893));
});
}
return (new cljs.core.async.t17892(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17901 = (function (ch,f,map_GT_,meta17902){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17902 = meta17902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17901.cljs$lang$type = true;
cljs.core.async.t17901.cljs$lang$ctorStr = "cljs.core.async/t17901";
cljs.core.async.t17901.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17901");
});
cljs.core.async.t17901.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t17901.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17901.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17903){var self__ = this;
var _17903__$1 = this;return self__.meta17902;
});
cljs.core.async.t17901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17903,meta17902__$1){var self__ = this;
var _17903__$1 = this;return (new cljs.core.async.t17901(self__.ch,self__.f,self__.map_GT_,meta17902__$1));
});
cljs.core.async.__GT_t17901 = (function __GT_t17901(ch__$1,f__$1,map_GT___$1,meta17902){return (new cljs.core.async.t17901(ch__$1,f__$1,map_GT___$1,meta17902));
});
}
return (new cljs.core.async.t17901(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17907 = (function (ch,p,filter_GT_,meta17908){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17908 = meta17908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17907.cljs$lang$type = true;
cljs.core.async.t17907.cljs$lang$ctorStr = "cljs.core.async/t17907";
cljs.core.async.t17907.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t17907");
});
cljs.core.async.t17907.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t17907.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17907.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17909){var self__ = this;
var _17909__$1 = this;return self__.meta17908;
});
cljs.core.async.t17907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17909,meta17908__$1){var self__ = this;
var _17909__$1 = this;return (new cljs.core.async.t17907(self__.ch,self__.p,self__.filter_GT_,meta17908__$1));
});
cljs.core.async.__GT_t17907 = (function __GT_t17907(ch__$1,p__$1,filter_GT___$1,meta17908){return (new cljs.core.async.t17907(ch__$1,p__$1,filter_GT___$1,meta17908));
});
}
return (new cljs.core.async.t17907(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___17992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_17971){var state_val_17972 = (state_17971[1]);if((state_val_17972 === 1))
{var state_17971__$1 = state_17971;var statearr_17973_17993 = state_17971__$1;(statearr_17973_17993[2] = null);
(statearr_17973_17993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 2))
{var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17971__$1,4,ch);
} else
{if((state_val_17972 === 3))
{var inst_17969 = (state_17971[2]);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17971__$1,inst_17969);
} else
{if((state_val_17972 === 4))
{var inst_17953 = (state_17971[7]);var inst_17953__$1 = (state_17971[2]);var inst_17954 = (inst_17953__$1 == null);var state_17971__$1 = (function (){var statearr_17974 = state_17971;(statearr_17974[7] = inst_17953__$1);
return statearr_17974;
})();if(cljs.core.truth_(inst_17954))
{var statearr_17975_17994 = state_17971__$1;(statearr_17975_17994[1] = 5);
} else
{var statearr_17976_17995 = state_17971__$1;(statearr_17976_17995[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 5))
{var inst_17956 = cljs.core.async.close_BANG_.call(null,out);var state_17971__$1 = state_17971;var statearr_17977_17996 = state_17971__$1;(statearr_17977_17996[2] = inst_17956);
(statearr_17977_17996[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 6))
{var inst_17953 = (state_17971[7]);var inst_17958 = p.call(null,inst_17953);var state_17971__$1 = state_17971;if(cljs.core.truth_(inst_17958))
{var statearr_17978_17997 = state_17971__$1;(statearr_17978_17997[1] = 8);
} else
{var statearr_17979_17998 = state_17971__$1;(statearr_17979_17998[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 7))
{var inst_17967 = (state_17971[2]);var state_17971__$1 = state_17971;var statearr_17980_17999 = state_17971__$1;(statearr_17980_17999[2] = inst_17967);
(statearr_17980_17999[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 8))
{var inst_17953 = (state_17971[7]);var state_17971__$1 = state_17971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17971__$1,11,out,inst_17953);
} else
{if((state_val_17972 === 9))
{var state_17971__$1 = state_17971;var statearr_17981_18000 = state_17971__$1;(statearr_17981_18000[2] = null);
(statearr_17981_18000[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 10))
{var inst_17964 = (state_17971[2]);var state_17971__$1 = (function (){var statearr_17982 = state_17971;(statearr_17982[8] = inst_17964);
return statearr_17982;
})();var statearr_17983_18001 = state_17971__$1;(statearr_17983_18001[2] = null);
(statearr_17983_18001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17972 === 11))
{var inst_17961 = (state_17971[2]);var state_17971__$1 = state_17971;var statearr_17984_18002 = state_17971__$1;(statearr_17984_18002[2] = inst_17961);
(statearr_17984_18002[1] = 10);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_17988 = (new Array(9));(statearr_17988[0] = state_machine__12403__auto__);
(statearr_17988[1] = 1);
return statearr_17988;
});
var state_machine__12403__auto____1 = (function (state_17971){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_17971);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e17989){if((e17989 instanceof Object))
{var ex__12406__auto__ = e17989;var statearr_17990_18003 = state_17971;(statearr_17990_18003[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18004 = state_17971;
state_17971 = G__18004;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_17971){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_17971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_17991 = f__12478__auto__.call(null);(statearr_17991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___17992);
return statearr_17991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_18156){var state_val_18157 = (state_18156[1]);if((state_val_18157 === 1))
{var state_18156__$1 = state_18156;var statearr_18158_18195 = state_18156__$1;(statearr_18158_18195[2] = null);
(statearr_18158_18195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 2))
{var state_18156__$1 = state_18156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18156__$1,4,in$);
} else
{if((state_val_18157 === 3))
{var inst_18154 = (state_18156[2]);var state_18156__$1 = state_18156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18156__$1,inst_18154);
} else
{if((state_val_18157 === 4))
{var inst_18102 = (state_18156[7]);var inst_18102__$1 = (state_18156[2]);var inst_18103 = (inst_18102__$1 == null);var state_18156__$1 = (function (){var statearr_18159 = state_18156;(statearr_18159[7] = inst_18102__$1);
return statearr_18159;
})();if(cljs.core.truth_(inst_18103))
{var statearr_18160_18196 = state_18156__$1;(statearr_18160_18196[1] = 5);
} else
{var statearr_18161_18197 = state_18156__$1;(statearr_18161_18197[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 5))
{var inst_18105 = cljs.core.async.close_BANG_.call(null,out);var state_18156__$1 = state_18156;var statearr_18162_18198 = state_18156__$1;(statearr_18162_18198[2] = inst_18105);
(statearr_18162_18198[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 6))
{var inst_18102 = (state_18156[7]);var inst_18107 = f.call(null,inst_18102);var inst_18112 = cljs.core.seq.call(null,inst_18107);var inst_18113 = inst_18112;var inst_18114 = null;var inst_18115 = 0;var inst_18116 = 0;var state_18156__$1 = (function (){var statearr_18163 = state_18156;(statearr_18163[8] = inst_18116);
(statearr_18163[9] = inst_18114);
(statearr_18163[10] = inst_18115);
(statearr_18163[11] = inst_18113);
return statearr_18163;
})();var statearr_18164_18199 = state_18156__$1;(statearr_18164_18199[2] = null);
(statearr_18164_18199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 7))
{var inst_18152 = (state_18156[2]);var state_18156__$1 = state_18156;var statearr_18165_18200 = state_18156__$1;(statearr_18165_18200[2] = inst_18152);
(statearr_18165_18200[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 8))
{var inst_18116 = (state_18156[8]);var inst_18115 = (state_18156[10]);var inst_18118 = (inst_18116 < inst_18115);var inst_18119 = inst_18118;var state_18156__$1 = state_18156;if(cljs.core.truth_(inst_18119))
{var statearr_18166_18201 = state_18156__$1;(statearr_18166_18201[1] = 10);
} else
{var statearr_18167_18202 = state_18156__$1;(statearr_18167_18202[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 9))
{var inst_18149 = (state_18156[2]);var state_18156__$1 = (function (){var statearr_18168 = state_18156;(statearr_18168[12] = inst_18149);
return statearr_18168;
})();var statearr_18169_18203 = state_18156__$1;(statearr_18169_18203[2] = null);
(statearr_18169_18203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 10))
{var inst_18116 = (state_18156[8]);var inst_18114 = (state_18156[9]);var inst_18121 = cljs.core._nth.call(null,inst_18114,inst_18116);var state_18156__$1 = state_18156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18156__$1,13,out,inst_18121);
} else
{if((state_val_18157 === 11))
{var inst_18127 = (state_18156[13]);var inst_18113 = (state_18156[11]);var inst_18127__$1 = cljs.core.seq.call(null,inst_18113);var state_18156__$1 = (function (){var statearr_18173 = state_18156;(statearr_18173[13] = inst_18127__$1);
return statearr_18173;
})();if(inst_18127__$1)
{var statearr_18174_18204 = state_18156__$1;(statearr_18174_18204[1] = 14);
} else
{var statearr_18175_18205 = state_18156__$1;(statearr_18175_18205[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 12))
{var inst_18147 = (state_18156[2]);var state_18156__$1 = state_18156;var statearr_18176_18206 = state_18156__$1;(statearr_18176_18206[2] = inst_18147);
(statearr_18176_18206[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 13))
{var inst_18116 = (state_18156[8]);var inst_18114 = (state_18156[9]);var inst_18115 = (state_18156[10]);var inst_18113 = (state_18156[11]);var inst_18123 = (state_18156[2]);var inst_18124 = (inst_18116 + 1);var tmp18170 = inst_18114;var tmp18171 = inst_18115;var tmp18172 = inst_18113;var inst_18113__$1 = tmp18172;var inst_18114__$1 = tmp18170;var inst_18115__$1 = tmp18171;var inst_18116__$1 = inst_18124;var state_18156__$1 = (function (){var statearr_18177 = state_18156;(statearr_18177[14] = inst_18123);
(statearr_18177[8] = inst_18116__$1);
(statearr_18177[9] = inst_18114__$1);
(statearr_18177[10] = inst_18115__$1);
(statearr_18177[11] = inst_18113__$1);
return statearr_18177;
})();var statearr_18178_18207 = state_18156__$1;(statearr_18178_18207[2] = null);
(statearr_18178_18207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 14))
{var inst_18127 = (state_18156[13]);var inst_18129 = cljs.core.chunked_seq_QMARK_.call(null,inst_18127);var state_18156__$1 = state_18156;if(inst_18129)
{var statearr_18179_18208 = state_18156__$1;(statearr_18179_18208[1] = 17);
} else
{var statearr_18180_18209 = state_18156__$1;(statearr_18180_18209[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 15))
{var state_18156__$1 = state_18156;var statearr_18181_18210 = state_18156__$1;(statearr_18181_18210[2] = null);
(statearr_18181_18210[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 16))
{var inst_18145 = (state_18156[2]);var state_18156__$1 = state_18156;var statearr_18182_18211 = state_18156__$1;(statearr_18182_18211[2] = inst_18145);
(statearr_18182_18211[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 17))
{var inst_18127 = (state_18156[13]);var inst_18131 = cljs.core.chunk_first.call(null,inst_18127);var inst_18132 = cljs.core.chunk_rest.call(null,inst_18127);var inst_18133 = cljs.core.count.call(null,inst_18131);var inst_18113 = inst_18132;var inst_18114 = inst_18131;var inst_18115 = inst_18133;var inst_18116 = 0;var state_18156__$1 = (function (){var statearr_18183 = state_18156;(statearr_18183[8] = inst_18116);
(statearr_18183[9] = inst_18114);
(statearr_18183[10] = inst_18115);
(statearr_18183[11] = inst_18113);
return statearr_18183;
})();var statearr_18184_18212 = state_18156__$1;(statearr_18184_18212[2] = null);
(statearr_18184_18212[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 18))
{var inst_18127 = (state_18156[13]);var inst_18136 = cljs.core.first.call(null,inst_18127);var state_18156__$1 = state_18156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18156__$1,20,out,inst_18136);
} else
{if((state_val_18157 === 19))
{var inst_18142 = (state_18156[2]);var state_18156__$1 = state_18156;var statearr_18185_18213 = state_18156__$1;(statearr_18185_18213[2] = inst_18142);
(statearr_18185_18213[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18157 === 20))
{var inst_18127 = (state_18156[13]);var inst_18138 = (state_18156[2]);var inst_18139 = cljs.core.next.call(null,inst_18127);var inst_18113 = inst_18139;var inst_18114 = null;var inst_18115 = 0;var inst_18116 = 0;var state_18156__$1 = (function (){var statearr_18186 = state_18156;(statearr_18186[15] = inst_18138);
(statearr_18186[8] = inst_18116);
(statearr_18186[9] = inst_18114);
(statearr_18186[10] = inst_18115);
(statearr_18186[11] = inst_18113);
return statearr_18186;
})();var statearr_18187_18214 = state_18156__$1;(statearr_18187_18214[2] = null);
(statearr_18187_18214[1] = 8);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_18191 = (new Array(16));(statearr_18191[0] = state_machine__12403__auto__);
(statearr_18191[1] = 1);
return statearr_18191;
});
var state_machine__12403__auto____1 = (function (state_18156){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_18156);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e18192){if((e18192 instanceof Object))
{var ex__12406__auto__ = e18192;var statearr_18193_18215 = state_18156;(statearr_18193_18215[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18156);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18216 = state_18156;
state_18156 = G__18216;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_18156){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_18156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_18194 = f__12478__auto__.call(null);(statearr_18194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_18194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
}));
return c__12477__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12477__auto___18297 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_18276){var state_val_18277 = (state_18276[1]);if((state_val_18277 === 1))
{var state_18276__$1 = state_18276;var statearr_18278_18298 = state_18276__$1;(statearr_18278_18298[2] = null);
(statearr_18278_18298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 2))
{var state_18276__$1 = state_18276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18276__$1,4,from);
} else
{if((state_val_18277 === 3))
{var inst_18274 = (state_18276[2]);var state_18276__$1 = state_18276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18276__$1,inst_18274);
} else
{if((state_val_18277 === 4))
{var inst_18259 = (state_18276[7]);var inst_18259__$1 = (state_18276[2]);var inst_18260 = (inst_18259__$1 == null);var state_18276__$1 = (function (){var statearr_18279 = state_18276;(statearr_18279[7] = inst_18259__$1);
return statearr_18279;
})();if(cljs.core.truth_(inst_18260))
{var statearr_18280_18299 = state_18276__$1;(statearr_18280_18299[1] = 5);
} else
{var statearr_18281_18300 = state_18276__$1;(statearr_18281_18300[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 5))
{var state_18276__$1 = state_18276;if(cljs.core.truth_(close_QMARK_))
{var statearr_18282_18301 = state_18276__$1;(statearr_18282_18301[1] = 8);
} else
{var statearr_18283_18302 = state_18276__$1;(statearr_18283_18302[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 6))
{var inst_18259 = (state_18276[7]);var state_18276__$1 = state_18276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18276__$1,11,to,inst_18259);
} else
{if((state_val_18277 === 7))
{var inst_18272 = (state_18276[2]);var state_18276__$1 = state_18276;var statearr_18284_18303 = state_18276__$1;(statearr_18284_18303[2] = inst_18272);
(statearr_18284_18303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 8))
{var inst_18263 = cljs.core.async.close_BANG_.call(null,to);var state_18276__$1 = state_18276;var statearr_18285_18304 = state_18276__$1;(statearr_18285_18304[2] = inst_18263);
(statearr_18285_18304[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 9))
{var state_18276__$1 = state_18276;var statearr_18286_18305 = state_18276__$1;(statearr_18286_18305[2] = null);
(statearr_18286_18305[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 10))
{var inst_18266 = (state_18276[2]);var state_18276__$1 = state_18276;var statearr_18287_18306 = state_18276__$1;(statearr_18287_18306[2] = inst_18266);
(statearr_18287_18306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18277 === 11))
{var inst_18269 = (state_18276[2]);var state_18276__$1 = (function (){var statearr_18288 = state_18276;(statearr_18288[8] = inst_18269);
return statearr_18288;
})();var statearr_18289_18307 = state_18276__$1;(statearr_18289_18307[2] = null);
(statearr_18289_18307[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_18293 = (new Array(9));(statearr_18293[0] = state_machine__12403__auto__);
(statearr_18293[1] = 1);
return statearr_18293;
});
var state_machine__12403__auto____1 = (function (state_18276){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_18276);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e18294){if((e18294 instanceof Object))
{var ex__12406__auto__ = e18294;var statearr_18295_18308 = state_18276;(statearr_18295_18308[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18276);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18294;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18309 = state_18276;
state_18276 = G__18309;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_18276){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_18276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_18296 = f__12478__auto__.call(null);(statearr_18296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___18297);
return statearr_18296;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12477__auto___18396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_18374){var state_val_18375 = (state_18374[1]);if((state_val_18375 === 1))
{var state_18374__$1 = state_18374;var statearr_18376_18397 = state_18374__$1;(statearr_18376_18397[2] = null);
(statearr_18376_18397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 2))
{var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18374__$1,4,ch);
} else
{if((state_val_18375 === 3))
{var inst_18372 = (state_18374[2]);var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18374__$1,inst_18372);
} else
{if((state_val_18375 === 4))
{var inst_18355 = (state_18374[7]);var inst_18355__$1 = (state_18374[2]);var inst_18356 = (inst_18355__$1 == null);var state_18374__$1 = (function (){var statearr_18377 = state_18374;(statearr_18377[7] = inst_18355__$1);
return statearr_18377;
})();if(cljs.core.truth_(inst_18356))
{var statearr_18378_18398 = state_18374__$1;(statearr_18378_18398[1] = 5);
} else
{var statearr_18379_18399 = state_18374__$1;(statearr_18379_18399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 5))
{var inst_18358 = cljs.core.async.close_BANG_.call(null,tc);var inst_18359 = cljs.core.async.close_BANG_.call(null,fc);var state_18374__$1 = (function (){var statearr_18380 = state_18374;(statearr_18380[8] = inst_18358);
return statearr_18380;
})();var statearr_18381_18400 = state_18374__$1;(statearr_18381_18400[2] = inst_18359);
(statearr_18381_18400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 6))
{var inst_18355 = (state_18374[7]);var inst_18361 = p.call(null,inst_18355);var state_18374__$1 = state_18374;if(cljs.core.truth_(inst_18361))
{var statearr_18382_18401 = state_18374__$1;(statearr_18382_18401[1] = 9);
} else
{var statearr_18383_18402 = state_18374__$1;(statearr_18383_18402[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 7))
{var inst_18370 = (state_18374[2]);var state_18374__$1 = state_18374;var statearr_18384_18403 = state_18374__$1;(statearr_18384_18403[2] = inst_18370);
(statearr_18384_18403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 8))
{var inst_18367 = (state_18374[2]);var state_18374__$1 = (function (){var statearr_18385 = state_18374;(statearr_18385[9] = inst_18367);
return statearr_18385;
})();var statearr_18386_18404 = state_18374__$1;(statearr_18386_18404[2] = null);
(statearr_18386_18404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 9))
{var state_18374__$1 = state_18374;var statearr_18387_18405 = state_18374__$1;(statearr_18387_18405[2] = tc);
(statearr_18387_18405[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 10))
{var state_18374__$1 = state_18374;var statearr_18388_18406 = state_18374__$1;(statearr_18388_18406[2] = fc);
(statearr_18388_18406[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 11))
{var inst_18355 = (state_18374[7]);var inst_18365 = (state_18374[2]);var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18374__$1,8,inst_18365,inst_18355);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_18392 = (new Array(10));(statearr_18392[0] = state_machine__12403__auto__);
(statearr_18392[1] = 1);
return statearr_18392;
});
var state_machine__12403__auto____1 = (function (state_18374){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_18374);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e18393){if((e18393 instanceof Object))
{var ex__12406__auto__ = e18393;var statearr_18394_18407 = state_18374;(statearr_18394_18407[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18408 = state_18374;
state_18374 = G__18408;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_18374){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_18374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_18395 = f__12478__auto__.call(null);(statearr_18395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___18396);
return statearr_18395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_18455){var state_val_18456 = (state_18455[1]);if((state_val_18456 === 7))
{var inst_18451 = (state_18455[2]);var state_18455__$1 = state_18455;var statearr_18457_18473 = state_18455__$1;(statearr_18457_18473[2] = inst_18451);
(statearr_18457_18473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18456 === 6))
{var inst_18444 = (state_18455[7]);var inst_18441 = (state_18455[8]);var inst_18448 = f.call(null,inst_18441,inst_18444);var inst_18441__$1 = inst_18448;var state_18455__$1 = (function (){var statearr_18458 = state_18455;(statearr_18458[8] = inst_18441__$1);
return statearr_18458;
})();var statearr_18459_18474 = state_18455__$1;(statearr_18459_18474[2] = null);
(statearr_18459_18474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18456 === 5))
{var inst_18441 = (state_18455[8]);var state_18455__$1 = state_18455;var statearr_18460_18475 = state_18455__$1;(statearr_18460_18475[2] = inst_18441);
(statearr_18460_18475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18456 === 4))
{var inst_18444 = (state_18455[7]);var inst_18444__$1 = (state_18455[2]);var inst_18445 = (inst_18444__$1 == null);var state_18455__$1 = (function (){var statearr_18461 = state_18455;(statearr_18461[7] = inst_18444__$1);
return statearr_18461;
})();if(cljs.core.truth_(inst_18445))
{var statearr_18462_18476 = state_18455__$1;(statearr_18462_18476[1] = 5);
} else
{var statearr_18463_18477 = state_18455__$1;(statearr_18463_18477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18456 === 3))
{var inst_18453 = (state_18455[2]);var state_18455__$1 = state_18455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18455__$1,inst_18453);
} else
{if((state_val_18456 === 2))
{var state_18455__$1 = state_18455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18455__$1,4,ch);
} else
{if((state_val_18456 === 1))
{var inst_18441 = init;var state_18455__$1 = (function (){var statearr_18464 = state_18455;(statearr_18464[8] = inst_18441);
return statearr_18464;
})();var statearr_18465_18478 = state_18455__$1;(statearr_18465_18478[2] = null);
(statearr_18465_18478[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_18469 = (new Array(9));(statearr_18469[0] = state_machine__12403__auto__);
(statearr_18469[1] = 1);
return statearr_18469;
});
var state_machine__12403__auto____1 = (function (state_18455){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_18455);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e18470){if((e18470 instanceof Object))
{var ex__12406__auto__ = e18470;var statearr_18471_18479 = state_18455;(statearr_18471_18479[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18480 = state_18455;
state_18455 = G__18480;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_18455){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_18455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_18472 = f__12478__auto__.call(null);(statearr_18472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_18472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
}));
return c__12477__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_18542){var state_val_18543 = (state_18542[1]);if((state_val_18543 === 1))
{var inst_18522 = cljs.core.seq.call(null,coll);var inst_18523 = inst_18522;var state_18542__$1 = (function (){var statearr_18544 = state_18542;(statearr_18544[7] = inst_18523);
return statearr_18544;
})();var statearr_18545_18563 = state_18542__$1;(statearr_18545_18563[2] = null);
(statearr_18545_18563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 2))
{var inst_18523 = (state_18542[7]);var state_18542__$1 = state_18542;if(cljs.core.truth_(inst_18523))
{var statearr_18546_18564 = state_18542__$1;(statearr_18546_18564[1] = 4);
} else
{var statearr_18547_18565 = state_18542__$1;(statearr_18547_18565[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 3))
{var inst_18540 = (state_18542[2]);var state_18542__$1 = state_18542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18542__$1,inst_18540);
} else
{if((state_val_18543 === 4))
{var inst_18523 = (state_18542[7]);var inst_18526 = cljs.core.first.call(null,inst_18523);var state_18542__$1 = state_18542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18542__$1,7,ch,inst_18526);
} else
{if((state_val_18543 === 5))
{var state_18542__$1 = state_18542;if(cljs.core.truth_(close_QMARK_))
{var statearr_18548_18566 = state_18542__$1;(statearr_18548_18566[1] = 8);
} else
{var statearr_18549_18567 = state_18542__$1;(statearr_18549_18567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 6))
{var inst_18538 = (state_18542[2]);var state_18542__$1 = state_18542;var statearr_18550_18568 = state_18542__$1;(statearr_18550_18568[2] = inst_18538);
(statearr_18550_18568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 7))
{var inst_18523 = (state_18542[7]);var inst_18528 = (state_18542[2]);var inst_18529 = cljs.core.next.call(null,inst_18523);var inst_18523__$1 = inst_18529;var state_18542__$1 = (function (){var statearr_18551 = state_18542;(statearr_18551[7] = inst_18523__$1);
(statearr_18551[8] = inst_18528);
return statearr_18551;
})();var statearr_18552_18569 = state_18542__$1;(statearr_18552_18569[2] = null);
(statearr_18552_18569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 8))
{var inst_18533 = cljs.core.async.close_BANG_.call(null,ch);var state_18542__$1 = state_18542;var statearr_18553_18570 = state_18542__$1;(statearr_18553_18570[2] = inst_18533);
(statearr_18553_18570[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 9))
{var state_18542__$1 = state_18542;var statearr_18554_18571 = state_18542__$1;(statearr_18554_18571[2] = null);
(statearr_18554_18571[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18543 === 10))
{var inst_18536 = (state_18542[2]);var state_18542__$1 = state_18542;var statearr_18555_18572 = state_18542__$1;(statearr_18555_18572[2] = inst_18536);
(statearr_18555_18572[1] = 6);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_18559 = (new Array(9));(statearr_18559[0] = state_machine__12403__auto__);
(statearr_18559[1] = 1);
return statearr_18559;
});
var state_machine__12403__auto____1 = (function (state_18542){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_18542);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e18560){if((e18560 instanceof Object))
{var ex__12406__auto__ = e18560;var statearr_18561_18573 = state_18542;(statearr_18561_18573[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18574 = state_18542;
state_18542 = G__18574;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_18542){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_18542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_18562 = f__12478__auto__.call(null);(statearr_18562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_18562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
}));
return c__12477__auto__;
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
cljs.core.async.Mux = (function (){var obj18576 = {};return obj18576;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__5145__auto__ = _;if(and__5145__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5760__auto__ = (((_ == null))?null:_);return (function (){var or__5157__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18578 = {};return obj18578;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18793 = (function (cs,ch,mult,meta18794){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18794 = meta18794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18793.cljs$lang$type = true;
cljs.core.async.t18793.cljs$lang$ctorStr = "cljs.core.async/t18793";
cljs.core.async.t18793.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18793");
});})(cs))
;
cljs.core.async.t18793.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18793.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18793.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18793.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18793.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18795){var self__ = this;
var _18795__$1 = this;return self__.meta18794;
});})(cs))
;
cljs.core.async.t18793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18795,meta18794__$1){var self__ = this;
var _18795__$1 = this;return (new cljs.core.async.t18793(self__.cs,self__.ch,self__.mult,meta18794__$1));
});})(cs))
;
cljs.core.async.__GT_t18793 = ((function (cs){
return (function __GT_t18793(cs__$1,ch__$1,mult__$1,meta18794){return (new cljs.core.async.t18793(cs__$1,ch__$1,mult__$1,meta18794));
});})(cs))
;
}
return (new cljs.core.async.t18793(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12477__auto___19007 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_18925){var state_val_18926 = (state_18925[1]);if((state_val_18926 === 32))
{var inst_18798 = (state_18925[7]);var inst_18874 = (state_18925[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18925,31,Object,null,30);var inst_18881 = cljs.core.async.put_BANG_.call(null,inst_18874,inst_18798,done);var state_18925__$1 = state_18925;var statearr_18927_19008 = state_18925__$1;(statearr_18927_19008[2] = inst_18881);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 1))
{var state_18925__$1 = state_18925;var statearr_18928_19009 = state_18925__$1;(statearr_18928_19009[2] = null);
(statearr_18928_19009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 33))
{var inst_18887 = (state_18925[9]);var inst_18889 = cljs.core.chunked_seq_QMARK_.call(null,inst_18887);var state_18925__$1 = state_18925;if(inst_18889)
{var statearr_18929_19010 = state_18925__$1;(statearr_18929_19010[1] = 36);
} else
{var statearr_18930_19011 = state_18925__$1;(statearr_18930_19011[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 2))
{var state_18925__$1 = state_18925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18925__$1,4,ch);
} else
{if((state_val_18926 === 34))
{var state_18925__$1 = state_18925;var statearr_18931_19012 = state_18925__$1;(statearr_18931_19012[2] = null);
(statearr_18931_19012[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 3))
{var inst_18923 = (state_18925[2]);var state_18925__$1 = state_18925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18925__$1,inst_18923);
} else
{if((state_val_18926 === 35))
{var inst_18912 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18932_19013 = state_18925__$1;(statearr_18932_19013[2] = inst_18912);
(statearr_18932_19013[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 4))
{var inst_18798 = (state_18925[7]);var inst_18798__$1 = (state_18925[2]);var inst_18799 = (inst_18798__$1 == null);var state_18925__$1 = (function (){var statearr_18933 = state_18925;(statearr_18933[7] = inst_18798__$1);
return statearr_18933;
})();if(cljs.core.truth_(inst_18799))
{var statearr_18934_19014 = state_18925__$1;(statearr_18934_19014[1] = 5);
} else
{var statearr_18935_19015 = state_18925__$1;(statearr_18935_19015[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 36))
{var inst_18887 = (state_18925[9]);var inst_18891 = cljs.core.chunk_first.call(null,inst_18887);var inst_18892 = cljs.core.chunk_rest.call(null,inst_18887);var inst_18893 = cljs.core.count.call(null,inst_18891);var inst_18866 = inst_18892;var inst_18867 = inst_18891;var inst_18868 = inst_18893;var inst_18869 = 0;var state_18925__$1 = (function (){var statearr_18936 = state_18925;(statearr_18936[10] = inst_18869);
(statearr_18936[11] = inst_18868);
(statearr_18936[12] = inst_18867);
(statearr_18936[13] = inst_18866);
return statearr_18936;
})();var statearr_18937_19016 = state_18925__$1;(statearr_18937_19016[2] = null);
(statearr_18937_19016[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 5))
{var inst_18805 = cljs.core.deref.call(null,cs);var inst_18806 = cljs.core.seq.call(null,inst_18805);var inst_18807 = inst_18806;var inst_18808 = null;var inst_18809 = 0;var inst_18810 = 0;var state_18925__$1 = (function (){var statearr_18938 = state_18925;(statearr_18938[14] = inst_18807);
(statearr_18938[15] = inst_18810);
(statearr_18938[16] = inst_18809);
(statearr_18938[17] = inst_18808);
return statearr_18938;
})();var statearr_18939_19017 = state_18925__$1;(statearr_18939_19017[2] = null);
(statearr_18939_19017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 37))
{var inst_18887 = (state_18925[9]);var inst_18896 = cljs.core.first.call(null,inst_18887);var state_18925__$1 = (function (){var statearr_18940 = state_18925;(statearr_18940[18] = inst_18896);
return statearr_18940;
})();var statearr_18941_19018 = state_18925__$1;(statearr_18941_19018[2] = null);
(statearr_18941_19018[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 6))
{var inst_18857 = cljs.core.deref.call(null,cs);var inst_18858 = cljs.core.keys.call(null,inst_18857);var inst_18859 = cljs.core.count.call(null,inst_18858);var inst_18860 = cljs.core.reset_BANG_.call(null,dctr,inst_18859);var inst_18865 = cljs.core.seq.call(null,inst_18858);var inst_18866 = inst_18865;var inst_18867 = null;var inst_18868 = 0;var inst_18869 = 0;var state_18925__$1 = (function (){var statearr_18942 = state_18925;(statearr_18942[19] = inst_18860);
(statearr_18942[10] = inst_18869);
(statearr_18942[11] = inst_18868);
(statearr_18942[12] = inst_18867);
(statearr_18942[13] = inst_18866);
return statearr_18942;
})();var statearr_18943_19019 = state_18925__$1;(statearr_18943_19019[2] = null);
(statearr_18943_19019[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 38))
{var inst_18909 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18944_19020 = state_18925__$1;(statearr_18944_19020[2] = inst_18909);
(statearr_18944_19020[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 7))
{var inst_18921 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18945_19021 = state_18925__$1;(statearr_18945_19021[2] = inst_18921);
(statearr_18945_19021[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 39))
{var inst_18887 = (state_18925[9]);var inst_18905 = (state_18925[2]);var inst_18906 = cljs.core.next.call(null,inst_18887);var inst_18866 = inst_18906;var inst_18867 = null;var inst_18868 = 0;var inst_18869 = 0;var state_18925__$1 = (function (){var statearr_18946 = state_18925;(statearr_18946[20] = inst_18905);
(statearr_18946[10] = inst_18869);
(statearr_18946[11] = inst_18868);
(statearr_18946[12] = inst_18867);
(statearr_18946[13] = inst_18866);
return statearr_18946;
})();var statearr_18947_19022 = state_18925__$1;(statearr_18947_19022[2] = null);
(statearr_18947_19022[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 8))
{var inst_18810 = (state_18925[15]);var inst_18809 = (state_18925[16]);var inst_18812 = (inst_18810 < inst_18809);var inst_18813 = inst_18812;var state_18925__$1 = state_18925;if(cljs.core.truth_(inst_18813))
{var statearr_18948_19023 = state_18925__$1;(statearr_18948_19023[1] = 10);
} else
{var statearr_18949_19024 = state_18925__$1;(statearr_18949_19024[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 40))
{var inst_18896 = (state_18925[18]);var inst_18897 = (state_18925[2]);var inst_18898 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18899 = cljs.core.async.untap_STAR_.call(null,m,inst_18896);var state_18925__$1 = (function (){var statearr_18950 = state_18925;(statearr_18950[21] = inst_18897);
(statearr_18950[22] = inst_18898);
return statearr_18950;
})();var statearr_18951_19025 = state_18925__$1;(statearr_18951_19025[2] = inst_18899);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 9))
{var inst_18855 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18952_19026 = state_18925__$1;(statearr_18952_19026[2] = inst_18855);
(statearr_18952_19026[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 41))
{var inst_18896 = (state_18925[18]);var inst_18798 = (state_18925[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18925,40,Object,null,39);var inst_18903 = cljs.core.async.put_BANG_.call(null,inst_18896,inst_18798,done);var state_18925__$1 = state_18925;var statearr_18953_19027 = state_18925__$1;(statearr_18953_19027[2] = inst_18903);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 10))
{var inst_18810 = (state_18925[15]);var inst_18808 = (state_18925[17]);var inst_18816 = cljs.core._nth.call(null,inst_18808,inst_18810);var inst_18817 = cljs.core.nth.call(null,inst_18816,0,null);var inst_18818 = cljs.core.nth.call(null,inst_18816,1,null);var state_18925__$1 = (function (){var statearr_18954 = state_18925;(statearr_18954[23] = inst_18817);
return statearr_18954;
})();if(cljs.core.truth_(inst_18818))
{var statearr_18955_19028 = state_18925__$1;(statearr_18955_19028[1] = 13);
} else
{var statearr_18956_19029 = state_18925__$1;(statearr_18956_19029[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 42))
{var inst_18918 = (state_18925[2]);var state_18925__$1 = (function (){var statearr_18957 = state_18925;(statearr_18957[24] = inst_18918);
return statearr_18957;
})();var statearr_18958_19030 = state_18925__$1;(statearr_18958_19030[2] = null);
(statearr_18958_19030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 11))
{var inst_18807 = (state_18925[14]);var inst_18827 = (state_18925[25]);var inst_18827__$1 = cljs.core.seq.call(null,inst_18807);var state_18925__$1 = (function (){var statearr_18959 = state_18925;(statearr_18959[25] = inst_18827__$1);
return statearr_18959;
})();if(inst_18827__$1)
{var statearr_18960_19031 = state_18925__$1;(statearr_18960_19031[1] = 16);
} else
{var statearr_18961_19032 = state_18925__$1;(statearr_18961_19032[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 12))
{var inst_18853 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18962_19033 = state_18925__$1;(statearr_18962_19033[2] = inst_18853);
(statearr_18962_19033[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 13))
{var inst_18817 = (state_18925[23]);var inst_18820 = cljs.core.async.close_BANG_.call(null,inst_18817);var state_18925__$1 = state_18925;var statearr_18966_19034 = state_18925__$1;(statearr_18966_19034[2] = inst_18820);
(statearr_18966_19034[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 14))
{var state_18925__$1 = state_18925;var statearr_18967_19035 = state_18925__$1;(statearr_18967_19035[2] = null);
(statearr_18967_19035[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 15))
{var inst_18807 = (state_18925[14]);var inst_18810 = (state_18925[15]);var inst_18809 = (state_18925[16]);var inst_18808 = (state_18925[17]);var inst_18823 = (state_18925[2]);var inst_18824 = (inst_18810 + 1);var tmp18963 = inst_18807;var tmp18964 = inst_18809;var tmp18965 = inst_18808;var inst_18807__$1 = tmp18963;var inst_18808__$1 = tmp18965;var inst_18809__$1 = tmp18964;var inst_18810__$1 = inst_18824;var state_18925__$1 = (function (){var statearr_18968 = state_18925;(statearr_18968[14] = inst_18807__$1);
(statearr_18968[15] = inst_18810__$1);
(statearr_18968[16] = inst_18809__$1);
(statearr_18968[17] = inst_18808__$1);
(statearr_18968[26] = inst_18823);
return statearr_18968;
})();var statearr_18969_19036 = state_18925__$1;(statearr_18969_19036[2] = null);
(statearr_18969_19036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 16))
{var inst_18827 = (state_18925[25]);var inst_18829 = cljs.core.chunked_seq_QMARK_.call(null,inst_18827);var state_18925__$1 = state_18925;if(inst_18829)
{var statearr_18970_19037 = state_18925__$1;(statearr_18970_19037[1] = 19);
} else
{var statearr_18971_19038 = state_18925__$1;(statearr_18971_19038[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 17))
{var state_18925__$1 = state_18925;var statearr_18972_19039 = state_18925__$1;(statearr_18972_19039[2] = null);
(statearr_18972_19039[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 18))
{var inst_18851 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18973_19040 = state_18925__$1;(statearr_18973_19040[2] = inst_18851);
(statearr_18973_19040[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 19))
{var inst_18827 = (state_18925[25]);var inst_18831 = cljs.core.chunk_first.call(null,inst_18827);var inst_18832 = cljs.core.chunk_rest.call(null,inst_18827);var inst_18833 = cljs.core.count.call(null,inst_18831);var inst_18807 = inst_18832;var inst_18808 = inst_18831;var inst_18809 = inst_18833;var inst_18810 = 0;var state_18925__$1 = (function (){var statearr_18974 = state_18925;(statearr_18974[14] = inst_18807);
(statearr_18974[15] = inst_18810);
(statearr_18974[16] = inst_18809);
(statearr_18974[17] = inst_18808);
return statearr_18974;
})();var statearr_18975_19041 = state_18925__$1;(statearr_18975_19041[2] = null);
(statearr_18975_19041[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 20))
{var inst_18827 = (state_18925[25]);var inst_18837 = cljs.core.first.call(null,inst_18827);var inst_18838 = cljs.core.nth.call(null,inst_18837,0,null);var inst_18839 = cljs.core.nth.call(null,inst_18837,1,null);var state_18925__$1 = (function (){var statearr_18976 = state_18925;(statearr_18976[27] = inst_18838);
return statearr_18976;
})();if(cljs.core.truth_(inst_18839))
{var statearr_18977_19042 = state_18925__$1;(statearr_18977_19042[1] = 22);
} else
{var statearr_18978_19043 = state_18925__$1;(statearr_18978_19043[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 21))
{var inst_18848 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18979_19044 = state_18925__$1;(statearr_18979_19044[2] = inst_18848);
(statearr_18979_19044[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 22))
{var inst_18838 = (state_18925[27]);var inst_18841 = cljs.core.async.close_BANG_.call(null,inst_18838);var state_18925__$1 = state_18925;var statearr_18980_19045 = state_18925__$1;(statearr_18980_19045[2] = inst_18841);
(statearr_18980_19045[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 23))
{var state_18925__$1 = state_18925;var statearr_18981_19046 = state_18925__$1;(statearr_18981_19046[2] = null);
(statearr_18981_19046[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 24))
{var inst_18827 = (state_18925[25]);var inst_18844 = (state_18925[2]);var inst_18845 = cljs.core.next.call(null,inst_18827);var inst_18807 = inst_18845;var inst_18808 = null;var inst_18809 = 0;var inst_18810 = 0;var state_18925__$1 = (function (){var statearr_18982 = state_18925;(statearr_18982[14] = inst_18807);
(statearr_18982[15] = inst_18810);
(statearr_18982[28] = inst_18844);
(statearr_18982[16] = inst_18809);
(statearr_18982[17] = inst_18808);
return statearr_18982;
})();var statearr_18983_19047 = state_18925__$1;(statearr_18983_19047[2] = null);
(statearr_18983_19047[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 25))
{var inst_18869 = (state_18925[10]);var inst_18868 = (state_18925[11]);var inst_18871 = (inst_18869 < inst_18868);var inst_18872 = inst_18871;var state_18925__$1 = state_18925;if(cljs.core.truth_(inst_18872))
{var statearr_18984_19048 = state_18925__$1;(statearr_18984_19048[1] = 27);
} else
{var statearr_18985_19049 = state_18925__$1;(statearr_18985_19049[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 26))
{var inst_18916 = (state_18925[2]);var state_18925__$1 = (function (){var statearr_18986 = state_18925;(statearr_18986[29] = inst_18916);
return statearr_18986;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18925__$1,42,dchan);
} else
{if((state_val_18926 === 27))
{var inst_18869 = (state_18925[10]);var inst_18867 = (state_18925[12]);var inst_18874 = cljs.core._nth.call(null,inst_18867,inst_18869);var state_18925__$1 = (function (){var statearr_18987 = state_18925;(statearr_18987[8] = inst_18874);
return statearr_18987;
})();var statearr_18988_19050 = state_18925__$1;(statearr_18988_19050[2] = null);
(statearr_18988_19050[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 28))
{var inst_18887 = (state_18925[9]);var inst_18866 = (state_18925[13]);var inst_18887__$1 = cljs.core.seq.call(null,inst_18866);var state_18925__$1 = (function (){var statearr_18992 = state_18925;(statearr_18992[9] = inst_18887__$1);
return statearr_18992;
})();if(inst_18887__$1)
{var statearr_18993_19051 = state_18925__$1;(statearr_18993_19051[1] = 33);
} else
{var statearr_18994_19052 = state_18925__$1;(statearr_18994_19052[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 29))
{var inst_18914 = (state_18925[2]);var state_18925__$1 = state_18925;var statearr_18995_19053 = state_18925__$1;(statearr_18995_19053[2] = inst_18914);
(statearr_18995_19053[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 30))
{var inst_18869 = (state_18925[10]);var inst_18868 = (state_18925[11]);var inst_18867 = (state_18925[12]);var inst_18866 = (state_18925[13]);var inst_18883 = (state_18925[2]);var inst_18884 = (inst_18869 + 1);var tmp18989 = inst_18868;var tmp18990 = inst_18867;var tmp18991 = inst_18866;var inst_18866__$1 = tmp18991;var inst_18867__$1 = tmp18990;var inst_18868__$1 = tmp18989;var inst_18869__$1 = inst_18884;var state_18925__$1 = (function (){var statearr_18996 = state_18925;(statearr_18996[30] = inst_18883);
(statearr_18996[10] = inst_18869__$1);
(statearr_18996[11] = inst_18868__$1);
(statearr_18996[12] = inst_18867__$1);
(statearr_18996[13] = inst_18866__$1);
return statearr_18996;
})();var statearr_18997_19054 = state_18925__$1;(statearr_18997_19054[2] = null);
(statearr_18997_19054[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18926 === 31))
{var inst_18874 = (state_18925[8]);var inst_18875 = (state_18925[2]);var inst_18876 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18877 = cljs.core.async.untap_STAR_.call(null,m,inst_18874);var state_18925__$1 = (function (){var statearr_18998 = state_18925;(statearr_18998[31] = inst_18875);
(statearr_18998[32] = inst_18876);
return statearr_18998;
})();var statearr_18999_19055 = state_18925__$1;(statearr_18999_19055[2] = inst_18877);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18925__$1);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_19003 = (new Array(33));(statearr_19003[0] = state_machine__12403__auto__);
(statearr_19003[1] = 1);
return statearr_19003;
});
var state_machine__12403__auto____1 = (function (state_18925){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_18925);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e19004){if((e19004 instanceof Object))
{var ex__12406__auto__ = e19004;var statearr_19005_19056 = state_18925;(statearr_19005_19056[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19057 = state_18925;
state_18925 = G__19057;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_18925){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_18925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_19006 = f__12478__auto__.call(null);(statearr_19006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___19007);
return statearr_19006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.Mix = (function (){var obj19059 = {};return obj19059;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t19169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19169 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19170){
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
this.meta19170 = meta19170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19169.cljs$lang$type = true;
cljs.core.async.t19169.cljs$lang$ctorStr = "cljs.core.async/t19169";
cljs.core.async.t19169.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t19169");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19169.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19171){var self__ = this;
var _19171__$1 = this;return self__.meta19170;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19171,meta19170__$1){var self__ = this;
var _19171__$1 = this;return (new cljs.core.async.t19169(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19170__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19169 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19169(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19170){return (new cljs.core.async.t19169(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19170));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19169(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12477__auto___19278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_19236){var state_val_19237 = (state_19236[1]);if((state_val_19237 === 1))
{var inst_19175 = (state_19236[7]);var inst_19175__$1 = calc_state.call(null);var inst_19176 = cljs.core.seq_QMARK_.call(null,inst_19175__$1);var state_19236__$1 = (function (){var statearr_19238 = state_19236;(statearr_19238[7] = inst_19175__$1);
return statearr_19238;
})();if(inst_19176)
{var statearr_19239_19279 = state_19236__$1;(statearr_19239_19279[1] = 2);
} else
{var statearr_19240_19280 = state_19236__$1;(statearr_19240_19280[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 2))
{var inst_19175 = (state_19236[7]);var inst_19178 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19175);var state_19236__$1 = state_19236;var statearr_19241_19281 = state_19236__$1;(statearr_19241_19281[2] = inst_19178);
(statearr_19241_19281[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 3))
{var inst_19175 = (state_19236[7]);var state_19236__$1 = state_19236;var statearr_19242_19282 = state_19236__$1;(statearr_19242_19282[2] = inst_19175);
(statearr_19242_19282[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 4))
{var inst_19175 = (state_19236[7]);var inst_19181 = (state_19236[2]);var inst_19182 = cljs.core.get.call(null,inst_19181,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19183 = cljs.core.get.call(null,inst_19181,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19184 = cljs.core.get.call(null,inst_19181,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19185 = inst_19175;var state_19236__$1 = (function (){var statearr_19243 = state_19236;(statearr_19243[8] = inst_19183);
(statearr_19243[9] = inst_19184);
(statearr_19243[10] = inst_19182);
(statearr_19243[11] = inst_19185);
return statearr_19243;
})();var statearr_19244_19283 = state_19236__$1;(statearr_19244_19283[2] = null);
(statearr_19244_19283[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 5))
{var inst_19185 = (state_19236[11]);var inst_19188 = cljs.core.seq_QMARK_.call(null,inst_19185);var state_19236__$1 = state_19236;if(inst_19188)
{var statearr_19245_19284 = state_19236__$1;(statearr_19245_19284[1] = 7);
} else
{var statearr_19246_19285 = state_19236__$1;(statearr_19246_19285[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 6))
{var inst_19234 = (state_19236[2]);var state_19236__$1 = state_19236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19236__$1,inst_19234);
} else
{if((state_val_19237 === 7))
{var inst_19185 = (state_19236[11]);var inst_19190 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19185);var state_19236__$1 = state_19236;var statearr_19247_19286 = state_19236__$1;(statearr_19247_19286[2] = inst_19190);
(statearr_19247_19286[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 8))
{var inst_19185 = (state_19236[11]);var state_19236__$1 = state_19236;var statearr_19248_19287 = state_19236__$1;(statearr_19248_19287[2] = inst_19185);
(statearr_19248_19287[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 9))
{var inst_19193 = (state_19236[12]);var inst_19193__$1 = (state_19236[2]);var inst_19194 = cljs.core.get.call(null,inst_19193__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19195 = cljs.core.get.call(null,inst_19193__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19196 = cljs.core.get.call(null,inst_19193__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_19236__$1 = (function (){var statearr_19249 = state_19236;(statearr_19249[13] = inst_19195);
(statearr_19249[12] = inst_19193__$1);
(statearr_19249[14] = inst_19196);
return statearr_19249;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19236__$1,10,inst_19194);
} else
{if((state_val_19237 === 10))
{var inst_19200 = (state_19236[15]);var inst_19201 = (state_19236[16]);var inst_19199 = (state_19236[2]);var inst_19200__$1 = cljs.core.nth.call(null,inst_19199,0,null);var inst_19201__$1 = cljs.core.nth.call(null,inst_19199,1,null);var inst_19202 = (inst_19200__$1 == null);var inst_19203 = cljs.core._EQ_.call(null,inst_19201__$1,change);var inst_19204 = (inst_19202) || (inst_19203);var state_19236__$1 = (function (){var statearr_19250 = state_19236;(statearr_19250[15] = inst_19200__$1);
(statearr_19250[16] = inst_19201__$1);
return statearr_19250;
})();if(cljs.core.truth_(inst_19204))
{var statearr_19251_19288 = state_19236__$1;(statearr_19251_19288[1] = 11);
} else
{var statearr_19252_19289 = state_19236__$1;(statearr_19252_19289[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 11))
{var inst_19200 = (state_19236[15]);var inst_19206 = (inst_19200 == null);var state_19236__$1 = state_19236;if(cljs.core.truth_(inst_19206))
{var statearr_19253_19290 = state_19236__$1;(statearr_19253_19290[1] = 14);
} else
{var statearr_19254_19291 = state_19236__$1;(statearr_19254_19291[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 12))
{var inst_19215 = (state_19236[17]);var inst_19196 = (state_19236[14]);var inst_19201 = (state_19236[16]);var inst_19215__$1 = inst_19196.call(null,inst_19201);var state_19236__$1 = (function (){var statearr_19255 = state_19236;(statearr_19255[17] = inst_19215__$1);
return statearr_19255;
})();if(cljs.core.truth_(inst_19215__$1))
{var statearr_19256_19292 = state_19236__$1;(statearr_19256_19292[1] = 17);
} else
{var statearr_19257_19293 = state_19236__$1;(statearr_19257_19293[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 13))
{var inst_19232 = (state_19236[2]);var state_19236__$1 = state_19236;var statearr_19258_19294 = state_19236__$1;(statearr_19258_19294[2] = inst_19232);
(statearr_19258_19294[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 14))
{var inst_19201 = (state_19236[16]);var inst_19208 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19201);var state_19236__$1 = state_19236;var statearr_19259_19295 = state_19236__$1;(statearr_19259_19295[2] = inst_19208);
(statearr_19259_19295[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 15))
{var state_19236__$1 = state_19236;var statearr_19260_19296 = state_19236__$1;(statearr_19260_19296[2] = null);
(statearr_19260_19296[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 16))
{var inst_19211 = (state_19236[2]);var inst_19212 = calc_state.call(null);var inst_19185 = inst_19212;var state_19236__$1 = (function (){var statearr_19261 = state_19236;(statearr_19261[18] = inst_19211);
(statearr_19261[11] = inst_19185);
return statearr_19261;
})();var statearr_19262_19297 = state_19236__$1;(statearr_19262_19297[2] = null);
(statearr_19262_19297[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 17))
{var inst_19215 = (state_19236[17]);var state_19236__$1 = state_19236;var statearr_19263_19298 = state_19236__$1;(statearr_19263_19298[2] = inst_19215);
(statearr_19263_19298[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 18))
{var inst_19195 = (state_19236[13]);var inst_19196 = (state_19236[14]);var inst_19201 = (state_19236[16]);var inst_19218 = cljs.core.empty_QMARK_.call(null,inst_19196);var inst_19219 = inst_19195.call(null,inst_19201);var inst_19220 = cljs.core.not.call(null,inst_19219);var inst_19221 = (inst_19218) && (inst_19220);var state_19236__$1 = state_19236;var statearr_19264_19299 = state_19236__$1;(statearr_19264_19299[2] = inst_19221);
(statearr_19264_19299[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 19))
{var inst_19223 = (state_19236[2]);var state_19236__$1 = state_19236;if(cljs.core.truth_(inst_19223))
{var statearr_19265_19300 = state_19236__$1;(statearr_19265_19300[1] = 20);
} else
{var statearr_19266_19301 = state_19236__$1;(statearr_19266_19301[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 20))
{var inst_19200 = (state_19236[15]);var state_19236__$1 = state_19236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,23,out,inst_19200);
} else
{if((state_val_19237 === 21))
{var state_19236__$1 = state_19236;var statearr_19267_19302 = state_19236__$1;(statearr_19267_19302[2] = null);
(statearr_19267_19302[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 22))
{var inst_19193 = (state_19236[12]);var inst_19229 = (state_19236[2]);var inst_19185 = inst_19193;var state_19236__$1 = (function (){var statearr_19268 = state_19236;(statearr_19268[19] = inst_19229);
(statearr_19268[11] = inst_19185);
return statearr_19268;
})();var statearr_19269_19303 = state_19236__$1;(statearr_19269_19303[2] = null);
(statearr_19269_19303[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19237 === 23))
{var inst_19226 = (state_19236[2]);var state_19236__$1 = state_19236;var statearr_19270_19304 = state_19236__$1;(statearr_19270_19304[2] = inst_19226);
(statearr_19270_19304[1] = 22);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_19274 = (new Array(20));(statearr_19274[0] = state_machine__12403__auto__);
(statearr_19274[1] = 1);
return statearr_19274;
});
var state_machine__12403__auto____1 = (function (state_19236){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_19236);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e19275){if((e19275 instanceof Object))
{var ex__12406__auto__ = e19275;var statearr_19276_19305 = state_19236;(statearr_19276_19305[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19306 = state_19236;
state_19236 = G__19306;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_19277 = f__12478__auto__.call(null);(statearr_19277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___19278);
return statearr_19277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
cljs.core.async.Pub = (function (){var obj19308 = {};return obj19308;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
return (function (topic){var or__5157__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5157__auto__,mults){
return (function (p1__19309_SHARP_){if(cljs.core.truth_(p1__19309_SHARP_.call(null,topic)))
{return p1__19309_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19309_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5157__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19434 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19435){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19435 = meta19435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19434.cljs$lang$type = true;
cljs.core.async.t19434.cljs$lang$ctorStr = "cljs.core.async/t19434";
cljs.core.async.t19434.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t19434");
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19434.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19436){var self__ = this;
var _19436__$1 = this;return self__.meta19435;
});})(mults,ensure_mult))
;
cljs.core.async.t19434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19436,meta19435__$1){var self__ = this;
var _19436__$1 = this;return (new cljs.core.async.t19434(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19435__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19434 = ((function (mults,ensure_mult){
return (function __GT_t19434(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19435){return (new cljs.core.async.t19434(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19435));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19434(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12477__auto___19558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_19510){var state_val_19511 = (state_19510[1]);if((state_val_19511 === 1))
{var state_19510__$1 = state_19510;var statearr_19512_19559 = state_19510__$1;(statearr_19512_19559[2] = null);
(statearr_19512_19559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 2))
{var state_19510__$1 = state_19510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19510__$1,4,ch);
} else
{if((state_val_19511 === 3))
{var inst_19508 = (state_19510[2]);var state_19510__$1 = state_19510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19510__$1,inst_19508);
} else
{if((state_val_19511 === 4))
{var inst_19439 = (state_19510[7]);var inst_19439__$1 = (state_19510[2]);var inst_19440 = (inst_19439__$1 == null);var state_19510__$1 = (function (){var statearr_19513 = state_19510;(statearr_19513[7] = inst_19439__$1);
return statearr_19513;
})();if(cljs.core.truth_(inst_19440))
{var statearr_19514_19560 = state_19510__$1;(statearr_19514_19560[1] = 5);
} else
{var statearr_19515_19561 = state_19510__$1;(statearr_19515_19561[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 5))
{var inst_19446 = cljs.core.deref.call(null,mults);var inst_19447 = cljs.core.vals.call(null,inst_19446);var inst_19448 = cljs.core.seq.call(null,inst_19447);var inst_19449 = inst_19448;var inst_19450 = null;var inst_19451 = 0;var inst_19452 = 0;var state_19510__$1 = (function (){var statearr_19516 = state_19510;(statearr_19516[8] = inst_19452);
(statearr_19516[9] = inst_19449);
(statearr_19516[10] = inst_19450);
(statearr_19516[11] = inst_19451);
return statearr_19516;
})();var statearr_19517_19562 = state_19510__$1;(statearr_19517_19562[2] = null);
(statearr_19517_19562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 6))
{var inst_19489 = (state_19510[12]);var inst_19439 = (state_19510[7]);var inst_19487 = (state_19510[13]);var inst_19487__$1 = topic_fn.call(null,inst_19439);var inst_19488 = cljs.core.deref.call(null,mults);var inst_19489__$1 = cljs.core.get.call(null,inst_19488,inst_19487__$1);var state_19510__$1 = (function (){var statearr_19518 = state_19510;(statearr_19518[12] = inst_19489__$1);
(statearr_19518[13] = inst_19487__$1);
return statearr_19518;
})();if(cljs.core.truth_(inst_19489__$1))
{var statearr_19519_19563 = state_19510__$1;(statearr_19519_19563[1] = 19);
} else
{var statearr_19520_19564 = state_19510__$1;(statearr_19520_19564[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 7))
{var inst_19506 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19521_19565 = state_19510__$1;(statearr_19521_19565[2] = inst_19506);
(statearr_19521_19565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 8))
{var inst_19452 = (state_19510[8]);var inst_19451 = (state_19510[11]);var inst_19454 = (inst_19452 < inst_19451);var inst_19455 = inst_19454;var state_19510__$1 = state_19510;if(cljs.core.truth_(inst_19455))
{var statearr_19525_19566 = state_19510__$1;(statearr_19525_19566[1] = 10);
} else
{var statearr_19526_19567 = state_19510__$1;(statearr_19526_19567[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 9))
{var inst_19485 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19527_19568 = state_19510__$1;(statearr_19527_19568[2] = inst_19485);
(statearr_19527_19568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 10))
{var inst_19452 = (state_19510[8]);var inst_19449 = (state_19510[9]);var inst_19450 = (state_19510[10]);var inst_19451 = (state_19510[11]);var inst_19457 = cljs.core._nth.call(null,inst_19450,inst_19452);var inst_19458 = cljs.core.async.muxch_STAR_.call(null,inst_19457);var inst_19459 = cljs.core.async.close_BANG_.call(null,inst_19458);var inst_19460 = (inst_19452 + 1);var tmp19522 = inst_19449;var tmp19523 = inst_19450;var tmp19524 = inst_19451;var inst_19449__$1 = tmp19522;var inst_19450__$1 = tmp19523;var inst_19451__$1 = tmp19524;var inst_19452__$1 = inst_19460;var state_19510__$1 = (function (){var statearr_19528 = state_19510;(statearr_19528[14] = inst_19459);
(statearr_19528[8] = inst_19452__$1);
(statearr_19528[9] = inst_19449__$1);
(statearr_19528[10] = inst_19450__$1);
(statearr_19528[11] = inst_19451__$1);
return statearr_19528;
})();var statearr_19529_19569 = state_19510__$1;(statearr_19529_19569[2] = null);
(statearr_19529_19569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 11))
{var inst_19463 = (state_19510[15]);var inst_19449 = (state_19510[9]);var inst_19463__$1 = cljs.core.seq.call(null,inst_19449);var state_19510__$1 = (function (){var statearr_19530 = state_19510;(statearr_19530[15] = inst_19463__$1);
return statearr_19530;
})();if(inst_19463__$1)
{var statearr_19531_19570 = state_19510__$1;(statearr_19531_19570[1] = 13);
} else
{var statearr_19532_19571 = state_19510__$1;(statearr_19532_19571[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 12))
{var inst_19483 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19533_19572 = state_19510__$1;(statearr_19533_19572[2] = inst_19483);
(statearr_19533_19572[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 13))
{var inst_19463 = (state_19510[15]);var inst_19465 = cljs.core.chunked_seq_QMARK_.call(null,inst_19463);var state_19510__$1 = state_19510;if(inst_19465)
{var statearr_19534_19573 = state_19510__$1;(statearr_19534_19573[1] = 16);
} else
{var statearr_19535_19574 = state_19510__$1;(statearr_19535_19574[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 14))
{var state_19510__$1 = state_19510;var statearr_19536_19575 = state_19510__$1;(statearr_19536_19575[2] = null);
(statearr_19536_19575[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 15))
{var inst_19481 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19537_19576 = state_19510__$1;(statearr_19537_19576[2] = inst_19481);
(statearr_19537_19576[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 16))
{var inst_19463 = (state_19510[15]);var inst_19467 = cljs.core.chunk_first.call(null,inst_19463);var inst_19468 = cljs.core.chunk_rest.call(null,inst_19463);var inst_19469 = cljs.core.count.call(null,inst_19467);var inst_19449 = inst_19468;var inst_19450 = inst_19467;var inst_19451 = inst_19469;var inst_19452 = 0;var state_19510__$1 = (function (){var statearr_19538 = state_19510;(statearr_19538[8] = inst_19452);
(statearr_19538[9] = inst_19449);
(statearr_19538[10] = inst_19450);
(statearr_19538[11] = inst_19451);
return statearr_19538;
})();var statearr_19539_19577 = state_19510__$1;(statearr_19539_19577[2] = null);
(statearr_19539_19577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 17))
{var inst_19463 = (state_19510[15]);var inst_19472 = cljs.core.first.call(null,inst_19463);var inst_19473 = cljs.core.async.muxch_STAR_.call(null,inst_19472);var inst_19474 = cljs.core.async.close_BANG_.call(null,inst_19473);var inst_19475 = cljs.core.next.call(null,inst_19463);var inst_19449 = inst_19475;var inst_19450 = null;var inst_19451 = 0;var inst_19452 = 0;var state_19510__$1 = (function (){var statearr_19540 = state_19510;(statearr_19540[8] = inst_19452);
(statearr_19540[16] = inst_19474);
(statearr_19540[9] = inst_19449);
(statearr_19540[10] = inst_19450);
(statearr_19540[11] = inst_19451);
return statearr_19540;
})();var statearr_19541_19578 = state_19510__$1;(statearr_19541_19578[2] = null);
(statearr_19541_19578[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 18))
{var inst_19478 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19542_19579 = state_19510__$1;(statearr_19542_19579[2] = inst_19478);
(statearr_19542_19579[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 19))
{var state_19510__$1 = state_19510;var statearr_19543_19580 = state_19510__$1;(statearr_19543_19580[2] = null);
(statearr_19543_19580[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 20))
{var state_19510__$1 = state_19510;var statearr_19544_19581 = state_19510__$1;(statearr_19544_19581[2] = null);
(statearr_19544_19581[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 21))
{var inst_19503 = (state_19510[2]);var state_19510__$1 = (function (){var statearr_19545 = state_19510;(statearr_19545[17] = inst_19503);
return statearr_19545;
})();var statearr_19546_19582 = state_19510__$1;(statearr_19546_19582[2] = null);
(statearr_19546_19582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 22))
{var inst_19500 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19547_19583 = state_19510__$1;(statearr_19547_19583[2] = inst_19500);
(statearr_19547_19583[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 23))
{var inst_19487 = (state_19510[13]);var inst_19491 = (state_19510[2]);var inst_19492 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19487);var state_19510__$1 = (function (){var statearr_19548 = state_19510;(statearr_19548[18] = inst_19491);
return statearr_19548;
})();var statearr_19549_19584 = state_19510__$1;(statearr_19549_19584[2] = inst_19492);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19510__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19511 === 24))
{var inst_19489 = (state_19510[12]);var inst_19439 = (state_19510[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19510,23,Object,null,22);var inst_19496 = cljs.core.async.muxch_STAR_.call(null,inst_19489);var state_19510__$1 = state_19510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19510__$1,25,inst_19496,inst_19439);
} else
{if((state_val_19511 === 25))
{var inst_19498 = (state_19510[2]);var state_19510__$1 = state_19510;var statearr_19550_19585 = state_19510__$1;(statearr_19550_19585[2] = inst_19498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19510__$1);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_19554 = (new Array(19));(statearr_19554[0] = state_machine__12403__auto__);
(statearr_19554[1] = 1);
return statearr_19554;
});
var state_machine__12403__auto____1 = (function (state_19510){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_19510);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e19555){if((e19555 instanceof Object))
{var ex__12406__auto__ = e19555;var statearr_19556_19586 = state_19510;(statearr_19556_19586[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19587 = state_19510;
state_19510 = G__19587;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_19510){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_19510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_19557 = f__12478__auto__.call(null);(statearr_19557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___19558);
return statearr_19557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
,cljs.core.range.call(null,cnt));var c__12477__auto___19724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_19694){var state_val_19695 = (state_19694[1]);if((state_val_19695 === 1))
{var state_19694__$1 = state_19694;var statearr_19696_19725 = state_19694__$1;(statearr_19696_19725[2] = null);
(statearr_19696_19725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 2))
{var inst_19657 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19658 = 0;var state_19694__$1 = (function (){var statearr_19697 = state_19694;(statearr_19697[7] = inst_19657);
(statearr_19697[8] = inst_19658);
return statearr_19697;
})();var statearr_19698_19726 = state_19694__$1;(statearr_19698_19726[2] = null);
(statearr_19698_19726[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 3))
{var inst_19692 = (state_19694[2]);var state_19694__$1 = state_19694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19694__$1,inst_19692);
} else
{if((state_val_19695 === 4))
{var inst_19658 = (state_19694[8]);var inst_19660 = (inst_19658 < cnt);var state_19694__$1 = state_19694;if(cljs.core.truth_(inst_19660))
{var statearr_19699_19727 = state_19694__$1;(statearr_19699_19727[1] = 6);
} else
{var statearr_19700_19728 = state_19694__$1;(statearr_19700_19728[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 5))
{var inst_19678 = (state_19694[2]);var state_19694__$1 = (function (){var statearr_19701 = state_19694;(statearr_19701[9] = inst_19678);
return statearr_19701;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19694__$1,12,dchan);
} else
{if((state_val_19695 === 6))
{var state_19694__$1 = state_19694;var statearr_19702_19729 = state_19694__$1;(statearr_19702_19729[2] = null);
(statearr_19702_19729[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 7))
{var state_19694__$1 = state_19694;var statearr_19703_19730 = state_19694__$1;(statearr_19703_19730[2] = null);
(statearr_19703_19730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 8))
{var inst_19676 = (state_19694[2]);var state_19694__$1 = state_19694;var statearr_19704_19731 = state_19694__$1;(statearr_19704_19731[2] = inst_19676);
(statearr_19704_19731[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 9))
{var inst_19658 = (state_19694[8]);var inst_19671 = (state_19694[2]);var inst_19672 = (inst_19658 + 1);var inst_19658__$1 = inst_19672;var state_19694__$1 = (function (){var statearr_19705 = state_19694;(statearr_19705[10] = inst_19671);
(statearr_19705[8] = inst_19658__$1);
return statearr_19705;
})();var statearr_19706_19732 = state_19694__$1;(statearr_19706_19732[2] = null);
(statearr_19706_19732[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 10))
{var inst_19662 = (state_19694[2]);var inst_19663 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19694__$1 = (function (){var statearr_19707 = state_19694;(statearr_19707[11] = inst_19662);
return statearr_19707;
})();var statearr_19708_19733 = state_19694__$1;(statearr_19708_19733[2] = inst_19663);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19694__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 11))
{var inst_19658 = (state_19694[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19694,10,Object,null,9);var inst_19667 = chs__$1.call(null,inst_19658);var inst_19668 = done.call(null,inst_19658);var inst_19669 = cljs.core.async.take_BANG_.call(null,inst_19667,inst_19668);var state_19694__$1 = state_19694;var statearr_19709_19734 = state_19694__$1;(statearr_19709_19734[2] = inst_19669);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19694__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 12))
{var inst_19680 = (state_19694[12]);var inst_19680__$1 = (state_19694[2]);var inst_19681 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19680__$1);var state_19694__$1 = (function (){var statearr_19710 = state_19694;(statearr_19710[12] = inst_19680__$1);
return statearr_19710;
})();if(cljs.core.truth_(inst_19681))
{var statearr_19711_19735 = state_19694__$1;(statearr_19711_19735[1] = 13);
} else
{var statearr_19712_19736 = state_19694__$1;(statearr_19712_19736[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 13))
{var inst_19683 = cljs.core.async.close_BANG_.call(null,out);var state_19694__$1 = state_19694;var statearr_19713_19737 = state_19694__$1;(statearr_19713_19737[2] = inst_19683);
(statearr_19713_19737[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 14))
{var inst_19680 = (state_19694[12]);var inst_19685 = cljs.core.apply.call(null,f,inst_19680);var state_19694__$1 = state_19694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19694__$1,16,out,inst_19685);
} else
{if((state_val_19695 === 15))
{var inst_19690 = (state_19694[2]);var state_19694__$1 = state_19694;var statearr_19714_19738 = state_19694__$1;(statearr_19714_19738[2] = inst_19690);
(statearr_19714_19738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19695 === 16))
{var inst_19687 = (state_19694[2]);var state_19694__$1 = (function (){var statearr_19715 = state_19694;(statearr_19715[13] = inst_19687);
return statearr_19715;
})();var statearr_19716_19739 = state_19694__$1;(statearr_19716_19739[2] = null);
(statearr_19716_19739[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_19720 = (new Array(14));(statearr_19720[0] = state_machine__12403__auto__);
(statearr_19720[1] = 1);
return statearr_19720;
});
var state_machine__12403__auto____1 = (function (state_19694){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_19694);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e19721){if((e19721 instanceof Object))
{var ex__12406__auto__ = e19721;var statearr_19722_19740 = state_19694;(statearr_19722_19740[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19741 = state_19694;
state_19694 = G__19741;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_19694){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_19694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_19723 = f__12478__auto__.call(null);(statearr_19723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___19724);
return statearr_19723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___19849 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_19825){var state_val_19826 = (state_19825[1]);if((state_val_19826 === 1))
{var inst_19796 = cljs.core.vec.call(null,chs);var inst_19797 = inst_19796;var state_19825__$1 = (function (){var statearr_19827 = state_19825;(statearr_19827[7] = inst_19797);
return statearr_19827;
})();var statearr_19828_19850 = state_19825__$1;(statearr_19828_19850[2] = null);
(statearr_19828_19850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 2))
{var inst_19797 = (state_19825[7]);var inst_19799 = cljs.core.count.call(null,inst_19797);var inst_19800 = (inst_19799 > 0);var state_19825__$1 = state_19825;if(cljs.core.truth_(inst_19800))
{var statearr_19829_19851 = state_19825__$1;(statearr_19829_19851[1] = 4);
} else
{var statearr_19830_19852 = state_19825__$1;(statearr_19830_19852[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 3))
{var inst_19823 = (state_19825[2]);var state_19825__$1 = state_19825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19825__$1,inst_19823);
} else
{if((state_val_19826 === 4))
{var inst_19797 = (state_19825[7]);var state_19825__$1 = state_19825;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19825__$1,7,inst_19797);
} else
{if((state_val_19826 === 5))
{var inst_19819 = cljs.core.async.close_BANG_.call(null,out);var state_19825__$1 = state_19825;var statearr_19831_19853 = state_19825__$1;(statearr_19831_19853[2] = inst_19819);
(statearr_19831_19853[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 6))
{var inst_19821 = (state_19825[2]);var state_19825__$1 = state_19825;var statearr_19832_19854 = state_19825__$1;(statearr_19832_19854[2] = inst_19821);
(statearr_19832_19854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 7))
{var inst_19805 = (state_19825[8]);var inst_19804 = (state_19825[9]);var inst_19804__$1 = (state_19825[2]);var inst_19805__$1 = cljs.core.nth.call(null,inst_19804__$1,0,null);var inst_19806 = cljs.core.nth.call(null,inst_19804__$1,1,null);var inst_19807 = (inst_19805__$1 == null);var state_19825__$1 = (function (){var statearr_19833 = state_19825;(statearr_19833[8] = inst_19805__$1);
(statearr_19833[10] = inst_19806);
(statearr_19833[9] = inst_19804__$1);
return statearr_19833;
})();if(cljs.core.truth_(inst_19807))
{var statearr_19834_19855 = state_19825__$1;(statearr_19834_19855[1] = 8);
} else
{var statearr_19835_19856 = state_19825__$1;(statearr_19835_19856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 8))
{var inst_19805 = (state_19825[8]);var inst_19806 = (state_19825[10]);var inst_19797 = (state_19825[7]);var inst_19804 = (state_19825[9]);var inst_19809 = (function (){var c = inst_19806;var v = inst_19805;var vec__19802 = inst_19804;var cs = inst_19797;return ((function (c,v,vec__19802,cs,inst_19805,inst_19806,inst_19797,inst_19804,state_val_19826){
return (function (p1__19742_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19742_SHARP_);
});
;})(c,v,vec__19802,cs,inst_19805,inst_19806,inst_19797,inst_19804,state_val_19826))
})();var inst_19810 = cljs.core.filterv.call(null,inst_19809,inst_19797);var inst_19797__$1 = inst_19810;var state_19825__$1 = (function (){var statearr_19836 = state_19825;(statearr_19836[7] = inst_19797__$1);
return statearr_19836;
})();var statearr_19837_19857 = state_19825__$1;(statearr_19837_19857[2] = null);
(statearr_19837_19857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 9))
{var inst_19805 = (state_19825[8]);var state_19825__$1 = state_19825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19825__$1,11,out,inst_19805);
} else
{if((state_val_19826 === 10))
{var inst_19817 = (state_19825[2]);var state_19825__$1 = state_19825;var statearr_19839_19858 = state_19825__$1;(statearr_19839_19858[2] = inst_19817);
(statearr_19839_19858[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19826 === 11))
{var inst_19797 = (state_19825[7]);var inst_19814 = (state_19825[2]);var tmp19838 = inst_19797;var inst_19797__$1 = tmp19838;var state_19825__$1 = (function (){var statearr_19840 = state_19825;(statearr_19840[11] = inst_19814);
(statearr_19840[7] = inst_19797__$1);
return statearr_19840;
})();var statearr_19841_19859 = state_19825__$1;(statearr_19841_19859[2] = null);
(statearr_19841_19859[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_19845 = (new Array(12));(statearr_19845[0] = state_machine__12403__auto__);
(statearr_19845[1] = 1);
return statearr_19845;
});
var state_machine__12403__auto____1 = (function (state_19825){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_19825);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e19846){if((e19846 instanceof Object))
{var ex__12406__auto__ = e19846;var statearr_19847_19860 = state_19825;(statearr_19847_19860[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19861 = state_19825;
state_19825 = G__19861;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_19825){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_19825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_19848 = f__12478__auto__.call(null);(statearr_19848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___19849);
return statearr_19848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___19954 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_19931){var state_val_19932 = (state_19931[1]);if((state_val_19932 === 1))
{var inst_19908 = 0;var state_19931__$1 = (function (){var statearr_19933 = state_19931;(statearr_19933[7] = inst_19908);
return statearr_19933;
})();var statearr_19934_19955 = state_19931__$1;(statearr_19934_19955[2] = null);
(statearr_19934_19955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 2))
{var inst_19908 = (state_19931[7]);var inst_19910 = (inst_19908 < n);var state_19931__$1 = state_19931;if(cljs.core.truth_(inst_19910))
{var statearr_19935_19956 = state_19931__$1;(statearr_19935_19956[1] = 4);
} else
{var statearr_19936_19957 = state_19931__$1;(statearr_19936_19957[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 3))
{var inst_19928 = (state_19931[2]);var inst_19929 = cljs.core.async.close_BANG_.call(null,out);var state_19931__$1 = (function (){var statearr_19937 = state_19931;(statearr_19937[8] = inst_19928);
return statearr_19937;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19931__$1,inst_19929);
} else
{if((state_val_19932 === 4))
{var state_19931__$1 = state_19931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19931__$1,7,ch);
} else
{if((state_val_19932 === 5))
{var state_19931__$1 = state_19931;var statearr_19938_19958 = state_19931__$1;(statearr_19938_19958[2] = null);
(statearr_19938_19958[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 6))
{var inst_19926 = (state_19931[2]);var state_19931__$1 = state_19931;var statearr_19939_19959 = state_19931__$1;(statearr_19939_19959[2] = inst_19926);
(statearr_19939_19959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 7))
{var inst_19913 = (state_19931[9]);var inst_19913__$1 = (state_19931[2]);var inst_19914 = (inst_19913__$1 == null);var inst_19915 = cljs.core.not.call(null,inst_19914);var state_19931__$1 = (function (){var statearr_19940 = state_19931;(statearr_19940[9] = inst_19913__$1);
return statearr_19940;
})();if(inst_19915)
{var statearr_19941_19960 = state_19931__$1;(statearr_19941_19960[1] = 8);
} else
{var statearr_19942_19961 = state_19931__$1;(statearr_19942_19961[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 8))
{var inst_19913 = (state_19931[9]);var state_19931__$1 = state_19931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19931__$1,11,out,inst_19913);
} else
{if((state_val_19932 === 9))
{var state_19931__$1 = state_19931;var statearr_19943_19962 = state_19931__$1;(statearr_19943_19962[2] = null);
(statearr_19943_19962[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 10))
{var inst_19923 = (state_19931[2]);var state_19931__$1 = state_19931;var statearr_19944_19963 = state_19931__$1;(statearr_19944_19963[2] = inst_19923);
(statearr_19944_19963[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19932 === 11))
{var inst_19908 = (state_19931[7]);var inst_19918 = (state_19931[2]);var inst_19919 = (inst_19908 + 1);var inst_19908__$1 = inst_19919;var state_19931__$1 = (function (){var statearr_19945 = state_19931;(statearr_19945[7] = inst_19908__$1);
(statearr_19945[10] = inst_19918);
return statearr_19945;
})();var statearr_19946_19964 = state_19931__$1;(statearr_19946_19964[2] = null);
(statearr_19946_19964[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_19950 = (new Array(11));(statearr_19950[0] = state_machine__12403__auto__);
(statearr_19950[1] = 1);
return statearr_19950;
});
var state_machine__12403__auto____1 = (function (state_19931){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_19931);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e19951){if((e19951 instanceof Object))
{var ex__12406__auto__ = e19951;var statearr_19952_19965 = state_19931;(statearr_19952_19965[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19966 = state_19931;
state_19931 = G__19966;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_19931){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_19931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_19953 = f__12478__auto__.call(null);(statearr_19953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___19954);
return statearr_19953;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___20063 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_20038){var state_val_20039 = (state_20038[1]);if((state_val_20039 === 1))
{var inst_20015 = null;var state_20038__$1 = (function (){var statearr_20040 = state_20038;(statearr_20040[7] = inst_20015);
return statearr_20040;
})();var statearr_20041_20064 = state_20038__$1;(statearr_20041_20064[2] = null);
(statearr_20041_20064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 2))
{var state_20038__$1 = state_20038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20038__$1,4,ch);
} else
{if((state_val_20039 === 3))
{var inst_20035 = (state_20038[2]);var inst_20036 = cljs.core.async.close_BANG_.call(null,out);var state_20038__$1 = (function (){var statearr_20042 = state_20038;(statearr_20042[8] = inst_20035);
return statearr_20042;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20038__$1,inst_20036);
} else
{if((state_val_20039 === 4))
{var inst_20018 = (state_20038[9]);var inst_20018__$1 = (state_20038[2]);var inst_20019 = (inst_20018__$1 == null);var inst_20020 = cljs.core.not.call(null,inst_20019);var state_20038__$1 = (function (){var statearr_20043 = state_20038;(statearr_20043[9] = inst_20018__$1);
return statearr_20043;
})();if(inst_20020)
{var statearr_20044_20065 = state_20038__$1;(statearr_20044_20065[1] = 5);
} else
{var statearr_20045_20066 = state_20038__$1;(statearr_20045_20066[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 5))
{var inst_20018 = (state_20038[9]);var inst_20015 = (state_20038[7]);var inst_20022 = cljs.core._EQ_.call(null,inst_20018,inst_20015);var state_20038__$1 = state_20038;if(inst_20022)
{var statearr_20046_20067 = state_20038__$1;(statearr_20046_20067[1] = 8);
} else
{var statearr_20047_20068 = state_20038__$1;(statearr_20047_20068[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 6))
{var state_20038__$1 = state_20038;var statearr_20049_20069 = state_20038__$1;(statearr_20049_20069[2] = null);
(statearr_20049_20069[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 7))
{var inst_20033 = (state_20038[2]);var state_20038__$1 = state_20038;var statearr_20050_20070 = state_20038__$1;(statearr_20050_20070[2] = inst_20033);
(statearr_20050_20070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 8))
{var inst_20015 = (state_20038[7]);var tmp20048 = inst_20015;var inst_20015__$1 = tmp20048;var state_20038__$1 = (function (){var statearr_20051 = state_20038;(statearr_20051[7] = inst_20015__$1);
return statearr_20051;
})();var statearr_20052_20071 = state_20038__$1;(statearr_20052_20071[2] = null);
(statearr_20052_20071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 9))
{var inst_20018 = (state_20038[9]);var state_20038__$1 = state_20038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20038__$1,11,out,inst_20018);
} else
{if((state_val_20039 === 10))
{var inst_20030 = (state_20038[2]);var state_20038__$1 = state_20038;var statearr_20053_20072 = state_20038__$1;(statearr_20053_20072[2] = inst_20030);
(statearr_20053_20072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20039 === 11))
{var inst_20018 = (state_20038[9]);var inst_20027 = (state_20038[2]);var inst_20015 = inst_20018;var state_20038__$1 = (function (){var statearr_20054 = state_20038;(statearr_20054[10] = inst_20027);
(statearr_20054[7] = inst_20015);
return statearr_20054;
})();var statearr_20055_20073 = state_20038__$1;(statearr_20055_20073[2] = null);
(statearr_20055_20073[1] = 2);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_20059 = (new Array(11));(statearr_20059[0] = state_machine__12403__auto__);
(statearr_20059[1] = 1);
return statearr_20059;
});
var state_machine__12403__auto____1 = (function (state_20038){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_20038);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e20060){if((e20060 instanceof Object))
{var ex__12406__auto__ = e20060;var statearr_20061_20074 = state_20038;(statearr_20061_20074[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20075 = state_20038;
state_20038 = G__20075;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_20038){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_20038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_20062 = f__12478__auto__.call(null);(statearr_20062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___20063);
return statearr_20062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___20210 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_20180){var state_val_20181 = (state_20180[1]);if((state_val_20181 === 1))
{var inst_20143 = (new Array(n));var inst_20144 = inst_20143;var inst_20145 = 0;var state_20180__$1 = (function (){var statearr_20182 = state_20180;(statearr_20182[7] = inst_20145);
(statearr_20182[8] = inst_20144);
return statearr_20182;
})();var statearr_20183_20211 = state_20180__$1;(statearr_20183_20211[2] = null);
(statearr_20183_20211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 2))
{var state_20180__$1 = state_20180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20180__$1,4,ch);
} else
{if((state_val_20181 === 3))
{var inst_20178 = (state_20180[2]);var state_20180__$1 = state_20180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20180__$1,inst_20178);
} else
{if((state_val_20181 === 4))
{var inst_20148 = (state_20180[9]);var inst_20148__$1 = (state_20180[2]);var inst_20149 = (inst_20148__$1 == null);var inst_20150 = cljs.core.not.call(null,inst_20149);var state_20180__$1 = (function (){var statearr_20184 = state_20180;(statearr_20184[9] = inst_20148__$1);
return statearr_20184;
})();if(inst_20150)
{var statearr_20185_20212 = state_20180__$1;(statearr_20185_20212[1] = 5);
} else
{var statearr_20186_20213 = state_20180__$1;(statearr_20186_20213[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 5))
{var inst_20148 = (state_20180[9]);var inst_20153 = (state_20180[10]);var inst_20145 = (state_20180[7]);var inst_20144 = (state_20180[8]);var inst_20152 = (inst_20144[inst_20145] = inst_20148);var inst_20153__$1 = (inst_20145 + 1);var inst_20154 = (inst_20153__$1 < n);var state_20180__$1 = (function (){var statearr_20187 = state_20180;(statearr_20187[10] = inst_20153__$1);
(statearr_20187[11] = inst_20152);
return statearr_20187;
})();if(cljs.core.truth_(inst_20154))
{var statearr_20188_20214 = state_20180__$1;(statearr_20188_20214[1] = 8);
} else
{var statearr_20189_20215 = state_20180__$1;(statearr_20189_20215[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 6))
{var inst_20145 = (state_20180[7]);var inst_20166 = (inst_20145 > 0);var state_20180__$1 = state_20180;if(cljs.core.truth_(inst_20166))
{var statearr_20191_20216 = state_20180__$1;(statearr_20191_20216[1] = 12);
} else
{var statearr_20192_20217 = state_20180__$1;(statearr_20192_20217[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 7))
{var inst_20176 = (state_20180[2]);var state_20180__$1 = state_20180;var statearr_20193_20218 = state_20180__$1;(statearr_20193_20218[2] = inst_20176);
(statearr_20193_20218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 8))
{var inst_20153 = (state_20180[10]);var inst_20144 = (state_20180[8]);var tmp20190 = inst_20144;var inst_20144__$1 = tmp20190;var inst_20145 = inst_20153;var state_20180__$1 = (function (){var statearr_20194 = state_20180;(statearr_20194[7] = inst_20145);
(statearr_20194[8] = inst_20144__$1);
return statearr_20194;
})();var statearr_20195_20219 = state_20180__$1;(statearr_20195_20219[2] = null);
(statearr_20195_20219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 9))
{var inst_20144 = (state_20180[8]);var inst_20158 = cljs.core.vec.call(null,inst_20144);var state_20180__$1 = state_20180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20180__$1,11,out,inst_20158);
} else
{if((state_val_20181 === 10))
{var inst_20164 = (state_20180[2]);var state_20180__$1 = state_20180;var statearr_20196_20220 = state_20180__$1;(statearr_20196_20220[2] = inst_20164);
(statearr_20196_20220[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 11))
{var inst_20160 = (state_20180[2]);var inst_20161 = (new Array(n));var inst_20144 = inst_20161;var inst_20145 = 0;var state_20180__$1 = (function (){var statearr_20197 = state_20180;(statearr_20197[12] = inst_20160);
(statearr_20197[7] = inst_20145);
(statearr_20197[8] = inst_20144);
return statearr_20197;
})();var statearr_20198_20221 = state_20180__$1;(statearr_20198_20221[2] = null);
(statearr_20198_20221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 12))
{var inst_20144 = (state_20180[8]);var inst_20168 = cljs.core.vec.call(null,inst_20144);var state_20180__$1 = state_20180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20180__$1,15,out,inst_20168);
} else
{if((state_val_20181 === 13))
{var state_20180__$1 = state_20180;var statearr_20199_20222 = state_20180__$1;(statearr_20199_20222[2] = null);
(statearr_20199_20222[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 14))
{var inst_20173 = (state_20180[2]);var inst_20174 = cljs.core.async.close_BANG_.call(null,out);var state_20180__$1 = (function (){var statearr_20200 = state_20180;(statearr_20200[13] = inst_20173);
return statearr_20200;
})();var statearr_20201_20223 = state_20180__$1;(statearr_20201_20223[2] = inst_20174);
(statearr_20201_20223[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20181 === 15))
{var inst_20170 = (state_20180[2]);var state_20180__$1 = state_20180;var statearr_20202_20224 = state_20180__$1;(statearr_20202_20224[2] = inst_20170);
(statearr_20202_20224[1] = 14);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_20206 = (new Array(14));(statearr_20206[0] = state_machine__12403__auto__);
(statearr_20206[1] = 1);
return statearr_20206;
});
var state_machine__12403__auto____1 = (function (state_20180){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_20180);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e20207){if((e20207 instanceof Object))
{var ex__12406__auto__ = e20207;var statearr_20208_20225 = state_20180;(statearr_20208_20225[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20180);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20226 = state_20180;
state_20180 = G__20226;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_20180){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_20180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_20209 = f__12478__auto__.call(null);(statearr_20209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___20210);
return statearr_20209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___20369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_20339){var state_val_20340 = (state_20339[1]);if((state_val_20340 === 1))
{var inst_20298 = (new Array(0));var inst_20299 = inst_20298;var inst_20300 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_20339__$1 = (function (){var statearr_20341 = state_20339;(statearr_20341[7] = inst_20299);
(statearr_20341[8] = inst_20300);
return statearr_20341;
})();var statearr_20342_20370 = state_20339__$1;(statearr_20342_20370[2] = null);
(statearr_20342_20370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 2))
{var state_20339__$1 = state_20339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20339__$1,4,ch);
} else
{if((state_val_20340 === 3))
{var inst_20337 = (state_20339[2]);var state_20339__$1 = state_20339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20339__$1,inst_20337);
} else
{if((state_val_20340 === 4))
{var inst_20303 = (state_20339[9]);var inst_20303__$1 = (state_20339[2]);var inst_20304 = (inst_20303__$1 == null);var inst_20305 = cljs.core.not.call(null,inst_20304);var state_20339__$1 = (function (){var statearr_20343 = state_20339;(statearr_20343[9] = inst_20303__$1);
return statearr_20343;
})();if(inst_20305)
{var statearr_20344_20371 = state_20339__$1;(statearr_20344_20371[1] = 5);
} else
{var statearr_20345_20372 = state_20339__$1;(statearr_20345_20372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 5))
{var inst_20307 = (state_20339[10]);var inst_20300 = (state_20339[8]);var inst_20303 = (state_20339[9]);var inst_20307__$1 = f.call(null,inst_20303);var inst_20308 = cljs.core._EQ_.call(null,inst_20307__$1,inst_20300);var inst_20309 = cljs.core.keyword_identical_QMARK_.call(null,inst_20300,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_20310 = (inst_20308) || (inst_20309);var state_20339__$1 = (function (){var statearr_20346 = state_20339;(statearr_20346[10] = inst_20307__$1);
return statearr_20346;
})();if(cljs.core.truth_(inst_20310))
{var statearr_20347_20373 = state_20339__$1;(statearr_20347_20373[1] = 8);
} else
{var statearr_20348_20374 = state_20339__$1;(statearr_20348_20374[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 6))
{var inst_20299 = (state_20339[7]);var inst_20324 = inst_20299.length;var inst_20325 = (inst_20324 > 0);var state_20339__$1 = state_20339;if(cljs.core.truth_(inst_20325))
{var statearr_20350_20375 = state_20339__$1;(statearr_20350_20375[1] = 12);
} else
{var statearr_20351_20376 = state_20339__$1;(statearr_20351_20376[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 7))
{var inst_20335 = (state_20339[2]);var state_20339__$1 = state_20339;var statearr_20352_20377 = state_20339__$1;(statearr_20352_20377[2] = inst_20335);
(statearr_20352_20377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 8))
{var inst_20299 = (state_20339[7]);var inst_20307 = (state_20339[10]);var inst_20303 = (state_20339[9]);var inst_20312 = inst_20299.push(inst_20303);var tmp20349 = inst_20299;var inst_20299__$1 = tmp20349;var inst_20300 = inst_20307;var state_20339__$1 = (function (){var statearr_20353 = state_20339;(statearr_20353[7] = inst_20299__$1);
(statearr_20353[11] = inst_20312);
(statearr_20353[8] = inst_20300);
return statearr_20353;
})();var statearr_20354_20378 = state_20339__$1;(statearr_20354_20378[2] = null);
(statearr_20354_20378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 9))
{var inst_20299 = (state_20339[7]);var inst_20315 = cljs.core.vec.call(null,inst_20299);var state_20339__$1 = state_20339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20339__$1,11,out,inst_20315);
} else
{if((state_val_20340 === 10))
{var inst_20322 = (state_20339[2]);var state_20339__$1 = state_20339;var statearr_20355_20379 = state_20339__$1;(statearr_20355_20379[2] = inst_20322);
(statearr_20355_20379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 11))
{var inst_20307 = (state_20339[10]);var inst_20303 = (state_20339[9]);var inst_20317 = (state_20339[2]);var inst_20318 = (new Array(0));var inst_20319 = inst_20318.push(inst_20303);var inst_20299 = inst_20318;var inst_20300 = inst_20307;var state_20339__$1 = (function (){var statearr_20356 = state_20339;(statearr_20356[7] = inst_20299);
(statearr_20356[12] = inst_20317);
(statearr_20356[8] = inst_20300);
(statearr_20356[13] = inst_20319);
return statearr_20356;
})();var statearr_20357_20380 = state_20339__$1;(statearr_20357_20380[2] = null);
(statearr_20357_20380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 12))
{var inst_20299 = (state_20339[7]);var inst_20327 = cljs.core.vec.call(null,inst_20299);var state_20339__$1 = state_20339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20339__$1,15,out,inst_20327);
} else
{if((state_val_20340 === 13))
{var state_20339__$1 = state_20339;var statearr_20358_20381 = state_20339__$1;(statearr_20358_20381[2] = null);
(statearr_20358_20381[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 14))
{var inst_20332 = (state_20339[2]);var inst_20333 = cljs.core.async.close_BANG_.call(null,out);var state_20339__$1 = (function (){var statearr_20359 = state_20339;(statearr_20359[14] = inst_20332);
return statearr_20359;
})();var statearr_20360_20382 = state_20339__$1;(statearr_20360_20382[2] = inst_20333);
(statearr_20360_20382[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20340 === 15))
{var inst_20329 = (state_20339[2]);var state_20339__$1 = state_20339;var statearr_20361_20383 = state_20339__$1;(statearr_20361_20383[2] = inst_20329);
(statearr_20361_20383[1] = 14);
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
});return ((function (switch__12402__auto__){
return (function() {
var state_machine__12403__auto__ = null;
var state_machine__12403__auto____0 = (function (){var statearr_20365 = (new Array(15));(statearr_20365[0] = state_machine__12403__auto__);
(statearr_20365[1] = 1);
return statearr_20365;
});
var state_machine__12403__auto____1 = (function (state_20339){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_20339);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e20366){if((e20366 instanceof Object))
{var ex__12406__auto__ = e20366;var statearr_20367_20384 = state_20339;(statearr_20367_20384[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20385 = state_20339;
state_20339 = G__20385;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_20339){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_20339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_20368 = f__12478__auto__.call(null);(statearr_20368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___20369);
return statearr_20368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12479__auto__);
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
