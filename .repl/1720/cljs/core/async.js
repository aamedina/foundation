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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t92125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92125 = (function (f,fn_handler,meta92126){
this.f = f;
this.fn_handler = fn_handler;
this.meta92126 = meta92126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92125.cljs$lang$type = true;
cljs.core.async.t92125.cljs$lang$ctorStr = "cljs.core.async/t92125";
cljs.core.async.t92125.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92125");
});
cljs.core.async.t92125.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t92125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t92125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t92125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92127){var self__ = this;
var _92127__$1 = this;return self__.meta92126;
});
cljs.core.async.t92125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92127,meta92126__$1){var self__ = this;
var _92127__$1 = this;return (new cljs.core.async.t92125(self__.f,self__.fn_handler,meta92126__$1));
});
cljs.core.async.__GT_t92125 = (function __GT_t92125(f__$1,fn_handler__$1,meta92126){return (new cljs.core.async.t92125(f__$1,fn_handler__$1,meta92126));
});
}
return (new cljs.core.async.t92125(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__92129 = buff;if(G__92129)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__92129.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__92129.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__92129);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__92129);
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
{var val_92130 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_92130);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_92130);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___92131 = n;var x_92132 = 0;while(true){
if((x_92132 < n__7112__auto___92131))
{(a[x_92132] = 0);
{
var G__92133 = (x_92132 + 1);
x_92132 = G__92133;
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
var G__92134 = (i + 1);
i = G__92134;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t92138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92138 = (function (flag,alt_flag,meta92139){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta92139 = meta92139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92138.cljs$lang$type = true;
cljs.core.async.t92138.cljs$lang$ctorStr = "cljs.core.async/t92138";
cljs.core.async.t92138.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92138");
});
cljs.core.async.t92138.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t92138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t92138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t92138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92140){var self__ = this;
var _92140__$1 = this;return self__.meta92139;
});
cljs.core.async.t92138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92140,meta92139__$1){var self__ = this;
var _92140__$1 = this;return (new cljs.core.async.t92138(self__.flag,self__.alt_flag,meta92139__$1));
});
cljs.core.async.__GT_t92138 = (function __GT_t92138(flag__$1,alt_flag__$1,meta92139){return (new cljs.core.async.t92138(flag__$1,alt_flag__$1,meta92139));
});
}
return (new cljs.core.async.t92138(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t92144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92144 = (function (cb,flag,alt_handler,meta92145){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta92145 = meta92145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92144.cljs$lang$type = true;
cljs.core.async.t92144.cljs$lang$ctorStr = "cljs.core.async/t92144";
cljs.core.async.t92144.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92144");
});
cljs.core.async.t92144.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t92144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t92144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t92144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92146){var self__ = this;
var _92146__$1 = this;return self__.meta92145;
});
cljs.core.async.t92144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92146,meta92145__$1){var self__ = this;
var _92146__$1 = this;return (new cljs.core.async.t92144(self__.cb,self__.flag,self__.alt_handler,meta92145__$1));
});
cljs.core.async.__GT_t92144 = (function __GT_t92144(cb__$1,flag__$1,alt_handler__$1,meta92145){return (new cljs.core.async.t92144(cb__$1,flag__$1,alt_handler__$1,meta92145));
});
}
return (new cljs.core.async.t92144(cb,flag,alt_handler,null));
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
return (function (p1__92147_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__92147_SHARP_,port], null));
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
var G__92148 = (i + 1);
i = G__92148;
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
var alts_BANG___delegate = function (ports,p__92149){var map__92151 = p__92149;var map__92151__$1 = ((cljs.core.seq_QMARK_.call(null,map__92151))?cljs.core.apply.call(null,cljs.core.hash_map,map__92151):map__92151);var opts = map__92151__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__92149 = null;if (arguments.length > 1) {
  p__92149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__92149);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__92152){
var ports = cljs.core.first(arglist__92152);
var p__92149 = cljs.core.rest(arglist__92152);
return alts_BANG___delegate(ports,p__92149);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t92160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92160 = (function (ch,f,map_LT_,meta92161){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta92161 = meta92161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92160.cljs$lang$type = true;
cljs.core.async.t92160.cljs$lang$ctorStr = "cljs.core.async/t92160";
cljs.core.async.t92160.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92160");
});
cljs.core.async.t92160.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t92160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t92160.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t92160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t92163 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92163 = (function (fn1,_,meta92161,ch,f,map_LT_,meta92164){
this.fn1 = fn1;
this._ = _;
this.meta92161 = meta92161;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta92164 = meta92164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92163.cljs$lang$type = true;
cljs.core.async.t92163.cljs$lang$ctorStr = "cljs.core.async/t92163";
cljs.core.async.t92163.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92163");
});
cljs.core.async.t92163.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t92163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t92163.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t92163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__92153_SHARP_){return f1.call(null,(((p1__92153_SHARP_ == null))?null:self__.f.call(null,p1__92153_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t92163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92165){var self__ = this;
var _92165__$1 = this;return self__.meta92164;
});
cljs.core.async.t92163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92165,meta92164__$1){var self__ = this;
var _92165__$1 = this;return (new cljs.core.async.t92163(self__.fn1,self__._,self__.meta92161,self__.ch,self__.f,self__.map_LT_,meta92164__$1));
});
cljs.core.async.__GT_t92163 = (function __GT_t92163(fn1__$1,___$2,meta92161__$1,ch__$2,f__$2,map_LT___$2,meta92164){return (new cljs.core.async.t92163(fn1__$1,___$2,meta92161__$1,ch__$2,f__$2,map_LT___$2,meta92164));
});
}
return (new cljs.core.async.t92163(fn1,___$1,self__.meta92161,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t92160.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t92160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t92160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92162){var self__ = this;
var _92162__$1 = this;return self__.meta92161;
});
cljs.core.async.t92160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92162,meta92161__$1){var self__ = this;
var _92162__$1 = this;return (new cljs.core.async.t92160(self__.ch,self__.f,self__.map_LT_,meta92161__$1));
});
cljs.core.async.__GT_t92160 = (function __GT_t92160(ch__$1,f__$1,map_LT___$1,meta92161){return (new cljs.core.async.t92160(ch__$1,f__$1,map_LT___$1,meta92161));
});
}
return (new cljs.core.async.t92160(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t92169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92169 = (function (ch,f,map_GT_,meta92170){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta92170 = meta92170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92169.cljs$lang$type = true;
cljs.core.async.t92169.cljs$lang$ctorStr = "cljs.core.async/t92169";
cljs.core.async.t92169.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92169");
});
cljs.core.async.t92169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t92169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t92169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t92169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t92169.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t92169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t92169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92171){var self__ = this;
var _92171__$1 = this;return self__.meta92170;
});
cljs.core.async.t92169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92171,meta92170__$1){var self__ = this;
var _92171__$1 = this;return (new cljs.core.async.t92169(self__.ch,self__.f,self__.map_GT_,meta92170__$1));
});
cljs.core.async.__GT_t92169 = (function __GT_t92169(ch__$1,f__$1,map_GT___$1,meta92170){return (new cljs.core.async.t92169(ch__$1,f__$1,map_GT___$1,meta92170));
});
}
return (new cljs.core.async.t92169(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t92175 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t92175 = (function (ch,p,filter_GT_,meta92176){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta92176 = meta92176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t92175.cljs$lang$type = true;
cljs.core.async.t92175.cljs$lang$ctorStr = "cljs.core.async/t92175";
cljs.core.async.t92175.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t92175");
});
cljs.core.async.t92175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t92175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t92175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t92175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t92175.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t92175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t92175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92177){var self__ = this;
var _92177__$1 = this;return self__.meta92176;
});
cljs.core.async.t92175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92177,meta92176__$1){var self__ = this;
var _92177__$1 = this;return (new cljs.core.async.t92175(self__.ch,self__.p,self__.filter_GT_,meta92176__$1));
});
cljs.core.async.__GT_t92175 = (function __GT_t92175(ch__$1,p__$1,filter_GT___$1,meta92176){return (new cljs.core.async.t92175(ch__$1,p__$1,filter_GT___$1,meta92176));
});
}
return (new cljs.core.async.t92175(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___92260 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_92239){var state_val_92240 = (state_92239[1]);if((state_val_92240 === 1))
{var state_92239__$1 = state_92239;var statearr_92241_92261 = state_92239__$1;(statearr_92241_92261[2] = null);
(statearr_92241_92261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 2))
{var state_92239__$1 = state_92239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92239__$1,4,ch);
} else
{if((state_val_92240 === 3))
{var inst_92237 = (state_92239[2]);var state_92239__$1 = state_92239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92239__$1,inst_92237);
} else
{if((state_val_92240 === 4))
{var inst_92221 = (state_92239[7]);var inst_92221__$1 = (state_92239[2]);var inst_92222 = (inst_92221__$1 == null);var state_92239__$1 = (function (){var statearr_92242 = state_92239;(statearr_92242[7] = inst_92221__$1);
return statearr_92242;
})();if(cljs.core.truth_(inst_92222))
{var statearr_92243_92262 = state_92239__$1;(statearr_92243_92262[1] = 5);
} else
{var statearr_92244_92263 = state_92239__$1;(statearr_92244_92263[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 5))
{var inst_92224 = cljs.core.async.close_BANG_.call(null,out);var state_92239__$1 = state_92239;var statearr_92245_92264 = state_92239__$1;(statearr_92245_92264[2] = inst_92224);
(statearr_92245_92264[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 6))
{var inst_92221 = (state_92239[7]);var inst_92226 = p.call(null,inst_92221);var state_92239__$1 = state_92239;if(cljs.core.truth_(inst_92226))
{var statearr_92246_92265 = state_92239__$1;(statearr_92246_92265[1] = 8);
} else
{var statearr_92247_92266 = state_92239__$1;(statearr_92247_92266[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 7))
{var inst_92235 = (state_92239[2]);var state_92239__$1 = state_92239;var statearr_92248_92267 = state_92239__$1;(statearr_92248_92267[2] = inst_92235);
(statearr_92248_92267[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 8))
{var inst_92221 = (state_92239[7]);var state_92239__$1 = state_92239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_92239__$1,11,out,inst_92221);
} else
{if((state_val_92240 === 9))
{var state_92239__$1 = state_92239;var statearr_92249_92268 = state_92239__$1;(statearr_92249_92268[2] = null);
(statearr_92249_92268[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 10))
{var inst_92232 = (state_92239[2]);var state_92239__$1 = (function (){var statearr_92250 = state_92239;(statearr_92250[8] = inst_92232);
return statearr_92250;
})();var statearr_92251_92269 = state_92239__$1;(statearr_92251_92269[2] = null);
(statearr_92251_92269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92240 === 11))
{var inst_92229 = (state_92239[2]);var state_92239__$1 = state_92239;var statearr_92252_92270 = state_92239__$1;(statearr_92252_92270[2] = inst_92229);
(statearr_92252_92270[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_92256 = (new Array(9));(statearr_92256[0] = state_machine__13310__auto__);
(statearr_92256[1] = 1);
return statearr_92256;
});
var state_machine__13310__auto____1 = (function (state_92239){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_92239);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e92257){if((e92257 instanceof Object))
{var ex__13313__auto__ = e92257;var statearr_92258_92271 = state_92239;(statearr_92258_92271[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92257;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92272 = state_92239;
state_92239 = G__92272;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_92239){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_92239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_92259 = f__13410__auto__.call(null);(statearr_92259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___92260);
return statearr_92259;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_92424){var state_val_92425 = (state_92424[1]);if((state_val_92425 === 1))
{var state_92424__$1 = state_92424;var statearr_92426_92463 = state_92424__$1;(statearr_92426_92463[2] = null);
(statearr_92426_92463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 2))
{var state_92424__$1 = state_92424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92424__$1,4,in$);
} else
{if((state_val_92425 === 3))
{var inst_92422 = (state_92424[2]);var state_92424__$1 = state_92424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92424__$1,inst_92422);
} else
{if((state_val_92425 === 4))
{var inst_92370 = (state_92424[7]);var inst_92370__$1 = (state_92424[2]);var inst_92371 = (inst_92370__$1 == null);var state_92424__$1 = (function (){var statearr_92427 = state_92424;(statearr_92427[7] = inst_92370__$1);
return statearr_92427;
})();if(cljs.core.truth_(inst_92371))
{var statearr_92428_92464 = state_92424__$1;(statearr_92428_92464[1] = 5);
} else
{var statearr_92429_92465 = state_92424__$1;(statearr_92429_92465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 5))
{var inst_92373 = cljs.core.async.close_BANG_.call(null,out);var state_92424__$1 = state_92424;var statearr_92430_92466 = state_92424__$1;(statearr_92430_92466[2] = inst_92373);
(statearr_92430_92466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 6))
{var inst_92370 = (state_92424[7]);var inst_92375 = f.call(null,inst_92370);var inst_92380 = cljs.core.seq.call(null,inst_92375);var inst_92381 = inst_92380;var inst_92382 = null;var inst_92383 = 0;var inst_92384 = 0;var state_92424__$1 = (function (){var statearr_92431 = state_92424;(statearr_92431[8] = inst_92383);
(statearr_92431[9] = inst_92384);
(statearr_92431[10] = inst_92382);
(statearr_92431[11] = inst_92381);
return statearr_92431;
})();var statearr_92432_92467 = state_92424__$1;(statearr_92432_92467[2] = null);
(statearr_92432_92467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 7))
{var inst_92420 = (state_92424[2]);var state_92424__$1 = state_92424;var statearr_92433_92468 = state_92424__$1;(statearr_92433_92468[2] = inst_92420);
(statearr_92433_92468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 8))
{var inst_92383 = (state_92424[8]);var inst_92384 = (state_92424[9]);var inst_92386 = (inst_92384 < inst_92383);var inst_92387 = inst_92386;var state_92424__$1 = state_92424;if(cljs.core.truth_(inst_92387))
{var statearr_92434_92469 = state_92424__$1;(statearr_92434_92469[1] = 10);
} else
{var statearr_92435_92470 = state_92424__$1;(statearr_92435_92470[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 9))
{var inst_92417 = (state_92424[2]);var state_92424__$1 = (function (){var statearr_92436 = state_92424;(statearr_92436[12] = inst_92417);
return statearr_92436;
})();var statearr_92437_92471 = state_92424__$1;(statearr_92437_92471[2] = null);
(statearr_92437_92471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 10))
{var inst_92384 = (state_92424[9]);var inst_92382 = (state_92424[10]);var inst_92389 = cljs.core._nth.call(null,inst_92382,inst_92384);var state_92424__$1 = state_92424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_92424__$1,13,out,inst_92389);
} else
{if((state_val_92425 === 11))
{var inst_92381 = (state_92424[11]);var inst_92395 = (state_92424[13]);var inst_92395__$1 = cljs.core.seq.call(null,inst_92381);var state_92424__$1 = (function (){var statearr_92441 = state_92424;(statearr_92441[13] = inst_92395__$1);
return statearr_92441;
})();if(inst_92395__$1)
{var statearr_92442_92472 = state_92424__$1;(statearr_92442_92472[1] = 14);
} else
{var statearr_92443_92473 = state_92424__$1;(statearr_92443_92473[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 12))
{var inst_92415 = (state_92424[2]);var state_92424__$1 = state_92424;var statearr_92444_92474 = state_92424__$1;(statearr_92444_92474[2] = inst_92415);
(statearr_92444_92474[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 13))
{var inst_92383 = (state_92424[8]);var inst_92384 = (state_92424[9]);var inst_92382 = (state_92424[10]);var inst_92381 = (state_92424[11]);var inst_92391 = (state_92424[2]);var inst_92392 = (inst_92384 + 1);var tmp92438 = inst_92383;var tmp92439 = inst_92382;var tmp92440 = inst_92381;var inst_92381__$1 = tmp92440;var inst_92382__$1 = tmp92439;var inst_92383__$1 = tmp92438;var inst_92384__$1 = inst_92392;var state_92424__$1 = (function (){var statearr_92445 = state_92424;(statearr_92445[8] = inst_92383__$1);
(statearr_92445[9] = inst_92384__$1);
(statearr_92445[14] = inst_92391);
(statearr_92445[10] = inst_92382__$1);
(statearr_92445[11] = inst_92381__$1);
return statearr_92445;
})();var statearr_92446_92475 = state_92424__$1;(statearr_92446_92475[2] = null);
(statearr_92446_92475[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 14))
{var inst_92395 = (state_92424[13]);var inst_92397 = cljs.core.chunked_seq_QMARK_.call(null,inst_92395);var state_92424__$1 = state_92424;if(inst_92397)
{var statearr_92447_92476 = state_92424__$1;(statearr_92447_92476[1] = 17);
} else
{var statearr_92448_92477 = state_92424__$1;(statearr_92448_92477[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 15))
{var state_92424__$1 = state_92424;var statearr_92449_92478 = state_92424__$1;(statearr_92449_92478[2] = null);
(statearr_92449_92478[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 16))
{var inst_92413 = (state_92424[2]);var state_92424__$1 = state_92424;var statearr_92450_92479 = state_92424__$1;(statearr_92450_92479[2] = inst_92413);
(statearr_92450_92479[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 17))
{var inst_92395 = (state_92424[13]);var inst_92399 = cljs.core.chunk_first.call(null,inst_92395);var inst_92400 = cljs.core.chunk_rest.call(null,inst_92395);var inst_92401 = cljs.core.count.call(null,inst_92399);var inst_92381 = inst_92400;var inst_92382 = inst_92399;var inst_92383 = inst_92401;var inst_92384 = 0;var state_92424__$1 = (function (){var statearr_92451 = state_92424;(statearr_92451[8] = inst_92383);
(statearr_92451[9] = inst_92384);
(statearr_92451[10] = inst_92382);
(statearr_92451[11] = inst_92381);
return statearr_92451;
})();var statearr_92452_92480 = state_92424__$1;(statearr_92452_92480[2] = null);
(statearr_92452_92480[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 18))
{var inst_92395 = (state_92424[13]);var inst_92404 = cljs.core.first.call(null,inst_92395);var state_92424__$1 = state_92424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_92424__$1,20,out,inst_92404);
} else
{if((state_val_92425 === 19))
{var inst_92410 = (state_92424[2]);var state_92424__$1 = state_92424;var statearr_92453_92481 = state_92424__$1;(statearr_92453_92481[2] = inst_92410);
(statearr_92453_92481[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92425 === 20))
{var inst_92395 = (state_92424[13]);var inst_92406 = (state_92424[2]);var inst_92407 = cljs.core.next.call(null,inst_92395);var inst_92381 = inst_92407;var inst_92382 = null;var inst_92383 = 0;var inst_92384 = 0;var state_92424__$1 = (function (){var statearr_92454 = state_92424;(statearr_92454[15] = inst_92406);
(statearr_92454[8] = inst_92383);
(statearr_92454[9] = inst_92384);
(statearr_92454[10] = inst_92382);
(statearr_92454[11] = inst_92381);
return statearr_92454;
})();var statearr_92455_92482 = state_92424__$1;(statearr_92455_92482[2] = null);
(statearr_92455_92482[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_92459 = (new Array(16));(statearr_92459[0] = state_machine__13310__auto__);
(statearr_92459[1] = 1);
return statearr_92459;
});
var state_machine__13310__auto____1 = (function (state_92424){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_92424);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e92460){if((e92460 instanceof Object))
{var ex__13313__auto__ = e92460;var statearr_92461_92483 = state_92424;(statearr_92461_92483[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92484 = state_92424;
state_92424 = G__92484;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_92424){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_92424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_92462 = f__13410__auto__.call(null);(statearr_92462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_92462;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___92565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_92544){var state_val_92545 = (state_92544[1]);if((state_val_92545 === 1))
{var state_92544__$1 = state_92544;var statearr_92546_92566 = state_92544__$1;(statearr_92546_92566[2] = null);
(statearr_92546_92566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 2))
{var state_92544__$1 = state_92544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92544__$1,4,from);
} else
{if((state_val_92545 === 3))
{var inst_92542 = (state_92544[2]);var state_92544__$1 = state_92544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92544__$1,inst_92542);
} else
{if((state_val_92545 === 4))
{var inst_92527 = (state_92544[7]);var inst_92527__$1 = (state_92544[2]);var inst_92528 = (inst_92527__$1 == null);var state_92544__$1 = (function (){var statearr_92547 = state_92544;(statearr_92547[7] = inst_92527__$1);
return statearr_92547;
})();if(cljs.core.truth_(inst_92528))
{var statearr_92548_92567 = state_92544__$1;(statearr_92548_92567[1] = 5);
} else
{var statearr_92549_92568 = state_92544__$1;(statearr_92549_92568[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 5))
{var state_92544__$1 = state_92544;if(cljs.core.truth_(close_QMARK_))
{var statearr_92550_92569 = state_92544__$1;(statearr_92550_92569[1] = 8);
} else
{var statearr_92551_92570 = state_92544__$1;(statearr_92551_92570[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 6))
{var inst_92527 = (state_92544[7]);var state_92544__$1 = state_92544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_92544__$1,11,to,inst_92527);
} else
{if((state_val_92545 === 7))
{var inst_92540 = (state_92544[2]);var state_92544__$1 = state_92544;var statearr_92552_92571 = state_92544__$1;(statearr_92552_92571[2] = inst_92540);
(statearr_92552_92571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 8))
{var inst_92531 = cljs.core.async.close_BANG_.call(null,to);var state_92544__$1 = state_92544;var statearr_92553_92572 = state_92544__$1;(statearr_92553_92572[2] = inst_92531);
(statearr_92553_92572[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 9))
{var state_92544__$1 = state_92544;var statearr_92554_92573 = state_92544__$1;(statearr_92554_92573[2] = null);
(statearr_92554_92573[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 10))
{var inst_92534 = (state_92544[2]);var state_92544__$1 = state_92544;var statearr_92555_92574 = state_92544__$1;(statearr_92555_92574[2] = inst_92534);
(statearr_92555_92574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92545 === 11))
{var inst_92537 = (state_92544[2]);var state_92544__$1 = (function (){var statearr_92556 = state_92544;(statearr_92556[8] = inst_92537);
return statearr_92556;
})();var statearr_92557_92575 = state_92544__$1;(statearr_92557_92575[2] = null);
(statearr_92557_92575[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_92561 = (new Array(9));(statearr_92561[0] = state_machine__13310__auto__);
(statearr_92561[1] = 1);
return statearr_92561;
});
var state_machine__13310__auto____1 = (function (state_92544){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_92544);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e92562){if((e92562 instanceof Object))
{var ex__13313__auto__ = e92562;var statearr_92563_92576 = state_92544;(statearr_92563_92576[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92544);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92577 = state_92544;
state_92544 = G__92577;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_92544){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_92544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_92564 = f__13410__auto__.call(null);(statearr_92564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___92565);
return statearr_92564;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___92664 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_92642){var state_val_92643 = (state_92642[1]);if((state_val_92643 === 1))
{var state_92642__$1 = state_92642;var statearr_92644_92665 = state_92642__$1;(statearr_92644_92665[2] = null);
(statearr_92644_92665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 2))
{var state_92642__$1 = state_92642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92642__$1,4,ch);
} else
{if((state_val_92643 === 3))
{var inst_92640 = (state_92642[2]);var state_92642__$1 = state_92642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92642__$1,inst_92640);
} else
{if((state_val_92643 === 4))
{var inst_92623 = (state_92642[7]);var inst_92623__$1 = (state_92642[2]);var inst_92624 = (inst_92623__$1 == null);var state_92642__$1 = (function (){var statearr_92645 = state_92642;(statearr_92645[7] = inst_92623__$1);
return statearr_92645;
})();if(cljs.core.truth_(inst_92624))
{var statearr_92646_92666 = state_92642__$1;(statearr_92646_92666[1] = 5);
} else
{var statearr_92647_92667 = state_92642__$1;(statearr_92647_92667[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 5))
{var inst_92626 = cljs.core.async.close_BANG_.call(null,tc);var inst_92627 = cljs.core.async.close_BANG_.call(null,fc);var state_92642__$1 = (function (){var statearr_92648 = state_92642;(statearr_92648[8] = inst_92626);
return statearr_92648;
})();var statearr_92649_92668 = state_92642__$1;(statearr_92649_92668[2] = inst_92627);
(statearr_92649_92668[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 6))
{var inst_92623 = (state_92642[7]);var inst_92629 = p.call(null,inst_92623);var state_92642__$1 = state_92642;if(cljs.core.truth_(inst_92629))
{var statearr_92650_92669 = state_92642__$1;(statearr_92650_92669[1] = 9);
} else
{var statearr_92651_92670 = state_92642__$1;(statearr_92651_92670[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 7))
{var inst_92638 = (state_92642[2]);var state_92642__$1 = state_92642;var statearr_92652_92671 = state_92642__$1;(statearr_92652_92671[2] = inst_92638);
(statearr_92652_92671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 8))
{var inst_92635 = (state_92642[2]);var state_92642__$1 = (function (){var statearr_92653 = state_92642;(statearr_92653[9] = inst_92635);
return statearr_92653;
})();var statearr_92654_92672 = state_92642__$1;(statearr_92654_92672[2] = null);
(statearr_92654_92672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 9))
{var state_92642__$1 = state_92642;var statearr_92655_92673 = state_92642__$1;(statearr_92655_92673[2] = tc);
(statearr_92655_92673[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 10))
{var state_92642__$1 = state_92642;var statearr_92656_92674 = state_92642__$1;(statearr_92656_92674[2] = fc);
(statearr_92656_92674[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92643 === 11))
{var inst_92623 = (state_92642[7]);var inst_92633 = (state_92642[2]);var state_92642__$1 = state_92642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_92642__$1,8,inst_92633,inst_92623);
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
var state_machine__13310__auto____0 = (function (){var statearr_92660 = (new Array(10));(statearr_92660[0] = state_machine__13310__auto__);
(statearr_92660[1] = 1);
return statearr_92660;
});
var state_machine__13310__auto____1 = (function (state_92642){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_92642);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e92661){if((e92661 instanceof Object))
{var ex__13313__auto__ = e92661;var statearr_92662_92675 = state_92642;(statearr_92662_92675[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92676 = state_92642;
state_92642 = G__92676;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_92642){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_92642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_92663 = f__13410__auto__.call(null);(statearr_92663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___92664);
return statearr_92663;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_92723){var state_val_92724 = (state_92723[1]);if((state_val_92724 === 7))
{var inst_92719 = (state_92723[2]);var state_92723__$1 = state_92723;var statearr_92725_92741 = state_92723__$1;(statearr_92725_92741[2] = inst_92719);
(statearr_92725_92741[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92724 === 6))
{var inst_92712 = (state_92723[7]);var inst_92709 = (state_92723[8]);var inst_92716 = f.call(null,inst_92709,inst_92712);var inst_92709__$1 = inst_92716;var state_92723__$1 = (function (){var statearr_92726 = state_92723;(statearr_92726[8] = inst_92709__$1);
return statearr_92726;
})();var statearr_92727_92742 = state_92723__$1;(statearr_92727_92742[2] = null);
(statearr_92727_92742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92724 === 5))
{var inst_92709 = (state_92723[8]);var state_92723__$1 = state_92723;var statearr_92728_92743 = state_92723__$1;(statearr_92728_92743[2] = inst_92709);
(statearr_92728_92743[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92724 === 4))
{var inst_92712 = (state_92723[7]);var inst_92712__$1 = (state_92723[2]);var inst_92713 = (inst_92712__$1 == null);var state_92723__$1 = (function (){var statearr_92729 = state_92723;(statearr_92729[7] = inst_92712__$1);
return statearr_92729;
})();if(cljs.core.truth_(inst_92713))
{var statearr_92730_92744 = state_92723__$1;(statearr_92730_92744[1] = 5);
} else
{var statearr_92731_92745 = state_92723__$1;(statearr_92731_92745[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92724 === 3))
{var inst_92721 = (state_92723[2]);var state_92723__$1 = state_92723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92723__$1,inst_92721);
} else
{if((state_val_92724 === 2))
{var state_92723__$1 = state_92723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92723__$1,4,ch);
} else
{if((state_val_92724 === 1))
{var inst_92709 = init;var state_92723__$1 = (function (){var statearr_92732 = state_92723;(statearr_92732[8] = inst_92709);
return statearr_92732;
})();var statearr_92733_92746 = state_92723__$1;(statearr_92733_92746[2] = null);
(statearr_92733_92746[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_92737 = (new Array(9));(statearr_92737[0] = state_machine__13310__auto__);
(statearr_92737[1] = 1);
return statearr_92737;
});
var state_machine__13310__auto____1 = (function (state_92723){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_92723);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e92738){if((e92738 instanceof Object))
{var ex__13313__auto__ = e92738;var statearr_92739_92747 = state_92723;(statearr_92739_92747[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92748 = state_92723;
state_92723 = G__92748;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_92723){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_92723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_92740 = f__13410__auto__.call(null);(statearr_92740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_92740;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_92810){var state_val_92811 = (state_92810[1]);if((state_val_92811 === 1))
{var inst_92790 = cljs.core.seq.call(null,coll);var inst_92791 = inst_92790;var state_92810__$1 = (function (){var statearr_92812 = state_92810;(statearr_92812[7] = inst_92791);
return statearr_92812;
})();var statearr_92813_92831 = state_92810__$1;(statearr_92813_92831[2] = null);
(statearr_92813_92831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 2))
{var inst_92791 = (state_92810[7]);var state_92810__$1 = state_92810;if(cljs.core.truth_(inst_92791))
{var statearr_92814_92832 = state_92810__$1;(statearr_92814_92832[1] = 4);
} else
{var statearr_92815_92833 = state_92810__$1;(statearr_92815_92833[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 3))
{var inst_92808 = (state_92810[2]);var state_92810__$1 = state_92810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92810__$1,inst_92808);
} else
{if((state_val_92811 === 4))
{var inst_92791 = (state_92810[7]);var inst_92794 = cljs.core.first.call(null,inst_92791);var state_92810__$1 = state_92810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_92810__$1,7,ch,inst_92794);
} else
{if((state_val_92811 === 5))
{var state_92810__$1 = state_92810;if(cljs.core.truth_(close_QMARK_))
{var statearr_92816_92834 = state_92810__$1;(statearr_92816_92834[1] = 8);
} else
{var statearr_92817_92835 = state_92810__$1;(statearr_92817_92835[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 6))
{var inst_92806 = (state_92810[2]);var state_92810__$1 = state_92810;var statearr_92818_92836 = state_92810__$1;(statearr_92818_92836[2] = inst_92806);
(statearr_92818_92836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 7))
{var inst_92791 = (state_92810[7]);var inst_92796 = (state_92810[2]);var inst_92797 = cljs.core.next.call(null,inst_92791);var inst_92791__$1 = inst_92797;var state_92810__$1 = (function (){var statearr_92819 = state_92810;(statearr_92819[8] = inst_92796);
(statearr_92819[7] = inst_92791__$1);
return statearr_92819;
})();var statearr_92820_92837 = state_92810__$1;(statearr_92820_92837[2] = null);
(statearr_92820_92837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 8))
{var inst_92801 = cljs.core.async.close_BANG_.call(null,ch);var state_92810__$1 = state_92810;var statearr_92821_92838 = state_92810__$1;(statearr_92821_92838[2] = inst_92801);
(statearr_92821_92838[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 9))
{var state_92810__$1 = state_92810;var statearr_92822_92839 = state_92810__$1;(statearr_92822_92839[2] = null);
(statearr_92822_92839[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92811 === 10))
{var inst_92804 = (state_92810[2]);var state_92810__$1 = state_92810;var statearr_92823_92840 = state_92810__$1;(statearr_92823_92840[2] = inst_92804);
(statearr_92823_92840[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_92827 = (new Array(9));(statearr_92827[0] = state_machine__13310__auto__);
(statearr_92827[1] = 1);
return statearr_92827;
});
var state_machine__13310__auto____1 = (function (state_92810){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_92810);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e92828){if((e92828 instanceof Object))
{var ex__13313__auto__ = e92828;var statearr_92829_92841 = state_92810;(statearr_92829_92841[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92842 = state_92810;
state_92810 = G__92842;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_92810){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_92810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_92830 = f__13410__auto__.call(null);(statearr_92830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_92830;
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
cljs.core.async.Mux = (function (){var obj92844 = {};return obj92844;
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
cljs.core.async.Mult = (function (){var obj92846 = {};return obj92846;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t93061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t93061 = (function (cs,ch,mult,meta93062){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta93062 = meta93062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t93061.cljs$lang$type = true;
cljs.core.async.t93061.cljs$lang$ctorStr = "cljs.core.async/t93061";
cljs.core.async.t93061.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t93061");
});})(cs))
;
cljs.core.async.t93061.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t93061.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t93061.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t93061.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t93061.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t93061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t93061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_93063){var self__ = this;
var _93063__$1 = this;return self__.meta93062;
});})(cs))
;
cljs.core.async.t93061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_93063,meta93062__$1){var self__ = this;
var _93063__$1 = this;return (new cljs.core.async.t93061(self__.cs,self__.ch,self__.mult,meta93062__$1));
});})(cs))
;
cljs.core.async.__GT_t93061 = ((function (cs){
return (function __GT_t93061(cs__$1,ch__$1,mult__$1,meta93062){return (new cljs.core.async.t93061(cs__$1,ch__$1,mult__$1,meta93062));
});})(cs))
;
}
return (new cljs.core.async.t93061(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___93275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_93193){var state_val_93194 = (state_93193[1]);if((state_val_93194 === 32))
{var inst_93142 = (state_93193[7]);var inst_93066 = (state_93193[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_93193,31,Object,null,30);var inst_93149 = cljs.core.async.put_BANG_.call(null,inst_93142,inst_93066,done);var state_93193__$1 = state_93193;var statearr_93195_93276 = state_93193__$1;(statearr_93195_93276[2] = inst_93149);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 1))
{var state_93193__$1 = state_93193;var statearr_93196_93277 = state_93193__$1;(statearr_93196_93277[2] = null);
(statearr_93196_93277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 33))
{var inst_93155 = (state_93193[9]);var inst_93157 = cljs.core.chunked_seq_QMARK_.call(null,inst_93155);var state_93193__$1 = state_93193;if(inst_93157)
{var statearr_93197_93278 = state_93193__$1;(statearr_93197_93278[1] = 36);
} else
{var statearr_93198_93279 = state_93193__$1;(statearr_93198_93279[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 2))
{var state_93193__$1 = state_93193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93193__$1,4,ch);
} else
{if((state_val_93194 === 34))
{var state_93193__$1 = state_93193;var statearr_93199_93280 = state_93193__$1;(statearr_93199_93280[2] = null);
(statearr_93199_93280[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 3))
{var inst_93191 = (state_93193[2]);var state_93193__$1 = state_93193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93193__$1,inst_93191);
} else
{if((state_val_93194 === 35))
{var inst_93180 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93200_93281 = state_93193__$1;(statearr_93200_93281[2] = inst_93180);
(statearr_93200_93281[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 4))
{var inst_93066 = (state_93193[8]);var inst_93066__$1 = (state_93193[2]);var inst_93067 = (inst_93066__$1 == null);var state_93193__$1 = (function (){var statearr_93201 = state_93193;(statearr_93201[8] = inst_93066__$1);
return statearr_93201;
})();if(cljs.core.truth_(inst_93067))
{var statearr_93202_93282 = state_93193__$1;(statearr_93202_93282[1] = 5);
} else
{var statearr_93203_93283 = state_93193__$1;(statearr_93203_93283[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 36))
{var inst_93155 = (state_93193[9]);var inst_93159 = cljs.core.chunk_first.call(null,inst_93155);var inst_93160 = cljs.core.chunk_rest.call(null,inst_93155);var inst_93161 = cljs.core.count.call(null,inst_93159);var inst_93134 = inst_93160;var inst_93135 = inst_93159;var inst_93136 = inst_93161;var inst_93137 = 0;var state_93193__$1 = (function (){var statearr_93204 = state_93193;(statearr_93204[10] = inst_93136);
(statearr_93204[11] = inst_93135);
(statearr_93204[12] = inst_93137);
(statearr_93204[13] = inst_93134);
return statearr_93204;
})();var statearr_93205_93284 = state_93193__$1;(statearr_93205_93284[2] = null);
(statearr_93205_93284[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 5))
{var inst_93073 = cljs.core.deref.call(null,cs);var inst_93074 = cljs.core.seq.call(null,inst_93073);var inst_93075 = inst_93074;var inst_93076 = null;var inst_93077 = 0;var inst_93078 = 0;var state_93193__$1 = (function (){var statearr_93206 = state_93193;(statearr_93206[14] = inst_93076);
(statearr_93206[15] = inst_93077);
(statearr_93206[16] = inst_93078);
(statearr_93206[17] = inst_93075);
return statearr_93206;
})();var statearr_93207_93285 = state_93193__$1;(statearr_93207_93285[2] = null);
(statearr_93207_93285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 37))
{var inst_93155 = (state_93193[9]);var inst_93164 = cljs.core.first.call(null,inst_93155);var state_93193__$1 = (function (){var statearr_93208 = state_93193;(statearr_93208[18] = inst_93164);
return statearr_93208;
})();var statearr_93209_93286 = state_93193__$1;(statearr_93209_93286[2] = null);
(statearr_93209_93286[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 6))
{var inst_93125 = cljs.core.deref.call(null,cs);var inst_93126 = cljs.core.keys.call(null,inst_93125);var inst_93127 = cljs.core.count.call(null,inst_93126);var inst_93128 = cljs.core.reset_BANG_.call(null,dctr,inst_93127);var inst_93133 = cljs.core.seq.call(null,inst_93126);var inst_93134 = inst_93133;var inst_93135 = null;var inst_93136 = 0;var inst_93137 = 0;var state_93193__$1 = (function (){var statearr_93210 = state_93193;(statearr_93210[19] = inst_93128);
(statearr_93210[10] = inst_93136);
(statearr_93210[11] = inst_93135);
(statearr_93210[12] = inst_93137);
(statearr_93210[13] = inst_93134);
return statearr_93210;
})();var statearr_93211_93287 = state_93193__$1;(statearr_93211_93287[2] = null);
(statearr_93211_93287[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 38))
{var inst_93177 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93212_93288 = state_93193__$1;(statearr_93212_93288[2] = inst_93177);
(statearr_93212_93288[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 7))
{var inst_93189 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93213_93289 = state_93193__$1;(statearr_93213_93289[2] = inst_93189);
(statearr_93213_93289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 39))
{var inst_93155 = (state_93193[9]);var inst_93173 = (state_93193[2]);var inst_93174 = cljs.core.next.call(null,inst_93155);var inst_93134 = inst_93174;var inst_93135 = null;var inst_93136 = 0;var inst_93137 = 0;var state_93193__$1 = (function (){var statearr_93214 = state_93193;(statearr_93214[10] = inst_93136);
(statearr_93214[11] = inst_93135);
(statearr_93214[12] = inst_93137);
(statearr_93214[13] = inst_93134);
(statearr_93214[20] = inst_93173);
return statearr_93214;
})();var statearr_93215_93290 = state_93193__$1;(statearr_93215_93290[2] = null);
(statearr_93215_93290[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 8))
{var inst_93077 = (state_93193[15]);var inst_93078 = (state_93193[16]);var inst_93080 = (inst_93078 < inst_93077);var inst_93081 = inst_93080;var state_93193__$1 = state_93193;if(cljs.core.truth_(inst_93081))
{var statearr_93216_93291 = state_93193__$1;(statearr_93216_93291[1] = 10);
} else
{var statearr_93217_93292 = state_93193__$1;(statearr_93217_93292[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 40))
{var inst_93164 = (state_93193[18]);var inst_93165 = (state_93193[2]);var inst_93166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_93167 = cljs.core.async.untap_STAR_.call(null,m,inst_93164);var state_93193__$1 = (function (){var statearr_93218 = state_93193;(statearr_93218[21] = inst_93165);
(statearr_93218[22] = inst_93166);
return statearr_93218;
})();var statearr_93219_93293 = state_93193__$1;(statearr_93219_93293[2] = inst_93167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 9))
{var inst_93123 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93220_93294 = state_93193__$1;(statearr_93220_93294[2] = inst_93123);
(statearr_93220_93294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 41))
{var inst_93066 = (state_93193[8]);var inst_93164 = (state_93193[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_93193,40,Object,null,39);var inst_93171 = cljs.core.async.put_BANG_.call(null,inst_93164,inst_93066,done);var state_93193__$1 = state_93193;var statearr_93221_93295 = state_93193__$1;(statearr_93221_93295[2] = inst_93171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 10))
{var inst_93076 = (state_93193[14]);var inst_93078 = (state_93193[16]);var inst_93084 = cljs.core._nth.call(null,inst_93076,inst_93078);var inst_93085 = cljs.core.nth.call(null,inst_93084,0,null);var inst_93086 = cljs.core.nth.call(null,inst_93084,1,null);var state_93193__$1 = (function (){var statearr_93222 = state_93193;(statearr_93222[23] = inst_93085);
return statearr_93222;
})();if(cljs.core.truth_(inst_93086))
{var statearr_93223_93296 = state_93193__$1;(statearr_93223_93296[1] = 13);
} else
{var statearr_93224_93297 = state_93193__$1;(statearr_93224_93297[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 42))
{var inst_93186 = (state_93193[2]);var state_93193__$1 = (function (){var statearr_93225 = state_93193;(statearr_93225[24] = inst_93186);
return statearr_93225;
})();var statearr_93226_93298 = state_93193__$1;(statearr_93226_93298[2] = null);
(statearr_93226_93298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 11))
{var inst_93075 = (state_93193[17]);var inst_93095 = (state_93193[25]);var inst_93095__$1 = cljs.core.seq.call(null,inst_93075);var state_93193__$1 = (function (){var statearr_93227 = state_93193;(statearr_93227[25] = inst_93095__$1);
return statearr_93227;
})();if(inst_93095__$1)
{var statearr_93228_93299 = state_93193__$1;(statearr_93228_93299[1] = 16);
} else
{var statearr_93229_93300 = state_93193__$1;(statearr_93229_93300[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 12))
{var inst_93121 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93230_93301 = state_93193__$1;(statearr_93230_93301[2] = inst_93121);
(statearr_93230_93301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 13))
{var inst_93085 = (state_93193[23]);var inst_93088 = cljs.core.async.close_BANG_.call(null,inst_93085);var state_93193__$1 = state_93193;var statearr_93234_93302 = state_93193__$1;(statearr_93234_93302[2] = inst_93088);
(statearr_93234_93302[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 14))
{var state_93193__$1 = state_93193;var statearr_93235_93303 = state_93193__$1;(statearr_93235_93303[2] = null);
(statearr_93235_93303[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 15))
{var inst_93076 = (state_93193[14]);var inst_93077 = (state_93193[15]);var inst_93078 = (state_93193[16]);var inst_93075 = (state_93193[17]);var inst_93091 = (state_93193[2]);var inst_93092 = (inst_93078 + 1);var tmp93231 = inst_93076;var tmp93232 = inst_93077;var tmp93233 = inst_93075;var inst_93075__$1 = tmp93233;var inst_93076__$1 = tmp93231;var inst_93077__$1 = tmp93232;var inst_93078__$1 = inst_93092;var state_93193__$1 = (function (){var statearr_93236 = state_93193;(statearr_93236[14] = inst_93076__$1);
(statearr_93236[15] = inst_93077__$1);
(statearr_93236[16] = inst_93078__$1);
(statearr_93236[17] = inst_93075__$1);
(statearr_93236[26] = inst_93091);
return statearr_93236;
})();var statearr_93237_93304 = state_93193__$1;(statearr_93237_93304[2] = null);
(statearr_93237_93304[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 16))
{var inst_93095 = (state_93193[25]);var inst_93097 = cljs.core.chunked_seq_QMARK_.call(null,inst_93095);var state_93193__$1 = state_93193;if(inst_93097)
{var statearr_93238_93305 = state_93193__$1;(statearr_93238_93305[1] = 19);
} else
{var statearr_93239_93306 = state_93193__$1;(statearr_93239_93306[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 17))
{var state_93193__$1 = state_93193;var statearr_93240_93307 = state_93193__$1;(statearr_93240_93307[2] = null);
(statearr_93240_93307[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 18))
{var inst_93119 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93241_93308 = state_93193__$1;(statearr_93241_93308[2] = inst_93119);
(statearr_93241_93308[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 19))
{var inst_93095 = (state_93193[25]);var inst_93099 = cljs.core.chunk_first.call(null,inst_93095);var inst_93100 = cljs.core.chunk_rest.call(null,inst_93095);var inst_93101 = cljs.core.count.call(null,inst_93099);var inst_93075 = inst_93100;var inst_93076 = inst_93099;var inst_93077 = inst_93101;var inst_93078 = 0;var state_93193__$1 = (function (){var statearr_93242 = state_93193;(statearr_93242[14] = inst_93076);
(statearr_93242[15] = inst_93077);
(statearr_93242[16] = inst_93078);
(statearr_93242[17] = inst_93075);
return statearr_93242;
})();var statearr_93243_93309 = state_93193__$1;(statearr_93243_93309[2] = null);
(statearr_93243_93309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 20))
{var inst_93095 = (state_93193[25]);var inst_93105 = cljs.core.first.call(null,inst_93095);var inst_93106 = cljs.core.nth.call(null,inst_93105,0,null);var inst_93107 = cljs.core.nth.call(null,inst_93105,1,null);var state_93193__$1 = (function (){var statearr_93244 = state_93193;(statearr_93244[27] = inst_93106);
return statearr_93244;
})();if(cljs.core.truth_(inst_93107))
{var statearr_93245_93310 = state_93193__$1;(statearr_93245_93310[1] = 22);
} else
{var statearr_93246_93311 = state_93193__$1;(statearr_93246_93311[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 21))
{var inst_93116 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93247_93312 = state_93193__$1;(statearr_93247_93312[2] = inst_93116);
(statearr_93247_93312[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 22))
{var inst_93106 = (state_93193[27]);var inst_93109 = cljs.core.async.close_BANG_.call(null,inst_93106);var state_93193__$1 = state_93193;var statearr_93248_93313 = state_93193__$1;(statearr_93248_93313[2] = inst_93109);
(statearr_93248_93313[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 23))
{var state_93193__$1 = state_93193;var statearr_93249_93314 = state_93193__$1;(statearr_93249_93314[2] = null);
(statearr_93249_93314[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 24))
{var inst_93095 = (state_93193[25]);var inst_93112 = (state_93193[2]);var inst_93113 = cljs.core.next.call(null,inst_93095);var inst_93075 = inst_93113;var inst_93076 = null;var inst_93077 = 0;var inst_93078 = 0;var state_93193__$1 = (function (){var statearr_93250 = state_93193;(statearr_93250[14] = inst_93076);
(statearr_93250[15] = inst_93077);
(statearr_93250[16] = inst_93078);
(statearr_93250[28] = inst_93112);
(statearr_93250[17] = inst_93075);
return statearr_93250;
})();var statearr_93251_93315 = state_93193__$1;(statearr_93251_93315[2] = null);
(statearr_93251_93315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 25))
{var inst_93136 = (state_93193[10]);var inst_93137 = (state_93193[12]);var inst_93139 = (inst_93137 < inst_93136);var inst_93140 = inst_93139;var state_93193__$1 = state_93193;if(cljs.core.truth_(inst_93140))
{var statearr_93252_93316 = state_93193__$1;(statearr_93252_93316[1] = 27);
} else
{var statearr_93253_93317 = state_93193__$1;(statearr_93253_93317[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 26))
{var inst_93184 = (state_93193[2]);var state_93193__$1 = (function (){var statearr_93254 = state_93193;(statearr_93254[29] = inst_93184);
return statearr_93254;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93193__$1,42,dchan);
} else
{if((state_val_93194 === 27))
{var inst_93135 = (state_93193[11]);var inst_93137 = (state_93193[12]);var inst_93142 = cljs.core._nth.call(null,inst_93135,inst_93137);var state_93193__$1 = (function (){var statearr_93255 = state_93193;(statearr_93255[7] = inst_93142);
return statearr_93255;
})();var statearr_93256_93318 = state_93193__$1;(statearr_93256_93318[2] = null);
(statearr_93256_93318[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 28))
{var inst_93155 = (state_93193[9]);var inst_93134 = (state_93193[13]);var inst_93155__$1 = cljs.core.seq.call(null,inst_93134);var state_93193__$1 = (function (){var statearr_93260 = state_93193;(statearr_93260[9] = inst_93155__$1);
return statearr_93260;
})();if(inst_93155__$1)
{var statearr_93261_93319 = state_93193__$1;(statearr_93261_93319[1] = 33);
} else
{var statearr_93262_93320 = state_93193__$1;(statearr_93262_93320[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 29))
{var inst_93182 = (state_93193[2]);var state_93193__$1 = state_93193;var statearr_93263_93321 = state_93193__$1;(statearr_93263_93321[2] = inst_93182);
(statearr_93263_93321[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 30))
{var inst_93136 = (state_93193[10]);var inst_93135 = (state_93193[11]);var inst_93137 = (state_93193[12]);var inst_93134 = (state_93193[13]);var inst_93151 = (state_93193[2]);var inst_93152 = (inst_93137 + 1);var tmp93257 = inst_93136;var tmp93258 = inst_93135;var tmp93259 = inst_93134;var inst_93134__$1 = tmp93259;var inst_93135__$1 = tmp93258;var inst_93136__$1 = tmp93257;var inst_93137__$1 = inst_93152;var state_93193__$1 = (function (){var statearr_93264 = state_93193;(statearr_93264[10] = inst_93136__$1);
(statearr_93264[11] = inst_93135__$1);
(statearr_93264[12] = inst_93137__$1);
(statearr_93264[30] = inst_93151);
(statearr_93264[13] = inst_93134__$1);
return statearr_93264;
})();var statearr_93265_93322 = state_93193__$1;(statearr_93265_93322[2] = null);
(statearr_93265_93322[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93194 === 31))
{var inst_93142 = (state_93193[7]);var inst_93143 = (state_93193[2]);var inst_93144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_93145 = cljs.core.async.untap_STAR_.call(null,m,inst_93142);var state_93193__$1 = (function (){var statearr_93266 = state_93193;(statearr_93266[31] = inst_93143);
(statearr_93266[32] = inst_93144);
return statearr_93266;
})();var statearr_93267_93323 = state_93193__$1;(statearr_93267_93323[2] = inst_93145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93193__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_93271 = (new Array(33));(statearr_93271[0] = state_machine__13310__auto__);
(statearr_93271[1] = 1);
return statearr_93271;
});
var state_machine__13310__auto____1 = (function (state_93193){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_93193);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e93272){if((e93272 instanceof Object))
{var ex__13313__auto__ = e93272;var statearr_93273_93324 = state_93193;(statearr_93273_93324[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e93272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__93325 = state_93193;
state_93193 = G__93325;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_93193){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_93193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_93274 = f__13410__auto__.call(null);(statearr_93274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___93275);
return statearr_93274;
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
cljs.core.async.Mix = (function (){var obj93327 = {};return obj93327;
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
;var m = (function (){if(typeof cljs.core.async.t93437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t93437 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta93438){
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
this.meta93438 = meta93438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t93437.cljs$lang$type = true;
cljs.core.async.t93437.cljs$lang$ctorStr = "cljs.core.async/t93437";
cljs.core.async.t93437.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t93437");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t93437.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t93437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_93439){var self__ = this;
var _93439__$1 = this;return self__.meta93438;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t93437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_93439,meta93438__$1){var self__ = this;
var _93439__$1 = this;return (new cljs.core.async.t93437(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta93438__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t93437 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t93437(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta93438){return (new cljs.core.async.t93437(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta93438));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t93437(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___93546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_93504){var state_val_93505 = (state_93504[1]);if((state_val_93505 === 1))
{var inst_93443 = (state_93504[7]);var inst_93443__$1 = calc_state.call(null);var inst_93444 = cljs.core.seq_QMARK_.call(null,inst_93443__$1);var state_93504__$1 = (function (){var statearr_93506 = state_93504;(statearr_93506[7] = inst_93443__$1);
return statearr_93506;
})();if(inst_93444)
{var statearr_93507_93547 = state_93504__$1;(statearr_93507_93547[1] = 2);
} else
{var statearr_93508_93548 = state_93504__$1;(statearr_93508_93548[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 2))
{var inst_93443 = (state_93504[7]);var inst_93446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_93443);var state_93504__$1 = state_93504;var statearr_93509_93549 = state_93504__$1;(statearr_93509_93549[2] = inst_93446);
(statearr_93509_93549[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 3))
{var inst_93443 = (state_93504[7]);var state_93504__$1 = state_93504;var statearr_93510_93550 = state_93504__$1;(statearr_93510_93550[2] = inst_93443);
(statearr_93510_93550[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 4))
{var inst_93443 = (state_93504[7]);var inst_93449 = (state_93504[2]);var inst_93450 = cljs.core.get.call(null,inst_93449,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_93451 = cljs.core.get.call(null,inst_93449,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_93452 = cljs.core.get.call(null,inst_93449,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_93453 = inst_93443;var state_93504__$1 = (function (){var statearr_93511 = state_93504;(statearr_93511[8] = inst_93450);
(statearr_93511[9] = inst_93451);
(statearr_93511[10] = inst_93452);
(statearr_93511[11] = inst_93453);
return statearr_93511;
})();var statearr_93512_93551 = state_93504__$1;(statearr_93512_93551[2] = null);
(statearr_93512_93551[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 5))
{var inst_93453 = (state_93504[11]);var inst_93456 = cljs.core.seq_QMARK_.call(null,inst_93453);var state_93504__$1 = state_93504;if(inst_93456)
{var statearr_93513_93552 = state_93504__$1;(statearr_93513_93552[1] = 7);
} else
{var statearr_93514_93553 = state_93504__$1;(statearr_93514_93553[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 6))
{var inst_93502 = (state_93504[2]);var state_93504__$1 = state_93504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93504__$1,inst_93502);
} else
{if((state_val_93505 === 7))
{var inst_93453 = (state_93504[11]);var inst_93458 = cljs.core.apply.call(null,cljs.core.hash_map,inst_93453);var state_93504__$1 = state_93504;var statearr_93515_93554 = state_93504__$1;(statearr_93515_93554[2] = inst_93458);
(statearr_93515_93554[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 8))
{var inst_93453 = (state_93504[11]);var state_93504__$1 = state_93504;var statearr_93516_93555 = state_93504__$1;(statearr_93516_93555[2] = inst_93453);
(statearr_93516_93555[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 9))
{var inst_93461 = (state_93504[12]);var inst_93461__$1 = (state_93504[2]);var inst_93462 = cljs.core.get.call(null,inst_93461__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_93463 = cljs.core.get.call(null,inst_93461__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_93464 = cljs.core.get.call(null,inst_93461__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_93504__$1 = (function (){var statearr_93517 = state_93504;(statearr_93517[12] = inst_93461__$1);
(statearr_93517[13] = inst_93463);
(statearr_93517[14] = inst_93464);
return statearr_93517;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_93504__$1,10,inst_93462);
} else
{if((state_val_93505 === 10))
{var inst_93468 = (state_93504[15]);var inst_93469 = (state_93504[16]);var inst_93467 = (state_93504[2]);var inst_93468__$1 = cljs.core.nth.call(null,inst_93467,0,null);var inst_93469__$1 = cljs.core.nth.call(null,inst_93467,1,null);var inst_93470 = (inst_93468__$1 == null);var inst_93471 = cljs.core._EQ_.call(null,inst_93469__$1,change);var inst_93472 = (inst_93470) || (inst_93471);var state_93504__$1 = (function (){var statearr_93518 = state_93504;(statearr_93518[15] = inst_93468__$1);
(statearr_93518[16] = inst_93469__$1);
return statearr_93518;
})();if(cljs.core.truth_(inst_93472))
{var statearr_93519_93556 = state_93504__$1;(statearr_93519_93556[1] = 11);
} else
{var statearr_93520_93557 = state_93504__$1;(statearr_93520_93557[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 11))
{var inst_93468 = (state_93504[15]);var inst_93474 = (inst_93468 == null);var state_93504__$1 = state_93504;if(cljs.core.truth_(inst_93474))
{var statearr_93521_93558 = state_93504__$1;(statearr_93521_93558[1] = 14);
} else
{var statearr_93522_93559 = state_93504__$1;(statearr_93522_93559[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 12))
{var inst_93464 = (state_93504[14]);var inst_93469 = (state_93504[16]);var inst_93483 = (state_93504[17]);var inst_93483__$1 = inst_93464.call(null,inst_93469);var state_93504__$1 = (function (){var statearr_93523 = state_93504;(statearr_93523[17] = inst_93483__$1);
return statearr_93523;
})();if(cljs.core.truth_(inst_93483__$1))
{var statearr_93524_93560 = state_93504__$1;(statearr_93524_93560[1] = 17);
} else
{var statearr_93525_93561 = state_93504__$1;(statearr_93525_93561[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 13))
{var inst_93500 = (state_93504[2]);var state_93504__$1 = state_93504;var statearr_93526_93562 = state_93504__$1;(statearr_93526_93562[2] = inst_93500);
(statearr_93526_93562[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 14))
{var inst_93469 = (state_93504[16]);var inst_93476 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_93469);var state_93504__$1 = state_93504;var statearr_93527_93563 = state_93504__$1;(statearr_93527_93563[2] = inst_93476);
(statearr_93527_93563[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 15))
{var state_93504__$1 = state_93504;var statearr_93528_93564 = state_93504__$1;(statearr_93528_93564[2] = null);
(statearr_93528_93564[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 16))
{var inst_93479 = (state_93504[2]);var inst_93480 = calc_state.call(null);var inst_93453 = inst_93480;var state_93504__$1 = (function (){var statearr_93529 = state_93504;(statearr_93529[11] = inst_93453);
(statearr_93529[18] = inst_93479);
return statearr_93529;
})();var statearr_93530_93565 = state_93504__$1;(statearr_93530_93565[2] = null);
(statearr_93530_93565[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 17))
{var inst_93483 = (state_93504[17]);var state_93504__$1 = state_93504;var statearr_93531_93566 = state_93504__$1;(statearr_93531_93566[2] = inst_93483);
(statearr_93531_93566[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 18))
{var inst_93463 = (state_93504[13]);var inst_93464 = (state_93504[14]);var inst_93469 = (state_93504[16]);var inst_93486 = cljs.core.empty_QMARK_.call(null,inst_93464);var inst_93487 = inst_93463.call(null,inst_93469);var inst_93488 = cljs.core.not.call(null,inst_93487);var inst_93489 = (inst_93486) && (inst_93488);var state_93504__$1 = state_93504;var statearr_93532_93567 = state_93504__$1;(statearr_93532_93567[2] = inst_93489);
(statearr_93532_93567[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 19))
{var inst_93491 = (state_93504[2]);var state_93504__$1 = state_93504;if(cljs.core.truth_(inst_93491))
{var statearr_93533_93568 = state_93504__$1;(statearr_93533_93568[1] = 20);
} else
{var statearr_93534_93569 = state_93504__$1;(statearr_93534_93569[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 20))
{var inst_93468 = (state_93504[15]);var state_93504__$1 = state_93504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93504__$1,23,out,inst_93468);
} else
{if((state_val_93505 === 21))
{var state_93504__$1 = state_93504;var statearr_93535_93570 = state_93504__$1;(statearr_93535_93570[2] = null);
(statearr_93535_93570[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 22))
{var inst_93461 = (state_93504[12]);var inst_93497 = (state_93504[2]);var inst_93453 = inst_93461;var state_93504__$1 = (function (){var statearr_93536 = state_93504;(statearr_93536[19] = inst_93497);
(statearr_93536[11] = inst_93453);
return statearr_93536;
})();var statearr_93537_93571 = state_93504__$1;(statearr_93537_93571[2] = null);
(statearr_93537_93571[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93505 === 23))
{var inst_93494 = (state_93504[2]);var state_93504__$1 = state_93504;var statearr_93538_93572 = state_93504__$1;(statearr_93538_93572[2] = inst_93494);
(statearr_93538_93572[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_93542 = (new Array(20));(statearr_93542[0] = state_machine__13310__auto__);
(statearr_93542[1] = 1);
return statearr_93542;
});
var state_machine__13310__auto____1 = (function (state_93504){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_93504);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e93543){if((e93543 instanceof Object))
{var ex__13313__auto__ = e93543;var statearr_93544_93573 = state_93504;(statearr_93544_93573[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e93543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__93574 = state_93504;
state_93504 = G__93574;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_93504){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_93504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_93545 = f__13410__auto__.call(null);(statearr_93545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___93546);
return statearr_93545;
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
cljs.core.async.Pub = (function (){var obj93576 = {};return obj93576;
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
return (function (p1__93577_SHARP_){if(cljs.core.truth_(p1__93577_SHARP_.call(null,topic)))
{return p1__93577_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__93577_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t93702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t93702 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta93703){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta93703 = meta93703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t93702.cljs$lang$type = true;
cljs.core.async.t93702.cljs$lang$ctorStr = "cljs.core.async/t93702";
cljs.core.async.t93702.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t93702");
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t93702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t93702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_93704){var self__ = this;
var _93704__$1 = this;return self__.meta93703;
});})(mults,ensure_mult))
;
cljs.core.async.t93702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_93704,meta93703__$1){var self__ = this;
var _93704__$1 = this;return (new cljs.core.async.t93702(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta93703__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t93702 = ((function (mults,ensure_mult){
return (function __GT_t93702(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta93703){return (new cljs.core.async.t93702(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta93703));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t93702(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___93826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_93778){var state_val_93779 = (state_93778[1]);if((state_val_93779 === 1))
{var state_93778__$1 = state_93778;var statearr_93780_93827 = state_93778__$1;(statearr_93780_93827[2] = null);
(statearr_93780_93827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 2))
{var state_93778__$1 = state_93778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93778__$1,4,ch);
} else
{if((state_val_93779 === 3))
{var inst_93776 = (state_93778[2]);var state_93778__$1 = state_93778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93778__$1,inst_93776);
} else
{if((state_val_93779 === 4))
{var inst_93707 = (state_93778[7]);var inst_93707__$1 = (state_93778[2]);var inst_93708 = (inst_93707__$1 == null);var state_93778__$1 = (function (){var statearr_93781 = state_93778;(statearr_93781[7] = inst_93707__$1);
return statearr_93781;
})();if(cljs.core.truth_(inst_93708))
{var statearr_93782_93828 = state_93778__$1;(statearr_93782_93828[1] = 5);
} else
{var statearr_93783_93829 = state_93778__$1;(statearr_93783_93829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 5))
{var inst_93714 = cljs.core.deref.call(null,mults);var inst_93715 = cljs.core.vals.call(null,inst_93714);var inst_93716 = cljs.core.seq.call(null,inst_93715);var inst_93717 = inst_93716;var inst_93718 = null;var inst_93719 = 0;var inst_93720 = 0;var state_93778__$1 = (function (){var statearr_93784 = state_93778;(statearr_93784[8] = inst_93720);
(statearr_93784[9] = inst_93718);
(statearr_93784[10] = inst_93719);
(statearr_93784[11] = inst_93717);
return statearr_93784;
})();var statearr_93785_93830 = state_93778__$1;(statearr_93785_93830[2] = null);
(statearr_93785_93830[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 6))
{var inst_93707 = (state_93778[7]);var inst_93757 = (state_93778[12]);var inst_93755 = (state_93778[13]);var inst_93755__$1 = topic_fn.call(null,inst_93707);var inst_93756 = cljs.core.deref.call(null,mults);var inst_93757__$1 = cljs.core.get.call(null,inst_93756,inst_93755__$1);var state_93778__$1 = (function (){var statearr_93786 = state_93778;(statearr_93786[12] = inst_93757__$1);
(statearr_93786[13] = inst_93755__$1);
return statearr_93786;
})();if(cljs.core.truth_(inst_93757__$1))
{var statearr_93787_93831 = state_93778__$1;(statearr_93787_93831[1] = 19);
} else
{var statearr_93788_93832 = state_93778__$1;(statearr_93788_93832[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 7))
{var inst_93774 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93789_93833 = state_93778__$1;(statearr_93789_93833[2] = inst_93774);
(statearr_93789_93833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 8))
{var inst_93720 = (state_93778[8]);var inst_93719 = (state_93778[10]);var inst_93722 = (inst_93720 < inst_93719);var inst_93723 = inst_93722;var state_93778__$1 = state_93778;if(cljs.core.truth_(inst_93723))
{var statearr_93793_93834 = state_93778__$1;(statearr_93793_93834[1] = 10);
} else
{var statearr_93794_93835 = state_93778__$1;(statearr_93794_93835[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 9))
{var inst_93753 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93795_93836 = state_93778__$1;(statearr_93795_93836[2] = inst_93753);
(statearr_93795_93836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 10))
{var inst_93720 = (state_93778[8]);var inst_93718 = (state_93778[9]);var inst_93719 = (state_93778[10]);var inst_93717 = (state_93778[11]);var inst_93725 = cljs.core._nth.call(null,inst_93718,inst_93720);var inst_93726 = cljs.core.async.muxch_STAR_.call(null,inst_93725);var inst_93727 = cljs.core.async.close_BANG_.call(null,inst_93726);var inst_93728 = (inst_93720 + 1);var tmp93790 = inst_93718;var tmp93791 = inst_93719;var tmp93792 = inst_93717;var inst_93717__$1 = tmp93792;var inst_93718__$1 = tmp93790;var inst_93719__$1 = tmp93791;var inst_93720__$1 = inst_93728;var state_93778__$1 = (function (){var statearr_93796 = state_93778;(statearr_93796[8] = inst_93720__$1);
(statearr_93796[14] = inst_93727);
(statearr_93796[9] = inst_93718__$1);
(statearr_93796[10] = inst_93719__$1);
(statearr_93796[11] = inst_93717__$1);
return statearr_93796;
})();var statearr_93797_93837 = state_93778__$1;(statearr_93797_93837[2] = null);
(statearr_93797_93837[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 11))
{var inst_93731 = (state_93778[15]);var inst_93717 = (state_93778[11]);var inst_93731__$1 = cljs.core.seq.call(null,inst_93717);var state_93778__$1 = (function (){var statearr_93798 = state_93778;(statearr_93798[15] = inst_93731__$1);
return statearr_93798;
})();if(inst_93731__$1)
{var statearr_93799_93838 = state_93778__$1;(statearr_93799_93838[1] = 13);
} else
{var statearr_93800_93839 = state_93778__$1;(statearr_93800_93839[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 12))
{var inst_93751 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93801_93840 = state_93778__$1;(statearr_93801_93840[2] = inst_93751);
(statearr_93801_93840[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 13))
{var inst_93731 = (state_93778[15]);var inst_93733 = cljs.core.chunked_seq_QMARK_.call(null,inst_93731);var state_93778__$1 = state_93778;if(inst_93733)
{var statearr_93802_93841 = state_93778__$1;(statearr_93802_93841[1] = 16);
} else
{var statearr_93803_93842 = state_93778__$1;(statearr_93803_93842[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 14))
{var state_93778__$1 = state_93778;var statearr_93804_93843 = state_93778__$1;(statearr_93804_93843[2] = null);
(statearr_93804_93843[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 15))
{var inst_93749 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93805_93844 = state_93778__$1;(statearr_93805_93844[2] = inst_93749);
(statearr_93805_93844[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 16))
{var inst_93731 = (state_93778[15]);var inst_93735 = cljs.core.chunk_first.call(null,inst_93731);var inst_93736 = cljs.core.chunk_rest.call(null,inst_93731);var inst_93737 = cljs.core.count.call(null,inst_93735);var inst_93717 = inst_93736;var inst_93718 = inst_93735;var inst_93719 = inst_93737;var inst_93720 = 0;var state_93778__$1 = (function (){var statearr_93806 = state_93778;(statearr_93806[8] = inst_93720);
(statearr_93806[9] = inst_93718);
(statearr_93806[10] = inst_93719);
(statearr_93806[11] = inst_93717);
return statearr_93806;
})();var statearr_93807_93845 = state_93778__$1;(statearr_93807_93845[2] = null);
(statearr_93807_93845[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 17))
{var inst_93731 = (state_93778[15]);var inst_93740 = cljs.core.first.call(null,inst_93731);var inst_93741 = cljs.core.async.muxch_STAR_.call(null,inst_93740);var inst_93742 = cljs.core.async.close_BANG_.call(null,inst_93741);var inst_93743 = cljs.core.next.call(null,inst_93731);var inst_93717 = inst_93743;var inst_93718 = null;var inst_93719 = 0;var inst_93720 = 0;var state_93778__$1 = (function (){var statearr_93808 = state_93778;(statearr_93808[8] = inst_93720);
(statearr_93808[9] = inst_93718);
(statearr_93808[10] = inst_93719);
(statearr_93808[11] = inst_93717);
(statearr_93808[16] = inst_93742);
return statearr_93808;
})();var statearr_93809_93846 = state_93778__$1;(statearr_93809_93846[2] = null);
(statearr_93809_93846[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 18))
{var inst_93746 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93810_93847 = state_93778__$1;(statearr_93810_93847[2] = inst_93746);
(statearr_93810_93847[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 19))
{var state_93778__$1 = state_93778;var statearr_93811_93848 = state_93778__$1;(statearr_93811_93848[2] = null);
(statearr_93811_93848[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 20))
{var state_93778__$1 = state_93778;var statearr_93812_93849 = state_93778__$1;(statearr_93812_93849[2] = null);
(statearr_93812_93849[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 21))
{var inst_93771 = (state_93778[2]);var state_93778__$1 = (function (){var statearr_93813 = state_93778;(statearr_93813[17] = inst_93771);
return statearr_93813;
})();var statearr_93814_93850 = state_93778__$1;(statearr_93814_93850[2] = null);
(statearr_93814_93850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 22))
{var inst_93768 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93815_93851 = state_93778__$1;(statearr_93815_93851[2] = inst_93768);
(statearr_93815_93851[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 23))
{var inst_93755 = (state_93778[13]);var inst_93759 = (state_93778[2]);var inst_93760 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_93755);var state_93778__$1 = (function (){var statearr_93816 = state_93778;(statearr_93816[18] = inst_93759);
return statearr_93816;
})();var statearr_93817_93852 = state_93778__$1;(statearr_93817_93852[2] = inst_93760);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93779 === 24))
{var inst_93707 = (state_93778[7]);var inst_93757 = (state_93778[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_93778,23,Object,null,22);var inst_93764 = cljs.core.async.muxch_STAR_.call(null,inst_93757);var state_93778__$1 = state_93778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93778__$1,25,inst_93764,inst_93707);
} else
{if((state_val_93779 === 25))
{var inst_93766 = (state_93778[2]);var state_93778__$1 = state_93778;var statearr_93818_93853 = state_93778__$1;(statearr_93818_93853[2] = inst_93766);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93778__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_93822 = (new Array(19));(statearr_93822[0] = state_machine__13310__auto__);
(statearr_93822[1] = 1);
return statearr_93822;
});
var state_machine__13310__auto____1 = (function (state_93778){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_93778);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e93823){if((e93823 instanceof Object))
{var ex__13313__auto__ = e93823;var statearr_93824_93854 = state_93778;(statearr_93824_93854[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e93823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__93855 = state_93778;
state_93778 = G__93855;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_93778){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_93778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_93825 = f__13410__auto__.call(null);(statearr_93825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___93826);
return statearr_93825;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___93992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_93962){var state_val_93963 = (state_93962[1]);if((state_val_93963 === 1))
{var state_93962__$1 = state_93962;var statearr_93964_93993 = state_93962__$1;(statearr_93964_93993[2] = null);
(statearr_93964_93993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 2))
{var inst_93925 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_93926 = 0;var state_93962__$1 = (function (){var statearr_93965 = state_93962;(statearr_93965[7] = inst_93926);
(statearr_93965[8] = inst_93925);
return statearr_93965;
})();var statearr_93966_93994 = state_93962__$1;(statearr_93966_93994[2] = null);
(statearr_93966_93994[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 3))
{var inst_93960 = (state_93962[2]);var state_93962__$1 = state_93962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_93962__$1,inst_93960);
} else
{if((state_val_93963 === 4))
{var inst_93926 = (state_93962[7]);var inst_93928 = (inst_93926 < cnt);var state_93962__$1 = state_93962;if(cljs.core.truth_(inst_93928))
{var statearr_93967_93995 = state_93962__$1;(statearr_93967_93995[1] = 6);
} else
{var statearr_93968_93996 = state_93962__$1;(statearr_93968_93996[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 5))
{var inst_93946 = (state_93962[2]);var state_93962__$1 = (function (){var statearr_93969 = state_93962;(statearr_93969[9] = inst_93946);
return statearr_93969;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_93962__$1,12,dchan);
} else
{if((state_val_93963 === 6))
{var state_93962__$1 = state_93962;var statearr_93970_93997 = state_93962__$1;(statearr_93970_93997[2] = null);
(statearr_93970_93997[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 7))
{var state_93962__$1 = state_93962;var statearr_93971_93998 = state_93962__$1;(statearr_93971_93998[2] = null);
(statearr_93971_93998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 8))
{var inst_93944 = (state_93962[2]);var state_93962__$1 = state_93962;var statearr_93972_93999 = state_93962__$1;(statearr_93972_93999[2] = inst_93944);
(statearr_93972_93999[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 9))
{var inst_93926 = (state_93962[7]);var inst_93939 = (state_93962[2]);var inst_93940 = (inst_93926 + 1);var inst_93926__$1 = inst_93940;var state_93962__$1 = (function (){var statearr_93973 = state_93962;(statearr_93973[10] = inst_93939);
(statearr_93973[7] = inst_93926__$1);
return statearr_93973;
})();var statearr_93974_94000 = state_93962__$1;(statearr_93974_94000[2] = null);
(statearr_93974_94000[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 10))
{var inst_93930 = (state_93962[2]);var inst_93931 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_93962__$1 = (function (){var statearr_93975 = state_93962;(statearr_93975[11] = inst_93930);
return statearr_93975;
})();var statearr_93976_94001 = state_93962__$1;(statearr_93976_94001[2] = inst_93931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 11))
{var inst_93926 = (state_93962[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_93962,10,Object,null,9);var inst_93935 = chs__$1.call(null,inst_93926);var inst_93936 = done.call(null,inst_93926);var inst_93937 = cljs.core.async.take_BANG_.call(null,inst_93935,inst_93936);var state_93962__$1 = state_93962;var statearr_93977_94002 = state_93962__$1;(statearr_93977_94002[2] = inst_93937);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 12))
{var inst_93948 = (state_93962[12]);var inst_93948__$1 = (state_93962[2]);var inst_93949 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_93948__$1);var state_93962__$1 = (function (){var statearr_93978 = state_93962;(statearr_93978[12] = inst_93948__$1);
return statearr_93978;
})();if(cljs.core.truth_(inst_93949))
{var statearr_93979_94003 = state_93962__$1;(statearr_93979_94003[1] = 13);
} else
{var statearr_93980_94004 = state_93962__$1;(statearr_93980_94004[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 13))
{var inst_93951 = cljs.core.async.close_BANG_.call(null,out);var state_93962__$1 = state_93962;var statearr_93981_94005 = state_93962__$1;(statearr_93981_94005[2] = inst_93951);
(statearr_93981_94005[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 14))
{var inst_93948 = (state_93962[12]);var inst_93953 = cljs.core.apply.call(null,f,inst_93948);var state_93962__$1 = state_93962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_93962__$1,16,out,inst_93953);
} else
{if((state_val_93963 === 15))
{var inst_93958 = (state_93962[2]);var state_93962__$1 = state_93962;var statearr_93982_94006 = state_93962__$1;(statearr_93982_94006[2] = inst_93958);
(statearr_93982_94006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_93963 === 16))
{var inst_93955 = (state_93962[2]);var state_93962__$1 = (function (){var statearr_93983 = state_93962;(statearr_93983[13] = inst_93955);
return statearr_93983;
})();var statearr_93984_94007 = state_93962__$1;(statearr_93984_94007[2] = null);
(statearr_93984_94007[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_93988 = (new Array(14));(statearr_93988[0] = state_machine__13310__auto__);
(statearr_93988[1] = 1);
return statearr_93988;
});
var state_machine__13310__auto____1 = (function (state_93962){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_93962);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e93989){if((e93989 instanceof Object))
{var ex__13313__auto__ = e93989;var statearr_93990_94008 = state_93962;(statearr_93990_94008[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_93962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e93989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__94009 = state_93962;
state_93962 = G__94009;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_93962){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_93962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_93991 = f__13410__auto__.call(null);(statearr_93991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___93992);
return statearr_93991;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___94117 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_94093){var state_val_94094 = (state_94093[1]);if((state_val_94094 === 1))
{var inst_94064 = cljs.core.vec.call(null,chs);var inst_94065 = inst_94064;var state_94093__$1 = (function (){var statearr_94095 = state_94093;(statearr_94095[7] = inst_94065);
return statearr_94095;
})();var statearr_94096_94118 = state_94093__$1;(statearr_94096_94118[2] = null);
(statearr_94096_94118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 2))
{var inst_94065 = (state_94093[7]);var inst_94067 = cljs.core.count.call(null,inst_94065);var inst_94068 = (inst_94067 > 0);var state_94093__$1 = state_94093;if(cljs.core.truth_(inst_94068))
{var statearr_94097_94119 = state_94093__$1;(statearr_94097_94119[1] = 4);
} else
{var statearr_94098_94120 = state_94093__$1;(statearr_94098_94120[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 3))
{var inst_94091 = (state_94093[2]);var state_94093__$1 = state_94093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94093__$1,inst_94091);
} else
{if((state_val_94094 === 4))
{var inst_94065 = (state_94093[7]);var state_94093__$1 = state_94093;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_94093__$1,7,inst_94065);
} else
{if((state_val_94094 === 5))
{var inst_94087 = cljs.core.async.close_BANG_.call(null,out);var state_94093__$1 = state_94093;var statearr_94099_94121 = state_94093__$1;(statearr_94099_94121[2] = inst_94087);
(statearr_94099_94121[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 6))
{var inst_94089 = (state_94093[2]);var state_94093__$1 = state_94093;var statearr_94100_94122 = state_94093__$1;(statearr_94100_94122[2] = inst_94089);
(statearr_94100_94122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 7))
{var inst_94073 = (state_94093[8]);var inst_94072 = (state_94093[9]);var inst_94072__$1 = (state_94093[2]);var inst_94073__$1 = cljs.core.nth.call(null,inst_94072__$1,0,null);var inst_94074 = cljs.core.nth.call(null,inst_94072__$1,1,null);var inst_94075 = (inst_94073__$1 == null);var state_94093__$1 = (function (){var statearr_94101 = state_94093;(statearr_94101[10] = inst_94074);
(statearr_94101[8] = inst_94073__$1);
(statearr_94101[9] = inst_94072__$1);
return statearr_94101;
})();if(cljs.core.truth_(inst_94075))
{var statearr_94102_94123 = state_94093__$1;(statearr_94102_94123[1] = 8);
} else
{var statearr_94103_94124 = state_94093__$1;(statearr_94103_94124[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 8))
{var inst_94074 = (state_94093[10]);var inst_94073 = (state_94093[8]);var inst_94072 = (state_94093[9]);var inst_94065 = (state_94093[7]);var inst_94077 = (function (){var c = inst_94074;var v = inst_94073;var vec__94070 = inst_94072;var cs = inst_94065;return ((function (c,v,vec__94070,cs,inst_94074,inst_94073,inst_94072,inst_94065,state_val_94094){
return (function (p1__94010_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__94010_SHARP_);
});
;})(c,v,vec__94070,cs,inst_94074,inst_94073,inst_94072,inst_94065,state_val_94094))
})();var inst_94078 = cljs.core.filterv.call(null,inst_94077,inst_94065);var inst_94065__$1 = inst_94078;var state_94093__$1 = (function (){var statearr_94104 = state_94093;(statearr_94104[7] = inst_94065__$1);
return statearr_94104;
})();var statearr_94105_94125 = state_94093__$1;(statearr_94105_94125[2] = null);
(statearr_94105_94125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 9))
{var inst_94073 = (state_94093[8]);var state_94093__$1 = state_94093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94093__$1,11,out,inst_94073);
} else
{if((state_val_94094 === 10))
{var inst_94085 = (state_94093[2]);var state_94093__$1 = state_94093;var statearr_94107_94126 = state_94093__$1;(statearr_94107_94126[2] = inst_94085);
(statearr_94107_94126[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94094 === 11))
{var inst_94065 = (state_94093[7]);var inst_94082 = (state_94093[2]);var tmp94106 = inst_94065;var inst_94065__$1 = tmp94106;var state_94093__$1 = (function (){var statearr_94108 = state_94093;(statearr_94108[11] = inst_94082);
(statearr_94108[7] = inst_94065__$1);
return statearr_94108;
})();var statearr_94109_94127 = state_94093__$1;(statearr_94109_94127[2] = null);
(statearr_94109_94127[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_94113 = (new Array(12));(statearr_94113[0] = state_machine__13310__auto__);
(statearr_94113[1] = 1);
return statearr_94113;
});
var state_machine__13310__auto____1 = (function (state_94093){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_94093);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e94114){if((e94114 instanceof Object))
{var ex__13313__auto__ = e94114;var statearr_94115_94128 = state_94093;(statearr_94115_94128[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e94114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__94129 = state_94093;
state_94093 = G__94129;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_94093){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_94093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_94116 = f__13410__auto__.call(null);(statearr_94116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___94117);
return statearr_94116;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___94222 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_94199){var state_val_94200 = (state_94199[1]);if((state_val_94200 === 1))
{var inst_94176 = 0;var state_94199__$1 = (function (){var statearr_94201 = state_94199;(statearr_94201[7] = inst_94176);
return statearr_94201;
})();var statearr_94202_94223 = state_94199__$1;(statearr_94202_94223[2] = null);
(statearr_94202_94223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 2))
{var inst_94176 = (state_94199[7]);var inst_94178 = (inst_94176 < n);var state_94199__$1 = state_94199;if(cljs.core.truth_(inst_94178))
{var statearr_94203_94224 = state_94199__$1;(statearr_94203_94224[1] = 4);
} else
{var statearr_94204_94225 = state_94199__$1;(statearr_94204_94225[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 3))
{var inst_94196 = (state_94199[2]);var inst_94197 = cljs.core.async.close_BANG_.call(null,out);var state_94199__$1 = (function (){var statearr_94205 = state_94199;(statearr_94205[8] = inst_94196);
return statearr_94205;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94199__$1,inst_94197);
} else
{if((state_val_94200 === 4))
{var state_94199__$1 = state_94199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94199__$1,7,ch);
} else
{if((state_val_94200 === 5))
{var state_94199__$1 = state_94199;var statearr_94206_94226 = state_94199__$1;(statearr_94206_94226[2] = null);
(statearr_94206_94226[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 6))
{var inst_94194 = (state_94199[2]);var state_94199__$1 = state_94199;var statearr_94207_94227 = state_94199__$1;(statearr_94207_94227[2] = inst_94194);
(statearr_94207_94227[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 7))
{var inst_94181 = (state_94199[9]);var inst_94181__$1 = (state_94199[2]);var inst_94182 = (inst_94181__$1 == null);var inst_94183 = cljs.core.not.call(null,inst_94182);var state_94199__$1 = (function (){var statearr_94208 = state_94199;(statearr_94208[9] = inst_94181__$1);
return statearr_94208;
})();if(inst_94183)
{var statearr_94209_94228 = state_94199__$1;(statearr_94209_94228[1] = 8);
} else
{var statearr_94210_94229 = state_94199__$1;(statearr_94210_94229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 8))
{var inst_94181 = (state_94199[9]);var state_94199__$1 = state_94199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94199__$1,11,out,inst_94181);
} else
{if((state_val_94200 === 9))
{var state_94199__$1 = state_94199;var statearr_94211_94230 = state_94199__$1;(statearr_94211_94230[2] = null);
(statearr_94211_94230[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 10))
{var inst_94191 = (state_94199[2]);var state_94199__$1 = state_94199;var statearr_94212_94231 = state_94199__$1;(statearr_94212_94231[2] = inst_94191);
(statearr_94212_94231[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94200 === 11))
{var inst_94176 = (state_94199[7]);var inst_94186 = (state_94199[2]);var inst_94187 = (inst_94176 + 1);var inst_94176__$1 = inst_94187;var state_94199__$1 = (function (){var statearr_94213 = state_94199;(statearr_94213[10] = inst_94186);
(statearr_94213[7] = inst_94176__$1);
return statearr_94213;
})();var statearr_94214_94232 = state_94199__$1;(statearr_94214_94232[2] = null);
(statearr_94214_94232[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_94218 = (new Array(11));(statearr_94218[0] = state_machine__13310__auto__);
(statearr_94218[1] = 1);
return statearr_94218;
});
var state_machine__13310__auto____1 = (function (state_94199){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_94199);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e94219){if((e94219 instanceof Object))
{var ex__13313__auto__ = e94219;var statearr_94220_94233 = state_94199;(statearr_94220_94233[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e94219;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__94234 = state_94199;
state_94199 = G__94234;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_94199){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_94199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_94221 = f__13410__auto__.call(null);(statearr_94221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___94222);
return statearr_94221;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___94331 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_94306){var state_val_94307 = (state_94306[1]);if((state_val_94307 === 1))
{var inst_94283 = null;var state_94306__$1 = (function (){var statearr_94308 = state_94306;(statearr_94308[7] = inst_94283);
return statearr_94308;
})();var statearr_94309_94332 = state_94306__$1;(statearr_94309_94332[2] = null);
(statearr_94309_94332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 2))
{var state_94306__$1 = state_94306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94306__$1,4,ch);
} else
{if((state_val_94307 === 3))
{var inst_94303 = (state_94306[2]);var inst_94304 = cljs.core.async.close_BANG_.call(null,out);var state_94306__$1 = (function (){var statearr_94310 = state_94306;(statearr_94310[8] = inst_94303);
return statearr_94310;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94306__$1,inst_94304);
} else
{if((state_val_94307 === 4))
{var inst_94286 = (state_94306[9]);var inst_94286__$1 = (state_94306[2]);var inst_94287 = (inst_94286__$1 == null);var inst_94288 = cljs.core.not.call(null,inst_94287);var state_94306__$1 = (function (){var statearr_94311 = state_94306;(statearr_94311[9] = inst_94286__$1);
return statearr_94311;
})();if(inst_94288)
{var statearr_94312_94333 = state_94306__$1;(statearr_94312_94333[1] = 5);
} else
{var statearr_94313_94334 = state_94306__$1;(statearr_94313_94334[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 5))
{var inst_94286 = (state_94306[9]);var inst_94283 = (state_94306[7]);var inst_94290 = cljs.core._EQ_.call(null,inst_94286,inst_94283);var state_94306__$1 = state_94306;if(inst_94290)
{var statearr_94314_94335 = state_94306__$1;(statearr_94314_94335[1] = 8);
} else
{var statearr_94315_94336 = state_94306__$1;(statearr_94315_94336[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 6))
{var state_94306__$1 = state_94306;var statearr_94317_94337 = state_94306__$1;(statearr_94317_94337[2] = null);
(statearr_94317_94337[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 7))
{var inst_94301 = (state_94306[2]);var state_94306__$1 = state_94306;var statearr_94318_94338 = state_94306__$1;(statearr_94318_94338[2] = inst_94301);
(statearr_94318_94338[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 8))
{var inst_94283 = (state_94306[7]);var tmp94316 = inst_94283;var inst_94283__$1 = tmp94316;var state_94306__$1 = (function (){var statearr_94319 = state_94306;(statearr_94319[7] = inst_94283__$1);
return statearr_94319;
})();var statearr_94320_94339 = state_94306__$1;(statearr_94320_94339[2] = null);
(statearr_94320_94339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 9))
{var inst_94286 = (state_94306[9]);var state_94306__$1 = state_94306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94306__$1,11,out,inst_94286);
} else
{if((state_val_94307 === 10))
{var inst_94298 = (state_94306[2]);var state_94306__$1 = state_94306;var statearr_94321_94340 = state_94306__$1;(statearr_94321_94340[2] = inst_94298);
(statearr_94321_94340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94307 === 11))
{var inst_94286 = (state_94306[9]);var inst_94295 = (state_94306[2]);var inst_94283 = inst_94286;var state_94306__$1 = (function (){var statearr_94322 = state_94306;(statearr_94322[10] = inst_94295);
(statearr_94322[7] = inst_94283);
return statearr_94322;
})();var statearr_94323_94341 = state_94306__$1;(statearr_94323_94341[2] = null);
(statearr_94323_94341[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_94327 = (new Array(11));(statearr_94327[0] = state_machine__13310__auto__);
(statearr_94327[1] = 1);
return statearr_94327;
});
var state_machine__13310__auto____1 = (function (state_94306){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_94306);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e94328){if((e94328 instanceof Object))
{var ex__13313__auto__ = e94328;var statearr_94329_94342 = state_94306;(statearr_94329_94342[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94306);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e94328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__94343 = state_94306;
state_94306 = G__94343;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_94306){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_94306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_94330 = f__13410__auto__.call(null);(statearr_94330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___94331);
return statearr_94330;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___94478 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_94448){var state_val_94449 = (state_94448[1]);if((state_val_94449 === 1))
{var inst_94411 = (new Array(n));var inst_94412 = inst_94411;var inst_94413 = 0;var state_94448__$1 = (function (){var statearr_94450 = state_94448;(statearr_94450[7] = inst_94412);
(statearr_94450[8] = inst_94413);
return statearr_94450;
})();var statearr_94451_94479 = state_94448__$1;(statearr_94451_94479[2] = null);
(statearr_94451_94479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 2))
{var state_94448__$1 = state_94448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94448__$1,4,ch);
} else
{if((state_val_94449 === 3))
{var inst_94446 = (state_94448[2]);var state_94448__$1 = state_94448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94448__$1,inst_94446);
} else
{if((state_val_94449 === 4))
{var inst_94416 = (state_94448[9]);var inst_94416__$1 = (state_94448[2]);var inst_94417 = (inst_94416__$1 == null);var inst_94418 = cljs.core.not.call(null,inst_94417);var state_94448__$1 = (function (){var statearr_94452 = state_94448;(statearr_94452[9] = inst_94416__$1);
return statearr_94452;
})();if(inst_94418)
{var statearr_94453_94480 = state_94448__$1;(statearr_94453_94480[1] = 5);
} else
{var statearr_94454_94481 = state_94448__$1;(statearr_94454_94481[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 5))
{var inst_94412 = (state_94448[7]);var inst_94413 = (state_94448[8]);var inst_94416 = (state_94448[9]);var inst_94421 = (state_94448[10]);var inst_94420 = (inst_94412[inst_94413] = inst_94416);var inst_94421__$1 = (inst_94413 + 1);var inst_94422 = (inst_94421__$1 < n);var state_94448__$1 = (function (){var statearr_94455 = state_94448;(statearr_94455[11] = inst_94420);
(statearr_94455[10] = inst_94421__$1);
return statearr_94455;
})();if(cljs.core.truth_(inst_94422))
{var statearr_94456_94482 = state_94448__$1;(statearr_94456_94482[1] = 8);
} else
{var statearr_94457_94483 = state_94448__$1;(statearr_94457_94483[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 6))
{var inst_94413 = (state_94448[8]);var inst_94434 = (inst_94413 > 0);var state_94448__$1 = state_94448;if(cljs.core.truth_(inst_94434))
{var statearr_94459_94484 = state_94448__$1;(statearr_94459_94484[1] = 12);
} else
{var statearr_94460_94485 = state_94448__$1;(statearr_94460_94485[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 7))
{var inst_94444 = (state_94448[2]);var state_94448__$1 = state_94448;var statearr_94461_94486 = state_94448__$1;(statearr_94461_94486[2] = inst_94444);
(statearr_94461_94486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 8))
{var inst_94412 = (state_94448[7]);var inst_94421 = (state_94448[10]);var tmp94458 = inst_94412;var inst_94412__$1 = tmp94458;var inst_94413 = inst_94421;var state_94448__$1 = (function (){var statearr_94462 = state_94448;(statearr_94462[7] = inst_94412__$1);
(statearr_94462[8] = inst_94413);
return statearr_94462;
})();var statearr_94463_94487 = state_94448__$1;(statearr_94463_94487[2] = null);
(statearr_94463_94487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 9))
{var inst_94412 = (state_94448[7]);var inst_94426 = cljs.core.vec.call(null,inst_94412);var state_94448__$1 = state_94448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94448__$1,11,out,inst_94426);
} else
{if((state_val_94449 === 10))
{var inst_94432 = (state_94448[2]);var state_94448__$1 = state_94448;var statearr_94464_94488 = state_94448__$1;(statearr_94464_94488[2] = inst_94432);
(statearr_94464_94488[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 11))
{var inst_94428 = (state_94448[2]);var inst_94429 = (new Array(n));var inst_94412 = inst_94429;var inst_94413 = 0;var state_94448__$1 = (function (){var statearr_94465 = state_94448;(statearr_94465[7] = inst_94412);
(statearr_94465[8] = inst_94413);
(statearr_94465[12] = inst_94428);
return statearr_94465;
})();var statearr_94466_94489 = state_94448__$1;(statearr_94466_94489[2] = null);
(statearr_94466_94489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 12))
{var inst_94412 = (state_94448[7]);var inst_94436 = cljs.core.vec.call(null,inst_94412);var state_94448__$1 = state_94448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94448__$1,15,out,inst_94436);
} else
{if((state_val_94449 === 13))
{var state_94448__$1 = state_94448;var statearr_94467_94490 = state_94448__$1;(statearr_94467_94490[2] = null);
(statearr_94467_94490[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 14))
{var inst_94441 = (state_94448[2]);var inst_94442 = cljs.core.async.close_BANG_.call(null,out);var state_94448__$1 = (function (){var statearr_94468 = state_94448;(statearr_94468[13] = inst_94441);
return statearr_94468;
})();var statearr_94469_94491 = state_94448__$1;(statearr_94469_94491[2] = inst_94442);
(statearr_94469_94491[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94449 === 15))
{var inst_94438 = (state_94448[2]);var state_94448__$1 = state_94448;var statearr_94470_94492 = state_94448__$1;(statearr_94470_94492[2] = inst_94438);
(statearr_94470_94492[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_94474 = (new Array(14));(statearr_94474[0] = state_machine__13310__auto__);
(statearr_94474[1] = 1);
return statearr_94474;
});
var state_machine__13310__auto____1 = (function (state_94448){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_94448);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e94475){if((e94475 instanceof Object))
{var ex__13313__auto__ = e94475;var statearr_94476_94493 = state_94448;(statearr_94476_94493[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e94475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__94494 = state_94448;
state_94448 = G__94494;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_94448){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_94448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_94477 = f__13410__auto__.call(null);(statearr_94477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___94478);
return statearr_94477;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___94637 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_94607){var state_val_94608 = (state_94607[1]);if((state_val_94608 === 1))
{var inst_94566 = (new Array(0));var inst_94567 = inst_94566;var inst_94568 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_94607__$1 = (function (){var statearr_94609 = state_94607;(statearr_94609[7] = inst_94568);
(statearr_94609[8] = inst_94567);
return statearr_94609;
})();var statearr_94610_94638 = state_94607__$1;(statearr_94610_94638[2] = null);
(statearr_94610_94638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 2))
{var state_94607__$1 = state_94607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94607__$1,4,ch);
} else
{if((state_val_94608 === 3))
{var inst_94605 = (state_94607[2]);var state_94607__$1 = state_94607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94607__$1,inst_94605);
} else
{if((state_val_94608 === 4))
{var inst_94571 = (state_94607[9]);var inst_94571__$1 = (state_94607[2]);var inst_94572 = (inst_94571__$1 == null);var inst_94573 = cljs.core.not.call(null,inst_94572);var state_94607__$1 = (function (){var statearr_94611 = state_94607;(statearr_94611[9] = inst_94571__$1);
return statearr_94611;
})();if(inst_94573)
{var statearr_94612_94639 = state_94607__$1;(statearr_94612_94639[1] = 5);
} else
{var statearr_94613_94640 = state_94607__$1;(statearr_94613_94640[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 5))
{var inst_94571 = (state_94607[9]);var inst_94568 = (state_94607[7]);var inst_94575 = (state_94607[10]);var inst_94575__$1 = f.call(null,inst_94571);var inst_94576 = cljs.core._EQ_.call(null,inst_94575__$1,inst_94568);var inst_94577 = cljs.core.keyword_identical_QMARK_.call(null,inst_94568,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_94578 = (inst_94576) || (inst_94577);var state_94607__$1 = (function (){var statearr_94614 = state_94607;(statearr_94614[10] = inst_94575__$1);
return statearr_94614;
})();if(cljs.core.truth_(inst_94578))
{var statearr_94615_94641 = state_94607__$1;(statearr_94615_94641[1] = 8);
} else
{var statearr_94616_94642 = state_94607__$1;(statearr_94616_94642[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 6))
{var inst_94567 = (state_94607[8]);var inst_94592 = inst_94567.length;var inst_94593 = (inst_94592 > 0);var state_94607__$1 = state_94607;if(cljs.core.truth_(inst_94593))
{var statearr_94618_94643 = state_94607__$1;(statearr_94618_94643[1] = 12);
} else
{var statearr_94619_94644 = state_94607__$1;(statearr_94619_94644[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 7))
{var inst_94603 = (state_94607[2]);var state_94607__$1 = state_94607;var statearr_94620_94645 = state_94607__$1;(statearr_94620_94645[2] = inst_94603);
(statearr_94620_94645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 8))
{var inst_94571 = (state_94607[9]);var inst_94567 = (state_94607[8]);var inst_94575 = (state_94607[10]);var inst_94580 = inst_94567.push(inst_94571);var tmp94617 = inst_94567;var inst_94567__$1 = tmp94617;var inst_94568 = inst_94575;var state_94607__$1 = (function (){var statearr_94621 = state_94607;(statearr_94621[7] = inst_94568);
(statearr_94621[8] = inst_94567__$1);
(statearr_94621[11] = inst_94580);
return statearr_94621;
})();var statearr_94622_94646 = state_94607__$1;(statearr_94622_94646[2] = null);
(statearr_94622_94646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 9))
{var inst_94567 = (state_94607[8]);var inst_94583 = cljs.core.vec.call(null,inst_94567);var state_94607__$1 = state_94607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94607__$1,11,out,inst_94583);
} else
{if((state_val_94608 === 10))
{var inst_94590 = (state_94607[2]);var state_94607__$1 = state_94607;var statearr_94623_94647 = state_94607__$1;(statearr_94623_94647[2] = inst_94590);
(statearr_94623_94647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 11))
{var inst_94571 = (state_94607[9]);var inst_94575 = (state_94607[10]);var inst_94585 = (state_94607[2]);var inst_94586 = (new Array(0));var inst_94587 = inst_94586.push(inst_94571);var inst_94567 = inst_94586;var inst_94568 = inst_94575;var state_94607__$1 = (function (){var statearr_94624 = state_94607;(statearr_94624[12] = inst_94587);
(statearr_94624[13] = inst_94585);
(statearr_94624[7] = inst_94568);
(statearr_94624[8] = inst_94567);
return statearr_94624;
})();var statearr_94625_94648 = state_94607__$1;(statearr_94625_94648[2] = null);
(statearr_94625_94648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 12))
{var inst_94567 = (state_94607[8]);var inst_94595 = cljs.core.vec.call(null,inst_94567);var state_94607__$1 = state_94607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94607__$1,15,out,inst_94595);
} else
{if((state_val_94608 === 13))
{var state_94607__$1 = state_94607;var statearr_94626_94649 = state_94607__$1;(statearr_94626_94649[2] = null);
(statearr_94626_94649[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 14))
{var inst_94600 = (state_94607[2]);var inst_94601 = cljs.core.async.close_BANG_.call(null,out);var state_94607__$1 = (function (){var statearr_94627 = state_94607;(statearr_94627[14] = inst_94600);
return statearr_94627;
})();var statearr_94628_94650 = state_94607__$1;(statearr_94628_94650[2] = inst_94601);
(statearr_94628_94650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_94608 === 15))
{var inst_94597 = (state_94607[2]);var state_94607__$1 = state_94607;var statearr_94629_94651 = state_94607__$1;(statearr_94629_94651[2] = inst_94597);
(statearr_94629_94651[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_94633 = (new Array(15));(statearr_94633[0] = state_machine__13310__auto__);
(statearr_94633[1] = 1);
return statearr_94633;
});
var state_machine__13310__auto____1 = (function (state_94607){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_94607);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e94634){if((e94634 instanceof Object))
{var ex__13313__auto__ = e94634;var statearr_94635_94652 = state_94607;(statearr_94635_94652[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e94634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__94653 = state_94607;
state_94607 = G__94653;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_94607){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_94607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_94636 = f__13410__auto__.call(null);(statearr_94636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___94637);
return statearr_94636;
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
