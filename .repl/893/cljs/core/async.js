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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t117061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117061 = (function (f,fn_handler,meta117062){
this.f = f;
this.fn_handler = fn_handler;
this.meta117062 = meta117062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117061.cljs$lang$type = true;
cljs.core.async.t117061.cljs$lang$ctorStr = "cljs.core.async/t117061";
cljs.core.async.t117061.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117061");
});
cljs.core.async.t117061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t117061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t117061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t117061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117063){var self__ = this;
var _117063__$1 = this;return self__.meta117062;
});
cljs.core.async.t117061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117063,meta117062__$1){var self__ = this;
var _117063__$1 = this;return (new cljs.core.async.t117061(self__.f,self__.fn_handler,meta117062__$1));
});
cljs.core.async.__GT_t117061 = (function __GT_t117061(f__$1,fn_handler__$1,meta117062){return (new cljs.core.async.t117061(f__$1,fn_handler__$1,meta117062));
});
}
return (new cljs.core.async.t117061(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__117065 = buff;if(G__117065)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__117065.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__117065.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__117065);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__117065);
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
{var val_117066 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_117066);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_117066);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__6277__auto__ = ret;if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__6277__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___117067 = n;var x_117068 = 0;while(true){
if((x_117068 < n__7112__auto___117067))
{(a[x_117068] = 0);
{
var G__117069 = (x_117068 + 1);
x_117068 = G__117069;
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
var G__117070 = (i + 1);
i = G__117070;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t117074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117074 = (function (flag,alt_flag,meta117075){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta117075 = meta117075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117074.cljs$lang$type = true;
cljs.core.async.t117074.cljs$lang$ctorStr = "cljs.core.async/t117074";
cljs.core.async.t117074.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117074");
});
cljs.core.async.t117074.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t117074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t117074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t117074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117076){var self__ = this;
var _117076__$1 = this;return self__.meta117075;
});
cljs.core.async.t117074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117076,meta117075__$1){var self__ = this;
var _117076__$1 = this;return (new cljs.core.async.t117074(self__.flag,self__.alt_flag,meta117075__$1));
});
cljs.core.async.__GT_t117074 = (function __GT_t117074(flag__$1,alt_flag__$1,meta117075){return (new cljs.core.async.t117074(flag__$1,alt_flag__$1,meta117075));
});
}
return (new cljs.core.async.t117074(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t117080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117080 = (function (cb,flag,alt_handler,meta117081){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta117081 = meta117081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117080.cljs$lang$type = true;
cljs.core.async.t117080.cljs$lang$ctorStr = "cljs.core.async/t117080";
cljs.core.async.t117080.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117080");
});
cljs.core.async.t117080.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t117080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t117080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t117080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117082){var self__ = this;
var _117082__$1 = this;return self__.meta117081;
});
cljs.core.async.t117080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117082,meta117081__$1){var self__ = this;
var _117082__$1 = this;return (new cljs.core.async.t117080(self__.cb,self__.flag,self__.alt_handler,meta117081__$1));
});
cljs.core.async.__GT_t117080 = (function __GT_t117080(cb__$1,flag__$1,alt_handler__$1,meta117081){return (new cljs.core.async.t117080(cb__$1,flag__$1,alt_handler__$1,meta117081));
});
}
return (new cljs.core.async.t117080(cb,flag,alt_handler,null));
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
return (function (p1__117083_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__117083_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6289__auto__ = wport;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__117084 = (i + 1);
i = G__117084;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__6289__auto__ = ret;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__6277__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__6277__auto__;
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
var alts_BANG___delegate = function (ports,p__117085){var map__117087 = p__117085;var map__117087__$1 = ((cljs.core.seq_QMARK_.call(null,map__117087))?cljs.core.apply.call(null,cljs.core.hash_map,map__117087):map__117087);var opts = map__117087__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__117085 = null;if (arguments.length > 1) {
  p__117085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__117085);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__117088){
var ports = cljs.core.first(arglist__117088);
var p__117085 = cljs.core.rest(arglist__117088);
return alts_BANG___delegate(ports,p__117085);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t117096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117096 = (function (ch,f,map_LT_,meta117097){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta117097 = meta117097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117096.cljs$lang$type = true;
cljs.core.async.t117096.cljs$lang$ctorStr = "cljs.core.async/t117096";
cljs.core.async.t117096.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117096");
});
cljs.core.async.t117096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t117096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t117096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t117096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t117099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117099 = (function (fn1,_,meta117097,ch,f,map_LT_,meta117100){
this.fn1 = fn1;
this._ = _;
this.meta117097 = meta117097;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta117100 = meta117100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117099.cljs$lang$type = true;
cljs.core.async.t117099.cljs$lang$ctorStr = "cljs.core.async/t117099";
cljs.core.async.t117099.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117099");
});
cljs.core.async.t117099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t117099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t117099.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t117099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__117089_SHARP_){return f1.call(null,(((p1__117089_SHARP_ == null))?null:self__.f.call(null,p1__117089_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t117099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117101){var self__ = this;
var _117101__$1 = this;return self__.meta117100;
});
cljs.core.async.t117099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117101,meta117100__$1){var self__ = this;
var _117101__$1 = this;return (new cljs.core.async.t117099(self__.fn1,self__._,self__.meta117097,self__.ch,self__.f,self__.map_LT_,meta117100__$1));
});
cljs.core.async.__GT_t117099 = (function __GT_t117099(fn1__$1,___$2,meta117097__$1,ch__$2,f__$2,map_LT___$2,meta117100){return (new cljs.core.async.t117099(fn1__$1,___$2,meta117097__$1,ch__$2,f__$2,map_LT___$2,meta117100));
});
}
return (new cljs.core.async.t117099(fn1,___$1,self__.meta117097,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__6277__auto__ = ret;if(cljs.core.truth_(and__6277__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__6277__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t117096.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t117096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t117096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117098){var self__ = this;
var _117098__$1 = this;return self__.meta117097;
});
cljs.core.async.t117096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117098,meta117097__$1){var self__ = this;
var _117098__$1 = this;return (new cljs.core.async.t117096(self__.ch,self__.f,self__.map_LT_,meta117097__$1));
});
cljs.core.async.__GT_t117096 = (function __GT_t117096(ch__$1,f__$1,map_LT___$1,meta117097){return (new cljs.core.async.t117096(ch__$1,f__$1,map_LT___$1,meta117097));
});
}
return (new cljs.core.async.t117096(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t117105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117105 = (function (ch,f,map_GT_,meta117106){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta117106 = meta117106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117105.cljs$lang$type = true;
cljs.core.async.t117105.cljs$lang$ctorStr = "cljs.core.async/t117105";
cljs.core.async.t117105.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117105");
});
cljs.core.async.t117105.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t117105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t117105.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t117105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t117105.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t117105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t117105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117107){var self__ = this;
var _117107__$1 = this;return self__.meta117106;
});
cljs.core.async.t117105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117107,meta117106__$1){var self__ = this;
var _117107__$1 = this;return (new cljs.core.async.t117105(self__.ch,self__.f,self__.map_GT_,meta117106__$1));
});
cljs.core.async.__GT_t117105 = (function __GT_t117105(ch__$1,f__$1,map_GT___$1,meta117106){return (new cljs.core.async.t117105(ch__$1,f__$1,map_GT___$1,meta117106));
});
}
return (new cljs.core.async.t117105(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t117111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117111 = (function (ch,p,filter_GT_,meta117112){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta117112 = meta117112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117111.cljs$lang$type = true;
cljs.core.async.t117111.cljs$lang$ctorStr = "cljs.core.async/t117111";
cljs.core.async.t117111.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117111");
});
cljs.core.async.t117111.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t117111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t117111.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t117111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t117111.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t117111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t117111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_117113){var self__ = this;
var _117113__$1 = this;return self__.meta117112;
});
cljs.core.async.t117111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_117113,meta117112__$1){var self__ = this;
var _117113__$1 = this;return (new cljs.core.async.t117111(self__.ch,self__.p,self__.filter_GT_,meta117112__$1));
});
cljs.core.async.__GT_t117111 = (function __GT_t117111(ch__$1,p__$1,filter_GT___$1,meta117112){return (new cljs.core.async.t117111(ch__$1,p__$1,filter_GT___$1,meta117112));
});
}
return (new cljs.core.async.t117111(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___117196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_117175){var state_val_117176 = (state_117175[1]);if((state_val_117176 === 1))
{var state_117175__$1 = state_117175;var statearr_117177_117197 = state_117175__$1;(statearr_117177_117197[2] = null);
(statearr_117177_117197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 2))
{var state_117175__$1 = state_117175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117175__$1,4,ch);
} else
{if((state_val_117176 === 3))
{var inst_117173 = (state_117175[2]);var state_117175__$1 = state_117175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117175__$1,inst_117173);
} else
{if((state_val_117176 === 4))
{var inst_117157 = (state_117175[7]);var inst_117157__$1 = (state_117175[2]);var inst_117158 = (inst_117157__$1 == null);var state_117175__$1 = (function (){var statearr_117178 = state_117175;(statearr_117178[7] = inst_117157__$1);
return statearr_117178;
})();if(cljs.core.truth_(inst_117158))
{var statearr_117179_117198 = state_117175__$1;(statearr_117179_117198[1] = 5);
} else
{var statearr_117180_117199 = state_117175__$1;(statearr_117180_117199[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 5))
{var inst_117160 = cljs.core.async.close_BANG_.call(null,out);var state_117175__$1 = state_117175;var statearr_117181_117200 = state_117175__$1;(statearr_117181_117200[2] = inst_117160);
(statearr_117181_117200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 6))
{var inst_117157 = (state_117175[7]);var inst_117162 = p.call(null,inst_117157);var state_117175__$1 = state_117175;if(cljs.core.truth_(inst_117162))
{var statearr_117182_117201 = state_117175__$1;(statearr_117182_117201[1] = 8);
} else
{var statearr_117183_117202 = state_117175__$1;(statearr_117183_117202[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 7))
{var inst_117171 = (state_117175[2]);var state_117175__$1 = state_117175;var statearr_117184_117203 = state_117175__$1;(statearr_117184_117203[2] = inst_117171);
(statearr_117184_117203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 8))
{var inst_117157 = (state_117175[7]);var state_117175__$1 = state_117175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117175__$1,11,out,inst_117157);
} else
{if((state_val_117176 === 9))
{var state_117175__$1 = state_117175;var statearr_117185_117204 = state_117175__$1;(statearr_117185_117204[2] = null);
(statearr_117185_117204[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 10))
{var inst_117168 = (state_117175[2]);var state_117175__$1 = (function (){var statearr_117186 = state_117175;(statearr_117186[8] = inst_117168);
return statearr_117186;
})();var statearr_117187_117205 = state_117175__$1;(statearr_117187_117205[2] = null);
(statearr_117187_117205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117176 === 11))
{var inst_117165 = (state_117175[2]);var state_117175__$1 = state_117175;var statearr_117188_117206 = state_117175__$1;(statearr_117188_117206[2] = inst_117165);
(statearr_117188_117206[1] = 10);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_117192 = (new Array(9));(statearr_117192[0] = state_machine__13310__auto__);
(statearr_117192[1] = 1);
return statearr_117192;
});
var state_machine__13310__auto____1 = (function (state_117175){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_117175);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e117193){if((e117193 instanceof Object))
{var ex__13313__auto__ = e117193;var statearr_117194_117207 = state_117175;(statearr_117194_117207[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e117193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__117208 = state_117175;
state_117175 = G__117208;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_117175){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_117175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_117195 = f__13410__auto__.call(null);(statearr_117195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___117196);
return statearr_117195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_117360){var state_val_117361 = (state_117360[1]);if((state_val_117361 === 1))
{var state_117360__$1 = state_117360;var statearr_117362_117399 = state_117360__$1;(statearr_117362_117399[2] = null);
(statearr_117362_117399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 2))
{var state_117360__$1 = state_117360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117360__$1,4,in$);
} else
{if((state_val_117361 === 3))
{var inst_117358 = (state_117360[2]);var state_117360__$1 = state_117360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117360__$1,inst_117358);
} else
{if((state_val_117361 === 4))
{var inst_117306 = (state_117360[7]);var inst_117306__$1 = (state_117360[2]);var inst_117307 = (inst_117306__$1 == null);var state_117360__$1 = (function (){var statearr_117363 = state_117360;(statearr_117363[7] = inst_117306__$1);
return statearr_117363;
})();if(cljs.core.truth_(inst_117307))
{var statearr_117364_117400 = state_117360__$1;(statearr_117364_117400[1] = 5);
} else
{var statearr_117365_117401 = state_117360__$1;(statearr_117365_117401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 5))
{var inst_117309 = cljs.core.async.close_BANG_.call(null,out);var state_117360__$1 = state_117360;var statearr_117366_117402 = state_117360__$1;(statearr_117366_117402[2] = inst_117309);
(statearr_117366_117402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 6))
{var inst_117306 = (state_117360[7]);var inst_117311 = f.call(null,inst_117306);var inst_117316 = cljs.core.seq.call(null,inst_117311);var inst_117317 = inst_117316;var inst_117318 = null;var inst_117319 = 0;var inst_117320 = 0;var state_117360__$1 = (function (){var statearr_117367 = state_117360;(statearr_117367[8] = inst_117318);
(statearr_117367[9] = inst_117319);
(statearr_117367[10] = inst_117317);
(statearr_117367[11] = inst_117320);
return statearr_117367;
})();var statearr_117368_117403 = state_117360__$1;(statearr_117368_117403[2] = null);
(statearr_117368_117403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 7))
{var inst_117356 = (state_117360[2]);var state_117360__$1 = state_117360;var statearr_117369_117404 = state_117360__$1;(statearr_117369_117404[2] = inst_117356);
(statearr_117369_117404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 8))
{var inst_117319 = (state_117360[9]);var inst_117320 = (state_117360[11]);var inst_117322 = (inst_117320 < inst_117319);var inst_117323 = inst_117322;var state_117360__$1 = state_117360;if(cljs.core.truth_(inst_117323))
{var statearr_117370_117405 = state_117360__$1;(statearr_117370_117405[1] = 10);
} else
{var statearr_117371_117406 = state_117360__$1;(statearr_117371_117406[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 9))
{var inst_117353 = (state_117360[2]);var state_117360__$1 = (function (){var statearr_117372 = state_117360;(statearr_117372[12] = inst_117353);
return statearr_117372;
})();var statearr_117373_117407 = state_117360__$1;(statearr_117373_117407[2] = null);
(statearr_117373_117407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 10))
{var inst_117318 = (state_117360[8]);var inst_117320 = (state_117360[11]);var inst_117325 = cljs.core._nth.call(null,inst_117318,inst_117320);var state_117360__$1 = state_117360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117360__$1,13,out,inst_117325);
} else
{if((state_val_117361 === 11))
{var inst_117331 = (state_117360[13]);var inst_117317 = (state_117360[10]);var inst_117331__$1 = cljs.core.seq.call(null,inst_117317);var state_117360__$1 = (function (){var statearr_117377 = state_117360;(statearr_117377[13] = inst_117331__$1);
return statearr_117377;
})();if(inst_117331__$1)
{var statearr_117378_117408 = state_117360__$1;(statearr_117378_117408[1] = 14);
} else
{var statearr_117379_117409 = state_117360__$1;(statearr_117379_117409[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 12))
{var inst_117351 = (state_117360[2]);var state_117360__$1 = state_117360;var statearr_117380_117410 = state_117360__$1;(statearr_117380_117410[2] = inst_117351);
(statearr_117380_117410[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 13))
{var inst_117318 = (state_117360[8]);var inst_117319 = (state_117360[9]);var inst_117317 = (state_117360[10]);var inst_117320 = (state_117360[11]);var inst_117327 = (state_117360[2]);var inst_117328 = (inst_117320 + 1);var tmp117374 = inst_117318;var tmp117375 = inst_117319;var tmp117376 = inst_117317;var inst_117317__$1 = tmp117376;var inst_117318__$1 = tmp117374;var inst_117319__$1 = tmp117375;var inst_117320__$1 = inst_117328;var state_117360__$1 = (function (){var statearr_117381 = state_117360;(statearr_117381[8] = inst_117318__$1);
(statearr_117381[14] = inst_117327);
(statearr_117381[9] = inst_117319__$1);
(statearr_117381[10] = inst_117317__$1);
(statearr_117381[11] = inst_117320__$1);
return statearr_117381;
})();var statearr_117382_117411 = state_117360__$1;(statearr_117382_117411[2] = null);
(statearr_117382_117411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 14))
{var inst_117331 = (state_117360[13]);var inst_117333 = cljs.core.chunked_seq_QMARK_.call(null,inst_117331);var state_117360__$1 = state_117360;if(inst_117333)
{var statearr_117383_117412 = state_117360__$1;(statearr_117383_117412[1] = 17);
} else
{var statearr_117384_117413 = state_117360__$1;(statearr_117384_117413[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 15))
{var state_117360__$1 = state_117360;var statearr_117385_117414 = state_117360__$1;(statearr_117385_117414[2] = null);
(statearr_117385_117414[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 16))
{var inst_117349 = (state_117360[2]);var state_117360__$1 = state_117360;var statearr_117386_117415 = state_117360__$1;(statearr_117386_117415[2] = inst_117349);
(statearr_117386_117415[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 17))
{var inst_117331 = (state_117360[13]);var inst_117335 = cljs.core.chunk_first.call(null,inst_117331);var inst_117336 = cljs.core.chunk_rest.call(null,inst_117331);var inst_117337 = cljs.core.count.call(null,inst_117335);var inst_117317 = inst_117336;var inst_117318 = inst_117335;var inst_117319 = inst_117337;var inst_117320 = 0;var state_117360__$1 = (function (){var statearr_117387 = state_117360;(statearr_117387[8] = inst_117318);
(statearr_117387[9] = inst_117319);
(statearr_117387[10] = inst_117317);
(statearr_117387[11] = inst_117320);
return statearr_117387;
})();var statearr_117388_117416 = state_117360__$1;(statearr_117388_117416[2] = null);
(statearr_117388_117416[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 18))
{var inst_117331 = (state_117360[13]);var inst_117340 = cljs.core.first.call(null,inst_117331);var state_117360__$1 = state_117360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117360__$1,20,out,inst_117340);
} else
{if((state_val_117361 === 19))
{var inst_117346 = (state_117360[2]);var state_117360__$1 = state_117360;var statearr_117389_117417 = state_117360__$1;(statearr_117389_117417[2] = inst_117346);
(statearr_117389_117417[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117361 === 20))
{var inst_117331 = (state_117360[13]);var inst_117342 = (state_117360[2]);var inst_117343 = cljs.core.next.call(null,inst_117331);var inst_117317 = inst_117343;var inst_117318 = null;var inst_117319 = 0;var inst_117320 = 0;var state_117360__$1 = (function (){var statearr_117390 = state_117360;(statearr_117390[15] = inst_117342);
(statearr_117390[8] = inst_117318);
(statearr_117390[9] = inst_117319);
(statearr_117390[10] = inst_117317);
(statearr_117390[11] = inst_117320);
return statearr_117390;
})();var statearr_117391_117418 = state_117360__$1;(statearr_117391_117418[2] = null);
(statearr_117391_117418[1] = 8);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_117395 = (new Array(16));(statearr_117395[0] = state_machine__13310__auto__);
(statearr_117395[1] = 1);
return statearr_117395;
});
var state_machine__13310__auto____1 = (function (state_117360){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_117360);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e117396){if((e117396 instanceof Object))
{var ex__13313__auto__ = e117396;var statearr_117397_117419 = state_117360;(statearr_117397_117419[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e117396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__117420 = state_117360;
state_117360 = G__117420;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_117360){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_117360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_117398 = f__13410__auto__.call(null);(statearr_117398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_117398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___117501 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_117480){var state_val_117481 = (state_117480[1]);if((state_val_117481 === 1))
{var state_117480__$1 = state_117480;var statearr_117482_117502 = state_117480__$1;(statearr_117482_117502[2] = null);
(statearr_117482_117502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 2))
{var state_117480__$1 = state_117480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117480__$1,4,from);
} else
{if((state_val_117481 === 3))
{var inst_117478 = (state_117480[2]);var state_117480__$1 = state_117480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117480__$1,inst_117478);
} else
{if((state_val_117481 === 4))
{var inst_117463 = (state_117480[7]);var inst_117463__$1 = (state_117480[2]);var inst_117464 = (inst_117463__$1 == null);var state_117480__$1 = (function (){var statearr_117483 = state_117480;(statearr_117483[7] = inst_117463__$1);
return statearr_117483;
})();if(cljs.core.truth_(inst_117464))
{var statearr_117484_117503 = state_117480__$1;(statearr_117484_117503[1] = 5);
} else
{var statearr_117485_117504 = state_117480__$1;(statearr_117485_117504[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 5))
{var state_117480__$1 = state_117480;if(cljs.core.truth_(close_QMARK_))
{var statearr_117486_117505 = state_117480__$1;(statearr_117486_117505[1] = 8);
} else
{var statearr_117487_117506 = state_117480__$1;(statearr_117487_117506[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 6))
{var inst_117463 = (state_117480[7]);var state_117480__$1 = state_117480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117480__$1,11,to,inst_117463);
} else
{if((state_val_117481 === 7))
{var inst_117476 = (state_117480[2]);var state_117480__$1 = state_117480;var statearr_117488_117507 = state_117480__$1;(statearr_117488_117507[2] = inst_117476);
(statearr_117488_117507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 8))
{var inst_117467 = cljs.core.async.close_BANG_.call(null,to);var state_117480__$1 = state_117480;var statearr_117489_117508 = state_117480__$1;(statearr_117489_117508[2] = inst_117467);
(statearr_117489_117508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 9))
{var state_117480__$1 = state_117480;var statearr_117490_117509 = state_117480__$1;(statearr_117490_117509[2] = null);
(statearr_117490_117509[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 10))
{var inst_117470 = (state_117480[2]);var state_117480__$1 = state_117480;var statearr_117491_117510 = state_117480__$1;(statearr_117491_117510[2] = inst_117470);
(statearr_117491_117510[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117481 === 11))
{var inst_117473 = (state_117480[2]);var state_117480__$1 = (function (){var statearr_117492 = state_117480;(statearr_117492[8] = inst_117473);
return statearr_117492;
})();var statearr_117493_117511 = state_117480__$1;(statearr_117493_117511[2] = null);
(statearr_117493_117511[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_117497 = (new Array(9));(statearr_117497[0] = state_machine__13310__auto__);
(statearr_117497[1] = 1);
return statearr_117497;
});
var state_machine__13310__auto____1 = (function (state_117480){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_117480);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e117498){if((e117498 instanceof Object))
{var ex__13313__auto__ = e117498;var statearr_117499_117512 = state_117480;(statearr_117499_117512[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e117498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__117513 = state_117480;
state_117480 = G__117513;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_117480){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_117480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_117500 = f__13410__auto__.call(null);(statearr_117500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___117501);
return statearr_117500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___117600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_117578){var state_val_117579 = (state_117578[1]);if((state_val_117579 === 1))
{var state_117578__$1 = state_117578;var statearr_117580_117601 = state_117578__$1;(statearr_117580_117601[2] = null);
(statearr_117580_117601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 2))
{var state_117578__$1 = state_117578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117578__$1,4,ch);
} else
{if((state_val_117579 === 3))
{var inst_117576 = (state_117578[2]);var state_117578__$1 = state_117578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117578__$1,inst_117576);
} else
{if((state_val_117579 === 4))
{var inst_117559 = (state_117578[7]);var inst_117559__$1 = (state_117578[2]);var inst_117560 = (inst_117559__$1 == null);var state_117578__$1 = (function (){var statearr_117581 = state_117578;(statearr_117581[7] = inst_117559__$1);
return statearr_117581;
})();if(cljs.core.truth_(inst_117560))
{var statearr_117582_117602 = state_117578__$1;(statearr_117582_117602[1] = 5);
} else
{var statearr_117583_117603 = state_117578__$1;(statearr_117583_117603[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 5))
{var inst_117562 = cljs.core.async.close_BANG_.call(null,tc);var inst_117563 = cljs.core.async.close_BANG_.call(null,fc);var state_117578__$1 = (function (){var statearr_117584 = state_117578;(statearr_117584[8] = inst_117562);
return statearr_117584;
})();var statearr_117585_117604 = state_117578__$1;(statearr_117585_117604[2] = inst_117563);
(statearr_117585_117604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 6))
{var inst_117559 = (state_117578[7]);var inst_117565 = p.call(null,inst_117559);var state_117578__$1 = state_117578;if(cljs.core.truth_(inst_117565))
{var statearr_117586_117605 = state_117578__$1;(statearr_117586_117605[1] = 9);
} else
{var statearr_117587_117606 = state_117578__$1;(statearr_117587_117606[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 7))
{var inst_117574 = (state_117578[2]);var state_117578__$1 = state_117578;var statearr_117588_117607 = state_117578__$1;(statearr_117588_117607[2] = inst_117574);
(statearr_117588_117607[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 8))
{var inst_117571 = (state_117578[2]);var state_117578__$1 = (function (){var statearr_117589 = state_117578;(statearr_117589[9] = inst_117571);
return statearr_117589;
})();var statearr_117590_117608 = state_117578__$1;(statearr_117590_117608[2] = null);
(statearr_117590_117608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 9))
{var state_117578__$1 = state_117578;var statearr_117591_117609 = state_117578__$1;(statearr_117591_117609[2] = tc);
(statearr_117591_117609[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 10))
{var state_117578__$1 = state_117578;var statearr_117592_117610 = state_117578__$1;(statearr_117592_117610[2] = fc);
(statearr_117592_117610[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117579 === 11))
{var inst_117559 = (state_117578[7]);var inst_117569 = (state_117578[2]);var state_117578__$1 = state_117578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117578__$1,8,inst_117569,inst_117559);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_117596 = (new Array(10));(statearr_117596[0] = state_machine__13310__auto__);
(statearr_117596[1] = 1);
return statearr_117596;
});
var state_machine__13310__auto____1 = (function (state_117578){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_117578);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e117597){if((e117597 instanceof Object))
{var ex__13313__auto__ = e117597;var statearr_117598_117611 = state_117578;(statearr_117598_117611[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e117597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__117612 = state_117578;
state_117578 = G__117612;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_117578){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_117578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_117599 = f__13410__auto__.call(null);(statearr_117599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___117600);
return statearr_117599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_117659){var state_val_117660 = (state_117659[1]);if((state_val_117660 === 7))
{var inst_117655 = (state_117659[2]);var state_117659__$1 = state_117659;var statearr_117661_117677 = state_117659__$1;(statearr_117661_117677[2] = inst_117655);
(statearr_117661_117677[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117660 === 6))
{var inst_117648 = (state_117659[7]);var inst_117645 = (state_117659[8]);var inst_117652 = f.call(null,inst_117645,inst_117648);var inst_117645__$1 = inst_117652;var state_117659__$1 = (function (){var statearr_117662 = state_117659;(statearr_117662[8] = inst_117645__$1);
return statearr_117662;
})();var statearr_117663_117678 = state_117659__$1;(statearr_117663_117678[2] = null);
(statearr_117663_117678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117660 === 5))
{var inst_117645 = (state_117659[8]);var state_117659__$1 = state_117659;var statearr_117664_117679 = state_117659__$1;(statearr_117664_117679[2] = inst_117645);
(statearr_117664_117679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117660 === 4))
{var inst_117648 = (state_117659[7]);var inst_117648__$1 = (state_117659[2]);var inst_117649 = (inst_117648__$1 == null);var state_117659__$1 = (function (){var statearr_117665 = state_117659;(statearr_117665[7] = inst_117648__$1);
return statearr_117665;
})();if(cljs.core.truth_(inst_117649))
{var statearr_117666_117680 = state_117659__$1;(statearr_117666_117680[1] = 5);
} else
{var statearr_117667_117681 = state_117659__$1;(statearr_117667_117681[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117660 === 3))
{var inst_117657 = (state_117659[2]);var state_117659__$1 = state_117659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117659__$1,inst_117657);
} else
{if((state_val_117660 === 2))
{var state_117659__$1 = state_117659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_117659__$1,4,ch);
} else
{if((state_val_117660 === 1))
{var inst_117645 = init;var state_117659__$1 = (function (){var statearr_117668 = state_117659;(statearr_117668[8] = inst_117645);
return statearr_117668;
})();var statearr_117669_117682 = state_117659__$1;(statearr_117669_117682[2] = null);
(statearr_117669_117682[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_117673 = (new Array(9));(statearr_117673[0] = state_machine__13310__auto__);
(statearr_117673[1] = 1);
return statearr_117673;
});
var state_machine__13310__auto____1 = (function (state_117659){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_117659);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e117674){if((e117674 instanceof Object))
{var ex__13313__auto__ = e117674;var statearr_117675_117683 = state_117659;(statearr_117675_117683[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e117674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__117684 = state_117659;
state_117659 = G__117684;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_117659){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_117659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_117676 = f__13410__auto__.call(null);(statearr_117676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_117676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_117746){var state_val_117747 = (state_117746[1]);if((state_val_117747 === 1))
{var inst_117726 = cljs.core.seq.call(null,coll);var inst_117727 = inst_117726;var state_117746__$1 = (function (){var statearr_117748 = state_117746;(statearr_117748[7] = inst_117727);
return statearr_117748;
})();var statearr_117749_117767 = state_117746__$1;(statearr_117749_117767[2] = null);
(statearr_117749_117767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 2))
{var inst_117727 = (state_117746[7]);var state_117746__$1 = state_117746;if(cljs.core.truth_(inst_117727))
{var statearr_117750_117768 = state_117746__$1;(statearr_117750_117768[1] = 4);
} else
{var statearr_117751_117769 = state_117746__$1;(statearr_117751_117769[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 3))
{var inst_117744 = (state_117746[2]);var state_117746__$1 = state_117746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_117746__$1,inst_117744);
} else
{if((state_val_117747 === 4))
{var inst_117727 = (state_117746[7]);var inst_117730 = cljs.core.first.call(null,inst_117727);var state_117746__$1 = state_117746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_117746__$1,7,ch,inst_117730);
} else
{if((state_val_117747 === 5))
{var state_117746__$1 = state_117746;if(cljs.core.truth_(close_QMARK_))
{var statearr_117752_117770 = state_117746__$1;(statearr_117752_117770[1] = 8);
} else
{var statearr_117753_117771 = state_117746__$1;(statearr_117753_117771[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 6))
{var inst_117742 = (state_117746[2]);var state_117746__$1 = state_117746;var statearr_117754_117772 = state_117746__$1;(statearr_117754_117772[2] = inst_117742);
(statearr_117754_117772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 7))
{var inst_117727 = (state_117746[7]);var inst_117732 = (state_117746[2]);var inst_117733 = cljs.core.next.call(null,inst_117727);var inst_117727__$1 = inst_117733;var state_117746__$1 = (function (){var statearr_117755 = state_117746;(statearr_117755[7] = inst_117727__$1);
(statearr_117755[8] = inst_117732);
return statearr_117755;
})();var statearr_117756_117773 = state_117746__$1;(statearr_117756_117773[2] = null);
(statearr_117756_117773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 8))
{var inst_117737 = cljs.core.async.close_BANG_.call(null,ch);var state_117746__$1 = state_117746;var statearr_117757_117774 = state_117746__$1;(statearr_117757_117774[2] = inst_117737);
(statearr_117757_117774[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 9))
{var state_117746__$1 = state_117746;var statearr_117758_117775 = state_117746__$1;(statearr_117758_117775[2] = null);
(statearr_117758_117775[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_117747 === 10))
{var inst_117740 = (state_117746[2]);var state_117746__$1 = state_117746;var statearr_117759_117776 = state_117746__$1;(statearr_117759_117776[2] = inst_117740);
(statearr_117759_117776[1] = 6);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_117763 = (new Array(9));(statearr_117763[0] = state_machine__13310__auto__);
(statearr_117763[1] = 1);
return statearr_117763;
});
var state_machine__13310__auto____1 = (function (state_117746){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_117746);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e117764){if((e117764 instanceof Object))
{var ex__13313__auto__ = e117764;var statearr_117765_117777 = state_117746;(statearr_117765_117777[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_117746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e117764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__117778 = state_117746;
state_117746 = G__117778;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_117746){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_117746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_117766 = f__13410__auto__.call(null);(statearr_117766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_117766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
cljs.core.async.Mux = (function (){var obj117780 = {};return obj117780;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__6277__auto__ = _;if(and__6277__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6892__auto__ = (((_ == null))?null:_);return (function (){var or__6289__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj117782 = {};return obj117782;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t117997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t117997 = (function (cs,ch,mult,meta117998){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta117998 = meta117998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t117997.cljs$lang$type = true;
cljs.core.async.t117997.cljs$lang$ctorStr = "cljs.core.async/t117997";
cljs.core.async.t117997.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t117997");
});})(cs))
;
cljs.core.async.t117997.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t117997.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t117997.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t117997.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t117997.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t117997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t117997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_117999){var self__ = this;
var _117999__$1 = this;return self__.meta117998;
});})(cs))
;
cljs.core.async.t117997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_117999,meta117998__$1){var self__ = this;
var _117999__$1 = this;return (new cljs.core.async.t117997(self__.cs,self__.ch,self__.mult,meta117998__$1));
});})(cs))
;
cljs.core.async.__GT_t117997 = ((function (cs){
return (function __GT_t117997(cs__$1,ch__$1,mult__$1,meta117998){return (new cljs.core.async.t117997(cs__$1,ch__$1,mult__$1,meta117998));
});})(cs))
;
}
return (new cljs.core.async.t117997(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___118211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_118129){var state_val_118130 = (state_118129[1]);if((state_val_118130 === 32))
{var inst_118078 = (state_118129[7]);var inst_118002 = (state_118129[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_118129,31,Object,null,30);var inst_118085 = cljs.core.async.put_BANG_.call(null,inst_118078,inst_118002,done);var state_118129__$1 = state_118129;var statearr_118131_118212 = state_118129__$1;(statearr_118131_118212[2] = inst_118085);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 1))
{var state_118129__$1 = state_118129;var statearr_118132_118213 = state_118129__$1;(statearr_118132_118213[2] = null);
(statearr_118132_118213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 33))
{var inst_118091 = (state_118129[9]);var inst_118093 = cljs.core.chunked_seq_QMARK_.call(null,inst_118091);var state_118129__$1 = state_118129;if(inst_118093)
{var statearr_118133_118214 = state_118129__$1;(statearr_118133_118214[1] = 36);
} else
{var statearr_118134_118215 = state_118129__$1;(statearr_118134_118215[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 2))
{var state_118129__$1 = state_118129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118129__$1,4,ch);
} else
{if((state_val_118130 === 34))
{var state_118129__$1 = state_118129;var statearr_118135_118216 = state_118129__$1;(statearr_118135_118216[2] = null);
(statearr_118135_118216[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 3))
{var inst_118127 = (state_118129[2]);var state_118129__$1 = state_118129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118129__$1,inst_118127);
} else
{if((state_val_118130 === 35))
{var inst_118116 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118136_118217 = state_118129__$1;(statearr_118136_118217[2] = inst_118116);
(statearr_118136_118217[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 4))
{var inst_118002 = (state_118129[8]);var inst_118002__$1 = (state_118129[2]);var inst_118003 = (inst_118002__$1 == null);var state_118129__$1 = (function (){var statearr_118137 = state_118129;(statearr_118137[8] = inst_118002__$1);
return statearr_118137;
})();if(cljs.core.truth_(inst_118003))
{var statearr_118138_118218 = state_118129__$1;(statearr_118138_118218[1] = 5);
} else
{var statearr_118139_118219 = state_118129__$1;(statearr_118139_118219[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 36))
{var inst_118091 = (state_118129[9]);var inst_118095 = cljs.core.chunk_first.call(null,inst_118091);var inst_118096 = cljs.core.chunk_rest.call(null,inst_118091);var inst_118097 = cljs.core.count.call(null,inst_118095);var inst_118070 = inst_118096;var inst_118071 = inst_118095;var inst_118072 = inst_118097;var inst_118073 = 0;var state_118129__$1 = (function (){var statearr_118140 = state_118129;(statearr_118140[10] = inst_118071);
(statearr_118140[11] = inst_118072);
(statearr_118140[12] = inst_118070);
(statearr_118140[13] = inst_118073);
return statearr_118140;
})();var statearr_118141_118220 = state_118129__$1;(statearr_118141_118220[2] = null);
(statearr_118141_118220[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 5))
{var inst_118009 = cljs.core.deref.call(null,cs);var inst_118010 = cljs.core.seq.call(null,inst_118009);var inst_118011 = inst_118010;var inst_118012 = null;var inst_118013 = 0;var inst_118014 = 0;var state_118129__$1 = (function (){var statearr_118142 = state_118129;(statearr_118142[14] = inst_118014);
(statearr_118142[15] = inst_118011);
(statearr_118142[16] = inst_118013);
(statearr_118142[17] = inst_118012);
return statearr_118142;
})();var statearr_118143_118221 = state_118129__$1;(statearr_118143_118221[2] = null);
(statearr_118143_118221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 37))
{var inst_118091 = (state_118129[9]);var inst_118100 = cljs.core.first.call(null,inst_118091);var state_118129__$1 = (function (){var statearr_118144 = state_118129;(statearr_118144[18] = inst_118100);
return statearr_118144;
})();var statearr_118145_118222 = state_118129__$1;(statearr_118145_118222[2] = null);
(statearr_118145_118222[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 6))
{var inst_118061 = cljs.core.deref.call(null,cs);var inst_118062 = cljs.core.keys.call(null,inst_118061);var inst_118063 = cljs.core.count.call(null,inst_118062);var inst_118064 = cljs.core.reset_BANG_.call(null,dctr,inst_118063);var inst_118069 = cljs.core.seq.call(null,inst_118062);var inst_118070 = inst_118069;var inst_118071 = null;var inst_118072 = 0;var inst_118073 = 0;var state_118129__$1 = (function (){var statearr_118146 = state_118129;(statearr_118146[10] = inst_118071);
(statearr_118146[11] = inst_118072);
(statearr_118146[12] = inst_118070);
(statearr_118146[13] = inst_118073);
(statearr_118146[19] = inst_118064);
return statearr_118146;
})();var statearr_118147_118223 = state_118129__$1;(statearr_118147_118223[2] = null);
(statearr_118147_118223[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 38))
{var inst_118113 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118148_118224 = state_118129__$1;(statearr_118148_118224[2] = inst_118113);
(statearr_118148_118224[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 7))
{var inst_118125 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118149_118225 = state_118129__$1;(statearr_118149_118225[2] = inst_118125);
(statearr_118149_118225[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 39))
{var inst_118091 = (state_118129[9]);var inst_118109 = (state_118129[2]);var inst_118110 = cljs.core.next.call(null,inst_118091);var inst_118070 = inst_118110;var inst_118071 = null;var inst_118072 = 0;var inst_118073 = 0;var state_118129__$1 = (function (){var statearr_118150 = state_118129;(statearr_118150[20] = inst_118109);
(statearr_118150[10] = inst_118071);
(statearr_118150[11] = inst_118072);
(statearr_118150[12] = inst_118070);
(statearr_118150[13] = inst_118073);
return statearr_118150;
})();var statearr_118151_118226 = state_118129__$1;(statearr_118151_118226[2] = null);
(statearr_118151_118226[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 8))
{var inst_118014 = (state_118129[14]);var inst_118013 = (state_118129[16]);var inst_118016 = (inst_118014 < inst_118013);var inst_118017 = inst_118016;var state_118129__$1 = state_118129;if(cljs.core.truth_(inst_118017))
{var statearr_118152_118227 = state_118129__$1;(statearr_118152_118227[1] = 10);
} else
{var statearr_118153_118228 = state_118129__$1;(statearr_118153_118228[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 40))
{var inst_118100 = (state_118129[18]);var inst_118101 = (state_118129[2]);var inst_118102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_118103 = cljs.core.async.untap_STAR_.call(null,m,inst_118100);var state_118129__$1 = (function (){var statearr_118154 = state_118129;(statearr_118154[21] = inst_118102);
(statearr_118154[22] = inst_118101);
return statearr_118154;
})();var statearr_118155_118229 = state_118129__$1;(statearr_118155_118229[2] = inst_118103);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 9))
{var inst_118059 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118156_118230 = state_118129__$1;(statearr_118156_118230[2] = inst_118059);
(statearr_118156_118230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 41))
{var inst_118100 = (state_118129[18]);var inst_118002 = (state_118129[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_118129,40,Object,null,39);var inst_118107 = cljs.core.async.put_BANG_.call(null,inst_118100,inst_118002,done);var state_118129__$1 = state_118129;var statearr_118157_118231 = state_118129__$1;(statearr_118157_118231[2] = inst_118107);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118129__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 10))
{var inst_118014 = (state_118129[14]);var inst_118012 = (state_118129[17]);var inst_118020 = cljs.core._nth.call(null,inst_118012,inst_118014);var inst_118021 = cljs.core.nth.call(null,inst_118020,0,null);var inst_118022 = cljs.core.nth.call(null,inst_118020,1,null);var state_118129__$1 = (function (){var statearr_118158 = state_118129;(statearr_118158[23] = inst_118021);
return statearr_118158;
})();if(cljs.core.truth_(inst_118022))
{var statearr_118159_118232 = state_118129__$1;(statearr_118159_118232[1] = 13);
} else
{var statearr_118160_118233 = state_118129__$1;(statearr_118160_118233[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 42))
{var inst_118122 = (state_118129[2]);var state_118129__$1 = (function (){var statearr_118161 = state_118129;(statearr_118161[24] = inst_118122);
return statearr_118161;
})();var statearr_118162_118234 = state_118129__$1;(statearr_118162_118234[2] = null);
(statearr_118162_118234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 11))
{var inst_118031 = (state_118129[25]);var inst_118011 = (state_118129[15]);var inst_118031__$1 = cljs.core.seq.call(null,inst_118011);var state_118129__$1 = (function (){var statearr_118163 = state_118129;(statearr_118163[25] = inst_118031__$1);
return statearr_118163;
})();if(inst_118031__$1)
{var statearr_118164_118235 = state_118129__$1;(statearr_118164_118235[1] = 16);
} else
{var statearr_118165_118236 = state_118129__$1;(statearr_118165_118236[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 12))
{var inst_118057 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118166_118237 = state_118129__$1;(statearr_118166_118237[2] = inst_118057);
(statearr_118166_118237[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 13))
{var inst_118021 = (state_118129[23]);var inst_118024 = cljs.core.async.close_BANG_.call(null,inst_118021);var state_118129__$1 = state_118129;var statearr_118170_118238 = state_118129__$1;(statearr_118170_118238[2] = inst_118024);
(statearr_118170_118238[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 14))
{var state_118129__$1 = state_118129;var statearr_118171_118239 = state_118129__$1;(statearr_118171_118239[2] = null);
(statearr_118171_118239[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 15))
{var inst_118014 = (state_118129[14]);var inst_118011 = (state_118129[15]);var inst_118013 = (state_118129[16]);var inst_118012 = (state_118129[17]);var inst_118027 = (state_118129[2]);var inst_118028 = (inst_118014 + 1);var tmp118167 = inst_118011;var tmp118168 = inst_118013;var tmp118169 = inst_118012;var inst_118011__$1 = tmp118167;var inst_118012__$1 = tmp118169;var inst_118013__$1 = tmp118168;var inst_118014__$1 = inst_118028;var state_118129__$1 = (function (){var statearr_118172 = state_118129;(statearr_118172[26] = inst_118027);
(statearr_118172[14] = inst_118014__$1);
(statearr_118172[15] = inst_118011__$1);
(statearr_118172[16] = inst_118013__$1);
(statearr_118172[17] = inst_118012__$1);
return statearr_118172;
})();var statearr_118173_118240 = state_118129__$1;(statearr_118173_118240[2] = null);
(statearr_118173_118240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 16))
{var inst_118031 = (state_118129[25]);var inst_118033 = cljs.core.chunked_seq_QMARK_.call(null,inst_118031);var state_118129__$1 = state_118129;if(inst_118033)
{var statearr_118174_118241 = state_118129__$1;(statearr_118174_118241[1] = 19);
} else
{var statearr_118175_118242 = state_118129__$1;(statearr_118175_118242[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 17))
{var state_118129__$1 = state_118129;var statearr_118176_118243 = state_118129__$1;(statearr_118176_118243[2] = null);
(statearr_118176_118243[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 18))
{var inst_118055 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118177_118244 = state_118129__$1;(statearr_118177_118244[2] = inst_118055);
(statearr_118177_118244[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 19))
{var inst_118031 = (state_118129[25]);var inst_118035 = cljs.core.chunk_first.call(null,inst_118031);var inst_118036 = cljs.core.chunk_rest.call(null,inst_118031);var inst_118037 = cljs.core.count.call(null,inst_118035);var inst_118011 = inst_118036;var inst_118012 = inst_118035;var inst_118013 = inst_118037;var inst_118014 = 0;var state_118129__$1 = (function (){var statearr_118178 = state_118129;(statearr_118178[14] = inst_118014);
(statearr_118178[15] = inst_118011);
(statearr_118178[16] = inst_118013);
(statearr_118178[17] = inst_118012);
return statearr_118178;
})();var statearr_118179_118245 = state_118129__$1;(statearr_118179_118245[2] = null);
(statearr_118179_118245[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 20))
{var inst_118031 = (state_118129[25]);var inst_118041 = cljs.core.first.call(null,inst_118031);var inst_118042 = cljs.core.nth.call(null,inst_118041,0,null);var inst_118043 = cljs.core.nth.call(null,inst_118041,1,null);var state_118129__$1 = (function (){var statearr_118180 = state_118129;(statearr_118180[27] = inst_118042);
return statearr_118180;
})();if(cljs.core.truth_(inst_118043))
{var statearr_118181_118246 = state_118129__$1;(statearr_118181_118246[1] = 22);
} else
{var statearr_118182_118247 = state_118129__$1;(statearr_118182_118247[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 21))
{var inst_118052 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118183_118248 = state_118129__$1;(statearr_118183_118248[2] = inst_118052);
(statearr_118183_118248[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 22))
{var inst_118042 = (state_118129[27]);var inst_118045 = cljs.core.async.close_BANG_.call(null,inst_118042);var state_118129__$1 = state_118129;var statearr_118184_118249 = state_118129__$1;(statearr_118184_118249[2] = inst_118045);
(statearr_118184_118249[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 23))
{var state_118129__$1 = state_118129;var statearr_118185_118250 = state_118129__$1;(statearr_118185_118250[2] = null);
(statearr_118185_118250[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 24))
{var inst_118031 = (state_118129[25]);var inst_118048 = (state_118129[2]);var inst_118049 = cljs.core.next.call(null,inst_118031);var inst_118011 = inst_118049;var inst_118012 = null;var inst_118013 = 0;var inst_118014 = 0;var state_118129__$1 = (function (){var statearr_118186 = state_118129;(statearr_118186[28] = inst_118048);
(statearr_118186[14] = inst_118014);
(statearr_118186[15] = inst_118011);
(statearr_118186[16] = inst_118013);
(statearr_118186[17] = inst_118012);
return statearr_118186;
})();var statearr_118187_118251 = state_118129__$1;(statearr_118187_118251[2] = null);
(statearr_118187_118251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 25))
{var inst_118072 = (state_118129[11]);var inst_118073 = (state_118129[13]);var inst_118075 = (inst_118073 < inst_118072);var inst_118076 = inst_118075;var state_118129__$1 = state_118129;if(cljs.core.truth_(inst_118076))
{var statearr_118188_118252 = state_118129__$1;(statearr_118188_118252[1] = 27);
} else
{var statearr_118189_118253 = state_118129__$1;(statearr_118189_118253[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 26))
{var inst_118120 = (state_118129[2]);var state_118129__$1 = (function (){var statearr_118190 = state_118129;(statearr_118190[29] = inst_118120);
return statearr_118190;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118129__$1,42,dchan);
} else
{if((state_val_118130 === 27))
{var inst_118071 = (state_118129[10]);var inst_118073 = (state_118129[13]);var inst_118078 = cljs.core._nth.call(null,inst_118071,inst_118073);var state_118129__$1 = (function (){var statearr_118191 = state_118129;(statearr_118191[7] = inst_118078);
return statearr_118191;
})();var statearr_118192_118254 = state_118129__$1;(statearr_118192_118254[2] = null);
(statearr_118192_118254[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 28))
{var inst_118091 = (state_118129[9]);var inst_118070 = (state_118129[12]);var inst_118091__$1 = cljs.core.seq.call(null,inst_118070);var state_118129__$1 = (function (){var statearr_118196 = state_118129;(statearr_118196[9] = inst_118091__$1);
return statearr_118196;
})();if(inst_118091__$1)
{var statearr_118197_118255 = state_118129__$1;(statearr_118197_118255[1] = 33);
} else
{var statearr_118198_118256 = state_118129__$1;(statearr_118198_118256[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 29))
{var inst_118118 = (state_118129[2]);var state_118129__$1 = state_118129;var statearr_118199_118257 = state_118129__$1;(statearr_118199_118257[2] = inst_118118);
(statearr_118199_118257[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 30))
{var inst_118071 = (state_118129[10]);var inst_118072 = (state_118129[11]);var inst_118070 = (state_118129[12]);var inst_118073 = (state_118129[13]);var inst_118087 = (state_118129[2]);var inst_118088 = (inst_118073 + 1);var tmp118193 = inst_118071;var tmp118194 = inst_118072;var tmp118195 = inst_118070;var inst_118070__$1 = tmp118195;var inst_118071__$1 = tmp118193;var inst_118072__$1 = tmp118194;var inst_118073__$1 = inst_118088;var state_118129__$1 = (function (){var statearr_118200 = state_118129;(statearr_118200[10] = inst_118071__$1);
(statearr_118200[11] = inst_118072__$1);
(statearr_118200[12] = inst_118070__$1);
(statearr_118200[13] = inst_118073__$1);
(statearr_118200[30] = inst_118087);
return statearr_118200;
})();var statearr_118201_118258 = state_118129__$1;(statearr_118201_118258[2] = null);
(statearr_118201_118258[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118130 === 31))
{var inst_118078 = (state_118129[7]);var inst_118079 = (state_118129[2]);var inst_118080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_118081 = cljs.core.async.untap_STAR_.call(null,m,inst_118078);var state_118129__$1 = (function (){var statearr_118202 = state_118129;(statearr_118202[31] = inst_118080);
(statearr_118202[32] = inst_118079);
return statearr_118202;
})();var statearr_118203_118259 = state_118129__$1;(statearr_118203_118259[2] = inst_118081);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118129__$1);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_118207 = (new Array(33));(statearr_118207[0] = state_machine__13310__auto__);
(statearr_118207[1] = 1);
return statearr_118207;
});
var state_machine__13310__auto____1 = (function (state_118129){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_118129);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e118208){if((e118208 instanceof Object))
{var ex__13313__auto__ = e118208;var statearr_118209_118260 = state_118129;(statearr_118209_118260[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e118208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__118261 = state_118129;
state_118129 = G__118261;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_118129){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_118129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_118210 = f__13410__auto__.call(null);(statearr_118210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___118211);
return statearr_118210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.Mix = (function (){var obj118263 = {};return obj118263;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t118373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t118373 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta118374){
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
this.meta118374 = meta118374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t118373.cljs$lang$type = true;
cljs.core.async.t118373.cljs$lang$ctorStr = "cljs.core.async/t118373";
cljs.core.async.t118373.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t118373");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t118373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t118373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_118375){var self__ = this;
var _118375__$1 = this;return self__.meta118374;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t118373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_118375,meta118374__$1){var self__ = this;
var _118375__$1 = this;return (new cljs.core.async.t118373(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta118374__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t118373 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t118373(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta118374){return (new cljs.core.async.t118373(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta118374));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t118373(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___118482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_118440){var state_val_118441 = (state_118440[1]);if((state_val_118441 === 1))
{var inst_118379 = (state_118440[7]);var inst_118379__$1 = calc_state.call(null);var inst_118380 = cljs.core.seq_QMARK_.call(null,inst_118379__$1);var state_118440__$1 = (function (){var statearr_118442 = state_118440;(statearr_118442[7] = inst_118379__$1);
return statearr_118442;
})();if(inst_118380)
{var statearr_118443_118483 = state_118440__$1;(statearr_118443_118483[1] = 2);
} else
{var statearr_118444_118484 = state_118440__$1;(statearr_118444_118484[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 2))
{var inst_118379 = (state_118440[7]);var inst_118382 = cljs.core.apply.call(null,cljs.core.hash_map,inst_118379);var state_118440__$1 = state_118440;var statearr_118445_118485 = state_118440__$1;(statearr_118445_118485[2] = inst_118382);
(statearr_118445_118485[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 3))
{var inst_118379 = (state_118440[7]);var state_118440__$1 = state_118440;var statearr_118446_118486 = state_118440__$1;(statearr_118446_118486[2] = inst_118379);
(statearr_118446_118486[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 4))
{var inst_118379 = (state_118440[7]);var inst_118385 = (state_118440[2]);var inst_118386 = cljs.core.get.call(null,inst_118385,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_118387 = cljs.core.get.call(null,inst_118385,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_118388 = cljs.core.get.call(null,inst_118385,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_118389 = inst_118379;var state_118440__$1 = (function (){var statearr_118447 = state_118440;(statearr_118447[8] = inst_118388);
(statearr_118447[9] = inst_118389);
(statearr_118447[10] = inst_118387);
(statearr_118447[11] = inst_118386);
return statearr_118447;
})();var statearr_118448_118487 = state_118440__$1;(statearr_118448_118487[2] = null);
(statearr_118448_118487[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 5))
{var inst_118389 = (state_118440[9]);var inst_118392 = cljs.core.seq_QMARK_.call(null,inst_118389);var state_118440__$1 = state_118440;if(inst_118392)
{var statearr_118449_118488 = state_118440__$1;(statearr_118449_118488[1] = 7);
} else
{var statearr_118450_118489 = state_118440__$1;(statearr_118450_118489[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 6))
{var inst_118438 = (state_118440[2]);var state_118440__$1 = state_118440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118440__$1,inst_118438);
} else
{if((state_val_118441 === 7))
{var inst_118389 = (state_118440[9]);var inst_118394 = cljs.core.apply.call(null,cljs.core.hash_map,inst_118389);var state_118440__$1 = state_118440;var statearr_118451_118490 = state_118440__$1;(statearr_118451_118490[2] = inst_118394);
(statearr_118451_118490[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 8))
{var inst_118389 = (state_118440[9]);var state_118440__$1 = state_118440;var statearr_118452_118491 = state_118440__$1;(statearr_118452_118491[2] = inst_118389);
(statearr_118452_118491[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 9))
{var inst_118397 = (state_118440[12]);var inst_118397__$1 = (state_118440[2]);var inst_118398 = cljs.core.get.call(null,inst_118397__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_118399 = cljs.core.get.call(null,inst_118397__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_118400 = cljs.core.get.call(null,inst_118397__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_118440__$1 = (function (){var statearr_118453 = state_118440;(statearr_118453[13] = inst_118399);
(statearr_118453[12] = inst_118397__$1);
(statearr_118453[14] = inst_118400);
return statearr_118453;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_118440__$1,10,inst_118398);
} else
{if((state_val_118441 === 10))
{var inst_118405 = (state_118440[15]);var inst_118404 = (state_118440[16]);var inst_118403 = (state_118440[2]);var inst_118404__$1 = cljs.core.nth.call(null,inst_118403,0,null);var inst_118405__$1 = cljs.core.nth.call(null,inst_118403,1,null);var inst_118406 = (inst_118404__$1 == null);var inst_118407 = cljs.core._EQ_.call(null,inst_118405__$1,change);var inst_118408 = (inst_118406) || (inst_118407);var state_118440__$1 = (function (){var statearr_118454 = state_118440;(statearr_118454[15] = inst_118405__$1);
(statearr_118454[16] = inst_118404__$1);
return statearr_118454;
})();if(cljs.core.truth_(inst_118408))
{var statearr_118455_118492 = state_118440__$1;(statearr_118455_118492[1] = 11);
} else
{var statearr_118456_118493 = state_118440__$1;(statearr_118456_118493[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 11))
{var inst_118404 = (state_118440[16]);var inst_118410 = (inst_118404 == null);var state_118440__$1 = state_118440;if(cljs.core.truth_(inst_118410))
{var statearr_118457_118494 = state_118440__$1;(statearr_118457_118494[1] = 14);
} else
{var statearr_118458_118495 = state_118440__$1;(statearr_118458_118495[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 12))
{var inst_118419 = (state_118440[17]);var inst_118400 = (state_118440[14]);var inst_118405 = (state_118440[15]);var inst_118419__$1 = inst_118400.call(null,inst_118405);var state_118440__$1 = (function (){var statearr_118459 = state_118440;(statearr_118459[17] = inst_118419__$1);
return statearr_118459;
})();if(cljs.core.truth_(inst_118419__$1))
{var statearr_118460_118496 = state_118440__$1;(statearr_118460_118496[1] = 17);
} else
{var statearr_118461_118497 = state_118440__$1;(statearr_118461_118497[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 13))
{var inst_118436 = (state_118440[2]);var state_118440__$1 = state_118440;var statearr_118462_118498 = state_118440__$1;(statearr_118462_118498[2] = inst_118436);
(statearr_118462_118498[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 14))
{var inst_118405 = (state_118440[15]);var inst_118412 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_118405);var state_118440__$1 = state_118440;var statearr_118463_118499 = state_118440__$1;(statearr_118463_118499[2] = inst_118412);
(statearr_118463_118499[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 15))
{var state_118440__$1 = state_118440;var statearr_118464_118500 = state_118440__$1;(statearr_118464_118500[2] = null);
(statearr_118464_118500[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 16))
{var inst_118415 = (state_118440[2]);var inst_118416 = calc_state.call(null);var inst_118389 = inst_118416;var state_118440__$1 = (function (){var statearr_118465 = state_118440;(statearr_118465[9] = inst_118389);
(statearr_118465[18] = inst_118415);
return statearr_118465;
})();var statearr_118466_118501 = state_118440__$1;(statearr_118466_118501[2] = null);
(statearr_118466_118501[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 17))
{var inst_118419 = (state_118440[17]);var state_118440__$1 = state_118440;var statearr_118467_118502 = state_118440__$1;(statearr_118467_118502[2] = inst_118419);
(statearr_118467_118502[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 18))
{var inst_118399 = (state_118440[13]);var inst_118400 = (state_118440[14]);var inst_118405 = (state_118440[15]);var inst_118422 = cljs.core.empty_QMARK_.call(null,inst_118400);var inst_118423 = inst_118399.call(null,inst_118405);var inst_118424 = cljs.core.not.call(null,inst_118423);var inst_118425 = (inst_118422) && (inst_118424);var state_118440__$1 = state_118440;var statearr_118468_118503 = state_118440__$1;(statearr_118468_118503[2] = inst_118425);
(statearr_118468_118503[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 19))
{var inst_118427 = (state_118440[2]);var state_118440__$1 = state_118440;if(cljs.core.truth_(inst_118427))
{var statearr_118469_118504 = state_118440__$1;(statearr_118469_118504[1] = 20);
} else
{var statearr_118470_118505 = state_118440__$1;(statearr_118470_118505[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 20))
{var inst_118404 = (state_118440[16]);var state_118440__$1 = state_118440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_118440__$1,23,out,inst_118404);
} else
{if((state_val_118441 === 21))
{var state_118440__$1 = state_118440;var statearr_118471_118506 = state_118440__$1;(statearr_118471_118506[2] = null);
(statearr_118471_118506[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 22))
{var inst_118397 = (state_118440[12]);var inst_118433 = (state_118440[2]);var inst_118389 = inst_118397;var state_118440__$1 = (function (){var statearr_118472 = state_118440;(statearr_118472[9] = inst_118389);
(statearr_118472[19] = inst_118433);
return statearr_118472;
})();var statearr_118473_118507 = state_118440__$1;(statearr_118473_118507[2] = null);
(statearr_118473_118507[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118441 === 23))
{var inst_118430 = (state_118440[2]);var state_118440__$1 = state_118440;var statearr_118474_118508 = state_118440__$1;(statearr_118474_118508[2] = inst_118430);
(statearr_118474_118508[1] = 22);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_118478 = (new Array(20));(statearr_118478[0] = state_machine__13310__auto__);
(statearr_118478[1] = 1);
return statearr_118478;
});
var state_machine__13310__auto____1 = (function (state_118440){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_118440);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e118479){if((e118479 instanceof Object))
{var ex__13313__auto__ = e118479;var statearr_118480_118509 = state_118440;(statearr_118480_118509[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e118479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__118510 = state_118440;
state_118440 = G__118510;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_118440){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_118440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_118481 = f__13410__auto__.call(null);(statearr_118481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___118482);
return statearr_118481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.Pub = (function (){var obj118512 = {};return obj118512;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
return (function (topic){var or__6289__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6289__auto__,mults){
return (function (p1__118513_SHARP_){if(cljs.core.truth_(p1__118513_SHARP_.call(null,topic)))
{return p1__118513_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__118513_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t118638 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t118638 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta118639){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta118639 = meta118639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t118638.cljs$lang$type = true;
cljs.core.async.t118638.cljs$lang$ctorStr = "cljs.core.async/t118638";
cljs.core.async.t118638.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t118638");
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t118638.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t118638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_118640){var self__ = this;
var _118640__$1 = this;return self__.meta118639;
});})(mults,ensure_mult))
;
cljs.core.async.t118638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_118640,meta118639__$1){var self__ = this;
var _118640__$1 = this;return (new cljs.core.async.t118638(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta118639__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t118638 = ((function (mults,ensure_mult){
return (function __GT_t118638(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta118639){return (new cljs.core.async.t118638(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta118639));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t118638(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___118762 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_118714){var state_val_118715 = (state_118714[1]);if((state_val_118715 === 1))
{var state_118714__$1 = state_118714;var statearr_118716_118763 = state_118714__$1;(statearr_118716_118763[2] = null);
(statearr_118716_118763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 2))
{var state_118714__$1 = state_118714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118714__$1,4,ch);
} else
{if((state_val_118715 === 3))
{var inst_118712 = (state_118714[2]);var state_118714__$1 = state_118714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118714__$1,inst_118712);
} else
{if((state_val_118715 === 4))
{var inst_118643 = (state_118714[7]);var inst_118643__$1 = (state_118714[2]);var inst_118644 = (inst_118643__$1 == null);var state_118714__$1 = (function (){var statearr_118717 = state_118714;(statearr_118717[7] = inst_118643__$1);
return statearr_118717;
})();if(cljs.core.truth_(inst_118644))
{var statearr_118718_118764 = state_118714__$1;(statearr_118718_118764[1] = 5);
} else
{var statearr_118719_118765 = state_118714__$1;(statearr_118719_118765[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 5))
{var inst_118650 = cljs.core.deref.call(null,mults);var inst_118651 = cljs.core.vals.call(null,inst_118650);var inst_118652 = cljs.core.seq.call(null,inst_118651);var inst_118653 = inst_118652;var inst_118654 = null;var inst_118655 = 0;var inst_118656 = 0;var state_118714__$1 = (function (){var statearr_118720 = state_118714;(statearr_118720[8] = inst_118656);
(statearr_118720[9] = inst_118654);
(statearr_118720[10] = inst_118655);
(statearr_118720[11] = inst_118653);
return statearr_118720;
})();var statearr_118721_118766 = state_118714__$1;(statearr_118721_118766[2] = null);
(statearr_118721_118766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 6))
{var inst_118691 = (state_118714[12]);var inst_118643 = (state_118714[7]);var inst_118693 = (state_118714[13]);var inst_118691__$1 = topic_fn.call(null,inst_118643);var inst_118692 = cljs.core.deref.call(null,mults);var inst_118693__$1 = cljs.core.get.call(null,inst_118692,inst_118691__$1);var state_118714__$1 = (function (){var statearr_118722 = state_118714;(statearr_118722[12] = inst_118691__$1);
(statearr_118722[13] = inst_118693__$1);
return statearr_118722;
})();if(cljs.core.truth_(inst_118693__$1))
{var statearr_118723_118767 = state_118714__$1;(statearr_118723_118767[1] = 19);
} else
{var statearr_118724_118768 = state_118714__$1;(statearr_118724_118768[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 7))
{var inst_118710 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118725_118769 = state_118714__$1;(statearr_118725_118769[2] = inst_118710);
(statearr_118725_118769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 8))
{var inst_118656 = (state_118714[8]);var inst_118655 = (state_118714[10]);var inst_118658 = (inst_118656 < inst_118655);var inst_118659 = inst_118658;var state_118714__$1 = state_118714;if(cljs.core.truth_(inst_118659))
{var statearr_118729_118770 = state_118714__$1;(statearr_118729_118770[1] = 10);
} else
{var statearr_118730_118771 = state_118714__$1;(statearr_118730_118771[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 9))
{var inst_118689 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118731_118772 = state_118714__$1;(statearr_118731_118772[2] = inst_118689);
(statearr_118731_118772[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 10))
{var inst_118656 = (state_118714[8]);var inst_118654 = (state_118714[9]);var inst_118655 = (state_118714[10]);var inst_118653 = (state_118714[11]);var inst_118661 = cljs.core._nth.call(null,inst_118654,inst_118656);var inst_118662 = cljs.core.async.muxch_STAR_.call(null,inst_118661);var inst_118663 = cljs.core.async.close_BANG_.call(null,inst_118662);var inst_118664 = (inst_118656 + 1);var tmp118726 = inst_118654;var tmp118727 = inst_118655;var tmp118728 = inst_118653;var inst_118653__$1 = tmp118728;var inst_118654__$1 = tmp118726;var inst_118655__$1 = tmp118727;var inst_118656__$1 = inst_118664;var state_118714__$1 = (function (){var statearr_118732 = state_118714;(statearr_118732[14] = inst_118663);
(statearr_118732[8] = inst_118656__$1);
(statearr_118732[9] = inst_118654__$1);
(statearr_118732[10] = inst_118655__$1);
(statearr_118732[11] = inst_118653__$1);
return statearr_118732;
})();var statearr_118733_118773 = state_118714__$1;(statearr_118733_118773[2] = null);
(statearr_118733_118773[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 11))
{var inst_118667 = (state_118714[15]);var inst_118653 = (state_118714[11]);var inst_118667__$1 = cljs.core.seq.call(null,inst_118653);var state_118714__$1 = (function (){var statearr_118734 = state_118714;(statearr_118734[15] = inst_118667__$1);
return statearr_118734;
})();if(inst_118667__$1)
{var statearr_118735_118774 = state_118714__$1;(statearr_118735_118774[1] = 13);
} else
{var statearr_118736_118775 = state_118714__$1;(statearr_118736_118775[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 12))
{var inst_118687 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118737_118776 = state_118714__$1;(statearr_118737_118776[2] = inst_118687);
(statearr_118737_118776[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 13))
{var inst_118667 = (state_118714[15]);var inst_118669 = cljs.core.chunked_seq_QMARK_.call(null,inst_118667);var state_118714__$1 = state_118714;if(inst_118669)
{var statearr_118738_118777 = state_118714__$1;(statearr_118738_118777[1] = 16);
} else
{var statearr_118739_118778 = state_118714__$1;(statearr_118739_118778[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 14))
{var state_118714__$1 = state_118714;var statearr_118740_118779 = state_118714__$1;(statearr_118740_118779[2] = null);
(statearr_118740_118779[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 15))
{var inst_118685 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118741_118780 = state_118714__$1;(statearr_118741_118780[2] = inst_118685);
(statearr_118741_118780[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 16))
{var inst_118667 = (state_118714[15]);var inst_118671 = cljs.core.chunk_first.call(null,inst_118667);var inst_118672 = cljs.core.chunk_rest.call(null,inst_118667);var inst_118673 = cljs.core.count.call(null,inst_118671);var inst_118653 = inst_118672;var inst_118654 = inst_118671;var inst_118655 = inst_118673;var inst_118656 = 0;var state_118714__$1 = (function (){var statearr_118742 = state_118714;(statearr_118742[8] = inst_118656);
(statearr_118742[9] = inst_118654);
(statearr_118742[10] = inst_118655);
(statearr_118742[11] = inst_118653);
return statearr_118742;
})();var statearr_118743_118781 = state_118714__$1;(statearr_118743_118781[2] = null);
(statearr_118743_118781[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 17))
{var inst_118667 = (state_118714[15]);var inst_118676 = cljs.core.first.call(null,inst_118667);var inst_118677 = cljs.core.async.muxch_STAR_.call(null,inst_118676);var inst_118678 = cljs.core.async.close_BANG_.call(null,inst_118677);var inst_118679 = cljs.core.next.call(null,inst_118667);var inst_118653 = inst_118679;var inst_118654 = null;var inst_118655 = 0;var inst_118656 = 0;var state_118714__$1 = (function (){var statearr_118744 = state_118714;(statearr_118744[16] = inst_118678);
(statearr_118744[8] = inst_118656);
(statearr_118744[9] = inst_118654);
(statearr_118744[10] = inst_118655);
(statearr_118744[11] = inst_118653);
return statearr_118744;
})();var statearr_118745_118782 = state_118714__$1;(statearr_118745_118782[2] = null);
(statearr_118745_118782[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 18))
{var inst_118682 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118746_118783 = state_118714__$1;(statearr_118746_118783[2] = inst_118682);
(statearr_118746_118783[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 19))
{var state_118714__$1 = state_118714;var statearr_118747_118784 = state_118714__$1;(statearr_118747_118784[2] = null);
(statearr_118747_118784[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 20))
{var state_118714__$1 = state_118714;var statearr_118748_118785 = state_118714__$1;(statearr_118748_118785[2] = null);
(statearr_118748_118785[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 21))
{var inst_118707 = (state_118714[2]);var state_118714__$1 = (function (){var statearr_118749 = state_118714;(statearr_118749[17] = inst_118707);
return statearr_118749;
})();var statearr_118750_118786 = state_118714__$1;(statearr_118750_118786[2] = null);
(statearr_118750_118786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 22))
{var inst_118704 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118751_118787 = state_118714__$1;(statearr_118751_118787[2] = inst_118704);
(statearr_118751_118787[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 23))
{var inst_118691 = (state_118714[12]);var inst_118695 = (state_118714[2]);var inst_118696 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_118691);var state_118714__$1 = (function (){var statearr_118752 = state_118714;(statearr_118752[18] = inst_118695);
return statearr_118752;
})();var statearr_118753_118788 = state_118714__$1;(statearr_118753_118788[2] = inst_118696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118714__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118715 === 24))
{var inst_118643 = (state_118714[7]);var inst_118693 = (state_118714[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_118714,23,Object,null,22);var inst_118700 = cljs.core.async.muxch_STAR_.call(null,inst_118693);var state_118714__$1 = state_118714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_118714__$1,25,inst_118700,inst_118643);
} else
{if((state_val_118715 === 25))
{var inst_118702 = (state_118714[2]);var state_118714__$1 = state_118714;var statearr_118754_118789 = state_118714__$1;(statearr_118754_118789[2] = inst_118702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118714__$1);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_118758 = (new Array(19));(statearr_118758[0] = state_machine__13310__auto__);
(statearr_118758[1] = 1);
return statearr_118758;
});
var state_machine__13310__auto____1 = (function (state_118714){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_118714);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e118759){if((e118759 instanceof Object))
{var ex__13313__auto__ = e118759;var statearr_118760_118790 = state_118714;(statearr_118760_118790[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e118759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__118791 = state_118714;
state_118714 = G__118791;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_118714){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_118714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_118761 = f__13410__auto__.call(null);(statearr_118761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___118762);
return statearr_118761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
,cljs.core.range.call(null,cnt));var c__13409__auto___118928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_118898){var state_val_118899 = (state_118898[1]);if((state_val_118899 === 1))
{var state_118898__$1 = state_118898;var statearr_118900_118929 = state_118898__$1;(statearr_118900_118929[2] = null);
(statearr_118900_118929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 2))
{var inst_118861 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_118862 = 0;var state_118898__$1 = (function (){var statearr_118901 = state_118898;(statearr_118901[7] = inst_118861);
(statearr_118901[8] = inst_118862);
return statearr_118901;
})();var statearr_118902_118930 = state_118898__$1;(statearr_118902_118930[2] = null);
(statearr_118902_118930[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 3))
{var inst_118896 = (state_118898[2]);var state_118898__$1 = state_118898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_118898__$1,inst_118896);
} else
{if((state_val_118899 === 4))
{var inst_118862 = (state_118898[8]);var inst_118864 = (inst_118862 < cnt);var state_118898__$1 = state_118898;if(cljs.core.truth_(inst_118864))
{var statearr_118903_118931 = state_118898__$1;(statearr_118903_118931[1] = 6);
} else
{var statearr_118904_118932 = state_118898__$1;(statearr_118904_118932[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 5))
{var inst_118882 = (state_118898[2]);var state_118898__$1 = (function (){var statearr_118905 = state_118898;(statearr_118905[9] = inst_118882);
return statearr_118905;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_118898__$1,12,dchan);
} else
{if((state_val_118899 === 6))
{var state_118898__$1 = state_118898;var statearr_118906_118933 = state_118898__$1;(statearr_118906_118933[2] = null);
(statearr_118906_118933[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 7))
{var state_118898__$1 = state_118898;var statearr_118907_118934 = state_118898__$1;(statearr_118907_118934[2] = null);
(statearr_118907_118934[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 8))
{var inst_118880 = (state_118898[2]);var state_118898__$1 = state_118898;var statearr_118908_118935 = state_118898__$1;(statearr_118908_118935[2] = inst_118880);
(statearr_118908_118935[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 9))
{var inst_118862 = (state_118898[8]);var inst_118875 = (state_118898[2]);var inst_118876 = (inst_118862 + 1);var inst_118862__$1 = inst_118876;var state_118898__$1 = (function (){var statearr_118909 = state_118898;(statearr_118909[8] = inst_118862__$1);
(statearr_118909[10] = inst_118875);
return statearr_118909;
})();var statearr_118910_118936 = state_118898__$1;(statearr_118910_118936[2] = null);
(statearr_118910_118936[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 10))
{var inst_118866 = (state_118898[2]);var inst_118867 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_118898__$1 = (function (){var statearr_118911 = state_118898;(statearr_118911[11] = inst_118866);
return statearr_118911;
})();var statearr_118912_118937 = state_118898__$1;(statearr_118912_118937[2] = inst_118867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118898__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 11))
{var inst_118862 = (state_118898[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_118898,10,Object,null,9);var inst_118871 = chs__$1.call(null,inst_118862);var inst_118872 = done.call(null,inst_118862);var inst_118873 = cljs.core.async.take_BANG_.call(null,inst_118871,inst_118872);var state_118898__$1 = state_118898;var statearr_118913_118938 = state_118898__$1;(statearr_118913_118938[2] = inst_118873);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118898__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 12))
{var inst_118884 = (state_118898[12]);var inst_118884__$1 = (state_118898[2]);var inst_118885 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_118884__$1);var state_118898__$1 = (function (){var statearr_118914 = state_118898;(statearr_118914[12] = inst_118884__$1);
return statearr_118914;
})();if(cljs.core.truth_(inst_118885))
{var statearr_118915_118939 = state_118898__$1;(statearr_118915_118939[1] = 13);
} else
{var statearr_118916_118940 = state_118898__$1;(statearr_118916_118940[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 13))
{var inst_118887 = cljs.core.async.close_BANG_.call(null,out);var state_118898__$1 = state_118898;var statearr_118917_118941 = state_118898__$1;(statearr_118917_118941[2] = inst_118887);
(statearr_118917_118941[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 14))
{var inst_118884 = (state_118898[12]);var inst_118889 = cljs.core.apply.call(null,f,inst_118884);var state_118898__$1 = state_118898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_118898__$1,16,out,inst_118889);
} else
{if((state_val_118899 === 15))
{var inst_118894 = (state_118898[2]);var state_118898__$1 = state_118898;var statearr_118918_118942 = state_118898__$1;(statearr_118918_118942[2] = inst_118894);
(statearr_118918_118942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_118899 === 16))
{var inst_118891 = (state_118898[2]);var state_118898__$1 = (function (){var statearr_118919 = state_118898;(statearr_118919[13] = inst_118891);
return statearr_118919;
})();var statearr_118920_118943 = state_118898__$1;(statearr_118920_118943[2] = null);
(statearr_118920_118943[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_118924 = (new Array(14));(statearr_118924[0] = state_machine__13310__auto__);
(statearr_118924[1] = 1);
return statearr_118924;
});
var state_machine__13310__auto____1 = (function (state_118898){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_118898);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e118925){if((e118925 instanceof Object))
{var ex__13313__auto__ = e118925;var statearr_118926_118944 = state_118898;(statearr_118926_118944[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_118898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e118925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__118945 = state_118898;
state_118898 = G__118945;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_118898){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_118898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_118927 = f__13410__auto__.call(null);(statearr_118927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___118928);
return statearr_118927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___119053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_119029){var state_val_119030 = (state_119029[1]);if((state_val_119030 === 1))
{var inst_119000 = cljs.core.vec.call(null,chs);var inst_119001 = inst_119000;var state_119029__$1 = (function (){var statearr_119031 = state_119029;(statearr_119031[7] = inst_119001);
return statearr_119031;
})();var statearr_119032_119054 = state_119029__$1;(statearr_119032_119054[2] = null);
(statearr_119032_119054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 2))
{var inst_119001 = (state_119029[7]);var inst_119003 = cljs.core.count.call(null,inst_119001);var inst_119004 = (inst_119003 > 0);var state_119029__$1 = state_119029;if(cljs.core.truth_(inst_119004))
{var statearr_119033_119055 = state_119029__$1;(statearr_119033_119055[1] = 4);
} else
{var statearr_119034_119056 = state_119029__$1;(statearr_119034_119056[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 3))
{var inst_119027 = (state_119029[2]);var state_119029__$1 = state_119029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119029__$1,inst_119027);
} else
{if((state_val_119030 === 4))
{var inst_119001 = (state_119029[7]);var state_119029__$1 = state_119029;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_119029__$1,7,inst_119001);
} else
{if((state_val_119030 === 5))
{var inst_119023 = cljs.core.async.close_BANG_.call(null,out);var state_119029__$1 = state_119029;var statearr_119035_119057 = state_119029__$1;(statearr_119035_119057[2] = inst_119023);
(statearr_119035_119057[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 6))
{var inst_119025 = (state_119029[2]);var state_119029__$1 = state_119029;var statearr_119036_119058 = state_119029__$1;(statearr_119036_119058[2] = inst_119025);
(statearr_119036_119058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 7))
{var inst_119009 = (state_119029[8]);var inst_119008 = (state_119029[9]);var inst_119008__$1 = (state_119029[2]);var inst_119009__$1 = cljs.core.nth.call(null,inst_119008__$1,0,null);var inst_119010 = cljs.core.nth.call(null,inst_119008__$1,1,null);var inst_119011 = (inst_119009__$1 == null);var state_119029__$1 = (function (){var statearr_119037 = state_119029;(statearr_119037[8] = inst_119009__$1);
(statearr_119037[9] = inst_119008__$1);
(statearr_119037[10] = inst_119010);
return statearr_119037;
})();if(cljs.core.truth_(inst_119011))
{var statearr_119038_119059 = state_119029__$1;(statearr_119038_119059[1] = 8);
} else
{var statearr_119039_119060 = state_119029__$1;(statearr_119039_119060[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 8))
{var inst_119009 = (state_119029[8]);var inst_119008 = (state_119029[9]);var inst_119010 = (state_119029[10]);var inst_119001 = (state_119029[7]);var inst_119013 = (function (){var c = inst_119010;var v = inst_119009;var vec__119006 = inst_119008;var cs = inst_119001;return ((function (c,v,vec__119006,cs,inst_119009,inst_119008,inst_119010,inst_119001,state_val_119030){
return (function (p1__118946_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__118946_SHARP_);
});
;})(c,v,vec__119006,cs,inst_119009,inst_119008,inst_119010,inst_119001,state_val_119030))
})();var inst_119014 = cljs.core.filterv.call(null,inst_119013,inst_119001);var inst_119001__$1 = inst_119014;var state_119029__$1 = (function (){var statearr_119040 = state_119029;(statearr_119040[7] = inst_119001__$1);
return statearr_119040;
})();var statearr_119041_119061 = state_119029__$1;(statearr_119041_119061[2] = null);
(statearr_119041_119061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 9))
{var inst_119009 = (state_119029[8]);var state_119029__$1 = state_119029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119029__$1,11,out,inst_119009);
} else
{if((state_val_119030 === 10))
{var inst_119021 = (state_119029[2]);var state_119029__$1 = state_119029;var statearr_119043_119062 = state_119029__$1;(statearr_119043_119062[2] = inst_119021);
(statearr_119043_119062[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119030 === 11))
{var inst_119001 = (state_119029[7]);var inst_119018 = (state_119029[2]);var tmp119042 = inst_119001;var inst_119001__$1 = tmp119042;var state_119029__$1 = (function (){var statearr_119044 = state_119029;(statearr_119044[7] = inst_119001__$1);
(statearr_119044[11] = inst_119018);
return statearr_119044;
})();var statearr_119045_119063 = state_119029__$1;(statearr_119045_119063[2] = null);
(statearr_119045_119063[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_119049 = (new Array(12));(statearr_119049[0] = state_machine__13310__auto__);
(statearr_119049[1] = 1);
return statearr_119049;
});
var state_machine__13310__auto____1 = (function (state_119029){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_119029);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e119050){if((e119050 instanceof Object))
{var ex__13313__auto__ = e119050;var statearr_119051_119064 = state_119029;(statearr_119051_119064[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119029);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e119050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__119065 = state_119029;
state_119029 = G__119065;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_119029){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_119029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_119052 = f__13410__auto__.call(null);(statearr_119052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___119053);
return statearr_119052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___119158 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_119135){var state_val_119136 = (state_119135[1]);if((state_val_119136 === 1))
{var inst_119112 = 0;var state_119135__$1 = (function (){var statearr_119137 = state_119135;(statearr_119137[7] = inst_119112);
return statearr_119137;
})();var statearr_119138_119159 = state_119135__$1;(statearr_119138_119159[2] = null);
(statearr_119138_119159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 2))
{var inst_119112 = (state_119135[7]);var inst_119114 = (inst_119112 < n);var state_119135__$1 = state_119135;if(cljs.core.truth_(inst_119114))
{var statearr_119139_119160 = state_119135__$1;(statearr_119139_119160[1] = 4);
} else
{var statearr_119140_119161 = state_119135__$1;(statearr_119140_119161[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 3))
{var inst_119132 = (state_119135[2]);var inst_119133 = cljs.core.async.close_BANG_.call(null,out);var state_119135__$1 = (function (){var statearr_119141 = state_119135;(statearr_119141[8] = inst_119132);
return statearr_119141;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119135__$1,inst_119133);
} else
{if((state_val_119136 === 4))
{var state_119135__$1 = state_119135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119135__$1,7,ch);
} else
{if((state_val_119136 === 5))
{var state_119135__$1 = state_119135;var statearr_119142_119162 = state_119135__$1;(statearr_119142_119162[2] = null);
(statearr_119142_119162[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 6))
{var inst_119130 = (state_119135[2]);var state_119135__$1 = state_119135;var statearr_119143_119163 = state_119135__$1;(statearr_119143_119163[2] = inst_119130);
(statearr_119143_119163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 7))
{var inst_119117 = (state_119135[9]);var inst_119117__$1 = (state_119135[2]);var inst_119118 = (inst_119117__$1 == null);var inst_119119 = cljs.core.not.call(null,inst_119118);var state_119135__$1 = (function (){var statearr_119144 = state_119135;(statearr_119144[9] = inst_119117__$1);
return statearr_119144;
})();if(inst_119119)
{var statearr_119145_119164 = state_119135__$1;(statearr_119145_119164[1] = 8);
} else
{var statearr_119146_119165 = state_119135__$1;(statearr_119146_119165[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 8))
{var inst_119117 = (state_119135[9]);var state_119135__$1 = state_119135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119135__$1,11,out,inst_119117);
} else
{if((state_val_119136 === 9))
{var state_119135__$1 = state_119135;var statearr_119147_119166 = state_119135__$1;(statearr_119147_119166[2] = null);
(statearr_119147_119166[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 10))
{var inst_119127 = (state_119135[2]);var state_119135__$1 = state_119135;var statearr_119148_119167 = state_119135__$1;(statearr_119148_119167[2] = inst_119127);
(statearr_119148_119167[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119136 === 11))
{var inst_119112 = (state_119135[7]);var inst_119122 = (state_119135[2]);var inst_119123 = (inst_119112 + 1);var inst_119112__$1 = inst_119123;var state_119135__$1 = (function (){var statearr_119149 = state_119135;(statearr_119149[7] = inst_119112__$1);
(statearr_119149[10] = inst_119122);
return statearr_119149;
})();var statearr_119150_119168 = state_119135__$1;(statearr_119150_119168[2] = null);
(statearr_119150_119168[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_119154 = (new Array(11));(statearr_119154[0] = state_machine__13310__auto__);
(statearr_119154[1] = 1);
return statearr_119154;
});
var state_machine__13310__auto____1 = (function (state_119135){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_119135);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e119155){if((e119155 instanceof Object))
{var ex__13313__auto__ = e119155;var statearr_119156_119169 = state_119135;(statearr_119156_119169[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e119155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__119170 = state_119135;
state_119135 = G__119170;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_119135){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_119135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_119157 = f__13410__auto__.call(null);(statearr_119157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___119158);
return statearr_119157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___119267 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_119242){var state_val_119243 = (state_119242[1]);if((state_val_119243 === 1))
{var inst_119219 = null;var state_119242__$1 = (function (){var statearr_119244 = state_119242;(statearr_119244[7] = inst_119219);
return statearr_119244;
})();var statearr_119245_119268 = state_119242__$1;(statearr_119245_119268[2] = null);
(statearr_119245_119268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 2))
{var state_119242__$1 = state_119242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119242__$1,4,ch);
} else
{if((state_val_119243 === 3))
{var inst_119239 = (state_119242[2]);var inst_119240 = cljs.core.async.close_BANG_.call(null,out);var state_119242__$1 = (function (){var statearr_119246 = state_119242;(statearr_119246[8] = inst_119239);
return statearr_119246;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119242__$1,inst_119240);
} else
{if((state_val_119243 === 4))
{var inst_119222 = (state_119242[9]);var inst_119222__$1 = (state_119242[2]);var inst_119223 = (inst_119222__$1 == null);var inst_119224 = cljs.core.not.call(null,inst_119223);var state_119242__$1 = (function (){var statearr_119247 = state_119242;(statearr_119247[9] = inst_119222__$1);
return statearr_119247;
})();if(inst_119224)
{var statearr_119248_119269 = state_119242__$1;(statearr_119248_119269[1] = 5);
} else
{var statearr_119249_119270 = state_119242__$1;(statearr_119249_119270[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 5))
{var inst_119219 = (state_119242[7]);var inst_119222 = (state_119242[9]);var inst_119226 = cljs.core._EQ_.call(null,inst_119222,inst_119219);var state_119242__$1 = state_119242;if(inst_119226)
{var statearr_119250_119271 = state_119242__$1;(statearr_119250_119271[1] = 8);
} else
{var statearr_119251_119272 = state_119242__$1;(statearr_119251_119272[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 6))
{var state_119242__$1 = state_119242;var statearr_119253_119273 = state_119242__$1;(statearr_119253_119273[2] = null);
(statearr_119253_119273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 7))
{var inst_119237 = (state_119242[2]);var state_119242__$1 = state_119242;var statearr_119254_119274 = state_119242__$1;(statearr_119254_119274[2] = inst_119237);
(statearr_119254_119274[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 8))
{var inst_119219 = (state_119242[7]);var tmp119252 = inst_119219;var inst_119219__$1 = tmp119252;var state_119242__$1 = (function (){var statearr_119255 = state_119242;(statearr_119255[7] = inst_119219__$1);
return statearr_119255;
})();var statearr_119256_119275 = state_119242__$1;(statearr_119256_119275[2] = null);
(statearr_119256_119275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 9))
{var inst_119222 = (state_119242[9]);var state_119242__$1 = state_119242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119242__$1,11,out,inst_119222);
} else
{if((state_val_119243 === 10))
{var inst_119234 = (state_119242[2]);var state_119242__$1 = state_119242;var statearr_119257_119276 = state_119242__$1;(statearr_119257_119276[2] = inst_119234);
(statearr_119257_119276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119243 === 11))
{var inst_119222 = (state_119242[9]);var inst_119231 = (state_119242[2]);var inst_119219 = inst_119222;var state_119242__$1 = (function (){var statearr_119258 = state_119242;(statearr_119258[10] = inst_119231);
(statearr_119258[7] = inst_119219);
return statearr_119258;
})();var statearr_119259_119277 = state_119242__$1;(statearr_119259_119277[2] = null);
(statearr_119259_119277[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_119263 = (new Array(11));(statearr_119263[0] = state_machine__13310__auto__);
(statearr_119263[1] = 1);
return statearr_119263;
});
var state_machine__13310__auto____1 = (function (state_119242){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_119242);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e119264){if((e119264 instanceof Object))
{var ex__13313__auto__ = e119264;var statearr_119265_119278 = state_119242;(statearr_119265_119278[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e119264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__119279 = state_119242;
state_119242 = G__119279;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_119242){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_119242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_119266 = f__13410__auto__.call(null);(statearr_119266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___119267);
return statearr_119266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___119414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_119384){var state_val_119385 = (state_119384[1]);if((state_val_119385 === 1))
{var inst_119347 = (new Array(n));var inst_119348 = inst_119347;var inst_119349 = 0;var state_119384__$1 = (function (){var statearr_119386 = state_119384;(statearr_119386[7] = inst_119349);
(statearr_119386[8] = inst_119348);
return statearr_119386;
})();var statearr_119387_119415 = state_119384__$1;(statearr_119387_119415[2] = null);
(statearr_119387_119415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 2))
{var state_119384__$1 = state_119384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119384__$1,4,ch);
} else
{if((state_val_119385 === 3))
{var inst_119382 = (state_119384[2]);var state_119384__$1 = state_119384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119384__$1,inst_119382);
} else
{if((state_val_119385 === 4))
{var inst_119352 = (state_119384[9]);var inst_119352__$1 = (state_119384[2]);var inst_119353 = (inst_119352__$1 == null);var inst_119354 = cljs.core.not.call(null,inst_119353);var state_119384__$1 = (function (){var statearr_119388 = state_119384;(statearr_119388[9] = inst_119352__$1);
return statearr_119388;
})();if(inst_119354)
{var statearr_119389_119416 = state_119384__$1;(statearr_119389_119416[1] = 5);
} else
{var statearr_119390_119417 = state_119384__$1;(statearr_119390_119417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 5))
{var inst_119357 = (state_119384[10]);var inst_119352 = (state_119384[9]);var inst_119349 = (state_119384[7]);var inst_119348 = (state_119384[8]);var inst_119356 = (inst_119348[inst_119349] = inst_119352);var inst_119357__$1 = (inst_119349 + 1);var inst_119358 = (inst_119357__$1 < n);var state_119384__$1 = (function (){var statearr_119391 = state_119384;(statearr_119391[11] = inst_119356);
(statearr_119391[10] = inst_119357__$1);
return statearr_119391;
})();if(cljs.core.truth_(inst_119358))
{var statearr_119392_119418 = state_119384__$1;(statearr_119392_119418[1] = 8);
} else
{var statearr_119393_119419 = state_119384__$1;(statearr_119393_119419[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 6))
{var inst_119349 = (state_119384[7]);var inst_119370 = (inst_119349 > 0);var state_119384__$1 = state_119384;if(cljs.core.truth_(inst_119370))
{var statearr_119395_119420 = state_119384__$1;(statearr_119395_119420[1] = 12);
} else
{var statearr_119396_119421 = state_119384__$1;(statearr_119396_119421[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 7))
{var inst_119380 = (state_119384[2]);var state_119384__$1 = state_119384;var statearr_119397_119422 = state_119384__$1;(statearr_119397_119422[2] = inst_119380);
(statearr_119397_119422[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 8))
{var inst_119357 = (state_119384[10]);var inst_119348 = (state_119384[8]);var tmp119394 = inst_119348;var inst_119348__$1 = tmp119394;var inst_119349 = inst_119357;var state_119384__$1 = (function (){var statearr_119398 = state_119384;(statearr_119398[7] = inst_119349);
(statearr_119398[8] = inst_119348__$1);
return statearr_119398;
})();var statearr_119399_119423 = state_119384__$1;(statearr_119399_119423[2] = null);
(statearr_119399_119423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 9))
{var inst_119348 = (state_119384[8]);var inst_119362 = cljs.core.vec.call(null,inst_119348);var state_119384__$1 = state_119384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119384__$1,11,out,inst_119362);
} else
{if((state_val_119385 === 10))
{var inst_119368 = (state_119384[2]);var state_119384__$1 = state_119384;var statearr_119400_119424 = state_119384__$1;(statearr_119400_119424[2] = inst_119368);
(statearr_119400_119424[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 11))
{var inst_119364 = (state_119384[2]);var inst_119365 = (new Array(n));var inst_119348 = inst_119365;var inst_119349 = 0;var state_119384__$1 = (function (){var statearr_119401 = state_119384;(statearr_119401[12] = inst_119364);
(statearr_119401[7] = inst_119349);
(statearr_119401[8] = inst_119348);
return statearr_119401;
})();var statearr_119402_119425 = state_119384__$1;(statearr_119402_119425[2] = null);
(statearr_119402_119425[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 12))
{var inst_119348 = (state_119384[8]);var inst_119372 = cljs.core.vec.call(null,inst_119348);var state_119384__$1 = state_119384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119384__$1,15,out,inst_119372);
} else
{if((state_val_119385 === 13))
{var state_119384__$1 = state_119384;var statearr_119403_119426 = state_119384__$1;(statearr_119403_119426[2] = null);
(statearr_119403_119426[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 14))
{var inst_119377 = (state_119384[2]);var inst_119378 = cljs.core.async.close_BANG_.call(null,out);var state_119384__$1 = (function (){var statearr_119404 = state_119384;(statearr_119404[13] = inst_119377);
return statearr_119404;
})();var statearr_119405_119427 = state_119384__$1;(statearr_119405_119427[2] = inst_119378);
(statearr_119405_119427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119385 === 15))
{var inst_119374 = (state_119384[2]);var state_119384__$1 = state_119384;var statearr_119406_119428 = state_119384__$1;(statearr_119406_119428[2] = inst_119374);
(statearr_119406_119428[1] = 14);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_119410 = (new Array(14));(statearr_119410[0] = state_machine__13310__auto__);
(statearr_119410[1] = 1);
return statearr_119410;
});
var state_machine__13310__auto____1 = (function (state_119384){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_119384);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e119411){if((e119411 instanceof Object))
{var ex__13313__auto__ = e119411;var statearr_119412_119429 = state_119384;(statearr_119412_119429[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e119411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__119430 = state_119384;
state_119384 = G__119430;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_119384){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_119384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_119413 = f__13410__auto__.call(null);(statearr_119413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___119414);
return statearr_119413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___119573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_119543){var state_val_119544 = (state_119543[1]);if((state_val_119544 === 1))
{var inst_119502 = (new Array(0));var inst_119503 = inst_119502;var inst_119504 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_119543__$1 = (function (){var statearr_119545 = state_119543;(statearr_119545[7] = inst_119504);
(statearr_119545[8] = inst_119503);
return statearr_119545;
})();var statearr_119546_119574 = state_119543__$1;(statearr_119546_119574[2] = null);
(statearr_119546_119574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 2))
{var state_119543__$1 = state_119543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119543__$1,4,ch);
} else
{if((state_val_119544 === 3))
{var inst_119541 = (state_119543[2]);var state_119543__$1 = state_119543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119543__$1,inst_119541);
} else
{if((state_val_119544 === 4))
{var inst_119507 = (state_119543[9]);var inst_119507__$1 = (state_119543[2]);var inst_119508 = (inst_119507__$1 == null);var inst_119509 = cljs.core.not.call(null,inst_119508);var state_119543__$1 = (function (){var statearr_119547 = state_119543;(statearr_119547[9] = inst_119507__$1);
return statearr_119547;
})();if(inst_119509)
{var statearr_119548_119575 = state_119543__$1;(statearr_119548_119575[1] = 5);
} else
{var statearr_119549_119576 = state_119543__$1;(statearr_119549_119576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 5))
{var inst_119511 = (state_119543[10]);var inst_119507 = (state_119543[9]);var inst_119504 = (state_119543[7]);var inst_119511__$1 = f.call(null,inst_119507);var inst_119512 = cljs.core._EQ_.call(null,inst_119511__$1,inst_119504);var inst_119513 = cljs.core.keyword_identical_QMARK_.call(null,inst_119504,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_119514 = (inst_119512) || (inst_119513);var state_119543__$1 = (function (){var statearr_119550 = state_119543;(statearr_119550[10] = inst_119511__$1);
return statearr_119550;
})();if(cljs.core.truth_(inst_119514))
{var statearr_119551_119577 = state_119543__$1;(statearr_119551_119577[1] = 8);
} else
{var statearr_119552_119578 = state_119543__$1;(statearr_119552_119578[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 6))
{var inst_119503 = (state_119543[8]);var inst_119528 = inst_119503.length;var inst_119529 = (inst_119528 > 0);var state_119543__$1 = state_119543;if(cljs.core.truth_(inst_119529))
{var statearr_119554_119579 = state_119543__$1;(statearr_119554_119579[1] = 12);
} else
{var statearr_119555_119580 = state_119543__$1;(statearr_119555_119580[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 7))
{var inst_119539 = (state_119543[2]);var state_119543__$1 = state_119543;var statearr_119556_119581 = state_119543__$1;(statearr_119556_119581[2] = inst_119539);
(statearr_119556_119581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 8))
{var inst_119511 = (state_119543[10]);var inst_119507 = (state_119543[9]);var inst_119503 = (state_119543[8]);var inst_119516 = inst_119503.push(inst_119507);var tmp119553 = inst_119503;var inst_119503__$1 = tmp119553;var inst_119504 = inst_119511;var state_119543__$1 = (function (){var statearr_119557 = state_119543;(statearr_119557[11] = inst_119516);
(statearr_119557[7] = inst_119504);
(statearr_119557[8] = inst_119503__$1);
return statearr_119557;
})();var statearr_119558_119582 = state_119543__$1;(statearr_119558_119582[2] = null);
(statearr_119558_119582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 9))
{var inst_119503 = (state_119543[8]);var inst_119519 = cljs.core.vec.call(null,inst_119503);var state_119543__$1 = state_119543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119543__$1,11,out,inst_119519);
} else
{if((state_val_119544 === 10))
{var inst_119526 = (state_119543[2]);var state_119543__$1 = state_119543;var statearr_119559_119583 = state_119543__$1;(statearr_119559_119583[2] = inst_119526);
(statearr_119559_119583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 11))
{var inst_119511 = (state_119543[10]);var inst_119507 = (state_119543[9]);var inst_119521 = (state_119543[2]);var inst_119522 = (new Array(0));var inst_119523 = inst_119522.push(inst_119507);var inst_119503 = inst_119522;var inst_119504 = inst_119511;var state_119543__$1 = (function (){var statearr_119560 = state_119543;(statearr_119560[12] = inst_119523);
(statearr_119560[13] = inst_119521);
(statearr_119560[7] = inst_119504);
(statearr_119560[8] = inst_119503);
return statearr_119560;
})();var statearr_119561_119584 = state_119543__$1;(statearr_119561_119584[2] = null);
(statearr_119561_119584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 12))
{var inst_119503 = (state_119543[8]);var inst_119531 = cljs.core.vec.call(null,inst_119503);var state_119543__$1 = state_119543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_119543__$1,15,out,inst_119531);
} else
{if((state_val_119544 === 13))
{var state_119543__$1 = state_119543;var statearr_119562_119585 = state_119543__$1;(statearr_119562_119585[2] = null);
(statearr_119562_119585[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 14))
{var inst_119536 = (state_119543[2]);var inst_119537 = cljs.core.async.close_BANG_.call(null,out);var state_119543__$1 = (function (){var statearr_119563 = state_119543;(statearr_119563[14] = inst_119536);
return statearr_119563;
})();var statearr_119564_119586 = state_119543__$1;(statearr_119564_119586[2] = inst_119537);
(statearr_119564_119586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_119544 === 15))
{var inst_119533 = (state_119543[2]);var state_119543__$1 = state_119543;var statearr_119565_119587 = state_119543__$1;(statearr_119565_119587[2] = inst_119533);
(statearr_119565_119587[1] = 14);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_119569 = (new Array(15));(statearr_119569[0] = state_machine__13310__auto__);
(statearr_119569[1] = 1);
return statearr_119569;
});
var state_machine__13310__auto____1 = (function (state_119543){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_119543);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e119570){if((e119570 instanceof Object))
{var ex__13313__auto__ = e119570;var statearr_119571_119588 = state_119543;(statearr_119571_119588[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e119570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__119589 = state_119543;
state_119543 = G__119589;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_119543){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_119543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_119572 = f__13410__auto__.call(null);(statearr_119572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___119573);
return statearr_119572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
