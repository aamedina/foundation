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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t104074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104074 = (function (f,fn_handler,meta104075){
this.f = f;
this.fn_handler = fn_handler;
this.meta104075 = meta104075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104074.cljs$lang$type = true;
cljs.core.async.t104074.cljs$lang$ctorStr = "cljs.core.async/t104074";
cljs.core.async.t104074.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104074");
});
cljs.core.async.t104074.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t104074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t104074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t104074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104076){var self__ = this;
var _104076__$1 = this;return self__.meta104075;
});
cljs.core.async.t104074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104076,meta104075__$1){var self__ = this;
var _104076__$1 = this;return (new cljs.core.async.t104074(self__.f,self__.fn_handler,meta104075__$1));
});
cljs.core.async.__GT_t104074 = (function __GT_t104074(f__$1,fn_handler__$1,meta104075){return (new cljs.core.async.t104074(f__$1,fn_handler__$1,meta104075));
});
}
return (new cljs.core.async.t104074(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__104078 = buff;if(G__104078)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__104078.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__104078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__104078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__104078);
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
{var val_104079 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_104079);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_104079);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___104080 = n;var x_104081 = 0;while(true){
if((x_104081 < n__7112__auto___104080))
{(a[x_104081] = 0);
{
var G__104082 = (x_104081 + 1);
x_104081 = G__104082;
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
var G__104083 = (i + 1);
i = G__104083;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t104087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104087 = (function (flag,alt_flag,meta104088){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta104088 = meta104088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104087.cljs$lang$type = true;
cljs.core.async.t104087.cljs$lang$ctorStr = "cljs.core.async/t104087";
cljs.core.async.t104087.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104087");
});
cljs.core.async.t104087.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t104087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t104087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t104087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104089){var self__ = this;
var _104089__$1 = this;return self__.meta104088;
});
cljs.core.async.t104087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104089,meta104088__$1){var self__ = this;
var _104089__$1 = this;return (new cljs.core.async.t104087(self__.flag,self__.alt_flag,meta104088__$1));
});
cljs.core.async.__GT_t104087 = (function __GT_t104087(flag__$1,alt_flag__$1,meta104088){return (new cljs.core.async.t104087(flag__$1,alt_flag__$1,meta104088));
});
}
return (new cljs.core.async.t104087(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t104093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104093 = (function (cb,flag,alt_handler,meta104094){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta104094 = meta104094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104093.cljs$lang$type = true;
cljs.core.async.t104093.cljs$lang$ctorStr = "cljs.core.async/t104093";
cljs.core.async.t104093.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104093");
});
cljs.core.async.t104093.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t104093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t104093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t104093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104095){var self__ = this;
var _104095__$1 = this;return self__.meta104094;
});
cljs.core.async.t104093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104095,meta104094__$1){var self__ = this;
var _104095__$1 = this;return (new cljs.core.async.t104093(self__.cb,self__.flag,self__.alt_handler,meta104094__$1));
});
cljs.core.async.__GT_t104093 = (function __GT_t104093(cb__$1,flag__$1,alt_handler__$1,meta104094){return (new cljs.core.async.t104093(cb__$1,flag__$1,alt_handler__$1,meta104094));
});
}
return (new cljs.core.async.t104093(cb,flag,alt_handler,null));
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
return (function (p1__104096_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__104096_SHARP_,port], null));
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
var G__104097 = (i + 1);
i = G__104097;
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
var alts_BANG___delegate = function (ports,p__104098){var map__104100 = p__104098;var map__104100__$1 = ((cljs.core.seq_QMARK_.call(null,map__104100))?cljs.core.apply.call(null,cljs.core.hash_map,map__104100):map__104100);var opts = map__104100__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__104098 = null;if (arguments.length > 1) {
  p__104098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__104098);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__104101){
var ports = cljs.core.first(arglist__104101);
var p__104098 = cljs.core.rest(arglist__104101);
return alts_BANG___delegate(ports,p__104098);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t104109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104109 = (function (ch,f,map_LT_,meta104110){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta104110 = meta104110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104109.cljs$lang$type = true;
cljs.core.async.t104109.cljs$lang$ctorStr = "cljs.core.async/t104109";
cljs.core.async.t104109.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104109");
});
cljs.core.async.t104109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t104109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t104109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t104109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t104112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104112 = (function (fn1,_,meta104110,ch,f,map_LT_,meta104113){
this.fn1 = fn1;
this._ = _;
this.meta104110 = meta104110;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta104113 = meta104113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104112.cljs$lang$type = true;
cljs.core.async.t104112.cljs$lang$ctorStr = "cljs.core.async/t104112";
cljs.core.async.t104112.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104112");
});
cljs.core.async.t104112.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t104112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t104112.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t104112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__104102_SHARP_){return f1.call(null,(((p1__104102_SHARP_ == null))?null:self__.f.call(null,p1__104102_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t104112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104114){var self__ = this;
var _104114__$1 = this;return self__.meta104113;
});
cljs.core.async.t104112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104114,meta104113__$1){var self__ = this;
var _104114__$1 = this;return (new cljs.core.async.t104112(self__.fn1,self__._,self__.meta104110,self__.ch,self__.f,self__.map_LT_,meta104113__$1));
});
cljs.core.async.__GT_t104112 = (function __GT_t104112(fn1__$1,___$2,meta104110__$1,ch__$2,f__$2,map_LT___$2,meta104113){return (new cljs.core.async.t104112(fn1__$1,___$2,meta104110__$1,ch__$2,f__$2,map_LT___$2,meta104113));
});
}
return (new cljs.core.async.t104112(fn1,___$1,self__.meta104110,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t104109.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t104109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t104109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104111){var self__ = this;
var _104111__$1 = this;return self__.meta104110;
});
cljs.core.async.t104109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104111,meta104110__$1){var self__ = this;
var _104111__$1 = this;return (new cljs.core.async.t104109(self__.ch,self__.f,self__.map_LT_,meta104110__$1));
});
cljs.core.async.__GT_t104109 = (function __GT_t104109(ch__$1,f__$1,map_LT___$1,meta104110){return (new cljs.core.async.t104109(ch__$1,f__$1,map_LT___$1,meta104110));
});
}
return (new cljs.core.async.t104109(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t104118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104118 = (function (ch,f,map_GT_,meta104119){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta104119 = meta104119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104118.cljs$lang$type = true;
cljs.core.async.t104118.cljs$lang$ctorStr = "cljs.core.async/t104118";
cljs.core.async.t104118.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104118");
});
cljs.core.async.t104118.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t104118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t104118.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t104118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t104118.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t104118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t104118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104120){var self__ = this;
var _104120__$1 = this;return self__.meta104119;
});
cljs.core.async.t104118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104120,meta104119__$1){var self__ = this;
var _104120__$1 = this;return (new cljs.core.async.t104118(self__.ch,self__.f,self__.map_GT_,meta104119__$1));
});
cljs.core.async.__GT_t104118 = (function __GT_t104118(ch__$1,f__$1,map_GT___$1,meta104119){return (new cljs.core.async.t104118(ch__$1,f__$1,map_GT___$1,meta104119));
});
}
return (new cljs.core.async.t104118(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t104124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t104124 = (function (ch,p,filter_GT_,meta104125){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta104125 = meta104125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t104124.cljs$lang$type = true;
cljs.core.async.t104124.cljs$lang$ctorStr = "cljs.core.async/t104124";
cljs.core.async.t104124.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t104124");
});
cljs.core.async.t104124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t104124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t104124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t104124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t104124.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t104124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t104124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104126){var self__ = this;
var _104126__$1 = this;return self__.meta104125;
});
cljs.core.async.t104124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104126,meta104125__$1){var self__ = this;
var _104126__$1 = this;return (new cljs.core.async.t104124(self__.ch,self__.p,self__.filter_GT_,meta104125__$1));
});
cljs.core.async.__GT_t104124 = (function __GT_t104124(ch__$1,p__$1,filter_GT___$1,meta104125){return (new cljs.core.async.t104124(ch__$1,p__$1,filter_GT___$1,meta104125));
});
}
return (new cljs.core.async.t104124(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___104209 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_104188){var state_val_104189 = (state_104188[1]);if((state_val_104189 === 1))
{var state_104188__$1 = state_104188;var statearr_104190_104210 = state_104188__$1;(statearr_104190_104210[2] = null);
(statearr_104190_104210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 2))
{var state_104188__$1 = state_104188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104188__$1,4,ch);
} else
{if((state_val_104189 === 3))
{var inst_104186 = (state_104188[2]);var state_104188__$1 = state_104188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104188__$1,inst_104186);
} else
{if((state_val_104189 === 4))
{var inst_104170 = (state_104188[7]);var inst_104170__$1 = (state_104188[2]);var inst_104171 = (inst_104170__$1 == null);var state_104188__$1 = (function (){var statearr_104191 = state_104188;(statearr_104191[7] = inst_104170__$1);
return statearr_104191;
})();if(cljs.core.truth_(inst_104171))
{var statearr_104192_104211 = state_104188__$1;(statearr_104192_104211[1] = 5);
} else
{var statearr_104193_104212 = state_104188__$1;(statearr_104193_104212[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 5))
{var inst_104173 = cljs.core.async.close_BANG_.call(null,out);var state_104188__$1 = state_104188;var statearr_104194_104213 = state_104188__$1;(statearr_104194_104213[2] = inst_104173);
(statearr_104194_104213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 6))
{var inst_104170 = (state_104188[7]);var inst_104175 = p.call(null,inst_104170);var state_104188__$1 = state_104188;if(cljs.core.truth_(inst_104175))
{var statearr_104195_104214 = state_104188__$1;(statearr_104195_104214[1] = 8);
} else
{var statearr_104196_104215 = state_104188__$1;(statearr_104196_104215[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 7))
{var inst_104184 = (state_104188[2]);var state_104188__$1 = state_104188;var statearr_104197_104216 = state_104188__$1;(statearr_104197_104216[2] = inst_104184);
(statearr_104197_104216[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 8))
{var inst_104170 = (state_104188[7]);var state_104188__$1 = state_104188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104188__$1,11,out,inst_104170);
} else
{if((state_val_104189 === 9))
{var state_104188__$1 = state_104188;var statearr_104198_104217 = state_104188__$1;(statearr_104198_104217[2] = null);
(statearr_104198_104217[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 10))
{var inst_104181 = (state_104188[2]);var state_104188__$1 = (function (){var statearr_104199 = state_104188;(statearr_104199[8] = inst_104181);
return statearr_104199;
})();var statearr_104200_104218 = state_104188__$1;(statearr_104200_104218[2] = null);
(statearr_104200_104218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104189 === 11))
{var inst_104178 = (state_104188[2]);var state_104188__$1 = state_104188;var statearr_104201_104219 = state_104188__$1;(statearr_104201_104219[2] = inst_104178);
(statearr_104201_104219[1] = 10);
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
var state_machine__13310__auto____0 = (function (){var statearr_104205 = (new Array(9));(statearr_104205[0] = state_machine__13310__auto__);
(statearr_104205[1] = 1);
return statearr_104205;
});
var state_machine__13310__auto____1 = (function (state_104188){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_104188);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e104206){if((e104206 instanceof Object))
{var ex__13313__auto__ = e104206;var statearr_104207_104220 = state_104188;(statearr_104207_104220[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104221 = state_104188;
state_104188 = G__104221;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_104188){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_104188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_104208 = f__13410__auto__.call(null);(statearr_104208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___104209);
return statearr_104208;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_104373){var state_val_104374 = (state_104373[1]);if((state_val_104374 === 1))
{var state_104373__$1 = state_104373;var statearr_104375_104412 = state_104373__$1;(statearr_104375_104412[2] = null);
(statearr_104375_104412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 2))
{var state_104373__$1 = state_104373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104373__$1,4,in$);
} else
{if((state_val_104374 === 3))
{var inst_104371 = (state_104373[2]);var state_104373__$1 = state_104373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104373__$1,inst_104371);
} else
{if((state_val_104374 === 4))
{var inst_104319 = (state_104373[7]);var inst_104319__$1 = (state_104373[2]);var inst_104320 = (inst_104319__$1 == null);var state_104373__$1 = (function (){var statearr_104376 = state_104373;(statearr_104376[7] = inst_104319__$1);
return statearr_104376;
})();if(cljs.core.truth_(inst_104320))
{var statearr_104377_104413 = state_104373__$1;(statearr_104377_104413[1] = 5);
} else
{var statearr_104378_104414 = state_104373__$1;(statearr_104378_104414[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 5))
{var inst_104322 = cljs.core.async.close_BANG_.call(null,out);var state_104373__$1 = state_104373;var statearr_104379_104415 = state_104373__$1;(statearr_104379_104415[2] = inst_104322);
(statearr_104379_104415[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 6))
{var inst_104319 = (state_104373[7]);var inst_104324 = f.call(null,inst_104319);var inst_104329 = cljs.core.seq.call(null,inst_104324);var inst_104330 = inst_104329;var inst_104331 = null;var inst_104332 = 0;var inst_104333 = 0;var state_104373__$1 = (function (){var statearr_104380 = state_104373;(statearr_104380[8] = inst_104332);
(statearr_104380[9] = inst_104333);
(statearr_104380[10] = inst_104330);
(statearr_104380[11] = inst_104331);
return statearr_104380;
})();var statearr_104381_104416 = state_104373__$1;(statearr_104381_104416[2] = null);
(statearr_104381_104416[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 7))
{var inst_104369 = (state_104373[2]);var state_104373__$1 = state_104373;var statearr_104382_104417 = state_104373__$1;(statearr_104382_104417[2] = inst_104369);
(statearr_104382_104417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 8))
{var inst_104332 = (state_104373[8]);var inst_104333 = (state_104373[9]);var inst_104335 = (inst_104333 < inst_104332);var inst_104336 = inst_104335;var state_104373__$1 = state_104373;if(cljs.core.truth_(inst_104336))
{var statearr_104383_104418 = state_104373__$1;(statearr_104383_104418[1] = 10);
} else
{var statearr_104384_104419 = state_104373__$1;(statearr_104384_104419[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 9))
{var inst_104366 = (state_104373[2]);var state_104373__$1 = (function (){var statearr_104385 = state_104373;(statearr_104385[12] = inst_104366);
return statearr_104385;
})();var statearr_104386_104420 = state_104373__$1;(statearr_104386_104420[2] = null);
(statearr_104386_104420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 10))
{var inst_104333 = (state_104373[9]);var inst_104331 = (state_104373[11]);var inst_104338 = cljs.core._nth.call(null,inst_104331,inst_104333);var state_104373__$1 = state_104373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104373__$1,13,out,inst_104338);
} else
{if((state_val_104374 === 11))
{var inst_104344 = (state_104373[13]);var inst_104330 = (state_104373[10]);var inst_104344__$1 = cljs.core.seq.call(null,inst_104330);var state_104373__$1 = (function (){var statearr_104390 = state_104373;(statearr_104390[13] = inst_104344__$1);
return statearr_104390;
})();if(inst_104344__$1)
{var statearr_104391_104421 = state_104373__$1;(statearr_104391_104421[1] = 14);
} else
{var statearr_104392_104422 = state_104373__$1;(statearr_104392_104422[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 12))
{var inst_104364 = (state_104373[2]);var state_104373__$1 = state_104373;var statearr_104393_104423 = state_104373__$1;(statearr_104393_104423[2] = inst_104364);
(statearr_104393_104423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 13))
{var inst_104332 = (state_104373[8]);var inst_104333 = (state_104373[9]);var inst_104330 = (state_104373[10]);var inst_104331 = (state_104373[11]);var inst_104340 = (state_104373[2]);var inst_104341 = (inst_104333 + 1);var tmp104387 = inst_104332;var tmp104388 = inst_104330;var tmp104389 = inst_104331;var inst_104330__$1 = tmp104388;var inst_104331__$1 = tmp104389;var inst_104332__$1 = tmp104387;var inst_104333__$1 = inst_104341;var state_104373__$1 = (function (){var statearr_104394 = state_104373;(statearr_104394[14] = inst_104340);
(statearr_104394[8] = inst_104332__$1);
(statearr_104394[9] = inst_104333__$1);
(statearr_104394[10] = inst_104330__$1);
(statearr_104394[11] = inst_104331__$1);
return statearr_104394;
})();var statearr_104395_104424 = state_104373__$1;(statearr_104395_104424[2] = null);
(statearr_104395_104424[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 14))
{var inst_104344 = (state_104373[13]);var inst_104346 = cljs.core.chunked_seq_QMARK_.call(null,inst_104344);var state_104373__$1 = state_104373;if(inst_104346)
{var statearr_104396_104425 = state_104373__$1;(statearr_104396_104425[1] = 17);
} else
{var statearr_104397_104426 = state_104373__$1;(statearr_104397_104426[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 15))
{var state_104373__$1 = state_104373;var statearr_104398_104427 = state_104373__$1;(statearr_104398_104427[2] = null);
(statearr_104398_104427[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 16))
{var inst_104362 = (state_104373[2]);var state_104373__$1 = state_104373;var statearr_104399_104428 = state_104373__$1;(statearr_104399_104428[2] = inst_104362);
(statearr_104399_104428[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 17))
{var inst_104344 = (state_104373[13]);var inst_104348 = cljs.core.chunk_first.call(null,inst_104344);var inst_104349 = cljs.core.chunk_rest.call(null,inst_104344);var inst_104350 = cljs.core.count.call(null,inst_104348);var inst_104330 = inst_104349;var inst_104331 = inst_104348;var inst_104332 = inst_104350;var inst_104333 = 0;var state_104373__$1 = (function (){var statearr_104400 = state_104373;(statearr_104400[8] = inst_104332);
(statearr_104400[9] = inst_104333);
(statearr_104400[10] = inst_104330);
(statearr_104400[11] = inst_104331);
return statearr_104400;
})();var statearr_104401_104429 = state_104373__$1;(statearr_104401_104429[2] = null);
(statearr_104401_104429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 18))
{var inst_104344 = (state_104373[13]);var inst_104353 = cljs.core.first.call(null,inst_104344);var state_104373__$1 = state_104373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104373__$1,20,out,inst_104353);
} else
{if((state_val_104374 === 19))
{var inst_104359 = (state_104373[2]);var state_104373__$1 = state_104373;var statearr_104402_104430 = state_104373__$1;(statearr_104402_104430[2] = inst_104359);
(statearr_104402_104430[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104374 === 20))
{var inst_104344 = (state_104373[13]);var inst_104355 = (state_104373[2]);var inst_104356 = cljs.core.next.call(null,inst_104344);var inst_104330 = inst_104356;var inst_104331 = null;var inst_104332 = 0;var inst_104333 = 0;var state_104373__$1 = (function (){var statearr_104403 = state_104373;(statearr_104403[15] = inst_104355);
(statearr_104403[8] = inst_104332);
(statearr_104403[9] = inst_104333);
(statearr_104403[10] = inst_104330);
(statearr_104403[11] = inst_104331);
return statearr_104403;
})();var statearr_104404_104431 = state_104373__$1;(statearr_104404_104431[2] = null);
(statearr_104404_104431[1] = 8);
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
var state_machine__13310__auto____0 = (function (){var statearr_104408 = (new Array(16));(statearr_104408[0] = state_machine__13310__auto__);
(statearr_104408[1] = 1);
return statearr_104408;
});
var state_machine__13310__auto____1 = (function (state_104373){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_104373);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e104409){if((e104409 instanceof Object))
{var ex__13313__auto__ = e104409;var statearr_104410_104432 = state_104373;(statearr_104410_104432[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104433 = state_104373;
state_104373 = G__104433;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_104373){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_104373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_104411 = f__13410__auto__.call(null);(statearr_104411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_104411;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___104514 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_104493){var state_val_104494 = (state_104493[1]);if((state_val_104494 === 1))
{var state_104493__$1 = state_104493;var statearr_104495_104515 = state_104493__$1;(statearr_104495_104515[2] = null);
(statearr_104495_104515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 2))
{var state_104493__$1 = state_104493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104493__$1,4,from);
} else
{if((state_val_104494 === 3))
{var inst_104491 = (state_104493[2]);var state_104493__$1 = state_104493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104493__$1,inst_104491);
} else
{if((state_val_104494 === 4))
{var inst_104476 = (state_104493[7]);var inst_104476__$1 = (state_104493[2]);var inst_104477 = (inst_104476__$1 == null);var state_104493__$1 = (function (){var statearr_104496 = state_104493;(statearr_104496[7] = inst_104476__$1);
return statearr_104496;
})();if(cljs.core.truth_(inst_104477))
{var statearr_104497_104516 = state_104493__$1;(statearr_104497_104516[1] = 5);
} else
{var statearr_104498_104517 = state_104493__$1;(statearr_104498_104517[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 5))
{var state_104493__$1 = state_104493;if(cljs.core.truth_(close_QMARK_))
{var statearr_104499_104518 = state_104493__$1;(statearr_104499_104518[1] = 8);
} else
{var statearr_104500_104519 = state_104493__$1;(statearr_104500_104519[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 6))
{var inst_104476 = (state_104493[7]);var state_104493__$1 = state_104493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104493__$1,11,to,inst_104476);
} else
{if((state_val_104494 === 7))
{var inst_104489 = (state_104493[2]);var state_104493__$1 = state_104493;var statearr_104501_104520 = state_104493__$1;(statearr_104501_104520[2] = inst_104489);
(statearr_104501_104520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 8))
{var inst_104480 = cljs.core.async.close_BANG_.call(null,to);var state_104493__$1 = state_104493;var statearr_104502_104521 = state_104493__$1;(statearr_104502_104521[2] = inst_104480);
(statearr_104502_104521[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 9))
{var state_104493__$1 = state_104493;var statearr_104503_104522 = state_104493__$1;(statearr_104503_104522[2] = null);
(statearr_104503_104522[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 10))
{var inst_104483 = (state_104493[2]);var state_104493__$1 = state_104493;var statearr_104504_104523 = state_104493__$1;(statearr_104504_104523[2] = inst_104483);
(statearr_104504_104523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104494 === 11))
{var inst_104486 = (state_104493[2]);var state_104493__$1 = (function (){var statearr_104505 = state_104493;(statearr_104505[8] = inst_104486);
return statearr_104505;
})();var statearr_104506_104524 = state_104493__$1;(statearr_104506_104524[2] = null);
(statearr_104506_104524[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_104510 = (new Array(9));(statearr_104510[0] = state_machine__13310__auto__);
(statearr_104510[1] = 1);
return statearr_104510;
});
var state_machine__13310__auto____1 = (function (state_104493){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_104493);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e104511){if((e104511 instanceof Object))
{var ex__13313__auto__ = e104511;var statearr_104512_104525 = state_104493;(statearr_104512_104525[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104526 = state_104493;
state_104493 = G__104526;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_104493){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_104493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_104513 = f__13410__auto__.call(null);(statearr_104513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___104514);
return statearr_104513;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___104613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_104591){var state_val_104592 = (state_104591[1]);if((state_val_104592 === 1))
{var state_104591__$1 = state_104591;var statearr_104593_104614 = state_104591__$1;(statearr_104593_104614[2] = null);
(statearr_104593_104614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 2))
{var state_104591__$1 = state_104591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104591__$1,4,ch);
} else
{if((state_val_104592 === 3))
{var inst_104589 = (state_104591[2]);var state_104591__$1 = state_104591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104591__$1,inst_104589);
} else
{if((state_val_104592 === 4))
{var inst_104572 = (state_104591[7]);var inst_104572__$1 = (state_104591[2]);var inst_104573 = (inst_104572__$1 == null);var state_104591__$1 = (function (){var statearr_104594 = state_104591;(statearr_104594[7] = inst_104572__$1);
return statearr_104594;
})();if(cljs.core.truth_(inst_104573))
{var statearr_104595_104615 = state_104591__$1;(statearr_104595_104615[1] = 5);
} else
{var statearr_104596_104616 = state_104591__$1;(statearr_104596_104616[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 5))
{var inst_104575 = cljs.core.async.close_BANG_.call(null,tc);var inst_104576 = cljs.core.async.close_BANG_.call(null,fc);var state_104591__$1 = (function (){var statearr_104597 = state_104591;(statearr_104597[8] = inst_104575);
return statearr_104597;
})();var statearr_104598_104617 = state_104591__$1;(statearr_104598_104617[2] = inst_104576);
(statearr_104598_104617[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 6))
{var inst_104572 = (state_104591[7]);var inst_104578 = p.call(null,inst_104572);var state_104591__$1 = state_104591;if(cljs.core.truth_(inst_104578))
{var statearr_104599_104618 = state_104591__$1;(statearr_104599_104618[1] = 9);
} else
{var statearr_104600_104619 = state_104591__$1;(statearr_104600_104619[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 7))
{var inst_104587 = (state_104591[2]);var state_104591__$1 = state_104591;var statearr_104601_104620 = state_104591__$1;(statearr_104601_104620[2] = inst_104587);
(statearr_104601_104620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 8))
{var inst_104584 = (state_104591[2]);var state_104591__$1 = (function (){var statearr_104602 = state_104591;(statearr_104602[9] = inst_104584);
return statearr_104602;
})();var statearr_104603_104621 = state_104591__$1;(statearr_104603_104621[2] = null);
(statearr_104603_104621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 9))
{var state_104591__$1 = state_104591;var statearr_104604_104622 = state_104591__$1;(statearr_104604_104622[2] = tc);
(statearr_104604_104622[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 10))
{var state_104591__$1 = state_104591;var statearr_104605_104623 = state_104591__$1;(statearr_104605_104623[2] = fc);
(statearr_104605_104623[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104592 === 11))
{var inst_104572 = (state_104591[7]);var inst_104582 = (state_104591[2]);var state_104591__$1 = state_104591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104591__$1,8,inst_104582,inst_104572);
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
var state_machine__13310__auto____0 = (function (){var statearr_104609 = (new Array(10));(statearr_104609[0] = state_machine__13310__auto__);
(statearr_104609[1] = 1);
return statearr_104609;
});
var state_machine__13310__auto____1 = (function (state_104591){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_104591);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e104610){if((e104610 instanceof Object))
{var ex__13313__auto__ = e104610;var statearr_104611_104624 = state_104591;(statearr_104611_104624[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104625 = state_104591;
state_104591 = G__104625;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_104591){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_104591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_104612 = f__13410__auto__.call(null);(statearr_104612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___104613);
return statearr_104612;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_104672){var state_val_104673 = (state_104672[1]);if((state_val_104673 === 7))
{var inst_104668 = (state_104672[2]);var state_104672__$1 = state_104672;var statearr_104674_104690 = state_104672__$1;(statearr_104674_104690[2] = inst_104668);
(statearr_104674_104690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104673 === 6))
{var inst_104661 = (state_104672[7]);var inst_104658 = (state_104672[8]);var inst_104665 = f.call(null,inst_104658,inst_104661);var inst_104658__$1 = inst_104665;var state_104672__$1 = (function (){var statearr_104675 = state_104672;(statearr_104675[8] = inst_104658__$1);
return statearr_104675;
})();var statearr_104676_104691 = state_104672__$1;(statearr_104676_104691[2] = null);
(statearr_104676_104691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104673 === 5))
{var inst_104658 = (state_104672[8]);var state_104672__$1 = state_104672;var statearr_104677_104692 = state_104672__$1;(statearr_104677_104692[2] = inst_104658);
(statearr_104677_104692[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104673 === 4))
{var inst_104661 = (state_104672[7]);var inst_104661__$1 = (state_104672[2]);var inst_104662 = (inst_104661__$1 == null);var state_104672__$1 = (function (){var statearr_104678 = state_104672;(statearr_104678[7] = inst_104661__$1);
return statearr_104678;
})();if(cljs.core.truth_(inst_104662))
{var statearr_104679_104693 = state_104672__$1;(statearr_104679_104693[1] = 5);
} else
{var statearr_104680_104694 = state_104672__$1;(statearr_104680_104694[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104673 === 3))
{var inst_104670 = (state_104672[2]);var state_104672__$1 = state_104672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104672__$1,inst_104670);
} else
{if((state_val_104673 === 2))
{var state_104672__$1 = state_104672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104672__$1,4,ch);
} else
{if((state_val_104673 === 1))
{var inst_104658 = init;var state_104672__$1 = (function (){var statearr_104681 = state_104672;(statearr_104681[8] = inst_104658);
return statearr_104681;
})();var statearr_104682_104695 = state_104672__$1;(statearr_104682_104695[2] = null);
(statearr_104682_104695[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_104686 = (new Array(9));(statearr_104686[0] = state_machine__13310__auto__);
(statearr_104686[1] = 1);
return statearr_104686;
});
var state_machine__13310__auto____1 = (function (state_104672){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_104672);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e104687){if((e104687 instanceof Object))
{var ex__13313__auto__ = e104687;var statearr_104688_104696 = state_104672;(statearr_104688_104696[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104697 = state_104672;
state_104672 = G__104697;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_104672){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_104672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_104689 = f__13410__auto__.call(null);(statearr_104689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_104689;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_104759){var state_val_104760 = (state_104759[1]);if((state_val_104760 === 1))
{var inst_104739 = cljs.core.seq.call(null,coll);var inst_104740 = inst_104739;var state_104759__$1 = (function (){var statearr_104761 = state_104759;(statearr_104761[7] = inst_104740);
return statearr_104761;
})();var statearr_104762_104780 = state_104759__$1;(statearr_104762_104780[2] = null);
(statearr_104762_104780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 2))
{var inst_104740 = (state_104759[7]);var state_104759__$1 = state_104759;if(cljs.core.truth_(inst_104740))
{var statearr_104763_104781 = state_104759__$1;(statearr_104763_104781[1] = 4);
} else
{var statearr_104764_104782 = state_104759__$1;(statearr_104764_104782[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 3))
{var inst_104757 = (state_104759[2]);var state_104759__$1 = state_104759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104759__$1,inst_104757);
} else
{if((state_val_104760 === 4))
{var inst_104740 = (state_104759[7]);var inst_104743 = cljs.core.first.call(null,inst_104740);var state_104759__$1 = state_104759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104759__$1,7,ch,inst_104743);
} else
{if((state_val_104760 === 5))
{var state_104759__$1 = state_104759;if(cljs.core.truth_(close_QMARK_))
{var statearr_104765_104783 = state_104759__$1;(statearr_104765_104783[1] = 8);
} else
{var statearr_104766_104784 = state_104759__$1;(statearr_104766_104784[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 6))
{var inst_104755 = (state_104759[2]);var state_104759__$1 = state_104759;var statearr_104767_104785 = state_104759__$1;(statearr_104767_104785[2] = inst_104755);
(statearr_104767_104785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 7))
{var inst_104740 = (state_104759[7]);var inst_104745 = (state_104759[2]);var inst_104746 = cljs.core.next.call(null,inst_104740);var inst_104740__$1 = inst_104746;var state_104759__$1 = (function (){var statearr_104768 = state_104759;(statearr_104768[7] = inst_104740__$1);
(statearr_104768[8] = inst_104745);
return statearr_104768;
})();var statearr_104769_104786 = state_104759__$1;(statearr_104769_104786[2] = null);
(statearr_104769_104786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 8))
{var inst_104750 = cljs.core.async.close_BANG_.call(null,ch);var state_104759__$1 = state_104759;var statearr_104770_104787 = state_104759__$1;(statearr_104770_104787[2] = inst_104750);
(statearr_104770_104787[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 9))
{var state_104759__$1 = state_104759;var statearr_104771_104788 = state_104759__$1;(statearr_104771_104788[2] = null);
(statearr_104771_104788[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_104760 === 10))
{var inst_104753 = (state_104759[2]);var state_104759__$1 = state_104759;var statearr_104772_104789 = state_104759__$1;(statearr_104772_104789[2] = inst_104753);
(statearr_104772_104789[1] = 6);
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
var state_machine__13310__auto____0 = (function (){var statearr_104776 = (new Array(9));(statearr_104776[0] = state_machine__13310__auto__);
(statearr_104776[1] = 1);
return statearr_104776;
});
var state_machine__13310__auto____1 = (function (state_104759){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_104759);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e104777){if((e104777 instanceof Object))
{var ex__13313__auto__ = e104777;var statearr_104778_104790 = state_104759;(statearr_104778_104790[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e104777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__104791 = state_104759;
state_104759 = G__104791;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_104759){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_104759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_104779 = f__13410__auto__.call(null);(statearr_104779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_104779;
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
cljs.core.async.Mux = (function (){var obj104793 = {};return obj104793;
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
cljs.core.async.Mult = (function (){var obj104795 = {};return obj104795;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t105010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t105010 = (function (cs,ch,mult,meta105011){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta105011 = meta105011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t105010.cljs$lang$type = true;
cljs.core.async.t105010.cljs$lang$ctorStr = "cljs.core.async/t105010";
cljs.core.async.t105010.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t105010");
});})(cs))
;
cljs.core.async.t105010.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t105010.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t105010.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t105010.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t105010.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t105010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t105010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_105012){var self__ = this;
var _105012__$1 = this;return self__.meta105011;
});})(cs))
;
cljs.core.async.t105010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_105012,meta105011__$1){var self__ = this;
var _105012__$1 = this;return (new cljs.core.async.t105010(self__.cs,self__.ch,self__.mult,meta105011__$1));
});})(cs))
;
cljs.core.async.__GT_t105010 = ((function (cs){
return (function __GT_t105010(cs__$1,ch__$1,mult__$1,meta105011){return (new cljs.core.async.t105010(cs__$1,ch__$1,mult__$1,meta105011));
});})(cs))
;
}
return (new cljs.core.async.t105010(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___105224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_105142){var state_val_105143 = (state_105142[1]);if((state_val_105143 === 32))
{var inst_105091 = (state_105142[7]);var inst_105015 = (state_105142[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_105142,31,Object,null,30);var inst_105098 = cljs.core.async.put_BANG_.call(null,inst_105091,inst_105015,done);var state_105142__$1 = state_105142;var statearr_105144_105225 = state_105142__$1;(statearr_105144_105225[2] = inst_105098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105142__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 1))
{var state_105142__$1 = state_105142;var statearr_105145_105226 = state_105142__$1;(statearr_105145_105226[2] = null);
(statearr_105145_105226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 33))
{var inst_105104 = (state_105142[9]);var inst_105106 = cljs.core.chunked_seq_QMARK_.call(null,inst_105104);var state_105142__$1 = state_105142;if(inst_105106)
{var statearr_105146_105227 = state_105142__$1;(statearr_105146_105227[1] = 36);
} else
{var statearr_105147_105228 = state_105142__$1;(statearr_105147_105228[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 2))
{var state_105142__$1 = state_105142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105142__$1,4,ch);
} else
{if((state_val_105143 === 34))
{var state_105142__$1 = state_105142;var statearr_105148_105229 = state_105142__$1;(statearr_105148_105229[2] = null);
(statearr_105148_105229[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 3))
{var inst_105140 = (state_105142[2]);var state_105142__$1 = state_105142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105142__$1,inst_105140);
} else
{if((state_val_105143 === 35))
{var inst_105129 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105149_105230 = state_105142__$1;(statearr_105149_105230[2] = inst_105129);
(statearr_105149_105230[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 4))
{var inst_105015 = (state_105142[8]);var inst_105015__$1 = (state_105142[2]);var inst_105016 = (inst_105015__$1 == null);var state_105142__$1 = (function (){var statearr_105150 = state_105142;(statearr_105150[8] = inst_105015__$1);
return statearr_105150;
})();if(cljs.core.truth_(inst_105016))
{var statearr_105151_105231 = state_105142__$1;(statearr_105151_105231[1] = 5);
} else
{var statearr_105152_105232 = state_105142__$1;(statearr_105152_105232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 36))
{var inst_105104 = (state_105142[9]);var inst_105108 = cljs.core.chunk_first.call(null,inst_105104);var inst_105109 = cljs.core.chunk_rest.call(null,inst_105104);var inst_105110 = cljs.core.count.call(null,inst_105108);var inst_105083 = inst_105109;var inst_105084 = inst_105108;var inst_105085 = inst_105110;var inst_105086 = 0;var state_105142__$1 = (function (){var statearr_105153 = state_105142;(statearr_105153[10] = inst_105086);
(statearr_105153[11] = inst_105085);
(statearr_105153[12] = inst_105083);
(statearr_105153[13] = inst_105084);
return statearr_105153;
})();var statearr_105154_105233 = state_105142__$1;(statearr_105154_105233[2] = null);
(statearr_105154_105233[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 5))
{var inst_105022 = cljs.core.deref.call(null,cs);var inst_105023 = cljs.core.seq.call(null,inst_105022);var inst_105024 = inst_105023;var inst_105025 = null;var inst_105026 = 0;var inst_105027 = 0;var state_105142__$1 = (function (){var statearr_105155 = state_105142;(statearr_105155[14] = inst_105027);
(statearr_105155[15] = inst_105025);
(statearr_105155[16] = inst_105026);
(statearr_105155[17] = inst_105024);
return statearr_105155;
})();var statearr_105156_105234 = state_105142__$1;(statearr_105156_105234[2] = null);
(statearr_105156_105234[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 37))
{var inst_105104 = (state_105142[9]);var inst_105113 = cljs.core.first.call(null,inst_105104);var state_105142__$1 = (function (){var statearr_105157 = state_105142;(statearr_105157[18] = inst_105113);
return statearr_105157;
})();var statearr_105158_105235 = state_105142__$1;(statearr_105158_105235[2] = null);
(statearr_105158_105235[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 6))
{var inst_105074 = cljs.core.deref.call(null,cs);var inst_105075 = cljs.core.keys.call(null,inst_105074);var inst_105076 = cljs.core.count.call(null,inst_105075);var inst_105077 = cljs.core.reset_BANG_.call(null,dctr,inst_105076);var inst_105082 = cljs.core.seq.call(null,inst_105075);var inst_105083 = inst_105082;var inst_105084 = null;var inst_105085 = 0;var inst_105086 = 0;var state_105142__$1 = (function (){var statearr_105159 = state_105142;(statearr_105159[19] = inst_105077);
(statearr_105159[10] = inst_105086);
(statearr_105159[11] = inst_105085);
(statearr_105159[12] = inst_105083);
(statearr_105159[13] = inst_105084);
return statearr_105159;
})();var statearr_105160_105236 = state_105142__$1;(statearr_105160_105236[2] = null);
(statearr_105160_105236[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 38))
{var inst_105126 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105161_105237 = state_105142__$1;(statearr_105161_105237[2] = inst_105126);
(statearr_105161_105237[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 7))
{var inst_105138 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105162_105238 = state_105142__$1;(statearr_105162_105238[2] = inst_105138);
(statearr_105162_105238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 39))
{var inst_105104 = (state_105142[9]);var inst_105122 = (state_105142[2]);var inst_105123 = cljs.core.next.call(null,inst_105104);var inst_105083 = inst_105123;var inst_105084 = null;var inst_105085 = 0;var inst_105086 = 0;var state_105142__$1 = (function (){var statearr_105163 = state_105142;(statearr_105163[20] = inst_105122);
(statearr_105163[10] = inst_105086);
(statearr_105163[11] = inst_105085);
(statearr_105163[12] = inst_105083);
(statearr_105163[13] = inst_105084);
return statearr_105163;
})();var statearr_105164_105239 = state_105142__$1;(statearr_105164_105239[2] = null);
(statearr_105164_105239[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 8))
{var inst_105027 = (state_105142[14]);var inst_105026 = (state_105142[16]);var inst_105029 = (inst_105027 < inst_105026);var inst_105030 = inst_105029;var state_105142__$1 = state_105142;if(cljs.core.truth_(inst_105030))
{var statearr_105165_105240 = state_105142__$1;(statearr_105165_105240[1] = 10);
} else
{var statearr_105166_105241 = state_105142__$1;(statearr_105166_105241[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 40))
{var inst_105113 = (state_105142[18]);var inst_105114 = (state_105142[2]);var inst_105115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_105116 = cljs.core.async.untap_STAR_.call(null,m,inst_105113);var state_105142__$1 = (function (){var statearr_105167 = state_105142;(statearr_105167[21] = inst_105114);
(statearr_105167[22] = inst_105115);
return statearr_105167;
})();var statearr_105168_105242 = state_105142__$1;(statearr_105168_105242[2] = inst_105116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105142__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 9))
{var inst_105072 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105169_105243 = state_105142__$1;(statearr_105169_105243[2] = inst_105072);
(statearr_105169_105243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 41))
{var inst_105113 = (state_105142[18]);var inst_105015 = (state_105142[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_105142,40,Object,null,39);var inst_105120 = cljs.core.async.put_BANG_.call(null,inst_105113,inst_105015,done);var state_105142__$1 = state_105142;var statearr_105170_105244 = state_105142__$1;(statearr_105170_105244[2] = inst_105120);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105142__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 10))
{var inst_105027 = (state_105142[14]);var inst_105025 = (state_105142[15]);var inst_105033 = cljs.core._nth.call(null,inst_105025,inst_105027);var inst_105034 = cljs.core.nth.call(null,inst_105033,0,null);var inst_105035 = cljs.core.nth.call(null,inst_105033,1,null);var state_105142__$1 = (function (){var statearr_105171 = state_105142;(statearr_105171[23] = inst_105034);
return statearr_105171;
})();if(cljs.core.truth_(inst_105035))
{var statearr_105172_105245 = state_105142__$1;(statearr_105172_105245[1] = 13);
} else
{var statearr_105173_105246 = state_105142__$1;(statearr_105173_105246[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 42))
{var inst_105135 = (state_105142[2]);var state_105142__$1 = (function (){var statearr_105174 = state_105142;(statearr_105174[24] = inst_105135);
return statearr_105174;
})();var statearr_105175_105247 = state_105142__$1;(statearr_105175_105247[2] = null);
(statearr_105175_105247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 11))
{var inst_105044 = (state_105142[25]);var inst_105024 = (state_105142[17]);var inst_105044__$1 = cljs.core.seq.call(null,inst_105024);var state_105142__$1 = (function (){var statearr_105176 = state_105142;(statearr_105176[25] = inst_105044__$1);
return statearr_105176;
})();if(inst_105044__$1)
{var statearr_105177_105248 = state_105142__$1;(statearr_105177_105248[1] = 16);
} else
{var statearr_105178_105249 = state_105142__$1;(statearr_105178_105249[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 12))
{var inst_105070 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105179_105250 = state_105142__$1;(statearr_105179_105250[2] = inst_105070);
(statearr_105179_105250[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 13))
{var inst_105034 = (state_105142[23]);var inst_105037 = cljs.core.async.close_BANG_.call(null,inst_105034);var state_105142__$1 = state_105142;var statearr_105183_105251 = state_105142__$1;(statearr_105183_105251[2] = inst_105037);
(statearr_105183_105251[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 14))
{var state_105142__$1 = state_105142;var statearr_105184_105252 = state_105142__$1;(statearr_105184_105252[2] = null);
(statearr_105184_105252[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 15))
{var inst_105027 = (state_105142[14]);var inst_105025 = (state_105142[15]);var inst_105026 = (state_105142[16]);var inst_105024 = (state_105142[17]);var inst_105040 = (state_105142[2]);var inst_105041 = (inst_105027 + 1);var tmp105180 = inst_105025;var tmp105181 = inst_105026;var tmp105182 = inst_105024;var inst_105024__$1 = tmp105182;var inst_105025__$1 = tmp105180;var inst_105026__$1 = tmp105181;var inst_105027__$1 = inst_105041;var state_105142__$1 = (function (){var statearr_105185 = state_105142;(statearr_105185[26] = inst_105040);
(statearr_105185[14] = inst_105027__$1);
(statearr_105185[15] = inst_105025__$1);
(statearr_105185[16] = inst_105026__$1);
(statearr_105185[17] = inst_105024__$1);
return statearr_105185;
})();var statearr_105186_105253 = state_105142__$1;(statearr_105186_105253[2] = null);
(statearr_105186_105253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 16))
{var inst_105044 = (state_105142[25]);var inst_105046 = cljs.core.chunked_seq_QMARK_.call(null,inst_105044);var state_105142__$1 = state_105142;if(inst_105046)
{var statearr_105187_105254 = state_105142__$1;(statearr_105187_105254[1] = 19);
} else
{var statearr_105188_105255 = state_105142__$1;(statearr_105188_105255[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 17))
{var state_105142__$1 = state_105142;var statearr_105189_105256 = state_105142__$1;(statearr_105189_105256[2] = null);
(statearr_105189_105256[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 18))
{var inst_105068 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105190_105257 = state_105142__$1;(statearr_105190_105257[2] = inst_105068);
(statearr_105190_105257[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 19))
{var inst_105044 = (state_105142[25]);var inst_105048 = cljs.core.chunk_first.call(null,inst_105044);var inst_105049 = cljs.core.chunk_rest.call(null,inst_105044);var inst_105050 = cljs.core.count.call(null,inst_105048);var inst_105024 = inst_105049;var inst_105025 = inst_105048;var inst_105026 = inst_105050;var inst_105027 = 0;var state_105142__$1 = (function (){var statearr_105191 = state_105142;(statearr_105191[14] = inst_105027);
(statearr_105191[15] = inst_105025);
(statearr_105191[16] = inst_105026);
(statearr_105191[17] = inst_105024);
return statearr_105191;
})();var statearr_105192_105258 = state_105142__$1;(statearr_105192_105258[2] = null);
(statearr_105192_105258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 20))
{var inst_105044 = (state_105142[25]);var inst_105054 = cljs.core.first.call(null,inst_105044);var inst_105055 = cljs.core.nth.call(null,inst_105054,0,null);var inst_105056 = cljs.core.nth.call(null,inst_105054,1,null);var state_105142__$1 = (function (){var statearr_105193 = state_105142;(statearr_105193[27] = inst_105055);
return statearr_105193;
})();if(cljs.core.truth_(inst_105056))
{var statearr_105194_105259 = state_105142__$1;(statearr_105194_105259[1] = 22);
} else
{var statearr_105195_105260 = state_105142__$1;(statearr_105195_105260[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 21))
{var inst_105065 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105196_105261 = state_105142__$1;(statearr_105196_105261[2] = inst_105065);
(statearr_105196_105261[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 22))
{var inst_105055 = (state_105142[27]);var inst_105058 = cljs.core.async.close_BANG_.call(null,inst_105055);var state_105142__$1 = state_105142;var statearr_105197_105262 = state_105142__$1;(statearr_105197_105262[2] = inst_105058);
(statearr_105197_105262[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 23))
{var state_105142__$1 = state_105142;var statearr_105198_105263 = state_105142__$1;(statearr_105198_105263[2] = null);
(statearr_105198_105263[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 24))
{var inst_105044 = (state_105142[25]);var inst_105061 = (state_105142[2]);var inst_105062 = cljs.core.next.call(null,inst_105044);var inst_105024 = inst_105062;var inst_105025 = null;var inst_105026 = 0;var inst_105027 = 0;var state_105142__$1 = (function (){var statearr_105199 = state_105142;(statearr_105199[28] = inst_105061);
(statearr_105199[14] = inst_105027);
(statearr_105199[15] = inst_105025);
(statearr_105199[16] = inst_105026);
(statearr_105199[17] = inst_105024);
return statearr_105199;
})();var statearr_105200_105264 = state_105142__$1;(statearr_105200_105264[2] = null);
(statearr_105200_105264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 25))
{var inst_105086 = (state_105142[10]);var inst_105085 = (state_105142[11]);var inst_105088 = (inst_105086 < inst_105085);var inst_105089 = inst_105088;var state_105142__$1 = state_105142;if(cljs.core.truth_(inst_105089))
{var statearr_105201_105265 = state_105142__$1;(statearr_105201_105265[1] = 27);
} else
{var statearr_105202_105266 = state_105142__$1;(statearr_105202_105266[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 26))
{var inst_105133 = (state_105142[2]);var state_105142__$1 = (function (){var statearr_105203 = state_105142;(statearr_105203[29] = inst_105133);
return statearr_105203;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105142__$1,42,dchan);
} else
{if((state_val_105143 === 27))
{var inst_105086 = (state_105142[10]);var inst_105084 = (state_105142[13]);var inst_105091 = cljs.core._nth.call(null,inst_105084,inst_105086);var state_105142__$1 = (function (){var statearr_105204 = state_105142;(statearr_105204[7] = inst_105091);
return statearr_105204;
})();var statearr_105205_105267 = state_105142__$1;(statearr_105205_105267[2] = null);
(statearr_105205_105267[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 28))
{var inst_105083 = (state_105142[12]);var inst_105104 = (state_105142[9]);var inst_105104__$1 = cljs.core.seq.call(null,inst_105083);var state_105142__$1 = (function (){var statearr_105209 = state_105142;(statearr_105209[9] = inst_105104__$1);
return statearr_105209;
})();if(inst_105104__$1)
{var statearr_105210_105268 = state_105142__$1;(statearr_105210_105268[1] = 33);
} else
{var statearr_105211_105269 = state_105142__$1;(statearr_105211_105269[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 29))
{var inst_105131 = (state_105142[2]);var state_105142__$1 = state_105142;var statearr_105212_105270 = state_105142__$1;(statearr_105212_105270[2] = inst_105131);
(statearr_105212_105270[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 30))
{var inst_105086 = (state_105142[10]);var inst_105085 = (state_105142[11]);var inst_105083 = (state_105142[12]);var inst_105084 = (state_105142[13]);var inst_105100 = (state_105142[2]);var inst_105101 = (inst_105086 + 1);var tmp105206 = inst_105085;var tmp105207 = inst_105083;var tmp105208 = inst_105084;var inst_105083__$1 = tmp105207;var inst_105084__$1 = tmp105208;var inst_105085__$1 = tmp105206;var inst_105086__$1 = inst_105101;var state_105142__$1 = (function (){var statearr_105213 = state_105142;(statearr_105213[10] = inst_105086__$1);
(statearr_105213[11] = inst_105085__$1);
(statearr_105213[12] = inst_105083__$1);
(statearr_105213[13] = inst_105084__$1);
(statearr_105213[30] = inst_105100);
return statearr_105213;
})();var statearr_105214_105271 = state_105142__$1;(statearr_105214_105271[2] = null);
(statearr_105214_105271[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105143 === 31))
{var inst_105091 = (state_105142[7]);var inst_105092 = (state_105142[2]);var inst_105093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_105094 = cljs.core.async.untap_STAR_.call(null,m,inst_105091);var state_105142__$1 = (function (){var statearr_105215 = state_105142;(statearr_105215[31] = inst_105092);
(statearr_105215[32] = inst_105093);
return statearr_105215;
})();var statearr_105216_105272 = state_105142__$1;(statearr_105216_105272[2] = inst_105094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105142__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_105220 = (new Array(33));(statearr_105220[0] = state_machine__13310__auto__);
(statearr_105220[1] = 1);
return statearr_105220;
});
var state_machine__13310__auto____1 = (function (state_105142){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_105142);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e105221){if((e105221 instanceof Object))
{var ex__13313__auto__ = e105221;var statearr_105222_105273 = state_105142;(statearr_105222_105273[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e105221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__105274 = state_105142;
state_105142 = G__105274;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_105142){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_105142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_105223 = f__13410__auto__.call(null);(statearr_105223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___105224);
return statearr_105223;
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
cljs.core.async.Mix = (function (){var obj105276 = {};return obj105276;
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
;var m = (function (){if(typeof cljs.core.async.t105386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t105386 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta105387){
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
this.meta105387 = meta105387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t105386.cljs$lang$type = true;
cljs.core.async.t105386.cljs$lang$ctorStr = "cljs.core.async/t105386";
cljs.core.async.t105386.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t105386");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t105386.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t105386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_105388){var self__ = this;
var _105388__$1 = this;return self__.meta105387;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t105386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_105388,meta105387__$1){var self__ = this;
var _105388__$1 = this;return (new cljs.core.async.t105386(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta105387__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t105386 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t105386(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta105387){return (new cljs.core.async.t105386(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta105387));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t105386(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___105495 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_105453){var state_val_105454 = (state_105453[1]);if((state_val_105454 === 1))
{var inst_105392 = (state_105453[7]);var inst_105392__$1 = calc_state.call(null);var inst_105393 = cljs.core.seq_QMARK_.call(null,inst_105392__$1);var state_105453__$1 = (function (){var statearr_105455 = state_105453;(statearr_105455[7] = inst_105392__$1);
return statearr_105455;
})();if(inst_105393)
{var statearr_105456_105496 = state_105453__$1;(statearr_105456_105496[1] = 2);
} else
{var statearr_105457_105497 = state_105453__$1;(statearr_105457_105497[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 2))
{var inst_105392 = (state_105453[7]);var inst_105395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105392);var state_105453__$1 = state_105453;var statearr_105458_105498 = state_105453__$1;(statearr_105458_105498[2] = inst_105395);
(statearr_105458_105498[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 3))
{var inst_105392 = (state_105453[7]);var state_105453__$1 = state_105453;var statearr_105459_105499 = state_105453__$1;(statearr_105459_105499[2] = inst_105392);
(statearr_105459_105499[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 4))
{var inst_105392 = (state_105453[7]);var inst_105398 = (state_105453[2]);var inst_105399 = cljs.core.get.call(null,inst_105398,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_105400 = cljs.core.get.call(null,inst_105398,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_105401 = cljs.core.get.call(null,inst_105398,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_105402 = inst_105392;var state_105453__$1 = (function (){var statearr_105460 = state_105453;(statearr_105460[8] = inst_105399);
(statearr_105460[9] = inst_105402);
(statearr_105460[10] = inst_105401);
(statearr_105460[11] = inst_105400);
return statearr_105460;
})();var statearr_105461_105500 = state_105453__$1;(statearr_105461_105500[2] = null);
(statearr_105461_105500[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 5))
{var inst_105402 = (state_105453[9]);var inst_105405 = cljs.core.seq_QMARK_.call(null,inst_105402);var state_105453__$1 = state_105453;if(inst_105405)
{var statearr_105462_105501 = state_105453__$1;(statearr_105462_105501[1] = 7);
} else
{var statearr_105463_105502 = state_105453__$1;(statearr_105463_105502[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 6))
{var inst_105451 = (state_105453[2]);var state_105453__$1 = state_105453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105453__$1,inst_105451);
} else
{if((state_val_105454 === 7))
{var inst_105402 = (state_105453[9]);var inst_105407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105402);var state_105453__$1 = state_105453;var statearr_105464_105503 = state_105453__$1;(statearr_105464_105503[2] = inst_105407);
(statearr_105464_105503[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 8))
{var inst_105402 = (state_105453[9]);var state_105453__$1 = state_105453;var statearr_105465_105504 = state_105453__$1;(statearr_105465_105504[2] = inst_105402);
(statearr_105465_105504[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 9))
{var inst_105410 = (state_105453[12]);var inst_105410__$1 = (state_105453[2]);var inst_105411 = cljs.core.get.call(null,inst_105410__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_105412 = cljs.core.get.call(null,inst_105410__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_105413 = cljs.core.get.call(null,inst_105410__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_105453__$1 = (function (){var statearr_105466 = state_105453;(statearr_105466[12] = inst_105410__$1);
(statearr_105466[13] = inst_105413);
(statearr_105466[14] = inst_105412);
return statearr_105466;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_105453__$1,10,inst_105411);
} else
{if((state_val_105454 === 10))
{var inst_105417 = (state_105453[15]);var inst_105418 = (state_105453[16]);var inst_105416 = (state_105453[2]);var inst_105417__$1 = cljs.core.nth.call(null,inst_105416,0,null);var inst_105418__$1 = cljs.core.nth.call(null,inst_105416,1,null);var inst_105419 = (inst_105417__$1 == null);var inst_105420 = cljs.core._EQ_.call(null,inst_105418__$1,change);var inst_105421 = (inst_105419) || (inst_105420);var state_105453__$1 = (function (){var statearr_105467 = state_105453;(statearr_105467[15] = inst_105417__$1);
(statearr_105467[16] = inst_105418__$1);
return statearr_105467;
})();if(cljs.core.truth_(inst_105421))
{var statearr_105468_105505 = state_105453__$1;(statearr_105468_105505[1] = 11);
} else
{var statearr_105469_105506 = state_105453__$1;(statearr_105469_105506[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 11))
{var inst_105417 = (state_105453[15]);var inst_105423 = (inst_105417 == null);var state_105453__$1 = state_105453;if(cljs.core.truth_(inst_105423))
{var statearr_105470_105507 = state_105453__$1;(statearr_105470_105507[1] = 14);
} else
{var statearr_105471_105508 = state_105453__$1;(statearr_105471_105508[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 12))
{var inst_105432 = (state_105453[17]);var inst_105418 = (state_105453[16]);var inst_105413 = (state_105453[13]);var inst_105432__$1 = inst_105413.call(null,inst_105418);var state_105453__$1 = (function (){var statearr_105472 = state_105453;(statearr_105472[17] = inst_105432__$1);
return statearr_105472;
})();if(cljs.core.truth_(inst_105432__$1))
{var statearr_105473_105509 = state_105453__$1;(statearr_105473_105509[1] = 17);
} else
{var statearr_105474_105510 = state_105453__$1;(statearr_105474_105510[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 13))
{var inst_105449 = (state_105453[2]);var state_105453__$1 = state_105453;var statearr_105475_105511 = state_105453__$1;(statearr_105475_105511[2] = inst_105449);
(statearr_105475_105511[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 14))
{var inst_105418 = (state_105453[16]);var inst_105425 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_105418);var state_105453__$1 = state_105453;var statearr_105476_105512 = state_105453__$1;(statearr_105476_105512[2] = inst_105425);
(statearr_105476_105512[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 15))
{var state_105453__$1 = state_105453;var statearr_105477_105513 = state_105453__$1;(statearr_105477_105513[2] = null);
(statearr_105477_105513[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 16))
{var inst_105428 = (state_105453[2]);var inst_105429 = calc_state.call(null);var inst_105402 = inst_105429;var state_105453__$1 = (function (){var statearr_105478 = state_105453;(statearr_105478[9] = inst_105402);
(statearr_105478[18] = inst_105428);
return statearr_105478;
})();var statearr_105479_105514 = state_105453__$1;(statearr_105479_105514[2] = null);
(statearr_105479_105514[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 17))
{var inst_105432 = (state_105453[17]);var state_105453__$1 = state_105453;var statearr_105480_105515 = state_105453__$1;(statearr_105480_105515[2] = inst_105432);
(statearr_105480_105515[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 18))
{var inst_105418 = (state_105453[16]);var inst_105413 = (state_105453[13]);var inst_105412 = (state_105453[14]);var inst_105435 = cljs.core.empty_QMARK_.call(null,inst_105413);var inst_105436 = inst_105412.call(null,inst_105418);var inst_105437 = cljs.core.not.call(null,inst_105436);var inst_105438 = (inst_105435) && (inst_105437);var state_105453__$1 = state_105453;var statearr_105481_105516 = state_105453__$1;(statearr_105481_105516[2] = inst_105438);
(statearr_105481_105516[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 19))
{var inst_105440 = (state_105453[2]);var state_105453__$1 = state_105453;if(cljs.core.truth_(inst_105440))
{var statearr_105482_105517 = state_105453__$1;(statearr_105482_105517[1] = 20);
} else
{var statearr_105483_105518 = state_105453__$1;(statearr_105483_105518[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 20))
{var inst_105417 = (state_105453[15]);var state_105453__$1 = state_105453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105453__$1,23,out,inst_105417);
} else
{if((state_val_105454 === 21))
{var state_105453__$1 = state_105453;var statearr_105484_105519 = state_105453__$1;(statearr_105484_105519[2] = null);
(statearr_105484_105519[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 22))
{var inst_105410 = (state_105453[12]);var inst_105446 = (state_105453[2]);var inst_105402 = inst_105410;var state_105453__$1 = (function (){var statearr_105485 = state_105453;(statearr_105485[9] = inst_105402);
(statearr_105485[19] = inst_105446);
return statearr_105485;
})();var statearr_105486_105520 = state_105453__$1;(statearr_105486_105520[2] = null);
(statearr_105486_105520[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105454 === 23))
{var inst_105443 = (state_105453[2]);var state_105453__$1 = state_105453;var statearr_105487_105521 = state_105453__$1;(statearr_105487_105521[2] = inst_105443);
(statearr_105487_105521[1] = 22);
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
var state_machine__13310__auto____0 = (function (){var statearr_105491 = (new Array(20));(statearr_105491[0] = state_machine__13310__auto__);
(statearr_105491[1] = 1);
return statearr_105491;
});
var state_machine__13310__auto____1 = (function (state_105453){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_105453);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e105492){if((e105492 instanceof Object))
{var ex__13313__auto__ = e105492;var statearr_105493_105522 = state_105453;(statearr_105493_105522[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e105492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__105523 = state_105453;
state_105453 = G__105523;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_105453){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_105453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_105494 = f__13410__auto__.call(null);(statearr_105494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___105495);
return statearr_105494;
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
cljs.core.async.Pub = (function (){var obj105525 = {};return obj105525;
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
return (function (p1__105526_SHARP_){if(cljs.core.truth_(p1__105526_SHARP_.call(null,topic)))
{return p1__105526_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__105526_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t105651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t105651 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta105652){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta105652 = meta105652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t105651.cljs$lang$type = true;
cljs.core.async.t105651.cljs$lang$ctorStr = "cljs.core.async/t105651";
cljs.core.async.t105651.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t105651");
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t105651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t105651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_105653){var self__ = this;
var _105653__$1 = this;return self__.meta105652;
});})(mults,ensure_mult))
;
cljs.core.async.t105651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_105653,meta105652__$1){var self__ = this;
var _105653__$1 = this;return (new cljs.core.async.t105651(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta105652__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t105651 = ((function (mults,ensure_mult){
return (function __GT_t105651(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta105652){return (new cljs.core.async.t105651(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta105652));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t105651(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___105775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_105727){var state_val_105728 = (state_105727[1]);if((state_val_105728 === 1))
{var state_105727__$1 = state_105727;var statearr_105729_105776 = state_105727__$1;(statearr_105729_105776[2] = null);
(statearr_105729_105776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 2))
{var state_105727__$1 = state_105727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105727__$1,4,ch);
} else
{if((state_val_105728 === 3))
{var inst_105725 = (state_105727[2]);var state_105727__$1 = state_105727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105727__$1,inst_105725);
} else
{if((state_val_105728 === 4))
{var inst_105656 = (state_105727[7]);var inst_105656__$1 = (state_105727[2]);var inst_105657 = (inst_105656__$1 == null);var state_105727__$1 = (function (){var statearr_105730 = state_105727;(statearr_105730[7] = inst_105656__$1);
return statearr_105730;
})();if(cljs.core.truth_(inst_105657))
{var statearr_105731_105777 = state_105727__$1;(statearr_105731_105777[1] = 5);
} else
{var statearr_105732_105778 = state_105727__$1;(statearr_105732_105778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 5))
{var inst_105663 = cljs.core.deref.call(null,mults);var inst_105664 = cljs.core.vals.call(null,inst_105663);var inst_105665 = cljs.core.seq.call(null,inst_105664);var inst_105666 = inst_105665;var inst_105667 = null;var inst_105668 = 0;var inst_105669 = 0;var state_105727__$1 = (function (){var statearr_105733 = state_105727;(statearr_105733[8] = inst_105669);
(statearr_105733[9] = inst_105668);
(statearr_105733[10] = inst_105667);
(statearr_105733[11] = inst_105666);
return statearr_105733;
})();var statearr_105734_105779 = state_105727__$1;(statearr_105734_105779[2] = null);
(statearr_105734_105779[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 6))
{var inst_105704 = (state_105727[12]);var inst_105706 = (state_105727[13]);var inst_105656 = (state_105727[7]);var inst_105704__$1 = topic_fn.call(null,inst_105656);var inst_105705 = cljs.core.deref.call(null,mults);var inst_105706__$1 = cljs.core.get.call(null,inst_105705,inst_105704__$1);var state_105727__$1 = (function (){var statearr_105735 = state_105727;(statearr_105735[12] = inst_105704__$1);
(statearr_105735[13] = inst_105706__$1);
return statearr_105735;
})();if(cljs.core.truth_(inst_105706__$1))
{var statearr_105736_105780 = state_105727__$1;(statearr_105736_105780[1] = 19);
} else
{var statearr_105737_105781 = state_105727__$1;(statearr_105737_105781[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 7))
{var inst_105723 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105738_105782 = state_105727__$1;(statearr_105738_105782[2] = inst_105723);
(statearr_105738_105782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 8))
{var inst_105669 = (state_105727[8]);var inst_105668 = (state_105727[9]);var inst_105671 = (inst_105669 < inst_105668);var inst_105672 = inst_105671;var state_105727__$1 = state_105727;if(cljs.core.truth_(inst_105672))
{var statearr_105742_105783 = state_105727__$1;(statearr_105742_105783[1] = 10);
} else
{var statearr_105743_105784 = state_105727__$1;(statearr_105743_105784[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 9))
{var inst_105702 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105744_105785 = state_105727__$1;(statearr_105744_105785[2] = inst_105702);
(statearr_105744_105785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 10))
{var inst_105669 = (state_105727[8]);var inst_105668 = (state_105727[9]);var inst_105667 = (state_105727[10]);var inst_105666 = (state_105727[11]);var inst_105674 = cljs.core._nth.call(null,inst_105667,inst_105669);var inst_105675 = cljs.core.async.muxch_STAR_.call(null,inst_105674);var inst_105676 = cljs.core.async.close_BANG_.call(null,inst_105675);var inst_105677 = (inst_105669 + 1);var tmp105739 = inst_105668;var tmp105740 = inst_105667;var tmp105741 = inst_105666;var inst_105666__$1 = tmp105741;var inst_105667__$1 = tmp105740;var inst_105668__$1 = tmp105739;var inst_105669__$1 = inst_105677;var state_105727__$1 = (function (){var statearr_105745 = state_105727;(statearr_105745[8] = inst_105669__$1);
(statearr_105745[14] = inst_105676);
(statearr_105745[9] = inst_105668__$1);
(statearr_105745[10] = inst_105667__$1);
(statearr_105745[11] = inst_105666__$1);
return statearr_105745;
})();var statearr_105746_105786 = state_105727__$1;(statearr_105746_105786[2] = null);
(statearr_105746_105786[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 11))
{var inst_105680 = (state_105727[15]);var inst_105666 = (state_105727[11]);var inst_105680__$1 = cljs.core.seq.call(null,inst_105666);var state_105727__$1 = (function (){var statearr_105747 = state_105727;(statearr_105747[15] = inst_105680__$1);
return statearr_105747;
})();if(inst_105680__$1)
{var statearr_105748_105787 = state_105727__$1;(statearr_105748_105787[1] = 13);
} else
{var statearr_105749_105788 = state_105727__$1;(statearr_105749_105788[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 12))
{var inst_105700 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105750_105789 = state_105727__$1;(statearr_105750_105789[2] = inst_105700);
(statearr_105750_105789[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 13))
{var inst_105680 = (state_105727[15]);var inst_105682 = cljs.core.chunked_seq_QMARK_.call(null,inst_105680);var state_105727__$1 = state_105727;if(inst_105682)
{var statearr_105751_105790 = state_105727__$1;(statearr_105751_105790[1] = 16);
} else
{var statearr_105752_105791 = state_105727__$1;(statearr_105752_105791[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 14))
{var state_105727__$1 = state_105727;var statearr_105753_105792 = state_105727__$1;(statearr_105753_105792[2] = null);
(statearr_105753_105792[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 15))
{var inst_105698 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105754_105793 = state_105727__$1;(statearr_105754_105793[2] = inst_105698);
(statearr_105754_105793[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 16))
{var inst_105680 = (state_105727[15]);var inst_105684 = cljs.core.chunk_first.call(null,inst_105680);var inst_105685 = cljs.core.chunk_rest.call(null,inst_105680);var inst_105686 = cljs.core.count.call(null,inst_105684);var inst_105666 = inst_105685;var inst_105667 = inst_105684;var inst_105668 = inst_105686;var inst_105669 = 0;var state_105727__$1 = (function (){var statearr_105755 = state_105727;(statearr_105755[8] = inst_105669);
(statearr_105755[9] = inst_105668);
(statearr_105755[10] = inst_105667);
(statearr_105755[11] = inst_105666);
return statearr_105755;
})();var statearr_105756_105794 = state_105727__$1;(statearr_105756_105794[2] = null);
(statearr_105756_105794[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 17))
{var inst_105680 = (state_105727[15]);var inst_105689 = cljs.core.first.call(null,inst_105680);var inst_105690 = cljs.core.async.muxch_STAR_.call(null,inst_105689);var inst_105691 = cljs.core.async.close_BANG_.call(null,inst_105690);var inst_105692 = cljs.core.next.call(null,inst_105680);var inst_105666 = inst_105692;var inst_105667 = null;var inst_105668 = 0;var inst_105669 = 0;var state_105727__$1 = (function (){var statearr_105757 = state_105727;(statearr_105757[8] = inst_105669);
(statearr_105757[9] = inst_105668);
(statearr_105757[16] = inst_105691);
(statearr_105757[10] = inst_105667);
(statearr_105757[11] = inst_105666);
return statearr_105757;
})();var statearr_105758_105795 = state_105727__$1;(statearr_105758_105795[2] = null);
(statearr_105758_105795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 18))
{var inst_105695 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105759_105796 = state_105727__$1;(statearr_105759_105796[2] = inst_105695);
(statearr_105759_105796[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 19))
{var state_105727__$1 = state_105727;var statearr_105760_105797 = state_105727__$1;(statearr_105760_105797[2] = null);
(statearr_105760_105797[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 20))
{var state_105727__$1 = state_105727;var statearr_105761_105798 = state_105727__$1;(statearr_105761_105798[2] = null);
(statearr_105761_105798[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 21))
{var inst_105720 = (state_105727[2]);var state_105727__$1 = (function (){var statearr_105762 = state_105727;(statearr_105762[17] = inst_105720);
return statearr_105762;
})();var statearr_105763_105799 = state_105727__$1;(statearr_105763_105799[2] = null);
(statearr_105763_105799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 22))
{var inst_105717 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105764_105800 = state_105727__$1;(statearr_105764_105800[2] = inst_105717);
(statearr_105764_105800[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 23))
{var inst_105704 = (state_105727[12]);var inst_105708 = (state_105727[2]);var inst_105709 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_105704);var state_105727__$1 = (function (){var statearr_105765 = state_105727;(statearr_105765[18] = inst_105708);
return statearr_105765;
})();var statearr_105766_105801 = state_105727__$1;(statearr_105766_105801[2] = inst_105709);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105727__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105728 === 24))
{var inst_105706 = (state_105727[13]);var inst_105656 = (state_105727[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_105727,23,Object,null,22);var inst_105713 = cljs.core.async.muxch_STAR_.call(null,inst_105706);var state_105727__$1 = state_105727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105727__$1,25,inst_105713,inst_105656);
} else
{if((state_val_105728 === 25))
{var inst_105715 = (state_105727[2]);var state_105727__$1 = state_105727;var statearr_105767_105802 = state_105727__$1;(statearr_105767_105802[2] = inst_105715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105727__$1);
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
var state_machine__13310__auto____0 = (function (){var statearr_105771 = (new Array(19));(statearr_105771[0] = state_machine__13310__auto__);
(statearr_105771[1] = 1);
return statearr_105771;
});
var state_machine__13310__auto____1 = (function (state_105727){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_105727);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e105772){if((e105772 instanceof Object))
{var ex__13313__auto__ = e105772;var statearr_105773_105803 = state_105727;(statearr_105773_105803[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e105772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__105804 = state_105727;
state_105727 = G__105804;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_105727){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_105727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_105774 = f__13410__auto__.call(null);(statearr_105774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___105775);
return statearr_105774;
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
,cljs.core.range.call(null,cnt));var c__13409__auto___105941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_105911){var state_val_105912 = (state_105911[1]);if((state_val_105912 === 1))
{var state_105911__$1 = state_105911;var statearr_105913_105942 = state_105911__$1;(statearr_105913_105942[2] = null);
(statearr_105913_105942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 2))
{var inst_105874 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_105875 = 0;var state_105911__$1 = (function (){var statearr_105914 = state_105911;(statearr_105914[7] = inst_105875);
(statearr_105914[8] = inst_105874);
return statearr_105914;
})();var statearr_105915_105943 = state_105911__$1;(statearr_105915_105943[2] = null);
(statearr_105915_105943[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 3))
{var inst_105909 = (state_105911[2]);var state_105911__$1 = state_105911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105911__$1,inst_105909);
} else
{if((state_val_105912 === 4))
{var inst_105875 = (state_105911[7]);var inst_105877 = (inst_105875 < cnt);var state_105911__$1 = state_105911;if(cljs.core.truth_(inst_105877))
{var statearr_105916_105944 = state_105911__$1;(statearr_105916_105944[1] = 6);
} else
{var statearr_105917_105945 = state_105911__$1;(statearr_105917_105945[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 5))
{var inst_105895 = (state_105911[2]);var state_105911__$1 = (function (){var statearr_105918 = state_105911;(statearr_105918[9] = inst_105895);
return statearr_105918;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105911__$1,12,dchan);
} else
{if((state_val_105912 === 6))
{var state_105911__$1 = state_105911;var statearr_105919_105946 = state_105911__$1;(statearr_105919_105946[2] = null);
(statearr_105919_105946[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 7))
{var state_105911__$1 = state_105911;var statearr_105920_105947 = state_105911__$1;(statearr_105920_105947[2] = null);
(statearr_105920_105947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 8))
{var inst_105893 = (state_105911[2]);var state_105911__$1 = state_105911;var statearr_105921_105948 = state_105911__$1;(statearr_105921_105948[2] = inst_105893);
(statearr_105921_105948[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 9))
{var inst_105875 = (state_105911[7]);var inst_105888 = (state_105911[2]);var inst_105889 = (inst_105875 + 1);var inst_105875__$1 = inst_105889;var state_105911__$1 = (function (){var statearr_105922 = state_105911;(statearr_105922[10] = inst_105888);
(statearr_105922[7] = inst_105875__$1);
return statearr_105922;
})();var statearr_105923_105949 = state_105911__$1;(statearr_105923_105949[2] = null);
(statearr_105923_105949[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 10))
{var inst_105879 = (state_105911[2]);var inst_105880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_105911__$1 = (function (){var statearr_105924 = state_105911;(statearr_105924[11] = inst_105879);
return statearr_105924;
})();var statearr_105925_105950 = state_105911__$1;(statearr_105925_105950[2] = inst_105880);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 11))
{var inst_105875 = (state_105911[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_105911,10,Object,null,9);var inst_105884 = chs__$1.call(null,inst_105875);var inst_105885 = done.call(null,inst_105875);var inst_105886 = cljs.core.async.take_BANG_.call(null,inst_105884,inst_105885);var state_105911__$1 = state_105911;var statearr_105926_105951 = state_105911__$1;(statearr_105926_105951[2] = inst_105886);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 12))
{var inst_105897 = (state_105911[12]);var inst_105897__$1 = (state_105911[2]);var inst_105898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_105897__$1);var state_105911__$1 = (function (){var statearr_105927 = state_105911;(statearr_105927[12] = inst_105897__$1);
return statearr_105927;
})();if(cljs.core.truth_(inst_105898))
{var statearr_105928_105952 = state_105911__$1;(statearr_105928_105952[1] = 13);
} else
{var statearr_105929_105953 = state_105911__$1;(statearr_105929_105953[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 13))
{var inst_105900 = cljs.core.async.close_BANG_.call(null,out);var state_105911__$1 = state_105911;var statearr_105930_105954 = state_105911__$1;(statearr_105930_105954[2] = inst_105900);
(statearr_105930_105954[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 14))
{var inst_105897 = (state_105911[12]);var inst_105902 = cljs.core.apply.call(null,f,inst_105897);var state_105911__$1 = state_105911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105911__$1,16,out,inst_105902);
} else
{if((state_val_105912 === 15))
{var inst_105907 = (state_105911[2]);var state_105911__$1 = state_105911;var statearr_105931_105955 = state_105911__$1;(statearr_105931_105955[2] = inst_105907);
(statearr_105931_105955[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_105912 === 16))
{var inst_105904 = (state_105911[2]);var state_105911__$1 = (function (){var statearr_105932 = state_105911;(statearr_105932[13] = inst_105904);
return statearr_105932;
})();var statearr_105933_105956 = state_105911__$1;(statearr_105933_105956[2] = null);
(statearr_105933_105956[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_105937 = (new Array(14));(statearr_105937[0] = state_machine__13310__auto__);
(statearr_105937[1] = 1);
return statearr_105937;
});
var state_machine__13310__auto____1 = (function (state_105911){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_105911);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e105938){if((e105938 instanceof Object))
{var ex__13313__auto__ = e105938;var statearr_105939_105957 = state_105911;(statearr_105939_105957[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e105938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__105958 = state_105911;
state_105911 = G__105958;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_105911){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_105911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_105940 = f__13410__auto__.call(null);(statearr_105940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___105941);
return statearr_105940;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___106066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_106042){var state_val_106043 = (state_106042[1]);if((state_val_106043 === 1))
{var inst_106013 = cljs.core.vec.call(null,chs);var inst_106014 = inst_106013;var state_106042__$1 = (function (){var statearr_106044 = state_106042;(statearr_106044[7] = inst_106014);
return statearr_106044;
})();var statearr_106045_106067 = state_106042__$1;(statearr_106045_106067[2] = null);
(statearr_106045_106067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 2))
{var inst_106014 = (state_106042[7]);var inst_106016 = cljs.core.count.call(null,inst_106014);var inst_106017 = (inst_106016 > 0);var state_106042__$1 = state_106042;if(cljs.core.truth_(inst_106017))
{var statearr_106046_106068 = state_106042__$1;(statearr_106046_106068[1] = 4);
} else
{var statearr_106047_106069 = state_106042__$1;(statearr_106047_106069[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 3))
{var inst_106040 = (state_106042[2]);var state_106042__$1 = state_106042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106042__$1,inst_106040);
} else
{if((state_val_106043 === 4))
{var inst_106014 = (state_106042[7]);var state_106042__$1 = state_106042;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_106042__$1,7,inst_106014);
} else
{if((state_val_106043 === 5))
{var inst_106036 = cljs.core.async.close_BANG_.call(null,out);var state_106042__$1 = state_106042;var statearr_106048_106070 = state_106042__$1;(statearr_106048_106070[2] = inst_106036);
(statearr_106048_106070[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 6))
{var inst_106038 = (state_106042[2]);var state_106042__$1 = state_106042;var statearr_106049_106071 = state_106042__$1;(statearr_106049_106071[2] = inst_106038);
(statearr_106049_106071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 7))
{var inst_106021 = (state_106042[8]);var inst_106022 = (state_106042[9]);var inst_106021__$1 = (state_106042[2]);var inst_106022__$1 = cljs.core.nth.call(null,inst_106021__$1,0,null);var inst_106023 = cljs.core.nth.call(null,inst_106021__$1,1,null);var inst_106024 = (inst_106022__$1 == null);var state_106042__$1 = (function (){var statearr_106050 = state_106042;(statearr_106050[8] = inst_106021__$1);
(statearr_106050[10] = inst_106023);
(statearr_106050[9] = inst_106022__$1);
return statearr_106050;
})();if(cljs.core.truth_(inst_106024))
{var statearr_106051_106072 = state_106042__$1;(statearr_106051_106072[1] = 8);
} else
{var statearr_106052_106073 = state_106042__$1;(statearr_106052_106073[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 8))
{var inst_106014 = (state_106042[7]);var inst_106021 = (state_106042[8]);var inst_106023 = (state_106042[10]);var inst_106022 = (state_106042[9]);var inst_106026 = (function (){var c = inst_106023;var v = inst_106022;var vec__106019 = inst_106021;var cs = inst_106014;return ((function (c,v,vec__106019,cs,inst_106014,inst_106021,inst_106023,inst_106022,state_val_106043){
return (function (p1__105959_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__105959_SHARP_);
});
;})(c,v,vec__106019,cs,inst_106014,inst_106021,inst_106023,inst_106022,state_val_106043))
})();var inst_106027 = cljs.core.filterv.call(null,inst_106026,inst_106014);var inst_106014__$1 = inst_106027;var state_106042__$1 = (function (){var statearr_106053 = state_106042;(statearr_106053[7] = inst_106014__$1);
return statearr_106053;
})();var statearr_106054_106074 = state_106042__$1;(statearr_106054_106074[2] = null);
(statearr_106054_106074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 9))
{var inst_106022 = (state_106042[9]);var state_106042__$1 = state_106042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106042__$1,11,out,inst_106022);
} else
{if((state_val_106043 === 10))
{var inst_106034 = (state_106042[2]);var state_106042__$1 = state_106042;var statearr_106056_106075 = state_106042__$1;(statearr_106056_106075[2] = inst_106034);
(statearr_106056_106075[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106043 === 11))
{var inst_106014 = (state_106042[7]);var inst_106031 = (state_106042[2]);var tmp106055 = inst_106014;var inst_106014__$1 = tmp106055;var state_106042__$1 = (function (){var statearr_106057 = state_106042;(statearr_106057[7] = inst_106014__$1);
(statearr_106057[11] = inst_106031);
return statearr_106057;
})();var statearr_106058_106076 = state_106042__$1;(statearr_106058_106076[2] = null);
(statearr_106058_106076[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_106062 = (new Array(12));(statearr_106062[0] = state_machine__13310__auto__);
(statearr_106062[1] = 1);
return statearr_106062;
});
var state_machine__13310__auto____1 = (function (state_106042){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_106042);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e106063){if((e106063 instanceof Object))
{var ex__13313__auto__ = e106063;var statearr_106064_106077 = state_106042;(statearr_106064_106077[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e106063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__106078 = state_106042;
state_106042 = G__106078;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_106042){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_106042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_106065 = f__13410__auto__.call(null);(statearr_106065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___106066);
return statearr_106065;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___106171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_106148){var state_val_106149 = (state_106148[1]);if((state_val_106149 === 1))
{var inst_106125 = 0;var state_106148__$1 = (function (){var statearr_106150 = state_106148;(statearr_106150[7] = inst_106125);
return statearr_106150;
})();var statearr_106151_106172 = state_106148__$1;(statearr_106151_106172[2] = null);
(statearr_106151_106172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 2))
{var inst_106125 = (state_106148[7]);var inst_106127 = (inst_106125 < n);var state_106148__$1 = state_106148;if(cljs.core.truth_(inst_106127))
{var statearr_106152_106173 = state_106148__$1;(statearr_106152_106173[1] = 4);
} else
{var statearr_106153_106174 = state_106148__$1;(statearr_106153_106174[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 3))
{var inst_106145 = (state_106148[2]);var inst_106146 = cljs.core.async.close_BANG_.call(null,out);var state_106148__$1 = (function (){var statearr_106154 = state_106148;(statearr_106154[8] = inst_106145);
return statearr_106154;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106148__$1,inst_106146);
} else
{if((state_val_106149 === 4))
{var state_106148__$1 = state_106148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106148__$1,7,ch);
} else
{if((state_val_106149 === 5))
{var state_106148__$1 = state_106148;var statearr_106155_106175 = state_106148__$1;(statearr_106155_106175[2] = null);
(statearr_106155_106175[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 6))
{var inst_106143 = (state_106148[2]);var state_106148__$1 = state_106148;var statearr_106156_106176 = state_106148__$1;(statearr_106156_106176[2] = inst_106143);
(statearr_106156_106176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 7))
{var inst_106130 = (state_106148[9]);var inst_106130__$1 = (state_106148[2]);var inst_106131 = (inst_106130__$1 == null);var inst_106132 = cljs.core.not.call(null,inst_106131);var state_106148__$1 = (function (){var statearr_106157 = state_106148;(statearr_106157[9] = inst_106130__$1);
return statearr_106157;
})();if(inst_106132)
{var statearr_106158_106177 = state_106148__$1;(statearr_106158_106177[1] = 8);
} else
{var statearr_106159_106178 = state_106148__$1;(statearr_106159_106178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 8))
{var inst_106130 = (state_106148[9]);var state_106148__$1 = state_106148;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106148__$1,11,out,inst_106130);
} else
{if((state_val_106149 === 9))
{var state_106148__$1 = state_106148;var statearr_106160_106179 = state_106148__$1;(statearr_106160_106179[2] = null);
(statearr_106160_106179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 10))
{var inst_106140 = (state_106148[2]);var state_106148__$1 = state_106148;var statearr_106161_106180 = state_106148__$1;(statearr_106161_106180[2] = inst_106140);
(statearr_106161_106180[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106149 === 11))
{var inst_106125 = (state_106148[7]);var inst_106135 = (state_106148[2]);var inst_106136 = (inst_106125 + 1);var inst_106125__$1 = inst_106136;var state_106148__$1 = (function (){var statearr_106162 = state_106148;(statearr_106162[7] = inst_106125__$1);
(statearr_106162[10] = inst_106135);
return statearr_106162;
})();var statearr_106163_106181 = state_106148__$1;(statearr_106163_106181[2] = null);
(statearr_106163_106181[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_106167 = (new Array(11));(statearr_106167[0] = state_machine__13310__auto__);
(statearr_106167[1] = 1);
return statearr_106167;
});
var state_machine__13310__auto____1 = (function (state_106148){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_106148);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e106168){if((e106168 instanceof Object))
{var ex__13313__auto__ = e106168;var statearr_106169_106182 = state_106148;(statearr_106169_106182[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e106168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__106183 = state_106148;
state_106148 = G__106183;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_106148){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_106148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_106170 = f__13410__auto__.call(null);(statearr_106170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___106171);
return statearr_106170;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___106280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_106255){var state_val_106256 = (state_106255[1]);if((state_val_106256 === 1))
{var inst_106232 = null;var state_106255__$1 = (function (){var statearr_106257 = state_106255;(statearr_106257[7] = inst_106232);
return statearr_106257;
})();var statearr_106258_106281 = state_106255__$1;(statearr_106258_106281[2] = null);
(statearr_106258_106281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 2))
{var state_106255__$1 = state_106255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106255__$1,4,ch);
} else
{if((state_val_106256 === 3))
{var inst_106252 = (state_106255[2]);var inst_106253 = cljs.core.async.close_BANG_.call(null,out);var state_106255__$1 = (function (){var statearr_106259 = state_106255;(statearr_106259[8] = inst_106252);
return statearr_106259;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106255__$1,inst_106253);
} else
{if((state_val_106256 === 4))
{var inst_106235 = (state_106255[9]);var inst_106235__$1 = (state_106255[2]);var inst_106236 = (inst_106235__$1 == null);var inst_106237 = cljs.core.not.call(null,inst_106236);var state_106255__$1 = (function (){var statearr_106260 = state_106255;(statearr_106260[9] = inst_106235__$1);
return statearr_106260;
})();if(inst_106237)
{var statearr_106261_106282 = state_106255__$1;(statearr_106261_106282[1] = 5);
} else
{var statearr_106262_106283 = state_106255__$1;(statearr_106262_106283[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 5))
{var inst_106235 = (state_106255[9]);var inst_106232 = (state_106255[7]);var inst_106239 = cljs.core._EQ_.call(null,inst_106235,inst_106232);var state_106255__$1 = state_106255;if(inst_106239)
{var statearr_106263_106284 = state_106255__$1;(statearr_106263_106284[1] = 8);
} else
{var statearr_106264_106285 = state_106255__$1;(statearr_106264_106285[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 6))
{var state_106255__$1 = state_106255;var statearr_106266_106286 = state_106255__$1;(statearr_106266_106286[2] = null);
(statearr_106266_106286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 7))
{var inst_106250 = (state_106255[2]);var state_106255__$1 = state_106255;var statearr_106267_106287 = state_106255__$1;(statearr_106267_106287[2] = inst_106250);
(statearr_106267_106287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 8))
{var inst_106232 = (state_106255[7]);var tmp106265 = inst_106232;var inst_106232__$1 = tmp106265;var state_106255__$1 = (function (){var statearr_106268 = state_106255;(statearr_106268[7] = inst_106232__$1);
return statearr_106268;
})();var statearr_106269_106288 = state_106255__$1;(statearr_106269_106288[2] = null);
(statearr_106269_106288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 9))
{var inst_106235 = (state_106255[9]);var state_106255__$1 = state_106255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106255__$1,11,out,inst_106235);
} else
{if((state_val_106256 === 10))
{var inst_106247 = (state_106255[2]);var state_106255__$1 = state_106255;var statearr_106270_106289 = state_106255__$1;(statearr_106270_106289[2] = inst_106247);
(statearr_106270_106289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106256 === 11))
{var inst_106235 = (state_106255[9]);var inst_106244 = (state_106255[2]);var inst_106232 = inst_106235;var state_106255__$1 = (function (){var statearr_106271 = state_106255;(statearr_106271[10] = inst_106244);
(statearr_106271[7] = inst_106232);
return statearr_106271;
})();var statearr_106272_106290 = state_106255__$1;(statearr_106272_106290[2] = null);
(statearr_106272_106290[1] = 2);
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
var state_machine__13310__auto____0 = (function (){var statearr_106276 = (new Array(11));(statearr_106276[0] = state_machine__13310__auto__);
(statearr_106276[1] = 1);
return statearr_106276;
});
var state_machine__13310__auto____1 = (function (state_106255){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_106255);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e106277){if((e106277 instanceof Object))
{var ex__13313__auto__ = e106277;var statearr_106278_106291 = state_106255;(statearr_106278_106291[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e106277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__106292 = state_106255;
state_106255 = G__106292;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_106255){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_106255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_106279 = f__13410__auto__.call(null);(statearr_106279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___106280);
return statearr_106279;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___106427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_106397){var state_val_106398 = (state_106397[1]);if((state_val_106398 === 1))
{var inst_106360 = (new Array(n));var inst_106361 = inst_106360;var inst_106362 = 0;var state_106397__$1 = (function (){var statearr_106399 = state_106397;(statearr_106399[7] = inst_106362);
(statearr_106399[8] = inst_106361);
return statearr_106399;
})();var statearr_106400_106428 = state_106397__$1;(statearr_106400_106428[2] = null);
(statearr_106400_106428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 2))
{var state_106397__$1 = state_106397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106397__$1,4,ch);
} else
{if((state_val_106398 === 3))
{var inst_106395 = (state_106397[2]);var state_106397__$1 = state_106397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106397__$1,inst_106395);
} else
{if((state_val_106398 === 4))
{var inst_106365 = (state_106397[9]);var inst_106365__$1 = (state_106397[2]);var inst_106366 = (inst_106365__$1 == null);var inst_106367 = cljs.core.not.call(null,inst_106366);var state_106397__$1 = (function (){var statearr_106401 = state_106397;(statearr_106401[9] = inst_106365__$1);
return statearr_106401;
})();if(inst_106367)
{var statearr_106402_106429 = state_106397__$1;(statearr_106402_106429[1] = 5);
} else
{var statearr_106403_106430 = state_106397__$1;(statearr_106403_106430[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 5))
{var inst_106365 = (state_106397[9]);var inst_106362 = (state_106397[7]);var inst_106361 = (state_106397[8]);var inst_106370 = (state_106397[10]);var inst_106369 = (inst_106361[inst_106362] = inst_106365);var inst_106370__$1 = (inst_106362 + 1);var inst_106371 = (inst_106370__$1 < n);var state_106397__$1 = (function (){var statearr_106404 = state_106397;(statearr_106404[11] = inst_106369);
(statearr_106404[10] = inst_106370__$1);
return statearr_106404;
})();if(cljs.core.truth_(inst_106371))
{var statearr_106405_106431 = state_106397__$1;(statearr_106405_106431[1] = 8);
} else
{var statearr_106406_106432 = state_106397__$1;(statearr_106406_106432[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 6))
{var inst_106362 = (state_106397[7]);var inst_106383 = (inst_106362 > 0);var state_106397__$1 = state_106397;if(cljs.core.truth_(inst_106383))
{var statearr_106408_106433 = state_106397__$1;(statearr_106408_106433[1] = 12);
} else
{var statearr_106409_106434 = state_106397__$1;(statearr_106409_106434[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 7))
{var inst_106393 = (state_106397[2]);var state_106397__$1 = state_106397;var statearr_106410_106435 = state_106397__$1;(statearr_106410_106435[2] = inst_106393);
(statearr_106410_106435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 8))
{var inst_106361 = (state_106397[8]);var inst_106370 = (state_106397[10]);var tmp106407 = inst_106361;var inst_106361__$1 = tmp106407;var inst_106362 = inst_106370;var state_106397__$1 = (function (){var statearr_106411 = state_106397;(statearr_106411[7] = inst_106362);
(statearr_106411[8] = inst_106361__$1);
return statearr_106411;
})();var statearr_106412_106436 = state_106397__$1;(statearr_106412_106436[2] = null);
(statearr_106412_106436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 9))
{var inst_106361 = (state_106397[8]);var inst_106375 = cljs.core.vec.call(null,inst_106361);var state_106397__$1 = state_106397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106397__$1,11,out,inst_106375);
} else
{if((state_val_106398 === 10))
{var inst_106381 = (state_106397[2]);var state_106397__$1 = state_106397;var statearr_106413_106437 = state_106397__$1;(statearr_106413_106437[2] = inst_106381);
(statearr_106413_106437[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 11))
{var inst_106377 = (state_106397[2]);var inst_106378 = (new Array(n));var inst_106361 = inst_106378;var inst_106362 = 0;var state_106397__$1 = (function (){var statearr_106414 = state_106397;(statearr_106414[7] = inst_106362);
(statearr_106414[8] = inst_106361);
(statearr_106414[12] = inst_106377);
return statearr_106414;
})();var statearr_106415_106438 = state_106397__$1;(statearr_106415_106438[2] = null);
(statearr_106415_106438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 12))
{var inst_106361 = (state_106397[8]);var inst_106385 = cljs.core.vec.call(null,inst_106361);var state_106397__$1 = state_106397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106397__$1,15,out,inst_106385);
} else
{if((state_val_106398 === 13))
{var state_106397__$1 = state_106397;var statearr_106416_106439 = state_106397__$1;(statearr_106416_106439[2] = null);
(statearr_106416_106439[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 14))
{var inst_106390 = (state_106397[2]);var inst_106391 = cljs.core.async.close_BANG_.call(null,out);var state_106397__$1 = (function (){var statearr_106417 = state_106397;(statearr_106417[13] = inst_106390);
return statearr_106417;
})();var statearr_106418_106440 = state_106397__$1;(statearr_106418_106440[2] = inst_106391);
(statearr_106418_106440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106398 === 15))
{var inst_106387 = (state_106397[2]);var state_106397__$1 = state_106397;var statearr_106419_106441 = state_106397__$1;(statearr_106419_106441[2] = inst_106387);
(statearr_106419_106441[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_106423 = (new Array(14));(statearr_106423[0] = state_machine__13310__auto__);
(statearr_106423[1] = 1);
return statearr_106423;
});
var state_machine__13310__auto____1 = (function (state_106397){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_106397);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e106424){if((e106424 instanceof Object))
{var ex__13313__auto__ = e106424;var statearr_106425_106442 = state_106397;(statearr_106425_106442[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e106424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__106443 = state_106397;
state_106397 = G__106443;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_106397){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_106397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_106426 = f__13410__auto__.call(null);(statearr_106426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___106427);
return statearr_106426;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___106586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_106556){var state_val_106557 = (state_106556[1]);if((state_val_106557 === 1))
{var inst_106515 = (new Array(0));var inst_106516 = inst_106515;var inst_106517 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_106556__$1 = (function (){var statearr_106558 = state_106556;(statearr_106558[7] = inst_106516);
(statearr_106558[8] = inst_106517);
return statearr_106558;
})();var statearr_106559_106587 = state_106556__$1;(statearr_106559_106587[2] = null);
(statearr_106559_106587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 2))
{var state_106556__$1 = state_106556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106556__$1,4,ch);
} else
{if((state_val_106557 === 3))
{var inst_106554 = (state_106556[2]);var state_106556__$1 = state_106556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106556__$1,inst_106554);
} else
{if((state_val_106557 === 4))
{var inst_106520 = (state_106556[9]);var inst_106520__$1 = (state_106556[2]);var inst_106521 = (inst_106520__$1 == null);var inst_106522 = cljs.core.not.call(null,inst_106521);var state_106556__$1 = (function (){var statearr_106560 = state_106556;(statearr_106560[9] = inst_106520__$1);
return statearr_106560;
})();if(inst_106522)
{var statearr_106561_106588 = state_106556__$1;(statearr_106561_106588[1] = 5);
} else
{var statearr_106562_106589 = state_106556__$1;(statearr_106562_106589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 5))
{var inst_106520 = (state_106556[9]);var inst_106517 = (state_106556[8]);var inst_106524 = (state_106556[10]);var inst_106524__$1 = f.call(null,inst_106520);var inst_106525 = cljs.core._EQ_.call(null,inst_106524__$1,inst_106517);var inst_106526 = cljs.core.keyword_identical_QMARK_.call(null,inst_106517,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_106527 = (inst_106525) || (inst_106526);var state_106556__$1 = (function (){var statearr_106563 = state_106556;(statearr_106563[10] = inst_106524__$1);
return statearr_106563;
})();if(cljs.core.truth_(inst_106527))
{var statearr_106564_106590 = state_106556__$1;(statearr_106564_106590[1] = 8);
} else
{var statearr_106565_106591 = state_106556__$1;(statearr_106565_106591[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 6))
{var inst_106516 = (state_106556[7]);var inst_106541 = inst_106516.length;var inst_106542 = (inst_106541 > 0);var state_106556__$1 = state_106556;if(cljs.core.truth_(inst_106542))
{var statearr_106567_106592 = state_106556__$1;(statearr_106567_106592[1] = 12);
} else
{var statearr_106568_106593 = state_106556__$1;(statearr_106568_106593[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 7))
{var inst_106552 = (state_106556[2]);var state_106556__$1 = state_106556;var statearr_106569_106594 = state_106556__$1;(statearr_106569_106594[2] = inst_106552);
(statearr_106569_106594[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 8))
{var inst_106520 = (state_106556[9]);var inst_106516 = (state_106556[7]);var inst_106524 = (state_106556[10]);var inst_106529 = inst_106516.push(inst_106520);var tmp106566 = inst_106516;var inst_106516__$1 = tmp106566;var inst_106517 = inst_106524;var state_106556__$1 = (function (){var statearr_106570 = state_106556;(statearr_106570[11] = inst_106529);
(statearr_106570[7] = inst_106516__$1);
(statearr_106570[8] = inst_106517);
return statearr_106570;
})();var statearr_106571_106595 = state_106556__$1;(statearr_106571_106595[2] = null);
(statearr_106571_106595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 9))
{var inst_106516 = (state_106556[7]);var inst_106532 = cljs.core.vec.call(null,inst_106516);var state_106556__$1 = state_106556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106556__$1,11,out,inst_106532);
} else
{if((state_val_106557 === 10))
{var inst_106539 = (state_106556[2]);var state_106556__$1 = state_106556;var statearr_106572_106596 = state_106556__$1;(statearr_106572_106596[2] = inst_106539);
(statearr_106572_106596[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 11))
{var inst_106520 = (state_106556[9]);var inst_106524 = (state_106556[10]);var inst_106534 = (state_106556[2]);var inst_106535 = (new Array(0));var inst_106536 = inst_106535.push(inst_106520);var inst_106516 = inst_106535;var inst_106517 = inst_106524;var state_106556__$1 = (function (){var statearr_106573 = state_106556;(statearr_106573[12] = inst_106536);
(statearr_106573[13] = inst_106534);
(statearr_106573[7] = inst_106516);
(statearr_106573[8] = inst_106517);
return statearr_106573;
})();var statearr_106574_106597 = state_106556__$1;(statearr_106574_106597[2] = null);
(statearr_106574_106597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 12))
{var inst_106516 = (state_106556[7]);var inst_106544 = cljs.core.vec.call(null,inst_106516);var state_106556__$1 = state_106556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_106556__$1,15,out,inst_106544);
} else
{if((state_val_106557 === 13))
{var state_106556__$1 = state_106556;var statearr_106575_106598 = state_106556__$1;(statearr_106575_106598[2] = null);
(statearr_106575_106598[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 14))
{var inst_106549 = (state_106556[2]);var inst_106550 = cljs.core.async.close_BANG_.call(null,out);var state_106556__$1 = (function (){var statearr_106576 = state_106556;(statearr_106576[14] = inst_106549);
return statearr_106576;
})();var statearr_106577_106599 = state_106556__$1;(statearr_106577_106599[2] = inst_106550);
(statearr_106577_106599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_106557 === 15))
{var inst_106546 = (state_106556[2]);var state_106556__$1 = state_106556;var statearr_106578_106600 = state_106556__$1;(statearr_106578_106600[2] = inst_106546);
(statearr_106578_106600[1] = 14);
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
var state_machine__13310__auto____0 = (function (){var statearr_106582 = (new Array(15));(statearr_106582[0] = state_machine__13310__auto__);
(statearr_106582[1] = 1);
return statearr_106582;
});
var state_machine__13310__auto____1 = (function (state_106556){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_106556);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e106583){if((e106583 instanceof Object))
{var ex__13313__auto__ = e106583;var statearr_106584_106601 = state_106556;(statearr_106584_106601[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e106583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__106602 = state_106556;
state_106556 = G__106602;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_106556){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_106556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_106585 = f__13410__auto__.call(null);(statearr_106585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___106586);
return statearr_106585;
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
