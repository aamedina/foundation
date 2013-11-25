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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31192 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31192 = (function (f,fn_handler,meta31193){
this.f = f;
this.fn_handler = fn_handler;
this.meta31193 = meta31193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31192.cljs$lang$type = true;
cljs.core.async.t31192.cljs$lang$ctorStr = "cljs.core.async/t31192";
cljs.core.async.t31192.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31192");
});
cljs.core.async.t31192.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31194){var self__ = this;
var _31194__$1 = this;return self__.meta31193;
});
cljs.core.async.t31192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31194,meta31193__$1){var self__ = this;
var _31194__$1 = this;return (new cljs.core.async.t31192(self__.f,self__.fn_handler,meta31193__$1));
});
cljs.core.async.__GT_t31192 = (function __GT_t31192(f__$1,fn_handler__$1,meta31193){return (new cljs.core.async.t31192(f__$1,fn_handler__$1,meta31193));
});
}
return (new cljs.core.async.t31192(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31196 = buff;if(G__31196)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__31196.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31196.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31196);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31196);
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
{var val_31197 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31197);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31197);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___31198 = n;var x_31199 = 0;while(true){
if((x_31199 < n__7112__auto___31198))
{(a[x_31199] = 0);
{
var G__31200 = (x_31199 + 1);
x_31199 = G__31200;
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
var G__31201 = (i + 1);
i = G__31201;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31205 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31205 = (function (flag,alt_flag,meta31206){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31206 = meta31206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31205.cljs$lang$type = true;
cljs.core.async.t31205.cljs$lang$ctorStr = "cljs.core.async/t31205";
cljs.core.async.t31205.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31205");
});
cljs.core.async.t31205.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31207){var self__ = this;
var _31207__$1 = this;return self__.meta31206;
});
cljs.core.async.t31205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31207,meta31206__$1){var self__ = this;
var _31207__$1 = this;return (new cljs.core.async.t31205(self__.flag,self__.alt_flag,meta31206__$1));
});
cljs.core.async.__GT_t31205 = (function __GT_t31205(flag__$1,alt_flag__$1,meta31206){return (new cljs.core.async.t31205(flag__$1,alt_flag__$1,meta31206));
});
}
return (new cljs.core.async.t31205(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31211 = (function (cb,flag,alt_handler,meta31212){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31212 = meta31212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31211.cljs$lang$type = true;
cljs.core.async.t31211.cljs$lang$ctorStr = "cljs.core.async/t31211";
cljs.core.async.t31211.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31211");
});
cljs.core.async.t31211.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31213){var self__ = this;
var _31213__$1 = this;return self__.meta31212;
});
cljs.core.async.t31211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31213,meta31212__$1){var self__ = this;
var _31213__$1 = this;return (new cljs.core.async.t31211(self__.cb,self__.flag,self__.alt_handler,meta31212__$1));
});
cljs.core.async.__GT_t31211 = (function __GT_t31211(cb__$1,flag__$1,alt_handler__$1,meta31212){return (new cljs.core.async.t31211(cb__$1,flag__$1,alt_handler__$1,meta31212));
});
}
return (new cljs.core.async.t31211(cb,flag,alt_handler,null));
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
return (function (p1__31214_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31214_SHARP_,port], null));
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
var G__31215 = (i + 1);
i = G__31215;
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
var alts_BANG___delegate = function (ports,p__31216){var map__31218 = p__31216;var map__31218__$1 = ((cljs.core.seq_QMARK_.call(null,map__31218))?cljs.core.apply.call(null,cljs.core.hash_map,map__31218):map__31218);var opts = map__31218__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31216 = null;if (arguments.length > 1) {
  p__31216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31216);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31219){
var ports = cljs.core.first(arglist__31219);
var p__31216 = cljs.core.rest(arglist__31219);
return alts_BANG___delegate(ports,p__31216);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31227 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31227 = (function (ch,f,map_LT_,meta31228){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31228 = meta31228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31227.cljs$lang$type = true;
cljs.core.async.t31227.cljs$lang$ctorStr = "cljs.core.async/t31227";
cljs.core.async.t31227.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31227");
});
cljs.core.async.t31227.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31227.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31227.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31227.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31230 = (function (fn1,_,meta31228,ch,f,map_LT_,meta31231){
this.fn1 = fn1;
this._ = _;
this.meta31228 = meta31228;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31230.cljs$lang$type = true;
cljs.core.async.t31230.cljs$lang$ctorStr = "cljs.core.async/t31230";
cljs.core.async.t31230.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31230");
});
cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31220_SHARP_){return f1.call(null,(((p1__31220_SHARP_ == null))?null:self__.f.call(null,p1__31220_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31232){var self__ = this;
var _31232__$1 = this;return self__.meta31231;
});
cljs.core.async.t31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31232,meta31231__$1){var self__ = this;
var _31232__$1 = this;return (new cljs.core.async.t31230(self__.fn1,self__._,self__.meta31228,self__.ch,self__.f,self__.map_LT_,meta31231__$1));
});
cljs.core.async.__GT_t31230 = (function __GT_t31230(fn1__$1,___$2,meta31228__$1,ch__$2,f__$2,map_LT___$2,meta31231){return (new cljs.core.async.t31230(fn1__$1,___$2,meta31228__$1,ch__$2,f__$2,map_LT___$2,meta31231));
});
}
return (new cljs.core.async.t31230(fn1,___$1,self__.meta31228,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31227.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31227.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31229){var self__ = this;
var _31229__$1 = this;return self__.meta31228;
});
cljs.core.async.t31227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31229,meta31228__$1){var self__ = this;
var _31229__$1 = this;return (new cljs.core.async.t31227(self__.ch,self__.f,self__.map_LT_,meta31228__$1));
});
cljs.core.async.__GT_t31227 = (function __GT_t31227(ch__$1,f__$1,map_LT___$1,meta31228){return (new cljs.core.async.t31227(ch__$1,f__$1,map_LT___$1,meta31228));
});
}
return (new cljs.core.async.t31227(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31236 = (function (ch,f,map_GT_,meta31237){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31237 = meta31237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31236.cljs$lang$type = true;
cljs.core.async.t31236.cljs$lang$ctorStr = "cljs.core.async/t31236";
cljs.core.async.t31236.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31236");
});
cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31238){var self__ = this;
var _31238__$1 = this;return self__.meta31237;
});
cljs.core.async.t31236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31238,meta31237__$1){var self__ = this;
var _31238__$1 = this;return (new cljs.core.async.t31236(self__.ch,self__.f,self__.map_GT_,meta31237__$1));
});
cljs.core.async.__GT_t31236 = (function __GT_t31236(ch__$1,f__$1,map_GT___$1,meta31237){return (new cljs.core.async.t31236(ch__$1,f__$1,map_GT___$1,meta31237));
});
}
return (new cljs.core.async.t31236(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31242 = (function (ch,p,filter_GT_,meta31243){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31243 = meta31243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31242.cljs$lang$type = true;
cljs.core.async.t31242.cljs$lang$ctorStr = "cljs.core.async/t31242";
cljs.core.async.t31242.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t31242");
});
cljs.core.async.t31242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31242.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31244){var self__ = this;
var _31244__$1 = this;return self__.meta31243;
});
cljs.core.async.t31242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31244,meta31243__$1){var self__ = this;
var _31244__$1 = this;return (new cljs.core.async.t31242(self__.ch,self__.p,self__.filter_GT_,meta31243__$1));
});
cljs.core.async.__GT_t31242 = (function __GT_t31242(ch__$1,p__$1,filter_GT___$1,meta31243){return (new cljs.core.async.t31242(ch__$1,p__$1,filter_GT___$1,meta31243));
});
}
return (new cljs.core.async.t31242(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___31327 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_31306){var state_val_31307 = (state_31306[1]);if((state_val_31307 === 1))
{var state_31306__$1 = state_31306;var statearr_31308_31328 = state_31306__$1;(statearr_31308_31328[2] = null);
(statearr_31308_31328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 2))
{var state_31306__$1 = state_31306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31306__$1,4,ch);
} else
{if((state_val_31307 === 3))
{var inst_31304 = (state_31306[2]);var state_31306__$1 = state_31306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31306__$1,inst_31304);
} else
{if((state_val_31307 === 4))
{var inst_31288 = (state_31306[7]);var inst_31288__$1 = (state_31306[2]);var inst_31289 = (inst_31288__$1 == null);var state_31306__$1 = (function (){var statearr_31309 = state_31306;(statearr_31309[7] = inst_31288__$1);
return statearr_31309;
})();if(cljs.core.truth_(inst_31289))
{var statearr_31310_31329 = state_31306__$1;(statearr_31310_31329[1] = 5);
} else
{var statearr_31311_31330 = state_31306__$1;(statearr_31311_31330[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 5))
{var inst_31291 = cljs.core.async.close_BANG_.call(null,out);var state_31306__$1 = state_31306;var statearr_31312_31331 = state_31306__$1;(statearr_31312_31331[2] = inst_31291);
(statearr_31312_31331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 6))
{var inst_31288 = (state_31306[7]);var inst_31293 = p.call(null,inst_31288);var state_31306__$1 = state_31306;if(cljs.core.truth_(inst_31293))
{var statearr_31313_31332 = state_31306__$1;(statearr_31313_31332[1] = 8);
} else
{var statearr_31314_31333 = state_31306__$1;(statearr_31314_31333[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 7))
{var inst_31302 = (state_31306[2]);var state_31306__$1 = state_31306;var statearr_31315_31334 = state_31306__$1;(statearr_31315_31334[2] = inst_31302);
(statearr_31315_31334[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 8))
{var inst_31288 = (state_31306[7]);var state_31306__$1 = state_31306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31306__$1,11,out,inst_31288);
} else
{if((state_val_31307 === 9))
{var state_31306__$1 = state_31306;var statearr_31316_31335 = state_31306__$1;(statearr_31316_31335[2] = null);
(statearr_31316_31335[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 10))
{var inst_31299 = (state_31306[2]);var state_31306__$1 = (function (){var statearr_31317 = state_31306;(statearr_31317[8] = inst_31299);
return statearr_31317;
})();var statearr_31318_31336 = state_31306__$1;(statearr_31318_31336[2] = null);
(statearr_31318_31336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31307 === 11))
{var inst_31296 = (state_31306[2]);var state_31306__$1 = state_31306;var statearr_31319_31337 = state_31306__$1;(statearr_31319_31337[2] = inst_31296);
(statearr_31319_31337[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_31323 = (new Array(9));(statearr_31323[0] = state_machine__13310__auto__);
(statearr_31323[1] = 1);
return statearr_31323;
});
var state_machine__13310__auto____1 = (function (state_31306){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_31306);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e31324){if((e31324 instanceof Object))
{var ex__13313__auto__ = e31324;var statearr_31325_31338 = state_31306;(statearr_31325_31338[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31306);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31339 = state_31306;
state_31306 = G__31339;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_31306){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_31306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_31326 = f__13410__auto__.call(null);(statearr_31326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___31327);
return statearr_31326;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_31491){var state_val_31492 = (state_31491[1]);if((state_val_31492 === 1))
{var state_31491__$1 = state_31491;var statearr_31493_31530 = state_31491__$1;(statearr_31493_31530[2] = null);
(statearr_31493_31530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 2))
{var state_31491__$1 = state_31491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31491__$1,4,in$);
} else
{if((state_val_31492 === 3))
{var inst_31489 = (state_31491[2]);var state_31491__$1 = state_31491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31491__$1,inst_31489);
} else
{if((state_val_31492 === 4))
{var inst_31437 = (state_31491[7]);var inst_31437__$1 = (state_31491[2]);var inst_31438 = (inst_31437__$1 == null);var state_31491__$1 = (function (){var statearr_31494 = state_31491;(statearr_31494[7] = inst_31437__$1);
return statearr_31494;
})();if(cljs.core.truth_(inst_31438))
{var statearr_31495_31531 = state_31491__$1;(statearr_31495_31531[1] = 5);
} else
{var statearr_31496_31532 = state_31491__$1;(statearr_31496_31532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 5))
{var inst_31440 = cljs.core.async.close_BANG_.call(null,out);var state_31491__$1 = state_31491;var statearr_31497_31533 = state_31491__$1;(statearr_31497_31533[2] = inst_31440);
(statearr_31497_31533[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 6))
{var inst_31437 = (state_31491[7]);var inst_31442 = f.call(null,inst_31437);var inst_31447 = cljs.core.seq.call(null,inst_31442);var inst_31448 = inst_31447;var inst_31449 = null;var inst_31450 = 0;var inst_31451 = 0;var state_31491__$1 = (function (){var statearr_31498 = state_31491;(statearr_31498[8] = inst_31451);
(statearr_31498[9] = inst_31450);
(statearr_31498[10] = inst_31448);
(statearr_31498[11] = inst_31449);
return statearr_31498;
})();var statearr_31499_31534 = state_31491__$1;(statearr_31499_31534[2] = null);
(statearr_31499_31534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 7))
{var inst_31487 = (state_31491[2]);var state_31491__$1 = state_31491;var statearr_31500_31535 = state_31491__$1;(statearr_31500_31535[2] = inst_31487);
(statearr_31500_31535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 8))
{var inst_31451 = (state_31491[8]);var inst_31450 = (state_31491[9]);var inst_31453 = (inst_31451 < inst_31450);var inst_31454 = inst_31453;var state_31491__$1 = state_31491;if(cljs.core.truth_(inst_31454))
{var statearr_31501_31536 = state_31491__$1;(statearr_31501_31536[1] = 10);
} else
{var statearr_31502_31537 = state_31491__$1;(statearr_31502_31537[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 9))
{var inst_31484 = (state_31491[2]);var state_31491__$1 = (function (){var statearr_31503 = state_31491;(statearr_31503[12] = inst_31484);
return statearr_31503;
})();var statearr_31504_31538 = state_31491__$1;(statearr_31504_31538[2] = null);
(statearr_31504_31538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 10))
{var inst_31451 = (state_31491[8]);var inst_31449 = (state_31491[11]);var inst_31456 = cljs.core._nth.call(null,inst_31449,inst_31451);var state_31491__$1 = state_31491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31491__$1,13,out,inst_31456);
} else
{if((state_val_31492 === 11))
{var inst_31462 = (state_31491[13]);var inst_31448 = (state_31491[10]);var inst_31462__$1 = cljs.core.seq.call(null,inst_31448);var state_31491__$1 = (function (){var statearr_31508 = state_31491;(statearr_31508[13] = inst_31462__$1);
return statearr_31508;
})();if(inst_31462__$1)
{var statearr_31509_31539 = state_31491__$1;(statearr_31509_31539[1] = 14);
} else
{var statearr_31510_31540 = state_31491__$1;(statearr_31510_31540[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 12))
{var inst_31482 = (state_31491[2]);var state_31491__$1 = state_31491;var statearr_31511_31541 = state_31491__$1;(statearr_31511_31541[2] = inst_31482);
(statearr_31511_31541[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 13))
{var inst_31451 = (state_31491[8]);var inst_31450 = (state_31491[9]);var inst_31448 = (state_31491[10]);var inst_31449 = (state_31491[11]);var inst_31458 = (state_31491[2]);var inst_31459 = (inst_31451 + 1);var tmp31505 = inst_31450;var tmp31506 = inst_31448;var tmp31507 = inst_31449;var inst_31448__$1 = tmp31506;var inst_31449__$1 = tmp31507;var inst_31450__$1 = tmp31505;var inst_31451__$1 = inst_31459;var state_31491__$1 = (function (){var statearr_31512 = state_31491;(statearr_31512[8] = inst_31451__$1);
(statearr_31512[9] = inst_31450__$1);
(statearr_31512[10] = inst_31448__$1);
(statearr_31512[11] = inst_31449__$1);
(statearr_31512[14] = inst_31458);
return statearr_31512;
})();var statearr_31513_31542 = state_31491__$1;(statearr_31513_31542[2] = null);
(statearr_31513_31542[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 14))
{var inst_31462 = (state_31491[13]);var inst_31464 = cljs.core.chunked_seq_QMARK_.call(null,inst_31462);var state_31491__$1 = state_31491;if(inst_31464)
{var statearr_31514_31543 = state_31491__$1;(statearr_31514_31543[1] = 17);
} else
{var statearr_31515_31544 = state_31491__$1;(statearr_31515_31544[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 15))
{var state_31491__$1 = state_31491;var statearr_31516_31545 = state_31491__$1;(statearr_31516_31545[2] = null);
(statearr_31516_31545[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 16))
{var inst_31480 = (state_31491[2]);var state_31491__$1 = state_31491;var statearr_31517_31546 = state_31491__$1;(statearr_31517_31546[2] = inst_31480);
(statearr_31517_31546[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 17))
{var inst_31462 = (state_31491[13]);var inst_31466 = cljs.core.chunk_first.call(null,inst_31462);var inst_31467 = cljs.core.chunk_rest.call(null,inst_31462);var inst_31468 = cljs.core.count.call(null,inst_31466);var inst_31448 = inst_31467;var inst_31449 = inst_31466;var inst_31450 = inst_31468;var inst_31451 = 0;var state_31491__$1 = (function (){var statearr_31518 = state_31491;(statearr_31518[8] = inst_31451);
(statearr_31518[9] = inst_31450);
(statearr_31518[10] = inst_31448);
(statearr_31518[11] = inst_31449);
return statearr_31518;
})();var statearr_31519_31547 = state_31491__$1;(statearr_31519_31547[2] = null);
(statearr_31519_31547[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 18))
{var inst_31462 = (state_31491[13]);var inst_31471 = cljs.core.first.call(null,inst_31462);var state_31491__$1 = state_31491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31491__$1,20,out,inst_31471);
} else
{if((state_val_31492 === 19))
{var inst_31477 = (state_31491[2]);var state_31491__$1 = state_31491;var statearr_31520_31548 = state_31491__$1;(statearr_31520_31548[2] = inst_31477);
(statearr_31520_31548[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31492 === 20))
{var inst_31462 = (state_31491[13]);var inst_31473 = (state_31491[2]);var inst_31474 = cljs.core.next.call(null,inst_31462);var inst_31448 = inst_31474;var inst_31449 = null;var inst_31450 = 0;var inst_31451 = 0;var state_31491__$1 = (function (){var statearr_31521 = state_31491;(statearr_31521[8] = inst_31451);
(statearr_31521[9] = inst_31450);
(statearr_31521[10] = inst_31448);
(statearr_31521[11] = inst_31449);
(statearr_31521[15] = inst_31473);
return statearr_31521;
})();var statearr_31522_31549 = state_31491__$1;(statearr_31522_31549[2] = null);
(statearr_31522_31549[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_31526 = (new Array(16));(statearr_31526[0] = state_machine__13310__auto__);
(statearr_31526[1] = 1);
return statearr_31526;
});
var state_machine__13310__auto____1 = (function (state_31491){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_31491);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e31527){if((e31527 instanceof Object))
{var ex__13313__auto__ = e31527;var statearr_31528_31550 = state_31491;(statearr_31528_31550[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31551 = state_31491;
state_31491 = G__31551;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_31491){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_31491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_31529 = f__13410__auto__.call(null);(statearr_31529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_31529;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___31632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_31611){var state_val_31612 = (state_31611[1]);if((state_val_31612 === 1))
{var state_31611__$1 = state_31611;var statearr_31613_31633 = state_31611__$1;(statearr_31613_31633[2] = null);
(statearr_31613_31633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 2))
{var state_31611__$1 = state_31611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31611__$1,4,from);
} else
{if((state_val_31612 === 3))
{var inst_31609 = (state_31611[2]);var state_31611__$1 = state_31611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31611__$1,inst_31609);
} else
{if((state_val_31612 === 4))
{var inst_31594 = (state_31611[7]);var inst_31594__$1 = (state_31611[2]);var inst_31595 = (inst_31594__$1 == null);var state_31611__$1 = (function (){var statearr_31614 = state_31611;(statearr_31614[7] = inst_31594__$1);
return statearr_31614;
})();if(cljs.core.truth_(inst_31595))
{var statearr_31615_31634 = state_31611__$1;(statearr_31615_31634[1] = 5);
} else
{var statearr_31616_31635 = state_31611__$1;(statearr_31616_31635[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 5))
{var state_31611__$1 = state_31611;if(cljs.core.truth_(close_QMARK_))
{var statearr_31617_31636 = state_31611__$1;(statearr_31617_31636[1] = 8);
} else
{var statearr_31618_31637 = state_31611__$1;(statearr_31618_31637[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 6))
{var inst_31594 = (state_31611[7]);var state_31611__$1 = state_31611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31611__$1,11,to,inst_31594);
} else
{if((state_val_31612 === 7))
{var inst_31607 = (state_31611[2]);var state_31611__$1 = state_31611;var statearr_31619_31638 = state_31611__$1;(statearr_31619_31638[2] = inst_31607);
(statearr_31619_31638[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 8))
{var inst_31598 = cljs.core.async.close_BANG_.call(null,to);var state_31611__$1 = state_31611;var statearr_31620_31639 = state_31611__$1;(statearr_31620_31639[2] = inst_31598);
(statearr_31620_31639[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 9))
{var state_31611__$1 = state_31611;var statearr_31621_31640 = state_31611__$1;(statearr_31621_31640[2] = null);
(statearr_31621_31640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 10))
{var inst_31601 = (state_31611[2]);var state_31611__$1 = state_31611;var statearr_31622_31641 = state_31611__$1;(statearr_31622_31641[2] = inst_31601);
(statearr_31622_31641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31612 === 11))
{var inst_31604 = (state_31611[2]);var state_31611__$1 = (function (){var statearr_31623 = state_31611;(statearr_31623[8] = inst_31604);
return statearr_31623;
})();var statearr_31624_31642 = state_31611__$1;(statearr_31624_31642[2] = null);
(statearr_31624_31642[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_31628 = (new Array(9));(statearr_31628[0] = state_machine__13310__auto__);
(statearr_31628[1] = 1);
return statearr_31628;
});
var state_machine__13310__auto____1 = (function (state_31611){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_31611);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object))
{var ex__13313__auto__ = e31629;var statearr_31630_31643 = state_31611;(statearr_31630_31643[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31644 = state_31611;
state_31611 = G__31644;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_31611){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_31611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_31631 = f__13410__auto__.call(null);(statearr_31631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___31632);
return statearr_31631;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___31731 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_31709){var state_val_31710 = (state_31709[1]);if((state_val_31710 === 1))
{var state_31709__$1 = state_31709;var statearr_31711_31732 = state_31709__$1;(statearr_31711_31732[2] = null);
(statearr_31711_31732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 2))
{var state_31709__$1 = state_31709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,4,ch);
} else
{if((state_val_31710 === 3))
{var inst_31707 = (state_31709[2]);var state_31709__$1 = state_31709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31709__$1,inst_31707);
} else
{if((state_val_31710 === 4))
{var inst_31690 = (state_31709[7]);var inst_31690__$1 = (state_31709[2]);var inst_31691 = (inst_31690__$1 == null);var state_31709__$1 = (function (){var statearr_31712 = state_31709;(statearr_31712[7] = inst_31690__$1);
return statearr_31712;
})();if(cljs.core.truth_(inst_31691))
{var statearr_31713_31733 = state_31709__$1;(statearr_31713_31733[1] = 5);
} else
{var statearr_31714_31734 = state_31709__$1;(statearr_31714_31734[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 5))
{var inst_31693 = cljs.core.async.close_BANG_.call(null,tc);var inst_31694 = cljs.core.async.close_BANG_.call(null,fc);var state_31709__$1 = (function (){var statearr_31715 = state_31709;(statearr_31715[8] = inst_31693);
return statearr_31715;
})();var statearr_31716_31735 = state_31709__$1;(statearr_31716_31735[2] = inst_31694);
(statearr_31716_31735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 6))
{var inst_31690 = (state_31709[7]);var inst_31696 = p.call(null,inst_31690);var state_31709__$1 = state_31709;if(cljs.core.truth_(inst_31696))
{var statearr_31717_31736 = state_31709__$1;(statearr_31717_31736[1] = 9);
} else
{var statearr_31718_31737 = state_31709__$1;(statearr_31718_31737[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 7))
{var inst_31705 = (state_31709[2]);var state_31709__$1 = state_31709;var statearr_31719_31738 = state_31709__$1;(statearr_31719_31738[2] = inst_31705);
(statearr_31719_31738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 8))
{var inst_31702 = (state_31709[2]);var state_31709__$1 = (function (){var statearr_31720 = state_31709;(statearr_31720[9] = inst_31702);
return statearr_31720;
})();var statearr_31721_31739 = state_31709__$1;(statearr_31721_31739[2] = null);
(statearr_31721_31739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 9))
{var state_31709__$1 = state_31709;var statearr_31722_31740 = state_31709__$1;(statearr_31722_31740[2] = tc);
(statearr_31722_31740[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 10))
{var state_31709__$1 = state_31709;var statearr_31723_31741 = state_31709__$1;(statearr_31723_31741[2] = fc);
(statearr_31723_31741[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31710 === 11))
{var inst_31690 = (state_31709[7]);var inst_31700 = (state_31709[2]);var state_31709__$1 = state_31709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31709__$1,8,inst_31700,inst_31690);
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
var state_machine__13310__auto____0 = (function (){var statearr_31727 = (new Array(10));(statearr_31727[0] = state_machine__13310__auto__);
(statearr_31727[1] = 1);
return statearr_31727;
});
var state_machine__13310__auto____1 = (function (state_31709){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_31709);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e31728){if((e31728 instanceof Object))
{var ex__13313__auto__ = e31728;var statearr_31729_31742 = state_31709;(statearr_31729_31742[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31743 = state_31709;
state_31709 = G__31743;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_31730 = f__13410__auto__.call(null);(statearr_31730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___31731);
return statearr_31730;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_31790){var state_val_31791 = (state_31790[1]);if((state_val_31791 === 7))
{var inst_31786 = (state_31790[2]);var state_31790__$1 = state_31790;var statearr_31792_31808 = state_31790__$1;(statearr_31792_31808[2] = inst_31786);
(statearr_31792_31808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31791 === 6))
{var inst_31776 = (state_31790[7]);var inst_31779 = (state_31790[8]);var inst_31783 = f.call(null,inst_31776,inst_31779);var inst_31776__$1 = inst_31783;var state_31790__$1 = (function (){var statearr_31793 = state_31790;(statearr_31793[7] = inst_31776__$1);
return statearr_31793;
})();var statearr_31794_31809 = state_31790__$1;(statearr_31794_31809[2] = null);
(statearr_31794_31809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31791 === 5))
{var inst_31776 = (state_31790[7]);var state_31790__$1 = state_31790;var statearr_31795_31810 = state_31790__$1;(statearr_31795_31810[2] = inst_31776);
(statearr_31795_31810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31791 === 4))
{var inst_31779 = (state_31790[8]);var inst_31779__$1 = (state_31790[2]);var inst_31780 = (inst_31779__$1 == null);var state_31790__$1 = (function (){var statearr_31796 = state_31790;(statearr_31796[8] = inst_31779__$1);
return statearr_31796;
})();if(cljs.core.truth_(inst_31780))
{var statearr_31797_31811 = state_31790__$1;(statearr_31797_31811[1] = 5);
} else
{var statearr_31798_31812 = state_31790__$1;(statearr_31798_31812[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31791 === 3))
{var inst_31788 = (state_31790[2]);var state_31790__$1 = state_31790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31790__$1,inst_31788);
} else
{if((state_val_31791 === 2))
{var state_31790__$1 = state_31790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31790__$1,4,ch);
} else
{if((state_val_31791 === 1))
{var inst_31776 = init;var state_31790__$1 = (function (){var statearr_31799 = state_31790;(statearr_31799[7] = inst_31776);
return statearr_31799;
})();var statearr_31800_31813 = state_31790__$1;(statearr_31800_31813[2] = null);
(statearr_31800_31813[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_31804 = (new Array(9));(statearr_31804[0] = state_machine__13310__auto__);
(statearr_31804[1] = 1);
return statearr_31804;
});
var state_machine__13310__auto____1 = (function (state_31790){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_31790);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e31805){if((e31805 instanceof Object))
{var ex__13313__auto__ = e31805;var statearr_31806_31814 = state_31790;(statearr_31806_31814[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31790);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31815 = state_31790;
state_31790 = G__31815;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_31790){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_31790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_31807 = f__13410__auto__.call(null);(statearr_31807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_31807;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_31877){var state_val_31878 = (state_31877[1]);if((state_val_31878 === 1))
{var inst_31857 = cljs.core.seq.call(null,coll);var inst_31858 = inst_31857;var state_31877__$1 = (function (){var statearr_31879 = state_31877;(statearr_31879[7] = inst_31858);
return statearr_31879;
})();var statearr_31880_31898 = state_31877__$1;(statearr_31880_31898[2] = null);
(statearr_31880_31898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 2))
{var inst_31858 = (state_31877[7]);var state_31877__$1 = state_31877;if(cljs.core.truth_(inst_31858))
{var statearr_31881_31899 = state_31877__$1;(statearr_31881_31899[1] = 4);
} else
{var statearr_31882_31900 = state_31877__$1;(statearr_31882_31900[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 3))
{var inst_31875 = (state_31877[2]);var state_31877__$1 = state_31877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31877__$1,inst_31875);
} else
{if((state_val_31878 === 4))
{var inst_31858 = (state_31877[7]);var inst_31861 = cljs.core.first.call(null,inst_31858);var state_31877__$1 = state_31877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31877__$1,7,ch,inst_31861);
} else
{if((state_val_31878 === 5))
{var state_31877__$1 = state_31877;if(cljs.core.truth_(close_QMARK_))
{var statearr_31883_31901 = state_31877__$1;(statearr_31883_31901[1] = 8);
} else
{var statearr_31884_31902 = state_31877__$1;(statearr_31884_31902[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 6))
{var inst_31873 = (state_31877[2]);var state_31877__$1 = state_31877;var statearr_31885_31903 = state_31877__$1;(statearr_31885_31903[2] = inst_31873);
(statearr_31885_31903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 7))
{var inst_31858 = (state_31877[7]);var inst_31863 = (state_31877[2]);var inst_31864 = cljs.core.next.call(null,inst_31858);var inst_31858__$1 = inst_31864;var state_31877__$1 = (function (){var statearr_31886 = state_31877;(statearr_31886[8] = inst_31863);
(statearr_31886[7] = inst_31858__$1);
return statearr_31886;
})();var statearr_31887_31904 = state_31877__$1;(statearr_31887_31904[2] = null);
(statearr_31887_31904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 8))
{var inst_31868 = cljs.core.async.close_BANG_.call(null,ch);var state_31877__$1 = state_31877;var statearr_31888_31905 = state_31877__$1;(statearr_31888_31905[2] = inst_31868);
(statearr_31888_31905[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 9))
{var state_31877__$1 = state_31877;var statearr_31889_31906 = state_31877__$1;(statearr_31889_31906[2] = null);
(statearr_31889_31906[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31878 === 10))
{var inst_31871 = (state_31877[2]);var state_31877__$1 = state_31877;var statearr_31890_31907 = state_31877__$1;(statearr_31890_31907[2] = inst_31871);
(statearr_31890_31907[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_31894 = (new Array(9));(statearr_31894[0] = state_machine__13310__auto__);
(statearr_31894[1] = 1);
return statearr_31894;
});
var state_machine__13310__auto____1 = (function (state_31877){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_31877);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e31895){if((e31895 instanceof Object))
{var ex__13313__auto__ = e31895;var statearr_31896_31908 = state_31877;(statearr_31896_31908[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31877);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31909 = state_31877;
state_31877 = G__31909;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_31877){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_31877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_31897 = f__13410__auto__.call(null);(statearr_31897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_31897;
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
cljs.core.async.Mux = (function (){var obj31911 = {};return obj31911;
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
cljs.core.async.Mult = (function (){var obj31913 = {};return obj31913;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32128 = (function (cs,ch,mult,meta32129){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32129 = meta32129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32128.cljs$lang$type = true;
cljs.core.async.t32128.cljs$lang$ctorStr = "cljs.core.async/t32128";
cljs.core.async.t32128.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t32128");
});})(cs))
;
cljs.core.async.t32128.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32128.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32128.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32128.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32128.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32130){var self__ = this;
var _32130__$1 = this;return self__.meta32129;
});})(cs))
;
cljs.core.async.t32128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32130,meta32129__$1){var self__ = this;
var _32130__$1 = this;return (new cljs.core.async.t32128(self__.cs,self__.ch,self__.mult,meta32129__$1));
});})(cs))
;
cljs.core.async.__GT_t32128 = ((function (cs){
return (function __GT_t32128(cs__$1,ch__$1,mult__$1,meta32129){return (new cljs.core.async.t32128(cs__$1,ch__$1,mult__$1,meta32129));
});})(cs))
;
}
return (new cljs.core.async.t32128(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___32342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_32260){var state_val_32261 = (state_32260[1]);if((state_val_32261 === 32))
{var inst_32209 = (state_32260[7]);var inst_32133 = (state_32260[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32260,31,Object,null,30);var inst_32216 = cljs.core.async.put_BANG_.call(null,inst_32209,inst_32133,done);var state_32260__$1 = state_32260;var statearr_32262_32343 = state_32260__$1;(statearr_32262_32343[2] = inst_32216);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 1))
{var state_32260__$1 = state_32260;var statearr_32263_32344 = state_32260__$1;(statearr_32263_32344[2] = null);
(statearr_32263_32344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 33))
{var inst_32222 = (state_32260[9]);var inst_32224 = cljs.core.chunked_seq_QMARK_.call(null,inst_32222);var state_32260__$1 = state_32260;if(inst_32224)
{var statearr_32264_32345 = state_32260__$1;(statearr_32264_32345[1] = 36);
} else
{var statearr_32265_32346 = state_32260__$1;(statearr_32265_32346[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 2))
{var state_32260__$1 = state_32260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32260__$1,4,ch);
} else
{if((state_val_32261 === 34))
{var state_32260__$1 = state_32260;var statearr_32266_32347 = state_32260__$1;(statearr_32266_32347[2] = null);
(statearr_32266_32347[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 3))
{var inst_32258 = (state_32260[2]);var state_32260__$1 = state_32260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32260__$1,inst_32258);
} else
{if((state_val_32261 === 35))
{var inst_32247 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32267_32348 = state_32260__$1;(statearr_32267_32348[2] = inst_32247);
(statearr_32267_32348[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 4))
{var inst_32133 = (state_32260[8]);var inst_32133__$1 = (state_32260[2]);var inst_32134 = (inst_32133__$1 == null);var state_32260__$1 = (function (){var statearr_32268 = state_32260;(statearr_32268[8] = inst_32133__$1);
return statearr_32268;
})();if(cljs.core.truth_(inst_32134))
{var statearr_32269_32349 = state_32260__$1;(statearr_32269_32349[1] = 5);
} else
{var statearr_32270_32350 = state_32260__$1;(statearr_32270_32350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 36))
{var inst_32222 = (state_32260[9]);var inst_32226 = cljs.core.chunk_first.call(null,inst_32222);var inst_32227 = cljs.core.chunk_rest.call(null,inst_32222);var inst_32228 = cljs.core.count.call(null,inst_32226);var inst_32201 = inst_32227;var inst_32202 = inst_32226;var inst_32203 = inst_32228;var inst_32204 = 0;var state_32260__$1 = (function (){var statearr_32271 = state_32260;(statearr_32271[10] = inst_32202);
(statearr_32271[11] = inst_32203);
(statearr_32271[12] = inst_32204);
(statearr_32271[13] = inst_32201);
return statearr_32271;
})();var statearr_32272_32351 = state_32260__$1;(statearr_32272_32351[2] = null);
(statearr_32272_32351[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 5))
{var inst_32140 = cljs.core.deref.call(null,cs);var inst_32141 = cljs.core.seq.call(null,inst_32140);var inst_32142 = inst_32141;var inst_32143 = null;var inst_32144 = 0;var inst_32145 = 0;var state_32260__$1 = (function (){var statearr_32273 = state_32260;(statearr_32273[14] = inst_32142);
(statearr_32273[15] = inst_32145);
(statearr_32273[16] = inst_32144);
(statearr_32273[17] = inst_32143);
return statearr_32273;
})();var statearr_32274_32352 = state_32260__$1;(statearr_32274_32352[2] = null);
(statearr_32274_32352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 37))
{var inst_32222 = (state_32260[9]);var inst_32231 = cljs.core.first.call(null,inst_32222);var state_32260__$1 = (function (){var statearr_32275 = state_32260;(statearr_32275[18] = inst_32231);
return statearr_32275;
})();var statearr_32276_32353 = state_32260__$1;(statearr_32276_32353[2] = null);
(statearr_32276_32353[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 6))
{var inst_32192 = cljs.core.deref.call(null,cs);var inst_32193 = cljs.core.keys.call(null,inst_32192);var inst_32194 = cljs.core.count.call(null,inst_32193);var inst_32195 = cljs.core.reset_BANG_.call(null,dctr,inst_32194);var inst_32200 = cljs.core.seq.call(null,inst_32193);var inst_32201 = inst_32200;var inst_32202 = null;var inst_32203 = 0;var inst_32204 = 0;var state_32260__$1 = (function (){var statearr_32277 = state_32260;(statearr_32277[19] = inst_32195);
(statearr_32277[10] = inst_32202);
(statearr_32277[11] = inst_32203);
(statearr_32277[12] = inst_32204);
(statearr_32277[13] = inst_32201);
return statearr_32277;
})();var statearr_32278_32354 = state_32260__$1;(statearr_32278_32354[2] = null);
(statearr_32278_32354[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 38))
{var inst_32244 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32279_32355 = state_32260__$1;(statearr_32279_32355[2] = inst_32244);
(statearr_32279_32355[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 7))
{var inst_32256 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32280_32356 = state_32260__$1;(statearr_32280_32356[2] = inst_32256);
(statearr_32280_32356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 39))
{var inst_32222 = (state_32260[9]);var inst_32240 = (state_32260[2]);var inst_32241 = cljs.core.next.call(null,inst_32222);var inst_32201 = inst_32241;var inst_32202 = null;var inst_32203 = 0;var inst_32204 = 0;var state_32260__$1 = (function (){var statearr_32281 = state_32260;(statearr_32281[20] = inst_32240);
(statearr_32281[10] = inst_32202);
(statearr_32281[11] = inst_32203);
(statearr_32281[12] = inst_32204);
(statearr_32281[13] = inst_32201);
return statearr_32281;
})();var statearr_32282_32357 = state_32260__$1;(statearr_32282_32357[2] = null);
(statearr_32282_32357[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 8))
{var inst_32145 = (state_32260[15]);var inst_32144 = (state_32260[16]);var inst_32147 = (inst_32145 < inst_32144);var inst_32148 = inst_32147;var state_32260__$1 = state_32260;if(cljs.core.truth_(inst_32148))
{var statearr_32283_32358 = state_32260__$1;(statearr_32283_32358[1] = 10);
} else
{var statearr_32284_32359 = state_32260__$1;(statearr_32284_32359[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 40))
{var inst_32231 = (state_32260[18]);var inst_32232 = (state_32260[2]);var inst_32233 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32234 = cljs.core.async.untap_STAR_.call(null,m,inst_32231);var state_32260__$1 = (function (){var statearr_32285 = state_32260;(statearr_32285[21] = inst_32233);
(statearr_32285[22] = inst_32232);
return statearr_32285;
})();var statearr_32286_32360 = state_32260__$1;(statearr_32286_32360[2] = inst_32234);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 9))
{var inst_32190 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32287_32361 = state_32260__$1;(statearr_32287_32361[2] = inst_32190);
(statearr_32287_32361[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 41))
{var inst_32231 = (state_32260[18]);var inst_32133 = (state_32260[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32260,40,Object,null,39);var inst_32238 = cljs.core.async.put_BANG_.call(null,inst_32231,inst_32133,done);var state_32260__$1 = state_32260;var statearr_32288_32362 = state_32260__$1;(statearr_32288_32362[2] = inst_32238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 10))
{var inst_32145 = (state_32260[15]);var inst_32143 = (state_32260[17]);var inst_32151 = cljs.core._nth.call(null,inst_32143,inst_32145);var inst_32152 = cljs.core.nth.call(null,inst_32151,0,null);var inst_32153 = cljs.core.nth.call(null,inst_32151,1,null);var state_32260__$1 = (function (){var statearr_32289 = state_32260;(statearr_32289[23] = inst_32152);
return statearr_32289;
})();if(cljs.core.truth_(inst_32153))
{var statearr_32290_32363 = state_32260__$1;(statearr_32290_32363[1] = 13);
} else
{var statearr_32291_32364 = state_32260__$1;(statearr_32291_32364[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 42))
{var inst_32253 = (state_32260[2]);var state_32260__$1 = (function (){var statearr_32292 = state_32260;(statearr_32292[24] = inst_32253);
return statearr_32292;
})();var statearr_32293_32365 = state_32260__$1;(statearr_32293_32365[2] = null);
(statearr_32293_32365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 11))
{var inst_32142 = (state_32260[14]);var inst_32162 = (state_32260[25]);var inst_32162__$1 = cljs.core.seq.call(null,inst_32142);var state_32260__$1 = (function (){var statearr_32294 = state_32260;(statearr_32294[25] = inst_32162__$1);
return statearr_32294;
})();if(inst_32162__$1)
{var statearr_32295_32366 = state_32260__$1;(statearr_32295_32366[1] = 16);
} else
{var statearr_32296_32367 = state_32260__$1;(statearr_32296_32367[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 12))
{var inst_32188 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32297_32368 = state_32260__$1;(statearr_32297_32368[2] = inst_32188);
(statearr_32297_32368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 13))
{var inst_32152 = (state_32260[23]);var inst_32155 = cljs.core.async.close_BANG_.call(null,inst_32152);var state_32260__$1 = state_32260;var statearr_32301_32369 = state_32260__$1;(statearr_32301_32369[2] = inst_32155);
(statearr_32301_32369[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 14))
{var state_32260__$1 = state_32260;var statearr_32302_32370 = state_32260__$1;(statearr_32302_32370[2] = null);
(statearr_32302_32370[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 15))
{var inst_32142 = (state_32260[14]);var inst_32145 = (state_32260[15]);var inst_32144 = (state_32260[16]);var inst_32143 = (state_32260[17]);var inst_32158 = (state_32260[2]);var inst_32159 = (inst_32145 + 1);var tmp32298 = inst_32142;var tmp32299 = inst_32144;var tmp32300 = inst_32143;var inst_32142__$1 = tmp32298;var inst_32143__$1 = tmp32300;var inst_32144__$1 = tmp32299;var inst_32145__$1 = inst_32159;var state_32260__$1 = (function (){var statearr_32303 = state_32260;(statearr_32303[14] = inst_32142__$1);
(statearr_32303[15] = inst_32145__$1);
(statearr_32303[16] = inst_32144__$1);
(statearr_32303[17] = inst_32143__$1);
(statearr_32303[26] = inst_32158);
return statearr_32303;
})();var statearr_32304_32371 = state_32260__$1;(statearr_32304_32371[2] = null);
(statearr_32304_32371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 16))
{var inst_32162 = (state_32260[25]);var inst_32164 = cljs.core.chunked_seq_QMARK_.call(null,inst_32162);var state_32260__$1 = state_32260;if(inst_32164)
{var statearr_32305_32372 = state_32260__$1;(statearr_32305_32372[1] = 19);
} else
{var statearr_32306_32373 = state_32260__$1;(statearr_32306_32373[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 17))
{var state_32260__$1 = state_32260;var statearr_32307_32374 = state_32260__$1;(statearr_32307_32374[2] = null);
(statearr_32307_32374[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 18))
{var inst_32186 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32308_32375 = state_32260__$1;(statearr_32308_32375[2] = inst_32186);
(statearr_32308_32375[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 19))
{var inst_32162 = (state_32260[25]);var inst_32166 = cljs.core.chunk_first.call(null,inst_32162);var inst_32167 = cljs.core.chunk_rest.call(null,inst_32162);var inst_32168 = cljs.core.count.call(null,inst_32166);var inst_32142 = inst_32167;var inst_32143 = inst_32166;var inst_32144 = inst_32168;var inst_32145 = 0;var state_32260__$1 = (function (){var statearr_32309 = state_32260;(statearr_32309[14] = inst_32142);
(statearr_32309[15] = inst_32145);
(statearr_32309[16] = inst_32144);
(statearr_32309[17] = inst_32143);
return statearr_32309;
})();var statearr_32310_32376 = state_32260__$1;(statearr_32310_32376[2] = null);
(statearr_32310_32376[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 20))
{var inst_32162 = (state_32260[25]);var inst_32172 = cljs.core.first.call(null,inst_32162);var inst_32173 = cljs.core.nth.call(null,inst_32172,0,null);var inst_32174 = cljs.core.nth.call(null,inst_32172,1,null);var state_32260__$1 = (function (){var statearr_32311 = state_32260;(statearr_32311[27] = inst_32173);
return statearr_32311;
})();if(cljs.core.truth_(inst_32174))
{var statearr_32312_32377 = state_32260__$1;(statearr_32312_32377[1] = 22);
} else
{var statearr_32313_32378 = state_32260__$1;(statearr_32313_32378[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 21))
{var inst_32183 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32314_32379 = state_32260__$1;(statearr_32314_32379[2] = inst_32183);
(statearr_32314_32379[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 22))
{var inst_32173 = (state_32260[27]);var inst_32176 = cljs.core.async.close_BANG_.call(null,inst_32173);var state_32260__$1 = state_32260;var statearr_32315_32380 = state_32260__$1;(statearr_32315_32380[2] = inst_32176);
(statearr_32315_32380[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 23))
{var state_32260__$1 = state_32260;var statearr_32316_32381 = state_32260__$1;(statearr_32316_32381[2] = null);
(statearr_32316_32381[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 24))
{var inst_32162 = (state_32260[25]);var inst_32179 = (state_32260[2]);var inst_32180 = cljs.core.next.call(null,inst_32162);var inst_32142 = inst_32180;var inst_32143 = null;var inst_32144 = 0;var inst_32145 = 0;var state_32260__$1 = (function (){var statearr_32317 = state_32260;(statearr_32317[14] = inst_32142);
(statearr_32317[15] = inst_32145);
(statearr_32317[16] = inst_32144);
(statearr_32317[17] = inst_32143);
(statearr_32317[28] = inst_32179);
return statearr_32317;
})();var statearr_32318_32382 = state_32260__$1;(statearr_32318_32382[2] = null);
(statearr_32318_32382[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 25))
{var inst_32203 = (state_32260[11]);var inst_32204 = (state_32260[12]);var inst_32206 = (inst_32204 < inst_32203);var inst_32207 = inst_32206;var state_32260__$1 = state_32260;if(cljs.core.truth_(inst_32207))
{var statearr_32319_32383 = state_32260__$1;(statearr_32319_32383[1] = 27);
} else
{var statearr_32320_32384 = state_32260__$1;(statearr_32320_32384[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 26))
{var inst_32251 = (state_32260[2]);var state_32260__$1 = (function (){var statearr_32321 = state_32260;(statearr_32321[29] = inst_32251);
return statearr_32321;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32260__$1,42,dchan);
} else
{if((state_val_32261 === 27))
{var inst_32202 = (state_32260[10]);var inst_32204 = (state_32260[12]);var inst_32209 = cljs.core._nth.call(null,inst_32202,inst_32204);var state_32260__$1 = (function (){var statearr_32322 = state_32260;(statearr_32322[7] = inst_32209);
return statearr_32322;
})();var statearr_32323_32385 = state_32260__$1;(statearr_32323_32385[2] = null);
(statearr_32323_32385[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 28))
{var inst_32222 = (state_32260[9]);var inst_32201 = (state_32260[13]);var inst_32222__$1 = cljs.core.seq.call(null,inst_32201);var state_32260__$1 = (function (){var statearr_32327 = state_32260;(statearr_32327[9] = inst_32222__$1);
return statearr_32327;
})();if(inst_32222__$1)
{var statearr_32328_32386 = state_32260__$1;(statearr_32328_32386[1] = 33);
} else
{var statearr_32329_32387 = state_32260__$1;(statearr_32329_32387[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 29))
{var inst_32249 = (state_32260[2]);var state_32260__$1 = state_32260;var statearr_32330_32388 = state_32260__$1;(statearr_32330_32388[2] = inst_32249);
(statearr_32330_32388[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 30))
{var inst_32202 = (state_32260[10]);var inst_32203 = (state_32260[11]);var inst_32204 = (state_32260[12]);var inst_32201 = (state_32260[13]);var inst_32218 = (state_32260[2]);var inst_32219 = (inst_32204 + 1);var tmp32324 = inst_32202;var tmp32325 = inst_32203;var tmp32326 = inst_32201;var inst_32201__$1 = tmp32326;var inst_32202__$1 = tmp32324;var inst_32203__$1 = tmp32325;var inst_32204__$1 = inst_32219;var state_32260__$1 = (function (){var statearr_32331 = state_32260;(statearr_32331[30] = inst_32218);
(statearr_32331[10] = inst_32202__$1);
(statearr_32331[11] = inst_32203__$1);
(statearr_32331[12] = inst_32204__$1);
(statearr_32331[13] = inst_32201__$1);
return statearr_32331;
})();var statearr_32332_32389 = state_32260__$1;(statearr_32332_32389[2] = null);
(statearr_32332_32389[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32261 === 31))
{var inst_32209 = (state_32260[7]);var inst_32210 = (state_32260[2]);var inst_32211 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32212 = cljs.core.async.untap_STAR_.call(null,m,inst_32209);var state_32260__$1 = (function (){var statearr_32333 = state_32260;(statearr_32333[31] = inst_32211);
(statearr_32333[32] = inst_32210);
return statearr_32333;
})();var statearr_32334_32390 = state_32260__$1;(statearr_32334_32390[2] = inst_32212);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_32338 = (new Array(33));(statearr_32338[0] = state_machine__13310__auto__);
(statearr_32338[1] = 1);
return statearr_32338;
});
var state_machine__13310__auto____1 = (function (state_32260){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_32260);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e32339){if((e32339 instanceof Object))
{var ex__13313__auto__ = e32339;var statearr_32340_32391 = state_32260;(statearr_32340_32391[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32392 = state_32260;
state_32260 = G__32392;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_32260){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_32260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_32341 = f__13410__auto__.call(null);(statearr_32341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___32342);
return statearr_32341;
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
cljs.core.async.Mix = (function (){var obj32394 = {};return obj32394;
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
;var m = (function (){if(typeof cljs.core.async.t32504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32504 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32505){
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
this.meta32505 = meta32505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32504.cljs$lang$type = true;
cljs.core.async.t32504.cljs$lang$ctorStr = "cljs.core.async/t32504";
cljs.core.async.t32504.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t32504");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32504.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32506){var self__ = this;
var _32506__$1 = this;return self__.meta32505;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32506,meta32505__$1){var self__ = this;
var _32506__$1 = this;return (new cljs.core.async.t32504(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32505__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32504 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32504(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32505){return (new cljs.core.async.t32504(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32505));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32504(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___32613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_32571){var state_val_32572 = (state_32571[1]);if((state_val_32572 === 1))
{var inst_32510 = (state_32571[7]);var inst_32510__$1 = calc_state.call(null);var inst_32511 = cljs.core.seq_QMARK_.call(null,inst_32510__$1);var state_32571__$1 = (function (){var statearr_32573 = state_32571;(statearr_32573[7] = inst_32510__$1);
return statearr_32573;
})();if(inst_32511)
{var statearr_32574_32614 = state_32571__$1;(statearr_32574_32614[1] = 2);
} else
{var statearr_32575_32615 = state_32571__$1;(statearr_32575_32615[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 2))
{var inst_32510 = (state_32571[7]);var inst_32513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32510);var state_32571__$1 = state_32571;var statearr_32576_32616 = state_32571__$1;(statearr_32576_32616[2] = inst_32513);
(statearr_32576_32616[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 3))
{var inst_32510 = (state_32571[7]);var state_32571__$1 = state_32571;var statearr_32577_32617 = state_32571__$1;(statearr_32577_32617[2] = inst_32510);
(statearr_32577_32617[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 4))
{var inst_32510 = (state_32571[7]);var inst_32516 = (state_32571[2]);var inst_32517 = cljs.core.get.call(null,inst_32516,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32518 = cljs.core.get.call(null,inst_32516,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32519 = cljs.core.get.call(null,inst_32516,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32520 = inst_32510;var state_32571__$1 = (function (){var statearr_32578 = state_32571;(statearr_32578[8] = inst_32517);
(statearr_32578[9] = inst_32518);
(statearr_32578[10] = inst_32519);
(statearr_32578[11] = inst_32520);
return statearr_32578;
})();var statearr_32579_32618 = state_32571__$1;(statearr_32579_32618[2] = null);
(statearr_32579_32618[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 5))
{var inst_32520 = (state_32571[11]);var inst_32523 = cljs.core.seq_QMARK_.call(null,inst_32520);var state_32571__$1 = state_32571;if(inst_32523)
{var statearr_32580_32619 = state_32571__$1;(statearr_32580_32619[1] = 7);
} else
{var statearr_32581_32620 = state_32571__$1;(statearr_32581_32620[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 6))
{var inst_32569 = (state_32571[2]);var state_32571__$1 = state_32571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32571__$1,inst_32569);
} else
{if((state_val_32572 === 7))
{var inst_32520 = (state_32571[11]);var inst_32525 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32520);var state_32571__$1 = state_32571;var statearr_32582_32621 = state_32571__$1;(statearr_32582_32621[2] = inst_32525);
(statearr_32582_32621[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 8))
{var inst_32520 = (state_32571[11]);var state_32571__$1 = state_32571;var statearr_32583_32622 = state_32571__$1;(statearr_32583_32622[2] = inst_32520);
(statearr_32583_32622[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 9))
{var inst_32528 = (state_32571[12]);var inst_32528__$1 = (state_32571[2]);var inst_32529 = cljs.core.get.call(null,inst_32528__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32530 = cljs.core.get.call(null,inst_32528__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32531 = cljs.core.get.call(null,inst_32528__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32571__$1 = (function (){var statearr_32584 = state_32571;(statearr_32584[12] = inst_32528__$1);
(statearr_32584[13] = inst_32531);
(statearr_32584[14] = inst_32530);
return statearr_32584;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32571__$1,10,inst_32529);
} else
{if((state_val_32572 === 10))
{var inst_32535 = (state_32571[15]);var inst_32536 = (state_32571[16]);var inst_32534 = (state_32571[2]);var inst_32535__$1 = cljs.core.nth.call(null,inst_32534,0,null);var inst_32536__$1 = cljs.core.nth.call(null,inst_32534,1,null);var inst_32537 = (inst_32535__$1 == null);var inst_32538 = cljs.core._EQ_.call(null,inst_32536__$1,change);var inst_32539 = (inst_32537) || (inst_32538);var state_32571__$1 = (function (){var statearr_32585 = state_32571;(statearr_32585[15] = inst_32535__$1);
(statearr_32585[16] = inst_32536__$1);
return statearr_32585;
})();if(cljs.core.truth_(inst_32539))
{var statearr_32586_32623 = state_32571__$1;(statearr_32586_32623[1] = 11);
} else
{var statearr_32587_32624 = state_32571__$1;(statearr_32587_32624[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 11))
{var inst_32535 = (state_32571[15]);var inst_32541 = (inst_32535 == null);var state_32571__$1 = state_32571;if(cljs.core.truth_(inst_32541))
{var statearr_32588_32625 = state_32571__$1;(statearr_32588_32625[1] = 14);
} else
{var statearr_32589_32626 = state_32571__$1;(statearr_32589_32626[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 12))
{var inst_32550 = (state_32571[17]);var inst_32536 = (state_32571[16]);var inst_32531 = (state_32571[13]);var inst_32550__$1 = inst_32531.call(null,inst_32536);var state_32571__$1 = (function (){var statearr_32590 = state_32571;(statearr_32590[17] = inst_32550__$1);
return statearr_32590;
})();if(cljs.core.truth_(inst_32550__$1))
{var statearr_32591_32627 = state_32571__$1;(statearr_32591_32627[1] = 17);
} else
{var statearr_32592_32628 = state_32571__$1;(statearr_32592_32628[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 13))
{var inst_32567 = (state_32571[2]);var state_32571__$1 = state_32571;var statearr_32593_32629 = state_32571__$1;(statearr_32593_32629[2] = inst_32567);
(statearr_32593_32629[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 14))
{var inst_32536 = (state_32571[16]);var inst_32543 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32536);var state_32571__$1 = state_32571;var statearr_32594_32630 = state_32571__$1;(statearr_32594_32630[2] = inst_32543);
(statearr_32594_32630[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 15))
{var state_32571__$1 = state_32571;var statearr_32595_32631 = state_32571__$1;(statearr_32595_32631[2] = null);
(statearr_32595_32631[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 16))
{var inst_32546 = (state_32571[2]);var inst_32547 = calc_state.call(null);var inst_32520 = inst_32547;var state_32571__$1 = (function (){var statearr_32596 = state_32571;(statearr_32596[18] = inst_32546);
(statearr_32596[11] = inst_32520);
return statearr_32596;
})();var statearr_32597_32632 = state_32571__$1;(statearr_32597_32632[2] = null);
(statearr_32597_32632[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 17))
{var inst_32550 = (state_32571[17]);var state_32571__$1 = state_32571;var statearr_32598_32633 = state_32571__$1;(statearr_32598_32633[2] = inst_32550);
(statearr_32598_32633[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 18))
{var inst_32536 = (state_32571[16]);var inst_32531 = (state_32571[13]);var inst_32530 = (state_32571[14]);var inst_32553 = cljs.core.empty_QMARK_.call(null,inst_32531);var inst_32554 = inst_32530.call(null,inst_32536);var inst_32555 = cljs.core.not.call(null,inst_32554);var inst_32556 = (inst_32553) && (inst_32555);var state_32571__$1 = state_32571;var statearr_32599_32634 = state_32571__$1;(statearr_32599_32634[2] = inst_32556);
(statearr_32599_32634[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 19))
{var inst_32558 = (state_32571[2]);var state_32571__$1 = state_32571;if(cljs.core.truth_(inst_32558))
{var statearr_32600_32635 = state_32571__$1;(statearr_32600_32635[1] = 20);
} else
{var statearr_32601_32636 = state_32571__$1;(statearr_32601_32636[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 20))
{var inst_32535 = (state_32571[15]);var state_32571__$1 = state_32571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32571__$1,23,out,inst_32535);
} else
{if((state_val_32572 === 21))
{var state_32571__$1 = state_32571;var statearr_32602_32637 = state_32571__$1;(statearr_32602_32637[2] = null);
(statearr_32602_32637[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 22))
{var inst_32528 = (state_32571[12]);var inst_32564 = (state_32571[2]);var inst_32520 = inst_32528;var state_32571__$1 = (function (){var statearr_32603 = state_32571;(statearr_32603[11] = inst_32520);
(statearr_32603[19] = inst_32564);
return statearr_32603;
})();var statearr_32604_32638 = state_32571__$1;(statearr_32604_32638[2] = null);
(statearr_32604_32638[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32572 === 23))
{var inst_32561 = (state_32571[2]);var state_32571__$1 = state_32571;var statearr_32605_32639 = state_32571__$1;(statearr_32605_32639[2] = inst_32561);
(statearr_32605_32639[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_32609 = (new Array(20));(statearr_32609[0] = state_machine__13310__auto__);
(statearr_32609[1] = 1);
return statearr_32609;
});
var state_machine__13310__auto____1 = (function (state_32571){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_32571);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e32610){if((e32610 instanceof Object))
{var ex__13313__auto__ = e32610;var statearr_32611_32640 = state_32571;(statearr_32611_32640[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32641 = state_32571;
state_32571 = G__32641;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_32571){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_32571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_32612 = f__13410__auto__.call(null);(statearr_32612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___32613);
return statearr_32612;
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
cljs.core.async.Pub = (function (){var obj32643 = {};return obj32643;
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
return (function (p1__32644_SHARP_){if(cljs.core.truth_(p1__32644_SHARP_.call(null,topic)))
{return p1__32644_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32644_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32769 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32770){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32770 = meta32770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32769.cljs$lang$type = true;
cljs.core.async.t32769.cljs$lang$ctorStr = "cljs.core.async/t32769";
cljs.core.async.t32769.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t32769");
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32769.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32771){var self__ = this;
var _32771__$1 = this;return self__.meta32770;
});})(mults,ensure_mult))
;
cljs.core.async.t32769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32771,meta32770__$1){var self__ = this;
var _32771__$1 = this;return (new cljs.core.async.t32769(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32770__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32769 = ((function (mults,ensure_mult){
return (function __GT_t32769(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32770){return (new cljs.core.async.t32769(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32770));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32769(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___32893 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_32845){var state_val_32846 = (state_32845[1]);if((state_val_32846 === 1))
{var state_32845__$1 = state_32845;var statearr_32847_32894 = state_32845__$1;(statearr_32847_32894[2] = null);
(statearr_32847_32894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 2))
{var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32845__$1,4,ch);
} else
{if((state_val_32846 === 3))
{var inst_32843 = (state_32845[2]);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32845__$1,inst_32843);
} else
{if((state_val_32846 === 4))
{var inst_32774 = (state_32845[7]);var inst_32774__$1 = (state_32845[2]);var inst_32775 = (inst_32774__$1 == null);var state_32845__$1 = (function (){var statearr_32848 = state_32845;(statearr_32848[7] = inst_32774__$1);
return statearr_32848;
})();if(cljs.core.truth_(inst_32775))
{var statearr_32849_32895 = state_32845__$1;(statearr_32849_32895[1] = 5);
} else
{var statearr_32850_32896 = state_32845__$1;(statearr_32850_32896[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 5))
{var inst_32781 = cljs.core.deref.call(null,mults);var inst_32782 = cljs.core.vals.call(null,inst_32781);var inst_32783 = cljs.core.seq.call(null,inst_32782);var inst_32784 = inst_32783;var inst_32785 = null;var inst_32786 = 0;var inst_32787 = 0;var state_32845__$1 = (function (){var statearr_32851 = state_32845;(statearr_32851[8] = inst_32785);
(statearr_32851[9] = inst_32786);
(statearr_32851[10] = inst_32787);
(statearr_32851[11] = inst_32784);
return statearr_32851;
})();var statearr_32852_32897 = state_32845__$1;(statearr_32852_32897[2] = null);
(statearr_32852_32897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 6))
{var inst_32774 = (state_32845[7]);var inst_32822 = (state_32845[12]);var inst_32824 = (state_32845[13]);var inst_32822__$1 = topic_fn.call(null,inst_32774);var inst_32823 = cljs.core.deref.call(null,mults);var inst_32824__$1 = cljs.core.get.call(null,inst_32823,inst_32822__$1);var state_32845__$1 = (function (){var statearr_32853 = state_32845;(statearr_32853[12] = inst_32822__$1);
(statearr_32853[13] = inst_32824__$1);
return statearr_32853;
})();if(cljs.core.truth_(inst_32824__$1))
{var statearr_32854_32898 = state_32845__$1;(statearr_32854_32898[1] = 19);
} else
{var statearr_32855_32899 = state_32845__$1;(statearr_32855_32899[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 7))
{var inst_32841 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32856_32900 = state_32845__$1;(statearr_32856_32900[2] = inst_32841);
(statearr_32856_32900[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 8))
{var inst_32786 = (state_32845[9]);var inst_32787 = (state_32845[10]);var inst_32789 = (inst_32787 < inst_32786);var inst_32790 = inst_32789;var state_32845__$1 = state_32845;if(cljs.core.truth_(inst_32790))
{var statearr_32860_32901 = state_32845__$1;(statearr_32860_32901[1] = 10);
} else
{var statearr_32861_32902 = state_32845__$1;(statearr_32861_32902[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 9))
{var inst_32820 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32862_32903 = state_32845__$1;(statearr_32862_32903[2] = inst_32820);
(statearr_32862_32903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 10))
{var inst_32785 = (state_32845[8]);var inst_32786 = (state_32845[9]);var inst_32787 = (state_32845[10]);var inst_32784 = (state_32845[11]);var inst_32792 = cljs.core._nth.call(null,inst_32785,inst_32787);var inst_32793 = cljs.core.async.muxch_STAR_.call(null,inst_32792);var inst_32794 = cljs.core.async.close_BANG_.call(null,inst_32793);var inst_32795 = (inst_32787 + 1);var tmp32857 = inst_32785;var tmp32858 = inst_32786;var tmp32859 = inst_32784;var inst_32784__$1 = tmp32859;var inst_32785__$1 = tmp32857;var inst_32786__$1 = tmp32858;var inst_32787__$1 = inst_32795;var state_32845__$1 = (function (){var statearr_32863 = state_32845;(statearr_32863[8] = inst_32785__$1);
(statearr_32863[14] = inst_32794);
(statearr_32863[9] = inst_32786__$1);
(statearr_32863[10] = inst_32787__$1);
(statearr_32863[11] = inst_32784__$1);
return statearr_32863;
})();var statearr_32864_32904 = state_32845__$1;(statearr_32864_32904[2] = null);
(statearr_32864_32904[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 11))
{var inst_32784 = (state_32845[11]);var inst_32798 = (state_32845[15]);var inst_32798__$1 = cljs.core.seq.call(null,inst_32784);var state_32845__$1 = (function (){var statearr_32865 = state_32845;(statearr_32865[15] = inst_32798__$1);
return statearr_32865;
})();if(inst_32798__$1)
{var statearr_32866_32905 = state_32845__$1;(statearr_32866_32905[1] = 13);
} else
{var statearr_32867_32906 = state_32845__$1;(statearr_32867_32906[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 12))
{var inst_32818 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32868_32907 = state_32845__$1;(statearr_32868_32907[2] = inst_32818);
(statearr_32868_32907[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 13))
{var inst_32798 = (state_32845[15]);var inst_32800 = cljs.core.chunked_seq_QMARK_.call(null,inst_32798);var state_32845__$1 = state_32845;if(inst_32800)
{var statearr_32869_32908 = state_32845__$1;(statearr_32869_32908[1] = 16);
} else
{var statearr_32870_32909 = state_32845__$1;(statearr_32870_32909[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 14))
{var state_32845__$1 = state_32845;var statearr_32871_32910 = state_32845__$1;(statearr_32871_32910[2] = null);
(statearr_32871_32910[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 15))
{var inst_32816 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32872_32911 = state_32845__$1;(statearr_32872_32911[2] = inst_32816);
(statearr_32872_32911[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 16))
{var inst_32798 = (state_32845[15]);var inst_32802 = cljs.core.chunk_first.call(null,inst_32798);var inst_32803 = cljs.core.chunk_rest.call(null,inst_32798);var inst_32804 = cljs.core.count.call(null,inst_32802);var inst_32784 = inst_32803;var inst_32785 = inst_32802;var inst_32786 = inst_32804;var inst_32787 = 0;var state_32845__$1 = (function (){var statearr_32873 = state_32845;(statearr_32873[8] = inst_32785);
(statearr_32873[9] = inst_32786);
(statearr_32873[10] = inst_32787);
(statearr_32873[11] = inst_32784);
return statearr_32873;
})();var statearr_32874_32912 = state_32845__$1;(statearr_32874_32912[2] = null);
(statearr_32874_32912[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 17))
{var inst_32798 = (state_32845[15]);var inst_32807 = cljs.core.first.call(null,inst_32798);var inst_32808 = cljs.core.async.muxch_STAR_.call(null,inst_32807);var inst_32809 = cljs.core.async.close_BANG_.call(null,inst_32808);var inst_32810 = cljs.core.next.call(null,inst_32798);var inst_32784 = inst_32810;var inst_32785 = null;var inst_32786 = 0;var inst_32787 = 0;var state_32845__$1 = (function (){var statearr_32875 = state_32845;(statearr_32875[16] = inst_32809);
(statearr_32875[8] = inst_32785);
(statearr_32875[9] = inst_32786);
(statearr_32875[10] = inst_32787);
(statearr_32875[11] = inst_32784);
return statearr_32875;
})();var statearr_32876_32913 = state_32845__$1;(statearr_32876_32913[2] = null);
(statearr_32876_32913[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 18))
{var inst_32813 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32877_32914 = state_32845__$1;(statearr_32877_32914[2] = inst_32813);
(statearr_32877_32914[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 19))
{var state_32845__$1 = state_32845;var statearr_32878_32915 = state_32845__$1;(statearr_32878_32915[2] = null);
(statearr_32878_32915[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 20))
{var state_32845__$1 = state_32845;var statearr_32879_32916 = state_32845__$1;(statearr_32879_32916[2] = null);
(statearr_32879_32916[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 21))
{var inst_32838 = (state_32845[2]);var state_32845__$1 = (function (){var statearr_32880 = state_32845;(statearr_32880[17] = inst_32838);
return statearr_32880;
})();var statearr_32881_32917 = state_32845__$1;(statearr_32881_32917[2] = null);
(statearr_32881_32917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 22))
{var inst_32835 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32882_32918 = state_32845__$1;(statearr_32882_32918[2] = inst_32835);
(statearr_32882_32918[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 23))
{var inst_32822 = (state_32845[12]);var inst_32826 = (state_32845[2]);var inst_32827 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32822);var state_32845__$1 = (function (){var statearr_32883 = state_32845;(statearr_32883[18] = inst_32826);
return statearr_32883;
})();var statearr_32884_32919 = state_32845__$1;(statearr_32884_32919[2] = inst_32827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32845__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32846 === 24))
{var inst_32774 = (state_32845[7]);var inst_32824 = (state_32845[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32845,23,Object,null,22);var inst_32831 = cljs.core.async.muxch_STAR_.call(null,inst_32824);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32845__$1,25,inst_32831,inst_32774);
} else
{if((state_val_32846 === 25))
{var inst_32833 = (state_32845[2]);var state_32845__$1 = state_32845;var statearr_32885_32920 = state_32845__$1;(statearr_32885_32920[2] = inst_32833);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32845__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_32889 = (new Array(19));(statearr_32889[0] = state_machine__13310__auto__);
(statearr_32889[1] = 1);
return statearr_32889;
});
var state_machine__13310__auto____1 = (function (state_32845){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_32845);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e32890){if((e32890 instanceof Object))
{var ex__13313__auto__ = e32890;var statearr_32891_32921 = state_32845;(statearr_32891_32921[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32922 = state_32845;
state_32845 = G__32922;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_32845){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_32845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_32892 = f__13410__auto__.call(null);(statearr_32892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___32893);
return statearr_32892;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___33059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_33029){var state_val_33030 = (state_33029[1]);if((state_val_33030 === 1))
{var state_33029__$1 = state_33029;var statearr_33031_33060 = state_33029__$1;(statearr_33031_33060[2] = null);
(statearr_33031_33060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 2))
{var inst_32992 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32993 = 0;var state_33029__$1 = (function (){var statearr_33032 = state_33029;(statearr_33032[7] = inst_32993);
(statearr_33032[8] = inst_32992);
return statearr_33032;
})();var statearr_33033_33061 = state_33029__$1;(statearr_33033_33061[2] = null);
(statearr_33033_33061[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 3))
{var inst_33027 = (state_33029[2]);var state_33029__$1 = state_33029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33029__$1,inst_33027);
} else
{if((state_val_33030 === 4))
{var inst_32993 = (state_33029[7]);var inst_32995 = (inst_32993 < cnt);var state_33029__$1 = state_33029;if(cljs.core.truth_(inst_32995))
{var statearr_33034_33062 = state_33029__$1;(statearr_33034_33062[1] = 6);
} else
{var statearr_33035_33063 = state_33029__$1;(statearr_33035_33063[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 5))
{var inst_33013 = (state_33029[2]);var state_33029__$1 = (function (){var statearr_33036 = state_33029;(statearr_33036[9] = inst_33013);
return statearr_33036;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33029__$1,12,dchan);
} else
{if((state_val_33030 === 6))
{var state_33029__$1 = state_33029;var statearr_33037_33064 = state_33029__$1;(statearr_33037_33064[2] = null);
(statearr_33037_33064[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 7))
{var state_33029__$1 = state_33029;var statearr_33038_33065 = state_33029__$1;(statearr_33038_33065[2] = null);
(statearr_33038_33065[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 8))
{var inst_33011 = (state_33029[2]);var state_33029__$1 = state_33029;var statearr_33039_33066 = state_33029__$1;(statearr_33039_33066[2] = inst_33011);
(statearr_33039_33066[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 9))
{var inst_32993 = (state_33029[7]);var inst_33006 = (state_33029[2]);var inst_33007 = (inst_32993 + 1);var inst_32993__$1 = inst_33007;var state_33029__$1 = (function (){var statearr_33040 = state_33029;(statearr_33040[7] = inst_32993__$1);
(statearr_33040[10] = inst_33006);
return statearr_33040;
})();var statearr_33041_33067 = state_33029__$1;(statearr_33041_33067[2] = null);
(statearr_33041_33067[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 10))
{var inst_32997 = (state_33029[2]);var inst_32998 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33029__$1 = (function (){var statearr_33042 = state_33029;(statearr_33042[11] = inst_32997);
return statearr_33042;
})();var statearr_33043_33068 = state_33029__$1;(statearr_33043_33068[2] = inst_32998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33029__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 11))
{var inst_32993 = (state_33029[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33029,10,Object,null,9);var inst_33002 = chs__$1.call(null,inst_32993);var inst_33003 = done.call(null,inst_32993);var inst_33004 = cljs.core.async.take_BANG_.call(null,inst_33002,inst_33003);var state_33029__$1 = state_33029;var statearr_33044_33069 = state_33029__$1;(statearr_33044_33069[2] = inst_33004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33029__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 12))
{var inst_33015 = (state_33029[12]);var inst_33015__$1 = (state_33029[2]);var inst_33016 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33015__$1);var state_33029__$1 = (function (){var statearr_33045 = state_33029;(statearr_33045[12] = inst_33015__$1);
return statearr_33045;
})();if(cljs.core.truth_(inst_33016))
{var statearr_33046_33070 = state_33029__$1;(statearr_33046_33070[1] = 13);
} else
{var statearr_33047_33071 = state_33029__$1;(statearr_33047_33071[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 13))
{var inst_33018 = cljs.core.async.close_BANG_.call(null,out);var state_33029__$1 = state_33029;var statearr_33048_33072 = state_33029__$1;(statearr_33048_33072[2] = inst_33018);
(statearr_33048_33072[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 14))
{var inst_33015 = (state_33029[12]);var inst_33020 = cljs.core.apply.call(null,f,inst_33015);var state_33029__$1 = state_33029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33029__$1,16,out,inst_33020);
} else
{if((state_val_33030 === 15))
{var inst_33025 = (state_33029[2]);var state_33029__$1 = state_33029;var statearr_33049_33073 = state_33029__$1;(statearr_33049_33073[2] = inst_33025);
(statearr_33049_33073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33030 === 16))
{var inst_33022 = (state_33029[2]);var state_33029__$1 = (function (){var statearr_33050 = state_33029;(statearr_33050[13] = inst_33022);
return statearr_33050;
})();var statearr_33051_33074 = state_33029__$1;(statearr_33051_33074[2] = null);
(statearr_33051_33074[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_33055 = (new Array(14));(statearr_33055[0] = state_machine__13310__auto__);
(statearr_33055[1] = 1);
return statearr_33055;
});
var state_machine__13310__auto____1 = (function (state_33029){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_33029);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e33056){if((e33056 instanceof Object))
{var ex__13313__auto__ = e33056;var statearr_33057_33075 = state_33029;(statearr_33057_33075[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33029);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33076 = state_33029;
state_33029 = G__33076;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_33029){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_33029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_33058 = f__13410__auto__.call(null);(statearr_33058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___33059);
return statearr_33058;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___33184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_33160){var state_val_33161 = (state_33160[1]);if((state_val_33161 === 1))
{var inst_33131 = cljs.core.vec.call(null,chs);var inst_33132 = inst_33131;var state_33160__$1 = (function (){var statearr_33162 = state_33160;(statearr_33162[7] = inst_33132);
return statearr_33162;
})();var statearr_33163_33185 = state_33160__$1;(statearr_33163_33185[2] = null);
(statearr_33163_33185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 2))
{var inst_33132 = (state_33160[7]);var inst_33134 = cljs.core.count.call(null,inst_33132);var inst_33135 = (inst_33134 > 0);var state_33160__$1 = state_33160;if(cljs.core.truth_(inst_33135))
{var statearr_33164_33186 = state_33160__$1;(statearr_33164_33186[1] = 4);
} else
{var statearr_33165_33187 = state_33160__$1;(statearr_33165_33187[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 3))
{var inst_33158 = (state_33160[2]);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33160__$1,inst_33158);
} else
{if((state_val_33161 === 4))
{var inst_33132 = (state_33160[7]);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33160__$1,7,inst_33132);
} else
{if((state_val_33161 === 5))
{var inst_33154 = cljs.core.async.close_BANG_.call(null,out);var state_33160__$1 = state_33160;var statearr_33166_33188 = state_33160__$1;(statearr_33166_33188[2] = inst_33154);
(statearr_33166_33188[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 6))
{var inst_33156 = (state_33160[2]);var state_33160__$1 = state_33160;var statearr_33167_33189 = state_33160__$1;(statearr_33167_33189[2] = inst_33156);
(statearr_33167_33189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 7))
{var inst_33139 = (state_33160[8]);var inst_33140 = (state_33160[9]);var inst_33139__$1 = (state_33160[2]);var inst_33140__$1 = cljs.core.nth.call(null,inst_33139__$1,0,null);var inst_33141 = cljs.core.nth.call(null,inst_33139__$1,1,null);var inst_33142 = (inst_33140__$1 == null);var state_33160__$1 = (function (){var statearr_33168 = state_33160;(statearr_33168[8] = inst_33139__$1);
(statearr_33168[9] = inst_33140__$1);
(statearr_33168[10] = inst_33141);
return statearr_33168;
})();if(cljs.core.truth_(inst_33142))
{var statearr_33169_33190 = state_33160__$1;(statearr_33169_33190[1] = 8);
} else
{var statearr_33170_33191 = state_33160__$1;(statearr_33170_33191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 8))
{var inst_33132 = (state_33160[7]);var inst_33139 = (state_33160[8]);var inst_33140 = (state_33160[9]);var inst_33141 = (state_33160[10]);var inst_33144 = (function (){var c = inst_33141;var v = inst_33140;var vec__33137 = inst_33139;var cs = inst_33132;return ((function (c,v,vec__33137,cs,inst_33132,inst_33139,inst_33140,inst_33141,state_val_33161){
return (function (p1__33077_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33077_SHARP_);
});
;})(c,v,vec__33137,cs,inst_33132,inst_33139,inst_33140,inst_33141,state_val_33161))
})();var inst_33145 = cljs.core.filterv.call(null,inst_33144,inst_33132);var inst_33132__$1 = inst_33145;var state_33160__$1 = (function (){var statearr_33171 = state_33160;(statearr_33171[7] = inst_33132__$1);
return statearr_33171;
})();var statearr_33172_33192 = state_33160__$1;(statearr_33172_33192[2] = null);
(statearr_33172_33192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 9))
{var inst_33140 = (state_33160[9]);var state_33160__$1 = state_33160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33160__$1,11,out,inst_33140);
} else
{if((state_val_33161 === 10))
{var inst_33152 = (state_33160[2]);var state_33160__$1 = state_33160;var statearr_33174_33193 = state_33160__$1;(statearr_33174_33193[2] = inst_33152);
(statearr_33174_33193[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33161 === 11))
{var inst_33132 = (state_33160[7]);var inst_33149 = (state_33160[2]);var tmp33173 = inst_33132;var inst_33132__$1 = tmp33173;var state_33160__$1 = (function (){var statearr_33175 = state_33160;(statearr_33175[11] = inst_33149);
(statearr_33175[7] = inst_33132__$1);
return statearr_33175;
})();var statearr_33176_33194 = state_33160__$1;(statearr_33176_33194[2] = null);
(statearr_33176_33194[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_33180 = (new Array(12));(statearr_33180[0] = state_machine__13310__auto__);
(statearr_33180[1] = 1);
return statearr_33180;
});
var state_machine__13310__auto____1 = (function (state_33160){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_33160);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e33181){if((e33181 instanceof Object))
{var ex__13313__auto__ = e33181;var statearr_33182_33195 = state_33160;(statearr_33182_33195[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33196 = state_33160;
state_33160 = G__33196;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_33160){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_33160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_33183 = f__13410__auto__.call(null);(statearr_33183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___33184);
return statearr_33183;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___33289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_33266){var state_val_33267 = (state_33266[1]);if((state_val_33267 === 1))
{var inst_33243 = 0;var state_33266__$1 = (function (){var statearr_33268 = state_33266;(statearr_33268[7] = inst_33243);
return statearr_33268;
})();var statearr_33269_33290 = state_33266__$1;(statearr_33269_33290[2] = null);
(statearr_33269_33290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 2))
{var inst_33243 = (state_33266[7]);var inst_33245 = (inst_33243 < n);var state_33266__$1 = state_33266;if(cljs.core.truth_(inst_33245))
{var statearr_33270_33291 = state_33266__$1;(statearr_33270_33291[1] = 4);
} else
{var statearr_33271_33292 = state_33266__$1;(statearr_33271_33292[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 3))
{var inst_33263 = (state_33266[2]);var inst_33264 = cljs.core.async.close_BANG_.call(null,out);var state_33266__$1 = (function (){var statearr_33272 = state_33266;(statearr_33272[8] = inst_33263);
return statearr_33272;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33266__$1,inst_33264);
} else
{if((state_val_33267 === 4))
{var state_33266__$1 = state_33266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33266__$1,7,ch);
} else
{if((state_val_33267 === 5))
{var state_33266__$1 = state_33266;var statearr_33273_33293 = state_33266__$1;(statearr_33273_33293[2] = null);
(statearr_33273_33293[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 6))
{var inst_33261 = (state_33266[2]);var state_33266__$1 = state_33266;var statearr_33274_33294 = state_33266__$1;(statearr_33274_33294[2] = inst_33261);
(statearr_33274_33294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 7))
{var inst_33248 = (state_33266[9]);var inst_33248__$1 = (state_33266[2]);var inst_33249 = (inst_33248__$1 == null);var inst_33250 = cljs.core.not.call(null,inst_33249);var state_33266__$1 = (function (){var statearr_33275 = state_33266;(statearr_33275[9] = inst_33248__$1);
return statearr_33275;
})();if(inst_33250)
{var statearr_33276_33295 = state_33266__$1;(statearr_33276_33295[1] = 8);
} else
{var statearr_33277_33296 = state_33266__$1;(statearr_33277_33296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 8))
{var inst_33248 = (state_33266[9]);var state_33266__$1 = state_33266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33266__$1,11,out,inst_33248);
} else
{if((state_val_33267 === 9))
{var state_33266__$1 = state_33266;var statearr_33278_33297 = state_33266__$1;(statearr_33278_33297[2] = null);
(statearr_33278_33297[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 10))
{var inst_33258 = (state_33266[2]);var state_33266__$1 = state_33266;var statearr_33279_33298 = state_33266__$1;(statearr_33279_33298[2] = inst_33258);
(statearr_33279_33298[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33267 === 11))
{var inst_33243 = (state_33266[7]);var inst_33253 = (state_33266[2]);var inst_33254 = (inst_33243 + 1);var inst_33243__$1 = inst_33254;var state_33266__$1 = (function (){var statearr_33280 = state_33266;(statearr_33280[7] = inst_33243__$1);
(statearr_33280[10] = inst_33253);
return statearr_33280;
})();var statearr_33281_33299 = state_33266__$1;(statearr_33281_33299[2] = null);
(statearr_33281_33299[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_33285 = (new Array(11));(statearr_33285[0] = state_machine__13310__auto__);
(statearr_33285[1] = 1);
return statearr_33285;
});
var state_machine__13310__auto____1 = (function (state_33266){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_33266);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e33286){if((e33286 instanceof Object))
{var ex__13313__auto__ = e33286;var statearr_33287_33300 = state_33266;(statearr_33287_33300[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33301 = state_33266;
state_33266 = G__33301;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_33266){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_33266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_33288 = f__13410__auto__.call(null);(statearr_33288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___33289);
return statearr_33288;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___33398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_33373){var state_val_33374 = (state_33373[1]);if((state_val_33374 === 1))
{var inst_33350 = null;var state_33373__$1 = (function (){var statearr_33375 = state_33373;(statearr_33375[7] = inst_33350);
return statearr_33375;
})();var statearr_33376_33399 = state_33373__$1;(statearr_33376_33399[2] = null);
(statearr_33376_33399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 2))
{var state_33373__$1 = state_33373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33373__$1,4,ch);
} else
{if((state_val_33374 === 3))
{var inst_33370 = (state_33373[2]);var inst_33371 = cljs.core.async.close_BANG_.call(null,out);var state_33373__$1 = (function (){var statearr_33377 = state_33373;(statearr_33377[8] = inst_33370);
return statearr_33377;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33373__$1,inst_33371);
} else
{if((state_val_33374 === 4))
{var inst_33353 = (state_33373[9]);var inst_33353__$1 = (state_33373[2]);var inst_33354 = (inst_33353__$1 == null);var inst_33355 = cljs.core.not.call(null,inst_33354);var state_33373__$1 = (function (){var statearr_33378 = state_33373;(statearr_33378[9] = inst_33353__$1);
return statearr_33378;
})();if(inst_33355)
{var statearr_33379_33400 = state_33373__$1;(statearr_33379_33400[1] = 5);
} else
{var statearr_33380_33401 = state_33373__$1;(statearr_33380_33401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 5))
{var inst_33350 = (state_33373[7]);var inst_33353 = (state_33373[9]);var inst_33357 = cljs.core._EQ_.call(null,inst_33353,inst_33350);var state_33373__$1 = state_33373;if(inst_33357)
{var statearr_33381_33402 = state_33373__$1;(statearr_33381_33402[1] = 8);
} else
{var statearr_33382_33403 = state_33373__$1;(statearr_33382_33403[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 6))
{var state_33373__$1 = state_33373;var statearr_33384_33404 = state_33373__$1;(statearr_33384_33404[2] = null);
(statearr_33384_33404[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 7))
{var inst_33368 = (state_33373[2]);var state_33373__$1 = state_33373;var statearr_33385_33405 = state_33373__$1;(statearr_33385_33405[2] = inst_33368);
(statearr_33385_33405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 8))
{var inst_33350 = (state_33373[7]);var tmp33383 = inst_33350;var inst_33350__$1 = tmp33383;var state_33373__$1 = (function (){var statearr_33386 = state_33373;(statearr_33386[7] = inst_33350__$1);
return statearr_33386;
})();var statearr_33387_33406 = state_33373__$1;(statearr_33387_33406[2] = null);
(statearr_33387_33406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 9))
{var inst_33353 = (state_33373[9]);var state_33373__$1 = state_33373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33373__$1,11,out,inst_33353);
} else
{if((state_val_33374 === 10))
{var inst_33365 = (state_33373[2]);var state_33373__$1 = state_33373;var statearr_33388_33407 = state_33373__$1;(statearr_33388_33407[2] = inst_33365);
(statearr_33388_33407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33374 === 11))
{var inst_33353 = (state_33373[9]);var inst_33362 = (state_33373[2]);var inst_33350 = inst_33353;var state_33373__$1 = (function (){var statearr_33389 = state_33373;(statearr_33389[7] = inst_33350);
(statearr_33389[10] = inst_33362);
return statearr_33389;
})();var statearr_33390_33408 = state_33373__$1;(statearr_33390_33408[2] = null);
(statearr_33390_33408[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_33394 = (new Array(11));(statearr_33394[0] = state_machine__13310__auto__);
(statearr_33394[1] = 1);
return statearr_33394;
});
var state_machine__13310__auto____1 = (function (state_33373){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_33373);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e33395){if((e33395 instanceof Object))
{var ex__13313__auto__ = e33395;var statearr_33396_33409 = state_33373;(statearr_33396_33409[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33410 = state_33373;
state_33373 = G__33410;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_33373){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_33373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_33397 = f__13410__auto__.call(null);(statearr_33397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___33398);
return statearr_33397;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___33545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_33515){var state_val_33516 = (state_33515[1]);if((state_val_33516 === 1))
{var inst_33478 = (new Array(n));var inst_33479 = inst_33478;var inst_33480 = 0;var state_33515__$1 = (function (){var statearr_33517 = state_33515;(statearr_33517[7] = inst_33479);
(statearr_33517[8] = inst_33480);
return statearr_33517;
})();var statearr_33518_33546 = state_33515__$1;(statearr_33518_33546[2] = null);
(statearr_33518_33546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 2))
{var state_33515__$1 = state_33515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33515__$1,4,ch);
} else
{if((state_val_33516 === 3))
{var inst_33513 = (state_33515[2]);var state_33515__$1 = state_33515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33515__$1,inst_33513);
} else
{if((state_val_33516 === 4))
{var inst_33483 = (state_33515[9]);var inst_33483__$1 = (state_33515[2]);var inst_33484 = (inst_33483__$1 == null);var inst_33485 = cljs.core.not.call(null,inst_33484);var state_33515__$1 = (function (){var statearr_33519 = state_33515;(statearr_33519[9] = inst_33483__$1);
return statearr_33519;
})();if(inst_33485)
{var statearr_33520_33547 = state_33515__$1;(statearr_33520_33547[1] = 5);
} else
{var statearr_33521_33548 = state_33515__$1;(statearr_33521_33548[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 5))
{var inst_33488 = (state_33515[10]);var inst_33479 = (state_33515[7]);var inst_33483 = (state_33515[9]);var inst_33480 = (state_33515[8]);var inst_33487 = (inst_33479[inst_33480] = inst_33483);var inst_33488__$1 = (inst_33480 + 1);var inst_33489 = (inst_33488__$1 < n);var state_33515__$1 = (function (){var statearr_33522 = state_33515;(statearr_33522[10] = inst_33488__$1);
(statearr_33522[11] = inst_33487);
return statearr_33522;
})();if(cljs.core.truth_(inst_33489))
{var statearr_33523_33549 = state_33515__$1;(statearr_33523_33549[1] = 8);
} else
{var statearr_33524_33550 = state_33515__$1;(statearr_33524_33550[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 6))
{var inst_33480 = (state_33515[8]);var inst_33501 = (inst_33480 > 0);var state_33515__$1 = state_33515;if(cljs.core.truth_(inst_33501))
{var statearr_33526_33551 = state_33515__$1;(statearr_33526_33551[1] = 12);
} else
{var statearr_33527_33552 = state_33515__$1;(statearr_33527_33552[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 7))
{var inst_33511 = (state_33515[2]);var state_33515__$1 = state_33515;var statearr_33528_33553 = state_33515__$1;(statearr_33528_33553[2] = inst_33511);
(statearr_33528_33553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 8))
{var inst_33488 = (state_33515[10]);var inst_33479 = (state_33515[7]);var tmp33525 = inst_33479;var inst_33479__$1 = tmp33525;var inst_33480 = inst_33488;var state_33515__$1 = (function (){var statearr_33529 = state_33515;(statearr_33529[7] = inst_33479__$1);
(statearr_33529[8] = inst_33480);
return statearr_33529;
})();var statearr_33530_33554 = state_33515__$1;(statearr_33530_33554[2] = null);
(statearr_33530_33554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 9))
{var inst_33479 = (state_33515[7]);var inst_33493 = cljs.core.vec.call(null,inst_33479);var state_33515__$1 = state_33515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33515__$1,11,out,inst_33493);
} else
{if((state_val_33516 === 10))
{var inst_33499 = (state_33515[2]);var state_33515__$1 = state_33515;var statearr_33531_33555 = state_33515__$1;(statearr_33531_33555[2] = inst_33499);
(statearr_33531_33555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 11))
{var inst_33495 = (state_33515[2]);var inst_33496 = (new Array(n));var inst_33479 = inst_33496;var inst_33480 = 0;var state_33515__$1 = (function (){var statearr_33532 = state_33515;(statearr_33532[7] = inst_33479);
(statearr_33532[8] = inst_33480);
(statearr_33532[12] = inst_33495);
return statearr_33532;
})();var statearr_33533_33556 = state_33515__$1;(statearr_33533_33556[2] = null);
(statearr_33533_33556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 12))
{var inst_33479 = (state_33515[7]);var inst_33503 = cljs.core.vec.call(null,inst_33479);var state_33515__$1 = state_33515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33515__$1,15,out,inst_33503);
} else
{if((state_val_33516 === 13))
{var state_33515__$1 = state_33515;var statearr_33534_33557 = state_33515__$1;(statearr_33534_33557[2] = null);
(statearr_33534_33557[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 14))
{var inst_33508 = (state_33515[2]);var inst_33509 = cljs.core.async.close_BANG_.call(null,out);var state_33515__$1 = (function (){var statearr_33535 = state_33515;(statearr_33535[13] = inst_33508);
return statearr_33535;
})();var statearr_33536_33558 = state_33515__$1;(statearr_33536_33558[2] = inst_33509);
(statearr_33536_33558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33516 === 15))
{var inst_33505 = (state_33515[2]);var state_33515__$1 = state_33515;var statearr_33537_33559 = state_33515__$1;(statearr_33537_33559[2] = inst_33505);
(statearr_33537_33559[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_33541 = (new Array(14));(statearr_33541[0] = state_machine__13310__auto__);
(statearr_33541[1] = 1);
return statearr_33541;
});
var state_machine__13310__auto____1 = (function (state_33515){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_33515);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e33542){if((e33542 instanceof Object))
{var ex__13313__auto__ = e33542;var statearr_33543_33560 = state_33515;(statearr_33543_33560[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33515);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33561 = state_33515;
state_33515 = G__33561;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_33515){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_33515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_33544 = f__13410__auto__.call(null);(statearr_33544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___33545);
return statearr_33544;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___33704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_33674){var state_val_33675 = (state_33674[1]);if((state_val_33675 === 1))
{var inst_33633 = (new Array(0));var inst_33634 = inst_33633;var inst_33635 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_33674__$1 = (function (){var statearr_33676 = state_33674;(statearr_33676[7] = inst_33634);
(statearr_33676[8] = inst_33635);
return statearr_33676;
})();var statearr_33677_33705 = state_33674__$1;(statearr_33677_33705[2] = null);
(statearr_33677_33705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 2))
{var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33674__$1,4,ch);
} else
{if((state_val_33675 === 3))
{var inst_33672 = (state_33674[2]);var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33674__$1,inst_33672);
} else
{if((state_val_33675 === 4))
{var inst_33638 = (state_33674[9]);var inst_33638__$1 = (state_33674[2]);var inst_33639 = (inst_33638__$1 == null);var inst_33640 = cljs.core.not.call(null,inst_33639);var state_33674__$1 = (function (){var statearr_33678 = state_33674;(statearr_33678[9] = inst_33638__$1);
return statearr_33678;
})();if(inst_33640)
{var statearr_33679_33706 = state_33674__$1;(statearr_33679_33706[1] = 5);
} else
{var statearr_33680_33707 = state_33674__$1;(statearr_33680_33707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 5))
{var inst_33642 = (state_33674[10]);var inst_33635 = (state_33674[8]);var inst_33638 = (state_33674[9]);var inst_33642__$1 = f.call(null,inst_33638);var inst_33643 = cljs.core._EQ_.call(null,inst_33642__$1,inst_33635);var inst_33644 = cljs.core.keyword_identical_QMARK_.call(null,inst_33635,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_33645 = (inst_33643) || (inst_33644);var state_33674__$1 = (function (){var statearr_33681 = state_33674;(statearr_33681[10] = inst_33642__$1);
return statearr_33681;
})();if(cljs.core.truth_(inst_33645))
{var statearr_33682_33708 = state_33674__$1;(statearr_33682_33708[1] = 8);
} else
{var statearr_33683_33709 = state_33674__$1;(statearr_33683_33709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 6))
{var inst_33634 = (state_33674[7]);var inst_33659 = inst_33634.length;var inst_33660 = (inst_33659 > 0);var state_33674__$1 = state_33674;if(cljs.core.truth_(inst_33660))
{var statearr_33685_33710 = state_33674__$1;(statearr_33685_33710[1] = 12);
} else
{var statearr_33686_33711 = state_33674__$1;(statearr_33686_33711[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 7))
{var inst_33670 = (state_33674[2]);var state_33674__$1 = state_33674;var statearr_33687_33712 = state_33674__$1;(statearr_33687_33712[2] = inst_33670);
(statearr_33687_33712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 8))
{var inst_33642 = (state_33674[10]);var inst_33634 = (state_33674[7]);var inst_33638 = (state_33674[9]);var inst_33647 = inst_33634.push(inst_33638);var tmp33684 = inst_33634;var inst_33634__$1 = tmp33684;var inst_33635 = inst_33642;var state_33674__$1 = (function (){var statearr_33688 = state_33674;(statearr_33688[11] = inst_33647);
(statearr_33688[7] = inst_33634__$1);
(statearr_33688[8] = inst_33635);
return statearr_33688;
})();var statearr_33689_33713 = state_33674__$1;(statearr_33689_33713[2] = null);
(statearr_33689_33713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 9))
{var inst_33634 = (state_33674[7]);var inst_33650 = cljs.core.vec.call(null,inst_33634);var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33674__$1,11,out,inst_33650);
} else
{if((state_val_33675 === 10))
{var inst_33657 = (state_33674[2]);var state_33674__$1 = state_33674;var statearr_33690_33714 = state_33674__$1;(statearr_33690_33714[2] = inst_33657);
(statearr_33690_33714[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 11))
{var inst_33642 = (state_33674[10]);var inst_33638 = (state_33674[9]);var inst_33652 = (state_33674[2]);var inst_33653 = (new Array(0));var inst_33654 = inst_33653.push(inst_33638);var inst_33634 = inst_33653;var inst_33635 = inst_33642;var state_33674__$1 = (function (){var statearr_33691 = state_33674;(statearr_33691[7] = inst_33634);
(statearr_33691[8] = inst_33635);
(statearr_33691[12] = inst_33654);
(statearr_33691[13] = inst_33652);
return statearr_33691;
})();var statearr_33692_33715 = state_33674__$1;(statearr_33692_33715[2] = null);
(statearr_33692_33715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 12))
{var inst_33634 = (state_33674[7]);var inst_33662 = cljs.core.vec.call(null,inst_33634);var state_33674__$1 = state_33674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33674__$1,15,out,inst_33662);
} else
{if((state_val_33675 === 13))
{var state_33674__$1 = state_33674;var statearr_33693_33716 = state_33674__$1;(statearr_33693_33716[2] = null);
(statearr_33693_33716[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 14))
{var inst_33667 = (state_33674[2]);var inst_33668 = cljs.core.async.close_BANG_.call(null,out);var state_33674__$1 = (function (){var statearr_33694 = state_33674;(statearr_33694[14] = inst_33667);
return statearr_33694;
})();var statearr_33695_33717 = state_33674__$1;(statearr_33695_33717[2] = inst_33668);
(statearr_33695_33717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33675 === 15))
{var inst_33664 = (state_33674[2]);var state_33674__$1 = state_33674;var statearr_33696_33718 = state_33674__$1;(statearr_33696_33718[2] = inst_33664);
(statearr_33696_33718[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_33700 = (new Array(15));(statearr_33700[0] = state_machine__13310__auto__);
(statearr_33700[1] = 1);
return statearr_33700;
});
var state_machine__13310__auto____1 = (function (state_33674){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_33674);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e33701){if((e33701 instanceof Object))
{var ex__13313__auto__ = e33701;var statearr_33702_33719 = state_33674;(statearr_33702_33719[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33720 = state_33674;
state_33674 = G__33720;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_33674){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_33674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_33703 = f__13410__auto__.call(null);(statearr_33703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___33704);
return statearr_33703;
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
