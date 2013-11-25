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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t141757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141757 = (function (f,fn_handler,meta141758){
this.f = f;
this.fn_handler = fn_handler;
this.meta141758 = meta141758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141757.cljs$lang$type = true;
cljs.core.async.t141757.cljs$lang$ctorStr = "cljs.core.async/t141757";
cljs.core.async.t141757.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141757");
});
cljs.core.async.t141757.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t141757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t141757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t141757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141759){var self__ = this;
var _141759__$1 = this;return self__.meta141758;
});
cljs.core.async.t141757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141759,meta141758__$1){var self__ = this;
var _141759__$1 = this;return (new cljs.core.async.t141757(self__.f,self__.fn_handler,meta141758__$1));
});
cljs.core.async.__GT_t141757 = (function __GT_t141757(f__$1,fn_handler__$1,meta141758){return (new cljs.core.async.t141757(f__$1,fn_handler__$1,meta141758));
});
}
return (new cljs.core.async.t141757(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__141761 = buff;if(G__141761)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__141761.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__141761.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__141761);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__141761);
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
{var val_141762 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_141762);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_141762);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___141763 = n;var x_141764 = 0;while(true){
if((x_141764 < n__7112__auto___141763))
{(a[x_141764] = 0);
{
var G__141765 = (x_141764 + 1);
x_141764 = G__141765;
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
var G__141766 = (i + 1);
i = G__141766;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t141770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141770 = (function (flag,alt_flag,meta141771){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta141771 = meta141771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141770.cljs$lang$type = true;
cljs.core.async.t141770.cljs$lang$ctorStr = "cljs.core.async/t141770";
cljs.core.async.t141770.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141770");
});
cljs.core.async.t141770.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t141770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t141770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t141770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141772){var self__ = this;
var _141772__$1 = this;return self__.meta141771;
});
cljs.core.async.t141770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141772,meta141771__$1){var self__ = this;
var _141772__$1 = this;return (new cljs.core.async.t141770(self__.flag,self__.alt_flag,meta141771__$1));
});
cljs.core.async.__GT_t141770 = (function __GT_t141770(flag__$1,alt_flag__$1,meta141771){return (new cljs.core.async.t141770(flag__$1,alt_flag__$1,meta141771));
});
}
return (new cljs.core.async.t141770(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t141776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141776 = (function (cb,flag,alt_handler,meta141777){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta141777 = meta141777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141776.cljs$lang$type = true;
cljs.core.async.t141776.cljs$lang$ctorStr = "cljs.core.async/t141776";
cljs.core.async.t141776.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141776");
});
cljs.core.async.t141776.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t141776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t141776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t141776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141778){var self__ = this;
var _141778__$1 = this;return self__.meta141777;
});
cljs.core.async.t141776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141778,meta141777__$1){var self__ = this;
var _141778__$1 = this;return (new cljs.core.async.t141776(self__.cb,self__.flag,self__.alt_handler,meta141777__$1));
});
cljs.core.async.__GT_t141776 = (function __GT_t141776(cb__$1,flag__$1,alt_handler__$1,meta141777){return (new cljs.core.async.t141776(cb__$1,flag__$1,alt_handler__$1,meta141777));
});
}
return (new cljs.core.async.t141776(cb,flag,alt_handler,null));
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
return (function (p1__141779_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__141779_SHARP_,port], null));
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
var G__141780 = (i + 1);
i = G__141780;
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
var alts_BANG___delegate = function (ports,p__141781){var map__141783 = p__141781;var map__141783__$1 = ((cljs.core.seq_QMARK_.call(null,map__141783))?cljs.core.apply.call(null,cljs.core.hash_map,map__141783):map__141783);var opts = map__141783__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__141781 = null;if (arguments.length > 1) {
  p__141781 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__141781);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__141784){
var ports = cljs.core.first(arglist__141784);
var p__141781 = cljs.core.rest(arglist__141784);
return alts_BANG___delegate(ports,p__141781);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t141792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141792 = (function (ch,f,map_LT_,meta141793){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta141793 = meta141793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141792.cljs$lang$type = true;
cljs.core.async.t141792.cljs$lang$ctorStr = "cljs.core.async/t141792";
cljs.core.async.t141792.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141792");
});
cljs.core.async.t141792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t141792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t141792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t141792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t141795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141795 = (function (fn1,_,meta141793,ch,f,map_LT_,meta141796){
this.fn1 = fn1;
this._ = _;
this.meta141793 = meta141793;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta141796 = meta141796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141795.cljs$lang$type = true;
cljs.core.async.t141795.cljs$lang$ctorStr = "cljs.core.async/t141795";
cljs.core.async.t141795.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141795");
});
cljs.core.async.t141795.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t141795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t141795.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t141795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__141785_SHARP_){return f1.call(null,(((p1__141785_SHARP_ == null))?null:self__.f.call(null,p1__141785_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t141795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141797){var self__ = this;
var _141797__$1 = this;return self__.meta141796;
});
cljs.core.async.t141795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141797,meta141796__$1){var self__ = this;
var _141797__$1 = this;return (new cljs.core.async.t141795(self__.fn1,self__._,self__.meta141793,self__.ch,self__.f,self__.map_LT_,meta141796__$1));
});
cljs.core.async.__GT_t141795 = (function __GT_t141795(fn1__$1,___$2,meta141793__$1,ch__$2,f__$2,map_LT___$2,meta141796){return (new cljs.core.async.t141795(fn1__$1,___$2,meta141793__$1,ch__$2,f__$2,map_LT___$2,meta141796));
});
}
return (new cljs.core.async.t141795(fn1,___$1,self__.meta141793,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t141792.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t141792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t141792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141794){var self__ = this;
var _141794__$1 = this;return self__.meta141793;
});
cljs.core.async.t141792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141794,meta141793__$1){var self__ = this;
var _141794__$1 = this;return (new cljs.core.async.t141792(self__.ch,self__.f,self__.map_LT_,meta141793__$1));
});
cljs.core.async.__GT_t141792 = (function __GT_t141792(ch__$1,f__$1,map_LT___$1,meta141793){return (new cljs.core.async.t141792(ch__$1,f__$1,map_LT___$1,meta141793));
});
}
return (new cljs.core.async.t141792(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t141801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141801 = (function (ch,f,map_GT_,meta141802){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta141802 = meta141802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141801.cljs$lang$type = true;
cljs.core.async.t141801.cljs$lang$ctorStr = "cljs.core.async/t141801";
cljs.core.async.t141801.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141801");
});
cljs.core.async.t141801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t141801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t141801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t141801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t141801.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t141801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t141801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141803){var self__ = this;
var _141803__$1 = this;return self__.meta141802;
});
cljs.core.async.t141801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141803,meta141802__$1){var self__ = this;
var _141803__$1 = this;return (new cljs.core.async.t141801(self__.ch,self__.f,self__.map_GT_,meta141802__$1));
});
cljs.core.async.__GT_t141801 = (function __GT_t141801(ch__$1,f__$1,map_GT___$1,meta141802){return (new cljs.core.async.t141801(ch__$1,f__$1,map_GT___$1,meta141802));
});
}
return (new cljs.core.async.t141801(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t141807 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t141807 = (function (ch,p,filter_GT_,meta141808){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta141808 = meta141808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t141807.cljs$lang$type = true;
cljs.core.async.t141807.cljs$lang$ctorStr = "cljs.core.async/t141807";
cljs.core.async.t141807.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t141807");
});
cljs.core.async.t141807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t141807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t141807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t141807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t141807.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t141807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t141807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_141809){var self__ = this;
var _141809__$1 = this;return self__.meta141808;
});
cljs.core.async.t141807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_141809,meta141808__$1){var self__ = this;
var _141809__$1 = this;return (new cljs.core.async.t141807(self__.ch,self__.p,self__.filter_GT_,meta141808__$1));
});
cljs.core.async.__GT_t141807 = (function __GT_t141807(ch__$1,p__$1,filter_GT___$1,meta141808){return (new cljs.core.async.t141807(ch__$1,p__$1,filter_GT___$1,meta141808));
});
}
return (new cljs.core.async.t141807(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___141892 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_141871){var state_val_141872 = (state_141871[1]);if((state_val_141872 === 1))
{var state_141871__$1 = state_141871;var statearr_141873_141893 = state_141871__$1;(statearr_141873_141893[2] = null);
(statearr_141873_141893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 2))
{var state_141871__$1 = state_141871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_141871__$1,4,ch);
} else
{if((state_val_141872 === 3))
{var inst_141869 = (state_141871[2]);var state_141871__$1 = state_141871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_141871__$1,inst_141869);
} else
{if((state_val_141872 === 4))
{var inst_141853 = (state_141871[7]);var inst_141853__$1 = (state_141871[2]);var inst_141854 = (inst_141853__$1 == null);var state_141871__$1 = (function (){var statearr_141874 = state_141871;(statearr_141874[7] = inst_141853__$1);
return statearr_141874;
})();if(cljs.core.truth_(inst_141854))
{var statearr_141875_141894 = state_141871__$1;(statearr_141875_141894[1] = 5);
} else
{var statearr_141876_141895 = state_141871__$1;(statearr_141876_141895[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 5))
{var inst_141856 = cljs.core.async.close_BANG_.call(null,out);var state_141871__$1 = state_141871;var statearr_141877_141896 = state_141871__$1;(statearr_141877_141896[2] = inst_141856);
(statearr_141877_141896[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 6))
{var inst_141853 = (state_141871[7]);var inst_141858 = p.call(null,inst_141853);var state_141871__$1 = state_141871;if(cljs.core.truth_(inst_141858))
{var statearr_141878_141897 = state_141871__$1;(statearr_141878_141897[1] = 8);
} else
{var statearr_141879_141898 = state_141871__$1;(statearr_141879_141898[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 7))
{var inst_141867 = (state_141871[2]);var state_141871__$1 = state_141871;var statearr_141880_141899 = state_141871__$1;(statearr_141880_141899[2] = inst_141867);
(statearr_141880_141899[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 8))
{var inst_141853 = (state_141871[7]);var state_141871__$1 = state_141871;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_141871__$1,11,out,inst_141853);
} else
{if((state_val_141872 === 9))
{var state_141871__$1 = state_141871;var statearr_141881_141900 = state_141871__$1;(statearr_141881_141900[2] = null);
(statearr_141881_141900[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 10))
{var inst_141864 = (state_141871[2]);var state_141871__$1 = (function (){var statearr_141882 = state_141871;(statearr_141882[8] = inst_141864);
return statearr_141882;
})();var statearr_141883_141901 = state_141871__$1;(statearr_141883_141901[2] = null);
(statearr_141883_141901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_141872 === 11))
{var inst_141861 = (state_141871[2]);var state_141871__$1 = state_141871;var statearr_141884_141902 = state_141871__$1;(statearr_141884_141902[2] = inst_141861);
(statearr_141884_141902[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_141888 = (new Array(9));(statearr_141888[0] = state_machine__13310__auto__);
(statearr_141888[1] = 1);
return statearr_141888;
});
var state_machine__13310__auto____1 = (function (state_141871){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_141871);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e141889){if((e141889 instanceof Object))
{var ex__13313__auto__ = e141889;var statearr_141890_141903 = state_141871;(statearr_141890_141903[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_141871);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e141889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__141904 = state_141871;
state_141871 = G__141904;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_141871){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_141871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_141891 = f__13410__auto__.call(null);(statearr_141891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___141892);
return statearr_141891;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_142056){var state_val_142057 = (state_142056[1]);if((state_val_142057 === 1))
{var state_142056__$1 = state_142056;var statearr_142058_142095 = state_142056__$1;(statearr_142058_142095[2] = null);
(statearr_142058_142095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 2))
{var state_142056__$1 = state_142056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142056__$1,4,in$);
} else
{if((state_val_142057 === 3))
{var inst_142054 = (state_142056[2]);var state_142056__$1 = state_142056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142056__$1,inst_142054);
} else
{if((state_val_142057 === 4))
{var inst_142002 = (state_142056[7]);var inst_142002__$1 = (state_142056[2]);var inst_142003 = (inst_142002__$1 == null);var state_142056__$1 = (function (){var statearr_142059 = state_142056;(statearr_142059[7] = inst_142002__$1);
return statearr_142059;
})();if(cljs.core.truth_(inst_142003))
{var statearr_142060_142096 = state_142056__$1;(statearr_142060_142096[1] = 5);
} else
{var statearr_142061_142097 = state_142056__$1;(statearr_142061_142097[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 5))
{var inst_142005 = cljs.core.async.close_BANG_.call(null,out);var state_142056__$1 = state_142056;var statearr_142062_142098 = state_142056__$1;(statearr_142062_142098[2] = inst_142005);
(statearr_142062_142098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 6))
{var inst_142002 = (state_142056[7]);var inst_142007 = f.call(null,inst_142002);var inst_142012 = cljs.core.seq.call(null,inst_142007);var inst_142013 = inst_142012;var inst_142014 = null;var inst_142015 = 0;var inst_142016 = 0;var state_142056__$1 = (function (){var statearr_142063 = state_142056;(statearr_142063[8] = inst_142013);
(statearr_142063[9] = inst_142014);
(statearr_142063[10] = inst_142015);
(statearr_142063[11] = inst_142016);
return statearr_142063;
})();var statearr_142064_142099 = state_142056__$1;(statearr_142064_142099[2] = null);
(statearr_142064_142099[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 7))
{var inst_142052 = (state_142056[2]);var state_142056__$1 = state_142056;var statearr_142065_142100 = state_142056__$1;(statearr_142065_142100[2] = inst_142052);
(statearr_142065_142100[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 8))
{var inst_142015 = (state_142056[10]);var inst_142016 = (state_142056[11]);var inst_142018 = (inst_142016 < inst_142015);var inst_142019 = inst_142018;var state_142056__$1 = state_142056;if(cljs.core.truth_(inst_142019))
{var statearr_142066_142101 = state_142056__$1;(statearr_142066_142101[1] = 10);
} else
{var statearr_142067_142102 = state_142056__$1;(statearr_142067_142102[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 9))
{var inst_142049 = (state_142056[2]);var state_142056__$1 = (function (){var statearr_142068 = state_142056;(statearr_142068[12] = inst_142049);
return statearr_142068;
})();var statearr_142069_142103 = state_142056__$1;(statearr_142069_142103[2] = null);
(statearr_142069_142103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 10))
{var inst_142014 = (state_142056[9]);var inst_142016 = (state_142056[11]);var inst_142021 = cljs.core._nth.call(null,inst_142014,inst_142016);var state_142056__$1 = state_142056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142056__$1,13,out,inst_142021);
} else
{if((state_val_142057 === 11))
{var inst_142027 = (state_142056[13]);var inst_142013 = (state_142056[8]);var inst_142027__$1 = cljs.core.seq.call(null,inst_142013);var state_142056__$1 = (function (){var statearr_142073 = state_142056;(statearr_142073[13] = inst_142027__$1);
return statearr_142073;
})();if(inst_142027__$1)
{var statearr_142074_142104 = state_142056__$1;(statearr_142074_142104[1] = 14);
} else
{var statearr_142075_142105 = state_142056__$1;(statearr_142075_142105[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 12))
{var inst_142047 = (state_142056[2]);var state_142056__$1 = state_142056;var statearr_142076_142106 = state_142056__$1;(statearr_142076_142106[2] = inst_142047);
(statearr_142076_142106[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 13))
{var inst_142013 = (state_142056[8]);var inst_142014 = (state_142056[9]);var inst_142015 = (state_142056[10]);var inst_142016 = (state_142056[11]);var inst_142023 = (state_142056[2]);var inst_142024 = (inst_142016 + 1);var tmp142070 = inst_142013;var tmp142071 = inst_142014;var tmp142072 = inst_142015;var inst_142013__$1 = tmp142070;var inst_142014__$1 = tmp142071;var inst_142015__$1 = tmp142072;var inst_142016__$1 = inst_142024;var state_142056__$1 = (function (){var statearr_142077 = state_142056;(statearr_142077[8] = inst_142013__$1);
(statearr_142077[14] = inst_142023);
(statearr_142077[9] = inst_142014__$1);
(statearr_142077[10] = inst_142015__$1);
(statearr_142077[11] = inst_142016__$1);
return statearr_142077;
})();var statearr_142078_142107 = state_142056__$1;(statearr_142078_142107[2] = null);
(statearr_142078_142107[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 14))
{var inst_142027 = (state_142056[13]);var inst_142029 = cljs.core.chunked_seq_QMARK_.call(null,inst_142027);var state_142056__$1 = state_142056;if(inst_142029)
{var statearr_142079_142108 = state_142056__$1;(statearr_142079_142108[1] = 17);
} else
{var statearr_142080_142109 = state_142056__$1;(statearr_142080_142109[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 15))
{var state_142056__$1 = state_142056;var statearr_142081_142110 = state_142056__$1;(statearr_142081_142110[2] = null);
(statearr_142081_142110[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 16))
{var inst_142045 = (state_142056[2]);var state_142056__$1 = state_142056;var statearr_142082_142111 = state_142056__$1;(statearr_142082_142111[2] = inst_142045);
(statearr_142082_142111[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 17))
{var inst_142027 = (state_142056[13]);var inst_142031 = cljs.core.chunk_first.call(null,inst_142027);var inst_142032 = cljs.core.chunk_rest.call(null,inst_142027);var inst_142033 = cljs.core.count.call(null,inst_142031);var inst_142013 = inst_142032;var inst_142014 = inst_142031;var inst_142015 = inst_142033;var inst_142016 = 0;var state_142056__$1 = (function (){var statearr_142083 = state_142056;(statearr_142083[8] = inst_142013);
(statearr_142083[9] = inst_142014);
(statearr_142083[10] = inst_142015);
(statearr_142083[11] = inst_142016);
return statearr_142083;
})();var statearr_142084_142112 = state_142056__$1;(statearr_142084_142112[2] = null);
(statearr_142084_142112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 18))
{var inst_142027 = (state_142056[13]);var inst_142036 = cljs.core.first.call(null,inst_142027);var state_142056__$1 = state_142056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142056__$1,20,out,inst_142036);
} else
{if((state_val_142057 === 19))
{var inst_142042 = (state_142056[2]);var state_142056__$1 = state_142056;var statearr_142085_142113 = state_142056__$1;(statearr_142085_142113[2] = inst_142042);
(statearr_142085_142113[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142057 === 20))
{var inst_142027 = (state_142056[13]);var inst_142038 = (state_142056[2]);var inst_142039 = cljs.core.next.call(null,inst_142027);var inst_142013 = inst_142039;var inst_142014 = null;var inst_142015 = 0;var inst_142016 = 0;var state_142056__$1 = (function (){var statearr_142086 = state_142056;(statearr_142086[15] = inst_142038);
(statearr_142086[8] = inst_142013);
(statearr_142086[9] = inst_142014);
(statearr_142086[10] = inst_142015);
(statearr_142086[11] = inst_142016);
return statearr_142086;
})();var statearr_142087_142114 = state_142056__$1;(statearr_142087_142114[2] = null);
(statearr_142087_142114[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_142091 = (new Array(16));(statearr_142091[0] = state_machine__13310__auto__);
(statearr_142091[1] = 1);
return statearr_142091;
});
var state_machine__13310__auto____1 = (function (state_142056){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_142056);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e142092){if((e142092 instanceof Object))
{var ex__13313__auto__ = e142092;var statearr_142093_142115 = state_142056;(statearr_142093_142115[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e142092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__142116 = state_142056;
state_142056 = G__142116;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_142056){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_142056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_142094 = f__13410__auto__.call(null);(statearr_142094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_142094;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___142197 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_142176){var state_val_142177 = (state_142176[1]);if((state_val_142177 === 1))
{var state_142176__$1 = state_142176;var statearr_142178_142198 = state_142176__$1;(statearr_142178_142198[2] = null);
(statearr_142178_142198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 2))
{var state_142176__$1 = state_142176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142176__$1,4,from);
} else
{if((state_val_142177 === 3))
{var inst_142174 = (state_142176[2]);var state_142176__$1 = state_142176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142176__$1,inst_142174);
} else
{if((state_val_142177 === 4))
{var inst_142159 = (state_142176[7]);var inst_142159__$1 = (state_142176[2]);var inst_142160 = (inst_142159__$1 == null);var state_142176__$1 = (function (){var statearr_142179 = state_142176;(statearr_142179[7] = inst_142159__$1);
return statearr_142179;
})();if(cljs.core.truth_(inst_142160))
{var statearr_142180_142199 = state_142176__$1;(statearr_142180_142199[1] = 5);
} else
{var statearr_142181_142200 = state_142176__$1;(statearr_142181_142200[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 5))
{var state_142176__$1 = state_142176;if(cljs.core.truth_(close_QMARK_))
{var statearr_142182_142201 = state_142176__$1;(statearr_142182_142201[1] = 8);
} else
{var statearr_142183_142202 = state_142176__$1;(statearr_142183_142202[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 6))
{var inst_142159 = (state_142176[7]);var state_142176__$1 = state_142176;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142176__$1,11,to,inst_142159);
} else
{if((state_val_142177 === 7))
{var inst_142172 = (state_142176[2]);var state_142176__$1 = state_142176;var statearr_142184_142203 = state_142176__$1;(statearr_142184_142203[2] = inst_142172);
(statearr_142184_142203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 8))
{var inst_142163 = cljs.core.async.close_BANG_.call(null,to);var state_142176__$1 = state_142176;var statearr_142185_142204 = state_142176__$1;(statearr_142185_142204[2] = inst_142163);
(statearr_142185_142204[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 9))
{var state_142176__$1 = state_142176;var statearr_142186_142205 = state_142176__$1;(statearr_142186_142205[2] = null);
(statearr_142186_142205[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 10))
{var inst_142166 = (state_142176[2]);var state_142176__$1 = state_142176;var statearr_142187_142206 = state_142176__$1;(statearr_142187_142206[2] = inst_142166);
(statearr_142187_142206[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142177 === 11))
{var inst_142169 = (state_142176[2]);var state_142176__$1 = (function (){var statearr_142188 = state_142176;(statearr_142188[8] = inst_142169);
return statearr_142188;
})();var statearr_142189_142207 = state_142176__$1;(statearr_142189_142207[2] = null);
(statearr_142189_142207[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_142193 = (new Array(9));(statearr_142193[0] = state_machine__13310__auto__);
(statearr_142193[1] = 1);
return statearr_142193;
});
var state_machine__13310__auto____1 = (function (state_142176){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_142176);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e142194){if((e142194 instanceof Object))
{var ex__13313__auto__ = e142194;var statearr_142195_142208 = state_142176;(statearr_142195_142208[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142176);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e142194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__142209 = state_142176;
state_142176 = G__142209;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_142176){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_142176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_142196 = f__13410__auto__.call(null);(statearr_142196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___142197);
return statearr_142196;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___142296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_142274){var state_val_142275 = (state_142274[1]);if((state_val_142275 === 1))
{var state_142274__$1 = state_142274;var statearr_142276_142297 = state_142274__$1;(statearr_142276_142297[2] = null);
(statearr_142276_142297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 2))
{var state_142274__$1 = state_142274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142274__$1,4,ch);
} else
{if((state_val_142275 === 3))
{var inst_142272 = (state_142274[2]);var state_142274__$1 = state_142274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142274__$1,inst_142272);
} else
{if((state_val_142275 === 4))
{var inst_142255 = (state_142274[7]);var inst_142255__$1 = (state_142274[2]);var inst_142256 = (inst_142255__$1 == null);var state_142274__$1 = (function (){var statearr_142277 = state_142274;(statearr_142277[7] = inst_142255__$1);
return statearr_142277;
})();if(cljs.core.truth_(inst_142256))
{var statearr_142278_142298 = state_142274__$1;(statearr_142278_142298[1] = 5);
} else
{var statearr_142279_142299 = state_142274__$1;(statearr_142279_142299[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 5))
{var inst_142258 = cljs.core.async.close_BANG_.call(null,tc);var inst_142259 = cljs.core.async.close_BANG_.call(null,fc);var state_142274__$1 = (function (){var statearr_142280 = state_142274;(statearr_142280[8] = inst_142258);
return statearr_142280;
})();var statearr_142281_142300 = state_142274__$1;(statearr_142281_142300[2] = inst_142259);
(statearr_142281_142300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 6))
{var inst_142255 = (state_142274[7]);var inst_142261 = p.call(null,inst_142255);var state_142274__$1 = state_142274;if(cljs.core.truth_(inst_142261))
{var statearr_142282_142301 = state_142274__$1;(statearr_142282_142301[1] = 9);
} else
{var statearr_142283_142302 = state_142274__$1;(statearr_142283_142302[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 7))
{var inst_142270 = (state_142274[2]);var state_142274__$1 = state_142274;var statearr_142284_142303 = state_142274__$1;(statearr_142284_142303[2] = inst_142270);
(statearr_142284_142303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 8))
{var inst_142267 = (state_142274[2]);var state_142274__$1 = (function (){var statearr_142285 = state_142274;(statearr_142285[9] = inst_142267);
return statearr_142285;
})();var statearr_142286_142304 = state_142274__$1;(statearr_142286_142304[2] = null);
(statearr_142286_142304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 9))
{var state_142274__$1 = state_142274;var statearr_142287_142305 = state_142274__$1;(statearr_142287_142305[2] = tc);
(statearr_142287_142305[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 10))
{var state_142274__$1 = state_142274;var statearr_142288_142306 = state_142274__$1;(statearr_142288_142306[2] = fc);
(statearr_142288_142306[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142275 === 11))
{var inst_142255 = (state_142274[7]);var inst_142265 = (state_142274[2]);var state_142274__$1 = state_142274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142274__$1,8,inst_142265,inst_142255);
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
var state_machine__13310__auto____0 = (function (){var statearr_142292 = (new Array(10));(statearr_142292[0] = state_machine__13310__auto__);
(statearr_142292[1] = 1);
return statearr_142292;
});
var state_machine__13310__auto____1 = (function (state_142274){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_142274);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e142293){if((e142293 instanceof Object))
{var ex__13313__auto__ = e142293;var statearr_142294_142307 = state_142274;(statearr_142294_142307[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e142293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__142308 = state_142274;
state_142274 = G__142308;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_142274){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_142274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_142295 = f__13410__auto__.call(null);(statearr_142295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___142296);
return statearr_142295;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_142355){var state_val_142356 = (state_142355[1]);if((state_val_142356 === 7))
{var inst_142351 = (state_142355[2]);var state_142355__$1 = state_142355;var statearr_142357_142373 = state_142355__$1;(statearr_142357_142373[2] = inst_142351);
(statearr_142357_142373[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142356 === 6))
{var inst_142344 = (state_142355[7]);var inst_142341 = (state_142355[8]);var inst_142348 = f.call(null,inst_142341,inst_142344);var inst_142341__$1 = inst_142348;var state_142355__$1 = (function (){var statearr_142358 = state_142355;(statearr_142358[8] = inst_142341__$1);
return statearr_142358;
})();var statearr_142359_142374 = state_142355__$1;(statearr_142359_142374[2] = null);
(statearr_142359_142374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142356 === 5))
{var inst_142341 = (state_142355[8]);var state_142355__$1 = state_142355;var statearr_142360_142375 = state_142355__$1;(statearr_142360_142375[2] = inst_142341);
(statearr_142360_142375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142356 === 4))
{var inst_142344 = (state_142355[7]);var inst_142344__$1 = (state_142355[2]);var inst_142345 = (inst_142344__$1 == null);var state_142355__$1 = (function (){var statearr_142361 = state_142355;(statearr_142361[7] = inst_142344__$1);
return statearr_142361;
})();if(cljs.core.truth_(inst_142345))
{var statearr_142362_142376 = state_142355__$1;(statearr_142362_142376[1] = 5);
} else
{var statearr_142363_142377 = state_142355__$1;(statearr_142363_142377[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142356 === 3))
{var inst_142353 = (state_142355[2]);var state_142355__$1 = state_142355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142355__$1,inst_142353);
} else
{if((state_val_142356 === 2))
{var state_142355__$1 = state_142355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142355__$1,4,ch);
} else
{if((state_val_142356 === 1))
{var inst_142341 = init;var state_142355__$1 = (function (){var statearr_142364 = state_142355;(statearr_142364[8] = inst_142341);
return statearr_142364;
})();var statearr_142365_142378 = state_142355__$1;(statearr_142365_142378[2] = null);
(statearr_142365_142378[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_142369 = (new Array(9));(statearr_142369[0] = state_machine__13310__auto__);
(statearr_142369[1] = 1);
return statearr_142369;
});
var state_machine__13310__auto____1 = (function (state_142355){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_142355);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e142370){if((e142370 instanceof Object))
{var ex__13313__auto__ = e142370;var statearr_142371_142379 = state_142355;(statearr_142371_142379[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142355);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e142370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__142380 = state_142355;
state_142355 = G__142380;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_142355){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_142355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_142372 = f__13410__auto__.call(null);(statearr_142372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_142372;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_142442){var state_val_142443 = (state_142442[1]);if((state_val_142443 === 1))
{var inst_142422 = cljs.core.seq.call(null,coll);var inst_142423 = inst_142422;var state_142442__$1 = (function (){var statearr_142444 = state_142442;(statearr_142444[7] = inst_142423);
return statearr_142444;
})();var statearr_142445_142463 = state_142442__$1;(statearr_142445_142463[2] = null);
(statearr_142445_142463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 2))
{var inst_142423 = (state_142442[7]);var state_142442__$1 = state_142442;if(cljs.core.truth_(inst_142423))
{var statearr_142446_142464 = state_142442__$1;(statearr_142446_142464[1] = 4);
} else
{var statearr_142447_142465 = state_142442__$1;(statearr_142447_142465[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 3))
{var inst_142440 = (state_142442[2]);var state_142442__$1 = state_142442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142442__$1,inst_142440);
} else
{if((state_val_142443 === 4))
{var inst_142423 = (state_142442[7]);var inst_142426 = cljs.core.first.call(null,inst_142423);var state_142442__$1 = state_142442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_142442__$1,7,ch,inst_142426);
} else
{if((state_val_142443 === 5))
{var state_142442__$1 = state_142442;if(cljs.core.truth_(close_QMARK_))
{var statearr_142448_142466 = state_142442__$1;(statearr_142448_142466[1] = 8);
} else
{var statearr_142449_142467 = state_142442__$1;(statearr_142449_142467[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 6))
{var inst_142438 = (state_142442[2]);var state_142442__$1 = state_142442;var statearr_142450_142468 = state_142442__$1;(statearr_142450_142468[2] = inst_142438);
(statearr_142450_142468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 7))
{var inst_142423 = (state_142442[7]);var inst_142428 = (state_142442[2]);var inst_142429 = cljs.core.next.call(null,inst_142423);var inst_142423__$1 = inst_142429;var state_142442__$1 = (function (){var statearr_142451 = state_142442;(statearr_142451[8] = inst_142428);
(statearr_142451[7] = inst_142423__$1);
return statearr_142451;
})();var statearr_142452_142469 = state_142442__$1;(statearr_142452_142469[2] = null);
(statearr_142452_142469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 8))
{var inst_142433 = cljs.core.async.close_BANG_.call(null,ch);var state_142442__$1 = state_142442;var statearr_142453_142470 = state_142442__$1;(statearr_142453_142470[2] = inst_142433);
(statearr_142453_142470[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 9))
{var state_142442__$1 = state_142442;var statearr_142454_142471 = state_142442__$1;(statearr_142454_142471[2] = null);
(statearr_142454_142471[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142443 === 10))
{var inst_142436 = (state_142442[2]);var state_142442__$1 = state_142442;var statearr_142455_142472 = state_142442__$1;(statearr_142455_142472[2] = inst_142436);
(statearr_142455_142472[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_142459 = (new Array(9));(statearr_142459[0] = state_machine__13310__auto__);
(statearr_142459[1] = 1);
return statearr_142459;
});
var state_machine__13310__auto____1 = (function (state_142442){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_142442);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e142460){if((e142460 instanceof Object))
{var ex__13313__auto__ = e142460;var statearr_142461_142473 = state_142442;(statearr_142461_142473[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e142460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__142474 = state_142442;
state_142442 = G__142474;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_142442){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_142442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_142462 = f__13410__auto__.call(null);(statearr_142462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_142462;
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
cljs.core.async.Mux = (function (){var obj142476 = {};return obj142476;
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
cljs.core.async.Mult = (function (){var obj142478 = {};return obj142478;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t142693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t142693 = (function (cs,ch,mult,meta142694){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta142694 = meta142694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t142693.cljs$lang$type = true;
cljs.core.async.t142693.cljs$lang$ctorStr = "cljs.core.async/t142693";
cljs.core.async.t142693.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t142693");
});})(cs))
;
cljs.core.async.t142693.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t142693.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t142693.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t142693.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t142693.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t142693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t142693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_142695){var self__ = this;
var _142695__$1 = this;return self__.meta142694;
});})(cs))
;
cljs.core.async.t142693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_142695,meta142694__$1){var self__ = this;
var _142695__$1 = this;return (new cljs.core.async.t142693(self__.cs,self__.ch,self__.mult,meta142694__$1));
});})(cs))
;
cljs.core.async.__GT_t142693 = ((function (cs){
return (function __GT_t142693(cs__$1,ch__$1,mult__$1,meta142694){return (new cljs.core.async.t142693(cs__$1,ch__$1,mult__$1,meta142694));
});})(cs))
;
}
return (new cljs.core.async.t142693(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___142907 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_142825){var state_val_142826 = (state_142825[1]);if((state_val_142826 === 32))
{var inst_142774 = (state_142825[7]);var inst_142698 = (state_142825[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_142825,31,Object,null,30);var inst_142781 = cljs.core.async.put_BANG_.call(null,inst_142774,inst_142698,done);var state_142825__$1 = state_142825;var statearr_142827_142908 = state_142825__$1;(statearr_142827_142908[2] = inst_142781);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142825__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 1))
{var state_142825__$1 = state_142825;var statearr_142828_142909 = state_142825__$1;(statearr_142828_142909[2] = null);
(statearr_142828_142909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 33))
{var inst_142787 = (state_142825[9]);var inst_142789 = cljs.core.chunked_seq_QMARK_.call(null,inst_142787);var state_142825__$1 = state_142825;if(inst_142789)
{var statearr_142829_142910 = state_142825__$1;(statearr_142829_142910[1] = 36);
} else
{var statearr_142830_142911 = state_142825__$1;(statearr_142830_142911[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 2))
{var state_142825__$1 = state_142825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142825__$1,4,ch);
} else
{if((state_val_142826 === 34))
{var state_142825__$1 = state_142825;var statearr_142831_142912 = state_142825__$1;(statearr_142831_142912[2] = null);
(statearr_142831_142912[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 3))
{var inst_142823 = (state_142825[2]);var state_142825__$1 = state_142825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_142825__$1,inst_142823);
} else
{if((state_val_142826 === 35))
{var inst_142812 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142832_142913 = state_142825__$1;(statearr_142832_142913[2] = inst_142812);
(statearr_142832_142913[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 4))
{var inst_142698 = (state_142825[8]);var inst_142698__$1 = (state_142825[2]);var inst_142699 = (inst_142698__$1 == null);var state_142825__$1 = (function (){var statearr_142833 = state_142825;(statearr_142833[8] = inst_142698__$1);
return statearr_142833;
})();if(cljs.core.truth_(inst_142699))
{var statearr_142834_142914 = state_142825__$1;(statearr_142834_142914[1] = 5);
} else
{var statearr_142835_142915 = state_142825__$1;(statearr_142835_142915[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 36))
{var inst_142787 = (state_142825[9]);var inst_142791 = cljs.core.chunk_first.call(null,inst_142787);var inst_142792 = cljs.core.chunk_rest.call(null,inst_142787);var inst_142793 = cljs.core.count.call(null,inst_142791);var inst_142766 = inst_142792;var inst_142767 = inst_142791;var inst_142768 = inst_142793;var inst_142769 = 0;var state_142825__$1 = (function (){var statearr_142836 = state_142825;(statearr_142836[10] = inst_142766);
(statearr_142836[11] = inst_142768);
(statearr_142836[12] = inst_142767);
(statearr_142836[13] = inst_142769);
return statearr_142836;
})();var statearr_142837_142916 = state_142825__$1;(statearr_142837_142916[2] = null);
(statearr_142837_142916[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 5))
{var inst_142705 = cljs.core.deref.call(null,cs);var inst_142706 = cljs.core.seq.call(null,inst_142705);var inst_142707 = inst_142706;var inst_142708 = null;var inst_142709 = 0;var inst_142710 = 0;var state_142825__$1 = (function (){var statearr_142838 = state_142825;(statearr_142838[14] = inst_142709);
(statearr_142838[15] = inst_142708);
(statearr_142838[16] = inst_142707);
(statearr_142838[17] = inst_142710);
return statearr_142838;
})();var statearr_142839_142917 = state_142825__$1;(statearr_142839_142917[2] = null);
(statearr_142839_142917[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 37))
{var inst_142787 = (state_142825[9]);var inst_142796 = cljs.core.first.call(null,inst_142787);var state_142825__$1 = (function (){var statearr_142840 = state_142825;(statearr_142840[18] = inst_142796);
return statearr_142840;
})();var statearr_142841_142918 = state_142825__$1;(statearr_142841_142918[2] = null);
(statearr_142841_142918[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 6))
{var inst_142757 = cljs.core.deref.call(null,cs);var inst_142758 = cljs.core.keys.call(null,inst_142757);var inst_142759 = cljs.core.count.call(null,inst_142758);var inst_142760 = cljs.core.reset_BANG_.call(null,dctr,inst_142759);var inst_142765 = cljs.core.seq.call(null,inst_142758);var inst_142766 = inst_142765;var inst_142767 = null;var inst_142768 = 0;var inst_142769 = 0;var state_142825__$1 = (function (){var statearr_142842 = state_142825;(statearr_142842[19] = inst_142760);
(statearr_142842[10] = inst_142766);
(statearr_142842[11] = inst_142768);
(statearr_142842[12] = inst_142767);
(statearr_142842[13] = inst_142769);
return statearr_142842;
})();var statearr_142843_142919 = state_142825__$1;(statearr_142843_142919[2] = null);
(statearr_142843_142919[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 38))
{var inst_142809 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142844_142920 = state_142825__$1;(statearr_142844_142920[2] = inst_142809);
(statearr_142844_142920[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 7))
{var inst_142821 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142845_142921 = state_142825__$1;(statearr_142845_142921[2] = inst_142821);
(statearr_142845_142921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 39))
{var inst_142787 = (state_142825[9]);var inst_142805 = (state_142825[2]);var inst_142806 = cljs.core.next.call(null,inst_142787);var inst_142766 = inst_142806;var inst_142767 = null;var inst_142768 = 0;var inst_142769 = 0;var state_142825__$1 = (function (){var statearr_142846 = state_142825;(statearr_142846[10] = inst_142766);
(statearr_142846[11] = inst_142768);
(statearr_142846[12] = inst_142767);
(statearr_142846[20] = inst_142805);
(statearr_142846[13] = inst_142769);
return statearr_142846;
})();var statearr_142847_142922 = state_142825__$1;(statearr_142847_142922[2] = null);
(statearr_142847_142922[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 8))
{var inst_142709 = (state_142825[14]);var inst_142710 = (state_142825[17]);var inst_142712 = (inst_142710 < inst_142709);var inst_142713 = inst_142712;var state_142825__$1 = state_142825;if(cljs.core.truth_(inst_142713))
{var statearr_142848_142923 = state_142825__$1;(statearr_142848_142923[1] = 10);
} else
{var statearr_142849_142924 = state_142825__$1;(statearr_142849_142924[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 40))
{var inst_142796 = (state_142825[18]);var inst_142797 = (state_142825[2]);var inst_142798 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_142799 = cljs.core.async.untap_STAR_.call(null,m,inst_142796);var state_142825__$1 = (function (){var statearr_142850 = state_142825;(statearr_142850[21] = inst_142797);
(statearr_142850[22] = inst_142798);
return statearr_142850;
})();var statearr_142851_142925 = state_142825__$1;(statearr_142851_142925[2] = inst_142799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142825__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 9))
{var inst_142755 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142852_142926 = state_142825__$1;(statearr_142852_142926[2] = inst_142755);
(statearr_142852_142926[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 41))
{var inst_142796 = (state_142825[18]);var inst_142698 = (state_142825[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_142825,40,Object,null,39);var inst_142803 = cljs.core.async.put_BANG_.call(null,inst_142796,inst_142698,done);var state_142825__$1 = state_142825;var statearr_142853_142927 = state_142825__$1;(statearr_142853_142927[2] = inst_142803);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142825__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 10))
{var inst_142708 = (state_142825[15]);var inst_142710 = (state_142825[17]);var inst_142716 = cljs.core._nth.call(null,inst_142708,inst_142710);var inst_142717 = cljs.core.nth.call(null,inst_142716,0,null);var inst_142718 = cljs.core.nth.call(null,inst_142716,1,null);var state_142825__$1 = (function (){var statearr_142854 = state_142825;(statearr_142854[23] = inst_142717);
return statearr_142854;
})();if(cljs.core.truth_(inst_142718))
{var statearr_142855_142928 = state_142825__$1;(statearr_142855_142928[1] = 13);
} else
{var statearr_142856_142929 = state_142825__$1;(statearr_142856_142929[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 42))
{var inst_142818 = (state_142825[2]);var state_142825__$1 = (function (){var statearr_142857 = state_142825;(statearr_142857[24] = inst_142818);
return statearr_142857;
})();var statearr_142858_142930 = state_142825__$1;(statearr_142858_142930[2] = null);
(statearr_142858_142930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 11))
{var inst_142707 = (state_142825[16]);var inst_142727 = (state_142825[25]);var inst_142727__$1 = cljs.core.seq.call(null,inst_142707);var state_142825__$1 = (function (){var statearr_142859 = state_142825;(statearr_142859[25] = inst_142727__$1);
return statearr_142859;
})();if(inst_142727__$1)
{var statearr_142860_142931 = state_142825__$1;(statearr_142860_142931[1] = 16);
} else
{var statearr_142861_142932 = state_142825__$1;(statearr_142861_142932[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 12))
{var inst_142753 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142862_142933 = state_142825__$1;(statearr_142862_142933[2] = inst_142753);
(statearr_142862_142933[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 13))
{var inst_142717 = (state_142825[23]);var inst_142720 = cljs.core.async.close_BANG_.call(null,inst_142717);var state_142825__$1 = state_142825;var statearr_142866_142934 = state_142825__$1;(statearr_142866_142934[2] = inst_142720);
(statearr_142866_142934[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 14))
{var state_142825__$1 = state_142825;var statearr_142867_142935 = state_142825__$1;(statearr_142867_142935[2] = null);
(statearr_142867_142935[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 15))
{var inst_142709 = (state_142825[14]);var inst_142708 = (state_142825[15]);var inst_142707 = (state_142825[16]);var inst_142710 = (state_142825[17]);var inst_142723 = (state_142825[2]);var inst_142724 = (inst_142710 + 1);var tmp142863 = inst_142709;var tmp142864 = inst_142708;var tmp142865 = inst_142707;var inst_142707__$1 = tmp142865;var inst_142708__$1 = tmp142864;var inst_142709__$1 = tmp142863;var inst_142710__$1 = inst_142724;var state_142825__$1 = (function (){var statearr_142868 = state_142825;(statearr_142868[14] = inst_142709__$1);
(statearr_142868[15] = inst_142708__$1);
(statearr_142868[16] = inst_142707__$1);
(statearr_142868[17] = inst_142710__$1);
(statearr_142868[26] = inst_142723);
return statearr_142868;
})();var statearr_142869_142936 = state_142825__$1;(statearr_142869_142936[2] = null);
(statearr_142869_142936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 16))
{var inst_142727 = (state_142825[25]);var inst_142729 = cljs.core.chunked_seq_QMARK_.call(null,inst_142727);var state_142825__$1 = state_142825;if(inst_142729)
{var statearr_142870_142937 = state_142825__$1;(statearr_142870_142937[1] = 19);
} else
{var statearr_142871_142938 = state_142825__$1;(statearr_142871_142938[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 17))
{var state_142825__$1 = state_142825;var statearr_142872_142939 = state_142825__$1;(statearr_142872_142939[2] = null);
(statearr_142872_142939[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 18))
{var inst_142751 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142873_142940 = state_142825__$1;(statearr_142873_142940[2] = inst_142751);
(statearr_142873_142940[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 19))
{var inst_142727 = (state_142825[25]);var inst_142731 = cljs.core.chunk_first.call(null,inst_142727);var inst_142732 = cljs.core.chunk_rest.call(null,inst_142727);var inst_142733 = cljs.core.count.call(null,inst_142731);var inst_142707 = inst_142732;var inst_142708 = inst_142731;var inst_142709 = inst_142733;var inst_142710 = 0;var state_142825__$1 = (function (){var statearr_142874 = state_142825;(statearr_142874[14] = inst_142709);
(statearr_142874[15] = inst_142708);
(statearr_142874[16] = inst_142707);
(statearr_142874[17] = inst_142710);
return statearr_142874;
})();var statearr_142875_142941 = state_142825__$1;(statearr_142875_142941[2] = null);
(statearr_142875_142941[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 20))
{var inst_142727 = (state_142825[25]);var inst_142737 = cljs.core.first.call(null,inst_142727);var inst_142738 = cljs.core.nth.call(null,inst_142737,0,null);var inst_142739 = cljs.core.nth.call(null,inst_142737,1,null);var state_142825__$1 = (function (){var statearr_142876 = state_142825;(statearr_142876[27] = inst_142738);
return statearr_142876;
})();if(cljs.core.truth_(inst_142739))
{var statearr_142877_142942 = state_142825__$1;(statearr_142877_142942[1] = 22);
} else
{var statearr_142878_142943 = state_142825__$1;(statearr_142878_142943[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 21))
{var inst_142748 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142879_142944 = state_142825__$1;(statearr_142879_142944[2] = inst_142748);
(statearr_142879_142944[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 22))
{var inst_142738 = (state_142825[27]);var inst_142741 = cljs.core.async.close_BANG_.call(null,inst_142738);var state_142825__$1 = state_142825;var statearr_142880_142945 = state_142825__$1;(statearr_142880_142945[2] = inst_142741);
(statearr_142880_142945[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 23))
{var state_142825__$1 = state_142825;var statearr_142881_142946 = state_142825__$1;(statearr_142881_142946[2] = null);
(statearr_142881_142946[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 24))
{var inst_142727 = (state_142825[25]);var inst_142744 = (state_142825[2]);var inst_142745 = cljs.core.next.call(null,inst_142727);var inst_142707 = inst_142745;var inst_142708 = null;var inst_142709 = 0;var inst_142710 = 0;var state_142825__$1 = (function (){var statearr_142882 = state_142825;(statearr_142882[14] = inst_142709);
(statearr_142882[15] = inst_142708);
(statearr_142882[16] = inst_142707);
(statearr_142882[28] = inst_142744);
(statearr_142882[17] = inst_142710);
return statearr_142882;
})();var statearr_142883_142947 = state_142825__$1;(statearr_142883_142947[2] = null);
(statearr_142883_142947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 25))
{var inst_142768 = (state_142825[11]);var inst_142769 = (state_142825[13]);var inst_142771 = (inst_142769 < inst_142768);var inst_142772 = inst_142771;var state_142825__$1 = state_142825;if(cljs.core.truth_(inst_142772))
{var statearr_142884_142948 = state_142825__$1;(statearr_142884_142948[1] = 27);
} else
{var statearr_142885_142949 = state_142825__$1;(statearr_142885_142949[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 26))
{var inst_142816 = (state_142825[2]);var state_142825__$1 = (function (){var statearr_142886 = state_142825;(statearr_142886[29] = inst_142816);
return statearr_142886;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_142825__$1,42,dchan);
} else
{if((state_val_142826 === 27))
{var inst_142767 = (state_142825[12]);var inst_142769 = (state_142825[13]);var inst_142774 = cljs.core._nth.call(null,inst_142767,inst_142769);var state_142825__$1 = (function (){var statearr_142887 = state_142825;(statearr_142887[7] = inst_142774);
return statearr_142887;
})();var statearr_142888_142950 = state_142825__$1;(statearr_142888_142950[2] = null);
(statearr_142888_142950[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 28))
{var inst_142787 = (state_142825[9]);var inst_142766 = (state_142825[10]);var inst_142787__$1 = cljs.core.seq.call(null,inst_142766);var state_142825__$1 = (function (){var statearr_142892 = state_142825;(statearr_142892[9] = inst_142787__$1);
return statearr_142892;
})();if(inst_142787__$1)
{var statearr_142893_142951 = state_142825__$1;(statearr_142893_142951[1] = 33);
} else
{var statearr_142894_142952 = state_142825__$1;(statearr_142894_142952[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 29))
{var inst_142814 = (state_142825[2]);var state_142825__$1 = state_142825;var statearr_142895_142953 = state_142825__$1;(statearr_142895_142953[2] = inst_142814);
(statearr_142895_142953[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 30))
{var inst_142766 = (state_142825[10]);var inst_142768 = (state_142825[11]);var inst_142767 = (state_142825[12]);var inst_142769 = (state_142825[13]);var inst_142783 = (state_142825[2]);var inst_142784 = (inst_142769 + 1);var tmp142889 = inst_142766;var tmp142890 = inst_142768;var tmp142891 = inst_142767;var inst_142766__$1 = tmp142889;var inst_142767__$1 = tmp142891;var inst_142768__$1 = tmp142890;var inst_142769__$1 = inst_142784;var state_142825__$1 = (function (){var statearr_142896 = state_142825;(statearr_142896[30] = inst_142783);
(statearr_142896[10] = inst_142766__$1);
(statearr_142896[11] = inst_142768__$1);
(statearr_142896[12] = inst_142767__$1);
(statearr_142896[13] = inst_142769__$1);
return statearr_142896;
})();var statearr_142897_142954 = state_142825__$1;(statearr_142897_142954[2] = null);
(statearr_142897_142954[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_142826 === 31))
{var inst_142774 = (state_142825[7]);var inst_142775 = (state_142825[2]);var inst_142776 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_142777 = cljs.core.async.untap_STAR_.call(null,m,inst_142774);var state_142825__$1 = (function (){var statearr_142898 = state_142825;(statearr_142898[31] = inst_142776);
(statearr_142898[32] = inst_142775);
return statearr_142898;
})();var statearr_142899_142955 = state_142825__$1;(statearr_142899_142955[2] = inst_142777);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142825__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_142903 = (new Array(33));(statearr_142903[0] = state_machine__13310__auto__);
(statearr_142903[1] = 1);
return statearr_142903;
});
var state_machine__13310__auto____1 = (function (state_142825){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_142825);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e142904){if((e142904 instanceof Object))
{var ex__13313__auto__ = e142904;var statearr_142905_142956 = state_142825;(statearr_142905_142956[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_142825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e142904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__142957 = state_142825;
state_142825 = G__142957;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_142825){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_142825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_142906 = f__13410__auto__.call(null);(statearr_142906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___142907);
return statearr_142906;
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
cljs.core.async.Mix = (function (){var obj142959 = {};return obj142959;
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
;var m = (function (){if(typeof cljs.core.async.t143069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143069 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta143070){
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
this.meta143070 = meta143070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143069.cljs$lang$type = true;
cljs.core.async.t143069.cljs$lang$ctorStr = "cljs.core.async/t143069";
cljs.core.async.t143069.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t143069");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t143069.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t143069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_143071){var self__ = this;
var _143071__$1 = this;return self__.meta143070;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t143069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_143071,meta143070__$1){var self__ = this;
var _143071__$1 = this;return (new cljs.core.async.t143069(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta143070__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t143069 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t143069(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta143070){return (new cljs.core.async.t143069(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta143070));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t143069(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___143178 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_143136){var state_val_143137 = (state_143136[1]);if((state_val_143137 === 1))
{var inst_143075 = (state_143136[7]);var inst_143075__$1 = calc_state.call(null);var inst_143076 = cljs.core.seq_QMARK_.call(null,inst_143075__$1);var state_143136__$1 = (function (){var statearr_143138 = state_143136;(statearr_143138[7] = inst_143075__$1);
return statearr_143138;
})();if(inst_143076)
{var statearr_143139_143179 = state_143136__$1;(statearr_143139_143179[1] = 2);
} else
{var statearr_143140_143180 = state_143136__$1;(statearr_143140_143180[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 2))
{var inst_143075 = (state_143136[7]);var inst_143078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_143075);var state_143136__$1 = state_143136;var statearr_143141_143181 = state_143136__$1;(statearr_143141_143181[2] = inst_143078);
(statearr_143141_143181[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 3))
{var inst_143075 = (state_143136[7]);var state_143136__$1 = state_143136;var statearr_143142_143182 = state_143136__$1;(statearr_143142_143182[2] = inst_143075);
(statearr_143142_143182[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 4))
{var inst_143075 = (state_143136[7]);var inst_143081 = (state_143136[2]);var inst_143082 = cljs.core.get.call(null,inst_143081,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_143083 = cljs.core.get.call(null,inst_143081,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_143084 = cljs.core.get.call(null,inst_143081,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_143085 = inst_143075;var state_143136__$1 = (function (){var statearr_143143 = state_143136;(statearr_143143[8] = inst_143085);
(statearr_143143[9] = inst_143083);
(statearr_143143[10] = inst_143084);
(statearr_143143[11] = inst_143082);
return statearr_143143;
})();var statearr_143144_143183 = state_143136__$1;(statearr_143144_143183[2] = null);
(statearr_143144_143183[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 5))
{var inst_143085 = (state_143136[8]);var inst_143088 = cljs.core.seq_QMARK_.call(null,inst_143085);var state_143136__$1 = state_143136;if(inst_143088)
{var statearr_143145_143184 = state_143136__$1;(statearr_143145_143184[1] = 7);
} else
{var statearr_143146_143185 = state_143136__$1;(statearr_143146_143185[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 6))
{var inst_143134 = (state_143136[2]);var state_143136__$1 = state_143136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143136__$1,inst_143134);
} else
{if((state_val_143137 === 7))
{var inst_143085 = (state_143136[8]);var inst_143090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_143085);var state_143136__$1 = state_143136;var statearr_143147_143186 = state_143136__$1;(statearr_143147_143186[2] = inst_143090);
(statearr_143147_143186[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 8))
{var inst_143085 = (state_143136[8]);var state_143136__$1 = state_143136;var statearr_143148_143187 = state_143136__$1;(statearr_143148_143187[2] = inst_143085);
(statearr_143148_143187[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 9))
{var inst_143093 = (state_143136[12]);var inst_143093__$1 = (state_143136[2]);var inst_143094 = cljs.core.get.call(null,inst_143093__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_143095 = cljs.core.get.call(null,inst_143093__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_143096 = cljs.core.get.call(null,inst_143093__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_143136__$1 = (function (){var statearr_143149 = state_143136;(statearr_143149[13] = inst_143096);
(statearr_143149[14] = inst_143095);
(statearr_143149[12] = inst_143093__$1);
return statearr_143149;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_143136__$1,10,inst_143094);
} else
{if((state_val_143137 === 10))
{var inst_143101 = (state_143136[15]);var inst_143100 = (state_143136[16]);var inst_143099 = (state_143136[2]);var inst_143100__$1 = cljs.core.nth.call(null,inst_143099,0,null);var inst_143101__$1 = cljs.core.nth.call(null,inst_143099,1,null);var inst_143102 = (inst_143100__$1 == null);var inst_143103 = cljs.core._EQ_.call(null,inst_143101__$1,change);var inst_143104 = (inst_143102) || (inst_143103);var state_143136__$1 = (function (){var statearr_143150 = state_143136;(statearr_143150[15] = inst_143101__$1);
(statearr_143150[16] = inst_143100__$1);
return statearr_143150;
})();if(cljs.core.truth_(inst_143104))
{var statearr_143151_143188 = state_143136__$1;(statearr_143151_143188[1] = 11);
} else
{var statearr_143152_143189 = state_143136__$1;(statearr_143152_143189[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 11))
{var inst_143100 = (state_143136[16]);var inst_143106 = (inst_143100 == null);var state_143136__$1 = state_143136;if(cljs.core.truth_(inst_143106))
{var statearr_143153_143190 = state_143136__$1;(statearr_143153_143190[1] = 14);
} else
{var statearr_143154_143191 = state_143136__$1;(statearr_143154_143191[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 12))
{var inst_143096 = (state_143136[13]);var inst_143101 = (state_143136[15]);var inst_143115 = (state_143136[17]);var inst_143115__$1 = inst_143096.call(null,inst_143101);var state_143136__$1 = (function (){var statearr_143155 = state_143136;(statearr_143155[17] = inst_143115__$1);
return statearr_143155;
})();if(cljs.core.truth_(inst_143115__$1))
{var statearr_143156_143192 = state_143136__$1;(statearr_143156_143192[1] = 17);
} else
{var statearr_143157_143193 = state_143136__$1;(statearr_143157_143193[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 13))
{var inst_143132 = (state_143136[2]);var state_143136__$1 = state_143136;var statearr_143158_143194 = state_143136__$1;(statearr_143158_143194[2] = inst_143132);
(statearr_143158_143194[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 14))
{var inst_143101 = (state_143136[15]);var inst_143108 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_143101);var state_143136__$1 = state_143136;var statearr_143159_143195 = state_143136__$1;(statearr_143159_143195[2] = inst_143108);
(statearr_143159_143195[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 15))
{var state_143136__$1 = state_143136;var statearr_143160_143196 = state_143136__$1;(statearr_143160_143196[2] = null);
(statearr_143160_143196[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 16))
{var inst_143111 = (state_143136[2]);var inst_143112 = calc_state.call(null);var inst_143085 = inst_143112;var state_143136__$1 = (function (){var statearr_143161 = state_143136;(statearr_143161[8] = inst_143085);
(statearr_143161[18] = inst_143111);
return statearr_143161;
})();var statearr_143162_143197 = state_143136__$1;(statearr_143162_143197[2] = null);
(statearr_143162_143197[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 17))
{var inst_143115 = (state_143136[17]);var state_143136__$1 = state_143136;var statearr_143163_143198 = state_143136__$1;(statearr_143163_143198[2] = inst_143115);
(statearr_143163_143198[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 18))
{var inst_143096 = (state_143136[13]);var inst_143095 = (state_143136[14]);var inst_143101 = (state_143136[15]);var inst_143118 = cljs.core.empty_QMARK_.call(null,inst_143096);var inst_143119 = inst_143095.call(null,inst_143101);var inst_143120 = cljs.core.not.call(null,inst_143119);var inst_143121 = (inst_143118) && (inst_143120);var state_143136__$1 = state_143136;var statearr_143164_143199 = state_143136__$1;(statearr_143164_143199[2] = inst_143121);
(statearr_143164_143199[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 19))
{var inst_143123 = (state_143136[2]);var state_143136__$1 = state_143136;if(cljs.core.truth_(inst_143123))
{var statearr_143165_143200 = state_143136__$1;(statearr_143165_143200[1] = 20);
} else
{var statearr_143166_143201 = state_143136__$1;(statearr_143166_143201[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 20))
{var inst_143100 = (state_143136[16]);var state_143136__$1 = state_143136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143136__$1,23,out,inst_143100);
} else
{if((state_val_143137 === 21))
{var state_143136__$1 = state_143136;var statearr_143167_143202 = state_143136__$1;(statearr_143167_143202[2] = null);
(statearr_143167_143202[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 22))
{var inst_143093 = (state_143136[12]);var inst_143129 = (state_143136[2]);var inst_143085 = inst_143093;var state_143136__$1 = (function (){var statearr_143168 = state_143136;(statearr_143168[19] = inst_143129);
(statearr_143168[8] = inst_143085);
return statearr_143168;
})();var statearr_143169_143203 = state_143136__$1;(statearr_143169_143203[2] = null);
(statearr_143169_143203[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143137 === 23))
{var inst_143126 = (state_143136[2]);var state_143136__$1 = state_143136;var statearr_143170_143204 = state_143136__$1;(statearr_143170_143204[2] = inst_143126);
(statearr_143170_143204[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_143174 = (new Array(20));(statearr_143174[0] = state_machine__13310__auto__);
(statearr_143174[1] = 1);
return statearr_143174;
});
var state_machine__13310__auto____1 = (function (state_143136){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_143136);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e143175){if((e143175 instanceof Object))
{var ex__13313__auto__ = e143175;var statearr_143176_143205 = state_143136;(statearr_143176_143205[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143206 = state_143136;
state_143136 = G__143206;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_143136){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_143136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_143177 = f__13410__auto__.call(null);(statearr_143177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___143178);
return statearr_143177;
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
cljs.core.async.Pub = (function (){var obj143208 = {};return obj143208;
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
return (function (p1__143209_SHARP_){if(cljs.core.truth_(p1__143209_SHARP_.call(null,topic)))
{return p1__143209_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__143209_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t143334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143334 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta143335){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta143335 = meta143335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143334.cljs$lang$type = true;
cljs.core.async.t143334.cljs$lang$ctorStr = "cljs.core.async/t143334";
cljs.core.async.t143334.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t143334");
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t143334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t143334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_143336){var self__ = this;
var _143336__$1 = this;return self__.meta143335;
});})(mults,ensure_mult))
;
cljs.core.async.t143334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_143336,meta143335__$1){var self__ = this;
var _143336__$1 = this;return (new cljs.core.async.t143334(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta143335__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t143334 = ((function (mults,ensure_mult){
return (function __GT_t143334(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta143335){return (new cljs.core.async.t143334(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta143335));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t143334(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___143458 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_143410){var state_val_143411 = (state_143410[1]);if((state_val_143411 === 1))
{var state_143410__$1 = state_143410;var statearr_143412_143459 = state_143410__$1;(statearr_143412_143459[2] = null);
(statearr_143412_143459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 2))
{var state_143410__$1 = state_143410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143410__$1,4,ch);
} else
{if((state_val_143411 === 3))
{var inst_143408 = (state_143410[2]);var state_143410__$1 = state_143410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143410__$1,inst_143408);
} else
{if((state_val_143411 === 4))
{var inst_143339 = (state_143410[7]);var inst_143339__$1 = (state_143410[2]);var inst_143340 = (inst_143339__$1 == null);var state_143410__$1 = (function (){var statearr_143413 = state_143410;(statearr_143413[7] = inst_143339__$1);
return statearr_143413;
})();if(cljs.core.truth_(inst_143340))
{var statearr_143414_143460 = state_143410__$1;(statearr_143414_143460[1] = 5);
} else
{var statearr_143415_143461 = state_143410__$1;(statearr_143415_143461[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 5))
{var inst_143346 = cljs.core.deref.call(null,mults);var inst_143347 = cljs.core.vals.call(null,inst_143346);var inst_143348 = cljs.core.seq.call(null,inst_143347);var inst_143349 = inst_143348;var inst_143350 = null;var inst_143351 = 0;var inst_143352 = 0;var state_143410__$1 = (function (){var statearr_143416 = state_143410;(statearr_143416[8] = inst_143349);
(statearr_143416[9] = inst_143350);
(statearr_143416[10] = inst_143352);
(statearr_143416[11] = inst_143351);
return statearr_143416;
})();var statearr_143417_143462 = state_143410__$1;(statearr_143417_143462[2] = null);
(statearr_143417_143462[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 6))
{var inst_143387 = (state_143410[12]);var inst_143339 = (state_143410[7]);var inst_143389 = (state_143410[13]);var inst_143387__$1 = topic_fn.call(null,inst_143339);var inst_143388 = cljs.core.deref.call(null,mults);var inst_143389__$1 = cljs.core.get.call(null,inst_143388,inst_143387__$1);var state_143410__$1 = (function (){var statearr_143418 = state_143410;(statearr_143418[12] = inst_143387__$1);
(statearr_143418[13] = inst_143389__$1);
return statearr_143418;
})();if(cljs.core.truth_(inst_143389__$1))
{var statearr_143419_143463 = state_143410__$1;(statearr_143419_143463[1] = 19);
} else
{var statearr_143420_143464 = state_143410__$1;(statearr_143420_143464[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 7))
{var inst_143406 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143421_143465 = state_143410__$1;(statearr_143421_143465[2] = inst_143406);
(statearr_143421_143465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 8))
{var inst_143352 = (state_143410[10]);var inst_143351 = (state_143410[11]);var inst_143354 = (inst_143352 < inst_143351);var inst_143355 = inst_143354;var state_143410__$1 = state_143410;if(cljs.core.truth_(inst_143355))
{var statearr_143425_143466 = state_143410__$1;(statearr_143425_143466[1] = 10);
} else
{var statearr_143426_143467 = state_143410__$1;(statearr_143426_143467[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 9))
{var inst_143385 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143427_143468 = state_143410__$1;(statearr_143427_143468[2] = inst_143385);
(statearr_143427_143468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 10))
{var inst_143349 = (state_143410[8]);var inst_143350 = (state_143410[9]);var inst_143352 = (state_143410[10]);var inst_143351 = (state_143410[11]);var inst_143357 = cljs.core._nth.call(null,inst_143350,inst_143352);var inst_143358 = cljs.core.async.muxch_STAR_.call(null,inst_143357);var inst_143359 = cljs.core.async.close_BANG_.call(null,inst_143358);var inst_143360 = (inst_143352 + 1);var tmp143422 = inst_143349;var tmp143423 = inst_143350;var tmp143424 = inst_143351;var inst_143349__$1 = tmp143422;var inst_143350__$1 = tmp143423;var inst_143351__$1 = tmp143424;var inst_143352__$1 = inst_143360;var state_143410__$1 = (function (){var statearr_143428 = state_143410;(statearr_143428[8] = inst_143349__$1);
(statearr_143428[14] = inst_143359);
(statearr_143428[9] = inst_143350__$1);
(statearr_143428[10] = inst_143352__$1);
(statearr_143428[11] = inst_143351__$1);
return statearr_143428;
})();var statearr_143429_143469 = state_143410__$1;(statearr_143429_143469[2] = null);
(statearr_143429_143469[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 11))
{var inst_143349 = (state_143410[8]);var inst_143363 = (state_143410[15]);var inst_143363__$1 = cljs.core.seq.call(null,inst_143349);var state_143410__$1 = (function (){var statearr_143430 = state_143410;(statearr_143430[15] = inst_143363__$1);
return statearr_143430;
})();if(inst_143363__$1)
{var statearr_143431_143470 = state_143410__$1;(statearr_143431_143470[1] = 13);
} else
{var statearr_143432_143471 = state_143410__$1;(statearr_143432_143471[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 12))
{var inst_143383 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143433_143472 = state_143410__$1;(statearr_143433_143472[2] = inst_143383);
(statearr_143433_143472[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 13))
{var inst_143363 = (state_143410[15]);var inst_143365 = cljs.core.chunked_seq_QMARK_.call(null,inst_143363);var state_143410__$1 = state_143410;if(inst_143365)
{var statearr_143434_143473 = state_143410__$1;(statearr_143434_143473[1] = 16);
} else
{var statearr_143435_143474 = state_143410__$1;(statearr_143435_143474[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 14))
{var state_143410__$1 = state_143410;var statearr_143436_143475 = state_143410__$1;(statearr_143436_143475[2] = null);
(statearr_143436_143475[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 15))
{var inst_143381 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143437_143476 = state_143410__$1;(statearr_143437_143476[2] = inst_143381);
(statearr_143437_143476[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 16))
{var inst_143363 = (state_143410[15]);var inst_143367 = cljs.core.chunk_first.call(null,inst_143363);var inst_143368 = cljs.core.chunk_rest.call(null,inst_143363);var inst_143369 = cljs.core.count.call(null,inst_143367);var inst_143349 = inst_143368;var inst_143350 = inst_143367;var inst_143351 = inst_143369;var inst_143352 = 0;var state_143410__$1 = (function (){var statearr_143438 = state_143410;(statearr_143438[8] = inst_143349);
(statearr_143438[9] = inst_143350);
(statearr_143438[10] = inst_143352);
(statearr_143438[11] = inst_143351);
return statearr_143438;
})();var statearr_143439_143477 = state_143410__$1;(statearr_143439_143477[2] = null);
(statearr_143439_143477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 17))
{var inst_143363 = (state_143410[15]);var inst_143372 = cljs.core.first.call(null,inst_143363);var inst_143373 = cljs.core.async.muxch_STAR_.call(null,inst_143372);var inst_143374 = cljs.core.async.close_BANG_.call(null,inst_143373);var inst_143375 = cljs.core.next.call(null,inst_143363);var inst_143349 = inst_143375;var inst_143350 = null;var inst_143351 = 0;var inst_143352 = 0;var state_143410__$1 = (function (){var statearr_143440 = state_143410;(statearr_143440[8] = inst_143349);
(statearr_143440[16] = inst_143374);
(statearr_143440[9] = inst_143350);
(statearr_143440[10] = inst_143352);
(statearr_143440[11] = inst_143351);
return statearr_143440;
})();var statearr_143441_143478 = state_143410__$1;(statearr_143441_143478[2] = null);
(statearr_143441_143478[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 18))
{var inst_143378 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143442_143479 = state_143410__$1;(statearr_143442_143479[2] = inst_143378);
(statearr_143442_143479[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 19))
{var state_143410__$1 = state_143410;var statearr_143443_143480 = state_143410__$1;(statearr_143443_143480[2] = null);
(statearr_143443_143480[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 20))
{var state_143410__$1 = state_143410;var statearr_143444_143481 = state_143410__$1;(statearr_143444_143481[2] = null);
(statearr_143444_143481[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 21))
{var inst_143403 = (state_143410[2]);var state_143410__$1 = (function (){var statearr_143445 = state_143410;(statearr_143445[17] = inst_143403);
return statearr_143445;
})();var statearr_143446_143482 = state_143410__$1;(statearr_143446_143482[2] = null);
(statearr_143446_143482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 22))
{var inst_143400 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143447_143483 = state_143410__$1;(statearr_143447_143483[2] = inst_143400);
(statearr_143447_143483[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 23))
{var inst_143387 = (state_143410[12]);var inst_143391 = (state_143410[2]);var inst_143392 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_143387);var state_143410__$1 = (function (){var statearr_143448 = state_143410;(statearr_143448[18] = inst_143391);
return statearr_143448;
})();var statearr_143449_143484 = state_143410__$1;(statearr_143449_143484[2] = inst_143392);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143410__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143411 === 24))
{var inst_143339 = (state_143410[7]);var inst_143389 = (state_143410[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_143410,23,Object,null,22);var inst_143396 = cljs.core.async.muxch_STAR_.call(null,inst_143389);var state_143410__$1 = state_143410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143410__$1,25,inst_143396,inst_143339);
} else
{if((state_val_143411 === 25))
{var inst_143398 = (state_143410[2]);var state_143410__$1 = state_143410;var statearr_143450_143485 = state_143410__$1;(statearr_143450_143485[2] = inst_143398);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143410__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_143454 = (new Array(19));(statearr_143454[0] = state_machine__13310__auto__);
(statearr_143454[1] = 1);
return statearr_143454;
});
var state_machine__13310__auto____1 = (function (state_143410){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_143410);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e143455){if((e143455 instanceof Object))
{var ex__13313__auto__ = e143455;var statearr_143456_143486 = state_143410;(statearr_143456_143486[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143487 = state_143410;
state_143410 = G__143487;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_143410){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_143410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_143457 = f__13410__auto__.call(null);(statearr_143457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___143458);
return statearr_143457;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___143624 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_143594){var state_val_143595 = (state_143594[1]);if((state_val_143595 === 1))
{var state_143594__$1 = state_143594;var statearr_143596_143625 = state_143594__$1;(statearr_143596_143625[2] = null);
(statearr_143596_143625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 2))
{var inst_143557 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_143558 = 0;var state_143594__$1 = (function (){var statearr_143597 = state_143594;(statearr_143597[7] = inst_143558);
(statearr_143597[8] = inst_143557);
return statearr_143597;
})();var statearr_143598_143626 = state_143594__$1;(statearr_143598_143626[2] = null);
(statearr_143598_143626[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 3))
{var inst_143592 = (state_143594[2]);var state_143594__$1 = state_143594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143594__$1,inst_143592);
} else
{if((state_val_143595 === 4))
{var inst_143558 = (state_143594[7]);var inst_143560 = (inst_143558 < cnt);var state_143594__$1 = state_143594;if(cljs.core.truth_(inst_143560))
{var statearr_143599_143627 = state_143594__$1;(statearr_143599_143627[1] = 6);
} else
{var statearr_143600_143628 = state_143594__$1;(statearr_143600_143628[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 5))
{var inst_143578 = (state_143594[2]);var state_143594__$1 = (function (){var statearr_143601 = state_143594;(statearr_143601[9] = inst_143578);
return statearr_143601;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143594__$1,12,dchan);
} else
{if((state_val_143595 === 6))
{var state_143594__$1 = state_143594;var statearr_143602_143629 = state_143594__$1;(statearr_143602_143629[2] = null);
(statearr_143602_143629[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 7))
{var state_143594__$1 = state_143594;var statearr_143603_143630 = state_143594__$1;(statearr_143603_143630[2] = null);
(statearr_143603_143630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 8))
{var inst_143576 = (state_143594[2]);var state_143594__$1 = state_143594;var statearr_143604_143631 = state_143594__$1;(statearr_143604_143631[2] = inst_143576);
(statearr_143604_143631[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 9))
{var inst_143558 = (state_143594[7]);var inst_143571 = (state_143594[2]);var inst_143572 = (inst_143558 + 1);var inst_143558__$1 = inst_143572;var state_143594__$1 = (function (){var statearr_143605 = state_143594;(statearr_143605[7] = inst_143558__$1);
(statearr_143605[10] = inst_143571);
return statearr_143605;
})();var statearr_143606_143632 = state_143594__$1;(statearr_143606_143632[2] = null);
(statearr_143606_143632[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 10))
{var inst_143562 = (state_143594[2]);var inst_143563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_143594__$1 = (function (){var statearr_143607 = state_143594;(statearr_143607[11] = inst_143562);
return statearr_143607;
})();var statearr_143608_143633 = state_143594__$1;(statearr_143608_143633[2] = inst_143563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143594__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 11))
{var inst_143558 = (state_143594[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_143594,10,Object,null,9);var inst_143567 = chs__$1.call(null,inst_143558);var inst_143568 = done.call(null,inst_143558);var inst_143569 = cljs.core.async.take_BANG_.call(null,inst_143567,inst_143568);var state_143594__$1 = state_143594;var statearr_143609_143634 = state_143594__$1;(statearr_143609_143634[2] = inst_143569);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143594__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 12))
{var inst_143580 = (state_143594[12]);var inst_143580__$1 = (state_143594[2]);var inst_143581 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_143580__$1);var state_143594__$1 = (function (){var statearr_143610 = state_143594;(statearr_143610[12] = inst_143580__$1);
return statearr_143610;
})();if(cljs.core.truth_(inst_143581))
{var statearr_143611_143635 = state_143594__$1;(statearr_143611_143635[1] = 13);
} else
{var statearr_143612_143636 = state_143594__$1;(statearr_143612_143636[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 13))
{var inst_143583 = cljs.core.async.close_BANG_.call(null,out);var state_143594__$1 = state_143594;var statearr_143613_143637 = state_143594__$1;(statearr_143613_143637[2] = inst_143583);
(statearr_143613_143637[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 14))
{var inst_143580 = (state_143594[12]);var inst_143585 = cljs.core.apply.call(null,f,inst_143580);var state_143594__$1 = state_143594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143594__$1,16,out,inst_143585);
} else
{if((state_val_143595 === 15))
{var inst_143590 = (state_143594[2]);var state_143594__$1 = state_143594;var statearr_143614_143638 = state_143594__$1;(statearr_143614_143638[2] = inst_143590);
(statearr_143614_143638[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143595 === 16))
{var inst_143587 = (state_143594[2]);var state_143594__$1 = (function (){var statearr_143615 = state_143594;(statearr_143615[13] = inst_143587);
return statearr_143615;
})();var statearr_143616_143639 = state_143594__$1;(statearr_143616_143639[2] = null);
(statearr_143616_143639[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_143620 = (new Array(14));(statearr_143620[0] = state_machine__13310__auto__);
(statearr_143620[1] = 1);
return statearr_143620;
});
var state_machine__13310__auto____1 = (function (state_143594){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_143594);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e143621){if((e143621 instanceof Object))
{var ex__13313__auto__ = e143621;var statearr_143622_143640 = state_143594;(statearr_143622_143640[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143641 = state_143594;
state_143594 = G__143641;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_143594){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_143594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_143623 = f__13410__auto__.call(null);(statearr_143623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___143624);
return statearr_143623;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___143749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_143725){var state_val_143726 = (state_143725[1]);if((state_val_143726 === 1))
{var inst_143696 = cljs.core.vec.call(null,chs);var inst_143697 = inst_143696;var state_143725__$1 = (function (){var statearr_143727 = state_143725;(statearr_143727[7] = inst_143697);
return statearr_143727;
})();var statearr_143728_143750 = state_143725__$1;(statearr_143728_143750[2] = null);
(statearr_143728_143750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 2))
{var inst_143697 = (state_143725[7]);var inst_143699 = cljs.core.count.call(null,inst_143697);var inst_143700 = (inst_143699 > 0);var state_143725__$1 = state_143725;if(cljs.core.truth_(inst_143700))
{var statearr_143729_143751 = state_143725__$1;(statearr_143729_143751[1] = 4);
} else
{var statearr_143730_143752 = state_143725__$1;(statearr_143730_143752[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 3))
{var inst_143723 = (state_143725[2]);var state_143725__$1 = state_143725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143725__$1,inst_143723);
} else
{if((state_val_143726 === 4))
{var inst_143697 = (state_143725[7]);var state_143725__$1 = state_143725;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_143725__$1,7,inst_143697);
} else
{if((state_val_143726 === 5))
{var inst_143719 = cljs.core.async.close_BANG_.call(null,out);var state_143725__$1 = state_143725;var statearr_143731_143753 = state_143725__$1;(statearr_143731_143753[2] = inst_143719);
(statearr_143731_143753[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 6))
{var inst_143721 = (state_143725[2]);var state_143725__$1 = state_143725;var statearr_143732_143754 = state_143725__$1;(statearr_143732_143754[2] = inst_143721);
(statearr_143732_143754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 7))
{var inst_143704 = (state_143725[8]);var inst_143705 = (state_143725[9]);var inst_143704__$1 = (state_143725[2]);var inst_143705__$1 = cljs.core.nth.call(null,inst_143704__$1,0,null);var inst_143706 = cljs.core.nth.call(null,inst_143704__$1,1,null);var inst_143707 = (inst_143705__$1 == null);var state_143725__$1 = (function (){var statearr_143733 = state_143725;(statearr_143733[10] = inst_143706);
(statearr_143733[8] = inst_143704__$1);
(statearr_143733[9] = inst_143705__$1);
return statearr_143733;
})();if(cljs.core.truth_(inst_143707))
{var statearr_143734_143755 = state_143725__$1;(statearr_143734_143755[1] = 8);
} else
{var statearr_143735_143756 = state_143725__$1;(statearr_143735_143756[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 8))
{var inst_143706 = (state_143725[10]);var inst_143697 = (state_143725[7]);var inst_143704 = (state_143725[8]);var inst_143705 = (state_143725[9]);var inst_143709 = (function (){var c = inst_143706;var v = inst_143705;var vec__143702 = inst_143704;var cs = inst_143697;return ((function (c,v,vec__143702,cs,inst_143706,inst_143697,inst_143704,inst_143705,state_val_143726){
return (function (p1__143642_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__143642_SHARP_);
});
;})(c,v,vec__143702,cs,inst_143706,inst_143697,inst_143704,inst_143705,state_val_143726))
})();var inst_143710 = cljs.core.filterv.call(null,inst_143709,inst_143697);var inst_143697__$1 = inst_143710;var state_143725__$1 = (function (){var statearr_143736 = state_143725;(statearr_143736[7] = inst_143697__$1);
return statearr_143736;
})();var statearr_143737_143757 = state_143725__$1;(statearr_143737_143757[2] = null);
(statearr_143737_143757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 9))
{var inst_143705 = (state_143725[9]);var state_143725__$1 = state_143725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143725__$1,11,out,inst_143705);
} else
{if((state_val_143726 === 10))
{var inst_143717 = (state_143725[2]);var state_143725__$1 = state_143725;var statearr_143739_143758 = state_143725__$1;(statearr_143739_143758[2] = inst_143717);
(statearr_143739_143758[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143726 === 11))
{var inst_143697 = (state_143725[7]);var inst_143714 = (state_143725[2]);var tmp143738 = inst_143697;var inst_143697__$1 = tmp143738;var state_143725__$1 = (function (){var statearr_143740 = state_143725;(statearr_143740[7] = inst_143697__$1);
(statearr_143740[11] = inst_143714);
return statearr_143740;
})();var statearr_143741_143759 = state_143725__$1;(statearr_143741_143759[2] = null);
(statearr_143741_143759[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_143745 = (new Array(12));(statearr_143745[0] = state_machine__13310__auto__);
(statearr_143745[1] = 1);
return statearr_143745;
});
var state_machine__13310__auto____1 = (function (state_143725){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_143725);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e143746){if((e143746 instanceof Object))
{var ex__13313__auto__ = e143746;var statearr_143747_143760 = state_143725;(statearr_143747_143760[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143725);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143761 = state_143725;
state_143725 = G__143761;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_143725){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_143725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_143748 = f__13410__auto__.call(null);(statearr_143748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___143749);
return statearr_143748;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___143854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_143831){var state_val_143832 = (state_143831[1]);if((state_val_143832 === 1))
{var inst_143808 = 0;var state_143831__$1 = (function (){var statearr_143833 = state_143831;(statearr_143833[7] = inst_143808);
return statearr_143833;
})();var statearr_143834_143855 = state_143831__$1;(statearr_143834_143855[2] = null);
(statearr_143834_143855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 2))
{var inst_143808 = (state_143831[7]);var inst_143810 = (inst_143808 < n);var state_143831__$1 = state_143831;if(cljs.core.truth_(inst_143810))
{var statearr_143835_143856 = state_143831__$1;(statearr_143835_143856[1] = 4);
} else
{var statearr_143836_143857 = state_143831__$1;(statearr_143836_143857[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 3))
{var inst_143828 = (state_143831[2]);var inst_143829 = cljs.core.async.close_BANG_.call(null,out);var state_143831__$1 = (function (){var statearr_143837 = state_143831;(statearr_143837[8] = inst_143828);
return statearr_143837;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143831__$1,inst_143829);
} else
{if((state_val_143832 === 4))
{var state_143831__$1 = state_143831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143831__$1,7,ch);
} else
{if((state_val_143832 === 5))
{var state_143831__$1 = state_143831;var statearr_143838_143858 = state_143831__$1;(statearr_143838_143858[2] = null);
(statearr_143838_143858[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 6))
{var inst_143826 = (state_143831[2]);var state_143831__$1 = state_143831;var statearr_143839_143859 = state_143831__$1;(statearr_143839_143859[2] = inst_143826);
(statearr_143839_143859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 7))
{var inst_143813 = (state_143831[9]);var inst_143813__$1 = (state_143831[2]);var inst_143814 = (inst_143813__$1 == null);var inst_143815 = cljs.core.not.call(null,inst_143814);var state_143831__$1 = (function (){var statearr_143840 = state_143831;(statearr_143840[9] = inst_143813__$1);
return statearr_143840;
})();if(inst_143815)
{var statearr_143841_143860 = state_143831__$1;(statearr_143841_143860[1] = 8);
} else
{var statearr_143842_143861 = state_143831__$1;(statearr_143842_143861[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 8))
{var inst_143813 = (state_143831[9]);var state_143831__$1 = state_143831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143831__$1,11,out,inst_143813);
} else
{if((state_val_143832 === 9))
{var state_143831__$1 = state_143831;var statearr_143843_143862 = state_143831__$1;(statearr_143843_143862[2] = null);
(statearr_143843_143862[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 10))
{var inst_143823 = (state_143831[2]);var state_143831__$1 = state_143831;var statearr_143844_143863 = state_143831__$1;(statearr_143844_143863[2] = inst_143823);
(statearr_143844_143863[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143832 === 11))
{var inst_143808 = (state_143831[7]);var inst_143818 = (state_143831[2]);var inst_143819 = (inst_143808 + 1);var inst_143808__$1 = inst_143819;var state_143831__$1 = (function (){var statearr_143845 = state_143831;(statearr_143845[10] = inst_143818);
(statearr_143845[7] = inst_143808__$1);
return statearr_143845;
})();var statearr_143846_143864 = state_143831__$1;(statearr_143846_143864[2] = null);
(statearr_143846_143864[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_143850 = (new Array(11));(statearr_143850[0] = state_machine__13310__auto__);
(statearr_143850[1] = 1);
return statearr_143850;
});
var state_machine__13310__auto____1 = (function (state_143831){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_143831);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e143851){if((e143851 instanceof Object))
{var ex__13313__auto__ = e143851;var statearr_143852_143865 = state_143831;(statearr_143852_143865[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143866 = state_143831;
state_143831 = G__143866;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_143831){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_143831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_143853 = f__13410__auto__.call(null);(statearr_143853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___143854);
return statearr_143853;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___143963 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_143938){var state_val_143939 = (state_143938[1]);if((state_val_143939 === 1))
{var inst_143915 = null;var state_143938__$1 = (function (){var statearr_143940 = state_143938;(statearr_143940[7] = inst_143915);
return statearr_143940;
})();var statearr_143941_143964 = state_143938__$1;(statearr_143941_143964[2] = null);
(statearr_143941_143964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 2))
{var state_143938__$1 = state_143938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143938__$1,4,ch);
} else
{if((state_val_143939 === 3))
{var inst_143935 = (state_143938[2]);var inst_143936 = cljs.core.async.close_BANG_.call(null,out);var state_143938__$1 = (function (){var statearr_143942 = state_143938;(statearr_143942[8] = inst_143935);
return statearr_143942;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143938__$1,inst_143936);
} else
{if((state_val_143939 === 4))
{var inst_143918 = (state_143938[9]);var inst_143918__$1 = (state_143938[2]);var inst_143919 = (inst_143918__$1 == null);var inst_143920 = cljs.core.not.call(null,inst_143919);var state_143938__$1 = (function (){var statearr_143943 = state_143938;(statearr_143943[9] = inst_143918__$1);
return statearr_143943;
})();if(inst_143920)
{var statearr_143944_143965 = state_143938__$1;(statearr_143944_143965[1] = 5);
} else
{var statearr_143945_143966 = state_143938__$1;(statearr_143945_143966[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 5))
{var inst_143918 = (state_143938[9]);var inst_143915 = (state_143938[7]);var inst_143922 = cljs.core._EQ_.call(null,inst_143918,inst_143915);var state_143938__$1 = state_143938;if(inst_143922)
{var statearr_143946_143967 = state_143938__$1;(statearr_143946_143967[1] = 8);
} else
{var statearr_143947_143968 = state_143938__$1;(statearr_143947_143968[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 6))
{var state_143938__$1 = state_143938;var statearr_143949_143969 = state_143938__$1;(statearr_143949_143969[2] = null);
(statearr_143949_143969[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 7))
{var inst_143933 = (state_143938[2]);var state_143938__$1 = state_143938;var statearr_143950_143970 = state_143938__$1;(statearr_143950_143970[2] = inst_143933);
(statearr_143950_143970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 8))
{var inst_143915 = (state_143938[7]);var tmp143948 = inst_143915;var inst_143915__$1 = tmp143948;var state_143938__$1 = (function (){var statearr_143951 = state_143938;(statearr_143951[7] = inst_143915__$1);
return statearr_143951;
})();var statearr_143952_143971 = state_143938__$1;(statearr_143952_143971[2] = null);
(statearr_143952_143971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 9))
{var inst_143918 = (state_143938[9]);var state_143938__$1 = state_143938;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143938__$1,11,out,inst_143918);
} else
{if((state_val_143939 === 10))
{var inst_143930 = (state_143938[2]);var state_143938__$1 = state_143938;var statearr_143953_143972 = state_143938__$1;(statearr_143953_143972[2] = inst_143930);
(statearr_143953_143972[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_143939 === 11))
{var inst_143918 = (state_143938[9]);var inst_143927 = (state_143938[2]);var inst_143915 = inst_143918;var state_143938__$1 = (function (){var statearr_143954 = state_143938;(statearr_143954[7] = inst_143915);
(statearr_143954[10] = inst_143927);
return statearr_143954;
})();var statearr_143955_143973 = state_143938__$1;(statearr_143955_143973[2] = null);
(statearr_143955_143973[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_143959 = (new Array(11));(statearr_143959[0] = state_machine__13310__auto__);
(statearr_143959[1] = 1);
return statearr_143959;
});
var state_machine__13310__auto____1 = (function (state_143938){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_143938);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e143960){if((e143960 instanceof Object))
{var ex__13313__auto__ = e143960;var statearr_143961_143974 = state_143938;(statearr_143961_143974[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143938);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e143960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__143975 = state_143938;
state_143938 = G__143975;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_143938){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_143938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_143962 = f__13410__auto__.call(null);(statearr_143962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___143963);
return statearr_143962;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___144110 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_144080){var state_val_144081 = (state_144080[1]);if((state_val_144081 === 1))
{var inst_144043 = (new Array(n));var inst_144044 = inst_144043;var inst_144045 = 0;var state_144080__$1 = (function (){var statearr_144082 = state_144080;(statearr_144082[7] = inst_144045);
(statearr_144082[8] = inst_144044);
return statearr_144082;
})();var statearr_144083_144111 = state_144080__$1;(statearr_144083_144111[2] = null);
(statearr_144083_144111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 2))
{var state_144080__$1 = state_144080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144080__$1,4,ch);
} else
{if((state_val_144081 === 3))
{var inst_144078 = (state_144080[2]);var state_144080__$1 = state_144080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144080__$1,inst_144078);
} else
{if((state_val_144081 === 4))
{var inst_144048 = (state_144080[9]);var inst_144048__$1 = (state_144080[2]);var inst_144049 = (inst_144048__$1 == null);var inst_144050 = cljs.core.not.call(null,inst_144049);var state_144080__$1 = (function (){var statearr_144084 = state_144080;(statearr_144084[9] = inst_144048__$1);
return statearr_144084;
})();if(inst_144050)
{var statearr_144085_144112 = state_144080__$1;(statearr_144085_144112[1] = 5);
} else
{var statearr_144086_144113 = state_144080__$1;(statearr_144086_144113[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 5))
{var inst_144048 = (state_144080[9]);var inst_144053 = (state_144080[10]);var inst_144045 = (state_144080[7]);var inst_144044 = (state_144080[8]);var inst_144052 = (inst_144044[inst_144045] = inst_144048);var inst_144053__$1 = (inst_144045 + 1);var inst_144054 = (inst_144053__$1 < n);var state_144080__$1 = (function (){var statearr_144087 = state_144080;(statearr_144087[10] = inst_144053__$1);
(statearr_144087[11] = inst_144052);
return statearr_144087;
})();if(cljs.core.truth_(inst_144054))
{var statearr_144088_144114 = state_144080__$1;(statearr_144088_144114[1] = 8);
} else
{var statearr_144089_144115 = state_144080__$1;(statearr_144089_144115[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 6))
{var inst_144045 = (state_144080[7]);var inst_144066 = (inst_144045 > 0);var state_144080__$1 = state_144080;if(cljs.core.truth_(inst_144066))
{var statearr_144091_144116 = state_144080__$1;(statearr_144091_144116[1] = 12);
} else
{var statearr_144092_144117 = state_144080__$1;(statearr_144092_144117[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 7))
{var inst_144076 = (state_144080[2]);var state_144080__$1 = state_144080;var statearr_144093_144118 = state_144080__$1;(statearr_144093_144118[2] = inst_144076);
(statearr_144093_144118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 8))
{var inst_144053 = (state_144080[10]);var inst_144044 = (state_144080[8]);var tmp144090 = inst_144044;var inst_144044__$1 = tmp144090;var inst_144045 = inst_144053;var state_144080__$1 = (function (){var statearr_144094 = state_144080;(statearr_144094[7] = inst_144045);
(statearr_144094[8] = inst_144044__$1);
return statearr_144094;
})();var statearr_144095_144119 = state_144080__$1;(statearr_144095_144119[2] = null);
(statearr_144095_144119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 9))
{var inst_144044 = (state_144080[8]);var inst_144058 = cljs.core.vec.call(null,inst_144044);var state_144080__$1 = state_144080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144080__$1,11,out,inst_144058);
} else
{if((state_val_144081 === 10))
{var inst_144064 = (state_144080[2]);var state_144080__$1 = state_144080;var statearr_144096_144120 = state_144080__$1;(statearr_144096_144120[2] = inst_144064);
(statearr_144096_144120[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 11))
{var inst_144060 = (state_144080[2]);var inst_144061 = (new Array(n));var inst_144044 = inst_144061;var inst_144045 = 0;var state_144080__$1 = (function (){var statearr_144097 = state_144080;(statearr_144097[12] = inst_144060);
(statearr_144097[7] = inst_144045);
(statearr_144097[8] = inst_144044);
return statearr_144097;
})();var statearr_144098_144121 = state_144080__$1;(statearr_144098_144121[2] = null);
(statearr_144098_144121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 12))
{var inst_144044 = (state_144080[8]);var inst_144068 = cljs.core.vec.call(null,inst_144044);var state_144080__$1 = state_144080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144080__$1,15,out,inst_144068);
} else
{if((state_val_144081 === 13))
{var state_144080__$1 = state_144080;var statearr_144099_144122 = state_144080__$1;(statearr_144099_144122[2] = null);
(statearr_144099_144122[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 14))
{var inst_144073 = (state_144080[2]);var inst_144074 = cljs.core.async.close_BANG_.call(null,out);var state_144080__$1 = (function (){var statearr_144100 = state_144080;(statearr_144100[13] = inst_144073);
return statearr_144100;
})();var statearr_144101_144123 = state_144080__$1;(statearr_144101_144123[2] = inst_144074);
(statearr_144101_144123[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144081 === 15))
{var inst_144070 = (state_144080[2]);var state_144080__$1 = state_144080;var statearr_144102_144124 = state_144080__$1;(statearr_144102_144124[2] = inst_144070);
(statearr_144102_144124[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_144106 = (new Array(14));(statearr_144106[0] = state_machine__13310__auto__);
(statearr_144106[1] = 1);
return statearr_144106;
});
var state_machine__13310__auto____1 = (function (state_144080){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_144080);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e144107){if((e144107 instanceof Object))
{var ex__13313__auto__ = e144107;var statearr_144108_144125 = state_144080;(statearr_144108_144125[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e144107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__144126 = state_144080;
state_144080 = G__144126;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_144080){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_144080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_144109 = f__13410__auto__.call(null);(statearr_144109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___144110);
return statearr_144109;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___144269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_144239){var state_val_144240 = (state_144239[1]);if((state_val_144240 === 1))
{var inst_144198 = (new Array(0));var inst_144199 = inst_144198;var inst_144200 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_144239__$1 = (function (){var statearr_144241 = state_144239;(statearr_144241[7] = inst_144199);
(statearr_144241[8] = inst_144200);
return statearr_144241;
})();var statearr_144242_144270 = state_144239__$1;(statearr_144242_144270[2] = null);
(statearr_144242_144270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 2))
{var state_144239__$1 = state_144239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144239__$1,4,ch);
} else
{if((state_val_144240 === 3))
{var inst_144237 = (state_144239[2]);var state_144239__$1 = state_144239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144239__$1,inst_144237);
} else
{if((state_val_144240 === 4))
{var inst_144203 = (state_144239[9]);var inst_144203__$1 = (state_144239[2]);var inst_144204 = (inst_144203__$1 == null);var inst_144205 = cljs.core.not.call(null,inst_144204);var state_144239__$1 = (function (){var statearr_144243 = state_144239;(statearr_144243[9] = inst_144203__$1);
return statearr_144243;
})();if(inst_144205)
{var statearr_144244_144271 = state_144239__$1;(statearr_144244_144271[1] = 5);
} else
{var statearr_144245_144272 = state_144239__$1;(statearr_144245_144272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 5))
{var inst_144207 = (state_144239[10]);var inst_144203 = (state_144239[9]);var inst_144200 = (state_144239[8]);var inst_144207__$1 = f.call(null,inst_144203);var inst_144208 = cljs.core._EQ_.call(null,inst_144207__$1,inst_144200);var inst_144209 = cljs.core.keyword_identical_QMARK_.call(null,inst_144200,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_144210 = (inst_144208) || (inst_144209);var state_144239__$1 = (function (){var statearr_144246 = state_144239;(statearr_144246[10] = inst_144207__$1);
return statearr_144246;
})();if(cljs.core.truth_(inst_144210))
{var statearr_144247_144273 = state_144239__$1;(statearr_144247_144273[1] = 8);
} else
{var statearr_144248_144274 = state_144239__$1;(statearr_144248_144274[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 6))
{var inst_144199 = (state_144239[7]);var inst_144224 = inst_144199.length;var inst_144225 = (inst_144224 > 0);var state_144239__$1 = state_144239;if(cljs.core.truth_(inst_144225))
{var statearr_144250_144275 = state_144239__$1;(statearr_144250_144275[1] = 12);
} else
{var statearr_144251_144276 = state_144239__$1;(statearr_144251_144276[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 7))
{var inst_144235 = (state_144239[2]);var state_144239__$1 = state_144239;var statearr_144252_144277 = state_144239__$1;(statearr_144252_144277[2] = inst_144235);
(statearr_144252_144277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 8))
{var inst_144199 = (state_144239[7]);var inst_144207 = (state_144239[10]);var inst_144203 = (state_144239[9]);var inst_144212 = inst_144199.push(inst_144203);var tmp144249 = inst_144199;var inst_144199__$1 = tmp144249;var inst_144200 = inst_144207;var state_144239__$1 = (function (){var statearr_144253 = state_144239;(statearr_144253[7] = inst_144199__$1);
(statearr_144253[11] = inst_144212);
(statearr_144253[8] = inst_144200);
return statearr_144253;
})();var statearr_144254_144278 = state_144239__$1;(statearr_144254_144278[2] = null);
(statearr_144254_144278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 9))
{var inst_144199 = (state_144239[7]);var inst_144215 = cljs.core.vec.call(null,inst_144199);var state_144239__$1 = state_144239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144239__$1,11,out,inst_144215);
} else
{if((state_val_144240 === 10))
{var inst_144222 = (state_144239[2]);var state_144239__$1 = state_144239;var statearr_144255_144279 = state_144239__$1;(statearr_144255_144279[2] = inst_144222);
(statearr_144255_144279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 11))
{var inst_144207 = (state_144239[10]);var inst_144203 = (state_144239[9]);var inst_144217 = (state_144239[2]);var inst_144218 = (new Array(0));var inst_144219 = inst_144218.push(inst_144203);var inst_144199 = inst_144218;var inst_144200 = inst_144207;var state_144239__$1 = (function (){var statearr_144256 = state_144239;(statearr_144256[7] = inst_144199);
(statearr_144256[12] = inst_144217);
(statearr_144256[13] = inst_144219);
(statearr_144256[8] = inst_144200);
return statearr_144256;
})();var statearr_144257_144280 = state_144239__$1;(statearr_144257_144280[2] = null);
(statearr_144257_144280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 12))
{var inst_144199 = (state_144239[7]);var inst_144227 = cljs.core.vec.call(null,inst_144199);var state_144239__$1 = state_144239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144239__$1,15,out,inst_144227);
} else
{if((state_val_144240 === 13))
{var state_144239__$1 = state_144239;var statearr_144258_144281 = state_144239__$1;(statearr_144258_144281[2] = null);
(statearr_144258_144281[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 14))
{var inst_144232 = (state_144239[2]);var inst_144233 = cljs.core.async.close_BANG_.call(null,out);var state_144239__$1 = (function (){var statearr_144259 = state_144239;(statearr_144259[14] = inst_144232);
return statearr_144259;
})();var statearr_144260_144282 = state_144239__$1;(statearr_144260_144282[2] = inst_144233);
(statearr_144260_144282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_144240 === 15))
{var inst_144229 = (state_144239[2]);var state_144239__$1 = state_144239;var statearr_144261_144283 = state_144239__$1;(statearr_144261_144283[2] = inst_144229);
(statearr_144261_144283[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_144265 = (new Array(15));(statearr_144265[0] = state_machine__13310__auto__);
(statearr_144265[1] = 1);
return statearr_144265;
});
var state_machine__13310__auto____1 = (function (state_144239){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_144239);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e144266){if((e144266 instanceof Object))
{var ex__13313__auto__ = e144266;var statearr_144267_144284 = state_144239;(statearr_144267_144284[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e144266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__144285 = state_144239;
state_144239 = G__144285;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_144239){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_144239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_144268 = f__13410__auto__.call(null);(statearr_144268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___144269);
return statearr_144268;
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
