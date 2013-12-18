// Compiled by ClojureScript 0.0-2120
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t42186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42186 = (function (f,fn_handler,meta42187){
this.f = f;
this.fn_handler = fn_handler;
this.meta42187 = meta42187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42186.cljs$lang$type = true;
cljs.core.async.t42186.cljs$lang$ctorStr = "cljs.core.async/t42186";
cljs.core.async.t42186.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42186");
});
cljs.core.async.t42186.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t42186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t42186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42188){var self__ = this;
var _42188__$1 = this;return self__.meta42187;
});
cljs.core.async.t42186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42188,meta42187__$1){var self__ = this;
var _42188__$1 = this;return (new cljs.core.async.t42186(self__.f,self__.fn_handler,meta42187__$1));
});
cljs.core.async.__GT_t42186 = (function __GT_t42186(f__$1,fn_handler__$1,meta42187){return (new cljs.core.async.t42186(f__$1,fn_handler__$1,meta42187));
});
}
return (new cljs.core.async.t42186(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__42190 = buff;if(G__42190)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__42190.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__42190.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42190);
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
{var val_42191 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_42191);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_42191);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8186__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9026__auto___42192 = n;var x_42193 = 0;while(true){
if((x_42193 < n__9026__auto___42192))
{(a[x_42193] = 0);
{
var G__42194 = (x_42193 + 1);
x_42193 = G__42194;
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
var G__42195 = (i + 1);
i = G__42195;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t42199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42199 = (function (flag,alt_flag,meta42200){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta42200 = meta42200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42199.cljs$lang$type = true;
cljs.core.async.t42199.cljs$lang$ctorStr = "cljs.core.async/t42199";
cljs.core.async.t42199.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42199");
});
cljs.core.async.t42199.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t42199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t42199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42201){var self__ = this;
var _42201__$1 = this;return self__.meta42200;
});
cljs.core.async.t42199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42201,meta42200__$1){var self__ = this;
var _42201__$1 = this;return (new cljs.core.async.t42199(self__.flag,self__.alt_flag,meta42200__$1));
});
cljs.core.async.__GT_t42199 = (function __GT_t42199(flag__$1,alt_flag__$1,meta42200){return (new cljs.core.async.t42199(flag__$1,alt_flag__$1,meta42200));
});
}
return (new cljs.core.async.t42199(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t42205 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42205 = (function (cb,flag,alt_handler,meta42206){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta42206 = meta42206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42205.cljs$lang$type = true;
cljs.core.async.t42205.cljs$lang$ctorStr = "cljs.core.async/t42205";
cljs.core.async.t42205.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42205");
});
cljs.core.async.t42205.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t42205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t42205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42207){var self__ = this;
var _42207__$1 = this;return self__.meta42206;
});
cljs.core.async.t42205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42207,meta42206__$1){var self__ = this;
var _42207__$1 = this;return (new cljs.core.async.t42205(self__.cb,self__.flag,self__.alt_handler,meta42206__$1));
});
cljs.core.async.__GT_t42205 = (function __GT_t42205(cb__$1,flag__$1,alt_handler__$1,meta42206){return (new cljs.core.async.t42205(cb__$1,flag__$1,alt_handler__$1,meta42206));
});
}
return (new cljs.core.async.t42205(cb,flag,alt_handler,null));
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
return (function (p1__42208_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42208_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8198__auto__ = wport;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__42209 = (i + 1);
i = G__42209;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8198__auto__ = ret;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8186__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8186__auto__;
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
var alts_BANG___delegate = function (ports,p__42210){var map__42212 = p__42210;var map__42212__$1 = ((cljs.core.seq_QMARK_.call(null,map__42212))?cljs.core.apply.call(null,cljs.core.hash_map,map__42212):map__42212);var opts = map__42212__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__42210 = null;if (arguments.length > 1) {
  p__42210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__42210);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__42213){
var ports = cljs.core.first(arglist__42213);
var p__42210 = cljs.core.rest(arglist__42213);
return alts_BANG___delegate(ports,p__42210);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t42221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42221 = (function (ch,f,map_LT_,meta42222){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42222 = meta42222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42221.cljs$lang$type = true;
cljs.core.async.t42221.cljs$lang$ctorStr = "cljs.core.async/t42221";
cljs.core.async.t42221.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42221");
});
cljs.core.async.t42221.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t42221.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t42224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42224 = (function (fn1,_,meta42222,ch,f,map_LT_,meta42225){
this.fn1 = fn1;
this._ = _;
this.meta42222 = meta42222;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42225 = meta42225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42224.cljs$lang$type = true;
cljs.core.async.t42224.cljs$lang$ctorStr = "cljs.core.async/t42224";
cljs.core.async.t42224.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42224");
});
cljs.core.async.t42224.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t42224.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t42224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__42214_SHARP_){return f1.call(null,(((p1__42214_SHARP_ == null))?null:self__.f.call(null,p1__42214_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t42224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42226){var self__ = this;
var _42226__$1 = this;return self__.meta42225;
});
cljs.core.async.t42224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42226,meta42225__$1){var self__ = this;
var _42226__$1 = this;return (new cljs.core.async.t42224(self__.fn1,self__._,self__.meta42222,self__.ch,self__.f,self__.map_LT_,meta42225__$1));
});
cljs.core.async.__GT_t42224 = (function __GT_t42224(fn1__$1,___$2,meta42222__$1,ch__$2,f__$2,map_LT___$2,meta42225){return (new cljs.core.async.t42224(fn1__$1,___$2,meta42222__$1,ch__$2,f__$2,map_LT___$2,meta42225));
});
}
return (new cljs.core.async.t42224(fn1,___$1,self__.meta42222,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8186__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t42221.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42223){var self__ = this;
var _42223__$1 = this;return self__.meta42222;
});
cljs.core.async.t42221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42223,meta42222__$1){var self__ = this;
var _42223__$1 = this;return (new cljs.core.async.t42221(self__.ch,self__.f,self__.map_LT_,meta42222__$1));
});
cljs.core.async.__GT_t42221 = (function __GT_t42221(ch__$1,f__$1,map_LT___$1,meta42222){return (new cljs.core.async.t42221(ch__$1,f__$1,map_LT___$1,meta42222));
});
}
return (new cljs.core.async.t42221(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t42230 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42230 = (function (ch,f,map_GT_,meta42231){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42231 = meta42231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42230.cljs$lang$type = true;
cljs.core.async.t42230.cljs$lang$ctorStr = "cljs.core.async/t42230";
cljs.core.async.t42230.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42230");
});
cljs.core.async.t42230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t42230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t42230.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42232){var self__ = this;
var _42232__$1 = this;return self__.meta42231;
});
cljs.core.async.t42230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42232,meta42231__$1){var self__ = this;
var _42232__$1 = this;return (new cljs.core.async.t42230(self__.ch,self__.f,self__.map_GT_,meta42231__$1));
});
cljs.core.async.__GT_t42230 = (function __GT_t42230(ch__$1,f__$1,map_GT___$1,meta42231){return (new cljs.core.async.t42230(ch__$1,f__$1,map_GT___$1,meta42231));
});
}
return (new cljs.core.async.t42230(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t42236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42236 = (function (ch,p,filter_GT_,meta42237){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42237 = meta42237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42236.cljs$lang$type = true;
cljs.core.async.t42236.cljs$lang$ctorStr = "cljs.core.async/t42236";
cljs.core.async.t42236.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t42236");
});
cljs.core.async.t42236.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t42236.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t42236.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42238){var self__ = this;
var _42238__$1 = this;return self__.meta42237;
});
cljs.core.async.t42236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42238,meta42237__$1){var self__ = this;
var _42238__$1 = this;return (new cljs.core.async.t42236(self__.ch,self__.p,self__.filter_GT_,meta42237__$1));
});
cljs.core.async.__GT_t42236 = (function __GT_t42236(ch__$1,p__$1,filter_GT___$1,meta42237){return (new cljs.core.async.t42236(ch__$1,p__$1,filter_GT___$1,meta42237));
});
}
return (new cljs.core.async.t42236(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___42321 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_42300){var state_val_42301 = (state_42300[1]);if((state_val_42301 === 1))
{var state_42300__$1 = state_42300;var statearr_42302_42322 = state_42300__$1;(statearr_42302_42322[2] = null);
(statearr_42302_42322[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 2))
{var state_42300__$1 = state_42300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42300__$1,4,ch);
} else
{if((state_val_42301 === 3))
{var inst_42298 = (state_42300[2]);var state_42300__$1 = state_42300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42300__$1,inst_42298);
} else
{if((state_val_42301 === 4))
{var inst_42282 = (state_42300[7]);var inst_42282__$1 = (state_42300[2]);var inst_42283 = (inst_42282__$1 == null);var state_42300__$1 = (function (){var statearr_42303 = state_42300;(statearr_42303[7] = inst_42282__$1);
return statearr_42303;
})();if(cljs.core.truth_(inst_42283))
{var statearr_42304_42323 = state_42300__$1;(statearr_42304_42323[1] = 5);
} else
{var statearr_42305_42324 = state_42300__$1;(statearr_42305_42324[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 5))
{var inst_42285 = cljs.core.async.close_BANG_.call(null,out);var state_42300__$1 = state_42300;var statearr_42306_42325 = state_42300__$1;(statearr_42306_42325[2] = inst_42285);
(statearr_42306_42325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 6))
{var inst_42282 = (state_42300[7]);var inst_42287 = p.call(null,inst_42282);var state_42300__$1 = state_42300;if(cljs.core.truth_(inst_42287))
{var statearr_42307_42326 = state_42300__$1;(statearr_42307_42326[1] = 8);
} else
{var statearr_42308_42327 = state_42300__$1;(statearr_42308_42327[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 7))
{var inst_42296 = (state_42300[2]);var state_42300__$1 = state_42300;var statearr_42309_42328 = state_42300__$1;(statearr_42309_42328[2] = inst_42296);
(statearr_42309_42328[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 8))
{var inst_42282 = (state_42300[7]);var state_42300__$1 = state_42300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42300__$1,11,out,inst_42282);
} else
{if((state_val_42301 === 9))
{var state_42300__$1 = state_42300;var statearr_42310_42329 = state_42300__$1;(statearr_42310_42329[2] = null);
(statearr_42310_42329[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 10))
{var inst_42293 = (state_42300[2]);var state_42300__$1 = (function (){var statearr_42311 = state_42300;(statearr_42311[8] = inst_42293);
return statearr_42311;
})();var statearr_42312_42330 = state_42300__$1;(statearr_42312_42330[2] = null);
(statearr_42312_42330[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42301 === 11))
{var inst_42290 = (state_42300[2]);var state_42300__$1 = state_42300;var statearr_42313_42331 = state_42300__$1;(statearr_42313_42331[2] = inst_42290);
(statearr_42313_42331[1] = 10);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_42317 = [null,null,null,null,null,null,null,null,null];(statearr_42317[0] = state_machine__10730__auto__);
(statearr_42317[1] = 1);
return statearr_42317;
});
var state_machine__10730__auto____1 = (function (state_42300){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_42300);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e42318){if((e42318 instanceof Object))
{var ex__10733__auto__ = e42318;var statearr_42319_42332 = state_42300;(statearr_42319_42332[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42333 = state_42300;
state_42300 = G__42333;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_42300){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_42300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_42320 = f__10794__auto__.call(null);(statearr_42320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___42321);
return statearr_42320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_42485){var state_val_42486 = (state_42485[1]);if((state_val_42486 === 1))
{var state_42485__$1 = state_42485;var statearr_42487_42524 = state_42485__$1;(statearr_42487_42524[2] = null);
(statearr_42487_42524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 2))
{var state_42485__$1 = state_42485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42485__$1,4,in$);
} else
{if((state_val_42486 === 3))
{var inst_42483 = (state_42485[2]);var state_42485__$1 = state_42485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42485__$1,inst_42483);
} else
{if((state_val_42486 === 4))
{var inst_42431 = (state_42485[7]);var inst_42431__$1 = (state_42485[2]);var inst_42432 = (inst_42431__$1 == null);var state_42485__$1 = (function (){var statearr_42488 = state_42485;(statearr_42488[7] = inst_42431__$1);
return statearr_42488;
})();if(cljs.core.truth_(inst_42432))
{var statearr_42489_42525 = state_42485__$1;(statearr_42489_42525[1] = 5);
} else
{var statearr_42490_42526 = state_42485__$1;(statearr_42490_42526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 5))
{var inst_42434 = cljs.core.async.close_BANG_.call(null,out);var state_42485__$1 = state_42485;var statearr_42491_42527 = state_42485__$1;(statearr_42491_42527[2] = inst_42434);
(statearr_42491_42527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 6))
{var inst_42431 = (state_42485[7]);var inst_42436 = f.call(null,inst_42431);var inst_42441 = cljs.core.seq.call(null,inst_42436);var inst_42442 = inst_42441;var inst_42443 = null;var inst_42444 = 0;var inst_42445 = 0;var state_42485__$1 = (function (){var statearr_42492 = state_42485;(statearr_42492[8] = inst_42443);
(statearr_42492[9] = inst_42444);
(statearr_42492[10] = inst_42445);
(statearr_42492[11] = inst_42442);
return statearr_42492;
})();var statearr_42493_42528 = state_42485__$1;(statearr_42493_42528[2] = null);
(statearr_42493_42528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 7))
{var inst_42481 = (state_42485[2]);var state_42485__$1 = state_42485;var statearr_42494_42529 = state_42485__$1;(statearr_42494_42529[2] = inst_42481);
(statearr_42494_42529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 8))
{var inst_42444 = (state_42485[9]);var inst_42445 = (state_42485[10]);var inst_42447 = (inst_42445 < inst_42444);var inst_42448 = inst_42447;var state_42485__$1 = state_42485;if(cljs.core.truth_(inst_42448))
{var statearr_42495_42530 = state_42485__$1;(statearr_42495_42530[1] = 10);
} else
{var statearr_42496_42531 = state_42485__$1;(statearr_42496_42531[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 9))
{var inst_42478 = (state_42485[2]);var state_42485__$1 = (function (){var statearr_42497 = state_42485;(statearr_42497[12] = inst_42478);
return statearr_42497;
})();var statearr_42498_42532 = state_42485__$1;(statearr_42498_42532[2] = null);
(statearr_42498_42532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 10))
{var inst_42443 = (state_42485[8]);var inst_42445 = (state_42485[10]);var inst_42450 = cljs.core._nth.call(null,inst_42443,inst_42445);var state_42485__$1 = state_42485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42485__$1,13,out,inst_42450);
} else
{if((state_val_42486 === 11))
{var inst_42456 = (state_42485[13]);var inst_42442 = (state_42485[11]);var inst_42456__$1 = cljs.core.seq.call(null,inst_42442);var state_42485__$1 = (function (){var statearr_42502 = state_42485;(statearr_42502[13] = inst_42456__$1);
return statearr_42502;
})();if(inst_42456__$1)
{var statearr_42503_42533 = state_42485__$1;(statearr_42503_42533[1] = 14);
} else
{var statearr_42504_42534 = state_42485__$1;(statearr_42504_42534[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 12))
{var inst_42476 = (state_42485[2]);var state_42485__$1 = state_42485;var statearr_42505_42535 = state_42485__$1;(statearr_42505_42535[2] = inst_42476);
(statearr_42505_42535[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 13))
{var inst_42443 = (state_42485[8]);var inst_42444 = (state_42485[9]);var inst_42445 = (state_42485[10]);var inst_42442 = (state_42485[11]);var inst_42452 = (state_42485[2]);var inst_42453 = (inst_42445 + 1);var tmp42499 = inst_42443;var tmp42500 = inst_42444;var tmp42501 = inst_42442;var inst_42442__$1 = tmp42501;var inst_42443__$1 = tmp42499;var inst_42444__$1 = tmp42500;var inst_42445__$1 = inst_42453;var state_42485__$1 = (function (){var statearr_42506 = state_42485;(statearr_42506[8] = inst_42443__$1);
(statearr_42506[14] = inst_42452);
(statearr_42506[9] = inst_42444__$1);
(statearr_42506[10] = inst_42445__$1);
(statearr_42506[11] = inst_42442__$1);
return statearr_42506;
})();var statearr_42507_42536 = state_42485__$1;(statearr_42507_42536[2] = null);
(statearr_42507_42536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 14))
{var inst_42456 = (state_42485[13]);var inst_42458 = cljs.core.chunked_seq_QMARK_.call(null,inst_42456);var state_42485__$1 = state_42485;if(inst_42458)
{var statearr_42508_42537 = state_42485__$1;(statearr_42508_42537[1] = 17);
} else
{var statearr_42509_42538 = state_42485__$1;(statearr_42509_42538[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 15))
{var state_42485__$1 = state_42485;var statearr_42510_42539 = state_42485__$1;(statearr_42510_42539[2] = null);
(statearr_42510_42539[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 16))
{var inst_42474 = (state_42485[2]);var state_42485__$1 = state_42485;var statearr_42511_42540 = state_42485__$1;(statearr_42511_42540[2] = inst_42474);
(statearr_42511_42540[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 17))
{var inst_42456 = (state_42485[13]);var inst_42460 = cljs.core.chunk_first.call(null,inst_42456);var inst_42461 = cljs.core.chunk_rest.call(null,inst_42456);var inst_42462 = cljs.core.count.call(null,inst_42460);var inst_42442 = inst_42461;var inst_42443 = inst_42460;var inst_42444 = inst_42462;var inst_42445 = 0;var state_42485__$1 = (function (){var statearr_42512 = state_42485;(statearr_42512[8] = inst_42443);
(statearr_42512[9] = inst_42444);
(statearr_42512[10] = inst_42445);
(statearr_42512[11] = inst_42442);
return statearr_42512;
})();var statearr_42513_42541 = state_42485__$1;(statearr_42513_42541[2] = null);
(statearr_42513_42541[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 18))
{var inst_42456 = (state_42485[13]);var inst_42465 = cljs.core.first.call(null,inst_42456);var state_42485__$1 = state_42485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42485__$1,20,out,inst_42465);
} else
{if((state_val_42486 === 19))
{var inst_42471 = (state_42485[2]);var state_42485__$1 = state_42485;var statearr_42514_42542 = state_42485__$1;(statearr_42514_42542[2] = inst_42471);
(statearr_42514_42542[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42486 === 20))
{var inst_42456 = (state_42485[13]);var inst_42467 = (state_42485[2]);var inst_42468 = cljs.core.next.call(null,inst_42456);var inst_42442 = inst_42468;var inst_42443 = null;var inst_42444 = 0;var inst_42445 = 0;var state_42485__$1 = (function (){var statearr_42515 = state_42485;(statearr_42515[15] = inst_42467);
(statearr_42515[8] = inst_42443);
(statearr_42515[9] = inst_42444);
(statearr_42515[10] = inst_42445);
(statearr_42515[11] = inst_42442);
return statearr_42515;
})();var statearr_42516_42543 = state_42485__$1;(statearr_42516_42543[2] = null);
(statearr_42516_42543[1] = 8);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_42520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42520[0] = state_machine__10730__auto__);
(statearr_42520[1] = 1);
return statearr_42520;
});
var state_machine__10730__auto____1 = (function (state_42485){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_42485);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e42521){if((e42521 instanceof Object))
{var ex__10733__auto__ = e42521;var statearr_42522_42544 = state_42485;(statearr_42522_42544[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42485);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42545 = state_42485;
state_42485 = G__42545;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_42485){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_42485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_42523 = f__10794__auto__.call(null);(statearr_42523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_42523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10793__auto___42626 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_42605){var state_val_42606 = (state_42605[1]);if((state_val_42606 === 1))
{var state_42605__$1 = state_42605;var statearr_42607_42627 = state_42605__$1;(statearr_42607_42627[2] = null);
(statearr_42607_42627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 2))
{var state_42605__$1 = state_42605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42605__$1,4,from);
} else
{if((state_val_42606 === 3))
{var inst_42603 = (state_42605[2]);var state_42605__$1 = state_42605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42605__$1,inst_42603);
} else
{if((state_val_42606 === 4))
{var inst_42588 = (state_42605[7]);var inst_42588__$1 = (state_42605[2]);var inst_42589 = (inst_42588__$1 == null);var state_42605__$1 = (function (){var statearr_42608 = state_42605;(statearr_42608[7] = inst_42588__$1);
return statearr_42608;
})();if(cljs.core.truth_(inst_42589))
{var statearr_42609_42628 = state_42605__$1;(statearr_42609_42628[1] = 5);
} else
{var statearr_42610_42629 = state_42605__$1;(statearr_42610_42629[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 5))
{var state_42605__$1 = state_42605;if(cljs.core.truth_(close_QMARK_))
{var statearr_42611_42630 = state_42605__$1;(statearr_42611_42630[1] = 8);
} else
{var statearr_42612_42631 = state_42605__$1;(statearr_42612_42631[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 6))
{var inst_42588 = (state_42605[7]);var state_42605__$1 = state_42605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42605__$1,11,to,inst_42588);
} else
{if((state_val_42606 === 7))
{var inst_42601 = (state_42605[2]);var state_42605__$1 = state_42605;var statearr_42613_42632 = state_42605__$1;(statearr_42613_42632[2] = inst_42601);
(statearr_42613_42632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 8))
{var inst_42592 = cljs.core.async.close_BANG_.call(null,to);var state_42605__$1 = state_42605;var statearr_42614_42633 = state_42605__$1;(statearr_42614_42633[2] = inst_42592);
(statearr_42614_42633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 9))
{var state_42605__$1 = state_42605;var statearr_42615_42634 = state_42605__$1;(statearr_42615_42634[2] = null);
(statearr_42615_42634[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 10))
{var inst_42595 = (state_42605[2]);var state_42605__$1 = state_42605;var statearr_42616_42635 = state_42605__$1;(statearr_42616_42635[2] = inst_42595);
(statearr_42616_42635[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42606 === 11))
{var inst_42598 = (state_42605[2]);var state_42605__$1 = (function (){var statearr_42617 = state_42605;(statearr_42617[8] = inst_42598);
return statearr_42617;
})();var statearr_42618_42636 = state_42605__$1;(statearr_42618_42636[2] = null);
(statearr_42618_42636[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_42622 = [null,null,null,null,null,null,null,null,null];(statearr_42622[0] = state_machine__10730__auto__);
(statearr_42622[1] = 1);
return statearr_42622;
});
var state_machine__10730__auto____1 = (function (state_42605){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_42605);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e42623){if((e42623 instanceof Object))
{var ex__10733__auto__ = e42623;var statearr_42624_42637 = state_42605;(statearr_42624_42637[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42638 = state_42605;
state_42605 = G__42638;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_42605){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_42605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_42625 = f__10794__auto__.call(null);(statearr_42625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___42626);
return statearr_42625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10793__auto___42725 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_42703){var state_val_42704 = (state_42703[1]);if((state_val_42704 === 1))
{var state_42703__$1 = state_42703;var statearr_42705_42726 = state_42703__$1;(statearr_42705_42726[2] = null);
(statearr_42705_42726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 2))
{var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42703__$1,4,ch);
} else
{if((state_val_42704 === 3))
{var inst_42701 = (state_42703[2]);var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42703__$1,inst_42701);
} else
{if((state_val_42704 === 4))
{var inst_42684 = (state_42703[7]);var inst_42684__$1 = (state_42703[2]);var inst_42685 = (inst_42684__$1 == null);var state_42703__$1 = (function (){var statearr_42706 = state_42703;(statearr_42706[7] = inst_42684__$1);
return statearr_42706;
})();if(cljs.core.truth_(inst_42685))
{var statearr_42707_42727 = state_42703__$1;(statearr_42707_42727[1] = 5);
} else
{var statearr_42708_42728 = state_42703__$1;(statearr_42708_42728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 5))
{var inst_42687 = cljs.core.async.close_BANG_.call(null,tc);var inst_42688 = cljs.core.async.close_BANG_.call(null,fc);var state_42703__$1 = (function (){var statearr_42709 = state_42703;(statearr_42709[8] = inst_42687);
return statearr_42709;
})();var statearr_42710_42729 = state_42703__$1;(statearr_42710_42729[2] = inst_42688);
(statearr_42710_42729[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 6))
{var inst_42684 = (state_42703[7]);var inst_42690 = p.call(null,inst_42684);var state_42703__$1 = state_42703;if(cljs.core.truth_(inst_42690))
{var statearr_42711_42730 = state_42703__$1;(statearr_42711_42730[1] = 9);
} else
{var statearr_42712_42731 = state_42703__$1;(statearr_42712_42731[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 7))
{var inst_42699 = (state_42703[2]);var state_42703__$1 = state_42703;var statearr_42713_42732 = state_42703__$1;(statearr_42713_42732[2] = inst_42699);
(statearr_42713_42732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 8))
{var inst_42696 = (state_42703[2]);var state_42703__$1 = (function (){var statearr_42714 = state_42703;(statearr_42714[9] = inst_42696);
return statearr_42714;
})();var statearr_42715_42733 = state_42703__$1;(statearr_42715_42733[2] = null);
(statearr_42715_42733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 9))
{var state_42703__$1 = state_42703;var statearr_42716_42734 = state_42703__$1;(statearr_42716_42734[2] = tc);
(statearr_42716_42734[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 10))
{var state_42703__$1 = state_42703;var statearr_42717_42735 = state_42703__$1;(statearr_42717_42735[2] = fc);
(statearr_42717_42735[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42704 === 11))
{var inst_42684 = (state_42703[7]);var inst_42694 = (state_42703[2]);var state_42703__$1 = state_42703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42703__$1,8,inst_42694,inst_42684);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_42721 = [null,null,null,null,null,null,null,null,null,null];(statearr_42721[0] = state_machine__10730__auto__);
(statearr_42721[1] = 1);
return statearr_42721;
});
var state_machine__10730__auto____1 = (function (state_42703){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_42703);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e42722){if((e42722 instanceof Object))
{var ex__10733__auto__ = e42722;var statearr_42723_42736 = state_42703;(statearr_42723_42736[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42703);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42737 = state_42703;
state_42703 = G__42737;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_42703){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_42703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_42724 = f__10794__auto__.call(null);(statearr_42724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___42725);
return statearr_42724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_42784){var state_val_42785 = (state_42784[1]);if((state_val_42785 === 7))
{var inst_42780 = (state_42784[2]);var state_42784__$1 = state_42784;var statearr_42786_42802 = state_42784__$1;(statearr_42786_42802[2] = inst_42780);
(statearr_42786_42802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42785 === 6))
{var inst_42773 = (state_42784[7]);var inst_42770 = (state_42784[8]);var inst_42777 = f.call(null,inst_42770,inst_42773);var inst_42770__$1 = inst_42777;var state_42784__$1 = (function (){var statearr_42787 = state_42784;(statearr_42787[8] = inst_42770__$1);
return statearr_42787;
})();var statearr_42788_42803 = state_42784__$1;(statearr_42788_42803[2] = null);
(statearr_42788_42803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42785 === 5))
{var inst_42770 = (state_42784[8]);var state_42784__$1 = state_42784;var statearr_42789_42804 = state_42784__$1;(statearr_42789_42804[2] = inst_42770);
(statearr_42789_42804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42785 === 4))
{var inst_42773 = (state_42784[7]);var inst_42773__$1 = (state_42784[2]);var inst_42774 = (inst_42773__$1 == null);var state_42784__$1 = (function (){var statearr_42790 = state_42784;(statearr_42790[7] = inst_42773__$1);
return statearr_42790;
})();if(cljs.core.truth_(inst_42774))
{var statearr_42791_42805 = state_42784__$1;(statearr_42791_42805[1] = 5);
} else
{var statearr_42792_42806 = state_42784__$1;(statearr_42792_42806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42785 === 3))
{var inst_42782 = (state_42784[2]);var state_42784__$1 = state_42784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42784__$1,inst_42782);
} else
{if((state_val_42785 === 2))
{var state_42784__$1 = state_42784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42784__$1,4,ch);
} else
{if((state_val_42785 === 1))
{var inst_42770 = init;var state_42784__$1 = (function (){var statearr_42793 = state_42784;(statearr_42793[8] = inst_42770);
return statearr_42793;
})();var statearr_42794_42807 = state_42784__$1;(statearr_42794_42807[2] = null);
(statearr_42794_42807[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_42798 = [null,null,null,null,null,null,null,null,null];(statearr_42798[0] = state_machine__10730__auto__);
(statearr_42798[1] = 1);
return statearr_42798;
});
var state_machine__10730__auto____1 = (function (state_42784){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_42784);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e42799){if((e42799 instanceof Object))
{var ex__10733__auto__ = e42799;var statearr_42800_42808 = state_42784;(statearr_42800_42808[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42784);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42809 = state_42784;
state_42784 = G__42809;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_42784){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_42784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_42801 = f__10794__auto__.call(null);(statearr_42801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_42801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_42871){var state_val_42872 = (state_42871[1]);if((state_val_42872 === 1))
{var inst_42851 = cljs.core.seq.call(null,coll);var inst_42852 = inst_42851;var state_42871__$1 = (function (){var statearr_42873 = state_42871;(statearr_42873[7] = inst_42852);
return statearr_42873;
})();var statearr_42874_42892 = state_42871__$1;(statearr_42874_42892[2] = null);
(statearr_42874_42892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 2))
{var inst_42852 = (state_42871[7]);var state_42871__$1 = state_42871;if(cljs.core.truth_(inst_42852))
{var statearr_42875_42893 = state_42871__$1;(statearr_42875_42893[1] = 4);
} else
{var statearr_42876_42894 = state_42871__$1;(statearr_42876_42894[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 3))
{var inst_42869 = (state_42871[2]);var state_42871__$1 = state_42871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42871__$1,inst_42869);
} else
{if((state_val_42872 === 4))
{var inst_42852 = (state_42871[7]);var inst_42855 = cljs.core.first.call(null,inst_42852);var state_42871__$1 = state_42871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42871__$1,7,ch,inst_42855);
} else
{if((state_val_42872 === 5))
{var state_42871__$1 = state_42871;if(cljs.core.truth_(close_QMARK_))
{var statearr_42877_42895 = state_42871__$1;(statearr_42877_42895[1] = 8);
} else
{var statearr_42878_42896 = state_42871__$1;(statearr_42878_42896[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 6))
{var inst_42867 = (state_42871[2]);var state_42871__$1 = state_42871;var statearr_42879_42897 = state_42871__$1;(statearr_42879_42897[2] = inst_42867);
(statearr_42879_42897[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 7))
{var inst_42852 = (state_42871[7]);var inst_42857 = (state_42871[2]);var inst_42858 = cljs.core.next.call(null,inst_42852);var inst_42852__$1 = inst_42858;var state_42871__$1 = (function (){var statearr_42880 = state_42871;(statearr_42880[7] = inst_42852__$1);
(statearr_42880[8] = inst_42857);
return statearr_42880;
})();var statearr_42881_42898 = state_42871__$1;(statearr_42881_42898[2] = null);
(statearr_42881_42898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 8))
{var inst_42862 = cljs.core.async.close_BANG_.call(null,ch);var state_42871__$1 = state_42871;var statearr_42882_42899 = state_42871__$1;(statearr_42882_42899[2] = inst_42862);
(statearr_42882_42899[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 9))
{var state_42871__$1 = state_42871;var statearr_42883_42900 = state_42871__$1;(statearr_42883_42900[2] = null);
(statearr_42883_42900[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42872 === 10))
{var inst_42865 = (state_42871[2]);var state_42871__$1 = state_42871;var statearr_42884_42901 = state_42871__$1;(statearr_42884_42901[2] = inst_42865);
(statearr_42884_42901[1] = 6);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_42888 = [null,null,null,null,null,null,null,null,null];(statearr_42888[0] = state_machine__10730__auto__);
(statearr_42888[1] = 1);
return statearr_42888;
});
var state_machine__10730__auto____1 = (function (state_42871){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_42871);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e42889){if((e42889 instanceof Object))
{var ex__10733__auto__ = e42889;var statearr_42890_42902 = state_42871;(statearr_42890_42902[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42903 = state_42871;
state_42871 = G__42903;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_42871){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_42871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_42891 = f__10794__auto__.call(null);(statearr_42891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_42891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
cljs.core.async.Mux = (function (){var obj42905 = {};return obj42905;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj42907 = {};return obj42907;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t43131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43131 = (function (cs,ch,mult,meta43132){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta43132 = meta43132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43131.cljs$lang$type = true;
cljs.core.async.t43131.cljs$lang$ctorStr = "cljs.core.async/t43131";
cljs.core.async.t43131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t43131");
});})(cs))
;
cljs.core.async.t43131.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t43131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t43131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t43131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t43131.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t43131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43133){var self__ = this;
var _43133__$1 = this;return self__.meta43132;
});})(cs))
;
cljs.core.async.t43131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43133,meta43132__$1){var self__ = this;
var _43133__$1 = this;return (new cljs.core.async.t43131(self__.cs,self__.ch,self__.mult,meta43132__$1));
});})(cs))
;
cljs.core.async.__GT_t43131 = ((function (cs){
return (function __GT_t43131(cs__$1,ch__$1,mult__$1,meta43132){return (new cljs.core.async.t43131(cs__$1,ch__$1,mult__$1,meta43132));
});})(cs))
;
}
return (new cljs.core.async.t43131(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10793__auto___43354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_43268){var state_val_43269 = (state_43268[1]);if((state_val_43269 === 32))
{var inst_43136 = (state_43268[7]);var inst_43212 = (state_43268[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43268,31,Object,null,30);var inst_43219 = cljs.core.async.put_BANG_.call(null,inst_43212,inst_43136,done);var state_43268__$1 = state_43268;var statearr_43270_43355 = state_43268__$1;(statearr_43270_43355[2] = inst_43219);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43268__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 1))
{var state_43268__$1 = state_43268;var statearr_43271_43356 = state_43268__$1;(statearr_43271_43356[2] = null);
(statearr_43271_43356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 33))
{var inst_43225 = (state_43268[9]);var inst_43227 = cljs.core.chunked_seq_QMARK_.call(null,inst_43225);var state_43268__$1 = state_43268;if(inst_43227)
{var statearr_43272_43357 = state_43268__$1;(statearr_43272_43357[1] = 36);
} else
{var statearr_43273_43358 = state_43268__$1;(statearr_43273_43358[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 2))
{var state_43268__$1 = state_43268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43268__$1,4,ch);
} else
{if((state_val_43269 === 34))
{var state_43268__$1 = state_43268;var statearr_43274_43359 = state_43268__$1;(statearr_43274_43359[2] = null);
(statearr_43274_43359[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 3))
{var inst_43266 = (state_43268[2]);var state_43268__$1 = state_43268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43268__$1,inst_43266);
} else
{if((state_val_43269 === 35))
{var inst_43250 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43275_43360 = state_43268__$1;(statearr_43275_43360[2] = inst_43250);
(statearr_43275_43360[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 4))
{var inst_43136 = (state_43268[7]);var inst_43136__$1 = (state_43268[2]);var inst_43137 = (inst_43136__$1 == null);var state_43268__$1 = (function (){var statearr_43276 = state_43268;(statearr_43276[7] = inst_43136__$1);
return statearr_43276;
})();if(cljs.core.truth_(inst_43137))
{var statearr_43277_43361 = state_43268__$1;(statearr_43277_43361[1] = 5);
} else
{var statearr_43278_43362 = state_43268__$1;(statearr_43278_43362[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 36))
{var inst_43225 = (state_43268[9]);var inst_43229 = cljs.core.chunk_first.call(null,inst_43225);var inst_43230 = cljs.core.chunk_rest.call(null,inst_43225);var inst_43231 = cljs.core.count.call(null,inst_43229);var inst_43204 = inst_43230;var inst_43205 = inst_43229;var inst_43206 = inst_43231;var inst_43207 = 0;var state_43268__$1 = (function (){var statearr_43279 = state_43268;(statearr_43279[10] = inst_43207);
(statearr_43279[11] = inst_43206);
(statearr_43279[12] = inst_43204);
(statearr_43279[13] = inst_43205);
return statearr_43279;
})();var statearr_43280_43363 = state_43268__$1;(statearr_43280_43363[2] = null);
(statearr_43280_43363[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 5))
{var inst_43143 = cljs.core.deref.call(null,cs);var inst_43144 = cljs.core.seq.call(null,inst_43143);var inst_43145 = inst_43144;var inst_43146 = null;var inst_43147 = 0;var inst_43148 = 0;var state_43268__$1 = (function (){var statearr_43281 = state_43268;(statearr_43281[14] = inst_43147);
(statearr_43281[15] = inst_43148);
(statearr_43281[16] = inst_43146);
(statearr_43281[17] = inst_43145);
return statearr_43281;
})();var statearr_43282_43364 = state_43268__$1;(statearr_43282_43364[2] = null);
(statearr_43282_43364[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 37))
{var inst_43225 = (state_43268[9]);var inst_43234 = cljs.core.first.call(null,inst_43225);var state_43268__$1 = (function (){var statearr_43283 = state_43268;(statearr_43283[18] = inst_43234);
return statearr_43283;
})();var statearr_43284_43365 = state_43268__$1;(statearr_43284_43365[2] = null);
(statearr_43284_43365[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 6))
{var inst_43196 = (state_43268[19]);var inst_43195 = cljs.core.deref.call(null,cs);var inst_43196__$1 = cljs.core.keys.call(null,inst_43195);var inst_43197 = cljs.core.count.call(null,inst_43196__$1);var inst_43198 = cljs.core.reset_BANG_.call(null,dctr,inst_43197);var inst_43203 = cljs.core.seq.call(null,inst_43196__$1);var inst_43204 = inst_43203;var inst_43205 = null;var inst_43206 = 0;var inst_43207 = 0;var state_43268__$1 = (function (){var statearr_43285 = state_43268;(statearr_43285[10] = inst_43207);
(statearr_43285[19] = inst_43196__$1);
(statearr_43285[11] = inst_43206);
(statearr_43285[20] = inst_43198);
(statearr_43285[12] = inst_43204);
(statearr_43285[13] = inst_43205);
return statearr_43285;
})();var statearr_43286_43366 = state_43268__$1;(statearr_43286_43366[2] = null);
(statearr_43286_43366[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 38))
{var inst_43247 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43287_43367 = state_43268__$1;(statearr_43287_43367[2] = inst_43247);
(statearr_43287_43367[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 7))
{var inst_43264 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43288_43368 = state_43268__$1;(statearr_43288_43368[2] = inst_43264);
(statearr_43288_43368[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 39))
{var inst_43225 = (state_43268[9]);var inst_43243 = (state_43268[2]);var inst_43244 = cljs.core.next.call(null,inst_43225);var inst_43204 = inst_43244;var inst_43205 = null;var inst_43206 = 0;var inst_43207 = 0;var state_43268__$1 = (function (){var statearr_43289 = state_43268;(statearr_43289[10] = inst_43207);
(statearr_43289[11] = inst_43206);
(statearr_43289[21] = inst_43243);
(statearr_43289[12] = inst_43204);
(statearr_43289[13] = inst_43205);
return statearr_43289;
})();var statearr_43290_43369 = state_43268__$1;(statearr_43290_43369[2] = null);
(statearr_43290_43369[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 8))
{var inst_43147 = (state_43268[14]);var inst_43148 = (state_43268[15]);var inst_43150 = (inst_43148 < inst_43147);var inst_43151 = inst_43150;var state_43268__$1 = state_43268;if(cljs.core.truth_(inst_43151))
{var statearr_43291_43370 = state_43268__$1;(statearr_43291_43370[1] = 10);
} else
{var statearr_43292_43371 = state_43268__$1;(statearr_43292_43371[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 40))
{var inst_43234 = (state_43268[18]);var inst_43235 = (state_43268[2]);var inst_43236 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_43237 = cljs.core.async.untap_STAR_.call(null,m,inst_43234);var state_43268__$1 = (function (){var statearr_43293 = state_43268;(statearr_43293[22] = inst_43235);
(statearr_43293[23] = inst_43236);
return statearr_43293;
})();var statearr_43294_43372 = state_43268__$1;(statearr_43294_43372[2] = inst_43237);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43268__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 9))
{var inst_43193 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43295_43373 = state_43268__$1;(statearr_43295_43373[2] = inst_43193);
(statearr_43295_43373[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 41))
{var inst_43234 = (state_43268[18]);var inst_43136 = (state_43268[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43268,40,Object,null,39);var inst_43241 = cljs.core.async.put_BANG_.call(null,inst_43234,inst_43136,done);var state_43268__$1 = state_43268;var statearr_43296_43374 = state_43268__$1;(statearr_43296_43374[2] = inst_43241);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43268__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 10))
{var inst_43148 = (state_43268[15]);var inst_43146 = (state_43268[16]);var inst_43154 = cljs.core._nth.call(null,inst_43146,inst_43148);var inst_43155 = cljs.core.nth.call(null,inst_43154,0,null);var inst_43156 = cljs.core.nth.call(null,inst_43154,1,null);var state_43268__$1 = (function (){var statearr_43297 = state_43268;(statearr_43297[24] = inst_43155);
return statearr_43297;
})();if(cljs.core.truth_(inst_43156))
{var statearr_43298_43375 = state_43268__$1;(statearr_43298_43375[1] = 13);
} else
{var statearr_43299_43376 = state_43268__$1;(statearr_43299_43376[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 42))
{var state_43268__$1 = state_43268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43268__$1,45,dchan);
} else
{if((state_val_43269 === 11))
{var inst_43165 = (state_43268[25]);var inst_43145 = (state_43268[17]);var inst_43165__$1 = cljs.core.seq.call(null,inst_43145);var state_43268__$1 = (function (){var statearr_43300 = state_43268;(statearr_43300[25] = inst_43165__$1);
return statearr_43300;
})();if(inst_43165__$1)
{var statearr_43301_43377 = state_43268__$1;(statearr_43301_43377[1] = 16);
} else
{var statearr_43302_43378 = state_43268__$1;(statearr_43302_43378[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 43))
{var state_43268__$1 = state_43268;var statearr_43303_43379 = state_43268__$1;(statearr_43303_43379[2] = null);
(statearr_43303_43379[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 12))
{var inst_43191 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43304_43380 = state_43268__$1;(statearr_43304_43380[2] = inst_43191);
(statearr_43304_43380[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 44))
{var inst_43261 = (state_43268[2]);var state_43268__$1 = (function (){var statearr_43305 = state_43268;(statearr_43305[26] = inst_43261);
return statearr_43305;
})();var statearr_43306_43381 = state_43268__$1;(statearr_43306_43381[2] = null);
(statearr_43306_43381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 13))
{var inst_43155 = (state_43268[24]);var inst_43158 = cljs.core.async.close_BANG_.call(null,inst_43155);var state_43268__$1 = state_43268;var statearr_43307_43382 = state_43268__$1;(statearr_43307_43382[2] = inst_43158);
(statearr_43307_43382[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 45))
{var inst_43258 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43311_43383 = state_43268__$1;(statearr_43311_43383[2] = inst_43258);
(statearr_43311_43383[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 14))
{var state_43268__$1 = state_43268;var statearr_43312_43384 = state_43268__$1;(statearr_43312_43384[2] = null);
(statearr_43312_43384[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 15))
{var inst_43147 = (state_43268[14]);var inst_43148 = (state_43268[15]);var inst_43146 = (state_43268[16]);var inst_43145 = (state_43268[17]);var inst_43161 = (state_43268[2]);var inst_43162 = (inst_43148 + 1);var tmp43308 = inst_43147;var tmp43309 = inst_43146;var tmp43310 = inst_43145;var inst_43145__$1 = tmp43310;var inst_43146__$1 = tmp43309;var inst_43147__$1 = tmp43308;var inst_43148__$1 = inst_43162;var state_43268__$1 = (function (){var statearr_43313 = state_43268;(statearr_43313[27] = inst_43161);
(statearr_43313[14] = inst_43147__$1);
(statearr_43313[15] = inst_43148__$1);
(statearr_43313[16] = inst_43146__$1);
(statearr_43313[17] = inst_43145__$1);
return statearr_43313;
})();var statearr_43314_43385 = state_43268__$1;(statearr_43314_43385[2] = null);
(statearr_43314_43385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 16))
{var inst_43165 = (state_43268[25]);var inst_43167 = cljs.core.chunked_seq_QMARK_.call(null,inst_43165);var state_43268__$1 = state_43268;if(inst_43167)
{var statearr_43315_43386 = state_43268__$1;(statearr_43315_43386[1] = 19);
} else
{var statearr_43316_43387 = state_43268__$1;(statearr_43316_43387[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 17))
{var state_43268__$1 = state_43268;var statearr_43317_43388 = state_43268__$1;(statearr_43317_43388[2] = null);
(statearr_43317_43388[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 18))
{var inst_43189 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43318_43389 = state_43268__$1;(statearr_43318_43389[2] = inst_43189);
(statearr_43318_43389[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 19))
{var inst_43165 = (state_43268[25]);var inst_43169 = cljs.core.chunk_first.call(null,inst_43165);var inst_43170 = cljs.core.chunk_rest.call(null,inst_43165);var inst_43171 = cljs.core.count.call(null,inst_43169);var inst_43145 = inst_43170;var inst_43146 = inst_43169;var inst_43147 = inst_43171;var inst_43148 = 0;var state_43268__$1 = (function (){var statearr_43319 = state_43268;(statearr_43319[14] = inst_43147);
(statearr_43319[15] = inst_43148);
(statearr_43319[16] = inst_43146);
(statearr_43319[17] = inst_43145);
return statearr_43319;
})();var statearr_43320_43390 = state_43268__$1;(statearr_43320_43390[2] = null);
(statearr_43320_43390[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 20))
{var inst_43165 = (state_43268[25]);var inst_43175 = cljs.core.first.call(null,inst_43165);var inst_43176 = cljs.core.nth.call(null,inst_43175,0,null);var inst_43177 = cljs.core.nth.call(null,inst_43175,1,null);var state_43268__$1 = (function (){var statearr_43321 = state_43268;(statearr_43321[28] = inst_43176);
return statearr_43321;
})();if(cljs.core.truth_(inst_43177))
{var statearr_43322_43391 = state_43268__$1;(statearr_43322_43391[1] = 22);
} else
{var statearr_43323_43392 = state_43268__$1;(statearr_43323_43392[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 21))
{var inst_43186 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43324_43393 = state_43268__$1;(statearr_43324_43393[2] = inst_43186);
(statearr_43324_43393[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 22))
{var inst_43176 = (state_43268[28]);var inst_43179 = cljs.core.async.close_BANG_.call(null,inst_43176);var state_43268__$1 = state_43268;var statearr_43325_43394 = state_43268__$1;(statearr_43325_43394[2] = inst_43179);
(statearr_43325_43394[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 23))
{var state_43268__$1 = state_43268;var statearr_43326_43395 = state_43268__$1;(statearr_43326_43395[2] = null);
(statearr_43326_43395[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 24))
{var inst_43165 = (state_43268[25]);var inst_43182 = (state_43268[2]);var inst_43183 = cljs.core.next.call(null,inst_43165);var inst_43145 = inst_43183;var inst_43146 = null;var inst_43147 = 0;var inst_43148 = 0;var state_43268__$1 = (function (){var statearr_43327 = state_43268;(statearr_43327[14] = inst_43147);
(statearr_43327[15] = inst_43148);
(statearr_43327[16] = inst_43146);
(statearr_43327[17] = inst_43145);
(statearr_43327[29] = inst_43182);
return statearr_43327;
})();var statearr_43328_43396 = state_43268__$1;(statearr_43328_43396[2] = null);
(statearr_43328_43396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 25))
{var inst_43207 = (state_43268[10]);var inst_43206 = (state_43268[11]);var inst_43209 = (inst_43207 < inst_43206);var inst_43210 = inst_43209;var state_43268__$1 = state_43268;if(cljs.core.truth_(inst_43210))
{var statearr_43329_43397 = state_43268__$1;(statearr_43329_43397[1] = 27);
} else
{var statearr_43330_43398 = state_43268__$1;(statearr_43330_43398[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 26))
{var inst_43196 = (state_43268[19]);var inst_43254 = (state_43268[2]);var inst_43255 = cljs.core.seq.call(null,inst_43196);var state_43268__$1 = (function (){var statearr_43331 = state_43268;(statearr_43331[30] = inst_43254);
return statearr_43331;
})();if(inst_43255)
{var statearr_43332_43399 = state_43268__$1;(statearr_43332_43399[1] = 42);
} else
{var statearr_43333_43400 = state_43268__$1;(statearr_43333_43400[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 27))
{var inst_43207 = (state_43268[10]);var inst_43205 = (state_43268[13]);var inst_43212 = cljs.core._nth.call(null,inst_43205,inst_43207);var state_43268__$1 = (function (){var statearr_43334 = state_43268;(statearr_43334[8] = inst_43212);
return statearr_43334;
})();var statearr_43335_43401 = state_43268__$1;(statearr_43335_43401[2] = null);
(statearr_43335_43401[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 28))
{var inst_43225 = (state_43268[9]);var inst_43204 = (state_43268[12]);var inst_43225__$1 = cljs.core.seq.call(null,inst_43204);var state_43268__$1 = (function (){var statearr_43339 = state_43268;(statearr_43339[9] = inst_43225__$1);
return statearr_43339;
})();if(inst_43225__$1)
{var statearr_43340_43402 = state_43268__$1;(statearr_43340_43402[1] = 33);
} else
{var statearr_43341_43403 = state_43268__$1;(statearr_43341_43403[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 29))
{var inst_43252 = (state_43268[2]);var state_43268__$1 = state_43268;var statearr_43342_43404 = state_43268__$1;(statearr_43342_43404[2] = inst_43252);
(statearr_43342_43404[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 30))
{var inst_43207 = (state_43268[10]);var inst_43206 = (state_43268[11]);var inst_43204 = (state_43268[12]);var inst_43205 = (state_43268[13]);var inst_43221 = (state_43268[2]);var inst_43222 = (inst_43207 + 1);var tmp43336 = inst_43206;var tmp43337 = inst_43204;var tmp43338 = inst_43205;var inst_43204__$1 = tmp43337;var inst_43205__$1 = tmp43338;var inst_43206__$1 = tmp43336;var inst_43207__$1 = inst_43222;var state_43268__$1 = (function (){var statearr_43343 = state_43268;(statearr_43343[10] = inst_43207__$1);
(statearr_43343[11] = inst_43206__$1);
(statearr_43343[31] = inst_43221);
(statearr_43343[12] = inst_43204__$1);
(statearr_43343[13] = inst_43205__$1);
return statearr_43343;
})();var statearr_43344_43405 = state_43268__$1;(statearr_43344_43405[2] = null);
(statearr_43344_43405[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43269 === 31))
{var inst_43212 = (state_43268[8]);var inst_43213 = (state_43268[2]);var inst_43214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_43215 = cljs.core.async.untap_STAR_.call(null,m,inst_43212);var state_43268__$1 = (function (){var statearr_43345 = state_43268;(statearr_43345[32] = inst_43213);
(statearr_43345[33] = inst_43214);
return statearr_43345;
})();var statearr_43346_43406 = state_43268__$1;(statearr_43346_43406[2] = inst_43215);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43268__$1);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_43350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43350[0] = state_machine__10730__auto__);
(statearr_43350[1] = 1);
return statearr_43350;
});
var state_machine__10730__auto____1 = (function (state_43268){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_43268);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e43351){if((e43351 instanceof Object))
{var ex__10733__auto__ = e43351;var statearr_43352_43407 = state_43268;(statearr_43352_43407[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43268);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43408 = state_43268;
state_43268 = G__43408;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_43268){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_43268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_43353 = f__10794__auto__.call(null);(statearr_43353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___43354);
return statearr_43353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.Mix = (function (){var obj43410 = {};return obj43410;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t43520 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43520 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta43521){
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
this.meta43521 = meta43521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43520.cljs$lang$type = true;
cljs.core.async.t43520.cljs$lang$ctorStr = "cljs.core.async/t43520";
cljs.core.async.t43520.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t43520");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43520.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43522){var self__ = this;
var _43522__$1 = this;return self__.meta43521;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43522,meta43521__$1){var self__ = this;
var _43522__$1 = this;return (new cljs.core.async.t43520(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta43521__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43520 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43520(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta43521){return (new cljs.core.async.t43520(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta43521));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43520(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10793__auto___43629 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_43587){var state_val_43588 = (state_43587[1]);if((state_val_43588 === 1))
{var inst_43526 = (state_43587[7]);var inst_43526__$1 = calc_state.call(null);var inst_43527 = cljs.core.seq_QMARK_.call(null,inst_43526__$1);var state_43587__$1 = (function (){var statearr_43589 = state_43587;(statearr_43589[7] = inst_43526__$1);
return statearr_43589;
})();if(inst_43527)
{var statearr_43590_43630 = state_43587__$1;(statearr_43590_43630[1] = 2);
} else
{var statearr_43591_43631 = state_43587__$1;(statearr_43591_43631[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 2))
{var inst_43526 = (state_43587[7]);var inst_43529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43526);var state_43587__$1 = state_43587;var statearr_43592_43632 = state_43587__$1;(statearr_43592_43632[2] = inst_43529);
(statearr_43592_43632[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 3))
{var inst_43526 = (state_43587[7]);var state_43587__$1 = state_43587;var statearr_43593_43633 = state_43587__$1;(statearr_43593_43633[2] = inst_43526);
(statearr_43593_43633[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 4))
{var inst_43526 = (state_43587[7]);var inst_43532 = (state_43587[2]);var inst_43533 = cljs.core.get.call(null,inst_43532,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43534 = cljs.core.get.call(null,inst_43532,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43535 = cljs.core.get.call(null,inst_43532,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_43536 = inst_43526;var state_43587__$1 = (function (){var statearr_43594 = state_43587;(statearr_43594[8] = inst_43536);
(statearr_43594[9] = inst_43533);
(statearr_43594[10] = inst_43534);
(statearr_43594[11] = inst_43535);
return statearr_43594;
})();var statearr_43595_43634 = state_43587__$1;(statearr_43595_43634[2] = null);
(statearr_43595_43634[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 5))
{var inst_43536 = (state_43587[8]);var inst_43539 = cljs.core.seq_QMARK_.call(null,inst_43536);var state_43587__$1 = state_43587;if(inst_43539)
{var statearr_43596_43635 = state_43587__$1;(statearr_43596_43635[1] = 7);
} else
{var statearr_43597_43636 = state_43587__$1;(statearr_43597_43636[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 6))
{var inst_43585 = (state_43587[2]);var state_43587__$1 = state_43587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43587__$1,inst_43585);
} else
{if((state_val_43588 === 7))
{var inst_43536 = (state_43587[8]);var inst_43541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43536);var state_43587__$1 = state_43587;var statearr_43598_43637 = state_43587__$1;(statearr_43598_43637[2] = inst_43541);
(statearr_43598_43637[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 8))
{var inst_43536 = (state_43587[8]);var state_43587__$1 = state_43587;var statearr_43599_43638 = state_43587__$1;(statearr_43599_43638[2] = inst_43536);
(statearr_43599_43638[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 9))
{var inst_43544 = (state_43587[12]);var inst_43544__$1 = (state_43587[2]);var inst_43545 = cljs.core.get.call(null,inst_43544__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43546 = cljs.core.get.call(null,inst_43544__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43547 = cljs.core.get.call(null,inst_43544__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_43587__$1 = (function (){var statearr_43600 = state_43587;(statearr_43600[12] = inst_43544__$1);
(statearr_43600[13] = inst_43546);
(statearr_43600[14] = inst_43547);
return statearr_43600;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43587__$1,10,inst_43545);
} else
{if((state_val_43588 === 10))
{var inst_43552 = (state_43587[15]);var inst_43551 = (state_43587[16]);var inst_43550 = (state_43587[2]);var inst_43551__$1 = cljs.core.nth.call(null,inst_43550,0,null);var inst_43552__$1 = cljs.core.nth.call(null,inst_43550,1,null);var inst_43553 = (inst_43551__$1 == null);var inst_43554 = cljs.core._EQ_.call(null,inst_43552__$1,change);var inst_43555 = (inst_43553) || (inst_43554);var state_43587__$1 = (function (){var statearr_43601 = state_43587;(statearr_43601[15] = inst_43552__$1);
(statearr_43601[16] = inst_43551__$1);
return statearr_43601;
})();if(cljs.core.truth_(inst_43555))
{var statearr_43602_43639 = state_43587__$1;(statearr_43602_43639[1] = 11);
} else
{var statearr_43603_43640 = state_43587__$1;(statearr_43603_43640[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 11))
{var inst_43551 = (state_43587[16]);var inst_43557 = (inst_43551 == null);var state_43587__$1 = state_43587;if(cljs.core.truth_(inst_43557))
{var statearr_43604_43641 = state_43587__$1;(statearr_43604_43641[1] = 14);
} else
{var statearr_43605_43642 = state_43587__$1;(statearr_43605_43642[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 12))
{var inst_43552 = (state_43587[15]);var inst_43547 = (state_43587[14]);var inst_43566 = (state_43587[17]);var inst_43566__$1 = inst_43547.call(null,inst_43552);var state_43587__$1 = (function (){var statearr_43606 = state_43587;(statearr_43606[17] = inst_43566__$1);
return statearr_43606;
})();if(cljs.core.truth_(inst_43566__$1))
{var statearr_43607_43643 = state_43587__$1;(statearr_43607_43643[1] = 17);
} else
{var statearr_43608_43644 = state_43587__$1;(statearr_43608_43644[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 13))
{var inst_43583 = (state_43587[2]);var state_43587__$1 = state_43587;var statearr_43609_43645 = state_43587__$1;(statearr_43609_43645[2] = inst_43583);
(statearr_43609_43645[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 14))
{var inst_43552 = (state_43587[15]);var inst_43559 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43552);var state_43587__$1 = state_43587;var statearr_43610_43646 = state_43587__$1;(statearr_43610_43646[2] = inst_43559);
(statearr_43610_43646[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 15))
{var state_43587__$1 = state_43587;var statearr_43611_43647 = state_43587__$1;(statearr_43611_43647[2] = null);
(statearr_43611_43647[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 16))
{var inst_43562 = (state_43587[2]);var inst_43563 = calc_state.call(null);var inst_43536 = inst_43563;var state_43587__$1 = (function (){var statearr_43612 = state_43587;(statearr_43612[18] = inst_43562);
(statearr_43612[8] = inst_43536);
return statearr_43612;
})();var statearr_43613_43648 = state_43587__$1;(statearr_43613_43648[2] = null);
(statearr_43613_43648[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 17))
{var inst_43566 = (state_43587[17]);var state_43587__$1 = state_43587;var statearr_43614_43649 = state_43587__$1;(statearr_43614_43649[2] = inst_43566);
(statearr_43614_43649[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 18))
{var inst_43552 = (state_43587[15]);var inst_43546 = (state_43587[13]);var inst_43547 = (state_43587[14]);var inst_43569 = cljs.core.empty_QMARK_.call(null,inst_43547);var inst_43570 = inst_43546.call(null,inst_43552);var inst_43571 = cljs.core.not.call(null,inst_43570);var inst_43572 = (inst_43569) && (inst_43571);var state_43587__$1 = state_43587;var statearr_43615_43650 = state_43587__$1;(statearr_43615_43650[2] = inst_43572);
(statearr_43615_43650[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 19))
{var inst_43574 = (state_43587[2]);var state_43587__$1 = state_43587;if(cljs.core.truth_(inst_43574))
{var statearr_43616_43651 = state_43587__$1;(statearr_43616_43651[1] = 20);
} else
{var statearr_43617_43652 = state_43587__$1;(statearr_43617_43652[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 20))
{var inst_43551 = (state_43587[16]);var state_43587__$1 = state_43587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43587__$1,23,out,inst_43551);
} else
{if((state_val_43588 === 21))
{var state_43587__$1 = state_43587;var statearr_43618_43653 = state_43587__$1;(statearr_43618_43653[2] = null);
(statearr_43618_43653[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 22))
{var inst_43544 = (state_43587[12]);var inst_43580 = (state_43587[2]);var inst_43536 = inst_43544;var state_43587__$1 = (function (){var statearr_43619 = state_43587;(statearr_43619[8] = inst_43536);
(statearr_43619[19] = inst_43580);
return statearr_43619;
})();var statearr_43620_43654 = state_43587__$1;(statearr_43620_43654[2] = null);
(statearr_43620_43654[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43588 === 23))
{var inst_43577 = (state_43587[2]);var state_43587__$1 = state_43587;var statearr_43621_43655 = state_43587__$1;(statearr_43621_43655[2] = inst_43577);
(statearr_43621_43655[1] = 22);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_43625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43625[0] = state_machine__10730__auto__);
(statearr_43625[1] = 1);
return statearr_43625;
});
var state_machine__10730__auto____1 = (function (state_43587){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_43587);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e43626){if((e43626 instanceof Object))
{var ex__10733__auto__ = e43626;var statearr_43627_43656 = state_43587;(statearr_43627_43656[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43657 = state_43587;
state_43587 = G__43657;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_43587){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_43587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_43628 = f__10794__auto__.call(null);(statearr_43628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___43629);
return statearr_43628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.Pub = (function (){var obj43659 = {};return obj43659;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
return (function (topic){var or__8198__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8198__auto__,mults){
return (function (p1__43660_SHARP_){if(cljs.core.truth_(p1__43660_SHARP_.call(null,topic)))
{return p1__43660_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__43660_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8198__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t43785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43785 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta43786){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta43786 = meta43786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43785.cljs$lang$type = true;
cljs.core.async.t43785.cljs$lang$ctorStr = "cljs.core.async/t43785";
cljs.core.async.t43785.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t43785");
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t43785.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43787){var self__ = this;
var _43787__$1 = this;return self__.meta43786;
});})(mults,ensure_mult))
;
cljs.core.async.t43785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43787,meta43786__$1){var self__ = this;
var _43787__$1 = this;return (new cljs.core.async.t43785(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta43786__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t43785 = ((function (mults,ensure_mult){
return (function __GT_t43785(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43786){return (new cljs.core.async.t43785(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43786));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t43785(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10793__auto___43909 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_43861){var state_val_43862 = (state_43861[1]);if((state_val_43862 === 1))
{var state_43861__$1 = state_43861;var statearr_43863_43910 = state_43861__$1;(statearr_43863_43910[2] = null);
(statearr_43863_43910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 2))
{var state_43861__$1 = state_43861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43861__$1,4,ch);
} else
{if((state_val_43862 === 3))
{var inst_43859 = (state_43861[2]);var state_43861__$1 = state_43861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43861__$1,inst_43859);
} else
{if((state_val_43862 === 4))
{var inst_43790 = (state_43861[7]);var inst_43790__$1 = (state_43861[2]);var inst_43791 = (inst_43790__$1 == null);var state_43861__$1 = (function (){var statearr_43864 = state_43861;(statearr_43864[7] = inst_43790__$1);
return statearr_43864;
})();if(cljs.core.truth_(inst_43791))
{var statearr_43865_43911 = state_43861__$1;(statearr_43865_43911[1] = 5);
} else
{var statearr_43866_43912 = state_43861__$1;(statearr_43866_43912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 5))
{var inst_43797 = cljs.core.deref.call(null,mults);var inst_43798 = cljs.core.vals.call(null,inst_43797);var inst_43799 = cljs.core.seq.call(null,inst_43798);var inst_43800 = inst_43799;var inst_43801 = null;var inst_43802 = 0;var inst_43803 = 0;var state_43861__$1 = (function (){var statearr_43867 = state_43861;(statearr_43867[8] = inst_43801);
(statearr_43867[9] = inst_43800);
(statearr_43867[10] = inst_43803);
(statearr_43867[11] = inst_43802);
return statearr_43867;
})();var statearr_43868_43913 = state_43861__$1;(statearr_43868_43913[2] = null);
(statearr_43868_43913[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 6))
{var inst_43790 = (state_43861[7]);var inst_43840 = (state_43861[12]);var inst_43838 = (state_43861[13]);var inst_43838__$1 = topic_fn.call(null,inst_43790);var inst_43839 = cljs.core.deref.call(null,mults);var inst_43840__$1 = cljs.core.get.call(null,inst_43839,inst_43838__$1);var state_43861__$1 = (function (){var statearr_43869 = state_43861;(statearr_43869[12] = inst_43840__$1);
(statearr_43869[13] = inst_43838__$1);
return statearr_43869;
})();if(cljs.core.truth_(inst_43840__$1))
{var statearr_43870_43914 = state_43861__$1;(statearr_43870_43914[1] = 19);
} else
{var statearr_43871_43915 = state_43861__$1;(statearr_43871_43915[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 7))
{var inst_43857 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43872_43916 = state_43861__$1;(statearr_43872_43916[2] = inst_43857);
(statearr_43872_43916[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 8))
{var inst_43803 = (state_43861[10]);var inst_43802 = (state_43861[11]);var inst_43805 = (inst_43803 < inst_43802);var inst_43806 = inst_43805;var state_43861__$1 = state_43861;if(cljs.core.truth_(inst_43806))
{var statearr_43876_43917 = state_43861__$1;(statearr_43876_43917[1] = 10);
} else
{var statearr_43877_43918 = state_43861__$1;(statearr_43877_43918[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 9))
{var inst_43836 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43878_43919 = state_43861__$1;(statearr_43878_43919[2] = inst_43836);
(statearr_43878_43919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 10))
{var inst_43801 = (state_43861[8]);var inst_43800 = (state_43861[9]);var inst_43803 = (state_43861[10]);var inst_43802 = (state_43861[11]);var inst_43808 = cljs.core._nth.call(null,inst_43801,inst_43803);var inst_43809 = cljs.core.async.muxch_STAR_.call(null,inst_43808);var inst_43810 = cljs.core.async.close_BANG_.call(null,inst_43809);var inst_43811 = (inst_43803 + 1);var tmp43873 = inst_43801;var tmp43874 = inst_43800;var tmp43875 = inst_43802;var inst_43800__$1 = tmp43874;var inst_43801__$1 = tmp43873;var inst_43802__$1 = tmp43875;var inst_43803__$1 = inst_43811;var state_43861__$1 = (function (){var statearr_43879 = state_43861;(statearr_43879[8] = inst_43801__$1);
(statearr_43879[9] = inst_43800__$1);
(statearr_43879[10] = inst_43803__$1);
(statearr_43879[11] = inst_43802__$1);
(statearr_43879[14] = inst_43810);
return statearr_43879;
})();var statearr_43880_43920 = state_43861__$1;(statearr_43880_43920[2] = null);
(statearr_43880_43920[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 11))
{var inst_43800 = (state_43861[9]);var inst_43814 = (state_43861[15]);var inst_43814__$1 = cljs.core.seq.call(null,inst_43800);var state_43861__$1 = (function (){var statearr_43881 = state_43861;(statearr_43881[15] = inst_43814__$1);
return statearr_43881;
})();if(inst_43814__$1)
{var statearr_43882_43921 = state_43861__$1;(statearr_43882_43921[1] = 13);
} else
{var statearr_43883_43922 = state_43861__$1;(statearr_43883_43922[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 12))
{var inst_43834 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43884_43923 = state_43861__$1;(statearr_43884_43923[2] = inst_43834);
(statearr_43884_43923[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 13))
{var inst_43814 = (state_43861[15]);var inst_43816 = cljs.core.chunked_seq_QMARK_.call(null,inst_43814);var state_43861__$1 = state_43861;if(inst_43816)
{var statearr_43885_43924 = state_43861__$1;(statearr_43885_43924[1] = 16);
} else
{var statearr_43886_43925 = state_43861__$1;(statearr_43886_43925[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 14))
{var state_43861__$1 = state_43861;var statearr_43887_43926 = state_43861__$1;(statearr_43887_43926[2] = null);
(statearr_43887_43926[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 15))
{var inst_43832 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43888_43927 = state_43861__$1;(statearr_43888_43927[2] = inst_43832);
(statearr_43888_43927[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 16))
{var inst_43814 = (state_43861[15]);var inst_43818 = cljs.core.chunk_first.call(null,inst_43814);var inst_43819 = cljs.core.chunk_rest.call(null,inst_43814);var inst_43820 = cljs.core.count.call(null,inst_43818);var inst_43800 = inst_43819;var inst_43801 = inst_43818;var inst_43802 = inst_43820;var inst_43803 = 0;var state_43861__$1 = (function (){var statearr_43889 = state_43861;(statearr_43889[8] = inst_43801);
(statearr_43889[9] = inst_43800);
(statearr_43889[10] = inst_43803);
(statearr_43889[11] = inst_43802);
return statearr_43889;
})();var statearr_43890_43928 = state_43861__$1;(statearr_43890_43928[2] = null);
(statearr_43890_43928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 17))
{var inst_43814 = (state_43861[15]);var inst_43823 = cljs.core.first.call(null,inst_43814);var inst_43824 = cljs.core.async.muxch_STAR_.call(null,inst_43823);var inst_43825 = cljs.core.async.close_BANG_.call(null,inst_43824);var inst_43826 = cljs.core.next.call(null,inst_43814);var inst_43800 = inst_43826;var inst_43801 = null;var inst_43802 = 0;var inst_43803 = 0;var state_43861__$1 = (function (){var statearr_43891 = state_43861;(statearr_43891[8] = inst_43801);
(statearr_43891[9] = inst_43800);
(statearr_43891[10] = inst_43803);
(statearr_43891[11] = inst_43802);
(statearr_43891[16] = inst_43825);
return statearr_43891;
})();var statearr_43892_43929 = state_43861__$1;(statearr_43892_43929[2] = null);
(statearr_43892_43929[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 18))
{var inst_43829 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43893_43930 = state_43861__$1;(statearr_43893_43930[2] = inst_43829);
(statearr_43893_43930[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 19))
{var state_43861__$1 = state_43861;var statearr_43894_43931 = state_43861__$1;(statearr_43894_43931[2] = null);
(statearr_43894_43931[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 20))
{var state_43861__$1 = state_43861;var statearr_43895_43932 = state_43861__$1;(statearr_43895_43932[2] = null);
(statearr_43895_43932[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 21))
{var inst_43854 = (state_43861[2]);var state_43861__$1 = (function (){var statearr_43896 = state_43861;(statearr_43896[17] = inst_43854);
return statearr_43896;
})();var statearr_43897_43933 = state_43861__$1;(statearr_43897_43933[2] = null);
(statearr_43897_43933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 22))
{var inst_43851 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43898_43934 = state_43861__$1;(statearr_43898_43934[2] = inst_43851);
(statearr_43898_43934[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 23))
{var inst_43838 = (state_43861[13]);var inst_43842 = (state_43861[2]);var inst_43843 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43838);var state_43861__$1 = (function (){var statearr_43899 = state_43861;(statearr_43899[18] = inst_43842);
return statearr_43899;
})();var statearr_43900_43935 = state_43861__$1;(statearr_43900_43935[2] = inst_43843);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43861__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43862 === 24))
{var inst_43790 = (state_43861[7]);var inst_43840 = (state_43861[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43861,23,Object,null,22);var inst_43847 = cljs.core.async.muxch_STAR_.call(null,inst_43840);var state_43861__$1 = state_43861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43861__$1,25,inst_43847,inst_43790);
} else
{if((state_val_43862 === 25))
{var inst_43849 = (state_43861[2]);var state_43861__$1 = state_43861;var statearr_43901_43936 = state_43861__$1;(statearr_43901_43936[2] = inst_43849);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43861__$1);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_43905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43905[0] = state_machine__10730__auto__);
(statearr_43905[1] = 1);
return statearr_43905;
});
var state_machine__10730__auto____1 = (function (state_43861){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_43861);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e43906){if((e43906 instanceof Object))
{var ex__10733__auto__ = e43906;var statearr_43907_43937 = state_43861;(statearr_43907_43937[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43938 = state_43861;
state_43861 = G__43938;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_43861){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_43861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_43908 = f__10794__auto__.call(null);(statearr_43908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___43909);
return statearr_43908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
,cljs.core.range.call(null,cnt));var c__10793__auto___44075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_44045){var state_val_44046 = (state_44045[1]);if((state_val_44046 === 1))
{var state_44045__$1 = state_44045;var statearr_44047_44076 = state_44045__$1;(statearr_44047_44076[2] = null);
(statearr_44047_44076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 2))
{var inst_44008 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_44009 = 0;var state_44045__$1 = (function (){var statearr_44048 = state_44045;(statearr_44048[7] = inst_44008);
(statearr_44048[8] = inst_44009);
return statearr_44048;
})();var statearr_44049_44077 = state_44045__$1;(statearr_44049_44077[2] = null);
(statearr_44049_44077[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 3))
{var inst_44043 = (state_44045[2]);var state_44045__$1 = state_44045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44045__$1,inst_44043);
} else
{if((state_val_44046 === 4))
{var inst_44009 = (state_44045[8]);var inst_44011 = (inst_44009 < cnt);var state_44045__$1 = state_44045;if(cljs.core.truth_(inst_44011))
{var statearr_44050_44078 = state_44045__$1;(statearr_44050_44078[1] = 6);
} else
{var statearr_44051_44079 = state_44045__$1;(statearr_44051_44079[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 5))
{var inst_44029 = (state_44045[2]);var state_44045__$1 = (function (){var statearr_44052 = state_44045;(statearr_44052[9] = inst_44029);
return statearr_44052;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44045__$1,12,dchan);
} else
{if((state_val_44046 === 6))
{var state_44045__$1 = state_44045;var statearr_44053_44080 = state_44045__$1;(statearr_44053_44080[2] = null);
(statearr_44053_44080[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 7))
{var state_44045__$1 = state_44045;var statearr_44054_44081 = state_44045__$1;(statearr_44054_44081[2] = null);
(statearr_44054_44081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 8))
{var inst_44027 = (state_44045[2]);var state_44045__$1 = state_44045;var statearr_44055_44082 = state_44045__$1;(statearr_44055_44082[2] = inst_44027);
(statearr_44055_44082[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 9))
{var inst_44009 = (state_44045[8]);var inst_44022 = (state_44045[2]);var inst_44023 = (inst_44009 + 1);var inst_44009__$1 = inst_44023;var state_44045__$1 = (function (){var statearr_44056 = state_44045;(statearr_44056[10] = inst_44022);
(statearr_44056[8] = inst_44009__$1);
return statearr_44056;
})();var statearr_44057_44083 = state_44045__$1;(statearr_44057_44083[2] = null);
(statearr_44057_44083[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 10))
{var inst_44013 = (state_44045[2]);var inst_44014 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_44045__$1 = (function (){var statearr_44058 = state_44045;(statearr_44058[11] = inst_44013);
return statearr_44058;
})();var statearr_44059_44084 = state_44045__$1;(statearr_44059_44084[2] = inst_44014);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44045__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 11))
{var inst_44009 = (state_44045[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44045,10,Object,null,9);var inst_44018 = chs__$1.call(null,inst_44009);var inst_44019 = done.call(null,inst_44009);var inst_44020 = cljs.core.async.take_BANG_.call(null,inst_44018,inst_44019);var state_44045__$1 = state_44045;var statearr_44060_44085 = state_44045__$1;(statearr_44060_44085[2] = inst_44020);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44045__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 12))
{var inst_44031 = (state_44045[12]);var inst_44031__$1 = (state_44045[2]);var inst_44032 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44031__$1);var state_44045__$1 = (function (){var statearr_44061 = state_44045;(statearr_44061[12] = inst_44031__$1);
return statearr_44061;
})();if(cljs.core.truth_(inst_44032))
{var statearr_44062_44086 = state_44045__$1;(statearr_44062_44086[1] = 13);
} else
{var statearr_44063_44087 = state_44045__$1;(statearr_44063_44087[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 13))
{var inst_44034 = cljs.core.async.close_BANG_.call(null,out);var state_44045__$1 = state_44045;var statearr_44064_44088 = state_44045__$1;(statearr_44064_44088[2] = inst_44034);
(statearr_44064_44088[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 14))
{var inst_44031 = (state_44045[12]);var inst_44036 = cljs.core.apply.call(null,f,inst_44031);var state_44045__$1 = state_44045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44045__$1,16,out,inst_44036);
} else
{if((state_val_44046 === 15))
{var inst_44041 = (state_44045[2]);var state_44045__$1 = state_44045;var statearr_44065_44089 = state_44045__$1;(statearr_44065_44089[2] = inst_44041);
(statearr_44065_44089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44046 === 16))
{var inst_44038 = (state_44045[2]);var state_44045__$1 = (function (){var statearr_44066 = state_44045;(statearr_44066[13] = inst_44038);
return statearr_44066;
})();var statearr_44067_44090 = state_44045__$1;(statearr_44067_44090[2] = null);
(statearr_44067_44090[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_44071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44071[0] = state_machine__10730__auto__);
(statearr_44071[1] = 1);
return statearr_44071;
});
var state_machine__10730__auto____1 = (function (state_44045){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_44045);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e44072){if((e44072 instanceof Object))
{var ex__10733__auto__ = e44072;var statearr_44073_44091 = state_44045;(statearr_44073_44091[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44092 = state_44045;
state_44045 = G__44092;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_44045){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_44045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_44074 = f__10794__auto__.call(null);(statearr_44074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___44075);
return statearr_44074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___44200 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_44176){var state_val_44177 = (state_44176[1]);if((state_val_44177 === 1))
{var inst_44147 = cljs.core.vec.call(null,chs);var inst_44148 = inst_44147;var state_44176__$1 = (function (){var statearr_44178 = state_44176;(statearr_44178[7] = inst_44148);
return statearr_44178;
})();var statearr_44179_44201 = state_44176__$1;(statearr_44179_44201[2] = null);
(statearr_44179_44201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 2))
{var inst_44148 = (state_44176[7]);var inst_44150 = cljs.core.count.call(null,inst_44148);var inst_44151 = (inst_44150 > 0);var state_44176__$1 = state_44176;if(cljs.core.truth_(inst_44151))
{var statearr_44180_44202 = state_44176__$1;(statearr_44180_44202[1] = 4);
} else
{var statearr_44181_44203 = state_44176__$1;(statearr_44181_44203[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 3))
{var inst_44174 = (state_44176[2]);var state_44176__$1 = state_44176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44176__$1,inst_44174);
} else
{if((state_val_44177 === 4))
{var inst_44148 = (state_44176[7]);var state_44176__$1 = state_44176;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_44176__$1,7,inst_44148);
} else
{if((state_val_44177 === 5))
{var inst_44170 = cljs.core.async.close_BANG_.call(null,out);var state_44176__$1 = state_44176;var statearr_44182_44204 = state_44176__$1;(statearr_44182_44204[2] = inst_44170);
(statearr_44182_44204[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 6))
{var inst_44172 = (state_44176[2]);var state_44176__$1 = state_44176;var statearr_44183_44205 = state_44176__$1;(statearr_44183_44205[2] = inst_44172);
(statearr_44183_44205[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 7))
{var inst_44156 = (state_44176[8]);var inst_44155 = (state_44176[9]);var inst_44155__$1 = (state_44176[2]);var inst_44156__$1 = cljs.core.nth.call(null,inst_44155__$1,0,null);var inst_44157 = cljs.core.nth.call(null,inst_44155__$1,1,null);var inst_44158 = (inst_44156__$1 == null);var state_44176__$1 = (function (){var statearr_44184 = state_44176;(statearr_44184[10] = inst_44157);
(statearr_44184[8] = inst_44156__$1);
(statearr_44184[9] = inst_44155__$1);
return statearr_44184;
})();if(cljs.core.truth_(inst_44158))
{var statearr_44185_44206 = state_44176__$1;(statearr_44185_44206[1] = 8);
} else
{var statearr_44186_44207 = state_44176__$1;(statearr_44186_44207[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 8))
{var inst_44148 = (state_44176[7]);var inst_44157 = (state_44176[10]);var inst_44156 = (state_44176[8]);var inst_44155 = (state_44176[9]);var inst_44160 = (function (){var c = inst_44157;var v = inst_44156;var vec__44153 = inst_44155;var cs = inst_44148;return ((function (c,v,vec__44153,cs,inst_44148,inst_44157,inst_44156,inst_44155,state_val_44177){
return (function (p1__44093_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__44093_SHARP_);
});
;})(c,v,vec__44153,cs,inst_44148,inst_44157,inst_44156,inst_44155,state_val_44177))
})();var inst_44161 = cljs.core.filterv.call(null,inst_44160,inst_44148);var inst_44148__$1 = inst_44161;var state_44176__$1 = (function (){var statearr_44187 = state_44176;(statearr_44187[7] = inst_44148__$1);
return statearr_44187;
})();var statearr_44188_44208 = state_44176__$1;(statearr_44188_44208[2] = null);
(statearr_44188_44208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 9))
{var inst_44156 = (state_44176[8]);var state_44176__$1 = state_44176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44176__$1,11,out,inst_44156);
} else
{if((state_val_44177 === 10))
{var inst_44168 = (state_44176[2]);var state_44176__$1 = state_44176;var statearr_44190_44209 = state_44176__$1;(statearr_44190_44209[2] = inst_44168);
(statearr_44190_44209[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44177 === 11))
{var inst_44148 = (state_44176[7]);var inst_44165 = (state_44176[2]);var tmp44189 = inst_44148;var inst_44148__$1 = tmp44189;var state_44176__$1 = (function (){var statearr_44191 = state_44176;(statearr_44191[11] = inst_44165);
(statearr_44191[7] = inst_44148__$1);
return statearr_44191;
})();var statearr_44192_44210 = state_44176__$1;(statearr_44192_44210[2] = null);
(statearr_44192_44210[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_44196 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44196[0] = state_machine__10730__auto__);
(statearr_44196[1] = 1);
return statearr_44196;
});
var state_machine__10730__auto____1 = (function (state_44176){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_44176);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e44197){if((e44197 instanceof Object))
{var ex__10733__auto__ = e44197;var statearr_44198_44211 = state_44176;(statearr_44198_44211[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44212 = state_44176;
state_44176 = G__44212;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_44176){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_44176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_44199 = f__10794__auto__.call(null);(statearr_44199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___44200);
return statearr_44199;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___44305 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_44282){var state_val_44283 = (state_44282[1]);if((state_val_44283 === 1))
{var inst_44259 = 0;var state_44282__$1 = (function (){var statearr_44284 = state_44282;(statearr_44284[7] = inst_44259);
return statearr_44284;
})();var statearr_44285_44306 = state_44282__$1;(statearr_44285_44306[2] = null);
(statearr_44285_44306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 2))
{var inst_44259 = (state_44282[7]);var inst_44261 = (inst_44259 < n);var state_44282__$1 = state_44282;if(cljs.core.truth_(inst_44261))
{var statearr_44286_44307 = state_44282__$1;(statearr_44286_44307[1] = 4);
} else
{var statearr_44287_44308 = state_44282__$1;(statearr_44287_44308[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 3))
{var inst_44279 = (state_44282[2]);var inst_44280 = cljs.core.async.close_BANG_.call(null,out);var state_44282__$1 = (function (){var statearr_44288 = state_44282;(statearr_44288[8] = inst_44279);
return statearr_44288;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44282__$1,inst_44280);
} else
{if((state_val_44283 === 4))
{var state_44282__$1 = state_44282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44282__$1,7,ch);
} else
{if((state_val_44283 === 5))
{var state_44282__$1 = state_44282;var statearr_44289_44309 = state_44282__$1;(statearr_44289_44309[2] = null);
(statearr_44289_44309[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 6))
{var inst_44277 = (state_44282[2]);var state_44282__$1 = state_44282;var statearr_44290_44310 = state_44282__$1;(statearr_44290_44310[2] = inst_44277);
(statearr_44290_44310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 7))
{var inst_44264 = (state_44282[9]);var inst_44264__$1 = (state_44282[2]);var inst_44265 = (inst_44264__$1 == null);var inst_44266 = cljs.core.not.call(null,inst_44265);var state_44282__$1 = (function (){var statearr_44291 = state_44282;(statearr_44291[9] = inst_44264__$1);
return statearr_44291;
})();if(inst_44266)
{var statearr_44292_44311 = state_44282__$1;(statearr_44292_44311[1] = 8);
} else
{var statearr_44293_44312 = state_44282__$1;(statearr_44293_44312[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 8))
{var inst_44264 = (state_44282[9]);var state_44282__$1 = state_44282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44282__$1,11,out,inst_44264);
} else
{if((state_val_44283 === 9))
{var state_44282__$1 = state_44282;var statearr_44294_44313 = state_44282__$1;(statearr_44294_44313[2] = null);
(statearr_44294_44313[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 10))
{var inst_44274 = (state_44282[2]);var state_44282__$1 = state_44282;var statearr_44295_44314 = state_44282__$1;(statearr_44295_44314[2] = inst_44274);
(statearr_44295_44314[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44283 === 11))
{var inst_44259 = (state_44282[7]);var inst_44269 = (state_44282[2]);var inst_44270 = (inst_44259 + 1);var inst_44259__$1 = inst_44270;var state_44282__$1 = (function (){var statearr_44296 = state_44282;(statearr_44296[10] = inst_44269);
(statearr_44296[7] = inst_44259__$1);
return statearr_44296;
})();var statearr_44297_44315 = state_44282__$1;(statearr_44297_44315[2] = null);
(statearr_44297_44315[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_44301 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44301[0] = state_machine__10730__auto__);
(statearr_44301[1] = 1);
return statearr_44301;
});
var state_machine__10730__auto____1 = (function (state_44282){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_44282);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e44302){if((e44302 instanceof Object))
{var ex__10733__auto__ = e44302;var statearr_44303_44316 = state_44282;(statearr_44303_44316[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44317 = state_44282;
state_44282 = G__44317;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_44282){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_44282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_44304 = f__10794__auto__.call(null);(statearr_44304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___44305);
return statearr_44304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___44414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_44389){var state_val_44390 = (state_44389[1]);if((state_val_44390 === 1))
{var inst_44366 = null;var state_44389__$1 = (function (){var statearr_44391 = state_44389;(statearr_44391[7] = inst_44366);
return statearr_44391;
})();var statearr_44392_44415 = state_44389__$1;(statearr_44392_44415[2] = null);
(statearr_44392_44415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 2))
{var state_44389__$1 = state_44389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44389__$1,4,ch);
} else
{if((state_val_44390 === 3))
{var inst_44386 = (state_44389[2]);var inst_44387 = cljs.core.async.close_BANG_.call(null,out);var state_44389__$1 = (function (){var statearr_44393 = state_44389;(statearr_44393[8] = inst_44386);
return statearr_44393;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44389__$1,inst_44387);
} else
{if((state_val_44390 === 4))
{var inst_44369 = (state_44389[9]);var inst_44369__$1 = (state_44389[2]);var inst_44370 = (inst_44369__$1 == null);var inst_44371 = cljs.core.not.call(null,inst_44370);var state_44389__$1 = (function (){var statearr_44394 = state_44389;(statearr_44394[9] = inst_44369__$1);
return statearr_44394;
})();if(inst_44371)
{var statearr_44395_44416 = state_44389__$1;(statearr_44395_44416[1] = 5);
} else
{var statearr_44396_44417 = state_44389__$1;(statearr_44396_44417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 5))
{var inst_44369 = (state_44389[9]);var inst_44366 = (state_44389[7]);var inst_44373 = cljs.core._EQ_.call(null,inst_44369,inst_44366);var state_44389__$1 = state_44389;if(inst_44373)
{var statearr_44397_44418 = state_44389__$1;(statearr_44397_44418[1] = 8);
} else
{var statearr_44398_44419 = state_44389__$1;(statearr_44398_44419[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 6))
{var state_44389__$1 = state_44389;var statearr_44400_44420 = state_44389__$1;(statearr_44400_44420[2] = null);
(statearr_44400_44420[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 7))
{var inst_44384 = (state_44389[2]);var state_44389__$1 = state_44389;var statearr_44401_44421 = state_44389__$1;(statearr_44401_44421[2] = inst_44384);
(statearr_44401_44421[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 8))
{var inst_44366 = (state_44389[7]);var tmp44399 = inst_44366;var inst_44366__$1 = tmp44399;var state_44389__$1 = (function (){var statearr_44402 = state_44389;(statearr_44402[7] = inst_44366__$1);
return statearr_44402;
})();var statearr_44403_44422 = state_44389__$1;(statearr_44403_44422[2] = null);
(statearr_44403_44422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 9))
{var inst_44369 = (state_44389[9]);var state_44389__$1 = state_44389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44389__$1,11,out,inst_44369);
} else
{if((state_val_44390 === 10))
{var inst_44381 = (state_44389[2]);var state_44389__$1 = state_44389;var statearr_44404_44423 = state_44389__$1;(statearr_44404_44423[2] = inst_44381);
(statearr_44404_44423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44390 === 11))
{var inst_44369 = (state_44389[9]);var inst_44378 = (state_44389[2]);var inst_44366 = inst_44369;var state_44389__$1 = (function (){var statearr_44405 = state_44389;(statearr_44405[10] = inst_44378);
(statearr_44405[7] = inst_44366);
return statearr_44405;
})();var statearr_44406_44424 = state_44389__$1;(statearr_44406_44424[2] = null);
(statearr_44406_44424[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_44410 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44410[0] = state_machine__10730__auto__);
(statearr_44410[1] = 1);
return statearr_44410;
});
var state_machine__10730__auto____1 = (function (state_44389){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_44389);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e44411){if((e44411 instanceof Object))
{var ex__10733__auto__ = e44411;var statearr_44412_44425 = state_44389;(statearr_44412_44425[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44426 = state_44389;
state_44389 = G__44426;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_44389){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_44389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_44413 = f__10794__auto__.call(null);(statearr_44413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___44414);
return statearr_44413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___44561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_44531){var state_val_44532 = (state_44531[1]);if((state_val_44532 === 1))
{var inst_44494 = (new Array(n));var inst_44495 = inst_44494;var inst_44496 = 0;var state_44531__$1 = (function (){var statearr_44533 = state_44531;(statearr_44533[7] = inst_44496);
(statearr_44533[8] = inst_44495);
return statearr_44533;
})();var statearr_44534_44562 = state_44531__$1;(statearr_44534_44562[2] = null);
(statearr_44534_44562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 2))
{var state_44531__$1 = state_44531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44531__$1,4,ch);
} else
{if((state_val_44532 === 3))
{var inst_44529 = (state_44531[2]);var state_44531__$1 = state_44531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44531__$1,inst_44529);
} else
{if((state_val_44532 === 4))
{var inst_44499 = (state_44531[9]);var inst_44499__$1 = (state_44531[2]);var inst_44500 = (inst_44499__$1 == null);var inst_44501 = cljs.core.not.call(null,inst_44500);var state_44531__$1 = (function (){var statearr_44535 = state_44531;(statearr_44535[9] = inst_44499__$1);
return statearr_44535;
})();if(inst_44501)
{var statearr_44536_44563 = state_44531__$1;(statearr_44536_44563[1] = 5);
} else
{var statearr_44537_44564 = state_44531__$1;(statearr_44537_44564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 5))
{var inst_44499 = (state_44531[9]);var inst_44496 = (state_44531[7]);var inst_44504 = (state_44531[10]);var inst_44495 = (state_44531[8]);var inst_44503 = (inst_44495[inst_44496] = inst_44499);var inst_44504__$1 = (inst_44496 + 1);var inst_44505 = (inst_44504__$1 < n);var state_44531__$1 = (function (){var statearr_44538 = state_44531;(statearr_44538[10] = inst_44504__$1);
(statearr_44538[11] = inst_44503);
return statearr_44538;
})();if(cljs.core.truth_(inst_44505))
{var statearr_44539_44565 = state_44531__$1;(statearr_44539_44565[1] = 8);
} else
{var statearr_44540_44566 = state_44531__$1;(statearr_44540_44566[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 6))
{var inst_44496 = (state_44531[7]);var inst_44517 = (inst_44496 > 0);var state_44531__$1 = state_44531;if(cljs.core.truth_(inst_44517))
{var statearr_44542_44567 = state_44531__$1;(statearr_44542_44567[1] = 12);
} else
{var statearr_44543_44568 = state_44531__$1;(statearr_44543_44568[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 7))
{var inst_44527 = (state_44531[2]);var state_44531__$1 = state_44531;var statearr_44544_44569 = state_44531__$1;(statearr_44544_44569[2] = inst_44527);
(statearr_44544_44569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 8))
{var inst_44504 = (state_44531[10]);var inst_44495 = (state_44531[8]);var tmp44541 = inst_44495;var inst_44495__$1 = tmp44541;var inst_44496 = inst_44504;var state_44531__$1 = (function (){var statearr_44545 = state_44531;(statearr_44545[7] = inst_44496);
(statearr_44545[8] = inst_44495__$1);
return statearr_44545;
})();var statearr_44546_44570 = state_44531__$1;(statearr_44546_44570[2] = null);
(statearr_44546_44570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 9))
{var inst_44495 = (state_44531[8]);var inst_44509 = cljs.core.vec.call(null,inst_44495);var state_44531__$1 = state_44531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44531__$1,11,out,inst_44509);
} else
{if((state_val_44532 === 10))
{var inst_44515 = (state_44531[2]);var state_44531__$1 = state_44531;var statearr_44547_44571 = state_44531__$1;(statearr_44547_44571[2] = inst_44515);
(statearr_44547_44571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 11))
{var inst_44511 = (state_44531[2]);var inst_44512 = (new Array(n));var inst_44495 = inst_44512;var inst_44496 = 0;var state_44531__$1 = (function (){var statearr_44548 = state_44531;(statearr_44548[7] = inst_44496);
(statearr_44548[8] = inst_44495);
(statearr_44548[12] = inst_44511);
return statearr_44548;
})();var statearr_44549_44572 = state_44531__$1;(statearr_44549_44572[2] = null);
(statearr_44549_44572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 12))
{var inst_44495 = (state_44531[8]);var inst_44519 = cljs.core.vec.call(null,inst_44495);var state_44531__$1 = state_44531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44531__$1,15,out,inst_44519);
} else
{if((state_val_44532 === 13))
{var state_44531__$1 = state_44531;var statearr_44550_44573 = state_44531__$1;(statearr_44550_44573[2] = null);
(statearr_44550_44573[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 14))
{var inst_44524 = (state_44531[2]);var inst_44525 = cljs.core.async.close_BANG_.call(null,out);var state_44531__$1 = (function (){var statearr_44551 = state_44531;(statearr_44551[13] = inst_44524);
return statearr_44551;
})();var statearr_44552_44574 = state_44531__$1;(statearr_44552_44574[2] = inst_44525);
(statearr_44552_44574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44532 === 15))
{var inst_44521 = (state_44531[2]);var state_44531__$1 = state_44531;var statearr_44553_44575 = state_44531__$1;(statearr_44553_44575[2] = inst_44521);
(statearr_44553_44575[1] = 14);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_44557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44557[0] = state_machine__10730__auto__);
(statearr_44557[1] = 1);
return statearr_44557;
});
var state_machine__10730__auto____1 = (function (state_44531){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_44531);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e44558){if((e44558 instanceof Object))
{var ex__10733__auto__ = e44558;var statearr_44559_44576 = state_44531;(statearr_44559_44576[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44577 = state_44531;
state_44531 = G__44577;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_44531){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_44531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_44560 = f__10794__auto__.call(null);(statearr_44560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___44561);
return statearr_44560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___44720 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_44690){var state_val_44691 = (state_44690[1]);if((state_val_44691 === 1))
{var inst_44649 = [];var inst_44650 = inst_44649;var inst_44651 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_44690__$1 = (function (){var statearr_44692 = state_44690;(statearr_44692[7] = inst_44651);
(statearr_44692[8] = inst_44650);
return statearr_44692;
})();var statearr_44693_44721 = state_44690__$1;(statearr_44693_44721[2] = null);
(statearr_44693_44721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 2))
{var state_44690__$1 = state_44690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44690__$1,4,ch);
} else
{if((state_val_44691 === 3))
{var inst_44688 = (state_44690[2]);var state_44690__$1 = state_44690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44690__$1,inst_44688);
} else
{if((state_val_44691 === 4))
{var inst_44654 = (state_44690[9]);var inst_44654__$1 = (state_44690[2]);var inst_44655 = (inst_44654__$1 == null);var inst_44656 = cljs.core.not.call(null,inst_44655);var state_44690__$1 = (function (){var statearr_44694 = state_44690;(statearr_44694[9] = inst_44654__$1);
return statearr_44694;
})();if(inst_44656)
{var statearr_44695_44722 = state_44690__$1;(statearr_44695_44722[1] = 5);
} else
{var statearr_44696_44723 = state_44690__$1;(statearr_44696_44723[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 5))
{var inst_44658 = (state_44690[10]);var inst_44651 = (state_44690[7]);var inst_44654 = (state_44690[9]);var inst_44658__$1 = f.call(null,inst_44654);var inst_44659 = cljs.core._EQ_.call(null,inst_44658__$1,inst_44651);var inst_44660 = cljs.core.keyword_identical_QMARK_.call(null,inst_44651,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_44661 = (inst_44659) || (inst_44660);var state_44690__$1 = (function (){var statearr_44697 = state_44690;(statearr_44697[10] = inst_44658__$1);
return statearr_44697;
})();if(cljs.core.truth_(inst_44661))
{var statearr_44698_44724 = state_44690__$1;(statearr_44698_44724[1] = 8);
} else
{var statearr_44699_44725 = state_44690__$1;(statearr_44699_44725[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 6))
{var inst_44650 = (state_44690[8]);var inst_44675 = inst_44650.length;var inst_44676 = (inst_44675 > 0);var state_44690__$1 = state_44690;if(cljs.core.truth_(inst_44676))
{var statearr_44701_44726 = state_44690__$1;(statearr_44701_44726[1] = 12);
} else
{var statearr_44702_44727 = state_44690__$1;(statearr_44702_44727[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 7))
{var inst_44686 = (state_44690[2]);var state_44690__$1 = state_44690;var statearr_44703_44728 = state_44690__$1;(statearr_44703_44728[2] = inst_44686);
(statearr_44703_44728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 8))
{var inst_44658 = (state_44690[10]);var inst_44650 = (state_44690[8]);var inst_44654 = (state_44690[9]);var inst_44663 = inst_44650.push(inst_44654);var tmp44700 = inst_44650;var inst_44650__$1 = tmp44700;var inst_44651 = inst_44658;var state_44690__$1 = (function (){var statearr_44704 = state_44690;(statearr_44704[7] = inst_44651);
(statearr_44704[8] = inst_44650__$1);
(statearr_44704[11] = inst_44663);
return statearr_44704;
})();var statearr_44705_44729 = state_44690__$1;(statearr_44705_44729[2] = null);
(statearr_44705_44729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 9))
{var inst_44650 = (state_44690[8]);var inst_44666 = cljs.core.vec.call(null,inst_44650);var state_44690__$1 = state_44690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44690__$1,11,out,inst_44666);
} else
{if((state_val_44691 === 10))
{var inst_44673 = (state_44690[2]);var state_44690__$1 = state_44690;var statearr_44706_44730 = state_44690__$1;(statearr_44706_44730[2] = inst_44673);
(statearr_44706_44730[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 11))
{var inst_44658 = (state_44690[10]);var inst_44654 = (state_44690[9]);var inst_44668 = (state_44690[2]);var inst_44669 = [];var inst_44670 = inst_44669.push(inst_44654);var inst_44650 = inst_44669;var inst_44651 = inst_44658;var state_44690__$1 = (function (){var statearr_44707 = state_44690;(statearr_44707[7] = inst_44651);
(statearr_44707[8] = inst_44650);
(statearr_44707[12] = inst_44668);
(statearr_44707[13] = inst_44670);
return statearr_44707;
})();var statearr_44708_44731 = state_44690__$1;(statearr_44708_44731[2] = null);
(statearr_44708_44731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 12))
{var inst_44650 = (state_44690[8]);var inst_44678 = cljs.core.vec.call(null,inst_44650);var state_44690__$1 = state_44690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44690__$1,15,out,inst_44678);
} else
{if((state_val_44691 === 13))
{var state_44690__$1 = state_44690;var statearr_44709_44732 = state_44690__$1;(statearr_44709_44732[2] = null);
(statearr_44709_44732[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 14))
{var inst_44683 = (state_44690[2]);var inst_44684 = cljs.core.async.close_BANG_.call(null,out);var state_44690__$1 = (function (){var statearr_44710 = state_44690;(statearr_44710[14] = inst_44683);
return statearr_44710;
})();var statearr_44711_44733 = state_44690__$1;(statearr_44711_44733[2] = inst_44684);
(statearr_44711_44733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44691 === 15))
{var inst_44680 = (state_44690[2]);var state_44690__$1 = state_44690;var statearr_44712_44734 = state_44690__$1;(statearr_44712_44734[2] = inst_44680);
(statearr_44712_44734[1] = 14);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_44716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44716[0] = state_machine__10730__auto__);
(statearr_44716[1] = 1);
return statearr_44716;
});
var state_machine__10730__auto____1 = (function (state_44690){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_44690);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e44717){if((e44717 instanceof Object))
{var ex__10733__auto__ = e44717;var statearr_44718_44735 = state_44690;(statearr_44718_44735[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44736 = state_44690;
state_44690 = G__44736;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_44690){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_44690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_44719 = f__10794__auto__.call(null);(statearr_44719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___44720);
return statearr_44719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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