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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t158734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158734 = (function (f,fn_handler,meta158735){
this.f = f;
this.fn_handler = fn_handler;
this.meta158735 = meta158735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158734.cljs$lang$type = true;
cljs.core.async.t158734.cljs$lang$ctorStr = "cljs.core.async/t158734";
cljs.core.async.t158734.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158734");
});
cljs.core.async.t158734.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t158734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t158734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t158734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158736){var self__ = this;
var _158736__$1 = this;return self__.meta158735;
});
cljs.core.async.t158734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158736,meta158735__$1){var self__ = this;
var _158736__$1 = this;return (new cljs.core.async.t158734(self__.f,self__.fn_handler,meta158735__$1));
});
cljs.core.async.__GT_t158734 = (function __GT_t158734(f__$1,fn_handler__$1,meta158735){return (new cljs.core.async.t158734(f__$1,fn_handler__$1,meta158735));
});
}
return (new cljs.core.async.t158734(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__158738 = buff;if(G__158738)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__158738.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__158738.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__158738);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__158738);
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
{var val_158739 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_158739);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_158739);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___158740 = n;var x_158741 = 0;while(true){
if((x_158741 < n__8553__auto___158740))
{(a[x_158741] = 0);
{
var G__158742 = (x_158741 + 1);
x_158741 = G__158742;
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
var G__158743 = (i + 1);
i = G__158743;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t158747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158747 = (function (flag,alt_flag,meta158748){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta158748 = meta158748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158747.cljs$lang$type = true;
cljs.core.async.t158747.cljs$lang$ctorStr = "cljs.core.async/t158747";
cljs.core.async.t158747.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158747");
});
cljs.core.async.t158747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t158747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t158747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t158747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158749){var self__ = this;
var _158749__$1 = this;return self__.meta158748;
});
cljs.core.async.t158747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158749,meta158748__$1){var self__ = this;
var _158749__$1 = this;return (new cljs.core.async.t158747(self__.flag,self__.alt_flag,meta158748__$1));
});
cljs.core.async.__GT_t158747 = (function __GT_t158747(flag__$1,alt_flag__$1,meta158748){return (new cljs.core.async.t158747(flag__$1,alt_flag__$1,meta158748));
});
}
return (new cljs.core.async.t158747(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t158753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158753 = (function (cb,flag,alt_handler,meta158754){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta158754 = meta158754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158753.cljs$lang$type = true;
cljs.core.async.t158753.cljs$lang$ctorStr = "cljs.core.async/t158753";
cljs.core.async.t158753.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158753");
});
cljs.core.async.t158753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t158753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t158753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t158753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158755){var self__ = this;
var _158755__$1 = this;return self__.meta158754;
});
cljs.core.async.t158753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158755,meta158754__$1){var self__ = this;
var _158755__$1 = this;return (new cljs.core.async.t158753(self__.cb,self__.flag,self__.alt_handler,meta158754__$1));
});
cljs.core.async.__GT_t158753 = (function __GT_t158753(cb__$1,flag__$1,alt_handler__$1,meta158754){return (new cljs.core.async.t158753(cb__$1,flag__$1,alt_handler__$1,meta158754));
});
}
return (new cljs.core.async.t158753(cb,flag,alt_handler,null));
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
return (function (p1__158756_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__158756_SHARP_,port], null));
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
var G__158757 = (i + 1);
i = G__158757;
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
var alts_BANG___delegate = function (ports,p__158758){var map__158760 = p__158758;var map__158760__$1 = ((cljs.core.seq_QMARK_.call(null,map__158760))?cljs.core.apply.call(null,cljs.core.hash_map,map__158760):map__158760);var opts = map__158760__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__158758 = null;if (arguments.length > 1) {
  p__158758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__158758);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__158761){
var ports = cljs.core.first(arglist__158761);
var p__158758 = cljs.core.rest(arglist__158761);
return alts_BANG___delegate(ports,p__158758);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t158769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158769 = (function (ch,f,map_LT_,meta158770){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta158770 = meta158770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158769.cljs$lang$type = true;
cljs.core.async.t158769.cljs$lang$ctorStr = "cljs.core.async/t158769";
cljs.core.async.t158769.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158769");
});
cljs.core.async.t158769.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t158769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t158769.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t158769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t158772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158772 = (function (fn1,_,meta158770,ch,f,map_LT_,meta158773){
this.fn1 = fn1;
this._ = _;
this.meta158770 = meta158770;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta158773 = meta158773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158772.cljs$lang$type = true;
cljs.core.async.t158772.cljs$lang$ctorStr = "cljs.core.async/t158772";
cljs.core.async.t158772.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158772");
});
cljs.core.async.t158772.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t158772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t158772.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t158772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__158762_SHARP_){return f1.call(null,(((p1__158762_SHARP_ == null))?null:self__.f.call(null,p1__158762_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t158772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158774){var self__ = this;
var _158774__$1 = this;return self__.meta158773;
});
cljs.core.async.t158772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158774,meta158773__$1){var self__ = this;
var _158774__$1 = this;return (new cljs.core.async.t158772(self__.fn1,self__._,self__.meta158770,self__.ch,self__.f,self__.map_LT_,meta158773__$1));
});
cljs.core.async.__GT_t158772 = (function __GT_t158772(fn1__$1,___$2,meta158770__$1,ch__$2,f__$2,map_LT___$2,meta158773){return (new cljs.core.async.t158772(fn1__$1,___$2,meta158770__$1,ch__$2,f__$2,map_LT___$2,meta158773));
});
}
return (new cljs.core.async.t158772(fn1,___$1,self__.meta158770,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t158769.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t158769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t158769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158771){var self__ = this;
var _158771__$1 = this;return self__.meta158770;
});
cljs.core.async.t158769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158771,meta158770__$1){var self__ = this;
var _158771__$1 = this;return (new cljs.core.async.t158769(self__.ch,self__.f,self__.map_LT_,meta158770__$1));
});
cljs.core.async.__GT_t158769 = (function __GT_t158769(ch__$1,f__$1,map_LT___$1,meta158770){return (new cljs.core.async.t158769(ch__$1,f__$1,map_LT___$1,meta158770));
});
}
return (new cljs.core.async.t158769(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t158778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158778 = (function (ch,f,map_GT_,meta158779){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta158779 = meta158779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158778.cljs$lang$type = true;
cljs.core.async.t158778.cljs$lang$ctorStr = "cljs.core.async/t158778";
cljs.core.async.t158778.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158778");
});
cljs.core.async.t158778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t158778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t158778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t158778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t158778.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t158778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t158778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158780){var self__ = this;
var _158780__$1 = this;return self__.meta158779;
});
cljs.core.async.t158778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158780,meta158779__$1){var self__ = this;
var _158780__$1 = this;return (new cljs.core.async.t158778(self__.ch,self__.f,self__.map_GT_,meta158779__$1));
});
cljs.core.async.__GT_t158778 = (function __GT_t158778(ch__$1,f__$1,map_GT___$1,meta158779){return (new cljs.core.async.t158778(ch__$1,f__$1,map_GT___$1,meta158779));
});
}
return (new cljs.core.async.t158778(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t158784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t158784 = (function (ch,p,filter_GT_,meta158785){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta158785 = meta158785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t158784.cljs$lang$type = true;
cljs.core.async.t158784.cljs$lang$ctorStr = "cljs.core.async/t158784";
cljs.core.async.t158784.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t158784");
});
cljs.core.async.t158784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t158784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t158784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t158784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t158784.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t158784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t158784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158786){var self__ = this;
var _158786__$1 = this;return self__.meta158785;
});
cljs.core.async.t158784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158786,meta158785__$1){var self__ = this;
var _158786__$1 = this;return (new cljs.core.async.t158784(self__.ch,self__.p,self__.filter_GT_,meta158785__$1));
});
cljs.core.async.__GT_t158784 = (function __GT_t158784(ch__$1,p__$1,filter_GT___$1,meta158785){return (new cljs.core.async.t158784(ch__$1,p__$1,filter_GT___$1,meta158785));
});
}
return (new cljs.core.async.t158784(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___158869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_158848){var state_val_158849 = (state_158848[1]);if((state_val_158849 === 1))
{var state_158848__$1 = state_158848;var statearr_158850_158870 = state_158848__$1;(statearr_158850_158870[2] = null);
(statearr_158850_158870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 2))
{var state_158848__$1 = state_158848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158848__$1,4,ch);
} else
{if((state_val_158849 === 3))
{var inst_158846 = (state_158848[2]);var state_158848__$1 = state_158848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158848__$1,inst_158846);
} else
{if((state_val_158849 === 4))
{var inst_158830 = (state_158848[7]);var inst_158830__$1 = (state_158848[2]);var inst_158831 = (inst_158830__$1 == null);var state_158848__$1 = (function (){var statearr_158851 = state_158848;(statearr_158851[7] = inst_158830__$1);
return statearr_158851;
})();if(cljs.core.truth_(inst_158831))
{var statearr_158852_158871 = state_158848__$1;(statearr_158852_158871[1] = 5);
} else
{var statearr_158853_158872 = state_158848__$1;(statearr_158853_158872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 5))
{var inst_158833 = cljs.core.async.close_BANG_.call(null,out);var state_158848__$1 = state_158848;var statearr_158854_158873 = state_158848__$1;(statearr_158854_158873[2] = inst_158833);
(statearr_158854_158873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 6))
{var inst_158830 = (state_158848[7]);var inst_158835 = p.call(null,inst_158830);var state_158848__$1 = state_158848;if(cljs.core.truth_(inst_158835))
{var statearr_158855_158874 = state_158848__$1;(statearr_158855_158874[1] = 8);
} else
{var statearr_158856_158875 = state_158848__$1;(statearr_158856_158875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 7))
{var inst_158844 = (state_158848[2]);var state_158848__$1 = state_158848;var statearr_158857_158876 = state_158848__$1;(statearr_158857_158876[2] = inst_158844);
(statearr_158857_158876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 8))
{var inst_158830 = (state_158848[7]);var state_158848__$1 = state_158848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158848__$1,11,out,inst_158830);
} else
{if((state_val_158849 === 9))
{var state_158848__$1 = state_158848;var statearr_158858_158877 = state_158848__$1;(statearr_158858_158877[2] = null);
(statearr_158858_158877[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 10))
{var inst_158841 = (state_158848[2]);var state_158848__$1 = (function (){var statearr_158859 = state_158848;(statearr_158859[8] = inst_158841);
return statearr_158859;
})();var statearr_158860_158878 = state_158848__$1;(statearr_158860_158878[2] = null);
(statearr_158860_158878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_158849 === 11))
{var inst_158838 = (state_158848[2]);var state_158848__$1 = state_158848;var statearr_158861_158879 = state_158848__$1;(statearr_158861_158879[2] = inst_158838);
(statearr_158861_158879[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_158865 = (new Array(9));(statearr_158865[0] = state_machine__10214__auto__);
(statearr_158865[1] = 1);
return statearr_158865;
});
var state_machine__10214__auto____1 = (function (state_158848){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_158848);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e158866){if((e158866 instanceof Object))
{var ex__10217__auto__ = e158866;var statearr_158867_158880 = state_158848;(statearr_158867_158880[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e158866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__158881 = state_158848;
state_158848 = G__158881;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_158848){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_158848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_158868 = f__10284__auto__.call(null);(statearr_158868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___158869);
return statearr_158868;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_159033){var state_val_159034 = (state_159033[1]);if((state_val_159034 === 1))
{var state_159033__$1 = state_159033;var statearr_159035_159072 = state_159033__$1;(statearr_159035_159072[2] = null);
(statearr_159035_159072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 2))
{var state_159033__$1 = state_159033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159033__$1,4,in$);
} else
{if((state_val_159034 === 3))
{var inst_159031 = (state_159033[2]);var state_159033__$1 = state_159033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159033__$1,inst_159031);
} else
{if((state_val_159034 === 4))
{var inst_158979 = (state_159033[7]);var inst_158979__$1 = (state_159033[2]);var inst_158980 = (inst_158979__$1 == null);var state_159033__$1 = (function (){var statearr_159036 = state_159033;(statearr_159036[7] = inst_158979__$1);
return statearr_159036;
})();if(cljs.core.truth_(inst_158980))
{var statearr_159037_159073 = state_159033__$1;(statearr_159037_159073[1] = 5);
} else
{var statearr_159038_159074 = state_159033__$1;(statearr_159038_159074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 5))
{var inst_158982 = cljs.core.async.close_BANG_.call(null,out);var state_159033__$1 = state_159033;var statearr_159039_159075 = state_159033__$1;(statearr_159039_159075[2] = inst_158982);
(statearr_159039_159075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 6))
{var inst_158979 = (state_159033[7]);var inst_158984 = f.call(null,inst_158979);var inst_158989 = cljs.core.seq.call(null,inst_158984);var inst_158990 = inst_158989;var inst_158991 = null;var inst_158992 = 0;var inst_158993 = 0;var state_159033__$1 = (function (){var statearr_159040 = state_159033;(statearr_159040[8] = inst_158993);
(statearr_159040[9] = inst_158991);
(statearr_159040[10] = inst_158992);
(statearr_159040[11] = inst_158990);
return statearr_159040;
})();var statearr_159041_159076 = state_159033__$1;(statearr_159041_159076[2] = null);
(statearr_159041_159076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 7))
{var inst_159029 = (state_159033[2]);var state_159033__$1 = state_159033;var statearr_159042_159077 = state_159033__$1;(statearr_159042_159077[2] = inst_159029);
(statearr_159042_159077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 8))
{var inst_158993 = (state_159033[8]);var inst_158992 = (state_159033[10]);var inst_158995 = (inst_158993 < inst_158992);var inst_158996 = inst_158995;var state_159033__$1 = state_159033;if(cljs.core.truth_(inst_158996))
{var statearr_159043_159078 = state_159033__$1;(statearr_159043_159078[1] = 10);
} else
{var statearr_159044_159079 = state_159033__$1;(statearr_159044_159079[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 9))
{var inst_159026 = (state_159033[2]);var state_159033__$1 = (function (){var statearr_159045 = state_159033;(statearr_159045[12] = inst_159026);
return statearr_159045;
})();var statearr_159046_159080 = state_159033__$1;(statearr_159046_159080[2] = null);
(statearr_159046_159080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 10))
{var inst_158993 = (state_159033[8]);var inst_158991 = (state_159033[9]);var inst_158998 = cljs.core._nth.call(null,inst_158991,inst_158993);var state_159033__$1 = state_159033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159033__$1,13,out,inst_158998);
} else
{if((state_val_159034 === 11))
{var inst_159004 = (state_159033[13]);var inst_158990 = (state_159033[11]);var inst_159004__$1 = cljs.core.seq.call(null,inst_158990);var state_159033__$1 = (function (){var statearr_159050 = state_159033;(statearr_159050[13] = inst_159004__$1);
return statearr_159050;
})();if(inst_159004__$1)
{var statearr_159051_159081 = state_159033__$1;(statearr_159051_159081[1] = 14);
} else
{var statearr_159052_159082 = state_159033__$1;(statearr_159052_159082[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 12))
{var inst_159024 = (state_159033[2]);var state_159033__$1 = state_159033;var statearr_159053_159083 = state_159033__$1;(statearr_159053_159083[2] = inst_159024);
(statearr_159053_159083[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 13))
{var inst_158993 = (state_159033[8]);var inst_158991 = (state_159033[9]);var inst_158992 = (state_159033[10]);var inst_158990 = (state_159033[11]);var inst_159000 = (state_159033[2]);var inst_159001 = (inst_158993 + 1);var tmp159047 = inst_158991;var tmp159048 = inst_158992;var tmp159049 = inst_158990;var inst_158990__$1 = tmp159049;var inst_158991__$1 = tmp159047;var inst_158992__$1 = tmp159048;var inst_158993__$1 = inst_159001;var state_159033__$1 = (function (){var statearr_159054 = state_159033;(statearr_159054[8] = inst_158993__$1);
(statearr_159054[9] = inst_158991__$1);
(statearr_159054[10] = inst_158992__$1);
(statearr_159054[14] = inst_159000);
(statearr_159054[11] = inst_158990__$1);
return statearr_159054;
})();var statearr_159055_159084 = state_159033__$1;(statearr_159055_159084[2] = null);
(statearr_159055_159084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 14))
{var inst_159004 = (state_159033[13]);var inst_159006 = cljs.core.chunked_seq_QMARK_.call(null,inst_159004);var state_159033__$1 = state_159033;if(inst_159006)
{var statearr_159056_159085 = state_159033__$1;(statearr_159056_159085[1] = 17);
} else
{var statearr_159057_159086 = state_159033__$1;(statearr_159057_159086[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 15))
{var state_159033__$1 = state_159033;var statearr_159058_159087 = state_159033__$1;(statearr_159058_159087[2] = null);
(statearr_159058_159087[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 16))
{var inst_159022 = (state_159033[2]);var state_159033__$1 = state_159033;var statearr_159059_159088 = state_159033__$1;(statearr_159059_159088[2] = inst_159022);
(statearr_159059_159088[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 17))
{var inst_159004 = (state_159033[13]);var inst_159008 = cljs.core.chunk_first.call(null,inst_159004);var inst_159009 = cljs.core.chunk_rest.call(null,inst_159004);var inst_159010 = cljs.core.count.call(null,inst_159008);var inst_158990 = inst_159009;var inst_158991 = inst_159008;var inst_158992 = inst_159010;var inst_158993 = 0;var state_159033__$1 = (function (){var statearr_159060 = state_159033;(statearr_159060[8] = inst_158993);
(statearr_159060[9] = inst_158991);
(statearr_159060[10] = inst_158992);
(statearr_159060[11] = inst_158990);
return statearr_159060;
})();var statearr_159061_159089 = state_159033__$1;(statearr_159061_159089[2] = null);
(statearr_159061_159089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 18))
{var inst_159004 = (state_159033[13]);var inst_159013 = cljs.core.first.call(null,inst_159004);var state_159033__$1 = state_159033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159033__$1,20,out,inst_159013);
} else
{if((state_val_159034 === 19))
{var inst_159019 = (state_159033[2]);var state_159033__$1 = state_159033;var statearr_159062_159090 = state_159033__$1;(statearr_159062_159090[2] = inst_159019);
(statearr_159062_159090[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159034 === 20))
{var inst_159004 = (state_159033[13]);var inst_159015 = (state_159033[2]);var inst_159016 = cljs.core.next.call(null,inst_159004);var inst_158990 = inst_159016;var inst_158991 = null;var inst_158992 = 0;var inst_158993 = 0;var state_159033__$1 = (function (){var statearr_159063 = state_159033;(statearr_159063[8] = inst_158993);
(statearr_159063[9] = inst_158991);
(statearr_159063[10] = inst_158992);
(statearr_159063[11] = inst_158990);
(statearr_159063[15] = inst_159015);
return statearr_159063;
})();var statearr_159064_159091 = state_159033__$1;(statearr_159064_159091[2] = null);
(statearr_159064_159091[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_159068 = (new Array(16));(statearr_159068[0] = state_machine__10214__auto__);
(statearr_159068[1] = 1);
return statearr_159068;
});
var state_machine__10214__auto____1 = (function (state_159033){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_159033);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e159069){if((e159069 instanceof Object))
{var ex__10217__auto__ = e159069;var statearr_159070_159092 = state_159033;(statearr_159070_159092[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__159093 = state_159033;
state_159033 = G__159093;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_159033){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_159033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_159071 = f__10284__auto__.call(null);(statearr_159071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_159071;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___159174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_159153){var state_val_159154 = (state_159153[1]);if((state_val_159154 === 1))
{var state_159153__$1 = state_159153;var statearr_159155_159175 = state_159153__$1;(statearr_159155_159175[2] = null);
(statearr_159155_159175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 2))
{var state_159153__$1 = state_159153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159153__$1,4,from);
} else
{if((state_val_159154 === 3))
{var inst_159151 = (state_159153[2]);var state_159153__$1 = state_159153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159153__$1,inst_159151);
} else
{if((state_val_159154 === 4))
{var inst_159136 = (state_159153[7]);var inst_159136__$1 = (state_159153[2]);var inst_159137 = (inst_159136__$1 == null);var state_159153__$1 = (function (){var statearr_159156 = state_159153;(statearr_159156[7] = inst_159136__$1);
return statearr_159156;
})();if(cljs.core.truth_(inst_159137))
{var statearr_159157_159176 = state_159153__$1;(statearr_159157_159176[1] = 5);
} else
{var statearr_159158_159177 = state_159153__$1;(statearr_159158_159177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 5))
{var state_159153__$1 = state_159153;if(cljs.core.truth_(close_QMARK_))
{var statearr_159159_159178 = state_159153__$1;(statearr_159159_159178[1] = 8);
} else
{var statearr_159160_159179 = state_159153__$1;(statearr_159160_159179[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 6))
{var inst_159136 = (state_159153[7]);var state_159153__$1 = state_159153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159153__$1,11,to,inst_159136);
} else
{if((state_val_159154 === 7))
{var inst_159149 = (state_159153[2]);var state_159153__$1 = state_159153;var statearr_159161_159180 = state_159153__$1;(statearr_159161_159180[2] = inst_159149);
(statearr_159161_159180[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 8))
{var inst_159140 = cljs.core.async.close_BANG_.call(null,to);var state_159153__$1 = state_159153;var statearr_159162_159181 = state_159153__$1;(statearr_159162_159181[2] = inst_159140);
(statearr_159162_159181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 9))
{var state_159153__$1 = state_159153;var statearr_159163_159182 = state_159153__$1;(statearr_159163_159182[2] = null);
(statearr_159163_159182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 10))
{var inst_159143 = (state_159153[2]);var state_159153__$1 = state_159153;var statearr_159164_159183 = state_159153__$1;(statearr_159164_159183[2] = inst_159143);
(statearr_159164_159183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159154 === 11))
{var inst_159146 = (state_159153[2]);var state_159153__$1 = (function (){var statearr_159165 = state_159153;(statearr_159165[8] = inst_159146);
return statearr_159165;
})();var statearr_159166_159184 = state_159153__$1;(statearr_159166_159184[2] = null);
(statearr_159166_159184[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_159170 = (new Array(9));(statearr_159170[0] = state_machine__10214__auto__);
(statearr_159170[1] = 1);
return statearr_159170;
});
var state_machine__10214__auto____1 = (function (state_159153){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_159153);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e159171){if((e159171 instanceof Object))
{var ex__10217__auto__ = e159171;var statearr_159172_159185 = state_159153;(statearr_159172_159185[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__159186 = state_159153;
state_159153 = G__159186;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_159153){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_159153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_159173 = f__10284__auto__.call(null);(statearr_159173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___159174);
return statearr_159173;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___159273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_159251){var state_val_159252 = (state_159251[1]);if((state_val_159252 === 1))
{var state_159251__$1 = state_159251;var statearr_159253_159274 = state_159251__$1;(statearr_159253_159274[2] = null);
(statearr_159253_159274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 2))
{var state_159251__$1 = state_159251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159251__$1,4,ch);
} else
{if((state_val_159252 === 3))
{var inst_159249 = (state_159251[2]);var state_159251__$1 = state_159251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159251__$1,inst_159249);
} else
{if((state_val_159252 === 4))
{var inst_159232 = (state_159251[7]);var inst_159232__$1 = (state_159251[2]);var inst_159233 = (inst_159232__$1 == null);var state_159251__$1 = (function (){var statearr_159254 = state_159251;(statearr_159254[7] = inst_159232__$1);
return statearr_159254;
})();if(cljs.core.truth_(inst_159233))
{var statearr_159255_159275 = state_159251__$1;(statearr_159255_159275[1] = 5);
} else
{var statearr_159256_159276 = state_159251__$1;(statearr_159256_159276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 5))
{var inst_159235 = cljs.core.async.close_BANG_.call(null,tc);var inst_159236 = cljs.core.async.close_BANG_.call(null,fc);var state_159251__$1 = (function (){var statearr_159257 = state_159251;(statearr_159257[8] = inst_159235);
return statearr_159257;
})();var statearr_159258_159277 = state_159251__$1;(statearr_159258_159277[2] = inst_159236);
(statearr_159258_159277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 6))
{var inst_159232 = (state_159251[7]);var inst_159238 = p.call(null,inst_159232);var state_159251__$1 = state_159251;if(cljs.core.truth_(inst_159238))
{var statearr_159259_159278 = state_159251__$1;(statearr_159259_159278[1] = 9);
} else
{var statearr_159260_159279 = state_159251__$1;(statearr_159260_159279[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 7))
{var inst_159247 = (state_159251[2]);var state_159251__$1 = state_159251;var statearr_159261_159280 = state_159251__$1;(statearr_159261_159280[2] = inst_159247);
(statearr_159261_159280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 8))
{var inst_159244 = (state_159251[2]);var state_159251__$1 = (function (){var statearr_159262 = state_159251;(statearr_159262[9] = inst_159244);
return statearr_159262;
})();var statearr_159263_159281 = state_159251__$1;(statearr_159263_159281[2] = null);
(statearr_159263_159281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 9))
{var state_159251__$1 = state_159251;var statearr_159264_159282 = state_159251__$1;(statearr_159264_159282[2] = tc);
(statearr_159264_159282[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 10))
{var state_159251__$1 = state_159251;var statearr_159265_159283 = state_159251__$1;(statearr_159265_159283[2] = fc);
(statearr_159265_159283[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159252 === 11))
{var inst_159232 = (state_159251[7]);var inst_159242 = (state_159251[2]);var state_159251__$1 = state_159251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159251__$1,8,inst_159242,inst_159232);
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
var state_machine__10214__auto____0 = (function (){var statearr_159269 = (new Array(10));(statearr_159269[0] = state_machine__10214__auto__);
(statearr_159269[1] = 1);
return statearr_159269;
});
var state_machine__10214__auto____1 = (function (state_159251){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_159251);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e159270){if((e159270 instanceof Object))
{var ex__10217__auto__ = e159270;var statearr_159271_159284 = state_159251;(statearr_159271_159284[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__159285 = state_159251;
state_159251 = G__159285;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_159251){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_159251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_159272 = f__10284__auto__.call(null);(statearr_159272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___159273);
return statearr_159272;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_159332){var state_val_159333 = (state_159332[1]);if((state_val_159333 === 7))
{var inst_159328 = (state_159332[2]);var state_159332__$1 = state_159332;var statearr_159334_159350 = state_159332__$1;(statearr_159334_159350[2] = inst_159328);
(statearr_159334_159350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159333 === 6))
{var inst_159318 = (state_159332[7]);var inst_159321 = (state_159332[8]);var inst_159325 = f.call(null,inst_159318,inst_159321);var inst_159318__$1 = inst_159325;var state_159332__$1 = (function (){var statearr_159335 = state_159332;(statearr_159335[7] = inst_159318__$1);
return statearr_159335;
})();var statearr_159336_159351 = state_159332__$1;(statearr_159336_159351[2] = null);
(statearr_159336_159351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159333 === 5))
{var inst_159318 = (state_159332[7]);var state_159332__$1 = state_159332;var statearr_159337_159352 = state_159332__$1;(statearr_159337_159352[2] = inst_159318);
(statearr_159337_159352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159333 === 4))
{var inst_159321 = (state_159332[8]);var inst_159321__$1 = (state_159332[2]);var inst_159322 = (inst_159321__$1 == null);var state_159332__$1 = (function (){var statearr_159338 = state_159332;(statearr_159338[8] = inst_159321__$1);
return statearr_159338;
})();if(cljs.core.truth_(inst_159322))
{var statearr_159339_159353 = state_159332__$1;(statearr_159339_159353[1] = 5);
} else
{var statearr_159340_159354 = state_159332__$1;(statearr_159340_159354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159333 === 3))
{var inst_159330 = (state_159332[2]);var state_159332__$1 = state_159332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159332__$1,inst_159330);
} else
{if((state_val_159333 === 2))
{var state_159332__$1 = state_159332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159332__$1,4,ch);
} else
{if((state_val_159333 === 1))
{var inst_159318 = init;var state_159332__$1 = (function (){var statearr_159341 = state_159332;(statearr_159341[7] = inst_159318);
return statearr_159341;
})();var statearr_159342_159355 = state_159332__$1;(statearr_159342_159355[2] = null);
(statearr_159342_159355[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_159346 = (new Array(9));(statearr_159346[0] = state_machine__10214__auto__);
(statearr_159346[1] = 1);
return statearr_159346;
});
var state_machine__10214__auto____1 = (function (state_159332){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_159332);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e159347){if((e159347 instanceof Object))
{var ex__10217__auto__ = e159347;var statearr_159348_159356 = state_159332;(statearr_159348_159356[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__159357 = state_159332;
state_159332 = G__159357;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_159332){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_159332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_159349 = f__10284__auto__.call(null);(statearr_159349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_159349;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_159419){var state_val_159420 = (state_159419[1]);if((state_val_159420 === 1))
{var inst_159399 = cljs.core.seq.call(null,coll);var inst_159400 = inst_159399;var state_159419__$1 = (function (){var statearr_159421 = state_159419;(statearr_159421[7] = inst_159400);
return statearr_159421;
})();var statearr_159422_159440 = state_159419__$1;(statearr_159422_159440[2] = null);
(statearr_159422_159440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 2))
{var inst_159400 = (state_159419[7]);var state_159419__$1 = state_159419;if(cljs.core.truth_(inst_159400))
{var statearr_159423_159441 = state_159419__$1;(statearr_159423_159441[1] = 4);
} else
{var statearr_159424_159442 = state_159419__$1;(statearr_159424_159442[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 3))
{var inst_159417 = (state_159419[2]);var state_159419__$1 = state_159419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159419__$1,inst_159417);
} else
{if((state_val_159420 === 4))
{var inst_159400 = (state_159419[7]);var inst_159403 = cljs.core.first.call(null,inst_159400);var state_159419__$1 = state_159419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_159419__$1,7,ch,inst_159403);
} else
{if((state_val_159420 === 5))
{var state_159419__$1 = state_159419;if(cljs.core.truth_(close_QMARK_))
{var statearr_159425_159443 = state_159419__$1;(statearr_159425_159443[1] = 8);
} else
{var statearr_159426_159444 = state_159419__$1;(statearr_159426_159444[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 6))
{var inst_159415 = (state_159419[2]);var state_159419__$1 = state_159419;var statearr_159427_159445 = state_159419__$1;(statearr_159427_159445[2] = inst_159415);
(statearr_159427_159445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 7))
{var inst_159400 = (state_159419[7]);var inst_159405 = (state_159419[2]);var inst_159406 = cljs.core.next.call(null,inst_159400);var inst_159400__$1 = inst_159406;var state_159419__$1 = (function (){var statearr_159428 = state_159419;(statearr_159428[7] = inst_159400__$1);
(statearr_159428[8] = inst_159405);
return statearr_159428;
})();var statearr_159429_159446 = state_159419__$1;(statearr_159429_159446[2] = null);
(statearr_159429_159446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 8))
{var inst_159410 = cljs.core.async.close_BANG_.call(null,ch);var state_159419__$1 = state_159419;var statearr_159430_159447 = state_159419__$1;(statearr_159430_159447[2] = inst_159410);
(statearr_159430_159447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 9))
{var state_159419__$1 = state_159419;var statearr_159431_159448 = state_159419__$1;(statearr_159431_159448[2] = null);
(statearr_159431_159448[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159420 === 10))
{var inst_159413 = (state_159419[2]);var state_159419__$1 = state_159419;var statearr_159432_159449 = state_159419__$1;(statearr_159432_159449[2] = inst_159413);
(statearr_159432_159449[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_159436 = (new Array(9));(statearr_159436[0] = state_machine__10214__auto__);
(statearr_159436[1] = 1);
return statearr_159436;
});
var state_machine__10214__auto____1 = (function (state_159419){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_159419);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e159437){if((e159437 instanceof Object))
{var ex__10217__auto__ = e159437;var statearr_159438_159450 = state_159419;(statearr_159438_159450[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__159451 = state_159419;
state_159419 = G__159451;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_159419){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_159419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_159439 = f__10284__auto__.call(null);(statearr_159439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_159439;
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
cljs.core.async.Mux = (function (){var obj159453 = {};return obj159453;
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
cljs.core.async.Mult = (function (){var obj159455 = {};return obj159455;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t159670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t159670 = (function (cs,ch,mult,meta159671){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta159671 = meta159671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t159670.cljs$lang$type = true;
cljs.core.async.t159670.cljs$lang$ctorStr = "cljs.core.async/t159670";
cljs.core.async.t159670.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t159670");
});})(cs))
;
cljs.core.async.t159670.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t159670.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t159670.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t159670.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t159670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t159670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t159670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_159672){var self__ = this;
var _159672__$1 = this;return self__.meta159671;
});})(cs))
;
cljs.core.async.t159670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_159672,meta159671__$1){var self__ = this;
var _159672__$1 = this;return (new cljs.core.async.t159670(self__.cs,self__.ch,self__.mult,meta159671__$1));
});})(cs))
;
cljs.core.async.__GT_t159670 = ((function (cs){
return (function __GT_t159670(cs__$1,ch__$1,mult__$1,meta159671){return (new cljs.core.async.t159670(cs__$1,ch__$1,mult__$1,meta159671));
});})(cs))
;
}
return (new cljs.core.async.t159670(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___159884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_159802){var state_val_159803 = (state_159802[1]);if((state_val_159803 === 32))
{var inst_159751 = (state_159802[7]);var inst_159675 = (state_159802[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_159802,31,Object,null,30);var inst_159758 = cljs.core.async.put_BANG_.call(null,inst_159751,inst_159675,done);var state_159802__$1 = state_159802;var statearr_159804_159885 = state_159802__$1;(statearr_159804_159885[2] = inst_159758);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 1))
{var state_159802__$1 = state_159802;var statearr_159805_159886 = state_159802__$1;(statearr_159805_159886[2] = null);
(statearr_159805_159886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 33))
{var inst_159764 = (state_159802[9]);var inst_159766 = cljs.core.chunked_seq_QMARK_.call(null,inst_159764);var state_159802__$1 = state_159802;if(inst_159766)
{var statearr_159806_159887 = state_159802__$1;(statearr_159806_159887[1] = 36);
} else
{var statearr_159807_159888 = state_159802__$1;(statearr_159807_159888[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 2))
{var state_159802__$1 = state_159802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159802__$1,4,ch);
} else
{if((state_val_159803 === 34))
{var state_159802__$1 = state_159802;var statearr_159808_159889 = state_159802__$1;(statearr_159808_159889[2] = null);
(statearr_159808_159889[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 3))
{var inst_159800 = (state_159802[2]);var state_159802__$1 = state_159802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_159802__$1,inst_159800);
} else
{if((state_val_159803 === 35))
{var inst_159789 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159809_159890 = state_159802__$1;(statearr_159809_159890[2] = inst_159789);
(statearr_159809_159890[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 4))
{var inst_159675 = (state_159802[8]);var inst_159675__$1 = (state_159802[2]);var inst_159676 = (inst_159675__$1 == null);var state_159802__$1 = (function (){var statearr_159810 = state_159802;(statearr_159810[8] = inst_159675__$1);
return statearr_159810;
})();if(cljs.core.truth_(inst_159676))
{var statearr_159811_159891 = state_159802__$1;(statearr_159811_159891[1] = 5);
} else
{var statearr_159812_159892 = state_159802__$1;(statearr_159812_159892[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 36))
{var inst_159764 = (state_159802[9]);var inst_159768 = cljs.core.chunk_first.call(null,inst_159764);var inst_159769 = cljs.core.chunk_rest.call(null,inst_159764);var inst_159770 = cljs.core.count.call(null,inst_159768);var inst_159743 = inst_159769;var inst_159744 = inst_159768;var inst_159745 = inst_159770;var inst_159746 = 0;var state_159802__$1 = (function (){var statearr_159813 = state_159802;(statearr_159813[10] = inst_159745);
(statearr_159813[11] = inst_159746);
(statearr_159813[12] = inst_159744);
(statearr_159813[13] = inst_159743);
return statearr_159813;
})();var statearr_159814_159893 = state_159802__$1;(statearr_159814_159893[2] = null);
(statearr_159814_159893[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 5))
{var inst_159682 = cljs.core.deref.call(null,cs);var inst_159683 = cljs.core.seq.call(null,inst_159682);var inst_159684 = inst_159683;var inst_159685 = null;var inst_159686 = 0;var inst_159687 = 0;var state_159802__$1 = (function (){var statearr_159815 = state_159802;(statearr_159815[14] = inst_159687);
(statearr_159815[15] = inst_159686);
(statearr_159815[16] = inst_159684);
(statearr_159815[17] = inst_159685);
return statearr_159815;
})();var statearr_159816_159894 = state_159802__$1;(statearr_159816_159894[2] = null);
(statearr_159816_159894[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 37))
{var inst_159764 = (state_159802[9]);var inst_159773 = cljs.core.first.call(null,inst_159764);var state_159802__$1 = (function (){var statearr_159817 = state_159802;(statearr_159817[18] = inst_159773);
return statearr_159817;
})();var statearr_159818_159895 = state_159802__$1;(statearr_159818_159895[2] = null);
(statearr_159818_159895[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 6))
{var inst_159734 = cljs.core.deref.call(null,cs);var inst_159735 = cljs.core.keys.call(null,inst_159734);var inst_159736 = cljs.core.count.call(null,inst_159735);var inst_159737 = cljs.core.reset_BANG_.call(null,dctr,inst_159736);var inst_159742 = cljs.core.seq.call(null,inst_159735);var inst_159743 = inst_159742;var inst_159744 = null;var inst_159745 = 0;var inst_159746 = 0;var state_159802__$1 = (function (){var statearr_159819 = state_159802;(statearr_159819[10] = inst_159745);
(statearr_159819[11] = inst_159746);
(statearr_159819[12] = inst_159744);
(statearr_159819[13] = inst_159743);
(statearr_159819[19] = inst_159737);
return statearr_159819;
})();var statearr_159820_159896 = state_159802__$1;(statearr_159820_159896[2] = null);
(statearr_159820_159896[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 38))
{var inst_159786 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159821_159897 = state_159802__$1;(statearr_159821_159897[2] = inst_159786);
(statearr_159821_159897[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 7))
{var inst_159798 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159822_159898 = state_159802__$1;(statearr_159822_159898[2] = inst_159798);
(statearr_159822_159898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 39))
{var inst_159764 = (state_159802[9]);var inst_159782 = (state_159802[2]);var inst_159783 = cljs.core.next.call(null,inst_159764);var inst_159743 = inst_159783;var inst_159744 = null;var inst_159745 = 0;var inst_159746 = 0;var state_159802__$1 = (function (){var statearr_159823 = state_159802;(statearr_159823[10] = inst_159745);
(statearr_159823[11] = inst_159746);
(statearr_159823[12] = inst_159744);
(statearr_159823[13] = inst_159743);
(statearr_159823[20] = inst_159782);
return statearr_159823;
})();var statearr_159824_159899 = state_159802__$1;(statearr_159824_159899[2] = null);
(statearr_159824_159899[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 8))
{var inst_159687 = (state_159802[14]);var inst_159686 = (state_159802[15]);var inst_159689 = (inst_159687 < inst_159686);var inst_159690 = inst_159689;var state_159802__$1 = state_159802;if(cljs.core.truth_(inst_159690))
{var statearr_159825_159900 = state_159802__$1;(statearr_159825_159900[1] = 10);
} else
{var statearr_159826_159901 = state_159802__$1;(statearr_159826_159901[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 40))
{var inst_159773 = (state_159802[18]);var inst_159774 = (state_159802[2]);var inst_159775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_159776 = cljs.core.async.untap_STAR_.call(null,m,inst_159773);var state_159802__$1 = (function (){var statearr_159827 = state_159802;(statearr_159827[21] = inst_159775);
(statearr_159827[22] = inst_159774);
return statearr_159827;
})();var statearr_159828_159902 = state_159802__$1;(statearr_159828_159902[2] = inst_159776);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 9))
{var inst_159732 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159829_159903 = state_159802__$1;(statearr_159829_159903[2] = inst_159732);
(statearr_159829_159903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 41))
{var inst_159675 = (state_159802[8]);var inst_159773 = (state_159802[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_159802,40,Object,null,39);var inst_159780 = cljs.core.async.put_BANG_.call(null,inst_159773,inst_159675,done);var state_159802__$1 = state_159802;var statearr_159830_159904 = state_159802__$1;(statearr_159830_159904[2] = inst_159780);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 10))
{var inst_159687 = (state_159802[14]);var inst_159685 = (state_159802[17]);var inst_159693 = cljs.core._nth.call(null,inst_159685,inst_159687);var inst_159694 = cljs.core.nth.call(null,inst_159693,0,null);var inst_159695 = cljs.core.nth.call(null,inst_159693,1,null);var state_159802__$1 = (function (){var statearr_159831 = state_159802;(statearr_159831[23] = inst_159694);
return statearr_159831;
})();if(cljs.core.truth_(inst_159695))
{var statearr_159832_159905 = state_159802__$1;(statearr_159832_159905[1] = 13);
} else
{var statearr_159833_159906 = state_159802__$1;(statearr_159833_159906[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 42))
{var inst_159795 = (state_159802[2]);var state_159802__$1 = (function (){var statearr_159834 = state_159802;(statearr_159834[24] = inst_159795);
return statearr_159834;
})();var statearr_159835_159907 = state_159802__$1;(statearr_159835_159907[2] = null);
(statearr_159835_159907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 11))
{var inst_159684 = (state_159802[16]);var inst_159704 = (state_159802[25]);var inst_159704__$1 = cljs.core.seq.call(null,inst_159684);var state_159802__$1 = (function (){var statearr_159836 = state_159802;(statearr_159836[25] = inst_159704__$1);
return statearr_159836;
})();if(inst_159704__$1)
{var statearr_159837_159908 = state_159802__$1;(statearr_159837_159908[1] = 16);
} else
{var statearr_159838_159909 = state_159802__$1;(statearr_159838_159909[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 12))
{var inst_159730 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159839_159910 = state_159802__$1;(statearr_159839_159910[2] = inst_159730);
(statearr_159839_159910[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 13))
{var inst_159694 = (state_159802[23]);var inst_159697 = cljs.core.async.close_BANG_.call(null,inst_159694);var state_159802__$1 = state_159802;var statearr_159843_159911 = state_159802__$1;(statearr_159843_159911[2] = inst_159697);
(statearr_159843_159911[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 14))
{var state_159802__$1 = state_159802;var statearr_159844_159912 = state_159802__$1;(statearr_159844_159912[2] = null);
(statearr_159844_159912[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 15))
{var inst_159687 = (state_159802[14]);var inst_159686 = (state_159802[15]);var inst_159684 = (state_159802[16]);var inst_159685 = (state_159802[17]);var inst_159700 = (state_159802[2]);var inst_159701 = (inst_159687 + 1);var tmp159840 = inst_159686;var tmp159841 = inst_159684;var tmp159842 = inst_159685;var inst_159684__$1 = tmp159841;var inst_159685__$1 = tmp159842;var inst_159686__$1 = tmp159840;var inst_159687__$1 = inst_159701;var state_159802__$1 = (function (){var statearr_159845 = state_159802;(statearr_159845[14] = inst_159687__$1);
(statearr_159845[15] = inst_159686__$1);
(statearr_159845[16] = inst_159684__$1);
(statearr_159845[17] = inst_159685__$1);
(statearr_159845[26] = inst_159700);
return statearr_159845;
})();var statearr_159846_159913 = state_159802__$1;(statearr_159846_159913[2] = null);
(statearr_159846_159913[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 16))
{var inst_159704 = (state_159802[25]);var inst_159706 = cljs.core.chunked_seq_QMARK_.call(null,inst_159704);var state_159802__$1 = state_159802;if(inst_159706)
{var statearr_159847_159914 = state_159802__$1;(statearr_159847_159914[1] = 19);
} else
{var statearr_159848_159915 = state_159802__$1;(statearr_159848_159915[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 17))
{var state_159802__$1 = state_159802;var statearr_159849_159916 = state_159802__$1;(statearr_159849_159916[2] = null);
(statearr_159849_159916[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 18))
{var inst_159728 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159850_159917 = state_159802__$1;(statearr_159850_159917[2] = inst_159728);
(statearr_159850_159917[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 19))
{var inst_159704 = (state_159802[25]);var inst_159708 = cljs.core.chunk_first.call(null,inst_159704);var inst_159709 = cljs.core.chunk_rest.call(null,inst_159704);var inst_159710 = cljs.core.count.call(null,inst_159708);var inst_159684 = inst_159709;var inst_159685 = inst_159708;var inst_159686 = inst_159710;var inst_159687 = 0;var state_159802__$1 = (function (){var statearr_159851 = state_159802;(statearr_159851[14] = inst_159687);
(statearr_159851[15] = inst_159686);
(statearr_159851[16] = inst_159684);
(statearr_159851[17] = inst_159685);
return statearr_159851;
})();var statearr_159852_159918 = state_159802__$1;(statearr_159852_159918[2] = null);
(statearr_159852_159918[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 20))
{var inst_159704 = (state_159802[25]);var inst_159714 = cljs.core.first.call(null,inst_159704);var inst_159715 = cljs.core.nth.call(null,inst_159714,0,null);var inst_159716 = cljs.core.nth.call(null,inst_159714,1,null);var state_159802__$1 = (function (){var statearr_159853 = state_159802;(statearr_159853[27] = inst_159715);
return statearr_159853;
})();if(cljs.core.truth_(inst_159716))
{var statearr_159854_159919 = state_159802__$1;(statearr_159854_159919[1] = 22);
} else
{var statearr_159855_159920 = state_159802__$1;(statearr_159855_159920[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 21))
{var inst_159725 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159856_159921 = state_159802__$1;(statearr_159856_159921[2] = inst_159725);
(statearr_159856_159921[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 22))
{var inst_159715 = (state_159802[27]);var inst_159718 = cljs.core.async.close_BANG_.call(null,inst_159715);var state_159802__$1 = state_159802;var statearr_159857_159922 = state_159802__$1;(statearr_159857_159922[2] = inst_159718);
(statearr_159857_159922[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 23))
{var state_159802__$1 = state_159802;var statearr_159858_159923 = state_159802__$1;(statearr_159858_159923[2] = null);
(statearr_159858_159923[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 24))
{var inst_159704 = (state_159802[25]);var inst_159721 = (state_159802[2]);var inst_159722 = cljs.core.next.call(null,inst_159704);var inst_159684 = inst_159722;var inst_159685 = null;var inst_159686 = 0;var inst_159687 = 0;var state_159802__$1 = (function (){var statearr_159859 = state_159802;(statearr_159859[28] = inst_159721);
(statearr_159859[14] = inst_159687);
(statearr_159859[15] = inst_159686);
(statearr_159859[16] = inst_159684);
(statearr_159859[17] = inst_159685);
return statearr_159859;
})();var statearr_159860_159924 = state_159802__$1;(statearr_159860_159924[2] = null);
(statearr_159860_159924[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 25))
{var inst_159745 = (state_159802[10]);var inst_159746 = (state_159802[11]);var inst_159748 = (inst_159746 < inst_159745);var inst_159749 = inst_159748;var state_159802__$1 = state_159802;if(cljs.core.truth_(inst_159749))
{var statearr_159861_159925 = state_159802__$1;(statearr_159861_159925[1] = 27);
} else
{var statearr_159862_159926 = state_159802__$1;(statearr_159862_159926[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 26))
{var inst_159793 = (state_159802[2]);var state_159802__$1 = (function (){var statearr_159863 = state_159802;(statearr_159863[29] = inst_159793);
return statearr_159863;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_159802__$1,42,dchan);
} else
{if((state_val_159803 === 27))
{var inst_159746 = (state_159802[11]);var inst_159744 = (state_159802[12]);var inst_159751 = cljs.core._nth.call(null,inst_159744,inst_159746);var state_159802__$1 = (function (){var statearr_159864 = state_159802;(statearr_159864[7] = inst_159751);
return statearr_159864;
})();var statearr_159865_159927 = state_159802__$1;(statearr_159865_159927[2] = null);
(statearr_159865_159927[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 28))
{var inst_159764 = (state_159802[9]);var inst_159743 = (state_159802[13]);var inst_159764__$1 = cljs.core.seq.call(null,inst_159743);var state_159802__$1 = (function (){var statearr_159869 = state_159802;(statearr_159869[9] = inst_159764__$1);
return statearr_159869;
})();if(inst_159764__$1)
{var statearr_159870_159928 = state_159802__$1;(statearr_159870_159928[1] = 33);
} else
{var statearr_159871_159929 = state_159802__$1;(statearr_159871_159929[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 29))
{var inst_159791 = (state_159802[2]);var state_159802__$1 = state_159802;var statearr_159872_159930 = state_159802__$1;(statearr_159872_159930[2] = inst_159791);
(statearr_159872_159930[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 30))
{var inst_159745 = (state_159802[10]);var inst_159746 = (state_159802[11]);var inst_159744 = (state_159802[12]);var inst_159743 = (state_159802[13]);var inst_159760 = (state_159802[2]);var inst_159761 = (inst_159746 + 1);var tmp159866 = inst_159745;var tmp159867 = inst_159744;var tmp159868 = inst_159743;var inst_159743__$1 = tmp159868;var inst_159744__$1 = tmp159867;var inst_159745__$1 = tmp159866;var inst_159746__$1 = inst_159761;var state_159802__$1 = (function (){var statearr_159873 = state_159802;(statearr_159873[30] = inst_159760);
(statearr_159873[10] = inst_159745__$1);
(statearr_159873[11] = inst_159746__$1);
(statearr_159873[12] = inst_159744__$1);
(statearr_159873[13] = inst_159743__$1);
return statearr_159873;
})();var statearr_159874_159931 = state_159802__$1;(statearr_159874_159931[2] = null);
(statearr_159874_159931[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_159803 === 31))
{var inst_159751 = (state_159802[7]);var inst_159752 = (state_159802[2]);var inst_159753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_159754 = cljs.core.async.untap_STAR_.call(null,m,inst_159751);var state_159802__$1 = (function (){var statearr_159875 = state_159802;(statearr_159875[31] = inst_159753);
(statearr_159875[32] = inst_159752);
return statearr_159875;
})();var statearr_159876_159932 = state_159802__$1;(statearr_159876_159932[2] = inst_159754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159802__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_159880 = (new Array(33));(statearr_159880[0] = state_machine__10214__auto__);
(statearr_159880[1] = 1);
return statearr_159880;
});
var state_machine__10214__auto____1 = (function (state_159802){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_159802);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e159881){if((e159881 instanceof Object))
{var ex__10217__auto__ = e159881;var statearr_159882_159933 = state_159802;(statearr_159882_159933[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_159802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e159881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__159934 = state_159802;
state_159802 = G__159934;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_159802){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_159802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_159883 = f__10284__auto__.call(null);(statearr_159883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___159884);
return statearr_159883;
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
cljs.core.async.Mix = (function (){var obj159936 = {};return obj159936;
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
;var m = (function (){if(typeof cljs.core.async.t160046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t160046 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta160047){
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
this.meta160047 = meta160047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t160046.cljs$lang$type = true;
cljs.core.async.t160046.cljs$lang$ctorStr = "cljs.core.async/t160046";
cljs.core.async.t160046.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t160046");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t160046.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t160046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_160048){var self__ = this;
var _160048__$1 = this;return self__.meta160047;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t160046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_160048,meta160047__$1){var self__ = this;
var _160048__$1 = this;return (new cljs.core.async.t160046(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta160047__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t160046 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t160046(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta160047){return (new cljs.core.async.t160046(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta160047));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t160046(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___160155 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_160113){var state_val_160114 = (state_160113[1]);if((state_val_160114 === 1))
{var inst_160052 = (state_160113[7]);var inst_160052__$1 = calc_state.call(null);var inst_160053 = cljs.core.seq_QMARK_.call(null,inst_160052__$1);var state_160113__$1 = (function (){var statearr_160115 = state_160113;(statearr_160115[7] = inst_160052__$1);
return statearr_160115;
})();if(inst_160053)
{var statearr_160116_160156 = state_160113__$1;(statearr_160116_160156[1] = 2);
} else
{var statearr_160117_160157 = state_160113__$1;(statearr_160117_160157[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 2))
{var inst_160052 = (state_160113[7]);var inst_160055 = cljs.core.apply.call(null,cljs.core.hash_map,inst_160052);var state_160113__$1 = state_160113;var statearr_160118_160158 = state_160113__$1;(statearr_160118_160158[2] = inst_160055);
(statearr_160118_160158[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 3))
{var inst_160052 = (state_160113[7]);var state_160113__$1 = state_160113;var statearr_160119_160159 = state_160113__$1;(statearr_160119_160159[2] = inst_160052);
(statearr_160119_160159[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 4))
{var inst_160052 = (state_160113[7]);var inst_160058 = (state_160113[2]);var inst_160059 = cljs.core.get.call(null,inst_160058,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_160060 = cljs.core.get.call(null,inst_160058,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_160061 = cljs.core.get.call(null,inst_160058,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_160062 = inst_160052;var state_160113__$1 = (function (){var statearr_160120 = state_160113;(statearr_160120[8] = inst_160062);
(statearr_160120[9] = inst_160061);
(statearr_160120[10] = inst_160060);
(statearr_160120[11] = inst_160059);
return statearr_160120;
})();var statearr_160121_160160 = state_160113__$1;(statearr_160121_160160[2] = null);
(statearr_160121_160160[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 5))
{var inst_160062 = (state_160113[8]);var inst_160065 = cljs.core.seq_QMARK_.call(null,inst_160062);var state_160113__$1 = state_160113;if(inst_160065)
{var statearr_160122_160161 = state_160113__$1;(statearr_160122_160161[1] = 7);
} else
{var statearr_160123_160162 = state_160113__$1;(statearr_160123_160162[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 6))
{var inst_160111 = (state_160113[2]);var state_160113__$1 = state_160113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160113__$1,inst_160111);
} else
{if((state_val_160114 === 7))
{var inst_160062 = (state_160113[8]);var inst_160067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_160062);var state_160113__$1 = state_160113;var statearr_160124_160163 = state_160113__$1;(statearr_160124_160163[2] = inst_160067);
(statearr_160124_160163[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 8))
{var inst_160062 = (state_160113[8]);var state_160113__$1 = state_160113;var statearr_160125_160164 = state_160113__$1;(statearr_160125_160164[2] = inst_160062);
(statearr_160125_160164[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 9))
{var inst_160070 = (state_160113[12]);var inst_160070__$1 = (state_160113[2]);var inst_160071 = cljs.core.get.call(null,inst_160070__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_160072 = cljs.core.get.call(null,inst_160070__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_160073 = cljs.core.get.call(null,inst_160070__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_160113__$1 = (function (){var statearr_160126 = state_160113;(statearr_160126[13] = inst_160073);
(statearr_160126[14] = inst_160072);
(statearr_160126[12] = inst_160070__$1);
return statearr_160126;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_160113__$1,10,inst_160071);
} else
{if((state_val_160114 === 10))
{var inst_160077 = (state_160113[15]);var inst_160078 = (state_160113[16]);var inst_160076 = (state_160113[2]);var inst_160077__$1 = cljs.core.nth.call(null,inst_160076,0,null);var inst_160078__$1 = cljs.core.nth.call(null,inst_160076,1,null);var inst_160079 = (inst_160077__$1 == null);var inst_160080 = cljs.core._EQ_.call(null,inst_160078__$1,change);var inst_160081 = (inst_160079) || (inst_160080);var state_160113__$1 = (function (){var statearr_160127 = state_160113;(statearr_160127[15] = inst_160077__$1);
(statearr_160127[16] = inst_160078__$1);
return statearr_160127;
})();if(cljs.core.truth_(inst_160081))
{var statearr_160128_160165 = state_160113__$1;(statearr_160128_160165[1] = 11);
} else
{var statearr_160129_160166 = state_160113__$1;(statearr_160129_160166[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 11))
{var inst_160077 = (state_160113[15]);var inst_160083 = (inst_160077 == null);var state_160113__$1 = state_160113;if(cljs.core.truth_(inst_160083))
{var statearr_160130_160167 = state_160113__$1;(statearr_160130_160167[1] = 14);
} else
{var statearr_160131_160168 = state_160113__$1;(statearr_160131_160168[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 12))
{var inst_160073 = (state_160113[13]);var inst_160092 = (state_160113[17]);var inst_160078 = (state_160113[16]);var inst_160092__$1 = inst_160073.call(null,inst_160078);var state_160113__$1 = (function (){var statearr_160132 = state_160113;(statearr_160132[17] = inst_160092__$1);
return statearr_160132;
})();if(cljs.core.truth_(inst_160092__$1))
{var statearr_160133_160169 = state_160113__$1;(statearr_160133_160169[1] = 17);
} else
{var statearr_160134_160170 = state_160113__$1;(statearr_160134_160170[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 13))
{var inst_160109 = (state_160113[2]);var state_160113__$1 = state_160113;var statearr_160135_160171 = state_160113__$1;(statearr_160135_160171[2] = inst_160109);
(statearr_160135_160171[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 14))
{var inst_160078 = (state_160113[16]);var inst_160085 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_160078);var state_160113__$1 = state_160113;var statearr_160136_160172 = state_160113__$1;(statearr_160136_160172[2] = inst_160085);
(statearr_160136_160172[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 15))
{var state_160113__$1 = state_160113;var statearr_160137_160173 = state_160113__$1;(statearr_160137_160173[2] = null);
(statearr_160137_160173[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 16))
{var inst_160088 = (state_160113[2]);var inst_160089 = calc_state.call(null);var inst_160062 = inst_160089;var state_160113__$1 = (function (){var statearr_160138 = state_160113;(statearr_160138[8] = inst_160062);
(statearr_160138[18] = inst_160088);
return statearr_160138;
})();var statearr_160139_160174 = state_160113__$1;(statearr_160139_160174[2] = null);
(statearr_160139_160174[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 17))
{var inst_160092 = (state_160113[17]);var state_160113__$1 = state_160113;var statearr_160140_160175 = state_160113__$1;(statearr_160140_160175[2] = inst_160092);
(statearr_160140_160175[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 18))
{var inst_160073 = (state_160113[13]);var inst_160072 = (state_160113[14]);var inst_160078 = (state_160113[16]);var inst_160095 = cljs.core.empty_QMARK_.call(null,inst_160073);var inst_160096 = inst_160072.call(null,inst_160078);var inst_160097 = cljs.core.not.call(null,inst_160096);var inst_160098 = (inst_160095) && (inst_160097);var state_160113__$1 = state_160113;var statearr_160141_160176 = state_160113__$1;(statearr_160141_160176[2] = inst_160098);
(statearr_160141_160176[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 19))
{var inst_160100 = (state_160113[2]);var state_160113__$1 = state_160113;if(cljs.core.truth_(inst_160100))
{var statearr_160142_160177 = state_160113__$1;(statearr_160142_160177[1] = 20);
} else
{var statearr_160143_160178 = state_160113__$1;(statearr_160143_160178[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 20))
{var inst_160077 = (state_160113[15]);var state_160113__$1 = state_160113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160113__$1,23,out,inst_160077);
} else
{if((state_val_160114 === 21))
{var state_160113__$1 = state_160113;var statearr_160144_160179 = state_160113__$1;(statearr_160144_160179[2] = null);
(statearr_160144_160179[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 22))
{var inst_160070 = (state_160113[12]);var inst_160106 = (state_160113[2]);var inst_160062 = inst_160070;var state_160113__$1 = (function (){var statearr_160145 = state_160113;(statearr_160145[8] = inst_160062);
(statearr_160145[19] = inst_160106);
return statearr_160145;
})();var statearr_160146_160180 = state_160113__$1;(statearr_160146_160180[2] = null);
(statearr_160146_160180[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160114 === 23))
{var inst_160103 = (state_160113[2]);var state_160113__$1 = state_160113;var statearr_160147_160181 = state_160113__$1;(statearr_160147_160181[2] = inst_160103);
(statearr_160147_160181[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_160151 = (new Array(20));(statearr_160151[0] = state_machine__10214__auto__);
(statearr_160151[1] = 1);
return statearr_160151;
});
var state_machine__10214__auto____1 = (function (state_160113){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_160113);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e160152){if((e160152 instanceof Object))
{var ex__10217__auto__ = e160152;var statearr_160153_160182 = state_160113;(statearr_160153_160182[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e160152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__160183 = state_160113;
state_160113 = G__160183;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_160113){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_160113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_160154 = f__10284__auto__.call(null);(statearr_160154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___160155);
return statearr_160154;
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
cljs.core.async.Pub = (function (){var obj160185 = {};return obj160185;
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
return (function (p1__160186_SHARP_){if(cljs.core.truth_(p1__160186_SHARP_.call(null,topic)))
{return p1__160186_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__160186_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t160311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t160311 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta160312){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta160312 = meta160312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t160311.cljs$lang$type = true;
cljs.core.async.t160311.cljs$lang$ctorStr = "cljs.core.async/t160311";
cljs.core.async.t160311.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t160311");
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t160311.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t160311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_160313){var self__ = this;
var _160313__$1 = this;return self__.meta160312;
});})(mults,ensure_mult))
;
cljs.core.async.t160311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_160313,meta160312__$1){var self__ = this;
var _160313__$1 = this;return (new cljs.core.async.t160311(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta160312__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t160311 = ((function (mults,ensure_mult){
return (function __GT_t160311(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta160312){return (new cljs.core.async.t160311(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta160312));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t160311(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___160435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_160387){var state_val_160388 = (state_160387[1]);if((state_val_160388 === 1))
{var state_160387__$1 = state_160387;var statearr_160389_160436 = state_160387__$1;(statearr_160389_160436[2] = null);
(statearr_160389_160436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 2))
{var state_160387__$1 = state_160387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160387__$1,4,ch);
} else
{if((state_val_160388 === 3))
{var inst_160385 = (state_160387[2]);var state_160387__$1 = state_160387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160387__$1,inst_160385);
} else
{if((state_val_160388 === 4))
{var inst_160316 = (state_160387[7]);var inst_160316__$1 = (state_160387[2]);var inst_160317 = (inst_160316__$1 == null);var state_160387__$1 = (function (){var statearr_160390 = state_160387;(statearr_160390[7] = inst_160316__$1);
return statearr_160390;
})();if(cljs.core.truth_(inst_160317))
{var statearr_160391_160437 = state_160387__$1;(statearr_160391_160437[1] = 5);
} else
{var statearr_160392_160438 = state_160387__$1;(statearr_160392_160438[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 5))
{var inst_160323 = cljs.core.deref.call(null,mults);var inst_160324 = cljs.core.vals.call(null,inst_160323);var inst_160325 = cljs.core.seq.call(null,inst_160324);var inst_160326 = inst_160325;var inst_160327 = null;var inst_160328 = 0;var inst_160329 = 0;var state_160387__$1 = (function (){var statearr_160393 = state_160387;(statearr_160393[8] = inst_160329);
(statearr_160393[9] = inst_160327);
(statearr_160393[10] = inst_160328);
(statearr_160393[11] = inst_160326);
return statearr_160393;
})();var statearr_160394_160439 = state_160387__$1;(statearr_160394_160439[2] = null);
(statearr_160394_160439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 6))
{var inst_160316 = (state_160387[7]);var inst_160366 = (state_160387[12]);var inst_160364 = (state_160387[13]);var inst_160364__$1 = topic_fn.call(null,inst_160316);var inst_160365 = cljs.core.deref.call(null,mults);var inst_160366__$1 = cljs.core.get.call(null,inst_160365,inst_160364__$1);var state_160387__$1 = (function (){var statearr_160395 = state_160387;(statearr_160395[12] = inst_160366__$1);
(statearr_160395[13] = inst_160364__$1);
return statearr_160395;
})();if(cljs.core.truth_(inst_160366__$1))
{var statearr_160396_160440 = state_160387__$1;(statearr_160396_160440[1] = 19);
} else
{var statearr_160397_160441 = state_160387__$1;(statearr_160397_160441[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 7))
{var inst_160383 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160398_160442 = state_160387__$1;(statearr_160398_160442[2] = inst_160383);
(statearr_160398_160442[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 8))
{var inst_160329 = (state_160387[8]);var inst_160328 = (state_160387[10]);var inst_160331 = (inst_160329 < inst_160328);var inst_160332 = inst_160331;var state_160387__$1 = state_160387;if(cljs.core.truth_(inst_160332))
{var statearr_160402_160443 = state_160387__$1;(statearr_160402_160443[1] = 10);
} else
{var statearr_160403_160444 = state_160387__$1;(statearr_160403_160444[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 9))
{var inst_160362 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160404_160445 = state_160387__$1;(statearr_160404_160445[2] = inst_160362);
(statearr_160404_160445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 10))
{var inst_160329 = (state_160387[8]);var inst_160327 = (state_160387[9]);var inst_160328 = (state_160387[10]);var inst_160326 = (state_160387[11]);var inst_160334 = cljs.core._nth.call(null,inst_160327,inst_160329);var inst_160335 = cljs.core.async.muxch_STAR_.call(null,inst_160334);var inst_160336 = cljs.core.async.close_BANG_.call(null,inst_160335);var inst_160337 = (inst_160329 + 1);var tmp160399 = inst_160327;var tmp160400 = inst_160328;var tmp160401 = inst_160326;var inst_160326__$1 = tmp160401;var inst_160327__$1 = tmp160399;var inst_160328__$1 = tmp160400;var inst_160329__$1 = inst_160337;var state_160387__$1 = (function (){var statearr_160405 = state_160387;(statearr_160405[8] = inst_160329__$1);
(statearr_160405[9] = inst_160327__$1);
(statearr_160405[10] = inst_160328__$1);
(statearr_160405[11] = inst_160326__$1);
(statearr_160405[14] = inst_160336);
return statearr_160405;
})();var statearr_160406_160446 = state_160387__$1;(statearr_160406_160446[2] = null);
(statearr_160406_160446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 11))
{var inst_160340 = (state_160387[15]);var inst_160326 = (state_160387[11]);var inst_160340__$1 = cljs.core.seq.call(null,inst_160326);var state_160387__$1 = (function (){var statearr_160407 = state_160387;(statearr_160407[15] = inst_160340__$1);
return statearr_160407;
})();if(inst_160340__$1)
{var statearr_160408_160447 = state_160387__$1;(statearr_160408_160447[1] = 13);
} else
{var statearr_160409_160448 = state_160387__$1;(statearr_160409_160448[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 12))
{var inst_160360 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160410_160449 = state_160387__$1;(statearr_160410_160449[2] = inst_160360);
(statearr_160410_160449[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 13))
{var inst_160340 = (state_160387[15]);var inst_160342 = cljs.core.chunked_seq_QMARK_.call(null,inst_160340);var state_160387__$1 = state_160387;if(inst_160342)
{var statearr_160411_160450 = state_160387__$1;(statearr_160411_160450[1] = 16);
} else
{var statearr_160412_160451 = state_160387__$1;(statearr_160412_160451[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 14))
{var state_160387__$1 = state_160387;var statearr_160413_160452 = state_160387__$1;(statearr_160413_160452[2] = null);
(statearr_160413_160452[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 15))
{var inst_160358 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160414_160453 = state_160387__$1;(statearr_160414_160453[2] = inst_160358);
(statearr_160414_160453[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 16))
{var inst_160340 = (state_160387[15]);var inst_160344 = cljs.core.chunk_first.call(null,inst_160340);var inst_160345 = cljs.core.chunk_rest.call(null,inst_160340);var inst_160346 = cljs.core.count.call(null,inst_160344);var inst_160326 = inst_160345;var inst_160327 = inst_160344;var inst_160328 = inst_160346;var inst_160329 = 0;var state_160387__$1 = (function (){var statearr_160415 = state_160387;(statearr_160415[8] = inst_160329);
(statearr_160415[9] = inst_160327);
(statearr_160415[10] = inst_160328);
(statearr_160415[11] = inst_160326);
return statearr_160415;
})();var statearr_160416_160454 = state_160387__$1;(statearr_160416_160454[2] = null);
(statearr_160416_160454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 17))
{var inst_160340 = (state_160387[15]);var inst_160349 = cljs.core.first.call(null,inst_160340);var inst_160350 = cljs.core.async.muxch_STAR_.call(null,inst_160349);var inst_160351 = cljs.core.async.close_BANG_.call(null,inst_160350);var inst_160352 = cljs.core.next.call(null,inst_160340);var inst_160326 = inst_160352;var inst_160327 = null;var inst_160328 = 0;var inst_160329 = 0;var state_160387__$1 = (function (){var statearr_160417 = state_160387;(statearr_160417[8] = inst_160329);
(statearr_160417[9] = inst_160327);
(statearr_160417[10] = inst_160328);
(statearr_160417[11] = inst_160326);
(statearr_160417[16] = inst_160351);
return statearr_160417;
})();var statearr_160418_160455 = state_160387__$1;(statearr_160418_160455[2] = null);
(statearr_160418_160455[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 18))
{var inst_160355 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160419_160456 = state_160387__$1;(statearr_160419_160456[2] = inst_160355);
(statearr_160419_160456[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 19))
{var state_160387__$1 = state_160387;var statearr_160420_160457 = state_160387__$1;(statearr_160420_160457[2] = null);
(statearr_160420_160457[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 20))
{var state_160387__$1 = state_160387;var statearr_160421_160458 = state_160387__$1;(statearr_160421_160458[2] = null);
(statearr_160421_160458[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 21))
{var inst_160380 = (state_160387[2]);var state_160387__$1 = (function (){var statearr_160422 = state_160387;(statearr_160422[17] = inst_160380);
return statearr_160422;
})();var statearr_160423_160459 = state_160387__$1;(statearr_160423_160459[2] = null);
(statearr_160423_160459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 22))
{var inst_160377 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160424_160460 = state_160387__$1;(statearr_160424_160460[2] = inst_160377);
(statearr_160424_160460[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 23))
{var inst_160364 = (state_160387[13]);var inst_160368 = (state_160387[2]);var inst_160369 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_160364);var state_160387__$1 = (function (){var statearr_160425 = state_160387;(statearr_160425[18] = inst_160368);
return statearr_160425;
})();var statearr_160426_160461 = state_160387__$1;(statearr_160426_160461[2] = inst_160369);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160387__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160388 === 24))
{var inst_160316 = (state_160387[7]);var inst_160366 = (state_160387[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_160387,23,Object,null,22);var inst_160373 = cljs.core.async.muxch_STAR_.call(null,inst_160366);var state_160387__$1 = state_160387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160387__$1,25,inst_160373,inst_160316);
} else
{if((state_val_160388 === 25))
{var inst_160375 = (state_160387[2]);var state_160387__$1 = state_160387;var statearr_160427_160462 = state_160387__$1;(statearr_160427_160462[2] = inst_160375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160387__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_160431 = (new Array(19));(statearr_160431[0] = state_machine__10214__auto__);
(statearr_160431[1] = 1);
return statearr_160431;
});
var state_machine__10214__auto____1 = (function (state_160387){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_160387);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e160432){if((e160432 instanceof Object))
{var ex__10217__auto__ = e160432;var statearr_160433_160463 = state_160387;(statearr_160433_160463[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e160432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__160464 = state_160387;
state_160387 = G__160464;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_160387){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_160387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_160434 = f__10284__auto__.call(null);(statearr_160434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___160435);
return statearr_160434;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___160601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_160571){var state_val_160572 = (state_160571[1]);if((state_val_160572 === 1))
{var state_160571__$1 = state_160571;var statearr_160573_160602 = state_160571__$1;(statearr_160573_160602[2] = null);
(statearr_160573_160602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 2))
{var inst_160534 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_160535 = 0;var state_160571__$1 = (function (){var statearr_160574 = state_160571;(statearr_160574[7] = inst_160534);
(statearr_160574[8] = inst_160535);
return statearr_160574;
})();var statearr_160575_160603 = state_160571__$1;(statearr_160575_160603[2] = null);
(statearr_160575_160603[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 3))
{var inst_160569 = (state_160571[2]);var state_160571__$1 = state_160571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160571__$1,inst_160569);
} else
{if((state_val_160572 === 4))
{var inst_160535 = (state_160571[8]);var inst_160537 = (inst_160535 < cnt);var state_160571__$1 = state_160571;if(cljs.core.truth_(inst_160537))
{var statearr_160576_160604 = state_160571__$1;(statearr_160576_160604[1] = 6);
} else
{var statearr_160577_160605 = state_160571__$1;(statearr_160577_160605[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 5))
{var inst_160555 = (state_160571[2]);var state_160571__$1 = (function (){var statearr_160578 = state_160571;(statearr_160578[9] = inst_160555);
return statearr_160578;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160571__$1,12,dchan);
} else
{if((state_val_160572 === 6))
{var state_160571__$1 = state_160571;var statearr_160579_160606 = state_160571__$1;(statearr_160579_160606[2] = null);
(statearr_160579_160606[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 7))
{var state_160571__$1 = state_160571;var statearr_160580_160607 = state_160571__$1;(statearr_160580_160607[2] = null);
(statearr_160580_160607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 8))
{var inst_160553 = (state_160571[2]);var state_160571__$1 = state_160571;var statearr_160581_160608 = state_160571__$1;(statearr_160581_160608[2] = inst_160553);
(statearr_160581_160608[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 9))
{var inst_160535 = (state_160571[8]);var inst_160548 = (state_160571[2]);var inst_160549 = (inst_160535 + 1);var inst_160535__$1 = inst_160549;var state_160571__$1 = (function (){var statearr_160582 = state_160571;(statearr_160582[8] = inst_160535__$1);
(statearr_160582[10] = inst_160548);
return statearr_160582;
})();var statearr_160583_160609 = state_160571__$1;(statearr_160583_160609[2] = null);
(statearr_160583_160609[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 10))
{var inst_160539 = (state_160571[2]);var inst_160540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_160571__$1 = (function (){var statearr_160584 = state_160571;(statearr_160584[11] = inst_160539);
return statearr_160584;
})();var statearr_160585_160610 = state_160571__$1;(statearr_160585_160610[2] = inst_160540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 11))
{var inst_160535 = (state_160571[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_160571,10,Object,null,9);var inst_160544 = chs__$1.call(null,inst_160535);var inst_160545 = done.call(null,inst_160535);var inst_160546 = cljs.core.async.take_BANG_.call(null,inst_160544,inst_160545);var state_160571__$1 = state_160571;var statearr_160586_160611 = state_160571__$1;(statearr_160586_160611[2] = inst_160546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 12))
{var inst_160557 = (state_160571[12]);var inst_160557__$1 = (state_160571[2]);var inst_160558 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_160557__$1);var state_160571__$1 = (function (){var statearr_160587 = state_160571;(statearr_160587[12] = inst_160557__$1);
return statearr_160587;
})();if(cljs.core.truth_(inst_160558))
{var statearr_160588_160612 = state_160571__$1;(statearr_160588_160612[1] = 13);
} else
{var statearr_160589_160613 = state_160571__$1;(statearr_160589_160613[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 13))
{var inst_160560 = cljs.core.async.close_BANG_.call(null,out);var state_160571__$1 = state_160571;var statearr_160590_160614 = state_160571__$1;(statearr_160590_160614[2] = inst_160560);
(statearr_160590_160614[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 14))
{var inst_160557 = (state_160571[12]);var inst_160562 = cljs.core.apply.call(null,f,inst_160557);var state_160571__$1 = state_160571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160571__$1,16,out,inst_160562);
} else
{if((state_val_160572 === 15))
{var inst_160567 = (state_160571[2]);var state_160571__$1 = state_160571;var statearr_160591_160615 = state_160571__$1;(statearr_160591_160615[2] = inst_160567);
(statearr_160591_160615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160572 === 16))
{var inst_160564 = (state_160571[2]);var state_160571__$1 = (function (){var statearr_160592 = state_160571;(statearr_160592[13] = inst_160564);
return statearr_160592;
})();var statearr_160593_160616 = state_160571__$1;(statearr_160593_160616[2] = null);
(statearr_160593_160616[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_160597 = (new Array(14));(statearr_160597[0] = state_machine__10214__auto__);
(statearr_160597[1] = 1);
return statearr_160597;
});
var state_machine__10214__auto____1 = (function (state_160571){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_160571);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e160598){if((e160598 instanceof Object))
{var ex__10217__auto__ = e160598;var statearr_160599_160617 = state_160571;(statearr_160599_160617[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e160598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__160618 = state_160571;
state_160571 = G__160618;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_160571){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_160571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_160600 = f__10284__auto__.call(null);(statearr_160600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___160601);
return statearr_160600;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___160726 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_160702){var state_val_160703 = (state_160702[1]);if((state_val_160703 === 1))
{var inst_160673 = cljs.core.vec.call(null,chs);var inst_160674 = inst_160673;var state_160702__$1 = (function (){var statearr_160704 = state_160702;(statearr_160704[7] = inst_160674);
return statearr_160704;
})();var statearr_160705_160727 = state_160702__$1;(statearr_160705_160727[2] = null);
(statearr_160705_160727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 2))
{var inst_160674 = (state_160702[7]);var inst_160676 = cljs.core.count.call(null,inst_160674);var inst_160677 = (inst_160676 > 0);var state_160702__$1 = state_160702;if(cljs.core.truth_(inst_160677))
{var statearr_160706_160728 = state_160702__$1;(statearr_160706_160728[1] = 4);
} else
{var statearr_160707_160729 = state_160702__$1;(statearr_160707_160729[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 3))
{var inst_160700 = (state_160702[2]);var state_160702__$1 = state_160702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160702__$1,inst_160700);
} else
{if((state_val_160703 === 4))
{var inst_160674 = (state_160702[7]);var state_160702__$1 = state_160702;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_160702__$1,7,inst_160674);
} else
{if((state_val_160703 === 5))
{var inst_160696 = cljs.core.async.close_BANG_.call(null,out);var state_160702__$1 = state_160702;var statearr_160708_160730 = state_160702__$1;(statearr_160708_160730[2] = inst_160696);
(statearr_160708_160730[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 6))
{var inst_160698 = (state_160702[2]);var state_160702__$1 = state_160702;var statearr_160709_160731 = state_160702__$1;(statearr_160709_160731[2] = inst_160698);
(statearr_160709_160731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 7))
{var inst_160681 = (state_160702[8]);var inst_160682 = (state_160702[9]);var inst_160681__$1 = (state_160702[2]);var inst_160682__$1 = cljs.core.nth.call(null,inst_160681__$1,0,null);var inst_160683 = cljs.core.nth.call(null,inst_160681__$1,1,null);var inst_160684 = (inst_160682__$1 == null);var state_160702__$1 = (function (){var statearr_160710 = state_160702;(statearr_160710[8] = inst_160681__$1);
(statearr_160710[9] = inst_160682__$1);
(statearr_160710[10] = inst_160683);
return statearr_160710;
})();if(cljs.core.truth_(inst_160684))
{var statearr_160711_160732 = state_160702__$1;(statearr_160711_160732[1] = 8);
} else
{var statearr_160712_160733 = state_160702__$1;(statearr_160712_160733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 8))
{var inst_160674 = (state_160702[7]);var inst_160681 = (state_160702[8]);var inst_160682 = (state_160702[9]);var inst_160683 = (state_160702[10]);var inst_160686 = (function (){var c = inst_160683;var v = inst_160682;var vec__160679 = inst_160681;var cs = inst_160674;return ((function (c,v,vec__160679,cs,inst_160674,inst_160681,inst_160682,inst_160683,state_val_160703){
return (function (p1__160619_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__160619_SHARP_);
});
;})(c,v,vec__160679,cs,inst_160674,inst_160681,inst_160682,inst_160683,state_val_160703))
})();var inst_160687 = cljs.core.filterv.call(null,inst_160686,inst_160674);var inst_160674__$1 = inst_160687;var state_160702__$1 = (function (){var statearr_160713 = state_160702;(statearr_160713[7] = inst_160674__$1);
return statearr_160713;
})();var statearr_160714_160734 = state_160702__$1;(statearr_160714_160734[2] = null);
(statearr_160714_160734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 9))
{var inst_160682 = (state_160702[9]);var state_160702__$1 = state_160702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160702__$1,11,out,inst_160682);
} else
{if((state_val_160703 === 10))
{var inst_160694 = (state_160702[2]);var state_160702__$1 = state_160702;var statearr_160716_160735 = state_160702__$1;(statearr_160716_160735[2] = inst_160694);
(statearr_160716_160735[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160703 === 11))
{var inst_160674 = (state_160702[7]);var inst_160691 = (state_160702[2]);var tmp160715 = inst_160674;var inst_160674__$1 = tmp160715;var state_160702__$1 = (function (){var statearr_160717 = state_160702;(statearr_160717[7] = inst_160674__$1);
(statearr_160717[11] = inst_160691);
return statearr_160717;
})();var statearr_160718_160736 = state_160702__$1;(statearr_160718_160736[2] = null);
(statearr_160718_160736[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_160722 = (new Array(12));(statearr_160722[0] = state_machine__10214__auto__);
(statearr_160722[1] = 1);
return statearr_160722;
});
var state_machine__10214__auto____1 = (function (state_160702){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_160702);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e160723){if((e160723 instanceof Object))
{var ex__10217__auto__ = e160723;var statearr_160724_160737 = state_160702;(statearr_160724_160737[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e160723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__160738 = state_160702;
state_160702 = G__160738;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_160702){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_160702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_160725 = f__10284__auto__.call(null);(statearr_160725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___160726);
return statearr_160725;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___160831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_160808){var state_val_160809 = (state_160808[1]);if((state_val_160809 === 1))
{var inst_160785 = 0;var state_160808__$1 = (function (){var statearr_160810 = state_160808;(statearr_160810[7] = inst_160785);
return statearr_160810;
})();var statearr_160811_160832 = state_160808__$1;(statearr_160811_160832[2] = null);
(statearr_160811_160832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 2))
{var inst_160785 = (state_160808[7]);var inst_160787 = (inst_160785 < n);var state_160808__$1 = state_160808;if(cljs.core.truth_(inst_160787))
{var statearr_160812_160833 = state_160808__$1;(statearr_160812_160833[1] = 4);
} else
{var statearr_160813_160834 = state_160808__$1;(statearr_160813_160834[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 3))
{var inst_160805 = (state_160808[2]);var inst_160806 = cljs.core.async.close_BANG_.call(null,out);var state_160808__$1 = (function (){var statearr_160814 = state_160808;(statearr_160814[8] = inst_160805);
return statearr_160814;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160808__$1,inst_160806);
} else
{if((state_val_160809 === 4))
{var state_160808__$1 = state_160808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160808__$1,7,ch);
} else
{if((state_val_160809 === 5))
{var state_160808__$1 = state_160808;var statearr_160815_160835 = state_160808__$1;(statearr_160815_160835[2] = null);
(statearr_160815_160835[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 6))
{var inst_160803 = (state_160808[2]);var state_160808__$1 = state_160808;var statearr_160816_160836 = state_160808__$1;(statearr_160816_160836[2] = inst_160803);
(statearr_160816_160836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 7))
{var inst_160790 = (state_160808[9]);var inst_160790__$1 = (state_160808[2]);var inst_160791 = (inst_160790__$1 == null);var inst_160792 = cljs.core.not.call(null,inst_160791);var state_160808__$1 = (function (){var statearr_160817 = state_160808;(statearr_160817[9] = inst_160790__$1);
return statearr_160817;
})();if(inst_160792)
{var statearr_160818_160837 = state_160808__$1;(statearr_160818_160837[1] = 8);
} else
{var statearr_160819_160838 = state_160808__$1;(statearr_160819_160838[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 8))
{var inst_160790 = (state_160808[9]);var state_160808__$1 = state_160808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160808__$1,11,out,inst_160790);
} else
{if((state_val_160809 === 9))
{var state_160808__$1 = state_160808;var statearr_160820_160839 = state_160808__$1;(statearr_160820_160839[2] = null);
(statearr_160820_160839[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 10))
{var inst_160800 = (state_160808[2]);var state_160808__$1 = state_160808;var statearr_160821_160840 = state_160808__$1;(statearr_160821_160840[2] = inst_160800);
(statearr_160821_160840[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160809 === 11))
{var inst_160785 = (state_160808[7]);var inst_160795 = (state_160808[2]);var inst_160796 = (inst_160785 + 1);var inst_160785__$1 = inst_160796;var state_160808__$1 = (function (){var statearr_160822 = state_160808;(statearr_160822[10] = inst_160795);
(statearr_160822[7] = inst_160785__$1);
return statearr_160822;
})();var statearr_160823_160841 = state_160808__$1;(statearr_160823_160841[2] = null);
(statearr_160823_160841[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_160827 = (new Array(11));(statearr_160827[0] = state_machine__10214__auto__);
(statearr_160827[1] = 1);
return statearr_160827;
});
var state_machine__10214__auto____1 = (function (state_160808){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_160808);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e160828){if((e160828 instanceof Object))
{var ex__10217__auto__ = e160828;var statearr_160829_160842 = state_160808;(statearr_160829_160842[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e160828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__160843 = state_160808;
state_160808 = G__160843;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_160808){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_160808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_160830 = f__10284__auto__.call(null);(statearr_160830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___160831);
return statearr_160830;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___160940 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_160915){var state_val_160916 = (state_160915[1]);if((state_val_160916 === 1))
{var inst_160892 = null;var state_160915__$1 = (function (){var statearr_160917 = state_160915;(statearr_160917[7] = inst_160892);
return statearr_160917;
})();var statearr_160918_160941 = state_160915__$1;(statearr_160918_160941[2] = null);
(statearr_160918_160941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 2))
{var state_160915__$1 = state_160915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_160915__$1,4,ch);
} else
{if((state_val_160916 === 3))
{var inst_160912 = (state_160915[2]);var inst_160913 = cljs.core.async.close_BANG_.call(null,out);var state_160915__$1 = (function (){var statearr_160919 = state_160915;(statearr_160919[8] = inst_160912);
return statearr_160919;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_160915__$1,inst_160913);
} else
{if((state_val_160916 === 4))
{var inst_160895 = (state_160915[9]);var inst_160895__$1 = (state_160915[2]);var inst_160896 = (inst_160895__$1 == null);var inst_160897 = cljs.core.not.call(null,inst_160896);var state_160915__$1 = (function (){var statearr_160920 = state_160915;(statearr_160920[9] = inst_160895__$1);
return statearr_160920;
})();if(inst_160897)
{var statearr_160921_160942 = state_160915__$1;(statearr_160921_160942[1] = 5);
} else
{var statearr_160922_160943 = state_160915__$1;(statearr_160922_160943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 5))
{var inst_160892 = (state_160915[7]);var inst_160895 = (state_160915[9]);var inst_160899 = cljs.core._EQ_.call(null,inst_160895,inst_160892);var state_160915__$1 = state_160915;if(inst_160899)
{var statearr_160923_160944 = state_160915__$1;(statearr_160923_160944[1] = 8);
} else
{var statearr_160924_160945 = state_160915__$1;(statearr_160924_160945[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 6))
{var state_160915__$1 = state_160915;var statearr_160926_160946 = state_160915__$1;(statearr_160926_160946[2] = null);
(statearr_160926_160946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 7))
{var inst_160910 = (state_160915[2]);var state_160915__$1 = state_160915;var statearr_160927_160947 = state_160915__$1;(statearr_160927_160947[2] = inst_160910);
(statearr_160927_160947[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 8))
{var inst_160892 = (state_160915[7]);var tmp160925 = inst_160892;var inst_160892__$1 = tmp160925;var state_160915__$1 = (function (){var statearr_160928 = state_160915;(statearr_160928[7] = inst_160892__$1);
return statearr_160928;
})();var statearr_160929_160948 = state_160915__$1;(statearr_160929_160948[2] = null);
(statearr_160929_160948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 9))
{var inst_160895 = (state_160915[9]);var state_160915__$1 = state_160915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_160915__$1,11,out,inst_160895);
} else
{if((state_val_160916 === 10))
{var inst_160907 = (state_160915[2]);var state_160915__$1 = state_160915;var statearr_160930_160949 = state_160915__$1;(statearr_160930_160949[2] = inst_160907);
(statearr_160930_160949[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_160916 === 11))
{var inst_160895 = (state_160915[9]);var inst_160904 = (state_160915[2]);var inst_160892 = inst_160895;var state_160915__$1 = (function (){var statearr_160931 = state_160915;(statearr_160931[7] = inst_160892);
(statearr_160931[10] = inst_160904);
return statearr_160931;
})();var statearr_160932_160950 = state_160915__$1;(statearr_160932_160950[2] = null);
(statearr_160932_160950[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_160936 = (new Array(11));(statearr_160936[0] = state_machine__10214__auto__);
(statearr_160936[1] = 1);
return statearr_160936;
});
var state_machine__10214__auto____1 = (function (state_160915){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_160915);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e160937){if((e160937 instanceof Object))
{var ex__10217__auto__ = e160937;var statearr_160938_160951 = state_160915;(statearr_160938_160951[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_160915);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e160937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__160952 = state_160915;
state_160915 = G__160952;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_160915){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_160915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_160939 = f__10284__auto__.call(null);(statearr_160939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___160940);
return statearr_160939;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___161087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_161057){var state_val_161058 = (state_161057[1]);if((state_val_161058 === 1))
{var inst_161020 = (new Array(n));var inst_161021 = inst_161020;var inst_161022 = 0;var state_161057__$1 = (function (){var statearr_161059 = state_161057;(statearr_161059[7] = inst_161021);
(statearr_161059[8] = inst_161022);
return statearr_161059;
})();var statearr_161060_161088 = state_161057__$1;(statearr_161060_161088[2] = null);
(statearr_161060_161088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 2))
{var state_161057__$1 = state_161057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161057__$1,4,ch);
} else
{if((state_val_161058 === 3))
{var inst_161055 = (state_161057[2]);var state_161057__$1 = state_161057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161057__$1,inst_161055);
} else
{if((state_val_161058 === 4))
{var inst_161025 = (state_161057[9]);var inst_161025__$1 = (state_161057[2]);var inst_161026 = (inst_161025__$1 == null);var inst_161027 = cljs.core.not.call(null,inst_161026);var state_161057__$1 = (function (){var statearr_161061 = state_161057;(statearr_161061[9] = inst_161025__$1);
return statearr_161061;
})();if(inst_161027)
{var statearr_161062_161089 = state_161057__$1;(statearr_161062_161089[1] = 5);
} else
{var statearr_161063_161090 = state_161057__$1;(statearr_161063_161090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 5))
{var inst_161021 = (state_161057[7]);var inst_161030 = (state_161057[10]);var inst_161022 = (state_161057[8]);var inst_161025 = (state_161057[9]);var inst_161029 = (inst_161021[inst_161022] = inst_161025);var inst_161030__$1 = (inst_161022 + 1);var inst_161031 = (inst_161030__$1 < n);var state_161057__$1 = (function (){var statearr_161064 = state_161057;(statearr_161064[10] = inst_161030__$1);
(statearr_161064[11] = inst_161029);
return statearr_161064;
})();if(cljs.core.truth_(inst_161031))
{var statearr_161065_161091 = state_161057__$1;(statearr_161065_161091[1] = 8);
} else
{var statearr_161066_161092 = state_161057__$1;(statearr_161066_161092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 6))
{var inst_161022 = (state_161057[8]);var inst_161043 = (inst_161022 > 0);var state_161057__$1 = state_161057;if(cljs.core.truth_(inst_161043))
{var statearr_161068_161093 = state_161057__$1;(statearr_161068_161093[1] = 12);
} else
{var statearr_161069_161094 = state_161057__$1;(statearr_161069_161094[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 7))
{var inst_161053 = (state_161057[2]);var state_161057__$1 = state_161057;var statearr_161070_161095 = state_161057__$1;(statearr_161070_161095[2] = inst_161053);
(statearr_161070_161095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 8))
{var inst_161021 = (state_161057[7]);var inst_161030 = (state_161057[10]);var tmp161067 = inst_161021;var inst_161021__$1 = tmp161067;var inst_161022 = inst_161030;var state_161057__$1 = (function (){var statearr_161071 = state_161057;(statearr_161071[7] = inst_161021__$1);
(statearr_161071[8] = inst_161022);
return statearr_161071;
})();var statearr_161072_161096 = state_161057__$1;(statearr_161072_161096[2] = null);
(statearr_161072_161096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 9))
{var inst_161021 = (state_161057[7]);var inst_161035 = cljs.core.vec.call(null,inst_161021);var state_161057__$1 = state_161057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161057__$1,11,out,inst_161035);
} else
{if((state_val_161058 === 10))
{var inst_161041 = (state_161057[2]);var state_161057__$1 = state_161057;var statearr_161073_161097 = state_161057__$1;(statearr_161073_161097[2] = inst_161041);
(statearr_161073_161097[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 11))
{var inst_161037 = (state_161057[2]);var inst_161038 = (new Array(n));var inst_161021 = inst_161038;var inst_161022 = 0;var state_161057__$1 = (function (){var statearr_161074 = state_161057;(statearr_161074[7] = inst_161021);
(statearr_161074[8] = inst_161022);
(statearr_161074[12] = inst_161037);
return statearr_161074;
})();var statearr_161075_161098 = state_161057__$1;(statearr_161075_161098[2] = null);
(statearr_161075_161098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 12))
{var inst_161021 = (state_161057[7]);var inst_161045 = cljs.core.vec.call(null,inst_161021);var state_161057__$1 = state_161057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161057__$1,15,out,inst_161045);
} else
{if((state_val_161058 === 13))
{var state_161057__$1 = state_161057;var statearr_161076_161099 = state_161057__$1;(statearr_161076_161099[2] = null);
(statearr_161076_161099[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 14))
{var inst_161050 = (state_161057[2]);var inst_161051 = cljs.core.async.close_BANG_.call(null,out);var state_161057__$1 = (function (){var statearr_161077 = state_161057;(statearr_161077[13] = inst_161050);
return statearr_161077;
})();var statearr_161078_161100 = state_161057__$1;(statearr_161078_161100[2] = inst_161051);
(statearr_161078_161100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161058 === 15))
{var inst_161047 = (state_161057[2]);var state_161057__$1 = state_161057;var statearr_161079_161101 = state_161057__$1;(statearr_161079_161101[2] = inst_161047);
(statearr_161079_161101[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_161083 = (new Array(14));(statearr_161083[0] = state_machine__10214__auto__);
(statearr_161083[1] = 1);
return statearr_161083;
});
var state_machine__10214__auto____1 = (function (state_161057){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_161057);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e161084){if((e161084 instanceof Object))
{var ex__10217__auto__ = e161084;var statearr_161085_161102 = state_161057;(statearr_161085_161102[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e161084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__161103 = state_161057;
state_161057 = G__161103;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_161057){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_161057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_161086 = f__10284__auto__.call(null);(statearr_161086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___161087);
return statearr_161086;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___161246 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_161216){var state_val_161217 = (state_161216[1]);if((state_val_161217 === 1))
{var inst_161175 = (new Array(0));var inst_161176 = inst_161175;var inst_161177 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_161216__$1 = (function (){var statearr_161218 = state_161216;(statearr_161218[7] = inst_161176);
(statearr_161218[8] = inst_161177);
return statearr_161218;
})();var statearr_161219_161247 = state_161216__$1;(statearr_161219_161247[2] = null);
(statearr_161219_161247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 2))
{var state_161216__$1 = state_161216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_161216__$1,4,ch);
} else
{if((state_val_161217 === 3))
{var inst_161214 = (state_161216[2]);var state_161216__$1 = state_161216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_161216__$1,inst_161214);
} else
{if((state_val_161217 === 4))
{var inst_161180 = (state_161216[9]);var inst_161180__$1 = (state_161216[2]);var inst_161181 = (inst_161180__$1 == null);var inst_161182 = cljs.core.not.call(null,inst_161181);var state_161216__$1 = (function (){var statearr_161220 = state_161216;(statearr_161220[9] = inst_161180__$1);
return statearr_161220;
})();if(inst_161182)
{var statearr_161221_161248 = state_161216__$1;(statearr_161221_161248[1] = 5);
} else
{var statearr_161222_161249 = state_161216__$1;(statearr_161222_161249[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 5))
{var inst_161184 = (state_161216[10]);var inst_161177 = (state_161216[8]);var inst_161180 = (state_161216[9]);var inst_161184__$1 = f.call(null,inst_161180);var inst_161185 = cljs.core._EQ_.call(null,inst_161184__$1,inst_161177);var inst_161186 = cljs.core.keyword_identical_QMARK_.call(null,inst_161177,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_161187 = (inst_161185) || (inst_161186);var state_161216__$1 = (function (){var statearr_161223 = state_161216;(statearr_161223[10] = inst_161184__$1);
return statearr_161223;
})();if(cljs.core.truth_(inst_161187))
{var statearr_161224_161250 = state_161216__$1;(statearr_161224_161250[1] = 8);
} else
{var statearr_161225_161251 = state_161216__$1;(statearr_161225_161251[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 6))
{var inst_161176 = (state_161216[7]);var inst_161201 = inst_161176.length;var inst_161202 = (inst_161201 > 0);var state_161216__$1 = state_161216;if(cljs.core.truth_(inst_161202))
{var statearr_161227_161252 = state_161216__$1;(statearr_161227_161252[1] = 12);
} else
{var statearr_161228_161253 = state_161216__$1;(statearr_161228_161253[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 7))
{var inst_161212 = (state_161216[2]);var state_161216__$1 = state_161216;var statearr_161229_161254 = state_161216__$1;(statearr_161229_161254[2] = inst_161212);
(statearr_161229_161254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 8))
{var inst_161176 = (state_161216[7]);var inst_161184 = (state_161216[10]);var inst_161180 = (state_161216[9]);var inst_161189 = inst_161176.push(inst_161180);var tmp161226 = inst_161176;var inst_161176__$1 = tmp161226;var inst_161177 = inst_161184;var state_161216__$1 = (function (){var statearr_161230 = state_161216;(statearr_161230[11] = inst_161189);
(statearr_161230[7] = inst_161176__$1);
(statearr_161230[8] = inst_161177);
return statearr_161230;
})();var statearr_161231_161255 = state_161216__$1;(statearr_161231_161255[2] = null);
(statearr_161231_161255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 9))
{var inst_161176 = (state_161216[7]);var inst_161192 = cljs.core.vec.call(null,inst_161176);var state_161216__$1 = state_161216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161216__$1,11,out,inst_161192);
} else
{if((state_val_161217 === 10))
{var inst_161199 = (state_161216[2]);var state_161216__$1 = state_161216;var statearr_161232_161256 = state_161216__$1;(statearr_161232_161256[2] = inst_161199);
(statearr_161232_161256[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 11))
{var inst_161184 = (state_161216[10]);var inst_161180 = (state_161216[9]);var inst_161194 = (state_161216[2]);var inst_161195 = (new Array(0));var inst_161196 = inst_161195.push(inst_161180);var inst_161176 = inst_161195;var inst_161177 = inst_161184;var state_161216__$1 = (function (){var statearr_161233 = state_161216;(statearr_161233[12] = inst_161196);
(statearr_161233[13] = inst_161194);
(statearr_161233[7] = inst_161176);
(statearr_161233[8] = inst_161177);
return statearr_161233;
})();var statearr_161234_161257 = state_161216__$1;(statearr_161234_161257[2] = null);
(statearr_161234_161257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 12))
{var inst_161176 = (state_161216[7]);var inst_161204 = cljs.core.vec.call(null,inst_161176);var state_161216__$1 = state_161216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_161216__$1,15,out,inst_161204);
} else
{if((state_val_161217 === 13))
{var state_161216__$1 = state_161216;var statearr_161235_161258 = state_161216__$1;(statearr_161235_161258[2] = null);
(statearr_161235_161258[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 14))
{var inst_161209 = (state_161216[2]);var inst_161210 = cljs.core.async.close_BANG_.call(null,out);var state_161216__$1 = (function (){var statearr_161236 = state_161216;(statearr_161236[14] = inst_161209);
return statearr_161236;
})();var statearr_161237_161259 = state_161216__$1;(statearr_161237_161259[2] = inst_161210);
(statearr_161237_161259[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_161217 === 15))
{var inst_161206 = (state_161216[2]);var state_161216__$1 = state_161216;var statearr_161238_161260 = state_161216__$1;(statearr_161238_161260[2] = inst_161206);
(statearr_161238_161260[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_161242 = (new Array(15));(statearr_161242[0] = state_machine__10214__auto__);
(statearr_161242[1] = 1);
return statearr_161242;
});
var state_machine__10214__auto____1 = (function (state_161216){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_161216);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e161243){if((e161243 instanceof Object))
{var ex__10217__auto__ = e161243;var statearr_161244_161261 = state_161216;(statearr_161244_161261[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_161216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e161243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__161262 = state_161216;
state_161216 = G__161262;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_161216){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_161216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_161245 = f__10284__auto__.call(null);(statearr_161245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___161246);
return statearr_161245;
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