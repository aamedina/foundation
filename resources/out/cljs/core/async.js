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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t309009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309009 = (function (f,fn_handler,meta309010){
this.f = f;
this.fn_handler = fn_handler;
this.meta309010 = meta309010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309009.cljs$lang$type = true;
cljs.core.async.t309009.cljs$lang$ctorStr = "cljs.core.async/t309009";
cljs.core.async.t309009.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309009");
});
cljs.core.async.t309009.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t309009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t309009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t309009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309011){var self__ = this;
var _309011__$1 = this;return self__.meta309010;
});
cljs.core.async.t309009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309011,meta309010__$1){var self__ = this;
var _309011__$1 = this;return (new cljs.core.async.t309009(self__.f,self__.fn_handler,meta309010__$1));
});
cljs.core.async.__GT_t309009 = (function __GT_t309009(f__$1,fn_handler__$1,meta309010){return (new cljs.core.async.t309009(f__$1,fn_handler__$1,meta309010));
});
}
return (new cljs.core.async.t309009(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__309013 = buff;if(G__309013)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__309013.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__309013.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__309013);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__309013);
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
{var val_309014 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_309014);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_309014);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___309015 = n;var x_309016 = 0;while(true){
if((x_309016 < n__8553__auto___309015))
{(a[x_309016] = 0);
{
var G__309017 = (x_309016 + 1);
x_309016 = G__309017;
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
var G__309018 = (i + 1);
i = G__309018;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t309022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309022 = (function (flag,alt_flag,meta309023){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta309023 = meta309023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309022.cljs$lang$type = true;
cljs.core.async.t309022.cljs$lang$ctorStr = "cljs.core.async/t309022";
cljs.core.async.t309022.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309022");
});
cljs.core.async.t309022.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t309022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t309022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t309022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309024){var self__ = this;
var _309024__$1 = this;return self__.meta309023;
});
cljs.core.async.t309022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309024,meta309023__$1){var self__ = this;
var _309024__$1 = this;return (new cljs.core.async.t309022(self__.flag,self__.alt_flag,meta309023__$1));
});
cljs.core.async.__GT_t309022 = (function __GT_t309022(flag__$1,alt_flag__$1,meta309023){return (new cljs.core.async.t309022(flag__$1,alt_flag__$1,meta309023));
});
}
return (new cljs.core.async.t309022(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t309028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309028 = (function (cb,flag,alt_handler,meta309029){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta309029 = meta309029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309028.cljs$lang$type = true;
cljs.core.async.t309028.cljs$lang$ctorStr = "cljs.core.async/t309028";
cljs.core.async.t309028.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309028");
});
cljs.core.async.t309028.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t309028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t309028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t309028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309030){var self__ = this;
var _309030__$1 = this;return self__.meta309029;
});
cljs.core.async.t309028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309030,meta309029__$1){var self__ = this;
var _309030__$1 = this;return (new cljs.core.async.t309028(self__.cb,self__.flag,self__.alt_handler,meta309029__$1));
});
cljs.core.async.__GT_t309028 = (function __GT_t309028(cb__$1,flag__$1,alt_handler__$1,meta309029){return (new cljs.core.async.t309028(cb__$1,flag__$1,alt_handler__$1,meta309029));
});
}
return (new cljs.core.async.t309028(cb,flag,alt_handler,null));
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
return (function (p1__309031_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__309031_SHARP_,port], null));
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
var G__309032 = (i + 1);
i = G__309032;
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
var alts_BANG___delegate = function (ports,p__309033){var map__309035 = p__309033;var map__309035__$1 = ((cljs.core.seq_QMARK_.call(null,map__309035))?cljs.core.apply.call(null,cljs.core.hash_map,map__309035):map__309035);var opts = map__309035__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__309033 = null;if (arguments.length > 1) {
  p__309033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__309033);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__309036){
var ports = cljs.core.first(arglist__309036);
var p__309033 = cljs.core.rest(arglist__309036);
return alts_BANG___delegate(ports,p__309033);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t309044 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309044 = (function (ch,f,map_LT_,meta309045){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta309045 = meta309045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309044.cljs$lang$type = true;
cljs.core.async.t309044.cljs$lang$ctorStr = "cljs.core.async/t309044";
cljs.core.async.t309044.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309044");
});
cljs.core.async.t309044.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t309044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t309044.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t309044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t309047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309047 = (function (fn1,_,meta309045,ch,f,map_LT_,meta309048){
this.fn1 = fn1;
this._ = _;
this.meta309045 = meta309045;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta309048 = meta309048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309047.cljs$lang$type = true;
cljs.core.async.t309047.cljs$lang$ctorStr = "cljs.core.async/t309047";
cljs.core.async.t309047.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309047");
});
cljs.core.async.t309047.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t309047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t309047.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t309047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__309037_SHARP_){return f1.call(null,(((p1__309037_SHARP_ == null))?null:self__.f.call(null,p1__309037_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t309047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309049){var self__ = this;
var _309049__$1 = this;return self__.meta309048;
});
cljs.core.async.t309047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309049,meta309048__$1){var self__ = this;
var _309049__$1 = this;return (new cljs.core.async.t309047(self__.fn1,self__._,self__.meta309045,self__.ch,self__.f,self__.map_LT_,meta309048__$1));
});
cljs.core.async.__GT_t309047 = (function __GT_t309047(fn1__$1,___$2,meta309045__$1,ch__$2,f__$2,map_LT___$2,meta309048){return (new cljs.core.async.t309047(fn1__$1,___$2,meta309045__$1,ch__$2,f__$2,map_LT___$2,meta309048));
});
}
return (new cljs.core.async.t309047(fn1,___$1,self__.meta309045,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t309044.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t309044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t309044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309046){var self__ = this;
var _309046__$1 = this;return self__.meta309045;
});
cljs.core.async.t309044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309046,meta309045__$1){var self__ = this;
var _309046__$1 = this;return (new cljs.core.async.t309044(self__.ch,self__.f,self__.map_LT_,meta309045__$1));
});
cljs.core.async.__GT_t309044 = (function __GT_t309044(ch__$1,f__$1,map_LT___$1,meta309045){return (new cljs.core.async.t309044(ch__$1,f__$1,map_LT___$1,meta309045));
});
}
return (new cljs.core.async.t309044(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t309053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309053 = (function (ch,f,map_GT_,meta309054){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta309054 = meta309054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309053.cljs$lang$type = true;
cljs.core.async.t309053.cljs$lang$ctorStr = "cljs.core.async/t309053";
cljs.core.async.t309053.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309053");
});
cljs.core.async.t309053.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t309053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t309053.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t309053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t309053.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t309053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t309053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309055){var self__ = this;
var _309055__$1 = this;return self__.meta309054;
});
cljs.core.async.t309053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309055,meta309054__$1){var self__ = this;
var _309055__$1 = this;return (new cljs.core.async.t309053(self__.ch,self__.f,self__.map_GT_,meta309054__$1));
});
cljs.core.async.__GT_t309053 = (function __GT_t309053(ch__$1,f__$1,map_GT___$1,meta309054){return (new cljs.core.async.t309053(ch__$1,f__$1,map_GT___$1,meta309054));
});
}
return (new cljs.core.async.t309053(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t309059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309059 = (function (ch,p,filter_GT_,meta309060){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta309060 = meta309060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309059.cljs$lang$type = true;
cljs.core.async.t309059.cljs$lang$ctorStr = "cljs.core.async/t309059";
cljs.core.async.t309059.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309059");
});
cljs.core.async.t309059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t309059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t309059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t309059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t309059.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t309059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t309059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_309061){var self__ = this;
var _309061__$1 = this;return self__.meta309060;
});
cljs.core.async.t309059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_309061,meta309060__$1){var self__ = this;
var _309061__$1 = this;return (new cljs.core.async.t309059(self__.ch,self__.p,self__.filter_GT_,meta309060__$1));
});
cljs.core.async.__GT_t309059 = (function __GT_t309059(ch__$1,p__$1,filter_GT___$1,meta309060){return (new cljs.core.async.t309059(ch__$1,p__$1,filter_GT___$1,meta309060));
});
}
return (new cljs.core.async.t309059(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___309144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_309123){var state_val_309124 = (state_309123[1]);if((state_val_309124 === 1))
{var state_309123__$1 = state_309123;var statearr_309125_309145 = state_309123__$1;(statearr_309125_309145[2] = null);
(statearr_309125_309145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 2))
{var state_309123__$1 = state_309123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_309123__$1,4,ch);
} else
{if((state_val_309124 === 3))
{var inst_309121 = (state_309123[2]);var state_309123__$1 = state_309123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_309123__$1,inst_309121);
} else
{if((state_val_309124 === 4))
{var inst_309105 = (state_309123[7]);var inst_309105__$1 = (state_309123[2]);var inst_309106 = (inst_309105__$1 == null);var state_309123__$1 = (function (){var statearr_309126 = state_309123;(statearr_309126[7] = inst_309105__$1);
return statearr_309126;
})();if(cljs.core.truth_(inst_309106))
{var statearr_309127_309146 = state_309123__$1;(statearr_309127_309146[1] = 5);
} else
{var statearr_309128_309147 = state_309123__$1;(statearr_309128_309147[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 5))
{var inst_309108 = cljs.core.async.close_BANG_.call(null,out);var state_309123__$1 = state_309123;var statearr_309129_309148 = state_309123__$1;(statearr_309129_309148[2] = inst_309108);
(statearr_309129_309148[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 6))
{var inst_309105 = (state_309123[7]);var inst_309110 = p.call(null,inst_309105);var state_309123__$1 = state_309123;if(cljs.core.truth_(inst_309110))
{var statearr_309130_309149 = state_309123__$1;(statearr_309130_309149[1] = 8);
} else
{var statearr_309131_309150 = state_309123__$1;(statearr_309131_309150[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 7))
{var inst_309119 = (state_309123[2]);var state_309123__$1 = state_309123;var statearr_309132_309151 = state_309123__$1;(statearr_309132_309151[2] = inst_309119);
(statearr_309132_309151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 8))
{var inst_309105 = (state_309123[7]);var state_309123__$1 = state_309123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_309123__$1,11,out,inst_309105);
} else
{if((state_val_309124 === 9))
{var state_309123__$1 = state_309123;var statearr_309133_309152 = state_309123__$1;(statearr_309133_309152[2] = null);
(statearr_309133_309152[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 10))
{var inst_309116 = (state_309123[2]);var state_309123__$1 = (function (){var statearr_309134 = state_309123;(statearr_309134[8] = inst_309116);
return statearr_309134;
})();var statearr_309135_309153 = state_309123__$1;(statearr_309135_309153[2] = null);
(statearr_309135_309153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309124 === 11))
{var inst_309113 = (state_309123[2]);var state_309123__$1 = state_309123;var statearr_309136_309154 = state_309123__$1;(statearr_309136_309154[2] = inst_309113);
(statearr_309136_309154[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_309140 = (new Array(9));(statearr_309140[0] = state_machine__10214__auto__);
(statearr_309140[1] = 1);
return statearr_309140;
});
var state_machine__10214__auto____1 = (function (state_309123){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_309123);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e309141){if((e309141 instanceof Object))
{var ex__10217__auto__ = e309141;var statearr_309142_309155 = state_309123;(statearr_309142_309155[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_309123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e309141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__309156 = state_309123;
state_309123 = G__309156;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_309123){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_309123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_309143 = f__10284__auto__.call(null);(statearr_309143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___309144);
return statearr_309143;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_309308){var state_val_309309 = (state_309308[1]);if((state_val_309309 === 1))
{var state_309308__$1 = state_309308;var statearr_309310_309347 = state_309308__$1;(statearr_309310_309347[2] = null);
(statearr_309310_309347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 2))
{var state_309308__$1 = state_309308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_309308__$1,4,in$);
} else
{if((state_val_309309 === 3))
{var inst_309306 = (state_309308[2]);var state_309308__$1 = state_309308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_309308__$1,inst_309306);
} else
{if((state_val_309309 === 4))
{var inst_309254 = (state_309308[7]);var inst_309254__$1 = (state_309308[2]);var inst_309255 = (inst_309254__$1 == null);var state_309308__$1 = (function (){var statearr_309311 = state_309308;(statearr_309311[7] = inst_309254__$1);
return statearr_309311;
})();if(cljs.core.truth_(inst_309255))
{var statearr_309312_309348 = state_309308__$1;(statearr_309312_309348[1] = 5);
} else
{var statearr_309313_309349 = state_309308__$1;(statearr_309313_309349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 5))
{var inst_309257 = cljs.core.async.close_BANG_.call(null,out);var state_309308__$1 = state_309308;var statearr_309314_309350 = state_309308__$1;(statearr_309314_309350[2] = inst_309257);
(statearr_309314_309350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 6))
{var inst_309254 = (state_309308[7]);var inst_309259 = f.call(null,inst_309254);var inst_309264 = cljs.core.seq.call(null,inst_309259);var inst_309265 = inst_309264;var inst_309266 = null;var inst_309267 = 0;var inst_309268 = 0;var state_309308__$1 = (function (){var statearr_309315 = state_309308;(statearr_309315[8] = inst_309268);
(statearr_309315[9] = inst_309267);
(statearr_309315[10] = inst_309265);
(statearr_309315[11] = inst_309266);
return statearr_309315;
})();var statearr_309316_309351 = state_309308__$1;(statearr_309316_309351[2] = null);
(statearr_309316_309351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 7))
{var inst_309304 = (state_309308[2]);var state_309308__$1 = state_309308;var statearr_309317_309352 = state_309308__$1;(statearr_309317_309352[2] = inst_309304);
(statearr_309317_309352[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 8))
{var inst_309268 = (state_309308[8]);var inst_309267 = (state_309308[9]);var inst_309270 = (inst_309268 < inst_309267);var inst_309271 = inst_309270;var state_309308__$1 = state_309308;if(cljs.core.truth_(inst_309271))
{var statearr_309318_309353 = state_309308__$1;(statearr_309318_309353[1] = 10);
} else
{var statearr_309319_309354 = state_309308__$1;(statearr_309319_309354[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 9))
{var inst_309301 = (state_309308[2]);var state_309308__$1 = (function (){var statearr_309320 = state_309308;(statearr_309320[12] = inst_309301);
return statearr_309320;
})();var statearr_309321_309355 = state_309308__$1;(statearr_309321_309355[2] = null);
(statearr_309321_309355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 10))
{var inst_309268 = (state_309308[8]);var inst_309266 = (state_309308[11]);var inst_309273 = cljs.core._nth.call(null,inst_309266,inst_309268);var state_309308__$1 = state_309308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_309308__$1,13,out,inst_309273);
} else
{if((state_val_309309 === 11))
{var inst_309265 = (state_309308[10]);var inst_309279 = (state_309308[13]);var inst_309279__$1 = cljs.core.seq.call(null,inst_309265);var state_309308__$1 = (function (){var statearr_309325 = state_309308;(statearr_309325[13] = inst_309279__$1);
return statearr_309325;
})();if(inst_309279__$1)
{var statearr_309326_309356 = state_309308__$1;(statearr_309326_309356[1] = 14);
} else
{var statearr_309327_309357 = state_309308__$1;(statearr_309327_309357[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 12))
{var inst_309299 = (state_309308[2]);var state_309308__$1 = state_309308;var statearr_309328_309358 = state_309308__$1;(statearr_309328_309358[2] = inst_309299);
(statearr_309328_309358[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 13))
{var inst_309268 = (state_309308[8]);var inst_309267 = (state_309308[9]);var inst_309265 = (state_309308[10]);var inst_309266 = (state_309308[11]);var inst_309275 = (state_309308[2]);var inst_309276 = (inst_309268 + 1);var tmp309322 = inst_309267;var tmp309323 = inst_309265;var tmp309324 = inst_309266;var inst_309265__$1 = tmp309323;var inst_309266__$1 = tmp309324;var inst_309267__$1 = tmp309322;var inst_309268__$1 = inst_309276;var state_309308__$1 = (function (){var statearr_309329 = state_309308;(statearr_309329[14] = inst_309275);
(statearr_309329[8] = inst_309268__$1);
(statearr_309329[9] = inst_309267__$1);
(statearr_309329[10] = inst_309265__$1);
(statearr_309329[11] = inst_309266__$1);
return statearr_309329;
})();var statearr_309330_309359 = state_309308__$1;(statearr_309330_309359[2] = null);
(statearr_309330_309359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 14))
{var inst_309279 = (state_309308[13]);var inst_309281 = cljs.core.chunked_seq_QMARK_.call(null,inst_309279);var state_309308__$1 = state_309308;if(inst_309281)
{var statearr_309331_309360 = state_309308__$1;(statearr_309331_309360[1] = 17);
} else
{var statearr_309332_309361 = state_309308__$1;(statearr_309332_309361[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 15))
{var state_309308__$1 = state_309308;var statearr_309333_309362 = state_309308__$1;(statearr_309333_309362[2] = null);
(statearr_309333_309362[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 16))
{var inst_309297 = (state_309308[2]);var state_309308__$1 = state_309308;var statearr_309334_309363 = state_309308__$1;(statearr_309334_309363[2] = inst_309297);
(statearr_309334_309363[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 17))
{var inst_309279 = (state_309308[13]);var inst_309283 = cljs.core.chunk_first.call(null,inst_309279);var inst_309284 = cljs.core.chunk_rest.call(null,inst_309279);var inst_309285 = cljs.core.count.call(null,inst_309283);var inst_309265 = inst_309284;var inst_309266 = inst_309283;var inst_309267 = inst_309285;var inst_309268 = 0;var state_309308__$1 = (function (){var statearr_309335 = state_309308;(statearr_309335[8] = inst_309268);
(statearr_309335[9] = inst_309267);
(statearr_309335[10] = inst_309265);
(statearr_309335[11] = inst_309266);
return statearr_309335;
})();var statearr_309336_309364 = state_309308__$1;(statearr_309336_309364[2] = null);
(statearr_309336_309364[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 18))
{var inst_309279 = (state_309308[13]);var inst_309288 = cljs.core.first.call(null,inst_309279);var state_309308__$1 = state_309308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_309308__$1,20,out,inst_309288);
} else
{if((state_val_309309 === 19))
{var inst_309294 = (state_309308[2]);var state_309308__$1 = state_309308;var statearr_309337_309365 = state_309308__$1;(statearr_309337_309365[2] = inst_309294);
(statearr_309337_309365[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309309 === 20))
{var inst_309279 = (state_309308[13]);var inst_309290 = (state_309308[2]);var inst_309291 = cljs.core.next.call(null,inst_309279);var inst_309265 = inst_309291;var inst_309266 = null;var inst_309267 = 0;var inst_309268 = 0;var state_309308__$1 = (function (){var statearr_309338 = state_309308;(statearr_309338[8] = inst_309268);
(statearr_309338[9] = inst_309267);
(statearr_309338[10] = inst_309265);
(statearr_309338[11] = inst_309266);
(statearr_309338[15] = inst_309290);
return statearr_309338;
})();var statearr_309339_309366 = state_309308__$1;(statearr_309339_309366[2] = null);
(statearr_309339_309366[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_309343 = (new Array(16));(statearr_309343[0] = state_machine__10214__auto__);
(statearr_309343[1] = 1);
return statearr_309343;
});
var state_machine__10214__auto____1 = (function (state_309308){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_309308);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e309344){if((e309344 instanceof Object))
{var ex__10217__auto__ = e309344;var statearr_309345_309367 = state_309308;(statearr_309345_309367[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_309308);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e309344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__309368 = state_309308;
state_309308 = G__309368;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_309308){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_309308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_309346 = f__10284__auto__.call(null);(statearr_309346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_309346;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___309449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_309428){var state_val_309429 = (state_309428[1]);if((state_val_309429 === 1))
{var state_309428__$1 = state_309428;var statearr_309430_309450 = state_309428__$1;(statearr_309430_309450[2] = null);
(statearr_309430_309450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 2))
{var state_309428__$1 = state_309428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_309428__$1,4,from);
} else
{if((state_val_309429 === 3))
{var inst_309426 = (state_309428[2]);var state_309428__$1 = state_309428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_309428__$1,inst_309426);
} else
{if((state_val_309429 === 4))
{var inst_309411 = (state_309428[7]);var inst_309411__$1 = (state_309428[2]);var inst_309412 = (inst_309411__$1 == null);var state_309428__$1 = (function (){var statearr_309431 = state_309428;(statearr_309431[7] = inst_309411__$1);
return statearr_309431;
})();if(cljs.core.truth_(inst_309412))
{var statearr_309432_309451 = state_309428__$1;(statearr_309432_309451[1] = 5);
} else
{var statearr_309433_309452 = state_309428__$1;(statearr_309433_309452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 5))
{var state_309428__$1 = state_309428;if(cljs.core.truth_(close_QMARK_))
{var statearr_309434_309453 = state_309428__$1;(statearr_309434_309453[1] = 8);
} else
{var statearr_309435_309454 = state_309428__$1;(statearr_309435_309454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 6))
{var inst_309411 = (state_309428[7]);var state_309428__$1 = state_309428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_309428__$1,11,to,inst_309411);
} else
{if((state_val_309429 === 7))
{var inst_309424 = (state_309428[2]);var state_309428__$1 = state_309428;var statearr_309436_309455 = state_309428__$1;(statearr_309436_309455[2] = inst_309424);
(statearr_309436_309455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 8))
{var inst_309415 = cljs.core.async.close_BANG_.call(null,to);var state_309428__$1 = state_309428;var statearr_309437_309456 = state_309428__$1;(statearr_309437_309456[2] = inst_309415);
(statearr_309437_309456[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 9))
{var state_309428__$1 = state_309428;var statearr_309438_309457 = state_309428__$1;(statearr_309438_309457[2] = null);
(statearr_309438_309457[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 10))
{var inst_309418 = (state_309428[2]);var state_309428__$1 = state_309428;var statearr_309439_309458 = state_309428__$1;(statearr_309439_309458[2] = inst_309418);
(statearr_309439_309458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309429 === 11))
{var inst_309421 = (state_309428[2]);var state_309428__$1 = (function (){var statearr_309440 = state_309428;(statearr_309440[8] = inst_309421);
return statearr_309440;
})();var statearr_309441_309459 = state_309428__$1;(statearr_309441_309459[2] = null);
(statearr_309441_309459[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_309445 = (new Array(9));(statearr_309445[0] = state_machine__10214__auto__);
(statearr_309445[1] = 1);
return statearr_309445;
});
var state_machine__10214__auto____1 = (function (state_309428){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_309428);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e309446){if((e309446 instanceof Object))
{var ex__10217__auto__ = e309446;var statearr_309447_309460 = state_309428;(statearr_309447_309460[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_309428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e309446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__309461 = state_309428;
state_309428 = G__309461;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_309428){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_309428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_309448 = f__10284__auto__.call(null);(statearr_309448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___309449);
return statearr_309448;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___309548 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_309526){var state_val_309527 = (state_309526[1]);if((state_val_309527 === 1))
{var state_309526__$1 = state_309526;var statearr_309528_309549 = state_309526__$1;(statearr_309528_309549[2] = null);
(statearr_309528_309549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 2))
{var state_309526__$1 = state_309526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_309526__$1,4,ch);
} else
{if((state_val_309527 === 3))
{var inst_309524 = (state_309526[2]);var state_309526__$1 = state_309526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_309526__$1,inst_309524);
} else
{if((state_val_309527 === 4))
{var inst_309507 = (state_309526[7]);var inst_309507__$1 = (state_309526[2]);var inst_309508 = (inst_309507__$1 == null);var state_309526__$1 = (function (){var statearr_309529 = state_309526;(statearr_309529[7] = inst_309507__$1);
return statearr_309529;
})();if(cljs.core.truth_(inst_309508))
{var statearr_309530_309550 = state_309526__$1;(statearr_309530_309550[1] = 5);
} else
{var statearr_309531_309551 = state_309526__$1;(statearr_309531_309551[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 5))
{var inst_309510 = cljs.core.async.close_BANG_.call(null,tc);var inst_309511 = cljs.core.async.close_BANG_.call(null,fc);var state_309526__$1 = (function (){var statearr_309532 = state_309526;(statearr_309532[8] = inst_309510);
return statearr_309532;
})();var statearr_309533_309552 = state_309526__$1;(statearr_309533_309552[2] = inst_309511);
(statearr_309533_309552[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 6))
{var inst_309507 = (state_309526[7]);var inst_309513 = p.call(null,inst_309507);var state_309526__$1 = state_309526;if(cljs.core.truth_(inst_309513))
{var statearr_309534_309553 = state_309526__$1;(statearr_309534_309553[1] = 9);
} else
{var statearr_309535_309554 = state_309526__$1;(statearr_309535_309554[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 7))
{var inst_309522 = (state_309526[2]);var state_309526__$1 = state_309526;var statearr_309536_309555 = state_309526__$1;(statearr_309536_309555[2] = inst_309522);
(statearr_309536_309555[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 8))
{var inst_309519 = (state_309526[2]);var state_309526__$1 = (function (){var statearr_309537 = state_309526;(statearr_309537[9] = inst_309519);
return statearr_309537;
})();var statearr_309538_309556 = state_309526__$1;(statearr_309538_309556[2] = null);
(statearr_309538_309556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 9))
{var state_309526__$1 = state_309526;var statearr_309539_309557 = state_309526__$1;(statearr_309539_309557[2] = tc);
(statearr_309539_309557[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 10))
{var state_309526__$1 = state_309526;var statearr_309540_309558 = state_309526__$1;(statearr_309540_309558[2] = fc);
(statearr_309540_309558[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309527 === 11))
{var inst_309507 = (state_309526[7]);var inst_309517 = (state_309526[2]);var state_309526__$1 = state_309526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_309526__$1,8,inst_309517,inst_309507);
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
var state_machine__10214__auto____0 = (function (){var statearr_309544 = (new Array(10));(statearr_309544[0] = state_machine__10214__auto__);
(statearr_309544[1] = 1);
return statearr_309544;
});
var state_machine__10214__auto____1 = (function (state_309526){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_309526);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e309545){if((e309545 instanceof Object))
{var ex__10217__auto__ = e309545;var statearr_309546_309559 = state_309526;(statearr_309546_309559[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_309526);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e309545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__309560 = state_309526;
state_309526 = G__309560;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_309526){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_309526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_309547 = f__10284__auto__.call(null);(statearr_309547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___309548);
return statearr_309547;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_309607){var state_val_309608 = (state_309607[1]);if((state_val_309608 === 7))
{var inst_309603 = (state_309607[2]);var state_309607__$1 = state_309607;var statearr_309609_309625 = state_309607__$1;(statearr_309609_309625[2] = inst_309603);
(statearr_309609_309625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309608 === 6))
{var inst_309593 = (state_309607[7]);var inst_309596 = (state_309607[8]);var inst_309600 = f.call(null,inst_309593,inst_309596);var inst_309593__$1 = inst_309600;var state_309607__$1 = (function (){var statearr_309610 = state_309607;(statearr_309610[7] = inst_309593__$1);
return statearr_309610;
})();var statearr_309611_309626 = state_309607__$1;(statearr_309611_309626[2] = null);
(statearr_309611_309626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309608 === 5))
{var inst_309593 = (state_309607[7]);var state_309607__$1 = state_309607;var statearr_309612_309627 = state_309607__$1;(statearr_309612_309627[2] = inst_309593);
(statearr_309612_309627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309608 === 4))
{var inst_309596 = (state_309607[8]);var inst_309596__$1 = (state_309607[2]);var inst_309597 = (inst_309596__$1 == null);var state_309607__$1 = (function (){var statearr_309613 = state_309607;(statearr_309613[8] = inst_309596__$1);
return statearr_309613;
})();if(cljs.core.truth_(inst_309597))
{var statearr_309614_309628 = state_309607__$1;(statearr_309614_309628[1] = 5);
} else
{var statearr_309615_309629 = state_309607__$1;(statearr_309615_309629[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309608 === 3))
{var inst_309605 = (state_309607[2]);var state_309607__$1 = state_309607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_309607__$1,inst_309605);
} else
{if((state_val_309608 === 2))
{var state_309607__$1 = state_309607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_309607__$1,4,ch);
} else
{if((state_val_309608 === 1))
{var inst_309593 = init;var state_309607__$1 = (function (){var statearr_309616 = state_309607;(statearr_309616[7] = inst_309593);
return statearr_309616;
})();var statearr_309617_309630 = state_309607__$1;(statearr_309617_309630[2] = null);
(statearr_309617_309630[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_309621 = (new Array(9));(statearr_309621[0] = state_machine__10214__auto__);
(statearr_309621[1] = 1);
return statearr_309621;
});
var state_machine__10214__auto____1 = (function (state_309607){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_309607);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e309622){if((e309622 instanceof Object))
{var ex__10217__auto__ = e309622;var statearr_309623_309631 = state_309607;(statearr_309623_309631[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_309607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e309622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__309632 = state_309607;
state_309607 = G__309632;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_309607){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_309607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_309624 = f__10284__auto__.call(null);(statearr_309624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_309624;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_309694){var state_val_309695 = (state_309694[1]);if((state_val_309695 === 1))
{var inst_309674 = cljs.core.seq.call(null,coll);var inst_309675 = inst_309674;var state_309694__$1 = (function (){var statearr_309696 = state_309694;(statearr_309696[7] = inst_309675);
return statearr_309696;
})();var statearr_309697_309715 = state_309694__$1;(statearr_309697_309715[2] = null);
(statearr_309697_309715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 2))
{var inst_309675 = (state_309694[7]);var state_309694__$1 = state_309694;if(cljs.core.truth_(inst_309675))
{var statearr_309698_309716 = state_309694__$1;(statearr_309698_309716[1] = 4);
} else
{var statearr_309699_309717 = state_309694__$1;(statearr_309699_309717[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 3))
{var inst_309692 = (state_309694[2]);var state_309694__$1 = state_309694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_309694__$1,inst_309692);
} else
{if((state_val_309695 === 4))
{var inst_309675 = (state_309694[7]);var inst_309678 = cljs.core.first.call(null,inst_309675);var state_309694__$1 = state_309694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_309694__$1,7,ch,inst_309678);
} else
{if((state_val_309695 === 5))
{var state_309694__$1 = state_309694;if(cljs.core.truth_(close_QMARK_))
{var statearr_309700_309718 = state_309694__$1;(statearr_309700_309718[1] = 8);
} else
{var statearr_309701_309719 = state_309694__$1;(statearr_309701_309719[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 6))
{var inst_309690 = (state_309694[2]);var state_309694__$1 = state_309694;var statearr_309702_309720 = state_309694__$1;(statearr_309702_309720[2] = inst_309690);
(statearr_309702_309720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 7))
{var inst_309675 = (state_309694[7]);var inst_309680 = (state_309694[2]);var inst_309681 = cljs.core.next.call(null,inst_309675);var inst_309675__$1 = inst_309681;var state_309694__$1 = (function (){var statearr_309703 = state_309694;(statearr_309703[8] = inst_309680);
(statearr_309703[7] = inst_309675__$1);
return statearr_309703;
})();var statearr_309704_309721 = state_309694__$1;(statearr_309704_309721[2] = null);
(statearr_309704_309721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 8))
{var inst_309685 = cljs.core.async.close_BANG_.call(null,ch);var state_309694__$1 = state_309694;var statearr_309705_309722 = state_309694__$1;(statearr_309705_309722[2] = inst_309685);
(statearr_309705_309722[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 9))
{var state_309694__$1 = state_309694;var statearr_309706_309723 = state_309694__$1;(statearr_309706_309723[2] = null);
(statearr_309706_309723[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_309695 === 10))
{var inst_309688 = (state_309694[2]);var state_309694__$1 = state_309694;var statearr_309707_309724 = state_309694__$1;(statearr_309707_309724[2] = inst_309688);
(statearr_309707_309724[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_309711 = (new Array(9));(statearr_309711[0] = state_machine__10214__auto__);
(statearr_309711[1] = 1);
return statearr_309711;
});
var state_machine__10214__auto____1 = (function (state_309694){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_309694);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e309712){if((e309712 instanceof Object))
{var ex__10217__auto__ = e309712;var statearr_309713_309725 = state_309694;(statearr_309713_309725[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_309694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e309712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__309726 = state_309694;
state_309694 = G__309726;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_309694){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_309694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_309714 = f__10284__auto__.call(null);(statearr_309714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_309714;
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
cljs.core.async.Mux = (function (){var obj309728 = {};return obj309728;
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
cljs.core.async.Mult = (function (){var obj309730 = {};return obj309730;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t309945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t309945 = (function (cs,ch,mult,meta309946){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta309946 = meta309946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t309945.cljs$lang$type = true;
cljs.core.async.t309945.cljs$lang$ctorStr = "cljs.core.async/t309945";
cljs.core.async.t309945.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t309945");
});})(cs))
;
cljs.core.async.t309945.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t309945.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t309945.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t309945.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t309945.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t309945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t309945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_309947){var self__ = this;
var _309947__$1 = this;return self__.meta309946;
});})(cs))
;
cljs.core.async.t309945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_309947,meta309946__$1){var self__ = this;
var _309947__$1 = this;return (new cljs.core.async.t309945(self__.cs,self__.ch,self__.mult,meta309946__$1));
});})(cs))
;
cljs.core.async.__GT_t309945 = ((function (cs){
return (function __GT_t309945(cs__$1,ch__$1,mult__$1,meta309946){return (new cljs.core.async.t309945(cs__$1,ch__$1,mult__$1,meta309946));
});})(cs))
;
}
return (new cljs.core.async.t309945(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___310159 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_310077){var state_val_310078 = (state_310077[1]);if((state_val_310078 === 32))
{var inst_309950 = (state_310077[7]);var inst_310026 = (state_310077[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_310077,31,Object,null,30);var inst_310033 = cljs.core.async.put_BANG_.call(null,inst_310026,inst_309950,done);var state_310077__$1 = state_310077;var statearr_310079_310160 = state_310077__$1;(statearr_310079_310160[2] = inst_310033);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310077__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 1))
{var state_310077__$1 = state_310077;var statearr_310080_310161 = state_310077__$1;(statearr_310080_310161[2] = null);
(statearr_310080_310161[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 33))
{var inst_310039 = (state_310077[9]);var inst_310041 = cljs.core.chunked_seq_QMARK_.call(null,inst_310039);var state_310077__$1 = state_310077;if(inst_310041)
{var statearr_310081_310162 = state_310077__$1;(statearr_310081_310162[1] = 36);
} else
{var statearr_310082_310163 = state_310077__$1;(statearr_310082_310163[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 2))
{var state_310077__$1 = state_310077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_310077__$1,4,ch);
} else
{if((state_val_310078 === 34))
{var state_310077__$1 = state_310077;var statearr_310083_310164 = state_310077__$1;(statearr_310083_310164[2] = null);
(statearr_310083_310164[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 3))
{var inst_310075 = (state_310077[2]);var state_310077__$1 = state_310077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_310077__$1,inst_310075);
} else
{if((state_val_310078 === 35))
{var inst_310064 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310084_310165 = state_310077__$1;(statearr_310084_310165[2] = inst_310064);
(statearr_310084_310165[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 4))
{var inst_309950 = (state_310077[7]);var inst_309950__$1 = (state_310077[2]);var inst_309951 = (inst_309950__$1 == null);var state_310077__$1 = (function (){var statearr_310085 = state_310077;(statearr_310085[7] = inst_309950__$1);
return statearr_310085;
})();if(cljs.core.truth_(inst_309951))
{var statearr_310086_310166 = state_310077__$1;(statearr_310086_310166[1] = 5);
} else
{var statearr_310087_310167 = state_310077__$1;(statearr_310087_310167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 36))
{var inst_310039 = (state_310077[9]);var inst_310043 = cljs.core.chunk_first.call(null,inst_310039);var inst_310044 = cljs.core.chunk_rest.call(null,inst_310039);var inst_310045 = cljs.core.count.call(null,inst_310043);var inst_310018 = inst_310044;var inst_310019 = inst_310043;var inst_310020 = inst_310045;var inst_310021 = 0;var state_310077__$1 = (function (){var statearr_310088 = state_310077;(statearr_310088[10] = inst_310021);
(statearr_310088[11] = inst_310020);
(statearr_310088[12] = inst_310018);
(statearr_310088[13] = inst_310019);
return statearr_310088;
})();var statearr_310089_310168 = state_310077__$1;(statearr_310089_310168[2] = null);
(statearr_310089_310168[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 5))
{var inst_309957 = cljs.core.deref.call(null,cs);var inst_309958 = cljs.core.seq.call(null,inst_309957);var inst_309959 = inst_309958;var inst_309960 = null;var inst_309961 = 0;var inst_309962 = 0;var state_310077__$1 = (function (){var statearr_310090 = state_310077;(statearr_310090[14] = inst_309961);
(statearr_310090[15] = inst_309959);
(statearr_310090[16] = inst_309960);
(statearr_310090[17] = inst_309962);
return statearr_310090;
})();var statearr_310091_310169 = state_310077__$1;(statearr_310091_310169[2] = null);
(statearr_310091_310169[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 37))
{var inst_310039 = (state_310077[9]);var inst_310048 = cljs.core.first.call(null,inst_310039);var state_310077__$1 = (function (){var statearr_310092 = state_310077;(statearr_310092[18] = inst_310048);
return statearr_310092;
})();var statearr_310093_310170 = state_310077__$1;(statearr_310093_310170[2] = null);
(statearr_310093_310170[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 6))
{var inst_310009 = cljs.core.deref.call(null,cs);var inst_310010 = cljs.core.keys.call(null,inst_310009);var inst_310011 = cljs.core.count.call(null,inst_310010);var inst_310012 = cljs.core.reset_BANG_.call(null,dctr,inst_310011);var inst_310017 = cljs.core.seq.call(null,inst_310010);var inst_310018 = inst_310017;var inst_310019 = null;var inst_310020 = 0;var inst_310021 = 0;var state_310077__$1 = (function (){var statearr_310094 = state_310077;(statearr_310094[19] = inst_310012);
(statearr_310094[10] = inst_310021);
(statearr_310094[11] = inst_310020);
(statearr_310094[12] = inst_310018);
(statearr_310094[13] = inst_310019);
return statearr_310094;
})();var statearr_310095_310171 = state_310077__$1;(statearr_310095_310171[2] = null);
(statearr_310095_310171[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 38))
{var inst_310061 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310096_310172 = state_310077__$1;(statearr_310096_310172[2] = inst_310061);
(statearr_310096_310172[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 7))
{var inst_310073 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310097_310173 = state_310077__$1;(statearr_310097_310173[2] = inst_310073);
(statearr_310097_310173[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 39))
{var inst_310039 = (state_310077[9]);var inst_310057 = (state_310077[2]);var inst_310058 = cljs.core.next.call(null,inst_310039);var inst_310018 = inst_310058;var inst_310019 = null;var inst_310020 = 0;var inst_310021 = 0;var state_310077__$1 = (function (){var statearr_310098 = state_310077;(statearr_310098[20] = inst_310057);
(statearr_310098[10] = inst_310021);
(statearr_310098[11] = inst_310020);
(statearr_310098[12] = inst_310018);
(statearr_310098[13] = inst_310019);
return statearr_310098;
})();var statearr_310099_310174 = state_310077__$1;(statearr_310099_310174[2] = null);
(statearr_310099_310174[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 8))
{var inst_309961 = (state_310077[14]);var inst_309962 = (state_310077[17]);var inst_309964 = (inst_309962 < inst_309961);var inst_309965 = inst_309964;var state_310077__$1 = state_310077;if(cljs.core.truth_(inst_309965))
{var statearr_310100_310175 = state_310077__$1;(statearr_310100_310175[1] = 10);
} else
{var statearr_310101_310176 = state_310077__$1;(statearr_310101_310176[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 40))
{var inst_310048 = (state_310077[18]);var inst_310049 = (state_310077[2]);var inst_310050 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_310051 = cljs.core.async.untap_STAR_.call(null,m,inst_310048);var state_310077__$1 = (function (){var statearr_310102 = state_310077;(statearr_310102[21] = inst_310049);
(statearr_310102[22] = inst_310050);
return statearr_310102;
})();var statearr_310103_310177 = state_310077__$1;(statearr_310103_310177[2] = inst_310051);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310077__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 9))
{var inst_310007 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310104_310178 = state_310077__$1;(statearr_310104_310178[2] = inst_310007);
(statearr_310104_310178[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 41))
{var inst_310048 = (state_310077[18]);var inst_309950 = (state_310077[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_310077,40,Object,null,39);var inst_310055 = cljs.core.async.put_BANG_.call(null,inst_310048,inst_309950,done);var state_310077__$1 = state_310077;var statearr_310105_310179 = state_310077__$1;(statearr_310105_310179[2] = inst_310055);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310077__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 10))
{var inst_309960 = (state_310077[16]);var inst_309962 = (state_310077[17]);var inst_309968 = cljs.core._nth.call(null,inst_309960,inst_309962);var inst_309969 = cljs.core.nth.call(null,inst_309968,0,null);var inst_309970 = cljs.core.nth.call(null,inst_309968,1,null);var state_310077__$1 = (function (){var statearr_310106 = state_310077;(statearr_310106[23] = inst_309969);
return statearr_310106;
})();if(cljs.core.truth_(inst_309970))
{var statearr_310107_310180 = state_310077__$1;(statearr_310107_310180[1] = 13);
} else
{var statearr_310108_310181 = state_310077__$1;(statearr_310108_310181[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 42))
{var inst_310070 = (state_310077[2]);var state_310077__$1 = (function (){var statearr_310109 = state_310077;(statearr_310109[24] = inst_310070);
return statearr_310109;
})();var statearr_310110_310182 = state_310077__$1;(statearr_310110_310182[2] = null);
(statearr_310110_310182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 11))
{var inst_309979 = (state_310077[25]);var inst_309959 = (state_310077[15]);var inst_309979__$1 = cljs.core.seq.call(null,inst_309959);var state_310077__$1 = (function (){var statearr_310111 = state_310077;(statearr_310111[25] = inst_309979__$1);
return statearr_310111;
})();if(inst_309979__$1)
{var statearr_310112_310183 = state_310077__$1;(statearr_310112_310183[1] = 16);
} else
{var statearr_310113_310184 = state_310077__$1;(statearr_310113_310184[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 12))
{var inst_310005 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310114_310185 = state_310077__$1;(statearr_310114_310185[2] = inst_310005);
(statearr_310114_310185[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 13))
{var inst_309969 = (state_310077[23]);var inst_309972 = cljs.core.async.close_BANG_.call(null,inst_309969);var state_310077__$1 = state_310077;var statearr_310118_310186 = state_310077__$1;(statearr_310118_310186[2] = inst_309972);
(statearr_310118_310186[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 14))
{var state_310077__$1 = state_310077;var statearr_310119_310187 = state_310077__$1;(statearr_310119_310187[2] = null);
(statearr_310119_310187[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 15))
{var inst_309961 = (state_310077[14]);var inst_309959 = (state_310077[15]);var inst_309960 = (state_310077[16]);var inst_309962 = (state_310077[17]);var inst_309975 = (state_310077[2]);var inst_309976 = (inst_309962 + 1);var tmp310115 = inst_309961;var tmp310116 = inst_309959;var tmp310117 = inst_309960;var inst_309959__$1 = tmp310116;var inst_309960__$1 = tmp310117;var inst_309961__$1 = tmp310115;var inst_309962__$1 = inst_309976;var state_310077__$1 = (function (){var statearr_310120 = state_310077;(statearr_310120[26] = inst_309975);
(statearr_310120[14] = inst_309961__$1);
(statearr_310120[15] = inst_309959__$1);
(statearr_310120[16] = inst_309960__$1);
(statearr_310120[17] = inst_309962__$1);
return statearr_310120;
})();var statearr_310121_310188 = state_310077__$1;(statearr_310121_310188[2] = null);
(statearr_310121_310188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 16))
{var inst_309979 = (state_310077[25]);var inst_309981 = cljs.core.chunked_seq_QMARK_.call(null,inst_309979);var state_310077__$1 = state_310077;if(inst_309981)
{var statearr_310122_310189 = state_310077__$1;(statearr_310122_310189[1] = 19);
} else
{var statearr_310123_310190 = state_310077__$1;(statearr_310123_310190[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 17))
{var state_310077__$1 = state_310077;var statearr_310124_310191 = state_310077__$1;(statearr_310124_310191[2] = null);
(statearr_310124_310191[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 18))
{var inst_310003 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310125_310192 = state_310077__$1;(statearr_310125_310192[2] = inst_310003);
(statearr_310125_310192[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 19))
{var inst_309979 = (state_310077[25]);var inst_309983 = cljs.core.chunk_first.call(null,inst_309979);var inst_309984 = cljs.core.chunk_rest.call(null,inst_309979);var inst_309985 = cljs.core.count.call(null,inst_309983);var inst_309959 = inst_309984;var inst_309960 = inst_309983;var inst_309961 = inst_309985;var inst_309962 = 0;var state_310077__$1 = (function (){var statearr_310126 = state_310077;(statearr_310126[14] = inst_309961);
(statearr_310126[15] = inst_309959);
(statearr_310126[16] = inst_309960);
(statearr_310126[17] = inst_309962);
return statearr_310126;
})();var statearr_310127_310193 = state_310077__$1;(statearr_310127_310193[2] = null);
(statearr_310127_310193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 20))
{var inst_309979 = (state_310077[25]);var inst_309989 = cljs.core.first.call(null,inst_309979);var inst_309990 = cljs.core.nth.call(null,inst_309989,0,null);var inst_309991 = cljs.core.nth.call(null,inst_309989,1,null);var state_310077__$1 = (function (){var statearr_310128 = state_310077;(statearr_310128[27] = inst_309990);
return statearr_310128;
})();if(cljs.core.truth_(inst_309991))
{var statearr_310129_310194 = state_310077__$1;(statearr_310129_310194[1] = 22);
} else
{var statearr_310130_310195 = state_310077__$1;(statearr_310130_310195[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 21))
{var inst_310000 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310131_310196 = state_310077__$1;(statearr_310131_310196[2] = inst_310000);
(statearr_310131_310196[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 22))
{var inst_309990 = (state_310077[27]);var inst_309993 = cljs.core.async.close_BANG_.call(null,inst_309990);var state_310077__$1 = state_310077;var statearr_310132_310197 = state_310077__$1;(statearr_310132_310197[2] = inst_309993);
(statearr_310132_310197[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 23))
{var state_310077__$1 = state_310077;var statearr_310133_310198 = state_310077__$1;(statearr_310133_310198[2] = null);
(statearr_310133_310198[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 24))
{var inst_309979 = (state_310077[25]);var inst_309996 = (state_310077[2]);var inst_309997 = cljs.core.next.call(null,inst_309979);var inst_309959 = inst_309997;var inst_309960 = null;var inst_309961 = 0;var inst_309962 = 0;var state_310077__$1 = (function (){var statearr_310134 = state_310077;(statearr_310134[28] = inst_309996);
(statearr_310134[14] = inst_309961);
(statearr_310134[15] = inst_309959);
(statearr_310134[16] = inst_309960);
(statearr_310134[17] = inst_309962);
return statearr_310134;
})();var statearr_310135_310199 = state_310077__$1;(statearr_310135_310199[2] = null);
(statearr_310135_310199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 25))
{var inst_310021 = (state_310077[10]);var inst_310020 = (state_310077[11]);var inst_310023 = (inst_310021 < inst_310020);var inst_310024 = inst_310023;var state_310077__$1 = state_310077;if(cljs.core.truth_(inst_310024))
{var statearr_310136_310200 = state_310077__$1;(statearr_310136_310200[1] = 27);
} else
{var statearr_310137_310201 = state_310077__$1;(statearr_310137_310201[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 26))
{var inst_310068 = (state_310077[2]);var state_310077__$1 = (function (){var statearr_310138 = state_310077;(statearr_310138[29] = inst_310068);
return statearr_310138;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_310077__$1,42,dchan);
} else
{if((state_val_310078 === 27))
{var inst_310021 = (state_310077[10]);var inst_310019 = (state_310077[13]);var inst_310026 = cljs.core._nth.call(null,inst_310019,inst_310021);var state_310077__$1 = (function (){var statearr_310139 = state_310077;(statearr_310139[8] = inst_310026);
return statearr_310139;
})();var statearr_310140_310202 = state_310077__$1;(statearr_310140_310202[2] = null);
(statearr_310140_310202[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 28))
{var inst_310039 = (state_310077[9]);var inst_310018 = (state_310077[12]);var inst_310039__$1 = cljs.core.seq.call(null,inst_310018);var state_310077__$1 = (function (){var statearr_310144 = state_310077;(statearr_310144[9] = inst_310039__$1);
return statearr_310144;
})();if(inst_310039__$1)
{var statearr_310145_310203 = state_310077__$1;(statearr_310145_310203[1] = 33);
} else
{var statearr_310146_310204 = state_310077__$1;(statearr_310146_310204[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 29))
{var inst_310066 = (state_310077[2]);var state_310077__$1 = state_310077;var statearr_310147_310205 = state_310077__$1;(statearr_310147_310205[2] = inst_310066);
(statearr_310147_310205[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 30))
{var inst_310021 = (state_310077[10]);var inst_310020 = (state_310077[11]);var inst_310018 = (state_310077[12]);var inst_310019 = (state_310077[13]);var inst_310035 = (state_310077[2]);var inst_310036 = (inst_310021 + 1);var tmp310141 = inst_310020;var tmp310142 = inst_310018;var tmp310143 = inst_310019;var inst_310018__$1 = tmp310142;var inst_310019__$1 = tmp310143;var inst_310020__$1 = tmp310141;var inst_310021__$1 = inst_310036;var state_310077__$1 = (function (){var statearr_310148 = state_310077;(statearr_310148[10] = inst_310021__$1);
(statearr_310148[11] = inst_310020__$1);
(statearr_310148[30] = inst_310035);
(statearr_310148[12] = inst_310018__$1);
(statearr_310148[13] = inst_310019__$1);
return statearr_310148;
})();var statearr_310149_310206 = state_310077__$1;(statearr_310149_310206[2] = null);
(statearr_310149_310206[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310078 === 31))
{var inst_310026 = (state_310077[8]);var inst_310027 = (state_310077[2]);var inst_310028 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_310029 = cljs.core.async.untap_STAR_.call(null,m,inst_310026);var state_310077__$1 = (function (){var statearr_310150 = state_310077;(statearr_310150[31] = inst_310027);
(statearr_310150[32] = inst_310028);
return statearr_310150;
})();var statearr_310151_310207 = state_310077__$1;(statearr_310151_310207[2] = inst_310029);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310077__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_310155 = (new Array(33));(statearr_310155[0] = state_machine__10214__auto__);
(statearr_310155[1] = 1);
return statearr_310155;
});
var state_machine__10214__auto____1 = (function (state_310077){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_310077);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e310156){if((e310156 instanceof Object))
{var ex__10217__auto__ = e310156;var statearr_310157_310208 = state_310077;(statearr_310157_310208[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e310156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__310209 = state_310077;
state_310077 = G__310209;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_310077){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_310077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_310158 = f__10284__auto__.call(null);(statearr_310158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___310159);
return statearr_310158;
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
cljs.core.async.Mix = (function (){var obj310211 = {};return obj310211;
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
;var m = (function (){if(typeof cljs.core.async.t310321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t310321 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta310322){
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
this.meta310322 = meta310322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t310321.cljs$lang$type = true;
cljs.core.async.t310321.cljs$lang$ctorStr = "cljs.core.async/t310321";
cljs.core.async.t310321.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t310321");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t310321.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t310321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_310323){var self__ = this;
var _310323__$1 = this;return self__.meta310322;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t310321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_310323,meta310322__$1){var self__ = this;
var _310323__$1 = this;return (new cljs.core.async.t310321(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta310322__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t310321 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t310321(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta310322){return (new cljs.core.async.t310321(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta310322));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t310321(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___310430 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_310388){var state_val_310389 = (state_310388[1]);if((state_val_310389 === 1))
{var inst_310327 = (state_310388[7]);var inst_310327__$1 = calc_state.call(null);var inst_310328 = cljs.core.seq_QMARK_.call(null,inst_310327__$1);var state_310388__$1 = (function (){var statearr_310390 = state_310388;(statearr_310390[7] = inst_310327__$1);
return statearr_310390;
})();if(inst_310328)
{var statearr_310391_310431 = state_310388__$1;(statearr_310391_310431[1] = 2);
} else
{var statearr_310392_310432 = state_310388__$1;(statearr_310392_310432[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 2))
{var inst_310327 = (state_310388[7]);var inst_310330 = cljs.core.apply.call(null,cljs.core.hash_map,inst_310327);var state_310388__$1 = state_310388;var statearr_310393_310433 = state_310388__$1;(statearr_310393_310433[2] = inst_310330);
(statearr_310393_310433[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 3))
{var inst_310327 = (state_310388[7]);var state_310388__$1 = state_310388;var statearr_310394_310434 = state_310388__$1;(statearr_310394_310434[2] = inst_310327);
(statearr_310394_310434[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 4))
{var inst_310327 = (state_310388[7]);var inst_310333 = (state_310388[2]);var inst_310334 = cljs.core.get.call(null,inst_310333,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_310335 = cljs.core.get.call(null,inst_310333,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_310336 = cljs.core.get.call(null,inst_310333,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_310337 = inst_310327;var state_310388__$1 = (function (){var statearr_310395 = state_310388;(statearr_310395[8] = inst_310334);
(statearr_310395[9] = inst_310335);
(statearr_310395[10] = inst_310336);
(statearr_310395[11] = inst_310337);
return statearr_310395;
})();var statearr_310396_310435 = state_310388__$1;(statearr_310396_310435[2] = null);
(statearr_310396_310435[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 5))
{var inst_310337 = (state_310388[11]);var inst_310340 = cljs.core.seq_QMARK_.call(null,inst_310337);var state_310388__$1 = state_310388;if(inst_310340)
{var statearr_310397_310436 = state_310388__$1;(statearr_310397_310436[1] = 7);
} else
{var statearr_310398_310437 = state_310388__$1;(statearr_310398_310437[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 6))
{var inst_310386 = (state_310388[2]);var state_310388__$1 = state_310388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_310388__$1,inst_310386);
} else
{if((state_val_310389 === 7))
{var inst_310337 = (state_310388[11]);var inst_310342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_310337);var state_310388__$1 = state_310388;var statearr_310399_310438 = state_310388__$1;(statearr_310399_310438[2] = inst_310342);
(statearr_310399_310438[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 8))
{var inst_310337 = (state_310388[11]);var state_310388__$1 = state_310388;var statearr_310400_310439 = state_310388__$1;(statearr_310400_310439[2] = inst_310337);
(statearr_310400_310439[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 9))
{var inst_310345 = (state_310388[12]);var inst_310345__$1 = (state_310388[2]);var inst_310346 = cljs.core.get.call(null,inst_310345__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_310347 = cljs.core.get.call(null,inst_310345__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_310348 = cljs.core.get.call(null,inst_310345__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_310388__$1 = (function (){var statearr_310401 = state_310388;(statearr_310401[13] = inst_310347);
(statearr_310401[14] = inst_310348);
(statearr_310401[12] = inst_310345__$1);
return statearr_310401;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_310388__$1,10,inst_310346);
} else
{if((state_val_310389 === 10))
{var inst_310353 = (state_310388[15]);var inst_310352 = (state_310388[16]);var inst_310351 = (state_310388[2]);var inst_310352__$1 = cljs.core.nth.call(null,inst_310351,0,null);var inst_310353__$1 = cljs.core.nth.call(null,inst_310351,1,null);var inst_310354 = (inst_310352__$1 == null);var inst_310355 = cljs.core._EQ_.call(null,inst_310353__$1,change);var inst_310356 = (inst_310354) || (inst_310355);var state_310388__$1 = (function (){var statearr_310402 = state_310388;(statearr_310402[15] = inst_310353__$1);
(statearr_310402[16] = inst_310352__$1);
return statearr_310402;
})();if(cljs.core.truth_(inst_310356))
{var statearr_310403_310440 = state_310388__$1;(statearr_310403_310440[1] = 11);
} else
{var statearr_310404_310441 = state_310388__$1;(statearr_310404_310441[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 11))
{var inst_310352 = (state_310388[16]);var inst_310358 = (inst_310352 == null);var state_310388__$1 = state_310388;if(cljs.core.truth_(inst_310358))
{var statearr_310405_310442 = state_310388__$1;(statearr_310405_310442[1] = 14);
} else
{var statearr_310406_310443 = state_310388__$1;(statearr_310406_310443[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 12))
{var inst_310367 = (state_310388[17]);var inst_310348 = (state_310388[14]);var inst_310353 = (state_310388[15]);var inst_310367__$1 = inst_310348.call(null,inst_310353);var state_310388__$1 = (function (){var statearr_310407 = state_310388;(statearr_310407[17] = inst_310367__$1);
return statearr_310407;
})();if(cljs.core.truth_(inst_310367__$1))
{var statearr_310408_310444 = state_310388__$1;(statearr_310408_310444[1] = 17);
} else
{var statearr_310409_310445 = state_310388__$1;(statearr_310409_310445[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 13))
{var inst_310384 = (state_310388[2]);var state_310388__$1 = state_310388;var statearr_310410_310446 = state_310388__$1;(statearr_310410_310446[2] = inst_310384);
(statearr_310410_310446[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 14))
{var inst_310353 = (state_310388[15]);var inst_310360 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_310353);var state_310388__$1 = state_310388;var statearr_310411_310447 = state_310388__$1;(statearr_310411_310447[2] = inst_310360);
(statearr_310411_310447[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 15))
{var state_310388__$1 = state_310388;var statearr_310412_310448 = state_310388__$1;(statearr_310412_310448[2] = null);
(statearr_310412_310448[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 16))
{var inst_310363 = (state_310388[2]);var inst_310364 = calc_state.call(null);var inst_310337 = inst_310364;var state_310388__$1 = (function (){var statearr_310413 = state_310388;(statearr_310413[18] = inst_310363);
(statearr_310413[11] = inst_310337);
return statearr_310413;
})();var statearr_310414_310449 = state_310388__$1;(statearr_310414_310449[2] = null);
(statearr_310414_310449[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 17))
{var inst_310367 = (state_310388[17]);var state_310388__$1 = state_310388;var statearr_310415_310450 = state_310388__$1;(statearr_310415_310450[2] = inst_310367);
(statearr_310415_310450[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 18))
{var inst_310347 = (state_310388[13]);var inst_310348 = (state_310388[14]);var inst_310353 = (state_310388[15]);var inst_310370 = cljs.core.empty_QMARK_.call(null,inst_310348);var inst_310371 = inst_310347.call(null,inst_310353);var inst_310372 = cljs.core.not.call(null,inst_310371);var inst_310373 = (inst_310370) && (inst_310372);var state_310388__$1 = state_310388;var statearr_310416_310451 = state_310388__$1;(statearr_310416_310451[2] = inst_310373);
(statearr_310416_310451[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 19))
{var inst_310375 = (state_310388[2]);var state_310388__$1 = state_310388;if(cljs.core.truth_(inst_310375))
{var statearr_310417_310452 = state_310388__$1;(statearr_310417_310452[1] = 20);
} else
{var statearr_310418_310453 = state_310388__$1;(statearr_310418_310453[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 20))
{var inst_310352 = (state_310388[16]);var state_310388__$1 = state_310388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_310388__$1,23,out,inst_310352);
} else
{if((state_val_310389 === 21))
{var state_310388__$1 = state_310388;var statearr_310419_310454 = state_310388__$1;(statearr_310419_310454[2] = null);
(statearr_310419_310454[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 22))
{var inst_310345 = (state_310388[12]);var inst_310381 = (state_310388[2]);var inst_310337 = inst_310345;var state_310388__$1 = (function (){var statearr_310420 = state_310388;(statearr_310420[19] = inst_310381);
(statearr_310420[11] = inst_310337);
return statearr_310420;
})();var statearr_310421_310455 = state_310388__$1;(statearr_310421_310455[2] = null);
(statearr_310421_310455[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310389 === 23))
{var inst_310378 = (state_310388[2]);var state_310388__$1 = state_310388;var statearr_310422_310456 = state_310388__$1;(statearr_310422_310456[2] = inst_310378);
(statearr_310422_310456[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_310426 = (new Array(20));(statearr_310426[0] = state_machine__10214__auto__);
(statearr_310426[1] = 1);
return statearr_310426;
});
var state_machine__10214__auto____1 = (function (state_310388){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_310388);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e310427){if((e310427 instanceof Object))
{var ex__10217__auto__ = e310427;var statearr_310428_310457 = state_310388;(statearr_310428_310457[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e310427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__310458 = state_310388;
state_310388 = G__310458;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_310388){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_310388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_310429 = f__10284__auto__.call(null);(statearr_310429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___310430);
return statearr_310429;
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
cljs.core.async.Pub = (function (){var obj310460 = {};return obj310460;
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
return (function (p1__310461_SHARP_){if(cljs.core.truth_(p1__310461_SHARP_.call(null,topic)))
{return p1__310461_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__310461_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t310586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t310586 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta310587){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta310587 = meta310587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t310586.cljs$lang$type = true;
cljs.core.async.t310586.cljs$lang$ctorStr = "cljs.core.async/t310586";
cljs.core.async.t310586.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t310586");
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t310586.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t310586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_310588){var self__ = this;
var _310588__$1 = this;return self__.meta310587;
});})(mults,ensure_mult))
;
cljs.core.async.t310586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_310588,meta310587__$1){var self__ = this;
var _310588__$1 = this;return (new cljs.core.async.t310586(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta310587__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t310586 = ((function (mults,ensure_mult){
return (function __GT_t310586(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta310587){return (new cljs.core.async.t310586(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta310587));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t310586(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___310710 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_310662){var state_val_310663 = (state_310662[1]);if((state_val_310663 === 1))
{var state_310662__$1 = state_310662;var statearr_310664_310711 = state_310662__$1;(statearr_310664_310711[2] = null);
(statearr_310664_310711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 2))
{var state_310662__$1 = state_310662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_310662__$1,4,ch);
} else
{if((state_val_310663 === 3))
{var inst_310660 = (state_310662[2]);var state_310662__$1 = state_310662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_310662__$1,inst_310660);
} else
{if((state_val_310663 === 4))
{var inst_310591 = (state_310662[7]);var inst_310591__$1 = (state_310662[2]);var inst_310592 = (inst_310591__$1 == null);var state_310662__$1 = (function (){var statearr_310665 = state_310662;(statearr_310665[7] = inst_310591__$1);
return statearr_310665;
})();if(cljs.core.truth_(inst_310592))
{var statearr_310666_310712 = state_310662__$1;(statearr_310666_310712[1] = 5);
} else
{var statearr_310667_310713 = state_310662__$1;(statearr_310667_310713[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 5))
{var inst_310598 = cljs.core.deref.call(null,mults);var inst_310599 = cljs.core.vals.call(null,inst_310598);var inst_310600 = cljs.core.seq.call(null,inst_310599);var inst_310601 = inst_310600;var inst_310602 = null;var inst_310603 = 0;var inst_310604 = 0;var state_310662__$1 = (function (){var statearr_310668 = state_310662;(statearr_310668[8] = inst_310601);
(statearr_310668[9] = inst_310602);
(statearr_310668[10] = inst_310604);
(statearr_310668[11] = inst_310603);
return statearr_310668;
})();var statearr_310669_310714 = state_310662__$1;(statearr_310669_310714[2] = null);
(statearr_310669_310714[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 6))
{var inst_310641 = (state_310662[12]);var inst_310639 = (state_310662[13]);var inst_310591 = (state_310662[7]);var inst_310639__$1 = topic_fn.call(null,inst_310591);var inst_310640 = cljs.core.deref.call(null,mults);var inst_310641__$1 = cljs.core.get.call(null,inst_310640,inst_310639__$1);var state_310662__$1 = (function (){var statearr_310670 = state_310662;(statearr_310670[12] = inst_310641__$1);
(statearr_310670[13] = inst_310639__$1);
return statearr_310670;
})();if(cljs.core.truth_(inst_310641__$1))
{var statearr_310671_310715 = state_310662__$1;(statearr_310671_310715[1] = 19);
} else
{var statearr_310672_310716 = state_310662__$1;(statearr_310672_310716[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 7))
{var inst_310658 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310673_310717 = state_310662__$1;(statearr_310673_310717[2] = inst_310658);
(statearr_310673_310717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 8))
{var inst_310604 = (state_310662[10]);var inst_310603 = (state_310662[11]);var inst_310606 = (inst_310604 < inst_310603);var inst_310607 = inst_310606;var state_310662__$1 = state_310662;if(cljs.core.truth_(inst_310607))
{var statearr_310677_310718 = state_310662__$1;(statearr_310677_310718[1] = 10);
} else
{var statearr_310678_310719 = state_310662__$1;(statearr_310678_310719[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 9))
{var inst_310637 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310679_310720 = state_310662__$1;(statearr_310679_310720[2] = inst_310637);
(statearr_310679_310720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 10))
{var inst_310601 = (state_310662[8]);var inst_310602 = (state_310662[9]);var inst_310604 = (state_310662[10]);var inst_310603 = (state_310662[11]);var inst_310609 = cljs.core._nth.call(null,inst_310602,inst_310604);var inst_310610 = cljs.core.async.muxch_STAR_.call(null,inst_310609);var inst_310611 = cljs.core.async.close_BANG_.call(null,inst_310610);var inst_310612 = (inst_310604 + 1);var tmp310674 = inst_310601;var tmp310675 = inst_310602;var tmp310676 = inst_310603;var inst_310601__$1 = tmp310674;var inst_310602__$1 = tmp310675;var inst_310603__$1 = tmp310676;var inst_310604__$1 = inst_310612;var state_310662__$1 = (function (){var statearr_310680 = state_310662;(statearr_310680[8] = inst_310601__$1);
(statearr_310680[9] = inst_310602__$1);
(statearr_310680[10] = inst_310604__$1);
(statearr_310680[11] = inst_310603__$1);
(statearr_310680[14] = inst_310611);
return statearr_310680;
})();var statearr_310681_310721 = state_310662__$1;(statearr_310681_310721[2] = null);
(statearr_310681_310721[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 11))
{var inst_310615 = (state_310662[15]);var inst_310601 = (state_310662[8]);var inst_310615__$1 = cljs.core.seq.call(null,inst_310601);var state_310662__$1 = (function (){var statearr_310682 = state_310662;(statearr_310682[15] = inst_310615__$1);
return statearr_310682;
})();if(inst_310615__$1)
{var statearr_310683_310722 = state_310662__$1;(statearr_310683_310722[1] = 13);
} else
{var statearr_310684_310723 = state_310662__$1;(statearr_310684_310723[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 12))
{var inst_310635 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310685_310724 = state_310662__$1;(statearr_310685_310724[2] = inst_310635);
(statearr_310685_310724[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 13))
{var inst_310615 = (state_310662[15]);var inst_310617 = cljs.core.chunked_seq_QMARK_.call(null,inst_310615);var state_310662__$1 = state_310662;if(inst_310617)
{var statearr_310686_310725 = state_310662__$1;(statearr_310686_310725[1] = 16);
} else
{var statearr_310687_310726 = state_310662__$1;(statearr_310687_310726[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 14))
{var state_310662__$1 = state_310662;var statearr_310688_310727 = state_310662__$1;(statearr_310688_310727[2] = null);
(statearr_310688_310727[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 15))
{var inst_310633 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310689_310728 = state_310662__$1;(statearr_310689_310728[2] = inst_310633);
(statearr_310689_310728[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 16))
{var inst_310615 = (state_310662[15]);var inst_310619 = cljs.core.chunk_first.call(null,inst_310615);var inst_310620 = cljs.core.chunk_rest.call(null,inst_310615);var inst_310621 = cljs.core.count.call(null,inst_310619);var inst_310601 = inst_310620;var inst_310602 = inst_310619;var inst_310603 = inst_310621;var inst_310604 = 0;var state_310662__$1 = (function (){var statearr_310690 = state_310662;(statearr_310690[8] = inst_310601);
(statearr_310690[9] = inst_310602);
(statearr_310690[10] = inst_310604);
(statearr_310690[11] = inst_310603);
return statearr_310690;
})();var statearr_310691_310729 = state_310662__$1;(statearr_310691_310729[2] = null);
(statearr_310691_310729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 17))
{var inst_310615 = (state_310662[15]);var inst_310624 = cljs.core.first.call(null,inst_310615);var inst_310625 = cljs.core.async.muxch_STAR_.call(null,inst_310624);var inst_310626 = cljs.core.async.close_BANG_.call(null,inst_310625);var inst_310627 = cljs.core.next.call(null,inst_310615);var inst_310601 = inst_310627;var inst_310602 = null;var inst_310603 = 0;var inst_310604 = 0;var state_310662__$1 = (function (){var statearr_310692 = state_310662;(statearr_310692[8] = inst_310601);
(statearr_310692[9] = inst_310602);
(statearr_310692[16] = inst_310626);
(statearr_310692[10] = inst_310604);
(statearr_310692[11] = inst_310603);
return statearr_310692;
})();var statearr_310693_310730 = state_310662__$1;(statearr_310693_310730[2] = null);
(statearr_310693_310730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 18))
{var inst_310630 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310694_310731 = state_310662__$1;(statearr_310694_310731[2] = inst_310630);
(statearr_310694_310731[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 19))
{var state_310662__$1 = state_310662;var statearr_310695_310732 = state_310662__$1;(statearr_310695_310732[2] = null);
(statearr_310695_310732[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 20))
{var state_310662__$1 = state_310662;var statearr_310696_310733 = state_310662__$1;(statearr_310696_310733[2] = null);
(statearr_310696_310733[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 21))
{var inst_310655 = (state_310662[2]);var state_310662__$1 = (function (){var statearr_310697 = state_310662;(statearr_310697[17] = inst_310655);
return statearr_310697;
})();var statearr_310698_310734 = state_310662__$1;(statearr_310698_310734[2] = null);
(statearr_310698_310734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 22))
{var inst_310652 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310699_310735 = state_310662__$1;(statearr_310699_310735[2] = inst_310652);
(statearr_310699_310735[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 23))
{var inst_310639 = (state_310662[13]);var inst_310643 = (state_310662[2]);var inst_310644 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_310639);var state_310662__$1 = (function (){var statearr_310700 = state_310662;(statearr_310700[18] = inst_310643);
return statearr_310700;
})();var statearr_310701_310736 = state_310662__$1;(statearr_310701_310736[2] = inst_310644);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310662__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310663 === 24))
{var inst_310641 = (state_310662[12]);var inst_310591 = (state_310662[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_310662,23,Object,null,22);var inst_310648 = cljs.core.async.muxch_STAR_.call(null,inst_310641);var state_310662__$1 = state_310662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_310662__$1,25,inst_310648,inst_310591);
} else
{if((state_val_310663 === 25))
{var inst_310650 = (state_310662[2]);var state_310662__$1 = state_310662;var statearr_310702_310737 = state_310662__$1;(statearr_310702_310737[2] = inst_310650);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310662__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_310706 = (new Array(19));(statearr_310706[0] = state_machine__10214__auto__);
(statearr_310706[1] = 1);
return statearr_310706;
});
var state_machine__10214__auto____1 = (function (state_310662){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_310662);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e310707){if((e310707 instanceof Object))
{var ex__10217__auto__ = e310707;var statearr_310708_310738 = state_310662;(statearr_310708_310738[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e310707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__310739 = state_310662;
state_310662 = G__310739;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_310662){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_310662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_310709 = f__10284__auto__.call(null);(statearr_310709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___310710);
return statearr_310709;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___310876 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_310846){var state_val_310847 = (state_310846[1]);if((state_val_310847 === 1))
{var state_310846__$1 = state_310846;var statearr_310848_310877 = state_310846__$1;(statearr_310848_310877[2] = null);
(statearr_310848_310877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 2))
{var inst_310809 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_310810 = 0;var state_310846__$1 = (function (){var statearr_310849 = state_310846;(statearr_310849[7] = inst_310809);
(statearr_310849[8] = inst_310810);
return statearr_310849;
})();var statearr_310850_310878 = state_310846__$1;(statearr_310850_310878[2] = null);
(statearr_310850_310878[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 3))
{var inst_310844 = (state_310846[2]);var state_310846__$1 = state_310846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_310846__$1,inst_310844);
} else
{if((state_val_310847 === 4))
{var inst_310810 = (state_310846[8]);var inst_310812 = (inst_310810 < cnt);var state_310846__$1 = state_310846;if(cljs.core.truth_(inst_310812))
{var statearr_310851_310879 = state_310846__$1;(statearr_310851_310879[1] = 6);
} else
{var statearr_310852_310880 = state_310846__$1;(statearr_310852_310880[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 5))
{var inst_310830 = (state_310846[2]);var state_310846__$1 = (function (){var statearr_310853 = state_310846;(statearr_310853[9] = inst_310830);
return statearr_310853;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_310846__$1,12,dchan);
} else
{if((state_val_310847 === 6))
{var state_310846__$1 = state_310846;var statearr_310854_310881 = state_310846__$1;(statearr_310854_310881[2] = null);
(statearr_310854_310881[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 7))
{var state_310846__$1 = state_310846;var statearr_310855_310882 = state_310846__$1;(statearr_310855_310882[2] = null);
(statearr_310855_310882[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 8))
{var inst_310828 = (state_310846[2]);var state_310846__$1 = state_310846;var statearr_310856_310883 = state_310846__$1;(statearr_310856_310883[2] = inst_310828);
(statearr_310856_310883[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 9))
{var inst_310810 = (state_310846[8]);var inst_310823 = (state_310846[2]);var inst_310824 = (inst_310810 + 1);var inst_310810__$1 = inst_310824;var state_310846__$1 = (function (){var statearr_310857 = state_310846;(statearr_310857[10] = inst_310823);
(statearr_310857[8] = inst_310810__$1);
return statearr_310857;
})();var statearr_310858_310884 = state_310846__$1;(statearr_310858_310884[2] = null);
(statearr_310858_310884[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 10))
{var inst_310814 = (state_310846[2]);var inst_310815 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_310846__$1 = (function (){var statearr_310859 = state_310846;(statearr_310859[11] = inst_310814);
return statearr_310859;
})();var statearr_310860_310885 = state_310846__$1;(statearr_310860_310885[2] = inst_310815);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310846__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 11))
{var inst_310810 = (state_310846[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_310846,10,Object,null,9);var inst_310819 = chs__$1.call(null,inst_310810);var inst_310820 = done.call(null,inst_310810);var inst_310821 = cljs.core.async.take_BANG_.call(null,inst_310819,inst_310820);var state_310846__$1 = state_310846;var statearr_310861_310886 = state_310846__$1;(statearr_310861_310886[2] = inst_310821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310846__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 12))
{var inst_310832 = (state_310846[12]);var inst_310832__$1 = (state_310846[2]);var inst_310833 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_310832__$1);var state_310846__$1 = (function (){var statearr_310862 = state_310846;(statearr_310862[12] = inst_310832__$1);
return statearr_310862;
})();if(cljs.core.truth_(inst_310833))
{var statearr_310863_310887 = state_310846__$1;(statearr_310863_310887[1] = 13);
} else
{var statearr_310864_310888 = state_310846__$1;(statearr_310864_310888[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 13))
{var inst_310835 = cljs.core.async.close_BANG_.call(null,out);var state_310846__$1 = state_310846;var statearr_310865_310889 = state_310846__$1;(statearr_310865_310889[2] = inst_310835);
(statearr_310865_310889[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 14))
{var inst_310832 = (state_310846[12]);var inst_310837 = cljs.core.apply.call(null,f,inst_310832);var state_310846__$1 = state_310846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_310846__$1,16,out,inst_310837);
} else
{if((state_val_310847 === 15))
{var inst_310842 = (state_310846[2]);var state_310846__$1 = state_310846;var statearr_310866_310890 = state_310846__$1;(statearr_310866_310890[2] = inst_310842);
(statearr_310866_310890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310847 === 16))
{var inst_310839 = (state_310846[2]);var state_310846__$1 = (function (){var statearr_310867 = state_310846;(statearr_310867[13] = inst_310839);
return statearr_310867;
})();var statearr_310868_310891 = state_310846__$1;(statearr_310868_310891[2] = null);
(statearr_310868_310891[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_310872 = (new Array(14));(statearr_310872[0] = state_machine__10214__auto__);
(statearr_310872[1] = 1);
return statearr_310872;
});
var state_machine__10214__auto____1 = (function (state_310846){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_310846);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e310873){if((e310873 instanceof Object))
{var ex__10217__auto__ = e310873;var statearr_310874_310892 = state_310846;(statearr_310874_310892[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e310873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__310893 = state_310846;
state_310846 = G__310893;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_310846){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_310846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_310875 = f__10284__auto__.call(null);(statearr_310875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___310876);
return statearr_310875;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___311001 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_310977){var state_val_310978 = (state_310977[1]);if((state_val_310978 === 1))
{var inst_310948 = cljs.core.vec.call(null,chs);var inst_310949 = inst_310948;var state_310977__$1 = (function (){var statearr_310979 = state_310977;(statearr_310979[7] = inst_310949);
return statearr_310979;
})();var statearr_310980_311002 = state_310977__$1;(statearr_310980_311002[2] = null);
(statearr_310980_311002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 2))
{var inst_310949 = (state_310977[7]);var inst_310951 = cljs.core.count.call(null,inst_310949);var inst_310952 = (inst_310951 > 0);var state_310977__$1 = state_310977;if(cljs.core.truth_(inst_310952))
{var statearr_310981_311003 = state_310977__$1;(statearr_310981_311003[1] = 4);
} else
{var statearr_310982_311004 = state_310977__$1;(statearr_310982_311004[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 3))
{var inst_310975 = (state_310977[2]);var state_310977__$1 = state_310977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_310977__$1,inst_310975);
} else
{if((state_val_310978 === 4))
{var inst_310949 = (state_310977[7]);var state_310977__$1 = state_310977;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_310977__$1,7,inst_310949);
} else
{if((state_val_310978 === 5))
{var inst_310971 = cljs.core.async.close_BANG_.call(null,out);var state_310977__$1 = state_310977;var statearr_310983_311005 = state_310977__$1;(statearr_310983_311005[2] = inst_310971);
(statearr_310983_311005[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 6))
{var inst_310973 = (state_310977[2]);var state_310977__$1 = state_310977;var statearr_310984_311006 = state_310977__$1;(statearr_310984_311006[2] = inst_310973);
(statearr_310984_311006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 7))
{var inst_310956 = (state_310977[8]);var inst_310957 = (state_310977[9]);var inst_310956__$1 = (state_310977[2]);var inst_310957__$1 = cljs.core.nth.call(null,inst_310956__$1,0,null);var inst_310958 = cljs.core.nth.call(null,inst_310956__$1,1,null);var inst_310959 = (inst_310957__$1 == null);var state_310977__$1 = (function (){var statearr_310985 = state_310977;(statearr_310985[8] = inst_310956__$1);
(statearr_310985[10] = inst_310958);
(statearr_310985[9] = inst_310957__$1);
return statearr_310985;
})();if(cljs.core.truth_(inst_310959))
{var statearr_310986_311007 = state_310977__$1;(statearr_310986_311007[1] = 8);
} else
{var statearr_310987_311008 = state_310977__$1;(statearr_310987_311008[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 8))
{var inst_310949 = (state_310977[7]);var inst_310956 = (state_310977[8]);var inst_310958 = (state_310977[10]);var inst_310957 = (state_310977[9]);var inst_310961 = (function (){var c = inst_310958;var v = inst_310957;var vec__310954 = inst_310956;var cs = inst_310949;return ((function (c,v,vec__310954,cs,inst_310949,inst_310956,inst_310958,inst_310957,state_val_310978){
return (function (p1__310894_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__310894_SHARP_);
});
;})(c,v,vec__310954,cs,inst_310949,inst_310956,inst_310958,inst_310957,state_val_310978))
})();var inst_310962 = cljs.core.filterv.call(null,inst_310961,inst_310949);var inst_310949__$1 = inst_310962;var state_310977__$1 = (function (){var statearr_310988 = state_310977;(statearr_310988[7] = inst_310949__$1);
return statearr_310988;
})();var statearr_310989_311009 = state_310977__$1;(statearr_310989_311009[2] = null);
(statearr_310989_311009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 9))
{var inst_310957 = (state_310977[9]);var state_310977__$1 = state_310977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_310977__$1,11,out,inst_310957);
} else
{if((state_val_310978 === 10))
{var inst_310969 = (state_310977[2]);var state_310977__$1 = state_310977;var statearr_310991_311010 = state_310977__$1;(statearr_310991_311010[2] = inst_310969);
(statearr_310991_311010[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_310978 === 11))
{var inst_310949 = (state_310977[7]);var inst_310966 = (state_310977[2]);var tmp310990 = inst_310949;var inst_310949__$1 = tmp310990;var state_310977__$1 = (function (){var statearr_310992 = state_310977;(statearr_310992[7] = inst_310949__$1);
(statearr_310992[11] = inst_310966);
return statearr_310992;
})();var statearr_310993_311011 = state_310977__$1;(statearr_310993_311011[2] = null);
(statearr_310993_311011[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_310997 = (new Array(12));(statearr_310997[0] = state_machine__10214__auto__);
(statearr_310997[1] = 1);
return statearr_310997;
});
var state_machine__10214__auto____1 = (function (state_310977){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_310977);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e310998){if((e310998 instanceof Object))
{var ex__10217__auto__ = e310998;var statearr_310999_311012 = state_310977;(statearr_310999_311012[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_310977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e310998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__311013 = state_310977;
state_310977 = G__311013;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_310977){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_310977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_311000 = f__10284__auto__.call(null);(statearr_311000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___311001);
return statearr_311000;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___311106 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_311083){var state_val_311084 = (state_311083[1]);if((state_val_311084 === 1))
{var inst_311060 = 0;var state_311083__$1 = (function (){var statearr_311085 = state_311083;(statearr_311085[7] = inst_311060);
return statearr_311085;
})();var statearr_311086_311107 = state_311083__$1;(statearr_311086_311107[2] = null);
(statearr_311086_311107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 2))
{var inst_311060 = (state_311083[7]);var inst_311062 = (inst_311060 < n);var state_311083__$1 = state_311083;if(cljs.core.truth_(inst_311062))
{var statearr_311087_311108 = state_311083__$1;(statearr_311087_311108[1] = 4);
} else
{var statearr_311088_311109 = state_311083__$1;(statearr_311088_311109[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 3))
{var inst_311080 = (state_311083[2]);var inst_311081 = cljs.core.async.close_BANG_.call(null,out);var state_311083__$1 = (function (){var statearr_311089 = state_311083;(statearr_311089[8] = inst_311080);
return statearr_311089;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_311083__$1,inst_311081);
} else
{if((state_val_311084 === 4))
{var state_311083__$1 = state_311083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_311083__$1,7,ch);
} else
{if((state_val_311084 === 5))
{var state_311083__$1 = state_311083;var statearr_311090_311110 = state_311083__$1;(statearr_311090_311110[2] = null);
(statearr_311090_311110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 6))
{var inst_311078 = (state_311083[2]);var state_311083__$1 = state_311083;var statearr_311091_311111 = state_311083__$1;(statearr_311091_311111[2] = inst_311078);
(statearr_311091_311111[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 7))
{var inst_311065 = (state_311083[9]);var inst_311065__$1 = (state_311083[2]);var inst_311066 = (inst_311065__$1 == null);var inst_311067 = cljs.core.not.call(null,inst_311066);var state_311083__$1 = (function (){var statearr_311092 = state_311083;(statearr_311092[9] = inst_311065__$1);
return statearr_311092;
})();if(inst_311067)
{var statearr_311093_311112 = state_311083__$1;(statearr_311093_311112[1] = 8);
} else
{var statearr_311094_311113 = state_311083__$1;(statearr_311094_311113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 8))
{var inst_311065 = (state_311083[9]);var state_311083__$1 = state_311083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_311083__$1,11,out,inst_311065);
} else
{if((state_val_311084 === 9))
{var state_311083__$1 = state_311083;var statearr_311095_311114 = state_311083__$1;(statearr_311095_311114[2] = null);
(statearr_311095_311114[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 10))
{var inst_311075 = (state_311083[2]);var state_311083__$1 = state_311083;var statearr_311096_311115 = state_311083__$1;(statearr_311096_311115[2] = inst_311075);
(statearr_311096_311115[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311084 === 11))
{var inst_311060 = (state_311083[7]);var inst_311070 = (state_311083[2]);var inst_311071 = (inst_311060 + 1);var inst_311060__$1 = inst_311071;var state_311083__$1 = (function (){var statearr_311097 = state_311083;(statearr_311097[10] = inst_311070);
(statearr_311097[7] = inst_311060__$1);
return statearr_311097;
})();var statearr_311098_311116 = state_311083__$1;(statearr_311098_311116[2] = null);
(statearr_311098_311116[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_311102 = (new Array(11));(statearr_311102[0] = state_machine__10214__auto__);
(statearr_311102[1] = 1);
return statearr_311102;
});
var state_machine__10214__auto____1 = (function (state_311083){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_311083);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e311103){if((e311103 instanceof Object))
{var ex__10217__auto__ = e311103;var statearr_311104_311117 = state_311083;(statearr_311104_311117[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_311083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__311118 = state_311083;
state_311083 = G__311118;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_311083){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_311083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_311105 = f__10284__auto__.call(null);(statearr_311105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___311106);
return statearr_311105;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___311215 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_311190){var state_val_311191 = (state_311190[1]);if((state_val_311191 === 1))
{var inst_311167 = null;var state_311190__$1 = (function (){var statearr_311192 = state_311190;(statearr_311192[7] = inst_311167);
return statearr_311192;
})();var statearr_311193_311216 = state_311190__$1;(statearr_311193_311216[2] = null);
(statearr_311193_311216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 2))
{var state_311190__$1 = state_311190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_311190__$1,4,ch);
} else
{if((state_val_311191 === 3))
{var inst_311187 = (state_311190[2]);var inst_311188 = cljs.core.async.close_BANG_.call(null,out);var state_311190__$1 = (function (){var statearr_311194 = state_311190;(statearr_311194[8] = inst_311187);
return statearr_311194;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_311190__$1,inst_311188);
} else
{if((state_val_311191 === 4))
{var inst_311170 = (state_311190[9]);var inst_311170__$1 = (state_311190[2]);var inst_311171 = (inst_311170__$1 == null);var inst_311172 = cljs.core.not.call(null,inst_311171);var state_311190__$1 = (function (){var statearr_311195 = state_311190;(statearr_311195[9] = inst_311170__$1);
return statearr_311195;
})();if(inst_311172)
{var statearr_311196_311217 = state_311190__$1;(statearr_311196_311217[1] = 5);
} else
{var statearr_311197_311218 = state_311190__$1;(statearr_311197_311218[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 5))
{var inst_311170 = (state_311190[9]);var inst_311167 = (state_311190[7]);var inst_311174 = cljs.core._EQ_.call(null,inst_311170,inst_311167);var state_311190__$1 = state_311190;if(inst_311174)
{var statearr_311198_311219 = state_311190__$1;(statearr_311198_311219[1] = 8);
} else
{var statearr_311199_311220 = state_311190__$1;(statearr_311199_311220[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 6))
{var state_311190__$1 = state_311190;var statearr_311201_311221 = state_311190__$1;(statearr_311201_311221[2] = null);
(statearr_311201_311221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 7))
{var inst_311185 = (state_311190[2]);var state_311190__$1 = state_311190;var statearr_311202_311222 = state_311190__$1;(statearr_311202_311222[2] = inst_311185);
(statearr_311202_311222[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 8))
{var inst_311167 = (state_311190[7]);var tmp311200 = inst_311167;var inst_311167__$1 = tmp311200;var state_311190__$1 = (function (){var statearr_311203 = state_311190;(statearr_311203[7] = inst_311167__$1);
return statearr_311203;
})();var statearr_311204_311223 = state_311190__$1;(statearr_311204_311223[2] = null);
(statearr_311204_311223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 9))
{var inst_311170 = (state_311190[9]);var state_311190__$1 = state_311190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_311190__$1,11,out,inst_311170);
} else
{if((state_val_311191 === 10))
{var inst_311182 = (state_311190[2]);var state_311190__$1 = state_311190;var statearr_311205_311224 = state_311190__$1;(statearr_311205_311224[2] = inst_311182);
(statearr_311205_311224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311191 === 11))
{var inst_311170 = (state_311190[9]);var inst_311179 = (state_311190[2]);var inst_311167 = inst_311170;var state_311190__$1 = (function (){var statearr_311206 = state_311190;(statearr_311206[10] = inst_311179);
(statearr_311206[7] = inst_311167);
return statearr_311206;
})();var statearr_311207_311225 = state_311190__$1;(statearr_311207_311225[2] = null);
(statearr_311207_311225[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_311211 = (new Array(11));(statearr_311211[0] = state_machine__10214__auto__);
(statearr_311211[1] = 1);
return statearr_311211;
});
var state_machine__10214__auto____1 = (function (state_311190){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_311190);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e311212){if((e311212 instanceof Object))
{var ex__10217__auto__ = e311212;var statearr_311213_311226 = state_311190;(statearr_311213_311226[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_311190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__311227 = state_311190;
state_311190 = G__311227;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_311190){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_311190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_311214 = f__10284__auto__.call(null);(statearr_311214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___311215);
return statearr_311214;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___311362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_311332){var state_val_311333 = (state_311332[1]);if((state_val_311333 === 1))
{var inst_311295 = (new Array(n));var inst_311296 = inst_311295;var inst_311297 = 0;var state_311332__$1 = (function (){var statearr_311334 = state_311332;(statearr_311334[7] = inst_311297);
(statearr_311334[8] = inst_311296);
return statearr_311334;
})();var statearr_311335_311363 = state_311332__$1;(statearr_311335_311363[2] = null);
(statearr_311335_311363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 2))
{var state_311332__$1 = state_311332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_311332__$1,4,ch);
} else
{if((state_val_311333 === 3))
{var inst_311330 = (state_311332[2]);var state_311332__$1 = state_311332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_311332__$1,inst_311330);
} else
{if((state_val_311333 === 4))
{var inst_311300 = (state_311332[9]);var inst_311300__$1 = (state_311332[2]);var inst_311301 = (inst_311300__$1 == null);var inst_311302 = cljs.core.not.call(null,inst_311301);var state_311332__$1 = (function (){var statearr_311336 = state_311332;(statearr_311336[9] = inst_311300__$1);
return statearr_311336;
})();if(inst_311302)
{var statearr_311337_311364 = state_311332__$1;(statearr_311337_311364[1] = 5);
} else
{var statearr_311338_311365 = state_311332__$1;(statearr_311338_311365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 5))
{var inst_311297 = (state_311332[7]);var inst_311296 = (state_311332[8]);var inst_311300 = (state_311332[9]);var inst_311305 = (state_311332[10]);var inst_311304 = (inst_311296[inst_311297] = inst_311300);var inst_311305__$1 = (inst_311297 + 1);var inst_311306 = (inst_311305__$1 < n);var state_311332__$1 = (function (){var statearr_311339 = state_311332;(statearr_311339[11] = inst_311304);
(statearr_311339[10] = inst_311305__$1);
return statearr_311339;
})();if(cljs.core.truth_(inst_311306))
{var statearr_311340_311366 = state_311332__$1;(statearr_311340_311366[1] = 8);
} else
{var statearr_311341_311367 = state_311332__$1;(statearr_311341_311367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 6))
{var inst_311297 = (state_311332[7]);var inst_311318 = (inst_311297 > 0);var state_311332__$1 = state_311332;if(cljs.core.truth_(inst_311318))
{var statearr_311343_311368 = state_311332__$1;(statearr_311343_311368[1] = 12);
} else
{var statearr_311344_311369 = state_311332__$1;(statearr_311344_311369[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 7))
{var inst_311328 = (state_311332[2]);var state_311332__$1 = state_311332;var statearr_311345_311370 = state_311332__$1;(statearr_311345_311370[2] = inst_311328);
(statearr_311345_311370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 8))
{var inst_311296 = (state_311332[8]);var inst_311305 = (state_311332[10]);var tmp311342 = inst_311296;var inst_311296__$1 = tmp311342;var inst_311297 = inst_311305;var state_311332__$1 = (function (){var statearr_311346 = state_311332;(statearr_311346[7] = inst_311297);
(statearr_311346[8] = inst_311296__$1);
return statearr_311346;
})();var statearr_311347_311371 = state_311332__$1;(statearr_311347_311371[2] = null);
(statearr_311347_311371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 9))
{var inst_311296 = (state_311332[8]);var inst_311310 = cljs.core.vec.call(null,inst_311296);var state_311332__$1 = state_311332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_311332__$1,11,out,inst_311310);
} else
{if((state_val_311333 === 10))
{var inst_311316 = (state_311332[2]);var state_311332__$1 = state_311332;var statearr_311348_311372 = state_311332__$1;(statearr_311348_311372[2] = inst_311316);
(statearr_311348_311372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 11))
{var inst_311312 = (state_311332[2]);var inst_311313 = (new Array(n));var inst_311296 = inst_311313;var inst_311297 = 0;var state_311332__$1 = (function (){var statearr_311349 = state_311332;(statearr_311349[7] = inst_311297);
(statearr_311349[8] = inst_311296);
(statearr_311349[12] = inst_311312);
return statearr_311349;
})();var statearr_311350_311373 = state_311332__$1;(statearr_311350_311373[2] = null);
(statearr_311350_311373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 12))
{var inst_311296 = (state_311332[8]);var inst_311320 = cljs.core.vec.call(null,inst_311296);var state_311332__$1 = state_311332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_311332__$1,15,out,inst_311320);
} else
{if((state_val_311333 === 13))
{var state_311332__$1 = state_311332;var statearr_311351_311374 = state_311332__$1;(statearr_311351_311374[2] = null);
(statearr_311351_311374[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 14))
{var inst_311325 = (state_311332[2]);var inst_311326 = cljs.core.async.close_BANG_.call(null,out);var state_311332__$1 = (function (){var statearr_311352 = state_311332;(statearr_311352[13] = inst_311325);
return statearr_311352;
})();var statearr_311353_311375 = state_311332__$1;(statearr_311353_311375[2] = inst_311326);
(statearr_311353_311375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311333 === 15))
{var inst_311322 = (state_311332[2]);var state_311332__$1 = state_311332;var statearr_311354_311376 = state_311332__$1;(statearr_311354_311376[2] = inst_311322);
(statearr_311354_311376[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_311358 = (new Array(14));(statearr_311358[0] = state_machine__10214__auto__);
(statearr_311358[1] = 1);
return statearr_311358;
});
var state_machine__10214__auto____1 = (function (state_311332){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_311332);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e311359){if((e311359 instanceof Object))
{var ex__10217__auto__ = e311359;var statearr_311360_311377 = state_311332;(statearr_311360_311377[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_311332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__311378 = state_311332;
state_311332 = G__311378;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_311332){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_311332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_311361 = f__10284__auto__.call(null);(statearr_311361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___311362);
return statearr_311361;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___311521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_311491){var state_val_311492 = (state_311491[1]);if((state_val_311492 === 1))
{var inst_311450 = (new Array(0));var inst_311451 = inst_311450;var inst_311452 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_311491__$1 = (function (){var statearr_311493 = state_311491;(statearr_311493[7] = inst_311451);
(statearr_311493[8] = inst_311452);
return statearr_311493;
})();var statearr_311494_311522 = state_311491__$1;(statearr_311494_311522[2] = null);
(statearr_311494_311522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 2))
{var state_311491__$1 = state_311491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_311491__$1,4,ch);
} else
{if((state_val_311492 === 3))
{var inst_311489 = (state_311491[2]);var state_311491__$1 = state_311491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_311491__$1,inst_311489);
} else
{if((state_val_311492 === 4))
{var inst_311455 = (state_311491[9]);var inst_311455__$1 = (state_311491[2]);var inst_311456 = (inst_311455__$1 == null);var inst_311457 = cljs.core.not.call(null,inst_311456);var state_311491__$1 = (function (){var statearr_311495 = state_311491;(statearr_311495[9] = inst_311455__$1);
return statearr_311495;
})();if(inst_311457)
{var statearr_311496_311523 = state_311491__$1;(statearr_311496_311523[1] = 5);
} else
{var statearr_311497_311524 = state_311491__$1;(statearr_311497_311524[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 5))
{var inst_311452 = (state_311491[8]);var inst_311459 = (state_311491[10]);var inst_311455 = (state_311491[9]);var inst_311459__$1 = f.call(null,inst_311455);var inst_311460 = cljs.core._EQ_.call(null,inst_311459__$1,inst_311452);var inst_311461 = cljs.core.keyword_identical_QMARK_.call(null,inst_311452,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_311462 = (inst_311460) || (inst_311461);var state_311491__$1 = (function (){var statearr_311498 = state_311491;(statearr_311498[10] = inst_311459__$1);
return statearr_311498;
})();if(cljs.core.truth_(inst_311462))
{var statearr_311499_311525 = state_311491__$1;(statearr_311499_311525[1] = 8);
} else
{var statearr_311500_311526 = state_311491__$1;(statearr_311500_311526[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 6))
{var inst_311451 = (state_311491[7]);var inst_311476 = inst_311451.length;var inst_311477 = (inst_311476 > 0);var state_311491__$1 = state_311491;if(cljs.core.truth_(inst_311477))
{var statearr_311502_311527 = state_311491__$1;(statearr_311502_311527[1] = 12);
} else
{var statearr_311503_311528 = state_311491__$1;(statearr_311503_311528[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 7))
{var inst_311487 = (state_311491[2]);var state_311491__$1 = state_311491;var statearr_311504_311529 = state_311491__$1;(statearr_311504_311529[2] = inst_311487);
(statearr_311504_311529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 8))
{var inst_311451 = (state_311491[7]);var inst_311459 = (state_311491[10]);var inst_311455 = (state_311491[9]);var inst_311464 = inst_311451.push(inst_311455);var tmp311501 = inst_311451;var inst_311451__$1 = tmp311501;var inst_311452 = inst_311459;var state_311491__$1 = (function (){var statearr_311505 = state_311491;(statearr_311505[7] = inst_311451__$1);
(statearr_311505[8] = inst_311452);
(statearr_311505[11] = inst_311464);
return statearr_311505;
})();var statearr_311506_311530 = state_311491__$1;(statearr_311506_311530[2] = null);
(statearr_311506_311530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 9))
{var inst_311451 = (state_311491[7]);var inst_311467 = cljs.core.vec.call(null,inst_311451);var state_311491__$1 = state_311491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_311491__$1,11,out,inst_311467);
} else
{if((state_val_311492 === 10))
{var inst_311474 = (state_311491[2]);var state_311491__$1 = state_311491;var statearr_311507_311531 = state_311491__$1;(statearr_311507_311531[2] = inst_311474);
(statearr_311507_311531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 11))
{var inst_311459 = (state_311491[10]);var inst_311455 = (state_311491[9]);var inst_311469 = (state_311491[2]);var inst_311470 = (new Array(0));var inst_311471 = inst_311470.push(inst_311455);var inst_311451 = inst_311470;var inst_311452 = inst_311459;var state_311491__$1 = (function (){var statearr_311508 = state_311491;(statearr_311508[7] = inst_311451);
(statearr_311508[8] = inst_311452);
(statearr_311508[12] = inst_311471);
(statearr_311508[13] = inst_311469);
return statearr_311508;
})();var statearr_311509_311532 = state_311491__$1;(statearr_311509_311532[2] = null);
(statearr_311509_311532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 12))
{var inst_311451 = (state_311491[7]);var inst_311479 = cljs.core.vec.call(null,inst_311451);var state_311491__$1 = state_311491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_311491__$1,15,out,inst_311479);
} else
{if((state_val_311492 === 13))
{var state_311491__$1 = state_311491;var statearr_311510_311533 = state_311491__$1;(statearr_311510_311533[2] = null);
(statearr_311510_311533[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 14))
{var inst_311484 = (state_311491[2]);var inst_311485 = cljs.core.async.close_BANG_.call(null,out);var state_311491__$1 = (function (){var statearr_311511 = state_311491;(statearr_311511[14] = inst_311484);
return statearr_311511;
})();var statearr_311512_311534 = state_311491__$1;(statearr_311512_311534[2] = inst_311485);
(statearr_311512_311534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_311492 === 15))
{var inst_311481 = (state_311491[2]);var state_311491__$1 = state_311491;var statearr_311513_311535 = state_311491__$1;(statearr_311513_311535[2] = inst_311481);
(statearr_311513_311535[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_311517 = (new Array(15));(statearr_311517[0] = state_machine__10214__auto__);
(statearr_311517[1] = 1);
return statearr_311517;
});
var state_machine__10214__auto____1 = (function (state_311491){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_311491);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e311518){if((e311518 instanceof Object))
{var ex__10217__auto__ = e311518;var statearr_311519_311536 = state_311491;(statearr_311519_311536[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_311491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e311518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__311537 = state_311491;
state_311491 = G__311537;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_311491){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_311491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_311520 = f__10284__auto__.call(null);(statearr_311520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___311521);
return statearr_311520;
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

//# sourceMappingURL=async.js.map