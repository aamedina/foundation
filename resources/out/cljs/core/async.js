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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t363662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363662 = (function (f,fn_handler,meta363663){
this.f = f;
this.fn_handler = fn_handler;
this.meta363663 = meta363663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363662.cljs$lang$type = true;
cljs.core.async.t363662.cljs$lang$ctorStr = "cljs.core.async/t363662";
cljs.core.async.t363662.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363662");
});
cljs.core.async.t363662.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t363662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t363662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t363662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363664){var self__ = this;
var _363664__$1 = this;return self__.meta363663;
});
cljs.core.async.t363662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363664,meta363663__$1){var self__ = this;
var _363664__$1 = this;return (new cljs.core.async.t363662(self__.f,self__.fn_handler,meta363663__$1));
});
cljs.core.async.__GT_t363662 = (function __GT_t363662(f__$1,fn_handler__$1,meta363663){return (new cljs.core.async.t363662(f__$1,fn_handler__$1,meta363663));
});
}
return (new cljs.core.async.t363662(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__363666 = buff;if(G__363666)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__363666.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__363666.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__363666);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__363666);
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
{var val_363667 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_363667);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_363667);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14807__auto___363668 = n;var x_363669 = 0;while(true){
if((x_363669 < n__14807__auto___363668))
{(a[x_363669] = 0);
{
var G__363670 = (x_363669 + 1);
x_363669 = G__363670;
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
var G__363671 = (i + 1);
i = G__363671;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t363675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363675 = (function (flag,alt_flag,meta363676){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta363676 = meta363676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363675.cljs$lang$type = true;
cljs.core.async.t363675.cljs$lang$ctorStr = "cljs.core.async/t363675";
cljs.core.async.t363675.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363675");
});
cljs.core.async.t363675.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t363675.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t363675.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t363675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363677){var self__ = this;
var _363677__$1 = this;return self__.meta363676;
});
cljs.core.async.t363675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363677,meta363676__$1){var self__ = this;
var _363677__$1 = this;return (new cljs.core.async.t363675(self__.flag,self__.alt_flag,meta363676__$1));
});
cljs.core.async.__GT_t363675 = (function __GT_t363675(flag__$1,alt_flag__$1,meta363676){return (new cljs.core.async.t363675(flag__$1,alt_flag__$1,meta363676));
});
}
return (new cljs.core.async.t363675(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t363681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363681 = (function (cb,flag,alt_handler,meta363682){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta363682 = meta363682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363681.cljs$lang$type = true;
cljs.core.async.t363681.cljs$lang$ctorStr = "cljs.core.async/t363681";
cljs.core.async.t363681.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363681");
});
cljs.core.async.t363681.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t363681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t363681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t363681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363683){var self__ = this;
var _363683__$1 = this;return self__.meta363682;
});
cljs.core.async.t363681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363683,meta363682__$1){var self__ = this;
var _363683__$1 = this;return (new cljs.core.async.t363681(self__.cb,self__.flag,self__.alt_handler,meta363682__$1));
});
cljs.core.async.__GT_t363681 = (function __GT_t363681(cb__$1,flag__$1,alt_handler__$1,meta363682){return (new cljs.core.async.t363681(cb__$1,flag__$1,alt_handler__$1,meta363682));
});
}
return (new cljs.core.async.t363681(cb,flag,alt_handler,null));
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
return (function (p1__363684_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__363684_SHARP_,port], null));
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
var G__363685 = (i + 1);
i = G__363685;
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
var alts_BANG___delegate = function (ports,p__363686){var map__363688 = p__363686;var map__363688__$1 = ((cljs.core.seq_QMARK_.call(null,map__363688))?cljs.core.apply.call(null,cljs.core.hash_map,map__363688):map__363688);var opts = map__363688__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__363686 = null;if (arguments.length > 1) {
  p__363686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__363686);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__363689){
var ports = cljs.core.first(arglist__363689);
var p__363686 = cljs.core.rest(arglist__363689);
return alts_BANG___delegate(ports,p__363686);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t363697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363697 = (function (ch,f,map_LT_,meta363698){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta363698 = meta363698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363697.cljs$lang$type = true;
cljs.core.async.t363697.cljs$lang$ctorStr = "cljs.core.async/t363697";
cljs.core.async.t363697.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363697");
});
cljs.core.async.t363697.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t363697.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t363697.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t363697.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t363700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363700 = (function (fn1,_,meta363698,ch,f,map_LT_,meta363701){
this.fn1 = fn1;
this._ = _;
this.meta363698 = meta363698;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta363701 = meta363701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363700.cljs$lang$type = true;
cljs.core.async.t363700.cljs$lang$ctorStr = "cljs.core.async/t363700";
cljs.core.async.t363700.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363700");
});
cljs.core.async.t363700.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t363700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t363700.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t363700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__363690_SHARP_){return f1.call(null,(((p1__363690_SHARP_ == null))?null:self__.f.call(null,p1__363690_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t363700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363702){var self__ = this;
var _363702__$1 = this;return self__.meta363701;
});
cljs.core.async.t363700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363702,meta363701__$1){var self__ = this;
var _363702__$1 = this;return (new cljs.core.async.t363700(self__.fn1,self__._,self__.meta363698,self__.ch,self__.f,self__.map_LT_,meta363701__$1));
});
cljs.core.async.__GT_t363700 = (function __GT_t363700(fn1__$1,___$2,meta363698__$1,ch__$2,f__$2,map_LT___$2,meta363701){return (new cljs.core.async.t363700(fn1__$1,___$2,meta363698__$1,ch__$2,f__$2,map_LT___$2,meta363701));
});
}
return (new cljs.core.async.t363700(fn1,___$1,self__.meta363698,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t363697.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t363697.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t363697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363699){var self__ = this;
var _363699__$1 = this;return self__.meta363698;
});
cljs.core.async.t363697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363699,meta363698__$1){var self__ = this;
var _363699__$1 = this;return (new cljs.core.async.t363697(self__.ch,self__.f,self__.map_LT_,meta363698__$1));
});
cljs.core.async.__GT_t363697 = (function __GT_t363697(ch__$1,f__$1,map_LT___$1,meta363698){return (new cljs.core.async.t363697(ch__$1,f__$1,map_LT___$1,meta363698));
});
}
return (new cljs.core.async.t363697(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t363706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363706 = (function (ch,f,map_GT_,meta363707){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta363707 = meta363707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363706.cljs$lang$type = true;
cljs.core.async.t363706.cljs$lang$ctorStr = "cljs.core.async/t363706";
cljs.core.async.t363706.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363706");
});
cljs.core.async.t363706.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t363706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t363706.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t363706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t363706.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t363706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t363706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363708){var self__ = this;
var _363708__$1 = this;return self__.meta363707;
});
cljs.core.async.t363706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363708,meta363707__$1){var self__ = this;
var _363708__$1 = this;return (new cljs.core.async.t363706(self__.ch,self__.f,self__.map_GT_,meta363707__$1));
});
cljs.core.async.__GT_t363706 = (function __GT_t363706(ch__$1,f__$1,map_GT___$1,meta363707){return (new cljs.core.async.t363706(ch__$1,f__$1,map_GT___$1,meta363707));
});
}
return (new cljs.core.async.t363706(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t363712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t363712 = (function (ch,p,filter_GT_,meta363713){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta363713 = meta363713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t363712.cljs$lang$type = true;
cljs.core.async.t363712.cljs$lang$ctorStr = "cljs.core.async/t363712";
cljs.core.async.t363712.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t363712");
});
cljs.core.async.t363712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t363712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t363712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t363712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t363712.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t363712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t363712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_363714){var self__ = this;
var _363714__$1 = this;return self__.meta363713;
});
cljs.core.async.t363712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_363714,meta363713__$1){var self__ = this;
var _363714__$1 = this;return (new cljs.core.async.t363712(self__.ch,self__.p,self__.filter_GT_,meta363713__$1));
});
cljs.core.async.__GT_t363712 = (function __GT_t363712(ch__$1,p__$1,filter_GT___$1,meta363713){return (new cljs.core.async.t363712(ch__$1,p__$1,filter_GT___$1,meta363713));
});
}
return (new cljs.core.async.t363712(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___363797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_363776){var state_val_363777 = (state_363776[1]);if((state_val_363777 === 1))
{var state_363776__$1 = state_363776;var statearr_363778_363798 = state_363776__$1;(statearr_363778_363798[2] = null);
(statearr_363778_363798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 2))
{var state_363776__$1 = state_363776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_363776__$1,4,ch);
} else
{if((state_val_363777 === 3))
{var inst_363774 = (state_363776[2]);var state_363776__$1 = state_363776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_363776__$1,inst_363774);
} else
{if((state_val_363777 === 4))
{var inst_363758 = (state_363776[7]);var inst_363758__$1 = (state_363776[2]);var inst_363759 = (inst_363758__$1 == null);var state_363776__$1 = (function (){var statearr_363779 = state_363776;(statearr_363779[7] = inst_363758__$1);
return statearr_363779;
})();if(cljs.core.truth_(inst_363759))
{var statearr_363780_363799 = state_363776__$1;(statearr_363780_363799[1] = 5);
} else
{var statearr_363781_363800 = state_363776__$1;(statearr_363781_363800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 5))
{var inst_363761 = cljs.core.async.close_BANG_.call(null,out);var state_363776__$1 = state_363776;var statearr_363782_363801 = state_363776__$1;(statearr_363782_363801[2] = inst_363761);
(statearr_363782_363801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 6))
{var inst_363758 = (state_363776[7]);var inst_363763 = p.call(null,inst_363758);var state_363776__$1 = state_363776;if(cljs.core.truth_(inst_363763))
{var statearr_363783_363802 = state_363776__$1;(statearr_363783_363802[1] = 8);
} else
{var statearr_363784_363803 = state_363776__$1;(statearr_363784_363803[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 7))
{var inst_363772 = (state_363776[2]);var state_363776__$1 = state_363776;var statearr_363785_363804 = state_363776__$1;(statearr_363785_363804[2] = inst_363772);
(statearr_363785_363804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 8))
{var inst_363758 = (state_363776[7]);var state_363776__$1 = state_363776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_363776__$1,11,out,inst_363758);
} else
{if((state_val_363777 === 9))
{var state_363776__$1 = state_363776;var statearr_363786_363805 = state_363776__$1;(statearr_363786_363805[2] = null);
(statearr_363786_363805[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 10))
{var inst_363769 = (state_363776[2]);var state_363776__$1 = (function (){var statearr_363787 = state_363776;(statearr_363787[8] = inst_363769);
return statearr_363787;
})();var statearr_363788_363806 = state_363776__$1;(statearr_363788_363806[2] = null);
(statearr_363788_363806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363777 === 11))
{var inst_363766 = (state_363776[2]);var state_363776__$1 = state_363776;var statearr_363789_363807 = state_363776__$1;(statearr_363789_363807[2] = inst_363766);
(statearr_363789_363807[1] = 10);
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
var state_machine__18220__auto____0 = (function (){var statearr_363793 = [null,null,null,null,null,null,null,null,null];(statearr_363793[0] = state_machine__18220__auto__);
(statearr_363793[1] = 1);
return statearr_363793;
});
var state_machine__18220__auto____1 = (function (state_363776){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_363776);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e363794){if((e363794 instanceof Object))
{var ex__18223__auto__ = e363794;var statearr_363795_363808 = state_363776;(statearr_363795_363808[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_363776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e363794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__363809 = state_363776;
state_363776 = G__363809;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_363776){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_363776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_363796 = f__18290__auto__.call(null);(statearr_363796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___363797);
return statearr_363796;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_363961){var state_val_363962 = (state_363961[1]);if((state_val_363962 === 1))
{var state_363961__$1 = state_363961;var statearr_363963_364000 = state_363961__$1;(statearr_363963_364000[2] = null);
(statearr_363963_364000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 2))
{var state_363961__$1 = state_363961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_363961__$1,4,in$);
} else
{if((state_val_363962 === 3))
{var inst_363959 = (state_363961[2]);var state_363961__$1 = state_363961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_363961__$1,inst_363959);
} else
{if((state_val_363962 === 4))
{var inst_363907 = (state_363961[7]);var inst_363907__$1 = (state_363961[2]);var inst_363908 = (inst_363907__$1 == null);var state_363961__$1 = (function (){var statearr_363964 = state_363961;(statearr_363964[7] = inst_363907__$1);
return statearr_363964;
})();if(cljs.core.truth_(inst_363908))
{var statearr_363965_364001 = state_363961__$1;(statearr_363965_364001[1] = 5);
} else
{var statearr_363966_364002 = state_363961__$1;(statearr_363966_364002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 5))
{var inst_363910 = cljs.core.async.close_BANG_.call(null,out);var state_363961__$1 = state_363961;var statearr_363967_364003 = state_363961__$1;(statearr_363967_364003[2] = inst_363910);
(statearr_363967_364003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 6))
{var inst_363907 = (state_363961[7]);var inst_363912 = f.call(null,inst_363907);var inst_363917 = cljs.core.seq.call(null,inst_363912);var inst_363918 = inst_363917;var inst_363919 = null;var inst_363920 = 0;var inst_363921 = 0;var state_363961__$1 = (function (){var statearr_363968 = state_363961;(statearr_363968[8] = inst_363921);
(statearr_363968[9] = inst_363920);
(statearr_363968[10] = inst_363919);
(statearr_363968[11] = inst_363918);
return statearr_363968;
})();var statearr_363969_364004 = state_363961__$1;(statearr_363969_364004[2] = null);
(statearr_363969_364004[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 7))
{var inst_363957 = (state_363961[2]);var state_363961__$1 = state_363961;var statearr_363970_364005 = state_363961__$1;(statearr_363970_364005[2] = inst_363957);
(statearr_363970_364005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 8))
{var inst_363921 = (state_363961[8]);var inst_363920 = (state_363961[9]);var inst_363923 = (inst_363921 < inst_363920);var inst_363924 = inst_363923;var state_363961__$1 = state_363961;if(cljs.core.truth_(inst_363924))
{var statearr_363971_364006 = state_363961__$1;(statearr_363971_364006[1] = 10);
} else
{var statearr_363972_364007 = state_363961__$1;(statearr_363972_364007[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 9))
{var inst_363954 = (state_363961[2]);var state_363961__$1 = (function (){var statearr_363973 = state_363961;(statearr_363973[12] = inst_363954);
return statearr_363973;
})();var statearr_363974_364008 = state_363961__$1;(statearr_363974_364008[2] = null);
(statearr_363974_364008[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 10))
{var inst_363921 = (state_363961[8]);var inst_363919 = (state_363961[10]);var inst_363926 = cljs.core._nth.call(null,inst_363919,inst_363921);var state_363961__$1 = state_363961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_363961__$1,13,out,inst_363926);
} else
{if((state_val_363962 === 11))
{var inst_363932 = (state_363961[13]);var inst_363918 = (state_363961[11]);var inst_363932__$1 = cljs.core.seq.call(null,inst_363918);var state_363961__$1 = (function (){var statearr_363978 = state_363961;(statearr_363978[13] = inst_363932__$1);
return statearr_363978;
})();if(inst_363932__$1)
{var statearr_363979_364009 = state_363961__$1;(statearr_363979_364009[1] = 14);
} else
{var statearr_363980_364010 = state_363961__$1;(statearr_363980_364010[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 12))
{var inst_363952 = (state_363961[2]);var state_363961__$1 = state_363961;var statearr_363981_364011 = state_363961__$1;(statearr_363981_364011[2] = inst_363952);
(statearr_363981_364011[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 13))
{var inst_363921 = (state_363961[8]);var inst_363920 = (state_363961[9]);var inst_363919 = (state_363961[10]);var inst_363918 = (state_363961[11]);var inst_363928 = (state_363961[2]);var inst_363929 = (inst_363921 + 1);var tmp363975 = inst_363920;var tmp363976 = inst_363919;var tmp363977 = inst_363918;var inst_363918__$1 = tmp363977;var inst_363919__$1 = tmp363976;var inst_363920__$1 = tmp363975;var inst_363921__$1 = inst_363929;var state_363961__$1 = (function (){var statearr_363982 = state_363961;(statearr_363982[8] = inst_363921__$1);
(statearr_363982[9] = inst_363920__$1);
(statearr_363982[14] = inst_363928);
(statearr_363982[10] = inst_363919__$1);
(statearr_363982[11] = inst_363918__$1);
return statearr_363982;
})();var statearr_363983_364012 = state_363961__$1;(statearr_363983_364012[2] = null);
(statearr_363983_364012[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 14))
{var inst_363932 = (state_363961[13]);var inst_363934 = cljs.core.chunked_seq_QMARK_.call(null,inst_363932);var state_363961__$1 = state_363961;if(inst_363934)
{var statearr_363984_364013 = state_363961__$1;(statearr_363984_364013[1] = 17);
} else
{var statearr_363985_364014 = state_363961__$1;(statearr_363985_364014[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 15))
{var state_363961__$1 = state_363961;var statearr_363986_364015 = state_363961__$1;(statearr_363986_364015[2] = null);
(statearr_363986_364015[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 16))
{var inst_363950 = (state_363961[2]);var state_363961__$1 = state_363961;var statearr_363987_364016 = state_363961__$1;(statearr_363987_364016[2] = inst_363950);
(statearr_363987_364016[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 17))
{var inst_363932 = (state_363961[13]);var inst_363936 = cljs.core.chunk_first.call(null,inst_363932);var inst_363937 = cljs.core.chunk_rest.call(null,inst_363932);var inst_363938 = cljs.core.count.call(null,inst_363936);var inst_363918 = inst_363937;var inst_363919 = inst_363936;var inst_363920 = inst_363938;var inst_363921 = 0;var state_363961__$1 = (function (){var statearr_363988 = state_363961;(statearr_363988[8] = inst_363921);
(statearr_363988[9] = inst_363920);
(statearr_363988[10] = inst_363919);
(statearr_363988[11] = inst_363918);
return statearr_363988;
})();var statearr_363989_364017 = state_363961__$1;(statearr_363989_364017[2] = null);
(statearr_363989_364017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 18))
{var inst_363932 = (state_363961[13]);var inst_363941 = cljs.core.first.call(null,inst_363932);var state_363961__$1 = state_363961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_363961__$1,20,out,inst_363941);
} else
{if((state_val_363962 === 19))
{var inst_363947 = (state_363961[2]);var state_363961__$1 = state_363961;var statearr_363990_364018 = state_363961__$1;(statearr_363990_364018[2] = inst_363947);
(statearr_363990_364018[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_363962 === 20))
{var inst_363932 = (state_363961[13]);var inst_363943 = (state_363961[2]);var inst_363944 = cljs.core.next.call(null,inst_363932);var inst_363918 = inst_363944;var inst_363919 = null;var inst_363920 = 0;var inst_363921 = 0;var state_363961__$1 = (function (){var statearr_363991 = state_363961;(statearr_363991[8] = inst_363921);
(statearr_363991[9] = inst_363920);
(statearr_363991[15] = inst_363943);
(statearr_363991[10] = inst_363919);
(statearr_363991[11] = inst_363918);
return statearr_363991;
})();var statearr_363992_364019 = state_363961__$1;(statearr_363992_364019[2] = null);
(statearr_363992_364019[1] = 8);
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
var state_machine__18220__auto____0 = (function (){var statearr_363996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_363996[0] = state_machine__18220__auto__);
(statearr_363996[1] = 1);
return statearr_363996;
});
var state_machine__18220__auto____1 = (function (state_363961){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_363961);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e363997){if((e363997 instanceof Object))
{var ex__18223__auto__ = e363997;var statearr_363998_364020 = state_363961;(statearr_363998_364020[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_363961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e363997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__364021 = state_363961;
state_363961 = G__364021;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_363961){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_363961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_363999 = f__18290__auto__.call(null);(statearr_363999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_363999;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18289__auto___364102 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_364081){var state_val_364082 = (state_364081[1]);if((state_val_364082 === 1))
{var state_364081__$1 = state_364081;var statearr_364083_364103 = state_364081__$1;(statearr_364083_364103[2] = null);
(statearr_364083_364103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 2))
{var state_364081__$1 = state_364081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364081__$1,4,from);
} else
{if((state_val_364082 === 3))
{var inst_364079 = (state_364081[2]);var state_364081__$1 = state_364081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364081__$1,inst_364079);
} else
{if((state_val_364082 === 4))
{var inst_364064 = (state_364081[7]);var inst_364064__$1 = (state_364081[2]);var inst_364065 = (inst_364064__$1 == null);var state_364081__$1 = (function (){var statearr_364084 = state_364081;(statearr_364084[7] = inst_364064__$1);
return statearr_364084;
})();if(cljs.core.truth_(inst_364065))
{var statearr_364085_364104 = state_364081__$1;(statearr_364085_364104[1] = 5);
} else
{var statearr_364086_364105 = state_364081__$1;(statearr_364086_364105[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 5))
{var state_364081__$1 = state_364081;if(cljs.core.truth_(close_QMARK_))
{var statearr_364087_364106 = state_364081__$1;(statearr_364087_364106[1] = 8);
} else
{var statearr_364088_364107 = state_364081__$1;(statearr_364088_364107[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 6))
{var inst_364064 = (state_364081[7]);var state_364081__$1 = state_364081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364081__$1,11,to,inst_364064);
} else
{if((state_val_364082 === 7))
{var inst_364077 = (state_364081[2]);var state_364081__$1 = state_364081;var statearr_364089_364108 = state_364081__$1;(statearr_364089_364108[2] = inst_364077);
(statearr_364089_364108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 8))
{var inst_364068 = cljs.core.async.close_BANG_.call(null,to);var state_364081__$1 = state_364081;var statearr_364090_364109 = state_364081__$1;(statearr_364090_364109[2] = inst_364068);
(statearr_364090_364109[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 9))
{var state_364081__$1 = state_364081;var statearr_364091_364110 = state_364081__$1;(statearr_364091_364110[2] = null);
(statearr_364091_364110[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 10))
{var inst_364071 = (state_364081[2]);var state_364081__$1 = state_364081;var statearr_364092_364111 = state_364081__$1;(statearr_364092_364111[2] = inst_364071);
(statearr_364092_364111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364082 === 11))
{var inst_364074 = (state_364081[2]);var state_364081__$1 = (function (){var statearr_364093 = state_364081;(statearr_364093[8] = inst_364074);
return statearr_364093;
})();var statearr_364094_364112 = state_364081__$1;(statearr_364094_364112[2] = null);
(statearr_364094_364112[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_364098 = [null,null,null,null,null,null,null,null,null];(statearr_364098[0] = state_machine__18220__auto__);
(statearr_364098[1] = 1);
return statearr_364098;
});
var state_machine__18220__auto____1 = (function (state_364081){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_364081);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e364099){if((e364099 instanceof Object))
{var ex__18223__auto__ = e364099;var statearr_364100_364113 = state_364081;(statearr_364100_364113[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e364099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__364114 = state_364081;
state_364081 = G__364114;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_364081){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_364081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_364101 = f__18290__auto__.call(null);(statearr_364101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___364102);
return statearr_364101;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18289__auto___364201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_364179){var state_val_364180 = (state_364179[1]);if((state_val_364180 === 1))
{var state_364179__$1 = state_364179;var statearr_364181_364202 = state_364179__$1;(statearr_364181_364202[2] = null);
(statearr_364181_364202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 2))
{var state_364179__$1 = state_364179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364179__$1,4,ch);
} else
{if((state_val_364180 === 3))
{var inst_364177 = (state_364179[2]);var state_364179__$1 = state_364179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364179__$1,inst_364177);
} else
{if((state_val_364180 === 4))
{var inst_364160 = (state_364179[7]);var inst_364160__$1 = (state_364179[2]);var inst_364161 = (inst_364160__$1 == null);var state_364179__$1 = (function (){var statearr_364182 = state_364179;(statearr_364182[7] = inst_364160__$1);
return statearr_364182;
})();if(cljs.core.truth_(inst_364161))
{var statearr_364183_364203 = state_364179__$1;(statearr_364183_364203[1] = 5);
} else
{var statearr_364184_364204 = state_364179__$1;(statearr_364184_364204[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 5))
{var inst_364163 = cljs.core.async.close_BANG_.call(null,tc);var inst_364164 = cljs.core.async.close_BANG_.call(null,fc);var state_364179__$1 = (function (){var statearr_364185 = state_364179;(statearr_364185[8] = inst_364163);
return statearr_364185;
})();var statearr_364186_364205 = state_364179__$1;(statearr_364186_364205[2] = inst_364164);
(statearr_364186_364205[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 6))
{var inst_364160 = (state_364179[7]);var inst_364166 = p.call(null,inst_364160);var state_364179__$1 = state_364179;if(cljs.core.truth_(inst_364166))
{var statearr_364187_364206 = state_364179__$1;(statearr_364187_364206[1] = 9);
} else
{var statearr_364188_364207 = state_364179__$1;(statearr_364188_364207[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 7))
{var inst_364175 = (state_364179[2]);var state_364179__$1 = state_364179;var statearr_364189_364208 = state_364179__$1;(statearr_364189_364208[2] = inst_364175);
(statearr_364189_364208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 8))
{var inst_364172 = (state_364179[2]);var state_364179__$1 = (function (){var statearr_364190 = state_364179;(statearr_364190[9] = inst_364172);
return statearr_364190;
})();var statearr_364191_364209 = state_364179__$1;(statearr_364191_364209[2] = null);
(statearr_364191_364209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 9))
{var state_364179__$1 = state_364179;var statearr_364192_364210 = state_364179__$1;(statearr_364192_364210[2] = tc);
(statearr_364192_364210[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 10))
{var state_364179__$1 = state_364179;var statearr_364193_364211 = state_364179__$1;(statearr_364193_364211[2] = fc);
(statearr_364193_364211[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364180 === 11))
{var inst_364160 = (state_364179[7]);var inst_364170 = (state_364179[2]);var state_364179__$1 = state_364179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364179__$1,8,inst_364170,inst_364160);
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
var state_machine__18220__auto____0 = (function (){var statearr_364197 = [null,null,null,null,null,null,null,null,null,null];(statearr_364197[0] = state_machine__18220__auto__);
(statearr_364197[1] = 1);
return statearr_364197;
});
var state_machine__18220__auto____1 = (function (state_364179){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_364179);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e364198){if((e364198 instanceof Object))
{var ex__18223__auto__ = e364198;var statearr_364199_364212 = state_364179;(statearr_364199_364212[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e364198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__364213 = state_364179;
state_364179 = G__364213;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_364179){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_364179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_364200 = f__18290__auto__.call(null);(statearr_364200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___364201);
return statearr_364200;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_364260){var state_val_364261 = (state_364260[1]);if((state_val_364261 === 7))
{var inst_364256 = (state_364260[2]);var state_364260__$1 = state_364260;var statearr_364262_364278 = state_364260__$1;(statearr_364262_364278[2] = inst_364256);
(statearr_364262_364278[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364261 === 6))
{var inst_364246 = (state_364260[7]);var inst_364249 = (state_364260[8]);var inst_364253 = f.call(null,inst_364246,inst_364249);var inst_364246__$1 = inst_364253;var state_364260__$1 = (function (){var statearr_364263 = state_364260;(statearr_364263[7] = inst_364246__$1);
return statearr_364263;
})();var statearr_364264_364279 = state_364260__$1;(statearr_364264_364279[2] = null);
(statearr_364264_364279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364261 === 5))
{var inst_364246 = (state_364260[7]);var state_364260__$1 = state_364260;var statearr_364265_364280 = state_364260__$1;(statearr_364265_364280[2] = inst_364246);
(statearr_364265_364280[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364261 === 4))
{var inst_364249 = (state_364260[8]);var inst_364249__$1 = (state_364260[2]);var inst_364250 = (inst_364249__$1 == null);var state_364260__$1 = (function (){var statearr_364266 = state_364260;(statearr_364266[8] = inst_364249__$1);
return statearr_364266;
})();if(cljs.core.truth_(inst_364250))
{var statearr_364267_364281 = state_364260__$1;(statearr_364267_364281[1] = 5);
} else
{var statearr_364268_364282 = state_364260__$1;(statearr_364268_364282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364261 === 3))
{var inst_364258 = (state_364260[2]);var state_364260__$1 = state_364260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364260__$1,inst_364258);
} else
{if((state_val_364261 === 2))
{var state_364260__$1 = state_364260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364260__$1,4,ch);
} else
{if((state_val_364261 === 1))
{var inst_364246 = init;var state_364260__$1 = (function (){var statearr_364269 = state_364260;(statearr_364269[7] = inst_364246);
return statearr_364269;
})();var statearr_364270_364283 = state_364260__$1;(statearr_364270_364283[2] = null);
(statearr_364270_364283[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_364274 = [null,null,null,null,null,null,null,null,null];(statearr_364274[0] = state_machine__18220__auto__);
(statearr_364274[1] = 1);
return statearr_364274;
});
var state_machine__18220__auto____1 = (function (state_364260){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_364260);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e364275){if((e364275 instanceof Object))
{var ex__18223__auto__ = e364275;var statearr_364276_364284 = state_364260;(statearr_364276_364284[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e364275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__364285 = state_364260;
state_364260 = G__364285;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_364260){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_364260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_364277 = f__18290__auto__.call(null);(statearr_364277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_364277;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_364347){var state_val_364348 = (state_364347[1]);if((state_val_364348 === 1))
{var inst_364327 = cljs.core.seq.call(null,coll);var inst_364328 = inst_364327;var state_364347__$1 = (function (){var statearr_364349 = state_364347;(statearr_364349[7] = inst_364328);
return statearr_364349;
})();var statearr_364350_364368 = state_364347__$1;(statearr_364350_364368[2] = null);
(statearr_364350_364368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 2))
{var inst_364328 = (state_364347[7]);var state_364347__$1 = state_364347;if(cljs.core.truth_(inst_364328))
{var statearr_364351_364369 = state_364347__$1;(statearr_364351_364369[1] = 4);
} else
{var statearr_364352_364370 = state_364347__$1;(statearr_364352_364370[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 3))
{var inst_364345 = (state_364347[2]);var state_364347__$1 = state_364347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364347__$1,inst_364345);
} else
{if((state_val_364348 === 4))
{var inst_364328 = (state_364347[7]);var inst_364331 = cljs.core.first.call(null,inst_364328);var state_364347__$1 = state_364347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364347__$1,7,ch,inst_364331);
} else
{if((state_val_364348 === 5))
{var state_364347__$1 = state_364347;if(cljs.core.truth_(close_QMARK_))
{var statearr_364353_364371 = state_364347__$1;(statearr_364353_364371[1] = 8);
} else
{var statearr_364354_364372 = state_364347__$1;(statearr_364354_364372[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 6))
{var inst_364343 = (state_364347[2]);var state_364347__$1 = state_364347;var statearr_364355_364373 = state_364347__$1;(statearr_364355_364373[2] = inst_364343);
(statearr_364355_364373[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 7))
{var inst_364328 = (state_364347[7]);var inst_364333 = (state_364347[2]);var inst_364334 = cljs.core.next.call(null,inst_364328);var inst_364328__$1 = inst_364334;var state_364347__$1 = (function (){var statearr_364356 = state_364347;(statearr_364356[8] = inst_364333);
(statearr_364356[7] = inst_364328__$1);
return statearr_364356;
})();var statearr_364357_364374 = state_364347__$1;(statearr_364357_364374[2] = null);
(statearr_364357_364374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 8))
{var inst_364338 = cljs.core.async.close_BANG_.call(null,ch);var state_364347__$1 = state_364347;var statearr_364358_364375 = state_364347__$1;(statearr_364358_364375[2] = inst_364338);
(statearr_364358_364375[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 9))
{var state_364347__$1 = state_364347;var statearr_364359_364376 = state_364347__$1;(statearr_364359_364376[2] = null);
(statearr_364359_364376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364348 === 10))
{var inst_364341 = (state_364347[2]);var state_364347__$1 = state_364347;var statearr_364360_364377 = state_364347__$1;(statearr_364360_364377[2] = inst_364341);
(statearr_364360_364377[1] = 6);
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
var state_machine__18220__auto____0 = (function (){var statearr_364364 = [null,null,null,null,null,null,null,null,null];(statearr_364364[0] = state_machine__18220__auto__);
(statearr_364364[1] = 1);
return statearr_364364;
});
var state_machine__18220__auto____1 = (function (state_364347){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_364347);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e364365){if((e364365 instanceof Object))
{var ex__18223__auto__ = e364365;var statearr_364366_364378 = state_364347;(statearr_364366_364378[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e364365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__364379 = state_364347;
state_364347 = G__364379;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_364347){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_364347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_364367 = f__18290__auto__.call(null);(statearr_364367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_364367;
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
cljs.core.async.Mux = (function (){var obj364381 = {};return obj364381;
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
cljs.core.async.Mult = (function (){var obj364383 = {};return obj364383;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t364607 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t364607 = (function (cs,ch,mult,meta364608){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta364608 = meta364608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t364607.cljs$lang$type = true;
cljs.core.async.t364607.cljs$lang$ctorStr = "cljs.core.async/t364607";
cljs.core.async.t364607.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t364607");
});})(cs))
;
cljs.core.async.t364607.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t364607.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t364607.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t364607.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t364607.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t364607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t364607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_364609){var self__ = this;
var _364609__$1 = this;return self__.meta364608;
});})(cs))
;
cljs.core.async.t364607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_364609,meta364608__$1){var self__ = this;
var _364609__$1 = this;return (new cljs.core.async.t364607(self__.cs,self__.ch,self__.mult,meta364608__$1));
});})(cs))
;
cljs.core.async.__GT_t364607 = ((function (cs){
return (function __GT_t364607(cs__$1,ch__$1,mult__$1,meta364608){return (new cljs.core.async.t364607(cs__$1,ch__$1,mult__$1,meta364608));
});})(cs))
;
}
return (new cljs.core.async.t364607(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18289__auto___364830 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_364744){var state_val_364745 = (state_364744[1]);if((state_val_364745 === 32))
{var inst_364688 = (state_364744[7]);var inst_364612 = (state_364744[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_364744,31,Object,null,30);var inst_364695 = cljs.core.async.put_BANG_.call(null,inst_364688,inst_364612,done);var state_364744__$1 = state_364744;var statearr_364746_364831 = state_364744__$1;(statearr_364746_364831[2] = inst_364695);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364744__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 1))
{var state_364744__$1 = state_364744;var statearr_364747_364832 = state_364744__$1;(statearr_364747_364832[2] = null);
(statearr_364747_364832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 33))
{var inst_364701 = (state_364744[9]);var inst_364703 = cljs.core.chunked_seq_QMARK_.call(null,inst_364701);var state_364744__$1 = state_364744;if(inst_364703)
{var statearr_364748_364833 = state_364744__$1;(statearr_364748_364833[1] = 36);
} else
{var statearr_364749_364834 = state_364744__$1;(statearr_364749_364834[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 2))
{var state_364744__$1 = state_364744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364744__$1,4,ch);
} else
{if((state_val_364745 === 34))
{var state_364744__$1 = state_364744;var statearr_364750_364835 = state_364744__$1;(statearr_364750_364835[2] = null);
(statearr_364750_364835[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 3))
{var inst_364742 = (state_364744[2]);var state_364744__$1 = state_364744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364744__$1,inst_364742);
} else
{if((state_val_364745 === 35))
{var inst_364726 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364751_364836 = state_364744__$1;(statearr_364751_364836[2] = inst_364726);
(statearr_364751_364836[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 4))
{var inst_364612 = (state_364744[8]);var inst_364612__$1 = (state_364744[2]);var inst_364613 = (inst_364612__$1 == null);var state_364744__$1 = (function (){var statearr_364752 = state_364744;(statearr_364752[8] = inst_364612__$1);
return statearr_364752;
})();if(cljs.core.truth_(inst_364613))
{var statearr_364753_364837 = state_364744__$1;(statearr_364753_364837[1] = 5);
} else
{var statearr_364754_364838 = state_364744__$1;(statearr_364754_364838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 36))
{var inst_364701 = (state_364744[9]);var inst_364705 = cljs.core.chunk_first.call(null,inst_364701);var inst_364706 = cljs.core.chunk_rest.call(null,inst_364701);var inst_364707 = cljs.core.count.call(null,inst_364705);var inst_364680 = inst_364706;var inst_364681 = inst_364705;var inst_364682 = inst_364707;var inst_364683 = 0;var state_364744__$1 = (function (){var statearr_364755 = state_364744;(statearr_364755[10] = inst_364680);
(statearr_364755[11] = inst_364681);
(statearr_364755[12] = inst_364683);
(statearr_364755[13] = inst_364682);
return statearr_364755;
})();var statearr_364756_364839 = state_364744__$1;(statearr_364756_364839[2] = null);
(statearr_364756_364839[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 5))
{var inst_364619 = cljs.core.deref.call(null,cs);var inst_364620 = cljs.core.seq.call(null,inst_364619);var inst_364621 = inst_364620;var inst_364622 = null;var inst_364623 = 0;var inst_364624 = 0;var state_364744__$1 = (function (){var statearr_364757 = state_364744;(statearr_364757[14] = inst_364624);
(statearr_364757[15] = inst_364621);
(statearr_364757[16] = inst_364622);
(statearr_364757[17] = inst_364623);
return statearr_364757;
})();var statearr_364758_364840 = state_364744__$1;(statearr_364758_364840[2] = null);
(statearr_364758_364840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 37))
{var inst_364701 = (state_364744[9]);var inst_364710 = cljs.core.first.call(null,inst_364701);var state_364744__$1 = (function (){var statearr_364759 = state_364744;(statearr_364759[18] = inst_364710);
return statearr_364759;
})();var statearr_364760_364841 = state_364744__$1;(statearr_364760_364841[2] = null);
(statearr_364760_364841[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 6))
{var inst_364672 = (state_364744[19]);var inst_364671 = cljs.core.deref.call(null,cs);var inst_364672__$1 = cljs.core.keys.call(null,inst_364671);var inst_364673 = cljs.core.count.call(null,inst_364672__$1);var inst_364674 = cljs.core.reset_BANG_.call(null,dctr,inst_364673);var inst_364679 = cljs.core.seq.call(null,inst_364672__$1);var inst_364680 = inst_364679;var inst_364681 = null;var inst_364682 = 0;var inst_364683 = 0;var state_364744__$1 = (function (){var statearr_364761 = state_364744;(statearr_364761[10] = inst_364680);
(statearr_364761[11] = inst_364681);
(statearr_364761[12] = inst_364683);
(statearr_364761[13] = inst_364682);
(statearr_364761[20] = inst_364674);
(statearr_364761[19] = inst_364672__$1);
return statearr_364761;
})();var statearr_364762_364842 = state_364744__$1;(statearr_364762_364842[2] = null);
(statearr_364762_364842[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 38))
{var inst_364723 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364763_364843 = state_364744__$1;(statearr_364763_364843[2] = inst_364723);
(statearr_364763_364843[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 7))
{var inst_364740 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364764_364844 = state_364744__$1;(statearr_364764_364844[2] = inst_364740);
(statearr_364764_364844[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 39))
{var inst_364701 = (state_364744[9]);var inst_364719 = (state_364744[2]);var inst_364720 = cljs.core.next.call(null,inst_364701);var inst_364680 = inst_364720;var inst_364681 = null;var inst_364682 = 0;var inst_364683 = 0;var state_364744__$1 = (function (){var statearr_364765 = state_364744;(statearr_364765[10] = inst_364680);
(statearr_364765[11] = inst_364681);
(statearr_364765[12] = inst_364683);
(statearr_364765[13] = inst_364682);
(statearr_364765[21] = inst_364719);
return statearr_364765;
})();var statearr_364766_364845 = state_364744__$1;(statearr_364766_364845[2] = null);
(statearr_364766_364845[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 8))
{var inst_364624 = (state_364744[14]);var inst_364623 = (state_364744[17]);var inst_364626 = (inst_364624 < inst_364623);var inst_364627 = inst_364626;var state_364744__$1 = state_364744;if(cljs.core.truth_(inst_364627))
{var statearr_364767_364846 = state_364744__$1;(statearr_364767_364846[1] = 10);
} else
{var statearr_364768_364847 = state_364744__$1;(statearr_364768_364847[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 40))
{var inst_364710 = (state_364744[18]);var inst_364711 = (state_364744[2]);var inst_364712 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_364713 = cljs.core.async.untap_STAR_.call(null,m,inst_364710);var state_364744__$1 = (function (){var statearr_364769 = state_364744;(statearr_364769[22] = inst_364711);
(statearr_364769[23] = inst_364712);
return statearr_364769;
})();var statearr_364770_364848 = state_364744__$1;(statearr_364770_364848[2] = inst_364713);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364744__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 9))
{var inst_364669 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364771_364849 = state_364744__$1;(statearr_364771_364849[2] = inst_364669);
(statearr_364771_364849[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 41))
{var inst_364710 = (state_364744[18]);var inst_364612 = (state_364744[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_364744,40,Object,null,39);var inst_364717 = cljs.core.async.put_BANG_.call(null,inst_364710,inst_364612,done);var state_364744__$1 = state_364744;var statearr_364772_364850 = state_364744__$1;(statearr_364772_364850[2] = inst_364717);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364744__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 10))
{var inst_364624 = (state_364744[14]);var inst_364622 = (state_364744[16]);var inst_364630 = cljs.core._nth.call(null,inst_364622,inst_364624);var inst_364631 = cljs.core.nth.call(null,inst_364630,0,null);var inst_364632 = cljs.core.nth.call(null,inst_364630,1,null);var state_364744__$1 = (function (){var statearr_364773 = state_364744;(statearr_364773[24] = inst_364631);
return statearr_364773;
})();if(cljs.core.truth_(inst_364632))
{var statearr_364774_364851 = state_364744__$1;(statearr_364774_364851[1] = 13);
} else
{var statearr_364775_364852 = state_364744__$1;(statearr_364775_364852[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 42))
{var state_364744__$1 = state_364744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364744__$1,45,dchan);
} else
{if((state_val_364745 === 11))
{var inst_364641 = (state_364744[25]);var inst_364621 = (state_364744[15]);var inst_364641__$1 = cljs.core.seq.call(null,inst_364621);var state_364744__$1 = (function (){var statearr_364776 = state_364744;(statearr_364776[25] = inst_364641__$1);
return statearr_364776;
})();if(inst_364641__$1)
{var statearr_364777_364853 = state_364744__$1;(statearr_364777_364853[1] = 16);
} else
{var statearr_364778_364854 = state_364744__$1;(statearr_364778_364854[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 43))
{var state_364744__$1 = state_364744;var statearr_364779_364855 = state_364744__$1;(statearr_364779_364855[2] = null);
(statearr_364779_364855[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 12))
{var inst_364667 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364780_364856 = state_364744__$1;(statearr_364780_364856[2] = inst_364667);
(statearr_364780_364856[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 44))
{var inst_364737 = (state_364744[2]);var state_364744__$1 = (function (){var statearr_364781 = state_364744;(statearr_364781[26] = inst_364737);
return statearr_364781;
})();var statearr_364782_364857 = state_364744__$1;(statearr_364782_364857[2] = null);
(statearr_364782_364857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 13))
{var inst_364631 = (state_364744[24]);var inst_364634 = cljs.core.async.close_BANG_.call(null,inst_364631);var state_364744__$1 = state_364744;var statearr_364783_364858 = state_364744__$1;(statearr_364783_364858[2] = inst_364634);
(statearr_364783_364858[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 45))
{var inst_364734 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364787_364859 = state_364744__$1;(statearr_364787_364859[2] = inst_364734);
(statearr_364787_364859[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 14))
{var state_364744__$1 = state_364744;var statearr_364788_364860 = state_364744__$1;(statearr_364788_364860[2] = null);
(statearr_364788_364860[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 15))
{var inst_364624 = (state_364744[14]);var inst_364621 = (state_364744[15]);var inst_364622 = (state_364744[16]);var inst_364623 = (state_364744[17]);var inst_364637 = (state_364744[2]);var inst_364638 = (inst_364624 + 1);var tmp364784 = inst_364621;var tmp364785 = inst_364622;var tmp364786 = inst_364623;var inst_364621__$1 = tmp364784;var inst_364622__$1 = tmp364785;var inst_364623__$1 = tmp364786;var inst_364624__$1 = inst_364638;var state_364744__$1 = (function (){var statearr_364789 = state_364744;(statearr_364789[14] = inst_364624__$1);
(statearr_364789[27] = inst_364637);
(statearr_364789[15] = inst_364621__$1);
(statearr_364789[16] = inst_364622__$1);
(statearr_364789[17] = inst_364623__$1);
return statearr_364789;
})();var statearr_364790_364861 = state_364744__$1;(statearr_364790_364861[2] = null);
(statearr_364790_364861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 16))
{var inst_364641 = (state_364744[25]);var inst_364643 = cljs.core.chunked_seq_QMARK_.call(null,inst_364641);var state_364744__$1 = state_364744;if(inst_364643)
{var statearr_364791_364862 = state_364744__$1;(statearr_364791_364862[1] = 19);
} else
{var statearr_364792_364863 = state_364744__$1;(statearr_364792_364863[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 17))
{var state_364744__$1 = state_364744;var statearr_364793_364864 = state_364744__$1;(statearr_364793_364864[2] = null);
(statearr_364793_364864[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 18))
{var inst_364665 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364794_364865 = state_364744__$1;(statearr_364794_364865[2] = inst_364665);
(statearr_364794_364865[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 19))
{var inst_364641 = (state_364744[25]);var inst_364645 = cljs.core.chunk_first.call(null,inst_364641);var inst_364646 = cljs.core.chunk_rest.call(null,inst_364641);var inst_364647 = cljs.core.count.call(null,inst_364645);var inst_364621 = inst_364646;var inst_364622 = inst_364645;var inst_364623 = inst_364647;var inst_364624 = 0;var state_364744__$1 = (function (){var statearr_364795 = state_364744;(statearr_364795[14] = inst_364624);
(statearr_364795[15] = inst_364621);
(statearr_364795[16] = inst_364622);
(statearr_364795[17] = inst_364623);
return statearr_364795;
})();var statearr_364796_364866 = state_364744__$1;(statearr_364796_364866[2] = null);
(statearr_364796_364866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 20))
{var inst_364641 = (state_364744[25]);var inst_364651 = cljs.core.first.call(null,inst_364641);var inst_364652 = cljs.core.nth.call(null,inst_364651,0,null);var inst_364653 = cljs.core.nth.call(null,inst_364651,1,null);var state_364744__$1 = (function (){var statearr_364797 = state_364744;(statearr_364797[28] = inst_364652);
return statearr_364797;
})();if(cljs.core.truth_(inst_364653))
{var statearr_364798_364867 = state_364744__$1;(statearr_364798_364867[1] = 22);
} else
{var statearr_364799_364868 = state_364744__$1;(statearr_364799_364868[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 21))
{var inst_364662 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364800_364869 = state_364744__$1;(statearr_364800_364869[2] = inst_364662);
(statearr_364800_364869[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 22))
{var inst_364652 = (state_364744[28]);var inst_364655 = cljs.core.async.close_BANG_.call(null,inst_364652);var state_364744__$1 = state_364744;var statearr_364801_364870 = state_364744__$1;(statearr_364801_364870[2] = inst_364655);
(statearr_364801_364870[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 23))
{var state_364744__$1 = state_364744;var statearr_364802_364871 = state_364744__$1;(statearr_364802_364871[2] = null);
(statearr_364802_364871[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 24))
{var inst_364641 = (state_364744[25]);var inst_364658 = (state_364744[2]);var inst_364659 = cljs.core.next.call(null,inst_364641);var inst_364621 = inst_364659;var inst_364622 = null;var inst_364623 = 0;var inst_364624 = 0;var state_364744__$1 = (function (){var statearr_364803 = state_364744;(statearr_364803[29] = inst_364658);
(statearr_364803[14] = inst_364624);
(statearr_364803[15] = inst_364621);
(statearr_364803[16] = inst_364622);
(statearr_364803[17] = inst_364623);
return statearr_364803;
})();var statearr_364804_364872 = state_364744__$1;(statearr_364804_364872[2] = null);
(statearr_364804_364872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 25))
{var inst_364683 = (state_364744[12]);var inst_364682 = (state_364744[13]);var inst_364685 = (inst_364683 < inst_364682);var inst_364686 = inst_364685;var state_364744__$1 = state_364744;if(cljs.core.truth_(inst_364686))
{var statearr_364805_364873 = state_364744__$1;(statearr_364805_364873[1] = 27);
} else
{var statearr_364806_364874 = state_364744__$1;(statearr_364806_364874[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 26))
{var inst_364672 = (state_364744[19]);var inst_364730 = (state_364744[2]);var inst_364731 = cljs.core.seq.call(null,inst_364672);var state_364744__$1 = (function (){var statearr_364807 = state_364744;(statearr_364807[30] = inst_364730);
return statearr_364807;
})();if(inst_364731)
{var statearr_364808_364875 = state_364744__$1;(statearr_364808_364875[1] = 42);
} else
{var statearr_364809_364876 = state_364744__$1;(statearr_364809_364876[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 27))
{var inst_364681 = (state_364744[11]);var inst_364683 = (state_364744[12]);var inst_364688 = cljs.core._nth.call(null,inst_364681,inst_364683);var state_364744__$1 = (function (){var statearr_364810 = state_364744;(statearr_364810[7] = inst_364688);
return statearr_364810;
})();var statearr_364811_364877 = state_364744__$1;(statearr_364811_364877[2] = null);
(statearr_364811_364877[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 28))
{var inst_364680 = (state_364744[10]);var inst_364701 = (state_364744[9]);var inst_364701__$1 = cljs.core.seq.call(null,inst_364680);var state_364744__$1 = (function (){var statearr_364815 = state_364744;(statearr_364815[9] = inst_364701__$1);
return statearr_364815;
})();if(inst_364701__$1)
{var statearr_364816_364878 = state_364744__$1;(statearr_364816_364878[1] = 33);
} else
{var statearr_364817_364879 = state_364744__$1;(statearr_364817_364879[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 29))
{var inst_364728 = (state_364744[2]);var state_364744__$1 = state_364744;var statearr_364818_364880 = state_364744__$1;(statearr_364818_364880[2] = inst_364728);
(statearr_364818_364880[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 30))
{var inst_364680 = (state_364744[10]);var inst_364681 = (state_364744[11]);var inst_364683 = (state_364744[12]);var inst_364682 = (state_364744[13]);var inst_364697 = (state_364744[2]);var inst_364698 = (inst_364683 + 1);var tmp364812 = inst_364680;var tmp364813 = inst_364681;var tmp364814 = inst_364682;var inst_364680__$1 = tmp364812;var inst_364681__$1 = tmp364813;var inst_364682__$1 = tmp364814;var inst_364683__$1 = inst_364698;var state_364744__$1 = (function (){var statearr_364819 = state_364744;(statearr_364819[10] = inst_364680__$1);
(statearr_364819[11] = inst_364681__$1);
(statearr_364819[12] = inst_364683__$1);
(statearr_364819[13] = inst_364682__$1);
(statearr_364819[31] = inst_364697);
return statearr_364819;
})();var statearr_364820_364881 = state_364744__$1;(statearr_364820_364881[2] = null);
(statearr_364820_364881[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_364745 === 31))
{var inst_364688 = (state_364744[7]);var inst_364689 = (state_364744[2]);var inst_364690 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_364691 = cljs.core.async.untap_STAR_.call(null,m,inst_364688);var state_364744__$1 = (function (){var statearr_364821 = state_364744;(statearr_364821[32] = inst_364689);
(statearr_364821[33] = inst_364690);
return statearr_364821;
})();var statearr_364822_364882 = state_364744__$1;(statearr_364822_364882[2] = inst_364691);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364744__$1);
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
var state_machine__18220__auto____0 = (function (){var statearr_364826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_364826[0] = state_machine__18220__auto__);
(statearr_364826[1] = 1);
return statearr_364826;
});
var state_machine__18220__auto____1 = (function (state_364744){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_364744);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e364827){if((e364827 instanceof Object))
{var ex__18223__auto__ = e364827;var statearr_364828_364883 = state_364744;(statearr_364828_364883[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e364827;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__364884 = state_364744;
state_364744 = G__364884;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_364744){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_364744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_364829 = f__18290__auto__.call(null);(statearr_364829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___364830);
return statearr_364829;
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
cljs.core.async.Mix = (function (){var obj364886 = {};return obj364886;
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
;var m = (function (){if(typeof cljs.core.async.t364996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t364996 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta364997){
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
this.meta364997 = meta364997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t364996.cljs$lang$type = true;
cljs.core.async.t364996.cljs$lang$ctorStr = "cljs.core.async/t364996";
cljs.core.async.t364996.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t364996");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t364996.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t364996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_364998){var self__ = this;
var _364998__$1 = this;return self__.meta364997;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t364996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_364998,meta364997__$1){var self__ = this;
var _364998__$1 = this;return (new cljs.core.async.t364996(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta364997__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t364996 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t364996(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta364997){return (new cljs.core.async.t364996(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta364997));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t364996(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18289__auto___365105 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_365063){var state_val_365064 = (state_365063[1]);if((state_val_365064 === 1))
{var inst_365002 = (state_365063[7]);var inst_365002__$1 = calc_state.call(null);var inst_365003 = cljs.core.seq_QMARK_.call(null,inst_365002__$1);var state_365063__$1 = (function (){var statearr_365065 = state_365063;(statearr_365065[7] = inst_365002__$1);
return statearr_365065;
})();if(inst_365003)
{var statearr_365066_365106 = state_365063__$1;(statearr_365066_365106[1] = 2);
} else
{var statearr_365067_365107 = state_365063__$1;(statearr_365067_365107[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 2))
{var inst_365002 = (state_365063[7]);var inst_365005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_365002);var state_365063__$1 = state_365063;var statearr_365068_365108 = state_365063__$1;(statearr_365068_365108[2] = inst_365005);
(statearr_365068_365108[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 3))
{var inst_365002 = (state_365063[7]);var state_365063__$1 = state_365063;var statearr_365069_365109 = state_365063__$1;(statearr_365069_365109[2] = inst_365002);
(statearr_365069_365109[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 4))
{var inst_365002 = (state_365063[7]);var inst_365008 = (state_365063[2]);var inst_365009 = cljs.core.get.call(null,inst_365008,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_365010 = cljs.core.get.call(null,inst_365008,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_365011 = cljs.core.get.call(null,inst_365008,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_365012 = inst_365002;var state_365063__$1 = (function (){var statearr_365070 = state_365063;(statearr_365070[8] = inst_365010);
(statearr_365070[9] = inst_365011);
(statearr_365070[10] = inst_365012);
(statearr_365070[11] = inst_365009);
return statearr_365070;
})();var statearr_365071_365110 = state_365063__$1;(statearr_365071_365110[2] = null);
(statearr_365071_365110[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 5))
{var inst_365012 = (state_365063[10]);var inst_365015 = cljs.core.seq_QMARK_.call(null,inst_365012);var state_365063__$1 = state_365063;if(inst_365015)
{var statearr_365072_365111 = state_365063__$1;(statearr_365072_365111[1] = 7);
} else
{var statearr_365073_365112 = state_365063__$1;(statearr_365073_365112[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 6))
{var inst_365061 = (state_365063[2]);var state_365063__$1 = state_365063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365063__$1,inst_365061);
} else
{if((state_val_365064 === 7))
{var inst_365012 = (state_365063[10]);var inst_365017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_365012);var state_365063__$1 = state_365063;var statearr_365074_365113 = state_365063__$1;(statearr_365074_365113[2] = inst_365017);
(statearr_365074_365113[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 8))
{var inst_365012 = (state_365063[10]);var state_365063__$1 = state_365063;var statearr_365075_365114 = state_365063__$1;(statearr_365075_365114[2] = inst_365012);
(statearr_365075_365114[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 9))
{var inst_365020 = (state_365063[12]);var inst_365020__$1 = (state_365063[2]);var inst_365021 = cljs.core.get.call(null,inst_365020__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_365022 = cljs.core.get.call(null,inst_365020__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_365023 = cljs.core.get.call(null,inst_365020__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_365063__$1 = (function (){var statearr_365076 = state_365063;(statearr_365076[13] = inst_365023);
(statearr_365076[14] = inst_365022);
(statearr_365076[12] = inst_365020__$1);
return statearr_365076;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_365063__$1,10,inst_365021);
} else
{if((state_val_365064 === 10))
{var inst_365027 = (state_365063[15]);var inst_365028 = (state_365063[16]);var inst_365026 = (state_365063[2]);var inst_365027__$1 = cljs.core.nth.call(null,inst_365026,0,null);var inst_365028__$1 = cljs.core.nth.call(null,inst_365026,1,null);var inst_365029 = (inst_365027__$1 == null);var inst_365030 = cljs.core._EQ_.call(null,inst_365028__$1,change);var inst_365031 = (inst_365029) || (inst_365030);var state_365063__$1 = (function (){var statearr_365077 = state_365063;(statearr_365077[15] = inst_365027__$1);
(statearr_365077[16] = inst_365028__$1);
return statearr_365077;
})();if(cljs.core.truth_(inst_365031))
{var statearr_365078_365115 = state_365063__$1;(statearr_365078_365115[1] = 11);
} else
{var statearr_365079_365116 = state_365063__$1;(statearr_365079_365116[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 11))
{var inst_365027 = (state_365063[15]);var inst_365033 = (inst_365027 == null);var state_365063__$1 = state_365063;if(cljs.core.truth_(inst_365033))
{var statearr_365080_365117 = state_365063__$1;(statearr_365080_365117[1] = 14);
} else
{var statearr_365081_365118 = state_365063__$1;(statearr_365081_365118[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 12))
{var inst_365023 = (state_365063[13]);var inst_365042 = (state_365063[17]);var inst_365028 = (state_365063[16]);var inst_365042__$1 = inst_365023.call(null,inst_365028);var state_365063__$1 = (function (){var statearr_365082 = state_365063;(statearr_365082[17] = inst_365042__$1);
return statearr_365082;
})();if(cljs.core.truth_(inst_365042__$1))
{var statearr_365083_365119 = state_365063__$1;(statearr_365083_365119[1] = 17);
} else
{var statearr_365084_365120 = state_365063__$1;(statearr_365084_365120[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 13))
{var inst_365059 = (state_365063[2]);var state_365063__$1 = state_365063;var statearr_365085_365121 = state_365063__$1;(statearr_365085_365121[2] = inst_365059);
(statearr_365085_365121[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 14))
{var inst_365028 = (state_365063[16]);var inst_365035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_365028);var state_365063__$1 = state_365063;var statearr_365086_365122 = state_365063__$1;(statearr_365086_365122[2] = inst_365035);
(statearr_365086_365122[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 15))
{var state_365063__$1 = state_365063;var statearr_365087_365123 = state_365063__$1;(statearr_365087_365123[2] = null);
(statearr_365087_365123[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 16))
{var inst_365038 = (state_365063[2]);var inst_365039 = calc_state.call(null);var inst_365012 = inst_365039;var state_365063__$1 = (function (){var statearr_365088 = state_365063;(statearr_365088[10] = inst_365012);
(statearr_365088[18] = inst_365038);
return statearr_365088;
})();var statearr_365089_365124 = state_365063__$1;(statearr_365089_365124[2] = null);
(statearr_365089_365124[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 17))
{var inst_365042 = (state_365063[17]);var state_365063__$1 = state_365063;var statearr_365090_365125 = state_365063__$1;(statearr_365090_365125[2] = inst_365042);
(statearr_365090_365125[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 18))
{var inst_365023 = (state_365063[13]);var inst_365022 = (state_365063[14]);var inst_365028 = (state_365063[16]);var inst_365045 = cljs.core.empty_QMARK_.call(null,inst_365023);var inst_365046 = inst_365022.call(null,inst_365028);var inst_365047 = cljs.core.not.call(null,inst_365046);var inst_365048 = (inst_365045) && (inst_365047);var state_365063__$1 = state_365063;var statearr_365091_365126 = state_365063__$1;(statearr_365091_365126[2] = inst_365048);
(statearr_365091_365126[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 19))
{var inst_365050 = (state_365063[2]);var state_365063__$1 = state_365063;if(cljs.core.truth_(inst_365050))
{var statearr_365092_365127 = state_365063__$1;(statearr_365092_365127[1] = 20);
} else
{var statearr_365093_365128 = state_365063__$1;(statearr_365093_365128[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 20))
{var inst_365027 = (state_365063[15]);var state_365063__$1 = state_365063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365063__$1,23,out,inst_365027);
} else
{if((state_val_365064 === 21))
{var state_365063__$1 = state_365063;var statearr_365094_365129 = state_365063__$1;(statearr_365094_365129[2] = null);
(statearr_365094_365129[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 22))
{var inst_365020 = (state_365063[12]);var inst_365056 = (state_365063[2]);var inst_365012 = inst_365020;var state_365063__$1 = (function (){var statearr_365095 = state_365063;(statearr_365095[10] = inst_365012);
(statearr_365095[19] = inst_365056);
return statearr_365095;
})();var statearr_365096_365130 = state_365063__$1;(statearr_365096_365130[2] = null);
(statearr_365096_365130[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365064 === 23))
{var inst_365053 = (state_365063[2]);var state_365063__$1 = state_365063;var statearr_365097_365131 = state_365063__$1;(statearr_365097_365131[2] = inst_365053);
(statearr_365097_365131[1] = 22);
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
var state_machine__18220__auto____0 = (function (){var statearr_365101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_365101[0] = state_machine__18220__auto__);
(statearr_365101[1] = 1);
return statearr_365101;
});
var state_machine__18220__auto____1 = (function (state_365063){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_365063);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e365102){if((e365102 instanceof Object))
{var ex__18223__auto__ = e365102;var statearr_365103_365132 = state_365063;(statearr_365103_365132[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e365102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__365133 = state_365063;
state_365063 = G__365133;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_365063){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_365063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_365104 = f__18290__auto__.call(null);(statearr_365104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___365105);
return statearr_365104;
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
cljs.core.async.Pub = (function (){var obj365135 = {};return obj365135;
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
return (function (p1__365136_SHARP_){if(cljs.core.truth_(p1__365136_SHARP_.call(null,topic)))
{return p1__365136_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__365136_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13979__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t365261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t365261 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta365262){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta365262 = meta365262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t365261.cljs$lang$type = true;
cljs.core.async.t365261.cljs$lang$ctorStr = "cljs.core.async/t365261";
cljs.core.async.t365261.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t365261");
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t365261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t365261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_365263){var self__ = this;
var _365263__$1 = this;return self__.meta365262;
});})(mults,ensure_mult))
;
cljs.core.async.t365261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_365263,meta365262__$1){var self__ = this;
var _365263__$1 = this;return (new cljs.core.async.t365261(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta365262__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t365261 = ((function (mults,ensure_mult){
return (function __GT_t365261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta365262){return (new cljs.core.async.t365261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta365262));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t365261(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18289__auto___365385 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_365337){var state_val_365338 = (state_365337[1]);if((state_val_365338 === 1))
{var state_365337__$1 = state_365337;var statearr_365339_365386 = state_365337__$1;(statearr_365339_365386[2] = null);
(statearr_365339_365386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 2))
{var state_365337__$1 = state_365337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_365337__$1,4,ch);
} else
{if((state_val_365338 === 3))
{var inst_365335 = (state_365337[2]);var state_365337__$1 = state_365337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365337__$1,inst_365335);
} else
{if((state_val_365338 === 4))
{var inst_365266 = (state_365337[7]);var inst_365266__$1 = (state_365337[2]);var inst_365267 = (inst_365266__$1 == null);var state_365337__$1 = (function (){var statearr_365340 = state_365337;(statearr_365340[7] = inst_365266__$1);
return statearr_365340;
})();if(cljs.core.truth_(inst_365267))
{var statearr_365341_365387 = state_365337__$1;(statearr_365341_365387[1] = 5);
} else
{var statearr_365342_365388 = state_365337__$1;(statearr_365342_365388[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 5))
{var inst_365273 = cljs.core.deref.call(null,mults);var inst_365274 = cljs.core.vals.call(null,inst_365273);var inst_365275 = cljs.core.seq.call(null,inst_365274);var inst_365276 = inst_365275;var inst_365277 = null;var inst_365278 = 0;var inst_365279 = 0;var state_365337__$1 = (function (){var statearr_365343 = state_365337;(statearr_365343[8] = inst_365279);
(statearr_365343[9] = inst_365278);
(statearr_365343[10] = inst_365277);
(statearr_365343[11] = inst_365276);
return statearr_365343;
})();var statearr_365344_365389 = state_365337__$1;(statearr_365344_365389[2] = null);
(statearr_365344_365389[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 6))
{var inst_365266 = (state_365337[7]);var inst_365314 = (state_365337[12]);var inst_365316 = (state_365337[13]);var inst_365314__$1 = topic_fn.call(null,inst_365266);var inst_365315 = cljs.core.deref.call(null,mults);var inst_365316__$1 = cljs.core.get.call(null,inst_365315,inst_365314__$1);var state_365337__$1 = (function (){var statearr_365345 = state_365337;(statearr_365345[12] = inst_365314__$1);
(statearr_365345[13] = inst_365316__$1);
return statearr_365345;
})();if(cljs.core.truth_(inst_365316__$1))
{var statearr_365346_365390 = state_365337__$1;(statearr_365346_365390[1] = 19);
} else
{var statearr_365347_365391 = state_365337__$1;(statearr_365347_365391[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 7))
{var inst_365333 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365348_365392 = state_365337__$1;(statearr_365348_365392[2] = inst_365333);
(statearr_365348_365392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 8))
{var inst_365279 = (state_365337[8]);var inst_365278 = (state_365337[9]);var inst_365281 = (inst_365279 < inst_365278);var inst_365282 = inst_365281;var state_365337__$1 = state_365337;if(cljs.core.truth_(inst_365282))
{var statearr_365352_365393 = state_365337__$1;(statearr_365352_365393[1] = 10);
} else
{var statearr_365353_365394 = state_365337__$1;(statearr_365353_365394[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 9))
{var inst_365312 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365354_365395 = state_365337__$1;(statearr_365354_365395[2] = inst_365312);
(statearr_365354_365395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 10))
{var inst_365279 = (state_365337[8]);var inst_365278 = (state_365337[9]);var inst_365277 = (state_365337[10]);var inst_365276 = (state_365337[11]);var inst_365284 = cljs.core._nth.call(null,inst_365277,inst_365279);var inst_365285 = cljs.core.async.muxch_STAR_.call(null,inst_365284);var inst_365286 = cljs.core.async.close_BANG_.call(null,inst_365285);var inst_365287 = (inst_365279 + 1);var tmp365349 = inst_365278;var tmp365350 = inst_365277;var tmp365351 = inst_365276;var inst_365276__$1 = tmp365351;var inst_365277__$1 = tmp365350;var inst_365278__$1 = tmp365349;var inst_365279__$1 = inst_365287;var state_365337__$1 = (function (){var statearr_365355 = state_365337;(statearr_365355[14] = inst_365286);
(statearr_365355[8] = inst_365279__$1);
(statearr_365355[9] = inst_365278__$1);
(statearr_365355[10] = inst_365277__$1);
(statearr_365355[11] = inst_365276__$1);
return statearr_365355;
})();var statearr_365356_365396 = state_365337__$1;(statearr_365356_365396[2] = null);
(statearr_365356_365396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 11))
{var inst_365290 = (state_365337[15]);var inst_365276 = (state_365337[11]);var inst_365290__$1 = cljs.core.seq.call(null,inst_365276);var state_365337__$1 = (function (){var statearr_365357 = state_365337;(statearr_365357[15] = inst_365290__$1);
return statearr_365357;
})();if(inst_365290__$1)
{var statearr_365358_365397 = state_365337__$1;(statearr_365358_365397[1] = 13);
} else
{var statearr_365359_365398 = state_365337__$1;(statearr_365359_365398[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 12))
{var inst_365310 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365360_365399 = state_365337__$1;(statearr_365360_365399[2] = inst_365310);
(statearr_365360_365399[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 13))
{var inst_365290 = (state_365337[15]);var inst_365292 = cljs.core.chunked_seq_QMARK_.call(null,inst_365290);var state_365337__$1 = state_365337;if(inst_365292)
{var statearr_365361_365400 = state_365337__$1;(statearr_365361_365400[1] = 16);
} else
{var statearr_365362_365401 = state_365337__$1;(statearr_365362_365401[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 14))
{var state_365337__$1 = state_365337;var statearr_365363_365402 = state_365337__$1;(statearr_365363_365402[2] = null);
(statearr_365363_365402[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 15))
{var inst_365308 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365364_365403 = state_365337__$1;(statearr_365364_365403[2] = inst_365308);
(statearr_365364_365403[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 16))
{var inst_365290 = (state_365337[15]);var inst_365294 = cljs.core.chunk_first.call(null,inst_365290);var inst_365295 = cljs.core.chunk_rest.call(null,inst_365290);var inst_365296 = cljs.core.count.call(null,inst_365294);var inst_365276 = inst_365295;var inst_365277 = inst_365294;var inst_365278 = inst_365296;var inst_365279 = 0;var state_365337__$1 = (function (){var statearr_365365 = state_365337;(statearr_365365[8] = inst_365279);
(statearr_365365[9] = inst_365278);
(statearr_365365[10] = inst_365277);
(statearr_365365[11] = inst_365276);
return statearr_365365;
})();var statearr_365366_365404 = state_365337__$1;(statearr_365366_365404[2] = null);
(statearr_365366_365404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 17))
{var inst_365290 = (state_365337[15]);var inst_365299 = cljs.core.first.call(null,inst_365290);var inst_365300 = cljs.core.async.muxch_STAR_.call(null,inst_365299);var inst_365301 = cljs.core.async.close_BANG_.call(null,inst_365300);var inst_365302 = cljs.core.next.call(null,inst_365290);var inst_365276 = inst_365302;var inst_365277 = null;var inst_365278 = 0;var inst_365279 = 0;var state_365337__$1 = (function (){var statearr_365367 = state_365337;(statearr_365367[16] = inst_365301);
(statearr_365367[8] = inst_365279);
(statearr_365367[9] = inst_365278);
(statearr_365367[10] = inst_365277);
(statearr_365367[11] = inst_365276);
return statearr_365367;
})();var statearr_365368_365405 = state_365337__$1;(statearr_365368_365405[2] = null);
(statearr_365368_365405[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 18))
{var inst_365305 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365369_365406 = state_365337__$1;(statearr_365369_365406[2] = inst_365305);
(statearr_365369_365406[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 19))
{var state_365337__$1 = state_365337;var statearr_365370_365407 = state_365337__$1;(statearr_365370_365407[2] = null);
(statearr_365370_365407[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 20))
{var state_365337__$1 = state_365337;var statearr_365371_365408 = state_365337__$1;(statearr_365371_365408[2] = null);
(statearr_365371_365408[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 21))
{var inst_365330 = (state_365337[2]);var state_365337__$1 = (function (){var statearr_365372 = state_365337;(statearr_365372[17] = inst_365330);
return statearr_365372;
})();var statearr_365373_365409 = state_365337__$1;(statearr_365373_365409[2] = null);
(statearr_365373_365409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 22))
{var inst_365327 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365374_365410 = state_365337__$1;(statearr_365374_365410[2] = inst_365327);
(statearr_365374_365410[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 23))
{var inst_365314 = (state_365337[12]);var inst_365318 = (state_365337[2]);var inst_365319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_365314);var state_365337__$1 = (function (){var statearr_365375 = state_365337;(statearr_365375[18] = inst_365318);
return statearr_365375;
})();var statearr_365376_365411 = state_365337__$1;(statearr_365376_365411[2] = inst_365319);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365337__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365338 === 24))
{var inst_365266 = (state_365337[7]);var inst_365316 = (state_365337[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_365337,23,Object,null,22);var inst_365323 = cljs.core.async.muxch_STAR_.call(null,inst_365316);var state_365337__$1 = state_365337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365337__$1,25,inst_365323,inst_365266);
} else
{if((state_val_365338 === 25))
{var inst_365325 = (state_365337[2]);var state_365337__$1 = state_365337;var statearr_365377_365412 = state_365337__$1;(statearr_365377_365412[2] = inst_365325);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365337__$1);
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
var state_machine__18220__auto____0 = (function (){var statearr_365381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_365381[0] = state_machine__18220__auto__);
(statearr_365381[1] = 1);
return statearr_365381;
});
var state_machine__18220__auto____1 = (function (state_365337){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_365337);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e365382){if((e365382 instanceof Object))
{var ex__18223__auto__ = e365382;var statearr_365383_365413 = state_365337;(statearr_365383_365413[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e365382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__365414 = state_365337;
state_365337 = G__365414;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_365337){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_365337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_365384 = f__18290__auto__.call(null);(statearr_365384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___365385);
return statearr_365384;
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
,cljs.core.range.call(null,cnt));var c__18289__auto___365551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_365521){var state_val_365522 = (state_365521[1]);if((state_val_365522 === 1))
{var state_365521__$1 = state_365521;var statearr_365523_365552 = state_365521__$1;(statearr_365523_365552[2] = null);
(statearr_365523_365552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 2))
{var inst_365484 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_365485 = 0;var state_365521__$1 = (function (){var statearr_365524 = state_365521;(statearr_365524[7] = inst_365485);
(statearr_365524[8] = inst_365484);
return statearr_365524;
})();var statearr_365525_365553 = state_365521__$1;(statearr_365525_365553[2] = null);
(statearr_365525_365553[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 3))
{var inst_365519 = (state_365521[2]);var state_365521__$1 = state_365521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365521__$1,inst_365519);
} else
{if((state_val_365522 === 4))
{var inst_365485 = (state_365521[7]);var inst_365487 = (inst_365485 < cnt);var state_365521__$1 = state_365521;if(cljs.core.truth_(inst_365487))
{var statearr_365526_365554 = state_365521__$1;(statearr_365526_365554[1] = 6);
} else
{var statearr_365527_365555 = state_365521__$1;(statearr_365527_365555[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 5))
{var inst_365505 = (state_365521[2]);var state_365521__$1 = (function (){var statearr_365528 = state_365521;(statearr_365528[9] = inst_365505);
return statearr_365528;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_365521__$1,12,dchan);
} else
{if((state_val_365522 === 6))
{var state_365521__$1 = state_365521;var statearr_365529_365556 = state_365521__$1;(statearr_365529_365556[2] = null);
(statearr_365529_365556[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 7))
{var state_365521__$1 = state_365521;var statearr_365530_365557 = state_365521__$1;(statearr_365530_365557[2] = null);
(statearr_365530_365557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 8))
{var inst_365503 = (state_365521[2]);var state_365521__$1 = state_365521;var statearr_365531_365558 = state_365521__$1;(statearr_365531_365558[2] = inst_365503);
(statearr_365531_365558[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 9))
{var inst_365485 = (state_365521[7]);var inst_365498 = (state_365521[2]);var inst_365499 = (inst_365485 + 1);var inst_365485__$1 = inst_365499;var state_365521__$1 = (function (){var statearr_365532 = state_365521;(statearr_365532[10] = inst_365498);
(statearr_365532[7] = inst_365485__$1);
return statearr_365532;
})();var statearr_365533_365559 = state_365521__$1;(statearr_365533_365559[2] = null);
(statearr_365533_365559[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 10))
{var inst_365489 = (state_365521[2]);var inst_365490 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_365521__$1 = (function (){var statearr_365534 = state_365521;(statearr_365534[11] = inst_365489);
return statearr_365534;
})();var statearr_365535_365560 = state_365521__$1;(statearr_365535_365560[2] = inst_365490);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365521__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 11))
{var inst_365485 = (state_365521[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_365521,10,Object,null,9);var inst_365494 = chs__$1.call(null,inst_365485);var inst_365495 = done.call(null,inst_365485);var inst_365496 = cljs.core.async.take_BANG_.call(null,inst_365494,inst_365495);var state_365521__$1 = state_365521;var statearr_365536_365561 = state_365521__$1;(statearr_365536_365561[2] = inst_365496);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365521__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 12))
{var inst_365507 = (state_365521[12]);var inst_365507__$1 = (state_365521[2]);var inst_365508 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_365507__$1);var state_365521__$1 = (function (){var statearr_365537 = state_365521;(statearr_365537[12] = inst_365507__$1);
return statearr_365537;
})();if(cljs.core.truth_(inst_365508))
{var statearr_365538_365562 = state_365521__$1;(statearr_365538_365562[1] = 13);
} else
{var statearr_365539_365563 = state_365521__$1;(statearr_365539_365563[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 13))
{var inst_365510 = cljs.core.async.close_BANG_.call(null,out);var state_365521__$1 = state_365521;var statearr_365540_365564 = state_365521__$1;(statearr_365540_365564[2] = inst_365510);
(statearr_365540_365564[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 14))
{var inst_365507 = (state_365521[12]);var inst_365512 = cljs.core.apply.call(null,f,inst_365507);var state_365521__$1 = state_365521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365521__$1,16,out,inst_365512);
} else
{if((state_val_365522 === 15))
{var inst_365517 = (state_365521[2]);var state_365521__$1 = state_365521;var statearr_365541_365565 = state_365521__$1;(statearr_365541_365565[2] = inst_365517);
(statearr_365541_365565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365522 === 16))
{var inst_365514 = (state_365521[2]);var state_365521__$1 = (function (){var statearr_365542 = state_365521;(statearr_365542[13] = inst_365514);
return statearr_365542;
})();var statearr_365543_365566 = state_365521__$1;(statearr_365543_365566[2] = null);
(statearr_365543_365566[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_365547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_365547[0] = state_machine__18220__auto__);
(statearr_365547[1] = 1);
return statearr_365547;
});
var state_machine__18220__auto____1 = (function (state_365521){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_365521);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e365548){if((e365548 instanceof Object))
{var ex__18223__auto__ = e365548;var statearr_365549_365567 = state_365521;(statearr_365549_365567[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e365548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__365568 = state_365521;
state_365521 = G__365568;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_365521){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_365521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_365550 = f__18290__auto__.call(null);(statearr_365550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___365551);
return statearr_365550;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___365676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_365652){var state_val_365653 = (state_365652[1]);if((state_val_365653 === 1))
{var inst_365623 = cljs.core.vec.call(null,chs);var inst_365624 = inst_365623;var state_365652__$1 = (function (){var statearr_365654 = state_365652;(statearr_365654[7] = inst_365624);
return statearr_365654;
})();var statearr_365655_365677 = state_365652__$1;(statearr_365655_365677[2] = null);
(statearr_365655_365677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 2))
{var inst_365624 = (state_365652[7]);var inst_365626 = cljs.core.count.call(null,inst_365624);var inst_365627 = (inst_365626 > 0);var state_365652__$1 = state_365652;if(cljs.core.truth_(inst_365627))
{var statearr_365656_365678 = state_365652__$1;(statearr_365656_365678[1] = 4);
} else
{var statearr_365657_365679 = state_365652__$1;(statearr_365657_365679[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 3))
{var inst_365650 = (state_365652[2]);var state_365652__$1 = state_365652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365652__$1,inst_365650);
} else
{if((state_val_365653 === 4))
{var inst_365624 = (state_365652[7]);var state_365652__$1 = state_365652;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_365652__$1,7,inst_365624);
} else
{if((state_val_365653 === 5))
{var inst_365646 = cljs.core.async.close_BANG_.call(null,out);var state_365652__$1 = state_365652;var statearr_365658_365680 = state_365652__$1;(statearr_365658_365680[2] = inst_365646);
(statearr_365658_365680[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 6))
{var inst_365648 = (state_365652[2]);var state_365652__$1 = state_365652;var statearr_365659_365681 = state_365652__$1;(statearr_365659_365681[2] = inst_365648);
(statearr_365659_365681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 7))
{var inst_365632 = (state_365652[8]);var inst_365631 = (state_365652[9]);var inst_365631__$1 = (state_365652[2]);var inst_365632__$1 = cljs.core.nth.call(null,inst_365631__$1,0,null);var inst_365633 = cljs.core.nth.call(null,inst_365631__$1,1,null);var inst_365634 = (inst_365632__$1 == null);var state_365652__$1 = (function (){var statearr_365660 = state_365652;(statearr_365660[8] = inst_365632__$1);
(statearr_365660[10] = inst_365633);
(statearr_365660[9] = inst_365631__$1);
return statearr_365660;
})();if(cljs.core.truth_(inst_365634))
{var statearr_365661_365682 = state_365652__$1;(statearr_365661_365682[1] = 8);
} else
{var statearr_365662_365683 = state_365652__$1;(statearr_365662_365683[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 8))
{var inst_365632 = (state_365652[8]);var inst_365633 = (state_365652[10]);var inst_365631 = (state_365652[9]);var inst_365624 = (state_365652[7]);var inst_365636 = (function (){var c = inst_365633;var v = inst_365632;var vec__365629 = inst_365631;var cs = inst_365624;return ((function (c,v,vec__365629,cs,inst_365632,inst_365633,inst_365631,inst_365624,state_val_365653){
return (function (p1__365569_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__365569_SHARP_);
});
;})(c,v,vec__365629,cs,inst_365632,inst_365633,inst_365631,inst_365624,state_val_365653))
})();var inst_365637 = cljs.core.filterv.call(null,inst_365636,inst_365624);var inst_365624__$1 = inst_365637;var state_365652__$1 = (function (){var statearr_365663 = state_365652;(statearr_365663[7] = inst_365624__$1);
return statearr_365663;
})();var statearr_365664_365684 = state_365652__$1;(statearr_365664_365684[2] = null);
(statearr_365664_365684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 9))
{var inst_365632 = (state_365652[8]);var state_365652__$1 = state_365652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365652__$1,11,out,inst_365632);
} else
{if((state_val_365653 === 10))
{var inst_365644 = (state_365652[2]);var state_365652__$1 = state_365652;var statearr_365666_365685 = state_365652__$1;(statearr_365666_365685[2] = inst_365644);
(statearr_365666_365685[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365653 === 11))
{var inst_365624 = (state_365652[7]);var inst_365641 = (state_365652[2]);var tmp365665 = inst_365624;var inst_365624__$1 = tmp365665;var state_365652__$1 = (function (){var statearr_365667 = state_365652;(statearr_365667[11] = inst_365641);
(statearr_365667[7] = inst_365624__$1);
return statearr_365667;
})();var statearr_365668_365686 = state_365652__$1;(statearr_365668_365686[2] = null);
(statearr_365668_365686[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_365672 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_365672[0] = state_machine__18220__auto__);
(statearr_365672[1] = 1);
return statearr_365672;
});
var state_machine__18220__auto____1 = (function (state_365652){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_365652);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e365673){if((e365673 instanceof Object))
{var ex__18223__auto__ = e365673;var statearr_365674_365687 = state_365652;(statearr_365674_365687[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e365673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__365688 = state_365652;
state_365652 = G__365688;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_365652){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_365652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_365675 = f__18290__auto__.call(null);(statearr_365675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___365676);
return statearr_365675;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___365781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_365758){var state_val_365759 = (state_365758[1]);if((state_val_365759 === 1))
{var inst_365735 = 0;var state_365758__$1 = (function (){var statearr_365760 = state_365758;(statearr_365760[7] = inst_365735);
return statearr_365760;
})();var statearr_365761_365782 = state_365758__$1;(statearr_365761_365782[2] = null);
(statearr_365761_365782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 2))
{var inst_365735 = (state_365758[7]);var inst_365737 = (inst_365735 < n);var state_365758__$1 = state_365758;if(cljs.core.truth_(inst_365737))
{var statearr_365762_365783 = state_365758__$1;(statearr_365762_365783[1] = 4);
} else
{var statearr_365763_365784 = state_365758__$1;(statearr_365763_365784[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 3))
{var inst_365755 = (state_365758[2]);var inst_365756 = cljs.core.async.close_BANG_.call(null,out);var state_365758__$1 = (function (){var statearr_365764 = state_365758;(statearr_365764[8] = inst_365755);
return statearr_365764;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365758__$1,inst_365756);
} else
{if((state_val_365759 === 4))
{var state_365758__$1 = state_365758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_365758__$1,7,ch);
} else
{if((state_val_365759 === 5))
{var state_365758__$1 = state_365758;var statearr_365765_365785 = state_365758__$1;(statearr_365765_365785[2] = null);
(statearr_365765_365785[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 6))
{var inst_365753 = (state_365758[2]);var state_365758__$1 = state_365758;var statearr_365766_365786 = state_365758__$1;(statearr_365766_365786[2] = inst_365753);
(statearr_365766_365786[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 7))
{var inst_365740 = (state_365758[9]);var inst_365740__$1 = (state_365758[2]);var inst_365741 = (inst_365740__$1 == null);var inst_365742 = cljs.core.not.call(null,inst_365741);var state_365758__$1 = (function (){var statearr_365767 = state_365758;(statearr_365767[9] = inst_365740__$1);
return statearr_365767;
})();if(inst_365742)
{var statearr_365768_365787 = state_365758__$1;(statearr_365768_365787[1] = 8);
} else
{var statearr_365769_365788 = state_365758__$1;(statearr_365769_365788[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 8))
{var inst_365740 = (state_365758[9]);var state_365758__$1 = state_365758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365758__$1,11,out,inst_365740);
} else
{if((state_val_365759 === 9))
{var state_365758__$1 = state_365758;var statearr_365770_365789 = state_365758__$1;(statearr_365770_365789[2] = null);
(statearr_365770_365789[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 10))
{var inst_365750 = (state_365758[2]);var state_365758__$1 = state_365758;var statearr_365771_365790 = state_365758__$1;(statearr_365771_365790[2] = inst_365750);
(statearr_365771_365790[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365759 === 11))
{var inst_365735 = (state_365758[7]);var inst_365745 = (state_365758[2]);var inst_365746 = (inst_365735 + 1);var inst_365735__$1 = inst_365746;var state_365758__$1 = (function (){var statearr_365772 = state_365758;(statearr_365772[7] = inst_365735__$1);
(statearr_365772[10] = inst_365745);
return statearr_365772;
})();var statearr_365773_365791 = state_365758__$1;(statearr_365773_365791[2] = null);
(statearr_365773_365791[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_365777 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_365777[0] = state_machine__18220__auto__);
(statearr_365777[1] = 1);
return statearr_365777;
});
var state_machine__18220__auto____1 = (function (state_365758){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_365758);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e365778){if((e365778 instanceof Object))
{var ex__18223__auto__ = e365778;var statearr_365779_365792 = state_365758;(statearr_365779_365792[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365758);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e365778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__365793 = state_365758;
state_365758 = G__365793;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_365758){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_365758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_365780 = f__18290__auto__.call(null);(statearr_365780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___365781);
return statearr_365780;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___365890 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_365865){var state_val_365866 = (state_365865[1]);if((state_val_365866 === 1))
{var inst_365842 = null;var state_365865__$1 = (function (){var statearr_365867 = state_365865;(statearr_365867[7] = inst_365842);
return statearr_365867;
})();var statearr_365868_365891 = state_365865__$1;(statearr_365868_365891[2] = null);
(statearr_365868_365891[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 2))
{var state_365865__$1 = state_365865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_365865__$1,4,ch);
} else
{if((state_val_365866 === 3))
{var inst_365862 = (state_365865[2]);var inst_365863 = cljs.core.async.close_BANG_.call(null,out);var state_365865__$1 = (function (){var statearr_365869 = state_365865;(statearr_365869[8] = inst_365862);
return statearr_365869;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365865__$1,inst_365863);
} else
{if((state_val_365866 === 4))
{var inst_365845 = (state_365865[9]);var inst_365845__$1 = (state_365865[2]);var inst_365846 = (inst_365845__$1 == null);var inst_365847 = cljs.core.not.call(null,inst_365846);var state_365865__$1 = (function (){var statearr_365870 = state_365865;(statearr_365870[9] = inst_365845__$1);
return statearr_365870;
})();if(inst_365847)
{var statearr_365871_365892 = state_365865__$1;(statearr_365871_365892[1] = 5);
} else
{var statearr_365872_365893 = state_365865__$1;(statearr_365872_365893[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 5))
{var inst_365842 = (state_365865[7]);var inst_365845 = (state_365865[9]);var inst_365849 = cljs.core._EQ_.call(null,inst_365845,inst_365842);var state_365865__$1 = state_365865;if(inst_365849)
{var statearr_365873_365894 = state_365865__$1;(statearr_365873_365894[1] = 8);
} else
{var statearr_365874_365895 = state_365865__$1;(statearr_365874_365895[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 6))
{var state_365865__$1 = state_365865;var statearr_365876_365896 = state_365865__$1;(statearr_365876_365896[2] = null);
(statearr_365876_365896[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 7))
{var inst_365860 = (state_365865[2]);var state_365865__$1 = state_365865;var statearr_365877_365897 = state_365865__$1;(statearr_365877_365897[2] = inst_365860);
(statearr_365877_365897[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 8))
{var inst_365842 = (state_365865[7]);var tmp365875 = inst_365842;var inst_365842__$1 = tmp365875;var state_365865__$1 = (function (){var statearr_365878 = state_365865;(statearr_365878[7] = inst_365842__$1);
return statearr_365878;
})();var statearr_365879_365898 = state_365865__$1;(statearr_365879_365898[2] = null);
(statearr_365879_365898[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 9))
{var inst_365845 = (state_365865[9]);var state_365865__$1 = state_365865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365865__$1,11,out,inst_365845);
} else
{if((state_val_365866 === 10))
{var inst_365857 = (state_365865[2]);var state_365865__$1 = state_365865;var statearr_365880_365899 = state_365865__$1;(statearr_365880_365899[2] = inst_365857);
(statearr_365880_365899[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_365866 === 11))
{var inst_365845 = (state_365865[9]);var inst_365854 = (state_365865[2]);var inst_365842 = inst_365845;var state_365865__$1 = (function (){var statearr_365881 = state_365865;(statearr_365881[10] = inst_365854);
(statearr_365881[7] = inst_365842);
return statearr_365881;
})();var statearr_365882_365900 = state_365865__$1;(statearr_365882_365900[2] = null);
(statearr_365882_365900[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_365886 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_365886[0] = state_machine__18220__auto__);
(statearr_365886[1] = 1);
return statearr_365886;
});
var state_machine__18220__auto____1 = (function (state_365865){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_365865);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e365887){if((e365887 instanceof Object))
{var ex__18223__auto__ = e365887;var statearr_365888_365901 = state_365865;(statearr_365888_365901[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e365887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__365902 = state_365865;
state_365865 = G__365902;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_365865){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_365865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_365889 = f__18290__auto__.call(null);(statearr_365889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___365890);
return statearr_365889;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___366037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_366007){var state_val_366008 = (state_366007[1]);if((state_val_366008 === 1))
{var inst_365970 = (new Array(n));var inst_365971 = inst_365970;var inst_365972 = 0;var state_366007__$1 = (function (){var statearr_366009 = state_366007;(statearr_366009[7] = inst_365972);
(statearr_366009[8] = inst_365971);
return statearr_366009;
})();var statearr_366010_366038 = state_366007__$1;(statearr_366010_366038[2] = null);
(statearr_366010_366038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 2))
{var state_366007__$1 = state_366007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_366007__$1,4,ch);
} else
{if((state_val_366008 === 3))
{var inst_366005 = (state_366007[2]);var state_366007__$1 = state_366007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_366007__$1,inst_366005);
} else
{if((state_val_366008 === 4))
{var inst_365975 = (state_366007[9]);var inst_365975__$1 = (state_366007[2]);var inst_365976 = (inst_365975__$1 == null);var inst_365977 = cljs.core.not.call(null,inst_365976);var state_366007__$1 = (function (){var statearr_366011 = state_366007;(statearr_366011[9] = inst_365975__$1);
return statearr_366011;
})();if(inst_365977)
{var statearr_366012_366039 = state_366007__$1;(statearr_366012_366039[1] = 5);
} else
{var statearr_366013_366040 = state_366007__$1;(statearr_366013_366040[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 5))
{var inst_365975 = (state_366007[9]);var inst_365980 = (state_366007[10]);var inst_365972 = (state_366007[7]);var inst_365971 = (state_366007[8]);var inst_365979 = (inst_365971[inst_365972] = inst_365975);var inst_365980__$1 = (inst_365972 + 1);var inst_365981 = (inst_365980__$1 < n);var state_366007__$1 = (function (){var statearr_366014 = state_366007;(statearr_366014[10] = inst_365980__$1);
(statearr_366014[11] = inst_365979);
return statearr_366014;
})();if(cljs.core.truth_(inst_365981))
{var statearr_366015_366041 = state_366007__$1;(statearr_366015_366041[1] = 8);
} else
{var statearr_366016_366042 = state_366007__$1;(statearr_366016_366042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 6))
{var inst_365972 = (state_366007[7]);var inst_365993 = (inst_365972 > 0);var state_366007__$1 = state_366007;if(cljs.core.truth_(inst_365993))
{var statearr_366018_366043 = state_366007__$1;(statearr_366018_366043[1] = 12);
} else
{var statearr_366019_366044 = state_366007__$1;(statearr_366019_366044[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 7))
{var inst_366003 = (state_366007[2]);var state_366007__$1 = state_366007;var statearr_366020_366045 = state_366007__$1;(statearr_366020_366045[2] = inst_366003);
(statearr_366020_366045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 8))
{var inst_365980 = (state_366007[10]);var inst_365971 = (state_366007[8]);var tmp366017 = inst_365971;var inst_365971__$1 = tmp366017;var inst_365972 = inst_365980;var state_366007__$1 = (function (){var statearr_366021 = state_366007;(statearr_366021[7] = inst_365972);
(statearr_366021[8] = inst_365971__$1);
return statearr_366021;
})();var statearr_366022_366046 = state_366007__$1;(statearr_366022_366046[2] = null);
(statearr_366022_366046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 9))
{var inst_365971 = (state_366007[8]);var inst_365985 = cljs.core.vec.call(null,inst_365971);var state_366007__$1 = state_366007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_366007__$1,11,out,inst_365985);
} else
{if((state_val_366008 === 10))
{var inst_365991 = (state_366007[2]);var state_366007__$1 = state_366007;var statearr_366023_366047 = state_366007__$1;(statearr_366023_366047[2] = inst_365991);
(statearr_366023_366047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 11))
{var inst_365987 = (state_366007[2]);var inst_365988 = (new Array(n));var inst_365971 = inst_365988;var inst_365972 = 0;var state_366007__$1 = (function (){var statearr_366024 = state_366007;(statearr_366024[7] = inst_365972);
(statearr_366024[8] = inst_365971);
(statearr_366024[12] = inst_365987);
return statearr_366024;
})();var statearr_366025_366048 = state_366007__$1;(statearr_366025_366048[2] = null);
(statearr_366025_366048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 12))
{var inst_365971 = (state_366007[8]);var inst_365995 = cljs.core.vec.call(null,inst_365971);var state_366007__$1 = state_366007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_366007__$1,15,out,inst_365995);
} else
{if((state_val_366008 === 13))
{var state_366007__$1 = state_366007;var statearr_366026_366049 = state_366007__$1;(statearr_366026_366049[2] = null);
(statearr_366026_366049[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 14))
{var inst_366000 = (state_366007[2]);var inst_366001 = cljs.core.async.close_BANG_.call(null,out);var state_366007__$1 = (function (){var statearr_366027 = state_366007;(statearr_366027[13] = inst_366000);
return statearr_366027;
})();var statearr_366028_366050 = state_366007__$1;(statearr_366028_366050[2] = inst_366001);
(statearr_366028_366050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366008 === 15))
{var inst_365997 = (state_366007[2]);var state_366007__$1 = state_366007;var statearr_366029_366051 = state_366007__$1;(statearr_366029_366051[2] = inst_365997);
(statearr_366029_366051[1] = 14);
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
var state_machine__18220__auto____0 = (function (){var statearr_366033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_366033[0] = state_machine__18220__auto__);
(statearr_366033[1] = 1);
return statearr_366033;
});
var state_machine__18220__auto____1 = (function (state_366007){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_366007);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e366034){if((e366034 instanceof Object))
{var ex__18223__auto__ = e366034;var statearr_366035_366052 = state_366007;(statearr_366035_366052[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_366007);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e366034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__366053 = state_366007;
state_366007 = G__366053;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_366007){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_366007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_366036 = f__18290__auto__.call(null);(statearr_366036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___366037);
return statearr_366036;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___366196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_366166){var state_val_366167 = (state_366166[1]);if((state_val_366167 === 1))
{var inst_366125 = [];var inst_366126 = inst_366125;var inst_366127 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_366166__$1 = (function (){var statearr_366168 = state_366166;(statearr_366168[7] = inst_366127);
(statearr_366168[8] = inst_366126);
return statearr_366168;
})();var statearr_366169_366197 = state_366166__$1;(statearr_366169_366197[2] = null);
(statearr_366169_366197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 2))
{var state_366166__$1 = state_366166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_366166__$1,4,ch);
} else
{if((state_val_366167 === 3))
{var inst_366164 = (state_366166[2]);var state_366166__$1 = state_366166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_366166__$1,inst_366164);
} else
{if((state_val_366167 === 4))
{var inst_366130 = (state_366166[9]);var inst_366130__$1 = (state_366166[2]);var inst_366131 = (inst_366130__$1 == null);var inst_366132 = cljs.core.not.call(null,inst_366131);var state_366166__$1 = (function (){var statearr_366170 = state_366166;(statearr_366170[9] = inst_366130__$1);
return statearr_366170;
})();if(inst_366132)
{var statearr_366171_366198 = state_366166__$1;(statearr_366171_366198[1] = 5);
} else
{var statearr_366172_366199 = state_366166__$1;(statearr_366172_366199[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 5))
{var inst_366127 = (state_366166[7]);var inst_366134 = (state_366166[10]);var inst_366130 = (state_366166[9]);var inst_366134__$1 = f.call(null,inst_366130);var inst_366135 = cljs.core._EQ_.call(null,inst_366134__$1,inst_366127);var inst_366136 = cljs.core.keyword_identical_QMARK_.call(null,inst_366127,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_366137 = (inst_366135) || (inst_366136);var state_366166__$1 = (function (){var statearr_366173 = state_366166;(statearr_366173[10] = inst_366134__$1);
return statearr_366173;
})();if(cljs.core.truth_(inst_366137))
{var statearr_366174_366200 = state_366166__$1;(statearr_366174_366200[1] = 8);
} else
{var statearr_366175_366201 = state_366166__$1;(statearr_366175_366201[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 6))
{var inst_366126 = (state_366166[8]);var inst_366151 = inst_366126.length;var inst_366152 = (inst_366151 > 0);var state_366166__$1 = state_366166;if(cljs.core.truth_(inst_366152))
{var statearr_366177_366202 = state_366166__$1;(statearr_366177_366202[1] = 12);
} else
{var statearr_366178_366203 = state_366166__$1;(statearr_366178_366203[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 7))
{var inst_366162 = (state_366166[2]);var state_366166__$1 = state_366166;var statearr_366179_366204 = state_366166__$1;(statearr_366179_366204[2] = inst_366162);
(statearr_366179_366204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 8))
{var inst_366134 = (state_366166[10]);var inst_366130 = (state_366166[9]);var inst_366126 = (state_366166[8]);var inst_366139 = inst_366126.push(inst_366130);var tmp366176 = inst_366126;var inst_366126__$1 = tmp366176;var inst_366127 = inst_366134;var state_366166__$1 = (function (){var statearr_366180 = state_366166;(statearr_366180[11] = inst_366139);
(statearr_366180[7] = inst_366127);
(statearr_366180[8] = inst_366126__$1);
return statearr_366180;
})();var statearr_366181_366205 = state_366166__$1;(statearr_366181_366205[2] = null);
(statearr_366181_366205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 9))
{var inst_366126 = (state_366166[8]);var inst_366142 = cljs.core.vec.call(null,inst_366126);var state_366166__$1 = state_366166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_366166__$1,11,out,inst_366142);
} else
{if((state_val_366167 === 10))
{var inst_366149 = (state_366166[2]);var state_366166__$1 = state_366166;var statearr_366182_366206 = state_366166__$1;(statearr_366182_366206[2] = inst_366149);
(statearr_366182_366206[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 11))
{var inst_366134 = (state_366166[10]);var inst_366130 = (state_366166[9]);var inst_366144 = (state_366166[2]);var inst_366145 = [];var inst_366146 = inst_366145.push(inst_366130);var inst_366126 = inst_366145;var inst_366127 = inst_366134;var state_366166__$1 = (function (){var statearr_366183 = state_366166;(statearr_366183[12] = inst_366144);
(statearr_366183[13] = inst_366146);
(statearr_366183[7] = inst_366127);
(statearr_366183[8] = inst_366126);
return statearr_366183;
})();var statearr_366184_366207 = state_366166__$1;(statearr_366184_366207[2] = null);
(statearr_366184_366207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 12))
{var inst_366126 = (state_366166[8]);var inst_366154 = cljs.core.vec.call(null,inst_366126);var state_366166__$1 = state_366166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_366166__$1,15,out,inst_366154);
} else
{if((state_val_366167 === 13))
{var state_366166__$1 = state_366166;var statearr_366185_366208 = state_366166__$1;(statearr_366185_366208[2] = null);
(statearr_366185_366208[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 14))
{var inst_366159 = (state_366166[2]);var inst_366160 = cljs.core.async.close_BANG_.call(null,out);var state_366166__$1 = (function (){var statearr_366186 = state_366166;(statearr_366186[14] = inst_366159);
return statearr_366186;
})();var statearr_366187_366209 = state_366166__$1;(statearr_366187_366209[2] = inst_366160);
(statearr_366187_366209[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_366167 === 15))
{var inst_366156 = (state_366166[2]);var state_366166__$1 = state_366166;var statearr_366188_366210 = state_366166__$1;(statearr_366188_366210[2] = inst_366156);
(statearr_366188_366210[1] = 14);
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
var state_machine__18220__auto____0 = (function (){var statearr_366192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_366192[0] = state_machine__18220__auto__);
(statearr_366192[1] = 1);
return statearr_366192;
});
var state_machine__18220__auto____1 = (function (state_366166){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_366166);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e366193){if((e366193 instanceof Object))
{var ex__18223__auto__ = e366193;var statearr_366194_366211 = state_366166;(statearr_366194_366211[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_366166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e366193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__366212 = state_366166;
state_366166 = G__366212;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_366166){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_366166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_366195 = f__18290__auto__.call(null);(statearr_366195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___366196);
return statearr_366195;
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