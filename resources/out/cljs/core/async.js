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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28989 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28989 = (function (f,fn_handler,meta28990){
this.f = f;
this.fn_handler = fn_handler;
this.meta28990 = meta28990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28989.cljs$lang$type = true;
cljs.core.async.t28989.cljs$lang$ctorStr = "cljs.core.async/t28989";
cljs.core.async.t28989.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t28989");
});
cljs.core.async.t28989.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28991){var self__ = this;
var _28991__$1 = this;return self__.meta28990;
});
cljs.core.async.t28989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28991,meta28990__$1){var self__ = this;
var _28991__$1 = this;return (new cljs.core.async.t28989(self__.f,self__.fn_handler,meta28990__$1));
});
cljs.core.async.__GT_t28989 = (function __GT_t28989(f__$1,fn_handler__$1,meta28990){return (new cljs.core.async.t28989(f__$1,fn_handler__$1,meta28990));
});
}
return (new cljs.core.async.t28989(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28993 = buff;if(G__28993)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__28993.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28993.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28993);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28993);
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
{var val_28994 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28994);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_28994);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__15171__auto__ = ret;if(cljs.core.truth_(and__15171__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__15171__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__16006__auto___28995 = n;var x_28996 = 0;while(true){
if((x_28996 < n__16006__auto___28995))
{(a[x_28996] = 0);
{
var G__28997 = (x_28996 + 1);
x_28996 = G__28997;
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
var G__28998 = (i + 1);
i = G__28998;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29002 = (function (flag,alt_flag,meta29003){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29003 = meta29003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29002.cljs$lang$type = true;
cljs.core.async.t29002.cljs$lang$ctorStr = "cljs.core.async/t29002";
cljs.core.async.t29002.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29002");
});
cljs.core.async.t29002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29004){var self__ = this;
var _29004__$1 = this;return self__.meta29003;
});
cljs.core.async.t29002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29004,meta29003__$1){var self__ = this;
var _29004__$1 = this;return (new cljs.core.async.t29002(self__.flag,self__.alt_flag,meta29003__$1));
});
cljs.core.async.__GT_t29002 = (function __GT_t29002(flag__$1,alt_flag__$1,meta29003){return (new cljs.core.async.t29002(flag__$1,alt_flag__$1,meta29003));
});
}
return (new cljs.core.async.t29002(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29008 = (function (cb,flag,alt_handler,meta29009){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29009 = meta29009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29008.cljs$lang$type = true;
cljs.core.async.t29008.cljs$lang$ctorStr = "cljs.core.async/t29008";
cljs.core.async.t29008.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29008");
});
cljs.core.async.t29008.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29010){var self__ = this;
var _29010__$1 = this;return self__.meta29009;
});
cljs.core.async.t29008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29010,meta29009__$1){var self__ = this;
var _29010__$1 = this;return (new cljs.core.async.t29008(self__.cb,self__.flag,self__.alt_handler,meta29009__$1));
});
cljs.core.async.__GT_t29008 = (function __GT_t29008(cb__$1,flag__$1,alt_handler__$1,meta29009){return (new cljs.core.async.t29008(cb__$1,flag__$1,alt_handler__$1,meta29009));
});
}
return (new cljs.core.async.t29008(cb,flag,alt_handler,null));
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
return (function (p1__29011_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29011_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15183__auto__ = wport;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__29012 = (i + 1);
i = G__29012;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15183__auto__ = ret;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__15171__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15171__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15171__auto__;
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
var alts_BANG___delegate = function (ports,p__29013){var map__29015 = p__29013;var map__29015__$1 = ((cljs.core.seq_QMARK_.call(null,map__29015))?cljs.core.apply.call(null,cljs.core.hash_map,map__29015):map__29015);var opts = map__29015__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29013 = null;if (arguments.length > 1) {
  p__29013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29013);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29016){
var ports = cljs.core.first(arglist__29016);
var p__29013 = cljs.core.rest(arglist__29016);
return alts_BANG___delegate(ports,p__29013);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29024 = (function (ch,f,map_LT_,meta29025){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29025 = meta29025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29024.cljs$lang$type = true;
cljs.core.async.t29024.cljs$lang$ctorStr = "cljs.core.async/t29024";
cljs.core.async.t29024.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29024");
});
cljs.core.async.t29024.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29024.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29027 = (function (fn1,_,meta29025,ch,f,map_LT_,meta29028){
this.fn1 = fn1;
this._ = _;
this.meta29025 = meta29025;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29028 = meta29028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29027.cljs$lang$type = true;
cljs.core.async.t29027.cljs$lang$ctorStr = "cljs.core.async/t29027";
cljs.core.async.t29027.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29027");
});
cljs.core.async.t29027.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29027.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29017_SHARP_){return f1.call(null,(((p1__29017_SHARP_ == null))?null:self__.f.call(null,p1__29017_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29029){var self__ = this;
var _29029__$1 = this;return self__.meta29028;
});
cljs.core.async.t29027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29029,meta29028__$1){var self__ = this;
var _29029__$1 = this;return (new cljs.core.async.t29027(self__.fn1,self__._,self__.meta29025,self__.ch,self__.f,self__.map_LT_,meta29028__$1));
});
cljs.core.async.__GT_t29027 = (function __GT_t29027(fn1__$1,___$2,meta29025__$1,ch__$2,f__$2,map_LT___$2,meta29028){return (new cljs.core.async.t29027(fn1__$1,___$2,meta29025__$1,ch__$2,f__$2,map_LT___$2,meta29028));
});
}
return (new cljs.core.async.t29027(fn1,___$1,self__.meta29025,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15171__auto__ = ret;if(cljs.core.truth_(and__15171__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15171__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t29024.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29026){var self__ = this;
var _29026__$1 = this;return self__.meta29025;
});
cljs.core.async.t29024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29026,meta29025__$1){var self__ = this;
var _29026__$1 = this;return (new cljs.core.async.t29024(self__.ch,self__.f,self__.map_LT_,meta29025__$1));
});
cljs.core.async.__GT_t29024 = (function __GT_t29024(ch__$1,f__$1,map_LT___$1,meta29025){return (new cljs.core.async.t29024(ch__$1,f__$1,map_LT___$1,meta29025));
});
}
return (new cljs.core.async.t29024(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29033 = (function (ch,f,map_GT_,meta29034){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29034 = meta29034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29033.cljs$lang$type = true;
cljs.core.async.t29033.cljs$lang$ctorStr = "cljs.core.async/t29033";
cljs.core.async.t29033.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29033");
});
cljs.core.async.t29033.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29033.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29033.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29035){var self__ = this;
var _29035__$1 = this;return self__.meta29034;
});
cljs.core.async.t29033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29035,meta29034__$1){var self__ = this;
var _29035__$1 = this;return (new cljs.core.async.t29033(self__.ch,self__.f,self__.map_GT_,meta29034__$1));
});
cljs.core.async.__GT_t29033 = (function __GT_t29033(ch__$1,f__$1,map_GT___$1,meta29034){return (new cljs.core.async.t29033(ch__$1,f__$1,map_GT___$1,meta29034));
});
}
return (new cljs.core.async.t29033(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29039 = (function (ch,p,filter_GT_,meta29040){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29040 = meta29040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29039.cljs$lang$type = true;
cljs.core.async.t29039.cljs$lang$ctorStr = "cljs.core.async/t29039";
cljs.core.async.t29039.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29039");
});
cljs.core.async.t29039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29041){var self__ = this;
var _29041__$1 = this;return self__.meta29040;
});
cljs.core.async.t29039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29041,meta29040__$1){var self__ = this;
var _29041__$1 = this;return (new cljs.core.async.t29039(self__.ch,self__.p,self__.filter_GT_,meta29040__$1));
});
cljs.core.async.__GT_t29039 = (function __GT_t29039(ch__$1,p__$1,filter_GT___$1,meta29040){return (new cljs.core.async.t29039(ch__$1,p__$1,filter_GT___$1,meta29040));
});
}
return (new cljs.core.async.t29039(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__19018__auto___29124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_29103){var state_val_29104 = (state_29103[1]);if((state_val_29104 === 1))
{var state_29103__$1 = state_29103;var statearr_29105_29125 = state_29103__$1;(statearr_29105_29125[2] = null);
(statearr_29105_29125[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 2))
{var state_29103__$1 = state_29103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,4,ch);
} else
{if((state_val_29104 === 3))
{var inst_29101 = (state_29103[2]);var state_29103__$1 = state_29103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else
{if((state_val_29104 === 4))
{var inst_29085 = (state_29103[7]);var inst_29085__$1 = (state_29103[2]);var inst_29086 = (inst_29085__$1 == null);var state_29103__$1 = (function (){var statearr_29106 = state_29103;(statearr_29106[7] = inst_29085__$1);
return statearr_29106;
})();if(cljs.core.truth_(inst_29086))
{var statearr_29107_29126 = state_29103__$1;(statearr_29107_29126[1] = 5);
} else
{var statearr_29108_29127 = state_29103__$1;(statearr_29108_29127[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 5))
{var inst_29088 = cljs.core.async.close_BANG_.call(null,out);var state_29103__$1 = state_29103;var statearr_29109_29128 = state_29103__$1;(statearr_29109_29128[2] = inst_29088);
(statearr_29109_29128[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 6))
{var inst_29085 = (state_29103[7]);var inst_29090 = p.call(null,inst_29085);var state_29103__$1 = state_29103;if(cljs.core.truth_(inst_29090))
{var statearr_29110_29129 = state_29103__$1;(statearr_29110_29129[1] = 8);
} else
{var statearr_29111_29130 = state_29103__$1;(statearr_29111_29130[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 7))
{var inst_29099 = (state_29103[2]);var state_29103__$1 = state_29103;var statearr_29112_29131 = state_29103__$1;(statearr_29112_29131[2] = inst_29099);
(statearr_29112_29131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 8))
{var inst_29085 = (state_29103[7]);var state_29103__$1 = state_29103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,11,out,inst_29085);
} else
{if((state_val_29104 === 9))
{var state_29103__$1 = state_29103;var statearr_29113_29132 = state_29103__$1;(statearr_29113_29132[2] = null);
(statearr_29113_29132[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 10))
{var inst_29096 = (state_29103[2]);var state_29103__$1 = (function (){var statearr_29114 = state_29103;(statearr_29114[8] = inst_29096);
return statearr_29114;
})();var statearr_29115_29133 = state_29103__$1;(statearr_29115_29133[2] = null);
(statearr_29115_29133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29104 === 11))
{var inst_29093 = (state_29103[2]);var state_29103__$1 = state_29103;var statearr_29116_29134 = state_29103__$1;(statearr_29116_29134[2] = inst_29093);
(statearr_29116_29134[1] = 10);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_29120 = (new Array(9));(statearr_29120[0] = state_machine__18949__auto__);
(statearr_29120[1] = 1);
return statearr_29120;
});
var state_machine__18949__auto____1 = (function (state_29103){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_29103);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e29121){if((e29121 instanceof Object))
{var ex__18952__auto__ = e29121;var statearr_29122_29135 = state_29103;(statearr_29122_29135[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29136 = state_29103;
state_29103 = G__29136;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_29123 = f__19019__auto__.call(null);(statearr_29123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___29124);
return statearr_29123;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__19018__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_29288){var state_val_29289 = (state_29288[1]);if((state_val_29289 === 1))
{var state_29288__$1 = state_29288;var statearr_29290_29327 = state_29288__$1;(statearr_29290_29327[2] = null);
(statearr_29290_29327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 2))
{var state_29288__$1 = state_29288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29288__$1,4,in$);
} else
{if((state_val_29289 === 3))
{var inst_29286 = (state_29288[2]);var state_29288__$1 = state_29288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29288__$1,inst_29286);
} else
{if((state_val_29289 === 4))
{var inst_29234 = (state_29288[7]);var inst_29234__$1 = (state_29288[2]);var inst_29235 = (inst_29234__$1 == null);var state_29288__$1 = (function (){var statearr_29291 = state_29288;(statearr_29291[7] = inst_29234__$1);
return statearr_29291;
})();if(cljs.core.truth_(inst_29235))
{var statearr_29292_29328 = state_29288__$1;(statearr_29292_29328[1] = 5);
} else
{var statearr_29293_29329 = state_29288__$1;(statearr_29293_29329[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 5))
{var inst_29237 = cljs.core.async.close_BANG_.call(null,out);var state_29288__$1 = state_29288;var statearr_29294_29330 = state_29288__$1;(statearr_29294_29330[2] = inst_29237);
(statearr_29294_29330[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 6))
{var inst_29234 = (state_29288[7]);var inst_29239 = f.call(null,inst_29234);var inst_29244 = cljs.core.seq.call(null,inst_29239);var inst_29245 = inst_29244;var inst_29246 = null;var inst_29247 = 0;var inst_29248 = 0;var state_29288__$1 = (function (){var statearr_29295 = state_29288;(statearr_29295[8] = inst_29248);
(statearr_29295[9] = inst_29246);
(statearr_29295[10] = inst_29247);
(statearr_29295[11] = inst_29245);
return statearr_29295;
})();var statearr_29296_29331 = state_29288__$1;(statearr_29296_29331[2] = null);
(statearr_29296_29331[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 7))
{var inst_29284 = (state_29288[2]);var state_29288__$1 = state_29288;var statearr_29297_29332 = state_29288__$1;(statearr_29297_29332[2] = inst_29284);
(statearr_29297_29332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 8))
{var inst_29248 = (state_29288[8]);var inst_29247 = (state_29288[10]);var inst_29250 = (inst_29248 < inst_29247);var inst_29251 = inst_29250;var state_29288__$1 = state_29288;if(cljs.core.truth_(inst_29251))
{var statearr_29298_29333 = state_29288__$1;(statearr_29298_29333[1] = 10);
} else
{var statearr_29299_29334 = state_29288__$1;(statearr_29299_29334[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 9))
{var inst_29281 = (state_29288[2]);var state_29288__$1 = (function (){var statearr_29300 = state_29288;(statearr_29300[12] = inst_29281);
return statearr_29300;
})();var statearr_29301_29335 = state_29288__$1;(statearr_29301_29335[2] = null);
(statearr_29301_29335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 10))
{var inst_29248 = (state_29288[8]);var inst_29246 = (state_29288[9]);var inst_29253 = cljs.core._nth.call(null,inst_29246,inst_29248);var state_29288__$1 = state_29288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29288__$1,13,out,inst_29253);
} else
{if((state_val_29289 === 11))
{var inst_29259 = (state_29288[13]);var inst_29245 = (state_29288[11]);var inst_29259__$1 = cljs.core.seq.call(null,inst_29245);var state_29288__$1 = (function (){var statearr_29305 = state_29288;(statearr_29305[13] = inst_29259__$1);
return statearr_29305;
})();if(inst_29259__$1)
{var statearr_29306_29336 = state_29288__$1;(statearr_29306_29336[1] = 14);
} else
{var statearr_29307_29337 = state_29288__$1;(statearr_29307_29337[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 12))
{var inst_29279 = (state_29288[2]);var state_29288__$1 = state_29288;var statearr_29308_29338 = state_29288__$1;(statearr_29308_29338[2] = inst_29279);
(statearr_29308_29338[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 13))
{var inst_29248 = (state_29288[8]);var inst_29246 = (state_29288[9]);var inst_29247 = (state_29288[10]);var inst_29245 = (state_29288[11]);var inst_29255 = (state_29288[2]);var inst_29256 = (inst_29248 + 1);var tmp29302 = inst_29246;var tmp29303 = inst_29247;var tmp29304 = inst_29245;var inst_29245__$1 = tmp29304;var inst_29246__$1 = tmp29302;var inst_29247__$1 = tmp29303;var inst_29248__$1 = inst_29256;var state_29288__$1 = (function (){var statearr_29309 = state_29288;(statearr_29309[14] = inst_29255);
(statearr_29309[8] = inst_29248__$1);
(statearr_29309[9] = inst_29246__$1);
(statearr_29309[10] = inst_29247__$1);
(statearr_29309[11] = inst_29245__$1);
return statearr_29309;
})();var statearr_29310_29339 = state_29288__$1;(statearr_29310_29339[2] = null);
(statearr_29310_29339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 14))
{var inst_29259 = (state_29288[13]);var inst_29261 = cljs.core.chunked_seq_QMARK_.call(null,inst_29259);var state_29288__$1 = state_29288;if(inst_29261)
{var statearr_29311_29340 = state_29288__$1;(statearr_29311_29340[1] = 17);
} else
{var statearr_29312_29341 = state_29288__$1;(statearr_29312_29341[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 15))
{var state_29288__$1 = state_29288;var statearr_29313_29342 = state_29288__$1;(statearr_29313_29342[2] = null);
(statearr_29313_29342[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 16))
{var inst_29277 = (state_29288[2]);var state_29288__$1 = state_29288;var statearr_29314_29343 = state_29288__$1;(statearr_29314_29343[2] = inst_29277);
(statearr_29314_29343[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 17))
{var inst_29259 = (state_29288[13]);var inst_29263 = cljs.core.chunk_first.call(null,inst_29259);var inst_29264 = cljs.core.chunk_rest.call(null,inst_29259);var inst_29265 = cljs.core.count.call(null,inst_29263);var inst_29245 = inst_29264;var inst_29246 = inst_29263;var inst_29247 = inst_29265;var inst_29248 = 0;var state_29288__$1 = (function (){var statearr_29315 = state_29288;(statearr_29315[8] = inst_29248);
(statearr_29315[9] = inst_29246);
(statearr_29315[10] = inst_29247);
(statearr_29315[11] = inst_29245);
return statearr_29315;
})();var statearr_29316_29344 = state_29288__$1;(statearr_29316_29344[2] = null);
(statearr_29316_29344[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 18))
{var inst_29259 = (state_29288[13]);var inst_29268 = cljs.core.first.call(null,inst_29259);var state_29288__$1 = state_29288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29288__$1,20,out,inst_29268);
} else
{if((state_val_29289 === 19))
{var inst_29274 = (state_29288[2]);var state_29288__$1 = state_29288;var statearr_29317_29345 = state_29288__$1;(statearr_29317_29345[2] = inst_29274);
(statearr_29317_29345[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29289 === 20))
{var inst_29259 = (state_29288[13]);var inst_29270 = (state_29288[2]);var inst_29271 = cljs.core.next.call(null,inst_29259);var inst_29245 = inst_29271;var inst_29246 = null;var inst_29247 = 0;var inst_29248 = 0;var state_29288__$1 = (function (){var statearr_29318 = state_29288;(statearr_29318[15] = inst_29270);
(statearr_29318[8] = inst_29248);
(statearr_29318[9] = inst_29246);
(statearr_29318[10] = inst_29247);
(statearr_29318[11] = inst_29245);
return statearr_29318;
})();var statearr_29319_29346 = state_29288__$1;(statearr_29319_29346[2] = null);
(statearr_29319_29346[1] = 8);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_29323 = (new Array(16));(statearr_29323[0] = state_machine__18949__auto__);
(statearr_29323[1] = 1);
return statearr_29323;
});
var state_machine__18949__auto____1 = (function (state_29288){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_29288);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e29324){if((e29324 instanceof Object))
{var ex__18952__auto__ = e29324;var statearr_29325_29347 = state_29288;(statearr_29325_29347[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29348 = state_29288;
state_29288 = G__29348;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_29288){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_29288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_29326 = f__19019__auto__.call(null);(statearr_29326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto__);
return statearr_29326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
}));
return c__19018__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__19018__auto___29429 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_29408){var state_val_29409 = (state_29408[1]);if((state_val_29409 === 1))
{var state_29408__$1 = state_29408;var statearr_29410_29430 = state_29408__$1;(statearr_29410_29430[2] = null);
(statearr_29410_29430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 2))
{var state_29408__$1 = state_29408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29408__$1,4,from);
} else
{if((state_val_29409 === 3))
{var inst_29406 = (state_29408[2]);var state_29408__$1 = state_29408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29408__$1,inst_29406);
} else
{if((state_val_29409 === 4))
{var inst_29391 = (state_29408[7]);var inst_29391__$1 = (state_29408[2]);var inst_29392 = (inst_29391__$1 == null);var state_29408__$1 = (function (){var statearr_29411 = state_29408;(statearr_29411[7] = inst_29391__$1);
return statearr_29411;
})();if(cljs.core.truth_(inst_29392))
{var statearr_29412_29431 = state_29408__$1;(statearr_29412_29431[1] = 5);
} else
{var statearr_29413_29432 = state_29408__$1;(statearr_29413_29432[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 5))
{var state_29408__$1 = state_29408;if(cljs.core.truth_(close_QMARK_))
{var statearr_29414_29433 = state_29408__$1;(statearr_29414_29433[1] = 8);
} else
{var statearr_29415_29434 = state_29408__$1;(statearr_29415_29434[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 6))
{var inst_29391 = (state_29408[7]);var state_29408__$1 = state_29408;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29408__$1,11,to,inst_29391);
} else
{if((state_val_29409 === 7))
{var inst_29404 = (state_29408[2]);var state_29408__$1 = state_29408;var statearr_29416_29435 = state_29408__$1;(statearr_29416_29435[2] = inst_29404);
(statearr_29416_29435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 8))
{var inst_29395 = cljs.core.async.close_BANG_.call(null,to);var state_29408__$1 = state_29408;var statearr_29417_29436 = state_29408__$1;(statearr_29417_29436[2] = inst_29395);
(statearr_29417_29436[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 9))
{var state_29408__$1 = state_29408;var statearr_29418_29437 = state_29408__$1;(statearr_29418_29437[2] = null);
(statearr_29418_29437[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 10))
{var inst_29398 = (state_29408[2]);var state_29408__$1 = state_29408;var statearr_29419_29438 = state_29408__$1;(statearr_29419_29438[2] = inst_29398);
(statearr_29419_29438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29409 === 11))
{var inst_29401 = (state_29408[2]);var state_29408__$1 = (function (){var statearr_29420 = state_29408;(statearr_29420[8] = inst_29401);
return statearr_29420;
})();var statearr_29421_29439 = state_29408__$1;(statearr_29421_29439[2] = null);
(statearr_29421_29439[1] = 2);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_29425 = (new Array(9));(statearr_29425[0] = state_machine__18949__auto__);
(statearr_29425[1] = 1);
return statearr_29425;
});
var state_machine__18949__auto____1 = (function (state_29408){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_29408);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e29426){if((e29426 instanceof Object))
{var ex__18952__auto__ = e29426;var statearr_29427_29440 = state_29408;(statearr_29427_29440[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29441 = state_29408;
state_29408 = G__29441;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_29408){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_29408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_29428 = f__19019__auto__.call(null);(statearr_29428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___29429);
return statearr_29428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__19018__auto___29528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_29506){var state_val_29507 = (state_29506[1]);if((state_val_29507 === 1))
{var state_29506__$1 = state_29506;var statearr_29508_29529 = state_29506__$1;(statearr_29508_29529[2] = null);
(statearr_29508_29529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 2))
{var state_29506__$1 = state_29506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29506__$1,4,ch);
} else
{if((state_val_29507 === 3))
{var inst_29504 = (state_29506[2]);var state_29506__$1 = state_29506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29506__$1,inst_29504);
} else
{if((state_val_29507 === 4))
{var inst_29487 = (state_29506[7]);var inst_29487__$1 = (state_29506[2]);var inst_29488 = (inst_29487__$1 == null);var state_29506__$1 = (function (){var statearr_29509 = state_29506;(statearr_29509[7] = inst_29487__$1);
return statearr_29509;
})();if(cljs.core.truth_(inst_29488))
{var statearr_29510_29530 = state_29506__$1;(statearr_29510_29530[1] = 5);
} else
{var statearr_29511_29531 = state_29506__$1;(statearr_29511_29531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 5))
{var inst_29490 = cljs.core.async.close_BANG_.call(null,tc);var inst_29491 = cljs.core.async.close_BANG_.call(null,fc);var state_29506__$1 = (function (){var statearr_29512 = state_29506;(statearr_29512[8] = inst_29490);
return statearr_29512;
})();var statearr_29513_29532 = state_29506__$1;(statearr_29513_29532[2] = inst_29491);
(statearr_29513_29532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 6))
{var inst_29487 = (state_29506[7]);var inst_29493 = p.call(null,inst_29487);var state_29506__$1 = state_29506;if(cljs.core.truth_(inst_29493))
{var statearr_29514_29533 = state_29506__$1;(statearr_29514_29533[1] = 9);
} else
{var statearr_29515_29534 = state_29506__$1;(statearr_29515_29534[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 7))
{var inst_29502 = (state_29506[2]);var state_29506__$1 = state_29506;var statearr_29516_29535 = state_29506__$1;(statearr_29516_29535[2] = inst_29502);
(statearr_29516_29535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 8))
{var inst_29499 = (state_29506[2]);var state_29506__$1 = (function (){var statearr_29517 = state_29506;(statearr_29517[9] = inst_29499);
return statearr_29517;
})();var statearr_29518_29536 = state_29506__$1;(statearr_29518_29536[2] = null);
(statearr_29518_29536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 9))
{var state_29506__$1 = state_29506;var statearr_29519_29537 = state_29506__$1;(statearr_29519_29537[2] = tc);
(statearr_29519_29537[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 10))
{var state_29506__$1 = state_29506;var statearr_29520_29538 = state_29506__$1;(statearr_29520_29538[2] = fc);
(statearr_29520_29538[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29507 === 11))
{var inst_29487 = (state_29506[7]);var inst_29497 = (state_29506[2]);var state_29506__$1 = state_29506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29506__$1,8,inst_29497,inst_29487);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_29524 = (new Array(10));(statearr_29524[0] = state_machine__18949__auto__);
(statearr_29524[1] = 1);
return statearr_29524;
});
var state_machine__18949__auto____1 = (function (state_29506){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_29506);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e29525){if((e29525 instanceof Object))
{var ex__18952__auto__ = e29525;var statearr_29526_29539 = state_29506;(statearr_29526_29539[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29540 = state_29506;
state_29506 = G__29540;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_29506){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_29506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_29527 = f__19019__auto__.call(null);(statearr_29527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___29528);
return statearr_29527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__19018__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_29587){var state_val_29588 = (state_29587[1]);if((state_val_29588 === 7))
{var inst_29583 = (state_29587[2]);var state_29587__$1 = state_29587;var statearr_29589_29605 = state_29587__$1;(statearr_29589_29605[2] = inst_29583);
(statearr_29589_29605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29588 === 6))
{var inst_29576 = (state_29587[7]);var inst_29573 = (state_29587[8]);var inst_29580 = f.call(null,inst_29573,inst_29576);var inst_29573__$1 = inst_29580;var state_29587__$1 = (function (){var statearr_29590 = state_29587;(statearr_29590[8] = inst_29573__$1);
return statearr_29590;
})();var statearr_29591_29606 = state_29587__$1;(statearr_29591_29606[2] = null);
(statearr_29591_29606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29588 === 5))
{var inst_29573 = (state_29587[8]);var state_29587__$1 = state_29587;var statearr_29592_29607 = state_29587__$1;(statearr_29592_29607[2] = inst_29573);
(statearr_29592_29607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29588 === 4))
{var inst_29576 = (state_29587[7]);var inst_29576__$1 = (state_29587[2]);var inst_29577 = (inst_29576__$1 == null);var state_29587__$1 = (function (){var statearr_29593 = state_29587;(statearr_29593[7] = inst_29576__$1);
return statearr_29593;
})();if(cljs.core.truth_(inst_29577))
{var statearr_29594_29608 = state_29587__$1;(statearr_29594_29608[1] = 5);
} else
{var statearr_29595_29609 = state_29587__$1;(statearr_29595_29609[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29588 === 3))
{var inst_29585 = (state_29587[2]);var state_29587__$1 = state_29587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29587__$1,inst_29585);
} else
{if((state_val_29588 === 2))
{var state_29587__$1 = state_29587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29587__$1,4,ch);
} else
{if((state_val_29588 === 1))
{var inst_29573 = init;var state_29587__$1 = (function (){var statearr_29596 = state_29587;(statearr_29596[8] = inst_29573);
return statearr_29596;
})();var statearr_29597_29610 = state_29587__$1;(statearr_29597_29610[2] = null);
(statearr_29597_29610[1] = 2);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_29601 = (new Array(9));(statearr_29601[0] = state_machine__18949__auto__);
(statearr_29601[1] = 1);
return statearr_29601;
});
var state_machine__18949__auto____1 = (function (state_29587){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_29587);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e29602){if((e29602 instanceof Object))
{var ex__18952__auto__ = e29602;var statearr_29603_29611 = state_29587;(statearr_29603_29611[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29612 = state_29587;
state_29587 = G__29612;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_29587){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_29587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_29604 = f__19019__auto__.call(null);(statearr_29604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto__);
return statearr_29604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
}));
return c__19018__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__19018__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_29674){var state_val_29675 = (state_29674[1]);if((state_val_29675 === 1))
{var inst_29654 = cljs.core.seq.call(null,coll);var inst_29655 = inst_29654;var state_29674__$1 = (function (){var statearr_29676 = state_29674;(statearr_29676[7] = inst_29655);
return statearr_29676;
})();var statearr_29677_29695 = state_29674__$1;(statearr_29677_29695[2] = null);
(statearr_29677_29695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 2))
{var inst_29655 = (state_29674[7]);var state_29674__$1 = state_29674;if(cljs.core.truth_(inst_29655))
{var statearr_29678_29696 = state_29674__$1;(statearr_29678_29696[1] = 4);
} else
{var statearr_29679_29697 = state_29674__$1;(statearr_29679_29697[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 3))
{var inst_29672 = (state_29674[2]);var state_29674__$1 = state_29674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29674__$1,inst_29672);
} else
{if((state_val_29675 === 4))
{var inst_29655 = (state_29674[7]);var inst_29658 = cljs.core.first.call(null,inst_29655);var state_29674__$1 = state_29674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29674__$1,7,ch,inst_29658);
} else
{if((state_val_29675 === 5))
{var state_29674__$1 = state_29674;if(cljs.core.truth_(close_QMARK_))
{var statearr_29680_29698 = state_29674__$1;(statearr_29680_29698[1] = 8);
} else
{var statearr_29681_29699 = state_29674__$1;(statearr_29681_29699[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 6))
{var inst_29670 = (state_29674[2]);var state_29674__$1 = state_29674;var statearr_29682_29700 = state_29674__$1;(statearr_29682_29700[2] = inst_29670);
(statearr_29682_29700[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 7))
{var inst_29655 = (state_29674[7]);var inst_29660 = (state_29674[2]);var inst_29661 = cljs.core.next.call(null,inst_29655);var inst_29655__$1 = inst_29661;var state_29674__$1 = (function (){var statearr_29683 = state_29674;(statearr_29683[7] = inst_29655__$1);
(statearr_29683[8] = inst_29660);
return statearr_29683;
})();var statearr_29684_29701 = state_29674__$1;(statearr_29684_29701[2] = null);
(statearr_29684_29701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 8))
{var inst_29665 = cljs.core.async.close_BANG_.call(null,ch);var state_29674__$1 = state_29674;var statearr_29685_29702 = state_29674__$1;(statearr_29685_29702[2] = inst_29665);
(statearr_29685_29702[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 9))
{var state_29674__$1 = state_29674;var statearr_29686_29703 = state_29674__$1;(statearr_29686_29703[2] = null);
(statearr_29686_29703[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29675 === 10))
{var inst_29668 = (state_29674[2]);var state_29674__$1 = state_29674;var statearr_29687_29704 = state_29674__$1;(statearr_29687_29704[2] = inst_29668);
(statearr_29687_29704[1] = 6);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_29691 = (new Array(9));(statearr_29691[0] = state_machine__18949__auto__);
(statearr_29691[1] = 1);
return statearr_29691;
});
var state_machine__18949__auto____1 = (function (state_29674){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_29674);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e29692){if((e29692 instanceof Object))
{var ex__18952__auto__ = e29692;var statearr_29693_29705 = state_29674;(statearr_29693_29705[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29706 = state_29674;
state_29674 = G__29706;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_29674){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_29674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_29694 = f__19019__auto__.call(null);(statearr_29694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto__);
return statearr_29694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
}));
return c__19018__auto__;
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
cljs.core.async.Mux = (function (){var obj29708 = {};return obj29708;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15171__auto__ = _;if(and__15171__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15171__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15786__auto__ = (((_ == null))?null:_);return (function (){var or__15183__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj29710 = {};return obj29710;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29934 = (function (cs,ch,mult,meta29935){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29935 = meta29935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29934.cljs$lang$type = true;
cljs.core.async.t29934.cljs$lang$ctorStr = "cljs.core.async/t29934";
cljs.core.async.t29934.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t29934");
});})(cs))
;
cljs.core.async.t29934.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29934.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29934.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29934.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29934.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29936){var self__ = this;
var _29936__$1 = this;return self__.meta29935;
});})(cs))
;
cljs.core.async.t29934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29936,meta29935__$1){var self__ = this;
var _29936__$1 = this;return (new cljs.core.async.t29934(self__.cs,self__.ch,self__.mult,meta29935__$1));
});})(cs))
;
cljs.core.async.__GT_t29934 = ((function (cs){
return (function __GT_t29934(cs__$1,ch__$1,mult__$1,meta29935){return (new cljs.core.async.t29934(cs__$1,ch__$1,mult__$1,meta29935));
});})(cs))
;
}
return (new cljs.core.async.t29934(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__19018__auto___30157 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_30071){var state_val_30072 = (state_30071[1]);if((state_val_30072 === 32))
{var inst_29939 = (state_30071[7]);var inst_30015 = (state_30071[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30071,31,Object,null,30);var inst_30022 = cljs.core.async.put_BANG_.call(null,inst_30015,inst_29939,done);var state_30071__$1 = state_30071;var statearr_30073_30158 = state_30071__$1;(statearr_30073_30158[2] = inst_30022);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30071__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 1))
{var state_30071__$1 = state_30071;var statearr_30074_30159 = state_30071__$1;(statearr_30074_30159[2] = null);
(statearr_30074_30159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 33))
{var inst_30028 = (state_30071[9]);var inst_30030 = cljs.core.chunked_seq_QMARK_.call(null,inst_30028);var state_30071__$1 = state_30071;if(inst_30030)
{var statearr_30075_30160 = state_30071__$1;(statearr_30075_30160[1] = 36);
} else
{var statearr_30076_30161 = state_30071__$1;(statearr_30076_30161[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 2))
{var state_30071__$1 = state_30071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30071__$1,4,ch);
} else
{if((state_val_30072 === 34))
{var state_30071__$1 = state_30071;var statearr_30077_30162 = state_30071__$1;(statearr_30077_30162[2] = null);
(statearr_30077_30162[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 3))
{var inst_30069 = (state_30071[2]);var state_30071__$1 = state_30071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30071__$1,inst_30069);
} else
{if((state_val_30072 === 35))
{var inst_30053 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30078_30163 = state_30071__$1;(statearr_30078_30163[2] = inst_30053);
(statearr_30078_30163[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 4))
{var inst_29939 = (state_30071[7]);var inst_29939__$1 = (state_30071[2]);var inst_29940 = (inst_29939__$1 == null);var state_30071__$1 = (function (){var statearr_30079 = state_30071;(statearr_30079[7] = inst_29939__$1);
return statearr_30079;
})();if(cljs.core.truth_(inst_29940))
{var statearr_30080_30164 = state_30071__$1;(statearr_30080_30164[1] = 5);
} else
{var statearr_30081_30165 = state_30071__$1;(statearr_30081_30165[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 36))
{var inst_30028 = (state_30071[9]);var inst_30032 = cljs.core.chunk_first.call(null,inst_30028);var inst_30033 = cljs.core.chunk_rest.call(null,inst_30028);var inst_30034 = cljs.core.count.call(null,inst_30032);var inst_30007 = inst_30033;var inst_30008 = inst_30032;var inst_30009 = inst_30034;var inst_30010 = 0;var state_30071__$1 = (function (){var statearr_30082 = state_30071;(statearr_30082[10] = inst_30010);
(statearr_30082[11] = inst_30007);
(statearr_30082[12] = inst_30009);
(statearr_30082[13] = inst_30008);
return statearr_30082;
})();var statearr_30083_30166 = state_30071__$1;(statearr_30083_30166[2] = null);
(statearr_30083_30166[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 5))
{var inst_29946 = cljs.core.deref.call(null,cs);var inst_29947 = cljs.core.seq.call(null,inst_29946);var inst_29948 = inst_29947;var inst_29949 = null;var inst_29950 = 0;var inst_29951 = 0;var state_30071__$1 = (function (){var statearr_30084 = state_30071;(statearr_30084[14] = inst_29950);
(statearr_30084[15] = inst_29951);
(statearr_30084[16] = inst_29948);
(statearr_30084[17] = inst_29949);
return statearr_30084;
})();var statearr_30085_30167 = state_30071__$1;(statearr_30085_30167[2] = null);
(statearr_30085_30167[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 37))
{var inst_30028 = (state_30071[9]);var inst_30037 = cljs.core.first.call(null,inst_30028);var state_30071__$1 = (function (){var statearr_30086 = state_30071;(statearr_30086[18] = inst_30037);
return statearr_30086;
})();var statearr_30087_30168 = state_30071__$1;(statearr_30087_30168[2] = null);
(statearr_30087_30168[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 6))
{var inst_29999 = (state_30071[19]);var inst_29998 = cljs.core.deref.call(null,cs);var inst_29999__$1 = cljs.core.keys.call(null,inst_29998);var inst_30000 = cljs.core.count.call(null,inst_29999__$1);var inst_30001 = cljs.core.reset_BANG_.call(null,dctr,inst_30000);var inst_30006 = cljs.core.seq.call(null,inst_29999__$1);var inst_30007 = inst_30006;var inst_30008 = null;var inst_30009 = 0;var inst_30010 = 0;var state_30071__$1 = (function (){var statearr_30088 = state_30071;(statearr_30088[10] = inst_30010);
(statearr_30088[20] = inst_30001);
(statearr_30088[11] = inst_30007);
(statearr_30088[12] = inst_30009);
(statearr_30088[13] = inst_30008);
(statearr_30088[19] = inst_29999__$1);
return statearr_30088;
})();var statearr_30089_30169 = state_30071__$1;(statearr_30089_30169[2] = null);
(statearr_30089_30169[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 38))
{var inst_30050 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30090_30170 = state_30071__$1;(statearr_30090_30170[2] = inst_30050);
(statearr_30090_30170[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 7))
{var inst_30067 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30091_30171 = state_30071__$1;(statearr_30091_30171[2] = inst_30067);
(statearr_30091_30171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 39))
{var inst_30028 = (state_30071[9]);var inst_30046 = (state_30071[2]);var inst_30047 = cljs.core.next.call(null,inst_30028);var inst_30007 = inst_30047;var inst_30008 = null;var inst_30009 = 0;var inst_30010 = 0;var state_30071__$1 = (function (){var statearr_30092 = state_30071;(statearr_30092[21] = inst_30046);
(statearr_30092[10] = inst_30010);
(statearr_30092[11] = inst_30007);
(statearr_30092[12] = inst_30009);
(statearr_30092[13] = inst_30008);
return statearr_30092;
})();var statearr_30093_30172 = state_30071__$1;(statearr_30093_30172[2] = null);
(statearr_30093_30172[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 8))
{var inst_29950 = (state_30071[14]);var inst_29951 = (state_30071[15]);var inst_29953 = (inst_29951 < inst_29950);var inst_29954 = inst_29953;var state_30071__$1 = state_30071;if(cljs.core.truth_(inst_29954))
{var statearr_30094_30173 = state_30071__$1;(statearr_30094_30173[1] = 10);
} else
{var statearr_30095_30174 = state_30071__$1;(statearr_30095_30174[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 40))
{var inst_30037 = (state_30071[18]);var inst_30038 = (state_30071[2]);var inst_30039 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30040 = cljs.core.async.untap_STAR_.call(null,m,inst_30037);var state_30071__$1 = (function (){var statearr_30096 = state_30071;(statearr_30096[22] = inst_30038);
(statearr_30096[23] = inst_30039);
return statearr_30096;
})();var statearr_30097_30175 = state_30071__$1;(statearr_30097_30175[2] = inst_30040);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30071__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 9))
{var inst_29996 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30098_30176 = state_30071__$1;(statearr_30098_30176[2] = inst_29996);
(statearr_30098_30176[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 41))
{var inst_29939 = (state_30071[7]);var inst_30037 = (state_30071[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30071,40,Object,null,39);var inst_30044 = cljs.core.async.put_BANG_.call(null,inst_30037,inst_29939,done);var state_30071__$1 = state_30071;var statearr_30099_30177 = state_30071__$1;(statearr_30099_30177[2] = inst_30044);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30071__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 10))
{var inst_29951 = (state_30071[15]);var inst_29949 = (state_30071[17]);var inst_29957 = cljs.core._nth.call(null,inst_29949,inst_29951);var inst_29958 = cljs.core.nth.call(null,inst_29957,0,null);var inst_29959 = cljs.core.nth.call(null,inst_29957,1,null);var state_30071__$1 = (function (){var statearr_30100 = state_30071;(statearr_30100[24] = inst_29958);
return statearr_30100;
})();if(cljs.core.truth_(inst_29959))
{var statearr_30101_30178 = state_30071__$1;(statearr_30101_30178[1] = 13);
} else
{var statearr_30102_30179 = state_30071__$1;(statearr_30102_30179[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 42))
{var state_30071__$1 = state_30071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30071__$1,45,dchan);
} else
{if((state_val_30072 === 11))
{var inst_29968 = (state_30071[25]);var inst_29948 = (state_30071[16]);var inst_29968__$1 = cljs.core.seq.call(null,inst_29948);var state_30071__$1 = (function (){var statearr_30103 = state_30071;(statearr_30103[25] = inst_29968__$1);
return statearr_30103;
})();if(inst_29968__$1)
{var statearr_30104_30180 = state_30071__$1;(statearr_30104_30180[1] = 16);
} else
{var statearr_30105_30181 = state_30071__$1;(statearr_30105_30181[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 43))
{var state_30071__$1 = state_30071;var statearr_30106_30182 = state_30071__$1;(statearr_30106_30182[2] = null);
(statearr_30106_30182[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 12))
{var inst_29994 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30107_30183 = state_30071__$1;(statearr_30107_30183[2] = inst_29994);
(statearr_30107_30183[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 44))
{var inst_30064 = (state_30071[2]);var state_30071__$1 = (function (){var statearr_30108 = state_30071;(statearr_30108[26] = inst_30064);
return statearr_30108;
})();var statearr_30109_30184 = state_30071__$1;(statearr_30109_30184[2] = null);
(statearr_30109_30184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 13))
{var inst_29958 = (state_30071[24]);var inst_29961 = cljs.core.async.close_BANG_.call(null,inst_29958);var state_30071__$1 = state_30071;var statearr_30110_30185 = state_30071__$1;(statearr_30110_30185[2] = inst_29961);
(statearr_30110_30185[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 45))
{var inst_30061 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30114_30186 = state_30071__$1;(statearr_30114_30186[2] = inst_30061);
(statearr_30114_30186[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 14))
{var state_30071__$1 = state_30071;var statearr_30115_30187 = state_30071__$1;(statearr_30115_30187[2] = null);
(statearr_30115_30187[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 15))
{var inst_29950 = (state_30071[14]);var inst_29951 = (state_30071[15]);var inst_29948 = (state_30071[16]);var inst_29949 = (state_30071[17]);var inst_29964 = (state_30071[2]);var inst_29965 = (inst_29951 + 1);var tmp30111 = inst_29950;var tmp30112 = inst_29948;var tmp30113 = inst_29949;var inst_29948__$1 = tmp30112;var inst_29949__$1 = tmp30113;var inst_29950__$1 = tmp30111;var inst_29951__$1 = inst_29965;var state_30071__$1 = (function (){var statearr_30116 = state_30071;(statearr_30116[14] = inst_29950__$1);
(statearr_30116[15] = inst_29951__$1);
(statearr_30116[27] = inst_29964);
(statearr_30116[16] = inst_29948__$1);
(statearr_30116[17] = inst_29949__$1);
return statearr_30116;
})();var statearr_30117_30188 = state_30071__$1;(statearr_30117_30188[2] = null);
(statearr_30117_30188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 16))
{var inst_29968 = (state_30071[25]);var inst_29970 = cljs.core.chunked_seq_QMARK_.call(null,inst_29968);var state_30071__$1 = state_30071;if(inst_29970)
{var statearr_30118_30189 = state_30071__$1;(statearr_30118_30189[1] = 19);
} else
{var statearr_30119_30190 = state_30071__$1;(statearr_30119_30190[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 17))
{var state_30071__$1 = state_30071;var statearr_30120_30191 = state_30071__$1;(statearr_30120_30191[2] = null);
(statearr_30120_30191[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 18))
{var inst_29992 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30121_30192 = state_30071__$1;(statearr_30121_30192[2] = inst_29992);
(statearr_30121_30192[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 19))
{var inst_29968 = (state_30071[25]);var inst_29972 = cljs.core.chunk_first.call(null,inst_29968);var inst_29973 = cljs.core.chunk_rest.call(null,inst_29968);var inst_29974 = cljs.core.count.call(null,inst_29972);var inst_29948 = inst_29973;var inst_29949 = inst_29972;var inst_29950 = inst_29974;var inst_29951 = 0;var state_30071__$1 = (function (){var statearr_30122 = state_30071;(statearr_30122[14] = inst_29950);
(statearr_30122[15] = inst_29951);
(statearr_30122[16] = inst_29948);
(statearr_30122[17] = inst_29949);
return statearr_30122;
})();var statearr_30123_30193 = state_30071__$1;(statearr_30123_30193[2] = null);
(statearr_30123_30193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 20))
{var inst_29968 = (state_30071[25]);var inst_29978 = cljs.core.first.call(null,inst_29968);var inst_29979 = cljs.core.nth.call(null,inst_29978,0,null);var inst_29980 = cljs.core.nth.call(null,inst_29978,1,null);var state_30071__$1 = (function (){var statearr_30124 = state_30071;(statearr_30124[28] = inst_29979);
return statearr_30124;
})();if(cljs.core.truth_(inst_29980))
{var statearr_30125_30194 = state_30071__$1;(statearr_30125_30194[1] = 22);
} else
{var statearr_30126_30195 = state_30071__$1;(statearr_30126_30195[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 21))
{var inst_29989 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30127_30196 = state_30071__$1;(statearr_30127_30196[2] = inst_29989);
(statearr_30127_30196[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 22))
{var inst_29979 = (state_30071[28]);var inst_29982 = cljs.core.async.close_BANG_.call(null,inst_29979);var state_30071__$1 = state_30071;var statearr_30128_30197 = state_30071__$1;(statearr_30128_30197[2] = inst_29982);
(statearr_30128_30197[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 23))
{var state_30071__$1 = state_30071;var statearr_30129_30198 = state_30071__$1;(statearr_30129_30198[2] = null);
(statearr_30129_30198[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 24))
{var inst_29968 = (state_30071[25]);var inst_29985 = (state_30071[2]);var inst_29986 = cljs.core.next.call(null,inst_29968);var inst_29948 = inst_29986;var inst_29949 = null;var inst_29950 = 0;var inst_29951 = 0;var state_30071__$1 = (function (){var statearr_30130 = state_30071;(statearr_30130[29] = inst_29985);
(statearr_30130[14] = inst_29950);
(statearr_30130[15] = inst_29951);
(statearr_30130[16] = inst_29948);
(statearr_30130[17] = inst_29949);
return statearr_30130;
})();var statearr_30131_30199 = state_30071__$1;(statearr_30131_30199[2] = null);
(statearr_30131_30199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 25))
{var inst_30010 = (state_30071[10]);var inst_30009 = (state_30071[12]);var inst_30012 = (inst_30010 < inst_30009);var inst_30013 = inst_30012;var state_30071__$1 = state_30071;if(cljs.core.truth_(inst_30013))
{var statearr_30132_30200 = state_30071__$1;(statearr_30132_30200[1] = 27);
} else
{var statearr_30133_30201 = state_30071__$1;(statearr_30133_30201[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 26))
{var inst_29999 = (state_30071[19]);var inst_30057 = (state_30071[2]);var inst_30058 = cljs.core.seq.call(null,inst_29999);var state_30071__$1 = (function (){var statearr_30134 = state_30071;(statearr_30134[30] = inst_30057);
return statearr_30134;
})();if(inst_30058)
{var statearr_30135_30202 = state_30071__$1;(statearr_30135_30202[1] = 42);
} else
{var statearr_30136_30203 = state_30071__$1;(statearr_30136_30203[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 27))
{var inst_30010 = (state_30071[10]);var inst_30008 = (state_30071[13]);var inst_30015 = cljs.core._nth.call(null,inst_30008,inst_30010);var state_30071__$1 = (function (){var statearr_30137 = state_30071;(statearr_30137[8] = inst_30015);
return statearr_30137;
})();var statearr_30138_30204 = state_30071__$1;(statearr_30138_30204[2] = null);
(statearr_30138_30204[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 28))
{var inst_30028 = (state_30071[9]);var inst_30007 = (state_30071[11]);var inst_30028__$1 = cljs.core.seq.call(null,inst_30007);var state_30071__$1 = (function (){var statearr_30142 = state_30071;(statearr_30142[9] = inst_30028__$1);
return statearr_30142;
})();if(inst_30028__$1)
{var statearr_30143_30205 = state_30071__$1;(statearr_30143_30205[1] = 33);
} else
{var statearr_30144_30206 = state_30071__$1;(statearr_30144_30206[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 29))
{var inst_30055 = (state_30071[2]);var state_30071__$1 = state_30071;var statearr_30145_30207 = state_30071__$1;(statearr_30145_30207[2] = inst_30055);
(statearr_30145_30207[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 30))
{var inst_30010 = (state_30071[10]);var inst_30007 = (state_30071[11]);var inst_30009 = (state_30071[12]);var inst_30008 = (state_30071[13]);var inst_30024 = (state_30071[2]);var inst_30025 = (inst_30010 + 1);var tmp30139 = inst_30007;var tmp30140 = inst_30009;var tmp30141 = inst_30008;var inst_30007__$1 = tmp30139;var inst_30008__$1 = tmp30141;var inst_30009__$1 = tmp30140;var inst_30010__$1 = inst_30025;var state_30071__$1 = (function (){var statearr_30146 = state_30071;(statearr_30146[10] = inst_30010__$1);
(statearr_30146[31] = inst_30024);
(statearr_30146[11] = inst_30007__$1);
(statearr_30146[12] = inst_30009__$1);
(statearr_30146[13] = inst_30008__$1);
return statearr_30146;
})();var statearr_30147_30208 = state_30071__$1;(statearr_30147_30208[2] = null);
(statearr_30147_30208[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30072 === 31))
{var inst_30015 = (state_30071[8]);var inst_30016 = (state_30071[2]);var inst_30017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30018 = cljs.core.async.untap_STAR_.call(null,m,inst_30015);var state_30071__$1 = (function (){var statearr_30148 = state_30071;(statearr_30148[32] = inst_30017);
(statearr_30148[33] = inst_30016);
return statearr_30148;
})();var statearr_30149_30209 = state_30071__$1;(statearr_30149_30209[2] = inst_30018);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30071__$1);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_30153 = (new Array(34));(statearr_30153[0] = state_machine__18949__auto__);
(statearr_30153[1] = 1);
return statearr_30153;
});
var state_machine__18949__auto____1 = (function (state_30071){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_30071);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e30154){if((e30154 instanceof Object))
{var ex__18952__auto__ = e30154;var statearr_30155_30210 = state_30071;(statearr_30155_30210[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30211 = state_30071;
state_30071 = G__30211;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_30071){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_30071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_30156 = f__19019__auto__.call(null);(statearr_30156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___30157);
return statearr_30156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
cljs.core.async.Mix = (function (){var obj30213 = {};return obj30213;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15171__auto__ = m;if(and__15171__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15786__auto__ = (((m == null))?null:m);return (function (){var or__15183__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t30323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30323 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta30324){
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
this.meta30324 = meta30324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30323.cljs$lang$type = true;
cljs.core.async.t30323.cljs$lang$ctorStr = "cljs.core.async/t30323";
cljs.core.async.t30323.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t30323");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t30323.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30323.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30325){var self__ = this;
var _30325__$1 = this;return self__.meta30324;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30325,meta30324__$1){var self__ = this;
var _30325__$1 = this;return (new cljs.core.async.t30323(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta30324__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t30323 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30323(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta30324){return (new cljs.core.async.t30323(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta30324));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t30323(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__19018__auto___30432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_30390){var state_val_30391 = (state_30390[1]);if((state_val_30391 === 1))
{var inst_30329 = (state_30390[7]);var inst_30329__$1 = calc_state.call(null);var inst_30330 = cljs.core.seq_QMARK_.call(null,inst_30329__$1);var state_30390__$1 = (function (){var statearr_30392 = state_30390;(statearr_30392[7] = inst_30329__$1);
return statearr_30392;
})();if(inst_30330)
{var statearr_30393_30433 = state_30390__$1;(statearr_30393_30433[1] = 2);
} else
{var statearr_30394_30434 = state_30390__$1;(statearr_30394_30434[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 2))
{var inst_30329 = (state_30390[7]);var inst_30332 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30329);var state_30390__$1 = state_30390;var statearr_30395_30435 = state_30390__$1;(statearr_30395_30435[2] = inst_30332);
(statearr_30395_30435[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 3))
{var inst_30329 = (state_30390[7]);var state_30390__$1 = state_30390;var statearr_30396_30436 = state_30390__$1;(statearr_30396_30436[2] = inst_30329);
(statearr_30396_30436[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 4))
{var inst_30329 = (state_30390[7]);var inst_30335 = (state_30390[2]);var inst_30336 = cljs.core.get.call(null,inst_30335,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_30337 = cljs.core.get.call(null,inst_30335,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_30338 = cljs.core.get.call(null,inst_30335,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_30339 = inst_30329;var state_30390__$1 = (function (){var statearr_30397 = state_30390;(statearr_30397[8] = inst_30337);
(statearr_30397[9] = inst_30336);
(statearr_30397[10] = inst_30339);
(statearr_30397[11] = inst_30338);
return statearr_30397;
})();var statearr_30398_30437 = state_30390__$1;(statearr_30398_30437[2] = null);
(statearr_30398_30437[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 5))
{var inst_30339 = (state_30390[10]);var inst_30342 = cljs.core.seq_QMARK_.call(null,inst_30339);var state_30390__$1 = state_30390;if(inst_30342)
{var statearr_30399_30438 = state_30390__$1;(statearr_30399_30438[1] = 7);
} else
{var statearr_30400_30439 = state_30390__$1;(statearr_30400_30439[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 6))
{var inst_30388 = (state_30390[2]);var state_30390__$1 = state_30390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30390__$1,inst_30388);
} else
{if((state_val_30391 === 7))
{var inst_30339 = (state_30390[10]);var inst_30344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30339);var state_30390__$1 = state_30390;var statearr_30401_30440 = state_30390__$1;(statearr_30401_30440[2] = inst_30344);
(statearr_30401_30440[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 8))
{var inst_30339 = (state_30390[10]);var state_30390__$1 = state_30390;var statearr_30402_30441 = state_30390__$1;(statearr_30402_30441[2] = inst_30339);
(statearr_30402_30441[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 9))
{var inst_30347 = (state_30390[12]);var inst_30347__$1 = (state_30390[2]);var inst_30348 = cljs.core.get.call(null,inst_30347__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_30349 = cljs.core.get.call(null,inst_30347__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_30350 = cljs.core.get.call(null,inst_30347__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_30390__$1 = (function (){var statearr_30403 = state_30390;(statearr_30403[12] = inst_30347__$1);
(statearr_30403[13] = inst_30349);
(statearr_30403[14] = inst_30350);
return statearr_30403;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30390__$1,10,inst_30348);
} else
{if((state_val_30391 === 10))
{var inst_30354 = (state_30390[15]);var inst_30355 = (state_30390[16]);var inst_30353 = (state_30390[2]);var inst_30354__$1 = cljs.core.nth.call(null,inst_30353,0,null);var inst_30355__$1 = cljs.core.nth.call(null,inst_30353,1,null);var inst_30356 = (inst_30354__$1 == null);var inst_30357 = cljs.core._EQ_.call(null,inst_30355__$1,change);var inst_30358 = (inst_30356) || (inst_30357);var state_30390__$1 = (function (){var statearr_30404 = state_30390;(statearr_30404[15] = inst_30354__$1);
(statearr_30404[16] = inst_30355__$1);
return statearr_30404;
})();if(cljs.core.truth_(inst_30358))
{var statearr_30405_30442 = state_30390__$1;(statearr_30405_30442[1] = 11);
} else
{var statearr_30406_30443 = state_30390__$1;(statearr_30406_30443[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 11))
{var inst_30354 = (state_30390[15]);var inst_30360 = (inst_30354 == null);var state_30390__$1 = state_30390;if(cljs.core.truth_(inst_30360))
{var statearr_30407_30444 = state_30390__$1;(statearr_30407_30444[1] = 14);
} else
{var statearr_30408_30445 = state_30390__$1;(statearr_30408_30445[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 12))
{var inst_30355 = (state_30390[16]);var inst_30350 = (state_30390[14]);var inst_30369 = (state_30390[17]);var inst_30369__$1 = inst_30350.call(null,inst_30355);var state_30390__$1 = (function (){var statearr_30409 = state_30390;(statearr_30409[17] = inst_30369__$1);
return statearr_30409;
})();if(cljs.core.truth_(inst_30369__$1))
{var statearr_30410_30446 = state_30390__$1;(statearr_30410_30446[1] = 17);
} else
{var statearr_30411_30447 = state_30390__$1;(statearr_30411_30447[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 13))
{var inst_30386 = (state_30390[2]);var state_30390__$1 = state_30390;var statearr_30412_30448 = state_30390__$1;(statearr_30412_30448[2] = inst_30386);
(statearr_30412_30448[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 14))
{var inst_30355 = (state_30390[16]);var inst_30362 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30355);var state_30390__$1 = state_30390;var statearr_30413_30449 = state_30390__$1;(statearr_30413_30449[2] = inst_30362);
(statearr_30413_30449[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 15))
{var state_30390__$1 = state_30390;var statearr_30414_30450 = state_30390__$1;(statearr_30414_30450[2] = null);
(statearr_30414_30450[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 16))
{var inst_30365 = (state_30390[2]);var inst_30366 = calc_state.call(null);var inst_30339 = inst_30366;var state_30390__$1 = (function (){var statearr_30415 = state_30390;(statearr_30415[10] = inst_30339);
(statearr_30415[18] = inst_30365);
return statearr_30415;
})();var statearr_30416_30451 = state_30390__$1;(statearr_30416_30451[2] = null);
(statearr_30416_30451[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 17))
{var inst_30369 = (state_30390[17]);var state_30390__$1 = state_30390;var statearr_30417_30452 = state_30390__$1;(statearr_30417_30452[2] = inst_30369);
(statearr_30417_30452[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 18))
{var inst_30349 = (state_30390[13]);var inst_30355 = (state_30390[16]);var inst_30350 = (state_30390[14]);var inst_30372 = cljs.core.empty_QMARK_.call(null,inst_30350);var inst_30373 = inst_30349.call(null,inst_30355);var inst_30374 = cljs.core.not.call(null,inst_30373);var inst_30375 = (inst_30372) && (inst_30374);var state_30390__$1 = state_30390;var statearr_30418_30453 = state_30390__$1;(statearr_30418_30453[2] = inst_30375);
(statearr_30418_30453[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 19))
{var inst_30377 = (state_30390[2]);var state_30390__$1 = state_30390;if(cljs.core.truth_(inst_30377))
{var statearr_30419_30454 = state_30390__$1;(statearr_30419_30454[1] = 20);
} else
{var statearr_30420_30455 = state_30390__$1;(statearr_30420_30455[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 20))
{var inst_30354 = (state_30390[15]);var state_30390__$1 = state_30390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30390__$1,23,out,inst_30354);
} else
{if((state_val_30391 === 21))
{var state_30390__$1 = state_30390;var statearr_30421_30456 = state_30390__$1;(statearr_30421_30456[2] = null);
(statearr_30421_30456[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 22))
{var inst_30347 = (state_30390[12]);var inst_30383 = (state_30390[2]);var inst_30339 = inst_30347;var state_30390__$1 = (function (){var statearr_30422 = state_30390;(statearr_30422[10] = inst_30339);
(statearr_30422[19] = inst_30383);
return statearr_30422;
})();var statearr_30423_30457 = state_30390__$1;(statearr_30423_30457[2] = null);
(statearr_30423_30457[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30391 === 23))
{var inst_30380 = (state_30390[2]);var state_30390__$1 = state_30390;var statearr_30424_30458 = state_30390__$1;(statearr_30424_30458[2] = inst_30380);
(statearr_30424_30458[1] = 22);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_30428 = (new Array(20));(statearr_30428[0] = state_machine__18949__auto__);
(statearr_30428[1] = 1);
return statearr_30428;
});
var state_machine__18949__auto____1 = (function (state_30390){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_30390);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e30429){if((e30429 instanceof Object))
{var ex__18952__auto__ = e30429;var statearr_30430_30459 = state_30390;(statearr_30430_30459[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30460 = state_30390;
state_30390 = G__30460;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_30390){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_30390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_30431 = f__19019__auto__.call(null);(statearr_30431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___30432);
return statearr_30431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
cljs.core.async.Pub = (function (){var obj30462 = {};return obj30462;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15171__auto__ = p;if(and__15171__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15171__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15786__auto__ = (((p == null))?null:p);return (function (){var or__15183__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15171__auto__ = p;if(and__15171__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15171__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15786__auto__ = (((p == null))?null:p);return (function (){var or__15183__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15171__auto__ = p;if(and__15171__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15171__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15786__auto__ = (((p == null))?null:p);return (function (){var or__15183__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15171__auto__ = p;if(and__15171__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15171__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15786__auto__ = (((p == null))?null:p);return (function (){var or__15183__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
return (function (topic){var or__15183__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15183__auto__,mults){
return (function (p1__30463_SHARP_){if(cljs.core.truth_(p1__30463_SHARP_.call(null,topic)))
{return p1__30463_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__30463_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15183__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t30588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30588 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30589){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30589 = meta30589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30588.cljs$lang$type = true;
cljs.core.async.t30588.cljs$lang$ctorStr = "cljs.core.async/t30588";
cljs.core.async.t30588.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"cljs.core.async/t30588");
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t30588.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30590){var self__ = this;
var _30590__$1 = this;return self__.meta30589;
});})(mults,ensure_mult))
;
cljs.core.async.t30588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30590,meta30589__$1){var self__ = this;
var _30590__$1 = this;return (new cljs.core.async.t30588(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30589__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t30588 = ((function (mults,ensure_mult){
return (function __GT_t30588(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30589){return (new cljs.core.async.t30588(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30589));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t30588(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__19018__auto___30712 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_30664){var state_val_30665 = (state_30664[1]);if((state_val_30665 === 1))
{var state_30664__$1 = state_30664;var statearr_30666_30713 = state_30664__$1;(statearr_30666_30713[2] = null);
(statearr_30666_30713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 2))
{var state_30664__$1 = state_30664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30664__$1,4,ch);
} else
{if((state_val_30665 === 3))
{var inst_30662 = (state_30664[2]);var state_30664__$1 = state_30664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30664__$1,inst_30662);
} else
{if((state_val_30665 === 4))
{var inst_30593 = (state_30664[7]);var inst_30593__$1 = (state_30664[2]);var inst_30594 = (inst_30593__$1 == null);var state_30664__$1 = (function (){var statearr_30667 = state_30664;(statearr_30667[7] = inst_30593__$1);
return statearr_30667;
})();if(cljs.core.truth_(inst_30594))
{var statearr_30668_30714 = state_30664__$1;(statearr_30668_30714[1] = 5);
} else
{var statearr_30669_30715 = state_30664__$1;(statearr_30669_30715[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 5))
{var inst_30600 = cljs.core.deref.call(null,mults);var inst_30601 = cljs.core.vals.call(null,inst_30600);var inst_30602 = cljs.core.seq.call(null,inst_30601);var inst_30603 = inst_30602;var inst_30604 = null;var inst_30605 = 0;var inst_30606 = 0;var state_30664__$1 = (function (){var statearr_30670 = state_30664;(statearr_30670[8] = inst_30603);
(statearr_30670[9] = inst_30606);
(statearr_30670[10] = inst_30604);
(statearr_30670[11] = inst_30605);
return statearr_30670;
})();var statearr_30671_30716 = state_30664__$1;(statearr_30671_30716[2] = null);
(statearr_30671_30716[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 6))
{var inst_30641 = (state_30664[12]);var inst_30643 = (state_30664[13]);var inst_30593 = (state_30664[7]);var inst_30641__$1 = topic_fn.call(null,inst_30593);var inst_30642 = cljs.core.deref.call(null,mults);var inst_30643__$1 = cljs.core.get.call(null,inst_30642,inst_30641__$1);var state_30664__$1 = (function (){var statearr_30672 = state_30664;(statearr_30672[12] = inst_30641__$1);
(statearr_30672[13] = inst_30643__$1);
return statearr_30672;
})();if(cljs.core.truth_(inst_30643__$1))
{var statearr_30673_30717 = state_30664__$1;(statearr_30673_30717[1] = 19);
} else
{var statearr_30674_30718 = state_30664__$1;(statearr_30674_30718[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 7))
{var inst_30660 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30675_30719 = state_30664__$1;(statearr_30675_30719[2] = inst_30660);
(statearr_30675_30719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 8))
{var inst_30606 = (state_30664[9]);var inst_30605 = (state_30664[11]);var inst_30608 = (inst_30606 < inst_30605);var inst_30609 = inst_30608;var state_30664__$1 = state_30664;if(cljs.core.truth_(inst_30609))
{var statearr_30679_30720 = state_30664__$1;(statearr_30679_30720[1] = 10);
} else
{var statearr_30680_30721 = state_30664__$1;(statearr_30680_30721[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 9))
{var inst_30639 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30681_30722 = state_30664__$1;(statearr_30681_30722[2] = inst_30639);
(statearr_30681_30722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 10))
{var inst_30603 = (state_30664[8]);var inst_30606 = (state_30664[9]);var inst_30604 = (state_30664[10]);var inst_30605 = (state_30664[11]);var inst_30611 = cljs.core._nth.call(null,inst_30604,inst_30606);var inst_30612 = cljs.core.async.muxch_STAR_.call(null,inst_30611);var inst_30613 = cljs.core.async.close_BANG_.call(null,inst_30612);var inst_30614 = (inst_30606 + 1);var tmp30676 = inst_30603;var tmp30677 = inst_30604;var tmp30678 = inst_30605;var inst_30603__$1 = tmp30676;var inst_30604__$1 = tmp30677;var inst_30605__$1 = tmp30678;var inst_30606__$1 = inst_30614;var state_30664__$1 = (function (){var statearr_30682 = state_30664;(statearr_30682[14] = inst_30613);
(statearr_30682[8] = inst_30603__$1);
(statearr_30682[9] = inst_30606__$1);
(statearr_30682[10] = inst_30604__$1);
(statearr_30682[11] = inst_30605__$1);
return statearr_30682;
})();var statearr_30683_30723 = state_30664__$1;(statearr_30683_30723[2] = null);
(statearr_30683_30723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 11))
{var inst_30617 = (state_30664[15]);var inst_30603 = (state_30664[8]);var inst_30617__$1 = cljs.core.seq.call(null,inst_30603);var state_30664__$1 = (function (){var statearr_30684 = state_30664;(statearr_30684[15] = inst_30617__$1);
return statearr_30684;
})();if(inst_30617__$1)
{var statearr_30685_30724 = state_30664__$1;(statearr_30685_30724[1] = 13);
} else
{var statearr_30686_30725 = state_30664__$1;(statearr_30686_30725[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 12))
{var inst_30637 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30687_30726 = state_30664__$1;(statearr_30687_30726[2] = inst_30637);
(statearr_30687_30726[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 13))
{var inst_30617 = (state_30664[15]);var inst_30619 = cljs.core.chunked_seq_QMARK_.call(null,inst_30617);var state_30664__$1 = state_30664;if(inst_30619)
{var statearr_30688_30727 = state_30664__$1;(statearr_30688_30727[1] = 16);
} else
{var statearr_30689_30728 = state_30664__$1;(statearr_30689_30728[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 14))
{var state_30664__$1 = state_30664;var statearr_30690_30729 = state_30664__$1;(statearr_30690_30729[2] = null);
(statearr_30690_30729[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 15))
{var inst_30635 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30691_30730 = state_30664__$1;(statearr_30691_30730[2] = inst_30635);
(statearr_30691_30730[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 16))
{var inst_30617 = (state_30664[15]);var inst_30621 = cljs.core.chunk_first.call(null,inst_30617);var inst_30622 = cljs.core.chunk_rest.call(null,inst_30617);var inst_30623 = cljs.core.count.call(null,inst_30621);var inst_30603 = inst_30622;var inst_30604 = inst_30621;var inst_30605 = inst_30623;var inst_30606 = 0;var state_30664__$1 = (function (){var statearr_30692 = state_30664;(statearr_30692[8] = inst_30603);
(statearr_30692[9] = inst_30606);
(statearr_30692[10] = inst_30604);
(statearr_30692[11] = inst_30605);
return statearr_30692;
})();var statearr_30693_30731 = state_30664__$1;(statearr_30693_30731[2] = null);
(statearr_30693_30731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 17))
{var inst_30617 = (state_30664[15]);var inst_30626 = cljs.core.first.call(null,inst_30617);var inst_30627 = cljs.core.async.muxch_STAR_.call(null,inst_30626);var inst_30628 = cljs.core.async.close_BANG_.call(null,inst_30627);var inst_30629 = cljs.core.next.call(null,inst_30617);var inst_30603 = inst_30629;var inst_30604 = null;var inst_30605 = 0;var inst_30606 = 0;var state_30664__$1 = (function (){var statearr_30694 = state_30664;(statearr_30694[16] = inst_30628);
(statearr_30694[8] = inst_30603);
(statearr_30694[9] = inst_30606);
(statearr_30694[10] = inst_30604);
(statearr_30694[11] = inst_30605);
return statearr_30694;
})();var statearr_30695_30732 = state_30664__$1;(statearr_30695_30732[2] = null);
(statearr_30695_30732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 18))
{var inst_30632 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30696_30733 = state_30664__$1;(statearr_30696_30733[2] = inst_30632);
(statearr_30696_30733[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 19))
{var state_30664__$1 = state_30664;var statearr_30697_30734 = state_30664__$1;(statearr_30697_30734[2] = null);
(statearr_30697_30734[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 20))
{var state_30664__$1 = state_30664;var statearr_30698_30735 = state_30664__$1;(statearr_30698_30735[2] = null);
(statearr_30698_30735[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 21))
{var inst_30657 = (state_30664[2]);var state_30664__$1 = (function (){var statearr_30699 = state_30664;(statearr_30699[17] = inst_30657);
return statearr_30699;
})();var statearr_30700_30736 = state_30664__$1;(statearr_30700_30736[2] = null);
(statearr_30700_30736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 22))
{var inst_30654 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30701_30737 = state_30664__$1;(statearr_30701_30737[2] = inst_30654);
(statearr_30701_30737[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 23))
{var inst_30641 = (state_30664[12]);var inst_30645 = (state_30664[2]);var inst_30646 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30641);var state_30664__$1 = (function (){var statearr_30702 = state_30664;(statearr_30702[18] = inst_30645);
return statearr_30702;
})();var statearr_30703_30738 = state_30664__$1;(statearr_30703_30738[2] = inst_30646);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30664__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30665 === 24))
{var inst_30643 = (state_30664[13]);var inst_30593 = (state_30664[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30664,23,Object,null,22);var inst_30650 = cljs.core.async.muxch_STAR_.call(null,inst_30643);var state_30664__$1 = state_30664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30664__$1,25,inst_30650,inst_30593);
} else
{if((state_val_30665 === 25))
{var inst_30652 = (state_30664[2]);var state_30664__$1 = state_30664;var statearr_30704_30739 = state_30664__$1;(statearr_30704_30739[2] = inst_30652);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30664__$1);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_30708 = (new Array(19));(statearr_30708[0] = state_machine__18949__auto__);
(statearr_30708[1] = 1);
return statearr_30708;
});
var state_machine__18949__auto____1 = (function (state_30664){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_30664);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e30709){if((e30709 instanceof Object))
{var ex__18952__auto__ = e30709;var statearr_30710_30740 = state_30664;(statearr_30710_30740[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30741 = state_30664;
state_30664 = G__30741;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_30664){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_30664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_30711 = f__19019__auto__.call(null);(statearr_30711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___30712);
return statearr_30711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
,cljs.core.range.call(null,cnt));var c__19018__auto___30878 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_30848){var state_val_30849 = (state_30848[1]);if((state_val_30849 === 1))
{var state_30848__$1 = state_30848;var statearr_30850_30879 = state_30848__$1;(statearr_30850_30879[2] = null);
(statearr_30850_30879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 2))
{var inst_30811 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_30812 = 0;var state_30848__$1 = (function (){var statearr_30851 = state_30848;(statearr_30851[7] = inst_30812);
(statearr_30851[8] = inst_30811);
return statearr_30851;
})();var statearr_30852_30880 = state_30848__$1;(statearr_30852_30880[2] = null);
(statearr_30852_30880[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 3))
{var inst_30846 = (state_30848[2]);var state_30848__$1 = state_30848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30848__$1,inst_30846);
} else
{if((state_val_30849 === 4))
{var inst_30812 = (state_30848[7]);var inst_30814 = (inst_30812 < cnt);var state_30848__$1 = state_30848;if(cljs.core.truth_(inst_30814))
{var statearr_30853_30881 = state_30848__$1;(statearr_30853_30881[1] = 6);
} else
{var statearr_30854_30882 = state_30848__$1;(statearr_30854_30882[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 5))
{var inst_30832 = (state_30848[2]);var state_30848__$1 = (function (){var statearr_30855 = state_30848;(statearr_30855[9] = inst_30832);
return statearr_30855;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,12,dchan);
} else
{if((state_val_30849 === 6))
{var state_30848__$1 = state_30848;var statearr_30856_30883 = state_30848__$1;(statearr_30856_30883[2] = null);
(statearr_30856_30883[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 7))
{var state_30848__$1 = state_30848;var statearr_30857_30884 = state_30848__$1;(statearr_30857_30884[2] = null);
(statearr_30857_30884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 8))
{var inst_30830 = (state_30848[2]);var state_30848__$1 = state_30848;var statearr_30858_30885 = state_30848__$1;(statearr_30858_30885[2] = inst_30830);
(statearr_30858_30885[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 9))
{var inst_30812 = (state_30848[7]);var inst_30825 = (state_30848[2]);var inst_30826 = (inst_30812 + 1);var inst_30812__$1 = inst_30826;var state_30848__$1 = (function (){var statearr_30859 = state_30848;(statearr_30859[7] = inst_30812__$1);
(statearr_30859[10] = inst_30825);
return statearr_30859;
})();var statearr_30860_30886 = state_30848__$1;(statearr_30860_30886[2] = null);
(statearr_30860_30886[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 10))
{var inst_30816 = (state_30848[2]);var inst_30817 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_30848__$1 = (function (){var statearr_30861 = state_30848;(statearr_30861[11] = inst_30816);
return statearr_30861;
})();var statearr_30862_30887 = state_30848__$1;(statearr_30862_30887[2] = inst_30817);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30848__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 11))
{var inst_30812 = (state_30848[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30848,10,Object,null,9);var inst_30821 = chs__$1.call(null,inst_30812);var inst_30822 = done.call(null,inst_30812);var inst_30823 = cljs.core.async.take_BANG_.call(null,inst_30821,inst_30822);var state_30848__$1 = state_30848;var statearr_30863_30888 = state_30848__$1;(statearr_30863_30888[2] = inst_30823);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30848__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 12))
{var inst_30834 = (state_30848[12]);var inst_30834__$1 = (state_30848[2]);var inst_30835 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30834__$1);var state_30848__$1 = (function (){var statearr_30864 = state_30848;(statearr_30864[12] = inst_30834__$1);
return statearr_30864;
})();if(cljs.core.truth_(inst_30835))
{var statearr_30865_30889 = state_30848__$1;(statearr_30865_30889[1] = 13);
} else
{var statearr_30866_30890 = state_30848__$1;(statearr_30866_30890[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 13))
{var inst_30837 = cljs.core.async.close_BANG_.call(null,out);var state_30848__$1 = state_30848;var statearr_30867_30891 = state_30848__$1;(statearr_30867_30891[2] = inst_30837);
(statearr_30867_30891[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 14))
{var inst_30834 = (state_30848[12]);var inst_30839 = cljs.core.apply.call(null,f,inst_30834);var state_30848__$1 = state_30848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30848__$1,16,out,inst_30839);
} else
{if((state_val_30849 === 15))
{var inst_30844 = (state_30848[2]);var state_30848__$1 = state_30848;var statearr_30868_30892 = state_30848__$1;(statearr_30868_30892[2] = inst_30844);
(statearr_30868_30892[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30849 === 16))
{var inst_30841 = (state_30848[2]);var state_30848__$1 = (function (){var statearr_30869 = state_30848;(statearr_30869[13] = inst_30841);
return statearr_30869;
})();var statearr_30870_30893 = state_30848__$1;(statearr_30870_30893[2] = null);
(statearr_30870_30893[1] = 2);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_30874 = (new Array(14));(statearr_30874[0] = state_machine__18949__auto__);
(statearr_30874[1] = 1);
return statearr_30874;
});
var state_machine__18949__auto____1 = (function (state_30848){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_30848);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e30875){if((e30875 instanceof Object))
{var ex__18952__auto__ = e30875;var statearr_30876_30894 = state_30848;(statearr_30876_30894[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30895 = state_30848;
state_30848 = G__30895;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_30848){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_30848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_30877 = f__19019__auto__.call(null);(statearr_30877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___30878);
return statearr_30877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__19018__auto___31003 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_30979){var state_val_30980 = (state_30979[1]);if((state_val_30980 === 1))
{var inst_30950 = cljs.core.vec.call(null,chs);var inst_30951 = inst_30950;var state_30979__$1 = (function (){var statearr_30981 = state_30979;(statearr_30981[7] = inst_30951);
return statearr_30981;
})();var statearr_30982_31004 = state_30979__$1;(statearr_30982_31004[2] = null);
(statearr_30982_31004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 2))
{var inst_30951 = (state_30979[7]);var inst_30953 = cljs.core.count.call(null,inst_30951);var inst_30954 = (inst_30953 > 0);var state_30979__$1 = state_30979;if(cljs.core.truth_(inst_30954))
{var statearr_30983_31005 = state_30979__$1;(statearr_30983_31005[1] = 4);
} else
{var statearr_30984_31006 = state_30979__$1;(statearr_30984_31006[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 3))
{var inst_30977 = (state_30979[2]);var state_30979__$1 = state_30979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30979__$1,inst_30977);
} else
{if((state_val_30980 === 4))
{var inst_30951 = (state_30979[7]);var state_30979__$1 = state_30979;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30979__$1,7,inst_30951);
} else
{if((state_val_30980 === 5))
{var inst_30973 = cljs.core.async.close_BANG_.call(null,out);var state_30979__$1 = state_30979;var statearr_30985_31007 = state_30979__$1;(statearr_30985_31007[2] = inst_30973);
(statearr_30985_31007[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 6))
{var inst_30975 = (state_30979[2]);var state_30979__$1 = state_30979;var statearr_30986_31008 = state_30979__$1;(statearr_30986_31008[2] = inst_30975);
(statearr_30986_31008[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 7))
{var inst_30958 = (state_30979[8]);var inst_30959 = (state_30979[9]);var inst_30958__$1 = (state_30979[2]);var inst_30959__$1 = cljs.core.nth.call(null,inst_30958__$1,0,null);var inst_30960 = cljs.core.nth.call(null,inst_30958__$1,1,null);var inst_30961 = (inst_30959__$1 == null);var state_30979__$1 = (function (){var statearr_30987 = state_30979;(statearr_30987[10] = inst_30960);
(statearr_30987[8] = inst_30958__$1);
(statearr_30987[9] = inst_30959__$1);
return statearr_30987;
})();if(cljs.core.truth_(inst_30961))
{var statearr_30988_31009 = state_30979__$1;(statearr_30988_31009[1] = 8);
} else
{var statearr_30989_31010 = state_30979__$1;(statearr_30989_31010[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 8))
{var inst_30960 = (state_30979[10]);var inst_30951 = (state_30979[7]);var inst_30958 = (state_30979[8]);var inst_30959 = (state_30979[9]);var inst_30963 = (function (){var c = inst_30960;var v = inst_30959;var vec__30956 = inst_30958;var cs = inst_30951;return ((function (c,v,vec__30956,cs,inst_30960,inst_30951,inst_30958,inst_30959,state_val_30980){
return (function (p1__30896_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__30896_SHARP_);
});
;})(c,v,vec__30956,cs,inst_30960,inst_30951,inst_30958,inst_30959,state_val_30980))
})();var inst_30964 = cljs.core.filterv.call(null,inst_30963,inst_30951);var inst_30951__$1 = inst_30964;var state_30979__$1 = (function (){var statearr_30990 = state_30979;(statearr_30990[7] = inst_30951__$1);
return statearr_30990;
})();var statearr_30991_31011 = state_30979__$1;(statearr_30991_31011[2] = null);
(statearr_30991_31011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 9))
{var inst_30959 = (state_30979[9]);var state_30979__$1 = state_30979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30979__$1,11,out,inst_30959);
} else
{if((state_val_30980 === 10))
{var inst_30971 = (state_30979[2]);var state_30979__$1 = state_30979;var statearr_30993_31012 = state_30979__$1;(statearr_30993_31012[2] = inst_30971);
(statearr_30993_31012[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30980 === 11))
{var inst_30951 = (state_30979[7]);var inst_30968 = (state_30979[2]);var tmp30992 = inst_30951;var inst_30951__$1 = tmp30992;var state_30979__$1 = (function (){var statearr_30994 = state_30979;(statearr_30994[7] = inst_30951__$1);
(statearr_30994[11] = inst_30968);
return statearr_30994;
})();var statearr_30995_31013 = state_30979__$1;(statearr_30995_31013[2] = null);
(statearr_30995_31013[1] = 2);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_30999 = (new Array(12));(statearr_30999[0] = state_machine__18949__auto__);
(statearr_30999[1] = 1);
return statearr_30999;
});
var state_machine__18949__auto____1 = (function (state_30979){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_30979);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e31000){if((e31000 instanceof Object))
{var ex__18952__auto__ = e31000;var statearr_31001_31014 = state_30979;(statearr_31001_31014[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31015 = state_30979;
state_30979 = G__31015;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_30979){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_30979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_31002 = f__19019__auto__.call(null);(statearr_31002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___31003);
return statearr_31002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__19018__auto___31108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_31085){var state_val_31086 = (state_31085[1]);if((state_val_31086 === 1))
{var inst_31062 = 0;var state_31085__$1 = (function (){var statearr_31087 = state_31085;(statearr_31087[7] = inst_31062);
return statearr_31087;
})();var statearr_31088_31109 = state_31085__$1;(statearr_31088_31109[2] = null);
(statearr_31088_31109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 2))
{var inst_31062 = (state_31085[7]);var inst_31064 = (inst_31062 < n);var state_31085__$1 = state_31085;if(cljs.core.truth_(inst_31064))
{var statearr_31089_31110 = state_31085__$1;(statearr_31089_31110[1] = 4);
} else
{var statearr_31090_31111 = state_31085__$1;(statearr_31090_31111[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 3))
{var inst_31082 = (state_31085[2]);var inst_31083 = cljs.core.async.close_BANG_.call(null,out);var state_31085__$1 = (function (){var statearr_31091 = state_31085;(statearr_31091[8] = inst_31082);
return statearr_31091;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31085__$1,inst_31083);
} else
{if((state_val_31086 === 4))
{var state_31085__$1 = state_31085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31085__$1,7,ch);
} else
{if((state_val_31086 === 5))
{var state_31085__$1 = state_31085;var statearr_31092_31112 = state_31085__$1;(statearr_31092_31112[2] = null);
(statearr_31092_31112[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 6))
{var inst_31080 = (state_31085[2]);var state_31085__$1 = state_31085;var statearr_31093_31113 = state_31085__$1;(statearr_31093_31113[2] = inst_31080);
(statearr_31093_31113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 7))
{var inst_31067 = (state_31085[9]);var inst_31067__$1 = (state_31085[2]);var inst_31068 = (inst_31067__$1 == null);var inst_31069 = cljs.core.not.call(null,inst_31068);var state_31085__$1 = (function (){var statearr_31094 = state_31085;(statearr_31094[9] = inst_31067__$1);
return statearr_31094;
})();if(inst_31069)
{var statearr_31095_31114 = state_31085__$1;(statearr_31095_31114[1] = 8);
} else
{var statearr_31096_31115 = state_31085__$1;(statearr_31096_31115[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 8))
{var inst_31067 = (state_31085[9]);var state_31085__$1 = state_31085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31085__$1,11,out,inst_31067);
} else
{if((state_val_31086 === 9))
{var state_31085__$1 = state_31085;var statearr_31097_31116 = state_31085__$1;(statearr_31097_31116[2] = null);
(statearr_31097_31116[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 10))
{var inst_31077 = (state_31085[2]);var state_31085__$1 = state_31085;var statearr_31098_31117 = state_31085__$1;(statearr_31098_31117[2] = inst_31077);
(statearr_31098_31117[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31086 === 11))
{var inst_31062 = (state_31085[7]);var inst_31072 = (state_31085[2]);var inst_31073 = (inst_31062 + 1);var inst_31062__$1 = inst_31073;var state_31085__$1 = (function (){var statearr_31099 = state_31085;(statearr_31099[7] = inst_31062__$1);
(statearr_31099[10] = inst_31072);
return statearr_31099;
})();var statearr_31100_31118 = state_31085__$1;(statearr_31100_31118[2] = null);
(statearr_31100_31118[1] = 2);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_31104 = (new Array(11));(statearr_31104[0] = state_machine__18949__auto__);
(statearr_31104[1] = 1);
return statearr_31104;
});
var state_machine__18949__auto____1 = (function (state_31085){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_31085);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e31105){if((e31105 instanceof Object))
{var ex__18952__auto__ = e31105;var statearr_31106_31119 = state_31085;(statearr_31106_31119[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31120 = state_31085;
state_31085 = G__31120;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_31085){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_31085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_31107 = f__19019__auto__.call(null);(statearr_31107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___31108);
return statearr_31107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__19018__auto___31217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_31192){var state_val_31193 = (state_31192[1]);if((state_val_31193 === 1))
{var inst_31169 = null;var state_31192__$1 = (function (){var statearr_31194 = state_31192;(statearr_31194[7] = inst_31169);
return statearr_31194;
})();var statearr_31195_31218 = state_31192__$1;(statearr_31195_31218[2] = null);
(statearr_31195_31218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 2))
{var state_31192__$1 = state_31192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31192__$1,4,ch);
} else
{if((state_val_31193 === 3))
{var inst_31189 = (state_31192[2]);var inst_31190 = cljs.core.async.close_BANG_.call(null,out);var state_31192__$1 = (function (){var statearr_31196 = state_31192;(statearr_31196[8] = inst_31189);
return statearr_31196;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31192__$1,inst_31190);
} else
{if((state_val_31193 === 4))
{var inst_31172 = (state_31192[9]);var inst_31172__$1 = (state_31192[2]);var inst_31173 = (inst_31172__$1 == null);var inst_31174 = cljs.core.not.call(null,inst_31173);var state_31192__$1 = (function (){var statearr_31197 = state_31192;(statearr_31197[9] = inst_31172__$1);
return statearr_31197;
})();if(inst_31174)
{var statearr_31198_31219 = state_31192__$1;(statearr_31198_31219[1] = 5);
} else
{var statearr_31199_31220 = state_31192__$1;(statearr_31199_31220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 5))
{var inst_31172 = (state_31192[9]);var inst_31169 = (state_31192[7]);var inst_31176 = cljs.core._EQ_.call(null,inst_31172,inst_31169);var state_31192__$1 = state_31192;if(inst_31176)
{var statearr_31200_31221 = state_31192__$1;(statearr_31200_31221[1] = 8);
} else
{var statearr_31201_31222 = state_31192__$1;(statearr_31201_31222[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 6))
{var state_31192__$1 = state_31192;var statearr_31203_31223 = state_31192__$1;(statearr_31203_31223[2] = null);
(statearr_31203_31223[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 7))
{var inst_31187 = (state_31192[2]);var state_31192__$1 = state_31192;var statearr_31204_31224 = state_31192__$1;(statearr_31204_31224[2] = inst_31187);
(statearr_31204_31224[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 8))
{var inst_31169 = (state_31192[7]);var tmp31202 = inst_31169;var inst_31169__$1 = tmp31202;var state_31192__$1 = (function (){var statearr_31205 = state_31192;(statearr_31205[7] = inst_31169__$1);
return statearr_31205;
})();var statearr_31206_31225 = state_31192__$1;(statearr_31206_31225[2] = null);
(statearr_31206_31225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 9))
{var inst_31172 = (state_31192[9]);var state_31192__$1 = state_31192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31192__$1,11,out,inst_31172);
} else
{if((state_val_31193 === 10))
{var inst_31184 = (state_31192[2]);var state_31192__$1 = state_31192;var statearr_31207_31226 = state_31192__$1;(statearr_31207_31226[2] = inst_31184);
(statearr_31207_31226[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31193 === 11))
{var inst_31172 = (state_31192[9]);var inst_31181 = (state_31192[2]);var inst_31169 = inst_31172;var state_31192__$1 = (function (){var statearr_31208 = state_31192;(statearr_31208[7] = inst_31169);
(statearr_31208[10] = inst_31181);
return statearr_31208;
})();var statearr_31209_31227 = state_31192__$1;(statearr_31209_31227[2] = null);
(statearr_31209_31227[1] = 2);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_31213 = (new Array(11));(statearr_31213[0] = state_machine__18949__auto__);
(statearr_31213[1] = 1);
return statearr_31213;
});
var state_machine__18949__auto____1 = (function (state_31192){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_31192);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e31214){if((e31214 instanceof Object))
{var ex__18952__auto__ = e31214;var statearr_31215_31228 = state_31192;(statearr_31215_31228[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31192);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31229 = state_31192;
state_31192 = G__31229;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_31192){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_31192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_31216 = f__19019__auto__.call(null);(statearr_31216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___31217);
return statearr_31216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__19018__auto___31364 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_31334){var state_val_31335 = (state_31334[1]);if((state_val_31335 === 1))
{var inst_31297 = (new Array(n));var inst_31298 = inst_31297;var inst_31299 = 0;var state_31334__$1 = (function (){var statearr_31336 = state_31334;(statearr_31336[7] = inst_31299);
(statearr_31336[8] = inst_31298);
return statearr_31336;
})();var statearr_31337_31365 = state_31334__$1;(statearr_31337_31365[2] = null);
(statearr_31337_31365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 2))
{var state_31334__$1 = state_31334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31334__$1,4,ch);
} else
{if((state_val_31335 === 3))
{var inst_31332 = (state_31334[2]);var state_31334__$1 = state_31334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31334__$1,inst_31332);
} else
{if((state_val_31335 === 4))
{var inst_31302 = (state_31334[9]);var inst_31302__$1 = (state_31334[2]);var inst_31303 = (inst_31302__$1 == null);var inst_31304 = cljs.core.not.call(null,inst_31303);var state_31334__$1 = (function (){var statearr_31338 = state_31334;(statearr_31338[9] = inst_31302__$1);
return statearr_31338;
})();if(inst_31304)
{var statearr_31339_31366 = state_31334__$1;(statearr_31339_31366[1] = 5);
} else
{var statearr_31340_31367 = state_31334__$1;(statearr_31340_31367[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 5))
{var inst_31307 = (state_31334[10]);var inst_31299 = (state_31334[7]);var inst_31298 = (state_31334[8]);var inst_31302 = (state_31334[9]);var inst_31306 = (inst_31298[inst_31299] = inst_31302);var inst_31307__$1 = (inst_31299 + 1);var inst_31308 = (inst_31307__$1 < n);var state_31334__$1 = (function (){var statearr_31341 = state_31334;(statearr_31341[10] = inst_31307__$1);
(statearr_31341[11] = inst_31306);
return statearr_31341;
})();if(cljs.core.truth_(inst_31308))
{var statearr_31342_31368 = state_31334__$1;(statearr_31342_31368[1] = 8);
} else
{var statearr_31343_31369 = state_31334__$1;(statearr_31343_31369[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 6))
{var inst_31299 = (state_31334[7]);var inst_31320 = (inst_31299 > 0);var state_31334__$1 = state_31334;if(cljs.core.truth_(inst_31320))
{var statearr_31345_31370 = state_31334__$1;(statearr_31345_31370[1] = 12);
} else
{var statearr_31346_31371 = state_31334__$1;(statearr_31346_31371[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 7))
{var inst_31330 = (state_31334[2]);var state_31334__$1 = state_31334;var statearr_31347_31372 = state_31334__$1;(statearr_31347_31372[2] = inst_31330);
(statearr_31347_31372[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 8))
{var inst_31307 = (state_31334[10]);var inst_31298 = (state_31334[8]);var tmp31344 = inst_31298;var inst_31298__$1 = tmp31344;var inst_31299 = inst_31307;var state_31334__$1 = (function (){var statearr_31348 = state_31334;(statearr_31348[7] = inst_31299);
(statearr_31348[8] = inst_31298__$1);
return statearr_31348;
})();var statearr_31349_31373 = state_31334__$1;(statearr_31349_31373[2] = null);
(statearr_31349_31373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 9))
{var inst_31298 = (state_31334[8]);var inst_31312 = cljs.core.vec.call(null,inst_31298);var state_31334__$1 = state_31334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31334__$1,11,out,inst_31312);
} else
{if((state_val_31335 === 10))
{var inst_31318 = (state_31334[2]);var state_31334__$1 = state_31334;var statearr_31350_31374 = state_31334__$1;(statearr_31350_31374[2] = inst_31318);
(statearr_31350_31374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 11))
{var inst_31314 = (state_31334[2]);var inst_31315 = (new Array(n));var inst_31298 = inst_31315;var inst_31299 = 0;var state_31334__$1 = (function (){var statearr_31351 = state_31334;(statearr_31351[7] = inst_31299);
(statearr_31351[8] = inst_31298);
(statearr_31351[12] = inst_31314);
return statearr_31351;
})();var statearr_31352_31375 = state_31334__$1;(statearr_31352_31375[2] = null);
(statearr_31352_31375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 12))
{var inst_31298 = (state_31334[8]);var inst_31322 = cljs.core.vec.call(null,inst_31298);var state_31334__$1 = state_31334;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31334__$1,15,out,inst_31322);
} else
{if((state_val_31335 === 13))
{var state_31334__$1 = state_31334;var statearr_31353_31376 = state_31334__$1;(statearr_31353_31376[2] = null);
(statearr_31353_31376[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 14))
{var inst_31327 = (state_31334[2]);var inst_31328 = cljs.core.async.close_BANG_.call(null,out);var state_31334__$1 = (function (){var statearr_31354 = state_31334;(statearr_31354[13] = inst_31327);
return statearr_31354;
})();var statearr_31355_31377 = state_31334__$1;(statearr_31355_31377[2] = inst_31328);
(statearr_31355_31377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31335 === 15))
{var inst_31324 = (state_31334[2]);var state_31334__$1 = state_31334;var statearr_31356_31378 = state_31334__$1;(statearr_31356_31378[2] = inst_31324);
(statearr_31356_31378[1] = 14);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_31360 = (new Array(14));(statearr_31360[0] = state_machine__18949__auto__);
(statearr_31360[1] = 1);
return statearr_31360;
});
var state_machine__18949__auto____1 = (function (state_31334){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_31334);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e31361){if((e31361 instanceof Object))
{var ex__18952__auto__ = e31361;var statearr_31362_31379 = state_31334;(statearr_31362_31379[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31334);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31380 = state_31334;
state_31334 = G__31380;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_31334){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_31334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_31363 = f__19019__auto__.call(null);(statearr_31363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___31364);
return statearr_31363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__19018__auto___31523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__19019__auto__ = (function (){var switch__18948__auto__ = (function (state_31493){var state_val_31494 = (state_31493[1]);if((state_val_31494 === 1))
{var inst_31452 = (new Array(0));var inst_31453 = inst_31452;var inst_31454 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_31493__$1 = (function (){var statearr_31495 = state_31493;(statearr_31495[7] = inst_31454);
(statearr_31495[8] = inst_31453);
return statearr_31495;
})();var statearr_31496_31524 = state_31493__$1;(statearr_31496_31524[2] = null);
(statearr_31496_31524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 2))
{var state_31493__$1 = state_31493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31493__$1,4,ch);
} else
{if((state_val_31494 === 3))
{var inst_31491 = (state_31493[2]);var state_31493__$1 = state_31493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31493__$1,inst_31491);
} else
{if((state_val_31494 === 4))
{var inst_31457 = (state_31493[9]);var inst_31457__$1 = (state_31493[2]);var inst_31458 = (inst_31457__$1 == null);var inst_31459 = cljs.core.not.call(null,inst_31458);var state_31493__$1 = (function (){var statearr_31497 = state_31493;(statearr_31497[9] = inst_31457__$1);
return statearr_31497;
})();if(inst_31459)
{var statearr_31498_31525 = state_31493__$1;(statearr_31498_31525[1] = 5);
} else
{var statearr_31499_31526 = state_31493__$1;(statearr_31499_31526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 5))
{var inst_31454 = (state_31493[7]);var inst_31461 = (state_31493[10]);var inst_31457 = (state_31493[9]);var inst_31461__$1 = f.call(null,inst_31457);var inst_31462 = cljs.core._EQ_.call(null,inst_31461__$1,inst_31454);var inst_31463 = cljs.core.keyword_identical_QMARK_.call(null,inst_31454,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_31464 = (inst_31462) || (inst_31463);var state_31493__$1 = (function (){var statearr_31500 = state_31493;(statearr_31500[10] = inst_31461__$1);
return statearr_31500;
})();if(cljs.core.truth_(inst_31464))
{var statearr_31501_31527 = state_31493__$1;(statearr_31501_31527[1] = 8);
} else
{var statearr_31502_31528 = state_31493__$1;(statearr_31502_31528[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 6))
{var inst_31453 = (state_31493[8]);var inst_31478 = inst_31453.length;var inst_31479 = (inst_31478 > 0);var state_31493__$1 = state_31493;if(cljs.core.truth_(inst_31479))
{var statearr_31504_31529 = state_31493__$1;(statearr_31504_31529[1] = 12);
} else
{var statearr_31505_31530 = state_31493__$1;(statearr_31505_31530[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 7))
{var inst_31489 = (state_31493[2]);var state_31493__$1 = state_31493;var statearr_31506_31531 = state_31493__$1;(statearr_31506_31531[2] = inst_31489);
(statearr_31506_31531[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 8))
{var inst_31461 = (state_31493[10]);var inst_31457 = (state_31493[9]);var inst_31453 = (state_31493[8]);var inst_31466 = inst_31453.push(inst_31457);var tmp31503 = inst_31453;var inst_31453__$1 = tmp31503;var inst_31454 = inst_31461;var state_31493__$1 = (function (){var statearr_31507 = state_31493;(statearr_31507[7] = inst_31454);
(statearr_31507[8] = inst_31453__$1);
(statearr_31507[11] = inst_31466);
return statearr_31507;
})();var statearr_31508_31532 = state_31493__$1;(statearr_31508_31532[2] = null);
(statearr_31508_31532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 9))
{var inst_31453 = (state_31493[8]);var inst_31469 = cljs.core.vec.call(null,inst_31453);var state_31493__$1 = state_31493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31493__$1,11,out,inst_31469);
} else
{if((state_val_31494 === 10))
{var inst_31476 = (state_31493[2]);var state_31493__$1 = state_31493;var statearr_31509_31533 = state_31493__$1;(statearr_31509_31533[2] = inst_31476);
(statearr_31509_31533[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 11))
{var inst_31461 = (state_31493[10]);var inst_31457 = (state_31493[9]);var inst_31471 = (state_31493[2]);var inst_31472 = (new Array(0));var inst_31473 = inst_31472.push(inst_31457);var inst_31453 = inst_31472;var inst_31454 = inst_31461;var state_31493__$1 = (function (){var statearr_31510 = state_31493;(statearr_31510[7] = inst_31454);
(statearr_31510[8] = inst_31453);
(statearr_31510[12] = inst_31471);
(statearr_31510[13] = inst_31473);
return statearr_31510;
})();var statearr_31511_31534 = state_31493__$1;(statearr_31511_31534[2] = null);
(statearr_31511_31534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 12))
{var inst_31453 = (state_31493[8]);var inst_31481 = cljs.core.vec.call(null,inst_31453);var state_31493__$1 = state_31493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31493__$1,15,out,inst_31481);
} else
{if((state_val_31494 === 13))
{var state_31493__$1 = state_31493;var statearr_31512_31535 = state_31493__$1;(statearr_31512_31535[2] = null);
(statearr_31512_31535[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 14))
{var inst_31486 = (state_31493[2]);var inst_31487 = cljs.core.async.close_BANG_.call(null,out);var state_31493__$1 = (function (){var statearr_31513 = state_31493;(statearr_31513[14] = inst_31486);
return statearr_31513;
})();var statearr_31514_31536 = state_31493__$1;(statearr_31514_31536[2] = inst_31487);
(statearr_31514_31536[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31494 === 15))
{var inst_31483 = (state_31493[2]);var state_31493__$1 = state_31493;var statearr_31515_31537 = state_31493__$1;(statearr_31515_31537[2] = inst_31483);
(statearr_31515_31537[1] = 14);
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
});return ((function (switch__18948__auto__){
return (function() {
var state_machine__18949__auto__ = null;
var state_machine__18949__auto____0 = (function (){var statearr_31519 = (new Array(15));(statearr_31519[0] = state_machine__18949__auto__);
(statearr_31519[1] = 1);
return statearr_31519;
});
var state_machine__18949__auto____1 = (function (state_31493){while(true){
var ret_value__18950__auto__ = (function (){try{while(true){
var result__18951__auto__ = switch__18948__auto__.call(null,state_31493);if(cljs.core.keyword_identical_QMARK_.call(null,result__18951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18951__auto__;
}
break;
}
}catch (e31520){if((e31520 instanceof Object))
{var ex__18952__auto__ = e31520;var statearr_31521_31538 = state_31493;(statearr_31521_31538[5] = ex__18952__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18950__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31539 = state_31493;
state_31493 = G__31539;
continue;
}
} else
{return ret_value__18950__auto__;
}
break;
}
});
state_machine__18949__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return state_machine__18949__auto____0.call(this);
case 1:
return state_machine__18949__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18949__auto____0;
state_machine__18949__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18949__auto____1;
return state_machine__18949__auto__;
})()
;})(switch__18948__auto__))
})();var state__19020__auto__ = (function (){var statearr_31522 = f__19019__auto__.call(null);(statearr_31522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19018__auto___31523);
return statearr_31522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19020__auto__);
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