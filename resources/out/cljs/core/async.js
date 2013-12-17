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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t381573 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381573 = (function (f,fn_handler,meta381574){
this.f = f;
this.fn_handler = fn_handler;
this.meta381574 = meta381574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381573.cljs$lang$type = true;
cljs.core.async.t381573.cljs$lang$ctorStr = "cljs.core.async/t381573";
cljs.core.async.t381573.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381573");
});
cljs.core.async.t381573.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t381573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t381573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t381573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381575){var self__ = this;
var _381575__$1 = this;return self__.meta381574;
});
cljs.core.async.t381573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381575,meta381574__$1){var self__ = this;
var _381575__$1 = this;return (new cljs.core.async.t381573(self__.f,self__.fn_handler,meta381574__$1));
});
cljs.core.async.__GT_t381573 = (function __GT_t381573(f__$1,fn_handler__$1,meta381574){return (new cljs.core.async.t381573(f__$1,fn_handler__$1,meta381574));
});
}
return (new cljs.core.async.t381573(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__381577 = buff;if(G__381577)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__381577.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__381577.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__381577);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__381577);
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
{var val_381578 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_381578);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_381578);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13967__auto__ = ret;if(cljs.core.truth_(and__13967__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13967__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14807__auto___381579 = n;var x_381580 = 0;while(true){
if((x_381580 < n__14807__auto___381579))
{(a[x_381580] = 0);
{
var G__381581 = (x_381580 + 1);
x_381580 = G__381581;
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
var G__381582 = (i + 1);
i = G__381582;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t381586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381586 = (function (flag,alt_flag,meta381587){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta381587 = meta381587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381586.cljs$lang$type = true;
cljs.core.async.t381586.cljs$lang$ctorStr = "cljs.core.async/t381586";
cljs.core.async.t381586.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381586");
});
cljs.core.async.t381586.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t381586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t381586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t381586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381588){var self__ = this;
var _381588__$1 = this;return self__.meta381587;
});
cljs.core.async.t381586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381588,meta381587__$1){var self__ = this;
var _381588__$1 = this;return (new cljs.core.async.t381586(self__.flag,self__.alt_flag,meta381587__$1));
});
cljs.core.async.__GT_t381586 = (function __GT_t381586(flag__$1,alt_flag__$1,meta381587){return (new cljs.core.async.t381586(flag__$1,alt_flag__$1,meta381587));
});
}
return (new cljs.core.async.t381586(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t381592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381592 = (function (cb,flag,alt_handler,meta381593){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta381593 = meta381593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381592.cljs$lang$type = true;
cljs.core.async.t381592.cljs$lang$ctorStr = "cljs.core.async/t381592";
cljs.core.async.t381592.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381592");
});
cljs.core.async.t381592.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t381592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t381592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t381592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381594){var self__ = this;
var _381594__$1 = this;return self__.meta381593;
});
cljs.core.async.t381592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381594,meta381593__$1){var self__ = this;
var _381594__$1 = this;return (new cljs.core.async.t381592(self__.cb,self__.flag,self__.alt_handler,meta381593__$1));
});
cljs.core.async.__GT_t381592 = (function __GT_t381592(cb__$1,flag__$1,alt_handler__$1,meta381593){return (new cljs.core.async.t381592(cb__$1,flag__$1,alt_handler__$1,meta381593));
});
}
return (new cljs.core.async.t381592(cb,flag,alt_handler,null));
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
return (function (p1__381595_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__381595_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13979__auto__ = wport;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__381596 = (i + 1);
i = G__381596;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13979__auto__ = ret;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13967__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13967__auto__;
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
var alts_BANG___delegate = function (ports,p__381597){var map__381599 = p__381597;var map__381599__$1 = ((cljs.core.seq_QMARK_.call(null,map__381599))?cljs.core.apply.call(null,cljs.core.hash_map,map__381599):map__381599);var opts = map__381599__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__381597 = null;if (arguments.length > 1) {
  p__381597 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__381597);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__381600){
var ports = cljs.core.first(arglist__381600);
var p__381597 = cljs.core.rest(arglist__381600);
return alts_BANG___delegate(ports,p__381597);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t381608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381608 = (function (ch,f,map_LT_,meta381609){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta381609 = meta381609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381608.cljs$lang$type = true;
cljs.core.async.t381608.cljs$lang$ctorStr = "cljs.core.async/t381608";
cljs.core.async.t381608.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381608");
});
cljs.core.async.t381608.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t381608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t381608.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t381608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t381611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381611 = (function (fn1,_,meta381609,ch,f,map_LT_,meta381612){
this.fn1 = fn1;
this._ = _;
this.meta381609 = meta381609;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta381612 = meta381612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381611.cljs$lang$type = true;
cljs.core.async.t381611.cljs$lang$ctorStr = "cljs.core.async/t381611";
cljs.core.async.t381611.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381611");
});
cljs.core.async.t381611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t381611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t381611.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t381611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__381601_SHARP_){return f1.call(null,(((p1__381601_SHARP_ == null))?null:self__.f.call(null,p1__381601_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t381611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381613){var self__ = this;
var _381613__$1 = this;return self__.meta381612;
});
cljs.core.async.t381611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381613,meta381612__$1){var self__ = this;
var _381613__$1 = this;return (new cljs.core.async.t381611(self__.fn1,self__._,self__.meta381609,self__.ch,self__.f,self__.map_LT_,meta381612__$1));
});
cljs.core.async.__GT_t381611 = (function __GT_t381611(fn1__$1,___$2,meta381609__$1,ch__$2,f__$2,map_LT___$2,meta381612){return (new cljs.core.async.t381611(fn1__$1,___$2,meta381609__$1,ch__$2,f__$2,map_LT___$2,meta381612));
});
}
return (new cljs.core.async.t381611(fn1,___$1,self__.meta381609,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13967__auto__ = ret;if(cljs.core.truth_(and__13967__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13967__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t381608.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t381608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t381608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381610){var self__ = this;
var _381610__$1 = this;return self__.meta381609;
});
cljs.core.async.t381608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381610,meta381609__$1){var self__ = this;
var _381610__$1 = this;return (new cljs.core.async.t381608(self__.ch,self__.f,self__.map_LT_,meta381609__$1));
});
cljs.core.async.__GT_t381608 = (function __GT_t381608(ch__$1,f__$1,map_LT___$1,meta381609){return (new cljs.core.async.t381608(ch__$1,f__$1,map_LT___$1,meta381609));
});
}
return (new cljs.core.async.t381608(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t381617 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381617 = (function (ch,f,map_GT_,meta381618){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta381618 = meta381618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381617.cljs$lang$type = true;
cljs.core.async.t381617.cljs$lang$ctorStr = "cljs.core.async/t381617";
cljs.core.async.t381617.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381617");
});
cljs.core.async.t381617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t381617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t381617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t381617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t381617.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t381617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t381617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381619){var self__ = this;
var _381619__$1 = this;return self__.meta381618;
});
cljs.core.async.t381617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381619,meta381618__$1){var self__ = this;
var _381619__$1 = this;return (new cljs.core.async.t381617(self__.ch,self__.f,self__.map_GT_,meta381618__$1));
});
cljs.core.async.__GT_t381617 = (function __GT_t381617(ch__$1,f__$1,map_GT___$1,meta381618){return (new cljs.core.async.t381617(ch__$1,f__$1,map_GT___$1,meta381618));
});
}
return (new cljs.core.async.t381617(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t381623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t381623 = (function (ch,p,filter_GT_,meta381624){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta381624 = meta381624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t381623.cljs$lang$type = true;
cljs.core.async.t381623.cljs$lang$ctorStr = "cljs.core.async/t381623";
cljs.core.async.t381623.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t381623");
});
cljs.core.async.t381623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t381623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t381623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t381623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t381623.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t381623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t381623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_381625){var self__ = this;
var _381625__$1 = this;return self__.meta381624;
});
cljs.core.async.t381623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_381625,meta381624__$1){var self__ = this;
var _381625__$1 = this;return (new cljs.core.async.t381623(self__.ch,self__.p,self__.filter_GT_,meta381624__$1));
});
cljs.core.async.__GT_t381623 = (function __GT_t381623(ch__$1,p__$1,filter_GT___$1,meta381624){return (new cljs.core.async.t381623(ch__$1,p__$1,filter_GT___$1,meta381624));
});
}
return (new cljs.core.async.t381623(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___381708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_381687){var state_val_381688 = (state_381687[1]);if((state_val_381688 === 1))
{var state_381687__$1 = state_381687;var statearr_381689_381709 = state_381687__$1;(statearr_381689_381709[2] = null);
(statearr_381689_381709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 2))
{var state_381687__$1 = state_381687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_381687__$1,4,ch);
} else
{if((state_val_381688 === 3))
{var inst_381685 = (state_381687[2]);var state_381687__$1 = state_381687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_381687__$1,inst_381685);
} else
{if((state_val_381688 === 4))
{var inst_381669 = (state_381687[7]);var inst_381669__$1 = (state_381687[2]);var inst_381670 = (inst_381669__$1 == null);var state_381687__$1 = (function (){var statearr_381690 = state_381687;(statearr_381690[7] = inst_381669__$1);
return statearr_381690;
})();if(cljs.core.truth_(inst_381670))
{var statearr_381691_381710 = state_381687__$1;(statearr_381691_381710[1] = 5);
} else
{var statearr_381692_381711 = state_381687__$1;(statearr_381692_381711[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 5))
{var inst_381672 = cljs.core.async.close_BANG_.call(null,out);var state_381687__$1 = state_381687;var statearr_381693_381712 = state_381687__$1;(statearr_381693_381712[2] = inst_381672);
(statearr_381693_381712[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 6))
{var inst_381669 = (state_381687[7]);var inst_381674 = p.call(null,inst_381669);var state_381687__$1 = state_381687;if(cljs.core.truth_(inst_381674))
{var statearr_381694_381713 = state_381687__$1;(statearr_381694_381713[1] = 8);
} else
{var statearr_381695_381714 = state_381687__$1;(statearr_381695_381714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 7))
{var inst_381683 = (state_381687[2]);var state_381687__$1 = state_381687;var statearr_381696_381715 = state_381687__$1;(statearr_381696_381715[2] = inst_381683);
(statearr_381696_381715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 8))
{var inst_381669 = (state_381687[7]);var state_381687__$1 = state_381687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_381687__$1,11,out,inst_381669);
} else
{if((state_val_381688 === 9))
{var state_381687__$1 = state_381687;var statearr_381697_381716 = state_381687__$1;(statearr_381697_381716[2] = null);
(statearr_381697_381716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 10))
{var inst_381680 = (state_381687[2]);var state_381687__$1 = (function (){var statearr_381698 = state_381687;(statearr_381698[8] = inst_381680);
return statearr_381698;
})();var statearr_381699_381717 = state_381687__$1;(statearr_381699_381717[2] = null);
(statearr_381699_381717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381688 === 11))
{var inst_381677 = (state_381687[2]);var state_381687__$1 = state_381687;var statearr_381700_381718 = state_381687__$1;(statearr_381700_381718[2] = inst_381677);
(statearr_381700_381718[1] = 10);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_381704 = [null,null,null,null,null,null,null,null,null];(statearr_381704[0] = state_machine__18220__auto__);
(statearr_381704[1] = 1);
return statearr_381704;
});
var state_machine__18220__auto____1 = (function (state_381687){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_381687);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e381705){if((e381705 instanceof Object))
{var ex__18223__auto__ = e381705;var statearr_381706_381719 = state_381687;(statearr_381706_381719[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_381687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e381705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__381720 = state_381687;
state_381687 = G__381720;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_381687){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_381687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_381707 = f__18290__auto__.call(null);(statearr_381707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___381708);
return statearr_381707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_381872){var state_val_381873 = (state_381872[1]);if((state_val_381873 === 1))
{var state_381872__$1 = state_381872;var statearr_381874_381911 = state_381872__$1;(statearr_381874_381911[2] = null);
(statearr_381874_381911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 2))
{var state_381872__$1 = state_381872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_381872__$1,4,in$);
} else
{if((state_val_381873 === 3))
{var inst_381870 = (state_381872[2]);var state_381872__$1 = state_381872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_381872__$1,inst_381870);
} else
{if((state_val_381873 === 4))
{var inst_381818 = (state_381872[7]);var inst_381818__$1 = (state_381872[2]);var inst_381819 = (inst_381818__$1 == null);var state_381872__$1 = (function (){var statearr_381875 = state_381872;(statearr_381875[7] = inst_381818__$1);
return statearr_381875;
})();if(cljs.core.truth_(inst_381819))
{var statearr_381876_381912 = state_381872__$1;(statearr_381876_381912[1] = 5);
} else
{var statearr_381877_381913 = state_381872__$1;(statearr_381877_381913[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 5))
{var inst_381821 = cljs.core.async.close_BANG_.call(null,out);var state_381872__$1 = state_381872;var statearr_381878_381914 = state_381872__$1;(statearr_381878_381914[2] = inst_381821);
(statearr_381878_381914[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 6))
{var inst_381818 = (state_381872[7]);var inst_381823 = f.call(null,inst_381818);var inst_381828 = cljs.core.seq.call(null,inst_381823);var inst_381829 = inst_381828;var inst_381830 = null;var inst_381831 = 0;var inst_381832 = 0;var state_381872__$1 = (function (){var statearr_381879 = state_381872;(statearr_381879[8] = inst_381829);
(statearr_381879[9] = inst_381831);
(statearr_381879[10] = inst_381830);
(statearr_381879[11] = inst_381832);
return statearr_381879;
})();var statearr_381880_381915 = state_381872__$1;(statearr_381880_381915[2] = null);
(statearr_381880_381915[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 7))
{var inst_381868 = (state_381872[2]);var state_381872__$1 = state_381872;var statearr_381881_381916 = state_381872__$1;(statearr_381881_381916[2] = inst_381868);
(statearr_381881_381916[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 8))
{var inst_381831 = (state_381872[9]);var inst_381832 = (state_381872[11]);var inst_381834 = (inst_381832 < inst_381831);var inst_381835 = inst_381834;var state_381872__$1 = state_381872;if(cljs.core.truth_(inst_381835))
{var statearr_381882_381917 = state_381872__$1;(statearr_381882_381917[1] = 10);
} else
{var statearr_381883_381918 = state_381872__$1;(statearr_381883_381918[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 9))
{var inst_381865 = (state_381872[2]);var state_381872__$1 = (function (){var statearr_381884 = state_381872;(statearr_381884[12] = inst_381865);
return statearr_381884;
})();var statearr_381885_381919 = state_381872__$1;(statearr_381885_381919[2] = null);
(statearr_381885_381919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 10))
{var inst_381830 = (state_381872[10]);var inst_381832 = (state_381872[11]);var inst_381837 = cljs.core._nth.call(null,inst_381830,inst_381832);var state_381872__$1 = state_381872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_381872__$1,13,out,inst_381837);
} else
{if((state_val_381873 === 11))
{var inst_381829 = (state_381872[8]);var inst_381843 = (state_381872[13]);var inst_381843__$1 = cljs.core.seq.call(null,inst_381829);var state_381872__$1 = (function (){var statearr_381889 = state_381872;(statearr_381889[13] = inst_381843__$1);
return statearr_381889;
})();if(inst_381843__$1)
{var statearr_381890_381920 = state_381872__$1;(statearr_381890_381920[1] = 14);
} else
{var statearr_381891_381921 = state_381872__$1;(statearr_381891_381921[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 12))
{var inst_381863 = (state_381872[2]);var state_381872__$1 = state_381872;var statearr_381892_381922 = state_381872__$1;(statearr_381892_381922[2] = inst_381863);
(statearr_381892_381922[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 13))
{var inst_381829 = (state_381872[8]);var inst_381831 = (state_381872[9]);var inst_381830 = (state_381872[10]);var inst_381832 = (state_381872[11]);var inst_381839 = (state_381872[2]);var inst_381840 = (inst_381832 + 1);var tmp381886 = inst_381829;var tmp381887 = inst_381831;var tmp381888 = inst_381830;var inst_381829__$1 = tmp381886;var inst_381830__$1 = tmp381888;var inst_381831__$1 = tmp381887;var inst_381832__$1 = inst_381840;var state_381872__$1 = (function (){var statearr_381893 = state_381872;(statearr_381893[14] = inst_381839);
(statearr_381893[8] = inst_381829__$1);
(statearr_381893[9] = inst_381831__$1);
(statearr_381893[10] = inst_381830__$1);
(statearr_381893[11] = inst_381832__$1);
return statearr_381893;
})();var statearr_381894_381923 = state_381872__$1;(statearr_381894_381923[2] = null);
(statearr_381894_381923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 14))
{var inst_381843 = (state_381872[13]);var inst_381845 = cljs.core.chunked_seq_QMARK_.call(null,inst_381843);var state_381872__$1 = state_381872;if(inst_381845)
{var statearr_381895_381924 = state_381872__$1;(statearr_381895_381924[1] = 17);
} else
{var statearr_381896_381925 = state_381872__$1;(statearr_381896_381925[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 15))
{var state_381872__$1 = state_381872;var statearr_381897_381926 = state_381872__$1;(statearr_381897_381926[2] = null);
(statearr_381897_381926[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 16))
{var inst_381861 = (state_381872[2]);var state_381872__$1 = state_381872;var statearr_381898_381927 = state_381872__$1;(statearr_381898_381927[2] = inst_381861);
(statearr_381898_381927[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 17))
{var inst_381843 = (state_381872[13]);var inst_381847 = cljs.core.chunk_first.call(null,inst_381843);var inst_381848 = cljs.core.chunk_rest.call(null,inst_381843);var inst_381849 = cljs.core.count.call(null,inst_381847);var inst_381829 = inst_381848;var inst_381830 = inst_381847;var inst_381831 = inst_381849;var inst_381832 = 0;var state_381872__$1 = (function (){var statearr_381899 = state_381872;(statearr_381899[8] = inst_381829);
(statearr_381899[9] = inst_381831);
(statearr_381899[10] = inst_381830);
(statearr_381899[11] = inst_381832);
return statearr_381899;
})();var statearr_381900_381928 = state_381872__$1;(statearr_381900_381928[2] = null);
(statearr_381900_381928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 18))
{var inst_381843 = (state_381872[13]);var inst_381852 = cljs.core.first.call(null,inst_381843);var state_381872__$1 = state_381872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_381872__$1,20,out,inst_381852);
} else
{if((state_val_381873 === 19))
{var inst_381858 = (state_381872[2]);var state_381872__$1 = state_381872;var statearr_381901_381929 = state_381872__$1;(statearr_381901_381929[2] = inst_381858);
(statearr_381901_381929[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381873 === 20))
{var inst_381843 = (state_381872[13]);var inst_381854 = (state_381872[2]);var inst_381855 = cljs.core.next.call(null,inst_381843);var inst_381829 = inst_381855;var inst_381830 = null;var inst_381831 = 0;var inst_381832 = 0;var state_381872__$1 = (function (){var statearr_381902 = state_381872;(statearr_381902[8] = inst_381829);
(statearr_381902[9] = inst_381831);
(statearr_381902[10] = inst_381830);
(statearr_381902[11] = inst_381832);
(statearr_381902[15] = inst_381854);
return statearr_381902;
})();var statearr_381903_381930 = state_381872__$1;(statearr_381903_381930[2] = null);
(statearr_381903_381930[1] = 8);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_381907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_381907[0] = state_machine__18220__auto__);
(statearr_381907[1] = 1);
return statearr_381907;
});
var state_machine__18220__auto____1 = (function (state_381872){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_381872);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e381908){if((e381908 instanceof Object))
{var ex__18223__auto__ = e381908;var statearr_381909_381931 = state_381872;(statearr_381909_381931[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_381872);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e381908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__381932 = state_381872;
state_381872 = G__381932;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_381872){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_381872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_381910 = f__18290__auto__.call(null);(statearr_381910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_381910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18289__auto___382013 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_381992){var state_val_381993 = (state_381992[1]);if((state_val_381993 === 1))
{var state_381992__$1 = state_381992;var statearr_381994_382014 = state_381992__$1;(statearr_381994_382014[2] = null);
(statearr_381994_382014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 2))
{var state_381992__$1 = state_381992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_381992__$1,4,from);
} else
{if((state_val_381993 === 3))
{var inst_381990 = (state_381992[2]);var state_381992__$1 = state_381992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_381992__$1,inst_381990);
} else
{if((state_val_381993 === 4))
{var inst_381975 = (state_381992[7]);var inst_381975__$1 = (state_381992[2]);var inst_381976 = (inst_381975__$1 == null);var state_381992__$1 = (function (){var statearr_381995 = state_381992;(statearr_381995[7] = inst_381975__$1);
return statearr_381995;
})();if(cljs.core.truth_(inst_381976))
{var statearr_381996_382015 = state_381992__$1;(statearr_381996_382015[1] = 5);
} else
{var statearr_381997_382016 = state_381992__$1;(statearr_381997_382016[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 5))
{var state_381992__$1 = state_381992;if(cljs.core.truth_(close_QMARK_))
{var statearr_381998_382017 = state_381992__$1;(statearr_381998_382017[1] = 8);
} else
{var statearr_381999_382018 = state_381992__$1;(statearr_381999_382018[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 6))
{var inst_381975 = (state_381992[7]);var state_381992__$1 = state_381992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_381992__$1,11,to,inst_381975);
} else
{if((state_val_381993 === 7))
{var inst_381988 = (state_381992[2]);var state_381992__$1 = state_381992;var statearr_382000_382019 = state_381992__$1;(statearr_382000_382019[2] = inst_381988);
(statearr_382000_382019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 8))
{var inst_381979 = cljs.core.async.close_BANG_.call(null,to);var state_381992__$1 = state_381992;var statearr_382001_382020 = state_381992__$1;(statearr_382001_382020[2] = inst_381979);
(statearr_382001_382020[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 9))
{var state_381992__$1 = state_381992;var statearr_382002_382021 = state_381992__$1;(statearr_382002_382021[2] = null);
(statearr_382002_382021[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 10))
{var inst_381982 = (state_381992[2]);var state_381992__$1 = state_381992;var statearr_382003_382022 = state_381992__$1;(statearr_382003_382022[2] = inst_381982);
(statearr_382003_382022[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_381993 === 11))
{var inst_381985 = (state_381992[2]);var state_381992__$1 = (function (){var statearr_382004 = state_381992;(statearr_382004[8] = inst_381985);
return statearr_382004;
})();var statearr_382005_382023 = state_381992__$1;(statearr_382005_382023[2] = null);
(statearr_382005_382023[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_382009 = [null,null,null,null,null,null,null,null,null];(statearr_382009[0] = state_machine__18220__auto__);
(statearr_382009[1] = 1);
return statearr_382009;
});
var state_machine__18220__auto____1 = (function (state_381992){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_381992);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e382010){if((e382010 instanceof Object))
{var ex__18223__auto__ = e382010;var statearr_382011_382024 = state_381992;(statearr_382011_382024[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_381992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e382010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__382025 = state_381992;
state_381992 = G__382025;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_381992){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_381992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_382012 = f__18290__auto__.call(null);(statearr_382012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___382013);
return statearr_382012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18289__auto___382112 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_382090){var state_val_382091 = (state_382090[1]);if((state_val_382091 === 1))
{var state_382090__$1 = state_382090;var statearr_382092_382113 = state_382090__$1;(statearr_382092_382113[2] = null);
(statearr_382092_382113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 2))
{var state_382090__$1 = state_382090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_382090__$1,4,ch);
} else
{if((state_val_382091 === 3))
{var inst_382088 = (state_382090[2]);var state_382090__$1 = state_382090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_382090__$1,inst_382088);
} else
{if((state_val_382091 === 4))
{var inst_382071 = (state_382090[7]);var inst_382071__$1 = (state_382090[2]);var inst_382072 = (inst_382071__$1 == null);var state_382090__$1 = (function (){var statearr_382093 = state_382090;(statearr_382093[7] = inst_382071__$1);
return statearr_382093;
})();if(cljs.core.truth_(inst_382072))
{var statearr_382094_382114 = state_382090__$1;(statearr_382094_382114[1] = 5);
} else
{var statearr_382095_382115 = state_382090__$1;(statearr_382095_382115[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 5))
{var inst_382074 = cljs.core.async.close_BANG_.call(null,tc);var inst_382075 = cljs.core.async.close_BANG_.call(null,fc);var state_382090__$1 = (function (){var statearr_382096 = state_382090;(statearr_382096[8] = inst_382074);
return statearr_382096;
})();var statearr_382097_382116 = state_382090__$1;(statearr_382097_382116[2] = inst_382075);
(statearr_382097_382116[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 6))
{var inst_382071 = (state_382090[7]);var inst_382077 = p.call(null,inst_382071);var state_382090__$1 = state_382090;if(cljs.core.truth_(inst_382077))
{var statearr_382098_382117 = state_382090__$1;(statearr_382098_382117[1] = 9);
} else
{var statearr_382099_382118 = state_382090__$1;(statearr_382099_382118[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 7))
{var inst_382086 = (state_382090[2]);var state_382090__$1 = state_382090;var statearr_382100_382119 = state_382090__$1;(statearr_382100_382119[2] = inst_382086);
(statearr_382100_382119[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 8))
{var inst_382083 = (state_382090[2]);var state_382090__$1 = (function (){var statearr_382101 = state_382090;(statearr_382101[9] = inst_382083);
return statearr_382101;
})();var statearr_382102_382120 = state_382090__$1;(statearr_382102_382120[2] = null);
(statearr_382102_382120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 9))
{var state_382090__$1 = state_382090;var statearr_382103_382121 = state_382090__$1;(statearr_382103_382121[2] = tc);
(statearr_382103_382121[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 10))
{var state_382090__$1 = state_382090;var statearr_382104_382122 = state_382090__$1;(statearr_382104_382122[2] = fc);
(statearr_382104_382122[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382091 === 11))
{var inst_382071 = (state_382090[7]);var inst_382081 = (state_382090[2]);var state_382090__$1 = state_382090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_382090__$1,8,inst_382081,inst_382071);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_382108 = [null,null,null,null,null,null,null,null,null,null];(statearr_382108[0] = state_machine__18220__auto__);
(statearr_382108[1] = 1);
return statearr_382108;
});
var state_machine__18220__auto____1 = (function (state_382090){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_382090);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e382109){if((e382109 instanceof Object))
{var ex__18223__auto__ = e382109;var statearr_382110_382123 = state_382090;(statearr_382110_382123[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e382109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__382124 = state_382090;
state_382090 = G__382124;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_382090){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_382090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_382111 = f__18290__auto__.call(null);(statearr_382111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___382112);
return statearr_382111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_382171){var state_val_382172 = (state_382171[1]);if((state_val_382172 === 7))
{var inst_382167 = (state_382171[2]);var state_382171__$1 = state_382171;var statearr_382173_382189 = state_382171__$1;(statearr_382173_382189[2] = inst_382167);
(statearr_382173_382189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382172 === 6))
{var inst_382160 = (state_382171[7]);var inst_382157 = (state_382171[8]);var inst_382164 = f.call(null,inst_382157,inst_382160);var inst_382157__$1 = inst_382164;var state_382171__$1 = (function (){var statearr_382174 = state_382171;(statearr_382174[8] = inst_382157__$1);
return statearr_382174;
})();var statearr_382175_382190 = state_382171__$1;(statearr_382175_382190[2] = null);
(statearr_382175_382190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382172 === 5))
{var inst_382157 = (state_382171[8]);var state_382171__$1 = state_382171;var statearr_382176_382191 = state_382171__$1;(statearr_382176_382191[2] = inst_382157);
(statearr_382176_382191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382172 === 4))
{var inst_382160 = (state_382171[7]);var inst_382160__$1 = (state_382171[2]);var inst_382161 = (inst_382160__$1 == null);var state_382171__$1 = (function (){var statearr_382177 = state_382171;(statearr_382177[7] = inst_382160__$1);
return statearr_382177;
})();if(cljs.core.truth_(inst_382161))
{var statearr_382178_382192 = state_382171__$1;(statearr_382178_382192[1] = 5);
} else
{var statearr_382179_382193 = state_382171__$1;(statearr_382179_382193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382172 === 3))
{var inst_382169 = (state_382171[2]);var state_382171__$1 = state_382171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_382171__$1,inst_382169);
} else
{if((state_val_382172 === 2))
{var state_382171__$1 = state_382171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_382171__$1,4,ch);
} else
{if((state_val_382172 === 1))
{var inst_382157 = init;var state_382171__$1 = (function (){var statearr_382180 = state_382171;(statearr_382180[8] = inst_382157);
return statearr_382180;
})();var statearr_382181_382194 = state_382171__$1;(statearr_382181_382194[2] = null);
(statearr_382181_382194[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_382185 = [null,null,null,null,null,null,null,null,null];(statearr_382185[0] = state_machine__18220__auto__);
(statearr_382185[1] = 1);
return statearr_382185;
});
var state_machine__18220__auto____1 = (function (state_382171){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_382171);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e382186){if((e382186 instanceof Object))
{var ex__18223__auto__ = e382186;var statearr_382187_382195 = state_382171;(statearr_382187_382195[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e382186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__382196 = state_382171;
state_382171 = G__382196;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_382171){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_382171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_382188 = f__18290__auto__.call(null);(statearr_382188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_382188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_382258){var state_val_382259 = (state_382258[1]);if((state_val_382259 === 1))
{var inst_382238 = cljs.core.seq.call(null,coll);var inst_382239 = inst_382238;var state_382258__$1 = (function (){var statearr_382260 = state_382258;(statearr_382260[7] = inst_382239);
return statearr_382260;
})();var statearr_382261_382279 = state_382258__$1;(statearr_382261_382279[2] = null);
(statearr_382261_382279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 2))
{var inst_382239 = (state_382258[7]);var state_382258__$1 = state_382258;if(cljs.core.truth_(inst_382239))
{var statearr_382262_382280 = state_382258__$1;(statearr_382262_382280[1] = 4);
} else
{var statearr_382263_382281 = state_382258__$1;(statearr_382263_382281[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 3))
{var inst_382256 = (state_382258[2]);var state_382258__$1 = state_382258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_382258__$1,inst_382256);
} else
{if((state_val_382259 === 4))
{var inst_382239 = (state_382258[7]);var inst_382242 = cljs.core.first.call(null,inst_382239);var state_382258__$1 = state_382258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_382258__$1,7,ch,inst_382242);
} else
{if((state_val_382259 === 5))
{var state_382258__$1 = state_382258;if(cljs.core.truth_(close_QMARK_))
{var statearr_382264_382282 = state_382258__$1;(statearr_382264_382282[1] = 8);
} else
{var statearr_382265_382283 = state_382258__$1;(statearr_382265_382283[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 6))
{var inst_382254 = (state_382258[2]);var state_382258__$1 = state_382258;var statearr_382266_382284 = state_382258__$1;(statearr_382266_382284[2] = inst_382254);
(statearr_382266_382284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 7))
{var inst_382239 = (state_382258[7]);var inst_382244 = (state_382258[2]);var inst_382245 = cljs.core.next.call(null,inst_382239);var inst_382239__$1 = inst_382245;var state_382258__$1 = (function (){var statearr_382267 = state_382258;(statearr_382267[7] = inst_382239__$1);
(statearr_382267[8] = inst_382244);
return statearr_382267;
})();var statearr_382268_382285 = state_382258__$1;(statearr_382268_382285[2] = null);
(statearr_382268_382285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 8))
{var inst_382249 = cljs.core.async.close_BANG_.call(null,ch);var state_382258__$1 = state_382258;var statearr_382269_382286 = state_382258__$1;(statearr_382269_382286[2] = inst_382249);
(statearr_382269_382286[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 9))
{var state_382258__$1 = state_382258;var statearr_382270_382287 = state_382258__$1;(statearr_382270_382287[2] = null);
(statearr_382270_382287[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382259 === 10))
{var inst_382252 = (state_382258[2]);var state_382258__$1 = state_382258;var statearr_382271_382288 = state_382258__$1;(statearr_382271_382288[2] = inst_382252);
(statearr_382271_382288[1] = 6);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_382275 = [null,null,null,null,null,null,null,null,null];(statearr_382275[0] = state_machine__18220__auto__);
(statearr_382275[1] = 1);
return statearr_382275;
});
var state_machine__18220__auto____1 = (function (state_382258){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_382258);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e382276){if((e382276 instanceof Object))
{var ex__18223__auto__ = e382276;var statearr_382277_382289 = state_382258;(statearr_382277_382289[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e382276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__382290 = state_382258;
state_382258 = G__382290;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_382258){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_382258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_382278 = f__18290__auto__.call(null);(statearr_382278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_382278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
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
cljs.core.async.Mux = (function (){var obj382292 = {};return obj382292;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13967__auto__ = _;if(and__13967__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13967__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14587__auto__ = (((_ == null))?null:_);return (function (){var or__13979__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj382294 = {};return obj382294;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t382518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t382518 = (function (cs,ch,mult,meta382519){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta382519 = meta382519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t382518.cljs$lang$type = true;
cljs.core.async.t382518.cljs$lang$ctorStr = "cljs.core.async/t382518";
cljs.core.async.t382518.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t382518");
});})(cs))
;
cljs.core.async.t382518.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t382518.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t382518.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t382518.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t382518.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t382518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t382518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_382520){var self__ = this;
var _382520__$1 = this;return self__.meta382519;
});})(cs))
;
cljs.core.async.t382518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_382520,meta382519__$1){var self__ = this;
var _382520__$1 = this;return (new cljs.core.async.t382518(self__.cs,self__.ch,self__.mult,meta382519__$1));
});})(cs))
;
cljs.core.async.__GT_t382518 = ((function (cs){
return (function __GT_t382518(cs__$1,ch__$1,mult__$1,meta382519){return (new cljs.core.async.t382518(cs__$1,ch__$1,mult__$1,meta382519));
});})(cs))
;
}
return (new cljs.core.async.t382518(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18289__auto___382741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_382655){var state_val_382656 = (state_382655[1]);if((state_val_382656 === 32))
{var inst_382599 = (state_382655[7]);var inst_382523 = (state_382655[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_382655,31,Object,null,30);var inst_382606 = cljs.core.async.put_BANG_.call(null,inst_382599,inst_382523,done);var state_382655__$1 = state_382655;var statearr_382657_382742 = state_382655__$1;(statearr_382657_382742[2] = inst_382606);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382655__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 1))
{var state_382655__$1 = state_382655;var statearr_382658_382743 = state_382655__$1;(statearr_382658_382743[2] = null);
(statearr_382658_382743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 33))
{var inst_382612 = (state_382655[9]);var inst_382614 = cljs.core.chunked_seq_QMARK_.call(null,inst_382612);var state_382655__$1 = state_382655;if(inst_382614)
{var statearr_382659_382744 = state_382655__$1;(statearr_382659_382744[1] = 36);
} else
{var statearr_382660_382745 = state_382655__$1;(statearr_382660_382745[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 2))
{var state_382655__$1 = state_382655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_382655__$1,4,ch);
} else
{if((state_val_382656 === 34))
{var state_382655__$1 = state_382655;var statearr_382661_382746 = state_382655__$1;(statearr_382661_382746[2] = null);
(statearr_382661_382746[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 3))
{var inst_382653 = (state_382655[2]);var state_382655__$1 = state_382655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_382655__$1,inst_382653);
} else
{if((state_val_382656 === 35))
{var inst_382637 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382662_382747 = state_382655__$1;(statearr_382662_382747[2] = inst_382637);
(statearr_382662_382747[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 4))
{var inst_382523 = (state_382655[8]);var inst_382523__$1 = (state_382655[2]);var inst_382524 = (inst_382523__$1 == null);var state_382655__$1 = (function (){var statearr_382663 = state_382655;(statearr_382663[8] = inst_382523__$1);
return statearr_382663;
})();if(cljs.core.truth_(inst_382524))
{var statearr_382664_382748 = state_382655__$1;(statearr_382664_382748[1] = 5);
} else
{var statearr_382665_382749 = state_382655__$1;(statearr_382665_382749[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 36))
{var inst_382612 = (state_382655[9]);var inst_382616 = cljs.core.chunk_first.call(null,inst_382612);var inst_382617 = cljs.core.chunk_rest.call(null,inst_382612);var inst_382618 = cljs.core.count.call(null,inst_382616);var inst_382591 = inst_382617;var inst_382592 = inst_382616;var inst_382593 = inst_382618;var inst_382594 = 0;var state_382655__$1 = (function (){var statearr_382666 = state_382655;(statearr_382666[10] = inst_382593);
(statearr_382666[11] = inst_382592);
(statearr_382666[12] = inst_382591);
(statearr_382666[13] = inst_382594);
return statearr_382666;
})();var statearr_382667_382750 = state_382655__$1;(statearr_382667_382750[2] = null);
(statearr_382667_382750[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 5))
{var inst_382530 = cljs.core.deref.call(null,cs);var inst_382531 = cljs.core.seq.call(null,inst_382530);var inst_382532 = inst_382531;var inst_382533 = null;var inst_382534 = 0;var inst_382535 = 0;var state_382655__$1 = (function (){var statearr_382668 = state_382655;(statearr_382668[14] = inst_382533);
(statearr_382668[15] = inst_382532);
(statearr_382668[16] = inst_382535);
(statearr_382668[17] = inst_382534);
return statearr_382668;
})();var statearr_382669_382751 = state_382655__$1;(statearr_382669_382751[2] = null);
(statearr_382669_382751[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 37))
{var inst_382612 = (state_382655[9]);var inst_382621 = cljs.core.first.call(null,inst_382612);var state_382655__$1 = (function (){var statearr_382670 = state_382655;(statearr_382670[18] = inst_382621);
return statearr_382670;
})();var statearr_382671_382752 = state_382655__$1;(statearr_382671_382752[2] = null);
(statearr_382671_382752[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 6))
{var inst_382583 = (state_382655[19]);var inst_382582 = cljs.core.deref.call(null,cs);var inst_382583__$1 = cljs.core.keys.call(null,inst_382582);var inst_382584 = cljs.core.count.call(null,inst_382583__$1);var inst_382585 = cljs.core.reset_BANG_.call(null,dctr,inst_382584);var inst_382590 = cljs.core.seq.call(null,inst_382583__$1);var inst_382591 = inst_382590;var inst_382592 = null;var inst_382593 = 0;var inst_382594 = 0;var state_382655__$1 = (function (){var statearr_382672 = state_382655;(statearr_382672[10] = inst_382593);
(statearr_382672[19] = inst_382583__$1);
(statearr_382672[11] = inst_382592);
(statearr_382672[12] = inst_382591);
(statearr_382672[20] = inst_382585);
(statearr_382672[13] = inst_382594);
return statearr_382672;
})();var statearr_382673_382753 = state_382655__$1;(statearr_382673_382753[2] = null);
(statearr_382673_382753[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 38))
{var inst_382634 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382674_382754 = state_382655__$1;(statearr_382674_382754[2] = inst_382634);
(statearr_382674_382754[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 7))
{var inst_382651 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382675_382755 = state_382655__$1;(statearr_382675_382755[2] = inst_382651);
(statearr_382675_382755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 39))
{var inst_382612 = (state_382655[9]);var inst_382630 = (state_382655[2]);var inst_382631 = cljs.core.next.call(null,inst_382612);var inst_382591 = inst_382631;var inst_382592 = null;var inst_382593 = 0;var inst_382594 = 0;var state_382655__$1 = (function (){var statearr_382676 = state_382655;(statearr_382676[10] = inst_382593);
(statearr_382676[11] = inst_382592);
(statearr_382676[12] = inst_382591);
(statearr_382676[13] = inst_382594);
(statearr_382676[21] = inst_382630);
return statearr_382676;
})();var statearr_382677_382756 = state_382655__$1;(statearr_382677_382756[2] = null);
(statearr_382677_382756[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 8))
{var inst_382535 = (state_382655[16]);var inst_382534 = (state_382655[17]);var inst_382537 = (inst_382535 < inst_382534);var inst_382538 = inst_382537;var state_382655__$1 = state_382655;if(cljs.core.truth_(inst_382538))
{var statearr_382678_382757 = state_382655__$1;(statearr_382678_382757[1] = 10);
} else
{var statearr_382679_382758 = state_382655__$1;(statearr_382679_382758[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 40))
{var inst_382621 = (state_382655[18]);var inst_382622 = (state_382655[2]);var inst_382623 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_382624 = cljs.core.async.untap_STAR_.call(null,m,inst_382621);var state_382655__$1 = (function (){var statearr_382680 = state_382655;(statearr_382680[22] = inst_382623);
(statearr_382680[23] = inst_382622);
return statearr_382680;
})();var statearr_382681_382759 = state_382655__$1;(statearr_382681_382759[2] = inst_382624);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382655__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 9))
{var inst_382580 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382682_382760 = state_382655__$1;(statearr_382682_382760[2] = inst_382580);
(statearr_382682_382760[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 41))
{var inst_382523 = (state_382655[8]);var inst_382621 = (state_382655[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_382655,40,Object,null,39);var inst_382628 = cljs.core.async.put_BANG_.call(null,inst_382621,inst_382523,done);var state_382655__$1 = state_382655;var statearr_382683_382761 = state_382655__$1;(statearr_382683_382761[2] = inst_382628);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382655__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 10))
{var inst_382533 = (state_382655[14]);var inst_382535 = (state_382655[16]);var inst_382541 = cljs.core._nth.call(null,inst_382533,inst_382535);var inst_382542 = cljs.core.nth.call(null,inst_382541,0,null);var inst_382543 = cljs.core.nth.call(null,inst_382541,1,null);var state_382655__$1 = (function (){var statearr_382684 = state_382655;(statearr_382684[24] = inst_382542);
return statearr_382684;
})();if(cljs.core.truth_(inst_382543))
{var statearr_382685_382762 = state_382655__$1;(statearr_382685_382762[1] = 13);
} else
{var statearr_382686_382763 = state_382655__$1;(statearr_382686_382763[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 42))
{var state_382655__$1 = state_382655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_382655__$1,45,dchan);
} else
{if((state_val_382656 === 11))
{var inst_382532 = (state_382655[15]);var inst_382552 = (state_382655[25]);var inst_382552__$1 = cljs.core.seq.call(null,inst_382532);var state_382655__$1 = (function (){var statearr_382687 = state_382655;(statearr_382687[25] = inst_382552__$1);
return statearr_382687;
})();if(inst_382552__$1)
{var statearr_382688_382764 = state_382655__$1;(statearr_382688_382764[1] = 16);
} else
{var statearr_382689_382765 = state_382655__$1;(statearr_382689_382765[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 43))
{var state_382655__$1 = state_382655;var statearr_382690_382766 = state_382655__$1;(statearr_382690_382766[2] = null);
(statearr_382690_382766[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 12))
{var inst_382578 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382691_382767 = state_382655__$1;(statearr_382691_382767[2] = inst_382578);
(statearr_382691_382767[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 44))
{var inst_382648 = (state_382655[2]);var state_382655__$1 = (function (){var statearr_382692 = state_382655;(statearr_382692[26] = inst_382648);
return statearr_382692;
})();var statearr_382693_382768 = state_382655__$1;(statearr_382693_382768[2] = null);
(statearr_382693_382768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 13))
{var inst_382542 = (state_382655[24]);var inst_382545 = cljs.core.async.close_BANG_.call(null,inst_382542);var state_382655__$1 = state_382655;var statearr_382694_382769 = state_382655__$1;(statearr_382694_382769[2] = inst_382545);
(statearr_382694_382769[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 45))
{var inst_382645 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382698_382770 = state_382655__$1;(statearr_382698_382770[2] = inst_382645);
(statearr_382698_382770[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 14))
{var state_382655__$1 = state_382655;var statearr_382699_382771 = state_382655__$1;(statearr_382699_382771[2] = null);
(statearr_382699_382771[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 15))
{var inst_382533 = (state_382655[14]);var inst_382532 = (state_382655[15]);var inst_382535 = (state_382655[16]);var inst_382534 = (state_382655[17]);var inst_382548 = (state_382655[2]);var inst_382549 = (inst_382535 + 1);var tmp382695 = inst_382533;var tmp382696 = inst_382532;var tmp382697 = inst_382534;var inst_382532__$1 = tmp382696;var inst_382533__$1 = tmp382695;var inst_382534__$1 = tmp382697;var inst_382535__$1 = inst_382549;var state_382655__$1 = (function (){var statearr_382700 = state_382655;(statearr_382700[14] = inst_382533__$1);
(statearr_382700[15] = inst_382532__$1);
(statearr_382700[16] = inst_382535__$1);
(statearr_382700[17] = inst_382534__$1);
(statearr_382700[27] = inst_382548);
return statearr_382700;
})();var statearr_382701_382772 = state_382655__$1;(statearr_382701_382772[2] = null);
(statearr_382701_382772[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 16))
{var inst_382552 = (state_382655[25]);var inst_382554 = cljs.core.chunked_seq_QMARK_.call(null,inst_382552);var state_382655__$1 = state_382655;if(inst_382554)
{var statearr_382702_382773 = state_382655__$1;(statearr_382702_382773[1] = 19);
} else
{var statearr_382703_382774 = state_382655__$1;(statearr_382703_382774[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 17))
{var state_382655__$1 = state_382655;var statearr_382704_382775 = state_382655__$1;(statearr_382704_382775[2] = null);
(statearr_382704_382775[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 18))
{var inst_382576 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382705_382776 = state_382655__$1;(statearr_382705_382776[2] = inst_382576);
(statearr_382705_382776[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 19))
{var inst_382552 = (state_382655[25]);var inst_382556 = cljs.core.chunk_first.call(null,inst_382552);var inst_382557 = cljs.core.chunk_rest.call(null,inst_382552);var inst_382558 = cljs.core.count.call(null,inst_382556);var inst_382532 = inst_382557;var inst_382533 = inst_382556;var inst_382534 = inst_382558;var inst_382535 = 0;var state_382655__$1 = (function (){var statearr_382706 = state_382655;(statearr_382706[14] = inst_382533);
(statearr_382706[15] = inst_382532);
(statearr_382706[16] = inst_382535);
(statearr_382706[17] = inst_382534);
return statearr_382706;
})();var statearr_382707_382777 = state_382655__$1;(statearr_382707_382777[2] = null);
(statearr_382707_382777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 20))
{var inst_382552 = (state_382655[25]);var inst_382562 = cljs.core.first.call(null,inst_382552);var inst_382563 = cljs.core.nth.call(null,inst_382562,0,null);var inst_382564 = cljs.core.nth.call(null,inst_382562,1,null);var state_382655__$1 = (function (){var statearr_382708 = state_382655;(statearr_382708[28] = inst_382563);
return statearr_382708;
})();if(cljs.core.truth_(inst_382564))
{var statearr_382709_382778 = state_382655__$1;(statearr_382709_382778[1] = 22);
} else
{var statearr_382710_382779 = state_382655__$1;(statearr_382710_382779[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 21))
{var inst_382573 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382711_382780 = state_382655__$1;(statearr_382711_382780[2] = inst_382573);
(statearr_382711_382780[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 22))
{var inst_382563 = (state_382655[28]);var inst_382566 = cljs.core.async.close_BANG_.call(null,inst_382563);var state_382655__$1 = state_382655;var statearr_382712_382781 = state_382655__$1;(statearr_382712_382781[2] = inst_382566);
(statearr_382712_382781[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 23))
{var state_382655__$1 = state_382655;var statearr_382713_382782 = state_382655__$1;(statearr_382713_382782[2] = null);
(statearr_382713_382782[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 24))
{var inst_382552 = (state_382655[25]);var inst_382569 = (state_382655[2]);var inst_382570 = cljs.core.next.call(null,inst_382552);var inst_382532 = inst_382570;var inst_382533 = null;var inst_382534 = 0;var inst_382535 = 0;var state_382655__$1 = (function (){var statearr_382714 = state_382655;(statearr_382714[29] = inst_382569);
(statearr_382714[14] = inst_382533);
(statearr_382714[15] = inst_382532);
(statearr_382714[16] = inst_382535);
(statearr_382714[17] = inst_382534);
return statearr_382714;
})();var statearr_382715_382783 = state_382655__$1;(statearr_382715_382783[2] = null);
(statearr_382715_382783[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 25))
{var inst_382593 = (state_382655[10]);var inst_382594 = (state_382655[13]);var inst_382596 = (inst_382594 < inst_382593);var inst_382597 = inst_382596;var state_382655__$1 = state_382655;if(cljs.core.truth_(inst_382597))
{var statearr_382716_382784 = state_382655__$1;(statearr_382716_382784[1] = 27);
} else
{var statearr_382717_382785 = state_382655__$1;(statearr_382717_382785[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 26))
{var inst_382583 = (state_382655[19]);var inst_382641 = (state_382655[2]);var inst_382642 = cljs.core.seq.call(null,inst_382583);var state_382655__$1 = (function (){var statearr_382718 = state_382655;(statearr_382718[30] = inst_382641);
return statearr_382718;
})();if(inst_382642)
{var statearr_382719_382786 = state_382655__$1;(statearr_382719_382786[1] = 42);
} else
{var statearr_382720_382787 = state_382655__$1;(statearr_382720_382787[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 27))
{var inst_382592 = (state_382655[11]);var inst_382594 = (state_382655[13]);var inst_382599 = cljs.core._nth.call(null,inst_382592,inst_382594);var state_382655__$1 = (function (){var statearr_382721 = state_382655;(statearr_382721[7] = inst_382599);
return statearr_382721;
})();var statearr_382722_382788 = state_382655__$1;(statearr_382722_382788[2] = null);
(statearr_382722_382788[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 28))
{var inst_382591 = (state_382655[12]);var inst_382612 = (state_382655[9]);var inst_382612__$1 = cljs.core.seq.call(null,inst_382591);var state_382655__$1 = (function (){var statearr_382726 = state_382655;(statearr_382726[9] = inst_382612__$1);
return statearr_382726;
})();if(inst_382612__$1)
{var statearr_382727_382789 = state_382655__$1;(statearr_382727_382789[1] = 33);
} else
{var statearr_382728_382790 = state_382655__$1;(statearr_382728_382790[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 29))
{var inst_382639 = (state_382655[2]);var state_382655__$1 = state_382655;var statearr_382729_382791 = state_382655__$1;(statearr_382729_382791[2] = inst_382639);
(statearr_382729_382791[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 30))
{var inst_382593 = (state_382655[10]);var inst_382592 = (state_382655[11]);var inst_382591 = (state_382655[12]);var inst_382594 = (state_382655[13]);var inst_382608 = (state_382655[2]);var inst_382609 = (inst_382594 + 1);var tmp382723 = inst_382593;var tmp382724 = inst_382592;var tmp382725 = inst_382591;var inst_382591__$1 = tmp382725;var inst_382592__$1 = tmp382724;var inst_382593__$1 = tmp382723;var inst_382594__$1 = inst_382609;var state_382655__$1 = (function (){var statearr_382730 = state_382655;(statearr_382730[31] = inst_382608);
(statearr_382730[10] = inst_382593__$1);
(statearr_382730[11] = inst_382592__$1);
(statearr_382730[12] = inst_382591__$1);
(statearr_382730[13] = inst_382594__$1);
return statearr_382730;
})();var statearr_382731_382792 = state_382655__$1;(statearr_382731_382792[2] = null);
(statearr_382731_382792[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382656 === 31))
{var inst_382599 = (state_382655[7]);var inst_382600 = (state_382655[2]);var inst_382601 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_382602 = cljs.core.async.untap_STAR_.call(null,m,inst_382599);var state_382655__$1 = (function (){var statearr_382732 = state_382655;(statearr_382732[32] = inst_382601);
(statearr_382732[33] = inst_382600);
return statearr_382732;
})();var statearr_382733_382793 = state_382655__$1;(statearr_382733_382793[2] = inst_382602);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382655__$1);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_382737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_382737[0] = state_machine__18220__auto__);
(statearr_382737[1] = 1);
return statearr_382737;
});
var state_machine__18220__auto____1 = (function (state_382655){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_382655);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e382738){if((e382738 instanceof Object))
{var ex__18223__auto__ = e382738;var statearr_382739_382794 = state_382655;(statearr_382739_382794[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e382738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__382795 = state_382655;
state_382655 = G__382795;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_382655){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_382655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_382740 = f__18290__auto__.call(null);(statearr_382740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___382741);
return statearr_382740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
cljs.core.async.Mix = (function (){var obj382797 = {};return obj382797;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13967__auto__ = m;if(and__13967__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14587__auto__ = (((m == null))?null:m);return (function (){var or__13979__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t382907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t382907 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta382908){
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
this.meta382908 = meta382908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t382907.cljs$lang$type = true;
cljs.core.async.t382907.cljs$lang$ctorStr = "cljs.core.async/t382907";
cljs.core.async.t382907.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t382907");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t382907.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t382907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_382909){var self__ = this;
var _382909__$1 = this;return self__.meta382908;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t382907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_382909,meta382908__$1){var self__ = this;
var _382909__$1 = this;return (new cljs.core.async.t382907(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta382908__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t382907 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t382907(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta382908){return (new cljs.core.async.t382907(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta382908));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t382907(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18289__auto___383016 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_382974){var state_val_382975 = (state_382974[1]);if((state_val_382975 === 1))
{var inst_382913 = (state_382974[7]);var inst_382913__$1 = calc_state.call(null);var inst_382914 = cljs.core.seq_QMARK_.call(null,inst_382913__$1);var state_382974__$1 = (function (){var statearr_382976 = state_382974;(statearr_382976[7] = inst_382913__$1);
return statearr_382976;
})();if(inst_382914)
{var statearr_382977_383017 = state_382974__$1;(statearr_382977_383017[1] = 2);
} else
{var statearr_382978_383018 = state_382974__$1;(statearr_382978_383018[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 2))
{var inst_382913 = (state_382974[7]);var inst_382916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_382913);var state_382974__$1 = state_382974;var statearr_382979_383019 = state_382974__$1;(statearr_382979_383019[2] = inst_382916);
(statearr_382979_383019[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 3))
{var inst_382913 = (state_382974[7]);var state_382974__$1 = state_382974;var statearr_382980_383020 = state_382974__$1;(statearr_382980_383020[2] = inst_382913);
(statearr_382980_383020[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 4))
{var inst_382913 = (state_382974[7]);var inst_382919 = (state_382974[2]);var inst_382920 = cljs.core.get.call(null,inst_382919,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_382921 = cljs.core.get.call(null,inst_382919,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_382922 = cljs.core.get.call(null,inst_382919,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_382923 = inst_382913;var state_382974__$1 = (function (){var statearr_382981 = state_382974;(statearr_382981[8] = inst_382920);
(statearr_382981[9] = inst_382923);
(statearr_382981[10] = inst_382921);
(statearr_382981[11] = inst_382922);
return statearr_382981;
})();var statearr_382982_383021 = state_382974__$1;(statearr_382982_383021[2] = null);
(statearr_382982_383021[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 5))
{var inst_382923 = (state_382974[9]);var inst_382926 = cljs.core.seq_QMARK_.call(null,inst_382923);var state_382974__$1 = state_382974;if(inst_382926)
{var statearr_382983_383022 = state_382974__$1;(statearr_382983_383022[1] = 7);
} else
{var statearr_382984_383023 = state_382974__$1;(statearr_382984_383023[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 6))
{var inst_382972 = (state_382974[2]);var state_382974__$1 = state_382974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_382974__$1,inst_382972);
} else
{if((state_val_382975 === 7))
{var inst_382923 = (state_382974[9]);var inst_382928 = cljs.core.apply.call(null,cljs.core.hash_map,inst_382923);var state_382974__$1 = state_382974;var statearr_382985_383024 = state_382974__$1;(statearr_382985_383024[2] = inst_382928);
(statearr_382985_383024[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 8))
{var inst_382923 = (state_382974[9]);var state_382974__$1 = state_382974;var statearr_382986_383025 = state_382974__$1;(statearr_382986_383025[2] = inst_382923);
(statearr_382986_383025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 9))
{var inst_382931 = (state_382974[12]);var inst_382931__$1 = (state_382974[2]);var inst_382932 = cljs.core.get.call(null,inst_382931__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_382933 = cljs.core.get.call(null,inst_382931__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_382934 = cljs.core.get.call(null,inst_382931__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_382974__$1 = (function (){var statearr_382987 = state_382974;(statearr_382987[12] = inst_382931__$1);
(statearr_382987[13] = inst_382934);
(statearr_382987[14] = inst_382933);
return statearr_382987;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_382974__$1,10,inst_382932);
} else
{if((state_val_382975 === 10))
{var inst_382939 = (state_382974[15]);var inst_382938 = (state_382974[16]);var inst_382937 = (state_382974[2]);var inst_382938__$1 = cljs.core.nth.call(null,inst_382937,0,null);var inst_382939__$1 = cljs.core.nth.call(null,inst_382937,1,null);var inst_382940 = (inst_382938__$1 == null);var inst_382941 = cljs.core._EQ_.call(null,inst_382939__$1,change);var inst_382942 = (inst_382940) || (inst_382941);var state_382974__$1 = (function (){var statearr_382988 = state_382974;(statearr_382988[15] = inst_382939__$1);
(statearr_382988[16] = inst_382938__$1);
return statearr_382988;
})();if(cljs.core.truth_(inst_382942))
{var statearr_382989_383026 = state_382974__$1;(statearr_382989_383026[1] = 11);
} else
{var statearr_382990_383027 = state_382974__$1;(statearr_382990_383027[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 11))
{var inst_382938 = (state_382974[16]);var inst_382944 = (inst_382938 == null);var state_382974__$1 = state_382974;if(cljs.core.truth_(inst_382944))
{var statearr_382991_383028 = state_382974__$1;(statearr_382991_383028[1] = 14);
} else
{var statearr_382992_383029 = state_382974__$1;(statearr_382992_383029[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 12))
{var inst_382953 = (state_382974[17]);var inst_382934 = (state_382974[13]);var inst_382939 = (state_382974[15]);var inst_382953__$1 = inst_382934.call(null,inst_382939);var state_382974__$1 = (function (){var statearr_382993 = state_382974;(statearr_382993[17] = inst_382953__$1);
return statearr_382993;
})();if(cljs.core.truth_(inst_382953__$1))
{var statearr_382994_383030 = state_382974__$1;(statearr_382994_383030[1] = 17);
} else
{var statearr_382995_383031 = state_382974__$1;(statearr_382995_383031[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 13))
{var inst_382970 = (state_382974[2]);var state_382974__$1 = state_382974;var statearr_382996_383032 = state_382974__$1;(statearr_382996_383032[2] = inst_382970);
(statearr_382996_383032[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 14))
{var inst_382939 = (state_382974[15]);var inst_382946 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_382939);var state_382974__$1 = state_382974;var statearr_382997_383033 = state_382974__$1;(statearr_382997_383033[2] = inst_382946);
(statearr_382997_383033[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 15))
{var state_382974__$1 = state_382974;var statearr_382998_383034 = state_382974__$1;(statearr_382998_383034[2] = null);
(statearr_382998_383034[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 16))
{var inst_382949 = (state_382974[2]);var inst_382950 = calc_state.call(null);var inst_382923 = inst_382950;var state_382974__$1 = (function (){var statearr_382999 = state_382974;(statearr_382999[9] = inst_382923);
(statearr_382999[18] = inst_382949);
return statearr_382999;
})();var statearr_383000_383035 = state_382974__$1;(statearr_383000_383035[2] = null);
(statearr_383000_383035[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 17))
{var inst_382953 = (state_382974[17]);var state_382974__$1 = state_382974;var statearr_383001_383036 = state_382974__$1;(statearr_383001_383036[2] = inst_382953);
(statearr_383001_383036[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 18))
{var inst_382934 = (state_382974[13]);var inst_382933 = (state_382974[14]);var inst_382939 = (state_382974[15]);var inst_382956 = cljs.core.empty_QMARK_.call(null,inst_382934);var inst_382957 = inst_382933.call(null,inst_382939);var inst_382958 = cljs.core.not.call(null,inst_382957);var inst_382959 = (inst_382956) && (inst_382958);var state_382974__$1 = state_382974;var statearr_383002_383037 = state_382974__$1;(statearr_383002_383037[2] = inst_382959);
(statearr_383002_383037[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 19))
{var inst_382961 = (state_382974[2]);var state_382974__$1 = state_382974;if(cljs.core.truth_(inst_382961))
{var statearr_383003_383038 = state_382974__$1;(statearr_383003_383038[1] = 20);
} else
{var statearr_383004_383039 = state_382974__$1;(statearr_383004_383039[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 20))
{var inst_382938 = (state_382974[16]);var state_382974__$1 = state_382974;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_382974__$1,23,out,inst_382938);
} else
{if((state_val_382975 === 21))
{var state_382974__$1 = state_382974;var statearr_383005_383040 = state_382974__$1;(statearr_383005_383040[2] = null);
(statearr_383005_383040[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 22))
{var inst_382931 = (state_382974[12]);var inst_382967 = (state_382974[2]);var inst_382923 = inst_382931;var state_382974__$1 = (function (){var statearr_383006 = state_382974;(statearr_383006[9] = inst_382923);
(statearr_383006[19] = inst_382967);
return statearr_383006;
})();var statearr_383007_383041 = state_382974__$1;(statearr_383007_383041[2] = null);
(statearr_383007_383041[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_382975 === 23))
{var inst_382964 = (state_382974[2]);var state_382974__$1 = state_382974;var statearr_383008_383042 = state_382974__$1;(statearr_383008_383042[2] = inst_382964);
(statearr_383008_383042[1] = 22);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_383012[0] = state_machine__18220__auto__);
(statearr_383012[1] = 1);
return statearr_383012;
});
var state_machine__18220__auto____1 = (function (state_382974){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_382974);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383013){if((e383013 instanceof Object))
{var ex__18223__auto__ = e383013;var statearr_383014_383043 = state_382974;(statearr_383014_383043[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_382974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383044 = state_382974;
state_382974 = G__383044;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_382974){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_382974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383015 = f__18290__auto__.call(null);(statearr_383015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383016);
return statearr_383015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
cljs.core.async.Pub = (function (){var obj383046 = {};return obj383046;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13967__auto__ = p;if(and__13967__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13967__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14587__auto__ = (((p == null))?null:p);return (function (){var or__13979__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13967__auto__ = p;if(and__13967__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13967__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14587__auto__ = (((p == null))?null:p);return (function (){var or__13979__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13967__auto__ = p;if(and__13967__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13967__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14587__auto__ = (((p == null))?null:p);return (function (){var or__13979__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13967__auto__ = p;if(and__13967__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13967__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14587__auto__ = (((p == null))?null:p);return (function (){var or__13979__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
return (function (topic){var or__13979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13979__auto__,mults){
return (function (p1__383047_SHARP_){if(cljs.core.truth_(p1__383047_SHARP_.call(null,topic)))
{return p1__383047_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__383047_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13979__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t383172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t383172 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta383173){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta383173 = meta383173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t383172.cljs$lang$type = true;
cljs.core.async.t383172.cljs$lang$ctorStr = "cljs.core.async/t383172";
cljs.core.async.t383172.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t383172");
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t383172.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t383172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_383174){var self__ = this;
var _383174__$1 = this;return self__.meta383173;
});})(mults,ensure_mult))
;
cljs.core.async.t383172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_383174,meta383173__$1){var self__ = this;
var _383174__$1 = this;return (new cljs.core.async.t383172(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta383173__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t383172 = ((function (mults,ensure_mult){
return (function __GT_t383172(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta383173){return (new cljs.core.async.t383172(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta383173));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t383172(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18289__auto___383296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_383248){var state_val_383249 = (state_383248[1]);if((state_val_383249 === 1))
{var state_383248__$1 = state_383248;var statearr_383250_383297 = state_383248__$1;(statearr_383250_383297[2] = null);
(statearr_383250_383297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 2))
{var state_383248__$1 = state_383248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_383248__$1,4,ch);
} else
{if((state_val_383249 === 3))
{var inst_383246 = (state_383248[2]);var state_383248__$1 = state_383248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_383248__$1,inst_383246);
} else
{if((state_val_383249 === 4))
{var inst_383177 = (state_383248[7]);var inst_383177__$1 = (state_383248[2]);var inst_383178 = (inst_383177__$1 == null);var state_383248__$1 = (function (){var statearr_383251 = state_383248;(statearr_383251[7] = inst_383177__$1);
return statearr_383251;
})();if(cljs.core.truth_(inst_383178))
{var statearr_383252_383298 = state_383248__$1;(statearr_383252_383298[1] = 5);
} else
{var statearr_383253_383299 = state_383248__$1;(statearr_383253_383299[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 5))
{var inst_383184 = cljs.core.deref.call(null,mults);var inst_383185 = cljs.core.vals.call(null,inst_383184);var inst_383186 = cljs.core.seq.call(null,inst_383185);var inst_383187 = inst_383186;var inst_383188 = null;var inst_383189 = 0;var inst_383190 = 0;var state_383248__$1 = (function (){var statearr_383254 = state_383248;(statearr_383254[8] = inst_383190);
(statearr_383254[9] = inst_383188);
(statearr_383254[10] = inst_383189);
(statearr_383254[11] = inst_383187);
return statearr_383254;
})();var statearr_383255_383300 = state_383248__$1;(statearr_383255_383300[2] = null);
(statearr_383255_383300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 6))
{var inst_383225 = (state_383248[12]);var inst_383227 = (state_383248[13]);var inst_383177 = (state_383248[7]);var inst_383225__$1 = topic_fn.call(null,inst_383177);var inst_383226 = cljs.core.deref.call(null,mults);var inst_383227__$1 = cljs.core.get.call(null,inst_383226,inst_383225__$1);var state_383248__$1 = (function (){var statearr_383256 = state_383248;(statearr_383256[12] = inst_383225__$1);
(statearr_383256[13] = inst_383227__$1);
return statearr_383256;
})();if(cljs.core.truth_(inst_383227__$1))
{var statearr_383257_383301 = state_383248__$1;(statearr_383257_383301[1] = 19);
} else
{var statearr_383258_383302 = state_383248__$1;(statearr_383258_383302[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 7))
{var inst_383244 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383259_383303 = state_383248__$1;(statearr_383259_383303[2] = inst_383244);
(statearr_383259_383303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 8))
{var inst_383190 = (state_383248[8]);var inst_383189 = (state_383248[10]);var inst_383192 = (inst_383190 < inst_383189);var inst_383193 = inst_383192;var state_383248__$1 = state_383248;if(cljs.core.truth_(inst_383193))
{var statearr_383263_383304 = state_383248__$1;(statearr_383263_383304[1] = 10);
} else
{var statearr_383264_383305 = state_383248__$1;(statearr_383264_383305[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 9))
{var inst_383223 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383265_383306 = state_383248__$1;(statearr_383265_383306[2] = inst_383223);
(statearr_383265_383306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 10))
{var inst_383190 = (state_383248[8]);var inst_383188 = (state_383248[9]);var inst_383189 = (state_383248[10]);var inst_383187 = (state_383248[11]);var inst_383195 = cljs.core._nth.call(null,inst_383188,inst_383190);var inst_383196 = cljs.core.async.muxch_STAR_.call(null,inst_383195);var inst_383197 = cljs.core.async.close_BANG_.call(null,inst_383196);var inst_383198 = (inst_383190 + 1);var tmp383260 = inst_383188;var tmp383261 = inst_383189;var tmp383262 = inst_383187;var inst_383187__$1 = tmp383262;var inst_383188__$1 = tmp383260;var inst_383189__$1 = tmp383261;var inst_383190__$1 = inst_383198;var state_383248__$1 = (function (){var statearr_383266 = state_383248;(statearr_383266[8] = inst_383190__$1);
(statearr_383266[9] = inst_383188__$1);
(statearr_383266[14] = inst_383197);
(statearr_383266[10] = inst_383189__$1);
(statearr_383266[11] = inst_383187__$1);
return statearr_383266;
})();var statearr_383267_383307 = state_383248__$1;(statearr_383267_383307[2] = null);
(statearr_383267_383307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 11))
{var inst_383187 = (state_383248[11]);var inst_383201 = (state_383248[15]);var inst_383201__$1 = cljs.core.seq.call(null,inst_383187);var state_383248__$1 = (function (){var statearr_383268 = state_383248;(statearr_383268[15] = inst_383201__$1);
return statearr_383268;
})();if(inst_383201__$1)
{var statearr_383269_383308 = state_383248__$1;(statearr_383269_383308[1] = 13);
} else
{var statearr_383270_383309 = state_383248__$1;(statearr_383270_383309[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 12))
{var inst_383221 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383271_383310 = state_383248__$1;(statearr_383271_383310[2] = inst_383221);
(statearr_383271_383310[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 13))
{var inst_383201 = (state_383248[15]);var inst_383203 = cljs.core.chunked_seq_QMARK_.call(null,inst_383201);var state_383248__$1 = state_383248;if(inst_383203)
{var statearr_383272_383311 = state_383248__$1;(statearr_383272_383311[1] = 16);
} else
{var statearr_383273_383312 = state_383248__$1;(statearr_383273_383312[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 14))
{var state_383248__$1 = state_383248;var statearr_383274_383313 = state_383248__$1;(statearr_383274_383313[2] = null);
(statearr_383274_383313[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 15))
{var inst_383219 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383275_383314 = state_383248__$1;(statearr_383275_383314[2] = inst_383219);
(statearr_383275_383314[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 16))
{var inst_383201 = (state_383248[15]);var inst_383205 = cljs.core.chunk_first.call(null,inst_383201);var inst_383206 = cljs.core.chunk_rest.call(null,inst_383201);var inst_383207 = cljs.core.count.call(null,inst_383205);var inst_383187 = inst_383206;var inst_383188 = inst_383205;var inst_383189 = inst_383207;var inst_383190 = 0;var state_383248__$1 = (function (){var statearr_383276 = state_383248;(statearr_383276[8] = inst_383190);
(statearr_383276[9] = inst_383188);
(statearr_383276[10] = inst_383189);
(statearr_383276[11] = inst_383187);
return statearr_383276;
})();var statearr_383277_383315 = state_383248__$1;(statearr_383277_383315[2] = null);
(statearr_383277_383315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 17))
{var inst_383201 = (state_383248[15]);var inst_383210 = cljs.core.first.call(null,inst_383201);var inst_383211 = cljs.core.async.muxch_STAR_.call(null,inst_383210);var inst_383212 = cljs.core.async.close_BANG_.call(null,inst_383211);var inst_383213 = cljs.core.next.call(null,inst_383201);var inst_383187 = inst_383213;var inst_383188 = null;var inst_383189 = 0;var inst_383190 = 0;var state_383248__$1 = (function (){var statearr_383278 = state_383248;(statearr_383278[8] = inst_383190);
(statearr_383278[9] = inst_383188);
(statearr_383278[10] = inst_383189);
(statearr_383278[11] = inst_383187);
(statearr_383278[16] = inst_383212);
return statearr_383278;
})();var statearr_383279_383316 = state_383248__$1;(statearr_383279_383316[2] = null);
(statearr_383279_383316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 18))
{var inst_383216 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383280_383317 = state_383248__$1;(statearr_383280_383317[2] = inst_383216);
(statearr_383280_383317[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 19))
{var state_383248__$1 = state_383248;var statearr_383281_383318 = state_383248__$1;(statearr_383281_383318[2] = null);
(statearr_383281_383318[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 20))
{var state_383248__$1 = state_383248;var statearr_383282_383319 = state_383248__$1;(statearr_383282_383319[2] = null);
(statearr_383282_383319[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 21))
{var inst_383241 = (state_383248[2]);var state_383248__$1 = (function (){var statearr_383283 = state_383248;(statearr_383283[17] = inst_383241);
return statearr_383283;
})();var statearr_383284_383320 = state_383248__$1;(statearr_383284_383320[2] = null);
(statearr_383284_383320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 22))
{var inst_383238 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383285_383321 = state_383248__$1;(statearr_383285_383321[2] = inst_383238);
(statearr_383285_383321[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 23))
{var inst_383225 = (state_383248[12]);var inst_383229 = (state_383248[2]);var inst_383230 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_383225);var state_383248__$1 = (function (){var statearr_383286 = state_383248;(statearr_383286[18] = inst_383229);
return statearr_383286;
})();var statearr_383287_383322 = state_383248__$1;(statearr_383287_383322[2] = inst_383230);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383248__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383249 === 24))
{var inst_383227 = (state_383248[13]);var inst_383177 = (state_383248[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_383248,23,Object,null,22);var inst_383234 = cljs.core.async.muxch_STAR_.call(null,inst_383227);var state_383248__$1 = state_383248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383248__$1,25,inst_383234,inst_383177);
} else
{if((state_val_383249 === 25))
{var inst_383236 = (state_383248[2]);var state_383248__$1 = state_383248;var statearr_383288_383323 = state_383248__$1;(statearr_383288_383323[2] = inst_383236);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383248__$1);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_383292[0] = state_machine__18220__auto__);
(statearr_383292[1] = 1);
return statearr_383292;
});
var state_machine__18220__auto____1 = (function (state_383248){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_383248);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383293){if((e383293 instanceof Object))
{var ex__18223__auto__ = e383293;var statearr_383294_383324 = state_383248;(statearr_383294_383324[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383325 = state_383248;
state_383248 = G__383325;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_383248){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_383248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383295 = f__18290__auto__.call(null);(statearr_383295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383296);
return statearr_383295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
,cljs.core.range.call(null,cnt));var c__18289__auto___383462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_383432){var state_val_383433 = (state_383432[1]);if((state_val_383433 === 1))
{var state_383432__$1 = state_383432;var statearr_383434_383463 = state_383432__$1;(statearr_383434_383463[2] = null);
(statearr_383434_383463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 2))
{var inst_383395 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_383396 = 0;var state_383432__$1 = (function (){var statearr_383435 = state_383432;(statearr_383435[7] = inst_383396);
(statearr_383435[8] = inst_383395);
return statearr_383435;
})();var statearr_383436_383464 = state_383432__$1;(statearr_383436_383464[2] = null);
(statearr_383436_383464[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 3))
{var inst_383430 = (state_383432[2]);var state_383432__$1 = state_383432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_383432__$1,inst_383430);
} else
{if((state_val_383433 === 4))
{var inst_383396 = (state_383432[7]);var inst_383398 = (inst_383396 < cnt);var state_383432__$1 = state_383432;if(cljs.core.truth_(inst_383398))
{var statearr_383437_383465 = state_383432__$1;(statearr_383437_383465[1] = 6);
} else
{var statearr_383438_383466 = state_383432__$1;(statearr_383438_383466[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 5))
{var inst_383416 = (state_383432[2]);var state_383432__$1 = (function (){var statearr_383439 = state_383432;(statearr_383439[9] = inst_383416);
return statearr_383439;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_383432__$1,12,dchan);
} else
{if((state_val_383433 === 6))
{var state_383432__$1 = state_383432;var statearr_383440_383467 = state_383432__$1;(statearr_383440_383467[2] = null);
(statearr_383440_383467[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 7))
{var state_383432__$1 = state_383432;var statearr_383441_383468 = state_383432__$1;(statearr_383441_383468[2] = null);
(statearr_383441_383468[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 8))
{var inst_383414 = (state_383432[2]);var state_383432__$1 = state_383432;var statearr_383442_383469 = state_383432__$1;(statearr_383442_383469[2] = inst_383414);
(statearr_383442_383469[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 9))
{var inst_383396 = (state_383432[7]);var inst_383409 = (state_383432[2]);var inst_383410 = (inst_383396 + 1);var inst_383396__$1 = inst_383410;var state_383432__$1 = (function (){var statearr_383443 = state_383432;(statearr_383443[10] = inst_383409);
(statearr_383443[7] = inst_383396__$1);
return statearr_383443;
})();var statearr_383444_383470 = state_383432__$1;(statearr_383444_383470[2] = null);
(statearr_383444_383470[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 10))
{var inst_383400 = (state_383432[2]);var inst_383401 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_383432__$1 = (function (){var statearr_383445 = state_383432;(statearr_383445[11] = inst_383400);
return statearr_383445;
})();var statearr_383446_383471 = state_383432__$1;(statearr_383446_383471[2] = inst_383401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383432__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 11))
{var inst_383396 = (state_383432[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_383432,10,Object,null,9);var inst_383405 = chs__$1.call(null,inst_383396);var inst_383406 = done.call(null,inst_383396);var inst_383407 = cljs.core.async.take_BANG_.call(null,inst_383405,inst_383406);var state_383432__$1 = state_383432;var statearr_383447_383472 = state_383432__$1;(statearr_383447_383472[2] = inst_383407);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383432__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 12))
{var inst_383418 = (state_383432[12]);var inst_383418__$1 = (state_383432[2]);var inst_383419 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_383418__$1);var state_383432__$1 = (function (){var statearr_383448 = state_383432;(statearr_383448[12] = inst_383418__$1);
return statearr_383448;
})();if(cljs.core.truth_(inst_383419))
{var statearr_383449_383473 = state_383432__$1;(statearr_383449_383473[1] = 13);
} else
{var statearr_383450_383474 = state_383432__$1;(statearr_383450_383474[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 13))
{var inst_383421 = cljs.core.async.close_BANG_.call(null,out);var state_383432__$1 = state_383432;var statearr_383451_383475 = state_383432__$1;(statearr_383451_383475[2] = inst_383421);
(statearr_383451_383475[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 14))
{var inst_383418 = (state_383432[12]);var inst_383423 = cljs.core.apply.call(null,f,inst_383418);var state_383432__$1 = state_383432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383432__$1,16,out,inst_383423);
} else
{if((state_val_383433 === 15))
{var inst_383428 = (state_383432[2]);var state_383432__$1 = state_383432;var statearr_383452_383476 = state_383432__$1;(statearr_383452_383476[2] = inst_383428);
(statearr_383452_383476[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383433 === 16))
{var inst_383425 = (state_383432[2]);var state_383432__$1 = (function (){var statearr_383453 = state_383432;(statearr_383453[13] = inst_383425);
return statearr_383453;
})();var statearr_383454_383477 = state_383432__$1;(statearr_383454_383477[2] = null);
(statearr_383454_383477[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_383458[0] = state_machine__18220__auto__);
(statearr_383458[1] = 1);
return statearr_383458;
});
var state_machine__18220__auto____1 = (function (state_383432){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_383432);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383459){if((e383459 instanceof Object))
{var ex__18223__auto__ = e383459;var statearr_383460_383478 = state_383432;(statearr_383460_383478[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383479 = state_383432;
state_383432 = G__383479;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_383432){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_383432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383461 = f__18290__auto__.call(null);(statearr_383461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383462);
return statearr_383461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___383587 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_383563){var state_val_383564 = (state_383563[1]);if((state_val_383564 === 1))
{var inst_383534 = cljs.core.vec.call(null,chs);var inst_383535 = inst_383534;var state_383563__$1 = (function (){var statearr_383565 = state_383563;(statearr_383565[7] = inst_383535);
return statearr_383565;
})();var statearr_383566_383588 = state_383563__$1;(statearr_383566_383588[2] = null);
(statearr_383566_383588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 2))
{var inst_383535 = (state_383563[7]);var inst_383537 = cljs.core.count.call(null,inst_383535);var inst_383538 = (inst_383537 > 0);var state_383563__$1 = state_383563;if(cljs.core.truth_(inst_383538))
{var statearr_383567_383589 = state_383563__$1;(statearr_383567_383589[1] = 4);
} else
{var statearr_383568_383590 = state_383563__$1;(statearr_383568_383590[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 3))
{var inst_383561 = (state_383563[2]);var state_383563__$1 = state_383563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_383563__$1,inst_383561);
} else
{if((state_val_383564 === 4))
{var inst_383535 = (state_383563[7]);var state_383563__$1 = state_383563;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_383563__$1,7,inst_383535);
} else
{if((state_val_383564 === 5))
{var inst_383557 = cljs.core.async.close_BANG_.call(null,out);var state_383563__$1 = state_383563;var statearr_383569_383591 = state_383563__$1;(statearr_383569_383591[2] = inst_383557);
(statearr_383569_383591[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 6))
{var inst_383559 = (state_383563[2]);var state_383563__$1 = state_383563;var statearr_383570_383592 = state_383563__$1;(statearr_383570_383592[2] = inst_383559);
(statearr_383570_383592[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 7))
{var inst_383542 = (state_383563[8]);var inst_383543 = (state_383563[9]);var inst_383542__$1 = (state_383563[2]);var inst_383543__$1 = cljs.core.nth.call(null,inst_383542__$1,0,null);var inst_383544 = cljs.core.nth.call(null,inst_383542__$1,1,null);var inst_383545 = (inst_383543__$1 == null);var state_383563__$1 = (function (){var statearr_383571 = state_383563;(statearr_383571[8] = inst_383542__$1);
(statearr_383571[9] = inst_383543__$1);
(statearr_383571[10] = inst_383544);
return statearr_383571;
})();if(cljs.core.truth_(inst_383545))
{var statearr_383572_383593 = state_383563__$1;(statearr_383572_383593[1] = 8);
} else
{var statearr_383573_383594 = state_383563__$1;(statearr_383573_383594[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 8))
{var inst_383535 = (state_383563[7]);var inst_383542 = (state_383563[8]);var inst_383543 = (state_383563[9]);var inst_383544 = (state_383563[10]);var inst_383547 = (function (){var c = inst_383544;var v = inst_383543;var vec__383540 = inst_383542;var cs = inst_383535;return ((function (c,v,vec__383540,cs,inst_383535,inst_383542,inst_383543,inst_383544,state_val_383564){
return (function (p1__383480_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__383480_SHARP_);
});
;})(c,v,vec__383540,cs,inst_383535,inst_383542,inst_383543,inst_383544,state_val_383564))
})();var inst_383548 = cljs.core.filterv.call(null,inst_383547,inst_383535);var inst_383535__$1 = inst_383548;var state_383563__$1 = (function (){var statearr_383574 = state_383563;(statearr_383574[7] = inst_383535__$1);
return statearr_383574;
})();var statearr_383575_383595 = state_383563__$1;(statearr_383575_383595[2] = null);
(statearr_383575_383595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 9))
{var inst_383543 = (state_383563[9]);var state_383563__$1 = state_383563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383563__$1,11,out,inst_383543);
} else
{if((state_val_383564 === 10))
{var inst_383555 = (state_383563[2]);var state_383563__$1 = state_383563;var statearr_383577_383596 = state_383563__$1;(statearr_383577_383596[2] = inst_383555);
(statearr_383577_383596[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383564 === 11))
{var inst_383535 = (state_383563[7]);var inst_383552 = (state_383563[2]);var tmp383576 = inst_383535;var inst_383535__$1 = tmp383576;var state_383563__$1 = (function (){var statearr_383578 = state_383563;(statearr_383578[11] = inst_383552);
(statearr_383578[7] = inst_383535__$1);
return statearr_383578;
})();var statearr_383579_383597 = state_383563__$1;(statearr_383579_383597[2] = null);
(statearr_383579_383597[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383583 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_383583[0] = state_machine__18220__auto__);
(statearr_383583[1] = 1);
return statearr_383583;
});
var state_machine__18220__auto____1 = (function (state_383563){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_383563);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383584){if((e383584 instanceof Object))
{var ex__18223__auto__ = e383584;var statearr_383585_383598 = state_383563;(statearr_383585_383598[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383599 = state_383563;
state_383563 = G__383599;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_383563){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_383563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383586 = f__18290__auto__.call(null);(statearr_383586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383587);
return statearr_383586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___383692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_383669){var state_val_383670 = (state_383669[1]);if((state_val_383670 === 1))
{var inst_383646 = 0;var state_383669__$1 = (function (){var statearr_383671 = state_383669;(statearr_383671[7] = inst_383646);
return statearr_383671;
})();var statearr_383672_383693 = state_383669__$1;(statearr_383672_383693[2] = null);
(statearr_383672_383693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 2))
{var inst_383646 = (state_383669[7]);var inst_383648 = (inst_383646 < n);var state_383669__$1 = state_383669;if(cljs.core.truth_(inst_383648))
{var statearr_383673_383694 = state_383669__$1;(statearr_383673_383694[1] = 4);
} else
{var statearr_383674_383695 = state_383669__$1;(statearr_383674_383695[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 3))
{var inst_383666 = (state_383669[2]);var inst_383667 = cljs.core.async.close_BANG_.call(null,out);var state_383669__$1 = (function (){var statearr_383675 = state_383669;(statearr_383675[8] = inst_383666);
return statearr_383675;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_383669__$1,inst_383667);
} else
{if((state_val_383670 === 4))
{var state_383669__$1 = state_383669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_383669__$1,7,ch);
} else
{if((state_val_383670 === 5))
{var state_383669__$1 = state_383669;var statearr_383676_383696 = state_383669__$1;(statearr_383676_383696[2] = null);
(statearr_383676_383696[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 6))
{var inst_383664 = (state_383669[2]);var state_383669__$1 = state_383669;var statearr_383677_383697 = state_383669__$1;(statearr_383677_383697[2] = inst_383664);
(statearr_383677_383697[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 7))
{var inst_383651 = (state_383669[9]);var inst_383651__$1 = (state_383669[2]);var inst_383652 = (inst_383651__$1 == null);var inst_383653 = cljs.core.not.call(null,inst_383652);var state_383669__$1 = (function (){var statearr_383678 = state_383669;(statearr_383678[9] = inst_383651__$1);
return statearr_383678;
})();if(inst_383653)
{var statearr_383679_383698 = state_383669__$1;(statearr_383679_383698[1] = 8);
} else
{var statearr_383680_383699 = state_383669__$1;(statearr_383680_383699[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 8))
{var inst_383651 = (state_383669[9]);var state_383669__$1 = state_383669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383669__$1,11,out,inst_383651);
} else
{if((state_val_383670 === 9))
{var state_383669__$1 = state_383669;var statearr_383681_383700 = state_383669__$1;(statearr_383681_383700[2] = null);
(statearr_383681_383700[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 10))
{var inst_383661 = (state_383669[2]);var state_383669__$1 = state_383669;var statearr_383682_383701 = state_383669__$1;(statearr_383682_383701[2] = inst_383661);
(statearr_383682_383701[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383670 === 11))
{var inst_383646 = (state_383669[7]);var inst_383656 = (state_383669[2]);var inst_383657 = (inst_383646 + 1);var inst_383646__$1 = inst_383657;var state_383669__$1 = (function (){var statearr_383683 = state_383669;(statearr_383683[7] = inst_383646__$1);
(statearr_383683[10] = inst_383656);
return statearr_383683;
})();var statearr_383684_383702 = state_383669__$1;(statearr_383684_383702[2] = null);
(statearr_383684_383702[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383688 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_383688[0] = state_machine__18220__auto__);
(statearr_383688[1] = 1);
return statearr_383688;
});
var state_machine__18220__auto____1 = (function (state_383669){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_383669);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383689){if((e383689 instanceof Object))
{var ex__18223__auto__ = e383689;var statearr_383690_383703 = state_383669;(statearr_383690_383703[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383704 = state_383669;
state_383669 = G__383704;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_383669){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_383669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383691 = f__18290__auto__.call(null);(statearr_383691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383692);
return statearr_383691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___383801 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_383776){var state_val_383777 = (state_383776[1]);if((state_val_383777 === 1))
{var inst_383753 = null;var state_383776__$1 = (function (){var statearr_383778 = state_383776;(statearr_383778[7] = inst_383753);
return statearr_383778;
})();var statearr_383779_383802 = state_383776__$1;(statearr_383779_383802[2] = null);
(statearr_383779_383802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 2))
{var state_383776__$1 = state_383776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_383776__$1,4,ch);
} else
{if((state_val_383777 === 3))
{var inst_383773 = (state_383776[2]);var inst_383774 = cljs.core.async.close_BANG_.call(null,out);var state_383776__$1 = (function (){var statearr_383780 = state_383776;(statearr_383780[8] = inst_383773);
return statearr_383780;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_383776__$1,inst_383774);
} else
{if((state_val_383777 === 4))
{var inst_383756 = (state_383776[9]);var inst_383756__$1 = (state_383776[2]);var inst_383757 = (inst_383756__$1 == null);var inst_383758 = cljs.core.not.call(null,inst_383757);var state_383776__$1 = (function (){var statearr_383781 = state_383776;(statearr_383781[9] = inst_383756__$1);
return statearr_383781;
})();if(inst_383758)
{var statearr_383782_383803 = state_383776__$1;(statearr_383782_383803[1] = 5);
} else
{var statearr_383783_383804 = state_383776__$1;(statearr_383783_383804[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 5))
{var inst_383753 = (state_383776[7]);var inst_383756 = (state_383776[9]);var inst_383760 = cljs.core._EQ_.call(null,inst_383756,inst_383753);var state_383776__$1 = state_383776;if(inst_383760)
{var statearr_383784_383805 = state_383776__$1;(statearr_383784_383805[1] = 8);
} else
{var statearr_383785_383806 = state_383776__$1;(statearr_383785_383806[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 6))
{var state_383776__$1 = state_383776;var statearr_383787_383807 = state_383776__$1;(statearr_383787_383807[2] = null);
(statearr_383787_383807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 7))
{var inst_383771 = (state_383776[2]);var state_383776__$1 = state_383776;var statearr_383788_383808 = state_383776__$1;(statearr_383788_383808[2] = inst_383771);
(statearr_383788_383808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 8))
{var inst_383753 = (state_383776[7]);var tmp383786 = inst_383753;var inst_383753__$1 = tmp383786;var state_383776__$1 = (function (){var statearr_383789 = state_383776;(statearr_383789[7] = inst_383753__$1);
return statearr_383789;
})();var statearr_383790_383809 = state_383776__$1;(statearr_383790_383809[2] = null);
(statearr_383790_383809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 9))
{var inst_383756 = (state_383776[9]);var state_383776__$1 = state_383776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383776__$1,11,out,inst_383756);
} else
{if((state_val_383777 === 10))
{var inst_383768 = (state_383776[2]);var state_383776__$1 = state_383776;var statearr_383791_383810 = state_383776__$1;(statearr_383791_383810[2] = inst_383768);
(statearr_383791_383810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383777 === 11))
{var inst_383756 = (state_383776[9]);var inst_383765 = (state_383776[2]);var inst_383753 = inst_383756;var state_383776__$1 = (function (){var statearr_383792 = state_383776;(statearr_383792[10] = inst_383765);
(statearr_383792[7] = inst_383753);
return statearr_383792;
})();var statearr_383793_383811 = state_383776__$1;(statearr_383793_383811[2] = null);
(statearr_383793_383811[1] = 2);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383797 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_383797[0] = state_machine__18220__auto__);
(statearr_383797[1] = 1);
return statearr_383797;
});
var state_machine__18220__auto____1 = (function (state_383776){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_383776);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383798){if((e383798 instanceof Object))
{var ex__18223__auto__ = e383798;var statearr_383799_383812 = state_383776;(statearr_383799_383812[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383813 = state_383776;
state_383776 = G__383813;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_383776){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_383776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383800 = f__18290__auto__.call(null);(statearr_383800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383801);
return statearr_383800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___383948 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_383918){var state_val_383919 = (state_383918[1]);if((state_val_383919 === 1))
{var inst_383881 = (new Array(n));var inst_383882 = inst_383881;var inst_383883 = 0;var state_383918__$1 = (function (){var statearr_383920 = state_383918;(statearr_383920[7] = inst_383882);
(statearr_383920[8] = inst_383883);
return statearr_383920;
})();var statearr_383921_383949 = state_383918__$1;(statearr_383921_383949[2] = null);
(statearr_383921_383949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 2))
{var state_383918__$1 = state_383918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_383918__$1,4,ch);
} else
{if((state_val_383919 === 3))
{var inst_383916 = (state_383918[2]);var state_383918__$1 = state_383918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_383918__$1,inst_383916);
} else
{if((state_val_383919 === 4))
{var inst_383886 = (state_383918[9]);var inst_383886__$1 = (state_383918[2]);var inst_383887 = (inst_383886__$1 == null);var inst_383888 = cljs.core.not.call(null,inst_383887);var state_383918__$1 = (function (){var statearr_383922 = state_383918;(statearr_383922[9] = inst_383886__$1);
return statearr_383922;
})();if(inst_383888)
{var statearr_383923_383950 = state_383918__$1;(statearr_383923_383950[1] = 5);
} else
{var statearr_383924_383951 = state_383918__$1;(statearr_383924_383951[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 5))
{var inst_383886 = (state_383918[9]);var inst_383891 = (state_383918[10]);var inst_383882 = (state_383918[7]);var inst_383883 = (state_383918[8]);var inst_383890 = (inst_383882[inst_383883] = inst_383886);var inst_383891__$1 = (inst_383883 + 1);var inst_383892 = (inst_383891__$1 < n);var state_383918__$1 = (function (){var statearr_383925 = state_383918;(statearr_383925[10] = inst_383891__$1);
(statearr_383925[11] = inst_383890);
return statearr_383925;
})();if(cljs.core.truth_(inst_383892))
{var statearr_383926_383952 = state_383918__$1;(statearr_383926_383952[1] = 8);
} else
{var statearr_383927_383953 = state_383918__$1;(statearr_383927_383953[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 6))
{var inst_383883 = (state_383918[8]);var inst_383904 = (inst_383883 > 0);var state_383918__$1 = state_383918;if(cljs.core.truth_(inst_383904))
{var statearr_383929_383954 = state_383918__$1;(statearr_383929_383954[1] = 12);
} else
{var statearr_383930_383955 = state_383918__$1;(statearr_383930_383955[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 7))
{var inst_383914 = (state_383918[2]);var state_383918__$1 = state_383918;var statearr_383931_383956 = state_383918__$1;(statearr_383931_383956[2] = inst_383914);
(statearr_383931_383956[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 8))
{var inst_383891 = (state_383918[10]);var inst_383882 = (state_383918[7]);var tmp383928 = inst_383882;var inst_383882__$1 = tmp383928;var inst_383883 = inst_383891;var state_383918__$1 = (function (){var statearr_383932 = state_383918;(statearr_383932[7] = inst_383882__$1);
(statearr_383932[8] = inst_383883);
return statearr_383932;
})();var statearr_383933_383957 = state_383918__$1;(statearr_383933_383957[2] = null);
(statearr_383933_383957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 9))
{var inst_383882 = (state_383918[7]);var inst_383896 = cljs.core.vec.call(null,inst_383882);var state_383918__$1 = state_383918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383918__$1,11,out,inst_383896);
} else
{if((state_val_383919 === 10))
{var inst_383902 = (state_383918[2]);var state_383918__$1 = state_383918;var statearr_383934_383958 = state_383918__$1;(statearr_383934_383958[2] = inst_383902);
(statearr_383934_383958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 11))
{var inst_383898 = (state_383918[2]);var inst_383899 = (new Array(n));var inst_383882 = inst_383899;var inst_383883 = 0;var state_383918__$1 = (function (){var statearr_383935 = state_383918;(statearr_383935[12] = inst_383898);
(statearr_383935[7] = inst_383882);
(statearr_383935[8] = inst_383883);
return statearr_383935;
})();var statearr_383936_383959 = state_383918__$1;(statearr_383936_383959[2] = null);
(statearr_383936_383959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 12))
{var inst_383882 = (state_383918[7]);var inst_383906 = cljs.core.vec.call(null,inst_383882);var state_383918__$1 = state_383918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_383918__$1,15,out,inst_383906);
} else
{if((state_val_383919 === 13))
{var state_383918__$1 = state_383918;var statearr_383937_383960 = state_383918__$1;(statearr_383937_383960[2] = null);
(statearr_383937_383960[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 14))
{var inst_383911 = (state_383918[2]);var inst_383912 = cljs.core.async.close_BANG_.call(null,out);var state_383918__$1 = (function (){var statearr_383938 = state_383918;(statearr_383938[13] = inst_383911);
return statearr_383938;
})();var statearr_383939_383961 = state_383918__$1;(statearr_383939_383961[2] = inst_383912);
(statearr_383939_383961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_383919 === 15))
{var inst_383908 = (state_383918[2]);var state_383918__$1 = state_383918;var statearr_383940_383962 = state_383918__$1;(statearr_383940_383962[2] = inst_383908);
(statearr_383940_383962[1] = 14);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_383944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_383944[0] = state_machine__18220__auto__);
(statearr_383944[1] = 1);
return statearr_383944;
});
var state_machine__18220__auto____1 = (function (state_383918){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_383918);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e383945){if((e383945 instanceof Object))
{var ex__18223__auto__ = e383945;var statearr_383946_383963 = state_383918;(statearr_383946_383963[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_383918);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e383945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__383964 = state_383918;
state_383918 = G__383964;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_383918){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_383918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_383947 = f__18290__auto__.call(null);(statearr_383947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___383948);
return statearr_383947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___384107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_384077){var state_val_384078 = (state_384077[1]);if((state_val_384078 === 1))
{var inst_384036 = [];var inst_384037 = inst_384036;var inst_384038 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_384077__$1 = (function (){var statearr_384079 = state_384077;(statearr_384079[7] = inst_384037);
(statearr_384079[8] = inst_384038);
return statearr_384079;
})();var statearr_384080_384108 = state_384077__$1;(statearr_384080_384108[2] = null);
(statearr_384080_384108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 2))
{var state_384077__$1 = state_384077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_384077__$1,4,ch);
} else
{if((state_val_384078 === 3))
{var inst_384075 = (state_384077[2]);var state_384077__$1 = state_384077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_384077__$1,inst_384075);
} else
{if((state_val_384078 === 4))
{var inst_384041 = (state_384077[9]);var inst_384041__$1 = (state_384077[2]);var inst_384042 = (inst_384041__$1 == null);var inst_384043 = cljs.core.not.call(null,inst_384042);var state_384077__$1 = (function (){var statearr_384081 = state_384077;(statearr_384081[9] = inst_384041__$1);
return statearr_384081;
})();if(inst_384043)
{var statearr_384082_384109 = state_384077__$1;(statearr_384082_384109[1] = 5);
} else
{var statearr_384083_384110 = state_384077__$1;(statearr_384083_384110[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 5))
{var inst_384041 = (state_384077[9]);var inst_384045 = (state_384077[10]);var inst_384038 = (state_384077[8]);var inst_384045__$1 = f.call(null,inst_384041);var inst_384046 = cljs.core._EQ_.call(null,inst_384045__$1,inst_384038);var inst_384047 = cljs.core.keyword_identical_QMARK_.call(null,inst_384038,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_384048 = (inst_384046) || (inst_384047);var state_384077__$1 = (function (){var statearr_384084 = state_384077;(statearr_384084[10] = inst_384045__$1);
return statearr_384084;
})();if(cljs.core.truth_(inst_384048))
{var statearr_384085_384111 = state_384077__$1;(statearr_384085_384111[1] = 8);
} else
{var statearr_384086_384112 = state_384077__$1;(statearr_384086_384112[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 6))
{var inst_384037 = (state_384077[7]);var inst_384062 = inst_384037.length;var inst_384063 = (inst_384062 > 0);var state_384077__$1 = state_384077;if(cljs.core.truth_(inst_384063))
{var statearr_384088_384113 = state_384077__$1;(statearr_384088_384113[1] = 12);
} else
{var statearr_384089_384114 = state_384077__$1;(statearr_384089_384114[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 7))
{var inst_384073 = (state_384077[2]);var state_384077__$1 = state_384077;var statearr_384090_384115 = state_384077__$1;(statearr_384090_384115[2] = inst_384073);
(statearr_384090_384115[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 8))
{var inst_384041 = (state_384077[9]);var inst_384045 = (state_384077[10]);var inst_384037 = (state_384077[7]);var inst_384050 = inst_384037.push(inst_384041);var tmp384087 = inst_384037;var inst_384037__$1 = tmp384087;var inst_384038 = inst_384045;var state_384077__$1 = (function (){var statearr_384091 = state_384077;(statearr_384091[11] = inst_384050);
(statearr_384091[7] = inst_384037__$1);
(statearr_384091[8] = inst_384038);
return statearr_384091;
})();var statearr_384092_384116 = state_384077__$1;(statearr_384092_384116[2] = null);
(statearr_384092_384116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 9))
{var inst_384037 = (state_384077[7]);var inst_384053 = cljs.core.vec.call(null,inst_384037);var state_384077__$1 = state_384077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_384077__$1,11,out,inst_384053);
} else
{if((state_val_384078 === 10))
{var inst_384060 = (state_384077[2]);var state_384077__$1 = state_384077;var statearr_384093_384117 = state_384077__$1;(statearr_384093_384117[2] = inst_384060);
(statearr_384093_384117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 11))
{var inst_384041 = (state_384077[9]);var inst_384045 = (state_384077[10]);var inst_384055 = (state_384077[2]);var inst_384056 = [];var inst_384057 = inst_384056.push(inst_384041);var inst_384037 = inst_384056;var inst_384038 = inst_384045;var state_384077__$1 = (function (){var statearr_384094 = state_384077;(statearr_384094[12] = inst_384055);
(statearr_384094[7] = inst_384037);
(statearr_384094[8] = inst_384038);
(statearr_384094[13] = inst_384057);
return statearr_384094;
})();var statearr_384095_384118 = state_384077__$1;(statearr_384095_384118[2] = null);
(statearr_384095_384118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 12))
{var inst_384037 = (state_384077[7]);var inst_384065 = cljs.core.vec.call(null,inst_384037);var state_384077__$1 = state_384077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_384077__$1,15,out,inst_384065);
} else
{if((state_val_384078 === 13))
{var state_384077__$1 = state_384077;var statearr_384096_384119 = state_384077__$1;(statearr_384096_384119[2] = null);
(statearr_384096_384119[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 14))
{var inst_384070 = (state_384077[2]);var inst_384071 = cljs.core.async.close_BANG_.call(null,out);var state_384077__$1 = (function (){var statearr_384097 = state_384077;(statearr_384097[14] = inst_384070);
return statearr_384097;
})();var statearr_384098_384120 = state_384077__$1;(statearr_384098_384120[2] = inst_384071);
(statearr_384098_384120[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_384078 === 15))
{var inst_384067 = (state_384077[2]);var state_384077__$1 = state_384077;var statearr_384099_384121 = state_384077__$1;(statearr_384099_384121[2] = inst_384067);
(statearr_384099_384121[1] = 14);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_384103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_384103[0] = state_machine__18220__auto__);
(statearr_384103[1] = 1);
return statearr_384103;
});
var state_machine__18220__auto____1 = (function (state_384077){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_384077);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e384104){if((e384104 instanceof Object))
{var ex__18223__auto__ = e384104;var statearr_384105_384122 = state_384077;(statearr_384105_384122[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_384077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e384104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__384123 = state_384077;
state_384077 = G__384123;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_384077){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_384077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_384106 = f__18290__auto__.call(null);(statearr_384106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___384107);
return statearr_384106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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