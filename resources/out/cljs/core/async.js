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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t372770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372770 = (function (f,fn_handler,meta372771){
this.f = f;
this.fn_handler = fn_handler;
this.meta372771 = meta372771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372770.cljs$lang$type = true;
cljs.core.async.t372770.cljs$lang$ctorStr = "cljs.core.async/t372770";
cljs.core.async.t372770.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372770");
});
cljs.core.async.t372770.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t372770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t372770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t372770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372772){var self__ = this;
var _372772__$1 = this;return self__.meta372771;
});
cljs.core.async.t372770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372772,meta372771__$1){var self__ = this;
var _372772__$1 = this;return (new cljs.core.async.t372770(self__.f,self__.fn_handler,meta372771__$1));
});
cljs.core.async.__GT_t372770 = (function __GT_t372770(f__$1,fn_handler__$1,meta372771){return (new cljs.core.async.t372770(f__$1,fn_handler__$1,meta372771));
});
}
return (new cljs.core.async.t372770(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__372774 = buff;if(G__372774)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__372774.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__372774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__372774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__372774);
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
{var val_372775 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_372775);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_372775);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14807__auto___372776 = n;var x_372777 = 0;while(true){
if((x_372777 < n__14807__auto___372776))
{(a[x_372777] = 0);
{
var G__372778 = (x_372777 + 1);
x_372777 = G__372778;
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
var G__372779 = (i + 1);
i = G__372779;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t372783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372783 = (function (flag,alt_flag,meta372784){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta372784 = meta372784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372783.cljs$lang$type = true;
cljs.core.async.t372783.cljs$lang$ctorStr = "cljs.core.async/t372783";
cljs.core.async.t372783.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372783");
});
cljs.core.async.t372783.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t372783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t372783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t372783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372785){var self__ = this;
var _372785__$1 = this;return self__.meta372784;
});
cljs.core.async.t372783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372785,meta372784__$1){var self__ = this;
var _372785__$1 = this;return (new cljs.core.async.t372783(self__.flag,self__.alt_flag,meta372784__$1));
});
cljs.core.async.__GT_t372783 = (function __GT_t372783(flag__$1,alt_flag__$1,meta372784){return (new cljs.core.async.t372783(flag__$1,alt_flag__$1,meta372784));
});
}
return (new cljs.core.async.t372783(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t372789 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372789 = (function (cb,flag,alt_handler,meta372790){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta372790 = meta372790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372789.cljs$lang$type = true;
cljs.core.async.t372789.cljs$lang$ctorStr = "cljs.core.async/t372789";
cljs.core.async.t372789.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372789");
});
cljs.core.async.t372789.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t372789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t372789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t372789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372791){var self__ = this;
var _372791__$1 = this;return self__.meta372790;
});
cljs.core.async.t372789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372791,meta372790__$1){var self__ = this;
var _372791__$1 = this;return (new cljs.core.async.t372789(self__.cb,self__.flag,self__.alt_handler,meta372790__$1));
});
cljs.core.async.__GT_t372789 = (function __GT_t372789(cb__$1,flag__$1,alt_handler__$1,meta372790){return (new cljs.core.async.t372789(cb__$1,flag__$1,alt_handler__$1,meta372790));
});
}
return (new cljs.core.async.t372789(cb,flag,alt_handler,null));
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
return (function (p1__372792_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__372792_SHARP_,port], null));
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
var G__372793 = (i + 1);
i = G__372793;
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
var alts_BANG___delegate = function (ports,p__372794){var map__372796 = p__372794;var map__372796__$1 = ((cljs.core.seq_QMARK_.call(null,map__372796))?cljs.core.apply.call(null,cljs.core.hash_map,map__372796):map__372796);var opts = map__372796__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__372794 = null;if (arguments.length > 1) {
  p__372794 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__372794);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__372797){
var ports = cljs.core.first(arglist__372797);
var p__372794 = cljs.core.rest(arglist__372797);
return alts_BANG___delegate(ports,p__372794);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t372805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372805 = (function (ch,f,map_LT_,meta372806){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta372806 = meta372806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372805.cljs$lang$type = true;
cljs.core.async.t372805.cljs$lang$ctorStr = "cljs.core.async/t372805";
cljs.core.async.t372805.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372805");
});
cljs.core.async.t372805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t372805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t372805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t372805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t372808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372808 = (function (fn1,_,meta372806,ch,f,map_LT_,meta372809){
this.fn1 = fn1;
this._ = _;
this.meta372806 = meta372806;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta372809 = meta372809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372808.cljs$lang$type = true;
cljs.core.async.t372808.cljs$lang$ctorStr = "cljs.core.async/t372808";
cljs.core.async.t372808.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372808");
});
cljs.core.async.t372808.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t372808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t372808.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t372808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__372798_SHARP_){return f1.call(null,(((p1__372798_SHARP_ == null))?null:self__.f.call(null,p1__372798_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t372808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372810){var self__ = this;
var _372810__$1 = this;return self__.meta372809;
});
cljs.core.async.t372808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372810,meta372809__$1){var self__ = this;
var _372810__$1 = this;return (new cljs.core.async.t372808(self__.fn1,self__._,self__.meta372806,self__.ch,self__.f,self__.map_LT_,meta372809__$1));
});
cljs.core.async.__GT_t372808 = (function __GT_t372808(fn1__$1,___$2,meta372806__$1,ch__$2,f__$2,map_LT___$2,meta372809){return (new cljs.core.async.t372808(fn1__$1,___$2,meta372806__$1,ch__$2,f__$2,map_LT___$2,meta372809));
});
}
return (new cljs.core.async.t372808(fn1,___$1,self__.meta372806,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t372805.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t372805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t372805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372807){var self__ = this;
var _372807__$1 = this;return self__.meta372806;
});
cljs.core.async.t372805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372807,meta372806__$1){var self__ = this;
var _372807__$1 = this;return (new cljs.core.async.t372805(self__.ch,self__.f,self__.map_LT_,meta372806__$1));
});
cljs.core.async.__GT_t372805 = (function __GT_t372805(ch__$1,f__$1,map_LT___$1,meta372806){return (new cljs.core.async.t372805(ch__$1,f__$1,map_LT___$1,meta372806));
});
}
return (new cljs.core.async.t372805(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t372814 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372814 = (function (ch,f,map_GT_,meta372815){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta372815 = meta372815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372814.cljs$lang$type = true;
cljs.core.async.t372814.cljs$lang$ctorStr = "cljs.core.async/t372814";
cljs.core.async.t372814.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372814");
});
cljs.core.async.t372814.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t372814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t372814.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t372814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t372814.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t372814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t372814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372816){var self__ = this;
var _372816__$1 = this;return self__.meta372815;
});
cljs.core.async.t372814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372816,meta372815__$1){var self__ = this;
var _372816__$1 = this;return (new cljs.core.async.t372814(self__.ch,self__.f,self__.map_GT_,meta372815__$1));
});
cljs.core.async.__GT_t372814 = (function __GT_t372814(ch__$1,f__$1,map_GT___$1,meta372815){return (new cljs.core.async.t372814(ch__$1,f__$1,map_GT___$1,meta372815));
});
}
return (new cljs.core.async.t372814(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t372820 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t372820 = (function (ch,p,filter_GT_,meta372821){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta372821 = meta372821;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t372820.cljs$lang$type = true;
cljs.core.async.t372820.cljs$lang$ctorStr = "cljs.core.async/t372820";
cljs.core.async.t372820.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t372820");
});
cljs.core.async.t372820.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t372820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t372820.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t372820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t372820.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t372820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t372820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_372822){var self__ = this;
var _372822__$1 = this;return self__.meta372821;
});
cljs.core.async.t372820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_372822,meta372821__$1){var self__ = this;
var _372822__$1 = this;return (new cljs.core.async.t372820(self__.ch,self__.p,self__.filter_GT_,meta372821__$1));
});
cljs.core.async.__GT_t372820 = (function __GT_t372820(ch__$1,p__$1,filter_GT___$1,meta372821){return (new cljs.core.async.t372820(ch__$1,p__$1,filter_GT___$1,meta372821));
});
}
return (new cljs.core.async.t372820(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___372905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_372884){var state_val_372885 = (state_372884[1]);if((state_val_372885 === 1))
{var state_372884__$1 = state_372884;var statearr_372886_372906 = state_372884__$1;(statearr_372886_372906[2] = null);
(statearr_372886_372906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 2))
{var state_372884__$1 = state_372884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372884__$1,4,ch);
} else
{if((state_val_372885 === 3))
{var inst_372882 = (state_372884[2]);var state_372884__$1 = state_372884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372884__$1,inst_372882);
} else
{if((state_val_372885 === 4))
{var inst_372866 = (state_372884[7]);var inst_372866__$1 = (state_372884[2]);var inst_372867 = (inst_372866__$1 == null);var state_372884__$1 = (function (){var statearr_372887 = state_372884;(statearr_372887[7] = inst_372866__$1);
return statearr_372887;
})();if(cljs.core.truth_(inst_372867))
{var statearr_372888_372907 = state_372884__$1;(statearr_372888_372907[1] = 5);
} else
{var statearr_372889_372908 = state_372884__$1;(statearr_372889_372908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 5))
{var inst_372869 = cljs.core.async.close_BANG_.call(null,out);var state_372884__$1 = state_372884;var statearr_372890_372909 = state_372884__$1;(statearr_372890_372909[2] = inst_372869);
(statearr_372890_372909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 6))
{var inst_372866 = (state_372884[7]);var inst_372871 = p.call(null,inst_372866);var state_372884__$1 = state_372884;if(cljs.core.truth_(inst_372871))
{var statearr_372891_372910 = state_372884__$1;(statearr_372891_372910[1] = 8);
} else
{var statearr_372892_372911 = state_372884__$1;(statearr_372892_372911[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 7))
{var inst_372880 = (state_372884[2]);var state_372884__$1 = state_372884;var statearr_372893_372912 = state_372884__$1;(statearr_372893_372912[2] = inst_372880);
(statearr_372893_372912[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 8))
{var inst_372866 = (state_372884[7]);var state_372884__$1 = state_372884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372884__$1,11,out,inst_372866);
} else
{if((state_val_372885 === 9))
{var state_372884__$1 = state_372884;var statearr_372894_372913 = state_372884__$1;(statearr_372894_372913[2] = null);
(statearr_372894_372913[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 10))
{var inst_372877 = (state_372884[2]);var state_372884__$1 = (function (){var statearr_372895 = state_372884;(statearr_372895[8] = inst_372877);
return statearr_372895;
})();var statearr_372896_372914 = state_372884__$1;(statearr_372896_372914[2] = null);
(statearr_372896_372914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_372885 === 11))
{var inst_372874 = (state_372884[2]);var state_372884__$1 = state_372884;var statearr_372897_372915 = state_372884__$1;(statearr_372897_372915[2] = inst_372874);
(statearr_372897_372915[1] = 10);
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
var state_machine__18220__auto____0 = (function (){var statearr_372901 = [null,null,null,null,null,null,null,null,null];(statearr_372901[0] = state_machine__18220__auto__);
(statearr_372901[1] = 1);
return statearr_372901;
});
var state_machine__18220__auto____1 = (function (state_372884){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_372884);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e372902){if((e372902 instanceof Object))
{var ex__18223__auto__ = e372902;var statearr_372903_372916 = state_372884;(statearr_372903_372916[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e372902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__372917 = state_372884;
state_372884 = G__372917;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_372884){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_372884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_372904 = f__18290__auto__.call(null);(statearr_372904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___372905);
return statearr_372904;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_373069){var state_val_373070 = (state_373069[1]);if((state_val_373070 === 1))
{var state_373069__$1 = state_373069;var statearr_373071_373108 = state_373069__$1;(statearr_373071_373108[2] = null);
(statearr_373071_373108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 2))
{var state_373069__$1 = state_373069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373069__$1,4,in$);
} else
{if((state_val_373070 === 3))
{var inst_373067 = (state_373069[2]);var state_373069__$1 = state_373069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373069__$1,inst_373067);
} else
{if((state_val_373070 === 4))
{var inst_373015 = (state_373069[7]);var inst_373015__$1 = (state_373069[2]);var inst_373016 = (inst_373015__$1 == null);var state_373069__$1 = (function (){var statearr_373072 = state_373069;(statearr_373072[7] = inst_373015__$1);
return statearr_373072;
})();if(cljs.core.truth_(inst_373016))
{var statearr_373073_373109 = state_373069__$1;(statearr_373073_373109[1] = 5);
} else
{var statearr_373074_373110 = state_373069__$1;(statearr_373074_373110[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 5))
{var inst_373018 = cljs.core.async.close_BANG_.call(null,out);var state_373069__$1 = state_373069;var statearr_373075_373111 = state_373069__$1;(statearr_373075_373111[2] = inst_373018);
(statearr_373075_373111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 6))
{var inst_373015 = (state_373069[7]);var inst_373020 = f.call(null,inst_373015);var inst_373025 = cljs.core.seq.call(null,inst_373020);var inst_373026 = inst_373025;var inst_373027 = null;var inst_373028 = 0;var inst_373029 = 0;var state_373069__$1 = (function (){var statearr_373076 = state_373069;(statearr_373076[8] = inst_373026);
(statearr_373076[9] = inst_373027);
(statearr_373076[10] = inst_373029);
(statearr_373076[11] = inst_373028);
return statearr_373076;
})();var statearr_373077_373112 = state_373069__$1;(statearr_373077_373112[2] = null);
(statearr_373077_373112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 7))
{var inst_373065 = (state_373069[2]);var state_373069__$1 = state_373069;var statearr_373078_373113 = state_373069__$1;(statearr_373078_373113[2] = inst_373065);
(statearr_373078_373113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 8))
{var inst_373029 = (state_373069[10]);var inst_373028 = (state_373069[11]);var inst_373031 = (inst_373029 < inst_373028);var inst_373032 = inst_373031;var state_373069__$1 = state_373069;if(cljs.core.truth_(inst_373032))
{var statearr_373079_373114 = state_373069__$1;(statearr_373079_373114[1] = 10);
} else
{var statearr_373080_373115 = state_373069__$1;(statearr_373080_373115[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 9))
{var inst_373062 = (state_373069[2]);var state_373069__$1 = (function (){var statearr_373081 = state_373069;(statearr_373081[12] = inst_373062);
return statearr_373081;
})();var statearr_373082_373116 = state_373069__$1;(statearr_373082_373116[2] = null);
(statearr_373082_373116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 10))
{var inst_373027 = (state_373069[9]);var inst_373029 = (state_373069[10]);var inst_373034 = cljs.core._nth.call(null,inst_373027,inst_373029);var state_373069__$1 = state_373069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373069__$1,13,out,inst_373034);
} else
{if((state_val_373070 === 11))
{var inst_373040 = (state_373069[13]);var inst_373026 = (state_373069[8]);var inst_373040__$1 = cljs.core.seq.call(null,inst_373026);var state_373069__$1 = (function (){var statearr_373086 = state_373069;(statearr_373086[13] = inst_373040__$1);
return statearr_373086;
})();if(inst_373040__$1)
{var statearr_373087_373117 = state_373069__$1;(statearr_373087_373117[1] = 14);
} else
{var statearr_373088_373118 = state_373069__$1;(statearr_373088_373118[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 12))
{var inst_373060 = (state_373069[2]);var state_373069__$1 = state_373069;var statearr_373089_373119 = state_373069__$1;(statearr_373089_373119[2] = inst_373060);
(statearr_373089_373119[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 13))
{var inst_373026 = (state_373069[8]);var inst_373027 = (state_373069[9]);var inst_373029 = (state_373069[10]);var inst_373028 = (state_373069[11]);var inst_373036 = (state_373069[2]);var inst_373037 = (inst_373029 + 1);var tmp373083 = inst_373026;var tmp373084 = inst_373027;var tmp373085 = inst_373028;var inst_373026__$1 = tmp373083;var inst_373027__$1 = tmp373084;var inst_373028__$1 = tmp373085;var inst_373029__$1 = inst_373037;var state_373069__$1 = (function (){var statearr_373090 = state_373069;(statearr_373090[14] = inst_373036);
(statearr_373090[8] = inst_373026__$1);
(statearr_373090[9] = inst_373027__$1);
(statearr_373090[10] = inst_373029__$1);
(statearr_373090[11] = inst_373028__$1);
return statearr_373090;
})();var statearr_373091_373120 = state_373069__$1;(statearr_373091_373120[2] = null);
(statearr_373091_373120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 14))
{var inst_373040 = (state_373069[13]);var inst_373042 = cljs.core.chunked_seq_QMARK_.call(null,inst_373040);var state_373069__$1 = state_373069;if(inst_373042)
{var statearr_373092_373121 = state_373069__$1;(statearr_373092_373121[1] = 17);
} else
{var statearr_373093_373122 = state_373069__$1;(statearr_373093_373122[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 15))
{var state_373069__$1 = state_373069;var statearr_373094_373123 = state_373069__$1;(statearr_373094_373123[2] = null);
(statearr_373094_373123[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 16))
{var inst_373058 = (state_373069[2]);var state_373069__$1 = state_373069;var statearr_373095_373124 = state_373069__$1;(statearr_373095_373124[2] = inst_373058);
(statearr_373095_373124[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 17))
{var inst_373040 = (state_373069[13]);var inst_373044 = cljs.core.chunk_first.call(null,inst_373040);var inst_373045 = cljs.core.chunk_rest.call(null,inst_373040);var inst_373046 = cljs.core.count.call(null,inst_373044);var inst_373026 = inst_373045;var inst_373027 = inst_373044;var inst_373028 = inst_373046;var inst_373029 = 0;var state_373069__$1 = (function (){var statearr_373096 = state_373069;(statearr_373096[8] = inst_373026);
(statearr_373096[9] = inst_373027);
(statearr_373096[10] = inst_373029);
(statearr_373096[11] = inst_373028);
return statearr_373096;
})();var statearr_373097_373125 = state_373069__$1;(statearr_373097_373125[2] = null);
(statearr_373097_373125[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 18))
{var inst_373040 = (state_373069[13]);var inst_373049 = cljs.core.first.call(null,inst_373040);var state_373069__$1 = state_373069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373069__$1,20,out,inst_373049);
} else
{if((state_val_373070 === 19))
{var inst_373055 = (state_373069[2]);var state_373069__$1 = state_373069;var statearr_373098_373126 = state_373069__$1;(statearr_373098_373126[2] = inst_373055);
(statearr_373098_373126[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373070 === 20))
{var inst_373040 = (state_373069[13]);var inst_373051 = (state_373069[2]);var inst_373052 = cljs.core.next.call(null,inst_373040);var inst_373026 = inst_373052;var inst_373027 = null;var inst_373028 = 0;var inst_373029 = 0;var state_373069__$1 = (function (){var statearr_373099 = state_373069;(statearr_373099[8] = inst_373026);
(statearr_373099[9] = inst_373027);
(statearr_373099[10] = inst_373029);
(statearr_373099[15] = inst_373051);
(statearr_373099[11] = inst_373028);
return statearr_373099;
})();var statearr_373100_373127 = state_373069__$1;(statearr_373100_373127[2] = null);
(statearr_373100_373127[1] = 8);
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
var state_machine__18220__auto____0 = (function (){var statearr_373104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_373104[0] = state_machine__18220__auto__);
(statearr_373104[1] = 1);
return statearr_373104;
});
var state_machine__18220__auto____1 = (function (state_373069){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_373069);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e373105){if((e373105 instanceof Object))
{var ex__18223__auto__ = e373105;var statearr_373106_373128 = state_373069;(statearr_373106_373128[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e373105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__373129 = state_373069;
state_373069 = G__373129;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_373069){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_373069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_373107 = f__18290__auto__.call(null);(statearr_373107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_373107;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18289__auto___373210 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_373189){var state_val_373190 = (state_373189[1]);if((state_val_373190 === 1))
{var state_373189__$1 = state_373189;var statearr_373191_373211 = state_373189__$1;(statearr_373191_373211[2] = null);
(statearr_373191_373211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 2))
{var state_373189__$1 = state_373189;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373189__$1,4,from);
} else
{if((state_val_373190 === 3))
{var inst_373187 = (state_373189[2]);var state_373189__$1 = state_373189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373189__$1,inst_373187);
} else
{if((state_val_373190 === 4))
{var inst_373172 = (state_373189[7]);var inst_373172__$1 = (state_373189[2]);var inst_373173 = (inst_373172__$1 == null);var state_373189__$1 = (function (){var statearr_373192 = state_373189;(statearr_373192[7] = inst_373172__$1);
return statearr_373192;
})();if(cljs.core.truth_(inst_373173))
{var statearr_373193_373212 = state_373189__$1;(statearr_373193_373212[1] = 5);
} else
{var statearr_373194_373213 = state_373189__$1;(statearr_373194_373213[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 5))
{var state_373189__$1 = state_373189;if(cljs.core.truth_(close_QMARK_))
{var statearr_373195_373214 = state_373189__$1;(statearr_373195_373214[1] = 8);
} else
{var statearr_373196_373215 = state_373189__$1;(statearr_373196_373215[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 6))
{var inst_373172 = (state_373189[7]);var state_373189__$1 = state_373189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373189__$1,11,to,inst_373172);
} else
{if((state_val_373190 === 7))
{var inst_373185 = (state_373189[2]);var state_373189__$1 = state_373189;var statearr_373197_373216 = state_373189__$1;(statearr_373197_373216[2] = inst_373185);
(statearr_373197_373216[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 8))
{var inst_373176 = cljs.core.async.close_BANG_.call(null,to);var state_373189__$1 = state_373189;var statearr_373198_373217 = state_373189__$1;(statearr_373198_373217[2] = inst_373176);
(statearr_373198_373217[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 9))
{var state_373189__$1 = state_373189;var statearr_373199_373218 = state_373189__$1;(statearr_373199_373218[2] = null);
(statearr_373199_373218[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 10))
{var inst_373179 = (state_373189[2]);var state_373189__$1 = state_373189;var statearr_373200_373219 = state_373189__$1;(statearr_373200_373219[2] = inst_373179);
(statearr_373200_373219[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373190 === 11))
{var inst_373182 = (state_373189[2]);var state_373189__$1 = (function (){var statearr_373201 = state_373189;(statearr_373201[8] = inst_373182);
return statearr_373201;
})();var statearr_373202_373220 = state_373189__$1;(statearr_373202_373220[2] = null);
(statearr_373202_373220[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_373206 = [null,null,null,null,null,null,null,null,null];(statearr_373206[0] = state_machine__18220__auto__);
(statearr_373206[1] = 1);
return statearr_373206;
});
var state_machine__18220__auto____1 = (function (state_373189){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_373189);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e373207){if((e373207 instanceof Object))
{var ex__18223__auto__ = e373207;var statearr_373208_373221 = state_373189;(statearr_373208_373221[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373189);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e373207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__373222 = state_373189;
state_373189 = G__373222;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_373189){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_373189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_373209 = f__18290__auto__.call(null);(statearr_373209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___373210);
return statearr_373209;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18289__auto___373309 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_373287){var state_val_373288 = (state_373287[1]);if((state_val_373288 === 1))
{var state_373287__$1 = state_373287;var statearr_373289_373310 = state_373287__$1;(statearr_373289_373310[2] = null);
(statearr_373289_373310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 2))
{var state_373287__$1 = state_373287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373287__$1,4,ch);
} else
{if((state_val_373288 === 3))
{var inst_373285 = (state_373287[2]);var state_373287__$1 = state_373287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373287__$1,inst_373285);
} else
{if((state_val_373288 === 4))
{var inst_373268 = (state_373287[7]);var inst_373268__$1 = (state_373287[2]);var inst_373269 = (inst_373268__$1 == null);var state_373287__$1 = (function (){var statearr_373290 = state_373287;(statearr_373290[7] = inst_373268__$1);
return statearr_373290;
})();if(cljs.core.truth_(inst_373269))
{var statearr_373291_373311 = state_373287__$1;(statearr_373291_373311[1] = 5);
} else
{var statearr_373292_373312 = state_373287__$1;(statearr_373292_373312[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 5))
{var inst_373271 = cljs.core.async.close_BANG_.call(null,tc);var inst_373272 = cljs.core.async.close_BANG_.call(null,fc);var state_373287__$1 = (function (){var statearr_373293 = state_373287;(statearr_373293[8] = inst_373271);
return statearr_373293;
})();var statearr_373294_373313 = state_373287__$1;(statearr_373294_373313[2] = inst_373272);
(statearr_373294_373313[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 6))
{var inst_373268 = (state_373287[7]);var inst_373274 = p.call(null,inst_373268);var state_373287__$1 = state_373287;if(cljs.core.truth_(inst_373274))
{var statearr_373295_373314 = state_373287__$1;(statearr_373295_373314[1] = 9);
} else
{var statearr_373296_373315 = state_373287__$1;(statearr_373296_373315[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 7))
{var inst_373283 = (state_373287[2]);var state_373287__$1 = state_373287;var statearr_373297_373316 = state_373287__$1;(statearr_373297_373316[2] = inst_373283);
(statearr_373297_373316[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 8))
{var inst_373280 = (state_373287[2]);var state_373287__$1 = (function (){var statearr_373298 = state_373287;(statearr_373298[9] = inst_373280);
return statearr_373298;
})();var statearr_373299_373317 = state_373287__$1;(statearr_373299_373317[2] = null);
(statearr_373299_373317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 9))
{var state_373287__$1 = state_373287;var statearr_373300_373318 = state_373287__$1;(statearr_373300_373318[2] = tc);
(statearr_373300_373318[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 10))
{var state_373287__$1 = state_373287;var statearr_373301_373319 = state_373287__$1;(statearr_373301_373319[2] = fc);
(statearr_373301_373319[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373288 === 11))
{var inst_373268 = (state_373287[7]);var inst_373278 = (state_373287[2]);var state_373287__$1 = state_373287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373287__$1,8,inst_373278,inst_373268);
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
var state_machine__18220__auto____0 = (function (){var statearr_373305 = [null,null,null,null,null,null,null,null,null,null];(statearr_373305[0] = state_machine__18220__auto__);
(statearr_373305[1] = 1);
return statearr_373305;
});
var state_machine__18220__auto____1 = (function (state_373287){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_373287);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e373306){if((e373306 instanceof Object))
{var ex__18223__auto__ = e373306;var statearr_373307_373320 = state_373287;(statearr_373307_373320[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373287);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e373306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__373321 = state_373287;
state_373287 = G__373321;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_373287){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_373287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_373308 = f__18290__auto__.call(null);(statearr_373308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___373309);
return statearr_373308;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_373368){var state_val_373369 = (state_373368[1]);if((state_val_373369 === 7))
{var inst_373364 = (state_373368[2]);var state_373368__$1 = state_373368;var statearr_373370_373386 = state_373368__$1;(statearr_373370_373386[2] = inst_373364);
(statearr_373370_373386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373369 === 6))
{var inst_373354 = (state_373368[7]);var inst_373357 = (state_373368[8]);var inst_373361 = f.call(null,inst_373354,inst_373357);var inst_373354__$1 = inst_373361;var state_373368__$1 = (function (){var statearr_373371 = state_373368;(statearr_373371[7] = inst_373354__$1);
return statearr_373371;
})();var statearr_373372_373387 = state_373368__$1;(statearr_373372_373387[2] = null);
(statearr_373372_373387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373369 === 5))
{var inst_373354 = (state_373368[7]);var state_373368__$1 = state_373368;var statearr_373373_373388 = state_373368__$1;(statearr_373373_373388[2] = inst_373354);
(statearr_373373_373388[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373369 === 4))
{var inst_373357 = (state_373368[8]);var inst_373357__$1 = (state_373368[2]);var inst_373358 = (inst_373357__$1 == null);var state_373368__$1 = (function (){var statearr_373374 = state_373368;(statearr_373374[8] = inst_373357__$1);
return statearr_373374;
})();if(cljs.core.truth_(inst_373358))
{var statearr_373375_373389 = state_373368__$1;(statearr_373375_373389[1] = 5);
} else
{var statearr_373376_373390 = state_373368__$1;(statearr_373376_373390[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373369 === 3))
{var inst_373366 = (state_373368[2]);var state_373368__$1 = state_373368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373368__$1,inst_373366);
} else
{if((state_val_373369 === 2))
{var state_373368__$1 = state_373368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373368__$1,4,ch);
} else
{if((state_val_373369 === 1))
{var inst_373354 = init;var state_373368__$1 = (function (){var statearr_373377 = state_373368;(statearr_373377[7] = inst_373354);
return statearr_373377;
})();var statearr_373378_373391 = state_373368__$1;(statearr_373378_373391[2] = null);
(statearr_373378_373391[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_373382 = [null,null,null,null,null,null,null,null,null];(statearr_373382[0] = state_machine__18220__auto__);
(statearr_373382[1] = 1);
return statearr_373382;
});
var state_machine__18220__auto____1 = (function (state_373368){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_373368);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e373383){if((e373383 instanceof Object))
{var ex__18223__auto__ = e373383;var statearr_373384_373392 = state_373368;(statearr_373384_373392[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e373383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__373393 = state_373368;
state_373368 = G__373393;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_373368){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_373368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_373385 = f__18290__auto__.call(null);(statearr_373385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_373385;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_373455){var state_val_373456 = (state_373455[1]);if((state_val_373456 === 1))
{var inst_373435 = cljs.core.seq.call(null,coll);var inst_373436 = inst_373435;var state_373455__$1 = (function (){var statearr_373457 = state_373455;(statearr_373457[7] = inst_373436);
return statearr_373457;
})();var statearr_373458_373476 = state_373455__$1;(statearr_373458_373476[2] = null);
(statearr_373458_373476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 2))
{var inst_373436 = (state_373455[7]);var state_373455__$1 = state_373455;if(cljs.core.truth_(inst_373436))
{var statearr_373459_373477 = state_373455__$1;(statearr_373459_373477[1] = 4);
} else
{var statearr_373460_373478 = state_373455__$1;(statearr_373460_373478[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 3))
{var inst_373453 = (state_373455[2]);var state_373455__$1 = state_373455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373455__$1,inst_373453);
} else
{if((state_val_373456 === 4))
{var inst_373436 = (state_373455[7]);var inst_373439 = cljs.core.first.call(null,inst_373436);var state_373455__$1 = state_373455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373455__$1,7,ch,inst_373439);
} else
{if((state_val_373456 === 5))
{var state_373455__$1 = state_373455;if(cljs.core.truth_(close_QMARK_))
{var statearr_373461_373479 = state_373455__$1;(statearr_373461_373479[1] = 8);
} else
{var statearr_373462_373480 = state_373455__$1;(statearr_373462_373480[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 6))
{var inst_373451 = (state_373455[2]);var state_373455__$1 = state_373455;var statearr_373463_373481 = state_373455__$1;(statearr_373463_373481[2] = inst_373451);
(statearr_373463_373481[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 7))
{var inst_373436 = (state_373455[7]);var inst_373441 = (state_373455[2]);var inst_373442 = cljs.core.next.call(null,inst_373436);var inst_373436__$1 = inst_373442;var state_373455__$1 = (function (){var statearr_373464 = state_373455;(statearr_373464[8] = inst_373441);
(statearr_373464[7] = inst_373436__$1);
return statearr_373464;
})();var statearr_373465_373482 = state_373455__$1;(statearr_373465_373482[2] = null);
(statearr_373465_373482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 8))
{var inst_373446 = cljs.core.async.close_BANG_.call(null,ch);var state_373455__$1 = state_373455;var statearr_373466_373483 = state_373455__$1;(statearr_373466_373483[2] = inst_373446);
(statearr_373466_373483[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 9))
{var state_373455__$1 = state_373455;var statearr_373467_373484 = state_373455__$1;(statearr_373467_373484[2] = null);
(statearr_373467_373484[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373456 === 10))
{var inst_373449 = (state_373455[2]);var state_373455__$1 = state_373455;var statearr_373468_373485 = state_373455__$1;(statearr_373468_373485[2] = inst_373449);
(statearr_373468_373485[1] = 6);
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
var state_machine__18220__auto____0 = (function (){var statearr_373472 = [null,null,null,null,null,null,null,null,null];(statearr_373472[0] = state_machine__18220__auto__);
(statearr_373472[1] = 1);
return statearr_373472;
});
var state_machine__18220__auto____1 = (function (state_373455){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_373455);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e373473){if((e373473 instanceof Object))
{var ex__18223__auto__ = e373473;var statearr_373474_373486 = state_373455;(statearr_373474_373486[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e373473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__373487 = state_373455;
state_373455 = G__373487;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_373455){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_373455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_373475 = f__18290__auto__.call(null);(statearr_373475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_373475;
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
cljs.core.async.Mux = (function (){var obj373489 = {};return obj373489;
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
cljs.core.async.Mult = (function (){var obj373491 = {};return obj373491;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t373715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t373715 = (function (cs,ch,mult,meta373716){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta373716 = meta373716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t373715.cljs$lang$type = true;
cljs.core.async.t373715.cljs$lang$ctorStr = "cljs.core.async/t373715";
cljs.core.async.t373715.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t373715");
});})(cs))
;
cljs.core.async.t373715.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t373715.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t373715.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t373715.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t373715.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t373715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t373715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_373717){var self__ = this;
var _373717__$1 = this;return self__.meta373716;
});})(cs))
;
cljs.core.async.t373715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_373717,meta373716__$1){var self__ = this;
var _373717__$1 = this;return (new cljs.core.async.t373715(self__.cs,self__.ch,self__.mult,meta373716__$1));
});})(cs))
;
cljs.core.async.__GT_t373715 = ((function (cs){
return (function __GT_t373715(cs__$1,ch__$1,mult__$1,meta373716){return (new cljs.core.async.t373715(cs__$1,ch__$1,mult__$1,meta373716));
});})(cs))
;
}
return (new cljs.core.async.t373715(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18289__auto___373938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_373852){var state_val_373853 = (state_373852[1]);if((state_val_373853 === 32))
{var inst_373796 = (state_373852[7]);var inst_373720 = (state_373852[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_373852,31,Object,null,30);var inst_373803 = cljs.core.async.put_BANG_.call(null,inst_373796,inst_373720,done);var state_373852__$1 = state_373852;var statearr_373854_373939 = state_373852__$1;(statearr_373854_373939[2] = inst_373803);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373852__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 1))
{var state_373852__$1 = state_373852;var statearr_373855_373940 = state_373852__$1;(statearr_373855_373940[2] = null);
(statearr_373855_373940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 33))
{var inst_373809 = (state_373852[9]);var inst_373811 = cljs.core.chunked_seq_QMARK_.call(null,inst_373809);var state_373852__$1 = state_373852;if(inst_373811)
{var statearr_373856_373941 = state_373852__$1;(statearr_373856_373941[1] = 36);
} else
{var statearr_373857_373942 = state_373852__$1;(statearr_373857_373942[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 2))
{var state_373852__$1 = state_373852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373852__$1,4,ch);
} else
{if((state_val_373853 === 34))
{var state_373852__$1 = state_373852;var statearr_373858_373943 = state_373852__$1;(statearr_373858_373943[2] = null);
(statearr_373858_373943[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 3))
{var inst_373850 = (state_373852[2]);var state_373852__$1 = state_373852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373852__$1,inst_373850);
} else
{if((state_val_373853 === 35))
{var inst_373834 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373859_373944 = state_373852__$1;(statearr_373859_373944[2] = inst_373834);
(statearr_373859_373944[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 4))
{var inst_373720 = (state_373852[8]);var inst_373720__$1 = (state_373852[2]);var inst_373721 = (inst_373720__$1 == null);var state_373852__$1 = (function (){var statearr_373860 = state_373852;(statearr_373860[8] = inst_373720__$1);
return statearr_373860;
})();if(cljs.core.truth_(inst_373721))
{var statearr_373861_373945 = state_373852__$1;(statearr_373861_373945[1] = 5);
} else
{var statearr_373862_373946 = state_373852__$1;(statearr_373862_373946[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 36))
{var inst_373809 = (state_373852[9]);var inst_373813 = cljs.core.chunk_first.call(null,inst_373809);var inst_373814 = cljs.core.chunk_rest.call(null,inst_373809);var inst_373815 = cljs.core.count.call(null,inst_373813);var inst_373788 = inst_373814;var inst_373789 = inst_373813;var inst_373790 = inst_373815;var inst_373791 = 0;var state_373852__$1 = (function (){var statearr_373863 = state_373852;(statearr_373863[10] = inst_373791);
(statearr_373863[11] = inst_373790);
(statearr_373863[12] = inst_373788);
(statearr_373863[13] = inst_373789);
return statearr_373863;
})();var statearr_373864_373947 = state_373852__$1;(statearr_373864_373947[2] = null);
(statearr_373864_373947[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 5))
{var inst_373727 = cljs.core.deref.call(null,cs);var inst_373728 = cljs.core.seq.call(null,inst_373727);var inst_373729 = inst_373728;var inst_373730 = null;var inst_373731 = 0;var inst_373732 = 0;var state_373852__$1 = (function (){var statearr_373865 = state_373852;(statearr_373865[14] = inst_373732);
(statearr_373865[15] = inst_373729);
(statearr_373865[16] = inst_373730);
(statearr_373865[17] = inst_373731);
return statearr_373865;
})();var statearr_373866_373948 = state_373852__$1;(statearr_373866_373948[2] = null);
(statearr_373866_373948[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 37))
{var inst_373809 = (state_373852[9]);var inst_373818 = cljs.core.first.call(null,inst_373809);var state_373852__$1 = (function (){var statearr_373867 = state_373852;(statearr_373867[18] = inst_373818);
return statearr_373867;
})();var statearr_373868_373949 = state_373852__$1;(statearr_373868_373949[2] = null);
(statearr_373868_373949[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 6))
{var inst_373780 = (state_373852[19]);var inst_373779 = cljs.core.deref.call(null,cs);var inst_373780__$1 = cljs.core.keys.call(null,inst_373779);var inst_373781 = cljs.core.count.call(null,inst_373780__$1);var inst_373782 = cljs.core.reset_BANG_.call(null,dctr,inst_373781);var inst_373787 = cljs.core.seq.call(null,inst_373780__$1);var inst_373788 = inst_373787;var inst_373789 = null;var inst_373790 = 0;var inst_373791 = 0;var state_373852__$1 = (function (){var statearr_373869 = state_373852;(statearr_373869[10] = inst_373791);
(statearr_373869[11] = inst_373790);
(statearr_373869[12] = inst_373788);
(statearr_373869[13] = inst_373789);
(statearr_373869[20] = inst_373782);
(statearr_373869[19] = inst_373780__$1);
return statearr_373869;
})();var statearr_373870_373950 = state_373852__$1;(statearr_373870_373950[2] = null);
(statearr_373870_373950[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 38))
{var inst_373831 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373871_373951 = state_373852__$1;(statearr_373871_373951[2] = inst_373831);
(statearr_373871_373951[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 7))
{var inst_373848 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373872_373952 = state_373852__$1;(statearr_373872_373952[2] = inst_373848);
(statearr_373872_373952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 39))
{var inst_373809 = (state_373852[9]);var inst_373827 = (state_373852[2]);var inst_373828 = cljs.core.next.call(null,inst_373809);var inst_373788 = inst_373828;var inst_373789 = null;var inst_373790 = 0;var inst_373791 = 0;var state_373852__$1 = (function (){var statearr_373873 = state_373852;(statearr_373873[10] = inst_373791);
(statearr_373873[11] = inst_373790);
(statearr_373873[12] = inst_373788);
(statearr_373873[13] = inst_373789);
(statearr_373873[21] = inst_373827);
return statearr_373873;
})();var statearr_373874_373953 = state_373852__$1;(statearr_373874_373953[2] = null);
(statearr_373874_373953[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 8))
{var inst_373732 = (state_373852[14]);var inst_373731 = (state_373852[17]);var inst_373734 = (inst_373732 < inst_373731);var inst_373735 = inst_373734;var state_373852__$1 = state_373852;if(cljs.core.truth_(inst_373735))
{var statearr_373875_373954 = state_373852__$1;(statearr_373875_373954[1] = 10);
} else
{var statearr_373876_373955 = state_373852__$1;(statearr_373876_373955[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 40))
{var inst_373818 = (state_373852[18]);var inst_373819 = (state_373852[2]);var inst_373820 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_373821 = cljs.core.async.untap_STAR_.call(null,m,inst_373818);var state_373852__$1 = (function (){var statearr_373877 = state_373852;(statearr_373877[22] = inst_373819);
(statearr_373877[23] = inst_373820);
return statearr_373877;
})();var statearr_373878_373956 = state_373852__$1;(statearr_373878_373956[2] = inst_373821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373852__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 9))
{var inst_373777 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373879_373957 = state_373852__$1;(statearr_373879_373957[2] = inst_373777);
(statearr_373879_373957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 41))
{var inst_373818 = (state_373852[18]);var inst_373720 = (state_373852[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_373852,40,Object,null,39);var inst_373825 = cljs.core.async.put_BANG_.call(null,inst_373818,inst_373720,done);var state_373852__$1 = state_373852;var statearr_373880_373958 = state_373852__$1;(statearr_373880_373958[2] = inst_373825);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373852__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 10))
{var inst_373732 = (state_373852[14]);var inst_373730 = (state_373852[16]);var inst_373738 = cljs.core._nth.call(null,inst_373730,inst_373732);var inst_373739 = cljs.core.nth.call(null,inst_373738,0,null);var inst_373740 = cljs.core.nth.call(null,inst_373738,1,null);var state_373852__$1 = (function (){var statearr_373881 = state_373852;(statearr_373881[24] = inst_373739);
return statearr_373881;
})();if(cljs.core.truth_(inst_373740))
{var statearr_373882_373959 = state_373852__$1;(statearr_373882_373959[1] = 13);
} else
{var statearr_373883_373960 = state_373852__$1;(statearr_373883_373960[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 42))
{var state_373852__$1 = state_373852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373852__$1,45,dchan);
} else
{if((state_val_373853 === 11))
{var inst_373729 = (state_373852[15]);var inst_373749 = (state_373852[25]);var inst_373749__$1 = cljs.core.seq.call(null,inst_373729);var state_373852__$1 = (function (){var statearr_373884 = state_373852;(statearr_373884[25] = inst_373749__$1);
return statearr_373884;
})();if(inst_373749__$1)
{var statearr_373885_373961 = state_373852__$1;(statearr_373885_373961[1] = 16);
} else
{var statearr_373886_373962 = state_373852__$1;(statearr_373886_373962[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 43))
{var state_373852__$1 = state_373852;var statearr_373887_373963 = state_373852__$1;(statearr_373887_373963[2] = null);
(statearr_373887_373963[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 12))
{var inst_373775 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373888_373964 = state_373852__$1;(statearr_373888_373964[2] = inst_373775);
(statearr_373888_373964[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 44))
{var inst_373845 = (state_373852[2]);var state_373852__$1 = (function (){var statearr_373889 = state_373852;(statearr_373889[26] = inst_373845);
return statearr_373889;
})();var statearr_373890_373965 = state_373852__$1;(statearr_373890_373965[2] = null);
(statearr_373890_373965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 13))
{var inst_373739 = (state_373852[24]);var inst_373742 = cljs.core.async.close_BANG_.call(null,inst_373739);var state_373852__$1 = state_373852;var statearr_373891_373966 = state_373852__$1;(statearr_373891_373966[2] = inst_373742);
(statearr_373891_373966[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 45))
{var inst_373842 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373895_373967 = state_373852__$1;(statearr_373895_373967[2] = inst_373842);
(statearr_373895_373967[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 14))
{var state_373852__$1 = state_373852;var statearr_373896_373968 = state_373852__$1;(statearr_373896_373968[2] = null);
(statearr_373896_373968[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 15))
{var inst_373732 = (state_373852[14]);var inst_373729 = (state_373852[15]);var inst_373730 = (state_373852[16]);var inst_373731 = (state_373852[17]);var inst_373745 = (state_373852[2]);var inst_373746 = (inst_373732 + 1);var tmp373892 = inst_373729;var tmp373893 = inst_373730;var tmp373894 = inst_373731;var inst_373729__$1 = tmp373892;var inst_373730__$1 = tmp373893;var inst_373731__$1 = tmp373894;var inst_373732__$1 = inst_373746;var state_373852__$1 = (function (){var statearr_373897 = state_373852;(statearr_373897[14] = inst_373732__$1);
(statearr_373897[15] = inst_373729__$1);
(statearr_373897[27] = inst_373745);
(statearr_373897[16] = inst_373730__$1);
(statearr_373897[17] = inst_373731__$1);
return statearr_373897;
})();var statearr_373898_373969 = state_373852__$1;(statearr_373898_373969[2] = null);
(statearr_373898_373969[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 16))
{var inst_373749 = (state_373852[25]);var inst_373751 = cljs.core.chunked_seq_QMARK_.call(null,inst_373749);var state_373852__$1 = state_373852;if(inst_373751)
{var statearr_373899_373970 = state_373852__$1;(statearr_373899_373970[1] = 19);
} else
{var statearr_373900_373971 = state_373852__$1;(statearr_373900_373971[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 17))
{var state_373852__$1 = state_373852;var statearr_373901_373972 = state_373852__$1;(statearr_373901_373972[2] = null);
(statearr_373901_373972[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 18))
{var inst_373773 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373902_373973 = state_373852__$1;(statearr_373902_373973[2] = inst_373773);
(statearr_373902_373973[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 19))
{var inst_373749 = (state_373852[25]);var inst_373753 = cljs.core.chunk_first.call(null,inst_373749);var inst_373754 = cljs.core.chunk_rest.call(null,inst_373749);var inst_373755 = cljs.core.count.call(null,inst_373753);var inst_373729 = inst_373754;var inst_373730 = inst_373753;var inst_373731 = inst_373755;var inst_373732 = 0;var state_373852__$1 = (function (){var statearr_373903 = state_373852;(statearr_373903[14] = inst_373732);
(statearr_373903[15] = inst_373729);
(statearr_373903[16] = inst_373730);
(statearr_373903[17] = inst_373731);
return statearr_373903;
})();var statearr_373904_373974 = state_373852__$1;(statearr_373904_373974[2] = null);
(statearr_373904_373974[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 20))
{var inst_373749 = (state_373852[25]);var inst_373759 = cljs.core.first.call(null,inst_373749);var inst_373760 = cljs.core.nth.call(null,inst_373759,0,null);var inst_373761 = cljs.core.nth.call(null,inst_373759,1,null);var state_373852__$1 = (function (){var statearr_373905 = state_373852;(statearr_373905[28] = inst_373760);
return statearr_373905;
})();if(cljs.core.truth_(inst_373761))
{var statearr_373906_373975 = state_373852__$1;(statearr_373906_373975[1] = 22);
} else
{var statearr_373907_373976 = state_373852__$1;(statearr_373907_373976[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 21))
{var inst_373770 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373908_373977 = state_373852__$1;(statearr_373908_373977[2] = inst_373770);
(statearr_373908_373977[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 22))
{var inst_373760 = (state_373852[28]);var inst_373763 = cljs.core.async.close_BANG_.call(null,inst_373760);var state_373852__$1 = state_373852;var statearr_373909_373978 = state_373852__$1;(statearr_373909_373978[2] = inst_373763);
(statearr_373909_373978[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 23))
{var state_373852__$1 = state_373852;var statearr_373910_373979 = state_373852__$1;(statearr_373910_373979[2] = null);
(statearr_373910_373979[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 24))
{var inst_373749 = (state_373852[25]);var inst_373766 = (state_373852[2]);var inst_373767 = cljs.core.next.call(null,inst_373749);var inst_373729 = inst_373767;var inst_373730 = null;var inst_373731 = 0;var inst_373732 = 0;var state_373852__$1 = (function (){var statearr_373911 = state_373852;(statearr_373911[29] = inst_373766);
(statearr_373911[14] = inst_373732);
(statearr_373911[15] = inst_373729);
(statearr_373911[16] = inst_373730);
(statearr_373911[17] = inst_373731);
return statearr_373911;
})();var statearr_373912_373980 = state_373852__$1;(statearr_373912_373980[2] = null);
(statearr_373912_373980[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 25))
{var inst_373791 = (state_373852[10]);var inst_373790 = (state_373852[11]);var inst_373793 = (inst_373791 < inst_373790);var inst_373794 = inst_373793;var state_373852__$1 = state_373852;if(cljs.core.truth_(inst_373794))
{var statearr_373913_373981 = state_373852__$1;(statearr_373913_373981[1] = 27);
} else
{var statearr_373914_373982 = state_373852__$1;(statearr_373914_373982[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 26))
{var inst_373780 = (state_373852[19]);var inst_373838 = (state_373852[2]);var inst_373839 = cljs.core.seq.call(null,inst_373780);var state_373852__$1 = (function (){var statearr_373915 = state_373852;(statearr_373915[30] = inst_373838);
return statearr_373915;
})();if(inst_373839)
{var statearr_373916_373983 = state_373852__$1;(statearr_373916_373983[1] = 42);
} else
{var statearr_373917_373984 = state_373852__$1;(statearr_373917_373984[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 27))
{var inst_373791 = (state_373852[10]);var inst_373789 = (state_373852[13]);var inst_373796 = cljs.core._nth.call(null,inst_373789,inst_373791);var state_373852__$1 = (function (){var statearr_373918 = state_373852;(statearr_373918[7] = inst_373796);
return statearr_373918;
})();var statearr_373919_373985 = state_373852__$1;(statearr_373919_373985[2] = null);
(statearr_373919_373985[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 28))
{var inst_373809 = (state_373852[9]);var inst_373788 = (state_373852[12]);var inst_373809__$1 = cljs.core.seq.call(null,inst_373788);var state_373852__$1 = (function (){var statearr_373923 = state_373852;(statearr_373923[9] = inst_373809__$1);
return statearr_373923;
})();if(inst_373809__$1)
{var statearr_373924_373986 = state_373852__$1;(statearr_373924_373986[1] = 33);
} else
{var statearr_373925_373987 = state_373852__$1;(statearr_373925_373987[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 29))
{var inst_373836 = (state_373852[2]);var state_373852__$1 = state_373852;var statearr_373926_373988 = state_373852__$1;(statearr_373926_373988[2] = inst_373836);
(statearr_373926_373988[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 30))
{var inst_373791 = (state_373852[10]);var inst_373790 = (state_373852[11]);var inst_373788 = (state_373852[12]);var inst_373789 = (state_373852[13]);var inst_373805 = (state_373852[2]);var inst_373806 = (inst_373791 + 1);var tmp373920 = inst_373790;var tmp373921 = inst_373788;var tmp373922 = inst_373789;var inst_373788__$1 = tmp373921;var inst_373789__$1 = tmp373922;var inst_373790__$1 = tmp373920;var inst_373791__$1 = inst_373806;var state_373852__$1 = (function (){var statearr_373927 = state_373852;(statearr_373927[31] = inst_373805);
(statearr_373927[10] = inst_373791__$1);
(statearr_373927[11] = inst_373790__$1);
(statearr_373927[12] = inst_373788__$1);
(statearr_373927[13] = inst_373789__$1);
return statearr_373927;
})();var statearr_373928_373989 = state_373852__$1;(statearr_373928_373989[2] = null);
(statearr_373928_373989[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_373853 === 31))
{var inst_373796 = (state_373852[7]);var inst_373797 = (state_373852[2]);var inst_373798 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_373799 = cljs.core.async.untap_STAR_.call(null,m,inst_373796);var state_373852__$1 = (function (){var statearr_373929 = state_373852;(statearr_373929[32] = inst_373797);
(statearr_373929[33] = inst_373798);
return statearr_373929;
})();var statearr_373930_373990 = state_373852__$1;(statearr_373930_373990[2] = inst_373799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373852__$1);
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
var state_machine__18220__auto____0 = (function (){var statearr_373934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_373934[0] = state_machine__18220__auto__);
(statearr_373934[1] = 1);
return statearr_373934;
});
var state_machine__18220__auto____1 = (function (state_373852){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_373852);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e373935){if((e373935 instanceof Object))
{var ex__18223__auto__ = e373935;var statearr_373936_373991 = state_373852;(statearr_373936_373991[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e373935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__373992 = state_373852;
state_373852 = G__373992;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_373852){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_373852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_373937 = f__18290__auto__.call(null);(statearr_373937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___373938);
return statearr_373937;
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
cljs.core.async.Mix = (function (){var obj373994 = {};return obj373994;
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
;var m = (function (){if(typeof cljs.core.async.t374104 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t374104 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta374105){
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
this.meta374105 = meta374105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t374104.cljs$lang$type = true;
cljs.core.async.t374104.cljs$lang$ctorStr = "cljs.core.async/t374104";
cljs.core.async.t374104.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t374104");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t374104.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t374104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_374106){var self__ = this;
var _374106__$1 = this;return self__.meta374105;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t374104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_374106,meta374105__$1){var self__ = this;
var _374106__$1 = this;return (new cljs.core.async.t374104(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta374105__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t374104 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t374104(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta374105){return (new cljs.core.async.t374104(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta374105));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t374104(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18289__auto___374213 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_374171){var state_val_374172 = (state_374171[1]);if((state_val_374172 === 1))
{var inst_374110 = (state_374171[7]);var inst_374110__$1 = calc_state.call(null);var inst_374111 = cljs.core.seq_QMARK_.call(null,inst_374110__$1);var state_374171__$1 = (function (){var statearr_374173 = state_374171;(statearr_374173[7] = inst_374110__$1);
return statearr_374173;
})();if(inst_374111)
{var statearr_374174_374214 = state_374171__$1;(statearr_374174_374214[1] = 2);
} else
{var statearr_374175_374215 = state_374171__$1;(statearr_374175_374215[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 2))
{var inst_374110 = (state_374171[7]);var inst_374113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_374110);var state_374171__$1 = state_374171;var statearr_374176_374216 = state_374171__$1;(statearr_374176_374216[2] = inst_374113);
(statearr_374176_374216[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 3))
{var inst_374110 = (state_374171[7]);var state_374171__$1 = state_374171;var statearr_374177_374217 = state_374171__$1;(statearr_374177_374217[2] = inst_374110);
(statearr_374177_374217[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 4))
{var inst_374110 = (state_374171[7]);var inst_374116 = (state_374171[2]);var inst_374117 = cljs.core.get.call(null,inst_374116,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_374118 = cljs.core.get.call(null,inst_374116,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_374119 = cljs.core.get.call(null,inst_374116,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_374120 = inst_374110;var state_374171__$1 = (function (){var statearr_374178 = state_374171;(statearr_374178[8] = inst_374120);
(statearr_374178[9] = inst_374118);
(statearr_374178[10] = inst_374117);
(statearr_374178[11] = inst_374119);
return statearr_374178;
})();var statearr_374179_374218 = state_374171__$1;(statearr_374179_374218[2] = null);
(statearr_374179_374218[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 5))
{var inst_374120 = (state_374171[8]);var inst_374123 = cljs.core.seq_QMARK_.call(null,inst_374120);var state_374171__$1 = state_374171;if(inst_374123)
{var statearr_374180_374219 = state_374171__$1;(statearr_374180_374219[1] = 7);
} else
{var statearr_374181_374220 = state_374171__$1;(statearr_374181_374220[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 6))
{var inst_374169 = (state_374171[2]);var state_374171__$1 = state_374171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374171__$1,inst_374169);
} else
{if((state_val_374172 === 7))
{var inst_374120 = (state_374171[8]);var inst_374125 = cljs.core.apply.call(null,cljs.core.hash_map,inst_374120);var state_374171__$1 = state_374171;var statearr_374182_374221 = state_374171__$1;(statearr_374182_374221[2] = inst_374125);
(statearr_374182_374221[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 8))
{var inst_374120 = (state_374171[8]);var state_374171__$1 = state_374171;var statearr_374183_374222 = state_374171__$1;(statearr_374183_374222[2] = inst_374120);
(statearr_374183_374222[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 9))
{var inst_374128 = (state_374171[12]);var inst_374128__$1 = (state_374171[2]);var inst_374129 = cljs.core.get.call(null,inst_374128__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_374130 = cljs.core.get.call(null,inst_374128__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_374131 = cljs.core.get.call(null,inst_374128__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_374171__$1 = (function (){var statearr_374184 = state_374171;(statearr_374184[13] = inst_374131);
(statearr_374184[14] = inst_374130);
(statearr_374184[12] = inst_374128__$1);
return statearr_374184;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_374171__$1,10,inst_374129);
} else
{if((state_val_374172 === 10))
{var inst_374135 = (state_374171[15]);var inst_374136 = (state_374171[16]);var inst_374134 = (state_374171[2]);var inst_374135__$1 = cljs.core.nth.call(null,inst_374134,0,null);var inst_374136__$1 = cljs.core.nth.call(null,inst_374134,1,null);var inst_374137 = (inst_374135__$1 == null);var inst_374138 = cljs.core._EQ_.call(null,inst_374136__$1,change);var inst_374139 = (inst_374137) || (inst_374138);var state_374171__$1 = (function (){var statearr_374185 = state_374171;(statearr_374185[15] = inst_374135__$1);
(statearr_374185[16] = inst_374136__$1);
return statearr_374185;
})();if(cljs.core.truth_(inst_374139))
{var statearr_374186_374223 = state_374171__$1;(statearr_374186_374223[1] = 11);
} else
{var statearr_374187_374224 = state_374171__$1;(statearr_374187_374224[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 11))
{var inst_374135 = (state_374171[15]);var inst_374141 = (inst_374135 == null);var state_374171__$1 = state_374171;if(cljs.core.truth_(inst_374141))
{var statearr_374188_374225 = state_374171__$1;(statearr_374188_374225[1] = 14);
} else
{var statearr_374189_374226 = state_374171__$1;(statearr_374189_374226[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 12))
{var inst_374131 = (state_374171[13]);var inst_374150 = (state_374171[17]);var inst_374136 = (state_374171[16]);var inst_374150__$1 = inst_374131.call(null,inst_374136);var state_374171__$1 = (function (){var statearr_374190 = state_374171;(statearr_374190[17] = inst_374150__$1);
return statearr_374190;
})();if(cljs.core.truth_(inst_374150__$1))
{var statearr_374191_374227 = state_374171__$1;(statearr_374191_374227[1] = 17);
} else
{var statearr_374192_374228 = state_374171__$1;(statearr_374192_374228[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 13))
{var inst_374167 = (state_374171[2]);var state_374171__$1 = state_374171;var statearr_374193_374229 = state_374171__$1;(statearr_374193_374229[2] = inst_374167);
(statearr_374193_374229[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 14))
{var inst_374136 = (state_374171[16]);var inst_374143 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_374136);var state_374171__$1 = state_374171;var statearr_374194_374230 = state_374171__$1;(statearr_374194_374230[2] = inst_374143);
(statearr_374194_374230[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 15))
{var state_374171__$1 = state_374171;var statearr_374195_374231 = state_374171__$1;(statearr_374195_374231[2] = null);
(statearr_374195_374231[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 16))
{var inst_374146 = (state_374171[2]);var inst_374147 = calc_state.call(null);var inst_374120 = inst_374147;var state_374171__$1 = (function (){var statearr_374196 = state_374171;(statearr_374196[8] = inst_374120);
(statearr_374196[18] = inst_374146);
return statearr_374196;
})();var statearr_374197_374232 = state_374171__$1;(statearr_374197_374232[2] = null);
(statearr_374197_374232[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 17))
{var inst_374150 = (state_374171[17]);var state_374171__$1 = state_374171;var statearr_374198_374233 = state_374171__$1;(statearr_374198_374233[2] = inst_374150);
(statearr_374198_374233[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 18))
{var inst_374131 = (state_374171[13]);var inst_374130 = (state_374171[14]);var inst_374136 = (state_374171[16]);var inst_374153 = cljs.core.empty_QMARK_.call(null,inst_374131);var inst_374154 = inst_374130.call(null,inst_374136);var inst_374155 = cljs.core.not.call(null,inst_374154);var inst_374156 = (inst_374153) && (inst_374155);var state_374171__$1 = state_374171;var statearr_374199_374234 = state_374171__$1;(statearr_374199_374234[2] = inst_374156);
(statearr_374199_374234[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 19))
{var inst_374158 = (state_374171[2]);var state_374171__$1 = state_374171;if(cljs.core.truth_(inst_374158))
{var statearr_374200_374235 = state_374171__$1;(statearr_374200_374235[1] = 20);
} else
{var statearr_374201_374236 = state_374171__$1;(statearr_374201_374236[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 20))
{var inst_374135 = (state_374171[15]);var state_374171__$1 = state_374171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374171__$1,23,out,inst_374135);
} else
{if((state_val_374172 === 21))
{var state_374171__$1 = state_374171;var statearr_374202_374237 = state_374171__$1;(statearr_374202_374237[2] = null);
(statearr_374202_374237[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 22))
{var inst_374128 = (state_374171[12]);var inst_374164 = (state_374171[2]);var inst_374120 = inst_374128;var state_374171__$1 = (function (){var statearr_374203 = state_374171;(statearr_374203[8] = inst_374120);
(statearr_374203[19] = inst_374164);
return statearr_374203;
})();var statearr_374204_374238 = state_374171__$1;(statearr_374204_374238[2] = null);
(statearr_374204_374238[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374172 === 23))
{var inst_374161 = (state_374171[2]);var state_374171__$1 = state_374171;var statearr_374205_374239 = state_374171__$1;(statearr_374205_374239[2] = inst_374161);
(statearr_374205_374239[1] = 22);
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
var state_machine__18220__auto____0 = (function (){var statearr_374209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_374209[0] = state_machine__18220__auto__);
(statearr_374209[1] = 1);
return statearr_374209;
});
var state_machine__18220__auto____1 = (function (state_374171){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_374171);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e374210){if((e374210 instanceof Object))
{var ex__18223__auto__ = e374210;var statearr_374211_374240 = state_374171;(statearr_374211_374240[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e374210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__374241 = state_374171;
state_374171 = G__374241;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_374171){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_374171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_374212 = f__18290__auto__.call(null);(statearr_374212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___374213);
return statearr_374212;
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
cljs.core.async.Pub = (function (){var obj374243 = {};return obj374243;
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
return (function (p1__374244_SHARP_){if(cljs.core.truth_(p1__374244_SHARP_.call(null,topic)))
{return p1__374244_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__374244_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13979__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t374369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t374369 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta374370){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta374370 = meta374370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t374369.cljs$lang$type = true;
cljs.core.async.t374369.cljs$lang$ctorStr = "cljs.core.async/t374369";
cljs.core.async.t374369.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t374369");
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t374369.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t374369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_374371){var self__ = this;
var _374371__$1 = this;return self__.meta374370;
});})(mults,ensure_mult))
;
cljs.core.async.t374369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_374371,meta374370__$1){var self__ = this;
var _374371__$1 = this;return (new cljs.core.async.t374369(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta374370__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t374369 = ((function (mults,ensure_mult){
return (function __GT_t374369(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta374370){return (new cljs.core.async.t374369(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta374370));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t374369(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18289__auto___374493 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_374445){var state_val_374446 = (state_374445[1]);if((state_val_374446 === 1))
{var state_374445__$1 = state_374445;var statearr_374447_374494 = state_374445__$1;(statearr_374447_374494[2] = null);
(statearr_374447_374494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 2))
{var state_374445__$1 = state_374445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374445__$1,4,ch);
} else
{if((state_val_374446 === 3))
{var inst_374443 = (state_374445[2]);var state_374445__$1 = state_374445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374445__$1,inst_374443);
} else
{if((state_val_374446 === 4))
{var inst_374374 = (state_374445[7]);var inst_374374__$1 = (state_374445[2]);var inst_374375 = (inst_374374__$1 == null);var state_374445__$1 = (function (){var statearr_374448 = state_374445;(statearr_374448[7] = inst_374374__$1);
return statearr_374448;
})();if(cljs.core.truth_(inst_374375))
{var statearr_374449_374495 = state_374445__$1;(statearr_374449_374495[1] = 5);
} else
{var statearr_374450_374496 = state_374445__$1;(statearr_374450_374496[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 5))
{var inst_374381 = cljs.core.deref.call(null,mults);var inst_374382 = cljs.core.vals.call(null,inst_374381);var inst_374383 = cljs.core.seq.call(null,inst_374382);var inst_374384 = inst_374383;var inst_374385 = null;var inst_374386 = 0;var inst_374387 = 0;var state_374445__$1 = (function (){var statearr_374451 = state_374445;(statearr_374451[8] = inst_374387);
(statearr_374451[9] = inst_374386);
(statearr_374451[10] = inst_374385);
(statearr_374451[11] = inst_374384);
return statearr_374451;
})();var statearr_374452_374497 = state_374445__$1;(statearr_374452_374497[2] = null);
(statearr_374452_374497[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 6))
{var inst_374374 = (state_374445[7]);var inst_374422 = (state_374445[12]);var inst_374424 = (state_374445[13]);var inst_374422__$1 = topic_fn.call(null,inst_374374);var inst_374423 = cljs.core.deref.call(null,mults);var inst_374424__$1 = cljs.core.get.call(null,inst_374423,inst_374422__$1);var state_374445__$1 = (function (){var statearr_374453 = state_374445;(statearr_374453[12] = inst_374422__$1);
(statearr_374453[13] = inst_374424__$1);
return statearr_374453;
})();if(cljs.core.truth_(inst_374424__$1))
{var statearr_374454_374498 = state_374445__$1;(statearr_374454_374498[1] = 19);
} else
{var statearr_374455_374499 = state_374445__$1;(statearr_374455_374499[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 7))
{var inst_374441 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374456_374500 = state_374445__$1;(statearr_374456_374500[2] = inst_374441);
(statearr_374456_374500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 8))
{var inst_374387 = (state_374445[8]);var inst_374386 = (state_374445[9]);var inst_374389 = (inst_374387 < inst_374386);var inst_374390 = inst_374389;var state_374445__$1 = state_374445;if(cljs.core.truth_(inst_374390))
{var statearr_374460_374501 = state_374445__$1;(statearr_374460_374501[1] = 10);
} else
{var statearr_374461_374502 = state_374445__$1;(statearr_374461_374502[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 9))
{var inst_374420 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374462_374503 = state_374445__$1;(statearr_374462_374503[2] = inst_374420);
(statearr_374462_374503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 10))
{var inst_374387 = (state_374445[8]);var inst_374386 = (state_374445[9]);var inst_374385 = (state_374445[10]);var inst_374384 = (state_374445[11]);var inst_374392 = cljs.core._nth.call(null,inst_374385,inst_374387);var inst_374393 = cljs.core.async.muxch_STAR_.call(null,inst_374392);var inst_374394 = cljs.core.async.close_BANG_.call(null,inst_374393);var inst_374395 = (inst_374387 + 1);var tmp374457 = inst_374386;var tmp374458 = inst_374385;var tmp374459 = inst_374384;var inst_374384__$1 = tmp374459;var inst_374385__$1 = tmp374458;var inst_374386__$1 = tmp374457;var inst_374387__$1 = inst_374395;var state_374445__$1 = (function (){var statearr_374463 = state_374445;(statearr_374463[14] = inst_374394);
(statearr_374463[8] = inst_374387__$1);
(statearr_374463[9] = inst_374386__$1);
(statearr_374463[10] = inst_374385__$1);
(statearr_374463[11] = inst_374384__$1);
return statearr_374463;
})();var statearr_374464_374504 = state_374445__$1;(statearr_374464_374504[2] = null);
(statearr_374464_374504[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 11))
{var inst_374398 = (state_374445[15]);var inst_374384 = (state_374445[11]);var inst_374398__$1 = cljs.core.seq.call(null,inst_374384);var state_374445__$1 = (function (){var statearr_374465 = state_374445;(statearr_374465[15] = inst_374398__$1);
return statearr_374465;
})();if(inst_374398__$1)
{var statearr_374466_374505 = state_374445__$1;(statearr_374466_374505[1] = 13);
} else
{var statearr_374467_374506 = state_374445__$1;(statearr_374467_374506[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 12))
{var inst_374418 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374468_374507 = state_374445__$1;(statearr_374468_374507[2] = inst_374418);
(statearr_374468_374507[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 13))
{var inst_374398 = (state_374445[15]);var inst_374400 = cljs.core.chunked_seq_QMARK_.call(null,inst_374398);var state_374445__$1 = state_374445;if(inst_374400)
{var statearr_374469_374508 = state_374445__$1;(statearr_374469_374508[1] = 16);
} else
{var statearr_374470_374509 = state_374445__$1;(statearr_374470_374509[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 14))
{var state_374445__$1 = state_374445;var statearr_374471_374510 = state_374445__$1;(statearr_374471_374510[2] = null);
(statearr_374471_374510[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 15))
{var inst_374416 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374472_374511 = state_374445__$1;(statearr_374472_374511[2] = inst_374416);
(statearr_374472_374511[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 16))
{var inst_374398 = (state_374445[15]);var inst_374402 = cljs.core.chunk_first.call(null,inst_374398);var inst_374403 = cljs.core.chunk_rest.call(null,inst_374398);var inst_374404 = cljs.core.count.call(null,inst_374402);var inst_374384 = inst_374403;var inst_374385 = inst_374402;var inst_374386 = inst_374404;var inst_374387 = 0;var state_374445__$1 = (function (){var statearr_374473 = state_374445;(statearr_374473[8] = inst_374387);
(statearr_374473[9] = inst_374386);
(statearr_374473[10] = inst_374385);
(statearr_374473[11] = inst_374384);
return statearr_374473;
})();var statearr_374474_374512 = state_374445__$1;(statearr_374474_374512[2] = null);
(statearr_374474_374512[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 17))
{var inst_374398 = (state_374445[15]);var inst_374407 = cljs.core.first.call(null,inst_374398);var inst_374408 = cljs.core.async.muxch_STAR_.call(null,inst_374407);var inst_374409 = cljs.core.async.close_BANG_.call(null,inst_374408);var inst_374410 = cljs.core.next.call(null,inst_374398);var inst_374384 = inst_374410;var inst_374385 = null;var inst_374386 = 0;var inst_374387 = 0;var state_374445__$1 = (function (){var statearr_374475 = state_374445;(statearr_374475[8] = inst_374387);
(statearr_374475[16] = inst_374409);
(statearr_374475[9] = inst_374386);
(statearr_374475[10] = inst_374385);
(statearr_374475[11] = inst_374384);
return statearr_374475;
})();var statearr_374476_374513 = state_374445__$1;(statearr_374476_374513[2] = null);
(statearr_374476_374513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 18))
{var inst_374413 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374477_374514 = state_374445__$1;(statearr_374477_374514[2] = inst_374413);
(statearr_374477_374514[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 19))
{var state_374445__$1 = state_374445;var statearr_374478_374515 = state_374445__$1;(statearr_374478_374515[2] = null);
(statearr_374478_374515[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 20))
{var state_374445__$1 = state_374445;var statearr_374479_374516 = state_374445__$1;(statearr_374479_374516[2] = null);
(statearr_374479_374516[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 21))
{var inst_374438 = (state_374445[2]);var state_374445__$1 = (function (){var statearr_374480 = state_374445;(statearr_374480[17] = inst_374438);
return statearr_374480;
})();var statearr_374481_374517 = state_374445__$1;(statearr_374481_374517[2] = null);
(statearr_374481_374517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 22))
{var inst_374435 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374482_374518 = state_374445__$1;(statearr_374482_374518[2] = inst_374435);
(statearr_374482_374518[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 23))
{var inst_374422 = (state_374445[12]);var inst_374426 = (state_374445[2]);var inst_374427 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_374422);var state_374445__$1 = (function (){var statearr_374483 = state_374445;(statearr_374483[18] = inst_374426);
return statearr_374483;
})();var statearr_374484_374519 = state_374445__$1;(statearr_374484_374519[2] = inst_374427);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374445__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374446 === 24))
{var inst_374374 = (state_374445[7]);var inst_374424 = (state_374445[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_374445,23,Object,null,22);var inst_374431 = cljs.core.async.muxch_STAR_.call(null,inst_374424);var state_374445__$1 = state_374445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374445__$1,25,inst_374431,inst_374374);
} else
{if((state_val_374446 === 25))
{var inst_374433 = (state_374445[2]);var state_374445__$1 = state_374445;var statearr_374485_374520 = state_374445__$1;(statearr_374485_374520[2] = inst_374433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374445__$1);
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
var state_machine__18220__auto____0 = (function (){var statearr_374489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_374489[0] = state_machine__18220__auto__);
(statearr_374489[1] = 1);
return statearr_374489;
});
var state_machine__18220__auto____1 = (function (state_374445){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_374445);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e374490){if((e374490 instanceof Object))
{var ex__18223__auto__ = e374490;var statearr_374491_374521 = state_374445;(statearr_374491_374521[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e374490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__374522 = state_374445;
state_374445 = G__374522;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_374445){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_374445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_374492 = f__18290__auto__.call(null);(statearr_374492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___374493);
return statearr_374492;
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
,cljs.core.range.call(null,cnt));var c__18289__auto___374659 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_374629){var state_val_374630 = (state_374629[1]);if((state_val_374630 === 1))
{var state_374629__$1 = state_374629;var statearr_374631_374660 = state_374629__$1;(statearr_374631_374660[2] = null);
(statearr_374631_374660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 2))
{var inst_374592 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_374593 = 0;var state_374629__$1 = (function (){var statearr_374632 = state_374629;(statearr_374632[7] = inst_374593);
(statearr_374632[8] = inst_374592);
return statearr_374632;
})();var statearr_374633_374661 = state_374629__$1;(statearr_374633_374661[2] = null);
(statearr_374633_374661[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 3))
{var inst_374627 = (state_374629[2]);var state_374629__$1 = state_374629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374629__$1,inst_374627);
} else
{if((state_val_374630 === 4))
{var inst_374593 = (state_374629[7]);var inst_374595 = (inst_374593 < cnt);var state_374629__$1 = state_374629;if(cljs.core.truth_(inst_374595))
{var statearr_374634_374662 = state_374629__$1;(statearr_374634_374662[1] = 6);
} else
{var statearr_374635_374663 = state_374629__$1;(statearr_374635_374663[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 5))
{var inst_374613 = (state_374629[2]);var state_374629__$1 = (function (){var statearr_374636 = state_374629;(statearr_374636[9] = inst_374613);
return statearr_374636;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374629__$1,12,dchan);
} else
{if((state_val_374630 === 6))
{var state_374629__$1 = state_374629;var statearr_374637_374664 = state_374629__$1;(statearr_374637_374664[2] = null);
(statearr_374637_374664[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 7))
{var state_374629__$1 = state_374629;var statearr_374638_374665 = state_374629__$1;(statearr_374638_374665[2] = null);
(statearr_374638_374665[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 8))
{var inst_374611 = (state_374629[2]);var state_374629__$1 = state_374629;var statearr_374639_374666 = state_374629__$1;(statearr_374639_374666[2] = inst_374611);
(statearr_374639_374666[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 9))
{var inst_374593 = (state_374629[7]);var inst_374606 = (state_374629[2]);var inst_374607 = (inst_374593 + 1);var inst_374593__$1 = inst_374607;var state_374629__$1 = (function (){var statearr_374640 = state_374629;(statearr_374640[7] = inst_374593__$1);
(statearr_374640[10] = inst_374606);
return statearr_374640;
})();var statearr_374641_374667 = state_374629__$1;(statearr_374641_374667[2] = null);
(statearr_374641_374667[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 10))
{var inst_374597 = (state_374629[2]);var inst_374598 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_374629__$1 = (function (){var statearr_374642 = state_374629;(statearr_374642[11] = inst_374597);
return statearr_374642;
})();var statearr_374643_374668 = state_374629__$1;(statearr_374643_374668[2] = inst_374598);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374629__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 11))
{var inst_374593 = (state_374629[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_374629,10,Object,null,9);var inst_374602 = chs__$1.call(null,inst_374593);var inst_374603 = done.call(null,inst_374593);var inst_374604 = cljs.core.async.take_BANG_.call(null,inst_374602,inst_374603);var state_374629__$1 = state_374629;var statearr_374644_374669 = state_374629__$1;(statearr_374644_374669[2] = inst_374604);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374629__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 12))
{var inst_374615 = (state_374629[12]);var inst_374615__$1 = (state_374629[2]);var inst_374616 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_374615__$1);var state_374629__$1 = (function (){var statearr_374645 = state_374629;(statearr_374645[12] = inst_374615__$1);
return statearr_374645;
})();if(cljs.core.truth_(inst_374616))
{var statearr_374646_374670 = state_374629__$1;(statearr_374646_374670[1] = 13);
} else
{var statearr_374647_374671 = state_374629__$1;(statearr_374647_374671[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 13))
{var inst_374618 = cljs.core.async.close_BANG_.call(null,out);var state_374629__$1 = state_374629;var statearr_374648_374672 = state_374629__$1;(statearr_374648_374672[2] = inst_374618);
(statearr_374648_374672[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 14))
{var inst_374615 = (state_374629[12]);var inst_374620 = cljs.core.apply.call(null,f,inst_374615);var state_374629__$1 = state_374629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374629__$1,16,out,inst_374620);
} else
{if((state_val_374630 === 15))
{var inst_374625 = (state_374629[2]);var state_374629__$1 = state_374629;var statearr_374649_374673 = state_374629__$1;(statearr_374649_374673[2] = inst_374625);
(statearr_374649_374673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374630 === 16))
{var inst_374622 = (state_374629[2]);var state_374629__$1 = (function (){var statearr_374650 = state_374629;(statearr_374650[13] = inst_374622);
return statearr_374650;
})();var statearr_374651_374674 = state_374629__$1;(statearr_374651_374674[2] = null);
(statearr_374651_374674[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_374655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_374655[0] = state_machine__18220__auto__);
(statearr_374655[1] = 1);
return statearr_374655;
});
var state_machine__18220__auto____1 = (function (state_374629){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_374629);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e374656){if((e374656 instanceof Object))
{var ex__18223__auto__ = e374656;var statearr_374657_374675 = state_374629;(statearr_374657_374675[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e374656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__374676 = state_374629;
state_374629 = G__374676;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_374629){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_374629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_374658 = f__18290__auto__.call(null);(statearr_374658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___374659);
return statearr_374658;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___374784 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_374760){var state_val_374761 = (state_374760[1]);if((state_val_374761 === 1))
{var inst_374731 = cljs.core.vec.call(null,chs);var inst_374732 = inst_374731;var state_374760__$1 = (function (){var statearr_374762 = state_374760;(statearr_374762[7] = inst_374732);
return statearr_374762;
})();var statearr_374763_374785 = state_374760__$1;(statearr_374763_374785[2] = null);
(statearr_374763_374785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 2))
{var inst_374732 = (state_374760[7]);var inst_374734 = cljs.core.count.call(null,inst_374732);var inst_374735 = (inst_374734 > 0);var state_374760__$1 = state_374760;if(cljs.core.truth_(inst_374735))
{var statearr_374764_374786 = state_374760__$1;(statearr_374764_374786[1] = 4);
} else
{var statearr_374765_374787 = state_374760__$1;(statearr_374765_374787[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 3))
{var inst_374758 = (state_374760[2]);var state_374760__$1 = state_374760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374760__$1,inst_374758);
} else
{if((state_val_374761 === 4))
{var inst_374732 = (state_374760[7]);var state_374760__$1 = state_374760;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_374760__$1,7,inst_374732);
} else
{if((state_val_374761 === 5))
{var inst_374754 = cljs.core.async.close_BANG_.call(null,out);var state_374760__$1 = state_374760;var statearr_374766_374788 = state_374760__$1;(statearr_374766_374788[2] = inst_374754);
(statearr_374766_374788[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 6))
{var inst_374756 = (state_374760[2]);var state_374760__$1 = state_374760;var statearr_374767_374789 = state_374760__$1;(statearr_374767_374789[2] = inst_374756);
(statearr_374767_374789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 7))
{var inst_374739 = (state_374760[8]);var inst_374740 = (state_374760[9]);var inst_374739__$1 = (state_374760[2]);var inst_374740__$1 = cljs.core.nth.call(null,inst_374739__$1,0,null);var inst_374741 = cljs.core.nth.call(null,inst_374739__$1,1,null);var inst_374742 = (inst_374740__$1 == null);var state_374760__$1 = (function (){var statearr_374768 = state_374760;(statearr_374768[8] = inst_374739__$1);
(statearr_374768[9] = inst_374740__$1);
(statearr_374768[10] = inst_374741);
return statearr_374768;
})();if(cljs.core.truth_(inst_374742))
{var statearr_374769_374790 = state_374760__$1;(statearr_374769_374790[1] = 8);
} else
{var statearr_374770_374791 = state_374760__$1;(statearr_374770_374791[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 8))
{var inst_374739 = (state_374760[8]);var inst_374740 = (state_374760[9]);var inst_374741 = (state_374760[10]);var inst_374732 = (state_374760[7]);var inst_374744 = (function (){var c = inst_374741;var v = inst_374740;var vec__374737 = inst_374739;var cs = inst_374732;return ((function (c,v,vec__374737,cs,inst_374739,inst_374740,inst_374741,inst_374732,state_val_374761){
return (function (p1__374677_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__374677_SHARP_);
});
;})(c,v,vec__374737,cs,inst_374739,inst_374740,inst_374741,inst_374732,state_val_374761))
})();var inst_374745 = cljs.core.filterv.call(null,inst_374744,inst_374732);var inst_374732__$1 = inst_374745;var state_374760__$1 = (function (){var statearr_374771 = state_374760;(statearr_374771[7] = inst_374732__$1);
return statearr_374771;
})();var statearr_374772_374792 = state_374760__$1;(statearr_374772_374792[2] = null);
(statearr_374772_374792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 9))
{var inst_374740 = (state_374760[9]);var state_374760__$1 = state_374760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374760__$1,11,out,inst_374740);
} else
{if((state_val_374761 === 10))
{var inst_374752 = (state_374760[2]);var state_374760__$1 = state_374760;var statearr_374774_374793 = state_374760__$1;(statearr_374774_374793[2] = inst_374752);
(statearr_374774_374793[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374761 === 11))
{var inst_374732 = (state_374760[7]);var inst_374749 = (state_374760[2]);var tmp374773 = inst_374732;var inst_374732__$1 = tmp374773;var state_374760__$1 = (function (){var statearr_374775 = state_374760;(statearr_374775[11] = inst_374749);
(statearr_374775[7] = inst_374732__$1);
return statearr_374775;
})();var statearr_374776_374794 = state_374760__$1;(statearr_374776_374794[2] = null);
(statearr_374776_374794[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_374780 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_374780[0] = state_machine__18220__auto__);
(statearr_374780[1] = 1);
return statearr_374780;
});
var state_machine__18220__auto____1 = (function (state_374760){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_374760);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e374781){if((e374781 instanceof Object))
{var ex__18223__auto__ = e374781;var statearr_374782_374795 = state_374760;(statearr_374782_374795[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e374781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__374796 = state_374760;
state_374760 = G__374796;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_374760){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_374760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_374783 = f__18290__auto__.call(null);(statearr_374783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___374784);
return statearr_374783;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___374889 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_374866){var state_val_374867 = (state_374866[1]);if((state_val_374867 === 1))
{var inst_374843 = 0;var state_374866__$1 = (function (){var statearr_374868 = state_374866;(statearr_374868[7] = inst_374843);
return statearr_374868;
})();var statearr_374869_374890 = state_374866__$1;(statearr_374869_374890[2] = null);
(statearr_374869_374890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 2))
{var inst_374843 = (state_374866[7]);var inst_374845 = (inst_374843 < n);var state_374866__$1 = state_374866;if(cljs.core.truth_(inst_374845))
{var statearr_374870_374891 = state_374866__$1;(statearr_374870_374891[1] = 4);
} else
{var statearr_374871_374892 = state_374866__$1;(statearr_374871_374892[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 3))
{var inst_374863 = (state_374866[2]);var inst_374864 = cljs.core.async.close_BANG_.call(null,out);var state_374866__$1 = (function (){var statearr_374872 = state_374866;(statearr_374872[8] = inst_374863);
return statearr_374872;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374866__$1,inst_374864);
} else
{if((state_val_374867 === 4))
{var state_374866__$1 = state_374866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374866__$1,7,ch);
} else
{if((state_val_374867 === 5))
{var state_374866__$1 = state_374866;var statearr_374873_374893 = state_374866__$1;(statearr_374873_374893[2] = null);
(statearr_374873_374893[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 6))
{var inst_374861 = (state_374866[2]);var state_374866__$1 = state_374866;var statearr_374874_374894 = state_374866__$1;(statearr_374874_374894[2] = inst_374861);
(statearr_374874_374894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 7))
{var inst_374848 = (state_374866[9]);var inst_374848__$1 = (state_374866[2]);var inst_374849 = (inst_374848__$1 == null);var inst_374850 = cljs.core.not.call(null,inst_374849);var state_374866__$1 = (function (){var statearr_374875 = state_374866;(statearr_374875[9] = inst_374848__$1);
return statearr_374875;
})();if(inst_374850)
{var statearr_374876_374895 = state_374866__$1;(statearr_374876_374895[1] = 8);
} else
{var statearr_374877_374896 = state_374866__$1;(statearr_374877_374896[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 8))
{var inst_374848 = (state_374866[9]);var state_374866__$1 = state_374866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374866__$1,11,out,inst_374848);
} else
{if((state_val_374867 === 9))
{var state_374866__$1 = state_374866;var statearr_374878_374897 = state_374866__$1;(statearr_374878_374897[2] = null);
(statearr_374878_374897[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 10))
{var inst_374858 = (state_374866[2]);var state_374866__$1 = state_374866;var statearr_374879_374898 = state_374866__$1;(statearr_374879_374898[2] = inst_374858);
(statearr_374879_374898[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374867 === 11))
{var inst_374843 = (state_374866[7]);var inst_374853 = (state_374866[2]);var inst_374854 = (inst_374843 + 1);var inst_374843__$1 = inst_374854;var state_374866__$1 = (function (){var statearr_374880 = state_374866;(statearr_374880[7] = inst_374843__$1);
(statearr_374880[10] = inst_374853);
return statearr_374880;
})();var statearr_374881_374899 = state_374866__$1;(statearr_374881_374899[2] = null);
(statearr_374881_374899[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_374885 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_374885[0] = state_machine__18220__auto__);
(statearr_374885[1] = 1);
return statearr_374885;
});
var state_machine__18220__auto____1 = (function (state_374866){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_374866);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e374886){if((e374886 instanceof Object))
{var ex__18223__auto__ = e374886;var statearr_374887_374900 = state_374866;(statearr_374887_374900[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e374886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__374901 = state_374866;
state_374866 = G__374901;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_374866){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_374866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_374888 = f__18290__auto__.call(null);(statearr_374888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___374889);
return statearr_374888;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___374998 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_374973){var state_val_374974 = (state_374973[1]);if((state_val_374974 === 1))
{var inst_374950 = null;var state_374973__$1 = (function (){var statearr_374975 = state_374973;(statearr_374975[7] = inst_374950);
return statearr_374975;
})();var statearr_374976_374999 = state_374973__$1;(statearr_374976_374999[2] = null);
(statearr_374976_374999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 2))
{var state_374973__$1 = state_374973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374973__$1,4,ch);
} else
{if((state_val_374974 === 3))
{var inst_374970 = (state_374973[2]);var inst_374971 = cljs.core.async.close_BANG_.call(null,out);var state_374973__$1 = (function (){var statearr_374977 = state_374973;(statearr_374977[8] = inst_374970);
return statearr_374977;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374973__$1,inst_374971);
} else
{if((state_val_374974 === 4))
{var inst_374953 = (state_374973[9]);var inst_374953__$1 = (state_374973[2]);var inst_374954 = (inst_374953__$1 == null);var inst_374955 = cljs.core.not.call(null,inst_374954);var state_374973__$1 = (function (){var statearr_374978 = state_374973;(statearr_374978[9] = inst_374953__$1);
return statearr_374978;
})();if(inst_374955)
{var statearr_374979_375000 = state_374973__$1;(statearr_374979_375000[1] = 5);
} else
{var statearr_374980_375001 = state_374973__$1;(statearr_374980_375001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 5))
{var inst_374950 = (state_374973[7]);var inst_374953 = (state_374973[9]);var inst_374957 = cljs.core._EQ_.call(null,inst_374953,inst_374950);var state_374973__$1 = state_374973;if(inst_374957)
{var statearr_374981_375002 = state_374973__$1;(statearr_374981_375002[1] = 8);
} else
{var statearr_374982_375003 = state_374973__$1;(statearr_374982_375003[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 6))
{var state_374973__$1 = state_374973;var statearr_374984_375004 = state_374973__$1;(statearr_374984_375004[2] = null);
(statearr_374984_375004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 7))
{var inst_374968 = (state_374973[2]);var state_374973__$1 = state_374973;var statearr_374985_375005 = state_374973__$1;(statearr_374985_375005[2] = inst_374968);
(statearr_374985_375005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 8))
{var inst_374950 = (state_374973[7]);var tmp374983 = inst_374950;var inst_374950__$1 = tmp374983;var state_374973__$1 = (function (){var statearr_374986 = state_374973;(statearr_374986[7] = inst_374950__$1);
return statearr_374986;
})();var statearr_374987_375006 = state_374973__$1;(statearr_374987_375006[2] = null);
(statearr_374987_375006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 9))
{var inst_374953 = (state_374973[9]);var state_374973__$1 = state_374973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374973__$1,11,out,inst_374953);
} else
{if((state_val_374974 === 10))
{var inst_374965 = (state_374973[2]);var state_374973__$1 = state_374973;var statearr_374988_375007 = state_374973__$1;(statearr_374988_375007[2] = inst_374965);
(statearr_374988_375007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_374974 === 11))
{var inst_374953 = (state_374973[9]);var inst_374962 = (state_374973[2]);var inst_374950 = inst_374953;var state_374973__$1 = (function (){var statearr_374989 = state_374973;(statearr_374989[10] = inst_374962);
(statearr_374989[7] = inst_374950);
return statearr_374989;
})();var statearr_374990_375008 = state_374973__$1;(statearr_374990_375008[2] = null);
(statearr_374990_375008[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_374994 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_374994[0] = state_machine__18220__auto__);
(statearr_374994[1] = 1);
return statearr_374994;
});
var state_machine__18220__auto____1 = (function (state_374973){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_374973);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e374995){if((e374995 instanceof Object))
{var ex__18223__auto__ = e374995;var statearr_374996_375009 = state_374973;(statearr_374996_375009[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374973);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e374995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__375010 = state_374973;
state_374973 = G__375010;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_374973){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_374973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_374997 = f__18290__auto__.call(null);(statearr_374997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___374998);
return statearr_374997;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___375145 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_375115){var state_val_375116 = (state_375115[1]);if((state_val_375116 === 1))
{var inst_375078 = (new Array(n));var inst_375079 = inst_375078;var inst_375080 = 0;var state_375115__$1 = (function (){var statearr_375117 = state_375115;(statearr_375117[7] = inst_375080);
(statearr_375117[8] = inst_375079);
return statearr_375117;
})();var statearr_375118_375146 = state_375115__$1;(statearr_375118_375146[2] = null);
(statearr_375118_375146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 2))
{var state_375115__$1 = state_375115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375115__$1,4,ch);
} else
{if((state_val_375116 === 3))
{var inst_375113 = (state_375115[2]);var state_375115__$1 = state_375115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375115__$1,inst_375113);
} else
{if((state_val_375116 === 4))
{var inst_375083 = (state_375115[9]);var inst_375083__$1 = (state_375115[2]);var inst_375084 = (inst_375083__$1 == null);var inst_375085 = cljs.core.not.call(null,inst_375084);var state_375115__$1 = (function (){var statearr_375119 = state_375115;(statearr_375119[9] = inst_375083__$1);
return statearr_375119;
})();if(inst_375085)
{var statearr_375120_375147 = state_375115__$1;(statearr_375120_375147[1] = 5);
} else
{var statearr_375121_375148 = state_375115__$1;(statearr_375121_375148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 5))
{var inst_375088 = (state_375115[10]);var inst_375080 = (state_375115[7]);var inst_375079 = (state_375115[8]);var inst_375083 = (state_375115[9]);var inst_375087 = (inst_375079[inst_375080] = inst_375083);var inst_375088__$1 = (inst_375080 + 1);var inst_375089 = (inst_375088__$1 < n);var state_375115__$1 = (function (){var statearr_375122 = state_375115;(statearr_375122[10] = inst_375088__$1);
(statearr_375122[11] = inst_375087);
return statearr_375122;
})();if(cljs.core.truth_(inst_375089))
{var statearr_375123_375149 = state_375115__$1;(statearr_375123_375149[1] = 8);
} else
{var statearr_375124_375150 = state_375115__$1;(statearr_375124_375150[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 6))
{var inst_375080 = (state_375115[7]);var inst_375101 = (inst_375080 > 0);var state_375115__$1 = state_375115;if(cljs.core.truth_(inst_375101))
{var statearr_375126_375151 = state_375115__$1;(statearr_375126_375151[1] = 12);
} else
{var statearr_375127_375152 = state_375115__$1;(statearr_375127_375152[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 7))
{var inst_375111 = (state_375115[2]);var state_375115__$1 = state_375115;var statearr_375128_375153 = state_375115__$1;(statearr_375128_375153[2] = inst_375111);
(statearr_375128_375153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 8))
{var inst_375088 = (state_375115[10]);var inst_375079 = (state_375115[8]);var tmp375125 = inst_375079;var inst_375079__$1 = tmp375125;var inst_375080 = inst_375088;var state_375115__$1 = (function (){var statearr_375129 = state_375115;(statearr_375129[7] = inst_375080);
(statearr_375129[8] = inst_375079__$1);
return statearr_375129;
})();var statearr_375130_375154 = state_375115__$1;(statearr_375130_375154[2] = null);
(statearr_375130_375154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 9))
{var inst_375079 = (state_375115[8]);var inst_375093 = cljs.core.vec.call(null,inst_375079);var state_375115__$1 = state_375115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375115__$1,11,out,inst_375093);
} else
{if((state_val_375116 === 10))
{var inst_375099 = (state_375115[2]);var state_375115__$1 = state_375115;var statearr_375131_375155 = state_375115__$1;(statearr_375131_375155[2] = inst_375099);
(statearr_375131_375155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 11))
{var inst_375095 = (state_375115[2]);var inst_375096 = (new Array(n));var inst_375079 = inst_375096;var inst_375080 = 0;var state_375115__$1 = (function (){var statearr_375132 = state_375115;(statearr_375132[12] = inst_375095);
(statearr_375132[7] = inst_375080);
(statearr_375132[8] = inst_375079);
return statearr_375132;
})();var statearr_375133_375156 = state_375115__$1;(statearr_375133_375156[2] = null);
(statearr_375133_375156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 12))
{var inst_375079 = (state_375115[8]);var inst_375103 = cljs.core.vec.call(null,inst_375079);var state_375115__$1 = state_375115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375115__$1,15,out,inst_375103);
} else
{if((state_val_375116 === 13))
{var state_375115__$1 = state_375115;var statearr_375134_375157 = state_375115__$1;(statearr_375134_375157[2] = null);
(statearr_375134_375157[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 14))
{var inst_375108 = (state_375115[2]);var inst_375109 = cljs.core.async.close_BANG_.call(null,out);var state_375115__$1 = (function (){var statearr_375135 = state_375115;(statearr_375135[13] = inst_375108);
return statearr_375135;
})();var statearr_375136_375158 = state_375115__$1;(statearr_375136_375158[2] = inst_375109);
(statearr_375136_375158[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375116 === 15))
{var inst_375105 = (state_375115[2]);var state_375115__$1 = state_375115;var statearr_375137_375159 = state_375115__$1;(statearr_375137_375159[2] = inst_375105);
(statearr_375137_375159[1] = 14);
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
var state_machine__18220__auto____0 = (function (){var statearr_375141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_375141[0] = state_machine__18220__auto__);
(statearr_375141[1] = 1);
return statearr_375141;
});
var state_machine__18220__auto____1 = (function (state_375115){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_375115);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e375142){if((e375142 instanceof Object))
{var ex__18223__auto__ = e375142;var statearr_375143_375160 = state_375115;(statearr_375143_375160[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375115);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e375142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__375161 = state_375115;
state_375115 = G__375161;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_375115){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_375115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_375144 = f__18290__auto__.call(null);(statearr_375144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___375145);
return statearr_375144;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___375304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_375274){var state_val_375275 = (state_375274[1]);if((state_val_375275 === 1))
{var inst_375233 = [];var inst_375234 = inst_375233;var inst_375235 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_375274__$1 = (function (){var statearr_375276 = state_375274;(statearr_375276[7] = inst_375235);
(statearr_375276[8] = inst_375234);
return statearr_375276;
})();var statearr_375277_375305 = state_375274__$1;(statearr_375277_375305[2] = null);
(statearr_375277_375305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 2))
{var state_375274__$1 = state_375274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375274__$1,4,ch);
} else
{if((state_val_375275 === 3))
{var inst_375272 = (state_375274[2]);var state_375274__$1 = state_375274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375274__$1,inst_375272);
} else
{if((state_val_375275 === 4))
{var inst_375238 = (state_375274[9]);var inst_375238__$1 = (state_375274[2]);var inst_375239 = (inst_375238__$1 == null);var inst_375240 = cljs.core.not.call(null,inst_375239);var state_375274__$1 = (function (){var statearr_375278 = state_375274;(statearr_375278[9] = inst_375238__$1);
return statearr_375278;
})();if(inst_375240)
{var statearr_375279_375306 = state_375274__$1;(statearr_375279_375306[1] = 5);
} else
{var statearr_375280_375307 = state_375274__$1;(statearr_375280_375307[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 5))
{var inst_375235 = (state_375274[7]);var inst_375242 = (state_375274[10]);var inst_375238 = (state_375274[9]);var inst_375242__$1 = f.call(null,inst_375238);var inst_375243 = cljs.core._EQ_.call(null,inst_375242__$1,inst_375235);var inst_375244 = cljs.core.keyword_identical_QMARK_.call(null,inst_375235,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_375245 = (inst_375243) || (inst_375244);var state_375274__$1 = (function (){var statearr_375281 = state_375274;(statearr_375281[10] = inst_375242__$1);
return statearr_375281;
})();if(cljs.core.truth_(inst_375245))
{var statearr_375282_375308 = state_375274__$1;(statearr_375282_375308[1] = 8);
} else
{var statearr_375283_375309 = state_375274__$1;(statearr_375283_375309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 6))
{var inst_375234 = (state_375274[8]);var inst_375259 = inst_375234.length;var inst_375260 = (inst_375259 > 0);var state_375274__$1 = state_375274;if(cljs.core.truth_(inst_375260))
{var statearr_375285_375310 = state_375274__$1;(statearr_375285_375310[1] = 12);
} else
{var statearr_375286_375311 = state_375274__$1;(statearr_375286_375311[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 7))
{var inst_375270 = (state_375274[2]);var state_375274__$1 = state_375274;var statearr_375287_375312 = state_375274__$1;(statearr_375287_375312[2] = inst_375270);
(statearr_375287_375312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 8))
{var inst_375242 = (state_375274[10]);var inst_375238 = (state_375274[9]);var inst_375234 = (state_375274[8]);var inst_375247 = inst_375234.push(inst_375238);var tmp375284 = inst_375234;var inst_375234__$1 = tmp375284;var inst_375235 = inst_375242;var state_375274__$1 = (function (){var statearr_375288 = state_375274;(statearr_375288[11] = inst_375247);
(statearr_375288[7] = inst_375235);
(statearr_375288[8] = inst_375234__$1);
return statearr_375288;
})();var statearr_375289_375313 = state_375274__$1;(statearr_375289_375313[2] = null);
(statearr_375289_375313[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 9))
{var inst_375234 = (state_375274[8]);var inst_375250 = cljs.core.vec.call(null,inst_375234);var state_375274__$1 = state_375274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375274__$1,11,out,inst_375250);
} else
{if((state_val_375275 === 10))
{var inst_375257 = (state_375274[2]);var state_375274__$1 = state_375274;var statearr_375290_375314 = state_375274__$1;(statearr_375290_375314[2] = inst_375257);
(statearr_375290_375314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 11))
{var inst_375242 = (state_375274[10]);var inst_375238 = (state_375274[9]);var inst_375252 = (state_375274[2]);var inst_375253 = [];var inst_375254 = inst_375253.push(inst_375238);var inst_375234 = inst_375253;var inst_375235 = inst_375242;var state_375274__$1 = (function (){var statearr_375291 = state_375274;(statearr_375291[12] = inst_375252);
(statearr_375291[13] = inst_375254);
(statearr_375291[7] = inst_375235);
(statearr_375291[8] = inst_375234);
return statearr_375291;
})();var statearr_375292_375315 = state_375274__$1;(statearr_375292_375315[2] = null);
(statearr_375292_375315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 12))
{var inst_375234 = (state_375274[8]);var inst_375262 = cljs.core.vec.call(null,inst_375234);var state_375274__$1 = state_375274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375274__$1,15,out,inst_375262);
} else
{if((state_val_375275 === 13))
{var state_375274__$1 = state_375274;var statearr_375293_375316 = state_375274__$1;(statearr_375293_375316[2] = null);
(statearr_375293_375316[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 14))
{var inst_375267 = (state_375274[2]);var inst_375268 = cljs.core.async.close_BANG_.call(null,out);var state_375274__$1 = (function (){var statearr_375294 = state_375274;(statearr_375294[14] = inst_375267);
return statearr_375294;
})();var statearr_375295_375317 = state_375274__$1;(statearr_375295_375317[2] = inst_375268);
(statearr_375295_375317[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_375275 === 15))
{var inst_375264 = (state_375274[2]);var state_375274__$1 = state_375274;var statearr_375296_375318 = state_375274__$1;(statearr_375296_375318[2] = inst_375264);
(statearr_375296_375318[1] = 14);
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
var state_machine__18220__auto____0 = (function (){var statearr_375300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_375300[0] = state_machine__18220__auto__);
(statearr_375300[1] = 1);
return statearr_375300;
});
var state_machine__18220__auto____1 = (function (state_375274){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_375274);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e375301){if((e375301 instanceof Object))
{var ex__18223__auto__ = e375301;var statearr_375302_375319 = state_375274;(statearr_375302_375319[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e375301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__375320 = state_375274;
state_375274 = G__375320;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_375274){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_375274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_375303 = f__18290__auto__.call(null);(statearr_375303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___375304);
return statearr_375303;
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