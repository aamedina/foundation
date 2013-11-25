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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t47045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47045 = (function (f,fn_handler,meta47046){
this.f = f;
this.fn_handler = fn_handler;
this.meta47046 = meta47046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47045.cljs$lang$type = true;
cljs.core.async.t47045.cljs$lang$ctorStr = "cljs.core.async/t47045";
cljs.core.async.t47045.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47045");
});
cljs.core.async.t47045.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t47045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t47045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47047){var self__ = this;
var _47047__$1 = this;return self__.meta47046;
});
cljs.core.async.t47045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47047,meta47046__$1){var self__ = this;
var _47047__$1 = this;return (new cljs.core.async.t47045(self__.f,self__.fn_handler,meta47046__$1));
});
cljs.core.async.__GT_t47045 = (function __GT_t47045(f__$1,fn_handler__$1,meta47046){return (new cljs.core.async.t47045(f__$1,fn_handler__$1,meta47046));
});
}
return (new cljs.core.async.t47045(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__47049 = buff;if(G__47049)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__47049.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__47049.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47049);
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
{var val_47050 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_47050);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_47050);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5980__auto___47051 = n;var x_47052 = 0;while(true){
if((x_47052 < n__5980__auto___47051))
{(a[x_47052] = 0);
{
var G__47053 = (x_47052 + 1);
x_47052 = G__47053;
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
var G__47054 = (i + 1);
i = G__47054;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t47058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47058 = (function (flag,alt_flag,meta47059){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta47059 = meta47059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47058.cljs$lang$type = true;
cljs.core.async.t47058.cljs$lang$ctorStr = "cljs.core.async/t47058";
cljs.core.async.t47058.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47058");
});
cljs.core.async.t47058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t47058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t47058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47060){var self__ = this;
var _47060__$1 = this;return self__.meta47059;
});
cljs.core.async.t47058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47060,meta47059__$1){var self__ = this;
var _47060__$1 = this;return (new cljs.core.async.t47058(self__.flag,self__.alt_flag,meta47059__$1));
});
cljs.core.async.__GT_t47058 = (function __GT_t47058(flag__$1,alt_flag__$1,meta47059){return (new cljs.core.async.t47058(flag__$1,alt_flag__$1,meta47059));
});
}
return (new cljs.core.async.t47058(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t47064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47064 = (function (cb,flag,alt_handler,meta47065){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta47065 = meta47065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47064.cljs$lang$type = true;
cljs.core.async.t47064.cljs$lang$ctorStr = "cljs.core.async/t47064";
cljs.core.async.t47064.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47064");
});
cljs.core.async.t47064.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t47064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t47064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47066){var self__ = this;
var _47066__$1 = this;return self__.meta47065;
});
cljs.core.async.t47064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47066,meta47065__$1){var self__ = this;
var _47066__$1 = this;return (new cljs.core.async.t47064(self__.cb,self__.flag,self__.alt_handler,meta47065__$1));
});
cljs.core.async.__GT_t47064 = (function __GT_t47064(cb__$1,flag__$1,alt_handler__$1,meta47065){return (new cljs.core.async.t47064(cb__$1,flag__$1,alt_handler__$1,meta47065));
});
}
return (new cljs.core.async.t47064(cb,flag,alt_handler,null));
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
return (function (p1__47067_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47067_SHARP_,port], null));
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
var G__47068 = (i + 1);
i = G__47068;
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
var alts_BANG___delegate = function (ports,p__47069){var map__47071 = p__47069;var map__47071__$1 = ((cljs.core.seq_QMARK_.call(null,map__47071))?cljs.core.apply.call(null,cljs.core.hash_map,map__47071):map__47071);var opts = map__47071__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__47069 = null;if (arguments.length > 1) {
  p__47069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__47069);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__47072){
var ports = cljs.core.first(arglist__47072);
var p__47069 = cljs.core.rest(arglist__47072);
return alts_BANG___delegate(ports,p__47069);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t47080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47080 = (function (ch,f,map_LT_,meta47081){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47081 = meta47081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47080.cljs$lang$type = true;
cljs.core.async.t47080.cljs$lang$ctorStr = "cljs.core.async/t47080";
cljs.core.async.t47080.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47080");
});
cljs.core.async.t47080.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t47080.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t47083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47083 = (function (fn1,_,meta47081,ch,f,map_LT_,meta47084){
this.fn1 = fn1;
this._ = _;
this.meta47081 = meta47081;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47084 = meta47084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47083.cljs$lang$type = true;
cljs.core.async.t47083.cljs$lang$ctorStr = "cljs.core.async/t47083";
cljs.core.async.t47083.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47083");
});
cljs.core.async.t47083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t47083.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t47083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__47073_SHARP_){return f1.call(null,(((p1__47073_SHARP_ == null))?null:self__.f.call(null,p1__47073_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t47083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47085){var self__ = this;
var _47085__$1 = this;return self__.meta47084;
});
cljs.core.async.t47083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47085,meta47084__$1){var self__ = this;
var _47085__$1 = this;return (new cljs.core.async.t47083(self__.fn1,self__._,self__.meta47081,self__.ch,self__.f,self__.map_LT_,meta47084__$1));
});
cljs.core.async.__GT_t47083 = (function __GT_t47083(fn1__$1,___$2,meta47081__$1,ch__$2,f__$2,map_LT___$2,meta47084){return (new cljs.core.async.t47083(fn1__$1,___$2,meta47081__$1,ch__$2,f__$2,map_LT___$2,meta47084));
});
}
return (new cljs.core.async.t47083(fn1,___$1,self__.meta47081,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t47080.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47082){var self__ = this;
var _47082__$1 = this;return self__.meta47081;
});
cljs.core.async.t47080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47082,meta47081__$1){var self__ = this;
var _47082__$1 = this;return (new cljs.core.async.t47080(self__.ch,self__.f,self__.map_LT_,meta47081__$1));
});
cljs.core.async.__GT_t47080 = (function __GT_t47080(ch__$1,f__$1,map_LT___$1,meta47081){return (new cljs.core.async.t47080(ch__$1,f__$1,map_LT___$1,meta47081));
});
}
return (new cljs.core.async.t47080(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47089 = (function (ch,f,map_GT_,meta47090){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47090 = meta47090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47089.cljs$lang$type = true;
cljs.core.async.t47089.cljs$lang$ctorStr = "cljs.core.async/t47089";
cljs.core.async.t47089.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47089");
});
cljs.core.async.t47089.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47089.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47089.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47091){var self__ = this;
var _47091__$1 = this;return self__.meta47090;
});
cljs.core.async.t47089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47091,meta47090__$1){var self__ = this;
var _47091__$1 = this;return (new cljs.core.async.t47089(self__.ch,self__.f,self__.map_GT_,meta47090__$1));
});
cljs.core.async.__GT_t47089 = (function __GT_t47089(ch__$1,f__$1,map_GT___$1,meta47090){return (new cljs.core.async.t47089(ch__$1,f__$1,map_GT___$1,meta47090));
});
}
return (new cljs.core.async.t47089(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47095 = (function (ch,p,filter_GT_,meta47096){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47096 = meta47096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47095.cljs$lang$type = true;
cljs.core.async.t47095.cljs$lang$ctorStr = "cljs.core.async/t47095";
cljs.core.async.t47095.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47095");
});
cljs.core.async.t47095.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47095.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47095.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47097){var self__ = this;
var _47097__$1 = this;return self__.meta47096;
});
cljs.core.async.t47095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47097,meta47096__$1){var self__ = this;
var _47097__$1 = this;return (new cljs.core.async.t47095(self__.ch,self__.p,self__.filter_GT_,meta47096__$1));
});
cljs.core.async.__GT_t47095 = (function __GT_t47095(ch__$1,p__$1,filter_GT___$1,meta47096){return (new cljs.core.async.t47095(ch__$1,p__$1,filter_GT___$1,meta47096));
});
}
return (new cljs.core.async.t47095(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___47180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_47159){var state_val_47160 = (state_47159[1]);if((state_val_47160 === 1))
{var state_47159__$1 = state_47159;var statearr_47161_47181 = state_47159__$1;(statearr_47161_47181[2] = null);
(statearr_47161_47181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 2))
{var state_47159__$1 = state_47159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47159__$1,4,ch);
} else
{if((state_val_47160 === 3))
{var inst_47157 = (state_47159[2]);var state_47159__$1 = state_47159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47159__$1,inst_47157);
} else
{if((state_val_47160 === 4))
{var inst_47141 = (state_47159[7]);var inst_47141__$1 = (state_47159[2]);var inst_47142 = (inst_47141__$1 == null);var state_47159__$1 = (function (){var statearr_47162 = state_47159;(statearr_47162[7] = inst_47141__$1);
return statearr_47162;
})();if(cljs.core.truth_(inst_47142))
{var statearr_47163_47182 = state_47159__$1;(statearr_47163_47182[1] = 5);
} else
{var statearr_47164_47183 = state_47159__$1;(statearr_47164_47183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 5))
{var inst_47144 = cljs.core.async.close_BANG_.call(null,out);var state_47159__$1 = state_47159;var statearr_47165_47184 = state_47159__$1;(statearr_47165_47184[2] = inst_47144);
(statearr_47165_47184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 6))
{var inst_47141 = (state_47159[7]);var inst_47146 = p.call(null,inst_47141);var state_47159__$1 = state_47159;if(cljs.core.truth_(inst_47146))
{var statearr_47166_47185 = state_47159__$1;(statearr_47166_47185[1] = 8);
} else
{var statearr_47167_47186 = state_47159__$1;(statearr_47167_47186[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 7))
{var inst_47155 = (state_47159[2]);var state_47159__$1 = state_47159;var statearr_47168_47187 = state_47159__$1;(statearr_47168_47187[2] = inst_47155);
(statearr_47168_47187[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 8))
{var inst_47141 = (state_47159[7]);var state_47159__$1 = state_47159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47159__$1,11,out,inst_47141);
} else
{if((state_val_47160 === 9))
{var state_47159__$1 = state_47159;var statearr_47169_47188 = state_47159__$1;(statearr_47169_47188[2] = null);
(statearr_47169_47188[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 10))
{var inst_47152 = (state_47159[2]);var state_47159__$1 = (function (){var statearr_47170 = state_47159;(statearr_47170[8] = inst_47152);
return statearr_47170;
})();var statearr_47171_47189 = state_47159__$1;(statearr_47171_47189[2] = null);
(statearr_47171_47189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47160 === 11))
{var inst_47149 = (state_47159[2]);var state_47159__$1 = state_47159;var statearr_47172_47190 = state_47159__$1;(statearr_47172_47190[2] = inst_47149);
(statearr_47172_47190[1] = 10);
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
var state_machine__12403__auto____0 = (function (){var statearr_47176 = (new Array(9));(statearr_47176[0] = state_machine__12403__auto__);
(statearr_47176[1] = 1);
return statearr_47176;
});
var state_machine__12403__auto____1 = (function (state_47159){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_47159);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e47177){if((e47177 instanceof Object))
{var ex__12406__auto__ = e47177;var statearr_47178_47191 = state_47159;(statearr_47178_47191[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47192 = state_47159;
state_47159 = G__47192;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_47159){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_47159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_47179 = f__12478__auto__.call(null);(statearr_47179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___47180);
return statearr_47179;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_47344){var state_val_47345 = (state_47344[1]);if((state_val_47345 === 1))
{var state_47344__$1 = state_47344;var statearr_47346_47383 = state_47344__$1;(statearr_47346_47383[2] = null);
(statearr_47346_47383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 2))
{var state_47344__$1 = state_47344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47344__$1,4,in$);
} else
{if((state_val_47345 === 3))
{var inst_47342 = (state_47344[2]);var state_47344__$1 = state_47344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47344__$1,inst_47342);
} else
{if((state_val_47345 === 4))
{var inst_47290 = (state_47344[7]);var inst_47290__$1 = (state_47344[2]);var inst_47291 = (inst_47290__$1 == null);var state_47344__$1 = (function (){var statearr_47347 = state_47344;(statearr_47347[7] = inst_47290__$1);
return statearr_47347;
})();if(cljs.core.truth_(inst_47291))
{var statearr_47348_47384 = state_47344__$1;(statearr_47348_47384[1] = 5);
} else
{var statearr_47349_47385 = state_47344__$1;(statearr_47349_47385[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 5))
{var inst_47293 = cljs.core.async.close_BANG_.call(null,out);var state_47344__$1 = state_47344;var statearr_47350_47386 = state_47344__$1;(statearr_47350_47386[2] = inst_47293);
(statearr_47350_47386[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 6))
{var inst_47290 = (state_47344[7]);var inst_47295 = f.call(null,inst_47290);var inst_47300 = cljs.core.seq.call(null,inst_47295);var inst_47301 = inst_47300;var inst_47302 = null;var inst_47303 = 0;var inst_47304 = 0;var state_47344__$1 = (function (){var statearr_47351 = state_47344;(statearr_47351[8] = inst_47304);
(statearr_47351[9] = inst_47303);
(statearr_47351[10] = inst_47302);
(statearr_47351[11] = inst_47301);
return statearr_47351;
})();var statearr_47352_47387 = state_47344__$1;(statearr_47352_47387[2] = null);
(statearr_47352_47387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 7))
{var inst_47340 = (state_47344[2]);var state_47344__$1 = state_47344;var statearr_47353_47388 = state_47344__$1;(statearr_47353_47388[2] = inst_47340);
(statearr_47353_47388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 8))
{var inst_47304 = (state_47344[8]);var inst_47303 = (state_47344[9]);var inst_47306 = (inst_47304 < inst_47303);var inst_47307 = inst_47306;var state_47344__$1 = state_47344;if(cljs.core.truth_(inst_47307))
{var statearr_47354_47389 = state_47344__$1;(statearr_47354_47389[1] = 10);
} else
{var statearr_47355_47390 = state_47344__$1;(statearr_47355_47390[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 9))
{var inst_47337 = (state_47344[2]);var state_47344__$1 = (function (){var statearr_47356 = state_47344;(statearr_47356[12] = inst_47337);
return statearr_47356;
})();var statearr_47357_47391 = state_47344__$1;(statearr_47357_47391[2] = null);
(statearr_47357_47391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 10))
{var inst_47304 = (state_47344[8]);var inst_47302 = (state_47344[10]);var inst_47309 = cljs.core._nth.call(null,inst_47302,inst_47304);var state_47344__$1 = state_47344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47344__$1,13,out,inst_47309);
} else
{if((state_val_47345 === 11))
{var inst_47315 = (state_47344[13]);var inst_47301 = (state_47344[11]);var inst_47315__$1 = cljs.core.seq.call(null,inst_47301);var state_47344__$1 = (function (){var statearr_47361 = state_47344;(statearr_47361[13] = inst_47315__$1);
return statearr_47361;
})();if(inst_47315__$1)
{var statearr_47362_47392 = state_47344__$1;(statearr_47362_47392[1] = 14);
} else
{var statearr_47363_47393 = state_47344__$1;(statearr_47363_47393[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 12))
{var inst_47335 = (state_47344[2]);var state_47344__$1 = state_47344;var statearr_47364_47394 = state_47344__$1;(statearr_47364_47394[2] = inst_47335);
(statearr_47364_47394[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 13))
{var inst_47304 = (state_47344[8]);var inst_47303 = (state_47344[9]);var inst_47302 = (state_47344[10]);var inst_47301 = (state_47344[11]);var inst_47311 = (state_47344[2]);var inst_47312 = (inst_47304 + 1);var tmp47358 = inst_47303;var tmp47359 = inst_47302;var tmp47360 = inst_47301;var inst_47301__$1 = tmp47360;var inst_47302__$1 = tmp47359;var inst_47303__$1 = tmp47358;var inst_47304__$1 = inst_47312;var state_47344__$1 = (function (){var statearr_47365 = state_47344;(statearr_47365[14] = inst_47311);
(statearr_47365[8] = inst_47304__$1);
(statearr_47365[9] = inst_47303__$1);
(statearr_47365[10] = inst_47302__$1);
(statearr_47365[11] = inst_47301__$1);
return statearr_47365;
})();var statearr_47366_47395 = state_47344__$1;(statearr_47366_47395[2] = null);
(statearr_47366_47395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 14))
{var inst_47315 = (state_47344[13]);var inst_47317 = cljs.core.chunked_seq_QMARK_.call(null,inst_47315);var state_47344__$1 = state_47344;if(inst_47317)
{var statearr_47367_47396 = state_47344__$1;(statearr_47367_47396[1] = 17);
} else
{var statearr_47368_47397 = state_47344__$1;(statearr_47368_47397[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 15))
{var state_47344__$1 = state_47344;var statearr_47369_47398 = state_47344__$1;(statearr_47369_47398[2] = null);
(statearr_47369_47398[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 16))
{var inst_47333 = (state_47344[2]);var state_47344__$1 = state_47344;var statearr_47370_47399 = state_47344__$1;(statearr_47370_47399[2] = inst_47333);
(statearr_47370_47399[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 17))
{var inst_47315 = (state_47344[13]);var inst_47319 = cljs.core.chunk_first.call(null,inst_47315);var inst_47320 = cljs.core.chunk_rest.call(null,inst_47315);var inst_47321 = cljs.core.count.call(null,inst_47319);var inst_47301 = inst_47320;var inst_47302 = inst_47319;var inst_47303 = inst_47321;var inst_47304 = 0;var state_47344__$1 = (function (){var statearr_47371 = state_47344;(statearr_47371[8] = inst_47304);
(statearr_47371[9] = inst_47303);
(statearr_47371[10] = inst_47302);
(statearr_47371[11] = inst_47301);
return statearr_47371;
})();var statearr_47372_47400 = state_47344__$1;(statearr_47372_47400[2] = null);
(statearr_47372_47400[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 18))
{var inst_47315 = (state_47344[13]);var inst_47324 = cljs.core.first.call(null,inst_47315);var state_47344__$1 = state_47344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47344__$1,20,out,inst_47324);
} else
{if((state_val_47345 === 19))
{var inst_47330 = (state_47344[2]);var state_47344__$1 = state_47344;var statearr_47373_47401 = state_47344__$1;(statearr_47373_47401[2] = inst_47330);
(statearr_47373_47401[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47345 === 20))
{var inst_47315 = (state_47344[13]);var inst_47326 = (state_47344[2]);var inst_47327 = cljs.core.next.call(null,inst_47315);var inst_47301 = inst_47327;var inst_47302 = null;var inst_47303 = 0;var inst_47304 = 0;var state_47344__$1 = (function (){var statearr_47374 = state_47344;(statearr_47374[15] = inst_47326);
(statearr_47374[8] = inst_47304);
(statearr_47374[9] = inst_47303);
(statearr_47374[10] = inst_47302);
(statearr_47374[11] = inst_47301);
return statearr_47374;
})();var statearr_47375_47402 = state_47344__$1;(statearr_47375_47402[2] = null);
(statearr_47375_47402[1] = 8);
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
var state_machine__12403__auto____0 = (function (){var statearr_47379 = (new Array(16));(statearr_47379[0] = state_machine__12403__auto__);
(statearr_47379[1] = 1);
return statearr_47379;
});
var state_machine__12403__auto____1 = (function (state_47344){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_47344);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e47380){if((e47380 instanceof Object))
{var ex__12406__auto__ = e47380;var statearr_47381_47403 = state_47344;(statearr_47381_47403[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47404 = state_47344;
state_47344 = G__47404;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_47344){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_47344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_47382 = f__12478__auto__.call(null);(statearr_47382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_47382;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12477__auto___47485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_47464){var state_val_47465 = (state_47464[1]);if((state_val_47465 === 1))
{var state_47464__$1 = state_47464;var statearr_47466_47486 = state_47464__$1;(statearr_47466_47486[2] = null);
(statearr_47466_47486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 2))
{var state_47464__$1 = state_47464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47464__$1,4,from);
} else
{if((state_val_47465 === 3))
{var inst_47462 = (state_47464[2]);var state_47464__$1 = state_47464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47464__$1,inst_47462);
} else
{if((state_val_47465 === 4))
{var inst_47447 = (state_47464[7]);var inst_47447__$1 = (state_47464[2]);var inst_47448 = (inst_47447__$1 == null);var state_47464__$1 = (function (){var statearr_47467 = state_47464;(statearr_47467[7] = inst_47447__$1);
return statearr_47467;
})();if(cljs.core.truth_(inst_47448))
{var statearr_47468_47487 = state_47464__$1;(statearr_47468_47487[1] = 5);
} else
{var statearr_47469_47488 = state_47464__$1;(statearr_47469_47488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 5))
{var state_47464__$1 = state_47464;if(cljs.core.truth_(close_QMARK_))
{var statearr_47470_47489 = state_47464__$1;(statearr_47470_47489[1] = 8);
} else
{var statearr_47471_47490 = state_47464__$1;(statearr_47471_47490[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 6))
{var inst_47447 = (state_47464[7]);var state_47464__$1 = state_47464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47464__$1,11,to,inst_47447);
} else
{if((state_val_47465 === 7))
{var inst_47460 = (state_47464[2]);var state_47464__$1 = state_47464;var statearr_47472_47491 = state_47464__$1;(statearr_47472_47491[2] = inst_47460);
(statearr_47472_47491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 8))
{var inst_47451 = cljs.core.async.close_BANG_.call(null,to);var state_47464__$1 = state_47464;var statearr_47473_47492 = state_47464__$1;(statearr_47473_47492[2] = inst_47451);
(statearr_47473_47492[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 9))
{var state_47464__$1 = state_47464;var statearr_47474_47493 = state_47464__$1;(statearr_47474_47493[2] = null);
(statearr_47474_47493[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 10))
{var inst_47454 = (state_47464[2]);var state_47464__$1 = state_47464;var statearr_47475_47494 = state_47464__$1;(statearr_47475_47494[2] = inst_47454);
(statearr_47475_47494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47465 === 11))
{var inst_47457 = (state_47464[2]);var state_47464__$1 = (function (){var statearr_47476 = state_47464;(statearr_47476[8] = inst_47457);
return statearr_47476;
})();var statearr_47477_47495 = state_47464__$1;(statearr_47477_47495[2] = null);
(statearr_47477_47495[1] = 2);
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
var state_machine__12403__auto____0 = (function (){var statearr_47481 = (new Array(9));(statearr_47481[0] = state_machine__12403__auto__);
(statearr_47481[1] = 1);
return statearr_47481;
});
var state_machine__12403__auto____1 = (function (state_47464){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_47464);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e47482){if((e47482 instanceof Object))
{var ex__12406__auto__ = e47482;var statearr_47483_47496 = state_47464;(statearr_47483_47496[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47497 = state_47464;
state_47464 = G__47497;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_47464){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_47464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_47484 = f__12478__auto__.call(null);(statearr_47484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___47485);
return statearr_47484;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12477__auto___47584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_47562){var state_val_47563 = (state_47562[1]);if((state_val_47563 === 1))
{var state_47562__$1 = state_47562;var statearr_47564_47585 = state_47562__$1;(statearr_47564_47585[2] = null);
(statearr_47564_47585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 2))
{var state_47562__$1 = state_47562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47562__$1,4,ch);
} else
{if((state_val_47563 === 3))
{var inst_47560 = (state_47562[2]);var state_47562__$1 = state_47562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47562__$1,inst_47560);
} else
{if((state_val_47563 === 4))
{var inst_47543 = (state_47562[7]);var inst_47543__$1 = (state_47562[2]);var inst_47544 = (inst_47543__$1 == null);var state_47562__$1 = (function (){var statearr_47565 = state_47562;(statearr_47565[7] = inst_47543__$1);
return statearr_47565;
})();if(cljs.core.truth_(inst_47544))
{var statearr_47566_47586 = state_47562__$1;(statearr_47566_47586[1] = 5);
} else
{var statearr_47567_47587 = state_47562__$1;(statearr_47567_47587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 5))
{var inst_47546 = cljs.core.async.close_BANG_.call(null,tc);var inst_47547 = cljs.core.async.close_BANG_.call(null,fc);var state_47562__$1 = (function (){var statearr_47568 = state_47562;(statearr_47568[8] = inst_47546);
return statearr_47568;
})();var statearr_47569_47588 = state_47562__$1;(statearr_47569_47588[2] = inst_47547);
(statearr_47569_47588[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 6))
{var inst_47543 = (state_47562[7]);var inst_47549 = p.call(null,inst_47543);var state_47562__$1 = state_47562;if(cljs.core.truth_(inst_47549))
{var statearr_47570_47589 = state_47562__$1;(statearr_47570_47589[1] = 9);
} else
{var statearr_47571_47590 = state_47562__$1;(statearr_47571_47590[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 7))
{var inst_47558 = (state_47562[2]);var state_47562__$1 = state_47562;var statearr_47572_47591 = state_47562__$1;(statearr_47572_47591[2] = inst_47558);
(statearr_47572_47591[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 8))
{var inst_47555 = (state_47562[2]);var state_47562__$1 = (function (){var statearr_47573 = state_47562;(statearr_47573[9] = inst_47555);
return statearr_47573;
})();var statearr_47574_47592 = state_47562__$1;(statearr_47574_47592[2] = null);
(statearr_47574_47592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 9))
{var state_47562__$1 = state_47562;var statearr_47575_47593 = state_47562__$1;(statearr_47575_47593[2] = tc);
(statearr_47575_47593[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 10))
{var state_47562__$1 = state_47562;var statearr_47576_47594 = state_47562__$1;(statearr_47576_47594[2] = fc);
(statearr_47576_47594[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47563 === 11))
{var inst_47543 = (state_47562[7]);var inst_47553 = (state_47562[2]);var state_47562__$1 = state_47562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47562__$1,8,inst_47553,inst_47543);
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
var state_machine__12403__auto____0 = (function (){var statearr_47580 = (new Array(10));(statearr_47580[0] = state_machine__12403__auto__);
(statearr_47580[1] = 1);
return statearr_47580;
});
var state_machine__12403__auto____1 = (function (state_47562){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_47562);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e47581){if((e47581 instanceof Object))
{var ex__12406__auto__ = e47581;var statearr_47582_47595 = state_47562;(statearr_47582_47595[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47596 = state_47562;
state_47562 = G__47596;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_47562){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_47562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_47583 = f__12478__auto__.call(null);(statearr_47583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___47584);
return statearr_47583;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_47643){var state_val_47644 = (state_47643[1]);if((state_val_47644 === 7))
{var inst_47639 = (state_47643[2]);var state_47643__$1 = state_47643;var statearr_47645_47661 = state_47643__$1;(statearr_47645_47661[2] = inst_47639);
(statearr_47645_47661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47644 === 6))
{var inst_47632 = (state_47643[7]);var inst_47629 = (state_47643[8]);var inst_47636 = f.call(null,inst_47629,inst_47632);var inst_47629__$1 = inst_47636;var state_47643__$1 = (function (){var statearr_47646 = state_47643;(statearr_47646[8] = inst_47629__$1);
return statearr_47646;
})();var statearr_47647_47662 = state_47643__$1;(statearr_47647_47662[2] = null);
(statearr_47647_47662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47644 === 5))
{var inst_47629 = (state_47643[8]);var state_47643__$1 = state_47643;var statearr_47648_47663 = state_47643__$1;(statearr_47648_47663[2] = inst_47629);
(statearr_47648_47663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47644 === 4))
{var inst_47632 = (state_47643[7]);var inst_47632__$1 = (state_47643[2]);var inst_47633 = (inst_47632__$1 == null);var state_47643__$1 = (function (){var statearr_47649 = state_47643;(statearr_47649[7] = inst_47632__$1);
return statearr_47649;
})();if(cljs.core.truth_(inst_47633))
{var statearr_47650_47664 = state_47643__$1;(statearr_47650_47664[1] = 5);
} else
{var statearr_47651_47665 = state_47643__$1;(statearr_47651_47665[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47644 === 3))
{var inst_47641 = (state_47643[2]);var state_47643__$1 = state_47643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47643__$1,inst_47641);
} else
{if((state_val_47644 === 2))
{var state_47643__$1 = state_47643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47643__$1,4,ch);
} else
{if((state_val_47644 === 1))
{var inst_47629 = init;var state_47643__$1 = (function (){var statearr_47652 = state_47643;(statearr_47652[8] = inst_47629);
return statearr_47652;
})();var statearr_47653_47666 = state_47643__$1;(statearr_47653_47666[2] = null);
(statearr_47653_47666[1] = 2);
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
var state_machine__12403__auto____0 = (function (){var statearr_47657 = (new Array(9));(statearr_47657[0] = state_machine__12403__auto__);
(statearr_47657[1] = 1);
return statearr_47657;
});
var state_machine__12403__auto____1 = (function (state_47643){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_47643);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e47658){if((e47658 instanceof Object))
{var ex__12406__auto__ = e47658;var statearr_47659_47667 = state_47643;(statearr_47659_47667[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47668 = state_47643;
state_47643 = G__47668;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_47643){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_47643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_47660 = f__12478__auto__.call(null);(statearr_47660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_47660;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12477__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_47730){var state_val_47731 = (state_47730[1]);if((state_val_47731 === 1))
{var inst_47710 = cljs.core.seq.call(null,coll);var inst_47711 = inst_47710;var state_47730__$1 = (function (){var statearr_47732 = state_47730;(statearr_47732[7] = inst_47711);
return statearr_47732;
})();var statearr_47733_47751 = state_47730__$1;(statearr_47733_47751[2] = null);
(statearr_47733_47751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 2))
{var inst_47711 = (state_47730[7]);var state_47730__$1 = state_47730;if(cljs.core.truth_(inst_47711))
{var statearr_47734_47752 = state_47730__$1;(statearr_47734_47752[1] = 4);
} else
{var statearr_47735_47753 = state_47730__$1;(statearr_47735_47753[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 3))
{var inst_47728 = (state_47730[2]);var state_47730__$1 = state_47730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47730__$1,inst_47728);
} else
{if((state_val_47731 === 4))
{var inst_47711 = (state_47730[7]);var inst_47714 = cljs.core.first.call(null,inst_47711);var state_47730__$1 = state_47730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47730__$1,7,ch,inst_47714);
} else
{if((state_val_47731 === 5))
{var state_47730__$1 = state_47730;if(cljs.core.truth_(close_QMARK_))
{var statearr_47736_47754 = state_47730__$1;(statearr_47736_47754[1] = 8);
} else
{var statearr_47737_47755 = state_47730__$1;(statearr_47737_47755[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 6))
{var inst_47726 = (state_47730[2]);var state_47730__$1 = state_47730;var statearr_47738_47756 = state_47730__$1;(statearr_47738_47756[2] = inst_47726);
(statearr_47738_47756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 7))
{var inst_47711 = (state_47730[7]);var inst_47716 = (state_47730[2]);var inst_47717 = cljs.core.next.call(null,inst_47711);var inst_47711__$1 = inst_47717;var state_47730__$1 = (function (){var statearr_47739 = state_47730;(statearr_47739[7] = inst_47711__$1);
(statearr_47739[8] = inst_47716);
return statearr_47739;
})();var statearr_47740_47757 = state_47730__$1;(statearr_47740_47757[2] = null);
(statearr_47740_47757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 8))
{var inst_47721 = cljs.core.async.close_BANG_.call(null,ch);var state_47730__$1 = state_47730;var statearr_47741_47758 = state_47730__$1;(statearr_47741_47758[2] = inst_47721);
(statearr_47741_47758[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 9))
{var state_47730__$1 = state_47730;var statearr_47742_47759 = state_47730__$1;(statearr_47742_47759[2] = null);
(statearr_47742_47759[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47731 === 10))
{var inst_47724 = (state_47730[2]);var state_47730__$1 = state_47730;var statearr_47743_47760 = state_47730__$1;(statearr_47743_47760[2] = inst_47724);
(statearr_47743_47760[1] = 6);
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
var state_machine__12403__auto____0 = (function (){var statearr_47747 = (new Array(9));(statearr_47747[0] = state_machine__12403__auto__);
(statearr_47747[1] = 1);
return statearr_47747;
});
var state_machine__12403__auto____1 = (function (state_47730){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_47730);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e47748){if((e47748 instanceof Object))
{var ex__12406__auto__ = e47748;var statearr_47749_47761 = state_47730;(statearr_47749_47761[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47730);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47762 = state_47730;
state_47730 = G__47762;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_47730){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_47730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_47750 = f__12478__auto__.call(null);(statearr_47750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto__);
return statearr_47750;
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
cljs.core.async.Mux = (function (){var obj47764 = {};return obj47764;
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
cljs.core.async.Mult = (function (){var obj47766 = {};return obj47766;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t47981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47981 = (function (cs,ch,mult,meta47982){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta47982 = meta47982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47981.cljs$lang$type = true;
cljs.core.async.t47981.cljs$lang$ctorStr = "cljs.core.async/t47981";
cljs.core.async.t47981.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t47981");
});})(cs))
;
cljs.core.async.t47981.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t47981.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t47981.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t47981.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t47981.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t47981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47983){var self__ = this;
var _47983__$1 = this;return self__.meta47982;
});})(cs))
;
cljs.core.async.t47981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47983,meta47982__$1){var self__ = this;
var _47983__$1 = this;return (new cljs.core.async.t47981(self__.cs,self__.ch,self__.mult,meta47982__$1));
});})(cs))
;
cljs.core.async.__GT_t47981 = ((function (cs){
return (function __GT_t47981(cs__$1,ch__$1,mult__$1,meta47982){return (new cljs.core.async.t47981(cs__$1,ch__$1,mult__$1,meta47982));
});})(cs))
;
}
return (new cljs.core.async.t47981(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12477__auto___48195 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_48113){var state_val_48114 = (state_48113[1]);if((state_val_48114 === 32))
{var inst_48062 = (state_48113[7]);var inst_47986 = (state_48113[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48113,31,Object,null,30);var inst_48069 = cljs.core.async.put_BANG_.call(null,inst_48062,inst_47986,done);var state_48113__$1 = state_48113;var statearr_48115_48196 = state_48113__$1;(statearr_48115_48196[2] = inst_48069);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48113__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 1))
{var state_48113__$1 = state_48113;var statearr_48116_48197 = state_48113__$1;(statearr_48116_48197[2] = null);
(statearr_48116_48197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 33))
{var inst_48075 = (state_48113[9]);var inst_48077 = cljs.core.chunked_seq_QMARK_.call(null,inst_48075);var state_48113__$1 = state_48113;if(inst_48077)
{var statearr_48117_48198 = state_48113__$1;(statearr_48117_48198[1] = 36);
} else
{var statearr_48118_48199 = state_48113__$1;(statearr_48118_48199[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 2))
{var state_48113__$1 = state_48113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48113__$1,4,ch);
} else
{if((state_val_48114 === 34))
{var state_48113__$1 = state_48113;var statearr_48119_48200 = state_48113__$1;(statearr_48119_48200[2] = null);
(statearr_48119_48200[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 3))
{var inst_48111 = (state_48113[2]);var state_48113__$1 = state_48113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48113__$1,inst_48111);
} else
{if((state_val_48114 === 35))
{var inst_48100 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48120_48201 = state_48113__$1;(statearr_48120_48201[2] = inst_48100);
(statearr_48120_48201[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 4))
{var inst_47986 = (state_48113[8]);var inst_47986__$1 = (state_48113[2]);var inst_47987 = (inst_47986__$1 == null);var state_48113__$1 = (function (){var statearr_48121 = state_48113;(statearr_48121[8] = inst_47986__$1);
return statearr_48121;
})();if(cljs.core.truth_(inst_47987))
{var statearr_48122_48202 = state_48113__$1;(statearr_48122_48202[1] = 5);
} else
{var statearr_48123_48203 = state_48113__$1;(statearr_48123_48203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 36))
{var inst_48075 = (state_48113[9]);var inst_48079 = cljs.core.chunk_first.call(null,inst_48075);var inst_48080 = cljs.core.chunk_rest.call(null,inst_48075);var inst_48081 = cljs.core.count.call(null,inst_48079);var inst_48054 = inst_48080;var inst_48055 = inst_48079;var inst_48056 = inst_48081;var inst_48057 = 0;var state_48113__$1 = (function (){var statearr_48124 = state_48113;(statearr_48124[10] = inst_48056);
(statearr_48124[11] = inst_48057);
(statearr_48124[12] = inst_48055);
(statearr_48124[13] = inst_48054);
return statearr_48124;
})();var statearr_48125_48204 = state_48113__$1;(statearr_48125_48204[2] = null);
(statearr_48125_48204[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 5))
{var inst_47993 = cljs.core.deref.call(null,cs);var inst_47994 = cljs.core.seq.call(null,inst_47993);var inst_47995 = inst_47994;var inst_47996 = null;var inst_47997 = 0;var inst_47998 = 0;var state_48113__$1 = (function (){var statearr_48126 = state_48113;(statearr_48126[14] = inst_47998);
(statearr_48126[15] = inst_47997);
(statearr_48126[16] = inst_47996);
(statearr_48126[17] = inst_47995);
return statearr_48126;
})();var statearr_48127_48205 = state_48113__$1;(statearr_48127_48205[2] = null);
(statearr_48127_48205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 37))
{var inst_48075 = (state_48113[9]);var inst_48084 = cljs.core.first.call(null,inst_48075);var state_48113__$1 = (function (){var statearr_48128 = state_48113;(statearr_48128[18] = inst_48084);
return statearr_48128;
})();var statearr_48129_48206 = state_48113__$1;(statearr_48129_48206[2] = null);
(statearr_48129_48206[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 6))
{var inst_48045 = cljs.core.deref.call(null,cs);var inst_48046 = cljs.core.keys.call(null,inst_48045);var inst_48047 = cljs.core.count.call(null,inst_48046);var inst_48048 = cljs.core.reset_BANG_.call(null,dctr,inst_48047);var inst_48053 = cljs.core.seq.call(null,inst_48046);var inst_48054 = inst_48053;var inst_48055 = null;var inst_48056 = 0;var inst_48057 = 0;var state_48113__$1 = (function (){var statearr_48130 = state_48113;(statearr_48130[19] = inst_48048);
(statearr_48130[10] = inst_48056);
(statearr_48130[11] = inst_48057);
(statearr_48130[12] = inst_48055);
(statearr_48130[13] = inst_48054);
return statearr_48130;
})();var statearr_48131_48207 = state_48113__$1;(statearr_48131_48207[2] = null);
(statearr_48131_48207[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 38))
{var inst_48097 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48132_48208 = state_48113__$1;(statearr_48132_48208[2] = inst_48097);
(statearr_48132_48208[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 7))
{var inst_48109 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48133_48209 = state_48113__$1;(statearr_48133_48209[2] = inst_48109);
(statearr_48133_48209[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 39))
{var inst_48075 = (state_48113[9]);var inst_48093 = (state_48113[2]);var inst_48094 = cljs.core.next.call(null,inst_48075);var inst_48054 = inst_48094;var inst_48055 = null;var inst_48056 = 0;var inst_48057 = 0;var state_48113__$1 = (function (){var statearr_48134 = state_48113;(statearr_48134[10] = inst_48056);
(statearr_48134[11] = inst_48057);
(statearr_48134[12] = inst_48055);
(statearr_48134[13] = inst_48054);
(statearr_48134[20] = inst_48093);
return statearr_48134;
})();var statearr_48135_48210 = state_48113__$1;(statearr_48135_48210[2] = null);
(statearr_48135_48210[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 8))
{var inst_47998 = (state_48113[14]);var inst_47997 = (state_48113[15]);var inst_48000 = (inst_47998 < inst_47997);var inst_48001 = inst_48000;var state_48113__$1 = state_48113;if(cljs.core.truth_(inst_48001))
{var statearr_48136_48211 = state_48113__$1;(statearr_48136_48211[1] = 10);
} else
{var statearr_48137_48212 = state_48113__$1;(statearr_48137_48212[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 40))
{var inst_48084 = (state_48113[18]);var inst_48085 = (state_48113[2]);var inst_48086 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48087 = cljs.core.async.untap_STAR_.call(null,m,inst_48084);var state_48113__$1 = (function (){var statearr_48138 = state_48113;(statearr_48138[21] = inst_48086);
(statearr_48138[22] = inst_48085);
return statearr_48138;
})();var statearr_48139_48213 = state_48113__$1;(statearr_48139_48213[2] = inst_48087);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48113__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 9))
{var inst_48043 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48140_48214 = state_48113__$1;(statearr_48140_48214[2] = inst_48043);
(statearr_48140_48214[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 41))
{var inst_47986 = (state_48113[8]);var inst_48084 = (state_48113[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48113,40,Object,null,39);var inst_48091 = cljs.core.async.put_BANG_.call(null,inst_48084,inst_47986,done);var state_48113__$1 = state_48113;var statearr_48141_48215 = state_48113__$1;(statearr_48141_48215[2] = inst_48091);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48113__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 10))
{var inst_47998 = (state_48113[14]);var inst_47996 = (state_48113[16]);var inst_48004 = cljs.core._nth.call(null,inst_47996,inst_47998);var inst_48005 = cljs.core.nth.call(null,inst_48004,0,null);var inst_48006 = cljs.core.nth.call(null,inst_48004,1,null);var state_48113__$1 = (function (){var statearr_48142 = state_48113;(statearr_48142[23] = inst_48005);
return statearr_48142;
})();if(cljs.core.truth_(inst_48006))
{var statearr_48143_48216 = state_48113__$1;(statearr_48143_48216[1] = 13);
} else
{var statearr_48144_48217 = state_48113__$1;(statearr_48144_48217[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 42))
{var inst_48106 = (state_48113[2]);var state_48113__$1 = (function (){var statearr_48145 = state_48113;(statearr_48145[24] = inst_48106);
return statearr_48145;
})();var statearr_48146_48218 = state_48113__$1;(statearr_48146_48218[2] = null);
(statearr_48146_48218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 11))
{var inst_48015 = (state_48113[25]);var inst_47995 = (state_48113[17]);var inst_48015__$1 = cljs.core.seq.call(null,inst_47995);var state_48113__$1 = (function (){var statearr_48147 = state_48113;(statearr_48147[25] = inst_48015__$1);
return statearr_48147;
})();if(inst_48015__$1)
{var statearr_48148_48219 = state_48113__$1;(statearr_48148_48219[1] = 16);
} else
{var statearr_48149_48220 = state_48113__$1;(statearr_48149_48220[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 12))
{var inst_48041 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48150_48221 = state_48113__$1;(statearr_48150_48221[2] = inst_48041);
(statearr_48150_48221[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 13))
{var inst_48005 = (state_48113[23]);var inst_48008 = cljs.core.async.close_BANG_.call(null,inst_48005);var state_48113__$1 = state_48113;var statearr_48154_48222 = state_48113__$1;(statearr_48154_48222[2] = inst_48008);
(statearr_48154_48222[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 14))
{var state_48113__$1 = state_48113;var statearr_48155_48223 = state_48113__$1;(statearr_48155_48223[2] = null);
(statearr_48155_48223[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 15))
{var inst_47998 = (state_48113[14]);var inst_47997 = (state_48113[15]);var inst_47996 = (state_48113[16]);var inst_47995 = (state_48113[17]);var inst_48011 = (state_48113[2]);var inst_48012 = (inst_47998 + 1);var tmp48151 = inst_47997;var tmp48152 = inst_47996;var tmp48153 = inst_47995;var inst_47995__$1 = tmp48153;var inst_47996__$1 = tmp48152;var inst_47997__$1 = tmp48151;var inst_47998__$1 = inst_48012;var state_48113__$1 = (function (){var statearr_48156 = state_48113;(statearr_48156[14] = inst_47998__$1);
(statearr_48156[15] = inst_47997__$1);
(statearr_48156[16] = inst_47996__$1);
(statearr_48156[17] = inst_47995__$1);
(statearr_48156[26] = inst_48011);
return statearr_48156;
})();var statearr_48157_48224 = state_48113__$1;(statearr_48157_48224[2] = null);
(statearr_48157_48224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 16))
{var inst_48015 = (state_48113[25]);var inst_48017 = cljs.core.chunked_seq_QMARK_.call(null,inst_48015);var state_48113__$1 = state_48113;if(inst_48017)
{var statearr_48158_48225 = state_48113__$1;(statearr_48158_48225[1] = 19);
} else
{var statearr_48159_48226 = state_48113__$1;(statearr_48159_48226[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 17))
{var state_48113__$1 = state_48113;var statearr_48160_48227 = state_48113__$1;(statearr_48160_48227[2] = null);
(statearr_48160_48227[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 18))
{var inst_48039 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48161_48228 = state_48113__$1;(statearr_48161_48228[2] = inst_48039);
(statearr_48161_48228[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 19))
{var inst_48015 = (state_48113[25]);var inst_48019 = cljs.core.chunk_first.call(null,inst_48015);var inst_48020 = cljs.core.chunk_rest.call(null,inst_48015);var inst_48021 = cljs.core.count.call(null,inst_48019);var inst_47995 = inst_48020;var inst_47996 = inst_48019;var inst_47997 = inst_48021;var inst_47998 = 0;var state_48113__$1 = (function (){var statearr_48162 = state_48113;(statearr_48162[14] = inst_47998);
(statearr_48162[15] = inst_47997);
(statearr_48162[16] = inst_47996);
(statearr_48162[17] = inst_47995);
return statearr_48162;
})();var statearr_48163_48229 = state_48113__$1;(statearr_48163_48229[2] = null);
(statearr_48163_48229[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 20))
{var inst_48015 = (state_48113[25]);var inst_48025 = cljs.core.first.call(null,inst_48015);var inst_48026 = cljs.core.nth.call(null,inst_48025,0,null);var inst_48027 = cljs.core.nth.call(null,inst_48025,1,null);var state_48113__$1 = (function (){var statearr_48164 = state_48113;(statearr_48164[27] = inst_48026);
return statearr_48164;
})();if(cljs.core.truth_(inst_48027))
{var statearr_48165_48230 = state_48113__$1;(statearr_48165_48230[1] = 22);
} else
{var statearr_48166_48231 = state_48113__$1;(statearr_48166_48231[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 21))
{var inst_48036 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48167_48232 = state_48113__$1;(statearr_48167_48232[2] = inst_48036);
(statearr_48167_48232[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 22))
{var inst_48026 = (state_48113[27]);var inst_48029 = cljs.core.async.close_BANG_.call(null,inst_48026);var state_48113__$1 = state_48113;var statearr_48168_48233 = state_48113__$1;(statearr_48168_48233[2] = inst_48029);
(statearr_48168_48233[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 23))
{var state_48113__$1 = state_48113;var statearr_48169_48234 = state_48113__$1;(statearr_48169_48234[2] = null);
(statearr_48169_48234[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 24))
{var inst_48015 = (state_48113[25]);var inst_48032 = (state_48113[2]);var inst_48033 = cljs.core.next.call(null,inst_48015);var inst_47995 = inst_48033;var inst_47996 = null;var inst_47997 = 0;var inst_47998 = 0;var state_48113__$1 = (function (){var statearr_48170 = state_48113;(statearr_48170[14] = inst_47998);
(statearr_48170[15] = inst_47997);
(statearr_48170[16] = inst_47996);
(statearr_48170[17] = inst_47995);
(statearr_48170[28] = inst_48032);
return statearr_48170;
})();var statearr_48171_48235 = state_48113__$1;(statearr_48171_48235[2] = null);
(statearr_48171_48235[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 25))
{var inst_48056 = (state_48113[10]);var inst_48057 = (state_48113[11]);var inst_48059 = (inst_48057 < inst_48056);var inst_48060 = inst_48059;var state_48113__$1 = state_48113;if(cljs.core.truth_(inst_48060))
{var statearr_48172_48236 = state_48113__$1;(statearr_48172_48236[1] = 27);
} else
{var statearr_48173_48237 = state_48113__$1;(statearr_48173_48237[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 26))
{var inst_48104 = (state_48113[2]);var state_48113__$1 = (function (){var statearr_48174 = state_48113;(statearr_48174[29] = inst_48104);
return statearr_48174;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48113__$1,42,dchan);
} else
{if((state_val_48114 === 27))
{var inst_48057 = (state_48113[11]);var inst_48055 = (state_48113[12]);var inst_48062 = cljs.core._nth.call(null,inst_48055,inst_48057);var state_48113__$1 = (function (){var statearr_48175 = state_48113;(statearr_48175[7] = inst_48062);
return statearr_48175;
})();var statearr_48176_48238 = state_48113__$1;(statearr_48176_48238[2] = null);
(statearr_48176_48238[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 28))
{var inst_48054 = (state_48113[13]);var inst_48075 = (state_48113[9]);var inst_48075__$1 = cljs.core.seq.call(null,inst_48054);var state_48113__$1 = (function (){var statearr_48180 = state_48113;(statearr_48180[9] = inst_48075__$1);
return statearr_48180;
})();if(inst_48075__$1)
{var statearr_48181_48239 = state_48113__$1;(statearr_48181_48239[1] = 33);
} else
{var statearr_48182_48240 = state_48113__$1;(statearr_48182_48240[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 29))
{var inst_48102 = (state_48113[2]);var state_48113__$1 = state_48113;var statearr_48183_48241 = state_48113__$1;(statearr_48183_48241[2] = inst_48102);
(statearr_48183_48241[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 30))
{var inst_48056 = (state_48113[10]);var inst_48057 = (state_48113[11]);var inst_48055 = (state_48113[12]);var inst_48054 = (state_48113[13]);var inst_48071 = (state_48113[2]);var inst_48072 = (inst_48057 + 1);var tmp48177 = inst_48056;var tmp48178 = inst_48055;var tmp48179 = inst_48054;var inst_48054__$1 = tmp48179;var inst_48055__$1 = tmp48178;var inst_48056__$1 = tmp48177;var inst_48057__$1 = inst_48072;var state_48113__$1 = (function (){var statearr_48184 = state_48113;(statearr_48184[30] = inst_48071);
(statearr_48184[10] = inst_48056__$1);
(statearr_48184[11] = inst_48057__$1);
(statearr_48184[12] = inst_48055__$1);
(statearr_48184[13] = inst_48054__$1);
return statearr_48184;
})();var statearr_48185_48242 = state_48113__$1;(statearr_48185_48242[2] = null);
(statearr_48185_48242[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48114 === 31))
{var inst_48062 = (state_48113[7]);var inst_48063 = (state_48113[2]);var inst_48064 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48065 = cljs.core.async.untap_STAR_.call(null,m,inst_48062);var state_48113__$1 = (function (){var statearr_48186 = state_48113;(statearr_48186[31] = inst_48064);
(statearr_48186[32] = inst_48063);
return statearr_48186;
})();var statearr_48187_48243 = state_48113__$1;(statearr_48187_48243[2] = inst_48065);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48113__$1);
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
var state_machine__12403__auto____0 = (function (){var statearr_48191 = (new Array(33));(statearr_48191[0] = state_machine__12403__auto__);
(statearr_48191[1] = 1);
return statearr_48191;
});
var state_machine__12403__auto____1 = (function (state_48113){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_48113);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e48192){if((e48192 instanceof Object))
{var ex__12406__auto__ = e48192;var statearr_48193_48244 = state_48113;(statearr_48193_48244[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48245 = state_48113;
state_48113 = G__48245;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_48113){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_48113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_48194 = f__12478__auto__.call(null);(statearr_48194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___48195);
return statearr_48194;
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
cljs.core.async.Mix = (function (){var obj48247 = {};return obj48247;
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
;var m = (function (){if(typeof cljs.core.async.t48357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48357 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta48358){
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
this.meta48358 = meta48358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48357.cljs$lang$type = true;
cljs.core.async.t48357.cljs$lang$ctorStr = "cljs.core.async/t48357";
cljs.core.async.t48357.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t48357");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48359){var self__ = this;
var _48359__$1 = this;return self__.meta48358;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48359,meta48358__$1){var self__ = this;
var _48359__$1 = this;return (new cljs.core.async.t48357(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta48358__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48357 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48357(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48358){return (new cljs.core.async.t48357(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48358));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48357(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12477__auto___48466 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_48424){var state_val_48425 = (state_48424[1]);if((state_val_48425 === 1))
{var inst_48363 = (state_48424[7]);var inst_48363__$1 = calc_state.call(null);var inst_48364 = cljs.core.seq_QMARK_.call(null,inst_48363__$1);var state_48424__$1 = (function (){var statearr_48426 = state_48424;(statearr_48426[7] = inst_48363__$1);
return statearr_48426;
})();if(inst_48364)
{var statearr_48427_48467 = state_48424__$1;(statearr_48427_48467[1] = 2);
} else
{var statearr_48428_48468 = state_48424__$1;(statearr_48428_48468[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 2))
{var inst_48363 = (state_48424[7]);var inst_48366 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48363);var state_48424__$1 = state_48424;var statearr_48429_48469 = state_48424__$1;(statearr_48429_48469[2] = inst_48366);
(statearr_48429_48469[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 3))
{var inst_48363 = (state_48424[7]);var state_48424__$1 = state_48424;var statearr_48430_48470 = state_48424__$1;(statearr_48430_48470[2] = inst_48363);
(statearr_48430_48470[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 4))
{var inst_48363 = (state_48424[7]);var inst_48369 = (state_48424[2]);var inst_48370 = cljs.core.get.call(null,inst_48369,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48371 = cljs.core.get.call(null,inst_48369,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48372 = cljs.core.get.call(null,inst_48369,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48373 = inst_48363;var state_48424__$1 = (function (){var statearr_48431 = state_48424;(statearr_48431[8] = inst_48372);
(statearr_48431[9] = inst_48371);
(statearr_48431[10] = inst_48373);
(statearr_48431[11] = inst_48370);
return statearr_48431;
})();var statearr_48432_48471 = state_48424__$1;(statearr_48432_48471[2] = null);
(statearr_48432_48471[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 5))
{var inst_48373 = (state_48424[10]);var inst_48376 = cljs.core.seq_QMARK_.call(null,inst_48373);var state_48424__$1 = state_48424;if(inst_48376)
{var statearr_48433_48472 = state_48424__$1;(statearr_48433_48472[1] = 7);
} else
{var statearr_48434_48473 = state_48424__$1;(statearr_48434_48473[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 6))
{var inst_48422 = (state_48424[2]);var state_48424__$1 = state_48424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48424__$1,inst_48422);
} else
{if((state_val_48425 === 7))
{var inst_48373 = (state_48424[10]);var inst_48378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48373);var state_48424__$1 = state_48424;var statearr_48435_48474 = state_48424__$1;(statearr_48435_48474[2] = inst_48378);
(statearr_48435_48474[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 8))
{var inst_48373 = (state_48424[10]);var state_48424__$1 = state_48424;var statearr_48436_48475 = state_48424__$1;(statearr_48436_48475[2] = inst_48373);
(statearr_48436_48475[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 9))
{var inst_48381 = (state_48424[12]);var inst_48381__$1 = (state_48424[2]);var inst_48382 = cljs.core.get.call(null,inst_48381__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48383 = cljs.core.get.call(null,inst_48381__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48384 = cljs.core.get.call(null,inst_48381__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_48424__$1 = (function (){var statearr_48437 = state_48424;(statearr_48437[12] = inst_48381__$1);
(statearr_48437[13] = inst_48383);
(statearr_48437[14] = inst_48384);
return statearr_48437;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48424__$1,10,inst_48382);
} else
{if((state_val_48425 === 10))
{var inst_48388 = (state_48424[15]);var inst_48389 = (state_48424[16]);var inst_48387 = (state_48424[2]);var inst_48388__$1 = cljs.core.nth.call(null,inst_48387,0,null);var inst_48389__$1 = cljs.core.nth.call(null,inst_48387,1,null);var inst_48390 = (inst_48388__$1 == null);var inst_48391 = cljs.core._EQ_.call(null,inst_48389__$1,change);var inst_48392 = (inst_48390) || (inst_48391);var state_48424__$1 = (function (){var statearr_48438 = state_48424;(statearr_48438[15] = inst_48388__$1);
(statearr_48438[16] = inst_48389__$1);
return statearr_48438;
})();if(cljs.core.truth_(inst_48392))
{var statearr_48439_48476 = state_48424__$1;(statearr_48439_48476[1] = 11);
} else
{var statearr_48440_48477 = state_48424__$1;(statearr_48440_48477[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 11))
{var inst_48388 = (state_48424[15]);var inst_48394 = (inst_48388 == null);var state_48424__$1 = state_48424;if(cljs.core.truth_(inst_48394))
{var statearr_48441_48478 = state_48424__$1;(statearr_48441_48478[1] = 14);
} else
{var statearr_48442_48479 = state_48424__$1;(statearr_48442_48479[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 12))
{var inst_48403 = (state_48424[17]);var inst_48389 = (state_48424[16]);var inst_48384 = (state_48424[14]);var inst_48403__$1 = inst_48384.call(null,inst_48389);var state_48424__$1 = (function (){var statearr_48443 = state_48424;(statearr_48443[17] = inst_48403__$1);
return statearr_48443;
})();if(cljs.core.truth_(inst_48403__$1))
{var statearr_48444_48480 = state_48424__$1;(statearr_48444_48480[1] = 17);
} else
{var statearr_48445_48481 = state_48424__$1;(statearr_48445_48481[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 13))
{var inst_48420 = (state_48424[2]);var state_48424__$1 = state_48424;var statearr_48446_48482 = state_48424__$1;(statearr_48446_48482[2] = inst_48420);
(statearr_48446_48482[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 14))
{var inst_48389 = (state_48424[16]);var inst_48396 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48389);var state_48424__$1 = state_48424;var statearr_48447_48483 = state_48424__$1;(statearr_48447_48483[2] = inst_48396);
(statearr_48447_48483[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 15))
{var state_48424__$1 = state_48424;var statearr_48448_48484 = state_48424__$1;(statearr_48448_48484[2] = null);
(statearr_48448_48484[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 16))
{var inst_48399 = (state_48424[2]);var inst_48400 = calc_state.call(null);var inst_48373 = inst_48400;var state_48424__$1 = (function (){var statearr_48449 = state_48424;(statearr_48449[10] = inst_48373);
(statearr_48449[18] = inst_48399);
return statearr_48449;
})();var statearr_48450_48485 = state_48424__$1;(statearr_48450_48485[2] = null);
(statearr_48450_48485[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 17))
{var inst_48403 = (state_48424[17]);var state_48424__$1 = state_48424;var statearr_48451_48486 = state_48424__$1;(statearr_48451_48486[2] = inst_48403);
(statearr_48451_48486[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 18))
{var inst_48389 = (state_48424[16]);var inst_48383 = (state_48424[13]);var inst_48384 = (state_48424[14]);var inst_48406 = cljs.core.empty_QMARK_.call(null,inst_48384);var inst_48407 = inst_48383.call(null,inst_48389);var inst_48408 = cljs.core.not.call(null,inst_48407);var inst_48409 = (inst_48406) && (inst_48408);var state_48424__$1 = state_48424;var statearr_48452_48487 = state_48424__$1;(statearr_48452_48487[2] = inst_48409);
(statearr_48452_48487[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 19))
{var inst_48411 = (state_48424[2]);var state_48424__$1 = state_48424;if(cljs.core.truth_(inst_48411))
{var statearr_48453_48488 = state_48424__$1;(statearr_48453_48488[1] = 20);
} else
{var statearr_48454_48489 = state_48424__$1;(statearr_48454_48489[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 20))
{var inst_48388 = (state_48424[15]);var state_48424__$1 = state_48424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48424__$1,23,out,inst_48388);
} else
{if((state_val_48425 === 21))
{var state_48424__$1 = state_48424;var statearr_48455_48490 = state_48424__$1;(statearr_48455_48490[2] = null);
(statearr_48455_48490[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 22))
{var inst_48381 = (state_48424[12]);var inst_48417 = (state_48424[2]);var inst_48373 = inst_48381;var state_48424__$1 = (function (){var statearr_48456 = state_48424;(statearr_48456[10] = inst_48373);
(statearr_48456[19] = inst_48417);
return statearr_48456;
})();var statearr_48457_48491 = state_48424__$1;(statearr_48457_48491[2] = null);
(statearr_48457_48491[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48425 === 23))
{var inst_48414 = (state_48424[2]);var state_48424__$1 = state_48424;var statearr_48458_48492 = state_48424__$1;(statearr_48458_48492[2] = inst_48414);
(statearr_48458_48492[1] = 22);
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
var state_machine__12403__auto____0 = (function (){var statearr_48462 = (new Array(20));(statearr_48462[0] = state_machine__12403__auto__);
(statearr_48462[1] = 1);
return statearr_48462;
});
var state_machine__12403__auto____1 = (function (state_48424){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_48424);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e48463){if((e48463 instanceof Object))
{var ex__12406__auto__ = e48463;var statearr_48464_48493 = state_48424;(statearr_48464_48493[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48494 = state_48424;
state_48424 = G__48494;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_48424){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_48424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_48465 = f__12478__auto__.call(null);(statearr_48465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___48466);
return statearr_48465;
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
cljs.core.async.Pub = (function (){var obj48496 = {};return obj48496;
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
return (function (p1__48497_SHARP_){if(cljs.core.truth_(p1__48497_SHARP_.call(null,topic)))
{return p1__48497_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__48497_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5157__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48622 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48623){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48623 = meta48623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48622.cljs$lang$type = true;
cljs.core.async.t48622.cljs$lang$ctorStr = "cljs.core.async/t48622";
cljs.core.async.t48622.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t48622");
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48622.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48624){var self__ = this;
var _48624__$1 = this;return self__.meta48623;
});})(mults,ensure_mult))
;
cljs.core.async.t48622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48624,meta48623__$1){var self__ = this;
var _48624__$1 = this;return (new cljs.core.async.t48622(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48623__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48622 = ((function (mults,ensure_mult){
return (function __GT_t48622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48623){return (new cljs.core.async.t48622(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48623));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48622(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12477__auto___48746 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_48698){var state_val_48699 = (state_48698[1]);if((state_val_48699 === 1))
{var state_48698__$1 = state_48698;var statearr_48700_48747 = state_48698__$1;(statearr_48700_48747[2] = null);
(statearr_48700_48747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 2))
{var state_48698__$1 = state_48698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48698__$1,4,ch);
} else
{if((state_val_48699 === 3))
{var inst_48696 = (state_48698[2]);var state_48698__$1 = state_48698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48698__$1,inst_48696);
} else
{if((state_val_48699 === 4))
{var inst_48627 = (state_48698[7]);var inst_48627__$1 = (state_48698[2]);var inst_48628 = (inst_48627__$1 == null);var state_48698__$1 = (function (){var statearr_48701 = state_48698;(statearr_48701[7] = inst_48627__$1);
return statearr_48701;
})();if(cljs.core.truth_(inst_48628))
{var statearr_48702_48748 = state_48698__$1;(statearr_48702_48748[1] = 5);
} else
{var statearr_48703_48749 = state_48698__$1;(statearr_48703_48749[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 5))
{var inst_48634 = cljs.core.deref.call(null,mults);var inst_48635 = cljs.core.vals.call(null,inst_48634);var inst_48636 = cljs.core.seq.call(null,inst_48635);var inst_48637 = inst_48636;var inst_48638 = null;var inst_48639 = 0;var inst_48640 = 0;var state_48698__$1 = (function (){var statearr_48704 = state_48698;(statearr_48704[8] = inst_48640);
(statearr_48704[9] = inst_48637);
(statearr_48704[10] = inst_48638);
(statearr_48704[11] = inst_48639);
return statearr_48704;
})();var statearr_48705_48750 = state_48698__$1;(statearr_48705_48750[2] = null);
(statearr_48705_48750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 6))
{var inst_48677 = (state_48698[12]);var inst_48627 = (state_48698[7]);var inst_48675 = (state_48698[13]);var inst_48675__$1 = topic_fn.call(null,inst_48627);var inst_48676 = cljs.core.deref.call(null,mults);var inst_48677__$1 = cljs.core.get.call(null,inst_48676,inst_48675__$1);var state_48698__$1 = (function (){var statearr_48706 = state_48698;(statearr_48706[12] = inst_48677__$1);
(statearr_48706[13] = inst_48675__$1);
return statearr_48706;
})();if(cljs.core.truth_(inst_48677__$1))
{var statearr_48707_48751 = state_48698__$1;(statearr_48707_48751[1] = 19);
} else
{var statearr_48708_48752 = state_48698__$1;(statearr_48708_48752[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 7))
{var inst_48694 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48709_48753 = state_48698__$1;(statearr_48709_48753[2] = inst_48694);
(statearr_48709_48753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 8))
{var inst_48640 = (state_48698[8]);var inst_48639 = (state_48698[11]);var inst_48642 = (inst_48640 < inst_48639);var inst_48643 = inst_48642;var state_48698__$1 = state_48698;if(cljs.core.truth_(inst_48643))
{var statearr_48713_48754 = state_48698__$1;(statearr_48713_48754[1] = 10);
} else
{var statearr_48714_48755 = state_48698__$1;(statearr_48714_48755[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 9))
{var inst_48673 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48715_48756 = state_48698__$1;(statearr_48715_48756[2] = inst_48673);
(statearr_48715_48756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 10))
{var inst_48640 = (state_48698[8]);var inst_48637 = (state_48698[9]);var inst_48638 = (state_48698[10]);var inst_48639 = (state_48698[11]);var inst_48645 = cljs.core._nth.call(null,inst_48638,inst_48640);var inst_48646 = cljs.core.async.muxch_STAR_.call(null,inst_48645);var inst_48647 = cljs.core.async.close_BANG_.call(null,inst_48646);var inst_48648 = (inst_48640 + 1);var tmp48710 = inst_48637;var tmp48711 = inst_48638;var tmp48712 = inst_48639;var inst_48637__$1 = tmp48710;var inst_48638__$1 = tmp48711;var inst_48639__$1 = tmp48712;var inst_48640__$1 = inst_48648;var state_48698__$1 = (function (){var statearr_48716 = state_48698;(statearr_48716[8] = inst_48640__$1);
(statearr_48716[14] = inst_48647);
(statearr_48716[9] = inst_48637__$1);
(statearr_48716[10] = inst_48638__$1);
(statearr_48716[11] = inst_48639__$1);
return statearr_48716;
})();var statearr_48717_48757 = state_48698__$1;(statearr_48717_48757[2] = null);
(statearr_48717_48757[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 11))
{var inst_48651 = (state_48698[15]);var inst_48637 = (state_48698[9]);var inst_48651__$1 = cljs.core.seq.call(null,inst_48637);var state_48698__$1 = (function (){var statearr_48718 = state_48698;(statearr_48718[15] = inst_48651__$1);
return statearr_48718;
})();if(inst_48651__$1)
{var statearr_48719_48758 = state_48698__$1;(statearr_48719_48758[1] = 13);
} else
{var statearr_48720_48759 = state_48698__$1;(statearr_48720_48759[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 12))
{var inst_48671 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48721_48760 = state_48698__$1;(statearr_48721_48760[2] = inst_48671);
(statearr_48721_48760[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 13))
{var inst_48651 = (state_48698[15]);var inst_48653 = cljs.core.chunked_seq_QMARK_.call(null,inst_48651);var state_48698__$1 = state_48698;if(inst_48653)
{var statearr_48722_48761 = state_48698__$1;(statearr_48722_48761[1] = 16);
} else
{var statearr_48723_48762 = state_48698__$1;(statearr_48723_48762[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 14))
{var state_48698__$1 = state_48698;var statearr_48724_48763 = state_48698__$1;(statearr_48724_48763[2] = null);
(statearr_48724_48763[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 15))
{var inst_48669 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48725_48764 = state_48698__$1;(statearr_48725_48764[2] = inst_48669);
(statearr_48725_48764[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 16))
{var inst_48651 = (state_48698[15]);var inst_48655 = cljs.core.chunk_first.call(null,inst_48651);var inst_48656 = cljs.core.chunk_rest.call(null,inst_48651);var inst_48657 = cljs.core.count.call(null,inst_48655);var inst_48637 = inst_48656;var inst_48638 = inst_48655;var inst_48639 = inst_48657;var inst_48640 = 0;var state_48698__$1 = (function (){var statearr_48726 = state_48698;(statearr_48726[8] = inst_48640);
(statearr_48726[9] = inst_48637);
(statearr_48726[10] = inst_48638);
(statearr_48726[11] = inst_48639);
return statearr_48726;
})();var statearr_48727_48765 = state_48698__$1;(statearr_48727_48765[2] = null);
(statearr_48727_48765[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 17))
{var inst_48651 = (state_48698[15]);var inst_48660 = cljs.core.first.call(null,inst_48651);var inst_48661 = cljs.core.async.muxch_STAR_.call(null,inst_48660);var inst_48662 = cljs.core.async.close_BANG_.call(null,inst_48661);var inst_48663 = cljs.core.next.call(null,inst_48651);var inst_48637 = inst_48663;var inst_48638 = null;var inst_48639 = 0;var inst_48640 = 0;var state_48698__$1 = (function (){var statearr_48728 = state_48698;(statearr_48728[8] = inst_48640);
(statearr_48728[9] = inst_48637);
(statearr_48728[10] = inst_48638);
(statearr_48728[11] = inst_48639);
(statearr_48728[16] = inst_48662);
return statearr_48728;
})();var statearr_48729_48766 = state_48698__$1;(statearr_48729_48766[2] = null);
(statearr_48729_48766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 18))
{var inst_48666 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48730_48767 = state_48698__$1;(statearr_48730_48767[2] = inst_48666);
(statearr_48730_48767[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 19))
{var state_48698__$1 = state_48698;var statearr_48731_48768 = state_48698__$1;(statearr_48731_48768[2] = null);
(statearr_48731_48768[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 20))
{var state_48698__$1 = state_48698;var statearr_48732_48769 = state_48698__$1;(statearr_48732_48769[2] = null);
(statearr_48732_48769[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 21))
{var inst_48691 = (state_48698[2]);var state_48698__$1 = (function (){var statearr_48733 = state_48698;(statearr_48733[17] = inst_48691);
return statearr_48733;
})();var statearr_48734_48770 = state_48698__$1;(statearr_48734_48770[2] = null);
(statearr_48734_48770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 22))
{var inst_48688 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48735_48771 = state_48698__$1;(statearr_48735_48771[2] = inst_48688);
(statearr_48735_48771[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 23))
{var inst_48675 = (state_48698[13]);var inst_48679 = (state_48698[2]);var inst_48680 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48675);var state_48698__$1 = (function (){var statearr_48736 = state_48698;(statearr_48736[18] = inst_48679);
return statearr_48736;
})();var statearr_48737_48772 = state_48698__$1;(statearr_48737_48772[2] = inst_48680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48698__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48699 === 24))
{var inst_48677 = (state_48698[12]);var inst_48627 = (state_48698[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48698,23,Object,null,22);var inst_48684 = cljs.core.async.muxch_STAR_.call(null,inst_48677);var state_48698__$1 = state_48698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48698__$1,25,inst_48684,inst_48627);
} else
{if((state_val_48699 === 25))
{var inst_48686 = (state_48698[2]);var state_48698__$1 = state_48698;var statearr_48738_48773 = state_48698__$1;(statearr_48738_48773[2] = inst_48686);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48698__$1);
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
var state_machine__12403__auto____0 = (function (){var statearr_48742 = (new Array(19));(statearr_48742[0] = state_machine__12403__auto__);
(statearr_48742[1] = 1);
return statearr_48742;
});
var state_machine__12403__auto____1 = (function (state_48698){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_48698);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e48743){if((e48743 instanceof Object))
{var ex__12406__auto__ = e48743;var statearr_48744_48774 = state_48698;(statearr_48744_48774[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48775 = state_48698;
state_48698 = G__48775;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_48698){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_48698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_48745 = f__12478__auto__.call(null);(statearr_48745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___48746);
return statearr_48745;
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
,cljs.core.range.call(null,cnt));var c__12477__auto___48912 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_48882){var state_val_48883 = (state_48882[1]);if((state_val_48883 === 1))
{var state_48882__$1 = state_48882;var statearr_48884_48913 = state_48882__$1;(statearr_48884_48913[2] = null);
(statearr_48884_48913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 2))
{var inst_48845 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_48846 = 0;var state_48882__$1 = (function (){var statearr_48885 = state_48882;(statearr_48885[7] = inst_48845);
(statearr_48885[8] = inst_48846);
return statearr_48885;
})();var statearr_48886_48914 = state_48882__$1;(statearr_48886_48914[2] = null);
(statearr_48886_48914[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 3))
{var inst_48880 = (state_48882[2]);var state_48882__$1 = state_48882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48882__$1,inst_48880);
} else
{if((state_val_48883 === 4))
{var inst_48846 = (state_48882[8]);var inst_48848 = (inst_48846 < cnt);var state_48882__$1 = state_48882;if(cljs.core.truth_(inst_48848))
{var statearr_48887_48915 = state_48882__$1;(statearr_48887_48915[1] = 6);
} else
{var statearr_48888_48916 = state_48882__$1;(statearr_48888_48916[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 5))
{var inst_48866 = (state_48882[2]);var state_48882__$1 = (function (){var statearr_48889 = state_48882;(statearr_48889[9] = inst_48866);
return statearr_48889;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48882__$1,12,dchan);
} else
{if((state_val_48883 === 6))
{var state_48882__$1 = state_48882;var statearr_48890_48917 = state_48882__$1;(statearr_48890_48917[2] = null);
(statearr_48890_48917[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 7))
{var state_48882__$1 = state_48882;var statearr_48891_48918 = state_48882__$1;(statearr_48891_48918[2] = null);
(statearr_48891_48918[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 8))
{var inst_48864 = (state_48882[2]);var state_48882__$1 = state_48882;var statearr_48892_48919 = state_48882__$1;(statearr_48892_48919[2] = inst_48864);
(statearr_48892_48919[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 9))
{var inst_48846 = (state_48882[8]);var inst_48859 = (state_48882[2]);var inst_48860 = (inst_48846 + 1);var inst_48846__$1 = inst_48860;var state_48882__$1 = (function (){var statearr_48893 = state_48882;(statearr_48893[8] = inst_48846__$1);
(statearr_48893[10] = inst_48859);
return statearr_48893;
})();var statearr_48894_48920 = state_48882__$1;(statearr_48894_48920[2] = null);
(statearr_48894_48920[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 10))
{var inst_48850 = (state_48882[2]);var inst_48851 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_48882__$1 = (function (){var statearr_48895 = state_48882;(statearr_48895[11] = inst_48850);
return statearr_48895;
})();var statearr_48896_48921 = state_48882__$1;(statearr_48896_48921[2] = inst_48851);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 11))
{var inst_48846 = (state_48882[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48882,10,Object,null,9);var inst_48855 = chs__$1.call(null,inst_48846);var inst_48856 = done.call(null,inst_48846);var inst_48857 = cljs.core.async.take_BANG_.call(null,inst_48855,inst_48856);var state_48882__$1 = state_48882;var statearr_48897_48922 = state_48882__$1;(statearr_48897_48922[2] = inst_48857);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 12))
{var inst_48868 = (state_48882[12]);var inst_48868__$1 = (state_48882[2]);var inst_48869 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48868__$1);var state_48882__$1 = (function (){var statearr_48898 = state_48882;(statearr_48898[12] = inst_48868__$1);
return statearr_48898;
})();if(cljs.core.truth_(inst_48869))
{var statearr_48899_48923 = state_48882__$1;(statearr_48899_48923[1] = 13);
} else
{var statearr_48900_48924 = state_48882__$1;(statearr_48900_48924[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 13))
{var inst_48871 = cljs.core.async.close_BANG_.call(null,out);var state_48882__$1 = state_48882;var statearr_48901_48925 = state_48882__$1;(statearr_48901_48925[2] = inst_48871);
(statearr_48901_48925[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 14))
{var inst_48868 = (state_48882[12]);var inst_48873 = cljs.core.apply.call(null,f,inst_48868);var state_48882__$1 = state_48882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48882__$1,16,out,inst_48873);
} else
{if((state_val_48883 === 15))
{var inst_48878 = (state_48882[2]);var state_48882__$1 = state_48882;var statearr_48902_48926 = state_48882__$1;(statearr_48902_48926[2] = inst_48878);
(statearr_48902_48926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48883 === 16))
{var inst_48875 = (state_48882[2]);var state_48882__$1 = (function (){var statearr_48903 = state_48882;(statearr_48903[13] = inst_48875);
return statearr_48903;
})();var statearr_48904_48927 = state_48882__$1;(statearr_48904_48927[2] = null);
(statearr_48904_48927[1] = 2);
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
var state_machine__12403__auto____0 = (function (){var statearr_48908 = (new Array(14));(statearr_48908[0] = state_machine__12403__auto__);
(statearr_48908[1] = 1);
return statearr_48908;
});
var state_machine__12403__auto____1 = (function (state_48882){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_48882);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e48909){if((e48909 instanceof Object))
{var ex__12406__auto__ = e48909;var statearr_48910_48928 = state_48882;(statearr_48910_48928[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48929 = state_48882;
state_48882 = G__48929;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_48882){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_48882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_48911 = f__12478__auto__.call(null);(statearr_48911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___48912);
return statearr_48911;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___49037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_49013){var state_val_49014 = (state_49013[1]);if((state_val_49014 === 1))
{var inst_48984 = cljs.core.vec.call(null,chs);var inst_48985 = inst_48984;var state_49013__$1 = (function (){var statearr_49015 = state_49013;(statearr_49015[7] = inst_48985);
return statearr_49015;
})();var statearr_49016_49038 = state_49013__$1;(statearr_49016_49038[2] = null);
(statearr_49016_49038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 2))
{var inst_48985 = (state_49013[7]);var inst_48987 = cljs.core.count.call(null,inst_48985);var inst_48988 = (inst_48987 > 0);var state_49013__$1 = state_49013;if(cljs.core.truth_(inst_48988))
{var statearr_49017_49039 = state_49013__$1;(statearr_49017_49039[1] = 4);
} else
{var statearr_49018_49040 = state_49013__$1;(statearr_49018_49040[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 3))
{var inst_49011 = (state_49013[2]);var state_49013__$1 = state_49013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49013__$1,inst_49011);
} else
{if((state_val_49014 === 4))
{var inst_48985 = (state_49013[7]);var state_49013__$1 = state_49013;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49013__$1,7,inst_48985);
} else
{if((state_val_49014 === 5))
{var inst_49007 = cljs.core.async.close_BANG_.call(null,out);var state_49013__$1 = state_49013;var statearr_49019_49041 = state_49013__$1;(statearr_49019_49041[2] = inst_49007);
(statearr_49019_49041[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 6))
{var inst_49009 = (state_49013[2]);var state_49013__$1 = state_49013;var statearr_49020_49042 = state_49013__$1;(statearr_49020_49042[2] = inst_49009);
(statearr_49020_49042[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 7))
{var inst_48993 = (state_49013[8]);var inst_48992 = (state_49013[9]);var inst_48992__$1 = (state_49013[2]);var inst_48993__$1 = cljs.core.nth.call(null,inst_48992__$1,0,null);var inst_48994 = cljs.core.nth.call(null,inst_48992__$1,1,null);var inst_48995 = (inst_48993__$1 == null);var state_49013__$1 = (function (){var statearr_49021 = state_49013;(statearr_49021[8] = inst_48993__$1);
(statearr_49021[10] = inst_48994);
(statearr_49021[9] = inst_48992__$1);
return statearr_49021;
})();if(cljs.core.truth_(inst_48995))
{var statearr_49022_49043 = state_49013__$1;(statearr_49022_49043[1] = 8);
} else
{var statearr_49023_49044 = state_49013__$1;(statearr_49023_49044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 8))
{var inst_48993 = (state_49013[8]);var inst_48994 = (state_49013[10]);var inst_48992 = (state_49013[9]);var inst_48985 = (state_49013[7]);var inst_48997 = (function (){var c = inst_48994;var v = inst_48993;var vec__48990 = inst_48992;var cs = inst_48985;return ((function (c,v,vec__48990,cs,inst_48993,inst_48994,inst_48992,inst_48985,state_val_49014){
return (function (p1__48930_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__48930_SHARP_);
});
;})(c,v,vec__48990,cs,inst_48993,inst_48994,inst_48992,inst_48985,state_val_49014))
})();var inst_48998 = cljs.core.filterv.call(null,inst_48997,inst_48985);var inst_48985__$1 = inst_48998;var state_49013__$1 = (function (){var statearr_49024 = state_49013;(statearr_49024[7] = inst_48985__$1);
return statearr_49024;
})();var statearr_49025_49045 = state_49013__$1;(statearr_49025_49045[2] = null);
(statearr_49025_49045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 9))
{var inst_48993 = (state_49013[8]);var state_49013__$1 = state_49013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49013__$1,11,out,inst_48993);
} else
{if((state_val_49014 === 10))
{var inst_49005 = (state_49013[2]);var state_49013__$1 = state_49013;var statearr_49027_49046 = state_49013__$1;(statearr_49027_49046[2] = inst_49005);
(statearr_49027_49046[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49014 === 11))
{var inst_48985 = (state_49013[7]);var inst_49002 = (state_49013[2]);var tmp49026 = inst_48985;var inst_48985__$1 = tmp49026;var state_49013__$1 = (function (){var statearr_49028 = state_49013;(statearr_49028[11] = inst_49002);
(statearr_49028[7] = inst_48985__$1);
return statearr_49028;
})();var statearr_49029_49047 = state_49013__$1;(statearr_49029_49047[2] = null);
(statearr_49029_49047[1] = 2);
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
var state_machine__12403__auto____0 = (function (){var statearr_49033 = (new Array(12));(statearr_49033[0] = state_machine__12403__auto__);
(statearr_49033[1] = 1);
return statearr_49033;
});
var state_machine__12403__auto____1 = (function (state_49013){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_49013);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e49034){if((e49034 instanceof Object))
{var ex__12406__auto__ = e49034;var statearr_49035_49048 = state_49013;(statearr_49035_49048[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49049 = state_49013;
state_49013 = G__49049;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_49013){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_49013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_49036 = f__12478__auto__.call(null);(statearr_49036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___49037);
return statearr_49036;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___49142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_49119){var state_val_49120 = (state_49119[1]);if((state_val_49120 === 1))
{var inst_49096 = 0;var state_49119__$1 = (function (){var statearr_49121 = state_49119;(statearr_49121[7] = inst_49096);
return statearr_49121;
})();var statearr_49122_49143 = state_49119__$1;(statearr_49122_49143[2] = null);
(statearr_49122_49143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 2))
{var inst_49096 = (state_49119[7]);var inst_49098 = (inst_49096 < n);var state_49119__$1 = state_49119;if(cljs.core.truth_(inst_49098))
{var statearr_49123_49144 = state_49119__$1;(statearr_49123_49144[1] = 4);
} else
{var statearr_49124_49145 = state_49119__$1;(statearr_49124_49145[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 3))
{var inst_49116 = (state_49119[2]);var inst_49117 = cljs.core.async.close_BANG_.call(null,out);var state_49119__$1 = (function (){var statearr_49125 = state_49119;(statearr_49125[8] = inst_49116);
return statearr_49125;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49119__$1,inst_49117);
} else
{if((state_val_49120 === 4))
{var state_49119__$1 = state_49119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49119__$1,7,ch);
} else
{if((state_val_49120 === 5))
{var state_49119__$1 = state_49119;var statearr_49126_49146 = state_49119__$1;(statearr_49126_49146[2] = null);
(statearr_49126_49146[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 6))
{var inst_49114 = (state_49119[2]);var state_49119__$1 = state_49119;var statearr_49127_49147 = state_49119__$1;(statearr_49127_49147[2] = inst_49114);
(statearr_49127_49147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 7))
{var inst_49101 = (state_49119[9]);var inst_49101__$1 = (state_49119[2]);var inst_49102 = (inst_49101__$1 == null);var inst_49103 = cljs.core.not.call(null,inst_49102);var state_49119__$1 = (function (){var statearr_49128 = state_49119;(statearr_49128[9] = inst_49101__$1);
return statearr_49128;
})();if(inst_49103)
{var statearr_49129_49148 = state_49119__$1;(statearr_49129_49148[1] = 8);
} else
{var statearr_49130_49149 = state_49119__$1;(statearr_49130_49149[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 8))
{var inst_49101 = (state_49119[9]);var state_49119__$1 = state_49119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49119__$1,11,out,inst_49101);
} else
{if((state_val_49120 === 9))
{var state_49119__$1 = state_49119;var statearr_49131_49150 = state_49119__$1;(statearr_49131_49150[2] = null);
(statearr_49131_49150[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 10))
{var inst_49111 = (state_49119[2]);var state_49119__$1 = state_49119;var statearr_49132_49151 = state_49119__$1;(statearr_49132_49151[2] = inst_49111);
(statearr_49132_49151[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49120 === 11))
{var inst_49096 = (state_49119[7]);var inst_49106 = (state_49119[2]);var inst_49107 = (inst_49096 + 1);var inst_49096__$1 = inst_49107;var state_49119__$1 = (function (){var statearr_49133 = state_49119;(statearr_49133[10] = inst_49106);
(statearr_49133[7] = inst_49096__$1);
return statearr_49133;
})();var statearr_49134_49152 = state_49119__$1;(statearr_49134_49152[2] = null);
(statearr_49134_49152[1] = 2);
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
var state_machine__12403__auto____0 = (function (){var statearr_49138 = (new Array(11));(statearr_49138[0] = state_machine__12403__auto__);
(statearr_49138[1] = 1);
return statearr_49138;
});
var state_machine__12403__auto____1 = (function (state_49119){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_49119);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e49139){if((e49139 instanceof Object))
{var ex__12406__auto__ = e49139;var statearr_49140_49153 = state_49119;(statearr_49140_49153[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49154 = state_49119;
state_49119 = G__49154;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_49119){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_49119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_49141 = f__12478__auto__.call(null);(statearr_49141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___49142);
return statearr_49141;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___49251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_49226){var state_val_49227 = (state_49226[1]);if((state_val_49227 === 1))
{var inst_49203 = null;var state_49226__$1 = (function (){var statearr_49228 = state_49226;(statearr_49228[7] = inst_49203);
return statearr_49228;
})();var statearr_49229_49252 = state_49226__$1;(statearr_49229_49252[2] = null);
(statearr_49229_49252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 2))
{var state_49226__$1 = state_49226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49226__$1,4,ch);
} else
{if((state_val_49227 === 3))
{var inst_49223 = (state_49226[2]);var inst_49224 = cljs.core.async.close_BANG_.call(null,out);var state_49226__$1 = (function (){var statearr_49230 = state_49226;(statearr_49230[8] = inst_49223);
return statearr_49230;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49226__$1,inst_49224);
} else
{if((state_val_49227 === 4))
{var inst_49206 = (state_49226[9]);var inst_49206__$1 = (state_49226[2]);var inst_49207 = (inst_49206__$1 == null);var inst_49208 = cljs.core.not.call(null,inst_49207);var state_49226__$1 = (function (){var statearr_49231 = state_49226;(statearr_49231[9] = inst_49206__$1);
return statearr_49231;
})();if(inst_49208)
{var statearr_49232_49253 = state_49226__$1;(statearr_49232_49253[1] = 5);
} else
{var statearr_49233_49254 = state_49226__$1;(statearr_49233_49254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 5))
{var inst_49206 = (state_49226[9]);var inst_49203 = (state_49226[7]);var inst_49210 = cljs.core._EQ_.call(null,inst_49206,inst_49203);var state_49226__$1 = state_49226;if(inst_49210)
{var statearr_49234_49255 = state_49226__$1;(statearr_49234_49255[1] = 8);
} else
{var statearr_49235_49256 = state_49226__$1;(statearr_49235_49256[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 6))
{var state_49226__$1 = state_49226;var statearr_49237_49257 = state_49226__$1;(statearr_49237_49257[2] = null);
(statearr_49237_49257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 7))
{var inst_49221 = (state_49226[2]);var state_49226__$1 = state_49226;var statearr_49238_49258 = state_49226__$1;(statearr_49238_49258[2] = inst_49221);
(statearr_49238_49258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 8))
{var inst_49203 = (state_49226[7]);var tmp49236 = inst_49203;var inst_49203__$1 = tmp49236;var state_49226__$1 = (function (){var statearr_49239 = state_49226;(statearr_49239[7] = inst_49203__$1);
return statearr_49239;
})();var statearr_49240_49259 = state_49226__$1;(statearr_49240_49259[2] = null);
(statearr_49240_49259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 9))
{var inst_49206 = (state_49226[9]);var state_49226__$1 = state_49226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49226__$1,11,out,inst_49206);
} else
{if((state_val_49227 === 10))
{var inst_49218 = (state_49226[2]);var state_49226__$1 = state_49226;var statearr_49241_49260 = state_49226__$1;(statearr_49241_49260[2] = inst_49218);
(statearr_49241_49260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49227 === 11))
{var inst_49206 = (state_49226[9]);var inst_49215 = (state_49226[2]);var inst_49203 = inst_49206;var state_49226__$1 = (function (){var statearr_49242 = state_49226;(statearr_49242[10] = inst_49215);
(statearr_49242[7] = inst_49203);
return statearr_49242;
})();var statearr_49243_49261 = state_49226__$1;(statearr_49243_49261[2] = null);
(statearr_49243_49261[1] = 2);
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
var state_machine__12403__auto____0 = (function (){var statearr_49247 = (new Array(11));(statearr_49247[0] = state_machine__12403__auto__);
(statearr_49247[1] = 1);
return statearr_49247;
});
var state_machine__12403__auto____1 = (function (state_49226){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_49226);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e49248){if((e49248 instanceof Object))
{var ex__12406__auto__ = e49248;var statearr_49249_49262 = state_49226;(statearr_49249_49262[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49263 = state_49226;
state_49226 = G__49263;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_49226){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_49226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_49250 = f__12478__auto__.call(null);(statearr_49250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___49251);
return statearr_49250;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___49398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_49368){var state_val_49369 = (state_49368[1]);if((state_val_49369 === 1))
{var inst_49331 = (new Array(n));var inst_49332 = inst_49331;var inst_49333 = 0;var state_49368__$1 = (function (){var statearr_49370 = state_49368;(statearr_49370[7] = inst_49332);
(statearr_49370[8] = inst_49333);
return statearr_49370;
})();var statearr_49371_49399 = state_49368__$1;(statearr_49371_49399[2] = null);
(statearr_49371_49399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 2))
{var state_49368__$1 = state_49368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49368__$1,4,ch);
} else
{if((state_val_49369 === 3))
{var inst_49366 = (state_49368[2]);var state_49368__$1 = state_49368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49368__$1,inst_49366);
} else
{if((state_val_49369 === 4))
{var inst_49336 = (state_49368[9]);var inst_49336__$1 = (state_49368[2]);var inst_49337 = (inst_49336__$1 == null);var inst_49338 = cljs.core.not.call(null,inst_49337);var state_49368__$1 = (function (){var statearr_49372 = state_49368;(statearr_49372[9] = inst_49336__$1);
return statearr_49372;
})();if(inst_49338)
{var statearr_49373_49400 = state_49368__$1;(statearr_49373_49400[1] = 5);
} else
{var statearr_49374_49401 = state_49368__$1;(statearr_49374_49401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 5))
{var inst_49332 = (state_49368[7]);var inst_49333 = (state_49368[8]);var inst_49341 = (state_49368[10]);var inst_49336 = (state_49368[9]);var inst_49340 = (inst_49332[inst_49333] = inst_49336);var inst_49341__$1 = (inst_49333 + 1);var inst_49342 = (inst_49341__$1 < n);var state_49368__$1 = (function (){var statearr_49375 = state_49368;(statearr_49375[11] = inst_49340);
(statearr_49375[10] = inst_49341__$1);
return statearr_49375;
})();if(cljs.core.truth_(inst_49342))
{var statearr_49376_49402 = state_49368__$1;(statearr_49376_49402[1] = 8);
} else
{var statearr_49377_49403 = state_49368__$1;(statearr_49377_49403[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 6))
{var inst_49333 = (state_49368[8]);var inst_49354 = (inst_49333 > 0);var state_49368__$1 = state_49368;if(cljs.core.truth_(inst_49354))
{var statearr_49379_49404 = state_49368__$1;(statearr_49379_49404[1] = 12);
} else
{var statearr_49380_49405 = state_49368__$1;(statearr_49380_49405[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 7))
{var inst_49364 = (state_49368[2]);var state_49368__$1 = state_49368;var statearr_49381_49406 = state_49368__$1;(statearr_49381_49406[2] = inst_49364);
(statearr_49381_49406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 8))
{var inst_49332 = (state_49368[7]);var inst_49341 = (state_49368[10]);var tmp49378 = inst_49332;var inst_49332__$1 = tmp49378;var inst_49333 = inst_49341;var state_49368__$1 = (function (){var statearr_49382 = state_49368;(statearr_49382[7] = inst_49332__$1);
(statearr_49382[8] = inst_49333);
return statearr_49382;
})();var statearr_49383_49407 = state_49368__$1;(statearr_49383_49407[2] = null);
(statearr_49383_49407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 9))
{var inst_49332 = (state_49368[7]);var inst_49346 = cljs.core.vec.call(null,inst_49332);var state_49368__$1 = state_49368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49368__$1,11,out,inst_49346);
} else
{if((state_val_49369 === 10))
{var inst_49352 = (state_49368[2]);var state_49368__$1 = state_49368;var statearr_49384_49408 = state_49368__$1;(statearr_49384_49408[2] = inst_49352);
(statearr_49384_49408[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 11))
{var inst_49348 = (state_49368[2]);var inst_49349 = (new Array(n));var inst_49332 = inst_49349;var inst_49333 = 0;var state_49368__$1 = (function (){var statearr_49385 = state_49368;(statearr_49385[7] = inst_49332);
(statearr_49385[8] = inst_49333);
(statearr_49385[12] = inst_49348);
return statearr_49385;
})();var statearr_49386_49409 = state_49368__$1;(statearr_49386_49409[2] = null);
(statearr_49386_49409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 12))
{var inst_49332 = (state_49368[7]);var inst_49356 = cljs.core.vec.call(null,inst_49332);var state_49368__$1 = state_49368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49368__$1,15,out,inst_49356);
} else
{if((state_val_49369 === 13))
{var state_49368__$1 = state_49368;var statearr_49387_49410 = state_49368__$1;(statearr_49387_49410[2] = null);
(statearr_49387_49410[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 14))
{var inst_49361 = (state_49368[2]);var inst_49362 = cljs.core.async.close_BANG_.call(null,out);var state_49368__$1 = (function (){var statearr_49388 = state_49368;(statearr_49388[13] = inst_49361);
return statearr_49388;
})();var statearr_49389_49411 = state_49368__$1;(statearr_49389_49411[2] = inst_49362);
(statearr_49389_49411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49369 === 15))
{var inst_49358 = (state_49368[2]);var state_49368__$1 = state_49368;var statearr_49390_49412 = state_49368__$1;(statearr_49390_49412[2] = inst_49358);
(statearr_49390_49412[1] = 14);
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
var state_machine__12403__auto____0 = (function (){var statearr_49394 = (new Array(14));(statearr_49394[0] = state_machine__12403__auto__);
(statearr_49394[1] = 1);
return statearr_49394;
});
var state_machine__12403__auto____1 = (function (state_49368){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_49368);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e49395){if((e49395 instanceof Object))
{var ex__12406__auto__ = e49395;var statearr_49396_49413 = state_49368;(statearr_49396_49413[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49414 = state_49368;
state_49368 = G__49414;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_49368){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_49368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_49397 = f__12478__auto__.call(null);(statearr_49397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___49398);
return statearr_49397;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12477__auto___49557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12478__auto__ = (function (){var switch__12402__auto__ = (function (state_49527){var state_val_49528 = (state_49527[1]);if((state_val_49528 === 1))
{var inst_49486 = (new Array(0));var inst_49487 = inst_49486;var inst_49488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_49527__$1 = (function (){var statearr_49529 = state_49527;(statearr_49529[7] = inst_49488);
(statearr_49529[8] = inst_49487);
return statearr_49529;
})();var statearr_49530_49558 = state_49527__$1;(statearr_49530_49558[2] = null);
(statearr_49530_49558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 2))
{var state_49527__$1 = state_49527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49527__$1,4,ch);
} else
{if((state_val_49528 === 3))
{var inst_49525 = (state_49527[2]);var state_49527__$1 = state_49527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49527__$1,inst_49525);
} else
{if((state_val_49528 === 4))
{var inst_49491 = (state_49527[9]);var inst_49491__$1 = (state_49527[2]);var inst_49492 = (inst_49491__$1 == null);var inst_49493 = cljs.core.not.call(null,inst_49492);var state_49527__$1 = (function (){var statearr_49531 = state_49527;(statearr_49531[9] = inst_49491__$1);
return statearr_49531;
})();if(inst_49493)
{var statearr_49532_49559 = state_49527__$1;(statearr_49532_49559[1] = 5);
} else
{var statearr_49533_49560 = state_49527__$1;(statearr_49533_49560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 5))
{var inst_49495 = (state_49527[10]);var inst_49488 = (state_49527[7]);var inst_49491 = (state_49527[9]);var inst_49495__$1 = f.call(null,inst_49491);var inst_49496 = cljs.core._EQ_.call(null,inst_49495__$1,inst_49488);var inst_49497 = cljs.core.keyword_identical_QMARK_.call(null,inst_49488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_49498 = (inst_49496) || (inst_49497);var state_49527__$1 = (function (){var statearr_49534 = state_49527;(statearr_49534[10] = inst_49495__$1);
return statearr_49534;
})();if(cljs.core.truth_(inst_49498))
{var statearr_49535_49561 = state_49527__$1;(statearr_49535_49561[1] = 8);
} else
{var statearr_49536_49562 = state_49527__$1;(statearr_49536_49562[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 6))
{var inst_49487 = (state_49527[8]);var inst_49512 = inst_49487.length;var inst_49513 = (inst_49512 > 0);var state_49527__$1 = state_49527;if(cljs.core.truth_(inst_49513))
{var statearr_49538_49563 = state_49527__$1;(statearr_49538_49563[1] = 12);
} else
{var statearr_49539_49564 = state_49527__$1;(statearr_49539_49564[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 7))
{var inst_49523 = (state_49527[2]);var state_49527__$1 = state_49527;var statearr_49540_49565 = state_49527__$1;(statearr_49540_49565[2] = inst_49523);
(statearr_49540_49565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 8))
{var inst_49495 = (state_49527[10]);var inst_49491 = (state_49527[9]);var inst_49487 = (state_49527[8]);var inst_49500 = inst_49487.push(inst_49491);var tmp49537 = inst_49487;var inst_49487__$1 = tmp49537;var inst_49488 = inst_49495;var state_49527__$1 = (function (){var statearr_49541 = state_49527;(statearr_49541[11] = inst_49500);
(statearr_49541[7] = inst_49488);
(statearr_49541[8] = inst_49487__$1);
return statearr_49541;
})();var statearr_49542_49566 = state_49527__$1;(statearr_49542_49566[2] = null);
(statearr_49542_49566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 9))
{var inst_49487 = (state_49527[8]);var inst_49503 = cljs.core.vec.call(null,inst_49487);var state_49527__$1 = state_49527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49527__$1,11,out,inst_49503);
} else
{if((state_val_49528 === 10))
{var inst_49510 = (state_49527[2]);var state_49527__$1 = state_49527;var statearr_49543_49567 = state_49527__$1;(statearr_49543_49567[2] = inst_49510);
(statearr_49543_49567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 11))
{var inst_49495 = (state_49527[10]);var inst_49491 = (state_49527[9]);var inst_49505 = (state_49527[2]);var inst_49506 = (new Array(0));var inst_49507 = inst_49506.push(inst_49491);var inst_49487 = inst_49506;var inst_49488 = inst_49495;var state_49527__$1 = (function (){var statearr_49544 = state_49527;(statearr_49544[7] = inst_49488);
(statearr_49544[8] = inst_49487);
(statearr_49544[12] = inst_49505);
(statearr_49544[13] = inst_49507);
return statearr_49544;
})();var statearr_49545_49568 = state_49527__$1;(statearr_49545_49568[2] = null);
(statearr_49545_49568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 12))
{var inst_49487 = (state_49527[8]);var inst_49515 = cljs.core.vec.call(null,inst_49487);var state_49527__$1 = state_49527;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49527__$1,15,out,inst_49515);
} else
{if((state_val_49528 === 13))
{var state_49527__$1 = state_49527;var statearr_49546_49569 = state_49527__$1;(statearr_49546_49569[2] = null);
(statearr_49546_49569[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 14))
{var inst_49520 = (state_49527[2]);var inst_49521 = cljs.core.async.close_BANG_.call(null,out);var state_49527__$1 = (function (){var statearr_49547 = state_49527;(statearr_49547[14] = inst_49520);
return statearr_49547;
})();var statearr_49548_49570 = state_49527__$1;(statearr_49548_49570[2] = inst_49521);
(statearr_49548_49570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49528 === 15))
{var inst_49517 = (state_49527[2]);var state_49527__$1 = state_49527;var statearr_49549_49571 = state_49527__$1;(statearr_49549_49571[2] = inst_49517);
(statearr_49549_49571[1] = 14);
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
var state_machine__12403__auto____0 = (function (){var statearr_49553 = (new Array(15));(statearr_49553[0] = state_machine__12403__auto__);
(statearr_49553[1] = 1);
return statearr_49553;
});
var state_machine__12403__auto____1 = (function (state_49527){while(true){
var ret_value__12404__auto__ = (function (){try{while(true){
var result__12405__auto__ = switch__12402__auto__.call(null,state_49527);if(cljs.core.keyword_identical_QMARK_.call(null,result__12405__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12405__auto__;
}
break;
}
}catch (e49554){if((e49554 instanceof Object))
{var ex__12406__auto__ = e49554;var statearr_49555_49572 = state_49527;(statearr_49555_49572[5] = ex__12406__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49527);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12404__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49573 = state_49527;
state_49527 = G__49573;
continue;
}
} else
{return ret_value__12404__auto__;
}
break;
}
});
state_machine__12403__auto__ = function(state_49527){
switch(arguments.length){
case 0:
return state_machine__12403__auto____0.call(this);
case 1:
return state_machine__12403__auto____1.call(this,state_49527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12403__auto____0;
state_machine__12403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12403__auto____1;
return state_machine__12403__auto__;
})()
;})(switch__12402__auto__))
})();var state__12479__auto__ = (function (){var statearr_49556 = f__12478__auto__.call(null);(statearr_49556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12477__auto___49557);
return statearr_49556;
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
