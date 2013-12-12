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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t30489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30489 = (function (f,fn_handler,meta30490){
this.f = f;
this.fn_handler = fn_handler;
this.meta30490 = meta30490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30489.cljs$lang$type = true;
cljs.core.async.t30489.cljs$lang$ctorStr = "cljs.core.async/t30489";
cljs.core.async.t30489.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30489");
});
cljs.core.async.t30489.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t30489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t30489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30491){var self__ = this;
var _30491__$1 = this;return self__.meta30490;
});
cljs.core.async.t30489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30491,meta30490__$1){var self__ = this;
var _30491__$1 = this;return (new cljs.core.async.t30489(self__.f,self__.fn_handler,meta30490__$1));
});
cljs.core.async.__GT_t30489 = (function __GT_t30489(f__$1,fn_handler__$1,meta30490){return (new cljs.core.async.t30489(f__$1,fn_handler__$1,meta30490));
});
}
return (new cljs.core.async.t30489(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__30493 = buff;if(G__30493)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__30493.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__30493.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30493);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30493);
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
{var val_30494 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_30494);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_30494);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13809__auto__ = ret;if(cljs.core.truth_(and__13809__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13809__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14644__auto___30495 = n;var x_30496 = 0;while(true){
if((x_30496 < n__14644__auto___30495))
{(a[x_30496] = 0);
{
var G__30497 = (x_30496 + 1);
x_30496 = G__30497;
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
var G__30498 = (i + 1);
i = G__30498;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t30502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30502 = (function (flag,alt_flag,meta30503){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30503 = meta30503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30502.cljs$lang$type = true;
cljs.core.async.t30502.cljs$lang$ctorStr = "cljs.core.async/t30502";
cljs.core.async.t30502.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30502");
});
cljs.core.async.t30502.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t30502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t30502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30504){var self__ = this;
var _30504__$1 = this;return self__.meta30503;
});
cljs.core.async.t30502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30504,meta30503__$1){var self__ = this;
var _30504__$1 = this;return (new cljs.core.async.t30502(self__.flag,self__.alt_flag,meta30503__$1));
});
cljs.core.async.__GT_t30502 = (function __GT_t30502(flag__$1,alt_flag__$1,meta30503){return (new cljs.core.async.t30502(flag__$1,alt_flag__$1,meta30503));
});
}
return (new cljs.core.async.t30502(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t30508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30508 = (function (cb,flag,alt_handler,meta30509){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30509 = meta30509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30508.cljs$lang$type = true;
cljs.core.async.t30508.cljs$lang$ctorStr = "cljs.core.async/t30508";
cljs.core.async.t30508.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30508");
});
cljs.core.async.t30508.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t30508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t30508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30510){var self__ = this;
var _30510__$1 = this;return self__.meta30509;
});
cljs.core.async.t30508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30510,meta30509__$1){var self__ = this;
var _30510__$1 = this;return (new cljs.core.async.t30508(self__.cb,self__.flag,self__.alt_handler,meta30509__$1));
});
cljs.core.async.__GT_t30508 = (function __GT_t30508(cb__$1,flag__$1,alt_handler__$1,meta30509){return (new cljs.core.async.t30508(cb__$1,flag__$1,alt_handler__$1,meta30509));
});
}
return (new cljs.core.async.t30508(cb,flag,alt_handler,null));
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
return (function (p1__30511_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30511_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13821__auto__ = wport;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__30512 = (i + 1);
i = G__30512;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13821__auto__ = ret;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13809__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13809__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13809__auto__;
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
var alts_BANG___delegate = function (ports,p__30513){var map__30515 = p__30513;var map__30515__$1 = ((cljs.core.seq_QMARK_.call(null,map__30515))?cljs.core.apply.call(null,cljs.core.hash_map,map__30515):map__30515);var opts = map__30515__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__30513 = null;if (arguments.length > 1) {
  p__30513 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__30513);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30516){
var ports = cljs.core.first(arglist__30516);
var p__30513 = cljs.core.rest(arglist__30516);
return alts_BANG___delegate(ports,p__30513);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30524 = (function (ch,f,map_LT_,meta30525){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30525 = meta30525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30524.cljs$lang$type = true;
cljs.core.async.t30524.cljs$lang$ctorStr = "cljs.core.async/t30524";
cljs.core.async.t30524.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30524");
});
cljs.core.async.t30524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t30524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30527 = (function (fn1,_,meta30525,ch,f,map_LT_,meta30528){
this.fn1 = fn1;
this._ = _;
this.meta30525 = meta30525;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30528 = meta30528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30527.cljs$lang$type = true;
cljs.core.async.t30527.cljs$lang$ctorStr = "cljs.core.async/t30527";
cljs.core.async.t30527.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30527");
});
cljs.core.async.t30527.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t30527.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t30527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__30517_SHARP_){return f1.call(null,(((p1__30517_SHARP_ == null))?null:self__.f.call(null,p1__30517_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t30527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30529){var self__ = this;
var _30529__$1 = this;return self__.meta30528;
});
cljs.core.async.t30527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30529,meta30528__$1){var self__ = this;
var _30529__$1 = this;return (new cljs.core.async.t30527(self__.fn1,self__._,self__.meta30525,self__.ch,self__.f,self__.map_LT_,meta30528__$1));
});
cljs.core.async.__GT_t30527 = (function __GT_t30527(fn1__$1,___$2,meta30525__$1,ch__$2,f__$2,map_LT___$2,meta30528){return (new cljs.core.async.t30527(fn1__$1,___$2,meta30525__$1,ch__$2,f__$2,map_LT___$2,meta30528));
});
}
return (new cljs.core.async.t30527(fn1,___$1,self__.meta30525,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13809__auto__ = ret;if(cljs.core.truth_(and__13809__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13809__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t30524.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30526){var self__ = this;
var _30526__$1 = this;return self__.meta30525;
});
cljs.core.async.t30524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30526,meta30525__$1){var self__ = this;
var _30526__$1 = this;return (new cljs.core.async.t30524(self__.ch,self__.f,self__.map_LT_,meta30525__$1));
});
cljs.core.async.__GT_t30524 = (function __GT_t30524(ch__$1,f__$1,map_LT___$1,meta30525){return (new cljs.core.async.t30524(ch__$1,f__$1,map_LT___$1,meta30525));
});
}
return (new cljs.core.async.t30524(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30533 = (function (ch,f,map_GT_,meta30534){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30534 = meta30534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30533.cljs$lang$type = true;
cljs.core.async.t30533.cljs$lang$ctorStr = "cljs.core.async/t30533";
cljs.core.async.t30533.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30533");
});
cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30535){var self__ = this;
var _30535__$1 = this;return self__.meta30534;
});
cljs.core.async.t30533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30535,meta30534__$1){var self__ = this;
var _30535__$1 = this;return (new cljs.core.async.t30533(self__.ch,self__.f,self__.map_GT_,meta30534__$1));
});
cljs.core.async.__GT_t30533 = (function __GT_t30533(ch__$1,f__$1,map_GT___$1,meta30534){return (new cljs.core.async.t30533(ch__$1,f__$1,map_GT___$1,meta30534));
});
}
return (new cljs.core.async.t30533(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30539 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30539 = (function (ch,p,filter_GT_,meta30540){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30540 = meta30540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30539.cljs$lang$type = true;
cljs.core.async.t30539.cljs$lang$ctorStr = "cljs.core.async/t30539";
cljs.core.async.t30539.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t30539");
});
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30541){var self__ = this;
var _30541__$1 = this;return self__.meta30540;
});
cljs.core.async.t30539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30541,meta30540__$1){var self__ = this;
var _30541__$1 = this;return (new cljs.core.async.t30539(self__.ch,self__.p,self__.filter_GT_,meta30540__$1));
});
cljs.core.async.__GT_t30539 = (function __GT_t30539(ch__$1,p__$1,filter_GT___$1,meta30540){return (new cljs.core.async.t30539(ch__$1,p__$1,filter_GT___$1,meta30540));
});
}
return (new cljs.core.async.t30539(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___30624 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_30603){var state_val_30604 = (state_30603[1]);if((state_val_30604 === 1))
{var state_30603__$1 = state_30603;var statearr_30605_30625 = state_30603__$1;(statearr_30605_30625[2] = null);
(statearr_30605_30625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 2))
{var state_30603__$1 = state_30603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30603__$1,4,ch);
} else
{if((state_val_30604 === 3))
{var inst_30601 = (state_30603[2]);var state_30603__$1 = state_30603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30603__$1,inst_30601);
} else
{if((state_val_30604 === 4))
{var inst_30585 = (state_30603[7]);var inst_30585__$1 = (state_30603[2]);var inst_30586 = (inst_30585__$1 == null);var state_30603__$1 = (function (){var statearr_30606 = state_30603;(statearr_30606[7] = inst_30585__$1);
return statearr_30606;
})();if(cljs.core.truth_(inst_30586))
{var statearr_30607_30626 = state_30603__$1;(statearr_30607_30626[1] = 5);
} else
{var statearr_30608_30627 = state_30603__$1;(statearr_30608_30627[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 5))
{var inst_30588 = cljs.core.async.close_BANG_.call(null,out);var state_30603__$1 = state_30603;var statearr_30609_30628 = state_30603__$1;(statearr_30609_30628[2] = inst_30588);
(statearr_30609_30628[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 6))
{var inst_30585 = (state_30603[7]);var inst_30590 = p.call(null,inst_30585);var state_30603__$1 = state_30603;if(cljs.core.truth_(inst_30590))
{var statearr_30610_30629 = state_30603__$1;(statearr_30610_30629[1] = 8);
} else
{var statearr_30611_30630 = state_30603__$1;(statearr_30611_30630[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 7))
{var inst_30599 = (state_30603[2]);var state_30603__$1 = state_30603;var statearr_30612_30631 = state_30603__$1;(statearr_30612_30631[2] = inst_30599);
(statearr_30612_30631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 8))
{var inst_30585 = (state_30603[7]);var state_30603__$1 = state_30603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30603__$1,11,out,inst_30585);
} else
{if((state_val_30604 === 9))
{var state_30603__$1 = state_30603;var statearr_30613_30632 = state_30603__$1;(statearr_30613_30632[2] = null);
(statearr_30613_30632[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 10))
{var inst_30596 = (state_30603[2]);var state_30603__$1 = (function (){var statearr_30614 = state_30603;(statearr_30614[8] = inst_30596);
return statearr_30614;
})();var statearr_30615_30633 = state_30603__$1;(statearr_30615_30633[2] = null);
(statearr_30615_30633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30604 === 11))
{var inst_30593 = (state_30603[2]);var state_30603__$1 = state_30603;var statearr_30616_30634 = state_30603__$1;(statearr_30616_30634[2] = inst_30593);
(statearr_30616_30634[1] = 10);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_30620 = (new Array(9));(statearr_30620[0] = state_machine__16760__auto__);
(statearr_30620[1] = 1);
return statearr_30620;
});
var state_machine__16760__auto____1 = (function (state_30603){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_30603);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e30621){if((e30621 instanceof Object))
{var ex__16763__auto__ = e30621;var statearr_30622_30635 = state_30603;(statearr_30622_30635[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30636 = state_30603;
state_30603 = G__30636;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_30603){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_30603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_30623 = f__16830__auto__.call(null);(statearr_30623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___30624);
return statearr_30623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_30788){var state_val_30789 = (state_30788[1]);if((state_val_30789 === 1))
{var state_30788__$1 = state_30788;var statearr_30790_30827 = state_30788__$1;(statearr_30790_30827[2] = null);
(statearr_30790_30827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 2))
{var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30788__$1,4,in$);
} else
{if((state_val_30789 === 3))
{var inst_30786 = (state_30788[2]);var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30788__$1,inst_30786);
} else
{if((state_val_30789 === 4))
{var inst_30734 = (state_30788[7]);var inst_30734__$1 = (state_30788[2]);var inst_30735 = (inst_30734__$1 == null);var state_30788__$1 = (function (){var statearr_30791 = state_30788;(statearr_30791[7] = inst_30734__$1);
return statearr_30791;
})();if(cljs.core.truth_(inst_30735))
{var statearr_30792_30828 = state_30788__$1;(statearr_30792_30828[1] = 5);
} else
{var statearr_30793_30829 = state_30788__$1;(statearr_30793_30829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 5))
{var inst_30737 = cljs.core.async.close_BANG_.call(null,out);var state_30788__$1 = state_30788;var statearr_30794_30830 = state_30788__$1;(statearr_30794_30830[2] = inst_30737);
(statearr_30794_30830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 6))
{var inst_30734 = (state_30788[7]);var inst_30739 = f.call(null,inst_30734);var inst_30744 = cljs.core.seq.call(null,inst_30739);var inst_30745 = inst_30744;var inst_30746 = null;var inst_30747 = 0;var inst_30748 = 0;var state_30788__$1 = (function (){var statearr_30795 = state_30788;(statearr_30795[8] = inst_30746);
(statearr_30795[9] = inst_30745);
(statearr_30795[10] = inst_30747);
(statearr_30795[11] = inst_30748);
return statearr_30795;
})();var statearr_30796_30831 = state_30788__$1;(statearr_30796_30831[2] = null);
(statearr_30796_30831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 7))
{var inst_30784 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30797_30832 = state_30788__$1;(statearr_30797_30832[2] = inst_30784);
(statearr_30797_30832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 8))
{var inst_30747 = (state_30788[10]);var inst_30748 = (state_30788[11]);var inst_30750 = (inst_30748 < inst_30747);var inst_30751 = inst_30750;var state_30788__$1 = state_30788;if(cljs.core.truth_(inst_30751))
{var statearr_30798_30833 = state_30788__$1;(statearr_30798_30833[1] = 10);
} else
{var statearr_30799_30834 = state_30788__$1;(statearr_30799_30834[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 9))
{var inst_30781 = (state_30788[2]);var state_30788__$1 = (function (){var statearr_30800 = state_30788;(statearr_30800[12] = inst_30781);
return statearr_30800;
})();var statearr_30801_30835 = state_30788__$1;(statearr_30801_30835[2] = null);
(statearr_30801_30835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 10))
{var inst_30746 = (state_30788[8]);var inst_30748 = (state_30788[11]);var inst_30753 = cljs.core._nth.call(null,inst_30746,inst_30748);var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30788__$1,13,out,inst_30753);
} else
{if((state_val_30789 === 11))
{var inst_30745 = (state_30788[9]);var inst_30759 = (state_30788[13]);var inst_30759__$1 = cljs.core.seq.call(null,inst_30745);var state_30788__$1 = (function (){var statearr_30805 = state_30788;(statearr_30805[13] = inst_30759__$1);
return statearr_30805;
})();if(inst_30759__$1)
{var statearr_30806_30836 = state_30788__$1;(statearr_30806_30836[1] = 14);
} else
{var statearr_30807_30837 = state_30788__$1;(statearr_30807_30837[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 12))
{var inst_30779 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30808_30838 = state_30788__$1;(statearr_30808_30838[2] = inst_30779);
(statearr_30808_30838[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 13))
{var inst_30746 = (state_30788[8]);var inst_30745 = (state_30788[9]);var inst_30747 = (state_30788[10]);var inst_30748 = (state_30788[11]);var inst_30755 = (state_30788[2]);var inst_30756 = (inst_30748 + 1);var tmp30802 = inst_30746;var tmp30803 = inst_30745;var tmp30804 = inst_30747;var inst_30745__$1 = tmp30803;var inst_30746__$1 = tmp30802;var inst_30747__$1 = tmp30804;var inst_30748__$1 = inst_30756;var state_30788__$1 = (function (){var statearr_30809 = state_30788;(statearr_30809[8] = inst_30746__$1);
(statearr_30809[9] = inst_30745__$1);
(statearr_30809[10] = inst_30747__$1);
(statearr_30809[11] = inst_30748__$1);
(statearr_30809[14] = inst_30755);
return statearr_30809;
})();var statearr_30810_30839 = state_30788__$1;(statearr_30810_30839[2] = null);
(statearr_30810_30839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 14))
{var inst_30759 = (state_30788[13]);var inst_30761 = cljs.core.chunked_seq_QMARK_.call(null,inst_30759);var state_30788__$1 = state_30788;if(inst_30761)
{var statearr_30811_30840 = state_30788__$1;(statearr_30811_30840[1] = 17);
} else
{var statearr_30812_30841 = state_30788__$1;(statearr_30812_30841[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 15))
{var state_30788__$1 = state_30788;var statearr_30813_30842 = state_30788__$1;(statearr_30813_30842[2] = null);
(statearr_30813_30842[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 16))
{var inst_30777 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30814_30843 = state_30788__$1;(statearr_30814_30843[2] = inst_30777);
(statearr_30814_30843[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 17))
{var inst_30759 = (state_30788[13]);var inst_30763 = cljs.core.chunk_first.call(null,inst_30759);var inst_30764 = cljs.core.chunk_rest.call(null,inst_30759);var inst_30765 = cljs.core.count.call(null,inst_30763);var inst_30745 = inst_30764;var inst_30746 = inst_30763;var inst_30747 = inst_30765;var inst_30748 = 0;var state_30788__$1 = (function (){var statearr_30815 = state_30788;(statearr_30815[8] = inst_30746);
(statearr_30815[9] = inst_30745);
(statearr_30815[10] = inst_30747);
(statearr_30815[11] = inst_30748);
return statearr_30815;
})();var statearr_30816_30844 = state_30788__$1;(statearr_30816_30844[2] = null);
(statearr_30816_30844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 18))
{var inst_30759 = (state_30788[13]);var inst_30768 = cljs.core.first.call(null,inst_30759);var state_30788__$1 = state_30788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30788__$1,20,out,inst_30768);
} else
{if((state_val_30789 === 19))
{var inst_30774 = (state_30788[2]);var state_30788__$1 = state_30788;var statearr_30817_30845 = state_30788__$1;(statearr_30817_30845[2] = inst_30774);
(statearr_30817_30845[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30789 === 20))
{var inst_30759 = (state_30788[13]);var inst_30770 = (state_30788[2]);var inst_30771 = cljs.core.next.call(null,inst_30759);var inst_30745 = inst_30771;var inst_30746 = null;var inst_30747 = 0;var inst_30748 = 0;var state_30788__$1 = (function (){var statearr_30818 = state_30788;(statearr_30818[15] = inst_30770);
(statearr_30818[8] = inst_30746);
(statearr_30818[9] = inst_30745);
(statearr_30818[10] = inst_30747);
(statearr_30818[11] = inst_30748);
return statearr_30818;
})();var statearr_30819_30846 = state_30788__$1;(statearr_30819_30846[2] = null);
(statearr_30819_30846[1] = 8);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_30823 = (new Array(16));(statearr_30823[0] = state_machine__16760__auto__);
(statearr_30823[1] = 1);
return statearr_30823;
});
var state_machine__16760__auto____1 = (function (state_30788){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_30788);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e30824){if((e30824 instanceof Object))
{var ex__16763__auto__ = e30824;var statearr_30825_30847 = state_30788;(statearr_30825_30847[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30848 = state_30788;
state_30788 = G__30848;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_30788){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_30788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_30826 = f__16830__auto__.call(null);(statearr_30826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_30826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__16829__auto___30929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_30908){var state_val_30909 = (state_30908[1]);if((state_val_30909 === 1))
{var state_30908__$1 = state_30908;var statearr_30910_30930 = state_30908__$1;(statearr_30910_30930[2] = null);
(statearr_30910_30930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 2))
{var state_30908__$1 = state_30908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30908__$1,4,from);
} else
{if((state_val_30909 === 3))
{var inst_30906 = (state_30908[2]);var state_30908__$1 = state_30908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30908__$1,inst_30906);
} else
{if((state_val_30909 === 4))
{var inst_30891 = (state_30908[7]);var inst_30891__$1 = (state_30908[2]);var inst_30892 = (inst_30891__$1 == null);var state_30908__$1 = (function (){var statearr_30911 = state_30908;(statearr_30911[7] = inst_30891__$1);
return statearr_30911;
})();if(cljs.core.truth_(inst_30892))
{var statearr_30912_30931 = state_30908__$1;(statearr_30912_30931[1] = 5);
} else
{var statearr_30913_30932 = state_30908__$1;(statearr_30913_30932[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 5))
{var state_30908__$1 = state_30908;if(cljs.core.truth_(close_QMARK_))
{var statearr_30914_30933 = state_30908__$1;(statearr_30914_30933[1] = 8);
} else
{var statearr_30915_30934 = state_30908__$1;(statearr_30915_30934[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 6))
{var inst_30891 = (state_30908[7]);var state_30908__$1 = state_30908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30908__$1,11,to,inst_30891);
} else
{if((state_val_30909 === 7))
{var inst_30904 = (state_30908[2]);var state_30908__$1 = state_30908;var statearr_30916_30935 = state_30908__$1;(statearr_30916_30935[2] = inst_30904);
(statearr_30916_30935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 8))
{var inst_30895 = cljs.core.async.close_BANG_.call(null,to);var state_30908__$1 = state_30908;var statearr_30917_30936 = state_30908__$1;(statearr_30917_30936[2] = inst_30895);
(statearr_30917_30936[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 9))
{var state_30908__$1 = state_30908;var statearr_30918_30937 = state_30908__$1;(statearr_30918_30937[2] = null);
(statearr_30918_30937[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 10))
{var inst_30898 = (state_30908[2]);var state_30908__$1 = state_30908;var statearr_30919_30938 = state_30908__$1;(statearr_30919_30938[2] = inst_30898);
(statearr_30919_30938[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30909 === 11))
{var inst_30901 = (state_30908[2]);var state_30908__$1 = (function (){var statearr_30920 = state_30908;(statearr_30920[8] = inst_30901);
return statearr_30920;
})();var statearr_30921_30939 = state_30908__$1;(statearr_30921_30939[2] = null);
(statearr_30921_30939[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_30925 = (new Array(9));(statearr_30925[0] = state_machine__16760__auto__);
(statearr_30925[1] = 1);
return statearr_30925;
});
var state_machine__16760__auto____1 = (function (state_30908){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_30908);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e30926){if((e30926 instanceof Object))
{var ex__16763__auto__ = e30926;var statearr_30927_30940 = state_30908;(statearr_30927_30940[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30941 = state_30908;
state_30908 = G__30941;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_30908){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_30908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_30928 = f__16830__auto__.call(null);(statearr_30928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___30929);
return statearr_30928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16829__auto___31028 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_31006){var state_val_31007 = (state_31006[1]);if((state_val_31007 === 1))
{var state_31006__$1 = state_31006;var statearr_31008_31029 = state_31006__$1;(statearr_31008_31029[2] = null);
(statearr_31008_31029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 2))
{var state_31006__$1 = state_31006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31006__$1,4,ch);
} else
{if((state_val_31007 === 3))
{var inst_31004 = (state_31006[2]);var state_31006__$1 = state_31006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31006__$1,inst_31004);
} else
{if((state_val_31007 === 4))
{var inst_30987 = (state_31006[7]);var inst_30987__$1 = (state_31006[2]);var inst_30988 = (inst_30987__$1 == null);var state_31006__$1 = (function (){var statearr_31009 = state_31006;(statearr_31009[7] = inst_30987__$1);
return statearr_31009;
})();if(cljs.core.truth_(inst_30988))
{var statearr_31010_31030 = state_31006__$1;(statearr_31010_31030[1] = 5);
} else
{var statearr_31011_31031 = state_31006__$1;(statearr_31011_31031[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 5))
{var inst_30990 = cljs.core.async.close_BANG_.call(null,tc);var inst_30991 = cljs.core.async.close_BANG_.call(null,fc);var state_31006__$1 = (function (){var statearr_31012 = state_31006;(statearr_31012[8] = inst_30990);
return statearr_31012;
})();var statearr_31013_31032 = state_31006__$1;(statearr_31013_31032[2] = inst_30991);
(statearr_31013_31032[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 6))
{var inst_30987 = (state_31006[7]);var inst_30993 = p.call(null,inst_30987);var state_31006__$1 = state_31006;if(cljs.core.truth_(inst_30993))
{var statearr_31014_31033 = state_31006__$1;(statearr_31014_31033[1] = 9);
} else
{var statearr_31015_31034 = state_31006__$1;(statearr_31015_31034[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 7))
{var inst_31002 = (state_31006[2]);var state_31006__$1 = state_31006;var statearr_31016_31035 = state_31006__$1;(statearr_31016_31035[2] = inst_31002);
(statearr_31016_31035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 8))
{var inst_30999 = (state_31006[2]);var state_31006__$1 = (function (){var statearr_31017 = state_31006;(statearr_31017[9] = inst_30999);
return statearr_31017;
})();var statearr_31018_31036 = state_31006__$1;(statearr_31018_31036[2] = null);
(statearr_31018_31036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 9))
{var state_31006__$1 = state_31006;var statearr_31019_31037 = state_31006__$1;(statearr_31019_31037[2] = tc);
(statearr_31019_31037[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 10))
{var state_31006__$1 = state_31006;var statearr_31020_31038 = state_31006__$1;(statearr_31020_31038[2] = fc);
(statearr_31020_31038[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31007 === 11))
{var inst_30987 = (state_31006[7]);var inst_30997 = (state_31006[2]);var state_31006__$1 = state_31006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31006__$1,8,inst_30997,inst_30987);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_31024 = (new Array(10));(statearr_31024[0] = state_machine__16760__auto__);
(statearr_31024[1] = 1);
return statearr_31024;
});
var state_machine__16760__auto____1 = (function (state_31006){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_31006);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e31025){if((e31025 instanceof Object))
{var ex__16763__auto__ = e31025;var statearr_31026_31039 = state_31006;(statearr_31026_31039[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31040 = state_31006;
state_31006 = G__31040;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_31006){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_31006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_31027 = f__16830__auto__.call(null);(statearr_31027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___31028);
return statearr_31027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_31087){var state_val_31088 = (state_31087[1]);if((state_val_31088 === 7))
{var inst_31083 = (state_31087[2]);var state_31087__$1 = state_31087;var statearr_31089_31105 = state_31087__$1;(statearr_31089_31105[2] = inst_31083);
(statearr_31089_31105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31088 === 6))
{var inst_31073 = (state_31087[7]);var inst_31076 = (state_31087[8]);var inst_31080 = f.call(null,inst_31073,inst_31076);var inst_31073__$1 = inst_31080;var state_31087__$1 = (function (){var statearr_31090 = state_31087;(statearr_31090[7] = inst_31073__$1);
return statearr_31090;
})();var statearr_31091_31106 = state_31087__$1;(statearr_31091_31106[2] = null);
(statearr_31091_31106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31088 === 5))
{var inst_31073 = (state_31087[7]);var state_31087__$1 = state_31087;var statearr_31092_31107 = state_31087__$1;(statearr_31092_31107[2] = inst_31073);
(statearr_31092_31107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31088 === 4))
{var inst_31076 = (state_31087[8]);var inst_31076__$1 = (state_31087[2]);var inst_31077 = (inst_31076__$1 == null);var state_31087__$1 = (function (){var statearr_31093 = state_31087;(statearr_31093[8] = inst_31076__$1);
return statearr_31093;
})();if(cljs.core.truth_(inst_31077))
{var statearr_31094_31108 = state_31087__$1;(statearr_31094_31108[1] = 5);
} else
{var statearr_31095_31109 = state_31087__$1;(statearr_31095_31109[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31088 === 3))
{var inst_31085 = (state_31087[2]);var state_31087__$1 = state_31087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31087__$1,inst_31085);
} else
{if((state_val_31088 === 2))
{var state_31087__$1 = state_31087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31087__$1,4,ch);
} else
{if((state_val_31088 === 1))
{var inst_31073 = init;var state_31087__$1 = (function (){var statearr_31096 = state_31087;(statearr_31096[7] = inst_31073);
return statearr_31096;
})();var statearr_31097_31110 = state_31087__$1;(statearr_31097_31110[2] = null);
(statearr_31097_31110[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_31101 = (new Array(9));(statearr_31101[0] = state_machine__16760__auto__);
(statearr_31101[1] = 1);
return statearr_31101;
});
var state_machine__16760__auto____1 = (function (state_31087){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_31087);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e31102){if((e31102 instanceof Object))
{var ex__16763__auto__ = e31102;var statearr_31103_31111 = state_31087;(statearr_31103_31111[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31112 = state_31087;
state_31087 = G__31112;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_31087){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_31087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_31104 = f__16830__auto__.call(null);(statearr_31104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_31104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_31174){var state_val_31175 = (state_31174[1]);if((state_val_31175 === 1))
{var inst_31154 = cljs.core.seq.call(null,coll);var inst_31155 = inst_31154;var state_31174__$1 = (function (){var statearr_31176 = state_31174;(statearr_31176[7] = inst_31155);
return statearr_31176;
})();var statearr_31177_31195 = state_31174__$1;(statearr_31177_31195[2] = null);
(statearr_31177_31195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 2))
{var inst_31155 = (state_31174[7]);var state_31174__$1 = state_31174;if(cljs.core.truth_(inst_31155))
{var statearr_31178_31196 = state_31174__$1;(statearr_31178_31196[1] = 4);
} else
{var statearr_31179_31197 = state_31174__$1;(statearr_31179_31197[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 3))
{var inst_31172 = (state_31174[2]);var state_31174__$1 = state_31174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31174__$1,inst_31172);
} else
{if((state_val_31175 === 4))
{var inst_31155 = (state_31174[7]);var inst_31158 = cljs.core.first.call(null,inst_31155);var state_31174__$1 = state_31174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31174__$1,7,ch,inst_31158);
} else
{if((state_val_31175 === 5))
{var state_31174__$1 = state_31174;if(cljs.core.truth_(close_QMARK_))
{var statearr_31180_31198 = state_31174__$1;(statearr_31180_31198[1] = 8);
} else
{var statearr_31181_31199 = state_31174__$1;(statearr_31181_31199[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 6))
{var inst_31170 = (state_31174[2]);var state_31174__$1 = state_31174;var statearr_31182_31200 = state_31174__$1;(statearr_31182_31200[2] = inst_31170);
(statearr_31182_31200[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 7))
{var inst_31155 = (state_31174[7]);var inst_31160 = (state_31174[2]);var inst_31161 = cljs.core.next.call(null,inst_31155);var inst_31155__$1 = inst_31161;var state_31174__$1 = (function (){var statearr_31183 = state_31174;(statearr_31183[8] = inst_31160);
(statearr_31183[7] = inst_31155__$1);
return statearr_31183;
})();var statearr_31184_31201 = state_31174__$1;(statearr_31184_31201[2] = null);
(statearr_31184_31201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 8))
{var inst_31165 = cljs.core.async.close_BANG_.call(null,ch);var state_31174__$1 = state_31174;var statearr_31185_31202 = state_31174__$1;(statearr_31185_31202[2] = inst_31165);
(statearr_31185_31202[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 9))
{var state_31174__$1 = state_31174;var statearr_31186_31203 = state_31174__$1;(statearr_31186_31203[2] = null);
(statearr_31186_31203[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31175 === 10))
{var inst_31168 = (state_31174[2]);var state_31174__$1 = state_31174;var statearr_31187_31204 = state_31174__$1;(statearr_31187_31204[2] = inst_31168);
(statearr_31187_31204[1] = 6);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_31191 = (new Array(9));(statearr_31191[0] = state_machine__16760__auto__);
(statearr_31191[1] = 1);
return statearr_31191;
});
var state_machine__16760__auto____1 = (function (state_31174){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_31174);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e31192){if((e31192 instanceof Object))
{var ex__16763__auto__ = e31192;var statearr_31193_31205 = state_31174;(statearr_31193_31205[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31206 = state_31174;
state_31174 = G__31206;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_31174){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_31174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_31194 = f__16830__auto__.call(null);(statearr_31194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_31194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
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
cljs.core.async.Mux = (function (){var obj31208 = {};return obj31208;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13809__auto__ = _;if(and__13809__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14424__auto__ = (((_ == null))?null:_);return (function (){var or__13821__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj31210 = {};return obj31210;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t31434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31434 = (function (cs,ch,mult,meta31435){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31435 = meta31435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31434.cljs$lang$type = true;
cljs.core.async.t31434.cljs$lang$ctorStr = "cljs.core.async/t31434";
cljs.core.async.t31434.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t31434");
});})(cs))
;
cljs.core.async.t31434.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t31434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t31434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t31434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t31434.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t31434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31436){var self__ = this;
var _31436__$1 = this;return self__.meta31435;
});})(cs))
;
cljs.core.async.t31434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31436,meta31435__$1){var self__ = this;
var _31436__$1 = this;return (new cljs.core.async.t31434(self__.cs,self__.ch,self__.mult,meta31435__$1));
});})(cs))
;
cljs.core.async.__GT_t31434 = ((function (cs){
return (function __GT_t31434(cs__$1,ch__$1,mult__$1,meta31435){return (new cljs.core.async.t31434(cs__$1,ch__$1,mult__$1,meta31435));
});})(cs))
;
}
return (new cljs.core.async.t31434(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16829__auto___31657 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_31571){var state_val_31572 = (state_31571[1]);if((state_val_31572 === 32))
{var inst_31439 = (state_31571[7]);var inst_31515 = (state_31571[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31571,31,Object,null,30);var inst_31522 = cljs.core.async.put_BANG_.call(null,inst_31515,inst_31439,done);var state_31571__$1 = state_31571;var statearr_31573_31658 = state_31571__$1;(statearr_31573_31658[2] = inst_31522);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 1))
{var state_31571__$1 = state_31571;var statearr_31574_31659 = state_31571__$1;(statearr_31574_31659[2] = null);
(statearr_31574_31659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 33))
{var inst_31528 = (state_31571[9]);var inst_31530 = cljs.core.chunked_seq_QMARK_.call(null,inst_31528);var state_31571__$1 = state_31571;if(inst_31530)
{var statearr_31575_31660 = state_31571__$1;(statearr_31575_31660[1] = 36);
} else
{var statearr_31576_31661 = state_31571__$1;(statearr_31576_31661[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 2))
{var state_31571__$1 = state_31571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31571__$1,4,ch);
} else
{if((state_val_31572 === 34))
{var state_31571__$1 = state_31571;var statearr_31577_31662 = state_31571__$1;(statearr_31577_31662[2] = null);
(statearr_31577_31662[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 3))
{var inst_31569 = (state_31571[2]);var state_31571__$1 = state_31571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31571__$1,inst_31569);
} else
{if((state_val_31572 === 35))
{var inst_31553 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31578_31663 = state_31571__$1;(statearr_31578_31663[2] = inst_31553);
(statearr_31578_31663[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 4))
{var inst_31439 = (state_31571[7]);var inst_31439__$1 = (state_31571[2]);var inst_31440 = (inst_31439__$1 == null);var state_31571__$1 = (function (){var statearr_31579 = state_31571;(statearr_31579[7] = inst_31439__$1);
return statearr_31579;
})();if(cljs.core.truth_(inst_31440))
{var statearr_31580_31664 = state_31571__$1;(statearr_31580_31664[1] = 5);
} else
{var statearr_31581_31665 = state_31571__$1;(statearr_31581_31665[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 36))
{var inst_31528 = (state_31571[9]);var inst_31532 = cljs.core.chunk_first.call(null,inst_31528);var inst_31533 = cljs.core.chunk_rest.call(null,inst_31528);var inst_31534 = cljs.core.count.call(null,inst_31532);var inst_31507 = inst_31533;var inst_31508 = inst_31532;var inst_31509 = inst_31534;var inst_31510 = 0;var state_31571__$1 = (function (){var statearr_31582 = state_31571;(statearr_31582[10] = inst_31508);
(statearr_31582[11] = inst_31509);
(statearr_31582[12] = inst_31507);
(statearr_31582[13] = inst_31510);
return statearr_31582;
})();var statearr_31583_31666 = state_31571__$1;(statearr_31583_31666[2] = null);
(statearr_31583_31666[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 5))
{var inst_31446 = cljs.core.deref.call(null,cs);var inst_31447 = cljs.core.seq.call(null,inst_31446);var inst_31448 = inst_31447;var inst_31449 = null;var inst_31450 = 0;var inst_31451 = 0;var state_31571__$1 = (function (){var statearr_31584 = state_31571;(statearr_31584[14] = inst_31451);
(statearr_31584[15] = inst_31450);
(statearr_31584[16] = inst_31448);
(statearr_31584[17] = inst_31449);
return statearr_31584;
})();var statearr_31585_31667 = state_31571__$1;(statearr_31585_31667[2] = null);
(statearr_31585_31667[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 37))
{var inst_31528 = (state_31571[9]);var inst_31537 = cljs.core.first.call(null,inst_31528);var state_31571__$1 = (function (){var statearr_31586 = state_31571;(statearr_31586[18] = inst_31537);
return statearr_31586;
})();var statearr_31587_31668 = state_31571__$1;(statearr_31587_31668[2] = null);
(statearr_31587_31668[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 6))
{var inst_31499 = (state_31571[19]);var inst_31498 = cljs.core.deref.call(null,cs);var inst_31499__$1 = cljs.core.keys.call(null,inst_31498);var inst_31500 = cljs.core.count.call(null,inst_31499__$1);var inst_31501 = cljs.core.reset_BANG_.call(null,dctr,inst_31500);var inst_31506 = cljs.core.seq.call(null,inst_31499__$1);var inst_31507 = inst_31506;var inst_31508 = null;var inst_31509 = 0;var inst_31510 = 0;var state_31571__$1 = (function (){var statearr_31588 = state_31571;(statearr_31588[10] = inst_31508);
(statearr_31588[19] = inst_31499__$1);
(statearr_31588[11] = inst_31509);
(statearr_31588[12] = inst_31507);
(statearr_31588[13] = inst_31510);
(statearr_31588[20] = inst_31501);
return statearr_31588;
})();var statearr_31589_31669 = state_31571__$1;(statearr_31589_31669[2] = null);
(statearr_31589_31669[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 38))
{var inst_31550 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31590_31670 = state_31571__$1;(statearr_31590_31670[2] = inst_31550);
(statearr_31590_31670[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 7))
{var inst_31567 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31591_31671 = state_31571__$1;(statearr_31591_31671[2] = inst_31567);
(statearr_31591_31671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 39))
{var inst_31528 = (state_31571[9]);var inst_31546 = (state_31571[2]);var inst_31547 = cljs.core.next.call(null,inst_31528);var inst_31507 = inst_31547;var inst_31508 = null;var inst_31509 = 0;var inst_31510 = 0;var state_31571__$1 = (function (){var statearr_31592 = state_31571;(statearr_31592[21] = inst_31546);
(statearr_31592[10] = inst_31508);
(statearr_31592[11] = inst_31509);
(statearr_31592[12] = inst_31507);
(statearr_31592[13] = inst_31510);
return statearr_31592;
})();var statearr_31593_31672 = state_31571__$1;(statearr_31593_31672[2] = null);
(statearr_31593_31672[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 8))
{var inst_31451 = (state_31571[14]);var inst_31450 = (state_31571[15]);var inst_31453 = (inst_31451 < inst_31450);var inst_31454 = inst_31453;var state_31571__$1 = state_31571;if(cljs.core.truth_(inst_31454))
{var statearr_31594_31673 = state_31571__$1;(statearr_31594_31673[1] = 10);
} else
{var statearr_31595_31674 = state_31571__$1;(statearr_31595_31674[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 40))
{var inst_31537 = (state_31571[18]);var inst_31538 = (state_31571[2]);var inst_31539 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31540 = cljs.core.async.untap_STAR_.call(null,m,inst_31537);var state_31571__$1 = (function (){var statearr_31596 = state_31571;(statearr_31596[22] = inst_31538);
(statearr_31596[23] = inst_31539);
return statearr_31596;
})();var statearr_31597_31675 = state_31571__$1;(statearr_31597_31675[2] = inst_31540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 9))
{var inst_31496 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31598_31676 = state_31571__$1;(statearr_31598_31676[2] = inst_31496);
(statearr_31598_31676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 41))
{var inst_31439 = (state_31571[7]);var inst_31537 = (state_31571[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31571,40,Object,null,39);var inst_31544 = cljs.core.async.put_BANG_.call(null,inst_31537,inst_31439,done);var state_31571__$1 = state_31571;var statearr_31599_31677 = state_31571__$1;(statearr_31599_31677[2] = inst_31544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 10))
{var inst_31451 = (state_31571[14]);var inst_31449 = (state_31571[17]);var inst_31457 = cljs.core._nth.call(null,inst_31449,inst_31451);var inst_31458 = cljs.core.nth.call(null,inst_31457,0,null);var inst_31459 = cljs.core.nth.call(null,inst_31457,1,null);var state_31571__$1 = (function (){var statearr_31600 = state_31571;(statearr_31600[24] = inst_31458);
return statearr_31600;
})();if(cljs.core.truth_(inst_31459))
{var statearr_31601_31678 = state_31571__$1;(statearr_31601_31678[1] = 13);
} else
{var statearr_31602_31679 = state_31571__$1;(statearr_31602_31679[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 42))
{var state_31571__$1 = state_31571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31571__$1,45,dchan);
} else
{if((state_val_31572 === 11))
{var inst_31448 = (state_31571[16]);var inst_31468 = (state_31571[25]);var inst_31468__$1 = cljs.core.seq.call(null,inst_31448);var state_31571__$1 = (function (){var statearr_31603 = state_31571;(statearr_31603[25] = inst_31468__$1);
return statearr_31603;
})();if(inst_31468__$1)
{var statearr_31604_31680 = state_31571__$1;(statearr_31604_31680[1] = 16);
} else
{var statearr_31605_31681 = state_31571__$1;(statearr_31605_31681[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 43))
{var state_31571__$1 = state_31571;var statearr_31606_31682 = state_31571__$1;(statearr_31606_31682[2] = null);
(statearr_31606_31682[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 12))
{var inst_31494 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31607_31683 = state_31571__$1;(statearr_31607_31683[2] = inst_31494);
(statearr_31607_31683[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 44))
{var inst_31564 = (state_31571[2]);var state_31571__$1 = (function (){var statearr_31608 = state_31571;(statearr_31608[26] = inst_31564);
return statearr_31608;
})();var statearr_31609_31684 = state_31571__$1;(statearr_31609_31684[2] = null);
(statearr_31609_31684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 13))
{var inst_31458 = (state_31571[24]);var inst_31461 = cljs.core.async.close_BANG_.call(null,inst_31458);var state_31571__$1 = state_31571;var statearr_31610_31685 = state_31571__$1;(statearr_31610_31685[2] = inst_31461);
(statearr_31610_31685[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 45))
{var inst_31561 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31614_31686 = state_31571__$1;(statearr_31614_31686[2] = inst_31561);
(statearr_31614_31686[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 14))
{var state_31571__$1 = state_31571;var statearr_31615_31687 = state_31571__$1;(statearr_31615_31687[2] = null);
(statearr_31615_31687[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 15))
{var inst_31451 = (state_31571[14]);var inst_31450 = (state_31571[15]);var inst_31448 = (state_31571[16]);var inst_31449 = (state_31571[17]);var inst_31464 = (state_31571[2]);var inst_31465 = (inst_31451 + 1);var tmp31611 = inst_31450;var tmp31612 = inst_31448;var tmp31613 = inst_31449;var inst_31448__$1 = tmp31612;var inst_31449__$1 = tmp31613;var inst_31450__$1 = tmp31611;var inst_31451__$1 = inst_31465;var state_31571__$1 = (function (){var statearr_31616 = state_31571;(statearr_31616[27] = inst_31464);
(statearr_31616[14] = inst_31451__$1);
(statearr_31616[15] = inst_31450__$1);
(statearr_31616[16] = inst_31448__$1);
(statearr_31616[17] = inst_31449__$1);
return statearr_31616;
})();var statearr_31617_31688 = state_31571__$1;(statearr_31617_31688[2] = null);
(statearr_31617_31688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 16))
{var inst_31468 = (state_31571[25]);var inst_31470 = cljs.core.chunked_seq_QMARK_.call(null,inst_31468);var state_31571__$1 = state_31571;if(inst_31470)
{var statearr_31618_31689 = state_31571__$1;(statearr_31618_31689[1] = 19);
} else
{var statearr_31619_31690 = state_31571__$1;(statearr_31619_31690[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 17))
{var state_31571__$1 = state_31571;var statearr_31620_31691 = state_31571__$1;(statearr_31620_31691[2] = null);
(statearr_31620_31691[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 18))
{var inst_31492 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31621_31692 = state_31571__$1;(statearr_31621_31692[2] = inst_31492);
(statearr_31621_31692[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 19))
{var inst_31468 = (state_31571[25]);var inst_31472 = cljs.core.chunk_first.call(null,inst_31468);var inst_31473 = cljs.core.chunk_rest.call(null,inst_31468);var inst_31474 = cljs.core.count.call(null,inst_31472);var inst_31448 = inst_31473;var inst_31449 = inst_31472;var inst_31450 = inst_31474;var inst_31451 = 0;var state_31571__$1 = (function (){var statearr_31622 = state_31571;(statearr_31622[14] = inst_31451);
(statearr_31622[15] = inst_31450);
(statearr_31622[16] = inst_31448);
(statearr_31622[17] = inst_31449);
return statearr_31622;
})();var statearr_31623_31693 = state_31571__$1;(statearr_31623_31693[2] = null);
(statearr_31623_31693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 20))
{var inst_31468 = (state_31571[25]);var inst_31478 = cljs.core.first.call(null,inst_31468);var inst_31479 = cljs.core.nth.call(null,inst_31478,0,null);var inst_31480 = cljs.core.nth.call(null,inst_31478,1,null);var state_31571__$1 = (function (){var statearr_31624 = state_31571;(statearr_31624[28] = inst_31479);
return statearr_31624;
})();if(cljs.core.truth_(inst_31480))
{var statearr_31625_31694 = state_31571__$1;(statearr_31625_31694[1] = 22);
} else
{var statearr_31626_31695 = state_31571__$1;(statearr_31626_31695[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 21))
{var inst_31489 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31627_31696 = state_31571__$1;(statearr_31627_31696[2] = inst_31489);
(statearr_31627_31696[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 22))
{var inst_31479 = (state_31571[28]);var inst_31482 = cljs.core.async.close_BANG_.call(null,inst_31479);var state_31571__$1 = state_31571;var statearr_31628_31697 = state_31571__$1;(statearr_31628_31697[2] = inst_31482);
(statearr_31628_31697[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 23))
{var state_31571__$1 = state_31571;var statearr_31629_31698 = state_31571__$1;(statearr_31629_31698[2] = null);
(statearr_31629_31698[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 24))
{var inst_31468 = (state_31571[25]);var inst_31485 = (state_31571[2]);var inst_31486 = cljs.core.next.call(null,inst_31468);var inst_31448 = inst_31486;var inst_31449 = null;var inst_31450 = 0;var inst_31451 = 0;var state_31571__$1 = (function (){var statearr_31630 = state_31571;(statearr_31630[14] = inst_31451);
(statearr_31630[15] = inst_31450);
(statearr_31630[16] = inst_31448);
(statearr_31630[17] = inst_31449);
(statearr_31630[29] = inst_31485);
return statearr_31630;
})();var statearr_31631_31699 = state_31571__$1;(statearr_31631_31699[2] = null);
(statearr_31631_31699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 25))
{var inst_31509 = (state_31571[11]);var inst_31510 = (state_31571[13]);var inst_31512 = (inst_31510 < inst_31509);var inst_31513 = inst_31512;var state_31571__$1 = state_31571;if(cljs.core.truth_(inst_31513))
{var statearr_31632_31700 = state_31571__$1;(statearr_31632_31700[1] = 27);
} else
{var statearr_31633_31701 = state_31571__$1;(statearr_31633_31701[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 26))
{var inst_31499 = (state_31571[19]);var inst_31557 = (state_31571[2]);var inst_31558 = cljs.core.seq.call(null,inst_31499);var state_31571__$1 = (function (){var statearr_31634 = state_31571;(statearr_31634[30] = inst_31557);
return statearr_31634;
})();if(inst_31558)
{var statearr_31635_31702 = state_31571__$1;(statearr_31635_31702[1] = 42);
} else
{var statearr_31636_31703 = state_31571__$1;(statearr_31636_31703[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 27))
{var inst_31508 = (state_31571[10]);var inst_31510 = (state_31571[13]);var inst_31515 = cljs.core._nth.call(null,inst_31508,inst_31510);var state_31571__$1 = (function (){var statearr_31637 = state_31571;(statearr_31637[8] = inst_31515);
return statearr_31637;
})();var statearr_31638_31704 = state_31571__$1;(statearr_31638_31704[2] = null);
(statearr_31638_31704[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 28))
{var inst_31507 = (state_31571[12]);var inst_31528 = (state_31571[9]);var inst_31528__$1 = cljs.core.seq.call(null,inst_31507);var state_31571__$1 = (function (){var statearr_31642 = state_31571;(statearr_31642[9] = inst_31528__$1);
return statearr_31642;
})();if(inst_31528__$1)
{var statearr_31643_31705 = state_31571__$1;(statearr_31643_31705[1] = 33);
} else
{var statearr_31644_31706 = state_31571__$1;(statearr_31644_31706[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 29))
{var inst_31555 = (state_31571[2]);var state_31571__$1 = state_31571;var statearr_31645_31707 = state_31571__$1;(statearr_31645_31707[2] = inst_31555);
(statearr_31645_31707[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 30))
{var inst_31508 = (state_31571[10]);var inst_31509 = (state_31571[11]);var inst_31507 = (state_31571[12]);var inst_31510 = (state_31571[13]);var inst_31524 = (state_31571[2]);var inst_31525 = (inst_31510 + 1);var tmp31639 = inst_31508;var tmp31640 = inst_31509;var tmp31641 = inst_31507;var inst_31507__$1 = tmp31641;var inst_31508__$1 = tmp31639;var inst_31509__$1 = tmp31640;var inst_31510__$1 = inst_31525;var state_31571__$1 = (function (){var statearr_31646 = state_31571;(statearr_31646[10] = inst_31508__$1);
(statearr_31646[11] = inst_31509__$1);
(statearr_31646[12] = inst_31507__$1);
(statearr_31646[31] = inst_31524);
(statearr_31646[13] = inst_31510__$1);
return statearr_31646;
})();var statearr_31647_31708 = state_31571__$1;(statearr_31647_31708[2] = null);
(statearr_31647_31708[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31572 === 31))
{var inst_31515 = (state_31571[8]);var inst_31516 = (state_31571[2]);var inst_31517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31518 = cljs.core.async.untap_STAR_.call(null,m,inst_31515);var state_31571__$1 = (function (){var statearr_31648 = state_31571;(statearr_31648[32] = inst_31516);
(statearr_31648[33] = inst_31517);
return statearr_31648;
})();var statearr_31649_31709 = state_31571__$1;(statearr_31649_31709[2] = inst_31518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571__$1);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_31653 = (new Array(34));(statearr_31653[0] = state_machine__16760__auto__);
(statearr_31653[1] = 1);
return statearr_31653;
});
var state_machine__16760__auto____1 = (function (state_31571){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_31571);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e31654){if((e31654 instanceof Object))
{var ex__16763__auto__ = e31654;var statearr_31655_31710 = state_31571;(statearr_31655_31710[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31711 = state_31571;
state_31571 = G__31711;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_31571){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_31571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_31656 = f__16830__auto__.call(null);(statearr_31656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___31657);
return statearr_31656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.Mix = (function (){var obj31713 = {};return obj31713;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t31823 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31823 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31824){
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
this.meta31824 = meta31824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31823.cljs$lang$type = true;
cljs.core.async.t31823.cljs$lang$ctorStr = "cljs.core.async/t31823";
cljs.core.async.t31823.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t31823");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31823.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31825){var self__ = this;
var _31825__$1 = this;return self__.meta31824;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31825,meta31824__$1){var self__ = this;
var _31825__$1 = this;return (new cljs.core.async.t31823(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31824__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31823 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31823(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31824){return (new cljs.core.async.t31823(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31824));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31823(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__16829__auto___31932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_31890){var state_val_31891 = (state_31890[1]);if((state_val_31891 === 1))
{var inst_31829 = (state_31890[7]);var inst_31829__$1 = calc_state.call(null);var inst_31830 = cljs.core.seq_QMARK_.call(null,inst_31829__$1);var state_31890__$1 = (function (){var statearr_31892 = state_31890;(statearr_31892[7] = inst_31829__$1);
return statearr_31892;
})();if(inst_31830)
{var statearr_31893_31933 = state_31890__$1;(statearr_31893_31933[1] = 2);
} else
{var statearr_31894_31934 = state_31890__$1;(statearr_31894_31934[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 2))
{var inst_31829 = (state_31890[7]);var inst_31832 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31829);var state_31890__$1 = state_31890;var statearr_31895_31935 = state_31890__$1;(statearr_31895_31935[2] = inst_31832);
(statearr_31895_31935[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 3))
{var inst_31829 = (state_31890[7]);var state_31890__$1 = state_31890;var statearr_31896_31936 = state_31890__$1;(statearr_31896_31936[2] = inst_31829);
(statearr_31896_31936[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 4))
{var inst_31829 = (state_31890[7]);var inst_31835 = (state_31890[2]);var inst_31836 = cljs.core.get.call(null,inst_31835,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31837 = cljs.core.get.call(null,inst_31835,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31838 = cljs.core.get.call(null,inst_31835,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31839 = inst_31829;var state_31890__$1 = (function (){var statearr_31897 = state_31890;(statearr_31897[8] = inst_31838);
(statearr_31897[9] = inst_31839);
(statearr_31897[10] = inst_31836);
(statearr_31897[11] = inst_31837);
return statearr_31897;
})();var statearr_31898_31937 = state_31890__$1;(statearr_31898_31937[2] = null);
(statearr_31898_31937[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 5))
{var inst_31839 = (state_31890[9]);var inst_31842 = cljs.core.seq_QMARK_.call(null,inst_31839);var state_31890__$1 = state_31890;if(inst_31842)
{var statearr_31899_31938 = state_31890__$1;(statearr_31899_31938[1] = 7);
} else
{var statearr_31900_31939 = state_31890__$1;(statearr_31900_31939[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 6))
{var inst_31888 = (state_31890[2]);var state_31890__$1 = state_31890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31890__$1,inst_31888);
} else
{if((state_val_31891 === 7))
{var inst_31839 = (state_31890[9]);var inst_31844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31839);var state_31890__$1 = state_31890;var statearr_31901_31940 = state_31890__$1;(statearr_31901_31940[2] = inst_31844);
(statearr_31901_31940[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 8))
{var inst_31839 = (state_31890[9]);var state_31890__$1 = state_31890;var statearr_31902_31941 = state_31890__$1;(statearr_31902_31941[2] = inst_31839);
(statearr_31902_31941[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 9))
{var inst_31847 = (state_31890[12]);var inst_31847__$1 = (state_31890[2]);var inst_31848 = cljs.core.get.call(null,inst_31847__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31849 = cljs.core.get.call(null,inst_31847__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31850 = cljs.core.get.call(null,inst_31847__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31890__$1 = (function (){var statearr_31903 = state_31890;(statearr_31903[13] = inst_31850);
(statearr_31903[14] = inst_31849);
(statearr_31903[12] = inst_31847__$1);
return statearr_31903;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31890__$1,10,inst_31848);
} else
{if((state_val_31891 === 10))
{var inst_31855 = (state_31890[15]);var inst_31854 = (state_31890[16]);var inst_31853 = (state_31890[2]);var inst_31854__$1 = cljs.core.nth.call(null,inst_31853,0,null);var inst_31855__$1 = cljs.core.nth.call(null,inst_31853,1,null);var inst_31856 = (inst_31854__$1 == null);var inst_31857 = cljs.core._EQ_.call(null,inst_31855__$1,change);var inst_31858 = (inst_31856) || (inst_31857);var state_31890__$1 = (function (){var statearr_31904 = state_31890;(statearr_31904[15] = inst_31855__$1);
(statearr_31904[16] = inst_31854__$1);
return statearr_31904;
})();if(cljs.core.truth_(inst_31858))
{var statearr_31905_31942 = state_31890__$1;(statearr_31905_31942[1] = 11);
} else
{var statearr_31906_31943 = state_31890__$1;(statearr_31906_31943[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 11))
{var inst_31854 = (state_31890[16]);var inst_31860 = (inst_31854 == null);var state_31890__$1 = state_31890;if(cljs.core.truth_(inst_31860))
{var statearr_31907_31944 = state_31890__$1;(statearr_31907_31944[1] = 14);
} else
{var statearr_31908_31945 = state_31890__$1;(statearr_31908_31945[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 12))
{var inst_31850 = (state_31890[13]);var inst_31869 = (state_31890[17]);var inst_31855 = (state_31890[15]);var inst_31869__$1 = inst_31850.call(null,inst_31855);var state_31890__$1 = (function (){var statearr_31909 = state_31890;(statearr_31909[17] = inst_31869__$1);
return statearr_31909;
})();if(cljs.core.truth_(inst_31869__$1))
{var statearr_31910_31946 = state_31890__$1;(statearr_31910_31946[1] = 17);
} else
{var statearr_31911_31947 = state_31890__$1;(statearr_31911_31947[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 13))
{var inst_31886 = (state_31890[2]);var state_31890__$1 = state_31890;var statearr_31912_31948 = state_31890__$1;(statearr_31912_31948[2] = inst_31886);
(statearr_31912_31948[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 14))
{var inst_31855 = (state_31890[15]);var inst_31862 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31855);var state_31890__$1 = state_31890;var statearr_31913_31949 = state_31890__$1;(statearr_31913_31949[2] = inst_31862);
(statearr_31913_31949[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 15))
{var state_31890__$1 = state_31890;var statearr_31914_31950 = state_31890__$1;(statearr_31914_31950[2] = null);
(statearr_31914_31950[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 16))
{var inst_31865 = (state_31890[2]);var inst_31866 = calc_state.call(null);var inst_31839 = inst_31866;var state_31890__$1 = (function (){var statearr_31915 = state_31890;(statearr_31915[18] = inst_31865);
(statearr_31915[9] = inst_31839);
return statearr_31915;
})();var statearr_31916_31951 = state_31890__$1;(statearr_31916_31951[2] = null);
(statearr_31916_31951[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 17))
{var inst_31869 = (state_31890[17]);var state_31890__$1 = state_31890;var statearr_31917_31952 = state_31890__$1;(statearr_31917_31952[2] = inst_31869);
(statearr_31917_31952[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 18))
{var inst_31850 = (state_31890[13]);var inst_31849 = (state_31890[14]);var inst_31855 = (state_31890[15]);var inst_31872 = cljs.core.empty_QMARK_.call(null,inst_31850);var inst_31873 = inst_31849.call(null,inst_31855);var inst_31874 = cljs.core.not.call(null,inst_31873);var inst_31875 = (inst_31872) && (inst_31874);var state_31890__$1 = state_31890;var statearr_31918_31953 = state_31890__$1;(statearr_31918_31953[2] = inst_31875);
(statearr_31918_31953[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 19))
{var inst_31877 = (state_31890[2]);var state_31890__$1 = state_31890;if(cljs.core.truth_(inst_31877))
{var statearr_31919_31954 = state_31890__$1;(statearr_31919_31954[1] = 20);
} else
{var statearr_31920_31955 = state_31890__$1;(statearr_31920_31955[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 20))
{var inst_31854 = (state_31890[16]);var state_31890__$1 = state_31890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31890__$1,23,out,inst_31854);
} else
{if((state_val_31891 === 21))
{var state_31890__$1 = state_31890;var statearr_31921_31956 = state_31890__$1;(statearr_31921_31956[2] = null);
(statearr_31921_31956[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 22))
{var inst_31847 = (state_31890[12]);var inst_31883 = (state_31890[2]);var inst_31839 = inst_31847;var state_31890__$1 = (function (){var statearr_31922 = state_31890;(statearr_31922[19] = inst_31883);
(statearr_31922[9] = inst_31839);
return statearr_31922;
})();var statearr_31923_31957 = state_31890__$1;(statearr_31923_31957[2] = null);
(statearr_31923_31957[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31891 === 23))
{var inst_31880 = (state_31890[2]);var state_31890__$1 = state_31890;var statearr_31924_31958 = state_31890__$1;(statearr_31924_31958[2] = inst_31880);
(statearr_31924_31958[1] = 22);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_31928 = (new Array(20));(statearr_31928[0] = state_machine__16760__auto__);
(statearr_31928[1] = 1);
return statearr_31928;
});
var state_machine__16760__auto____1 = (function (state_31890){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_31890);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e31929){if((e31929 instanceof Object))
{var ex__16763__auto__ = e31929;var statearr_31930_31959 = state_31890;(statearr_31930_31959[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31890);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31960 = state_31890;
state_31890 = G__31960;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_31890){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_31890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_31931 = f__16830__auto__.call(null);(statearr_31931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___31932);
return statearr_31931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.Pub = (function (){var obj31962 = {};return obj31962;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
return (function (topic){var or__13821__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13821__auto__,mults){
return (function (p1__31963_SHARP_){if(cljs.core.truth_(p1__31963_SHARP_.call(null,topic)))
{return p1__31963_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31963_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13821__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32088 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32089){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32089 = meta32089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32088.cljs$lang$type = true;
cljs.core.async.t32088.cljs$lang$ctorStr = "cljs.core.async/t32088";
cljs.core.async.t32088.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t32088");
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32090){var self__ = this;
var _32090__$1 = this;return self__.meta32089;
});})(mults,ensure_mult))
;
cljs.core.async.t32088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32090,meta32089__$1){var self__ = this;
var _32090__$1 = this;return (new cljs.core.async.t32088(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32089__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32088 = ((function (mults,ensure_mult){
return (function __GT_t32088(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32089){return (new cljs.core.async.t32088(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32089));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32088(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16829__auto___32212 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32164){var state_val_32165 = (state_32164[1]);if((state_val_32165 === 1))
{var state_32164__$1 = state_32164;var statearr_32166_32213 = state_32164__$1;(statearr_32166_32213[2] = null);
(statearr_32166_32213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 2))
{var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32164__$1,4,ch);
} else
{if((state_val_32165 === 3))
{var inst_32162 = (state_32164[2]);var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32164__$1,inst_32162);
} else
{if((state_val_32165 === 4))
{var inst_32093 = (state_32164[7]);var inst_32093__$1 = (state_32164[2]);var inst_32094 = (inst_32093__$1 == null);var state_32164__$1 = (function (){var statearr_32167 = state_32164;(statearr_32167[7] = inst_32093__$1);
return statearr_32167;
})();if(cljs.core.truth_(inst_32094))
{var statearr_32168_32214 = state_32164__$1;(statearr_32168_32214[1] = 5);
} else
{var statearr_32169_32215 = state_32164__$1;(statearr_32169_32215[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 5))
{var inst_32100 = cljs.core.deref.call(null,mults);var inst_32101 = cljs.core.vals.call(null,inst_32100);var inst_32102 = cljs.core.seq.call(null,inst_32101);var inst_32103 = inst_32102;var inst_32104 = null;var inst_32105 = 0;var inst_32106 = 0;var state_32164__$1 = (function (){var statearr_32170 = state_32164;(statearr_32170[8] = inst_32103);
(statearr_32170[9] = inst_32104);
(statearr_32170[10] = inst_32105);
(statearr_32170[11] = inst_32106);
return statearr_32170;
})();var statearr_32171_32216 = state_32164__$1;(statearr_32171_32216[2] = null);
(statearr_32171_32216[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 6))
{var inst_32141 = (state_32164[12]);var inst_32143 = (state_32164[13]);var inst_32093 = (state_32164[7]);var inst_32141__$1 = topic_fn.call(null,inst_32093);var inst_32142 = cljs.core.deref.call(null,mults);var inst_32143__$1 = cljs.core.get.call(null,inst_32142,inst_32141__$1);var state_32164__$1 = (function (){var statearr_32172 = state_32164;(statearr_32172[12] = inst_32141__$1);
(statearr_32172[13] = inst_32143__$1);
return statearr_32172;
})();if(cljs.core.truth_(inst_32143__$1))
{var statearr_32173_32217 = state_32164__$1;(statearr_32173_32217[1] = 19);
} else
{var statearr_32174_32218 = state_32164__$1;(statearr_32174_32218[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 7))
{var inst_32160 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32175_32219 = state_32164__$1;(statearr_32175_32219[2] = inst_32160);
(statearr_32175_32219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 8))
{var inst_32105 = (state_32164[10]);var inst_32106 = (state_32164[11]);var inst_32108 = (inst_32106 < inst_32105);var inst_32109 = inst_32108;var state_32164__$1 = state_32164;if(cljs.core.truth_(inst_32109))
{var statearr_32179_32220 = state_32164__$1;(statearr_32179_32220[1] = 10);
} else
{var statearr_32180_32221 = state_32164__$1;(statearr_32180_32221[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 9))
{var inst_32139 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32181_32222 = state_32164__$1;(statearr_32181_32222[2] = inst_32139);
(statearr_32181_32222[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 10))
{var inst_32103 = (state_32164[8]);var inst_32104 = (state_32164[9]);var inst_32105 = (state_32164[10]);var inst_32106 = (state_32164[11]);var inst_32111 = cljs.core._nth.call(null,inst_32104,inst_32106);var inst_32112 = cljs.core.async.muxch_STAR_.call(null,inst_32111);var inst_32113 = cljs.core.async.close_BANG_.call(null,inst_32112);var inst_32114 = (inst_32106 + 1);var tmp32176 = inst_32103;var tmp32177 = inst_32104;var tmp32178 = inst_32105;var inst_32103__$1 = tmp32176;var inst_32104__$1 = tmp32177;var inst_32105__$1 = tmp32178;var inst_32106__$1 = inst_32114;var state_32164__$1 = (function (){var statearr_32182 = state_32164;(statearr_32182[14] = inst_32113);
(statearr_32182[8] = inst_32103__$1);
(statearr_32182[9] = inst_32104__$1);
(statearr_32182[10] = inst_32105__$1);
(statearr_32182[11] = inst_32106__$1);
return statearr_32182;
})();var statearr_32183_32223 = state_32164__$1;(statearr_32183_32223[2] = null);
(statearr_32183_32223[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 11))
{var inst_32103 = (state_32164[8]);var inst_32117 = (state_32164[15]);var inst_32117__$1 = cljs.core.seq.call(null,inst_32103);var state_32164__$1 = (function (){var statearr_32184 = state_32164;(statearr_32184[15] = inst_32117__$1);
return statearr_32184;
})();if(inst_32117__$1)
{var statearr_32185_32224 = state_32164__$1;(statearr_32185_32224[1] = 13);
} else
{var statearr_32186_32225 = state_32164__$1;(statearr_32186_32225[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 12))
{var inst_32137 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32187_32226 = state_32164__$1;(statearr_32187_32226[2] = inst_32137);
(statearr_32187_32226[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 13))
{var inst_32117 = (state_32164[15]);var inst_32119 = cljs.core.chunked_seq_QMARK_.call(null,inst_32117);var state_32164__$1 = state_32164;if(inst_32119)
{var statearr_32188_32227 = state_32164__$1;(statearr_32188_32227[1] = 16);
} else
{var statearr_32189_32228 = state_32164__$1;(statearr_32189_32228[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 14))
{var state_32164__$1 = state_32164;var statearr_32190_32229 = state_32164__$1;(statearr_32190_32229[2] = null);
(statearr_32190_32229[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 15))
{var inst_32135 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32191_32230 = state_32164__$1;(statearr_32191_32230[2] = inst_32135);
(statearr_32191_32230[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 16))
{var inst_32117 = (state_32164[15]);var inst_32121 = cljs.core.chunk_first.call(null,inst_32117);var inst_32122 = cljs.core.chunk_rest.call(null,inst_32117);var inst_32123 = cljs.core.count.call(null,inst_32121);var inst_32103 = inst_32122;var inst_32104 = inst_32121;var inst_32105 = inst_32123;var inst_32106 = 0;var state_32164__$1 = (function (){var statearr_32192 = state_32164;(statearr_32192[8] = inst_32103);
(statearr_32192[9] = inst_32104);
(statearr_32192[10] = inst_32105);
(statearr_32192[11] = inst_32106);
return statearr_32192;
})();var statearr_32193_32231 = state_32164__$1;(statearr_32193_32231[2] = null);
(statearr_32193_32231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 17))
{var inst_32117 = (state_32164[15]);var inst_32126 = cljs.core.first.call(null,inst_32117);var inst_32127 = cljs.core.async.muxch_STAR_.call(null,inst_32126);var inst_32128 = cljs.core.async.close_BANG_.call(null,inst_32127);var inst_32129 = cljs.core.next.call(null,inst_32117);var inst_32103 = inst_32129;var inst_32104 = null;var inst_32105 = 0;var inst_32106 = 0;var state_32164__$1 = (function (){var statearr_32194 = state_32164;(statearr_32194[8] = inst_32103);
(statearr_32194[9] = inst_32104);
(statearr_32194[10] = inst_32105);
(statearr_32194[11] = inst_32106);
(statearr_32194[16] = inst_32128);
return statearr_32194;
})();var statearr_32195_32232 = state_32164__$1;(statearr_32195_32232[2] = null);
(statearr_32195_32232[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 18))
{var inst_32132 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32196_32233 = state_32164__$1;(statearr_32196_32233[2] = inst_32132);
(statearr_32196_32233[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 19))
{var state_32164__$1 = state_32164;var statearr_32197_32234 = state_32164__$1;(statearr_32197_32234[2] = null);
(statearr_32197_32234[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 20))
{var state_32164__$1 = state_32164;var statearr_32198_32235 = state_32164__$1;(statearr_32198_32235[2] = null);
(statearr_32198_32235[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 21))
{var inst_32157 = (state_32164[2]);var state_32164__$1 = (function (){var statearr_32199 = state_32164;(statearr_32199[17] = inst_32157);
return statearr_32199;
})();var statearr_32200_32236 = state_32164__$1;(statearr_32200_32236[2] = null);
(statearr_32200_32236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 22))
{var inst_32154 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32201_32237 = state_32164__$1;(statearr_32201_32237[2] = inst_32154);
(statearr_32201_32237[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 23))
{var inst_32141 = (state_32164[12]);var inst_32145 = (state_32164[2]);var inst_32146 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32141);var state_32164__$1 = (function (){var statearr_32202 = state_32164;(statearr_32202[18] = inst_32145);
return statearr_32202;
})();var statearr_32203_32238 = state_32164__$1;(statearr_32203_32238[2] = inst_32146);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32165 === 24))
{var inst_32143 = (state_32164[13]);var inst_32093 = (state_32164[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32164,23,Object,null,22);var inst_32150 = cljs.core.async.muxch_STAR_.call(null,inst_32143);var state_32164__$1 = state_32164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32164__$1,25,inst_32150,inst_32093);
} else
{if((state_val_32165 === 25))
{var inst_32152 = (state_32164[2]);var state_32164__$1 = state_32164;var statearr_32204_32239 = state_32164__$1;(statearr_32204_32239[2] = inst_32152);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32164__$1);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_32208 = (new Array(19));(statearr_32208[0] = state_machine__16760__auto__);
(statearr_32208[1] = 1);
return statearr_32208;
});
var state_machine__16760__auto____1 = (function (state_32164){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32164);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e32209){if((e32209 instanceof Object))
{var ex__16763__auto__ = e32209;var statearr_32210_32240 = state_32164;(statearr_32210_32240[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32241 = state_32164;
state_32164 = G__32241;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32164){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_32211 = f__16830__auto__.call(null);(statearr_32211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___32212);
return statearr_32211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
,cljs.core.range.call(null,cnt));var c__16829__auto___32378 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32348){var state_val_32349 = (state_32348[1]);if((state_val_32349 === 1))
{var state_32348__$1 = state_32348;var statearr_32350_32379 = state_32348__$1;(statearr_32350_32379[2] = null);
(statearr_32350_32379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 2))
{var inst_32311 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32312 = 0;var state_32348__$1 = (function (){var statearr_32351 = state_32348;(statearr_32351[7] = inst_32311);
(statearr_32351[8] = inst_32312);
return statearr_32351;
})();var statearr_32352_32380 = state_32348__$1;(statearr_32352_32380[2] = null);
(statearr_32352_32380[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 3))
{var inst_32346 = (state_32348[2]);var state_32348__$1 = state_32348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32348__$1,inst_32346);
} else
{if((state_val_32349 === 4))
{var inst_32312 = (state_32348[8]);var inst_32314 = (inst_32312 < cnt);var state_32348__$1 = state_32348;if(cljs.core.truth_(inst_32314))
{var statearr_32353_32381 = state_32348__$1;(statearr_32353_32381[1] = 6);
} else
{var statearr_32354_32382 = state_32348__$1;(statearr_32354_32382[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 5))
{var inst_32332 = (state_32348[2]);var state_32348__$1 = (function (){var statearr_32355 = state_32348;(statearr_32355[9] = inst_32332);
return statearr_32355;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32348__$1,12,dchan);
} else
{if((state_val_32349 === 6))
{var state_32348__$1 = state_32348;var statearr_32356_32383 = state_32348__$1;(statearr_32356_32383[2] = null);
(statearr_32356_32383[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 7))
{var state_32348__$1 = state_32348;var statearr_32357_32384 = state_32348__$1;(statearr_32357_32384[2] = null);
(statearr_32357_32384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 8))
{var inst_32330 = (state_32348[2]);var state_32348__$1 = state_32348;var statearr_32358_32385 = state_32348__$1;(statearr_32358_32385[2] = inst_32330);
(statearr_32358_32385[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 9))
{var inst_32312 = (state_32348[8]);var inst_32325 = (state_32348[2]);var inst_32326 = (inst_32312 + 1);var inst_32312__$1 = inst_32326;var state_32348__$1 = (function (){var statearr_32359 = state_32348;(statearr_32359[10] = inst_32325);
(statearr_32359[8] = inst_32312__$1);
return statearr_32359;
})();var statearr_32360_32386 = state_32348__$1;(statearr_32360_32386[2] = null);
(statearr_32360_32386[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 10))
{var inst_32316 = (state_32348[2]);var inst_32317 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32348__$1 = (function (){var statearr_32361 = state_32348;(statearr_32361[11] = inst_32316);
return statearr_32361;
})();var statearr_32362_32387 = state_32348__$1;(statearr_32362_32387[2] = inst_32317);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32348__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 11))
{var inst_32312 = (state_32348[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32348,10,Object,null,9);var inst_32321 = chs__$1.call(null,inst_32312);var inst_32322 = done.call(null,inst_32312);var inst_32323 = cljs.core.async.take_BANG_.call(null,inst_32321,inst_32322);var state_32348__$1 = state_32348;var statearr_32363_32388 = state_32348__$1;(statearr_32363_32388[2] = inst_32323);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32348__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 12))
{var inst_32334 = (state_32348[12]);var inst_32334__$1 = (state_32348[2]);var inst_32335 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32334__$1);var state_32348__$1 = (function (){var statearr_32364 = state_32348;(statearr_32364[12] = inst_32334__$1);
return statearr_32364;
})();if(cljs.core.truth_(inst_32335))
{var statearr_32365_32389 = state_32348__$1;(statearr_32365_32389[1] = 13);
} else
{var statearr_32366_32390 = state_32348__$1;(statearr_32366_32390[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 13))
{var inst_32337 = cljs.core.async.close_BANG_.call(null,out);var state_32348__$1 = state_32348;var statearr_32367_32391 = state_32348__$1;(statearr_32367_32391[2] = inst_32337);
(statearr_32367_32391[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 14))
{var inst_32334 = (state_32348[12]);var inst_32339 = cljs.core.apply.call(null,f,inst_32334);var state_32348__$1 = state_32348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32348__$1,16,out,inst_32339);
} else
{if((state_val_32349 === 15))
{var inst_32344 = (state_32348[2]);var state_32348__$1 = state_32348;var statearr_32368_32392 = state_32348__$1;(statearr_32368_32392[2] = inst_32344);
(statearr_32368_32392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32349 === 16))
{var inst_32341 = (state_32348[2]);var state_32348__$1 = (function (){var statearr_32369 = state_32348;(statearr_32369[13] = inst_32341);
return statearr_32369;
})();var statearr_32370_32393 = state_32348__$1;(statearr_32370_32393[2] = null);
(statearr_32370_32393[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_32374 = (new Array(14));(statearr_32374[0] = state_machine__16760__auto__);
(statearr_32374[1] = 1);
return statearr_32374;
});
var state_machine__16760__auto____1 = (function (state_32348){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32348);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e32375){if((e32375 instanceof Object))
{var ex__16763__auto__ = e32375;var statearr_32376_32394 = state_32348;(statearr_32376_32394[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32395 = state_32348;
state_32348 = G__32395;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32348){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_32377 = f__16830__auto__.call(null);(statearr_32377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___32378);
return statearr_32377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___32503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32479){var state_val_32480 = (state_32479[1]);if((state_val_32480 === 1))
{var inst_32450 = cljs.core.vec.call(null,chs);var inst_32451 = inst_32450;var state_32479__$1 = (function (){var statearr_32481 = state_32479;(statearr_32481[7] = inst_32451);
return statearr_32481;
})();var statearr_32482_32504 = state_32479__$1;(statearr_32482_32504[2] = null);
(statearr_32482_32504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 2))
{var inst_32451 = (state_32479[7]);var inst_32453 = cljs.core.count.call(null,inst_32451);var inst_32454 = (inst_32453 > 0);var state_32479__$1 = state_32479;if(cljs.core.truth_(inst_32454))
{var statearr_32483_32505 = state_32479__$1;(statearr_32483_32505[1] = 4);
} else
{var statearr_32484_32506 = state_32479__$1;(statearr_32484_32506[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 3))
{var inst_32477 = (state_32479[2]);var state_32479__$1 = state_32479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32479__$1,inst_32477);
} else
{if((state_val_32480 === 4))
{var inst_32451 = (state_32479[7]);var state_32479__$1 = state_32479;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32479__$1,7,inst_32451);
} else
{if((state_val_32480 === 5))
{var inst_32473 = cljs.core.async.close_BANG_.call(null,out);var state_32479__$1 = state_32479;var statearr_32485_32507 = state_32479__$1;(statearr_32485_32507[2] = inst_32473);
(statearr_32485_32507[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 6))
{var inst_32475 = (state_32479[2]);var state_32479__$1 = state_32479;var statearr_32486_32508 = state_32479__$1;(statearr_32486_32508[2] = inst_32475);
(statearr_32486_32508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 7))
{var inst_32458 = (state_32479[8]);var inst_32459 = (state_32479[9]);var inst_32458__$1 = (state_32479[2]);var inst_32459__$1 = cljs.core.nth.call(null,inst_32458__$1,0,null);var inst_32460 = cljs.core.nth.call(null,inst_32458__$1,1,null);var inst_32461 = (inst_32459__$1 == null);var state_32479__$1 = (function (){var statearr_32487 = state_32479;(statearr_32487[10] = inst_32460);
(statearr_32487[8] = inst_32458__$1);
(statearr_32487[9] = inst_32459__$1);
return statearr_32487;
})();if(cljs.core.truth_(inst_32461))
{var statearr_32488_32509 = state_32479__$1;(statearr_32488_32509[1] = 8);
} else
{var statearr_32489_32510 = state_32479__$1;(statearr_32489_32510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 8))
{var inst_32460 = (state_32479[10]);var inst_32458 = (state_32479[8]);var inst_32459 = (state_32479[9]);var inst_32451 = (state_32479[7]);var inst_32463 = (function (){var c = inst_32460;var v = inst_32459;var vec__32456 = inst_32458;var cs = inst_32451;return ((function (c,v,vec__32456,cs,inst_32460,inst_32458,inst_32459,inst_32451,state_val_32480){
return (function (p1__32396_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32396_SHARP_);
});
;})(c,v,vec__32456,cs,inst_32460,inst_32458,inst_32459,inst_32451,state_val_32480))
})();var inst_32464 = cljs.core.filterv.call(null,inst_32463,inst_32451);var inst_32451__$1 = inst_32464;var state_32479__$1 = (function (){var statearr_32490 = state_32479;(statearr_32490[7] = inst_32451__$1);
return statearr_32490;
})();var statearr_32491_32511 = state_32479__$1;(statearr_32491_32511[2] = null);
(statearr_32491_32511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 9))
{var inst_32459 = (state_32479[9]);var state_32479__$1 = state_32479;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32479__$1,11,out,inst_32459);
} else
{if((state_val_32480 === 10))
{var inst_32471 = (state_32479[2]);var state_32479__$1 = state_32479;var statearr_32493_32512 = state_32479__$1;(statearr_32493_32512[2] = inst_32471);
(statearr_32493_32512[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32480 === 11))
{var inst_32451 = (state_32479[7]);var inst_32468 = (state_32479[2]);var tmp32492 = inst_32451;var inst_32451__$1 = tmp32492;var state_32479__$1 = (function (){var statearr_32494 = state_32479;(statearr_32494[11] = inst_32468);
(statearr_32494[7] = inst_32451__$1);
return statearr_32494;
})();var statearr_32495_32513 = state_32479__$1;(statearr_32495_32513[2] = null);
(statearr_32495_32513[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_32499 = (new Array(12));(statearr_32499[0] = state_machine__16760__auto__);
(statearr_32499[1] = 1);
return statearr_32499;
});
var state_machine__16760__auto____1 = (function (state_32479){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32479);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e32500){if((e32500 instanceof Object))
{var ex__16763__auto__ = e32500;var statearr_32501_32514 = state_32479;(statearr_32501_32514[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32479);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32515 = state_32479;
state_32479 = G__32515;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32479){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_32502 = f__16830__auto__.call(null);(statearr_32502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___32503);
return statearr_32502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___32608 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32585){var state_val_32586 = (state_32585[1]);if((state_val_32586 === 1))
{var inst_32562 = 0;var state_32585__$1 = (function (){var statearr_32587 = state_32585;(statearr_32587[7] = inst_32562);
return statearr_32587;
})();var statearr_32588_32609 = state_32585__$1;(statearr_32588_32609[2] = null);
(statearr_32588_32609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 2))
{var inst_32562 = (state_32585[7]);var inst_32564 = (inst_32562 < n);var state_32585__$1 = state_32585;if(cljs.core.truth_(inst_32564))
{var statearr_32589_32610 = state_32585__$1;(statearr_32589_32610[1] = 4);
} else
{var statearr_32590_32611 = state_32585__$1;(statearr_32590_32611[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 3))
{var inst_32582 = (state_32585[2]);var inst_32583 = cljs.core.async.close_BANG_.call(null,out);var state_32585__$1 = (function (){var statearr_32591 = state_32585;(statearr_32591[8] = inst_32582);
return statearr_32591;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32585__$1,inst_32583);
} else
{if((state_val_32586 === 4))
{var state_32585__$1 = state_32585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32585__$1,7,ch);
} else
{if((state_val_32586 === 5))
{var state_32585__$1 = state_32585;var statearr_32592_32612 = state_32585__$1;(statearr_32592_32612[2] = null);
(statearr_32592_32612[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 6))
{var inst_32580 = (state_32585[2]);var state_32585__$1 = state_32585;var statearr_32593_32613 = state_32585__$1;(statearr_32593_32613[2] = inst_32580);
(statearr_32593_32613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 7))
{var inst_32567 = (state_32585[9]);var inst_32567__$1 = (state_32585[2]);var inst_32568 = (inst_32567__$1 == null);var inst_32569 = cljs.core.not.call(null,inst_32568);var state_32585__$1 = (function (){var statearr_32594 = state_32585;(statearr_32594[9] = inst_32567__$1);
return statearr_32594;
})();if(inst_32569)
{var statearr_32595_32614 = state_32585__$1;(statearr_32595_32614[1] = 8);
} else
{var statearr_32596_32615 = state_32585__$1;(statearr_32596_32615[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 8))
{var inst_32567 = (state_32585[9]);var state_32585__$1 = state_32585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32585__$1,11,out,inst_32567);
} else
{if((state_val_32586 === 9))
{var state_32585__$1 = state_32585;var statearr_32597_32616 = state_32585__$1;(statearr_32597_32616[2] = null);
(statearr_32597_32616[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 10))
{var inst_32577 = (state_32585[2]);var state_32585__$1 = state_32585;var statearr_32598_32617 = state_32585__$1;(statearr_32598_32617[2] = inst_32577);
(statearr_32598_32617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32586 === 11))
{var inst_32562 = (state_32585[7]);var inst_32572 = (state_32585[2]);var inst_32573 = (inst_32562 + 1);var inst_32562__$1 = inst_32573;var state_32585__$1 = (function (){var statearr_32599 = state_32585;(statearr_32599[10] = inst_32572);
(statearr_32599[7] = inst_32562__$1);
return statearr_32599;
})();var statearr_32600_32618 = state_32585__$1;(statearr_32600_32618[2] = null);
(statearr_32600_32618[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_32604 = (new Array(11));(statearr_32604[0] = state_machine__16760__auto__);
(statearr_32604[1] = 1);
return statearr_32604;
});
var state_machine__16760__auto____1 = (function (state_32585){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32585);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e32605){if((e32605 instanceof Object))
{var ex__16763__auto__ = e32605;var statearr_32606_32619 = state_32585;(statearr_32606_32619[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32585);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32620 = state_32585;
state_32585 = G__32620;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32585){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_32607 = f__16830__auto__.call(null);(statearr_32607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___32608);
return statearr_32607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___32717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32692){var state_val_32693 = (state_32692[1]);if((state_val_32693 === 1))
{var inst_32669 = null;var state_32692__$1 = (function (){var statearr_32694 = state_32692;(statearr_32694[7] = inst_32669);
return statearr_32694;
})();var statearr_32695_32718 = state_32692__$1;(statearr_32695_32718[2] = null);
(statearr_32695_32718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 2))
{var state_32692__$1 = state_32692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32692__$1,4,ch);
} else
{if((state_val_32693 === 3))
{var inst_32689 = (state_32692[2]);var inst_32690 = cljs.core.async.close_BANG_.call(null,out);var state_32692__$1 = (function (){var statearr_32696 = state_32692;(statearr_32696[8] = inst_32689);
return statearr_32696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32692__$1,inst_32690);
} else
{if((state_val_32693 === 4))
{var inst_32672 = (state_32692[9]);var inst_32672__$1 = (state_32692[2]);var inst_32673 = (inst_32672__$1 == null);var inst_32674 = cljs.core.not.call(null,inst_32673);var state_32692__$1 = (function (){var statearr_32697 = state_32692;(statearr_32697[9] = inst_32672__$1);
return statearr_32697;
})();if(inst_32674)
{var statearr_32698_32719 = state_32692__$1;(statearr_32698_32719[1] = 5);
} else
{var statearr_32699_32720 = state_32692__$1;(statearr_32699_32720[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 5))
{var inst_32672 = (state_32692[9]);var inst_32669 = (state_32692[7]);var inst_32676 = cljs.core._EQ_.call(null,inst_32672,inst_32669);var state_32692__$1 = state_32692;if(inst_32676)
{var statearr_32700_32721 = state_32692__$1;(statearr_32700_32721[1] = 8);
} else
{var statearr_32701_32722 = state_32692__$1;(statearr_32701_32722[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 6))
{var state_32692__$1 = state_32692;var statearr_32703_32723 = state_32692__$1;(statearr_32703_32723[2] = null);
(statearr_32703_32723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 7))
{var inst_32687 = (state_32692[2]);var state_32692__$1 = state_32692;var statearr_32704_32724 = state_32692__$1;(statearr_32704_32724[2] = inst_32687);
(statearr_32704_32724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 8))
{var inst_32669 = (state_32692[7]);var tmp32702 = inst_32669;var inst_32669__$1 = tmp32702;var state_32692__$1 = (function (){var statearr_32705 = state_32692;(statearr_32705[7] = inst_32669__$1);
return statearr_32705;
})();var statearr_32706_32725 = state_32692__$1;(statearr_32706_32725[2] = null);
(statearr_32706_32725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 9))
{var inst_32672 = (state_32692[9]);var state_32692__$1 = state_32692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,11,out,inst_32672);
} else
{if((state_val_32693 === 10))
{var inst_32684 = (state_32692[2]);var state_32692__$1 = state_32692;var statearr_32707_32726 = state_32692__$1;(statearr_32707_32726[2] = inst_32684);
(statearr_32707_32726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32693 === 11))
{var inst_32672 = (state_32692[9]);var inst_32681 = (state_32692[2]);var inst_32669 = inst_32672;var state_32692__$1 = (function (){var statearr_32708 = state_32692;(statearr_32708[10] = inst_32681);
(statearr_32708[7] = inst_32669);
return statearr_32708;
})();var statearr_32709_32727 = state_32692__$1;(statearr_32709_32727[2] = null);
(statearr_32709_32727[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_32713 = (new Array(11));(statearr_32713[0] = state_machine__16760__auto__);
(statearr_32713[1] = 1);
return statearr_32713;
});
var state_machine__16760__auto____1 = (function (state_32692){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32692);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e32714){if((e32714 instanceof Object))
{var ex__16763__auto__ = e32714;var statearr_32715_32728 = state_32692;(statearr_32715_32728[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32729 = state_32692;
state_32692 = G__32729;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_32716 = f__16830__auto__.call(null);(statearr_32716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___32717);
return statearr_32716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___32864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32834){var state_val_32835 = (state_32834[1]);if((state_val_32835 === 1))
{var inst_32797 = (new Array(n));var inst_32798 = inst_32797;var inst_32799 = 0;var state_32834__$1 = (function (){var statearr_32836 = state_32834;(statearr_32836[7] = inst_32798);
(statearr_32836[8] = inst_32799);
return statearr_32836;
})();var statearr_32837_32865 = state_32834__$1;(statearr_32837_32865[2] = null);
(statearr_32837_32865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 2))
{var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32834__$1,4,ch);
} else
{if((state_val_32835 === 3))
{var inst_32832 = (state_32834[2]);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32834__$1,inst_32832);
} else
{if((state_val_32835 === 4))
{var inst_32802 = (state_32834[9]);var inst_32802__$1 = (state_32834[2]);var inst_32803 = (inst_32802__$1 == null);var inst_32804 = cljs.core.not.call(null,inst_32803);var state_32834__$1 = (function (){var statearr_32838 = state_32834;(statearr_32838[9] = inst_32802__$1);
return statearr_32838;
})();if(inst_32804)
{var statearr_32839_32866 = state_32834__$1;(statearr_32839_32866[1] = 5);
} else
{var statearr_32840_32867 = state_32834__$1;(statearr_32840_32867[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 5))
{var inst_32802 = (state_32834[9]);var inst_32807 = (state_32834[10]);var inst_32798 = (state_32834[7]);var inst_32799 = (state_32834[8]);var inst_32806 = (inst_32798[inst_32799] = inst_32802);var inst_32807__$1 = (inst_32799 + 1);var inst_32808 = (inst_32807__$1 < n);var state_32834__$1 = (function (){var statearr_32841 = state_32834;(statearr_32841[11] = inst_32806);
(statearr_32841[10] = inst_32807__$1);
return statearr_32841;
})();if(cljs.core.truth_(inst_32808))
{var statearr_32842_32868 = state_32834__$1;(statearr_32842_32868[1] = 8);
} else
{var statearr_32843_32869 = state_32834__$1;(statearr_32843_32869[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 6))
{var inst_32799 = (state_32834[8]);var inst_32820 = (inst_32799 > 0);var state_32834__$1 = state_32834;if(cljs.core.truth_(inst_32820))
{var statearr_32845_32870 = state_32834__$1;(statearr_32845_32870[1] = 12);
} else
{var statearr_32846_32871 = state_32834__$1;(statearr_32846_32871[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 7))
{var inst_32830 = (state_32834[2]);var state_32834__$1 = state_32834;var statearr_32847_32872 = state_32834__$1;(statearr_32847_32872[2] = inst_32830);
(statearr_32847_32872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 8))
{var inst_32807 = (state_32834[10]);var inst_32798 = (state_32834[7]);var tmp32844 = inst_32798;var inst_32798__$1 = tmp32844;var inst_32799 = inst_32807;var state_32834__$1 = (function (){var statearr_32848 = state_32834;(statearr_32848[7] = inst_32798__$1);
(statearr_32848[8] = inst_32799);
return statearr_32848;
})();var statearr_32849_32873 = state_32834__$1;(statearr_32849_32873[2] = null);
(statearr_32849_32873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 9))
{var inst_32798 = (state_32834[7]);var inst_32812 = cljs.core.vec.call(null,inst_32798);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32834__$1,11,out,inst_32812);
} else
{if((state_val_32835 === 10))
{var inst_32818 = (state_32834[2]);var state_32834__$1 = state_32834;var statearr_32850_32874 = state_32834__$1;(statearr_32850_32874[2] = inst_32818);
(statearr_32850_32874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 11))
{var inst_32814 = (state_32834[2]);var inst_32815 = (new Array(n));var inst_32798 = inst_32815;var inst_32799 = 0;var state_32834__$1 = (function (){var statearr_32851 = state_32834;(statearr_32851[12] = inst_32814);
(statearr_32851[7] = inst_32798);
(statearr_32851[8] = inst_32799);
return statearr_32851;
})();var statearr_32852_32875 = state_32834__$1;(statearr_32852_32875[2] = null);
(statearr_32852_32875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 12))
{var inst_32798 = (state_32834[7]);var inst_32822 = cljs.core.vec.call(null,inst_32798);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32834__$1,15,out,inst_32822);
} else
{if((state_val_32835 === 13))
{var state_32834__$1 = state_32834;var statearr_32853_32876 = state_32834__$1;(statearr_32853_32876[2] = null);
(statearr_32853_32876[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 14))
{var inst_32827 = (state_32834[2]);var inst_32828 = cljs.core.async.close_BANG_.call(null,out);var state_32834__$1 = (function (){var statearr_32854 = state_32834;(statearr_32854[13] = inst_32827);
return statearr_32854;
})();var statearr_32855_32877 = state_32834__$1;(statearr_32855_32877[2] = inst_32828);
(statearr_32855_32877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 15))
{var inst_32824 = (state_32834[2]);var state_32834__$1 = state_32834;var statearr_32856_32878 = state_32834__$1;(statearr_32856_32878[2] = inst_32824);
(statearr_32856_32878[1] = 14);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_32860 = (new Array(14));(statearr_32860[0] = state_machine__16760__auto__);
(statearr_32860[1] = 1);
return statearr_32860;
});
var state_machine__16760__auto____1 = (function (state_32834){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32834);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e32861){if((e32861 instanceof Object))
{var ex__16763__auto__ = e32861;var statearr_32862_32879 = state_32834;(statearr_32862_32879[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32880 = state_32834;
state_32834 = G__32880;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32834){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_32863 = f__16830__auto__.call(null);(statearr_32863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___32864);
return statearr_32863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___33023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_32993){var state_val_32994 = (state_32993[1]);if((state_val_32994 === 1))
{var inst_32952 = (new Array(0));var inst_32953 = inst_32952;var inst_32954 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32993__$1 = (function (){var statearr_32995 = state_32993;(statearr_32995[7] = inst_32954);
(statearr_32995[8] = inst_32953);
return statearr_32995;
})();var statearr_32996_33024 = state_32993__$1;(statearr_32996_33024[2] = null);
(statearr_32996_33024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 2))
{var state_32993__$1 = state_32993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32993__$1,4,ch);
} else
{if((state_val_32994 === 3))
{var inst_32991 = (state_32993[2]);var state_32993__$1 = state_32993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32993__$1,inst_32991);
} else
{if((state_val_32994 === 4))
{var inst_32957 = (state_32993[9]);var inst_32957__$1 = (state_32993[2]);var inst_32958 = (inst_32957__$1 == null);var inst_32959 = cljs.core.not.call(null,inst_32958);var state_32993__$1 = (function (){var statearr_32997 = state_32993;(statearr_32997[9] = inst_32957__$1);
return statearr_32997;
})();if(inst_32959)
{var statearr_32998_33025 = state_32993__$1;(statearr_32998_33025[1] = 5);
} else
{var statearr_32999_33026 = state_32993__$1;(statearr_32999_33026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 5))
{var inst_32954 = (state_32993[7]);var inst_32957 = (state_32993[9]);var inst_32961 = (state_32993[10]);var inst_32961__$1 = f.call(null,inst_32957);var inst_32962 = cljs.core._EQ_.call(null,inst_32961__$1,inst_32954);var inst_32963 = cljs.core.keyword_identical_QMARK_.call(null,inst_32954,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32964 = (inst_32962) || (inst_32963);var state_32993__$1 = (function (){var statearr_33000 = state_32993;(statearr_33000[10] = inst_32961__$1);
return statearr_33000;
})();if(cljs.core.truth_(inst_32964))
{var statearr_33001_33027 = state_32993__$1;(statearr_33001_33027[1] = 8);
} else
{var statearr_33002_33028 = state_32993__$1;(statearr_33002_33028[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 6))
{var inst_32953 = (state_32993[8]);var inst_32978 = inst_32953.length;var inst_32979 = (inst_32978 > 0);var state_32993__$1 = state_32993;if(cljs.core.truth_(inst_32979))
{var statearr_33004_33029 = state_32993__$1;(statearr_33004_33029[1] = 12);
} else
{var statearr_33005_33030 = state_32993__$1;(statearr_33005_33030[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 7))
{var inst_32989 = (state_32993[2]);var state_32993__$1 = state_32993;var statearr_33006_33031 = state_32993__$1;(statearr_33006_33031[2] = inst_32989);
(statearr_33006_33031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 8))
{var inst_32957 = (state_32993[9]);var inst_32961 = (state_32993[10]);var inst_32953 = (state_32993[8]);var inst_32966 = inst_32953.push(inst_32957);var tmp33003 = inst_32953;var inst_32953__$1 = tmp33003;var inst_32954 = inst_32961;var state_32993__$1 = (function (){var statearr_33007 = state_32993;(statearr_33007[7] = inst_32954);
(statearr_33007[11] = inst_32966);
(statearr_33007[8] = inst_32953__$1);
return statearr_33007;
})();var statearr_33008_33032 = state_32993__$1;(statearr_33008_33032[2] = null);
(statearr_33008_33032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 9))
{var inst_32953 = (state_32993[8]);var inst_32969 = cljs.core.vec.call(null,inst_32953);var state_32993__$1 = state_32993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32993__$1,11,out,inst_32969);
} else
{if((state_val_32994 === 10))
{var inst_32976 = (state_32993[2]);var state_32993__$1 = state_32993;var statearr_33009_33033 = state_32993__$1;(statearr_33009_33033[2] = inst_32976);
(statearr_33009_33033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 11))
{var inst_32957 = (state_32993[9]);var inst_32961 = (state_32993[10]);var inst_32971 = (state_32993[2]);var inst_32972 = (new Array(0));var inst_32973 = inst_32972.push(inst_32957);var inst_32953 = inst_32972;var inst_32954 = inst_32961;var state_32993__$1 = (function (){var statearr_33010 = state_32993;(statearr_33010[7] = inst_32954);
(statearr_33010[12] = inst_32973);
(statearr_33010[13] = inst_32971);
(statearr_33010[8] = inst_32953);
return statearr_33010;
})();var statearr_33011_33034 = state_32993__$1;(statearr_33011_33034[2] = null);
(statearr_33011_33034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 12))
{var inst_32953 = (state_32993[8]);var inst_32981 = cljs.core.vec.call(null,inst_32953);var state_32993__$1 = state_32993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32993__$1,15,out,inst_32981);
} else
{if((state_val_32994 === 13))
{var state_32993__$1 = state_32993;var statearr_33012_33035 = state_32993__$1;(statearr_33012_33035[2] = null);
(statearr_33012_33035[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 14))
{var inst_32986 = (state_32993[2]);var inst_32987 = cljs.core.async.close_BANG_.call(null,out);var state_32993__$1 = (function (){var statearr_33013 = state_32993;(statearr_33013[14] = inst_32986);
return statearr_33013;
})();var statearr_33014_33036 = state_32993__$1;(statearr_33014_33036[2] = inst_32987);
(statearr_33014_33036[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32994 === 15))
{var inst_32983 = (state_32993[2]);var state_32993__$1 = state_32993;var statearr_33015_33037 = state_32993__$1;(statearr_33015_33037[2] = inst_32983);
(statearr_33015_33037[1] = 14);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_33019 = (new Array(15));(statearr_33019[0] = state_machine__16760__auto__);
(statearr_33019[1] = 1);
return statearr_33019;
});
var state_machine__16760__auto____1 = (function (state_32993){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_32993);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e33020){if((e33020 instanceof Object))
{var ex__16763__auto__ = e33020;var statearr_33021_33038 = state_32993;(statearr_33021_33038[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33039 = state_32993;
state_32993 = G__33039;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_33022 = f__16830__auto__.call(null);(statearr_33022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___33023);
return statearr_33022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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

//# sourceMappingURL=async.js.maps.map