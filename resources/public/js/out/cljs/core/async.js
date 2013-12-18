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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22686 = (function (f,fn_handler,meta22687){
this.f = f;
this.fn_handler = fn_handler;
this.meta22687 = meta22687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22686.cljs$lang$type = true;
cljs.core.async.t22686.cljs$lang$ctorStr = "cljs.core.async/t22686";
cljs.core.async.t22686.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22686");
});
cljs.core.async.t22686.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22688){var self__ = this;
var _22688__$1 = this;return self__.meta22687;
});
cljs.core.async.t22686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22688,meta22687__$1){var self__ = this;
var _22688__$1 = this;return (new cljs.core.async.t22686(self__.f,self__.fn_handler,meta22687__$1));
});
cljs.core.async.__GT_t22686 = (function __GT_t22686(f__$1,fn_handler__$1,meta22687){return (new cljs.core.async.t22686(f__$1,fn_handler__$1,meta22687));
});
}
return (new cljs.core.async.t22686(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22690 = buff;if(G__22690)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__22690.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22690.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22690);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22690);
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
{var val_22691 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_22691);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_22691);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8233__auto__ = ret;if(cljs.core.truth_(and__8233__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8233__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9073__auto___22692 = n;var x_22693 = 0;while(true){
if((x_22693 < n__9073__auto___22692))
{(a[x_22693] = 0);
{
var G__22694 = (x_22693 + 1);
x_22693 = G__22694;
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
var G__22695 = (i + 1);
i = G__22695;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t22699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22699 = (function (flag,alt_flag,meta22700){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22700 = meta22700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22699.cljs$lang$type = true;
cljs.core.async.t22699.cljs$lang$ctorStr = "cljs.core.async/t22699";
cljs.core.async.t22699.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22699");
});
cljs.core.async.t22699.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t22699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t22699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22701){var self__ = this;
var _22701__$1 = this;return self__.meta22700;
});
cljs.core.async.t22699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22701,meta22700__$1){var self__ = this;
var _22701__$1 = this;return (new cljs.core.async.t22699(self__.flag,self__.alt_flag,meta22700__$1));
});
cljs.core.async.__GT_t22699 = (function __GT_t22699(flag__$1,alt_flag__$1,meta22700){return (new cljs.core.async.t22699(flag__$1,alt_flag__$1,meta22700));
});
}
return (new cljs.core.async.t22699(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22705 = (function (cb,flag,alt_handler,meta22706){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22706 = meta22706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22705.cljs$lang$type = true;
cljs.core.async.t22705.cljs$lang$ctorStr = "cljs.core.async/t22705";
cljs.core.async.t22705.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22705");
});
cljs.core.async.t22705.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t22705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t22705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22707){var self__ = this;
var _22707__$1 = this;return self__.meta22706;
});
cljs.core.async.t22705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22707,meta22706__$1){var self__ = this;
var _22707__$1 = this;return (new cljs.core.async.t22705(self__.cb,self__.flag,self__.alt_handler,meta22706__$1));
});
cljs.core.async.__GT_t22705 = (function __GT_t22705(cb__$1,flag__$1,alt_handler__$1,meta22706){return (new cljs.core.async.t22705(cb__$1,flag__$1,alt_handler__$1,meta22706));
});
}
return (new cljs.core.async.t22705(cb,flag,alt_handler,null));
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
return (function (p1__22708_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22708_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8245__auto__ = wport;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22709 = (i + 1);
i = G__22709;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8245__auto__ = ret;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8233__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8233__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8233__auto__;
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
var alts_BANG___delegate = function (ports,p__22710){var map__22712 = p__22710;var map__22712__$1 = ((cljs.core.seq_QMARK_.call(null,map__22712))?cljs.core.apply.call(null,cljs.core.hash_map,map__22712):map__22712);var opts = map__22712__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22710 = null;if (arguments.length > 1) {
  p__22710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22710);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22713){
var ports = cljs.core.first(arglist__22713);
var p__22710 = cljs.core.rest(arglist__22713);
return alts_BANG___delegate(ports,p__22710);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22721 = (function (ch,f,map_LT_,meta22722){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22722 = meta22722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22721.cljs$lang$type = true;
cljs.core.async.t22721.cljs$lang$ctorStr = "cljs.core.async/t22721";
cljs.core.async.t22721.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22721");
});
cljs.core.async.t22721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t22721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t22724 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22724 = (function (fn1,_,meta22722,ch,f,map_LT_,meta22725){
this.fn1 = fn1;
this._ = _;
this.meta22722 = meta22722;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22725 = meta22725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22724.cljs$lang$type = true;
cljs.core.async.t22724.cljs$lang$ctorStr = "cljs.core.async/t22724";
cljs.core.async.t22724.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22724");
});
cljs.core.async.t22724.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t22724.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t22724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__22714_SHARP_){return f1.call(null,(((p1__22714_SHARP_ == null))?null:self__.f.call(null,p1__22714_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t22724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22726){var self__ = this;
var _22726__$1 = this;return self__.meta22725;
});
cljs.core.async.t22724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22726,meta22725__$1){var self__ = this;
var _22726__$1 = this;return (new cljs.core.async.t22724(self__.fn1,self__._,self__.meta22722,self__.ch,self__.f,self__.map_LT_,meta22725__$1));
});
cljs.core.async.__GT_t22724 = (function __GT_t22724(fn1__$1,___$2,meta22722__$1,ch__$2,f__$2,map_LT___$2,meta22725){return (new cljs.core.async.t22724(fn1__$1,___$2,meta22722__$1,ch__$2,f__$2,map_LT___$2,meta22725));
});
}
return (new cljs.core.async.t22724(fn1,___$1,self__.meta22722,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8233__auto__ = ret;if(cljs.core.truth_(and__8233__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8233__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t22721.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22723){var self__ = this;
var _22723__$1 = this;return self__.meta22722;
});
cljs.core.async.t22721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22723,meta22722__$1){var self__ = this;
var _22723__$1 = this;return (new cljs.core.async.t22721(self__.ch,self__.f,self__.map_LT_,meta22722__$1));
});
cljs.core.async.__GT_t22721 = (function __GT_t22721(ch__$1,f__$1,map_LT___$1,meta22722){return (new cljs.core.async.t22721(ch__$1,f__$1,map_LT___$1,meta22722));
});
}
return (new cljs.core.async.t22721(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22730 = (function (ch,f,map_GT_,meta22731){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22731 = meta22731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22730.cljs$lang$type = true;
cljs.core.async.t22730.cljs$lang$ctorStr = "cljs.core.async/t22730";
cljs.core.async.t22730.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22730");
});
cljs.core.async.t22730.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t22730.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22730.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22732){var self__ = this;
var _22732__$1 = this;return self__.meta22731;
});
cljs.core.async.t22730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22732,meta22731__$1){var self__ = this;
var _22732__$1 = this;return (new cljs.core.async.t22730(self__.ch,self__.f,self__.map_GT_,meta22731__$1));
});
cljs.core.async.__GT_t22730 = (function __GT_t22730(ch__$1,f__$1,map_GT___$1,meta22731){return (new cljs.core.async.t22730(ch__$1,f__$1,map_GT___$1,meta22731));
});
}
return (new cljs.core.async.t22730(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22736 = (function (ch,p,filter_GT_,meta22737){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22737 = meta22737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22736.cljs$lang$type = true;
cljs.core.async.t22736.cljs$lang$ctorStr = "cljs.core.async/t22736";
cljs.core.async.t22736.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t22736");
});
cljs.core.async.t22736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t22736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22736.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22738){var self__ = this;
var _22738__$1 = this;return self__.meta22737;
});
cljs.core.async.t22736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22738,meta22737__$1){var self__ = this;
var _22738__$1 = this;return (new cljs.core.async.t22736(self__.ch,self__.p,self__.filter_GT_,meta22737__$1));
});
cljs.core.async.__GT_t22736 = (function __GT_t22736(ch__$1,p__$1,filter_GT___$1,meta22737){return (new cljs.core.async.t22736(ch__$1,p__$1,filter_GT___$1,meta22737));
});
}
return (new cljs.core.async.t22736(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___22821 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_22800){var state_val_22801 = (state_22800[1]);if((state_val_22801 === 1))
{var state_22800__$1 = state_22800;var statearr_22802_22822 = state_22800__$1;(statearr_22802_22822[2] = null);
(statearr_22802_22822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 2))
{var state_22800__$1 = state_22800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22800__$1,4,ch);
} else
{if((state_val_22801 === 3))
{var inst_22798 = (state_22800[2]);var state_22800__$1 = state_22800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22800__$1,inst_22798);
} else
{if((state_val_22801 === 4))
{var inst_22782 = (state_22800[7]);var inst_22782__$1 = (state_22800[2]);var inst_22783 = (inst_22782__$1 == null);var state_22800__$1 = (function (){var statearr_22803 = state_22800;(statearr_22803[7] = inst_22782__$1);
return statearr_22803;
})();if(cljs.core.truth_(inst_22783))
{var statearr_22804_22823 = state_22800__$1;(statearr_22804_22823[1] = 5);
} else
{var statearr_22805_22824 = state_22800__$1;(statearr_22805_22824[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 5))
{var inst_22785 = cljs.core.async.close_BANG_.call(null,out);var state_22800__$1 = state_22800;var statearr_22806_22825 = state_22800__$1;(statearr_22806_22825[2] = inst_22785);
(statearr_22806_22825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 6))
{var inst_22782 = (state_22800[7]);var inst_22787 = p.call(null,inst_22782);var state_22800__$1 = state_22800;if(cljs.core.truth_(inst_22787))
{var statearr_22807_22826 = state_22800__$1;(statearr_22807_22826[1] = 8);
} else
{var statearr_22808_22827 = state_22800__$1;(statearr_22808_22827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 7))
{var inst_22796 = (state_22800[2]);var state_22800__$1 = state_22800;var statearr_22809_22828 = state_22800__$1;(statearr_22809_22828[2] = inst_22796);
(statearr_22809_22828[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 8))
{var inst_22782 = (state_22800[7]);var state_22800__$1 = state_22800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22800__$1,11,out,inst_22782);
} else
{if((state_val_22801 === 9))
{var state_22800__$1 = state_22800;var statearr_22810_22829 = state_22800__$1;(statearr_22810_22829[2] = null);
(statearr_22810_22829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 10))
{var inst_22793 = (state_22800[2]);var state_22800__$1 = (function (){var statearr_22811 = state_22800;(statearr_22811[8] = inst_22793);
return statearr_22811;
})();var statearr_22812_22830 = state_22800__$1;(statearr_22812_22830[2] = null);
(statearr_22812_22830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22801 === 11))
{var inst_22790 = (state_22800[2]);var state_22800__$1 = state_22800;var statearr_22813_22831 = state_22800__$1;(statearr_22813_22831[2] = inst_22790);
(statearr_22813_22831[1] = 10);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_22817 = [null,null,null,null,null,null,null,null,null];(statearr_22817[0] = state_machine__12133__auto__);
(statearr_22817[1] = 1);
return statearr_22817;
});
var state_machine__12133__auto____1 = (function (state_22800){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_22800);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e22818){if((e22818 instanceof Object))
{var ex__12136__auto__ = e22818;var statearr_22819_22832 = state_22800;(statearr_22819_22832[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22833 = state_22800;
state_22800 = G__22833;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_22800){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_22800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_22820 = f__12203__auto__.call(null);(statearr_22820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___22821);
return statearr_22820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12202__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_22985){var state_val_22986 = (state_22985[1]);if((state_val_22986 === 1))
{var state_22985__$1 = state_22985;var statearr_22987_23024 = state_22985__$1;(statearr_22987_23024[2] = null);
(statearr_22987_23024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 2))
{var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22985__$1,4,in$);
} else
{if((state_val_22986 === 3))
{var inst_22983 = (state_22985[2]);var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22985__$1,inst_22983);
} else
{if((state_val_22986 === 4))
{var inst_22931 = (state_22985[7]);var inst_22931__$1 = (state_22985[2]);var inst_22932 = (inst_22931__$1 == null);var state_22985__$1 = (function (){var statearr_22988 = state_22985;(statearr_22988[7] = inst_22931__$1);
return statearr_22988;
})();if(cljs.core.truth_(inst_22932))
{var statearr_22989_23025 = state_22985__$1;(statearr_22989_23025[1] = 5);
} else
{var statearr_22990_23026 = state_22985__$1;(statearr_22990_23026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 5))
{var inst_22934 = cljs.core.async.close_BANG_.call(null,out);var state_22985__$1 = state_22985;var statearr_22991_23027 = state_22985__$1;(statearr_22991_23027[2] = inst_22934);
(statearr_22991_23027[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 6))
{var inst_22931 = (state_22985[7]);var inst_22936 = f.call(null,inst_22931);var inst_22941 = cljs.core.seq.call(null,inst_22936);var inst_22942 = inst_22941;var inst_22943 = null;var inst_22944 = 0;var inst_22945 = 0;var state_22985__$1 = (function (){var statearr_22992 = state_22985;(statearr_22992[8] = inst_22942);
(statearr_22992[9] = inst_22943);
(statearr_22992[10] = inst_22945);
(statearr_22992[11] = inst_22944);
return statearr_22992;
})();var statearr_22993_23028 = state_22985__$1;(statearr_22993_23028[2] = null);
(statearr_22993_23028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 7))
{var inst_22981 = (state_22985[2]);var state_22985__$1 = state_22985;var statearr_22994_23029 = state_22985__$1;(statearr_22994_23029[2] = inst_22981);
(statearr_22994_23029[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 8))
{var inst_22945 = (state_22985[10]);var inst_22944 = (state_22985[11]);var inst_22947 = (inst_22945 < inst_22944);var inst_22948 = inst_22947;var state_22985__$1 = state_22985;if(cljs.core.truth_(inst_22948))
{var statearr_22995_23030 = state_22985__$1;(statearr_22995_23030[1] = 10);
} else
{var statearr_22996_23031 = state_22985__$1;(statearr_22996_23031[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 9))
{var inst_22978 = (state_22985[2]);var state_22985__$1 = (function (){var statearr_22997 = state_22985;(statearr_22997[12] = inst_22978);
return statearr_22997;
})();var statearr_22998_23032 = state_22985__$1;(statearr_22998_23032[2] = null);
(statearr_22998_23032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 10))
{var inst_22943 = (state_22985[9]);var inst_22945 = (state_22985[10]);var inst_22950 = cljs.core._nth.call(null,inst_22943,inst_22945);var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22985__$1,13,out,inst_22950);
} else
{if((state_val_22986 === 11))
{var inst_22956 = (state_22985[13]);var inst_22942 = (state_22985[8]);var inst_22956__$1 = cljs.core.seq.call(null,inst_22942);var state_22985__$1 = (function (){var statearr_23002 = state_22985;(statearr_23002[13] = inst_22956__$1);
return statearr_23002;
})();if(inst_22956__$1)
{var statearr_23003_23033 = state_22985__$1;(statearr_23003_23033[1] = 14);
} else
{var statearr_23004_23034 = state_22985__$1;(statearr_23004_23034[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 12))
{var inst_22976 = (state_22985[2]);var state_22985__$1 = state_22985;var statearr_23005_23035 = state_22985__$1;(statearr_23005_23035[2] = inst_22976);
(statearr_23005_23035[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 13))
{var inst_22942 = (state_22985[8]);var inst_22943 = (state_22985[9]);var inst_22945 = (state_22985[10]);var inst_22944 = (state_22985[11]);var inst_22952 = (state_22985[2]);var inst_22953 = (inst_22945 + 1);var tmp22999 = inst_22942;var tmp23000 = inst_22943;var tmp23001 = inst_22944;var inst_22942__$1 = tmp22999;var inst_22943__$1 = tmp23000;var inst_22944__$1 = tmp23001;var inst_22945__$1 = inst_22953;var state_22985__$1 = (function (){var statearr_23006 = state_22985;(statearr_23006[8] = inst_22942__$1);
(statearr_23006[9] = inst_22943__$1);
(statearr_23006[10] = inst_22945__$1);
(statearr_23006[11] = inst_22944__$1);
(statearr_23006[14] = inst_22952);
return statearr_23006;
})();var statearr_23007_23036 = state_22985__$1;(statearr_23007_23036[2] = null);
(statearr_23007_23036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 14))
{var inst_22956 = (state_22985[13]);var inst_22958 = cljs.core.chunked_seq_QMARK_.call(null,inst_22956);var state_22985__$1 = state_22985;if(inst_22958)
{var statearr_23008_23037 = state_22985__$1;(statearr_23008_23037[1] = 17);
} else
{var statearr_23009_23038 = state_22985__$1;(statearr_23009_23038[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 15))
{var state_22985__$1 = state_22985;var statearr_23010_23039 = state_22985__$1;(statearr_23010_23039[2] = null);
(statearr_23010_23039[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 16))
{var inst_22974 = (state_22985[2]);var state_22985__$1 = state_22985;var statearr_23011_23040 = state_22985__$1;(statearr_23011_23040[2] = inst_22974);
(statearr_23011_23040[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 17))
{var inst_22956 = (state_22985[13]);var inst_22960 = cljs.core.chunk_first.call(null,inst_22956);var inst_22961 = cljs.core.chunk_rest.call(null,inst_22956);var inst_22962 = cljs.core.count.call(null,inst_22960);var inst_22942 = inst_22961;var inst_22943 = inst_22960;var inst_22944 = inst_22962;var inst_22945 = 0;var state_22985__$1 = (function (){var statearr_23012 = state_22985;(statearr_23012[8] = inst_22942);
(statearr_23012[9] = inst_22943);
(statearr_23012[10] = inst_22945);
(statearr_23012[11] = inst_22944);
return statearr_23012;
})();var statearr_23013_23041 = state_22985__$1;(statearr_23013_23041[2] = null);
(statearr_23013_23041[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 18))
{var inst_22956 = (state_22985[13]);var inst_22965 = cljs.core.first.call(null,inst_22956);var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22985__$1,20,out,inst_22965);
} else
{if((state_val_22986 === 19))
{var inst_22971 = (state_22985[2]);var state_22985__$1 = state_22985;var statearr_23014_23042 = state_22985__$1;(statearr_23014_23042[2] = inst_22971);
(statearr_23014_23042[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 20))
{var inst_22956 = (state_22985[13]);var inst_22967 = (state_22985[2]);var inst_22968 = cljs.core.next.call(null,inst_22956);var inst_22942 = inst_22968;var inst_22943 = null;var inst_22944 = 0;var inst_22945 = 0;var state_22985__$1 = (function (){var statearr_23015 = state_22985;(statearr_23015[8] = inst_22942);
(statearr_23015[9] = inst_22943);
(statearr_23015[15] = inst_22967);
(statearr_23015[10] = inst_22945);
(statearr_23015[11] = inst_22944);
return statearr_23015;
})();var statearr_23016_23043 = state_22985__$1;(statearr_23016_23043[2] = null);
(statearr_23016_23043[1] = 8);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_23020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23020[0] = state_machine__12133__auto__);
(statearr_23020[1] = 1);
return statearr_23020;
});
var state_machine__12133__auto____1 = (function (state_22985){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_22985);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e23021){if((e23021 instanceof Object))
{var ex__12136__auto__ = e23021;var statearr_23022_23044 = state_22985;(statearr_23022_23044[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23045 = state_22985;
state_22985 = G__23045;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_22985){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_22985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_23023 = f__12203__auto__.call(null);(statearr_23023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto__);
return statearr_23023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return c__12202__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12202__auto___23126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_23105){var state_val_23106 = (state_23105[1]);if((state_val_23106 === 1))
{var state_23105__$1 = state_23105;var statearr_23107_23127 = state_23105__$1;(statearr_23107_23127[2] = null);
(statearr_23107_23127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 2))
{var state_23105__$1 = state_23105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23105__$1,4,from);
} else
{if((state_val_23106 === 3))
{var inst_23103 = (state_23105[2]);var state_23105__$1 = state_23105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23105__$1,inst_23103);
} else
{if((state_val_23106 === 4))
{var inst_23088 = (state_23105[7]);var inst_23088__$1 = (state_23105[2]);var inst_23089 = (inst_23088__$1 == null);var state_23105__$1 = (function (){var statearr_23108 = state_23105;(statearr_23108[7] = inst_23088__$1);
return statearr_23108;
})();if(cljs.core.truth_(inst_23089))
{var statearr_23109_23128 = state_23105__$1;(statearr_23109_23128[1] = 5);
} else
{var statearr_23110_23129 = state_23105__$1;(statearr_23110_23129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 5))
{var state_23105__$1 = state_23105;if(cljs.core.truth_(close_QMARK_))
{var statearr_23111_23130 = state_23105__$1;(statearr_23111_23130[1] = 8);
} else
{var statearr_23112_23131 = state_23105__$1;(statearr_23112_23131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 6))
{var inst_23088 = (state_23105[7]);var state_23105__$1 = state_23105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23105__$1,11,to,inst_23088);
} else
{if((state_val_23106 === 7))
{var inst_23101 = (state_23105[2]);var state_23105__$1 = state_23105;var statearr_23113_23132 = state_23105__$1;(statearr_23113_23132[2] = inst_23101);
(statearr_23113_23132[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 8))
{var inst_23092 = cljs.core.async.close_BANG_.call(null,to);var state_23105__$1 = state_23105;var statearr_23114_23133 = state_23105__$1;(statearr_23114_23133[2] = inst_23092);
(statearr_23114_23133[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 9))
{var state_23105__$1 = state_23105;var statearr_23115_23134 = state_23105__$1;(statearr_23115_23134[2] = null);
(statearr_23115_23134[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 10))
{var inst_23095 = (state_23105[2]);var state_23105__$1 = state_23105;var statearr_23116_23135 = state_23105__$1;(statearr_23116_23135[2] = inst_23095);
(statearr_23116_23135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23106 === 11))
{var inst_23098 = (state_23105[2]);var state_23105__$1 = (function (){var statearr_23117 = state_23105;(statearr_23117[8] = inst_23098);
return statearr_23117;
})();var statearr_23118_23136 = state_23105__$1;(statearr_23118_23136[2] = null);
(statearr_23118_23136[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_23122 = [null,null,null,null,null,null,null,null,null];(statearr_23122[0] = state_machine__12133__auto__);
(statearr_23122[1] = 1);
return statearr_23122;
});
var state_machine__12133__auto____1 = (function (state_23105){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_23105);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e23123){if((e23123 instanceof Object))
{var ex__12136__auto__ = e23123;var statearr_23124_23137 = state_23105;(statearr_23124_23137[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23105);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23138 = state_23105;
state_23105 = G__23138;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_23105){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_23105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_23125 = f__12203__auto__.call(null);(statearr_23125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___23126);
return statearr_23125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12202__auto___23225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_23203){var state_val_23204 = (state_23203[1]);if((state_val_23204 === 1))
{var state_23203__$1 = state_23203;var statearr_23205_23226 = state_23203__$1;(statearr_23205_23226[2] = null);
(statearr_23205_23226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 2))
{var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23203__$1,4,ch);
} else
{if((state_val_23204 === 3))
{var inst_23201 = (state_23203[2]);var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23203__$1,inst_23201);
} else
{if((state_val_23204 === 4))
{var inst_23184 = (state_23203[7]);var inst_23184__$1 = (state_23203[2]);var inst_23185 = (inst_23184__$1 == null);var state_23203__$1 = (function (){var statearr_23206 = state_23203;(statearr_23206[7] = inst_23184__$1);
return statearr_23206;
})();if(cljs.core.truth_(inst_23185))
{var statearr_23207_23227 = state_23203__$1;(statearr_23207_23227[1] = 5);
} else
{var statearr_23208_23228 = state_23203__$1;(statearr_23208_23228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 5))
{var inst_23187 = cljs.core.async.close_BANG_.call(null,tc);var inst_23188 = cljs.core.async.close_BANG_.call(null,fc);var state_23203__$1 = (function (){var statearr_23209 = state_23203;(statearr_23209[8] = inst_23187);
return statearr_23209;
})();var statearr_23210_23229 = state_23203__$1;(statearr_23210_23229[2] = inst_23188);
(statearr_23210_23229[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 6))
{var inst_23184 = (state_23203[7]);var inst_23190 = p.call(null,inst_23184);var state_23203__$1 = state_23203;if(cljs.core.truth_(inst_23190))
{var statearr_23211_23230 = state_23203__$1;(statearr_23211_23230[1] = 9);
} else
{var statearr_23212_23231 = state_23203__$1;(statearr_23212_23231[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 7))
{var inst_23199 = (state_23203[2]);var state_23203__$1 = state_23203;var statearr_23213_23232 = state_23203__$1;(statearr_23213_23232[2] = inst_23199);
(statearr_23213_23232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 8))
{var inst_23196 = (state_23203[2]);var state_23203__$1 = (function (){var statearr_23214 = state_23203;(statearr_23214[9] = inst_23196);
return statearr_23214;
})();var statearr_23215_23233 = state_23203__$1;(statearr_23215_23233[2] = null);
(statearr_23215_23233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 9))
{var state_23203__$1 = state_23203;var statearr_23216_23234 = state_23203__$1;(statearr_23216_23234[2] = tc);
(statearr_23216_23234[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 10))
{var state_23203__$1 = state_23203;var statearr_23217_23235 = state_23203__$1;(statearr_23217_23235[2] = fc);
(statearr_23217_23235[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23204 === 11))
{var inst_23184 = (state_23203[7]);var inst_23194 = (state_23203[2]);var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23203__$1,8,inst_23194,inst_23184);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_23221 = [null,null,null,null,null,null,null,null,null,null];(statearr_23221[0] = state_machine__12133__auto__);
(statearr_23221[1] = 1);
return statearr_23221;
});
var state_machine__12133__auto____1 = (function (state_23203){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_23203);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e23222){if((e23222 instanceof Object))
{var ex__12136__auto__ = e23222;var statearr_23223_23236 = state_23203;(statearr_23223_23236[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23237 = state_23203;
state_23203 = G__23237;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_23203){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_23203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_23224 = f__12203__auto__.call(null);(statearr_23224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___23225);
return statearr_23224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12202__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_23284){var state_val_23285 = (state_23284[1]);if((state_val_23285 === 7))
{var inst_23280 = (state_23284[2]);var state_23284__$1 = state_23284;var statearr_23286_23302 = state_23284__$1;(statearr_23286_23302[2] = inst_23280);
(statearr_23286_23302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23285 === 6))
{var inst_23273 = (state_23284[7]);var inst_23270 = (state_23284[8]);var inst_23277 = f.call(null,inst_23270,inst_23273);var inst_23270__$1 = inst_23277;var state_23284__$1 = (function (){var statearr_23287 = state_23284;(statearr_23287[8] = inst_23270__$1);
return statearr_23287;
})();var statearr_23288_23303 = state_23284__$1;(statearr_23288_23303[2] = null);
(statearr_23288_23303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23285 === 5))
{var inst_23270 = (state_23284[8]);var state_23284__$1 = state_23284;var statearr_23289_23304 = state_23284__$1;(statearr_23289_23304[2] = inst_23270);
(statearr_23289_23304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23285 === 4))
{var inst_23273 = (state_23284[7]);var inst_23273__$1 = (state_23284[2]);var inst_23274 = (inst_23273__$1 == null);var state_23284__$1 = (function (){var statearr_23290 = state_23284;(statearr_23290[7] = inst_23273__$1);
return statearr_23290;
})();if(cljs.core.truth_(inst_23274))
{var statearr_23291_23305 = state_23284__$1;(statearr_23291_23305[1] = 5);
} else
{var statearr_23292_23306 = state_23284__$1;(statearr_23292_23306[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23285 === 3))
{var inst_23282 = (state_23284[2]);var state_23284__$1 = state_23284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23284__$1,inst_23282);
} else
{if((state_val_23285 === 2))
{var state_23284__$1 = state_23284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23284__$1,4,ch);
} else
{if((state_val_23285 === 1))
{var inst_23270 = init;var state_23284__$1 = (function (){var statearr_23293 = state_23284;(statearr_23293[8] = inst_23270);
return statearr_23293;
})();var statearr_23294_23307 = state_23284__$1;(statearr_23294_23307[2] = null);
(statearr_23294_23307[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_23298 = [null,null,null,null,null,null,null,null,null];(statearr_23298[0] = state_machine__12133__auto__);
(statearr_23298[1] = 1);
return statearr_23298;
});
var state_machine__12133__auto____1 = (function (state_23284){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_23284);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e23299){if((e23299 instanceof Object))
{var ex__12136__auto__ = e23299;var statearr_23300_23308 = state_23284;(statearr_23300_23308[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23309 = state_23284;
state_23284 = G__23309;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_23284){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_23284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_23301 = f__12203__auto__.call(null);(statearr_23301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto__);
return statearr_23301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return c__12202__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12202__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_23371){var state_val_23372 = (state_23371[1]);if((state_val_23372 === 1))
{var inst_23351 = cljs.core.seq.call(null,coll);var inst_23352 = inst_23351;var state_23371__$1 = (function (){var statearr_23373 = state_23371;(statearr_23373[7] = inst_23352);
return statearr_23373;
})();var statearr_23374_23392 = state_23371__$1;(statearr_23374_23392[2] = null);
(statearr_23374_23392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 2))
{var inst_23352 = (state_23371[7]);var state_23371__$1 = state_23371;if(cljs.core.truth_(inst_23352))
{var statearr_23375_23393 = state_23371__$1;(statearr_23375_23393[1] = 4);
} else
{var statearr_23376_23394 = state_23371__$1;(statearr_23376_23394[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 3))
{var inst_23369 = (state_23371[2]);var state_23371__$1 = state_23371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23371__$1,inst_23369);
} else
{if((state_val_23372 === 4))
{var inst_23352 = (state_23371[7]);var inst_23355 = cljs.core.first.call(null,inst_23352);var state_23371__$1 = state_23371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23371__$1,7,ch,inst_23355);
} else
{if((state_val_23372 === 5))
{var state_23371__$1 = state_23371;if(cljs.core.truth_(close_QMARK_))
{var statearr_23377_23395 = state_23371__$1;(statearr_23377_23395[1] = 8);
} else
{var statearr_23378_23396 = state_23371__$1;(statearr_23378_23396[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 6))
{var inst_23367 = (state_23371[2]);var state_23371__$1 = state_23371;var statearr_23379_23397 = state_23371__$1;(statearr_23379_23397[2] = inst_23367);
(statearr_23379_23397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 7))
{var inst_23352 = (state_23371[7]);var inst_23357 = (state_23371[2]);var inst_23358 = cljs.core.next.call(null,inst_23352);var inst_23352__$1 = inst_23358;var state_23371__$1 = (function (){var statearr_23380 = state_23371;(statearr_23380[7] = inst_23352__$1);
(statearr_23380[8] = inst_23357);
return statearr_23380;
})();var statearr_23381_23398 = state_23371__$1;(statearr_23381_23398[2] = null);
(statearr_23381_23398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 8))
{var inst_23362 = cljs.core.async.close_BANG_.call(null,ch);var state_23371__$1 = state_23371;var statearr_23382_23399 = state_23371__$1;(statearr_23382_23399[2] = inst_23362);
(statearr_23382_23399[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 9))
{var state_23371__$1 = state_23371;var statearr_23383_23400 = state_23371__$1;(statearr_23383_23400[2] = null);
(statearr_23383_23400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23372 === 10))
{var inst_23365 = (state_23371[2]);var state_23371__$1 = state_23371;var statearr_23384_23401 = state_23371__$1;(statearr_23384_23401[2] = inst_23365);
(statearr_23384_23401[1] = 6);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_23388 = [null,null,null,null,null,null,null,null,null];(statearr_23388[0] = state_machine__12133__auto__);
(statearr_23388[1] = 1);
return statearr_23388;
});
var state_machine__12133__auto____1 = (function (state_23371){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_23371);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e23389){if((e23389 instanceof Object))
{var ex__12136__auto__ = e23389;var statearr_23390_23402 = state_23371;(statearr_23390_23402[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23403 = state_23371;
state_23371 = G__23403;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_23371){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_23371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_23391 = f__12203__auto__.call(null);(statearr_23391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto__);
return statearr_23391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return c__12202__auto__;
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
cljs.core.async.Mux = (function (){var obj23405 = {};return obj23405;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23407 = {};return obj23407;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23631 = (function (cs,ch,mult,meta23632){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23632 = meta23632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23631.cljs$lang$type = true;
cljs.core.async.t23631.cljs$lang$ctorStr = "cljs.core.async/t23631";
cljs.core.async.t23631.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t23631");
});})(cs))
;
cljs.core.async.t23631.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23631.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23631.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23631.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23631.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23633){var self__ = this;
var _23633__$1 = this;return self__.meta23632;
});})(cs))
;
cljs.core.async.t23631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23633,meta23632__$1){var self__ = this;
var _23633__$1 = this;return (new cljs.core.async.t23631(self__.cs,self__.ch,self__.mult,meta23632__$1));
});})(cs))
;
cljs.core.async.__GT_t23631 = ((function (cs){
return (function __GT_t23631(cs__$1,ch__$1,mult__$1,meta23632){return (new cljs.core.async.t23631(cs__$1,ch__$1,mult__$1,meta23632));
});})(cs))
;
}
return (new cljs.core.async.t23631(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12202__auto___23854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_23768){var state_val_23769 = (state_23768[1]);if((state_val_23769 === 32))
{var inst_23712 = (state_23768[7]);var inst_23636 = (state_23768[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23768,31,Object,null,30);var inst_23719 = cljs.core.async.put_BANG_.call(null,inst_23712,inst_23636,done);var state_23768__$1 = state_23768;var statearr_23770_23855 = state_23768__$1;(statearr_23770_23855[2] = inst_23719);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 1))
{var state_23768__$1 = state_23768;var statearr_23771_23856 = state_23768__$1;(statearr_23771_23856[2] = null);
(statearr_23771_23856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 33))
{var inst_23725 = (state_23768[9]);var inst_23727 = cljs.core.chunked_seq_QMARK_.call(null,inst_23725);var state_23768__$1 = state_23768;if(inst_23727)
{var statearr_23772_23857 = state_23768__$1;(statearr_23772_23857[1] = 36);
} else
{var statearr_23773_23858 = state_23768__$1;(statearr_23773_23858[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 2))
{var state_23768__$1 = state_23768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,4,ch);
} else
{if((state_val_23769 === 34))
{var state_23768__$1 = state_23768;var statearr_23774_23859 = state_23768__$1;(statearr_23774_23859[2] = null);
(statearr_23774_23859[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 3))
{var inst_23766 = (state_23768[2]);var state_23768__$1 = state_23768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23768__$1,inst_23766);
} else
{if((state_val_23769 === 35))
{var inst_23750 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23775_23860 = state_23768__$1;(statearr_23775_23860[2] = inst_23750);
(statearr_23775_23860[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 4))
{var inst_23636 = (state_23768[8]);var inst_23636__$1 = (state_23768[2]);var inst_23637 = (inst_23636__$1 == null);var state_23768__$1 = (function (){var statearr_23776 = state_23768;(statearr_23776[8] = inst_23636__$1);
return statearr_23776;
})();if(cljs.core.truth_(inst_23637))
{var statearr_23777_23861 = state_23768__$1;(statearr_23777_23861[1] = 5);
} else
{var statearr_23778_23862 = state_23768__$1;(statearr_23778_23862[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 36))
{var inst_23725 = (state_23768[9]);var inst_23729 = cljs.core.chunk_first.call(null,inst_23725);var inst_23730 = cljs.core.chunk_rest.call(null,inst_23725);var inst_23731 = cljs.core.count.call(null,inst_23729);var inst_23704 = inst_23730;var inst_23705 = inst_23729;var inst_23706 = inst_23731;var inst_23707 = 0;var state_23768__$1 = (function (){var statearr_23779 = state_23768;(statearr_23779[10] = inst_23704);
(statearr_23779[11] = inst_23706);
(statearr_23779[12] = inst_23705);
(statearr_23779[13] = inst_23707);
return statearr_23779;
})();var statearr_23780_23863 = state_23768__$1;(statearr_23780_23863[2] = null);
(statearr_23780_23863[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 5))
{var inst_23643 = cljs.core.deref.call(null,cs);var inst_23644 = cljs.core.seq.call(null,inst_23643);var inst_23645 = inst_23644;var inst_23646 = null;var inst_23647 = 0;var inst_23648 = 0;var state_23768__$1 = (function (){var statearr_23781 = state_23768;(statearr_23781[14] = inst_23648);
(statearr_23781[15] = inst_23645);
(statearr_23781[16] = inst_23646);
(statearr_23781[17] = inst_23647);
return statearr_23781;
})();var statearr_23782_23864 = state_23768__$1;(statearr_23782_23864[2] = null);
(statearr_23782_23864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 37))
{var inst_23725 = (state_23768[9]);var inst_23734 = cljs.core.first.call(null,inst_23725);var state_23768__$1 = (function (){var statearr_23783 = state_23768;(statearr_23783[18] = inst_23734);
return statearr_23783;
})();var statearr_23784_23865 = state_23768__$1;(statearr_23784_23865[2] = null);
(statearr_23784_23865[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 6))
{var inst_23696 = (state_23768[19]);var inst_23695 = cljs.core.deref.call(null,cs);var inst_23696__$1 = cljs.core.keys.call(null,inst_23695);var inst_23697 = cljs.core.count.call(null,inst_23696__$1);var inst_23698 = cljs.core.reset_BANG_.call(null,dctr,inst_23697);var inst_23703 = cljs.core.seq.call(null,inst_23696__$1);var inst_23704 = inst_23703;var inst_23705 = null;var inst_23706 = 0;var inst_23707 = 0;var state_23768__$1 = (function (){var statearr_23785 = state_23768;(statearr_23785[10] = inst_23704);
(statearr_23785[11] = inst_23706);
(statearr_23785[12] = inst_23705);
(statearr_23785[13] = inst_23707);
(statearr_23785[20] = inst_23698);
(statearr_23785[19] = inst_23696__$1);
return statearr_23785;
})();var statearr_23786_23866 = state_23768__$1;(statearr_23786_23866[2] = null);
(statearr_23786_23866[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 38))
{var inst_23747 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23787_23867 = state_23768__$1;(statearr_23787_23867[2] = inst_23747);
(statearr_23787_23867[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 7))
{var inst_23764 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23788_23868 = state_23768__$1;(statearr_23788_23868[2] = inst_23764);
(statearr_23788_23868[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 39))
{var inst_23725 = (state_23768[9]);var inst_23743 = (state_23768[2]);var inst_23744 = cljs.core.next.call(null,inst_23725);var inst_23704 = inst_23744;var inst_23705 = null;var inst_23706 = 0;var inst_23707 = 0;var state_23768__$1 = (function (){var statearr_23789 = state_23768;(statearr_23789[21] = inst_23743);
(statearr_23789[10] = inst_23704);
(statearr_23789[11] = inst_23706);
(statearr_23789[12] = inst_23705);
(statearr_23789[13] = inst_23707);
return statearr_23789;
})();var statearr_23790_23869 = state_23768__$1;(statearr_23790_23869[2] = null);
(statearr_23790_23869[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 8))
{var inst_23648 = (state_23768[14]);var inst_23647 = (state_23768[17]);var inst_23650 = (inst_23648 < inst_23647);var inst_23651 = inst_23650;var state_23768__$1 = state_23768;if(cljs.core.truth_(inst_23651))
{var statearr_23791_23870 = state_23768__$1;(statearr_23791_23870[1] = 10);
} else
{var statearr_23792_23871 = state_23768__$1;(statearr_23792_23871[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 40))
{var inst_23734 = (state_23768[18]);var inst_23735 = (state_23768[2]);var inst_23736 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23737 = cljs.core.async.untap_STAR_.call(null,m,inst_23734);var state_23768__$1 = (function (){var statearr_23793 = state_23768;(statearr_23793[22] = inst_23736);
(statearr_23793[23] = inst_23735);
return statearr_23793;
})();var statearr_23794_23872 = state_23768__$1;(statearr_23794_23872[2] = inst_23737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 9))
{var inst_23693 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23795_23873 = state_23768__$1;(statearr_23795_23873[2] = inst_23693);
(statearr_23795_23873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 41))
{var inst_23636 = (state_23768[8]);var inst_23734 = (state_23768[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23768,40,Object,null,39);var inst_23741 = cljs.core.async.put_BANG_.call(null,inst_23734,inst_23636,done);var state_23768__$1 = state_23768;var statearr_23796_23874 = state_23768__$1;(statearr_23796_23874[2] = inst_23741);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 10))
{var inst_23648 = (state_23768[14]);var inst_23646 = (state_23768[16]);var inst_23654 = cljs.core._nth.call(null,inst_23646,inst_23648);var inst_23655 = cljs.core.nth.call(null,inst_23654,0,null);var inst_23656 = cljs.core.nth.call(null,inst_23654,1,null);var state_23768__$1 = (function (){var statearr_23797 = state_23768;(statearr_23797[24] = inst_23655);
return statearr_23797;
})();if(cljs.core.truth_(inst_23656))
{var statearr_23798_23875 = state_23768__$1;(statearr_23798_23875[1] = 13);
} else
{var statearr_23799_23876 = state_23768__$1;(statearr_23799_23876[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 42))
{var state_23768__$1 = state_23768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,45,dchan);
} else
{if((state_val_23769 === 11))
{var inst_23665 = (state_23768[25]);var inst_23645 = (state_23768[15]);var inst_23665__$1 = cljs.core.seq.call(null,inst_23645);var state_23768__$1 = (function (){var statearr_23800 = state_23768;(statearr_23800[25] = inst_23665__$1);
return statearr_23800;
})();if(inst_23665__$1)
{var statearr_23801_23877 = state_23768__$1;(statearr_23801_23877[1] = 16);
} else
{var statearr_23802_23878 = state_23768__$1;(statearr_23802_23878[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 43))
{var state_23768__$1 = state_23768;var statearr_23803_23879 = state_23768__$1;(statearr_23803_23879[2] = null);
(statearr_23803_23879[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 12))
{var inst_23691 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23804_23880 = state_23768__$1;(statearr_23804_23880[2] = inst_23691);
(statearr_23804_23880[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 44))
{var inst_23761 = (state_23768[2]);var state_23768__$1 = (function (){var statearr_23805 = state_23768;(statearr_23805[26] = inst_23761);
return statearr_23805;
})();var statearr_23806_23881 = state_23768__$1;(statearr_23806_23881[2] = null);
(statearr_23806_23881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 13))
{var inst_23655 = (state_23768[24]);var inst_23658 = cljs.core.async.close_BANG_.call(null,inst_23655);var state_23768__$1 = state_23768;var statearr_23807_23882 = state_23768__$1;(statearr_23807_23882[2] = inst_23658);
(statearr_23807_23882[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 45))
{var inst_23758 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23811_23883 = state_23768__$1;(statearr_23811_23883[2] = inst_23758);
(statearr_23811_23883[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 14))
{var state_23768__$1 = state_23768;var statearr_23812_23884 = state_23768__$1;(statearr_23812_23884[2] = null);
(statearr_23812_23884[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 15))
{var inst_23648 = (state_23768[14]);var inst_23645 = (state_23768[15]);var inst_23646 = (state_23768[16]);var inst_23647 = (state_23768[17]);var inst_23661 = (state_23768[2]);var inst_23662 = (inst_23648 + 1);var tmp23808 = inst_23645;var tmp23809 = inst_23646;var tmp23810 = inst_23647;var inst_23645__$1 = tmp23808;var inst_23646__$1 = tmp23809;var inst_23647__$1 = tmp23810;var inst_23648__$1 = inst_23662;var state_23768__$1 = (function (){var statearr_23813 = state_23768;(statearr_23813[14] = inst_23648__$1);
(statearr_23813[27] = inst_23661);
(statearr_23813[15] = inst_23645__$1);
(statearr_23813[16] = inst_23646__$1);
(statearr_23813[17] = inst_23647__$1);
return statearr_23813;
})();var statearr_23814_23885 = state_23768__$1;(statearr_23814_23885[2] = null);
(statearr_23814_23885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 16))
{var inst_23665 = (state_23768[25]);var inst_23667 = cljs.core.chunked_seq_QMARK_.call(null,inst_23665);var state_23768__$1 = state_23768;if(inst_23667)
{var statearr_23815_23886 = state_23768__$1;(statearr_23815_23886[1] = 19);
} else
{var statearr_23816_23887 = state_23768__$1;(statearr_23816_23887[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 17))
{var state_23768__$1 = state_23768;var statearr_23817_23888 = state_23768__$1;(statearr_23817_23888[2] = null);
(statearr_23817_23888[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 18))
{var inst_23689 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23818_23889 = state_23768__$1;(statearr_23818_23889[2] = inst_23689);
(statearr_23818_23889[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 19))
{var inst_23665 = (state_23768[25]);var inst_23669 = cljs.core.chunk_first.call(null,inst_23665);var inst_23670 = cljs.core.chunk_rest.call(null,inst_23665);var inst_23671 = cljs.core.count.call(null,inst_23669);var inst_23645 = inst_23670;var inst_23646 = inst_23669;var inst_23647 = inst_23671;var inst_23648 = 0;var state_23768__$1 = (function (){var statearr_23819 = state_23768;(statearr_23819[14] = inst_23648);
(statearr_23819[15] = inst_23645);
(statearr_23819[16] = inst_23646);
(statearr_23819[17] = inst_23647);
return statearr_23819;
})();var statearr_23820_23890 = state_23768__$1;(statearr_23820_23890[2] = null);
(statearr_23820_23890[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 20))
{var inst_23665 = (state_23768[25]);var inst_23675 = cljs.core.first.call(null,inst_23665);var inst_23676 = cljs.core.nth.call(null,inst_23675,0,null);var inst_23677 = cljs.core.nth.call(null,inst_23675,1,null);var state_23768__$1 = (function (){var statearr_23821 = state_23768;(statearr_23821[28] = inst_23676);
return statearr_23821;
})();if(cljs.core.truth_(inst_23677))
{var statearr_23822_23891 = state_23768__$1;(statearr_23822_23891[1] = 22);
} else
{var statearr_23823_23892 = state_23768__$1;(statearr_23823_23892[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 21))
{var inst_23686 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23824_23893 = state_23768__$1;(statearr_23824_23893[2] = inst_23686);
(statearr_23824_23893[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 22))
{var inst_23676 = (state_23768[28]);var inst_23679 = cljs.core.async.close_BANG_.call(null,inst_23676);var state_23768__$1 = state_23768;var statearr_23825_23894 = state_23768__$1;(statearr_23825_23894[2] = inst_23679);
(statearr_23825_23894[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 23))
{var state_23768__$1 = state_23768;var statearr_23826_23895 = state_23768__$1;(statearr_23826_23895[2] = null);
(statearr_23826_23895[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 24))
{var inst_23665 = (state_23768[25]);var inst_23682 = (state_23768[2]);var inst_23683 = cljs.core.next.call(null,inst_23665);var inst_23645 = inst_23683;var inst_23646 = null;var inst_23647 = 0;var inst_23648 = 0;var state_23768__$1 = (function (){var statearr_23827 = state_23768;(statearr_23827[14] = inst_23648);
(statearr_23827[29] = inst_23682);
(statearr_23827[15] = inst_23645);
(statearr_23827[16] = inst_23646);
(statearr_23827[17] = inst_23647);
return statearr_23827;
})();var statearr_23828_23896 = state_23768__$1;(statearr_23828_23896[2] = null);
(statearr_23828_23896[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 25))
{var inst_23706 = (state_23768[11]);var inst_23707 = (state_23768[13]);var inst_23709 = (inst_23707 < inst_23706);var inst_23710 = inst_23709;var state_23768__$1 = state_23768;if(cljs.core.truth_(inst_23710))
{var statearr_23829_23897 = state_23768__$1;(statearr_23829_23897[1] = 27);
} else
{var statearr_23830_23898 = state_23768__$1;(statearr_23830_23898[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 26))
{var inst_23696 = (state_23768[19]);var inst_23754 = (state_23768[2]);var inst_23755 = cljs.core.seq.call(null,inst_23696);var state_23768__$1 = (function (){var statearr_23831 = state_23768;(statearr_23831[30] = inst_23754);
return statearr_23831;
})();if(inst_23755)
{var statearr_23832_23899 = state_23768__$1;(statearr_23832_23899[1] = 42);
} else
{var statearr_23833_23900 = state_23768__$1;(statearr_23833_23900[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 27))
{var inst_23705 = (state_23768[12]);var inst_23707 = (state_23768[13]);var inst_23712 = cljs.core._nth.call(null,inst_23705,inst_23707);var state_23768__$1 = (function (){var statearr_23834 = state_23768;(statearr_23834[7] = inst_23712);
return statearr_23834;
})();var statearr_23835_23901 = state_23768__$1;(statearr_23835_23901[2] = null);
(statearr_23835_23901[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 28))
{var inst_23725 = (state_23768[9]);var inst_23704 = (state_23768[10]);var inst_23725__$1 = cljs.core.seq.call(null,inst_23704);var state_23768__$1 = (function (){var statearr_23839 = state_23768;(statearr_23839[9] = inst_23725__$1);
return statearr_23839;
})();if(inst_23725__$1)
{var statearr_23840_23902 = state_23768__$1;(statearr_23840_23902[1] = 33);
} else
{var statearr_23841_23903 = state_23768__$1;(statearr_23841_23903[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 29))
{var inst_23752 = (state_23768[2]);var state_23768__$1 = state_23768;var statearr_23842_23904 = state_23768__$1;(statearr_23842_23904[2] = inst_23752);
(statearr_23842_23904[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 30))
{var inst_23704 = (state_23768[10]);var inst_23706 = (state_23768[11]);var inst_23705 = (state_23768[12]);var inst_23707 = (state_23768[13]);var inst_23721 = (state_23768[2]);var inst_23722 = (inst_23707 + 1);var tmp23836 = inst_23704;var tmp23837 = inst_23706;var tmp23838 = inst_23705;var inst_23704__$1 = tmp23836;var inst_23705__$1 = tmp23838;var inst_23706__$1 = tmp23837;var inst_23707__$1 = inst_23722;var state_23768__$1 = (function (){var statearr_23843 = state_23768;(statearr_23843[10] = inst_23704__$1);
(statearr_23843[11] = inst_23706__$1);
(statearr_23843[12] = inst_23705__$1);
(statearr_23843[13] = inst_23707__$1);
(statearr_23843[31] = inst_23721);
return statearr_23843;
})();var statearr_23844_23905 = state_23768__$1;(statearr_23844_23905[2] = null);
(statearr_23844_23905[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23769 === 31))
{var inst_23712 = (state_23768[7]);var inst_23713 = (state_23768[2]);var inst_23714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23715 = cljs.core.async.untap_STAR_.call(null,m,inst_23712);var state_23768__$1 = (function (){var statearr_23845 = state_23768;(statearr_23845[32] = inst_23713);
(statearr_23845[33] = inst_23714);
return statearr_23845;
})();var statearr_23846_23906 = state_23768__$1;(statearr_23846_23906[2] = inst_23715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768__$1);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_23850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23850[0] = state_machine__12133__auto__);
(statearr_23850[1] = 1);
return statearr_23850;
});
var state_machine__12133__auto____1 = (function (state_23768){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_23768);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e23851){if((e23851 instanceof Object))
{var ex__12136__auto__ = e23851;var statearr_23852_23907 = state_23768;(statearr_23852_23907[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23908 = state_23768;
state_23768 = G__23908;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_23768){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_23768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_23853 = f__12203__auto__.call(null);(statearr_23853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___23854);
return statearr_23853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.Mix = (function (){var obj23910 = {};return obj23910;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8233__auto__ = m;if(and__8233__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8853__auto__ = (((m == null))?null:m);return (function (){var or__8245__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t24020 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24020 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24021){
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
this.meta24021 = meta24021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24020.cljs$lang$type = true;
cljs.core.async.t24020.cljs$lang$ctorStr = "cljs.core.async/t24020";
cljs.core.async.t24020.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t24020");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24020.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24022){var self__ = this;
var _24022__$1 = this;return self__.meta24021;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24022,meta24021__$1){var self__ = this;
var _24022__$1 = this;return (new cljs.core.async.t24020(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24021__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24020 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24020(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24021){return (new cljs.core.async.t24020(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24021));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24020(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12202__auto___24129 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_24087){var state_val_24088 = (state_24087[1]);if((state_val_24088 === 1))
{var inst_24026 = (state_24087[7]);var inst_24026__$1 = calc_state.call(null);var inst_24027 = cljs.core.seq_QMARK_.call(null,inst_24026__$1);var state_24087__$1 = (function (){var statearr_24089 = state_24087;(statearr_24089[7] = inst_24026__$1);
return statearr_24089;
})();if(inst_24027)
{var statearr_24090_24130 = state_24087__$1;(statearr_24090_24130[1] = 2);
} else
{var statearr_24091_24131 = state_24087__$1;(statearr_24091_24131[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 2))
{var inst_24026 = (state_24087[7]);var inst_24029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24026);var state_24087__$1 = state_24087;var statearr_24092_24132 = state_24087__$1;(statearr_24092_24132[2] = inst_24029);
(statearr_24092_24132[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 3))
{var inst_24026 = (state_24087[7]);var state_24087__$1 = state_24087;var statearr_24093_24133 = state_24087__$1;(statearr_24093_24133[2] = inst_24026);
(statearr_24093_24133[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 4))
{var inst_24026 = (state_24087[7]);var inst_24032 = (state_24087[2]);var inst_24033 = cljs.core.get.call(null,inst_24032,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24034 = cljs.core.get.call(null,inst_24032,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24035 = cljs.core.get.call(null,inst_24032,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_24036 = inst_24026;var state_24087__$1 = (function (){var statearr_24094 = state_24087;(statearr_24094[8] = inst_24036);
(statearr_24094[9] = inst_24034);
(statearr_24094[10] = inst_24035);
(statearr_24094[11] = inst_24033);
return statearr_24094;
})();var statearr_24095_24134 = state_24087__$1;(statearr_24095_24134[2] = null);
(statearr_24095_24134[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 5))
{var inst_24036 = (state_24087[8]);var inst_24039 = cljs.core.seq_QMARK_.call(null,inst_24036);var state_24087__$1 = state_24087;if(inst_24039)
{var statearr_24096_24135 = state_24087__$1;(statearr_24096_24135[1] = 7);
} else
{var statearr_24097_24136 = state_24087__$1;(statearr_24097_24136[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 6))
{var inst_24085 = (state_24087[2]);var state_24087__$1 = state_24087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24087__$1,inst_24085);
} else
{if((state_val_24088 === 7))
{var inst_24036 = (state_24087[8]);var inst_24041 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24036);var state_24087__$1 = state_24087;var statearr_24098_24137 = state_24087__$1;(statearr_24098_24137[2] = inst_24041);
(statearr_24098_24137[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 8))
{var inst_24036 = (state_24087[8]);var state_24087__$1 = state_24087;var statearr_24099_24138 = state_24087__$1;(statearr_24099_24138[2] = inst_24036);
(statearr_24099_24138[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 9))
{var inst_24044 = (state_24087[12]);var inst_24044__$1 = (state_24087[2]);var inst_24045 = cljs.core.get.call(null,inst_24044__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24046 = cljs.core.get.call(null,inst_24044__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24047 = cljs.core.get.call(null,inst_24044__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_24087__$1 = (function (){var statearr_24100 = state_24087;(statearr_24100[13] = inst_24046);
(statearr_24100[12] = inst_24044__$1);
(statearr_24100[14] = inst_24047);
return statearr_24100;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24087__$1,10,inst_24045);
} else
{if((state_val_24088 === 10))
{var inst_24051 = (state_24087[15]);var inst_24052 = (state_24087[16]);var inst_24050 = (state_24087[2]);var inst_24051__$1 = cljs.core.nth.call(null,inst_24050,0,null);var inst_24052__$1 = cljs.core.nth.call(null,inst_24050,1,null);var inst_24053 = (inst_24051__$1 == null);var inst_24054 = cljs.core._EQ_.call(null,inst_24052__$1,change);var inst_24055 = (inst_24053) || (inst_24054);var state_24087__$1 = (function (){var statearr_24101 = state_24087;(statearr_24101[15] = inst_24051__$1);
(statearr_24101[16] = inst_24052__$1);
return statearr_24101;
})();if(cljs.core.truth_(inst_24055))
{var statearr_24102_24139 = state_24087__$1;(statearr_24102_24139[1] = 11);
} else
{var statearr_24103_24140 = state_24087__$1;(statearr_24103_24140[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 11))
{var inst_24051 = (state_24087[15]);var inst_24057 = (inst_24051 == null);var state_24087__$1 = state_24087;if(cljs.core.truth_(inst_24057))
{var statearr_24104_24141 = state_24087__$1;(statearr_24104_24141[1] = 14);
} else
{var statearr_24105_24142 = state_24087__$1;(statearr_24105_24142[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 12))
{var inst_24052 = (state_24087[16]);var inst_24047 = (state_24087[14]);var inst_24066 = (state_24087[17]);var inst_24066__$1 = inst_24047.call(null,inst_24052);var state_24087__$1 = (function (){var statearr_24106 = state_24087;(statearr_24106[17] = inst_24066__$1);
return statearr_24106;
})();if(cljs.core.truth_(inst_24066__$1))
{var statearr_24107_24143 = state_24087__$1;(statearr_24107_24143[1] = 17);
} else
{var statearr_24108_24144 = state_24087__$1;(statearr_24108_24144[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 13))
{var inst_24083 = (state_24087[2]);var state_24087__$1 = state_24087;var statearr_24109_24145 = state_24087__$1;(statearr_24109_24145[2] = inst_24083);
(statearr_24109_24145[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 14))
{var inst_24052 = (state_24087[16]);var inst_24059 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24052);var state_24087__$1 = state_24087;var statearr_24110_24146 = state_24087__$1;(statearr_24110_24146[2] = inst_24059);
(statearr_24110_24146[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 15))
{var state_24087__$1 = state_24087;var statearr_24111_24147 = state_24087__$1;(statearr_24111_24147[2] = null);
(statearr_24111_24147[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 16))
{var inst_24062 = (state_24087[2]);var inst_24063 = calc_state.call(null);var inst_24036 = inst_24063;var state_24087__$1 = (function (){var statearr_24112 = state_24087;(statearr_24112[18] = inst_24062);
(statearr_24112[8] = inst_24036);
return statearr_24112;
})();var statearr_24113_24148 = state_24087__$1;(statearr_24113_24148[2] = null);
(statearr_24113_24148[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 17))
{var inst_24066 = (state_24087[17]);var state_24087__$1 = state_24087;var statearr_24114_24149 = state_24087__$1;(statearr_24114_24149[2] = inst_24066);
(statearr_24114_24149[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 18))
{var inst_24046 = (state_24087[13]);var inst_24052 = (state_24087[16]);var inst_24047 = (state_24087[14]);var inst_24069 = cljs.core.empty_QMARK_.call(null,inst_24047);var inst_24070 = inst_24046.call(null,inst_24052);var inst_24071 = cljs.core.not.call(null,inst_24070);var inst_24072 = (inst_24069) && (inst_24071);var state_24087__$1 = state_24087;var statearr_24115_24150 = state_24087__$1;(statearr_24115_24150[2] = inst_24072);
(statearr_24115_24150[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 19))
{var inst_24074 = (state_24087[2]);var state_24087__$1 = state_24087;if(cljs.core.truth_(inst_24074))
{var statearr_24116_24151 = state_24087__$1;(statearr_24116_24151[1] = 20);
} else
{var statearr_24117_24152 = state_24087__$1;(statearr_24117_24152[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 20))
{var inst_24051 = (state_24087[15]);var state_24087__$1 = state_24087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24087__$1,23,out,inst_24051);
} else
{if((state_val_24088 === 21))
{var state_24087__$1 = state_24087;var statearr_24118_24153 = state_24087__$1;(statearr_24118_24153[2] = null);
(statearr_24118_24153[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 22))
{var inst_24044 = (state_24087[12]);var inst_24080 = (state_24087[2]);var inst_24036 = inst_24044;var state_24087__$1 = (function (){var statearr_24119 = state_24087;(statearr_24119[8] = inst_24036);
(statearr_24119[19] = inst_24080);
return statearr_24119;
})();var statearr_24120_24154 = state_24087__$1;(statearr_24120_24154[2] = null);
(statearr_24120_24154[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24088 === 23))
{var inst_24077 = (state_24087[2]);var state_24087__$1 = state_24087;var statearr_24121_24155 = state_24087__$1;(statearr_24121_24155[2] = inst_24077);
(statearr_24121_24155[1] = 22);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_24125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24125[0] = state_machine__12133__auto__);
(statearr_24125[1] = 1);
return statearr_24125;
});
var state_machine__12133__auto____1 = (function (state_24087){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_24087);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e24126){if((e24126 instanceof Object))
{var ex__12136__auto__ = e24126;var statearr_24127_24156 = state_24087;(statearr_24127_24156[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24157 = state_24087;
state_24087 = G__24157;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_24087){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_24087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_24128 = f__12203__auto__.call(null);(statearr_24128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___24129);
return statearr_24128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
cljs.core.async.Pub = (function (){var obj24159 = {};return obj24159;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8233__auto__ = p;if(and__8233__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8233__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8853__auto__ = (((p == null))?null:p);return (function (){var or__8245__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
return (function (topic){var or__8245__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8245__auto__,mults){
return (function (p1__24160_SHARP_){if(cljs.core.truth_(p1__24160_SHARP_.call(null,topic)))
{return p1__24160_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24160_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8245__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24285 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24286){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24286 = meta24286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24285.cljs$lang$type = true;
cljs.core.async.t24285.cljs$lang$ctorStr = "cljs.core.async/t24285";
cljs.core.async.t24285.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"cljs.core.async/t24285");
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24285.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24287){var self__ = this;
var _24287__$1 = this;return self__.meta24286;
});})(mults,ensure_mult))
;
cljs.core.async.t24285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24287,meta24286__$1){var self__ = this;
var _24287__$1 = this;return (new cljs.core.async.t24285(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24286__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24285 = ((function (mults,ensure_mult){
return (function __GT_t24285(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24286){return (new cljs.core.async.t24285(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24286));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24285(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12202__auto___24409 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_24361){var state_val_24362 = (state_24361[1]);if((state_val_24362 === 1))
{var state_24361__$1 = state_24361;var statearr_24363_24410 = state_24361__$1;(statearr_24363_24410[2] = null);
(statearr_24363_24410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 2))
{var state_24361__$1 = state_24361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24361__$1,4,ch);
} else
{if((state_val_24362 === 3))
{var inst_24359 = (state_24361[2]);var state_24361__$1 = state_24361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24361__$1,inst_24359);
} else
{if((state_val_24362 === 4))
{var inst_24290 = (state_24361[7]);var inst_24290__$1 = (state_24361[2]);var inst_24291 = (inst_24290__$1 == null);var state_24361__$1 = (function (){var statearr_24364 = state_24361;(statearr_24364[7] = inst_24290__$1);
return statearr_24364;
})();if(cljs.core.truth_(inst_24291))
{var statearr_24365_24411 = state_24361__$1;(statearr_24365_24411[1] = 5);
} else
{var statearr_24366_24412 = state_24361__$1;(statearr_24366_24412[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 5))
{var inst_24297 = cljs.core.deref.call(null,mults);var inst_24298 = cljs.core.vals.call(null,inst_24297);var inst_24299 = cljs.core.seq.call(null,inst_24298);var inst_24300 = inst_24299;var inst_24301 = null;var inst_24302 = 0;var inst_24303 = 0;var state_24361__$1 = (function (){var statearr_24367 = state_24361;(statearr_24367[8] = inst_24303);
(statearr_24367[9] = inst_24302);
(statearr_24367[10] = inst_24301);
(statearr_24367[11] = inst_24300);
return statearr_24367;
})();var statearr_24368_24413 = state_24361__$1;(statearr_24368_24413[2] = null);
(statearr_24368_24413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 6))
{var inst_24290 = (state_24361[7]);var inst_24340 = (state_24361[12]);var inst_24338 = (state_24361[13]);var inst_24338__$1 = topic_fn.call(null,inst_24290);var inst_24339 = cljs.core.deref.call(null,mults);var inst_24340__$1 = cljs.core.get.call(null,inst_24339,inst_24338__$1);var state_24361__$1 = (function (){var statearr_24369 = state_24361;(statearr_24369[12] = inst_24340__$1);
(statearr_24369[13] = inst_24338__$1);
return statearr_24369;
})();if(cljs.core.truth_(inst_24340__$1))
{var statearr_24370_24414 = state_24361__$1;(statearr_24370_24414[1] = 19);
} else
{var statearr_24371_24415 = state_24361__$1;(statearr_24371_24415[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 7))
{var inst_24357 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24372_24416 = state_24361__$1;(statearr_24372_24416[2] = inst_24357);
(statearr_24372_24416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 8))
{var inst_24303 = (state_24361[8]);var inst_24302 = (state_24361[9]);var inst_24305 = (inst_24303 < inst_24302);var inst_24306 = inst_24305;var state_24361__$1 = state_24361;if(cljs.core.truth_(inst_24306))
{var statearr_24376_24417 = state_24361__$1;(statearr_24376_24417[1] = 10);
} else
{var statearr_24377_24418 = state_24361__$1;(statearr_24377_24418[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 9))
{var inst_24336 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24378_24419 = state_24361__$1;(statearr_24378_24419[2] = inst_24336);
(statearr_24378_24419[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 10))
{var inst_24303 = (state_24361[8]);var inst_24302 = (state_24361[9]);var inst_24301 = (state_24361[10]);var inst_24300 = (state_24361[11]);var inst_24308 = cljs.core._nth.call(null,inst_24301,inst_24303);var inst_24309 = cljs.core.async.muxch_STAR_.call(null,inst_24308);var inst_24310 = cljs.core.async.close_BANG_.call(null,inst_24309);var inst_24311 = (inst_24303 + 1);var tmp24373 = inst_24302;var tmp24374 = inst_24301;var tmp24375 = inst_24300;var inst_24300__$1 = tmp24375;var inst_24301__$1 = tmp24374;var inst_24302__$1 = tmp24373;var inst_24303__$1 = inst_24311;var state_24361__$1 = (function (){var statearr_24379 = state_24361;(statearr_24379[14] = inst_24310);
(statearr_24379[8] = inst_24303__$1);
(statearr_24379[9] = inst_24302__$1);
(statearr_24379[10] = inst_24301__$1);
(statearr_24379[11] = inst_24300__$1);
return statearr_24379;
})();var statearr_24380_24420 = state_24361__$1;(statearr_24380_24420[2] = null);
(statearr_24380_24420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 11))
{var inst_24314 = (state_24361[15]);var inst_24300 = (state_24361[11]);var inst_24314__$1 = cljs.core.seq.call(null,inst_24300);var state_24361__$1 = (function (){var statearr_24381 = state_24361;(statearr_24381[15] = inst_24314__$1);
return statearr_24381;
})();if(inst_24314__$1)
{var statearr_24382_24421 = state_24361__$1;(statearr_24382_24421[1] = 13);
} else
{var statearr_24383_24422 = state_24361__$1;(statearr_24383_24422[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 12))
{var inst_24334 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24384_24423 = state_24361__$1;(statearr_24384_24423[2] = inst_24334);
(statearr_24384_24423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 13))
{var inst_24314 = (state_24361[15]);var inst_24316 = cljs.core.chunked_seq_QMARK_.call(null,inst_24314);var state_24361__$1 = state_24361;if(inst_24316)
{var statearr_24385_24424 = state_24361__$1;(statearr_24385_24424[1] = 16);
} else
{var statearr_24386_24425 = state_24361__$1;(statearr_24386_24425[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 14))
{var state_24361__$1 = state_24361;var statearr_24387_24426 = state_24361__$1;(statearr_24387_24426[2] = null);
(statearr_24387_24426[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 15))
{var inst_24332 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24388_24427 = state_24361__$1;(statearr_24388_24427[2] = inst_24332);
(statearr_24388_24427[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 16))
{var inst_24314 = (state_24361[15]);var inst_24318 = cljs.core.chunk_first.call(null,inst_24314);var inst_24319 = cljs.core.chunk_rest.call(null,inst_24314);var inst_24320 = cljs.core.count.call(null,inst_24318);var inst_24300 = inst_24319;var inst_24301 = inst_24318;var inst_24302 = inst_24320;var inst_24303 = 0;var state_24361__$1 = (function (){var statearr_24389 = state_24361;(statearr_24389[8] = inst_24303);
(statearr_24389[9] = inst_24302);
(statearr_24389[10] = inst_24301);
(statearr_24389[11] = inst_24300);
return statearr_24389;
})();var statearr_24390_24428 = state_24361__$1;(statearr_24390_24428[2] = null);
(statearr_24390_24428[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 17))
{var inst_24314 = (state_24361[15]);var inst_24323 = cljs.core.first.call(null,inst_24314);var inst_24324 = cljs.core.async.muxch_STAR_.call(null,inst_24323);var inst_24325 = cljs.core.async.close_BANG_.call(null,inst_24324);var inst_24326 = cljs.core.next.call(null,inst_24314);var inst_24300 = inst_24326;var inst_24301 = null;var inst_24302 = 0;var inst_24303 = 0;var state_24361__$1 = (function (){var statearr_24391 = state_24361;(statearr_24391[16] = inst_24325);
(statearr_24391[8] = inst_24303);
(statearr_24391[9] = inst_24302);
(statearr_24391[10] = inst_24301);
(statearr_24391[11] = inst_24300);
return statearr_24391;
})();var statearr_24392_24429 = state_24361__$1;(statearr_24392_24429[2] = null);
(statearr_24392_24429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 18))
{var inst_24329 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24393_24430 = state_24361__$1;(statearr_24393_24430[2] = inst_24329);
(statearr_24393_24430[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 19))
{var state_24361__$1 = state_24361;var statearr_24394_24431 = state_24361__$1;(statearr_24394_24431[2] = null);
(statearr_24394_24431[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 20))
{var state_24361__$1 = state_24361;var statearr_24395_24432 = state_24361__$1;(statearr_24395_24432[2] = null);
(statearr_24395_24432[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 21))
{var inst_24354 = (state_24361[2]);var state_24361__$1 = (function (){var statearr_24396 = state_24361;(statearr_24396[17] = inst_24354);
return statearr_24396;
})();var statearr_24397_24433 = state_24361__$1;(statearr_24397_24433[2] = null);
(statearr_24397_24433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 22))
{var inst_24351 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24398_24434 = state_24361__$1;(statearr_24398_24434[2] = inst_24351);
(statearr_24398_24434[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 23))
{var inst_24338 = (state_24361[13]);var inst_24342 = (state_24361[2]);var inst_24343 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24338);var state_24361__$1 = (function (){var statearr_24399 = state_24361;(statearr_24399[18] = inst_24342);
return statearr_24399;
})();var statearr_24400_24435 = state_24361__$1;(statearr_24400_24435[2] = inst_24343);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24361__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24362 === 24))
{var inst_24290 = (state_24361[7]);var inst_24340 = (state_24361[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24361,23,Object,null,22);var inst_24347 = cljs.core.async.muxch_STAR_.call(null,inst_24340);var state_24361__$1 = state_24361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24361__$1,25,inst_24347,inst_24290);
} else
{if((state_val_24362 === 25))
{var inst_24349 = (state_24361[2]);var state_24361__$1 = state_24361;var statearr_24401_24436 = state_24361__$1;(statearr_24401_24436[2] = inst_24349);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24361__$1);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_24405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24405[0] = state_machine__12133__auto__);
(statearr_24405[1] = 1);
return statearr_24405;
});
var state_machine__12133__auto____1 = (function (state_24361){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_24361);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e24406){if((e24406 instanceof Object))
{var ex__12136__auto__ = e24406;var statearr_24407_24437 = state_24361;(statearr_24407_24437[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24438 = state_24361;
state_24361 = G__24438;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_24361){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_24361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_24408 = f__12203__auto__.call(null);(statearr_24408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___24409);
return statearr_24408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
,cljs.core.range.call(null,cnt));var c__12202__auto___24575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_24545){var state_val_24546 = (state_24545[1]);if((state_val_24546 === 1))
{var state_24545__$1 = state_24545;var statearr_24547_24576 = state_24545__$1;(statearr_24547_24576[2] = null);
(statearr_24547_24576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 2))
{var inst_24508 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_24509 = 0;var state_24545__$1 = (function (){var statearr_24548 = state_24545;(statearr_24548[7] = inst_24509);
(statearr_24548[8] = inst_24508);
return statearr_24548;
})();var statearr_24549_24577 = state_24545__$1;(statearr_24549_24577[2] = null);
(statearr_24549_24577[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 3))
{var inst_24543 = (state_24545[2]);var state_24545__$1 = state_24545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24545__$1,inst_24543);
} else
{if((state_val_24546 === 4))
{var inst_24509 = (state_24545[7]);var inst_24511 = (inst_24509 < cnt);var state_24545__$1 = state_24545;if(cljs.core.truth_(inst_24511))
{var statearr_24550_24578 = state_24545__$1;(statearr_24550_24578[1] = 6);
} else
{var statearr_24551_24579 = state_24545__$1;(statearr_24551_24579[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 5))
{var inst_24529 = (state_24545[2]);var state_24545__$1 = (function (){var statearr_24552 = state_24545;(statearr_24552[9] = inst_24529);
return statearr_24552;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24545__$1,12,dchan);
} else
{if((state_val_24546 === 6))
{var state_24545__$1 = state_24545;var statearr_24553_24580 = state_24545__$1;(statearr_24553_24580[2] = null);
(statearr_24553_24580[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 7))
{var state_24545__$1 = state_24545;var statearr_24554_24581 = state_24545__$1;(statearr_24554_24581[2] = null);
(statearr_24554_24581[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 8))
{var inst_24527 = (state_24545[2]);var state_24545__$1 = state_24545;var statearr_24555_24582 = state_24545__$1;(statearr_24555_24582[2] = inst_24527);
(statearr_24555_24582[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 9))
{var inst_24509 = (state_24545[7]);var inst_24522 = (state_24545[2]);var inst_24523 = (inst_24509 + 1);var inst_24509__$1 = inst_24523;var state_24545__$1 = (function (){var statearr_24556 = state_24545;(statearr_24556[7] = inst_24509__$1);
(statearr_24556[10] = inst_24522);
return statearr_24556;
})();var statearr_24557_24583 = state_24545__$1;(statearr_24557_24583[2] = null);
(statearr_24557_24583[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 10))
{var inst_24513 = (state_24545[2]);var inst_24514 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_24545__$1 = (function (){var statearr_24558 = state_24545;(statearr_24558[11] = inst_24513);
return statearr_24558;
})();var statearr_24559_24584 = state_24545__$1;(statearr_24559_24584[2] = inst_24514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24545__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 11))
{var inst_24509 = (state_24545[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24545,10,Object,null,9);var inst_24518 = chs__$1.call(null,inst_24509);var inst_24519 = done.call(null,inst_24509);var inst_24520 = cljs.core.async.take_BANG_.call(null,inst_24518,inst_24519);var state_24545__$1 = state_24545;var statearr_24560_24585 = state_24545__$1;(statearr_24560_24585[2] = inst_24520);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24545__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 12))
{var inst_24531 = (state_24545[12]);var inst_24531__$1 = (state_24545[2]);var inst_24532 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24531__$1);var state_24545__$1 = (function (){var statearr_24561 = state_24545;(statearr_24561[12] = inst_24531__$1);
return statearr_24561;
})();if(cljs.core.truth_(inst_24532))
{var statearr_24562_24586 = state_24545__$1;(statearr_24562_24586[1] = 13);
} else
{var statearr_24563_24587 = state_24545__$1;(statearr_24563_24587[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 13))
{var inst_24534 = cljs.core.async.close_BANG_.call(null,out);var state_24545__$1 = state_24545;var statearr_24564_24588 = state_24545__$1;(statearr_24564_24588[2] = inst_24534);
(statearr_24564_24588[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 14))
{var inst_24531 = (state_24545[12]);var inst_24536 = cljs.core.apply.call(null,f,inst_24531);var state_24545__$1 = state_24545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24545__$1,16,out,inst_24536);
} else
{if((state_val_24546 === 15))
{var inst_24541 = (state_24545[2]);var state_24545__$1 = state_24545;var statearr_24565_24589 = state_24545__$1;(statearr_24565_24589[2] = inst_24541);
(statearr_24565_24589[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 16))
{var inst_24538 = (state_24545[2]);var state_24545__$1 = (function (){var statearr_24566 = state_24545;(statearr_24566[13] = inst_24538);
return statearr_24566;
})();var statearr_24567_24590 = state_24545__$1;(statearr_24567_24590[2] = null);
(statearr_24567_24590[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_24571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24571[0] = state_machine__12133__auto__);
(statearr_24571[1] = 1);
return statearr_24571;
});
var state_machine__12133__auto____1 = (function (state_24545){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_24545);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e24572){if((e24572 instanceof Object))
{var ex__12136__auto__ = e24572;var statearr_24573_24591 = state_24545;(statearr_24573_24591[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24592 = state_24545;
state_24545 = G__24592;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_24545){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_24545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_24574 = f__12203__auto__.call(null);(statearr_24574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___24575);
return statearr_24574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___24700 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_24676){var state_val_24677 = (state_24676[1]);if((state_val_24677 === 1))
{var inst_24647 = cljs.core.vec.call(null,chs);var inst_24648 = inst_24647;var state_24676__$1 = (function (){var statearr_24678 = state_24676;(statearr_24678[7] = inst_24648);
return statearr_24678;
})();var statearr_24679_24701 = state_24676__$1;(statearr_24679_24701[2] = null);
(statearr_24679_24701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 2))
{var inst_24648 = (state_24676[7]);var inst_24650 = cljs.core.count.call(null,inst_24648);var inst_24651 = (inst_24650 > 0);var state_24676__$1 = state_24676;if(cljs.core.truth_(inst_24651))
{var statearr_24680_24702 = state_24676__$1;(statearr_24680_24702[1] = 4);
} else
{var statearr_24681_24703 = state_24676__$1;(statearr_24681_24703[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 3))
{var inst_24674 = (state_24676[2]);var state_24676__$1 = state_24676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24676__$1,inst_24674);
} else
{if((state_val_24677 === 4))
{var inst_24648 = (state_24676[7]);var state_24676__$1 = state_24676;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24676__$1,7,inst_24648);
} else
{if((state_val_24677 === 5))
{var inst_24670 = cljs.core.async.close_BANG_.call(null,out);var state_24676__$1 = state_24676;var statearr_24682_24704 = state_24676__$1;(statearr_24682_24704[2] = inst_24670);
(statearr_24682_24704[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 6))
{var inst_24672 = (state_24676[2]);var state_24676__$1 = state_24676;var statearr_24683_24705 = state_24676__$1;(statearr_24683_24705[2] = inst_24672);
(statearr_24683_24705[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 7))
{var inst_24655 = (state_24676[8]);var inst_24656 = (state_24676[9]);var inst_24655__$1 = (state_24676[2]);var inst_24656__$1 = cljs.core.nth.call(null,inst_24655__$1,0,null);var inst_24657 = cljs.core.nth.call(null,inst_24655__$1,1,null);var inst_24658 = (inst_24656__$1 == null);var state_24676__$1 = (function (){var statearr_24684 = state_24676;(statearr_24684[8] = inst_24655__$1);
(statearr_24684[9] = inst_24656__$1);
(statearr_24684[10] = inst_24657);
return statearr_24684;
})();if(cljs.core.truth_(inst_24658))
{var statearr_24685_24706 = state_24676__$1;(statearr_24685_24706[1] = 8);
} else
{var statearr_24686_24707 = state_24676__$1;(statearr_24686_24707[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 8))
{var inst_24655 = (state_24676[8]);var inst_24648 = (state_24676[7]);var inst_24656 = (state_24676[9]);var inst_24657 = (state_24676[10]);var inst_24660 = (function (){var c = inst_24657;var v = inst_24656;var vec__24653 = inst_24655;var cs = inst_24648;return ((function (c,v,vec__24653,cs,inst_24655,inst_24648,inst_24656,inst_24657,state_val_24677){
return (function (p1__24593_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__24593_SHARP_);
});
;})(c,v,vec__24653,cs,inst_24655,inst_24648,inst_24656,inst_24657,state_val_24677))
})();var inst_24661 = cljs.core.filterv.call(null,inst_24660,inst_24648);var inst_24648__$1 = inst_24661;var state_24676__$1 = (function (){var statearr_24687 = state_24676;(statearr_24687[7] = inst_24648__$1);
return statearr_24687;
})();var statearr_24688_24708 = state_24676__$1;(statearr_24688_24708[2] = null);
(statearr_24688_24708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 9))
{var inst_24656 = (state_24676[9]);var state_24676__$1 = state_24676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24676__$1,11,out,inst_24656);
} else
{if((state_val_24677 === 10))
{var inst_24668 = (state_24676[2]);var state_24676__$1 = state_24676;var statearr_24690_24709 = state_24676__$1;(statearr_24690_24709[2] = inst_24668);
(statearr_24690_24709[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24677 === 11))
{var inst_24648 = (state_24676[7]);var inst_24665 = (state_24676[2]);var tmp24689 = inst_24648;var inst_24648__$1 = tmp24689;var state_24676__$1 = (function (){var statearr_24691 = state_24676;(statearr_24691[7] = inst_24648__$1);
(statearr_24691[11] = inst_24665);
return statearr_24691;
})();var statearr_24692_24710 = state_24676__$1;(statearr_24692_24710[2] = null);
(statearr_24692_24710[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_24696 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24696[0] = state_machine__12133__auto__);
(statearr_24696[1] = 1);
return statearr_24696;
});
var state_machine__12133__auto____1 = (function (state_24676){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_24676);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e24697){if((e24697 instanceof Object))
{var ex__12136__auto__ = e24697;var statearr_24698_24711 = state_24676;(statearr_24698_24711[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24676);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24712 = state_24676;
state_24676 = G__24712;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_24676){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_24676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_24699 = f__12203__auto__.call(null);(statearr_24699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___24700);
return statearr_24699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___24805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_24782){var state_val_24783 = (state_24782[1]);if((state_val_24783 === 1))
{var inst_24759 = 0;var state_24782__$1 = (function (){var statearr_24784 = state_24782;(statearr_24784[7] = inst_24759);
return statearr_24784;
})();var statearr_24785_24806 = state_24782__$1;(statearr_24785_24806[2] = null);
(statearr_24785_24806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 2))
{var inst_24759 = (state_24782[7]);var inst_24761 = (inst_24759 < n);var state_24782__$1 = state_24782;if(cljs.core.truth_(inst_24761))
{var statearr_24786_24807 = state_24782__$1;(statearr_24786_24807[1] = 4);
} else
{var statearr_24787_24808 = state_24782__$1;(statearr_24787_24808[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 3))
{var inst_24779 = (state_24782[2]);var inst_24780 = cljs.core.async.close_BANG_.call(null,out);var state_24782__$1 = (function (){var statearr_24788 = state_24782;(statearr_24788[8] = inst_24779);
return statearr_24788;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24782__$1,inst_24780);
} else
{if((state_val_24783 === 4))
{var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24782__$1,7,ch);
} else
{if((state_val_24783 === 5))
{var state_24782__$1 = state_24782;var statearr_24789_24809 = state_24782__$1;(statearr_24789_24809[2] = null);
(statearr_24789_24809[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 6))
{var inst_24777 = (state_24782[2]);var state_24782__$1 = state_24782;var statearr_24790_24810 = state_24782__$1;(statearr_24790_24810[2] = inst_24777);
(statearr_24790_24810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 7))
{var inst_24764 = (state_24782[9]);var inst_24764__$1 = (state_24782[2]);var inst_24765 = (inst_24764__$1 == null);var inst_24766 = cljs.core.not.call(null,inst_24765);var state_24782__$1 = (function (){var statearr_24791 = state_24782;(statearr_24791[9] = inst_24764__$1);
return statearr_24791;
})();if(inst_24766)
{var statearr_24792_24811 = state_24782__$1;(statearr_24792_24811[1] = 8);
} else
{var statearr_24793_24812 = state_24782__$1;(statearr_24793_24812[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 8))
{var inst_24764 = (state_24782[9]);var state_24782__$1 = state_24782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24782__$1,11,out,inst_24764);
} else
{if((state_val_24783 === 9))
{var state_24782__$1 = state_24782;var statearr_24794_24813 = state_24782__$1;(statearr_24794_24813[2] = null);
(statearr_24794_24813[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 10))
{var inst_24774 = (state_24782[2]);var state_24782__$1 = state_24782;var statearr_24795_24814 = state_24782__$1;(statearr_24795_24814[2] = inst_24774);
(statearr_24795_24814[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24783 === 11))
{var inst_24759 = (state_24782[7]);var inst_24769 = (state_24782[2]);var inst_24770 = (inst_24759 + 1);var inst_24759__$1 = inst_24770;var state_24782__$1 = (function (){var statearr_24796 = state_24782;(statearr_24796[10] = inst_24769);
(statearr_24796[7] = inst_24759__$1);
return statearr_24796;
})();var statearr_24797_24815 = state_24782__$1;(statearr_24797_24815[2] = null);
(statearr_24797_24815[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_24801 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24801[0] = state_machine__12133__auto__);
(statearr_24801[1] = 1);
return statearr_24801;
});
var state_machine__12133__auto____1 = (function (state_24782){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_24782);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e24802){if((e24802 instanceof Object))
{var ex__12136__auto__ = e24802;var statearr_24803_24816 = state_24782;(statearr_24803_24816[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24817 = state_24782;
state_24782 = G__24817;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_24782){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_24782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_24804 = f__12203__auto__.call(null);(statearr_24804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___24805);
return statearr_24804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___24914 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_24889){var state_val_24890 = (state_24889[1]);if((state_val_24890 === 1))
{var inst_24866 = null;var state_24889__$1 = (function (){var statearr_24891 = state_24889;(statearr_24891[7] = inst_24866);
return statearr_24891;
})();var statearr_24892_24915 = state_24889__$1;(statearr_24892_24915[2] = null);
(statearr_24892_24915[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 2))
{var state_24889__$1 = state_24889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24889__$1,4,ch);
} else
{if((state_val_24890 === 3))
{var inst_24886 = (state_24889[2]);var inst_24887 = cljs.core.async.close_BANG_.call(null,out);var state_24889__$1 = (function (){var statearr_24893 = state_24889;(statearr_24893[8] = inst_24886);
return statearr_24893;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24889__$1,inst_24887);
} else
{if((state_val_24890 === 4))
{var inst_24869 = (state_24889[9]);var inst_24869__$1 = (state_24889[2]);var inst_24870 = (inst_24869__$1 == null);var inst_24871 = cljs.core.not.call(null,inst_24870);var state_24889__$1 = (function (){var statearr_24894 = state_24889;(statearr_24894[9] = inst_24869__$1);
return statearr_24894;
})();if(inst_24871)
{var statearr_24895_24916 = state_24889__$1;(statearr_24895_24916[1] = 5);
} else
{var statearr_24896_24917 = state_24889__$1;(statearr_24896_24917[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 5))
{var inst_24869 = (state_24889[9]);var inst_24866 = (state_24889[7]);var inst_24873 = cljs.core._EQ_.call(null,inst_24869,inst_24866);var state_24889__$1 = state_24889;if(inst_24873)
{var statearr_24897_24918 = state_24889__$1;(statearr_24897_24918[1] = 8);
} else
{var statearr_24898_24919 = state_24889__$1;(statearr_24898_24919[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 6))
{var state_24889__$1 = state_24889;var statearr_24900_24920 = state_24889__$1;(statearr_24900_24920[2] = null);
(statearr_24900_24920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 7))
{var inst_24884 = (state_24889[2]);var state_24889__$1 = state_24889;var statearr_24901_24921 = state_24889__$1;(statearr_24901_24921[2] = inst_24884);
(statearr_24901_24921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 8))
{var inst_24866 = (state_24889[7]);var tmp24899 = inst_24866;var inst_24866__$1 = tmp24899;var state_24889__$1 = (function (){var statearr_24902 = state_24889;(statearr_24902[7] = inst_24866__$1);
return statearr_24902;
})();var statearr_24903_24922 = state_24889__$1;(statearr_24903_24922[2] = null);
(statearr_24903_24922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 9))
{var inst_24869 = (state_24889[9]);var state_24889__$1 = state_24889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24889__$1,11,out,inst_24869);
} else
{if((state_val_24890 === 10))
{var inst_24881 = (state_24889[2]);var state_24889__$1 = state_24889;var statearr_24904_24923 = state_24889__$1;(statearr_24904_24923[2] = inst_24881);
(statearr_24904_24923[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24890 === 11))
{var inst_24869 = (state_24889[9]);var inst_24878 = (state_24889[2]);var inst_24866 = inst_24869;var state_24889__$1 = (function (){var statearr_24905 = state_24889;(statearr_24905[10] = inst_24878);
(statearr_24905[7] = inst_24866);
return statearr_24905;
})();var statearr_24906_24924 = state_24889__$1;(statearr_24906_24924[2] = null);
(statearr_24906_24924[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_24910 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24910[0] = state_machine__12133__auto__);
(statearr_24910[1] = 1);
return statearr_24910;
});
var state_machine__12133__auto____1 = (function (state_24889){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_24889);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e24911){if((e24911 instanceof Object))
{var ex__12136__auto__ = e24911;var statearr_24912_24925 = state_24889;(statearr_24912_24925[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24926 = state_24889;
state_24889 = G__24926;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_24889){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_24889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_24913 = f__12203__auto__.call(null);(statearr_24913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___24914);
return statearr_24913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___25061 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_25031){var state_val_25032 = (state_25031[1]);if((state_val_25032 === 1))
{var inst_24994 = (new Array(n));var inst_24995 = inst_24994;var inst_24996 = 0;var state_25031__$1 = (function (){var statearr_25033 = state_25031;(statearr_25033[7] = inst_24996);
(statearr_25033[8] = inst_24995);
return statearr_25033;
})();var statearr_25034_25062 = state_25031__$1;(statearr_25034_25062[2] = null);
(statearr_25034_25062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 2))
{var state_25031__$1 = state_25031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25031__$1,4,ch);
} else
{if((state_val_25032 === 3))
{var inst_25029 = (state_25031[2]);var state_25031__$1 = state_25031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25031__$1,inst_25029);
} else
{if((state_val_25032 === 4))
{var inst_24999 = (state_25031[9]);var inst_24999__$1 = (state_25031[2]);var inst_25000 = (inst_24999__$1 == null);var inst_25001 = cljs.core.not.call(null,inst_25000);var state_25031__$1 = (function (){var statearr_25035 = state_25031;(statearr_25035[9] = inst_24999__$1);
return statearr_25035;
})();if(inst_25001)
{var statearr_25036_25063 = state_25031__$1;(statearr_25036_25063[1] = 5);
} else
{var statearr_25037_25064 = state_25031__$1;(statearr_25037_25064[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 5))
{var inst_24999 = (state_25031[9]);var inst_24996 = (state_25031[7]);var inst_24995 = (state_25031[8]);var inst_25004 = (state_25031[10]);var inst_25003 = (inst_24995[inst_24996] = inst_24999);var inst_25004__$1 = (inst_24996 + 1);var inst_25005 = (inst_25004__$1 < n);var state_25031__$1 = (function (){var statearr_25038 = state_25031;(statearr_25038[10] = inst_25004__$1);
(statearr_25038[11] = inst_25003);
return statearr_25038;
})();if(cljs.core.truth_(inst_25005))
{var statearr_25039_25065 = state_25031__$1;(statearr_25039_25065[1] = 8);
} else
{var statearr_25040_25066 = state_25031__$1;(statearr_25040_25066[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 6))
{var inst_24996 = (state_25031[7]);var inst_25017 = (inst_24996 > 0);var state_25031__$1 = state_25031;if(cljs.core.truth_(inst_25017))
{var statearr_25042_25067 = state_25031__$1;(statearr_25042_25067[1] = 12);
} else
{var statearr_25043_25068 = state_25031__$1;(statearr_25043_25068[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 7))
{var inst_25027 = (state_25031[2]);var state_25031__$1 = state_25031;var statearr_25044_25069 = state_25031__$1;(statearr_25044_25069[2] = inst_25027);
(statearr_25044_25069[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 8))
{var inst_24995 = (state_25031[8]);var inst_25004 = (state_25031[10]);var tmp25041 = inst_24995;var inst_24995__$1 = tmp25041;var inst_24996 = inst_25004;var state_25031__$1 = (function (){var statearr_25045 = state_25031;(statearr_25045[7] = inst_24996);
(statearr_25045[8] = inst_24995__$1);
return statearr_25045;
})();var statearr_25046_25070 = state_25031__$1;(statearr_25046_25070[2] = null);
(statearr_25046_25070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 9))
{var inst_24995 = (state_25031[8]);var inst_25009 = cljs.core.vec.call(null,inst_24995);var state_25031__$1 = state_25031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25031__$1,11,out,inst_25009);
} else
{if((state_val_25032 === 10))
{var inst_25015 = (state_25031[2]);var state_25031__$1 = state_25031;var statearr_25047_25071 = state_25031__$1;(statearr_25047_25071[2] = inst_25015);
(statearr_25047_25071[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 11))
{var inst_25011 = (state_25031[2]);var inst_25012 = (new Array(n));var inst_24995 = inst_25012;var inst_24996 = 0;var state_25031__$1 = (function (){var statearr_25048 = state_25031;(statearr_25048[12] = inst_25011);
(statearr_25048[7] = inst_24996);
(statearr_25048[8] = inst_24995);
return statearr_25048;
})();var statearr_25049_25072 = state_25031__$1;(statearr_25049_25072[2] = null);
(statearr_25049_25072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 12))
{var inst_24995 = (state_25031[8]);var inst_25019 = cljs.core.vec.call(null,inst_24995);var state_25031__$1 = state_25031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25031__$1,15,out,inst_25019);
} else
{if((state_val_25032 === 13))
{var state_25031__$1 = state_25031;var statearr_25050_25073 = state_25031__$1;(statearr_25050_25073[2] = null);
(statearr_25050_25073[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 14))
{var inst_25024 = (state_25031[2]);var inst_25025 = cljs.core.async.close_BANG_.call(null,out);var state_25031__$1 = (function (){var statearr_25051 = state_25031;(statearr_25051[13] = inst_25024);
return statearr_25051;
})();var statearr_25052_25074 = state_25031__$1;(statearr_25052_25074[2] = inst_25025);
(statearr_25052_25074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25032 === 15))
{var inst_25021 = (state_25031[2]);var state_25031__$1 = state_25031;var statearr_25053_25075 = state_25031__$1;(statearr_25053_25075[2] = inst_25021);
(statearr_25053_25075[1] = 14);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_25057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25057[0] = state_machine__12133__auto__);
(statearr_25057[1] = 1);
return statearr_25057;
});
var state_machine__12133__auto____1 = (function (state_25031){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_25031);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e25058){if((e25058 instanceof Object))
{var ex__12136__auto__ = e25058;var statearr_25059_25076 = state_25031;(statearr_25059_25076[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25031);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25077 = state_25031;
state_25031 = G__25077;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_25031){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_25031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_25060 = f__12203__auto__.call(null);(statearr_25060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___25061);
return statearr_25060;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12202__auto___25220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_25190){var state_val_25191 = (state_25190[1]);if((state_val_25191 === 1))
{var inst_25149 = [];var inst_25150 = inst_25149;var inst_25151 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_25190__$1 = (function (){var statearr_25192 = state_25190;(statearr_25192[7] = inst_25151);
(statearr_25192[8] = inst_25150);
return statearr_25192;
})();var statearr_25193_25221 = state_25190__$1;(statearr_25193_25221[2] = null);
(statearr_25193_25221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 2))
{var state_25190__$1 = state_25190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25190__$1,4,ch);
} else
{if((state_val_25191 === 3))
{var inst_25188 = (state_25190[2]);var state_25190__$1 = state_25190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25190__$1,inst_25188);
} else
{if((state_val_25191 === 4))
{var inst_25154 = (state_25190[9]);var inst_25154__$1 = (state_25190[2]);var inst_25155 = (inst_25154__$1 == null);var inst_25156 = cljs.core.not.call(null,inst_25155);var state_25190__$1 = (function (){var statearr_25194 = state_25190;(statearr_25194[9] = inst_25154__$1);
return statearr_25194;
})();if(inst_25156)
{var statearr_25195_25222 = state_25190__$1;(statearr_25195_25222[1] = 5);
} else
{var statearr_25196_25223 = state_25190__$1;(statearr_25196_25223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 5))
{var inst_25154 = (state_25190[9]);var inst_25151 = (state_25190[7]);var inst_25158 = (state_25190[10]);var inst_25158__$1 = f.call(null,inst_25154);var inst_25159 = cljs.core._EQ_.call(null,inst_25158__$1,inst_25151);var inst_25160 = cljs.core.keyword_identical_QMARK_.call(null,inst_25151,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_25161 = (inst_25159) || (inst_25160);var state_25190__$1 = (function (){var statearr_25197 = state_25190;(statearr_25197[10] = inst_25158__$1);
return statearr_25197;
})();if(cljs.core.truth_(inst_25161))
{var statearr_25198_25224 = state_25190__$1;(statearr_25198_25224[1] = 8);
} else
{var statearr_25199_25225 = state_25190__$1;(statearr_25199_25225[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 6))
{var inst_25150 = (state_25190[8]);var inst_25175 = inst_25150.length;var inst_25176 = (inst_25175 > 0);var state_25190__$1 = state_25190;if(cljs.core.truth_(inst_25176))
{var statearr_25201_25226 = state_25190__$1;(statearr_25201_25226[1] = 12);
} else
{var statearr_25202_25227 = state_25190__$1;(statearr_25202_25227[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 7))
{var inst_25186 = (state_25190[2]);var state_25190__$1 = state_25190;var statearr_25203_25228 = state_25190__$1;(statearr_25203_25228[2] = inst_25186);
(statearr_25203_25228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 8))
{var inst_25154 = (state_25190[9]);var inst_25150 = (state_25190[8]);var inst_25158 = (state_25190[10]);var inst_25163 = inst_25150.push(inst_25154);var tmp25200 = inst_25150;var inst_25150__$1 = tmp25200;var inst_25151 = inst_25158;var state_25190__$1 = (function (){var statearr_25204 = state_25190;(statearr_25204[7] = inst_25151);
(statearr_25204[8] = inst_25150__$1);
(statearr_25204[11] = inst_25163);
return statearr_25204;
})();var statearr_25205_25229 = state_25190__$1;(statearr_25205_25229[2] = null);
(statearr_25205_25229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 9))
{var inst_25150 = (state_25190[8]);var inst_25166 = cljs.core.vec.call(null,inst_25150);var state_25190__$1 = state_25190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25190__$1,11,out,inst_25166);
} else
{if((state_val_25191 === 10))
{var inst_25173 = (state_25190[2]);var state_25190__$1 = state_25190;var statearr_25206_25230 = state_25190__$1;(statearr_25206_25230[2] = inst_25173);
(statearr_25206_25230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 11))
{var inst_25154 = (state_25190[9]);var inst_25158 = (state_25190[10]);var inst_25168 = (state_25190[2]);var inst_25169 = [];var inst_25170 = inst_25169.push(inst_25154);var inst_25150 = inst_25169;var inst_25151 = inst_25158;var state_25190__$1 = (function (){var statearr_25207 = state_25190;(statearr_25207[7] = inst_25151);
(statearr_25207[8] = inst_25150);
(statearr_25207[12] = inst_25168);
(statearr_25207[13] = inst_25170);
return statearr_25207;
})();var statearr_25208_25231 = state_25190__$1;(statearr_25208_25231[2] = null);
(statearr_25208_25231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 12))
{var inst_25150 = (state_25190[8]);var inst_25178 = cljs.core.vec.call(null,inst_25150);var state_25190__$1 = state_25190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25190__$1,15,out,inst_25178);
} else
{if((state_val_25191 === 13))
{var state_25190__$1 = state_25190;var statearr_25209_25232 = state_25190__$1;(statearr_25209_25232[2] = null);
(statearr_25209_25232[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 14))
{var inst_25183 = (state_25190[2]);var inst_25184 = cljs.core.async.close_BANG_.call(null,out);var state_25190__$1 = (function (){var statearr_25210 = state_25190;(statearr_25210[14] = inst_25183);
return statearr_25210;
})();var statearr_25211_25233 = state_25190__$1;(statearr_25211_25233[2] = inst_25184);
(statearr_25211_25233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25191 === 15))
{var inst_25180 = (state_25190[2]);var state_25190__$1 = state_25190;var statearr_25212_25234 = state_25190__$1;(statearr_25212_25234[2] = inst_25180);
(statearr_25212_25234[1] = 14);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_25216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25216[0] = state_machine__12133__auto__);
(statearr_25216[1] = 1);
return statearr_25216;
});
var state_machine__12133__auto____1 = (function (state_25190){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_25190);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object))
{var ex__12136__auto__ = e25217;var statearr_25218_25235 = state_25190;(statearr_25218_25235[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25236 = state_25190;
state_25190 = G__25236;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_25190){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_25190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_25219 = f__12203__auto__.call(null);(statearr_25219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___25220);
return statearr_25219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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