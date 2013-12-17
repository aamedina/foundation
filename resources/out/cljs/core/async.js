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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t41334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41334 = (function (f,fn_handler,meta41335){
this.f = f;
this.fn_handler = fn_handler;
this.meta41335 = meta41335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41334.cljs$lang$type = true;
cljs.core.async.t41334.cljs$lang$ctorStr = "cljs.core.async/t41334";
cljs.core.async.t41334.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41334");
});
cljs.core.async.t41334.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t41334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t41334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41336){var self__ = this;
var _41336__$1 = this;return self__.meta41335;
});
cljs.core.async.t41334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41336,meta41335__$1){var self__ = this;
var _41336__$1 = this;return (new cljs.core.async.t41334(self__.f,self__.fn_handler,meta41335__$1));
});
cljs.core.async.__GT_t41334 = (function __GT_t41334(f__$1,fn_handler__$1,meta41335){return (new cljs.core.async.t41334(f__$1,fn_handler__$1,meta41335));
});
}
return (new cljs.core.async.t41334(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__41338 = buff;if(G__41338)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__41338.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__41338.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__41338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__41338);
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
{var val_41339 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_41339);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_41339);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13942__auto__ = ret;if(cljs.core.truth_(and__13942__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13942__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14782__auto___41340 = n;var x_41341 = 0;while(true){
if((x_41341 < n__14782__auto___41340))
{(a[x_41341] = 0);
{
var G__41342 = (x_41341 + 1);
x_41341 = G__41342;
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
var G__41343 = (i + 1);
i = G__41343;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t41347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41347 = (function (flag,alt_flag,meta41348){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta41348 = meta41348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41347.cljs$lang$type = true;
cljs.core.async.t41347.cljs$lang$ctorStr = "cljs.core.async/t41347";
cljs.core.async.t41347.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41347");
});
cljs.core.async.t41347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t41347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t41347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41349){var self__ = this;
var _41349__$1 = this;return self__.meta41348;
});
cljs.core.async.t41347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41349,meta41348__$1){var self__ = this;
var _41349__$1 = this;return (new cljs.core.async.t41347(self__.flag,self__.alt_flag,meta41348__$1));
});
cljs.core.async.__GT_t41347 = (function __GT_t41347(flag__$1,alt_flag__$1,meta41348){return (new cljs.core.async.t41347(flag__$1,alt_flag__$1,meta41348));
});
}
return (new cljs.core.async.t41347(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t41353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41353 = (function (cb,flag,alt_handler,meta41354){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta41354 = meta41354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41353.cljs$lang$type = true;
cljs.core.async.t41353.cljs$lang$ctorStr = "cljs.core.async/t41353";
cljs.core.async.t41353.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41353");
});
cljs.core.async.t41353.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t41353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t41353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41355){var self__ = this;
var _41355__$1 = this;return self__.meta41354;
});
cljs.core.async.t41353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41355,meta41354__$1){var self__ = this;
var _41355__$1 = this;return (new cljs.core.async.t41353(self__.cb,self__.flag,self__.alt_handler,meta41354__$1));
});
cljs.core.async.__GT_t41353 = (function __GT_t41353(cb__$1,flag__$1,alt_handler__$1,meta41354){return (new cljs.core.async.t41353(cb__$1,flag__$1,alt_handler__$1,meta41354));
});
}
return (new cljs.core.async.t41353(cb,flag,alt_handler,null));
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
return (function (p1__41356_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41356_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13954__auto__ = wport;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__41357 = (i + 1);
i = G__41357;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13954__auto__ = ret;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13942__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13942__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13942__auto__;
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
var alts_BANG___delegate = function (ports,p__41358){var map__41360 = p__41358;var map__41360__$1 = ((cljs.core.seq_QMARK_.call(null,map__41360))?cljs.core.apply.call(null,cljs.core.hash_map,map__41360):map__41360);var opts = map__41360__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__41358 = null;if (arguments.length > 1) {
  p__41358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__41358);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__41361){
var ports = cljs.core.first(arglist__41361);
var p__41358 = cljs.core.rest(arglist__41361);
return alts_BANG___delegate(ports,p__41358);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t41369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41369 = (function (ch,f,map_LT_,meta41370){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41370 = meta41370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41369.cljs$lang$type = true;
cljs.core.async.t41369.cljs$lang$ctorStr = "cljs.core.async/t41369";
cljs.core.async.t41369.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41369");
});
cljs.core.async.t41369.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t41369.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t41372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41372 = (function (fn1,_,meta41370,ch,f,map_LT_,meta41373){
this.fn1 = fn1;
this._ = _;
this.meta41370 = meta41370;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41373 = meta41373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41372.cljs$lang$type = true;
cljs.core.async.t41372.cljs$lang$ctorStr = "cljs.core.async/t41372";
cljs.core.async.t41372.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41372");
});
cljs.core.async.t41372.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t41372.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t41372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__41362_SHARP_){return f1.call(null,(((p1__41362_SHARP_ == null))?null:self__.f.call(null,p1__41362_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t41372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41374){var self__ = this;
var _41374__$1 = this;return self__.meta41373;
});
cljs.core.async.t41372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41374,meta41373__$1){var self__ = this;
var _41374__$1 = this;return (new cljs.core.async.t41372(self__.fn1,self__._,self__.meta41370,self__.ch,self__.f,self__.map_LT_,meta41373__$1));
});
cljs.core.async.__GT_t41372 = (function __GT_t41372(fn1__$1,___$2,meta41370__$1,ch__$2,f__$2,map_LT___$2,meta41373){return (new cljs.core.async.t41372(fn1__$1,___$2,meta41370__$1,ch__$2,f__$2,map_LT___$2,meta41373));
});
}
return (new cljs.core.async.t41372(fn1,___$1,self__.meta41370,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13942__auto__ = ret;if(cljs.core.truth_(and__13942__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13942__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t41369.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41371){var self__ = this;
var _41371__$1 = this;return self__.meta41370;
});
cljs.core.async.t41369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41371,meta41370__$1){var self__ = this;
var _41371__$1 = this;return (new cljs.core.async.t41369(self__.ch,self__.f,self__.map_LT_,meta41370__$1));
});
cljs.core.async.__GT_t41369 = (function __GT_t41369(ch__$1,f__$1,map_LT___$1,meta41370){return (new cljs.core.async.t41369(ch__$1,f__$1,map_LT___$1,meta41370));
});
}
return (new cljs.core.async.t41369(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t41378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41378 = (function (ch,f,map_GT_,meta41379){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41379 = meta41379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41378.cljs$lang$type = true;
cljs.core.async.t41378.cljs$lang$ctorStr = "cljs.core.async/t41378";
cljs.core.async.t41378.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41378");
});
cljs.core.async.t41378.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t41378.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t41378.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41380){var self__ = this;
var _41380__$1 = this;return self__.meta41379;
});
cljs.core.async.t41378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41380,meta41379__$1){var self__ = this;
var _41380__$1 = this;return (new cljs.core.async.t41378(self__.ch,self__.f,self__.map_GT_,meta41379__$1));
});
cljs.core.async.__GT_t41378 = (function __GT_t41378(ch__$1,f__$1,map_GT___$1,meta41379){return (new cljs.core.async.t41378(ch__$1,f__$1,map_GT___$1,meta41379));
});
}
return (new cljs.core.async.t41378(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t41384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41384 = (function (ch,p,filter_GT_,meta41385){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41385 = meta41385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41384.cljs$lang$type = true;
cljs.core.async.t41384.cljs$lang$ctorStr = "cljs.core.async/t41384";
cljs.core.async.t41384.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t41384");
});
cljs.core.async.t41384.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t41384.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t41384.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41386){var self__ = this;
var _41386__$1 = this;return self__.meta41385;
});
cljs.core.async.t41384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41386,meta41385__$1){var self__ = this;
var _41386__$1 = this;return (new cljs.core.async.t41384(self__.ch,self__.p,self__.filter_GT_,meta41385__$1));
});
cljs.core.async.__GT_t41384 = (function __GT_t41384(ch__$1,p__$1,filter_GT___$1,meta41385){return (new cljs.core.async.t41384(ch__$1,p__$1,filter_GT___$1,meta41385));
});
}
return (new cljs.core.async.t41384(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18264__auto___41469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_41448){var state_val_41449 = (state_41448[1]);if((state_val_41449 === 1))
{var state_41448__$1 = state_41448;var statearr_41450_41470 = state_41448__$1;(statearr_41450_41470[2] = null);
(statearr_41450_41470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 2))
{var state_41448__$1 = state_41448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41448__$1,4,ch);
} else
{if((state_val_41449 === 3))
{var inst_41446 = (state_41448[2]);var state_41448__$1 = state_41448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41448__$1,inst_41446);
} else
{if((state_val_41449 === 4))
{var inst_41430 = (state_41448[7]);var inst_41430__$1 = (state_41448[2]);var inst_41431 = (inst_41430__$1 == null);var state_41448__$1 = (function (){var statearr_41451 = state_41448;(statearr_41451[7] = inst_41430__$1);
return statearr_41451;
})();if(cljs.core.truth_(inst_41431))
{var statearr_41452_41471 = state_41448__$1;(statearr_41452_41471[1] = 5);
} else
{var statearr_41453_41472 = state_41448__$1;(statearr_41453_41472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 5))
{var inst_41433 = cljs.core.async.close_BANG_.call(null,out);var state_41448__$1 = state_41448;var statearr_41454_41473 = state_41448__$1;(statearr_41454_41473[2] = inst_41433);
(statearr_41454_41473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 6))
{var inst_41430 = (state_41448[7]);var inst_41435 = p.call(null,inst_41430);var state_41448__$1 = state_41448;if(cljs.core.truth_(inst_41435))
{var statearr_41455_41474 = state_41448__$1;(statearr_41455_41474[1] = 8);
} else
{var statearr_41456_41475 = state_41448__$1;(statearr_41456_41475[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 7))
{var inst_41444 = (state_41448[2]);var state_41448__$1 = state_41448;var statearr_41457_41476 = state_41448__$1;(statearr_41457_41476[2] = inst_41444);
(statearr_41457_41476[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 8))
{var inst_41430 = (state_41448[7]);var state_41448__$1 = state_41448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41448__$1,11,out,inst_41430);
} else
{if((state_val_41449 === 9))
{var state_41448__$1 = state_41448;var statearr_41458_41477 = state_41448__$1;(statearr_41458_41477[2] = null);
(statearr_41458_41477[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 10))
{var inst_41441 = (state_41448[2]);var state_41448__$1 = (function (){var statearr_41459 = state_41448;(statearr_41459[8] = inst_41441);
return statearr_41459;
})();var statearr_41460_41478 = state_41448__$1;(statearr_41460_41478[2] = null);
(statearr_41460_41478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41449 === 11))
{var inst_41438 = (state_41448[2]);var state_41448__$1 = state_41448;var statearr_41461_41479 = state_41448__$1;(statearr_41461_41479[2] = inst_41438);
(statearr_41461_41479[1] = 10);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_41465 = [null,null,null,null,null,null,null,null,null];(statearr_41465[0] = state_machine__18195__auto__);
(statearr_41465[1] = 1);
return statearr_41465;
});
var state_machine__18195__auto____1 = (function (state_41448){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_41448);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e41466){if((e41466 instanceof Object))
{var ex__18198__auto__ = e41466;var statearr_41467_41480 = state_41448;(statearr_41467_41480[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41481 = state_41448;
state_41448 = G__41481;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_41448){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_41448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_41468 = f__18265__auto__.call(null);(statearr_41468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___41469);
return statearr_41468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18264__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_41633){var state_val_41634 = (state_41633[1]);if((state_val_41634 === 1))
{var state_41633__$1 = state_41633;var statearr_41635_41672 = state_41633__$1;(statearr_41635_41672[2] = null);
(statearr_41635_41672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 2))
{var state_41633__$1 = state_41633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41633__$1,4,in$);
} else
{if((state_val_41634 === 3))
{var inst_41631 = (state_41633[2]);var state_41633__$1 = state_41633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41633__$1,inst_41631);
} else
{if((state_val_41634 === 4))
{var inst_41579 = (state_41633[7]);var inst_41579__$1 = (state_41633[2]);var inst_41580 = (inst_41579__$1 == null);var state_41633__$1 = (function (){var statearr_41636 = state_41633;(statearr_41636[7] = inst_41579__$1);
return statearr_41636;
})();if(cljs.core.truth_(inst_41580))
{var statearr_41637_41673 = state_41633__$1;(statearr_41637_41673[1] = 5);
} else
{var statearr_41638_41674 = state_41633__$1;(statearr_41638_41674[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 5))
{var inst_41582 = cljs.core.async.close_BANG_.call(null,out);var state_41633__$1 = state_41633;var statearr_41639_41675 = state_41633__$1;(statearr_41639_41675[2] = inst_41582);
(statearr_41639_41675[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 6))
{var inst_41579 = (state_41633[7]);var inst_41584 = f.call(null,inst_41579);var inst_41589 = cljs.core.seq.call(null,inst_41584);var inst_41590 = inst_41589;var inst_41591 = null;var inst_41592 = 0;var inst_41593 = 0;var state_41633__$1 = (function (){var statearr_41640 = state_41633;(statearr_41640[8] = inst_41590);
(statearr_41640[9] = inst_41591);
(statearr_41640[10] = inst_41593);
(statearr_41640[11] = inst_41592);
return statearr_41640;
})();var statearr_41641_41676 = state_41633__$1;(statearr_41641_41676[2] = null);
(statearr_41641_41676[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 7))
{var inst_41629 = (state_41633[2]);var state_41633__$1 = state_41633;var statearr_41642_41677 = state_41633__$1;(statearr_41642_41677[2] = inst_41629);
(statearr_41642_41677[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 8))
{var inst_41593 = (state_41633[10]);var inst_41592 = (state_41633[11]);var inst_41595 = (inst_41593 < inst_41592);var inst_41596 = inst_41595;var state_41633__$1 = state_41633;if(cljs.core.truth_(inst_41596))
{var statearr_41643_41678 = state_41633__$1;(statearr_41643_41678[1] = 10);
} else
{var statearr_41644_41679 = state_41633__$1;(statearr_41644_41679[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 9))
{var inst_41626 = (state_41633[2]);var state_41633__$1 = (function (){var statearr_41645 = state_41633;(statearr_41645[12] = inst_41626);
return statearr_41645;
})();var statearr_41646_41680 = state_41633__$1;(statearr_41646_41680[2] = null);
(statearr_41646_41680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 10))
{var inst_41591 = (state_41633[9]);var inst_41593 = (state_41633[10]);var inst_41598 = cljs.core._nth.call(null,inst_41591,inst_41593);var state_41633__$1 = state_41633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41633__$1,13,out,inst_41598);
} else
{if((state_val_41634 === 11))
{var inst_41590 = (state_41633[8]);var inst_41604 = (state_41633[13]);var inst_41604__$1 = cljs.core.seq.call(null,inst_41590);var state_41633__$1 = (function (){var statearr_41650 = state_41633;(statearr_41650[13] = inst_41604__$1);
return statearr_41650;
})();if(inst_41604__$1)
{var statearr_41651_41681 = state_41633__$1;(statearr_41651_41681[1] = 14);
} else
{var statearr_41652_41682 = state_41633__$1;(statearr_41652_41682[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 12))
{var inst_41624 = (state_41633[2]);var state_41633__$1 = state_41633;var statearr_41653_41683 = state_41633__$1;(statearr_41653_41683[2] = inst_41624);
(statearr_41653_41683[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 13))
{var inst_41590 = (state_41633[8]);var inst_41591 = (state_41633[9]);var inst_41593 = (state_41633[10]);var inst_41592 = (state_41633[11]);var inst_41600 = (state_41633[2]);var inst_41601 = (inst_41593 + 1);var tmp41647 = inst_41590;var tmp41648 = inst_41591;var tmp41649 = inst_41592;var inst_41590__$1 = tmp41647;var inst_41591__$1 = tmp41648;var inst_41592__$1 = tmp41649;var inst_41593__$1 = inst_41601;var state_41633__$1 = (function (){var statearr_41654 = state_41633;(statearr_41654[8] = inst_41590__$1);
(statearr_41654[14] = inst_41600);
(statearr_41654[9] = inst_41591__$1);
(statearr_41654[10] = inst_41593__$1);
(statearr_41654[11] = inst_41592__$1);
return statearr_41654;
})();var statearr_41655_41684 = state_41633__$1;(statearr_41655_41684[2] = null);
(statearr_41655_41684[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 14))
{var inst_41604 = (state_41633[13]);var inst_41606 = cljs.core.chunked_seq_QMARK_.call(null,inst_41604);var state_41633__$1 = state_41633;if(inst_41606)
{var statearr_41656_41685 = state_41633__$1;(statearr_41656_41685[1] = 17);
} else
{var statearr_41657_41686 = state_41633__$1;(statearr_41657_41686[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 15))
{var state_41633__$1 = state_41633;var statearr_41658_41687 = state_41633__$1;(statearr_41658_41687[2] = null);
(statearr_41658_41687[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 16))
{var inst_41622 = (state_41633[2]);var state_41633__$1 = state_41633;var statearr_41659_41688 = state_41633__$1;(statearr_41659_41688[2] = inst_41622);
(statearr_41659_41688[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 17))
{var inst_41604 = (state_41633[13]);var inst_41608 = cljs.core.chunk_first.call(null,inst_41604);var inst_41609 = cljs.core.chunk_rest.call(null,inst_41604);var inst_41610 = cljs.core.count.call(null,inst_41608);var inst_41590 = inst_41609;var inst_41591 = inst_41608;var inst_41592 = inst_41610;var inst_41593 = 0;var state_41633__$1 = (function (){var statearr_41660 = state_41633;(statearr_41660[8] = inst_41590);
(statearr_41660[9] = inst_41591);
(statearr_41660[10] = inst_41593);
(statearr_41660[11] = inst_41592);
return statearr_41660;
})();var statearr_41661_41689 = state_41633__$1;(statearr_41661_41689[2] = null);
(statearr_41661_41689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 18))
{var inst_41604 = (state_41633[13]);var inst_41613 = cljs.core.first.call(null,inst_41604);var state_41633__$1 = state_41633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41633__$1,20,out,inst_41613);
} else
{if((state_val_41634 === 19))
{var inst_41619 = (state_41633[2]);var state_41633__$1 = state_41633;var statearr_41662_41690 = state_41633__$1;(statearr_41662_41690[2] = inst_41619);
(statearr_41662_41690[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41634 === 20))
{var inst_41604 = (state_41633[13]);var inst_41615 = (state_41633[2]);var inst_41616 = cljs.core.next.call(null,inst_41604);var inst_41590 = inst_41616;var inst_41591 = null;var inst_41592 = 0;var inst_41593 = 0;var state_41633__$1 = (function (){var statearr_41663 = state_41633;(statearr_41663[8] = inst_41590);
(statearr_41663[9] = inst_41591);
(statearr_41663[10] = inst_41593);
(statearr_41663[15] = inst_41615);
(statearr_41663[11] = inst_41592);
return statearr_41663;
})();var statearr_41664_41691 = state_41633__$1;(statearr_41664_41691[2] = null);
(statearr_41664_41691[1] = 8);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_41668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41668[0] = state_machine__18195__auto__);
(statearr_41668[1] = 1);
return statearr_41668;
});
var state_machine__18195__auto____1 = (function (state_41633){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_41633);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e41669){if((e41669 instanceof Object))
{var ex__18198__auto__ = e41669;var statearr_41670_41692 = state_41633;(statearr_41670_41692[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41693 = state_41633;
state_41633 = G__41693;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_41633){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_41633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_41671 = f__18265__auto__.call(null);(statearr_41671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto__);
return statearr_41671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return c__18264__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18264__auto___41774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_41753){var state_val_41754 = (state_41753[1]);if((state_val_41754 === 1))
{var state_41753__$1 = state_41753;var statearr_41755_41775 = state_41753__$1;(statearr_41755_41775[2] = null);
(statearr_41755_41775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 2))
{var state_41753__$1 = state_41753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41753__$1,4,from);
} else
{if((state_val_41754 === 3))
{var inst_41751 = (state_41753[2]);var state_41753__$1 = state_41753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41753__$1,inst_41751);
} else
{if((state_val_41754 === 4))
{var inst_41736 = (state_41753[7]);var inst_41736__$1 = (state_41753[2]);var inst_41737 = (inst_41736__$1 == null);var state_41753__$1 = (function (){var statearr_41756 = state_41753;(statearr_41756[7] = inst_41736__$1);
return statearr_41756;
})();if(cljs.core.truth_(inst_41737))
{var statearr_41757_41776 = state_41753__$1;(statearr_41757_41776[1] = 5);
} else
{var statearr_41758_41777 = state_41753__$1;(statearr_41758_41777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 5))
{var state_41753__$1 = state_41753;if(cljs.core.truth_(close_QMARK_))
{var statearr_41759_41778 = state_41753__$1;(statearr_41759_41778[1] = 8);
} else
{var statearr_41760_41779 = state_41753__$1;(statearr_41760_41779[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 6))
{var inst_41736 = (state_41753[7]);var state_41753__$1 = state_41753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41753__$1,11,to,inst_41736);
} else
{if((state_val_41754 === 7))
{var inst_41749 = (state_41753[2]);var state_41753__$1 = state_41753;var statearr_41761_41780 = state_41753__$1;(statearr_41761_41780[2] = inst_41749);
(statearr_41761_41780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 8))
{var inst_41740 = cljs.core.async.close_BANG_.call(null,to);var state_41753__$1 = state_41753;var statearr_41762_41781 = state_41753__$1;(statearr_41762_41781[2] = inst_41740);
(statearr_41762_41781[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 9))
{var state_41753__$1 = state_41753;var statearr_41763_41782 = state_41753__$1;(statearr_41763_41782[2] = null);
(statearr_41763_41782[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 10))
{var inst_41743 = (state_41753[2]);var state_41753__$1 = state_41753;var statearr_41764_41783 = state_41753__$1;(statearr_41764_41783[2] = inst_41743);
(statearr_41764_41783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41754 === 11))
{var inst_41746 = (state_41753[2]);var state_41753__$1 = (function (){var statearr_41765 = state_41753;(statearr_41765[8] = inst_41746);
return statearr_41765;
})();var statearr_41766_41784 = state_41753__$1;(statearr_41766_41784[2] = null);
(statearr_41766_41784[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_41770 = [null,null,null,null,null,null,null,null,null];(statearr_41770[0] = state_machine__18195__auto__);
(statearr_41770[1] = 1);
return statearr_41770;
});
var state_machine__18195__auto____1 = (function (state_41753){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_41753);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e41771){if((e41771 instanceof Object))
{var ex__18198__auto__ = e41771;var statearr_41772_41785 = state_41753;(statearr_41772_41785[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41786 = state_41753;
state_41753 = G__41786;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_41753){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_41753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_41773 = f__18265__auto__.call(null);(statearr_41773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___41774);
return statearr_41773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18264__auto___41873 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_41851){var state_val_41852 = (state_41851[1]);if((state_val_41852 === 1))
{var state_41851__$1 = state_41851;var statearr_41853_41874 = state_41851__$1;(statearr_41853_41874[2] = null);
(statearr_41853_41874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 2))
{var state_41851__$1 = state_41851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41851__$1,4,ch);
} else
{if((state_val_41852 === 3))
{var inst_41849 = (state_41851[2]);var state_41851__$1 = state_41851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41851__$1,inst_41849);
} else
{if((state_val_41852 === 4))
{var inst_41832 = (state_41851[7]);var inst_41832__$1 = (state_41851[2]);var inst_41833 = (inst_41832__$1 == null);var state_41851__$1 = (function (){var statearr_41854 = state_41851;(statearr_41854[7] = inst_41832__$1);
return statearr_41854;
})();if(cljs.core.truth_(inst_41833))
{var statearr_41855_41875 = state_41851__$1;(statearr_41855_41875[1] = 5);
} else
{var statearr_41856_41876 = state_41851__$1;(statearr_41856_41876[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 5))
{var inst_41835 = cljs.core.async.close_BANG_.call(null,tc);var inst_41836 = cljs.core.async.close_BANG_.call(null,fc);var state_41851__$1 = (function (){var statearr_41857 = state_41851;(statearr_41857[8] = inst_41835);
return statearr_41857;
})();var statearr_41858_41877 = state_41851__$1;(statearr_41858_41877[2] = inst_41836);
(statearr_41858_41877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 6))
{var inst_41832 = (state_41851[7]);var inst_41838 = p.call(null,inst_41832);var state_41851__$1 = state_41851;if(cljs.core.truth_(inst_41838))
{var statearr_41859_41878 = state_41851__$1;(statearr_41859_41878[1] = 9);
} else
{var statearr_41860_41879 = state_41851__$1;(statearr_41860_41879[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 7))
{var inst_41847 = (state_41851[2]);var state_41851__$1 = state_41851;var statearr_41861_41880 = state_41851__$1;(statearr_41861_41880[2] = inst_41847);
(statearr_41861_41880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 8))
{var inst_41844 = (state_41851[2]);var state_41851__$1 = (function (){var statearr_41862 = state_41851;(statearr_41862[9] = inst_41844);
return statearr_41862;
})();var statearr_41863_41881 = state_41851__$1;(statearr_41863_41881[2] = null);
(statearr_41863_41881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 9))
{var state_41851__$1 = state_41851;var statearr_41864_41882 = state_41851__$1;(statearr_41864_41882[2] = tc);
(statearr_41864_41882[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 10))
{var state_41851__$1 = state_41851;var statearr_41865_41883 = state_41851__$1;(statearr_41865_41883[2] = fc);
(statearr_41865_41883[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41852 === 11))
{var inst_41832 = (state_41851[7]);var inst_41842 = (state_41851[2]);var state_41851__$1 = state_41851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41851__$1,8,inst_41842,inst_41832);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_41869 = [null,null,null,null,null,null,null,null,null,null];(statearr_41869[0] = state_machine__18195__auto__);
(statearr_41869[1] = 1);
return statearr_41869;
});
var state_machine__18195__auto____1 = (function (state_41851){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_41851);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e41870){if((e41870 instanceof Object))
{var ex__18198__auto__ = e41870;var statearr_41871_41884 = state_41851;(statearr_41871_41884[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41885 = state_41851;
state_41851 = G__41885;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_41851){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_41851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_41872 = f__18265__auto__.call(null);(statearr_41872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___41873);
return statearr_41872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18264__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_41932){var state_val_41933 = (state_41932[1]);if((state_val_41933 === 7))
{var inst_41928 = (state_41932[2]);var state_41932__$1 = state_41932;var statearr_41934_41950 = state_41932__$1;(statearr_41934_41950[2] = inst_41928);
(statearr_41934_41950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41933 === 6))
{var inst_41918 = (state_41932[7]);var inst_41921 = (state_41932[8]);var inst_41925 = f.call(null,inst_41918,inst_41921);var inst_41918__$1 = inst_41925;var state_41932__$1 = (function (){var statearr_41935 = state_41932;(statearr_41935[7] = inst_41918__$1);
return statearr_41935;
})();var statearr_41936_41951 = state_41932__$1;(statearr_41936_41951[2] = null);
(statearr_41936_41951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41933 === 5))
{var inst_41918 = (state_41932[7]);var state_41932__$1 = state_41932;var statearr_41937_41952 = state_41932__$1;(statearr_41937_41952[2] = inst_41918);
(statearr_41937_41952[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41933 === 4))
{var inst_41921 = (state_41932[8]);var inst_41921__$1 = (state_41932[2]);var inst_41922 = (inst_41921__$1 == null);var state_41932__$1 = (function (){var statearr_41938 = state_41932;(statearr_41938[8] = inst_41921__$1);
return statearr_41938;
})();if(cljs.core.truth_(inst_41922))
{var statearr_41939_41953 = state_41932__$1;(statearr_41939_41953[1] = 5);
} else
{var statearr_41940_41954 = state_41932__$1;(statearr_41940_41954[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41933 === 3))
{var inst_41930 = (state_41932[2]);var state_41932__$1 = state_41932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41932__$1,inst_41930);
} else
{if((state_val_41933 === 2))
{var state_41932__$1 = state_41932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41932__$1,4,ch);
} else
{if((state_val_41933 === 1))
{var inst_41918 = init;var state_41932__$1 = (function (){var statearr_41941 = state_41932;(statearr_41941[7] = inst_41918);
return statearr_41941;
})();var statearr_41942_41955 = state_41932__$1;(statearr_41942_41955[2] = null);
(statearr_41942_41955[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_41946 = [null,null,null,null,null,null,null,null,null];(statearr_41946[0] = state_machine__18195__auto__);
(statearr_41946[1] = 1);
return statearr_41946;
});
var state_machine__18195__auto____1 = (function (state_41932){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_41932);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e41947){if((e41947 instanceof Object))
{var ex__18198__auto__ = e41947;var statearr_41948_41956 = state_41932;(statearr_41948_41956[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41957 = state_41932;
state_41932 = G__41957;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_41932){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_41932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_41949 = f__18265__auto__.call(null);(statearr_41949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto__);
return statearr_41949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return c__18264__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18264__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_42019){var state_val_42020 = (state_42019[1]);if((state_val_42020 === 1))
{var inst_41999 = cljs.core.seq.call(null,coll);var inst_42000 = inst_41999;var state_42019__$1 = (function (){var statearr_42021 = state_42019;(statearr_42021[7] = inst_42000);
return statearr_42021;
})();var statearr_42022_42040 = state_42019__$1;(statearr_42022_42040[2] = null);
(statearr_42022_42040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 2))
{var inst_42000 = (state_42019[7]);var state_42019__$1 = state_42019;if(cljs.core.truth_(inst_42000))
{var statearr_42023_42041 = state_42019__$1;(statearr_42023_42041[1] = 4);
} else
{var statearr_42024_42042 = state_42019__$1;(statearr_42024_42042[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 3))
{var inst_42017 = (state_42019[2]);var state_42019__$1 = state_42019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42019__$1,inst_42017);
} else
{if((state_val_42020 === 4))
{var inst_42000 = (state_42019[7]);var inst_42003 = cljs.core.first.call(null,inst_42000);var state_42019__$1 = state_42019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42019__$1,7,ch,inst_42003);
} else
{if((state_val_42020 === 5))
{var state_42019__$1 = state_42019;if(cljs.core.truth_(close_QMARK_))
{var statearr_42025_42043 = state_42019__$1;(statearr_42025_42043[1] = 8);
} else
{var statearr_42026_42044 = state_42019__$1;(statearr_42026_42044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 6))
{var inst_42015 = (state_42019[2]);var state_42019__$1 = state_42019;var statearr_42027_42045 = state_42019__$1;(statearr_42027_42045[2] = inst_42015);
(statearr_42027_42045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 7))
{var inst_42000 = (state_42019[7]);var inst_42005 = (state_42019[2]);var inst_42006 = cljs.core.next.call(null,inst_42000);var inst_42000__$1 = inst_42006;var state_42019__$1 = (function (){var statearr_42028 = state_42019;(statearr_42028[8] = inst_42005);
(statearr_42028[7] = inst_42000__$1);
return statearr_42028;
})();var statearr_42029_42046 = state_42019__$1;(statearr_42029_42046[2] = null);
(statearr_42029_42046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 8))
{var inst_42010 = cljs.core.async.close_BANG_.call(null,ch);var state_42019__$1 = state_42019;var statearr_42030_42047 = state_42019__$1;(statearr_42030_42047[2] = inst_42010);
(statearr_42030_42047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 9))
{var state_42019__$1 = state_42019;var statearr_42031_42048 = state_42019__$1;(statearr_42031_42048[2] = null);
(statearr_42031_42048[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42020 === 10))
{var inst_42013 = (state_42019[2]);var state_42019__$1 = state_42019;var statearr_42032_42049 = state_42019__$1;(statearr_42032_42049[2] = inst_42013);
(statearr_42032_42049[1] = 6);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_42036 = [null,null,null,null,null,null,null,null,null];(statearr_42036[0] = state_machine__18195__auto__);
(statearr_42036[1] = 1);
return statearr_42036;
});
var state_machine__18195__auto____1 = (function (state_42019){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_42019);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e42037){if((e42037 instanceof Object))
{var ex__18198__auto__ = e42037;var statearr_42038_42050 = state_42019;(statearr_42038_42050[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42019);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42051 = state_42019;
state_42019 = G__42051;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_42019){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_42019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_42039 = f__18265__auto__.call(null);(statearr_42039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto__);
return statearr_42039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return c__18264__auto__;
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
cljs.core.async.Mux = (function (){var obj42053 = {};return obj42053;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13942__auto__ = _;if(and__13942__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13942__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14562__auto__ = (((_ == null))?null:_);return (function (){var or__13954__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj42055 = {};return obj42055;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t42279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42279 = (function (cs,ch,mult,meta42280){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta42280 = meta42280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42279.cljs$lang$type = true;
cljs.core.async.t42279.cljs$lang$ctorStr = "cljs.core.async/t42279";
cljs.core.async.t42279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t42279");
});})(cs))
;
cljs.core.async.t42279.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t42279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t42279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t42279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t42279.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t42279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42281){var self__ = this;
var _42281__$1 = this;return self__.meta42280;
});})(cs))
;
cljs.core.async.t42279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42281,meta42280__$1){var self__ = this;
var _42281__$1 = this;return (new cljs.core.async.t42279(self__.cs,self__.ch,self__.mult,meta42280__$1));
});})(cs))
;
cljs.core.async.__GT_t42279 = ((function (cs){
return (function __GT_t42279(cs__$1,ch__$1,mult__$1,meta42280){return (new cljs.core.async.t42279(cs__$1,ch__$1,mult__$1,meta42280));
});})(cs))
;
}
return (new cljs.core.async.t42279(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18264__auto___42502 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_42416){var state_val_42417 = (state_42416[1]);if((state_val_42417 === 32))
{var inst_42360 = (state_42416[7]);var inst_42284 = (state_42416[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42416,31,Object,null,30);var inst_42367 = cljs.core.async.put_BANG_.call(null,inst_42360,inst_42284,done);var state_42416__$1 = state_42416;var statearr_42418_42503 = state_42416__$1;(statearr_42418_42503[2] = inst_42367);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42416__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 1))
{var state_42416__$1 = state_42416;var statearr_42419_42504 = state_42416__$1;(statearr_42419_42504[2] = null);
(statearr_42419_42504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 33))
{var inst_42373 = (state_42416[9]);var inst_42375 = cljs.core.chunked_seq_QMARK_.call(null,inst_42373);var state_42416__$1 = state_42416;if(inst_42375)
{var statearr_42420_42505 = state_42416__$1;(statearr_42420_42505[1] = 36);
} else
{var statearr_42421_42506 = state_42416__$1;(statearr_42421_42506[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 2))
{var state_42416__$1 = state_42416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42416__$1,4,ch);
} else
{if((state_val_42417 === 34))
{var state_42416__$1 = state_42416;var statearr_42422_42507 = state_42416__$1;(statearr_42422_42507[2] = null);
(statearr_42422_42507[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 3))
{var inst_42414 = (state_42416[2]);var state_42416__$1 = state_42416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42416__$1,inst_42414);
} else
{if((state_val_42417 === 35))
{var inst_42398 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42423_42508 = state_42416__$1;(statearr_42423_42508[2] = inst_42398);
(statearr_42423_42508[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 4))
{var inst_42284 = (state_42416[8]);var inst_42284__$1 = (state_42416[2]);var inst_42285 = (inst_42284__$1 == null);var state_42416__$1 = (function (){var statearr_42424 = state_42416;(statearr_42424[8] = inst_42284__$1);
return statearr_42424;
})();if(cljs.core.truth_(inst_42285))
{var statearr_42425_42509 = state_42416__$1;(statearr_42425_42509[1] = 5);
} else
{var statearr_42426_42510 = state_42416__$1;(statearr_42426_42510[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 36))
{var inst_42373 = (state_42416[9]);var inst_42377 = cljs.core.chunk_first.call(null,inst_42373);var inst_42378 = cljs.core.chunk_rest.call(null,inst_42373);var inst_42379 = cljs.core.count.call(null,inst_42377);var inst_42352 = inst_42378;var inst_42353 = inst_42377;var inst_42354 = inst_42379;var inst_42355 = 0;var state_42416__$1 = (function (){var statearr_42427 = state_42416;(statearr_42427[10] = inst_42354);
(statearr_42427[11] = inst_42353);
(statearr_42427[12] = inst_42352);
(statearr_42427[13] = inst_42355);
return statearr_42427;
})();var statearr_42428_42511 = state_42416__$1;(statearr_42428_42511[2] = null);
(statearr_42428_42511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 5))
{var inst_42291 = cljs.core.deref.call(null,cs);var inst_42292 = cljs.core.seq.call(null,inst_42291);var inst_42293 = inst_42292;var inst_42294 = null;var inst_42295 = 0;var inst_42296 = 0;var state_42416__$1 = (function (){var statearr_42429 = state_42416;(statearr_42429[14] = inst_42296);
(statearr_42429[15] = inst_42294);
(statearr_42429[16] = inst_42295);
(statearr_42429[17] = inst_42293);
return statearr_42429;
})();var statearr_42430_42512 = state_42416__$1;(statearr_42430_42512[2] = null);
(statearr_42430_42512[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 37))
{var inst_42373 = (state_42416[9]);var inst_42382 = cljs.core.first.call(null,inst_42373);var state_42416__$1 = (function (){var statearr_42431 = state_42416;(statearr_42431[18] = inst_42382);
return statearr_42431;
})();var statearr_42432_42513 = state_42416__$1;(statearr_42432_42513[2] = null);
(statearr_42432_42513[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 6))
{var inst_42344 = (state_42416[19]);var inst_42343 = cljs.core.deref.call(null,cs);var inst_42344__$1 = cljs.core.keys.call(null,inst_42343);var inst_42345 = cljs.core.count.call(null,inst_42344__$1);var inst_42346 = cljs.core.reset_BANG_.call(null,dctr,inst_42345);var inst_42351 = cljs.core.seq.call(null,inst_42344__$1);var inst_42352 = inst_42351;var inst_42353 = null;var inst_42354 = 0;var inst_42355 = 0;var state_42416__$1 = (function (){var statearr_42433 = state_42416;(statearr_42433[10] = inst_42354);
(statearr_42433[19] = inst_42344__$1);
(statearr_42433[11] = inst_42353);
(statearr_42433[20] = inst_42346);
(statearr_42433[12] = inst_42352);
(statearr_42433[13] = inst_42355);
return statearr_42433;
})();var statearr_42434_42514 = state_42416__$1;(statearr_42434_42514[2] = null);
(statearr_42434_42514[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 38))
{var inst_42395 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42435_42515 = state_42416__$1;(statearr_42435_42515[2] = inst_42395);
(statearr_42435_42515[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 7))
{var inst_42412 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42436_42516 = state_42416__$1;(statearr_42436_42516[2] = inst_42412);
(statearr_42436_42516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 39))
{var inst_42373 = (state_42416[9]);var inst_42391 = (state_42416[2]);var inst_42392 = cljs.core.next.call(null,inst_42373);var inst_42352 = inst_42392;var inst_42353 = null;var inst_42354 = 0;var inst_42355 = 0;var state_42416__$1 = (function (){var statearr_42437 = state_42416;(statearr_42437[10] = inst_42354);
(statearr_42437[11] = inst_42353);
(statearr_42437[12] = inst_42352);
(statearr_42437[21] = inst_42391);
(statearr_42437[13] = inst_42355);
return statearr_42437;
})();var statearr_42438_42517 = state_42416__$1;(statearr_42438_42517[2] = null);
(statearr_42438_42517[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 8))
{var inst_42296 = (state_42416[14]);var inst_42295 = (state_42416[16]);var inst_42298 = (inst_42296 < inst_42295);var inst_42299 = inst_42298;var state_42416__$1 = state_42416;if(cljs.core.truth_(inst_42299))
{var statearr_42439_42518 = state_42416__$1;(statearr_42439_42518[1] = 10);
} else
{var statearr_42440_42519 = state_42416__$1;(statearr_42440_42519[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 40))
{var inst_42382 = (state_42416[18]);var inst_42383 = (state_42416[2]);var inst_42384 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_42385 = cljs.core.async.untap_STAR_.call(null,m,inst_42382);var state_42416__$1 = (function (){var statearr_42441 = state_42416;(statearr_42441[22] = inst_42383);
(statearr_42441[23] = inst_42384);
return statearr_42441;
})();var statearr_42442_42520 = state_42416__$1;(statearr_42442_42520[2] = inst_42385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42416__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 9))
{var inst_42341 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42443_42521 = state_42416__$1;(statearr_42443_42521[2] = inst_42341);
(statearr_42443_42521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 41))
{var inst_42382 = (state_42416[18]);var inst_42284 = (state_42416[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42416,40,Object,null,39);var inst_42389 = cljs.core.async.put_BANG_.call(null,inst_42382,inst_42284,done);var state_42416__$1 = state_42416;var statearr_42444_42522 = state_42416__$1;(statearr_42444_42522[2] = inst_42389);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42416__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 10))
{var inst_42296 = (state_42416[14]);var inst_42294 = (state_42416[15]);var inst_42302 = cljs.core._nth.call(null,inst_42294,inst_42296);var inst_42303 = cljs.core.nth.call(null,inst_42302,0,null);var inst_42304 = cljs.core.nth.call(null,inst_42302,1,null);var state_42416__$1 = (function (){var statearr_42445 = state_42416;(statearr_42445[24] = inst_42303);
return statearr_42445;
})();if(cljs.core.truth_(inst_42304))
{var statearr_42446_42523 = state_42416__$1;(statearr_42446_42523[1] = 13);
} else
{var statearr_42447_42524 = state_42416__$1;(statearr_42447_42524[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 42))
{var state_42416__$1 = state_42416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42416__$1,45,dchan);
} else
{if((state_val_42417 === 11))
{var inst_42293 = (state_42416[17]);var inst_42313 = (state_42416[25]);var inst_42313__$1 = cljs.core.seq.call(null,inst_42293);var state_42416__$1 = (function (){var statearr_42448 = state_42416;(statearr_42448[25] = inst_42313__$1);
return statearr_42448;
})();if(inst_42313__$1)
{var statearr_42449_42525 = state_42416__$1;(statearr_42449_42525[1] = 16);
} else
{var statearr_42450_42526 = state_42416__$1;(statearr_42450_42526[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 43))
{var state_42416__$1 = state_42416;var statearr_42451_42527 = state_42416__$1;(statearr_42451_42527[2] = null);
(statearr_42451_42527[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 12))
{var inst_42339 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42452_42528 = state_42416__$1;(statearr_42452_42528[2] = inst_42339);
(statearr_42452_42528[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 44))
{var inst_42409 = (state_42416[2]);var state_42416__$1 = (function (){var statearr_42453 = state_42416;(statearr_42453[26] = inst_42409);
return statearr_42453;
})();var statearr_42454_42529 = state_42416__$1;(statearr_42454_42529[2] = null);
(statearr_42454_42529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 13))
{var inst_42303 = (state_42416[24]);var inst_42306 = cljs.core.async.close_BANG_.call(null,inst_42303);var state_42416__$1 = state_42416;var statearr_42455_42530 = state_42416__$1;(statearr_42455_42530[2] = inst_42306);
(statearr_42455_42530[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 45))
{var inst_42406 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42459_42531 = state_42416__$1;(statearr_42459_42531[2] = inst_42406);
(statearr_42459_42531[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 14))
{var state_42416__$1 = state_42416;var statearr_42460_42532 = state_42416__$1;(statearr_42460_42532[2] = null);
(statearr_42460_42532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 15))
{var inst_42296 = (state_42416[14]);var inst_42294 = (state_42416[15]);var inst_42295 = (state_42416[16]);var inst_42293 = (state_42416[17]);var inst_42309 = (state_42416[2]);var inst_42310 = (inst_42296 + 1);var tmp42456 = inst_42294;var tmp42457 = inst_42295;var tmp42458 = inst_42293;var inst_42293__$1 = tmp42458;var inst_42294__$1 = tmp42456;var inst_42295__$1 = tmp42457;var inst_42296__$1 = inst_42310;var state_42416__$1 = (function (){var statearr_42461 = state_42416;(statearr_42461[14] = inst_42296__$1);
(statearr_42461[15] = inst_42294__$1);
(statearr_42461[16] = inst_42295__$1);
(statearr_42461[17] = inst_42293__$1);
(statearr_42461[27] = inst_42309);
return statearr_42461;
})();var statearr_42462_42533 = state_42416__$1;(statearr_42462_42533[2] = null);
(statearr_42462_42533[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 16))
{var inst_42313 = (state_42416[25]);var inst_42315 = cljs.core.chunked_seq_QMARK_.call(null,inst_42313);var state_42416__$1 = state_42416;if(inst_42315)
{var statearr_42463_42534 = state_42416__$1;(statearr_42463_42534[1] = 19);
} else
{var statearr_42464_42535 = state_42416__$1;(statearr_42464_42535[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 17))
{var state_42416__$1 = state_42416;var statearr_42465_42536 = state_42416__$1;(statearr_42465_42536[2] = null);
(statearr_42465_42536[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 18))
{var inst_42337 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42466_42537 = state_42416__$1;(statearr_42466_42537[2] = inst_42337);
(statearr_42466_42537[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 19))
{var inst_42313 = (state_42416[25]);var inst_42317 = cljs.core.chunk_first.call(null,inst_42313);var inst_42318 = cljs.core.chunk_rest.call(null,inst_42313);var inst_42319 = cljs.core.count.call(null,inst_42317);var inst_42293 = inst_42318;var inst_42294 = inst_42317;var inst_42295 = inst_42319;var inst_42296 = 0;var state_42416__$1 = (function (){var statearr_42467 = state_42416;(statearr_42467[14] = inst_42296);
(statearr_42467[15] = inst_42294);
(statearr_42467[16] = inst_42295);
(statearr_42467[17] = inst_42293);
return statearr_42467;
})();var statearr_42468_42538 = state_42416__$1;(statearr_42468_42538[2] = null);
(statearr_42468_42538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 20))
{var inst_42313 = (state_42416[25]);var inst_42323 = cljs.core.first.call(null,inst_42313);var inst_42324 = cljs.core.nth.call(null,inst_42323,0,null);var inst_42325 = cljs.core.nth.call(null,inst_42323,1,null);var state_42416__$1 = (function (){var statearr_42469 = state_42416;(statearr_42469[28] = inst_42324);
return statearr_42469;
})();if(cljs.core.truth_(inst_42325))
{var statearr_42470_42539 = state_42416__$1;(statearr_42470_42539[1] = 22);
} else
{var statearr_42471_42540 = state_42416__$1;(statearr_42471_42540[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 21))
{var inst_42334 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42472_42541 = state_42416__$1;(statearr_42472_42541[2] = inst_42334);
(statearr_42472_42541[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 22))
{var inst_42324 = (state_42416[28]);var inst_42327 = cljs.core.async.close_BANG_.call(null,inst_42324);var state_42416__$1 = state_42416;var statearr_42473_42542 = state_42416__$1;(statearr_42473_42542[2] = inst_42327);
(statearr_42473_42542[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 23))
{var state_42416__$1 = state_42416;var statearr_42474_42543 = state_42416__$1;(statearr_42474_42543[2] = null);
(statearr_42474_42543[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 24))
{var inst_42313 = (state_42416[25]);var inst_42330 = (state_42416[2]);var inst_42331 = cljs.core.next.call(null,inst_42313);var inst_42293 = inst_42331;var inst_42294 = null;var inst_42295 = 0;var inst_42296 = 0;var state_42416__$1 = (function (){var statearr_42475 = state_42416;(statearr_42475[29] = inst_42330);
(statearr_42475[14] = inst_42296);
(statearr_42475[15] = inst_42294);
(statearr_42475[16] = inst_42295);
(statearr_42475[17] = inst_42293);
return statearr_42475;
})();var statearr_42476_42544 = state_42416__$1;(statearr_42476_42544[2] = null);
(statearr_42476_42544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 25))
{var inst_42354 = (state_42416[10]);var inst_42355 = (state_42416[13]);var inst_42357 = (inst_42355 < inst_42354);var inst_42358 = inst_42357;var state_42416__$1 = state_42416;if(cljs.core.truth_(inst_42358))
{var statearr_42477_42545 = state_42416__$1;(statearr_42477_42545[1] = 27);
} else
{var statearr_42478_42546 = state_42416__$1;(statearr_42478_42546[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 26))
{var inst_42344 = (state_42416[19]);var inst_42402 = (state_42416[2]);var inst_42403 = cljs.core.seq.call(null,inst_42344);var state_42416__$1 = (function (){var statearr_42479 = state_42416;(statearr_42479[30] = inst_42402);
return statearr_42479;
})();if(inst_42403)
{var statearr_42480_42547 = state_42416__$1;(statearr_42480_42547[1] = 42);
} else
{var statearr_42481_42548 = state_42416__$1;(statearr_42481_42548[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 27))
{var inst_42353 = (state_42416[11]);var inst_42355 = (state_42416[13]);var inst_42360 = cljs.core._nth.call(null,inst_42353,inst_42355);var state_42416__$1 = (function (){var statearr_42482 = state_42416;(statearr_42482[7] = inst_42360);
return statearr_42482;
})();var statearr_42483_42549 = state_42416__$1;(statearr_42483_42549[2] = null);
(statearr_42483_42549[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 28))
{var inst_42352 = (state_42416[12]);var inst_42373 = (state_42416[9]);var inst_42373__$1 = cljs.core.seq.call(null,inst_42352);var state_42416__$1 = (function (){var statearr_42487 = state_42416;(statearr_42487[9] = inst_42373__$1);
return statearr_42487;
})();if(inst_42373__$1)
{var statearr_42488_42550 = state_42416__$1;(statearr_42488_42550[1] = 33);
} else
{var statearr_42489_42551 = state_42416__$1;(statearr_42489_42551[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 29))
{var inst_42400 = (state_42416[2]);var state_42416__$1 = state_42416;var statearr_42490_42552 = state_42416__$1;(statearr_42490_42552[2] = inst_42400);
(statearr_42490_42552[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 30))
{var inst_42354 = (state_42416[10]);var inst_42353 = (state_42416[11]);var inst_42352 = (state_42416[12]);var inst_42355 = (state_42416[13]);var inst_42369 = (state_42416[2]);var inst_42370 = (inst_42355 + 1);var tmp42484 = inst_42354;var tmp42485 = inst_42353;var tmp42486 = inst_42352;var inst_42352__$1 = tmp42486;var inst_42353__$1 = tmp42485;var inst_42354__$1 = tmp42484;var inst_42355__$1 = inst_42370;var state_42416__$1 = (function (){var statearr_42491 = state_42416;(statearr_42491[10] = inst_42354__$1);
(statearr_42491[11] = inst_42353__$1);
(statearr_42491[12] = inst_42352__$1);
(statearr_42491[31] = inst_42369);
(statearr_42491[13] = inst_42355__$1);
return statearr_42491;
})();var statearr_42492_42553 = state_42416__$1;(statearr_42492_42553[2] = null);
(statearr_42492_42553[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42417 === 31))
{var inst_42360 = (state_42416[7]);var inst_42361 = (state_42416[2]);var inst_42362 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_42363 = cljs.core.async.untap_STAR_.call(null,m,inst_42360);var state_42416__$1 = (function (){var statearr_42493 = state_42416;(statearr_42493[32] = inst_42361);
(statearr_42493[33] = inst_42362);
return statearr_42493;
})();var statearr_42494_42554 = state_42416__$1;(statearr_42494_42554[2] = inst_42363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42416__$1);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_42498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42498[0] = state_machine__18195__auto__);
(statearr_42498[1] = 1);
return statearr_42498;
});
var state_machine__18195__auto____1 = (function (state_42416){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_42416);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e42499){if((e42499 instanceof Object))
{var ex__18198__auto__ = e42499;var statearr_42500_42555 = state_42416;(statearr_42500_42555[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42556 = state_42416;
state_42416 = G__42556;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_42416){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_42416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_42501 = f__18265__auto__.call(null);(statearr_42501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___42502);
return statearr_42501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
cljs.core.async.Mix = (function (){var obj42558 = {};return obj42558;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13942__auto__ = m;if(and__13942__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14562__auto__ = (((m == null))?null:m);return (function (){var or__13954__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t42668 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42668 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta42669){
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
this.meta42669 = meta42669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42668.cljs$lang$type = true;
cljs.core.async.t42668.cljs$lang$ctorStr = "cljs.core.async/t42668";
cljs.core.async.t42668.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t42668");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t42668.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42670){var self__ = this;
var _42670__$1 = this;return self__.meta42669;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42670,meta42669__$1){var self__ = this;
var _42670__$1 = this;return (new cljs.core.async.t42668(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta42669__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t42668 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t42668(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta42669){return (new cljs.core.async.t42668(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta42669));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t42668(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18264__auto___42777 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_42735){var state_val_42736 = (state_42735[1]);if((state_val_42736 === 1))
{var inst_42674 = (state_42735[7]);var inst_42674__$1 = calc_state.call(null);var inst_42675 = cljs.core.seq_QMARK_.call(null,inst_42674__$1);var state_42735__$1 = (function (){var statearr_42737 = state_42735;(statearr_42737[7] = inst_42674__$1);
return statearr_42737;
})();if(inst_42675)
{var statearr_42738_42778 = state_42735__$1;(statearr_42738_42778[1] = 2);
} else
{var statearr_42739_42779 = state_42735__$1;(statearr_42739_42779[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 2))
{var inst_42674 = (state_42735[7]);var inst_42677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42674);var state_42735__$1 = state_42735;var statearr_42740_42780 = state_42735__$1;(statearr_42740_42780[2] = inst_42677);
(statearr_42740_42780[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 3))
{var inst_42674 = (state_42735[7]);var state_42735__$1 = state_42735;var statearr_42741_42781 = state_42735__$1;(statearr_42741_42781[2] = inst_42674);
(statearr_42741_42781[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 4))
{var inst_42674 = (state_42735[7]);var inst_42680 = (state_42735[2]);var inst_42681 = cljs.core.get.call(null,inst_42680,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_42682 = cljs.core.get.call(null,inst_42680,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_42683 = cljs.core.get.call(null,inst_42680,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_42684 = inst_42674;var state_42735__$1 = (function (){var statearr_42742 = state_42735;(statearr_42742[8] = inst_42684);
(statearr_42742[9] = inst_42683);
(statearr_42742[10] = inst_42682);
(statearr_42742[11] = inst_42681);
return statearr_42742;
})();var statearr_42743_42782 = state_42735__$1;(statearr_42743_42782[2] = null);
(statearr_42743_42782[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 5))
{var inst_42684 = (state_42735[8]);var inst_42687 = cljs.core.seq_QMARK_.call(null,inst_42684);var state_42735__$1 = state_42735;if(inst_42687)
{var statearr_42744_42783 = state_42735__$1;(statearr_42744_42783[1] = 7);
} else
{var statearr_42745_42784 = state_42735__$1;(statearr_42745_42784[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 6))
{var inst_42733 = (state_42735[2]);var state_42735__$1 = state_42735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42735__$1,inst_42733);
} else
{if((state_val_42736 === 7))
{var inst_42684 = (state_42735[8]);var inst_42689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42684);var state_42735__$1 = state_42735;var statearr_42746_42785 = state_42735__$1;(statearr_42746_42785[2] = inst_42689);
(statearr_42746_42785[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 8))
{var inst_42684 = (state_42735[8]);var state_42735__$1 = state_42735;var statearr_42747_42786 = state_42735__$1;(statearr_42747_42786[2] = inst_42684);
(statearr_42747_42786[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 9))
{var inst_42692 = (state_42735[12]);var inst_42692__$1 = (state_42735[2]);var inst_42693 = cljs.core.get.call(null,inst_42692__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_42694 = cljs.core.get.call(null,inst_42692__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_42695 = cljs.core.get.call(null,inst_42692__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_42735__$1 = (function (){var statearr_42748 = state_42735;(statearr_42748[13] = inst_42695);
(statearr_42748[14] = inst_42694);
(statearr_42748[12] = inst_42692__$1);
return statearr_42748;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_42735__$1,10,inst_42693);
} else
{if((state_val_42736 === 10))
{var inst_42699 = (state_42735[15]);var inst_42700 = (state_42735[16]);var inst_42698 = (state_42735[2]);var inst_42699__$1 = cljs.core.nth.call(null,inst_42698,0,null);var inst_42700__$1 = cljs.core.nth.call(null,inst_42698,1,null);var inst_42701 = (inst_42699__$1 == null);var inst_42702 = cljs.core._EQ_.call(null,inst_42700__$1,change);var inst_42703 = (inst_42701) || (inst_42702);var state_42735__$1 = (function (){var statearr_42749 = state_42735;(statearr_42749[15] = inst_42699__$1);
(statearr_42749[16] = inst_42700__$1);
return statearr_42749;
})();if(cljs.core.truth_(inst_42703))
{var statearr_42750_42787 = state_42735__$1;(statearr_42750_42787[1] = 11);
} else
{var statearr_42751_42788 = state_42735__$1;(statearr_42751_42788[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 11))
{var inst_42699 = (state_42735[15]);var inst_42705 = (inst_42699 == null);var state_42735__$1 = state_42735;if(cljs.core.truth_(inst_42705))
{var statearr_42752_42789 = state_42735__$1;(statearr_42752_42789[1] = 14);
} else
{var statearr_42753_42790 = state_42735__$1;(statearr_42753_42790[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 12))
{var inst_42714 = (state_42735[17]);var inst_42695 = (state_42735[13]);var inst_42700 = (state_42735[16]);var inst_42714__$1 = inst_42695.call(null,inst_42700);var state_42735__$1 = (function (){var statearr_42754 = state_42735;(statearr_42754[17] = inst_42714__$1);
return statearr_42754;
})();if(cljs.core.truth_(inst_42714__$1))
{var statearr_42755_42791 = state_42735__$1;(statearr_42755_42791[1] = 17);
} else
{var statearr_42756_42792 = state_42735__$1;(statearr_42756_42792[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 13))
{var inst_42731 = (state_42735[2]);var state_42735__$1 = state_42735;var statearr_42757_42793 = state_42735__$1;(statearr_42757_42793[2] = inst_42731);
(statearr_42757_42793[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 14))
{var inst_42700 = (state_42735[16]);var inst_42707 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42700);var state_42735__$1 = state_42735;var statearr_42758_42794 = state_42735__$1;(statearr_42758_42794[2] = inst_42707);
(statearr_42758_42794[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 15))
{var state_42735__$1 = state_42735;var statearr_42759_42795 = state_42735__$1;(statearr_42759_42795[2] = null);
(statearr_42759_42795[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 16))
{var inst_42710 = (state_42735[2]);var inst_42711 = calc_state.call(null);var inst_42684 = inst_42711;var state_42735__$1 = (function (){var statearr_42760 = state_42735;(statearr_42760[8] = inst_42684);
(statearr_42760[18] = inst_42710);
return statearr_42760;
})();var statearr_42761_42796 = state_42735__$1;(statearr_42761_42796[2] = null);
(statearr_42761_42796[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 17))
{var inst_42714 = (state_42735[17]);var state_42735__$1 = state_42735;var statearr_42762_42797 = state_42735__$1;(statearr_42762_42797[2] = inst_42714);
(statearr_42762_42797[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 18))
{var inst_42695 = (state_42735[13]);var inst_42694 = (state_42735[14]);var inst_42700 = (state_42735[16]);var inst_42717 = cljs.core.empty_QMARK_.call(null,inst_42695);var inst_42718 = inst_42694.call(null,inst_42700);var inst_42719 = cljs.core.not.call(null,inst_42718);var inst_42720 = (inst_42717) && (inst_42719);var state_42735__$1 = state_42735;var statearr_42763_42798 = state_42735__$1;(statearr_42763_42798[2] = inst_42720);
(statearr_42763_42798[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 19))
{var inst_42722 = (state_42735[2]);var state_42735__$1 = state_42735;if(cljs.core.truth_(inst_42722))
{var statearr_42764_42799 = state_42735__$1;(statearr_42764_42799[1] = 20);
} else
{var statearr_42765_42800 = state_42735__$1;(statearr_42765_42800[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 20))
{var inst_42699 = (state_42735[15]);var state_42735__$1 = state_42735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42735__$1,23,out,inst_42699);
} else
{if((state_val_42736 === 21))
{var state_42735__$1 = state_42735;var statearr_42766_42801 = state_42735__$1;(statearr_42766_42801[2] = null);
(statearr_42766_42801[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 22))
{var inst_42692 = (state_42735[12]);var inst_42728 = (state_42735[2]);var inst_42684 = inst_42692;var state_42735__$1 = (function (){var statearr_42767 = state_42735;(statearr_42767[19] = inst_42728);
(statearr_42767[8] = inst_42684);
return statearr_42767;
})();var statearr_42768_42802 = state_42735__$1;(statearr_42768_42802[2] = null);
(statearr_42768_42802[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42736 === 23))
{var inst_42725 = (state_42735[2]);var state_42735__$1 = state_42735;var statearr_42769_42803 = state_42735__$1;(statearr_42769_42803[2] = inst_42725);
(statearr_42769_42803[1] = 22);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_42773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42773[0] = state_machine__18195__auto__);
(statearr_42773[1] = 1);
return statearr_42773;
});
var state_machine__18195__auto____1 = (function (state_42735){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_42735);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e42774){if((e42774 instanceof Object))
{var ex__18198__auto__ = e42774;var statearr_42775_42804 = state_42735;(statearr_42775_42804[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42805 = state_42735;
state_42735 = G__42805;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_42735){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_42735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_42776 = f__18265__auto__.call(null);(statearr_42776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___42777);
return statearr_42776;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
cljs.core.async.Pub = (function (){var obj42807 = {};return obj42807;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13942__auto__ = p;if(and__13942__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13942__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14562__auto__ = (((p == null))?null:p);return (function (){var or__13954__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13942__auto__ = p;if(and__13942__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13942__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14562__auto__ = (((p == null))?null:p);return (function (){var or__13954__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13942__auto__ = p;if(and__13942__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13942__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14562__auto__ = (((p == null))?null:p);return (function (){var or__13954__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13942__auto__ = p;if(and__13942__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13942__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14562__auto__ = (((p == null))?null:p);return (function (){var or__13954__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
return (function (topic){var or__13954__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13954__auto__,mults){
return (function (p1__42808_SHARP_){if(cljs.core.truth_(p1__42808_SHARP_.call(null,topic)))
{return p1__42808_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__42808_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13954__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42933 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42934){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42934 = meta42934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42933.cljs$lang$type = true;
cljs.core.async.t42933.cljs$lang$ctorStr = "cljs.core.async/t42933";
cljs.core.async.t42933.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"cljs.core.async/t42933");
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42935){var self__ = this;
var _42935__$1 = this;return self__.meta42934;
});})(mults,ensure_mult))
;
cljs.core.async.t42933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42935,meta42934__$1){var self__ = this;
var _42935__$1 = this;return (new cljs.core.async.t42933(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42934__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42933 = ((function (mults,ensure_mult){
return (function __GT_t42933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42934){return (new cljs.core.async.t42933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42934));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42933(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18264__auto___43057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43009){var state_val_43010 = (state_43009[1]);if((state_val_43010 === 1))
{var state_43009__$1 = state_43009;var statearr_43011_43058 = state_43009__$1;(statearr_43011_43058[2] = null);
(statearr_43011_43058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 2))
{var state_43009__$1 = state_43009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43009__$1,4,ch);
} else
{if((state_val_43010 === 3))
{var inst_43007 = (state_43009[2]);var state_43009__$1 = state_43009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43009__$1,inst_43007);
} else
{if((state_val_43010 === 4))
{var inst_42938 = (state_43009[7]);var inst_42938__$1 = (state_43009[2]);var inst_42939 = (inst_42938__$1 == null);var state_43009__$1 = (function (){var statearr_43012 = state_43009;(statearr_43012[7] = inst_42938__$1);
return statearr_43012;
})();if(cljs.core.truth_(inst_42939))
{var statearr_43013_43059 = state_43009__$1;(statearr_43013_43059[1] = 5);
} else
{var statearr_43014_43060 = state_43009__$1;(statearr_43014_43060[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 5))
{var inst_42945 = cljs.core.deref.call(null,mults);var inst_42946 = cljs.core.vals.call(null,inst_42945);var inst_42947 = cljs.core.seq.call(null,inst_42946);var inst_42948 = inst_42947;var inst_42949 = null;var inst_42950 = 0;var inst_42951 = 0;var state_43009__$1 = (function (){var statearr_43015 = state_43009;(statearr_43015[8] = inst_42948);
(statearr_43015[9] = inst_42950);
(statearr_43015[10] = inst_42949);
(statearr_43015[11] = inst_42951);
return statearr_43015;
})();var statearr_43016_43061 = state_43009__$1;(statearr_43016_43061[2] = null);
(statearr_43016_43061[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 6))
{var inst_42938 = (state_43009[7]);var inst_42986 = (state_43009[12]);var inst_42988 = (state_43009[13]);var inst_42986__$1 = topic_fn.call(null,inst_42938);var inst_42987 = cljs.core.deref.call(null,mults);var inst_42988__$1 = cljs.core.get.call(null,inst_42987,inst_42986__$1);var state_43009__$1 = (function (){var statearr_43017 = state_43009;(statearr_43017[12] = inst_42986__$1);
(statearr_43017[13] = inst_42988__$1);
return statearr_43017;
})();if(cljs.core.truth_(inst_42988__$1))
{var statearr_43018_43062 = state_43009__$1;(statearr_43018_43062[1] = 19);
} else
{var statearr_43019_43063 = state_43009__$1;(statearr_43019_43063[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 7))
{var inst_43005 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43020_43064 = state_43009__$1;(statearr_43020_43064[2] = inst_43005);
(statearr_43020_43064[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 8))
{var inst_42950 = (state_43009[9]);var inst_42951 = (state_43009[11]);var inst_42953 = (inst_42951 < inst_42950);var inst_42954 = inst_42953;var state_43009__$1 = state_43009;if(cljs.core.truth_(inst_42954))
{var statearr_43024_43065 = state_43009__$1;(statearr_43024_43065[1] = 10);
} else
{var statearr_43025_43066 = state_43009__$1;(statearr_43025_43066[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 9))
{var inst_42984 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43026_43067 = state_43009__$1;(statearr_43026_43067[2] = inst_42984);
(statearr_43026_43067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 10))
{var inst_42948 = (state_43009[8]);var inst_42950 = (state_43009[9]);var inst_42949 = (state_43009[10]);var inst_42951 = (state_43009[11]);var inst_42956 = cljs.core._nth.call(null,inst_42949,inst_42951);var inst_42957 = cljs.core.async.muxch_STAR_.call(null,inst_42956);var inst_42958 = cljs.core.async.close_BANG_.call(null,inst_42957);var inst_42959 = (inst_42951 + 1);var tmp43021 = inst_42948;var tmp43022 = inst_42950;var tmp43023 = inst_42949;var inst_42948__$1 = tmp43021;var inst_42949__$1 = tmp43023;var inst_42950__$1 = tmp43022;var inst_42951__$1 = inst_42959;var state_43009__$1 = (function (){var statearr_43027 = state_43009;(statearr_43027[14] = inst_42958);
(statearr_43027[8] = inst_42948__$1);
(statearr_43027[9] = inst_42950__$1);
(statearr_43027[10] = inst_42949__$1);
(statearr_43027[11] = inst_42951__$1);
return statearr_43027;
})();var statearr_43028_43068 = state_43009__$1;(statearr_43028_43068[2] = null);
(statearr_43028_43068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 11))
{var inst_42962 = (state_43009[15]);var inst_42948 = (state_43009[8]);var inst_42962__$1 = cljs.core.seq.call(null,inst_42948);var state_43009__$1 = (function (){var statearr_43029 = state_43009;(statearr_43029[15] = inst_42962__$1);
return statearr_43029;
})();if(inst_42962__$1)
{var statearr_43030_43069 = state_43009__$1;(statearr_43030_43069[1] = 13);
} else
{var statearr_43031_43070 = state_43009__$1;(statearr_43031_43070[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 12))
{var inst_42982 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43032_43071 = state_43009__$1;(statearr_43032_43071[2] = inst_42982);
(statearr_43032_43071[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 13))
{var inst_42962 = (state_43009[15]);var inst_42964 = cljs.core.chunked_seq_QMARK_.call(null,inst_42962);var state_43009__$1 = state_43009;if(inst_42964)
{var statearr_43033_43072 = state_43009__$1;(statearr_43033_43072[1] = 16);
} else
{var statearr_43034_43073 = state_43009__$1;(statearr_43034_43073[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 14))
{var state_43009__$1 = state_43009;var statearr_43035_43074 = state_43009__$1;(statearr_43035_43074[2] = null);
(statearr_43035_43074[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 15))
{var inst_42980 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43036_43075 = state_43009__$1;(statearr_43036_43075[2] = inst_42980);
(statearr_43036_43075[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 16))
{var inst_42962 = (state_43009[15]);var inst_42966 = cljs.core.chunk_first.call(null,inst_42962);var inst_42967 = cljs.core.chunk_rest.call(null,inst_42962);var inst_42968 = cljs.core.count.call(null,inst_42966);var inst_42948 = inst_42967;var inst_42949 = inst_42966;var inst_42950 = inst_42968;var inst_42951 = 0;var state_43009__$1 = (function (){var statearr_43037 = state_43009;(statearr_43037[8] = inst_42948);
(statearr_43037[9] = inst_42950);
(statearr_43037[10] = inst_42949);
(statearr_43037[11] = inst_42951);
return statearr_43037;
})();var statearr_43038_43076 = state_43009__$1;(statearr_43038_43076[2] = null);
(statearr_43038_43076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 17))
{var inst_42962 = (state_43009[15]);var inst_42971 = cljs.core.first.call(null,inst_42962);var inst_42972 = cljs.core.async.muxch_STAR_.call(null,inst_42971);var inst_42973 = cljs.core.async.close_BANG_.call(null,inst_42972);var inst_42974 = cljs.core.next.call(null,inst_42962);var inst_42948 = inst_42974;var inst_42949 = null;var inst_42950 = 0;var inst_42951 = 0;var state_43009__$1 = (function (){var statearr_43039 = state_43009;(statearr_43039[16] = inst_42973);
(statearr_43039[8] = inst_42948);
(statearr_43039[9] = inst_42950);
(statearr_43039[10] = inst_42949);
(statearr_43039[11] = inst_42951);
return statearr_43039;
})();var statearr_43040_43077 = state_43009__$1;(statearr_43040_43077[2] = null);
(statearr_43040_43077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 18))
{var inst_42977 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43041_43078 = state_43009__$1;(statearr_43041_43078[2] = inst_42977);
(statearr_43041_43078[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 19))
{var state_43009__$1 = state_43009;var statearr_43042_43079 = state_43009__$1;(statearr_43042_43079[2] = null);
(statearr_43042_43079[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 20))
{var state_43009__$1 = state_43009;var statearr_43043_43080 = state_43009__$1;(statearr_43043_43080[2] = null);
(statearr_43043_43080[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 21))
{var inst_43002 = (state_43009[2]);var state_43009__$1 = (function (){var statearr_43044 = state_43009;(statearr_43044[17] = inst_43002);
return statearr_43044;
})();var statearr_43045_43081 = state_43009__$1;(statearr_43045_43081[2] = null);
(statearr_43045_43081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 22))
{var inst_42999 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43046_43082 = state_43009__$1;(statearr_43046_43082[2] = inst_42999);
(statearr_43046_43082[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 23))
{var inst_42986 = (state_43009[12]);var inst_42990 = (state_43009[2]);var inst_42991 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42986);var state_43009__$1 = (function (){var statearr_43047 = state_43009;(statearr_43047[18] = inst_42990);
return statearr_43047;
})();var statearr_43048_43083 = state_43009__$1;(statearr_43048_43083[2] = inst_42991);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43009__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43010 === 24))
{var inst_42938 = (state_43009[7]);var inst_42988 = (state_43009[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43009,23,Object,null,22);var inst_42995 = cljs.core.async.muxch_STAR_.call(null,inst_42988);var state_43009__$1 = state_43009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43009__$1,25,inst_42995,inst_42938);
} else
{if((state_val_43010 === 25))
{var inst_42997 = (state_43009[2]);var state_43009__$1 = state_43009;var statearr_43049_43084 = state_43009__$1;(statearr_43049_43084[2] = inst_42997);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43009__$1);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43053[0] = state_machine__18195__auto__);
(statearr_43053[1] = 1);
return statearr_43053;
});
var state_machine__18195__auto____1 = (function (state_43009){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43009);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43054){if((e43054 instanceof Object))
{var ex__18198__auto__ = e43054;var statearr_43055_43085 = state_43009;(statearr_43055_43085[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43086 = state_43009;
state_43009 = G__43086;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43009){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43056 = f__18265__auto__.call(null);(statearr_43056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43057);
return statearr_43056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
,cljs.core.range.call(null,cnt));var c__18264__auto___43223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43193){var state_val_43194 = (state_43193[1]);if((state_val_43194 === 1))
{var state_43193__$1 = state_43193;var statearr_43195_43224 = state_43193__$1;(statearr_43195_43224[2] = null);
(statearr_43195_43224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 2))
{var inst_43156 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_43157 = 0;var state_43193__$1 = (function (){var statearr_43196 = state_43193;(statearr_43196[7] = inst_43157);
(statearr_43196[8] = inst_43156);
return statearr_43196;
})();var statearr_43197_43225 = state_43193__$1;(statearr_43197_43225[2] = null);
(statearr_43197_43225[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 3))
{var inst_43191 = (state_43193[2]);var state_43193__$1 = state_43193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43193__$1,inst_43191);
} else
{if((state_val_43194 === 4))
{var inst_43157 = (state_43193[7]);var inst_43159 = (inst_43157 < cnt);var state_43193__$1 = state_43193;if(cljs.core.truth_(inst_43159))
{var statearr_43198_43226 = state_43193__$1;(statearr_43198_43226[1] = 6);
} else
{var statearr_43199_43227 = state_43193__$1;(statearr_43199_43227[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 5))
{var inst_43177 = (state_43193[2]);var state_43193__$1 = (function (){var statearr_43200 = state_43193;(statearr_43200[9] = inst_43177);
return statearr_43200;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43193__$1,12,dchan);
} else
{if((state_val_43194 === 6))
{var state_43193__$1 = state_43193;var statearr_43201_43228 = state_43193__$1;(statearr_43201_43228[2] = null);
(statearr_43201_43228[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 7))
{var state_43193__$1 = state_43193;var statearr_43202_43229 = state_43193__$1;(statearr_43202_43229[2] = null);
(statearr_43202_43229[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 8))
{var inst_43175 = (state_43193[2]);var state_43193__$1 = state_43193;var statearr_43203_43230 = state_43193__$1;(statearr_43203_43230[2] = inst_43175);
(statearr_43203_43230[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 9))
{var inst_43157 = (state_43193[7]);var inst_43170 = (state_43193[2]);var inst_43171 = (inst_43157 + 1);var inst_43157__$1 = inst_43171;var state_43193__$1 = (function (){var statearr_43204 = state_43193;(statearr_43204[7] = inst_43157__$1);
(statearr_43204[10] = inst_43170);
return statearr_43204;
})();var statearr_43205_43231 = state_43193__$1;(statearr_43205_43231[2] = null);
(statearr_43205_43231[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 10))
{var inst_43161 = (state_43193[2]);var inst_43162 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_43193__$1 = (function (){var statearr_43206 = state_43193;(statearr_43206[11] = inst_43161);
return statearr_43206;
})();var statearr_43207_43232 = state_43193__$1;(statearr_43207_43232[2] = inst_43162);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 11))
{var inst_43157 = (state_43193[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43193,10,Object,null,9);var inst_43166 = chs__$1.call(null,inst_43157);var inst_43167 = done.call(null,inst_43157);var inst_43168 = cljs.core.async.take_BANG_.call(null,inst_43166,inst_43167);var state_43193__$1 = state_43193;var statearr_43208_43233 = state_43193__$1;(statearr_43208_43233[2] = inst_43168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 12))
{var inst_43179 = (state_43193[12]);var inst_43179__$1 = (state_43193[2]);var inst_43180 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43179__$1);var state_43193__$1 = (function (){var statearr_43209 = state_43193;(statearr_43209[12] = inst_43179__$1);
return statearr_43209;
})();if(cljs.core.truth_(inst_43180))
{var statearr_43210_43234 = state_43193__$1;(statearr_43210_43234[1] = 13);
} else
{var statearr_43211_43235 = state_43193__$1;(statearr_43211_43235[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 13))
{var inst_43182 = cljs.core.async.close_BANG_.call(null,out);var state_43193__$1 = state_43193;var statearr_43212_43236 = state_43193__$1;(statearr_43212_43236[2] = inst_43182);
(statearr_43212_43236[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 14))
{var inst_43179 = (state_43193[12]);var inst_43184 = cljs.core.apply.call(null,f,inst_43179);var state_43193__$1 = state_43193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43193__$1,16,out,inst_43184);
} else
{if((state_val_43194 === 15))
{var inst_43189 = (state_43193[2]);var state_43193__$1 = state_43193;var statearr_43213_43237 = state_43193__$1;(statearr_43213_43237[2] = inst_43189);
(statearr_43213_43237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43194 === 16))
{var inst_43186 = (state_43193[2]);var state_43193__$1 = (function (){var statearr_43214 = state_43193;(statearr_43214[13] = inst_43186);
return statearr_43214;
})();var statearr_43215_43238 = state_43193__$1;(statearr_43215_43238[2] = null);
(statearr_43215_43238[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43219[0] = state_machine__18195__auto__);
(statearr_43219[1] = 1);
return statearr_43219;
});
var state_machine__18195__auto____1 = (function (state_43193){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43193);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43220){if((e43220 instanceof Object))
{var ex__18198__auto__ = e43220;var statearr_43221_43239 = state_43193;(statearr_43221_43239[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43240 = state_43193;
state_43193 = G__43240;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43193){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43222 = f__18265__auto__.call(null);(statearr_43222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43223);
return statearr_43222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18264__auto___43348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43324){var state_val_43325 = (state_43324[1]);if((state_val_43325 === 1))
{var inst_43295 = cljs.core.vec.call(null,chs);var inst_43296 = inst_43295;var state_43324__$1 = (function (){var statearr_43326 = state_43324;(statearr_43326[7] = inst_43296);
return statearr_43326;
})();var statearr_43327_43349 = state_43324__$1;(statearr_43327_43349[2] = null);
(statearr_43327_43349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 2))
{var inst_43296 = (state_43324[7]);var inst_43298 = cljs.core.count.call(null,inst_43296);var inst_43299 = (inst_43298 > 0);var state_43324__$1 = state_43324;if(cljs.core.truth_(inst_43299))
{var statearr_43328_43350 = state_43324__$1;(statearr_43328_43350[1] = 4);
} else
{var statearr_43329_43351 = state_43324__$1;(statearr_43329_43351[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 3))
{var inst_43322 = (state_43324[2]);var state_43324__$1 = state_43324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43324__$1,inst_43322);
} else
{if((state_val_43325 === 4))
{var inst_43296 = (state_43324[7]);var state_43324__$1 = state_43324;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43324__$1,7,inst_43296);
} else
{if((state_val_43325 === 5))
{var inst_43318 = cljs.core.async.close_BANG_.call(null,out);var state_43324__$1 = state_43324;var statearr_43330_43352 = state_43324__$1;(statearr_43330_43352[2] = inst_43318);
(statearr_43330_43352[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 6))
{var inst_43320 = (state_43324[2]);var state_43324__$1 = state_43324;var statearr_43331_43353 = state_43324__$1;(statearr_43331_43353[2] = inst_43320);
(statearr_43331_43353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 7))
{var inst_43303 = (state_43324[8]);var inst_43304 = (state_43324[9]);var inst_43303__$1 = (state_43324[2]);var inst_43304__$1 = cljs.core.nth.call(null,inst_43303__$1,0,null);var inst_43305 = cljs.core.nth.call(null,inst_43303__$1,1,null);var inst_43306 = (inst_43304__$1 == null);var state_43324__$1 = (function (){var statearr_43332 = state_43324;(statearr_43332[8] = inst_43303__$1);
(statearr_43332[9] = inst_43304__$1);
(statearr_43332[10] = inst_43305);
return statearr_43332;
})();if(cljs.core.truth_(inst_43306))
{var statearr_43333_43354 = state_43324__$1;(statearr_43333_43354[1] = 8);
} else
{var statearr_43334_43355 = state_43324__$1;(statearr_43334_43355[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 8))
{var inst_43303 = (state_43324[8]);var inst_43304 = (state_43324[9]);var inst_43296 = (state_43324[7]);var inst_43305 = (state_43324[10]);var inst_43308 = (function (){var c = inst_43305;var v = inst_43304;var vec__43301 = inst_43303;var cs = inst_43296;return ((function (c,v,vec__43301,cs,inst_43303,inst_43304,inst_43296,inst_43305,state_val_43325){
return (function (p1__43241_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__43241_SHARP_);
});
;})(c,v,vec__43301,cs,inst_43303,inst_43304,inst_43296,inst_43305,state_val_43325))
})();var inst_43309 = cljs.core.filterv.call(null,inst_43308,inst_43296);var inst_43296__$1 = inst_43309;var state_43324__$1 = (function (){var statearr_43335 = state_43324;(statearr_43335[7] = inst_43296__$1);
return statearr_43335;
})();var statearr_43336_43356 = state_43324__$1;(statearr_43336_43356[2] = null);
(statearr_43336_43356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 9))
{var inst_43304 = (state_43324[9]);var state_43324__$1 = state_43324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43324__$1,11,out,inst_43304);
} else
{if((state_val_43325 === 10))
{var inst_43316 = (state_43324[2]);var state_43324__$1 = state_43324;var statearr_43338_43357 = state_43324__$1;(statearr_43338_43357[2] = inst_43316);
(statearr_43338_43357[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43325 === 11))
{var inst_43296 = (state_43324[7]);var inst_43313 = (state_43324[2]);var tmp43337 = inst_43296;var inst_43296__$1 = tmp43337;var state_43324__$1 = (function (){var statearr_43339 = state_43324;(statearr_43339[11] = inst_43313);
(statearr_43339[7] = inst_43296__$1);
return statearr_43339;
})();var statearr_43340_43358 = state_43324__$1;(statearr_43340_43358[2] = null);
(statearr_43340_43358[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43344 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43344[0] = state_machine__18195__auto__);
(statearr_43344[1] = 1);
return statearr_43344;
});
var state_machine__18195__auto____1 = (function (state_43324){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43324);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43345){if((e43345 instanceof Object))
{var ex__18198__auto__ = e43345;var statearr_43346_43359 = state_43324;(statearr_43346_43359[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43360 = state_43324;
state_43324 = G__43360;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43324){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43347 = f__18265__auto__.call(null);(statearr_43347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43348);
return statearr_43347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18264__auto___43453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43430){var state_val_43431 = (state_43430[1]);if((state_val_43431 === 1))
{var inst_43407 = 0;var state_43430__$1 = (function (){var statearr_43432 = state_43430;(statearr_43432[7] = inst_43407);
return statearr_43432;
})();var statearr_43433_43454 = state_43430__$1;(statearr_43433_43454[2] = null);
(statearr_43433_43454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 2))
{var inst_43407 = (state_43430[7]);var inst_43409 = (inst_43407 < n);var state_43430__$1 = state_43430;if(cljs.core.truth_(inst_43409))
{var statearr_43434_43455 = state_43430__$1;(statearr_43434_43455[1] = 4);
} else
{var statearr_43435_43456 = state_43430__$1;(statearr_43435_43456[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 3))
{var inst_43427 = (state_43430[2]);var inst_43428 = cljs.core.async.close_BANG_.call(null,out);var state_43430__$1 = (function (){var statearr_43436 = state_43430;(statearr_43436[8] = inst_43427);
return statearr_43436;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43430__$1,inst_43428);
} else
{if((state_val_43431 === 4))
{var state_43430__$1 = state_43430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43430__$1,7,ch);
} else
{if((state_val_43431 === 5))
{var state_43430__$1 = state_43430;var statearr_43437_43457 = state_43430__$1;(statearr_43437_43457[2] = null);
(statearr_43437_43457[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 6))
{var inst_43425 = (state_43430[2]);var state_43430__$1 = state_43430;var statearr_43438_43458 = state_43430__$1;(statearr_43438_43458[2] = inst_43425);
(statearr_43438_43458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 7))
{var inst_43412 = (state_43430[9]);var inst_43412__$1 = (state_43430[2]);var inst_43413 = (inst_43412__$1 == null);var inst_43414 = cljs.core.not.call(null,inst_43413);var state_43430__$1 = (function (){var statearr_43439 = state_43430;(statearr_43439[9] = inst_43412__$1);
return statearr_43439;
})();if(inst_43414)
{var statearr_43440_43459 = state_43430__$1;(statearr_43440_43459[1] = 8);
} else
{var statearr_43441_43460 = state_43430__$1;(statearr_43441_43460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 8))
{var inst_43412 = (state_43430[9]);var state_43430__$1 = state_43430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43430__$1,11,out,inst_43412);
} else
{if((state_val_43431 === 9))
{var state_43430__$1 = state_43430;var statearr_43442_43461 = state_43430__$1;(statearr_43442_43461[2] = null);
(statearr_43442_43461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 10))
{var inst_43422 = (state_43430[2]);var state_43430__$1 = state_43430;var statearr_43443_43462 = state_43430__$1;(statearr_43443_43462[2] = inst_43422);
(statearr_43443_43462[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43431 === 11))
{var inst_43407 = (state_43430[7]);var inst_43417 = (state_43430[2]);var inst_43418 = (inst_43407 + 1);var inst_43407__$1 = inst_43418;var state_43430__$1 = (function (){var statearr_43444 = state_43430;(statearr_43444[7] = inst_43407__$1);
(statearr_43444[10] = inst_43417);
return statearr_43444;
})();var statearr_43445_43463 = state_43430__$1;(statearr_43445_43463[2] = null);
(statearr_43445_43463[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43449 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43449[0] = state_machine__18195__auto__);
(statearr_43449[1] = 1);
return statearr_43449;
});
var state_machine__18195__auto____1 = (function (state_43430){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43430);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43450){if((e43450 instanceof Object))
{var ex__18198__auto__ = e43450;var statearr_43451_43464 = state_43430;(statearr_43451_43464[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43465 = state_43430;
state_43430 = G__43465;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43430){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43452 = f__18265__auto__.call(null);(statearr_43452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43453);
return statearr_43452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18264__auto___43562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43537){var state_val_43538 = (state_43537[1]);if((state_val_43538 === 1))
{var inst_43514 = null;var state_43537__$1 = (function (){var statearr_43539 = state_43537;(statearr_43539[7] = inst_43514);
return statearr_43539;
})();var statearr_43540_43563 = state_43537__$1;(statearr_43540_43563[2] = null);
(statearr_43540_43563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 2))
{var state_43537__$1 = state_43537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43537__$1,4,ch);
} else
{if((state_val_43538 === 3))
{var inst_43534 = (state_43537[2]);var inst_43535 = cljs.core.async.close_BANG_.call(null,out);var state_43537__$1 = (function (){var statearr_43541 = state_43537;(statearr_43541[8] = inst_43534);
return statearr_43541;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43537__$1,inst_43535);
} else
{if((state_val_43538 === 4))
{var inst_43517 = (state_43537[9]);var inst_43517__$1 = (state_43537[2]);var inst_43518 = (inst_43517__$1 == null);var inst_43519 = cljs.core.not.call(null,inst_43518);var state_43537__$1 = (function (){var statearr_43542 = state_43537;(statearr_43542[9] = inst_43517__$1);
return statearr_43542;
})();if(inst_43519)
{var statearr_43543_43564 = state_43537__$1;(statearr_43543_43564[1] = 5);
} else
{var statearr_43544_43565 = state_43537__$1;(statearr_43544_43565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 5))
{var inst_43514 = (state_43537[7]);var inst_43517 = (state_43537[9]);var inst_43521 = cljs.core._EQ_.call(null,inst_43517,inst_43514);var state_43537__$1 = state_43537;if(inst_43521)
{var statearr_43545_43566 = state_43537__$1;(statearr_43545_43566[1] = 8);
} else
{var statearr_43546_43567 = state_43537__$1;(statearr_43546_43567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 6))
{var state_43537__$1 = state_43537;var statearr_43548_43568 = state_43537__$1;(statearr_43548_43568[2] = null);
(statearr_43548_43568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 7))
{var inst_43532 = (state_43537[2]);var state_43537__$1 = state_43537;var statearr_43549_43569 = state_43537__$1;(statearr_43549_43569[2] = inst_43532);
(statearr_43549_43569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 8))
{var inst_43514 = (state_43537[7]);var tmp43547 = inst_43514;var inst_43514__$1 = tmp43547;var state_43537__$1 = (function (){var statearr_43550 = state_43537;(statearr_43550[7] = inst_43514__$1);
return statearr_43550;
})();var statearr_43551_43570 = state_43537__$1;(statearr_43551_43570[2] = null);
(statearr_43551_43570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 9))
{var inst_43517 = (state_43537[9]);var state_43537__$1 = state_43537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43537__$1,11,out,inst_43517);
} else
{if((state_val_43538 === 10))
{var inst_43529 = (state_43537[2]);var state_43537__$1 = state_43537;var statearr_43552_43571 = state_43537__$1;(statearr_43552_43571[2] = inst_43529);
(statearr_43552_43571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43538 === 11))
{var inst_43517 = (state_43537[9]);var inst_43526 = (state_43537[2]);var inst_43514 = inst_43517;var state_43537__$1 = (function (){var statearr_43553 = state_43537;(statearr_43553[10] = inst_43526);
(statearr_43553[7] = inst_43514);
return statearr_43553;
})();var statearr_43554_43572 = state_43537__$1;(statearr_43554_43572[2] = null);
(statearr_43554_43572[1] = 2);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43558 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43558[0] = state_machine__18195__auto__);
(statearr_43558[1] = 1);
return statearr_43558;
});
var state_machine__18195__auto____1 = (function (state_43537){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43537);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43559){if((e43559 instanceof Object))
{var ex__18198__auto__ = e43559;var statearr_43560_43573 = state_43537;(statearr_43560_43573[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43574 = state_43537;
state_43537 = G__43574;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43537){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43561 = f__18265__auto__.call(null);(statearr_43561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43562);
return statearr_43561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18264__auto___43709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43679){var state_val_43680 = (state_43679[1]);if((state_val_43680 === 1))
{var inst_43642 = (new Array(n));var inst_43643 = inst_43642;var inst_43644 = 0;var state_43679__$1 = (function (){var statearr_43681 = state_43679;(statearr_43681[7] = inst_43643);
(statearr_43681[8] = inst_43644);
return statearr_43681;
})();var statearr_43682_43710 = state_43679__$1;(statearr_43682_43710[2] = null);
(statearr_43682_43710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 2))
{var state_43679__$1 = state_43679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43679__$1,4,ch);
} else
{if((state_val_43680 === 3))
{var inst_43677 = (state_43679[2]);var state_43679__$1 = state_43679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43679__$1,inst_43677);
} else
{if((state_val_43680 === 4))
{var inst_43647 = (state_43679[9]);var inst_43647__$1 = (state_43679[2]);var inst_43648 = (inst_43647__$1 == null);var inst_43649 = cljs.core.not.call(null,inst_43648);var state_43679__$1 = (function (){var statearr_43683 = state_43679;(statearr_43683[9] = inst_43647__$1);
return statearr_43683;
})();if(inst_43649)
{var statearr_43684_43711 = state_43679__$1;(statearr_43684_43711[1] = 5);
} else
{var statearr_43685_43712 = state_43679__$1;(statearr_43685_43712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 5))
{var inst_43647 = (state_43679[9]);var inst_43652 = (state_43679[10]);var inst_43643 = (state_43679[7]);var inst_43644 = (state_43679[8]);var inst_43651 = (inst_43643[inst_43644] = inst_43647);var inst_43652__$1 = (inst_43644 + 1);var inst_43653 = (inst_43652__$1 < n);var state_43679__$1 = (function (){var statearr_43686 = state_43679;(statearr_43686[10] = inst_43652__$1);
(statearr_43686[11] = inst_43651);
return statearr_43686;
})();if(cljs.core.truth_(inst_43653))
{var statearr_43687_43713 = state_43679__$1;(statearr_43687_43713[1] = 8);
} else
{var statearr_43688_43714 = state_43679__$1;(statearr_43688_43714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 6))
{var inst_43644 = (state_43679[8]);var inst_43665 = (inst_43644 > 0);var state_43679__$1 = state_43679;if(cljs.core.truth_(inst_43665))
{var statearr_43690_43715 = state_43679__$1;(statearr_43690_43715[1] = 12);
} else
{var statearr_43691_43716 = state_43679__$1;(statearr_43691_43716[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 7))
{var inst_43675 = (state_43679[2]);var state_43679__$1 = state_43679;var statearr_43692_43717 = state_43679__$1;(statearr_43692_43717[2] = inst_43675);
(statearr_43692_43717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 8))
{var inst_43652 = (state_43679[10]);var inst_43643 = (state_43679[7]);var tmp43689 = inst_43643;var inst_43643__$1 = tmp43689;var inst_43644 = inst_43652;var state_43679__$1 = (function (){var statearr_43693 = state_43679;(statearr_43693[7] = inst_43643__$1);
(statearr_43693[8] = inst_43644);
return statearr_43693;
})();var statearr_43694_43718 = state_43679__$1;(statearr_43694_43718[2] = null);
(statearr_43694_43718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 9))
{var inst_43643 = (state_43679[7]);var inst_43657 = cljs.core.vec.call(null,inst_43643);var state_43679__$1 = state_43679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43679__$1,11,out,inst_43657);
} else
{if((state_val_43680 === 10))
{var inst_43663 = (state_43679[2]);var state_43679__$1 = state_43679;var statearr_43695_43719 = state_43679__$1;(statearr_43695_43719[2] = inst_43663);
(statearr_43695_43719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 11))
{var inst_43659 = (state_43679[2]);var inst_43660 = (new Array(n));var inst_43643 = inst_43660;var inst_43644 = 0;var state_43679__$1 = (function (){var statearr_43696 = state_43679;(statearr_43696[12] = inst_43659);
(statearr_43696[7] = inst_43643);
(statearr_43696[8] = inst_43644);
return statearr_43696;
})();var statearr_43697_43720 = state_43679__$1;(statearr_43697_43720[2] = null);
(statearr_43697_43720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 12))
{var inst_43643 = (state_43679[7]);var inst_43667 = cljs.core.vec.call(null,inst_43643);var state_43679__$1 = state_43679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43679__$1,15,out,inst_43667);
} else
{if((state_val_43680 === 13))
{var state_43679__$1 = state_43679;var statearr_43698_43721 = state_43679__$1;(statearr_43698_43721[2] = null);
(statearr_43698_43721[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 14))
{var inst_43672 = (state_43679[2]);var inst_43673 = cljs.core.async.close_BANG_.call(null,out);var state_43679__$1 = (function (){var statearr_43699 = state_43679;(statearr_43699[13] = inst_43672);
return statearr_43699;
})();var statearr_43700_43722 = state_43679__$1;(statearr_43700_43722[2] = inst_43673);
(statearr_43700_43722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43680 === 15))
{var inst_43669 = (state_43679[2]);var state_43679__$1 = state_43679;var statearr_43701_43723 = state_43679__$1;(statearr_43701_43723[2] = inst_43669);
(statearr_43701_43723[1] = 14);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43705[0] = state_machine__18195__auto__);
(statearr_43705[1] = 1);
return statearr_43705;
});
var state_machine__18195__auto____1 = (function (state_43679){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43679);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43706){if((e43706 instanceof Object))
{var ex__18198__auto__ = e43706;var statearr_43707_43724 = state_43679;(statearr_43707_43724[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43725 = state_43679;
state_43679 = G__43725;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43679){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43708 = f__18265__auto__.call(null);(statearr_43708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43709);
return statearr_43708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18264__auto___43868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_43838){var state_val_43839 = (state_43838[1]);if((state_val_43839 === 1))
{var inst_43797 = [];var inst_43798 = inst_43797;var inst_43799 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_43838__$1 = (function (){var statearr_43840 = state_43838;(statearr_43840[7] = inst_43798);
(statearr_43840[8] = inst_43799);
return statearr_43840;
})();var statearr_43841_43869 = state_43838__$1;(statearr_43841_43869[2] = null);
(statearr_43841_43869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 2))
{var state_43838__$1 = state_43838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43838__$1,4,ch);
} else
{if((state_val_43839 === 3))
{var inst_43836 = (state_43838[2]);var state_43838__$1 = state_43838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43838__$1,inst_43836);
} else
{if((state_val_43839 === 4))
{var inst_43802 = (state_43838[9]);var inst_43802__$1 = (state_43838[2]);var inst_43803 = (inst_43802__$1 == null);var inst_43804 = cljs.core.not.call(null,inst_43803);var state_43838__$1 = (function (){var statearr_43842 = state_43838;(statearr_43842[9] = inst_43802__$1);
return statearr_43842;
})();if(inst_43804)
{var statearr_43843_43870 = state_43838__$1;(statearr_43843_43870[1] = 5);
} else
{var statearr_43844_43871 = state_43838__$1;(statearr_43844_43871[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 5))
{var inst_43802 = (state_43838[9]);var inst_43806 = (state_43838[10]);var inst_43799 = (state_43838[8]);var inst_43806__$1 = f.call(null,inst_43802);var inst_43807 = cljs.core._EQ_.call(null,inst_43806__$1,inst_43799);var inst_43808 = cljs.core.keyword_identical_QMARK_.call(null,inst_43799,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_43809 = (inst_43807) || (inst_43808);var state_43838__$1 = (function (){var statearr_43845 = state_43838;(statearr_43845[10] = inst_43806__$1);
return statearr_43845;
})();if(cljs.core.truth_(inst_43809))
{var statearr_43846_43872 = state_43838__$1;(statearr_43846_43872[1] = 8);
} else
{var statearr_43847_43873 = state_43838__$1;(statearr_43847_43873[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 6))
{var inst_43798 = (state_43838[7]);var inst_43823 = inst_43798.length;var inst_43824 = (inst_43823 > 0);var state_43838__$1 = state_43838;if(cljs.core.truth_(inst_43824))
{var statearr_43849_43874 = state_43838__$1;(statearr_43849_43874[1] = 12);
} else
{var statearr_43850_43875 = state_43838__$1;(statearr_43850_43875[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 7))
{var inst_43834 = (state_43838[2]);var state_43838__$1 = state_43838;var statearr_43851_43876 = state_43838__$1;(statearr_43851_43876[2] = inst_43834);
(statearr_43851_43876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 8))
{var inst_43802 = (state_43838[9]);var inst_43806 = (state_43838[10]);var inst_43798 = (state_43838[7]);var inst_43811 = inst_43798.push(inst_43802);var tmp43848 = inst_43798;var inst_43798__$1 = tmp43848;var inst_43799 = inst_43806;var state_43838__$1 = (function (){var statearr_43852 = state_43838;(statearr_43852[7] = inst_43798__$1);
(statearr_43852[8] = inst_43799);
(statearr_43852[11] = inst_43811);
return statearr_43852;
})();var statearr_43853_43877 = state_43838__$1;(statearr_43853_43877[2] = null);
(statearr_43853_43877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 9))
{var inst_43798 = (state_43838[7]);var inst_43814 = cljs.core.vec.call(null,inst_43798);var state_43838__$1 = state_43838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43838__$1,11,out,inst_43814);
} else
{if((state_val_43839 === 10))
{var inst_43821 = (state_43838[2]);var state_43838__$1 = state_43838;var statearr_43854_43878 = state_43838__$1;(statearr_43854_43878[2] = inst_43821);
(statearr_43854_43878[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 11))
{var inst_43802 = (state_43838[9]);var inst_43806 = (state_43838[10]);var inst_43816 = (state_43838[2]);var inst_43817 = [];var inst_43818 = inst_43817.push(inst_43802);var inst_43798 = inst_43817;var inst_43799 = inst_43806;var state_43838__$1 = (function (){var statearr_43855 = state_43838;(statearr_43855[7] = inst_43798);
(statearr_43855[8] = inst_43799);
(statearr_43855[12] = inst_43818);
(statearr_43855[13] = inst_43816);
return statearr_43855;
})();var statearr_43856_43879 = state_43838__$1;(statearr_43856_43879[2] = null);
(statearr_43856_43879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 12))
{var inst_43798 = (state_43838[7]);var inst_43826 = cljs.core.vec.call(null,inst_43798);var state_43838__$1 = state_43838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43838__$1,15,out,inst_43826);
} else
{if((state_val_43839 === 13))
{var state_43838__$1 = state_43838;var statearr_43857_43880 = state_43838__$1;(statearr_43857_43880[2] = null);
(statearr_43857_43880[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 14))
{var inst_43831 = (state_43838[2]);var inst_43832 = cljs.core.async.close_BANG_.call(null,out);var state_43838__$1 = (function (){var statearr_43858 = state_43838;(statearr_43858[14] = inst_43831);
return statearr_43858;
})();var statearr_43859_43881 = state_43838__$1;(statearr_43859_43881[2] = inst_43832);
(statearr_43859_43881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43839 === 15))
{var inst_43828 = (state_43838[2]);var state_43838__$1 = state_43838;var statearr_43860_43882 = state_43838__$1;(statearr_43860_43882[2] = inst_43828);
(statearr_43860_43882[1] = 14);
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
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_43864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43864[0] = state_machine__18195__auto__);
(statearr_43864[1] = 1);
return statearr_43864;
});
var state_machine__18195__auto____1 = (function (state_43838){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_43838);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e43865){if((e43865 instanceof Object))
{var ex__18198__auto__ = e43865;var statearr_43866_43883 = state_43838;(statearr_43866_43883[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43884 = state_43838;
state_43838 = G__43884;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_43838){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_43838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_43867 = f__18265__auto__.call(null);(statearr_43867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto___43868);
return statearr_43867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
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