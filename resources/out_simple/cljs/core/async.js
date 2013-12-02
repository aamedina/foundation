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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t623746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623746 = (function (f,fn_handler,meta623747){
this.f = f;
this.fn_handler = fn_handler;
this.meta623747 = meta623747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623746.cljs$lang$type = true;
cljs.core.async.t623746.cljs$lang$ctorStr = "cljs.core.async/t623746";
cljs.core.async.t623746.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623746");
});
cljs.core.async.t623746.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t623746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t623746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t623746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623748){var self__ = this;
var _623748__$1 = this;return self__.meta623747;
});
cljs.core.async.t623746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623748,meta623747__$1){var self__ = this;
var _623748__$1 = this;return (new cljs.core.async.t623746(self__.f,self__.fn_handler,meta623747__$1));
});
cljs.core.async.__GT_t623746 = (function __GT_t623746(f__$1,fn_handler__$1,meta623747){return (new cljs.core.async.t623746(f__$1,fn_handler__$1,meta623747));
});
}
return (new cljs.core.async.t623746(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__623750 = buff;if(G__623750)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__623750.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__623750.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__623750);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__623750);
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
{var val_623751 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_623751);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_623751);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___623752 = n;var x_623753 = 0;while(true){
if((x_623753 < n__8553__auto___623752))
{(a[x_623753] = 0);
{
var G__623754 = (x_623753 + 1);
x_623753 = G__623754;
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
var G__623755 = (i + 1);
i = G__623755;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t623759 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623759 = (function (flag,alt_flag,meta623760){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta623760 = meta623760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623759.cljs$lang$type = true;
cljs.core.async.t623759.cljs$lang$ctorStr = "cljs.core.async/t623759";
cljs.core.async.t623759.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623759");
});
cljs.core.async.t623759.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t623759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t623759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t623759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623761){var self__ = this;
var _623761__$1 = this;return self__.meta623760;
});
cljs.core.async.t623759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623761,meta623760__$1){var self__ = this;
var _623761__$1 = this;return (new cljs.core.async.t623759(self__.flag,self__.alt_flag,meta623760__$1));
});
cljs.core.async.__GT_t623759 = (function __GT_t623759(flag__$1,alt_flag__$1,meta623760){return (new cljs.core.async.t623759(flag__$1,alt_flag__$1,meta623760));
});
}
return (new cljs.core.async.t623759(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t623765 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623765 = (function (cb,flag,alt_handler,meta623766){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta623766 = meta623766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623765.cljs$lang$type = true;
cljs.core.async.t623765.cljs$lang$ctorStr = "cljs.core.async/t623765";
cljs.core.async.t623765.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623765");
});
cljs.core.async.t623765.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t623765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t623765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t623765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623767){var self__ = this;
var _623767__$1 = this;return self__.meta623766;
});
cljs.core.async.t623765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623767,meta623766__$1){var self__ = this;
var _623767__$1 = this;return (new cljs.core.async.t623765(self__.cb,self__.flag,self__.alt_handler,meta623766__$1));
});
cljs.core.async.__GT_t623765 = (function __GT_t623765(cb__$1,flag__$1,alt_handler__$1,meta623766){return (new cljs.core.async.t623765(cb__$1,flag__$1,alt_handler__$1,meta623766));
});
}
return (new cljs.core.async.t623765(cb,flag,alt_handler,null));
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
return (function (p1__623768_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__623768_SHARP_,port], null));
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
var G__623769 = (i + 1);
i = G__623769;
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
var alts_BANG___delegate = function (ports,p__623770){var map__623772 = p__623770;var map__623772__$1 = ((cljs.core.seq_QMARK_.call(null,map__623772))?cljs.core.apply.call(null,cljs.core.hash_map,map__623772):map__623772);var opts = map__623772__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__623770 = null;if (arguments.length > 1) {
  p__623770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__623770);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__623773){
var ports = cljs.core.first(arglist__623773);
var p__623770 = cljs.core.rest(arglist__623773);
return alts_BANG___delegate(ports,p__623770);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t623781 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623781 = (function (ch,f,map_LT_,meta623782){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta623782 = meta623782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623781.cljs$lang$type = true;
cljs.core.async.t623781.cljs$lang$ctorStr = "cljs.core.async/t623781";
cljs.core.async.t623781.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623781");
});
cljs.core.async.t623781.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t623781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t623781.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t623781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t623784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623784 = (function (fn1,_,meta623782,ch,f,map_LT_,meta623785){
this.fn1 = fn1;
this._ = _;
this.meta623782 = meta623782;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta623785 = meta623785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623784.cljs$lang$type = true;
cljs.core.async.t623784.cljs$lang$ctorStr = "cljs.core.async/t623784";
cljs.core.async.t623784.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623784");
});
cljs.core.async.t623784.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t623784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t623784.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t623784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__623774_SHARP_){return f1.call(null,(((p1__623774_SHARP_ == null))?null:self__.f.call(null,p1__623774_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t623784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623786){var self__ = this;
var _623786__$1 = this;return self__.meta623785;
});
cljs.core.async.t623784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623786,meta623785__$1){var self__ = this;
var _623786__$1 = this;return (new cljs.core.async.t623784(self__.fn1,self__._,self__.meta623782,self__.ch,self__.f,self__.map_LT_,meta623785__$1));
});
cljs.core.async.__GT_t623784 = (function __GT_t623784(fn1__$1,___$2,meta623782__$1,ch__$2,f__$2,map_LT___$2,meta623785){return (new cljs.core.async.t623784(fn1__$1,___$2,meta623782__$1,ch__$2,f__$2,map_LT___$2,meta623785));
});
}
return (new cljs.core.async.t623784(fn1,___$1,self__.meta623782,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t623781.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t623781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t623781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623783){var self__ = this;
var _623783__$1 = this;return self__.meta623782;
});
cljs.core.async.t623781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623783,meta623782__$1){var self__ = this;
var _623783__$1 = this;return (new cljs.core.async.t623781(self__.ch,self__.f,self__.map_LT_,meta623782__$1));
});
cljs.core.async.__GT_t623781 = (function __GT_t623781(ch__$1,f__$1,map_LT___$1,meta623782){return (new cljs.core.async.t623781(ch__$1,f__$1,map_LT___$1,meta623782));
});
}
return (new cljs.core.async.t623781(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t623790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623790 = (function (ch,f,map_GT_,meta623791){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta623791 = meta623791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623790.cljs$lang$type = true;
cljs.core.async.t623790.cljs$lang$ctorStr = "cljs.core.async/t623790";
cljs.core.async.t623790.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623790");
});
cljs.core.async.t623790.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t623790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t623790.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t623790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t623790.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t623790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t623790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623792){var self__ = this;
var _623792__$1 = this;return self__.meta623791;
});
cljs.core.async.t623790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623792,meta623791__$1){var self__ = this;
var _623792__$1 = this;return (new cljs.core.async.t623790(self__.ch,self__.f,self__.map_GT_,meta623791__$1));
});
cljs.core.async.__GT_t623790 = (function __GT_t623790(ch__$1,f__$1,map_GT___$1,meta623791){return (new cljs.core.async.t623790(ch__$1,f__$1,map_GT___$1,meta623791));
});
}
return (new cljs.core.async.t623790(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t623796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t623796 = (function (ch,p,filter_GT_,meta623797){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta623797 = meta623797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t623796.cljs$lang$type = true;
cljs.core.async.t623796.cljs$lang$ctorStr = "cljs.core.async/t623796";
cljs.core.async.t623796.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t623796");
});
cljs.core.async.t623796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t623796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t623796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t623796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t623796.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t623796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t623796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_623798){var self__ = this;
var _623798__$1 = this;return self__.meta623797;
});
cljs.core.async.t623796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_623798,meta623797__$1){var self__ = this;
var _623798__$1 = this;return (new cljs.core.async.t623796(self__.ch,self__.p,self__.filter_GT_,meta623797__$1));
});
cljs.core.async.__GT_t623796 = (function __GT_t623796(ch__$1,p__$1,filter_GT___$1,meta623797){return (new cljs.core.async.t623796(ch__$1,p__$1,filter_GT___$1,meta623797));
});
}
return (new cljs.core.async.t623796(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___623881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_623860){var state_val_623861 = (state_623860[1]);if((state_val_623861 === 1))
{var state_623860__$1 = state_623860;var statearr_623862_623882 = state_623860__$1;(statearr_623862_623882[2] = null);
(statearr_623862_623882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 2))
{var state_623860__$1 = state_623860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_623860__$1,4,ch);
} else
{if((state_val_623861 === 3))
{var inst_623858 = (state_623860[2]);var state_623860__$1 = state_623860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_623860__$1,inst_623858);
} else
{if((state_val_623861 === 4))
{var inst_623842 = (state_623860[7]);var inst_623842__$1 = (state_623860[2]);var inst_623843 = (inst_623842__$1 == null);var state_623860__$1 = (function (){var statearr_623863 = state_623860;(statearr_623863[7] = inst_623842__$1);
return statearr_623863;
})();if(cljs.core.truth_(inst_623843))
{var statearr_623864_623883 = state_623860__$1;(statearr_623864_623883[1] = 5);
} else
{var statearr_623865_623884 = state_623860__$1;(statearr_623865_623884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 5))
{var inst_623845 = cljs.core.async.close_BANG_.call(null,out);var state_623860__$1 = state_623860;var statearr_623866_623885 = state_623860__$1;(statearr_623866_623885[2] = inst_623845);
(statearr_623866_623885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 6))
{var inst_623842 = (state_623860[7]);var inst_623847 = p.call(null,inst_623842);var state_623860__$1 = state_623860;if(cljs.core.truth_(inst_623847))
{var statearr_623867_623886 = state_623860__$1;(statearr_623867_623886[1] = 8);
} else
{var statearr_623868_623887 = state_623860__$1;(statearr_623868_623887[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 7))
{var inst_623856 = (state_623860[2]);var state_623860__$1 = state_623860;var statearr_623869_623888 = state_623860__$1;(statearr_623869_623888[2] = inst_623856);
(statearr_623869_623888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 8))
{var inst_623842 = (state_623860[7]);var state_623860__$1 = state_623860;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_623860__$1,11,out,inst_623842);
} else
{if((state_val_623861 === 9))
{var state_623860__$1 = state_623860;var statearr_623870_623889 = state_623860__$1;(statearr_623870_623889[2] = null);
(statearr_623870_623889[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 10))
{var inst_623853 = (state_623860[2]);var state_623860__$1 = (function (){var statearr_623871 = state_623860;(statearr_623871[8] = inst_623853);
return statearr_623871;
})();var statearr_623872_623890 = state_623860__$1;(statearr_623872_623890[2] = null);
(statearr_623872_623890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_623861 === 11))
{var inst_623850 = (state_623860[2]);var state_623860__$1 = state_623860;var statearr_623873_623891 = state_623860__$1;(statearr_623873_623891[2] = inst_623850);
(statearr_623873_623891[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_623877 = (new Array(9));(statearr_623877[0] = state_machine__10214__auto__);
(statearr_623877[1] = 1);
return statearr_623877;
});
var state_machine__10214__auto____1 = (function (state_623860){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_623860);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e623878){if((e623878 instanceof Object))
{var ex__10217__auto__ = e623878;var statearr_623879_623892 = state_623860;(statearr_623879_623892[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_623860);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e623878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__623893 = state_623860;
state_623860 = G__623893;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_623860){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_623860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_623880 = f__10284__auto__.call(null);(statearr_623880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___623881);
return statearr_623880;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_624045){var state_val_624046 = (state_624045[1]);if((state_val_624046 === 1))
{var state_624045__$1 = state_624045;var statearr_624047_624084 = state_624045__$1;(statearr_624047_624084[2] = null);
(statearr_624047_624084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 2))
{var state_624045__$1 = state_624045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_624045__$1,4,in$);
} else
{if((state_val_624046 === 3))
{var inst_624043 = (state_624045[2]);var state_624045__$1 = state_624045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_624045__$1,inst_624043);
} else
{if((state_val_624046 === 4))
{var inst_623991 = (state_624045[7]);var inst_623991__$1 = (state_624045[2]);var inst_623992 = (inst_623991__$1 == null);var state_624045__$1 = (function (){var statearr_624048 = state_624045;(statearr_624048[7] = inst_623991__$1);
return statearr_624048;
})();if(cljs.core.truth_(inst_623992))
{var statearr_624049_624085 = state_624045__$1;(statearr_624049_624085[1] = 5);
} else
{var statearr_624050_624086 = state_624045__$1;(statearr_624050_624086[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 5))
{var inst_623994 = cljs.core.async.close_BANG_.call(null,out);var state_624045__$1 = state_624045;var statearr_624051_624087 = state_624045__$1;(statearr_624051_624087[2] = inst_623994);
(statearr_624051_624087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 6))
{var inst_623991 = (state_624045[7]);var inst_623996 = f.call(null,inst_623991);var inst_624001 = cljs.core.seq.call(null,inst_623996);var inst_624002 = inst_624001;var inst_624003 = null;var inst_624004 = 0;var inst_624005 = 0;var state_624045__$1 = (function (){var statearr_624052 = state_624045;(statearr_624052[8] = inst_624005);
(statearr_624052[9] = inst_624003);
(statearr_624052[10] = inst_624004);
(statearr_624052[11] = inst_624002);
return statearr_624052;
})();var statearr_624053_624088 = state_624045__$1;(statearr_624053_624088[2] = null);
(statearr_624053_624088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 7))
{var inst_624041 = (state_624045[2]);var state_624045__$1 = state_624045;var statearr_624054_624089 = state_624045__$1;(statearr_624054_624089[2] = inst_624041);
(statearr_624054_624089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 8))
{var inst_624005 = (state_624045[8]);var inst_624004 = (state_624045[10]);var inst_624007 = (inst_624005 < inst_624004);var inst_624008 = inst_624007;var state_624045__$1 = state_624045;if(cljs.core.truth_(inst_624008))
{var statearr_624055_624090 = state_624045__$1;(statearr_624055_624090[1] = 10);
} else
{var statearr_624056_624091 = state_624045__$1;(statearr_624056_624091[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 9))
{var inst_624038 = (state_624045[2]);var state_624045__$1 = (function (){var statearr_624057 = state_624045;(statearr_624057[12] = inst_624038);
return statearr_624057;
})();var statearr_624058_624092 = state_624045__$1;(statearr_624058_624092[2] = null);
(statearr_624058_624092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 10))
{var inst_624005 = (state_624045[8]);var inst_624003 = (state_624045[9]);var inst_624010 = cljs.core._nth.call(null,inst_624003,inst_624005);var state_624045__$1 = state_624045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_624045__$1,13,out,inst_624010);
} else
{if((state_val_624046 === 11))
{var inst_624016 = (state_624045[13]);var inst_624002 = (state_624045[11]);var inst_624016__$1 = cljs.core.seq.call(null,inst_624002);var state_624045__$1 = (function (){var statearr_624062 = state_624045;(statearr_624062[13] = inst_624016__$1);
return statearr_624062;
})();if(inst_624016__$1)
{var statearr_624063_624093 = state_624045__$1;(statearr_624063_624093[1] = 14);
} else
{var statearr_624064_624094 = state_624045__$1;(statearr_624064_624094[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 12))
{var inst_624036 = (state_624045[2]);var state_624045__$1 = state_624045;var statearr_624065_624095 = state_624045__$1;(statearr_624065_624095[2] = inst_624036);
(statearr_624065_624095[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 13))
{var inst_624005 = (state_624045[8]);var inst_624003 = (state_624045[9]);var inst_624004 = (state_624045[10]);var inst_624002 = (state_624045[11]);var inst_624012 = (state_624045[2]);var inst_624013 = (inst_624005 + 1);var tmp624059 = inst_624003;var tmp624060 = inst_624004;var tmp624061 = inst_624002;var inst_624002__$1 = tmp624061;var inst_624003__$1 = tmp624059;var inst_624004__$1 = tmp624060;var inst_624005__$1 = inst_624013;var state_624045__$1 = (function (){var statearr_624066 = state_624045;(statearr_624066[14] = inst_624012);
(statearr_624066[8] = inst_624005__$1);
(statearr_624066[9] = inst_624003__$1);
(statearr_624066[10] = inst_624004__$1);
(statearr_624066[11] = inst_624002__$1);
return statearr_624066;
})();var statearr_624067_624096 = state_624045__$1;(statearr_624067_624096[2] = null);
(statearr_624067_624096[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 14))
{var inst_624016 = (state_624045[13]);var inst_624018 = cljs.core.chunked_seq_QMARK_.call(null,inst_624016);var state_624045__$1 = state_624045;if(inst_624018)
{var statearr_624068_624097 = state_624045__$1;(statearr_624068_624097[1] = 17);
} else
{var statearr_624069_624098 = state_624045__$1;(statearr_624069_624098[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 15))
{var state_624045__$1 = state_624045;var statearr_624070_624099 = state_624045__$1;(statearr_624070_624099[2] = null);
(statearr_624070_624099[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 16))
{var inst_624034 = (state_624045[2]);var state_624045__$1 = state_624045;var statearr_624071_624100 = state_624045__$1;(statearr_624071_624100[2] = inst_624034);
(statearr_624071_624100[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 17))
{var inst_624016 = (state_624045[13]);var inst_624020 = cljs.core.chunk_first.call(null,inst_624016);var inst_624021 = cljs.core.chunk_rest.call(null,inst_624016);var inst_624022 = cljs.core.count.call(null,inst_624020);var inst_624002 = inst_624021;var inst_624003 = inst_624020;var inst_624004 = inst_624022;var inst_624005 = 0;var state_624045__$1 = (function (){var statearr_624072 = state_624045;(statearr_624072[8] = inst_624005);
(statearr_624072[9] = inst_624003);
(statearr_624072[10] = inst_624004);
(statearr_624072[11] = inst_624002);
return statearr_624072;
})();var statearr_624073_624101 = state_624045__$1;(statearr_624073_624101[2] = null);
(statearr_624073_624101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 18))
{var inst_624016 = (state_624045[13]);var inst_624025 = cljs.core.first.call(null,inst_624016);var state_624045__$1 = state_624045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_624045__$1,20,out,inst_624025);
} else
{if((state_val_624046 === 19))
{var inst_624031 = (state_624045[2]);var state_624045__$1 = state_624045;var statearr_624074_624102 = state_624045__$1;(statearr_624074_624102[2] = inst_624031);
(statearr_624074_624102[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624046 === 20))
{var inst_624016 = (state_624045[13]);var inst_624027 = (state_624045[2]);var inst_624028 = cljs.core.next.call(null,inst_624016);var inst_624002 = inst_624028;var inst_624003 = null;var inst_624004 = 0;var inst_624005 = 0;var state_624045__$1 = (function (){var statearr_624075 = state_624045;(statearr_624075[15] = inst_624027);
(statearr_624075[8] = inst_624005);
(statearr_624075[9] = inst_624003);
(statearr_624075[10] = inst_624004);
(statearr_624075[11] = inst_624002);
return statearr_624075;
})();var statearr_624076_624103 = state_624045__$1;(statearr_624076_624103[2] = null);
(statearr_624076_624103[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_624080 = (new Array(16));(statearr_624080[0] = state_machine__10214__auto__);
(statearr_624080[1] = 1);
return statearr_624080;
});
var state_machine__10214__auto____1 = (function (state_624045){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_624045);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e624081){if((e624081 instanceof Object))
{var ex__10217__auto__ = e624081;var statearr_624082_624104 = state_624045;(statearr_624082_624104[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e624081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__624105 = state_624045;
state_624045 = G__624105;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_624045){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_624045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_624083 = f__10284__auto__.call(null);(statearr_624083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_624083;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___624186 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_624165){var state_val_624166 = (state_624165[1]);if((state_val_624166 === 1))
{var state_624165__$1 = state_624165;var statearr_624167_624187 = state_624165__$1;(statearr_624167_624187[2] = null);
(statearr_624167_624187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 2))
{var state_624165__$1 = state_624165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_624165__$1,4,from);
} else
{if((state_val_624166 === 3))
{var inst_624163 = (state_624165[2]);var state_624165__$1 = state_624165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_624165__$1,inst_624163);
} else
{if((state_val_624166 === 4))
{var inst_624148 = (state_624165[7]);var inst_624148__$1 = (state_624165[2]);var inst_624149 = (inst_624148__$1 == null);var state_624165__$1 = (function (){var statearr_624168 = state_624165;(statearr_624168[7] = inst_624148__$1);
return statearr_624168;
})();if(cljs.core.truth_(inst_624149))
{var statearr_624169_624188 = state_624165__$1;(statearr_624169_624188[1] = 5);
} else
{var statearr_624170_624189 = state_624165__$1;(statearr_624170_624189[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 5))
{var state_624165__$1 = state_624165;if(cljs.core.truth_(close_QMARK_))
{var statearr_624171_624190 = state_624165__$1;(statearr_624171_624190[1] = 8);
} else
{var statearr_624172_624191 = state_624165__$1;(statearr_624172_624191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 6))
{var inst_624148 = (state_624165[7]);var state_624165__$1 = state_624165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_624165__$1,11,to,inst_624148);
} else
{if((state_val_624166 === 7))
{var inst_624161 = (state_624165[2]);var state_624165__$1 = state_624165;var statearr_624173_624192 = state_624165__$1;(statearr_624173_624192[2] = inst_624161);
(statearr_624173_624192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 8))
{var inst_624152 = cljs.core.async.close_BANG_.call(null,to);var state_624165__$1 = state_624165;var statearr_624174_624193 = state_624165__$1;(statearr_624174_624193[2] = inst_624152);
(statearr_624174_624193[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 9))
{var state_624165__$1 = state_624165;var statearr_624175_624194 = state_624165__$1;(statearr_624175_624194[2] = null);
(statearr_624175_624194[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 10))
{var inst_624155 = (state_624165[2]);var state_624165__$1 = state_624165;var statearr_624176_624195 = state_624165__$1;(statearr_624176_624195[2] = inst_624155);
(statearr_624176_624195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624166 === 11))
{var inst_624158 = (state_624165[2]);var state_624165__$1 = (function (){var statearr_624177 = state_624165;(statearr_624177[8] = inst_624158);
return statearr_624177;
})();var statearr_624178_624196 = state_624165__$1;(statearr_624178_624196[2] = null);
(statearr_624178_624196[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_624182 = (new Array(9));(statearr_624182[0] = state_machine__10214__auto__);
(statearr_624182[1] = 1);
return statearr_624182;
});
var state_machine__10214__auto____1 = (function (state_624165){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_624165);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e624183){if((e624183 instanceof Object))
{var ex__10217__auto__ = e624183;var statearr_624184_624197 = state_624165;(statearr_624184_624197[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e624183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__624198 = state_624165;
state_624165 = G__624198;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_624165){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_624165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_624185 = f__10284__auto__.call(null);(statearr_624185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___624186);
return statearr_624185;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___624285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_624263){var state_val_624264 = (state_624263[1]);if((state_val_624264 === 1))
{var state_624263__$1 = state_624263;var statearr_624265_624286 = state_624263__$1;(statearr_624265_624286[2] = null);
(statearr_624265_624286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 2))
{var state_624263__$1 = state_624263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_624263__$1,4,ch);
} else
{if((state_val_624264 === 3))
{var inst_624261 = (state_624263[2]);var state_624263__$1 = state_624263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_624263__$1,inst_624261);
} else
{if((state_val_624264 === 4))
{var inst_624244 = (state_624263[7]);var inst_624244__$1 = (state_624263[2]);var inst_624245 = (inst_624244__$1 == null);var state_624263__$1 = (function (){var statearr_624266 = state_624263;(statearr_624266[7] = inst_624244__$1);
return statearr_624266;
})();if(cljs.core.truth_(inst_624245))
{var statearr_624267_624287 = state_624263__$1;(statearr_624267_624287[1] = 5);
} else
{var statearr_624268_624288 = state_624263__$1;(statearr_624268_624288[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 5))
{var inst_624247 = cljs.core.async.close_BANG_.call(null,tc);var inst_624248 = cljs.core.async.close_BANG_.call(null,fc);var state_624263__$1 = (function (){var statearr_624269 = state_624263;(statearr_624269[8] = inst_624247);
return statearr_624269;
})();var statearr_624270_624289 = state_624263__$1;(statearr_624270_624289[2] = inst_624248);
(statearr_624270_624289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 6))
{var inst_624244 = (state_624263[7]);var inst_624250 = p.call(null,inst_624244);var state_624263__$1 = state_624263;if(cljs.core.truth_(inst_624250))
{var statearr_624271_624290 = state_624263__$1;(statearr_624271_624290[1] = 9);
} else
{var statearr_624272_624291 = state_624263__$1;(statearr_624272_624291[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 7))
{var inst_624259 = (state_624263[2]);var state_624263__$1 = state_624263;var statearr_624273_624292 = state_624263__$1;(statearr_624273_624292[2] = inst_624259);
(statearr_624273_624292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 8))
{var inst_624256 = (state_624263[2]);var state_624263__$1 = (function (){var statearr_624274 = state_624263;(statearr_624274[9] = inst_624256);
return statearr_624274;
})();var statearr_624275_624293 = state_624263__$1;(statearr_624275_624293[2] = null);
(statearr_624275_624293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 9))
{var state_624263__$1 = state_624263;var statearr_624276_624294 = state_624263__$1;(statearr_624276_624294[2] = tc);
(statearr_624276_624294[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 10))
{var state_624263__$1 = state_624263;var statearr_624277_624295 = state_624263__$1;(statearr_624277_624295[2] = fc);
(statearr_624277_624295[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624264 === 11))
{var inst_624244 = (state_624263[7]);var inst_624254 = (state_624263[2]);var state_624263__$1 = state_624263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_624263__$1,8,inst_624254,inst_624244);
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
var state_machine__10214__auto____0 = (function (){var statearr_624281 = (new Array(10));(statearr_624281[0] = state_machine__10214__auto__);
(statearr_624281[1] = 1);
return statearr_624281;
});
var state_machine__10214__auto____1 = (function (state_624263){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_624263);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e624282){if((e624282 instanceof Object))
{var ex__10217__auto__ = e624282;var statearr_624283_624296 = state_624263;(statearr_624283_624296[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e624282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__624297 = state_624263;
state_624263 = G__624297;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_624263){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_624263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_624284 = f__10284__auto__.call(null);(statearr_624284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___624285);
return statearr_624284;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_624344){var state_val_624345 = (state_624344[1]);if((state_val_624345 === 7))
{var inst_624340 = (state_624344[2]);var state_624344__$1 = state_624344;var statearr_624346_624362 = state_624344__$1;(statearr_624346_624362[2] = inst_624340);
(statearr_624346_624362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624345 === 6))
{var inst_624333 = (state_624344[7]);var inst_624330 = (state_624344[8]);var inst_624337 = f.call(null,inst_624330,inst_624333);var inst_624330__$1 = inst_624337;var state_624344__$1 = (function (){var statearr_624347 = state_624344;(statearr_624347[8] = inst_624330__$1);
return statearr_624347;
})();var statearr_624348_624363 = state_624344__$1;(statearr_624348_624363[2] = null);
(statearr_624348_624363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624345 === 5))
{var inst_624330 = (state_624344[8]);var state_624344__$1 = state_624344;var statearr_624349_624364 = state_624344__$1;(statearr_624349_624364[2] = inst_624330);
(statearr_624349_624364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624345 === 4))
{var inst_624333 = (state_624344[7]);var inst_624333__$1 = (state_624344[2]);var inst_624334 = (inst_624333__$1 == null);var state_624344__$1 = (function (){var statearr_624350 = state_624344;(statearr_624350[7] = inst_624333__$1);
return statearr_624350;
})();if(cljs.core.truth_(inst_624334))
{var statearr_624351_624365 = state_624344__$1;(statearr_624351_624365[1] = 5);
} else
{var statearr_624352_624366 = state_624344__$1;(statearr_624352_624366[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624345 === 3))
{var inst_624342 = (state_624344[2]);var state_624344__$1 = state_624344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_624344__$1,inst_624342);
} else
{if((state_val_624345 === 2))
{var state_624344__$1 = state_624344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_624344__$1,4,ch);
} else
{if((state_val_624345 === 1))
{var inst_624330 = init;var state_624344__$1 = (function (){var statearr_624353 = state_624344;(statearr_624353[8] = inst_624330);
return statearr_624353;
})();var statearr_624354_624367 = state_624344__$1;(statearr_624354_624367[2] = null);
(statearr_624354_624367[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_624358 = (new Array(9));(statearr_624358[0] = state_machine__10214__auto__);
(statearr_624358[1] = 1);
return statearr_624358;
});
var state_machine__10214__auto____1 = (function (state_624344){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_624344);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e624359){if((e624359 instanceof Object))
{var ex__10217__auto__ = e624359;var statearr_624360_624368 = state_624344;(statearr_624360_624368[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e624359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__624369 = state_624344;
state_624344 = G__624369;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_624344){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_624344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_624361 = f__10284__auto__.call(null);(statearr_624361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_624361;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_624431){var state_val_624432 = (state_624431[1]);if((state_val_624432 === 1))
{var inst_624411 = cljs.core.seq.call(null,coll);var inst_624412 = inst_624411;var state_624431__$1 = (function (){var statearr_624433 = state_624431;(statearr_624433[7] = inst_624412);
return statearr_624433;
})();var statearr_624434_624452 = state_624431__$1;(statearr_624434_624452[2] = null);
(statearr_624434_624452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 2))
{var inst_624412 = (state_624431[7]);var state_624431__$1 = state_624431;if(cljs.core.truth_(inst_624412))
{var statearr_624435_624453 = state_624431__$1;(statearr_624435_624453[1] = 4);
} else
{var statearr_624436_624454 = state_624431__$1;(statearr_624436_624454[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 3))
{var inst_624429 = (state_624431[2]);var state_624431__$1 = state_624431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_624431__$1,inst_624429);
} else
{if((state_val_624432 === 4))
{var inst_624412 = (state_624431[7]);var inst_624415 = cljs.core.first.call(null,inst_624412);var state_624431__$1 = state_624431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_624431__$1,7,ch,inst_624415);
} else
{if((state_val_624432 === 5))
{var state_624431__$1 = state_624431;if(cljs.core.truth_(close_QMARK_))
{var statearr_624437_624455 = state_624431__$1;(statearr_624437_624455[1] = 8);
} else
{var statearr_624438_624456 = state_624431__$1;(statearr_624438_624456[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 6))
{var inst_624427 = (state_624431[2]);var state_624431__$1 = state_624431;var statearr_624439_624457 = state_624431__$1;(statearr_624439_624457[2] = inst_624427);
(statearr_624439_624457[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 7))
{var inst_624412 = (state_624431[7]);var inst_624417 = (state_624431[2]);var inst_624418 = cljs.core.next.call(null,inst_624412);var inst_624412__$1 = inst_624418;var state_624431__$1 = (function (){var statearr_624440 = state_624431;(statearr_624440[7] = inst_624412__$1);
(statearr_624440[8] = inst_624417);
return statearr_624440;
})();var statearr_624441_624458 = state_624431__$1;(statearr_624441_624458[2] = null);
(statearr_624441_624458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 8))
{var inst_624422 = cljs.core.async.close_BANG_.call(null,ch);var state_624431__$1 = state_624431;var statearr_624442_624459 = state_624431__$1;(statearr_624442_624459[2] = inst_624422);
(statearr_624442_624459[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 9))
{var state_624431__$1 = state_624431;var statearr_624443_624460 = state_624431__$1;(statearr_624443_624460[2] = null);
(statearr_624443_624460[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624432 === 10))
{var inst_624425 = (state_624431[2]);var state_624431__$1 = state_624431;var statearr_624444_624461 = state_624431__$1;(statearr_624444_624461[2] = inst_624425);
(statearr_624444_624461[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_624448 = (new Array(9));(statearr_624448[0] = state_machine__10214__auto__);
(statearr_624448[1] = 1);
return statearr_624448;
});
var state_machine__10214__auto____1 = (function (state_624431){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_624431);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e624449){if((e624449 instanceof Object))
{var ex__10217__auto__ = e624449;var statearr_624450_624462 = state_624431;(statearr_624450_624462[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e624449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__624463 = state_624431;
state_624431 = G__624463;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_624431){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_624431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_624451 = f__10284__auto__.call(null);(statearr_624451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_624451;
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
cljs.core.async.Mux = (function (){var obj624465 = {};return obj624465;
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
cljs.core.async.Mult = (function (){var obj624467 = {};return obj624467;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t624682 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t624682 = (function (cs,ch,mult,meta624683){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta624683 = meta624683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t624682.cljs$lang$type = true;
cljs.core.async.t624682.cljs$lang$ctorStr = "cljs.core.async/t624682";
cljs.core.async.t624682.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t624682");
});})(cs))
;
cljs.core.async.t624682.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t624682.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t624682.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t624682.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t624682.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t624682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t624682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_624684){var self__ = this;
var _624684__$1 = this;return self__.meta624683;
});})(cs))
;
cljs.core.async.t624682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_624684,meta624683__$1){var self__ = this;
var _624684__$1 = this;return (new cljs.core.async.t624682(self__.cs,self__.ch,self__.mult,meta624683__$1));
});})(cs))
;
cljs.core.async.__GT_t624682 = ((function (cs){
return (function __GT_t624682(cs__$1,ch__$1,mult__$1,meta624683){return (new cljs.core.async.t624682(cs__$1,ch__$1,mult__$1,meta624683));
});})(cs))
;
}
return (new cljs.core.async.t624682(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___624896 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_624814){var state_val_624815 = (state_624814[1]);if((state_val_624815 === 32))
{var inst_624687 = (state_624814[7]);var inst_624763 = (state_624814[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_624814,31,Object,null,30);var inst_624770 = cljs.core.async.put_BANG_.call(null,inst_624763,inst_624687,done);var state_624814__$1 = state_624814;var statearr_624816_624897 = state_624814__$1;(statearr_624816_624897[2] = inst_624770);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624814__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 1))
{var state_624814__$1 = state_624814;var statearr_624817_624898 = state_624814__$1;(statearr_624817_624898[2] = null);
(statearr_624817_624898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 33))
{var inst_624776 = (state_624814[9]);var inst_624778 = cljs.core.chunked_seq_QMARK_.call(null,inst_624776);var state_624814__$1 = state_624814;if(inst_624778)
{var statearr_624818_624899 = state_624814__$1;(statearr_624818_624899[1] = 36);
} else
{var statearr_624819_624900 = state_624814__$1;(statearr_624819_624900[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 2))
{var state_624814__$1 = state_624814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_624814__$1,4,ch);
} else
{if((state_val_624815 === 34))
{var state_624814__$1 = state_624814;var statearr_624820_624901 = state_624814__$1;(statearr_624820_624901[2] = null);
(statearr_624820_624901[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 3))
{var inst_624812 = (state_624814[2]);var state_624814__$1 = state_624814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_624814__$1,inst_624812);
} else
{if((state_val_624815 === 35))
{var inst_624801 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624821_624902 = state_624814__$1;(statearr_624821_624902[2] = inst_624801);
(statearr_624821_624902[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 4))
{var inst_624687 = (state_624814[7]);var inst_624687__$1 = (state_624814[2]);var inst_624688 = (inst_624687__$1 == null);var state_624814__$1 = (function (){var statearr_624822 = state_624814;(statearr_624822[7] = inst_624687__$1);
return statearr_624822;
})();if(cljs.core.truth_(inst_624688))
{var statearr_624823_624903 = state_624814__$1;(statearr_624823_624903[1] = 5);
} else
{var statearr_624824_624904 = state_624814__$1;(statearr_624824_624904[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 36))
{var inst_624776 = (state_624814[9]);var inst_624780 = cljs.core.chunk_first.call(null,inst_624776);var inst_624781 = cljs.core.chunk_rest.call(null,inst_624776);var inst_624782 = cljs.core.count.call(null,inst_624780);var inst_624755 = inst_624781;var inst_624756 = inst_624780;var inst_624757 = inst_624782;var inst_624758 = 0;var state_624814__$1 = (function (){var statearr_624825 = state_624814;(statearr_624825[10] = inst_624758);
(statearr_624825[11] = inst_624757);
(statearr_624825[12] = inst_624756);
(statearr_624825[13] = inst_624755);
return statearr_624825;
})();var statearr_624826_624905 = state_624814__$1;(statearr_624826_624905[2] = null);
(statearr_624826_624905[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 5))
{var inst_624694 = cljs.core.deref.call(null,cs);var inst_624695 = cljs.core.seq.call(null,inst_624694);var inst_624696 = inst_624695;var inst_624697 = null;var inst_624698 = 0;var inst_624699 = 0;var state_624814__$1 = (function (){var statearr_624827 = state_624814;(statearr_624827[14] = inst_624698);
(statearr_624827[15] = inst_624699);
(statearr_624827[16] = inst_624696);
(statearr_624827[17] = inst_624697);
return statearr_624827;
})();var statearr_624828_624906 = state_624814__$1;(statearr_624828_624906[2] = null);
(statearr_624828_624906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 37))
{var inst_624776 = (state_624814[9]);var inst_624785 = cljs.core.first.call(null,inst_624776);var state_624814__$1 = (function (){var statearr_624829 = state_624814;(statearr_624829[18] = inst_624785);
return statearr_624829;
})();var statearr_624830_624907 = state_624814__$1;(statearr_624830_624907[2] = null);
(statearr_624830_624907[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 6))
{var inst_624746 = cljs.core.deref.call(null,cs);var inst_624747 = cljs.core.keys.call(null,inst_624746);var inst_624748 = cljs.core.count.call(null,inst_624747);var inst_624749 = cljs.core.reset_BANG_.call(null,dctr,inst_624748);var inst_624754 = cljs.core.seq.call(null,inst_624747);var inst_624755 = inst_624754;var inst_624756 = null;var inst_624757 = 0;var inst_624758 = 0;var state_624814__$1 = (function (){var statearr_624831 = state_624814;(statearr_624831[10] = inst_624758);
(statearr_624831[19] = inst_624749);
(statearr_624831[11] = inst_624757);
(statearr_624831[12] = inst_624756);
(statearr_624831[13] = inst_624755);
return statearr_624831;
})();var statearr_624832_624908 = state_624814__$1;(statearr_624832_624908[2] = null);
(statearr_624832_624908[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 38))
{var inst_624798 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624833_624909 = state_624814__$1;(statearr_624833_624909[2] = inst_624798);
(statearr_624833_624909[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 7))
{var inst_624810 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624834_624910 = state_624814__$1;(statearr_624834_624910[2] = inst_624810);
(statearr_624834_624910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 39))
{var inst_624776 = (state_624814[9]);var inst_624794 = (state_624814[2]);var inst_624795 = cljs.core.next.call(null,inst_624776);var inst_624755 = inst_624795;var inst_624756 = null;var inst_624757 = 0;var inst_624758 = 0;var state_624814__$1 = (function (){var statearr_624835 = state_624814;(statearr_624835[20] = inst_624794);
(statearr_624835[10] = inst_624758);
(statearr_624835[11] = inst_624757);
(statearr_624835[12] = inst_624756);
(statearr_624835[13] = inst_624755);
return statearr_624835;
})();var statearr_624836_624911 = state_624814__$1;(statearr_624836_624911[2] = null);
(statearr_624836_624911[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 8))
{var inst_624698 = (state_624814[14]);var inst_624699 = (state_624814[15]);var inst_624701 = (inst_624699 < inst_624698);var inst_624702 = inst_624701;var state_624814__$1 = state_624814;if(cljs.core.truth_(inst_624702))
{var statearr_624837_624912 = state_624814__$1;(statearr_624837_624912[1] = 10);
} else
{var statearr_624838_624913 = state_624814__$1;(statearr_624838_624913[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 40))
{var inst_624785 = (state_624814[18]);var inst_624786 = (state_624814[2]);var inst_624787 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_624788 = cljs.core.async.untap_STAR_.call(null,m,inst_624785);var state_624814__$1 = (function (){var statearr_624839 = state_624814;(statearr_624839[21] = inst_624786);
(statearr_624839[22] = inst_624787);
return statearr_624839;
})();var statearr_624840_624914 = state_624814__$1;(statearr_624840_624914[2] = inst_624788);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624814__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 9))
{var inst_624744 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624841_624915 = state_624814__$1;(statearr_624841_624915[2] = inst_624744);
(statearr_624841_624915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 41))
{var inst_624785 = (state_624814[18]);var inst_624687 = (state_624814[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_624814,40,Object,null,39);var inst_624792 = cljs.core.async.put_BANG_.call(null,inst_624785,inst_624687,done);var state_624814__$1 = state_624814;var statearr_624842_624916 = state_624814__$1;(statearr_624842_624916[2] = inst_624792);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624814__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 10))
{var inst_624699 = (state_624814[15]);var inst_624697 = (state_624814[17]);var inst_624705 = cljs.core._nth.call(null,inst_624697,inst_624699);var inst_624706 = cljs.core.nth.call(null,inst_624705,0,null);var inst_624707 = cljs.core.nth.call(null,inst_624705,1,null);var state_624814__$1 = (function (){var statearr_624843 = state_624814;(statearr_624843[23] = inst_624706);
return statearr_624843;
})();if(cljs.core.truth_(inst_624707))
{var statearr_624844_624917 = state_624814__$1;(statearr_624844_624917[1] = 13);
} else
{var statearr_624845_624918 = state_624814__$1;(statearr_624845_624918[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 42))
{var inst_624807 = (state_624814[2]);var state_624814__$1 = (function (){var statearr_624846 = state_624814;(statearr_624846[24] = inst_624807);
return statearr_624846;
})();var statearr_624847_624919 = state_624814__$1;(statearr_624847_624919[2] = null);
(statearr_624847_624919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 11))
{var inst_624696 = (state_624814[16]);var inst_624716 = (state_624814[25]);var inst_624716__$1 = cljs.core.seq.call(null,inst_624696);var state_624814__$1 = (function (){var statearr_624848 = state_624814;(statearr_624848[25] = inst_624716__$1);
return statearr_624848;
})();if(inst_624716__$1)
{var statearr_624849_624920 = state_624814__$1;(statearr_624849_624920[1] = 16);
} else
{var statearr_624850_624921 = state_624814__$1;(statearr_624850_624921[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 12))
{var inst_624742 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624851_624922 = state_624814__$1;(statearr_624851_624922[2] = inst_624742);
(statearr_624851_624922[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 13))
{var inst_624706 = (state_624814[23]);var inst_624709 = cljs.core.async.close_BANG_.call(null,inst_624706);var state_624814__$1 = state_624814;var statearr_624855_624923 = state_624814__$1;(statearr_624855_624923[2] = inst_624709);
(statearr_624855_624923[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 14))
{var state_624814__$1 = state_624814;var statearr_624856_624924 = state_624814__$1;(statearr_624856_624924[2] = null);
(statearr_624856_624924[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 15))
{var inst_624698 = (state_624814[14]);var inst_624699 = (state_624814[15]);var inst_624696 = (state_624814[16]);var inst_624697 = (state_624814[17]);var inst_624712 = (state_624814[2]);var inst_624713 = (inst_624699 + 1);var tmp624852 = inst_624698;var tmp624853 = inst_624696;var tmp624854 = inst_624697;var inst_624696__$1 = tmp624853;var inst_624697__$1 = tmp624854;var inst_624698__$1 = tmp624852;var inst_624699__$1 = inst_624713;var state_624814__$1 = (function (){var statearr_624857 = state_624814;(statearr_624857[14] = inst_624698__$1);
(statearr_624857[15] = inst_624699__$1);
(statearr_624857[16] = inst_624696__$1);
(statearr_624857[17] = inst_624697__$1);
(statearr_624857[26] = inst_624712);
return statearr_624857;
})();var statearr_624858_624925 = state_624814__$1;(statearr_624858_624925[2] = null);
(statearr_624858_624925[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 16))
{var inst_624716 = (state_624814[25]);var inst_624718 = cljs.core.chunked_seq_QMARK_.call(null,inst_624716);var state_624814__$1 = state_624814;if(inst_624718)
{var statearr_624859_624926 = state_624814__$1;(statearr_624859_624926[1] = 19);
} else
{var statearr_624860_624927 = state_624814__$1;(statearr_624860_624927[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 17))
{var state_624814__$1 = state_624814;var statearr_624861_624928 = state_624814__$1;(statearr_624861_624928[2] = null);
(statearr_624861_624928[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 18))
{var inst_624740 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624862_624929 = state_624814__$1;(statearr_624862_624929[2] = inst_624740);
(statearr_624862_624929[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 19))
{var inst_624716 = (state_624814[25]);var inst_624720 = cljs.core.chunk_first.call(null,inst_624716);var inst_624721 = cljs.core.chunk_rest.call(null,inst_624716);var inst_624722 = cljs.core.count.call(null,inst_624720);var inst_624696 = inst_624721;var inst_624697 = inst_624720;var inst_624698 = inst_624722;var inst_624699 = 0;var state_624814__$1 = (function (){var statearr_624863 = state_624814;(statearr_624863[14] = inst_624698);
(statearr_624863[15] = inst_624699);
(statearr_624863[16] = inst_624696);
(statearr_624863[17] = inst_624697);
return statearr_624863;
})();var statearr_624864_624930 = state_624814__$1;(statearr_624864_624930[2] = null);
(statearr_624864_624930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 20))
{var inst_624716 = (state_624814[25]);var inst_624726 = cljs.core.first.call(null,inst_624716);var inst_624727 = cljs.core.nth.call(null,inst_624726,0,null);var inst_624728 = cljs.core.nth.call(null,inst_624726,1,null);var state_624814__$1 = (function (){var statearr_624865 = state_624814;(statearr_624865[27] = inst_624727);
return statearr_624865;
})();if(cljs.core.truth_(inst_624728))
{var statearr_624866_624931 = state_624814__$1;(statearr_624866_624931[1] = 22);
} else
{var statearr_624867_624932 = state_624814__$1;(statearr_624867_624932[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 21))
{var inst_624737 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624868_624933 = state_624814__$1;(statearr_624868_624933[2] = inst_624737);
(statearr_624868_624933[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 22))
{var inst_624727 = (state_624814[27]);var inst_624730 = cljs.core.async.close_BANG_.call(null,inst_624727);var state_624814__$1 = state_624814;var statearr_624869_624934 = state_624814__$1;(statearr_624869_624934[2] = inst_624730);
(statearr_624869_624934[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 23))
{var state_624814__$1 = state_624814;var statearr_624870_624935 = state_624814__$1;(statearr_624870_624935[2] = null);
(statearr_624870_624935[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 24))
{var inst_624716 = (state_624814[25]);var inst_624733 = (state_624814[2]);var inst_624734 = cljs.core.next.call(null,inst_624716);var inst_624696 = inst_624734;var inst_624697 = null;var inst_624698 = 0;var inst_624699 = 0;var state_624814__$1 = (function (){var statearr_624871 = state_624814;(statearr_624871[14] = inst_624698);
(statearr_624871[15] = inst_624699);
(statearr_624871[16] = inst_624696);
(statearr_624871[17] = inst_624697);
(statearr_624871[28] = inst_624733);
return statearr_624871;
})();var statearr_624872_624936 = state_624814__$1;(statearr_624872_624936[2] = null);
(statearr_624872_624936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 25))
{var inst_624758 = (state_624814[10]);var inst_624757 = (state_624814[11]);var inst_624760 = (inst_624758 < inst_624757);var inst_624761 = inst_624760;var state_624814__$1 = state_624814;if(cljs.core.truth_(inst_624761))
{var statearr_624873_624937 = state_624814__$1;(statearr_624873_624937[1] = 27);
} else
{var statearr_624874_624938 = state_624814__$1;(statearr_624874_624938[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 26))
{var inst_624805 = (state_624814[2]);var state_624814__$1 = (function (){var statearr_624875 = state_624814;(statearr_624875[29] = inst_624805);
return statearr_624875;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_624814__$1,42,dchan);
} else
{if((state_val_624815 === 27))
{var inst_624758 = (state_624814[10]);var inst_624756 = (state_624814[12]);var inst_624763 = cljs.core._nth.call(null,inst_624756,inst_624758);var state_624814__$1 = (function (){var statearr_624876 = state_624814;(statearr_624876[8] = inst_624763);
return statearr_624876;
})();var statearr_624877_624939 = state_624814__$1;(statearr_624877_624939[2] = null);
(statearr_624877_624939[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 28))
{var inst_624776 = (state_624814[9]);var inst_624755 = (state_624814[13]);var inst_624776__$1 = cljs.core.seq.call(null,inst_624755);var state_624814__$1 = (function (){var statearr_624881 = state_624814;(statearr_624881[9] = inst_624776__$1);
return statearr_624881;
})();if(inst_624776__$1)
{var statearr_624882_624940 = state_624814__$1;(statearr_624882_624940[1] = 33);
} else
{var statearr_624883_624941 = state_624814__$1;(statearr_624883_624941[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 29))
{var inst_624803 = (state_624814[2]);var state_624814__$1 = state_624814;var statearr_624884_624942 = state_624814__$1;(statearr_624884_624942[2] = inst_624803);
(statearr_624884_624942[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 30))
{var inst_624758 = (state_624814[10]);var inst_624757 = (state_624814[11]);var inst_624756 = (state_624814[12]);var inst_624755 = (state_624814[13]);var inst_624772 = (state_624814[2]);var inst_624773 = (inst_624758 + 1);var tmp624878 = inst_624757;var tmp624879 = inst_624756;var tmp624880 = inst_624755;var inst_624755__$1 = tmp624880;var inst_624756__$1 = tmp624879;var inst_624757__$1 = tmp624878;var inst_624758__$1 = inst_624773;var state_624814__$1 = (function (){var statearr_624885 = state_624814;(statearr_624885[30] = inst_624772);
(statearr_624885[10] = inst_624758__$1);
(statearr_624885[11] = inst_624757__$1);
(statearr_624885[12] = inst_624756__$1);
(statearr_624885[13] = inst_624755__$1);
return statearr_624885;
})();var statearr_624886_624943 = state_624814__$1;(statearr_624886_624943[2] = null);
(statearr_624886_624943[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_624815 === 31))
{var inst_624763 = (state_624814[8]);var inst_624764 = (state_624814[2]);var inst_624765 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_624766 = cljs.core.async.untap_STAR_.call(null,m,inst_624763);var state_624814__$1 = (function (){var statearr_624887 = state_624814;(statearr_624887[31] = inst_624764);
(statearr_624887[32] = inst_624765);
return statearr_624887;
})();var statearr_624888_624944 = state_624814__$1;(statearr_624888_624944[2] = inst_624766);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624814__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_624892 = (new Array(33));(statearr_624892[0] = state_machine__10214__auto__);
(statearr_624892[1] = 1);
return statearr_624892;
});
var state_machine__10214__auto____1 = (function (state_624814){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_624814);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e624893){if((e624893 instanceof Object))
{var ex__10217__auto__ = e624893;var statearr_624894_624945 = state_624814;(statearr_624894_624945[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_624814);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e624893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__624946 = state_624814;
state_624814 = G__624946;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_624814){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_624814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_624895 = f__10284__auto__.call(null);(statearr_624895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___624896);
return statearr_624895;
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
cljs.core.async.Mix = (function (){var obj624948 = {};return obj624948;
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
;var m = (function (){if(typeof cljs.core.async.t625058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t625058 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta625059){
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
this.meta625059 = meta625059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t625058.cljs$lang$type = true;
cljs.core.async.t625058.cljs$lang$ctorStr = "cljs.core.async/t625058";
cljs.core.async.t625058.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t625058");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t625058.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t625058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_625060){var self__ = this;
var _625060__$1 = this;return self__.meta625059;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t625058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_625060,meta625059__$1){var self__ = this;
var _625060__$1 = this;return (new cljs.core.async.t625058(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta625059__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t625058 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t625058(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta625059){return (new cljs.core.async.t625058(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta625059));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t625058(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___625167 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_625125){var state_val_625126 = (state_625125[1]);if((state_val_625126 === 1))
{var inst_625064 = (state_625125[7]);var inst_625064__$1 = calc_state.call(null);var inst_625065 = cljs.core.seq_QMARK_.call(null,inst_625064__$1);var state_625125__$1 = (function (){var statearr_625127 = state_625125;(statearr_625127[7] = inst_625064__$1);
return statearr_625127;
})();if(inst_625065)
{var statearr_625128_625168 = state_625125__$1;(statearr_625128_625168[1] = 2);
} else
{var statearr_625129_625169 = state_625125__$1;(statearr_625129_625169[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 2))
{var inst_625064 = (state_625125[7]);var inst_625067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_625064);var state_625125__$1 = state_625125;var statearr_625130_625170 = state_625125__$1;(statearr_625130_625170[2] = inst_625067);
(statearr_625130_625170[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 3))
{var inst_625064 = (state_625125[7]);var state_625125__$1 = state_625125;var statearr_625131_625171 = state_625125__$1;(statearr_625131_625171[2] = inst_625064);
(statearr_625131_625171[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 4))
{var inst_625064 = (state_625125[7]);var inst_625070 = (state_625125[2]);var inst_625071 = cljs.core.get.call(null,inst_625070,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_625072 = cljs.core.get.call(null,inst_625070,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_625073 = cljs.core.get.call(null,inst_625070,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_625074 = inst_625064;var state_625125__$1 = (function (){var statearr_625132 = state_625125;(statearr_625132[8] = inst_625073);
(statearr_625132[9] = inst_625072);
(statearr_625132[10] = inst_625074);
(statearr_625132[11] = inst_625071);
return statearr_625132;
})();var statearr_625133_625172 = state_625125__$1;(statearr_625133_625172[2] = null);
(statearr_625133_625172[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 5))
{var inst_625074 = (state_625125[10]);var inst_625077 = cljs.core.seq_QMARK_.call(null,inst_625074);var state_625125__$1 = state_625125;if(inst_625077)
{var statearr_625134_625173 = state_625125__$1;(statearr_625134_625173[1] = 7);
} else
{var statearr_625135_625174 = state_625125__$1;(statearr_625135_625174[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 6))
{var inst_625123 = (state_625125[2]);var state_625125__$1 = state_625125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_625125__$1,inst_625123);
} else
{if((state_val_625126 === 7))
{var inst_625074 = (state_625125[10]);var inst_625079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_625074);var state_625125__$1 = state_625125;var statearr_625136_625175 = state_625125__$1;(statearr_625136_625175[2] = inst_625079);
(statearr_625136_625175[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 8))
{var inst_625074 = (state_625125[10]);var state_625125__$1 = state_625125;var statearr_625137_625176 = state_625125__$1;(statearr_625137_625176[2] = inst_625074);
(statearr_625137_625176[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 9))
{var inst_625082 = (state_625125[12]);var inst_625082__$1 = (state_625125[2]);var inst_625083 = cljs.core.get.call(null,inst_625082__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_625084 = cljs.core.get.call(null,inst_625082__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_625085 = cljs.core.get.call(null,inst_625082__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_625125__$1 = (function (){var statearr_625138 = state_625125;(statearr_625138[13] = inst_625084);
(statearr_625138[14] = inst_625085);
(statearr_625138[12] = inst_625082__$1);
return statearr_625138;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_625125__$1,10,inst_625083);
} else
{if((state_val_625126 === 10))
{var inst_625090 = (state_625125[15]);var inst_625089 = (state_625125[16]);var inst_625088 = (state_625125[2]);var inst_625089__$1 = cljs.core.nth.call(null,inst_625088,0,null);var inst_625090__$1 = cljs.core.nth.call(null,inst_625088,1,null);var inst_625091 = (inst_625089__$1 == null);var inst_625092 = cljs.core._EQ_.call(null,inst_625090__$1,change);var inst_625093 = (inst_625091) || (inst_625092);var state_625125__$1 = (function (){var statearr_625139 = state_625125;(statearr_625139[15] = inst_625090__$1);
(statearr_625139[16] = inst_625089__$1);
return statearr_625139;
})();if(cljs.core.truth_(inst_625093))
{var statearr_625140_625177 = state_625125__$1;(statearr_625140_625177[1] = 11);
} else
{var statearr_625141_625178 = state_625125__$1;(statearr_625141_625178[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 11))
{var inst_625089 = (state_625125[16]);var inst_625095 = (inst_625089 == null);var state_625125__$1 = state_625125;if(cljs.core.truth_(inst_625095))
{var statearr_625142_625179 = state_625125__$1;(statearr_625142_625179[1] = 14);
} else
{var statearr_625143_625180 = state_625125__$1;(statearr_625143_625180[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 12))
{var inst_625104 = (state_625125[17]);var inst_625085 = (state_625125[14]);var inst_625090 = (state_625125[15]);var inst_625104__$1 = inst_625085.call(null,inst_625090);var state_625125__$1 = (function (){var statearr_625144 = state_625125;(statearr_625144[17] = inst_625104__$1);
return statearr_625144;
})();if(cljs.core.truth_(inst_625104__$1))
{var statearr_625145_625181 = state_625125__$1;(statearr_625145_625181[1] = 17);
} else
{var statearr_625146_625182 = state_625125__$1;(statearr_625146_625182[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 13))
{var inst_625121 = (state_625125[2]);var state_625125__$1 = state_625125;var statearr_625147_625183 = state_625125__$1;(statearr_625147_625183[2] = inst_625121);
(statearr_625147_625183[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 14))
{var inst_625090 = (state_625125[15]);var inst_625097 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_625090);var state_625125__$1 = state_625125;var statearr_625148_625184 = state_625125__$1;(statearr_625148_625184[2] = inst_625097);
(statearr_625148_625184[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 15))
{var state_625125__$1 = state_625125;var statearr_625149_625185 = state_625125__$1;(statearr_625149_625185[2] = null);
(statearr_625149_625185[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 16))
{var inst_625100 = (state_625125[2]);var inst_625101 = calc_state.call(null);var inst_625074 = inst_625101;var state_625125__$1 = (function (){var statearr_625150 = state_625125;(statearr_625150[18] = inst_625100);
(statearr_625150[10] = inst_625074);
return statearr_625150;
})();var statearr_625151_625186 = state_625125__$1;(statearr_625151_625186[2] = null);
(statearr_625151_625186[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 17))
{var inst_625104 = (state_625125[17]);var state_625125__$1 = state_625125;var statearr_625152_625187 = state_625125__$1;(statearr_625152_625187[2] = inst_625104);
(statearr_625152_625187[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 18))
{var inst_625084 = (state_625125[13]);var inst_625085 = (state_625125[14]);var inst_625090 = (state_625125[15]);var inst_625107 = cljs.core.empty_QMARK_.call(null,inst_625085);var inst_625108 = inst_625084.call(null,inst_625090);var inst_625109 = cljs.core.not.call(null,inst_625108);var inst_625110 = (inst_625107) && (inst_625109);var state_625125__$1 = state_625125;var statearr_625153_625188 = state_625125__$1;(statearr_625153_625188[2] = inst_625110);
(statearr_625153_625188[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 19))
{var inst_625112 = (state_625125[2]);var state_625125__$1 = state_625125;if(cljs.core.truth_(inst_625112))
{var statearr_625154_625189 = state_625125__$1;(statearr_625154_625189[1] = 20);
} else
{var statearr_625155_625190 = state_625125__$1;(statearr_625155_625190[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 20))
{var inst_625089 = (state_625125[16]);var state_625125__$1 = state_625125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_625125__$1,23,out,inst_625089);
} else
{if((state_val_625126 === 21))
{var state_625125__$1 = state_625125;var statearr_625156_625191 = state_625125__$1;(statearr_625156_625191[2] = null);
(statearr_625156_625191[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 22))
{var inst_625082 = (state_625125[12]);var inst_625118 = (state_625125[2]);var inst_625074 = inst_625082;var state_625125__$1 = (function (){var statearr_625157 = state_625125;(statearr_625157[19] = inst_625118);
(statearr_625157[10] = inst_625074);
return statearr_625157;
})();var statearr_625158_625192 = state_625125__$1;(statearr_625158_625192[2] = null);
(statearr_625158_625192[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625126 === 23))
{var inst_625115 = (state_625125[2]);var state_625125__$1 = state_625125;var statearr_625159_625193 = state_625125__$1;(statearr_625159_625193[2] = inst_625115);
(statearr_625159_625193[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_625163 = (new Array(20));(statearr_625163[0] = state_machine__10214__auto__);
(statearr_625163[1] = 1);
return statearr_625163;
});
var state_machine__10214__auto____1 = (function (state_625125){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_625125);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e625164){if((e625164 instanceof Object))
{var ex__10217__auto__ = e625164;var statearr_625165_625194 = state_625125;(statearr_625165_625194[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e625164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__625195 = state_625125;
state_625125 = G__625195;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_625125){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_625125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_625166 = f__10284__auto__.call(null);(statearr_625166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___625167);
return statearr_625166;
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
cljs.core.async.Pub = (function (){var obj625197 = {};return obj625197;
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
return (function (p1__625198_SHARP_){if(cljs.core.truth_(p1__625198_SHARP_.call(null,topic)))
{return p1__625198_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__625198_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t625323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t625323 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta625324){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta625324 = meta625324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t625323.cljs$lang$type = true;
cljs.core.async.t625323.cljs$lang$ctorStr = "cljs.core.async/t625323";
cljs.core.async.t625323.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t625323");
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t625323.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t625323.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_625325){var self__ = this;
var _625325__$1 = this;return self__.meta625324;
});})(mults,ensure_mult))
;
cljs.core.async.t625323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_625325,meta625324__$1){var self__ = this;
var _625325__$1 = this;return (new cljs.core.async.t625323(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta625324__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t625323 = ((function (mults,ensure_mult){
return (function __GT_t625323(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta625324){return (new cljs.core.async.t625323(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta625324));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t625323(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___625447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_625399){var state_val_625400 = (state_625399[1]);if((state_val_625400 === 1))
{var state_625399__$1 = state_625399;var statearr_625401_625448 = state_625399__$1;(statearr_625401_625448[2] = null);
(statearr_625401_625448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 2))
{var state_625399__$1 = state_625399;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_625399__$1,4,ch);
} else
{if((state_val_625400 === 3))
{var inst_625397 = (state_625399[2]);var state_625399__$1 = state_625399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_625399__$1,inst_625397);
} else
{if((state_val_625400 === 4))
{var inst_625328 = (state_625399[7]);var inst_625328__$1 = (state_625399[2]);var inst_625329 = (inst_625328__$1 == null);var state_625399__$1 = (function (){var statearr_625402 = state_625399;(statearr_625402[7] = inst_625328__$1);
return statearr_625402;
})();if(cljs.core.truth_(inst_625329))
{var statearr_625403_625449 = state_625399__$1;(statearr_625403_625449[1] = 5);
} else
{var statearr_625404_625450 = state_625399__$1;(statearr_625404_625450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 5))
{var inst_625335 = cljs.core.deref.call(null,mults);var inst_625336 = cljs.core.vals.call(null,inst_625335);var inst_625337 = cljs.core.seq.call(null,inst_625336);var inst_625338 = inst_625337;var inst_625339 = null;var inst_625340 = 0;var inst_625341 = 0;var state_625399__$1 = (function (){var statearr_625405 = state_625399;(statearr_625405[8] = inst_625341);
(statearr_625405[9] = inst_625339);
(statearr_625405[10] = inst_625338);
(statearr_625405[11] = inst_625340);
return statearr_625405;
})();var statearr_625406_625451 = state_625399__$1;(statearr_625406_625451[2] = null);
(statearr_625406_625451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 6))
{var inst_625378 = (state_625399[12]);var inst_625328 = (state_625399[7]);var inst_625376 = (state_625399[13]);var inst_625376__$1 = topic_fn.call(null,inst_625328);var inst_625377 = cljs.core.deref.call(null,mults);var inst_625378__$1 = cljs.core.get.call(null,inst_625377,inst_625376__$1);var state_625399__$1 = (function (){var statearr_625407 = state_625399;(statearr_625407[12] = inst_625378__$1);
(statearr_625407[13] = inst_625376__$1);
return statearr_625407;
})();if(cljs.core.truth_(inst_625378__$1))
{var statearr_625408_625452 = state_625399__$1;(statearr_625408_625452[1] = 19);
} else
{var statearr_625409_625453 = state_625399__$1;(statearr_625409_625453[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 7))
{var inst_625395 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625410_625454 = state_625399__$1;(statearr_625410_625454[2] = inst_625395);
(statearr_625410_625454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 8))
{var inst_625341 = (state_625399[8]);var inst_625340 = (state_625399[11]);var inst_625343 = (inst_625341 < inst_625340);var inst_625344 = inst_625343;var state_625399__$1 = state_625399;if(cljs.core.truth_(inst_625344))
{var statearr_625414_625455 = state_625399__$1;(statearr_625414_625455[1] = 10);
} else
{var statearr_625415_625456 = state_625399__$1;(statearr_625415_625456[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 9))
{var inst_625374 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625416_625457 = state_625399__$1;(statearr_625416_625457[2] = inst_625374);
(statearr_625416_625457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 10))
{var inst_625341 = (state_625399[8]);var inst_625339 = (state_625399[9]);var inst_625338 = (state_625399[10]);var inst_625340 = (state_625399[11]);var inst_625346 = cljs.core._nth.call(null,inst_625339,inst_625341);var inst_625347 = cljs.core.async.muxch_STAR_.call(null,inst_625346);var inst_625348 = cljs.core.async.close_BANG_.call(null,inst_625347);var inst_625349 = (inst_625341 + 1);var tmp625411 = inst_625339;var tmp625412 = inst_625338;var tmp625413 = inst_625340;var inst_625338__$1 = tmp625412;var inst_625339__$1 = tmp625411;var inst_625340__$1 = tmp625413;var inst_625341__$1 = inst_625349;var state_625399__$1 = (function (){var statearr_625417 = state_625399;(statearr_625417[14] = inst_625348);
(statearr_625417[8] = inst_625341__$1);
(statearr_625417[9] = inst_625339__$1);
(statearr_625417[10] = inst_625338__$1);
(statearr_625417[11] = inst_625340__$1);
return statearr_625417;
})();var statearr_625418_625458 = state_625399__$1;(statearr_625418_625458[2] = null);
(statearr_625418_625458[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 11))
{var inst_625352 = (state_625399[15]);var inst_625338 = (state_625399[10]);var inst_625352__$1 = cljs.core.seq.call(null,inst_625338);var state_625399__$1 = (function (){var statearr_625419 = state_625399;(statearr_625419[15] = inst_625352__$1);
return statearr_625419;
})();if(inst_625352__$1)
{var statearr_625420_625459 = state_625399__$1;(statearr_625420_625459[1] = 13);
} else
{var statearr_625421_625460 = state_625399__$1;(statearr_625421_625460[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 12))
{var inst_625372 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625422_625461 = state_625399__$1;(statearr_625422_625461[2] = inst_625372);
(statearr_625422_625461[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 13))
{var inst_625352 = (state_625399[15]);var inst_625354 = cljs.core.chunked_seq_QMARK_.call(null,inst_625352);var state_625399__$1 = state_625399;if(inst_625354)
{var statearr_625423_625462 = state_625399__$1;(statearr_625423_625462[1] = 16);
} else
{var statearr_625424_625463 = state_625399__$1;(statearr_625424_625463[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 14))
{var state_625399__$1 = state_625399;var statearr_625425_625464 = state_625399__$1;(statearr_625425_625464[2] = null);
(statearr_625425_625464[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 15))
{var inst_625370 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625426_625465 = state_625399__$1;(statearr_625426_625465[2] = inst_625370);
(statearr_625426_625465[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 16))
{var inst_625352 = (state_625399[15]);var inst_625356 = cljs.core.chunk_first.call(null,inst_625352);var inst_625357 = cljs.core.chunk_rest.call(null,inst_625352);var inst_625358 = cljs.core.count.call(null,inst_625356);var inst_625338 = inst_625357;var inst_625339 = inst_625356;var inst_625340 = inst_625358;var inst_625341 = 0;var state_625399__$1 = (function (){var statearr_625427 = state_625399;(statearr_625427[8] = inst_625341);
(statearr_625427[9] = inst_625339);
(statearr_625427[10] = inst_625338);
(statearr_625427[11] = inst_625340);
return statearr_625427;
})();var statearr_625428_625466 = state_625399__$1;(statearr_625428_625466[2] = null);
(statearr_625428_625466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 17))
{var inst_625352 = (state_625399[15]);var inst_625361 = cljs.core.first.call(null,inst_625352);var inst_625362 = cljs.core.async.muxch_STAR_.call(null,inst_625361);var inst_625363 = cljs.core.async.close_BANG_.call(null,inst_625362);var inst_625364 = cljs.core.next.call(null,inst_625352);var inst_625338 = inst_625364;var inst_625339 = null;var inst_625340 = 0;var inst_625341 = 0;var state_625399__$1 = (function (){var statearr_625429 = state_625399;(statearr_625429[8] = inst_625341);
(statearr_625429[16] = inst_625363);
(statearr_625429[9] = inst_625339);
(statearr_625429[10] = inst_625338);
(statearr_625429[11] = inst_625340);
return statearr_625429;
})();var statearr_625430_625467 = state_625399__$1;(statearr_625430_625467[2] = null);
(statearr_625430_625467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 18))
{var inst_625367 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625431_625468 = state_625399__$1;(statearr_625431_625468[2] = inst_625367);
(statearr_625431_625468[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 19))
{var state_625399__$1 = state_625399;var statearr_625432_625469 = state_625399__$1;(statearr_625432_625469[2] = null);
(statearr_625432_625469[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 20))
{var state_625399__$1 = state_625399;var statearr_625433_625470 = state_625399__$1;(statearr_625433_625470[2] = null);
(statearr_625433_625470[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 21))
{var inst_625392 = (state_625399[2]);var state_625399__$1 = (function (){var statearr_625434 = state_625399;(statearr_625434[17] = inst_625392);
return statearr_625434;
})();var statearr_625435_625471 = state_625399__$1;(statearr_625435_625471[2] = null);
(statearr_625435_625471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 22))
{var inst_625389 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625436_625472 = state_625399__$1;(statearr_625436_625472[2] = inst_625389);
(statearr_625436_625472[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 23))
{var inst_625376 = (state_625399[13]);var inst_625380 = (state_625399[2]);var inst_625381 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_625376);var state_625399__$1 = (function (){var statearr_625437 = state_625399;(statearr_625437[18] = inst_625380);
return statearr_625437;
})();var statearr_625438_625473 = state_625399__$1;(statearr_625438_625473[2] = inst_625381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625399__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625400 === 24))
{var inst_625378 = (state_625399[12]);var inst_625328 = (state_625399[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_625399,23,Object,null,22);var inst_625385 = cljs.core.async.muxch_STAR_.call(null,inst_625378);var state_625399__$1 = state_625399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_625399__$1,25,inst_625385,inst_625328);
} else
{if((state_val_625400 === 25))
{var inst_625387 = (state_625399[2]);var state_625399__$1 = state_625399;var statearr_625439_625474 = state_625399__$1;(statearr_625439_625474[2] = inst_625387);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625399__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_625443 = (new Array(19));(statearr_625443[0] = state_machine__10214__auto__);
(statearr_625443[1] = 1);
return statearr_625443;
});
var state_machine__10214__auto____1 = (function (state_625399){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_625399);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e625444){if((e625444 instanceof Object))
{var ex__10217__auto__ = e625444;var statearr_625445_625475 = state_625399;(statearr_625445_625475[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625399);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e625444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__625476 = state_625399;
state_625399 = G__625476;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_625399){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_625399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_625446 = f__10284__auto__.call(null);(statearr_625446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___625447);
return statearr_625446;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___625613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_625583){var state_val_625584 = (state_625583[1]);if((state_val_625584 === 1))
{var state_625583__$1 = state_625583;var statearr_625585_625614 = state_625583__$1;(statearr_625585_625614[2] = null);
(statearr_625585_625614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 2))
{var inst_625546 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_625547 = 0;var state_625583__$1 = (function (){var statearr_625586 = state_625583;(statearr_625586[7] = inst_625546);
(statearr_625586[8] = inst_625547);
return statearr_625586;
})();var statearr_625587_625615 = state_625583__$1;(statearr_625587_625615[2] = null);
(statearr_625587_625615[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 3))
{var inst_625581 = (state_625583[2]);var state_625583__$1 = state_625583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_625583__$1,inst_625581);
} else
{if((state_val_625584 === 4))
{var inst_625547 = (state_625583[8]);var inst_625549 = (inst_625547 < cnt);var state_625583__$1 = state_625583;if(cljs.core.truth_(inst_625549))
{var statearr_625588_625616 = state_625583__$1;(statearr_625588_625616[1] = 6);
} else
{var statearr_625589_625617 = state_625583__$1;(statearr_625589_625617[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 5))
{var inst_625567 = (state_625583[2]);var state_625583__$1 = (function (){var statearr_625590 = state_625583;(statearr_625590[9] = inst_625567);
return statearr_625590;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_625583__$1,12,dchan);
} else
{if((state_val_625584 === 6))
{var state_625583__$1 = state_625583;var statearr_625591_625618 = state_625583__$1;(statearr_625591_625618[2] = null);
(statearr_625591_625618[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 7))
{var state_625583__$1 = state_625583;var statearr_625592_625619 = state_625583__$1;(statearr_625592_625619[2] = null);
(statearr_625592_625619[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 8))
{var inst_625565 = (state_625583[2]);var state_625583__$1 = state_625583;var statearr_625593_625620 = state_625583__$1;(statearr_625593_625620[2] = inst_625565);
(statearr_625593_625620[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 9))
{var inst_625547 = (state_625583[8]);var inst_625560 = (state_625583[2]);var inst_625561 = (inst_625547 + 1);var inst_625547__$1 = inst_625561;var state_625583__$1 = (function (){var statearr_625594 = state_625583;(statearr_625594[10] = inst_625560);
(statearr_625594[8] = inst_625547__$1);
return statearr_625594;
})();var statearr_625595_625621 = state_625583__$1;(statearr_625595_625621[2] = null);
(statearr_625595_625621[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 10))
{var inst_625551 = (state_625583[2]);var inst_625552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_625583__$1 = (function (){var statearr_625596 = state_625583;(statearr_625596[11] = inst_625551);
return statearr_625596;
})();var statearr_625597_625622 = state_625583__$1;(statearr_625597_625622[2] = inst_625552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625583__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 11))
{var inst_625547 = (state_625583[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_625583,10,Object,null,9);var inst_625556 = chs__$1.call(null,inst_625547);var inst_625557 = done.call(null,inst_625547);var inst_625558 = cljs.core.async.take_BANG_.call(null,inst_625556,inst_625557);var state_625583__$1 = state_625583;var statearr_625598_625623 = state_625583__$1;(statearr_625598_625623[2] = inst_625558);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625583__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 12))
{var inst_625569 = (state_625583[12]);var inst_625569__$1 = (state_625583[2]);var inst_625570 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_625569__$1);var state_625583__$1 = (function (){var statearr_625599 = state_625583;(statearr_625599[12] = inst_625569__$1);
return statearr_625599;
})();if(cljs.core.truth_(inst_625570))
{var statearr_625600_625624 = state_625583__$1;(statearr_625600_625624[1] = 13);
} else
{var statearr_625601_625625 = state_625583__$1;(statearr_625601_625625[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 13))
{var inst_625572 = cljs.core.async.close_BANG_.call(null,out);var state_625583__$1 = state_625583;var statearr_625602_625626 = state_625583__$1;(statearr_625602_625626[2] = inst_625572);
(statearr_625602_625626[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 14))
{var inst_625569 = (state_625583[12]);var inst_625574 = cljs.core.apply.call(null,f,inst_625569);var state_625583__$1 = state_625583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_625583__$1,16,out,inst_625574);
} else
{if((state_val_625584 === 15))
{var inst_625579 = (state_625583[2]);var state_625583__$1 = state_625583;var statearr_625603_625627 = state_625583__$1;(statearr_625603_625627[2] = inst_625579);
(statearr_625603_625627[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625584 === 16))
{var inst_625576 = (state_625583[2]);var state_625583__$1 = (function (){var statearr_625604 = state_625583;(statearr_625604[13] = inst_625576);
return statearr_625604;
})();var statearr_625605_625628 = state_625583__$1;(statearr_625605_625628[2] = null);
(statearr_625605_625628[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_625609 = (new Array(14));(statearr_625609[0] = state_machine__10214__auto__);
(statearr_625609[1] = 1);
return statearr_625609;
});
var state_machine__10214__auto____1 = (function (state_625583){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_625583);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e625610){if((e625610 instanceof Object))
{var ex__10217__auto__ = e625610;var statearr_625611_625629 = state_625583;(statearr_625611_625629[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e625610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__625630 = state_625583;
state_625583 = G__625630;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_625583){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_625583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_625612 = f__10284__auto__.call(null);(statearr_625612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___625613);
return statearr_625612;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___625738 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_625714){var state_val_625715 = (state_625714[1]);if((state_val_625715 === 1))
{var inst_625685 = cljs.core.vec.call(null,chs);var inst_625686 = inst_625685;var state_625714__$1 = (function (){var statearr_625716 = state_625714;(statearr_625716[7] = inst_625686);
return statearr_625716;
})();var statearr_625717_625739 = state_625714__$1;(statearr_625717_625739[2] = null);
(statearr_625717_625739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 2))
{var inst_625686 = (state_625714[7]);var inst_625688 = cljs.core.count.call(null,inst_625686);var inst_625689 = (inst_625688 > 0);var state_625714__$1 = state_625714;if(cljs.core.truth_(inst_625689))
{var statearr_625718_625740 = state_625714__$1;(statearr_625718_625740[1] = 4);
} else
{var statearr_625719_625741 = state_625714__$1;(statearr_625719_625741[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 3))
{var inst_625712 = (state_625714[2]);var state_625714__$1 = state_625714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_625714__$1,inst_625712);
} else
{if((state_val_625715 === 4))
{var inst_625686 = (state_625714[7]);var state_625714__$1 = state_625714;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_625714__$1,7,inst_625686);
} else
{if((state_val_625715 === 5))
{var inst_625708 = cljs.core.async.close_BANG_.call(null,out);var state_625714__$1 = state_625714;var statearr_625720_625742 = state_625714__$1;(statearr_625720_625742[2] = inst_625708);
(statearr_625720_625742[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 6))
{var inst_625710 = (state_625714[2]);var state_625714__$1 = state_625714;var statearr_625721_625743 = state_625714__$1;(statearr_625721_625743[2] = inst_625710);
(statearr_625721_625743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 7))
{var inst_625694 = (state_625714[8]);var inst_625693 = (state_625714[9]);var inst_625693__$1 = (state_625714[2]);var inst_625694__$1 = cljs.core.nth.call(null,inst_625693__$1,0,null);var inst_625695 = cljs.core.nth.call(null,inst_625693__$1,1,null);var inst_625696 = (inst_625694__$1 == null);var state_625714__$1 = (function (){var statearr_625722 = state_625714;(statearr_625722[8] = inst_625694__$1);
(statearr_625722[9] = inst_625693__$1);
(statearr_625722[10] = inst_625695);
return statearr_625722;
})();if(cljs.core.truth_(inst_625696))
{var statearr_625723_625744 = state_625714__$1;(statearr_625723_625744[1] = 8);
} else
{var statearr_625724_625745 = state_625714__$1;(statearr_625724_625745[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 8))
{var inst_625686 = (state_625714[7]);var inst_625694 = (state_625714[8]);var inst_625693 = (state_625714[9]);var inst_625695 = (state_625714[10]);var inst_625698 = (function (){var c = inst_625695;var v = inst_625694;var vec__625691 = inst_625693;var cs = inst_625686;return ((function (c,v,vec__625691,cs,inst_625686,inst_625694,inst_625693,inst_625695,state_val_625715){
return (function (p1__625631_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__625631_SHARP_);
});
;})(c,v,vec__625691,cs,inst_625686,inst_625694,inst_625693,inst_625695,state_val_625715))
})();var inst_625699 = cljs.core.filterv.call(null,inst_625698,inst_625686);var inst_625686__$1 = inst_625699;var state_625714__$1 = (function (){var statearr_625725 = state_625714;(statearr_625725[7] = inst_625686__$1);
return statearr_625725;
})();var statearr_625726_625746 = state_625714__$1;(statearr_625726_625746[2] = null);
(statearr_625726_625746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 9))
{var inst_625694 = (state_625714[8]);var state_625714__$1 = state_625714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_625714__$1,11,out,inst_625694);
} else
{if((state_val_625715 === 10))
{var inst_625706 = (state_625714[2]);var state_625714__$1 = state_625714;var statearr_625728_625747 = state_625714__$1;(statearr_625728_625747[2] = inst_625706);
(statearr_625728_625747[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625715 === 11))
{var inst_625686 = (state_625714[7]);var inst_625703 = (state_625714[2]);var tmp625727 = inst_625686;var inst_625686__$1 = tmp625727;var state_625714__$1 = (function (){var statearr_625729 = state_625714;(statearr_625729[11] = inst_625703);
(statearr_625729[7] = inst_625686__$1);
return statearr_625729;
})();var statearr_625730_625748 = state_625714__$1;(statearr_625730_625748[2] = null);
(statearr_625730_625748[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_625734 = (new Array(12));(statearr_625734[0] = state_machine__10214__auto__);
(statearr_625734[1] = 1);
return statearr_625734;
});
var state_machine__10214__auto____1 = (function (state_625714){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_625714);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e625735){if((e625735 instanceof Object))
{var ex__10217__auto__ = e625735;var statearr_625736_625749 = state_625714;(statearr_625736_625749[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e625735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__625750 = state_625714;
state_625714 = G__625750;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_625714){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_625714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_625737 = f__10284__auto__.call(null);(statearr_625737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___625738);
return statearr_625737;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___625843 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_625820){var state_val_625821 = (state_625820[1]);if((state_val_625821 === 1))
{var inst_625797 = 0;var state_625820__$1 = (function (){var statearr_625822 = state_625820;(statearr_625822[7] = inst_625797);
return statearr_625822;
})();var statearr_625823_625844 = state_625820__$1;(statearr_625823_625844[2] = null);
(statearr_625823_625844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 2))
{var inst_625797 = (state_625820[7]);var inst_625799 = (inst_625797 < n);var state_625820__$1 = state_625820;if(cljs.core.truth_(inst_625799))
{var statearr_625824_625845 = state_625820__$1;(statearr_625824_625845[1] = 4);
} else
{var statearr_625825_625846 = state_625820__$1;(statearr_625825_625846[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 3))
{var inst_625817 = (state_625820[2]);var inst_625818 = cljs.core.async.close_BANG_.call(null,out);var state_625820__$1 = (function (){var statearr_625826 = state_625820;(statearr_625826[8] = inst_625817);
return statearr_625826;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_625820__$1,inst_625818);
} else
{if((state_val_625821 === 4))
{var state_625820__$1 = state_625820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_625820__$1,7,ch);
} else
{if((state_val_625821 === 5))
{var state_625820__$1 = state_625820;var statearr_625827_625847 = state_625820__$1;(statearr_625827_625847[2] = null);
(statearr_625827_625847[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 6))
{var inst_625815 = (state_625820[2]);var state_625820__$1 = state_625820;var statearr_625828_625848 = state_625820__$1;(statearr_625828_625848[2] = inst_625815);
(statearr_625828_625848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 7))
{var inst_625802 = (state_625820[9]);var inst_625802__$1 = (state_625820[2]);var inst_625803 = (inst_625802__$1 == null);var inst_625804 = cljs.core.not.call(null,inst_625803);var state_625820__$1 = (function (){var statearr_625829 = state_625820;(statearr_625829[9] = inst_625802__$1);
return statearr_625829;
})();if(inst_625804)
{var statearr_625830_625849 = state_625820__$1;(statearr_625830_625849[1] = 8);
} else
{var statearr_625831_625850 = state_625820__$1;(statearr_625831_625850[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 8))
{var inst_625802 = (state_625820[9]);var state_625820__$1 = state_625820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_625820__$1,11,out,inst_625802);
} else
{if((state_val_625821 === 9))
{var state_625820__$1 = state_625820;var statearr_625832_625851 = state_625820__$1;(statearr_625832_625851[2] = null);
(statearr_625832_625851[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 10))
{var inst_625812 = (state_625820[2]);var state_625820__$1 = state_625820;var statearr_625833_625852 = state_625820__$1;(statearr_625833_625852[2] = inst_625812);
(statearr_625833_625852[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625821 === 11))
{var inst_625797 = (state_625820[7]);var inst_625807 = (state_625820[2]);var inst_625808 = (inst_625797 + 1);var inst_625797__$1 = inst_625808;var state_625820__$1 = (function (){var statearr_625834 = state_625820;(statearr_625834[7] = inst_625797__$1);
(statearr_625834[10] = inst_625807);
return statearr_625834;
})();var statearr_625835_625853 = state_625820__$1;(statearr_625835_625853[2] = null);
(statearr_625835_625853[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_625839 = (new Array(11));(statearr_625839[0] = state_machine__10214__auto__);
(statearr_625839[1] = 1);
return statearr_625839;
});
var state_machine__10214__auto____1 = (function (state_625820){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_625820);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e625840){if((e625840 instanceof Object))
{var ex__10217__auto__ = e625840;var statearr_625841_625854 = state_625820;(statearr_625841_625854[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625820);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e625840;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__625855 = state_625820;
state_625820 = G__625855;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_625820){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_625820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_625842 = f__10284__auto__.call(null);(statearr_625842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___625843);
return statearr_625842;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___625952 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_625927){var state_val_625928 = (state_625927[1]);if((state_val_625928 === 1))
{var inst_625904 = null;var state_625927__$1 = (function (){var statearr_625929 = state_625927;(statearr_625929[7] = inst_625904);
return statearr_625929;
})();var statearr_625930_625953 = state_625927__$1;(statearr_625930_625953[2] = null);
(statearr_625930_625953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 2))
{var state_625927__$1 = state_625927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_625927__$1,4,ch);
} else
{if((state_val_625928 === 3))
{var inst_625924 = (state_625927[2]);var inst_625925 = cljs.core.async.close_BANG_.call(null,out);var state_625927__$1 = (function (){var statearr_625931 = state_625927;(statearr_625931[8] = inst_625924);
return statearr_625931;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_625927__$1,inst_625925);
} else
{if((state_val_625928 === 4))
{var inst_625907 = (state_625927[9]);var inst_625907__$1 = (state_625927[2]);var inst_625908 = (inst_625907__$1 == null);var inst_625909 = cljs.core.not.call(null,inst_625908);var state_625927__$1 = (function (){var statearr_625932 = state_625927;(statearr_625932[9] = inst_625907__$1);
return statearr_625932;
})();if(inst_625909)
{var statearr_625933_625954 = state_625927__$1;(statearr_625933_625954[1] = 5);
} else
{var statearr_625934_625955 = state_625927__$1;(statearr_625934_625955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 5))
{var inst_625904 = (state_625927[7]);var inst_625907 = (state_625927[9]);var inst_625911 = cljs.core._EQ_.call(null,inst_625907,inst_625904);var state_625927__$1 = state_625927;if(inst_625911)
{var statearr_625935_625956 = state_625927__$1;(statearr_625935_625956[1] = 8);
} else
{var statearr_625936_625957 = state_625927__$1;(statearr_625936_625957[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 6))
{var state_625927__$1 = state_625927;var statearr_625938_625958 = state_625927__$1;(statearr_625938_625958[2] = null);
(statearr_625938_625958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 7))
{var inst_625922 = (state_625927[2]);var state_625927__$1 = state_625927;var statearr_625939_625959 = state_625927__$1;(statearr_625939_625959[2] = inst_625922);
(statearr_625939_625959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 8))
{var inst_625904 = (state_625927[7]);var tmp625937 = inst_625904;var inst_625904__$1 = tmp625937;var state_625927__$1 = (function (){var statearr_625940 = state_625927;(statearr_625940[7] = inst_625904__$1);
return statearr_625940;
})();var statearr_625941_625960 = state_625927__$1;(statearr_625941_625960[2] = null);
(statearr_625941_625960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 9))
{var inst_625907 = (state_625927[9]);var state_625927__$1 = state_625927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_625927__$1,11,out,inst_625907);
} else
{if((state_val_625928 === 10))
{var inst_625919 = (state_625927[2]);var state_625927__$1 = state_625927;var statearr_625942_625961 = state_625927__$1;(statearr_625942_625961[2] = inst_625919);
(statearr_625942_625961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_625928 === 11))
{var inst_625907 = (state_625927[9]);var inst_625916 = (state_625927[2]);var inst_625904 = inst_625907;var state_625927__$1 = (function (){var statearr_625943 = state_625927;(statearr_625943[7] = inst_625904);
(statearr_625943[10] = inst_625916);
return statearr_625943;
})();var statearr_625944_625962 = state_625927__$1;(statearr_625944_625962[2] = null);
(statearr_625944_625962[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_625948 = (new Array(11));(statearr_625948[0] = state_machine__10214__auto__);
(statearr_625948[1] = 1);
return statearr_625948;
});
var state_machine__10214__auto____1 = (function (state_625927){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_625927);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e625949){if((e625949 instanceof Object))
{var ex__10217__auto__ = e625949;var statearr_625950_625963 = state_625927;(statearr_625950_625963[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_625927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e625949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__625964 = state_625927;
state_625927 = G__625964;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_625927){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_625927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_625951 = f__10284__auto__.call(null);(statearr_625951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___625952);
return statearr_625951;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___626099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_626069){var state_val_626070 = (state_626069[1]);if((state_val_626070 === 1))
{var inst_626032 = (new Array(n));var inst_626033 = inst_626032;var inst_626034 = 0;var state_626069__$1 = (function (){var statearr_626071 = state_626069;(statearr_626071[7] = inst_626034);
(statearr_626071[8] = inst_626033);
return statearr_626071;
})();var statearr_626072_626100 = state_626069__$1;(statearr_626072_626100[2] = null);
(statearr_626072_626100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 2))
{var state_626069__$1 = state_626069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_626069__$1,4,ch);
} else
{if((state_val_626070 === 3))
{var inst_626067 = (state_626069[2]);var state_626069__$1 = state_626069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_626069__$1,inst_626067);
} else
{if((state_val_626070 === 4))
{var inst_626037 = (state_626069[9]);var inst_626037__$1 = (state_626069[2]);var inst_626038 = (inst_626037__$1 == null);var inst_626039 = cljs.core.not.call(null,inst_626038);var state_626069__$1 = (function (){var statearr_626073 = state_626069;(statearr_626073[9] = inst_626037__$1);
return statearr_626073;
})();if(inst_626039)
{var statearr_626074_626101 = state_626069__$1;(statearr_626074_626101[1] = 5);
} else
{var statearr_626075_626102 = state_626069__$1;(statearr_626075_626102[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 5))
{var inst_626034 = (state_626069[7]);var inst_626037 = (state_626069[9]);var inst_626042 = (state_626069[10]);var inst_626033 = (state_626069[8]);var inst_626041 = (inst_626033[inst_626034] = inst_626037);var inst_626042__$1 = (inst_626034 + 1);var inst_626043 = (inst_626042__$1 < n);var state_626069__$1 = (function (){var statearr_626076 = state_626069;(statearr_626076[11] = inst_626041);
(statearr_626076[10] = inst_626042__$1);
return statearr_626076;
})();if(cljs.core.truth_(inst_626043))
{var statearr_626077_626103 = state_626069__$1;(statearr_626077_626103[1] = 8);
} else
{var statearr_626078_626104 = state_626069__$1;(statearr_626078_626104[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 6))
{var inst_626034 = (state_626069[7]);var inst_626055 = (inst_626034 > 0);var state_626069__$1 = state_626069;if(cljs.core.truth_(inst_626055))
{var statearr_626080_626105 = state_626069__$1;(statearr_626080_626105[1] = 12);
} else
{var statearr_626081_626106 = state_626069__$1;(statearr_626081_626106[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 7))
{var inst_626065 = (state_626069[2]);var state_626069__$1 = state_626069;var statearr_626082_626107 = state_626069__$1;(statearr_626082_626107[2] = inst_626065);
(statearr_626082_626107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 8))
{var inst_626042 = (state_626069[10]);var inst_626033 = (state_626069[8]);var tmp626079 = inst_626033;var inst_626033__$1 = tmp626079;var inst_626034 = inst_626042;var state_626069__$1 = (function (){var statearr_626083 = state_626069;(statearr_626083[7] = inst_626034);
(statearr_626083[8] = inst_626033__$1);
return statearr_626083;
})();var statearr_626084_626108 = state_626069__$1;(statearr_626084_626108[2] = null);
(statearr_626084_626108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 9))
{var inst_626033 = (state_626069[8]);var inst_626047 = cljs.core.vec.call(null,inst_626033);var state_626069__$1 = state_626069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_626069__$1,11,out,inst_626047);
} else
{if((state_val_626070 === 10))
{var inst_626053 = (state_626069[2]);var state_626069__$1 = state_626069;var statearr_626085_626109 = state_626069__$1;(statearr_626085_626109[2] = inst_626053);
(statearr_626085_626109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 11))
{var inst_626049 = (state_626069[2]);var inst_626050 = (new Array(n));var inst_626033 = inst_626050;var inst_626034 = 0;var state_626069__$1 = (function (){var statearr_626086 = state_626069;(statearr_626086[7] = inst_626034);
(statearr_626086[12] = inst_626049);
(statearr_626086[8] = inst_626033);
return statearr_626086;
})();var statearr_626087_626110 = state_626069__$1;(statearr_626087_626110[2] = null);
(statearr_626087_626110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 12))
{var inst_626033 = (state_626069[8]);var inst_626057 = cljs.core.vec.call(null,inst_626033);var state_626069__$1 = state_626069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_626069__$1,15,out,inst_626057);
} else
{if((state_val_626070 === 13))
{var state_626069__$1 = state_626069;var statearr_626088_626111 = state_626069__$1;(statearr_626088_626111[2] = null);
(statearr_626088_626111[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 14))
{var inst_626062 = (state_626069[2]);var inst_626063 = cljs.core.async.close_BANG_.call(null,out);var state_626069__$1 = (function (){var statearr_626089 = state_626069;(statearr_626089[13] = inst_626062);
return statearr_626089;
})();var statearr_626090_626112 = state_626069__$1;(statearr_626090_626112[2] = inst_626063);
(statearr_626090_626112[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626070 === 15))
{var inst_626059 = (state_626069[2]);var state_626069__$1 = state_626069;var statearr_626091_626113 = state_626069__$1;(statearr_626091_626113[2] = inst_626059);
(statearr_626091_626113[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_626095 = (new Array(14));(statearr_626095[0] = state_machine__10214__auto__);
(statearr_626095[1] = 1);
return statearr_626095;
});
var state_machine__10214__auto____1 = (function (state_626069){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_626069);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e626096){if((e626096 instanceof Object))
{var ex__10217__auto__ = e626096;var statearr_626097_626114 = state_626069;(statearr_626097_626114[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_626069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e626096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__626115 = state_626069;
state_626069 = G__626115;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_626069){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_626069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_626098 = f__10284__auto__.call(null);(statearr_626098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___626099);
return statearr_626098;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___626258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_626228){var state_val_626229 = (state_626228[1]);if((state_val_626229 === 1))
{var inst_626187 = (new Array(0));var inst_626188 = inst_626187;var inst_626189 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_626228__$1 = (function (){var statearr_626230 = state_626228;(statearr_626230[7] = inst_626189);
(statearr_626230[8] = inst_626188);
return statearr_626230;
})();var statearr_626231_626259 = state_626228__$1;(statearr_626231_626259[2] = null);
(statearr_626231_626259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 2))
{var state_626228__$1 = state_626228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_626228__$1,4,ch);
} else
{if((state_val_626229 === 3))
{var inst_626226 = (state_626228[2]);var state_626228__$1 = state_626228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_626228__$1,inst_626226);
} else
{if((state_val_626229 === 4))
{var inst_626192 = (state_626228[9]);var inst_626192__$1 = (state_626228[2]);var inst_626193 = (inst_626192__$1 == null);var inst_626194 = cljs.core.not.call(null,inst_626193);var state_626228__$1 = (function (){var statearr_626232 = state_626228;(statearr_626232[9] = inst_626192__$1);
return statearr_626232;
})();if(inst_626194)
{var statearr_626233_626260 = state_626228__$1;(statearr_626233_626260[1] = 5);
} else
{var statearr_626234_626261 = state_626228__$1;(statearr_626234_626261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 5))
{var inst_626196 = (state_626228[10]);var inst_626192 = (state_626228[9]);var inst_626189 = (state_626228[7]);var inst_626196__$1 = f.call(null,inst_626192);var inst_626197 = cljs.core._EQ_.call(null,inst_626196__$1,inst_626189);var inst_626198 = cljs.core.keyword_identical_QMARK_.call(null,inst_626189,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_626199 = (inst_626197) || (inst_626198);var state_626228__$1 = (function (){var statearr_626235 = state_626228;(statearr_626235[10] = inst_626196__$1);
return statearr_626235;
})();if(cljs.core.truth_(inst_626199))
{var statearr_626236_626262 = state_626228__$1;(statearr_626236_626262[1] = 8);
} else
{var statearr_626237_626263 = state_626228__$1;(statearr_626237_626263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 6))
{var inst_626188 = (state_626228[8]);var inst_626213 = inst_626188.length;var inst_626214 = (inst_626213 > 0);var state_626228__$1 = state_626228;if(cljs.core.truth_(inst_626214))
{var statearr_626239_626264 = state_626228__$1;(statearr_626239_626264[1] = 12);
} else
{var statearr_626240_626265 = state_626228__$1;(statearr_626240_626265[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 7))
{var inst_626224 = (state_626228[2]);var state_626228__$1 = state_626228;var statearr_626241_626266 = state_626228__$1;(statearr_626241_626266[2] = inst_626224);
(statearr_626241_626266[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 8))
{var inst_626196 = (state_626228[10]);var inst_626192 = (state_626228[9]);var inst_626188 = (state_626228[8]);var inst_626201 = inst_626188.push(inst_626192);var tmp626238 = inst_626188;var inst_626188__$1 = tmp626238;var inst_626189 = inst_626196;var state_626228__$1 = (function (){var statearr_626242 = state_626228;(statearr_626242[11] = inst_626201);
(statearr_626242[7] = inst_626189);
(statearr_626242[8] = inst_626188__$1);
return statearr_626242;
})();var statearr_626243_626267 = state_626228__$1;(statearr_626243_626267[2] = null);
(statearr_626243_626267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 9))
{var inst_626188 = (state_626228[8]);var inst_626204 = cljs.core.vec.call(null,inst_626188);var state_626228__$1 = state_626228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_626228__$1,11,out,inst_626204);
} else
{if((state_val_626229 === 10))
{var inst_626211 = (state_626228[2]);var state_626228__$1 = state_626228;var statearr_626244_626268 = state_626228__$1;(statearr_626244_626268[2] = inst_626211);
(statearr_626244_626268[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 11))
{var inst_626196 = (state_626228[10]);var inst_626192 = (state_626228[9]);var inst_626206 = (state_626228[2]);var inst_626207 = (new Array(0));var inst_626208 = inst_626207.push(inst_626192);var inst_626188 = inst_626207;var inst_626189 = inst_626196;var state_626228__$1 = (function (){var statearr_626245 = state_626228;(statearr_626245[12] = inst_626208);
(statearr_626245[13] = inst_626206);
(statearr_626245[7] = inst_626189);
(statearr_626245[8] = inst_626188);
return statearr_626245;
})();var statearr_626246_626269 = state_626228__$1;(statearr_626246_626269[2] = null);
(statearr_626246_626269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 12))
{var inst_626188 = (state_626228[8]);var inst_626216 = cljs.core.vec.call(null,inst_626188);var state_626228__$1 = state_626228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_626228__$1,15,out,inst_626216);
} else
{if((state_val_626229 === 13))
{var state_626228__$1 = state_626228;var statearr_626247_626270 = state_626228__$1;(statearr_626247_626270[2] = null);
(statearr_626247_626270[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 14))
{var inst_626221 = (state_626228[2]);var inst_626222 = cljs.core.async.close_BANG_.call(null,out);var state_626228__$1 = (function (){var statearr_626248 = state_626228;(statearr_626248[14] = inst_626221);
return statearr_626248;
})();var statearr_626249_626271 = state_626228__$1;(statearr_626249_626271[2] = inst_626222);
(statearr_626249_626271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_626229 === 15))
{var inst_626218 = (state_626228[2]);var state_626228__$1 = state_626228;var statearr_626250_626272 = state_626228__$1;(statearr_626250_626272[2] = inst_626218);
(statearr_626250_626272[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_626254 = (new Array(15));(statearr_626254[0] = state_machine__10214__auto__);
(statearr_626254[1] = 1);
return statearr_626254;
});
var state_machine__10214__auto____1 = (function (state_626228){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_626228);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e626255){if((e626255 instanceof Object))
{var ex__10217__auto__ = e626255;var statearr_626256_626273 = state_626228;(statearr_626256_626273[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_626228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e626255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__626274 = state_626228;
state_626228 = G__626274;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_626228){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_626228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_626257 = f__10284__auto__.call(null);(statearr_626257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___626258);
return statearr_626257;
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
