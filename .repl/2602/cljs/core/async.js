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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t43186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43186 = (function (f,fn_handler,meta43187){
this.f = f;
this.fn_handler = fn_handler;
this.meta43187 = meta43187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43186.cljs$lang$type = true;
cljs.core.async.t43186.cljs$lang$ctorStr = "cljs.core.async/t43186";
cljs.core.async.t43186.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43186");
});
cljs.core.async.t43186.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t43186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t43186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43188){var self__ = this;
var _43188__$1 = this;return self__.meta43187;
});
cljs.core.async.t43186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43188,meta43187__$1){var self__ = this;
var _43188__$1 = this;return (new cljs.core.async.t43186(self__.f,self__.fn_handler,meta43187__$1));
});
cljs.core.async.__GT_t43186 = (function __GT_t43186(f__$1,fn_handler__$1,meta43187){return (new cljs.core.async.t43186(f__$1,fn_handler__$1,meta43187));
});
}
return (new cljs.core.async.t43186(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__43190 = buff;if(G__43190)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__43190.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__43190.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__43190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__43190);
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
{var val_43191 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_43191);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_43191);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___43192 = n;var x_43193 = 0;while(true){
if((x_43193 < n__7112__auto___43192))
{(a[x_43193] = 0);
{
var G__43194 = (x_43193 + 1);
x_43193 = G__43194;
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
var G__43195 = (i + 1);
i = G__43195;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t43199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43199 = (function (flag,alt_flag,meta43200){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta43200 = meta43200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43199.cljs$lang$type = true;
cljs.core.async.t43199.cljs$lang$ctorStr = "cljs.core.async/t43199";
cljs.core.async.t43199.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43199");
});
cljs.core.async.t43199.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t43199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t43199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43201){var self__ = this;
var _43201__$1 = this;return self__.meta43200;
});
cljs.core.async.t43199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43201,meta43200__$1){var self__ = this;
var _43201__$1 = this;return (new cljs.core.async.t43199(self__.flag,self__.alt_flag,meta43200__$1));
});
cljs.core.async.__GT_t43199 = (function __GT_t43199(flag__$1,alt_flag__$1,meta43200){return (new cljs.core.async.t43199(flag__$1,alt_flag__$1,meta43200));
});
}
return (new cljs.core.async.t43199(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t43205 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43205 = (function (cb,flag,alt_handler,meta43206){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta43206 = meta43206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43205.cljs$lang$type = true;
cljs.core.async.t43205.cljs$lang$ctorStr = "cljs.core.async/t43205";
cljs.core.async.t43205.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43205");
});
cljs.core.async.t43205.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t43205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t43205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43207){var self__ = this;
var _43207__$1 = this;return self__.meta43206;
});
cljs.core.async.t43205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43207,meta43206__$1){var self__ = this;
var _43207__$1 = this;return (new cljs.core.async.t43205(self__.cb,self__.flag,self__.alt_handler,meta43206__$1));
});
cljs.core.async.__GT_t43205 = (function __GT_t43205(cb__$1,flag__$1,alt_handler__$1,meta43206){return (new cljs.core.async.t43205(cb__$1,flag__$1,alt_handler__$1,meta43206));
});
}
return (new cljs.core.async.t43205(cb,flag,alt_handler,null));
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
return (function (p1__43208_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43208_SHARP_,port], null));
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
var G__43209 = (i + 1);
i = G__43209;
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
var alts_BANG___delegate = function (ports,p__43210){var map__43212 = p__43210;var map__43212__$1 = ((cljs.core.seq_QMARK_.call(null,map__43212))?cljs.core.apply.call(null,cljs.core.hash_map,map__43212):map__43212);var opts = map__43212__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__43210 = null;if (arguments.length > 1) {
  p__43210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__43210);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__43213){
var ports = cljs.core.first(arglist__43213);
var p__43210 = cljs.core.rest(arglist__43213);
return alts_BANG___delegate(ports,p__43210);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t43221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43221 = (function (ch,f,map_LT_,meta43222){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta43222 = meta43222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43221.cljs$lang$type = true;
cljs.core.async.t43221.cljs$lang$ctorStr = "cljs.core.async/t43221";
cljs.core.async.t43221.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43221");
});
cljs.core.async.t43221.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t43221.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t43224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43224 = (function (fn1,_,meta43222,ch,f,map_LT_,meta43225){
this.fn1 = fn1;
this._ = _;
this.meta43222 = meta43222;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta43225 = meta43225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43224.cljs$lang$type = true;
cljs.core.async.t43224.cljs$lang$ctorStr = "cljs.core.async/t43224";
cljs.core.async.t43224.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43224");
});
cljs.core.async.t43224.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t43224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t43224.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t43224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__43214_SHARP_){return f1.call(null,(((p1__43214_SHARP_ == null))?null:self__.f.call(null,p1__43214_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t43224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43226){var self__ = this;
var _43226__$1 = this;return self__.meta43225;
});
cljs.core.async.t43224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43226,meta43225__$1){var self__ = this;
var _43226__$1 = this;return (new cljs.core.async.t43224(self__.fn1,self__._,self__.meta43222,self__.ch,self__.f,self__.map_LT_,meta43225__$1));
});
cljs.core.async.__GT_t43224 = (function __GT_t43224(fn1__$1,___$2,meta43222__$1,ch__$2,f__$2,map_LT___$2,meta43225){return (new cljs.core.async.t43224(fn1__$1,___$2,meta43222__$1,ch__$2,f__$2,map_LT___$2,meta43225));
});
}
return (new cljs.core.async.t43224(fn1,___$1,self__.meta43222,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t43221.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43223){var self__ = this;
var _43223__$1 = this;return self__.meta43222;
});
cljs.core.async.t43221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43223,meta43222__$1){var self__ = this;
var _43223__$1 = this;return (new cljs.core.async.t43221(self__.ch,self__.f,self__.map_LT_,meta43222__$1));
});
cljs.core.async.__GT_t43221 = (function __GT_t43221(ch__$1,f__$1,map_LT___$1,meta43222){return (new cljs.core.async.t43221(ch__$1,f__$1,map_LT___$1,meta43222));
});
}
return (new cljs.core.async.t43221(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t43230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43230 = (function (ch,f,map_GT_,meta43231){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta43231 = meta43231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43230.cljs$lang$type = true;
cljs.core.async.t43230.cljs$lang$ctorStr = "cljs.core.async/t43230";
cljs.core.async.t43230.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43230");
});
cljs.core.async.t43230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t43230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t43230.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43232){var self__ = this;
var _43232__$1 = this;return self__.meta43231;
});
cljs.core.async.t43230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43232,meta43231__$1){var self__ = this;
var _43232__$1 = this;return (new cljs.core.async.t43230(self__.ch,self__.f,self__.map_GT_,meta43231__$1));
});
cljs.core.async.__GT_t43230 = (function __GT_t43230(ch__$1,f__$1,map_GT___$1,meta43231){return (new cljs.core.async.t43230(ch__$1,f__$1,map_GT___$1,meta43231));
});
}
return (new cljs.core.async.t43230(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t43236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43236 = (function (ch,p,filter_GT_,meta43237){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta43237 = meta43237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43236.cljs$lang$type = true;
cljs.core.async.t43236.cljs$lang$ctorStr = "cljs.core.async/t43236";
cljs.core.async.t43236.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t43236");
});
cljs.core.async.t43236.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t43236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t43236.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t43236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t43236.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t43236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t43236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43238){var self__ = this;
var _43238__$1 = this;return self__.meta43237;
});
cljs.core.async.t43236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43238,meta43237__$1){var self__ = this;
var _43238__$1 = this;return (new cljs.core.async.t43236(self__.ch,self__.p,self__.filter_GT_,meta43237__$1));
});
cljs.core.async.__GT_t43236 = (function __GT_t43236(ch__$1,p__$1,filter_GT___$1,meta43237){return (new cljs.core.async.t43236(ch__$1,p__$1,filter_GT___$1,meta43237));
});
}
return (new cljs.core.async.t43236(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___43321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_43300){var state_val_43301 = (state_43300[1]);if((state_val_43301 === 1))
{var state_43300__$1 = state_43300;var statearr_43302_43322 = state_43300__$1;(statearr_43302_43322[2] = null);
(statearr_43302_43322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 2))
{var state_43300__$1 = state_43300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43300__$1,4,ch);
} else
{if((state_val_43301 === 3))
{var inst_43298 = (state_43300[2]);var state_43300__$1 = state_43300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43300__$1,inst_43298);
} else
{if((state_val_43301 === 4))
{var inst_43282 = (state_43300[7]);var inst_43282__$1 = (state_43300[2]);var inst_43283 = (inst_43282__$1 == null);var state_43300__$1 = (function (){var statearr_43303 = state_43300;(statearr_43303[7] = inst_43282__$1);
return statearr_43303;
})();if(cljs.core.truth_(inst_43283))
{var statearr_43304_43323 = state_43300__$1;(statearr_43304_43323[1] = 5);
} else
{var statearr_43305_43324 = state_43300__$1;(statearr_43305_43324[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 5))
{var inst_43285 = cljs.core.async.close_BANG_.call(null,out);var state_43300__$1 = state_43300;var statearr_43306_43325 = state_43300__$1;(statearr_43306_43325[2] = inst_43285);
(statearr_43306_43325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 6))
{var inst_43282 = (state_43300[7]);var inst_43287 = p.call(null,inst_43282);var state_43300__$1 = state_43300;if(cljs.core.truth_(inst_43287))
{var statearr_43307_43326 = state_43300__$1;(statearr_43307_43326[1] = 8);
} else
{var statearr_43308_43327 = state_43300__$1;(statearr_43308_43327[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 7))
{var inst_43296 = (state_43300[2]);var state_43300__$1 = state_43300;var statearr_43309_43328 = state_43300__$1;(statearr_43309_43328[2] = inst_43296);
(statearr_43309_43328[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 8))
{var inst_43282 = (state_43300[7]);var state_43300__$1 = state_43300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43300__$1,11,out,inst_43282);
} else
{if((state_val_43301 === 9))
{var state_43300__$1 = state_43300;var statearr_43310_43329 = state_43300__$1;(statearr_43310_43329[2] = null);
(statearr_43310_43329[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 10))
{var inst_43293 = (state_43300[2]);var state_43300__$1 = (function (){var statearr_43311 = state_43300;(statearr_43311[8] = inst_43293);
return statearr_43311;
})();var statearr_43312_43330 = state_43300__$1;(statearr_43312_43330[2] = null);
(statearr_43312_43330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43301 === 11))
{var inst_43290 = (state_43300[2]);var state_43300__$1 = state_43300;var statearr_43313_43331 = state_43300__$1;(statearr_43313_43331[2] = inst_43290);
(statearr_43313_43331[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_43317 = (new Array(9));(statearr_43317[0] = state_machine__13310__auto__);
(statearr_43317[1] = 1);
return statearr_43317;
});
var state_machine__13310__auto____1 = (function (state_43300){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_43300);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e43318){if((e43318 instanceof Object))
{var ex__13313__auto__ = e43318;var statearr_43319_43332 = state_43300;(statearr_43319_43332[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43333 = state_43300;
state_43300 = G__43333;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_43300){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_43300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_43320 = f__13410__auto__.call(null);(statearr_43320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___43321);
return statearr_43320;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_43485){var state_val_43486 = (state_43485[1]);if((state_val_43486 === 1))
{var state_43485__$1 = state_43485;var statearr_43487_43524 = state_43485__$1;(statearr_43487_43524[2] = null);
(statearr_43487_43524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 2))
{var state_43485__$1 = state_43485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43485__$1,4,in$);
} else
{if((state_val_43486 === 3))
{var inst_43483 = (state_43485[2]);var state_43485__$1 = state_43485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43485__$1,inst_43483);
} else
{if((state_val_43486 === 4))
{var inst_43431 = (state_43485[7]);var inst_43431__$1 = (state_43485[2]);var inst_43432 = (inst_43431__$1 == null);var state_43485__$1 = (function (){var statearr_43488 = state_43485;(statearr_43488[7] = inst_43431__$1);
return statearr_43488;
})();if(cljs.core.truth_(inst_43432))
{var statearr_43489_43525 = state_43485__$1;(statearr_43489_43525[1] = 5);
} else
{var statearr_43490_43526 = state_43485__$1;(statearr_43490_43526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 5))
{var inst_43434 = cljs.core.async.close_BANG_.call(null,out);var state_43485__$1 = state_43485;var statearr_43491_43527 = state_43485__$1;(statearr_43491_43527[2] = inst_43434);
(statearr_43491_43527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 6))
{var inst_43431 = (state_43485[7]);var inst_43436 = f.call(null,inst_43431);var inst_43441 = cljs.core.seq.call(null,inst_43436);var inst_43442 = inst_43441;var inst_43443 = null;var inst_43444 = 0;var inst_43445 = 0;var state_43485__$1 = (function (){var statearr_43492 = state_43485;(statearr_43492[8] = inst_43443);
(statearr_43492[9] = inst_43442);
(statearr_43492[10] = inst_43444);
(statearr_43492[11] = inst_43445);
return statearr_43492;
})();var statearr_43493_43528 = state_43485__$1;(statearr_43493_43528[2] = null);
(statearr_43493_43528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 7))
{var inst_43481 = (state_43485[2]);var state_43485__$1 = state_43485;var statearr_43494_43529 = state_43485__$1;(statearr_43494_43529[2] = inst_43481);
(statearr_43494_43529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 8))
{var inst_43444 = (state_43485[10]);var inst_43445 = (state_43485[11]);var inst_43447 = (inst_43445 < inst_43444);var inst_43448 = inst_43447;var state_43485__$1 = state_43485;if(cljs.core.truth_(inst_43448))
{var statearr_43495_43530 = state_43485__$1;(statearr_43495_43530[1] = 10);
} else
{var statearr_43496_43531 = state_43485__$1;(statearr_43496_43531[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 9))
{var inst_43478 = (state_43485[2]);var state_43485__$1 = (function (){var statearr_43497 = state_43485;(statearr_43497[12] = inst_43478);
return statearr_43497;
})();var statearr_43498_43532 = state_43485__$1;(statearr_43498_43532[2] = null);
(statearr_43498_43532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 10))
{var inst_43443 = (state_43485[8]);var inst_43445 = (state_43485[11]);var inst_43450 = cljs.core._nth.call(null,inst_43443,inst_43445);var state_43485__$1 = state_43485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43485__$1,13,out,inst_43450);
} else
{if((state_val_43486 === 11))
{var inst_43442 = (state_43485[9]);var inst_43456 = (state_43485[13]);var inst_43456__$1 = cljs.core.seq.call(null,inst_43442);var state_43485__$1 = (function (){var statearr_43502 = state_43485;(statearr_43502[13] = inst_43456__$1);
return statearr_43502;
})();if(inst_43456__$1)
{var statearr_43503_43533 = state_43485__$1;(statearr_43503_43533[1] = 14);
} else
{var statearr_43504_43534 = state_43485__$1;(statearr_43504_43534[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 12))
{var inst_43476 = (state_43485[2]);var state_43485__$1 = state_43485;var statearr_43505_43535 = state_43485__$1;(statearr_43505_43535[2] = inst_43476);
(statearr_43505_43535[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 13))
{var inst_43443 = (state_43485[8]);var inst_43442 = (state_43485[9]);var inst_43444 = (state_43485[10]);var inst_43445 = (state_43485[11]);var inst_43452 = (state_43485[2]);var inst_43453 = (inst_43445 + 1);var tmp43499 = inst_43443;var tmp43500 = inst_43442;var tmp43501 = inst_43444;var inst_43442__$1 = tmp43500;var inst_43443__$1 = tmp43499;var inst_43444__$1 = tmp43501;var inst_43445__$1 = inst_43453;var state_43485__$1 = (function (){var statearr_43506 = state_43485;(statearr_43506[8] = inst_43443__$1);
(statearr_43506[9] = inst_43442__$1);
(statearr_43506[10] = inst_43444__$1);
(statearr_43506[11] = inst_43445__$1);
(statearr_43506[14] = inst_43452);
return statearr_43506;
})();var statearr_43507_43536 = state_43485__$1;(statearr_43507_43536[2] = null);
(statearr_43507_43536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 14))
{var inst_43456 = (state_43485[13]);var inst_43458 = cljs.core.chunked_seq_QMARK_.call(null,inst_43456);var state_43485__$1 = state_43485;if(inst_43458)
{var statearr_43508_43537 = state_43485__$1;(statearr_43508_43537[1] = 17);
} else
{var statearr_43509_43538 = state_43485__$1;(statearr_43509_43538[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 15))
{var state_43485__$1 = state_43485;var statearr_43510_43539 = state_43485__$1;(statearr_43510_43539[2] = null);
(statearr_43510_43539[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 16))
{var inst_43474 = (state_43485[2]);var state_43485__$1 = state_43485;var statearr_43511_43540 = state_43485__$1;(statearr_43511_43540[2] = inst_43474);
(statearr_43511_43540[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 17))
{var inst_43456 = (state_43485[13]);var inst_43460 = cljs.core.chunk_first.call(null,inst_43456);var inst_43461 = cljs.core.chunk_rest.call(null,inst_43456);var inst_43462 = cljs.core.count.call(null,inst_43460);var inst_43442 = inst_43461;var inst_43443 = inst_43460;var inst_43444 = inst_43462;var inst_43445 = 0;var state_43485__$1 = (function (){var statearr_43512 = state_43485;(statearr_43512[8] = inst_43443);
(statearr_43512[9] = inst_43442);
(statearr_43512[10] = inst_43444);
(statearr_43512[11] = inst_43445);
return statearr_43512;
})();var statearr_43513_43541 = state_43485__$1;(statearr_43513_43541[2] = null);
(statearr_43513_43541[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 18))
{var inst_43456 = (state_43485[13]);var inst_43465 = cljs.core.first.call(null,inst_43456);var state_43485__$1 = state_43485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43485__$1,20,out,inst_43465);
} else
{if((state_val_43486 === 19))
{var inst_43471 = (state_43485[2]);var state_43485__$1 = state_43485;var statearr_43514_43542 = state_43485__$1;(statearr_43514_43542[2] = inst_43471);
(statearr_43514_43542[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43486 === 20))
{var inst_43456 = (state_43485[13]);var inst_43467 = (state_43485[2]);var inst_43468 = cljs.core.next.call(null,inst_43456);var inst_43442 = inst_43468;var inst_43443 = null;var inst_43444 = 0;var inst_43445 = 0;var state_43485__$1 = (function (){var statearr_43515 = state_43485;(statearr_43515[8] = inst_43443);
(statearr_43515[9] = inst_43442);
(statearr_43515[15] = inst_43467);
(statearr_43515[10] = inst_43444);
(statearr_43515[11] = inst_43445);
return statearr_43515;
})();var statearr_43516_43543 = state_43485__$1;(statearr_43516_43543[2] = null);
(statearr_43516_43543[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_43520 = (new Array(16));(statearr_43520[0] = state_machine__13310__auto__);
(statearr_43520[1] = 1);
return statearr_43520;
});
var state_machine__13310__auto____1 = (function (state_43485){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_43485);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e43521){if((e43521 instanceof Object))
{var ex__13313__auto__ = e43521;var statearr_43522_43544 = state_43485;(statearr_43522_43544[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43485);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43545 = state_43485;
state_43485 = G__43545;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_43485){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_43485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_43523 = f__13410__auto__.call(null);(statearr_43523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_43523;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___43626 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_43605){var state_val_43606 = (state_43605[1]);if((state_val_43606 === 1))
{var state_43605__$1 = state_43605;var statearr_43607_43627 = state_43605__$1;(statearr_43607_43627[2] = null);
(statearr_43607_43627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 2))
{var state_43605__$1 = state_43605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43605__$1,4,from);
} else
{if((state_val_43606 === 3))
{var inst_43603 = (state_43605[2]);var state_43605__$1 = state_43605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43605__$1,inst_43603);
} else
{if((state_val_43606 === 4))
{var inst_43588 = (state_43605[7]);var inst_43588__$1 = (state_43605[2]);var inst_43589 = (inst_43588__$1 == null);var state_43605__$1 = (function (){var statearr_43608 = state_43605;(statearr_43608[7] = inst_43588__$1);
return statearr_43608;
})();if(cljs.core.truth_(inst_43589))
{var statearr_43609_43628 = state_43605__$1;(statearr_43609_43628[1] = 5);
} else
{var statearr_43610_43629 = state_43605__$1;(statearr_43610_43629[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 5))
{var state_43605__$1 = state_43605;if(cljs.core.truth_(close_QMARK_))
{var statearr_43611_43630 = state_43605__$1;(statearr_43611_43630[1] = 8);
} else
{var statearr_43612_43631 = state_43605__$1;(statearr_43612_43631[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 6))
{var inst_43588 = (state_43605[7]);var state_43605__$1 = state_43605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43605__$1,11,to,inst_43588);
} else
{if((state_val_43606 === 7))
{var inst_43601 = (state_43605[2]);var state_43605__$1 = state_43605;var statearr_43613_43632 = state_43605__$1;(statearr_43613_43632[2] = inst_43601);
(statearr_43613_43632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 8))
{var inst_43592 = cljs.core.async.close_BANG_.call(null,to);var state_43605__$1 = state_43605;var statearr_43614_43633 = state_43605__$1;(statearr_43614_43633[2] = inst_43592);
(statearr_43614_43633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 9))
{var state_43605__$1 = state_43605;var statearr_43615_43634 = state_43605__$1;(statearr_43615_43634[2] = null);
(statearr_43615_43634[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 10))
{var inst_43595 = (state_43605[2]);var state_43605__$1 = state_43605;var statearr_43616_43635 = state_43605__$1;(statearr_43616_43635[2] = inst_43595);
(statearr_43616_43635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43606 === 11))
{var inst_43598 = (state_43605[2]);var state_43605__$1 = (function (){var statearr_43617 = state_43605;(statearr_43617[8] = inst_43598);
return statearr_43617;
})();var statearr_43618_43636 = state_43605__$1;(statearr_43618_43636[2] = null);
(statearr_43618_43636[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_43622 = (new Array(9));(statearr_43622[0] = state_machine__13310__auto__);
(statearr_43622[1] = 1);
return statearr_43622;
});
var state_machine__13310__auto____1 = (function (state_43605){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_43605);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e43623){if((e43623 instanceof Object))
{var ex__13313__auto__ = e43623;var statearr_43624_43637 = state_43605;(statearr_43624_43637[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43638 = state_43605;
state_43605 = G__43638;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_43605){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_43605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_43625 = f__13410__auto__.call(null);(statearr_43625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___43626);
return statearr_43625;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___43725 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_43703){var state_val_43704 = (state_43703[1]);if((state_val_43704 === 1))
{var state_43703__$1 = state_43703;var statearr_43705_43726 = state_43703__$1;(statearr_43705_43726[2] = null);
(statearr_43705_43726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 2))
{var state_43703__$1 = state_43703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43703__$1,4,ch);
} else
{if((state_val_43704 === 3))
{var inst_43701 = (state_43703[2]);var state_43703__$1 = state_43703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43703__$1,inst_43701);
} else
{if((state_val_43704 === 4))
{var inst_43684 = (state_43703[7]);var inst_43684__$1 = (state_43703[2]);var inst_43685 = (inst_43684__$1 == null);var state_43703__$1 = (function (){var statearr_43706 = state_43703;(statearr_43706[7] = inst_43684__$1);
return statearr_43706;
})();if(cljs.core.truth_(inst_43685))
{var statearr_43707_43727 = state_43703__$1;(statearr_43707_43727[1] = 5);
} else
{var statearr_43708_43728 = state_43703__$1;(statearr_43708_43728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 5))
{var inst_43687 = cljs.core.async.close_BANG_.call(null,tc);var inst_43688 = cljs.core.async.close_BANG_.call(null,fc);var state_43703__$1 = (function (){var statearr_43709 = state_43703;(statearr_43709[8] = inst_43687);
return statearr_43709;
})();var statearr_43710_43729 = state_43703__$1;(statearr_43710_43729[2] = inst_43688);
(statearr_43710_43729[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 6))
{var inst_43684 = (state_43703[7]);var inst_43690 = p.call(null,inst_43684);var state_43703__$1 = state_43703;if(cljs.core.truth_(inst_43690))
{var statearr_43711_43730 = state_43703__$1;(statearr_43711_43730[1] = 9);
} else
{var statearr_43712_43731 = state_43703__$1;(statearr_43712_43731[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 7))
{var inst_43699 = (state_43703[2]);var state_43703__$1 = state_43703;var statearr_43713_43732 = state_43703__$1;(statearr_43713_43732[2] = inst_43699);
(statearr_43713_43732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 8))
{var inst_43696 = (state_43703[2]);var state_43703__$1 = (function (){var statearr_43714 = state_43703;(statearr_43714[9] = inst_43696);
return statearr_43714;
})();var statearr_43715_43733 = state_43703__$1;(statearr_43715_43733[2] = null);
(statearr_43715_43733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 9))
{var state_43703__$1 = state_43703;var statearr_43716_43734 = state_43703__$1;(statearr_43716_43734[2] = tc);
(statearr_43716_43734[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 10))
{var state_43703__$1 = state_43703;var statearr_43717_43735 = state_43703__$1;(statearr_43717_43735[2] = fc);
(statearr_43717_43735[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43704 === 11))
{var inst_43684 = (state_43703[7]);var inst_43694 = (state_43703[2]);var state_43703__$1 = state_43703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43703__$1,8,inst_43694,inst_43684);
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
var state_machine__13310__auto____0 = (function (){var statearr_43721 = (new Array(10));(statearr_43721[0] = state_machine__13310__auto__);
(statearr_43721[1] = 1);
return statearr_43721;
});
var state_machine__13310__auto____1 = (function (state_43703){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_43703);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e43722){if((e43722 instanceof Object))
{var ex__13313__auto__ = e43722;var statearr_43723_43736 = state_43703;(statearr_43723_43736[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43703);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43737 = state_43703;
state_43703 = G__43737;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_43703){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_43703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_43724 = f__13410__auto__.call(null);(statearr_43724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___43725);
return statearr_43724;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_43784){var state_val_43785 = (state_43784[1]);if((state_val_43785 === 7))
{var inst_43780 = (state_43784[2]);var state_43784__$1 = state_43784;var statearr_43786_43802 = state_43784__$1;(statearr_43786_43802[2] = inst_43780);
(statearr_43786_43802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43785 === 6))
{var inst_43773 = (state_43784[7]);var inst_43770 = (state_43784[8]);var inst_43777 = f.call(null,inst_43770,inst_43773);var inst_43770__$1 = inst_43777;var state_43784__$1 = (function (){var statearr_43787 = state_43784;(statearr_43787[8] = inst_43770__$1);
return statearr_43787;
})();var statearr_43788_43803 = state_43784__$1;(statearr_43788_43803[2] = null);
(statearr_43788_43803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43785 === 5))
{var inst_43770 = (state_43784[8]);var state_43784__$1 = state_43784;var statearr_43789_43804 = state_43784__$1;(statearr_43789_43804[2] = inst_43770);
(statearr_43789_43804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43785 === 4))
{var inst_43773 = (state_43784[7]);var inst_43773__$1 = (state_43784[2]);var inst_43774 = (inst_43773__$1 == null);var state_43784__$1 = (function (){var statearr_43790 = state_43784;(statearr_43790[7] = inst_43773__$1);
return statearr_43790;
})();if(cljs.core.truth_(inst_43774))
{var statearr_43791_43805 = state_43784__$1;(statearr_43791_43805[1] = 5);
} else
{var statearr_43792_43806 = state_43784__$1;(statearr_43792_43806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43785 === 3))
{var inst_43782 = (state_43784[2]);var state_43784__$1 = state_43784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43784__$1,inst_43782);
} else
{if((state_val_43785 === 2))
{var state_43784__$1 = state_43784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43784__$1,4,ch);
} else
{if((state_val_43785 === 1))
{var inst_43770 = init;var state_43784__$1 = (function (){var statearr_43793 = state_43784;(statearr_43793[8] = inst_43770);
return statearr_43793;
})();var statearr_43794_43807 = state_43784__$1;(statearr_43794_43807[2] = null);
(statearr_43794_43807[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_43798 = (new Array(9));(statearr_43798[0] = state_machine__13310__auto__);
(statearr_43798[1] = 1);
return statearr_43798;
});
var state_machine__13310__auto____1 = (function (state_43784){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_43784);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e43799){if((e43799 instanceof Object))
{var ex__13313__auto__ = e43799;var statearr_43800_43808 = state_43784;(statearr_43800_43808[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43784);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43809 = state_43784;
state_43784 = G__43809;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_43784){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_43784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_43801 = f__13410__auto__.call(null);(statearr_43801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_43801;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_43871){var state_val_43872 = (state_43871[1]);if((state_val_43872 === 1))
{var inst_43851 = cljs.core.seq.call(null,coll);var inst_43852 = inst_43851;var state_43871__$1 = (function (){var statearr_43873 = state_43871;(statearr_43873[7] = inst_43852);
return statearr_43873;
})();var statearr_43874_43892 = state_43871__$1;(statearr_43874_43892[2] = null);
(statearr_43874_43892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 2))
{var inst_43852 = (state_43871[7]);var state_43871__$1 = state_43871;if(cljs.core.truth_(inst_43852))
{var statearr_43875_43893 = state_43871__$1;(statearr_43875_43893[1] = 4);
} else
{var statearr_43876_43894 = state_43871__$1;(statearr_43876_43894[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 3))
{var inst_43869 = (state_43871[2]);var state_43871__$1 = state_43871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43871__$1,inst_43869);
} else
{if((state_val_43872 === 4))
{var inst_43852 = (state_43871[7]);var inst_43855 = cljs.core.first.call(null,inst_43852);var state_43871__$1 = state_43871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43871__$1,7,ch,inst_43855);
} else
{if((state_val_43872 === 5))
{var state_43871__$1 = state_43871;if(cljs.core.truth_(close_QMARK_))
{var statearr_43877_43895 = state_43871__$1;(statearr_43877_43895[1] = 8);
} else
{var statearr_43878_43896 = state_43871__$1;(statearr_43878_43896[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 6))
{var inst_43867 = (state_43871[2]);var state_43871__$1 = state_43871;var statearr_43879_43897 = state_43871__$1;(statearr_43879_43897[2] = inst_43867);
(statearr_43879_43897[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 7))
{var inst_43852 = (state_43871[7]);var inst_43857 = (state_43871[2]);var inst_43858 = cljs.core.next.call(null,inst_43852);var inst_43852__$1 = inst_43858;var state_43871__$1 = (function (){var statearr_43880 = state_43871;(statearr_43880[8] = inst_43857);
(statearr_43880[7] = inst_43852__$1);
return statearr_43880;
})();var statearr_43881_43898 = state_43871__$1;(statearr_43881_43898[2] = null);
(statearr_43881_43898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 8))
{var inst_43862 = cljs.core.async.close_BANG_.call(null,ch);var state_43871__$1 = state_43871;var statearr_43882_43899 = state_43871__$1;(statearr_43882_43899[2] = inst_43862);
(statearr_43882_43899[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 9))
{var state_43871__$1 = state_43871;var statearr_43883_43900 = state_43871__$1;(statearr_43883_43900[2] = null);
(statearr_43883_43900[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43872 === 10))
{var inst_43865 = (state_43871[2]);var state_43871__$1 = state_43871;var statearr_43884_43901 = state_43871__$1;(statearr_43884_43901[2] = inst_43865);
(statearr_43884_43901[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_43888 = (new Array(9));(statearr_43888[0] = state_machine__13310__auto__);
(statearr_43888[1] = 1);
return statearr_43888;
});
var state_machine__13310__auto____1 = (function (state_43871){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_43871);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e43889){if((e43889 instanceof Object))
{var ex__13313__auto__ = e43889;var statearr_43890_43902 = state_43871;(statearr_43890_43902[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43903 = state_43871;
state_43871 = G__43903;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_43871){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_43871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_43891 = f__13410__auto__.call(null);(statearr_43891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_43891;
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
cljs.core.async.Mux = (function (){var obj43905 = {};return obj43905;
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
cljs.core.async.Mult = (function (){var obj43907 = {};return obj43907;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t44122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44122 = (function (cs,ch,mult,meta44123){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta44123 = meta44123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44122.cljs$lang$type = true;
cljs.core.async.t44122.cljs$lang$ctorStr = "cljs.core.async/t44122";
cljs.core.async.t44122.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t44122");
});})(cs))
;
cljs.core.async.t44122.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t44122.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t44122.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t44122.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t44122.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t44122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44124){var self__ = this;
var _44124__$1 = this;return self__.meta44123;
});})(cs))
;
cljs.core.async.t44122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44124,meta44123__$1){var self__ = this;
var _44124__$1 = this;return (new cljs.core.async.t44122(self__.cs,self__.ch,self__.mult,meta44123__$1));
});})(cs))
;
cljs.core.async.__GT_t44122 = ((function (cs){
return (function __GT_t44122(cs__$1,ch__$1,mult__$1,meta44123){return (new cljs.core.async.t44122(cs__$1,ch__$1,mult__$1,meta44123));
});})(cs))
;
}
return (new cljs.core.async.t44122(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___44336 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_44254){var state_val_44255 = (state_44254[1]);if((state_val_44255 === 32))
{var inst_44203 = (state_44254[7]);var inst_44127 = (state_44254[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44254,31,Object,null,30);var inst_44210 = cljs.core.async.put_BANG_.call(null,inst_44203,inst_44127,done);var state_44254__$1 = state_44254;var statearr_44256_44337 = state_44254__$1;(statearr_44256_44337[2] = inst_44210);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44254__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 1))
{var state_44254__$1 = state_44254;var statearr_44257_44338 = state_44254__$1;(statearr_44257_44338[2] = null);
(statearr_44257_44338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 33))
{var inst_44216 = (state_44254[9]);var inst_44218 = cljs.core.chunked_seq_QMARK_.call(null,inst_44216);var state_44254__$1 = state_44254;if(inst_44218)
{var statearr_44258_44339 = state_44254__$1;(statearr_44258_44339[1] = 36);
} else
{var statearr_44259_44340 = state_44254__$1;(statearr_44259_44340[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 2))
{var state_44254__$1 = state_44254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44254__$1,4,ch);
} else
{if((state_val_44255 === 34))
{var state_44254__$1 = state_44254;var statearr_44260_44341 = state_44254__$1;(statearr_44260_44341[2] = null);
(statearr_44260_44341[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 3))
{var inst_44252 = (state_44254[2]);var state_44254__$1 = state_44254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44254__$1,inst_44252);
} else
{if((state_val_44255 === 35))
{var inst_44241 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44261_44342 = state_44254__$1;(statearr_44261_44342[2] = inst_44241);
(statearr_44261_44342[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 4))
{var inst_44127 = (state_44254[8]);var inst_44127__$1 = (state_44254[2]);var inst_44128 = (inst_44127__$1 == null);var state_44254__$1 = (function (){var statearr_44262 = state_44254;(statearr_44262[8] = inst_44127__$1);
return statearr_44262;
})();if(cljs.core.truth_(inst_44128))
{var statearr_44263_44343 = state_44254__$1;(statearr_44263_44343[1] = 5);
} else
{var statearr_44264_44344 = state_44254__$1;(statearr_44264_44344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 36))
{var inst_44216 = (state_44254[9]);var inst_44220 = cljs.core.chunk_first.call(null,inst_44216);var inst_44221 = cljs.core.chunk_rest.call(null,inst_44216);var inst_44222 = cljs.core.count.call(null,inst_44220);var inst_44195 = inst_44221;var inst_44196 = inst_44220;var inst_44197 = inst_44222;var inst_44198 = 0;var state_44254__$1 = (function (){var statearr_44265 = state_44254;(statearr_44265[10] = inst_44197);
(statearr_44265[11] = inst_44198);
(statearr_44265[12] = inst_44195);
(statearr_44265[13] = inst_44196);
return statearr_44265;
})();var statearr_44266_44345 = state_44254__$1;(statearr_44266_44345[2] = null);
(statearr_44266_44345[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 5))
{var inst_44134 = cljs.core.deref.call(null,cs);var inst_44135 = cljs.core.seq.call(null,inst_44134);var inst_44136 = inst_44135;var inst_44137 = null;var inst_44138 = 0;var inst_44139 = 0;var state_44254__$1 = (function (){var statearr_44267 = state_44254;(statearr_44267[14] = inst_44136);
(statearr_44267[15] = inst_44137);
(statearr_44267[16] = inst_44138);
(statearr_44267[17] = inst_44139);
return statearr_44267;
})();var statearr_44268_44346 = state_44254__$1;(statearr_44268_44346[2] = null);
(statearr_44268_44346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 37))
{var inst_44216 = (state_44254[9]);var inst_44225 = cljs.core.first.call(null,inst_44216);var state_44254__$1 = (function (){var statearr_44269 = state_44254;(statearr_44269[18] = inst_44225);
return statearr_44269;
})();var statearr_44270_44347 = state_44254__$1;(statearr_44270_44347[2] = null);
(statearr_44270_44347[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 6))
{var inst_44186 = cljs.core.deref.call(null,cs);var inst_44187 = cljs.core.keys.call(null,inst_44186);var inst_44188 = cljs.core.count.call(null,inst_44187);var inst_44189 = cljs.core.reset_BANG_.call(null,dctr,inst_44188);var inst_44194 = cljs.core.seq.call(null,inst_44187);var inst_44195 = inst_44194;var inst_44196 = null;var inst_44197 = 0;var inst_44198 = 0;var state_44254__$1 = (function (){var statearr_44271 = state_44254;(statearr_44271[10] = inst_44197);
(statearr_44271[11] = inst_44198);
(statearr_44271[12] = inst_44195);
(statearr_44271[13] = inst_44196);
(statearr_44271[19] = inst_44189);
return statearr_44271;
})();var statearr_44272_44348 = state_44254__$1;(statearr_44272_44348[2] = null);
(statearr_44272_44348[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 38))
{var inst_44238 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44273_44349 = state_44254__$1;(statearr_44273_44349[2] = inst_44238);
(statearr_44273_44349[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 7))
{var inst_44250 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44274_44350 = state_44254__$1;(statearr_44274_44350[2] = inst_44250);
(statearr_44274_44350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 39))
{var inst_44216 = (state_44254[9]);var inst_44234 = (state_44254[2]);var inst_44235 = cljs.core.next.call(null,inst_44216);var inst_44195 = inst_44235;var inst_44196 = null;var inst_44197 = 0;var inst_44198 = 0;var state_44254__$1 = (function (){var statearr_44275 = state_44254;(statearr_44275[20] = inst_44234);
(statearr_44275[10] = inst_44197);
(statearr_44275[11] = inst_44198);
(statearr_44275[12] = inst_44195);
(statearr_44275[13] = inst_44196);
return statearr_44275;
})();var statearr_44276_44351 = state_44254__$1;(statearr_44276_44351[2] = null);
(statearr_44276_44351[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 8))
{var inst_44138 = (state_44254[16]);var inst_44139 = (state_44254[17]);var inst_44141 = (inst_44139 < inst_44138);var inst_44142 = inst_44141;var state_44254__$1 = state_44254;if(cljs.core.truth_(inst_44142))
{var statearr_44277_44352 = state_44254__$1;(statearr_44277_44352[1] = 10);
} else
{var statearr_44278_44353 = state_44254__$1;(statearr_44278_44353[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 40))
{var inst_44225 = (state_44254[18]);var inst_44226 = (state_44254[2]);var inst_44227 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_44228 = cljs.core.async.untap_STAR_.call(null,m,inst_44225);var state_44254__$1 = (function (){var statearr_44279 = state_44254;(statearr_44279[21] = inst_44226);
(statearr_44279[22] = inst_44227);
return statearr_44279;
})();var statearr_44280_44354 = state_44254__$1;(statearr_44280_44354[2] = inst_44228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44254__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 9))
{var inst_44184 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44281_44355 = state_44254__$1;(statearr_44281_44355[2] = inst_44184);
(statearr_44281_44355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 41))
{var inst_44127 = (state_44254[8]);var inst_44225 = (state_44254[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44254,40,Object,null,39);var inst_44232 = cljs.core.async.put_BANG_.call(null,inst_44225,inst_44127,done);var state_44254__$1 = state_44254;var statearr_44282_44356 = state_44254__$1;(statearr_44282_44356[2] = inst_44232);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44254__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 10))
{var inst_44137 = (state_44254[15]);var inst_44139 = (state_44254[17]);var inst_44145 = cljs.core._nth.call(null,inst_44137,inst_44139);var inst_44146 = cljs.core.nth.call(null,inst_44145,0,null);var inst_44147 = cljs.core.nth.call(null,inst_44145,1,null);var state_44254__$1 = (function (){var statearr_44283 = state_44254;(statearr_44283[23] = inst_44146);
return statearr_44283;
})();if(cljs.core.truth_(inst_44147))
{var statearr_44284_44357 = state_44254__$1;(statearr_44284_44357[1] = 13);
} else
{var statearr_44285_44358 = state_44254__$1;(statearr_44285_44358[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 42))
{var inst_44247 = (state_44254[2]);var state_44254__$1 = (function (){var statearr_44286 = state_44254;(statearr_44286[24] = inst_44247);
return statearr_44286;
})();var statearr_44287_44359 = state_44254__$1;(statearr_44287_44359[2] = null);
(statearr_44287_44359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 11))
{var inst_44136 = (state_44254[14]);var inst_44156 = (state_44254[25]);var inst_44156__$1 = cljs.core.seq.call(null,inst_44136);var state_44254__$1 = (function (){var statearr_44288 = state_44254;(statearr_44288[25] = inst_44156__$1);
return statearr_44288;
})();if(inst_44156__$1)
{var statearr_44289_44360 = state_44254__$1;(statearr_44289_44360[1] = 16);
} else
{var statearr_44290_44361 = state_44254__$1;(statearr_44290_44361[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 12))
{var inst_44182 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44291_44362 = state_44254__$1;(statearr_44291_44362[2] = inst_44182);
(statearr_44291_44362[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 13))
{var inst_44146 = (state_44254[23]);var inst_44149 = cljs.core.async.close_BANG_.call(null,inst_44146);var state_44254__$1 = state_44254;var statearr_44295_44363 = state_44254__$1;(statearr_44295_44363[2] = inst_44149);
(statearr_44295_44363[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 14))
{var state_44254__$1 = state_44254;var statearr_44296_44364 = state_44254__$1;(statearr_44296_44364[2] = null);
(statearr_44296_44364[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 15))
{var inst_44136 = (state_44254[14]);var inst_44137 = (state_44254[15]);var inst_44138 = (state_44254[16]);var inst_44139 = (state_44254[17]);var inst_44152 = (state_44254[2]);var inst_44153 = (inst_44139 + 1);var tmp44292 = inst_44136;var tmp44293 = inst_44137;var tmp44294 = inst_44138;var inst_44136__$1 = tmp44292;var inst_44137__$1 = tmp44293;var inst_44138__$1 = tmp44294;var inst_44139__$1 = inst_44153;var state_44254__$1 = (function (){var statearr_44297 = state_44254;(statearr_44297[14] = inst_44136__$1);
(statearr_44297[26] = inst_44152);
(statearr_44297[15] = inst_44137__$1);
(statearr_44297[16] = inst_44138__$1);
(statearr_44297[17] = inst_44139__$1);
return statearr_44297;
})();var statearr_44298_44365 = state_44254__$1;(statearr_44298_44365[2] = null);
(statearr_44298_44365[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 16))
{var inst_44156 = (state_44254[25]);var inst_44158 = cljs.core.chunked_seq_QMARK_.call(null,inst_44156);var state_44254__$1 = state_44254;if(inst_44158)
{var statearr_44299_44366 = state_44254__$1;(statearr_44299_44366[1] = 19);
} else
{var statearr_44300_44367 = state_44254__$1;(statearr_44300_44367[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 17))
{var state_44254__$1 = state_44254;var statearr_44301_44368 = state_44254__$1;(statearr_44301_44368[2] = null);
(statearr_44301_44368[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 18))
{var inst_44180 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44302_44369 = state_44254__$1;(statearr_44302_44369[2] = inst_44180);
(statearr_44302_44369[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 19))
{var inst_44156 = (state_44254[25]);var inst_44160 = cljs.core.chunk_first.call(null,inst_44156);var inst_44161 = cljs.core.chunk_rest.call(null,inst_44156);var inst_44162 = cljs.core.count.call(null,inst_44160);var inst_44136 = inst_44161;var inst_44137 = inst_44160;var inst_44138 = inst_44162;var inst_44139 = 0;var state_44254__$1 = (function (){var statearr_44303 = state_44254;(statearr_44303[14] = inst_44136);
(statearr_44303[15] = inst_44137);
(statearr_44303[16] = inst_44138);
(statearr_44303[17] = inst_44139);
return statearr_44303;
})();var statearr_44304_44370 = state_44254__$1;(statearr_44304_44370[2] = null);
(statearr_44304_44370[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 20))
{var inst_44156 = (state_44254[25]);var inst_44166 = cljs.core.first.call(null,inst_44156);var inst_44167 = cljs.core.nth.call(null,inst_44166,0,null);var inst_44168 = cljs.core.nth.call(null,inst_44166,1,null);var state_44254__$1 = (function (){var statearr_44305 = state_44254;(statearr_44305[27] = inst_44167);
return statearr_44305;
})();if(cljs.core.truth_(inst_44168))
{var statearr_44306_44371 = state_44254__$1;(statearr_44306_44371[1] = 22);
} else
{var statearr_44307_44372 = state_44254__$1;(statearr_44307_44372[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 21))
{var inst_44177 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44308_44373 = state_44254__$1;(statearr_44308_44373[2] = inst_44177);
(statearr_44308_44373[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 22))
{var inst_44167 = (state_44254[27]);var inst_44170 = cljs.core.async.close_BANG_.call(null,inst_44167);var state_44254__$1 = state_44254;var statearr_44309_44374 = state_44254__$1;(statearr_44309_44374[2] = inst_44170);
(statearr_44309_44374[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 23))
{var state_44254__$1 = state_44254;var statearr_44310_44375 = state_44254__$1;(statearr_44310_44375[2] = null);
(statearr_44310_44375[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 24))
{var inst_44156 = (state_44254[25]);var inst_44173 = (state_44254[2]);var inst_44174 = cljs.core.next.call(null,inst_44156);var inst_44136 = inst_44174;var inst_44137 = null;var inst_44138 = 0;var inst_44139 = 0;var state_44254__$1 = (function (){var statearr_44311 = state_44254;(statearr_44311[14] = inst_44136);
(statearr_44311[28] = inst_44173);
(statearr_44311[15] = inst_44137);
(statearr_44311[16] = inst_44138);
(statearr_44311[17] = inst_44139);
return statearr_44311;
})();var statearr_44312_44376 = state_44254__$1;(statearr_44312_44376[2] = null);
(statearr_44312_44376[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 25))
{var inst_44197 = (state_44254[10]);var inst_44198 = (state_44254[11]);var inst_44200 = (inst_44198 < inst_44197);var inst_44201 = inst_44200;var state_44254__$1 = state_44254;if(cljs.core.truth_(inst_44201))
{var statearr_44313_44377 = state_44254__$1;(statearr_44313_44377[1] = 27);
} else
{var statearr_44314_44378 = state_44254__$1;(statearr_44314_44378[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 26))
{var inst_44245 = (state_44254[2]);var state_44254__$1 = (function (){var statearr_44315 = state_44254;(statearr_44315[29] = inst_44245);
return statearr_44315;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44254__$1,42,dchan);
} else
{if((state_val_44255 === 27))
{var inst_44198 = (state_44254[11]);var inst_44196 = (state_44254[13]);var inst_44203 = cljs.core._nth.call(null,inst_44196,inst_44198);var state_44254__$1 = (function (){var statearr_44316 = state_44254;(statearr_44316[7] = inst_44203);
return statearr_44316;
})();var statearr_44317_44379 = state_44254__$1;(statearr_44317_44379[2] = null);
(statearr_44317_44379[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 28))
{var inst_44195 = (state_44254[12]);var inst_44216 = (state_44254[9]);var inst_44216__$1 = cljs.core.seq.call(null,inst_44195);var state_44254__$1 = (function (){var statearr_44321 = state_44254;(statearr_44321[9] = inst_44216__$1);
return statearr_44321;
})();if(inst_44216__$1)
{var statearr_44322_44380 = state_44254__$1;(statearr_44322_44380[1] = 33);
} else
{var statearr_44323_44381 = state_44254__$1;(statearr_44323_44381[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 29))
{var inst_44243 = (state_44254[2]);var state_44254__$1 = state_44254;var statearr_44324_44382 = state_44254__$1;(statearr_44324_44382[2] = inst_44243);
(statearr_44324_44382[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 30))
{var inst_44197 = (state_44254[10]);var inst_44198 = (state_44254[11]);var inst_44195 = (state_44254[12]);var inst_44196 = (state_44254[13]);var inst_44212 = (state_44254[2]);var inst_44213 = (inst_44198 + 1);var tmp44318 = inst_44197;var tmp44319 = inst_44195;var tmp44320 = inst_44196;var inst_44195__$1 = tmp44319;var inst_44196__$1 = tmp44320;var inst_44197__$1 = tmp44318;var inst_44198__$1 = inst_44213;var state_44254__$1 = (function (){var statearr_44325 = state_44254;(statearr_44325[30] = inst_44212);
(statearr_44325[10] = inst_44197__$1);
(statearr_44325[11] = inst_44198__$1);
(statearr_44325[12] = inst_44195__$1);
(statearr_44325[13] = inst_44196__$1);
return statearr_44325;
})();var statearr_44326_44383 = state_44254__$1;(statearr_44326_44383[2] = null);
(statearr_44326_44383[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44255 === 31))
{var inst_44203 = (state_44254[7]);var inst_44204 = (state_44254[2]);var inst_44205 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_44206 = cljs.core.async.untap_STAR_.call(null,m,inst_44203);var state_44254__$1 = (function (){var statearr_44327 = state_44254;(statearr_44327[31] = inst_44204);
(statearr_44327[32] = inst_44205);
return statearr_44327;
})();var statearr_44328_44384 = state_44254__$1;(statearr_44328_44384[2] = inst_44206);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44254__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_44332 = (new Array(33));(statearr_44332[0] = state_machine__13310__auto__);
(statearr_44332[1] = 1);
return statearr_44332;
});
var state_machine__13310__auto____1 = (function (state_44254){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_44254);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e44333){if((e44333 instanceof Object))
{var ex__13313__auto__ = e44333;var statearr_44334_44385 = state_44254;(statearr_44334_44385[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44333;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44386 = state_44254;
state_44254 = G__44386;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_44254){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_44254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_44335 = f__13410__auto__.call(null);(statearr_44335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___44336);
return statearr_44335;
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
cljs.core.async.Mix = (function (){var obj44388 = {};return obj44388;
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
;var m = (function (){if(typeof cljs.core.async.t44498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44498 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta44499){
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
this.meta44499 = meta44499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44498.cljs$lang$type = true;
cljs.core.async.t44498.cljs$lang$ctorStr = "cljs.core.async/t44498";
cljs.core.async.t44498.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t44498");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t44498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44500){var self__ = this;
var _44500__$1 = this;return self__.meta44499;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t44498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44500,meta44499__$1){var self__ = this;
var _44500__$1 = this;return (new cljs.core.async.t44498(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta44499__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t44498 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t44498(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta44499){return (new cljs.core.async.t44498(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta44499));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t44498(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___44607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_44565){var state_val_44566 = (state_44565[1]);if((state_val_44566 === 1))
{var inst_44504 = (state_44565[7]);var inst_44504__$1 = calc_state.call(null);var inst_44505 = cljs.core.seq_QMARK_.call(null,inst_44504__$1);var state_44565__$1 = (function (){var statearr_44567 = state_44565;(statearr_44567[7] = inst_44504__$1);
return statearr_44567;
})();if(inst_44505)
{var statearr_44568_44608 = state_44565__$1;(statearr_44568_44608[1] = 2);
} else
{var statearr_44569_44609 = state_44565__$1;(statearr_44569_44609[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 2))
{var inst_44504 = (state_44565[7]);var inst_44507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44504);var state_44565__$1 = state_44565;var statearr_44570_44610 = state_44565__$1;(statearr_44570_44610[2] = inst_44507);
(statearr_44570_44610[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 3))
{var inst_44504 = (state_44565[7]);var state_44565__$1 = state_44565;var statearr_44571_44611 = state_44565__$1;(statearr_44571_44611[2] = inst_44504);
(statearr_44571_44611[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 4))
{var inst_44504 = (state_44565[7]);var inst_44510 = (state_44565[2]);var inst_44511 = cljs.core.get.call(null,inst_44510,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_44512 = cljs.core.get.call(null,inst_44510,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_44513 = cljs.core.get.call(null,inst_44510,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_44514 = inst_44504;var state_44565__$1 = (function (){var statearr_44572 = state_44565;(statearr_44572[8] = inst_44511);
(statearr_44572[9] = inst_44512);
(statearr_44572[10] = inst_44513);
(statearr_44572[11] = inst_44514);
return statearr_44572;
})();var statearr_44573_44612 = state_44565__$1;(statearr_44573_44612[2] = null);
(statearr_44573_44612[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 5))
{var inst_44514 = (state_44565[11]);var inst_44517 = cljs.core.seq_QMARK_.call(null,inst_44514);var state_44565__$1 = state_44565;if(inst_44517)
{var statearr_44574_44613 = state_44565__$1;(statearr_44574_44613[1] = 7);
} else
{var statearr_44575_44614 = state_44565__$1;(statearr_44575_44614[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 6))
{var inst_44563 = (state_44565[2]);var state_44565__$1 = state_44565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44565__$1,inst_44563);
} else
{if((state_val_44566 === 7))
{var inst_44514 = (state_44565[11]);var inst_44519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44514);var state_44565__$1 = state_44565;var statearr_44576_44615 = state_44565__$1;(statearr_44576_44615[2] = inst_44519);
(statearr_44576_44615[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 8))
{var inst_44514 = (state_44565[11]);var state_44565__$1 = state_44565;var statearr_44577_44616 = state_44565__$1;(statearr_44577_44616[2] = inst_44514);
(statearr_44577_44616[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 9))
{var inst_44522 = (state_44565[12]);var inst_44522__$1 = (state_44565[2]);var inst_44523 = cljs.core.get.call(null,inst_44522__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_44524 = cljs.core.get.call(null,inst_44522__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_44525 = cljs.core.get.call(null,inst_44522__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_44565__$1 = (function (){var statearr_44578 = state_44565;(statearr_44578[12] = inst_44522__$1);
(statearr_44578[13] = inst_44524);
(statearr_44578[14] = inst_44525);
return statearr_44578;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_44565__$1,10,inst_44523);
} else
{if((state_val_44566 === 10))
{var inst_44530 = (state_44565[15]);var inst_44529 = (state_44565[16]);var inst_44528 = (state_44565[2]);var inst_44529__$1 = cljs.core.nth.call(null,inst_44528,0,null);var inst_44530__$1 = cljs.core.nth.call(null,inst_44528,1,null);var inst_44531 = (inst_44529__$1 == null);var inst_44532 = cljs.core._EQ_.call(null,inst_44530__$1,change);var inst_44533 = (inst_44531) || (inst_44532);var state_44565__$1 = (function (){var statearr_44579 = state_44565;(statearr_44579[15] = inst_44530__$1);
(statearr_44579[16] = inst_44529__$1);
return statearr_44579;
})();if(cljs.core.truth_(inst_44533))
{var statearr_44580_44617 = state_44565__$1;(statearr_44580_44617[1] = 11);
} else
{var statearr_44581_44618 = state_44565__$1;(statearr_44581_44618[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 11))
{var inst_44529 = (state_44565[16]);var inst_44535 = (inst_44529 == null);var state_44565__$1 = state_44565;if(cljs.core.truth_(inst_44535))
{var statearr_44582_44619 = state_44565__$1;(statearr_44582_44619[1] = 14);
} else
{var statearr_44583_44620 = state_44565__$1;(statearr_44583_44620[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 12))
{var inst_44530 = (state_44565[15]);var inst_44525 = (state_44565[14]);var inst_44544 = (state_44565[17]);var inst_44544__$1 = inst_44525.call(null,inst_44530);var state_44565__$1 = (function (){var statearr_44584 = state_44565;(statearr_44584[17] = inst_44544__$1);
return statearr_44584;
})();if(cljs.core.truth_(inst_44544__$1))
{var statearr_44585_44621 = state_44565__$1;(statearr_44585_44621[1] = 17);
} else
{var statearr_44586_44622 = state_44565__$1;(statearr_44586_44622[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 13))
{var inst_44561 = (state_44565[2]);var state_44565__$1 = state_44565;var statearr_44587_44623 = state_44565__$1;(statearr_44587_44623[2] = inst_44561);
(statearr_44587_44623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 14))
{var inst_44530 = (state_44565[15]);var inst_44537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44530);var state_44565__$1 = state_44565;var statearr_44588_44624 = state_44565__$1;(statearr_44588_44624[2] = inst_44537);
(statearr_44588_44624[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 15))
{var state_44565__$1 = state_44565;var statearr_44589_44625 = state_44565__$1;(statearr_44589_44625[2] = null);
(statearr_44589_44625[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 16))
{var inst_44540 = (state_44565[2]);var inst_44541 = calc_state.call(null);var inst_44514 = inst_44541;var state_44565__$1 = (function (){var statearr_44590 = state_44565;(statearr_44590[11] = inst_44514);
(statearr_44590[18] = inst_44540);
return statearr_44590;
})();var statearr_44591_44626 = state_44565__$1;(statearr_44591_44626[2] = null);
(statearr_44591_44626[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 17))
{var inst_44544 = (state_44565[17]);var state_44565__$1 = state_44565;var statearr_44592_44627 = state_44565__$1;(statearr_44592_44627[2] = inst_44544);
(statearr_44592_44627[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 18))
{var inst_44524 = (state_44565[13]);var inst_44530 = (state_44565[15]);var inst_44525 = (state_44565[14]);var inst_44547 = cljs.core.empty_QMARK_.call(null,inst_44525);var inst_44548 = inst_44524.call(null,inst_44530);var inst_44549 = cljs.core.not.call(null,inst_44548);var inst_44550 = (inst_44547) && (inst_44549);var state_44565__$1 = state_44565;var statearr_44593_44628 = state_44565__$1;(statearr_44593_44628[2] = inst_44550);
(statearr_44593_44628[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 19))
{var inst_44552 = (state_44565[2]);var state_44565__$1 = state_44565;if(cljs.core.truth_(inst_44552))
{var statearr_44594_44629 = state_44565__$1;(statearr_44594_44629[1] = 20);
} else
{var statearr_44595_44630 = state_44565__$1;(statearr_44595_44630[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 20))
{var inst_44529 = (state_44565[16]);var state_44565__$1 = state_44565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44565__$1,23,out,inst_44529);
} else
{if((state_val_44566 === 21))
{var state_44565__$1 = state_44565;var statearr_44596_44631 = state_44565__$1;(statearr_44596_44631[2] = null);
(statearr_44596_44631[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 22))
{var inst_44522 = (state_44565[12]);var inst_44558 = (state_44565[2]);var inst_44514 = inst_44522;var state_44565__$1 = (function (){var statearr_44597 = state_44565;(statearr_44597[11] = inst_44514);
(statearr_44597[19] = inst_44558);
return statearr_44597;
})();var statearr_44598_44632 = state_44565__$1;(statearr_44598_44632[2] = null);
(statearr_44598_44632[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44566 === 23))
{var inst_44555 = (state_44565[2]);var state_44565__$1 = state_44565;var statearr_44599_44633 = state_44565__$1;(statearr_44599_44633[2] = inst_44555);
(statearr_44599_44633[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_44603 = (new Array(20));(statearr_44603[0] = state_machine__13310__auto__);
(statearr_44603[1] = 1);
return statearr_44603;
});
var state_machine__13310__auto____1 = (function (state_44565){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_44565);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e44604){if((e44604 instanceof Object))
{var ex__13313__auto__ = e44604;var statearr_44605_44634 = state_44565;(statearr_44605_44634[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44635 = state_44565;
state_44565 = G__44635;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_44565){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_44565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_44606 = f__13410__auto__.call(null);(statearr_44606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___44607);
return statearr_44606;
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
cljs.core.async.Pub = (function (){var obj44637 = {};return obj44637;
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
return (function (p1__44638_SHARP_){if(cljs.core.truth_(p1__44638_SHARP_.call(null,topic)))
{return p1__44638_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__44638_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t44763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44763 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta44764){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta44764 = meta44764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44763.cljs$lang$type = true;
cljs.core.async.t44763.cljs$lang$ctorStr = "cljs.core.async/t44763";
cljs.core.async.t44763.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t44763");
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t44763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44765){var self__ = this;
var _44765__$1 = this;return self__.meta44764;
});})(mults,ensure_mult))
;
cljs.core.async.t44763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44765,meta44764__$1){var self__ = this;
var _44765__$1 = this;return (new cljs.core.async.t44763(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta44764__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t44763 = ((function (mults,ensure_mult){
return (function __GT_t44763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta44764){return (new cljs.core.async.t44763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta44764));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t44763(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___44887 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_44839){var state_val_44840 = (state_44839[1]);if((state_val_44840 === 1))
{var state_44839__$1 = state_44839;var statearr_44841_44888 = state_44839__$1;(statearr_44841_44888[2] = null);
(statearr_44841_44888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 2))
{var state_44839__$1 = state_44839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44839__$1,4,ch);
} else
{if((state_val_44840 === 3))
{var inst_44837 = (state_44839[2]);var state_44839__$1 = state_44839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44839__$1,inst_44837);
} else
{if((state_val_44840 === 4))
{var inst_44768 = (state_44839[7]);var inst_44768__$1 = (state_44839[2]);var inst_44769 = (inst_44768__$1 == null);var state_44839__$1 = (function (){var statearr_44842 = state_44839;(statearr_44842[7] = inst_44768__$1);
return statearr_44842;
})();if(cljs.core.truth_(inst_44769))
{var statearr_44843_44889 = state_44839__$1;(statearr_44843_44889[1] = 5);
} else
{var statearr_44844_44890 = state_44839__$1;(statearr_44844_44890[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 5))
{var inst_44775 = cljs.core.deref.call(null,mults);var inst_44776 = cljs.core.vals.call(null,inst_44775);var inst_44777 = cljs.core.seq.call(null,inst_44776);var inst_44778 = inst_44777;var inst_44779 = null;var inst_44780 = 0;var inst_44781 = 0;var state_44839__$1 = (function (){var statearr_44845 = state_44839;(statearr_44845[8] = inst_44779);
(statearr_44845[9] = inst_44780);
(statearr_44845[10] = inst_44781);
(statearr_44845[11] = inst_44778);
return statearr_44845;
})();var statearr_44846_44891 = state_44839__$1;(statearr_44846_44891[2] = null);
(statearr_44846_44891[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 6))
{var inst_44818 = (state_44839[12]);var inst_44816 = (state_44839[13]);var inst_44768 = (state_44839[7]);var inst_44816__$1 = topic_fn.call(null,inst_44768);var inst_44817 = cljs.core.deref.call(null,mults);var inst_44818__$1 = cljs.core.get.call(null,inst_44817,inst_44816__$1);var state_44839__$1 = (function (){var statearr_44847 = state_44839;(statearr_44847[12] = inst_44818__$1);
(statearr_44847[13] = inst_44816__$1);
return statearr_44847;
})();if(cljs.core.truth_(inst_44818__$1))
{var statearr_44848_44892 = state_44839__$1;(statearr_44848_44892[1] = 19);
} else
{var statearr_44849_44893 = state_44839__$1;(statearr_44849_44893[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 7))
{var inst_44835 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44850_44894 = state_44839__$1;(statearr_44850_44894[2] = inst_44835);
(statearr_44850_44894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 8))
{var inst_44780 = (state_44839[9]);var inst_44781 = (state_44839[10]);var inst_44783 = (inst_44781 < inst_44780);var inst_44784 = inst_44783;var state_44839__$1 = state_44839;if(cljs.core.truth_(inst_44784))
{var statearr_44854_44895 = state_44839__$1;(statearr_44854_44895[1] = 10);
} else
{var statearr_44855_44896 = state_44839__$1;(statearr_44855_44896[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 9))
{var inst_44814 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44856_44897 = state_44839__$1;(statearr_44856_44897[2] = inst_44814);
(statearr_44856_44897[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 10))
{var inst_44779 = (state_44839[8]);var inst_44780 = (state_44839[9]);var inst_44781 = (state_44839[10]);var inst_44778 = (state_44839[11]);var inst_44786 = cljs.core._nth.call(null,inst_44779,inst_44781);var inst_44787 = cljs.core.async.muxch_STAR_.call(null,inst_44786);var inst_44788 = cljs.core.async.close_BANG_.call(null,inst_44787);var inst_44789 = (inst_44781 + 1);var tmp44851 = inst_44779;var tmp44852 = inst_44780;var tmp44853 = inst_44778;var inst_44778__$1 = tmp44853;var inst_44779__$1 = tmp44851;var inst_44780__$1 = tmp44852;var inst_44781__$1 = inst_44789;var state_44839__$1 = (function (){var statearr_44857 = state_44839;(statearr_44857[8] = inst_44779__$1);
(statearr_44857[9] = inst_44780__$1);
(statearr_44857[10] = inst_44781__$1);
(statearr_44857[14] = inst_44788);
(statearr_44857[11] = inst_44778__$1);
return statearr_44857;
})();var statearr_44858_44898 = state_44839__$1;(statearr_44858_44898[2] = null);
(statearr_44858_44898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 11))
{var inst_44792 = (state_44839[15]);var inst_44778 = (state_44839[11]);var inst_44792__$1 = cljs.core.seq.call(null,inst_44778);var state_44839__$1 = (function (){var statearr_44859 = state_44839;(statearr_44859[15] = inst_44792__$1);
return statearr_44859;
})();if(inst_44792__$1)
{var statearr_44860_44899 = state_44839__$1;(statearr_44860_44899[1] = 13);
} else
{var statearr_44861_44900 = state_44839__$1;(statearr_44861_44900[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 12))
{var inst_44812 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44862_44901 = state_44839__$1;(statearr_44862_44901[2] = inst_44812);
(statearr_44862_44901[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 13))
{var inst_44792 = (state_44839[15]);var inst_44794 = cljs.core.chunked_seq_QMARK_.call(null,inst_44792);var state_44839__$1 = state_44839;if(inst_44794)
{var statearr_44863_44902 = state_44839__$1;(statearr_44863_44902[1] = 16);
} else
{var statearr_44864_44903 = state_44839__$1;(statearr_44864_44903[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 14))
{var state_44839__$1 = state_44839;var statearr_44865_44904 = state_44839__$1;(statearr_44865_44904[2] = null);
(statearr_44865_44904[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 15))
{var inst_44810 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44866_44905 = state_44839__$1;(statearr_44866_44905[2] = inst_44810);
(statearr_44866_44905[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 16))
{var inst_44792 = (state_44839[15]);var inst_44796 = cljs.core.chunk_first.call(null,inst_44792);var inst_44797 = cljs.core.chunk_rest.call(null,inst_44792);var inst_44798 = cljs.core.count.call(null,inst_44796);var inst_44778 = inst_44797;var inst_44779 = inst_44796;var inst_44780 = inst_44798;var inst_44781 = 0;var state_44839__$1 = (function (){var statearr_44867 = state_44839;(statearr_44867[8] = inst_44779);
(statearr_44867[9] = inst_44780);
(statearr_44867[10] = inst_44781);
(statearr_44867[11] = inst_44778);
return statearr_44867;
})();var statearr_44868_44906 = state_44839__$1;(statearr_44868_44906[2] = null);
(statearr_44868_44906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 17))
{var inst_44792 = (state_44839[15]);var inst_44801 = cljs.core.first.call(null,inst_44792);var inst_44802 = cljs.core.async.muxch_STAR_.call(null,inst_44801);var inst_44803 = cljs.core.async.close_BANG_.call(null,inst_44802);var inst_44804 = cljs.core.next.call(null,inst_44792);var inst_44778 = inst_44804;var inst_44779 = null;var inst_44780 = 0;var inst_44781 = 0;var state_44839__$1 = (function (){var statearr_44869 = state_44839;(statearr_44869[8] = inst_44779);
(statearr_44869[9] = inst_44780);
(statearr_44869[10] = inst_44781);
(statearr_44869[16] = inst_44803);
(statearr_44869[11] = inst_44778);
return statearr_44869;
})();var statearr_44870_44907 = state_44839__$1;(statearr_44870_44907[2] = null);
(statearr_44870_44907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 18))
{var inst_44807 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44871_44908 = state_44839__$1;(statearr_44871_44908[2] = inst_44807);
(statearr_44871_44908[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 19))
{var state_44839__$1 = state_44839;var statearr_44872_44909 = state_44839__$1;(statearr_44872_44909[2] = null);
(statearr_44872_44909[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 20))
{var state_44839__$1 = state_44839;var statearr_44873_44910 = state_44839__$1;(statearr_44873_44910[2] = null);
(statearr_44873_44910[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 21))
{var inst_44832 = (state_44839[2]);var state_44839__$1 = (function (){var statearr_44874 = state_44839;(statearr_44874[17] = inst_44832);
return statearr_44874;
})();var statearr_44875_44911 = state_44839__$1;(statearr_44875_44911[2] = null);
(statearr_44875_44911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 22))
{var inst_44829 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44876_44912 = state_44839__$1;(statearr_44876_44912[2] = inst_44829);
(statearr_44876_44912[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 23))
{var inst_44816 = (state_44839[13]);var inst_44820 = (state_44839[2]);var inst_44821 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44816);var state_44839__$1 = (function (){var statearr_44877 = state_44839;(statearr_44877[18] = inst_44820);
return statearr_44877;
})();var statearr_44878_44913 = state_44839__$1;(statearr_44878_44913[2] = inst_44821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44839__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44840 === 24))
{var inst_44818 = (state_44839[12]);var inst_44768 = (state_44839[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44839,23,Object,null,22);var inst_44825 = cljs.core.async.muxch_STAR_.call(null,inst_44818);var state_44839__$1 = state_44839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44839__$1,25,inst_44825,inst_44768);
} else
{if((state_val_44840 === 25))
{var inst_44827 = (state_44839[2]);var state_44839__$1 = state_44839;var statearr_44879_44914 = state_44839__$1;(statearr_44879_44914[2] = inst_44827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44839__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_44883 = (new Array(19));(statearr_44883[0] = state_machine__13310__auto__);
(statearr_44883[1] = 1);
return statearr_44883;
});
var state_machine__13310__auto____1 = (function (state_44839){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_44839);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e44884){if((e44884 instanceof Object))
{var ex__13313__auto__ = e44884;var statearr_44885_44915 = state_44839;(statearr_44885_44915[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44916 = state_44839;
state_44839 = G__44916;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_44839){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_44839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_44886 = f__13410__auto__.call(null);(statearr_44886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___44887);
return statearr_44886;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___45053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_45023){var state_val_45024 = (state_45023[1]);if((state_val_45024 === 1))
{var state_45023__$1 = state_45023;var statearr_45025_45054 = state_45023__$1;(statearr_45025_45054[2] = null);
(statearr_45025_45054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 2))
{var inst_44986 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_44987 = 0;var state_45023__$1 = (function (){var statearr_45026 = state_45023;(statearr_45026[7] = inst_44986);
(statearr_45026[8] = inst_44987);
return statearr_45026;
})();var statearr_45027_45055 = state_45023__$1;(statearr_45027_45055[2] = null);
(statearr_45027_45055[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 3))
{var inst_45021 = (state_45023[2]);var state_45023__$1 = state_45023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45023__$1,inst_45021);
} else
{if((state_val_45024 === 4))
{var inst_44987 = (state_45023[8]);var inst_44989 = (inst_44987 < cnt);var state_45023__$1 = state_45023;if(cljs.core.truth_(inst_44989))
{var statearr_45028_45056 = state_45023__$1;(statearr_45028_45056[1] = 6);
} else
{var statearr_45029_45057 = state_45023__$1;(statearr_45029_45057[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 5))
{var inst_45007 = (state_45023[2]);var state_45023__$1 = (function (){var statearr_45030 = state_45023;(statearr_45030[9] = inst_45007);
return statearr_45030;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45023__$1,12,dchan);
} else
{if((state_val_45024 === 6))
{var state_45023__$1 = state_45023;var statearr_45031_45058 = state_45023__$1;(statearr_45031_45058[2] = null);
(statearr_45031_45058[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 7))
{var state_45023__$1 = state_45023;var statearr_45032_45059 = state_45023__$1;(statearr_45032_45059[2] = null);
(statearr_45032_45059[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 8))
{var inst_45005 = (state_45023[2]);var state_45023__$1 = state_45023;var statearr_45033_45060 = state_45023__$1;(statearr_45033_45060[2] = inst_45005);
(statearr_45033_45060[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 9))
{var inst_44987 = (state_45023[8]);var inst_45000 = (state_45023[2]);var inst_45001 = (inst_44987 + 1);var inst_44987__$1 = inst_45001;var state_45023__$1 = (function (){var statearr_45034 = state_45023;(statearr_45034[8] = inst_44987__$1);
(statearr_45034[10] = inst_45000);
return statearr_45034;
})();var statearr_45035_45061 = state_45023__$1;(statearr_45035_45061[2] = null);
(statearr_45035_45061[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 10))
{var inst_44991 = (state_45023[2]);var inst_44992 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_45023__$1 = (function (){var statearr_45036 = state_45023;(statearr_45036[11] = inst_44991);
return statearr_45036;
})();var statearr_45037_45062 = state_45023__$1;(statearr_45037_45062[2] = inst_44992);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45023__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 11))
{var inst_44987 = (state_45023[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45023,10,Object,null,9);var inst_44996 = chs__$1.call(null,inst_44987);var inst_44997 = done.call(null,inst_44987);var inst_44998 = cljs.core.async.take_BANG_.call(null,inst_44996,inst_44997);var state_45023__$1 = state_45023;var statearr_45038_45063 = state_45023__$1;(statearr_45038_45063[2] = inst_44998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45023__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 12))
{var inst_45009 = (state_45023[12]);var inst_45009__$1 = (state_45023[2]);var inst_45010 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45009__$1);var state_45023__$1 = (function (){var statearr_45039 = state_45023;(statearr_45039[12] = inst_45009__$1);
return statearr_45039;
})();if(cljs.core.truth_(inst_45010))
{var statearr_45040_45064 = state_45023__$1;(statearr_45040_45064[1] = 13);
} else
{var statearr_45041_45065 = state_45023__$1;(statearr_45041_45065[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 13))
{var inst_45012 = cljs.core.async.close_BANG_.call(null,out);var state_45023__$1 = state_45023;var statearr_45042_45066 = state_45023__$1;(statearr_45042_45066[2] = inst_45012);
(statearr_45042_45066[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 14))
{var inst_45009 = (state_45023[12]);var inst_45014 = cljs.core.apply.call(null,f,inst_45009);var state_45023__$1 = state_45023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45023__$1,16,out,inst_45014);
} else
{if((state_val_45024 === 15))
{var inst_45019 = (state_45023[2]);var state_45023__$1 = state_45023;var statearr_45043_45067 = state_45023__$1;(statearr_45043_45067[2] = inst_45019);
(statearr_45043_45067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45024 === 16))
{var inst_45016 = (state_45023[2]);var state_45023__$1 = (function (){var statearr_45044 = state_45023;(statearr_45044[13] = inst_45016);
return statearr_45044;
})();var statearr_45045_45068 = state_45023__$1;(statearr_45045_45068[2] = null);
(statearr_45045_45068[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_45049 = (new Array(14));(statearr_45049[0] = state_machine__13310__auto__);
(statearr_45049[1] = 1);
return statearr_45049;
});
var state_machine__13310__auto____1 = (function (state_45023){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_45023);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e45050){if((e45050 instanceof Object))
{var ex__13313__auto__ = e45050;var statearr_45051_45069 = state_45023;(statearr_45051_45069[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45070 = state_45023;
state_45023 = G__45070;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_45023){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_45023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_45052 = f__13410__auto__.call(null);(statearr_45052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___45053);
return statearr_45052;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___45178 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_45154){var state_val_45155 = (state_45154[1]);if((state_val_45155 === 1))
{var inst_45125 = cljs.core.vec.call(null,chs);var inst_45126 = inst_45125;var state_45154__$1 = (function (){var statearr_45156 = state_45154;(statearr_45156[7] = inst_45126);
return statearr_45156;
})();var statearr_45157_45179 = state_45154__$1;(statearr_45157_45179[2] = null);
(statearr_45157_45179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 2))
{var inst_45126 = (state_45154[7]);var inst_45128 = cljs.core.count.call(null,inst_45126);var inst_45129 = (inst_45128 > 0);var state_45154__$1 = state_45154;if(cljs.core.truth_(inst_45129))
{var statearr_45158_45180 = state_45154__$1;(statearr_45158_45180[1] = 4);
} else
{var statearr_45159_45181 = state_45154__$1;(statearr_45159_45181[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 3))
{var inst_45152 = (state_45154[2]);var state_45154__$1 = state_45154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45154__$1,inst_45152);
} else
{if((state_val_45155 === 4))
{var inst_45126 = (state_45154[7]);var state_45154__$1 = state_45154;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_45154__$1,7,inst_45126);
} else
{if((state_val_45155 === 5))
{var inst_45148 = cljs.core.async.close_BANG_.call(null,out);var state_45154__$1 = state_45154;var statearr_45160_45182 = state_45154__$1;(statearr_45160_45182[2] = inst_45148);
(statearr_45160_45182[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 6))
{var inst_45150 = (state_45154[2]);var state_45154__$1 = state_45154;var statearr_45161_45183 = state_45154__$1;(statearr_45161_45183[2] = inst_45150);
(statearr_45161_45183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 7))
{var inst_45133 = (state_45154[8]);var inst_45134 = (state_45154[9]);var inst_45133__$1 = (state_45154[2]);var inst_45134__$1 = cljs.core.nth.call(null,inst_45133__$1,0,null);var inst_45135 = cljs.core.nth.call(null,inst_45133__$1,1,null);var inst_45136 = (inst_45134__$1 == null);var state_45154__$1 = (function (){var statearr_45162 = state_45154;(statearr_45162[8] = inst_45133__$1);
(statearr_45162[10] = inst_45135);
(statearr_45162[9] = inst_45134__$1);
return statearr_45162;
})();if(cljs.core.truth_(inst_45136))
{var statearr_45163_45184 = state_45154__$1;(statearr_45163_45184[1] = 8);
} else
{var statearr_45164_45185 = state_45154__$1;(statearr_45164_45185[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 8))
{var inst_45133 = (state_45154[8]);var inst_45135 = (state_45154[10]);var inst_45134 = (state_45154[9]);var inst_45126 = (state_45154[7]);var inst_45138 = (function (){var c = inst_45135;var v = inst_45134;var vec__45131 = inst_45133;var cs = inst_45126;return ((function (c,v,vec__45131,cs,inst_45133,inst_45135,inst_45134,inst_45126,state_val_45155){
return (function (p1__45071_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__45071_SHARP_);
});
;})(c,v,vec__45131,cs,inst_45133,inst_45135,inst_45134,inst_45126,state_val_45155))
})();var inst_45139 = cljs.core.filterv.call(null,inst_45138,inst_45126);var inst_45126__$1 = inst_45139;var state_45154__$1 = (function (){var statearr_45165 = state_45154;(statearr_45165[7] = inst_45126__$1);
return statearr_45165;
})();var statearr_45166_45186 = state_45154__$1;(statearr_45166_45186[2] = null);
(statearr_45166_45186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 9))
{var inst_45134 = (state_45154[9]);var state_45154__$1 = state_45154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45154__$1,11,out,inst_45134);
} else
{if((state_val_45155 === 10))
{var inst_45146 = (state_45154[2]);var state_45154__$1 = state_45154;var statearr_45168_45187 = state_45154__$1;(statearr_45168_45187[2] = inst_45146);
(statearr_45168_45187[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45155 === 11))
{var inst_45126 = (state_45154[7]);var inst_45143 = (state_45154[2]);var tmp45167 = inst_45126;var inst_45126__$1 = tmp45167;var state_45154__$1 = (function (){var statearr_45169 = state_45154;(statearr_45169[11] = inst_45143);
(statearr_45169[7] = inst_45126__$1);
return statearr_45169;
})();var statearr_45170_45188 = state_45154__$1;(statearr_45170_45188[2] = null);
(statearr_45170_45188[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_45174 = (new Array(12));(statearr_45174[0] = state_machine__13310__auto__);
(statearr_45174[1] = 1);
return statearr_45174;
});
var state_machine__13310__auto____1 = (function (state_45154){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_45154);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e45175){if((e45175 instanceof Object))
{var ex__13313__auto__ = e45175;var statearr_45176_45189 = state_45154;(statearr_45176_45189[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45190 = state_45154;
state_45154 = G__45190;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_45154){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_45154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_45177 = f__13410__auto__.call(null);(statearr_45177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___45178);
return statearr_45177;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___45283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_45260){var state_val_45261 = (state_45260[1]);if((state_val_45261 === 1))
{var inst_45237 = 0;var state_45260__$1 = (function (){var statearr_45262 = state_45260;(statearr_45262[7] = inst_45237);
return statearr_45262;
})();var statearr_45263_45284 = state_45260__$1;(statearr_45263_45284[2] = null);
(statearr_45263_45284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 2))
{var inst_45237 = (state_45260[7]);var inst_45239 = (inst_45237 < n);var state_45260__$1 = state_45260;if(cljs.core.truth_(inst_45239))
{var statearr_45264_45285 = state_45260__$1;(statearr_45264_45285[1] = 4);
} else
{var statearr_45265_45286 = state_45260__$1;(statearr_45265_45286[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 3))
{var inst_45257 = (state_45260[2]);var inst_45258 = cljs.core.async.close_BANG_.call(null,out);var state_45260__$1 = (function (){var statearr_45266 = state_45260;(statearr_45266[8] = inst_45257);
return statearr_45266;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45260__$1,inst_45258);
} else
{if((state_val_45261 === 4))
{var state_45260__$1 = state_45260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45260__$1,7,ch);
} else
{if((state_val_45261 === 5))
{var state_45260__$1 = state_45260;var statearr_45267_45287 = state_45260__$1;(statearr_45267_45287[2] = null);
(statearr_45267_45287[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 6))
{var inst_45255 = (state_45260[2]);var state_45260__$1 = state_45260;var statearr_45268_45288 = state_45260__$1;(statearr_45268_45288[2] = inst_45255);
(statearr_45268_45288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 7))
{var inst_45242 = (state_45260[9]);var inst_45242__$1 = (state_45260[2]);var inst_45243 = (inst_45242__$1 == null);var inst_45244 = cljs.core.not.call(null,inst_45243);var state_45260__$1 = (function (){var statearr_45269 = state_45260;(statearr_45269[9] = inst_45242__$1);
return statearr_45269;
})();if(inst_45244)
{var statearr_45270_45289 = state_45260__$1;(statearr_45270_45289[1] = 8);
} else
{var statearr_45271_45290 = state_45260__$1;(statearr_45271_45290[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 8))
{var inst_45242 = (state_45260[9]);var state_45260__$1 = state_45260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45260__$1,11,out,inst_45242);
} else
{if((state_val_45261 === 9))
{var state_45260__$1 = state_45260;var statearr_45272_45291 = state_45260__$1;(statearr_45272_45291[2] = null);
(statearr_45272_45291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 10))
{var inst_45252 = (state_45260[2]);var state_45260__$1 = state_45260;var statearr_45273_45292 = state_45260__$1;(statearr_45273_45292[2] = inst_45252);
(statearr_45273_45292[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45261 === 11))
{var inst_45237 = (state_45260[7]);var inst_45247 = (state_45260[2]);var inst_45248 = (inst_45237 + 1);var inst_45237__$1 = inst_45248;var state_45260__$1 = (function (){var statearr_45274 = state_45260;(statearr_45274[7] = inst_45237__$1);
(statearr_45274[10] = inst_45247);
return statearr_45274;
})();var statearr_45275_45293 = state_45260__$1;(statearr_45275_45293[2] = null);
(statearr_45275_45293[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_45279 = (new Array(11));(statearr_45279[0] = state_machine__13310__auto__);
(statearr_45279[1] = 1);
return statearr_45279;
});
var state_machine__13310__auto____1 = (function (state_45260){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_45260);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e45280){if((e45280 instanceof Object))
{var ex__13313__auto__ = e45280;var statearr_45281_45294 = state_45260;(statearr_45281_45294[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45295 = state_45260;
state_45260 = G__45295;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_45260){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_45260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_45282 = f__13410__auto__.call(null);(statearr_45282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___45283);
return statearr_45282;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___45392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_45367){var state_val_45368 = (state_45367[1]);if((state_val_45368 === 1))
{var inst_45344 = null;var state_45367__$1 = (function (){var statearr_45369 = state_45367;(statearr_45369[7] = inst_45344);
return statearr_45369;
})();var statearr_45370_45393 = state_45367__$1;(statearr_45370_45393[2] = null);
(statearr_45370_45393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 2))
{var state_45367__$1 = state_45367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45367__$1,4,ch);
} else
{if((state_val_45368 === 3))
{var inst_45364 = (state_45367[2]);var inst_45365 = cljs.core.async.close_BANG_.call(null,out);var state_45367__$1 = (function (){var statearr_45371 = state_45367;(statearr_45371[8] = inst_45364);
return statearr_45371;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45367__$1,inst_45365);
} else
{if((state_val_45368 === 4))
{var inst_45347 = (state_45367[9]);var inst_45347__$1 = (state_45367[2]);var inst_45348 = (inst_45347__$1 == null);var inst_45349 = cljs.core.not.call(null,inst_45348);var state_45367__$1 = (function (){var statearr_45372 = state_45367;(statearr_45372[9] = inst_45347__$1);
return statearr_45372;
})();if(inst_45349)
{var statearr_45373_45394 = state_45367__$1;(statearr_45373_45394[1] = 5);
} else
{var statearr_45374_45395 = state_45367__$1;(statearr_45374_45395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 5))
{var inst_45344 = (state_45367[7]);var inst_45347 = (state_45367[9]);var inst_45351 = cljs.core._EQ_.call(null,inst_45347,inst_45344);var state_45367__$1 = state_45367;if(inst_45351)
{var statearr_45375_45396 = state_45367__$1;(statearr_45375_45396[1] = 8);
} else
{var statearr_45376_45397 = state_45367__$1;(statearr_45376_45397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 6))
{var state_45367__$1 = state_45367;var statearr_45378_45398 = state_45367__$1;(statearr_45378_45398[2] = null);
(statearr_45378_45398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 7))
{var inst_45362 = (state_45367[2]);var state_45367__$1 = state_45367;var statearr_45379_45399 = state_45367__$1;(statearr_45379_45399[2] = inst_45362);
(statearr_45379_45399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 8))
{var inst_45344 = (state_45367[7]);var tmp45377 = inst_45344;var inst_45344__$1 = tmp45377;var state_45367__$1 = (function (){var statearr_45380 = state_45367;(statearr_45380[7] = inst_45344__$1);
return statearr_45380;
})();var statearr_45381_45400 = state_45367__$1;(statearr_45381_45400[2] = null);
(statearr_45381_45400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 9))
{var inst_45347 = (state_45367[9]);var state_45367__$1 = state_45367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45367__$1,11,out,inst_45347);
} else
{if((state_val_45368 === 10))
{var inst_45359 = (state_45367[2]);var state_45367__$1 = state_45367;var statearr_45382_45401 = state_45367__$1;(statearr_45382_45401[2] = inst_45359);
(statearr_45382_45401[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45368 === 11))
{var inst_45347 = (state_45367[9]);var inst_45356 = (state_45367[2]);var inst_45344 = inst_45347;var state_45367__$1 = (function (){var statearr_45383 = state_45367;(statearr_45383[7] = inst_45344);
(statearr_45383[10] = inst_45356);
return statearr_45383;
})();var statearr_45384_45402 = state_45367__$1;(statearr_45384_45402[2] = null);
(statearr_45384_45402[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_45388 = (new Array(11));(statearr_45388[0] = state_machine__13310__auto__);
(statearr_45388[1] = 1);
return statearr_45388;
});
var state_machine__13310__auto____1 = (function (state_45367){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_45367);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e45389){if((e45389 instanceof Object))
{var ex__13313__auto__ = e45389;var statearr_45390_45403 = state_45367;(statearr_45390_45403[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45404 = state_45367;
state_45367 = G__45404;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_45367){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_45367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_45391 = f__13410__auto__.call(null);(statearr_45391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___45392);
return statearr_45391;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___45539 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_45509){var state_val_45510 = (state_45509[1]);if((state_val_45510 === 1))
{var inst_45472 = (new Array(n));var inst_45473 = inst_45472;var inst_45474 = 0;var state_45509__$1 = (function (){var statearr_45511 = state_45509;(statearr_45511[7] = inst_45473);
(statearr_45511[8] = inst_45474);
return statearr_45511;
})();var statearr_45512_45540 = state_45509__$1;(statearr_45512_45540[2] = null);
(statearr_45512_45540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 2))
{var state_45509__$1 = state_45509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45509__$1,4,ch);
} else
{if((state_val_45510 === 3))
{var inst_45507 = (state_45509[2]);var state_45509__$1 = state_45509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45509__$1,inst_45507);
} else
{if((state_val_45510 === 4))
{var inst_45477 = (state_45509[9]);var inst_45477__$1 = (state_45509[2]);var inst_45478 = (inst_45477__$1 == null);var inst_45479 = cljs.core.not.call(null,inst_45478);var state_45509__$1 = (function (){var statearr_45513 = state_45509;(statearr_45513[9] = inst_45477__$1);
return statearr_45513;
})();if(inst_45479)
{var statearr_45514_45541 = state_45509__$1;(statearr_45514_45541[1] = 5);
} else
{var statearr_45515_45542 = state_45509__$1;(statearr_45515_45542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 5))
{var inst_45473 = (state_45509[7]);var inst_45474 = (state_45509[8]);var inst_45482 = (state_45509[10]);var inst_45477 = (state_45509[9]);var inst_45481 = (inst_45473[inst_45474] = inst_45477);var inst_45482__$1 = (inst_45474 + 1);var inst_45483 = (inst_45482__$1 < n);var state_45509__$1 = (function (){var statearr_45516 = state_45509;(statearr_45516[10] = inst_45482__$1);
(statearr_45516[11] = inst_45481);
return statearr_45516;
})();if(cljs.core.truth_(inst_45483))
{var statearr_45517_45543 = state_45509__$1;(statearr_45517_45543[1] = 8);
} else
{var statearr_45518_45544 = state_45509__$1;(statearr_45518_45544[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 6))
{var inst_45474 = (state_45509[8]);var inst_45495 = (inst_45474 > 0);var state_45509__$1 = state_45509;if(cljs.core.truth_(inst_45495))
{var statearr_45520_45545 = state_45509__$1;(statearr_45520_45545[1] = 12);
} else
{var statearr_45521_45546 = state_45509__$1;(statearr_45521_45546[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 7))
{var inst_45505 = (state_45509[2]);var state_45509__$1 = state_45509;var statearr_45522_45547 = state_45509__$1;(statearr_45522_45547[2] = inst_45505);
(statearr_45522_45547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 8))
{var inst_45473 = (state_45509[7]);var inst_45482 = (state_45509[10]);var tmp45519 = inst_45473;var inst_45473__$1 = tmp45519;var inst_45474 = inst_45482;var state_45509__$1 = (function (){var statearr_45523 = state_45509;(statearr_45523[7] = inst_45473__$1);
(statearr_45523[8] = inst_45474);
return statearr_45523;
})();var statearr_45524_45548 = state_45509__$1;(statearr_45524_45548[2] = null);
(statearr_45524_45548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 9))
{var inst_45473 = (state_45509[7]);var inst_45487 = cljs.core.vec.call(null,inst_45473);var state_45509__$1 = state_45509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45509__$1,11,out,inst_45487);
} else
{if((state_val_45510 === 10))
{var inst_45493 = (state_45509[2]);var state_45509__$1 = state_45509;var statearr_45525_45549 = state_45509__$1;(statearr_45525_45549[2] = inst_45493);
(statearr_45525_45549[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 11))
{var inst_45489 = (state_45509[2]);var inst_45490 = (new Array(n));var inst_45473 = inst_45490;var inst_45474 = 0;var state_45509__$1 = (function (){var statearr_45526 = state_45509;(statearr_45526[7] = inst_45473);
(statearr_45526[8] = inst_45474);
(statearr_45526[12] = inst_45489);
return statearr_45526;
})();var statearr_45527_45550 = state_45509__$1;(statearr_45527_45550[2] = null);
(statearr_45527_45550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 12))
{var inst_45473 = (state_45509[7]);var inst_45497 = cljs.core.vec.call(null,inst_45473);var state_45509__$1 = state_45509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45509__$1,15,out,inst_45497);
} else
{if((state_val_45510 === 13))
{var state_45509__$1 = state_45509;var statearr_45528_45551 = state_45509__$1;(statearr_45528_45551[2] = null);
(statearr_45528_45551[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 14))
{var inst_45502 = (state_45509[2]);var inst_45503 = cljs.core.async.close_BANG_.call(null,out);var state_45509__$1 = (function (){var statearr_45529 = state_45509;(statearr_45529[13] = inst_45502);
return statearr_45529;
})();var statearr_45530_45552 = state_45509__$1;(statearr_45530_45552[2] = inst_45503);
(statearr_45530_45552[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45510 === 15))
{var inst_45499 = (state_45509[2]);var state_45509__$1 = state_45509;var statearr_45531_45553 = state_45509__$1;(statearr_45531_45553[2] = inst_45499);
(statearr_45531_45553[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_45535 = (new Array(14));(statearr_45535[0] = state_machine__13310__auto__);
(statearr_45535[1] = 1);
return statearr_45535;
});
var state_machine__13310__auto____1 = (function (state_45509){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_45509);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e45536){if((e45536 instanceof Object))
{var ex__13313__auto__ = e45536;var statearr_45537_45554 = state_45509;(statearr_45537_45554[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45555 = state_45509;
state_45509 = G__45555;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_45509){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_45509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_45538 = f__13410__auto__.call(null);(statearr_45538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___45539);
return statearr_45538;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___45698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_45668){var state_val_45669 = (state_45668[1]);if((state_val_45669 === 1))
{var inst_45627 = (new Array(0));var inst_45628 = inst_45627;var inst_45629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_45668__$1 = (function (){var statearr_45670 = state_45668;(statearr_45670[7] = inst_45629);
(statearr_45670[8] = inst_45628);
return statearr_45670;
})();var statearr_45671_45699 = state_45668__$1;(statearr_45671_45699[2] = null);
(statearr_45671_45699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 2))
{var state_45668__$1 = state_45668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45668__$1,4,ch);
} else
{if((state_val_45669 === 3))
{var inst_45666 = (state_45668[2]);var state_45668__$1 = state_45668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45668__$1,inst_45666);
} else
{if((state_val_45669 === 4))
{var inst_45632 = (state_45668[9]);var inst_45632__$1 = (state_45668[2]);var inst_45633 = (inst_45632__$1 == null);var inst_45634 = cljs.core.not.call(null,inst_45633);var state_45668__$1 = (function (){var statearr_45672 = state_45668;(statearr_45672[9] = inst_45632__$1);
return statearr_45672;
})();if(inst_45634)
{var statearr_45673_45700 = state_45668__$1;(statearr_45673_45700[1] = 5);
} else
{var statearr_45674_45701 = state_45668__$1;(statearr_45674_45701[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 5))
{var inst_45629 = (state_45668[7]);var inst_45636 = (state_45668[10]);var inst_45632 = (state_45668[9]);var inst_45636__$1 = f.call(null,inst_45632);var inst_45637 = cljs.core._EQ_.call(null,inst_45636__$1,inst_45629);var inst_45638 = cljs.core.keyword_identical_QMARK_.call(null,inst_45629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_45639 = (inst_45637) || (inst_45638);var state_45668__$1 = (function (){var statearr_45675 = state_45668;(statearr_45675[10] = inst_45636__$1);
return statearr_45675;
})();if(cljs.core.truth_(inst_45639))
{var statearr_45676_45702 = state_45668__$1;(statearr_45676_45702[1] = 8);
} else
{var statearr_45677_45703 = state_45668__$1;(statearr_45677_45703[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 6))
{var inst_45628 = (state_45668[8]);var inst_45653 = inst_45628.length;var inst_45654 = (inst_45653 > 0);var state_45668__$1 = state_45668;if(cljs.core.truth_(inst_45654))
{var statearr_45679_45704 = state_45668__$1;(statearr_45679_45704[1] = 12);
} else
{var statearr_45680_45705 = state_45668__$1;(statearr_45680_45705[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 7))
{var inst_45664 = (state_45668[2]);var state_45668__$1 = state_45668;var statearr_45681_45706 = state_45668__$1;(statearr_45681_45706[2] = inst_45664);
(statearr_45681_45706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 8))
{var inst_45628 = (state_45668[8]);var inst_45636 = (state_45668[10]);var inst_45632 = (state_45668[9]);var inst_45641 = inst_45628.push(inst_45632);var tmp45678 = inst_45628;var inst_45628__$1 = tmp45678;var inst_45629 = inst_45636;var state_45668__$1 = (function (){var statearr_45682 = state_45668;(statearr_45682[7] = inst_45629);
(statearr_45682[8] = inst_45628__$1);
(statearr_45682[11] = inst_45641);
return statearr_45682;
})();var statearr_45683_45707 = state_45668__$1;(statearr_45683_45707[2] = null);
(statearr_45683_45707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 9))
{var inst_45628 = (state_45668[8]);var inst_45644 = cljs.core.vec.call(null,inst_45628);var state_45668__$1 = state_45668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45668__$1,11,out,inst_45644);
} else
{if((state_val_45669 === 10))
{var inst_45651 = (state_45668[2]);var state_45668__$1 = state_45668;var statearr_45684_45708 = state_45668__$1;(statearr_45684_45708[2] = inst_45651);
(statearr_45684_45708[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 11))
{var inst_45636 = (state_45668[10]);var inst_45632 = (state_45668[9]);var inst_45646 = (state_45668[2]);var inst_45647 = (new Array(0));var inst_45648 = inst_45647.push(inst_45632);var inst_45628 = inst_45647;var inst_45629 = inst_45636;var state_45668__$1 = (function (){var statearr_45685 = state_45668;(statearr_45685[7] = inst_45629);
(statearr_45685[8] = inst_45628);
(statearr_45685[12] = inst_45646);
(statearr_45685[13] = inst_45648);
return statearr_45685;
})();var statearr_45686_45709 = state_45668__$1;(statearr_45686_45709[2] = null);
(statearr_45686_45709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 12))
{var inst_45628 = (state_45668[8]);var inst_45656 = cljs.core.vec.call(null,inst_45628);var state_45668__$1 = state_45668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45668__$1,15,out,inst_45656);
} else
{if((state_val_45669 === 13))
{var state_45668__$1 = state_45668;var statearr_45687_45710 = state_45668__$1;(statearr_45687_45710[2] = null);
(statearr_45687_45710[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 14))
{var inst_45661 = (state_45668[2]);var inst_45662 = cljs.core.async.close_BANG_.call(null,out);var state_45668__$1 = (function (){var statearr_45688 = state_45668;(statearr_45688[14] = inst_45661);
return statearr_45688;
})();var statearr_45689_45711 = state_45668__$1;(statearr_45689_45711[2] = inst_45662);
(statearr_45689_45711[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45669 === 15))
{var inst_45658 = (state_45668[2]);var state_45668__$1 = state_45668;var statearr_45690_45712 = state_45668__$1;(statearr_45690_45712[2] = inst_45658);
(statearr_45690_45712[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_45694 = (new Array(15));(statearr_45694[0] = state_machine__13310__auto__);
(statearr_45694[1] = 1);
return statearr_45694;
});
var state_machine__13310__auto____1 = (function (state_45668){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_45668);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e45695){if((e45695 instanceof Object))
{var ex__13313__auto__ = e45695;var statearr_45696_45713 = state_45668;(statearr_45696_45713[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45714 = state_45668;
state_45668 = G__45714;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_45668){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_45668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_45697 = f__13410__auto__.call(null);(statearr_45697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___45698);
return statearr_45697;
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
