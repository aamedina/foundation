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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t354530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354530 = (function (f,fn_handler,meta354531){
this.f = f;
this.fn_handler = fn_handler;
this.meta354531 = meta354531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354530.cljs$lang$type = true;
cljs.core.async.t354530.cljs$lang$ctorStr = "cljs.core.async/t354530";
cljs.core.async.t354530.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354530");
});
cljs.core.async.t354530.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t354530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t354530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t354530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354532){var self__ = this;
var _354532__$1 = this;return self__.meta354531;
});
cljs.core.async.t354530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354532,meta354531__$1){var self__ = this;
var _354532__$1 = this;return (new cljs.core.async.t354530(self__.f,self__.fn_handler,meta354531__$1));
});
cljs.core.async.__GT_t354530 = (function __GT_t354530(f__$1,fn_handler__$1,meta354531){return (new cljs.core.async.t354530(f__$1,fn_handler__$1,meta354531));
});
}
return (new cljs.core.async.t354530(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__354534 = buff;if(G__354534)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__354534.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__354534.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__354534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__354534);
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
{var val_354535 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_354535);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_354535);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14807__auto___354536 = n;var x_354537 = 0;while(true){
if((x_354537 < n__14807__auto___354536))
{(a[x_354537] = 0);
{
var G__354538 = (x_354537 + 1);
x_354537 = G__354538;
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
var G__354539 = (i + 1);
i = G__354539;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t354543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354543 = (function (flag,alt_flag,meta354544){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta354544 = meta354544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354543.cljs$lang$type = true;
cljs.core.async.t354543.cljs$lang$ctorStr = "cljs.core.async/t354543";
cljs.core.async.t354543.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354543");
});
cljs.core.async.t354543.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t354543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t354543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t354543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354545){var self__ = this;
var _354545__$1 = this;return self__.meta354544;
});
cljs.core.async.t354543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354545,meta354544__$1){var self__ = this;
var _354545__$1 = this;return (new cljs.core.async.t354543(self__.flag,self__.alt_flag,meta354544__$1));
});
cljs.core.async.__GT_t354543 = (function __GT_t354543(flag__$1,alt_flag__$1,meta354544){return (new cljs.core.async.t354543(flag__$1,alt_flag__$1,meta354544));
});
}
return (new cljs.core.async.t354543(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t354549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354549 = (function (cb,flag,alt_handler,meta354550){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta354550 = meta354550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354549.cljs$lang$type = true;
cljs.core.async.t354549.cljs$lang$ctorStr = "cljs.core.async/t354549";
cljs.core.async.t354549.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354549");
});
cljs.core.async.t354549.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t354549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t354549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t354549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354551){var self__ = this;
var _354551__$1 = this;return self__.meta354550;
});
cljs.core.async.t354549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354551,meta354550__$1){var self__ = this;
var _354551__$1 = this;return (new cljs.core.async.t354549(self__.cb,self__.flag,self__.alt_handler,meta354550__$1));
});
cljs.core.async.__GT_t354549 = (function __GT_t354549(cb__$1,flag__$1,alt_handler__$1,meta354550){return (new cljs.core.async.t354549(cb__$1,flag__$1,alt_handler__$1,meta354550));
});
}
return (new cljs.core.async.t354549(cb,flag,alt_handler,null));
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
return (function (p1__354552_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__354552_SHARP_,port], null));
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
var G__354553 = (i + 1);
i = G__354553;
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
var alts_BANG___delegate = function (ports,p__354554){var map__354556 = p__354554;var map__354556__$1 = ((cljs.core.seq_QMARK_.call(null,map__354556))?cljs.core.apply.call(null,cljs.core.hash_map,map__354556):map__354556);var opts = map__354556__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__354554 = null;if (arguments.length > 1) {
  p__354554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__354554);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__354557){
var ports = cljs.core.first(arglist__354557);
var p__354554 = cljs.core.rest(arglist__354557);
return alts_BANG___delegate(ports,p__354554);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t354565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354565 = (function (ch,f,map_LT_,meta354566){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta354566 = meta354566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354565.cljs$lang$type = true;
cljs.core.async.t354565.cljs$lang$ctorStr = "cljs.core.async/t354565";
cljs.core.async.t354565.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354565");
});
cljs.core.async.t354565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t354565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t354565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t354565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t354568 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354568 = (function (fn1,_,meta354566,ch,f,map_LT_,meta354569){
this.fn1 = fn1;
this._ = _;
this.meta354566 = meta354566;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta354569 = meta354569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354568.cljs$lang$type = true;
cljs.core.async.t354568.cljs$lang$ctorStr = "cljs.core.async/t354568";
cljs.core.async.t354568.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354568");
});
cljs.core.async.t354568.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t354568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t354568.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t354568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__354558_SHARP_){return f1.call(null,(((p1__354558_SHARP_ == null))?null:self__.f.call(null,p1__354558_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t354568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354570){var self__ = this;
var _354570__$1 = this;return self__.meta354569;
});
cljs.core.async.t354568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354570,meta354569__$1){var self__ = this;
var _354570__$1 = this;return (new cljs.core.async.t354568(self__.fn1,self__._,self__.meta354566,self__.ch,self__.f,self__.map_LT_,meta354569__$1));
});
cljs.core.async.__GT_t354568 = (function __GT_t354568(fn1__$1,___$2,meta354566__$1,ch__$2,f__$2,map_LT___$2,meta354569){return (new cljs.core.async.t354568(fn1__$1,___$2,meta354566__$1,ch__$2,f__$2,map_LT___$2,meta354569));
});
}
return (new cljs.core.async.t354568(fn1,___$1,self__.meta354566,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t354565.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t354565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t354565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354567){var self__ = this;
var _354567__$1 = this;return self__.meta354566;
});
cljs.core.async.t354565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354567,meta354566__$1){var self__ = this;
var _354567__$1 = this;return (new cljs.core.async.t354565(self__.ch,self__.f,self__.map_LT_,meta354566__$1));
});
cljs.core.async.__GT_t354565 = (function __GT_t354565(ch__$1,f__$1,map_LT___$1,meta354566){return (new cljs.core.async.t354565(ch__$1,f__$1,map_LT___$1,meta354566));
});
}
return (new cljs.core.async.t354565(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t354574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354574 = (function (ch,f,map_GT_,meta354575){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta354575 = meta354575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354574.cljs$lang$type = true;
cljs.core.async.t354574.cljs$lang$ctorStr = "cljs.core.async/t354574";
cljs.core.async.t354574.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354574");
});
cljs.core.async.t354574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t354574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t354574.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t354574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t354574.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t354574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t354574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354576){var self__ = this;
var _354576__$1 = this;return self__.meta354575;
});
cljs.core.async.t354574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354576,meta354575__$1){var self__ = this;
var _354576__$1 = this;return (new cljs.core.async.t354574(self__.ch,self__.f,self__.map_GT_,meta354575__$1));
});
cljs.core.async.__GT_t354574 = (function __GT_t354574(ch__$1,f__$1,map_GT___$1,meta354575){return (new cljs.core.async.t354574(ch__$1,f__$1,map_GT___$1,meta354575));
});
}
return (new cljs.core.async.t354574(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t354580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t354580 = (function (ch,p,filter_GT_,meta354581){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta354581 = meta354581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t354580.cljs$lang$type = true;
cljs.core.async.t354580.cljs$lang$ctorStr = "cljs.core.async/t354580";
cljs.core.async.t354580.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t354580");
});
cljs.core.async.t354580.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t354580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t354580.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t354580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t354580.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t354580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t354580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_354582){var self__ = this;
var _354582__$1 = this;return self__.meta354581;
});
cljs.core.async.t354580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_354582,meta354581__$1){var self__ = this;
var _354582__$1 = this;return (new cljs.core.async.t354580(self__.ch,self__.p,self__.filter_GT_,meta354581__$1));
});
cljs.core.async.__GT_t354580 = (function __GT_t354580(ch__$1,p__$1,filter_GT___$1,meta354581){return (new cljs.core.async.t354580(ch__$1,p__$1,filter_GT___$1,meta354581));
});
}
return (new cljs.core.async.t354580(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___354665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_354644){var state_val_354645 = (state_354644[1]);if((state_val_354645 === 1))
{var state_354644__$1 = state_354644;var statearr_354646_354666 = state_354644__$1;(statearr_354646_354666[2] = null);
(statearr_354646_354666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 2))
{var state_354644__$1 = state_354644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_354644__$1,4,ch);
} else
{if((state_val_354645 === 3))
{var inst_354642 = (state_354644[2]);var state_354644__$1 = state_354644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_354644__$1,inst_354642);
} else
{if((state_val_354645 === 4))
{var inst_354626 = (state_354644[7]);var inst_354626__$1 = (state_354644[2]);var inst_354627 = (inst_354626__$1 == null);var state_354644__$1 = (function (){var statearr_354647 = state_354644;(statearr_354647[7] = inst_354626__$1);
return statearr_354647;
})();if(cljs.core.truth_(inst_354627))
{var statearr_354648_354667 = state_354644__$1;(statearr_354648_354667[1] = 5);
} else
{var statearr_354649_354668 = state_354644__$1;(statearr_354649_354668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 5))
{var inst_354629 = cljs.core.async.close_BANG_.call(null,out);var state_354644__$1 = state_354644;var statearr_354650_354669 = state_354644__$1;(statearr_354650_354669[2] = inst_354629);
(statearr_354650_354669[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 6))
{var inst_354626 = (state_354644[7]);var inst_354631 = p.call(null,inst_354626);var state_354644__$1 = state_354644;if(cljs.core.truth_(inst_354631))
{var statearr_354651_354670 = state_354644__$1;(statearr_354651_354670[1] = 8);
} else
{var statearr_354652_354671 = state_354644__$1;(statearr_354652_354671[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 7))
{var inst_354640 = (state_354644[2]);var state_354644__$1 = state_354644;var statearr_354653_354672 = state_354644__$1;(statearr_354653_354672[2] = inst_354640);
(statearr_354653_354672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 8))
{var inst_354626 = (state_354644[7]);var state_354644__$1 = state_354644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_354644__$1,11,out,inst_354626);
} else
{if((state_val_354645 === 9))
{var state_354644__$1 = state_354644;var statearr_354654_354673 = state_354644__$1;(statearr_354654_354673[2] = null);
(statearr_354654_354673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 10))
{var inst_354637 = (state_354644[2]);var state_354644__$1 = (function (){var statearr_354655 = state_354644;(statearr_354655[8] = inst_354637);
return statearr_354655;
})();var statearr_354656_354674 = state_354644__$1;(statearr_354656_354674[2] = null);
(statearr_354656_354674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354645 === 11))
{var inst_354634 = (state_354644[2]);var state_354644__$1 = state_354644;var statearr_354657_354675 = state_354644__$1;(statearr_354657_354675[2] = inst_354634);
(statearr_354657_354675[1] = 10);
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
var state_machine__18220__auto____0 = (function (){var statearr_354661 = [null,null,null,null,null,null,null,null,null];(statearr_354661[0] = state_machine__18220__auto__);
(statearr_354661[1] = 1);
return statearr_354661;
});
var state_machine__18220__auto____1 = (function (state_354644){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_354644);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e354662){if((e354662 instanceof Object))
{var ex__18223__auto__ = e354662;var statearr_354663_354676 = state_354644;(statearr_354663_354676[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_354644);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e354662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__354677 = state_354644;
state_354644 = G__354677;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_354644){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_354644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_354664 = f__18290__auto__.call(null);(statearr_354664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___354665);
return statearr_354664;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_354829){var state_val_354830 = (state_354829[1]);if((state_val_354830 === 1))
{var state_354829__$1 = state_354829;var statearr_354831_354868 = state_354829__$1;(statearr_354831_354868[2] = null);
(statearr_354831_354868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 2))
{var state_354829__$1 = state_354829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_354829__$1,4,in$);
} else
{if((state_val_354830 === 3))
{var inst_354827 = (state_354829[2]);var state_354829__$1 = state_354829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_354829__$1,inst_354827);
} else
{if((state_val_354830 === 4))
{var inst_354775 = (state_354829[7]);var inst_354775__$1 = (state_354829[2]);var inst_354776 = (inst_354775__$1 == null);var state_354829__$1 = (function (){var statearr_354832 = state_354829;(statearr_354832[7] = inst_354775__$1);
return statearr_354832;
})();if(cljs.core.truth_(inst_354776))
{var statearr_354833_354869 = state_354829__$1;(statearr_354833_354869[1] = 5);
} else
{var statearr_354834_354870 = state_354829__$1;(statearr_354834_354870[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 5))
{var inst_354778 = cljs.core.async.close_BANG_.call(null,out);var state_354829__$1 = state_354829;var statearr_354835_354871 = state_354829__$1;(statearr_354835_354871[2] = inst_354778);
(statearr_354835_354871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 6))
{var inst_354775 = (state_354829[7]);var inst_354780 = f.call(null,inst_354775);var inst_354785 = cljs.core.seq.call(null,inst_354780);var inst_354786 = inst_354785;var inst_354787 = null;var inst_354788 = 0;var inst_354789 = 0;var state_354829__$1 = (function (){var statearr_354836 = state_354829;(statearr_354836[8] = inst_354786);
(statearr_354836[9] = inst_354787);
(statearr_354836[10] = inst_354788);
(statearr_354836[11] = inst_354789);
return statearr_354836;
})();var statearr_354837_354872 = state_354829__$1;(statearr_354837_354872[2] = null);
(statearr_354837_354872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 7))
{var inst_354825 = (state_354829[2]);var state_354829__$1 = state_354829;var statearr_354838_354873 = state_354829__$1;(statearr_354838_354873[2] = inst_354825);
(statearr_354838_354873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 8))
{var inst_354788 = (state_354829[10]);var inst_354789 = (state_354829[11]);var inst_354791 = (inst_354789 < inst_354788);var inst_354792 = inst_354791;var state_354829__$1 = state_354829;if(cljs.core.truth_(inst_354792))
{var statearr_354839_354874 = state_354829__$1;(statearr_354839_354874[1] = 10);
} else
{var statearr_354840_354875 = state_354829__$1;(statearr_354840_354875[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 9))
{var inst_354822 = (state_354829[2]);var state_354829__$1 = (function (){var statearr_354841 = state_354829;(statearr_354841[12] = inst_354822);
return statearr_354841;
})();var statearr_354842_354876 = state_354829__$1;(statearr_354842_354876[2] = null);
(statearr_354842_354876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 10))
{var inst_354787 = (state_354829[9]);var inst_354789 = (state_354829[11]);var inst_354794 = cljs.core._nth.call(null,inst_354787,inst_354789);var state_354829__$1 = state_354829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_354829__$1,13,out,inst_354794);
} else
{if((state_val_354830 === 11))
{var inst_354800 = (state_354829[13]);var inst_354786 = (state_354829[8]);var inst_354800__$1 = cljs.core.seq.call(null,inst_354786);var state_354829__$1 = (function (){var statearr_354846 = state_354829;(statearr_354846[13] = inst_354800__$1);
return statearr_354846;
})();if(inst_354800__$1)
{var statearr_354847_354877 = state_354829__$1;(statearr_354847_354877[1] = 14);
} else
{var statearr_354848_354878 = state_354829__$1;(statearr_354848_354878[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 12))
{var inst_354820 = (state_354829[2]);var state_354829__$1 = state_354829;var statearr_354849_354879 = state_354829__$1;(statearr_354849_354879[2] = inst_354820);
(statearr_354849_354879[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 13))
{var inst_354786 = (state_354829[8]);var inst_354787 = (state_354829[9]);var inst_354788 = (state_354829[10]);var inst_354789 = (state_354829[11]);var inst_354796 = (state_354829[2]);var inst_354797 = (inst_354789 + 1);var tmp354843 = inst_354786;var tmp354844 = inst_354787;var tmp354845 = inst_354788;var inst_354786__$1 = tmp354843;var inst_354787__$1 = tmp354844;var inst_354788__$1 = tmp354845;var inst_354789__$1 = inst_354797;var state_354829__$1 = (function (){var statearr_354850 = state_354829;(statearr_354850[14] = inst_354796);
(statearr_354850[8] = inst_354786__$1);
(statearr_354850[9] = inst_354787__$1);
(statearr_354850[10] = inst_354788__$1);
(statearr_354850[11] = inst_354789__$1);
return statearr_354850;
})();var statearr_354851_354880 = state_354829__$1;(statearr_354851_354880[2] = null);
(statearr_354851_354880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 14))
{var inst_354800 = (state_354829[13]);var inst_354802 = cljs.core.chunked_seq_QMARK_.call(null,inst_354800);var state_354829__$1 = state_354829;if(inst_354802)
{var statearr_354852_354881 = state_354829__$1;(statearr_354852_354881[1] = 17);
} else
{var statearr_354853_354882 = state_354829__$1;(statearr_354853_354882[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 15))
{var state_354829__$1 = state_354829;var statearr_354854_354883 = state_354829__$1;(statearr_354854_354883[2] = null);
(statearr_354854_354883[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 16))
{var inst_354818 = (state_354829[2]);var state_354829__$1 = state_354829;var statearr_354855_354884 = state_354829__$1;(statearr_354855_354884[2] = inst_354818);
(statearr_354855_354884[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 17))
{var inst_354800 = (state_354829[13]);var inst_354804 = cljs.core.chunk_first.call(null,inst_354800);var inst_354805 = cljs.core.chunk_rest.call(null,inst_354800);var inst_354806 = cljs.core.count.call(null,inst_354804);var inst_354786 = inst_354805;var inst_354787 = inst_354804;var inst_354788 = inst_354806;var inst_354789 = 0;var state_354829__$1 = (function (){var statearr_354856 = state_354829;(statearr_354856[8] = inst_354786);
(statearr_354856[9] = inst_354787);
(statearr_354856[10] = inst_354788);
(statearr_354856[11] = inst_354789);
return statearr_354856;
})();var statearr_354857_354885 = state_354829__$1;(statearr_354857_354885[2] = null);
(statearr_354857_354885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 18))
{var inst_354800 = (state_354829[13]);var inst_354809 = cljs.core.first.call(null,inst_354800);var state_354829__$1 = state_354829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_354829__$1,20,out,inst_354809);
} else
{if((state_val_354830 === 19))
{var inst_354815 = (state_354829[2]);var state_354829__$1 = state_354829;var statearr_354858_354886 = state_354829__$1;(statearr_354858_354886[2] = inst_354815);
(statearr_354858_354886[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354830 === 20))
{var inst_354800 = (state_354829[13]);var inst_354811 = (state_354829[2]);var inst_354812 = cljs.core.next.call(null,inst_354800);var inst_354786 = inst_354812;var inst_354787 = null;var inst_354788 = 0;var inst_354789 = 0;var state_354829__$1 = (function (){var statearr_354859 = state_354829;(statearr_354859[8] = inst_354786);
(statearr_354859[9] = inst_354787);
(statearr_354859[10] = inst_354788);
(statearr_354859[11] = inst_354789);
(statearr_354859[15] = inst_354811);
return statearr_354859;
})();var statearr_354860_354887 = state_354829__$1;(statearr_354860_354887[2] = null);
(statearr_354860_354887[1] = 8);
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
var state_machine__18220__auto____0 = (function (){var statearr_354864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_354864[0] = state_machine__18220__auto__);
(statearr_354864[1] = 1);
return statearr_354864;
});
var state_machine__18220__auto____1 = (function (state_354829){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_354829);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e354865){if((e354865 instanceof Object))
{var ex__18223__auto__ = e354865;var statearr_354866_354888 = state_354829;(statearr_354866_354888[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_354829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e354865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__354889 = state_354829;
state_354829 = G__354889;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_354829){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_354829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_354867 = f__18290__auto__.call(null);(statearr_354867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_354867;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18289__auto___354970 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_354949){var state_val_354950 = (state_354949[1]);if((state_val_354950 === 1))
{var state_354949__$1 = state_354949;var statearr_354951_354971 = state_354949__$1;(statearr_354951_354971[2] = null);
(statearr_354951_354971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 2))
{var state_354949__$1 = state_354949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_354949__$1,4,from);
} else
{if((state_val_354950 === 3))
{var inst_354947 = (state_354949[2]);var state_354949__$1 = state_354949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_354949__$1,inst_354947);
} else
{if((state_val_354950 === 4))
{var inst_354932 = (state_354949[7]);var inst_354932__$1 = (state_354949[2]);var inst_354933 = (inst_354932__$1 == null);var state_354949__$1 = (function (){var statearr_354952 = state_354949;(statearr_354952[7] = inst_354932__$1);
return statearr_354952;
})();if(cljs.core.truth_(inst_354933))
{var statearr_354953_354972 = state_354949__$1;(statearr_354953_354972[1] = 5);
} else
{var statearr_354954_354973 = state_354949__$1;(statearr_354954_354973[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 5))
{var state_354949__$1 = state_354949;if(cljs.core.truth_(close_QMARK_))
{var statearr_354955_354974 = state_354949__$1;(statearr_354955_354974[1] = 8);
} else
{var statearr_354956_354975 = state_354949__$1;(statearr_354956_354975[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 6))
{var inst_354932 = (state_354949[7]);var state_354949__$1 = state_354949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_354949__$1,11,to,inst_354932);
} else
{if((state_val_354950 === 7))
{var inst_354945 = (state_354949[2]);var state_354949__$1 = state_354949;var statearr_354957_354976 = state_354949__$1;(statearr_354957_354976[2] = inst_354945);
(statearr_354957_354976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 8))
{var inst_354936 = cljs.core.async.close_BANG_.call(null,to);var state_354949__$1 = state_354949;var statearr_354958_354977 = state_354949__$1;(statearr_354958_354977[2] = inst_354936);
(statearr_354958_354977[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 9))
{var state_354949__$1 = state_354949;var statearr_354959_354978 = state_354949__$1;(statearr_354959_354978[2] = null);
(statearr_354959_354978[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 10))
{var inst_354939 = (state_354949[2]);var state_354949__$1 = state_354949;var statearr_354960_354979 = state_354949__$1;(statearr_354960_354979[2] = inst_354939);
(statearr_354960_354979[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_354950 === 11))
{var inst_354942 = (state_354949[2]);var state_354949__$1 = (function (){var statearr_354961 = state_354949;(statearr_354961[8] = inst_354942);
return statearr_354961;
})();var statearr_354962_354980 = state_354949__$1;(statearr_354962_354980[2] = null);
(statearr_354962_354980[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_354966 = [null,null,null,null,null,null,null,null,null];(statearr_354966[0] = state_machine__18220__auto__);
(statearr_354966[1] = 1);
return statearr_354966;
});
var state_machine__18220__auto____1 = (function (state_354949){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_354949);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e354967){if((e354967 instanceof Object))
{var ex__18223__auto__ = e354967;var statearr_354968_354981 = state_354949;(statearr_354968_354981[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_354949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e354967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__354982 = state_354949;
state_354949 = G__354982;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_354949){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_354949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_354969 = f__18290__auto__.call(null);(statearr_354969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___354970);
return statearr_354969;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18289__auto___355069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_355047){var state_val_355048 = (state_355047[1]);if((state_val_355048 === 1))
{var state_355047__$1 = state_355047;var statearr_355049_355070 = state_355047__$1;(statearr_355049_355070[2] = null);
(statearr_355049_355070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 2))
{var state_355047__$1 = state_355047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_355047__$1,4,ch);
} else
{if((state_val_355048 === 3))
{var inst_355045 = (state_355047[2]);var state_355047__$1 = state_355047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355047__$1,inst_355045);
} else
{if((state_val_355048 === 4))
{var inst_355028 = (state_355047[7]);var inst_355028__$1 = (state_355047[2]);var inst_355029 = (inst_355028__$1 == null);var state_355047__$1 = (function (){var statearr_355050 = state_355047;(statearr_355050[7] = inst_355028__$1);
return statearr_355050;
})();if(cljs.core.truth_(inst_355029))
{var statearr_355051_355071 = state_355047__$1;(statearr_355051_355071[1] = 5);
} else
{var statearr_355052_355072 = state_355047__$1;(statearr_355052_355072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 5))
{var inst_355031 = cljs.core.async.close_BANG_.call(null,tc);var inst_355032 = cljs.core.async.close_BANG_.call(null,fc);var state_355047__$1 = (function (){var statearr_355053 = state_355047;(statearr_355053[8] = inst_355031);
return statearr_355053;
})();var statearr_355054_355073 = state_355047__$1;(statearr_355054_355073[2] = inst_355032);
(statearr_355054_355073[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 6))
{var inst_355028 = (state_355047[7]);var inst_355034 = p.call(null,inst_355028);var state_355047__$1 = state_355047;if(cljs.core.truth_(inst_355034))
{var statearr_355055_355074 = state_355047__$1;(statearr_355055_355074[1] = 9);
} else
{var statearr_355056_355075 = state_355047__$1;(statearr_355056_355075[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 7))
{var inst_355043 = (state_355047[2]);var state_355047__$1 = state_355047;var statearr_355057_355076 = state_355047__$1;(statearr_355057_355076[2] = inst_355043);
(statearr_355057_355076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 8))
{var inst_355040 = (state_355047[2]);var state_355047__$1 = (function (){var statearr_355058 = state_355047;(statearr_355058[9] = inst_355040);
return statearr_355058;
})();var statearr_355059_355077 = state_355047__$1;(statearr_355059_355077[2] = null);
(statearr_355059_355077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 9))
{var state_355047__$1 = state_355047;var statearr_355060_355078 = state_355047__$1;(statearr_355060_355078[2] = tc);
(statearr_355060_355078[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 10))
{var state_355047__$1 = state_355047;var statearr_355061_355079 = state_355047__$1;(statearr_355061_355079[2] = fc);
(statearr_355061_355079[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355048 === 11))
{var inst_355028 = (state_355047[7]);var inst_355038 = (state_355047[2]);var state_355047__$1 = state_355047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_355047__$1,8,inst_355038,inst_355028);
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
var state_machine__18220__auto____0 = (function (){var statearr_355065 = [null,null,null,null,null,null,null,null,null,null];(statearr_355065[0] = state_machine__18220__auto__);
(statearr_355065[1] = 1);
return statearr_355065;
});
var state_machine__18220__auto____1 = (function (state_355047){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_355047);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e355066){if((e355066 instanceof Object))
{var ex__18223__auto__ = e355066;var statearr_355067_355080 = state_355047;(statearr_355067_355080[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e355066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__355081 = state_355047;
state_355047 = G__355081;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_355047){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_355047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_355068 = f__18290__auto__.call(null);(statearr_355068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___355069);
return statearr_355068;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_355128){var state_val_355129 = (state_355128[1]);if((state_val_355129 === 7))
{var inst_355124 = (state_355128[2]);var state_355128__$1 = state_355128;var statearr_355130_355146 = state_355128__$1;(statearr_355130_355146[2] = inst_355124);
(statearr_355130_355146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355129 === 6))
{var inst_355117 = (state_355128[7]);var inst_355114 = (state_355128[8]);var inst_355121 = f.call(null,inst_355114,inst_355117);var inst_355114__$1 = inst_355121;var state_355128__$1 = (function (){var statearr_355131 = state_355128;(statearr_355131[8] = inst_355114__$1);
return statearr_355131;
})();var statearr_355132_355147 = state_355128__$1;(statearr_355132_355147[2] = null);
(statearr_355132_355147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355129 === 5))
{var inst_355114 = (state_355128[8]);var state_355128__$1 = state_355128;var statearr_355133_355148 = state_355128__$1;(statearr_355133_355148[2] = inst_355114);
(statearr_355133_355148[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355129 === 4))
{var inst_355117 = (state_355128[7]);var inst_355117__$1 = (state_355128[2]);var inst_355118 = (inst_355117__$1 == null);var state_355128__$1 = (function (){var statearr_355134 = state_355128;(statearr_355134[7] = inst_355117__$1);
return statearr_355134;
})();if(cljs.core.truth_(inst_355118))
{var statearr_355135_355149 = state_355128__$1;(statearr_355135_355149[1] = 5);
} else
{var statearr_355136_355150 = state_355128__$1;(statearr_355136_355150[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355129 === 3))
{var inst_355126 = (state_355128[2]);var state_355128__$1 = state_355128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355128__$1,inst_355126);
} else
{if((state_val_355129 === 2))
{var state_355128__$1 = state_355128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_355128__$1,4,ch);
} else
{if((state_val_355129 === 1))
{var inst_355114 = init;var state_355128__$1 = (function (){var statearr_355137 = state_355128;(statearr_355137[8] = inst_355114);
return statearr_355137;
})();var statearr_355138_355151 = state_355128__$1;(statearr_355138_355151[2] = null);
(statearr_355138_355151[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_355142 = [null,null,null,null,null,null,null,null,null];(statearr_355142[0] = state_machine__18220__auto__);
(statearr_355142[1] = 1);
return statearr_355142;
});
var state_machine__18220__auto____1 = (function (state_355128){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_355128);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e355143){if((e355143 instanceof Object))
{var ex__18223__auto__ = e355143;var statearr_355144_355152 = state_355128;(statearr_355144_355152[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e355143;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__355153 = state_355128;
state_355128 = G__355153;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_355128){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_355128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_355145 = f__18290__auto__.call(null);(statearr_355145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_355145;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_355215){var state_val_355216 = (state_355215[1]);if((state_val_355216 === 1))
{var inst_355195 = cljs.core.seq.call(null,coll);var inst_355196 = inst_355195;var state_355215__$1 = (function (){var statearr_355217 = state_355215;(statearr_355217[7] = inst_355196);
return statearr_355217;
})();var statearr_355218_355236 = state_355215__$1;(statearr_355218_355236[2] = null);
(statearr_355218_355236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 2))
{var inst_355196 = (state_355215[7]);var state_355215__$1 = state_355215;if(cljs.core.truth_(inst_355196))
{var statearr_355219_355237 = state_355215__$1;(statearr_355219_355237[1] = 4);
} else
{var statearr_355220_355238 = state_355215__$1;(statearr_355220_355238[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 3))
{var inst_355213 = (state_355215[2]);var state_355215__$1 = state_355215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355215__$1,inst_355213);
} else
{if((state_val_355216 === 4))
{var inst_355196 = (state_355215[7]);var inst_355199 = cljs.core.first.call(null,inst_355196);var state_355215__$1 = state_355215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_355215__$1,7,ch,inst_355199);
} else
{if((state_val_355216 === 5))
{var state_355215__$1 = state_355215;if(cljs.core.truth_(close_QMARK_))
{var statearr_355221_355239 = state_355215__$1;(statearr_355221_355239[1] = 8);
} else
{var statearr_355222_355240 = state_355215__$1;(statearr_355222_355240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 6))
{var inst_355211 = (state_355215[2]);var state_355215__$1 = state_355215;var statearr_355223_355241 = state_355215__$1;(statearr_355223_355241[2] = inst_355211);
(statearr_355223_355241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 7))
{var inst_355196 = (state_355215[7]);var inst_355201 = (state_355215[2]);var inst_355202 = cljs.core.next.call(null,inst_355196);var inst_355196__$1 = inst_355202;var state_355215__$1 = (function (){var statearr_355224 = state_355215;(statearr_355224[7] = inst_355196__$1);
(statearr_355224[8] = inst_355201);
return statearr_355224;
})();var statearr_355225_355242 = state_355215__$1;(statearr_355225_355242[2] = null);
(statearr_355225_355242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 8))
{var inst_355206 = cljs.core.async.close_BANG_.call(null,ch);var state_355215__$1 = state_355215;var statearr_355226_355243 = state_355215__$1;(statearr_355226_355243[2] = inst_355206);
(statearr_355226_355243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 9))
{var state_355215__$1 = state_355215;var statearr_355227_355244 = state_355215__$1;(statearr_355227_355244[2] = null);
(statearr_355227_355244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355216 === 10))
{var inst_355209 = (state_355215[2]);var state_355215__$1 = state_355215;var statearr_355228_355245 = state_355215__$1;(statearr_355228_355245[2] = inst_355209);
(statearr_355228_355245[1] = 6);
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
var state_machine__18220__auto____0 = (function (){var statearr_355232 = [null,null,null,null,null,null,null,null,null];(statearr_355232[0] = state_machine__18220__auto__);
(statearr_355232[1] = 1);
return statearr_355232;
});
var state_machine__18220__auto____1 = (function (state_355215){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_355215);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e355233){if((e355233 instanceof Object))
{var ex__18223__auto__ = e355233;var statearr_355234_355246 = state_355215;(statearr_355234_355246[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e355233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__355247 = state_355215;
state_355215 = G__355247;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_355215){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_355215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_355235 = f__18290__auto__.call(null);(statearr_355235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_355235;
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
cljs.core.async.Mux = (function (){var obj355249 = {};return obj355249;
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
cljs.core.async.Mult = (function (){var obj355251 = {};return obj355251;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t355475 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t355475 = (function (cs,ch,mult,meta355476){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta355476 = meta355476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t355475.cljs$lang$type = true;
cljs.core.async.t355475.cljs$lang$ctorStr = "cljs.core.async/t355475";
cljs.core.async.t355475.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t355475");
});})(cs))
;
cljs.core.async.t355475.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t355475.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t355475.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t355475.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t355475.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t355475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t355475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_355477){var self__ = this;
var _355477__$1 = this;return self__.meta355476;
});})(cs))
;
cljs.core.async.t355475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_355477,meta355476__$1){var self__ = this;
var _355477__$1 = this;return (new cljs.core.async.t355475(self__.cs,self__.ch,self__.mult,meta355476__$1));
});})(cs))
;
cljs.core.async.__GT_t355475 = ((function (cs){
return (function __GT_t355475(cs__$1,ch__$1,mult__$1,meta355476){return (new cljs.core.async.t355475(cs__$1,ch__$1,mult__$1,meta355476));
});})(cs))
;
}
return (new cljs.core.async.t355475(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18289__auto___355698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_355612){var state_val_355613 = (state_355612[1]);if((state_val_355613 === 32))
{var inst_355556 = (state_355612[7]);var inst_355480 = (state_355612[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_355612,31,Object,null,30);var inst_355563 = cljs.core.async.put_BANG_.call(null,inst_355556,inst_355480,done);var state_355612__$1 = state_355612;var statearr_355614_355699 = state_355612__$1;(statearr_355614_355699[2] = inst_355563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 1))
{var state_355612__$1 = state_355612;var statearr_355615_355700 = state_355612__$1;(statearr_355615_355700[2] = null);
(statearr_355615_355700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 33))
{var inst_355569 = (state_355612[9]);var inst_355571 = cljs.core.chunked_seq_QMARK_.call(null,inst_355569);var state_355612__$1 = state_355612;if(inst_355571)
{var statearr_355616_355701 = state_355612__$1;(statearr_355616_355701[1] = 36);
} else
{var statearr_355617_355702 = state_355612__$1;(statearr_355617_355702[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 2))
{var state_355612__$1 = state_355612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_355612__$1,4,ch);
} else
{if((state_val_355613 === 34))
{var state_355612__$1 = state_355612;var statearr_355618_355703 = state_355612__$1;(statearr_355618_355703[2] = null);
(statearr_355618_355703[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 3))
{var inst_355610 = (state_355612[2]);var state_355612__$1 = state_355612;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355612__$1,inst_355610);
} else
{if((state_val_355613 === 35))
{var inst_355594 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355619_355704 = state_355612__$1;(statearr_355619_355704[2] = inst_355594);
(statearr_355619_355704[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 4))
{var inst_355480 = (state_355612[8]);var inst_355480__$1 = (state_355612[2]);var inst_355481 = (inst_355480__$1 == null);var state_355612__$1 = (function (){var statearr_355620 = state_355612;(statearr_355620[8] = inst_355480__$1);
return statearr_355620;
})();if(cljs.core.truth_(inst_355481))
{var statearr_355621_355705 = state_355612__$1;(statearr_355621_355705[1] = 5);
} else
{var statearr_355622_355706 = state_355612__$1;(statearr_355622_355706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 36))
{var inst_355569 = (state_355612[9]);var inst_355573 = cljs.core.chunk_first.call(null,inst_355569);var inst_355574 = cljs.core.chunk_rest.call(null,inst_355569);var inst_355575 = cljs.core.count.call(null,inst_355573);var inst_355548 = inst_355574;var inst_355549 = inst_355573;var inst_355550 = inst_355575;var inst_355551 = 0;var state_355612__$1 = (function (){var statearr_355623 = state_355612;(statearr_355623[10] = inst_355549);
(statearr_355623[11] = inst_355550);
(statearr_355623[12] = inst_355551);
(statearr_355623[13] = inst_355548);
return statearr_355623;
})();var statearr_355624_355707 = state_355612__$1;(statearr_355624_355707[2] = null);
(statearr_355624_355707[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 5))
{var inst_355487 = cljs.core.deref.call(null,cs);var inst_355488 = cljs.core.seq.call(null,inst_355487);var inst_355489 = inst_355488;var inst_355490 = null;var inst_355491 = 0;var inst_355492 = 0;var state_355612__$1 = (function (){var statearr_355625 = state_355612;(statearr_355625[14] = inst_355490);
(statearr_355625[15] = inst_355492);
(statearr_355625[16] = inst_355491);
(statearr_355625[17] = inst_355489);
return statearr_355625;
})();var statearr_355626_355708 = state_355612__$1;(statearr_355626_355708[2] = null);
(statearr_355626_355708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 37))
{var inst_355569 = (state_355612[9]);var inst_355578 = cljs.core.first.call(null,inst_355569);var state_355612__$1 = (function (){var statearr_355627 = state_355612;(statearr_355627[18] = inst_355578);
return statearr_355627;
})();var statearr_355628_355709 = state_355612__$1;(statearr_355628_355709[2] = null);
(statearr_355628_355709[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 6))
{var inst_355540 = (state_355612[19]);var inst_355539 = cljs.core.deref.call(null,cs);var inst_355540__$1 = cljs.core.keys.call(null,inst_355539);var inst_355541 = cljs.core.count.call(null,inst_355540__$1);var inst_355542 = cljs.core.reset_BANG_.call(null,dctr,inst_355541);var inst_355547 = cljs.core.seq.call(null,inst_355540__$1);var inst_355548 = inst_355547;var inst_355549 = null;var inst_355550 = 0;var inst_355551 = 0;var state_355612__$1 = (function (){var statearr_355629 = state_355612;(statearr_355629[10] = inst_355549);
(statearr_355629[20] = inst_355542);
(statearr_355629[19] = inst_355540__$1);
(statearr_355629[11] = inst_355550);
(statearr_355629[12] = inst_355551);
(statearr_355629[13] = inst_355548);
return statearr_355629;
})();var statearr_355630_355710 = state_355612__$1;(statearr_355630_355710[2] = null);
(statearr_355630_355710[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 38))
{var inst_355591 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355631_355711 = state_355612__$1;(statearr_355631_355711[2] = inst_355591);
(statearr_355631_355711[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 7))
{var inst_355608 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355632_355712 = state_355612__$1;(statearr_355632_355712[2] = inst_355608);
(statearr_355632_355712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 39))
{var inst_355569 = (state_355612[9]);var inst_355587 = (state_355612[2]);var inst_355588 = cljs.core.next.call(null,inst_355569);var inst_355548 = inst_355588;var inst_355549 = null;var inst_355550 = 0;var inst_355551 = 0;var state_355612__$1 = (function (){var statearr_355633 = state_355612;(statearr_355633[10] = inst_355549);
(statearr_355633[21] = inst_355587);
(statearr_355633[11] = inst_355550);
(statearr_355633[12] = inst_355551);
(statearr_355633[13] = inst_355548);
return statearr_355633;
})();var statearr_355634_355713 = state_355612__$1;(statearr_355634_355713[2] = null);
(statearr_355634_355713[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 8))
{var inst_355492 = (state_355612[15]);var inst_355491 = (state_355612[16]);var inst_355494 = (inst_355492 < inst_355491);var inst_355495 = inst_355494;var state_355612__$1 = state_355612;if(cljs.core.truth_(inst_355495))
{var statearr_355635_355714 = state_355612__$1;(statearr_355635_355714[1] = 10);
} else
{var statearr_355636_355715 = state_355612__$1;(statearr_355636_355715[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 40))
{var inst_355578 = (state_355612[18]);var inst_355579 = (state_355612[2]);var inst_355580 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_355581 = cljs.core.async.untap_STAR_.call(null,m,inst_355578);var state_355612__$1 = (function (){var statearr_355637 = state_355612;(statearr_355637[22] = inst_355579);
(statearr_355637[23] = inst_355580);
return statearr_355637;
})();var statearr_355638_355716 = state_355612__$1;(statearr_355638_355716[2] = inst_355581);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 9))
{var inst_355537 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355639_355717 = state_355612__$1;(statearr_355639_355717[2] = inst_355537);
(statearr_355639_355717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 41))
{var inst_355578 = (state_355612[18]);var inst_355480 = (state_355612[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_355612,40,Object,null,39);var inst_355585 = cljs.core.async.put_BANG_.call(null,inst_355578,inst_355480,done);var state_355612__$1 = state_355612;var statearr_355640_355718 = state_355612__$1;(statearr_355640_355718[2] = inst_355585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355612__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 10))
{var inst_355490 = (state_355612[14]);var inst_355492 = (state_355612[15]);var inst_355498 = cljs.core._nth.call(null,inst_355490,inst_355492);var inst_355499 = cljs.core.nth.call(null,inst_355498,0,null);var inst_355500 = cljs.core.nth.call(null,inst_355498,1,null);var state_355612__$1 = (function (){var statearr_355641 = state_355612;(statearr_355641[24] = inst_355499);
return statearr_355641;
})();if(cljs.core.truth_(inst_355500))
{var statearr_355642_355719 = state_355612__$1;(statearr_355642_355719[1] = 13);
} else
{var statearr_355643_355720 = state_355612__$1;(statearr_355643_355720[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 42))
{var state_355612__$1 = state_355612;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_355612__$1,45,dchan);
} else
{if((state_val_355613 === 11))
{var inst_355509 = (state_355612[25]);var inst_355489 = (state_355612[17]);var inst_355509__$1 = cljs.core.seq.call(null,inst_355489);var state_355612__$1 = (function (){var statearr_355644 = state_355612;(statearr_355644[25] = inst_355509__$1);
return statearr_355644;
})();if(inst_355509__$1)
{var statearr_355645_355721 = state_355612__$1;(statearr_355645_355721[1] = 16);
} else
{var statearr_355646_355722 = state_355612__$1;(statearr_355646_355722[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 43))
{var state_355612__$1 = state_355612;var statearr_355647_355723 = state_355612__$1;(statearr_355647_355723[2] = null);
(statearr_355647_355723[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 12))
{var inst_355535 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355648_355724 = state_355612__$1;(statearr_355648_355724[2] = inst_355535);
(statearr_355648_355724[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 44))
{var inst_355605 = (state_355612[2]);var state_355612__$1 = (function (){var statearr_355649 = state_355612;(statearr_355649[26] = inst_355605);
return statearr_355649;
})();var statearr_355650_355725 = state_355612__$1;(statearr_355650_355725[2] = null);
(statearr_355650_355725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 13))
{var inst_355499 = (state_355612[24]);var inst_355502 = cljs.core.async.close_BANG_.call(null,inst_355499);var state_355612__$1 = state_355612;var statearr_355651_355726 = state_355612__$1;(statearr_355651_355726[2] = inst_355502);
(statearr_355651_355726[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 45))
{var inst_355602 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355655_355727 = state_355612__$1;(statearr_355655_355727[2] = inst_355602);
(statearr_355655_355727[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 14))
{var state_355612__$1 = state_355612;var statearr_355656_355728 = state_355612__$1;(statearr_355656_355728[2] = null);
(statearr_355656_355728[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 15))
{var inst_355490 = (state_355612[14]);var inst_355492 = (state_355612[15]);var inst_355491 = (state_355612[16]);var inst_355489 = (state_355612[17]);var inst_355505 = (state_355612[2]);var inst_355506 = (inst_355492 + 1);var tmp355652 = inst_355490;var tmp355653 = inst_355491;var tmp355654 = inst_355489;var inst_355489__$1 = tmp355654;var inst_355490__$1 = tmp355652;var inst_355491__$1 = tmp355653;var inst_355492__$1 = inst_355506;var state_355612__$1 = (function (){var statearr_355657 = state_355612;(statearr_355657[27] = inst_355505);
(statearr_355657[14] = inst_355490__$1);
(statearr_355657[15] = inst_355492__$1);
(statearr_355657[16] = inst_355491__$1);
(statearr_355657[17] = inst_355489__$1);
return statearr_355657;
})();var statearr_355658_355729 = state_355612__$1;(statearr_355658_355729[2] = null);
(statearr_355658_355729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 16))
{var inst_355509 = (state_355612[25]);var inst_355511 = cljs.core.chunked_seq_QMARK_.call(null,inst_355509);var state_355612__$1 = state_355612;if(inst_355511)
{var statearr_355659_355730 = state_355612__$1;(statearr_355659_355730[1] = 19);
} else
{var statearr_355660_355731 = state_355612__$1;(statearr_355660_355731[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 17))
{var state_355612__$1 = state_355612;var statearr_355661_355732 = state_355612__$1;(statearr_355661_355732[2] = null);
(statearr_355661_355732[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 18))
{var inst_355533 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355662_355733 = state_355612__$1;(statearr_355662_355733[2] = inst_355533);
(statearr_355662_355733[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 19))
{var inst_355509 = (state_355612[25]);var inst_355513 = cljs.core.chunk_first.call(null,inst_355509);var inst_355514 = cljs.core.chunk_rest.call(null,inst_355509);var inst_355515 = cljs.core.count.call(null,inst_355513);var inst_355489 = inst_355514;var inst_355490 = inst_355513;var inst_355491 = inst_355515;var inst_355492 = 0;var state_355612__$1 = (function (){var statearr_355663 = state_355612;(statearr_355663[14] = inst_355490);
(statearr_355663[15] = inst_355492);
(statearr_355663[16] = inst_355491);
(statearr_355663[17] = inst_355489);
return statearr_355663;
})();var statearr_355664_355734 = state_355612__$1;(statearr_355664_355734[2] = null);
(statearr_355664_355734[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 20))
{var inst_355509 = (state_355612[25]);var inst_355519 = cljs.core.first.call(null,inst_355509);var inst_355520 = cljs.core.nth.call(null,inst_355519,0,null);var inst_355521 = cljs.core.nth.call(null,inst_355519,1,null);var state_355612__$1 = (function (){var statearr_355665 = state_355612;(statearr_355665[28] = inst_355520);
return statearr_355665;
})();if(cljs.core.truth_(inst_355521))
{var statearr_355666_355735 = state_355612__$1;(statearr_355666_355735[1] = 22);
} else
{var statearr_355667_355736 = state_355612__$1;(statearr_355667_355736[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 21))
{var inst_355530 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355668_355737 = state_355612__$1;(statearr_355668_355737[2] = inst_355530);
(statearr_355668_355737[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 22))
{var inst_355520 = (state_355612[28]);var inst_355523 = cljs.core.async.close_BANG_.call(null,inst_355520);var state_355612__$1 = state_355612;var statearr_355669_355738 = state_355612__$1;(statearr_355669_355738[2] = inst_355523);
(statearr_355669_355738[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 23))
{var state_355612__$1 = state_355612;var statearr_355670_355739 = state_355612__$1;(statearr_355670_355739[2] = null);
(statearr_355670_355739[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 24))
{var inst_355509 = (state_355612[25]);var inst_355526 = (state_355612[2]);var inst_355527 = cljs.core.next.call(null,inst_355509);var inst_355489 = inst_355527;var inst_355490 = null;var inst_355491 = 0;var inst_355492 = 0;var state_355612__$1 = (function (){var statearr_355671 = state_355612;(statearr_355671[14] = inst_355490);
(statearr_355671[15] = inst_355492);
(statearr_355671[16] = inst_355491);
(statearr_355671[29] = inst_355526);
(statearr_355671[17] = inst_355489);
return statearr_355671;
})();var statearr_355672_355740 = state_355612__$1;(statearr_355672_355740[2] = null);
(statearr_355672_355740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 25))
{var inst_355550 = (state_355612[11]);var inst_355551 = (state_355612[12]);var inst_355553 = (inst_355551 < inst_355550);var inst_355554 = inst_355553;var state_355612__$1 = state_355612;if(cljs.core.truth_(inst_355554))
{var statearr_355673_355741 = state_355612__$1;(statearr_355673_355741[1] = 27);
} else
{var statearr_355674_355742 = state_355612__$1;(statearr_355674_355742[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 26))
{var inst_355540 = (state_355612[19]);var inst_355598 = (state_355612[2]);var inst_355599 = cljs.core.seq.call(null,inst_355540);var state_355612__$1 = (function (){var statearr_355675 = state_355612;(statearr_355675[30] = inst_355598);
return statearr_355675;
})();if(inst_355599)
{var statearr_355676_355743 = state_355612__$1;(statearr_355676_355743[1] = 42);
} else
{var statearr_355677_355744 = state_355612__$1;(statearr_355677_355744[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 27))
{var inst_355549 = (state_355612[10]);var inst_355551 = (state_355612[12]);var inst_355556 = cljs.core._nth.call(null,inst_355549,inst_355551);var state_355612__$1 = (function (){var statearr_355678 = state_355612;(statearr_355678[7] = inst_355556);
return statearr_355678;
})();var statearr_355679_355745 = state_355612__$1;(statearr_355679_355745[2] = null);
(statearr_355679_355745[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 28))
{var inst_355569 = (state_355612[9]);var inst_355548 = (state_355612[13]);var inst_355569__$1 = cljs.core.seq.call(null,inst_355548);var state_355612__$1 = (function (){var statearr_355683 = state_355612;(statearr_355683[9] = inst_355569__$1);
return statearr_355683;
})();if(inst_355569__$1)
{var statearr_355684_355746 = state_355612__$1;(statearr_355684_355746[1] = 33);
} else
{var statearr_355685_355747 = state_355612__$1;(statearr_355685_355747[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 29))
{var inst_355596 = (state_355612[2]);var state_355612__$1 = state_355612;var statearr_355686_355748 = state_355612__$1;(statearr_355686_355748[2] = inst_355596);
(statearr_355686_355748[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 30))
{var inst_355549 = (state_355612[10]);var inst_355550 = (state_355612[11]);var inst_355551 = (state_355612[12]);var inst_355548 = (state_355612[13]);var inst_355565 = (state_355612[2]);var inst_355566 = (inst_355551 + 1);var tmp355680 = inst_355549;var tmp355681 = inst_355550;var tmp355682 = inst_355548;var inst_355548__$1 = tmp355682;var inst_355549__$1 = tmp355680;var inst_355550__$1 = tmp355681;var inst_355551__$1 = inst_355566;var state_355612__$1 = (function (){var statearr_355687 = state_355612;(statearr_355687[10] = inst_355549__$1);
(statearr_355687[11] = inst_355550__$1);
(statearr_355687[12] = inst_355551__$1);
(statearr_355687[31] = inst_355565);
(statearr_355687[13] = inst_355548__$1);
return statearr_355687;
})();var statearr_355688_355749 = state_355612__$1;(statearr_355688_355749[2] = null);
(statearr_355688_355749[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355613 === 31))
{var inst_355556 = (state_355612[7]);var inst_355557 = (state_355612[2]);var inst_355558 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_355559 = cljs.core.async.untap_STAR_.call(null,m,inst_355556);var state_355612__$1 = (function (){var statearr_355689 = state_355612;(statearr_355689[32] = inst_355557);
(statearr_355689[33] = inst_355558);
return statearr_355689;
})();var statearr_355690_355750 = state_355612__$1;(statearr_355690_355750[2] = inst_355559);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355612__$1);
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
var state_machine__18220__auto____0 = (function (){var statearr_355694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_355694[0] = state_machine__18220__auto__);
(statearr_355694[1] = 1);
return statearr_355694;
});
var state_machine__18220__auto____1 = (function (state_355612){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_355612);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e355695){if((e355695 instanceof Object))
{var ex__18223__auto__ = e355695;var statearr_355696_355751 = state_355612;(statearr_355696_355751[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355612);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e355695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__355752 = state_355612;
state_355612 = G__355752;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_355612){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_355612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_355697 = f__18290__auto__.call(null);(statearr_355697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___355698);
return statearr_355697;
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
cljs.core.async.Mix = (function (){var obj355754 = {};return obj355754;
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
;var m = (function (){if(typeof cljs.core.async.t355864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t355864 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta355865){
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
this.meta355865 = meta355865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t355864.cljs$lang$type = true;
cljs.core.async.t355864.cljs$lang$ctorStr = "cljs.core.async/t355864";
cljs.core.async.t355864.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t355864");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t355864.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t355864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_355866){var self__ = this;
var _355866__$1 = this;return self__.meta355865;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t355864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_355866,meta355865__$1){var self__ = this;
var _355866__$1 = this;return (new cljs.core.async.t355864(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta355865__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t355864 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t355864(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta355865){return (new cljs.core.async.t355864(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta355865));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t355864(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18289__auto___355973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_355931){var state_val_355932 = (state_355931[1]);if((state_val_355932 === 1))
{var inst_355870 = (state_355931[7]);var inst_355870__$1 = calc_state.call(null);var inst_355871 = cljs.core.seq_QMARK_.call(null,inst_355870__$1);var state_355931__$1 = (function (){var statearr_355933 = state_355931;(statearr_355933[7] = inst_355870__$1);
return statearr_355933;
})();if(inst_355871)
{var statearr_355934_355974 = state_355931__$1;(statearr_355934_355974[1] = 2);
} else
{var statearr_355935_355975 = state_355931__$1;(statearr_355935_355975[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 2))
{var inst_355870 = (state_355931[7]);var inst_355873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_355870);var state_355931__$1 = state_355931;var statearr_355936_355976 = state_355931__$1;(statearr_355936_355976[2] = inst_355873);
(statearr_355936_355976[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 3))
{var inst_355870 = (state_355931[7]);var state_355931__$1 = state_355931;var statearr_355937_355977 = state_355931__$1;(statearr_355937_355977[2] = inst_355870);
(statearr_355937_355977[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 4))
{var inst_355870 = (state_355931[7]);var inst_355876 = (state_355931[2]);var inst_355877 = cljs.core.get.call(null,inst_355876,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_355878 = cljs.core.get.call(null,inst_355876,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_355879 = cljs.core.get.call(null,inst_355876,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_355880 = inst_355870;var state_355931__$1 = (function (){var statearr_355938 = state_355931;(statearr_355938[8] = inst_355879);
(statearr_355938[9] = inst_355877);
(statearr_355938[10] = inst_355878);
(statearr_355938[11] = inst_355880);
return statearr_355938;
})();var statearr_355939_355978 = state_355931__$1;(statearr_355939_355978[2] = null);
(statearr_355939_355978[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 5))
{var inst_355880 = (state_355931[11]);var inst_355883 = cljs.core.seq_QMARK_.call(null,inst_355880);var state_355931__$1 = state_355931;if(inst_355883)
{var statearr_355940_355979 = state_355931__$1;(statearr_355940_355979[1] = 7);
} else
{var statearr_355941_355980 = state_355931__$1;(statearr_355941_355980[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 6))
{var inst_355929 = (state_355931[2]);var state_355931__$1 = state_355931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_355931__$1,inst_355929);
} else
{if((state_val_355932 === 7))
{var inst_355880 = (state_355931[11]);var inst_355885 = cljs.core.apply.call(null,cljs.core.hash_map,inst_355880);var state_355931__$1 = state_355931;var statearr_355942_355981 = state_355931__$1;(statearr_355942_355981[2] = inst_355885);
(statearr_355942_355981[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 8))
{var inst_355880 = (state_355931[11]);var state_355931__$1 = state_355931;var statearr_355943_355982 = state_355931__$1;(statearr_355943_355982[2] = inst_355880);
(statearr_355943_355982[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 9))
{var inst_355888 = (state_355931[12]);var inst_355888__$1 = (state_355931[2]);var inst_355889 = cljs.core.get.call(null,inst_355888__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_355890 = cljs.core.get.call(null,inst_355888__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_355891 = cljs.core.get.call(null,inst_355888__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_355931__$1 = (function (){var statearr_355944 = state_355931;(statearr_355944[13] = inst_355891);
(statearr_355944[14] = inst_355890);
(statearr_355944[12] = inst_355888__$1);
return statearr_355944;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_355931__$1,10,inst_355889);
} else
{if((state_val_355932 === 10))
{var inst_355896 = (state_355931[15]);var inst_355895 = (state_355931[16]);var inst_355894 = (state_355931[2]);var inst_355895__$1 = cljs.core.nth.call(null,inst_355894,0,null);var inst_355896__$1 = cljs.core.nth.call(null,inst_355894,1,null);var inst_355897 = (inst_355895__$1 == null);var inst_355898 = cljs.core._EQ_.call(null,inst_355896__$1,change);var inst_355899 = (inst_355897) || (inst_355898);var state_355931__$1 = (function (){var statearr_355945 = state_355931;(statearr_355945[15] = inst_355896__$1);
(statearr_355945[16] = inst_355895__$1);
return statearr_355945;
})();if(cljs.core.truth_(inst_355899))
{var statearr_355946_355983 = state_355931__$1;(statearr_355946_355983[1] = 11);
} else
{var statearr_355947_355984 = state_355931__$1;(statearr_355947_355984[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 11))
{var inst_355895 = (state_355931[16]);var inst_355901 = (inst_355895 == null);var state_355931__$1 = state_355931;if(cljs.core.truth_(inst_355901))
{var statearr_355948_355985 = state_355931__$1;(statearr_355948_355985[1] = 14);
} else
{var statearr_355949_355986 = state_355931__$1;(statearr_355949_355986[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 12))
{var inst_355891 = (state_355931[13]);var inst_355896 = (state_355931[15]);var inst_355910 = (state_355931[17]);var inst_355910__$1 = inst_355891.call(null,inst_355896);var state_355931__$1 = (function (){var statearr_355950 = state_355931;(statearr_355950[17] = inst_355910__$1);
return statearr_355950;
})();if(cljs.core.truth_(inst_355910__$1))
{var statearr_355951_355987 = state_355931__$1;(statearr_355951_355987[1] = 17);
} else
{var statearr_355952_355988 = state_355931__$1;(statearr_355952_355988[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 13))
{var inst_355927 = (state_355931[2]);var state_355931__$1 = state_355931;var statearr_355953_355989 = state_355931__$1;(statearr_355953_355989[2] = inst_355927);
(statearr_355953_355989[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 14))
{var inst_355896 = (state_355931[15]);var inst_355903 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_355896);var state_355931__$1 = state_355931;var statearr_355954_355990 = state_355931__$1;(statearr_355954_355990[2] = inst_355903);
(statearr_355954_355990[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 15))
{var state_355931__$1 = state_355931;var statearr_355955_355991 = state_355931__$1;(statearr_355955_355991[2] = null);
(statearr_355955_355991[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 16))
{var inst_355906 = (state_355931[2]);var inst_355907 = calc_state.call(null);var inst_355880 = inst_355907;var state_355931__$1 = (function (){var statearr_355956 = state_355931;(statearr_355956[18] = inst_355906);
(statearr_355956[11] = inst_355880);
return statearr_355956;
})();var statearr_355957_355992 = state_355931__$1;(statearr_355957_355992[2] = null);
(statearr_355957_355992[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 17))
{var inst_355910 = (state_355931[17]);var state_355931__$1 = state_355931;var statearr_355958_355993 = state_355931__$1;(statearr_355958_355993[2] = inst_355910);
(statearr_355958_355993[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 18))
{var inst_355891 = (state_355931[13]);var inst_355890 = (state_355931[14]);var inst_355896 = (state_355931[15]);var inst_355913 = cljs.core.empty_QMARK_.call(null,inst_355891);var inst_355914 = inst_355890.call(null,inst_355896);var inst_355915 = cljs.core.not.call(null,inst_355914);var inst_355916 = (inst_355913) && (inst_355915);var state_355931__$1 = state_355931;var statearr_355959_355994 = state_355931__$1;(statearr_355959_355994[2] = inst_355916);
(statearr_355959_355994[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 19))
{var inst_355918 = (state_355931[2]);var state_355931__$1 = state_355931;if(cljs.core.truth_(inst_355918))
{var statearr_355960_355995 = state_355931__$1;(statearr_355960_355995[1] = 20);
} else
{var statearr_355961_355996 = state_355931__$1;(statearr_355961_355996[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 20))
{var inst_355895 = (state_355931[16]);var state_355931__$1 = state_355931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_355931__$1,23,out,inst_355895);
} else
{if((state_val_355932 === 21))
{var state_355931__$1 = state_355931;var statearr_355962_355997 = state_355931__$1;(statearr_355962_355997[2] = null);
(statearr_355962_355997[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 22))
{var inst_355888 = (state_355931[12]);var inst_355924 = (state_355931[2]);var inst_355880 = inst_355888;var state_355931__$1 = (function (){var statearr_355963 = state_355931;(statearr_355963[19] = inst_355924);
(statearr_355963[11] = inst_355880);
return statearr_355963;
})();var statearr_355964_355998 = state_355931__$1;(statearr_355964_355998[2] = null);
(statearr_355964_355998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_355932 === 23))
{var inst_355921 = (state_355931[2]);var state_355931__$1 = state_355931;var statearr_355965_355999 = state_355931__$1;(statearr_355965_355999[2] = inst_355921);
(statearr_355965_355999[1] = 22);
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
var state_machine__18220__auto____0 = (function (){var statearr_355969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_355969[0] = state_machine__18220__auto__);
(statearr_355969[1] = 1);
return statearr_355969;
});
var state_machine__18220__auto____1 = (function (state_355931){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_355931);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e355970){if((e355970 instanceof Object))
{var ex__18223__auto__ = e355970;var statearr_355971_356000 = state_355931;(statearr_355971_356000[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_355931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e355970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356001 = state_355931;
state_355931 = G__356001;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_355931){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_355931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_355972 = f__18290__auto__.call(null);(statearr_355972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___355973);
return statearr_355972;
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
cljs.core.async.Pub = (function (){var obj356003 = {};return obj356003;
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
return (function (p1__356004_SHARP_){if(cljs.core.truth_(p1__356004_SHARP_.call(null,topic)))
{return p1__356004_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__356004_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13979__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t356129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t356129 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta356130){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta356130 = meta356130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t356129.cljs$lang$type = true;
cljs.core.async.t356129.cljs$lang$ctorStr = "cljs.core.async/t356129";
cljs.core.async.t356129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"cljs.core.async/t356129");
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t356129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t356129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_356131){var self__ = this;
var _356131__$1 = this;return self__.meta356130;
});})(mults,ensure_mult))
;
cljs.core.async.t356129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_356131,meta356130__$1){var self__ = this;
var _356131__$1 = this;return (new cljs.core.async.t356129(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta356130__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t356129 = ((function (mults,ensure_mult){
return (function __GT_t356129(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta356130){return (new cljs.core.async.t356129(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta356130));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t356129(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18289__auto___356253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_356205){var state_val_356206 = (state_356205[1]);if((state_val_356206 === 1))
{var state_356205__$1 = state_356205;var statearr_356207_356254 = state_356205__$1;(statearr_356207_356254[2] = null);
(statearr_356207_356254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 2))
{var state_356205__$1 = state_356205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356205__$1,4,ch);
} else
{if((state_val_356206 === 3))
{var inst_356203 = (state_356205[2]);var state_356205__$1 = state_356205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356205__$1,inst_356203);
} else
{if((state_val_356206 === 4))
{var inst_356134 = (state_356205[7]);var inst_356134__$1 = (state_356205[2]);var inst_356135 = (inst_356134__$1 == null);var state_356205__$1 = (function (){var statearr_356208 = state_356205;(statearr_356208[7] = inst_356134__$1);
return statearr_356208;
})();if(cljs.core.truth_(inst_356135))
{var statearr_356209_356255 = state_356205__$1;(statearr_356209_356255[1] = 5);
} else
{var statearr_356210_356256 = state_356205__$1;(statearr_356210_356256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 5))
{var inst_356141 = cljs.core.deref.call(null,mults);var inst_356142 = cljs.core.vals.call(null,inst_356141);var inst_356143 = cljs.core.seq.call(null,inst_356142);var inst_356144 = inst_356143;var inst_356145 = null;var inst_356146 = 0;var inst_356147 = 0;var state_356205__$1 = (function (){var statearr_356211 = state_356205;(statearr_356211[8] = inst_356144);
(statearr_356211[9] = inst_356145);
(statearr_356211[10] = inst_356147);
(statearr_356211[11] = inst_356146);
return statearr_356211;
})();var statearr_356212_356257 = state_356205__$1;(statearr_356212_356257[2] = null);
(statearr_356212_356257[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 6))
{var inst_356182 = (state_356205[12]);var inst_356184 = (state_356205[13]);var inst_356134 = (state_356205[7]);var inst_356182__$1 = topic_fn.call(null,inst_356134);var inst_356183 = cljs.core.deref.call(null,mults);var inst_356184__$1 = cljs.core.get.call(null,inst_356183,inst_356182__$1);var state_356205__$1 = (function (){var statearr_356213 = state_356205;(statearr_356213[12] = inst_356182__$1);
(statearr_356213[13] = inst_356184__$1);
return statearr_356213;
})();if(cljs.core.truth_(inst_356184__$1))
{var statearr_356214_356258 = state_356205__$1;(statearr_356214_356258[1] = 19);
} else
{var statearr_356215_356259 = state_356205__$1;(statearr_356215_356259[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 7))
{var inst_356201 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356216_356260 = state_356205__$1;(statearr_356216_356260[2] = inst_356201);
(statearr_356216_356260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 8))
{var inst_356147 = (state_356205[10]);var inst_356146 = (state_356205[11]);var inst_356149 = (inst_356147 < inst_356146);var inst_356150 = inst_356149;var state_356205__$1 = state_356205;if(cljs.core.truth_(inst_356150))
{var statearr_356220_356261 = state_356205__$1;(statearr_356220_356261[1] = 10);
} else
{var statearr_356221_356262 = state_356205__$1;(statearr_356221_356262[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 9))
{var inst_356180 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356222_356263 = state_356205__$1;(statearr_356222_356263[2] = inst_356180);
(statearr_356222_356263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 10))
{var inst_356144 = (state_356205[8]);var inst_356145 = (state_356205[9]);var inst_356147 = (state_356205[10]);var inst_356146 = (state_356205[11]);var inst_356152 = cljs.core._nth.call(null,inst_356145,inst_356147);var inst_356153 = cljs.core.async.muxch_STAR_.call(null,inst_356152);var inst_356154 = cljs.core.async.close_BANG_.call(null,inst_356153);var inst_356155 = (inst_356147 + 1);var tmp356217 = inst_356144;var tmp356218 = inst_356145;var tmp356219 = inst_356146;var inst_356144__$1 = tmp356217;var inst_356145__$1 = tmp356218;var inst_356146__$1 = tmp356219;var inst_356147__$1 = inst_356155;var state_356205__$1 = (function (){var statearr_356223 = state_356205;(statearr_356223[8] = inst_356144__$1);
(statearr_356223[9] = inst_356145__$1);
(statearr_356223[14] = inst_356154);
(statearr_356223[10] = inst_356147__$1);
(statearr_356223[11] = inst_356146__$1);
return statearr_356223;
})();var statearr_356224_356264 = state_356205__$1;(statearr_356224_356264[2] = null);
(statearr_356224_356264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 11))
{var inst_356144 = (state_356205[8]);var inst_356158 = (state_356205[15]);var inst_356158__$1 = cljs.core.seq.call(null,inst_356144);var state_356205__$1 = (function (){var statearr_356225 = state_356205;(statearr_356225[15] = inst_356158__$1);
return statearr_356225;
})();if(inst_356158__$1)
{var statearr_356226_356265 = state_356205__$1;(statearr_356226_356265[1] = 13);
} else
{var statearr_356227_356266 = state_356205__$1;(statearr_356227_356266[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 12))
{var inst_356178 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356228_356267 = state_356205__$1;(statearr_356228_356267[2] = inst_356178);
(statearr_356228_356267[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 13))
{var inst_356158 = (state_356205[15]);var inst_356160 = cljs.core.chunked_seq_QMARK_.call(null,inst_356158);var state_356205__$1 = state_356205;if(inst_356160)
{var statearr_356229_356268 = state_356205__$1;(statearr_356229_356268[1] = 16);
} else
{var statearr_356230_356269 = state_356205__$1;(statearr_356230_356269[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 14))
{var state_356205__$1 = state_356205;var statearr_356231_356270 = state_356205__$1;(statearr_356231_356270[2] = null);
(statearr_356231_356270[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 15))
{var inst_356176 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356232_356271 = state_356205__$1;(statearr_356232_356271[2] = inst_356176);
(statearr_356232_356271[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 16))
{var inst_356158 = (state_356205[15]);var inst_356162 = cljs.core.chunk_first.call(null,inst_356158);var inst_356163 = cljs.core.chunk_rest.call(null,inst_356158);var inst_356164 = cljs.core.count.call(null,inst_356162);var inst_356144 = inst_356163;var inst_356145 = inst_356162;var inst_356146 = inst_356164;var inst_356147 = 0;var state_356205__$1 = (function (){var statearr_356233 = state_356205;(statearr_356233[8] = inst_356144);
(statearr_356233[9] = inst_356145);
(statearr_356233[10] = inst_356147);
(statearr_356233[11] = inst_356146);
return statearr_356233;
})();var statearr_356234_356272 = state_356205__$1;(statearr_356234_356272[2] = null);
(statearr_356234_356272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 17))
{var inst_356158 = (state_356205[15]);var inst_356167 = cljs.core.first.call(null,inst_356158);var inst_356168 = cljs.core.async.muxch_STAR_.call(null,inst_356167);var inst_356169 = cljs.core.async.close_BANG_.call(null,inst_356168);var inst_356170 = cljs.core.next.call(null,inst_356158);var inst_356144 = inst_356170;var inst_356145 = null;var inst_356146 = 0;var inst_356147 = 0;var state_356205__$1 = (function (){var statearr_356235 = state_356205;(statearr_356235[8] = inst_356144);
(statearr_356235[9] = inst_356145);
(statearr_356235[10] = inst_356147);
(statearr_356235[11] = inst_356146);
(statearr_356235[16] = inst_356169);
return statearr_356235;
})();var statearr_356236_356273 = state_356205__$1;(statearr_356236_356273[2] = null);
(statearr_356236_356273[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 18))
{var inst_356173 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356237_356274 = state_356205__$1;(statearr_356237_356274[2] = inst_356173);
(statearr_356237_356274[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 19))
{var state_356205__$1 = state_356205;var statearr_356238_356275 = state_356205__$1;(statearr_356238_356275[2] = null);
(statearr_356238_356275[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 20))
{var state_356205__$1 = state_356205;var statearr_356239_356276 = state_356205__$1;(statearr_356239_356276[2] = null);
(statearr_356239_356276[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 21))
{var inst_356198 = (state_356205[2]);var state_356205__$1 = (function (){var statearr_356240 = state_356205;(statearr_356240[17] = inst_356198);
return statearr_356240;
})();var statearr_356241_356277 = state_356205__$1;(statearr_356241_356277[2] = null);
(statearr_356241_356277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 22))
{var inst_356195 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356242_356278 = state_356205__$1;(statearr_356242_356278[2] = inst_356195);
(statearr_356242_356278[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 23))
{var inst_356182 = (state_356205[12]);var inst_356186 = (state_356205[2]);var inst_356187 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_356182);var state_356205__$1 = (function (){var statearr_356243 = state_356205;(statearr_356243[18] = inst_356186);
return statearr_356243;
})();var statearr_356244_356279 = state_356205__$1;(statearr_356244_356279[2] = inst_356187);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356205__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356206 === 24))
{var inst_356184 = (state_356205[13]);var inst_356134 = (state_356205[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_356205,23,Object,null,22);var inst_356191 = cljs.core.async.muxch_STAR_.call(null,inst_356184);var state_356205__$1 = state_356205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356205__$1,25,inst_356191,inst_356134);
} else
{if((state_val_356206 === 25))
{var inst_356193 = (state_356205[2]);var state_356205__$1 = state_356205;var statearr_356245_356280 = state_356205__$1;(statearr_356245_356280[2] = inst_356193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356205__$1);
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
var state_machine__18220__auto____0 = (function (){var statearr_356249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_356249[0] = state_machine__18220__auto__);
(statearr_356249[1] = 1);
return statearr_356249;
});
var state_machine__18220__auto____1 = (function (state_356205){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_356205);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e356250){if((e356250 instanceof Object))
{var ex__18223__auto__ = e356250;var statearr_356251_356281 = state_356205;(statearr_356251_356281[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e356250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356282 = state_356205;
state_356205 = G__356282;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_356205){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_356205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_356252 = f__18290__auto__.call(null);(statearr_356252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___356253);
return statearr_356252;
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
,cljs.core.range.call(null,cnt));var c__18289__auto___356419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_356389){var state_val_356390 = (state_356389[1]);if((state_val_356390 === 1))
{var state_356389__$1 = state_356389;var statearr_356391_356420 = state_356389__$1;(statearr_356391_356420[2] = null);
(statearr_356391_356420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 2))
{var inst_356352 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_356353 = 0;var state_356389__$1 = (function (){var statearr_356392 = state_356389;(statearr_356392[7] = inst_356353);
(statearr_356392[8] = inst_356352);
return statearr_356392;
})();var statearr_356393_356421 = state_356389__$1;(statearr_356393_356421[2] = null);
(statearr_356393_356421[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 3))
{var inst_356387 = (state_356389[2]);var state_356389__$1 = state_356389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356389__$1,inst_356387);
} else
{if((state_val_356390 === 4))
{var inst_356353 = (state_356389[7]);var inst_356355 = (inst_356353 < cnt);var state_356389__$1 = state_356389;if(cljs.core.truth_(inst_356355))
{var statearr_356394_356422 = state_356389__$1;(statearr_356394_356422[1] = 6);
} else
{var statearr_356395_356423 = state_356389__$1;(statearr_356395_356423[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 5))
{var inst_356373 = (state_356389[2]);var state_356389__$1 = (function (){var statearr_356396 = state_356389;(statearr_356396[9] = inst_356373);
return statearr_356396;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356389__$1,12,dchan);
} else
{if((state_val_356390 === 6))
{var state_356389__$1 = state_356389;var statearr_356397_356424 = state_356389__$1;(statearr_356397_356424[2] = null);
(statearr_356397_356424[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 7))
{var state_356389__$1 = state_356389;var statearr_356398_356425 = state_356389__$1;(statearr_356398_356425[2] = null);
(statearr_356398_356425[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 8))
{var inst_356371 = (state_356389[2]);var state_356389__$1 = state_356389;var statearr_356399_356426 = state_356389__$1;(statearr_356399_356426[2] = inst_356371);
(statearr_356399_356426[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 9))
{var inst_356353 = (state_356389[7]);var inst_356366 = (state_356389[2]);var inst_356367 = (inst_356353 + 1);var inst_356353__$1 = inst_356367;var state_356389__$1 = (function (){var statearr_356400 = state_356389;(statearr_356400[7] = inst_356353__$1);
(statearr_356400[10] = inst_356366);
return statearr_356400;
})();var statearr_356401_356427 = state_356389__$1;(statearr_356401_356427[2] = null);
(statearr_356401_356427[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 10))
{var inst_356357 = (state_356389[2]);var inst_356358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_356389__$1 = (function (){var statearr_356402 = state_356389;(statearr_356402[11] = inst_356357);
return statearr_356402;
})();var statearr_356403_356428 = state_356389__$1;(statearr_356403_356428[2] = inst_356358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 11))
{var inst_356353 = (state_356389[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_356389,10,Object,null,9);var inst_356362 = chs__$1.call(null,inst_356353);var inst_356363 = done.call(null,inst_356353);var inst_356364 = cljs.core.async.take_BANG_.call(null,inst_356362,inst_356363);var state_356389__$1 = state_356389;var statearr_356404_356429 = state_356389__$1;(statearr_356404_356429[2] = inst_356364);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356389__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 12))
{var inst_356375 = (state_356389[12]);var inst_356375__$1 = (state_356389[2]);var inst_356376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_356375__$1);var state_356389__$1 = (function (){var statearr_356405 = state_356389;(statearr_356405[12] = inst_356375__$1);
return statearr_356405;
})();if(cljs.core.truth_(inst_356376))
{var statearr_356406_356430 = state_356389__$1;(statearr_356406_356430[1] = 13);
} else
{var statearr_356407_356431 = state_356389__$1;(statearr_356407_356431[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 13))
{var inst_356378 = cljs.core.async.close_BANG_.call(null,out);var state_356389__$1 = state_356389;var statearr_356408_356432 = state_356389__$1;(statearr_356408_356432[2] = inst_356378);
(statearr_356408_356432[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 14))
{var inst_356375 = (state_356389[12]);var inst_356380 = cljs.core.apply.call(null,f,inst_356375);var state_356389__$1 = state_356389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356389__$1,16,out,inst_356380);
} else
{if((state_val_356390 === 15))
{var inst_356385 = (state_356389[2]);var state_356389__$1 = state_356389;var statearr_356409_356433 = state_356389__$1;(statearr_356409_356433[2] = inst_356385);
(statearr_356409_356433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356390 === 16))
{var inst_356382 = (state_356389[2]);var state_356389__$1 = (function (){var statearr_356410 = state_356389;(statearr_356410[13] = inst_356382);
return statearr_356410;
})();var statearr_356411_356434 = state_356389__$1;(statearr_356411_356434[2] = null);
(statearr_356411_356434[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_356415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_356415[0] = state_machine__18220__auto__);
(statearr_356415[1] = 1);
return statearr_356415;
});
var state_machine__18220__auto____1 = (function (state_356389){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_356389);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e356416){if((e356416 instanceof Object))
{var ex__18223__auto__ = e356416;var statearr_356417_356435 = state_356389;(statearr_356417_356435[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e356416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356436 = state_356389;
state_356389 = G__356436;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_356389){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_356389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_356418 = f__18290__auto__.call(null);(statearr_356418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___356419);
return statearr_356418;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___356544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_356520){var state_val_356521 = (state_356520[1]);if((state_val_356521 === 1))
{var inst_356491 = cljs.core.vec.call(null,chs);var inst_356492 = inst_356491;var state_356520__$1 = (function (){var statearr_356522 = state_356520;(statearr_356522[7] = inst_356492);
return statearr_356522;
})();var statearr_356523_356545 = state_356520__$1;(statearr_356523_356545[2] = null);
(statearr_356523_356545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 2))
{var inst_356492 = (state_356520[7]);var inst_356494 = cljs.core.count.call(null,inst_356492);var inst_356495 = (inst_356494 > 0);var state_356520__$1 = state_356520;if(cljs.core.truth_(inst_356495))
{var statearr_356524_356546 = state_356520__$1;(statearr_356524_356546[1] = 4);
} else
{var statearr_356525_356547 = state_356520__$1;(statearr_356525_356547[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 3))
{var inst_356518 = (state_356520[2]);var state_356520__$1 = state_356520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356520__$1,inst_356518);
} else
{if((state_val_356521 === 4))
{var inst_356492 = (state_356520[7]);var state_356520__$1 = state_356520;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_356520__$1,7,inst_356492);
} else
{if((state_val_356521 === 5))
{var inst_356514 = cljs.core.async.close_BANG_.call(null,out);var state_356520__$1 = state_356520;var statearr_356526_356548 = state_356520__$1;(statearr_356526_356548[2] = inst_356514);
(statearr_356526_356548[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 6))
{var inst_356516 = (state_356520[2]);var state_356520__$1 = state_356520;var statearr_356527_356549 = state_356520__$1;(statearr_356527_356549[2] = inst_356516);
(statearr_356527_356549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 7))
{var inst_356500 = (state_356520[8]);var inst_356499 = (state_356520[9]);var inst_356499__$1 = (state_356520[2]);var inst_356500__$1 = cljs.core.nth.call(null,inst_356499__$1,0,null);var inst_356501 = cljs.core.nth.call(null,inst_356499__$1,1,null);var inst_356502 = (inst_356500__$1 == null);var state_356520__$1 = (function (){var statearr_356528 = state_356520;(statearr_356528[10] = inst_356501);
(statearr_356528[8] = inst_356500__$1);
(statearr_356528[9] = inst_356499__$1);
return statearr_356528;
})();if(cljs.core.truth_(inst_356502))
{var statearr_356529_356550 = state_356520__$1;(statearr_356529_356550[1] = 8);
} else
{var statearr_356530_356551 = state_356520__$1;(statearr_356530_356551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 8))
{var inst_356501 = (state_356520[10]);var inst_356500 = (state_356520[8]);var inst_356499 = (state_356520[9]);var inst_356492 = (state_356520[7]);var inst_356504 = (function (){var c = inst_356501;var v = inst_356500;var vec__356497 = inst_356499;var cs = inst_356492;return ((function (c,v,vec__356497,cs,inst_356501,inst_356500,inst_356499,inst_356492,state_val_356521){
return (function (p1__356437_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__356437_SHARP_);
});
;})(c,v,vec__356497,cs,inst_356501,inst_356500,inst_356499,inst_356492,state_val_356521))
})();var inst_356505 = cljs.core.filterv.call(null,inst_356504,inst_356492);var inst_356492__$1 = inst_356505;var state_356520__$1 = (function (){var statearr_356531 = state_356520;(statearr_356531[7] = inst_356492__$1);
return statearr_356531;
})();var statearr_356532_356552 = state_356520__$1;(statearr_356532_356552[2] = null);
(statearr_356532_356552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 9))
{var inst_356500 = (state_356520[8]);var state_356520__$1 = state_356520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356520__$1,11,out,inst_356500);
} else
{if((state_val_356521 === 10))
{var inst_356512 = (state_356520[2]);var state_356520__$1 = state_356520;var statearr_356534_356553 = state_356520__$1;(statearr_356534_356553[2] = inst_356512);
(statearr_356534_356553[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356521 === 11))
{var inst_356492 = (state_356520[7]);var inst_356509 = (state_356520[2]);var tmp356533 = inst_356492;var inst_356492__$1 = tmp356533;var state_356520__$1 = (function (){var statearr_356535 = state_356520;(statearr_356535[11] = inst_356509);
(statearr_356535[7] = inst_356492__$1);
return statearr_356535;
})();var statearr_356536_356554 = state_356520__$1;(statearr_356536_356554[2] = null);
(statearr_356536_356554[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_356540 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_356540[0] = state_machine__18220__auto__);
(statearr_356540[1] = 1);
return statearr_356540;
});
var state_machine__18220__auto____1 = (function (state_356520){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_356520);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e356541){if((e356541 instanceof Object))
{var ex__18223__auto__ = e356541;var statearr_356542_356555 = state_356520;(statearr_356542_356555[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e356541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356556 = state_356520;
state_356520 = G__356556;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_356520){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_356520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_356543 = f__18290__auto__.call(null);(statearr_356543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___356544);
return statearr_356543;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___356649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_356626){var state_val_356627 = (state_356626[1]);if((state_val_356627 === 1))
{var inst_356603 = 0;var state_356626__$1 = (function (){var statearr_356628 = state_356626;(statearr_356628[7] = inst_356603);
return statearr_356628;
})();var statearr_356629_356650 = state_356626__$1;(statearr_356629_356650[2] = null);
(statearr_356629_356650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 2))
{var inst_356603 = (state_356626[7]);var inst_356605 = (inst_356603 < n);var state_356626__$1 = state_356626;if(cljs.core.truth_(inst_356605))
{var statearr_356630_356651 = state_356626__$1;(statearr_356630_356651[1] = 4);
} else
{var statearr_356631_356652 = state_356626__$1;(statearr_356631_356652[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 3))
{var inst_356623 = (state_356626[2]);var inst_356624 = cljs.core.async.close_BANG_.call(null,out);var state_356626__$1 = (function (){var statearr_356632 = state_356626;(statearr_356632[8] = inst_356623);
return statearr_356632;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356626__$1,inst_356624);
} else
{if((state_val_356627 === 4))
{var state_356626__$1 = state_356626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356626__$1,7,ch);
} else
{if((state_val_356627 === 5))
{var state_356626__$1 = state_356626;var statearr_356633_356653 = state_356626__$1;(statearr_356633_356653[2] = null);
(statearr_356633_356653[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 6))
{var inst_356621 = (state_356626[2]);var state_356626__$1 = state_356626;var statearr_356634_356654 = state_356626__$1;(statearr_356634_356654[2] = inst_356621);
(statearr_356634_356654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 7))
{var inst_356608 = (state_356626[9]);var inst_356608__$1 = (state_356626[2]);var inst_356609 = (inst_356608__$1 == null);var inst_356610 = cljs.core.not.call(null,inst_356609);var state_356626__$1 = (function (){var statearr_356635 = state_356626;(statearr_356635[9] = inst_356608__$1);
return statearr_356635;
})();if(inst_356610)
{var statearr_356636_356655 = state_356626__$1;(statearr_356636_356655[1] = 8);
} else
{var statearr_356637_356656 = state_356626__$1;(statearr_356637_356656[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 8))
{var inst_356608 = (state_356626[9]);var state_356626__$1 = state_356626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356626__$1,11,out,inst_356608);
} else
{if((state_val_356627 === 9))
{var state_356626__$1 = state_356626;var statearr_356638_356657 = state_356626__$1;(statearr_356638_356657[2] = null);
(statearr_356638_356657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 10))
{var inst_356618 = (state_356626[2]);var state_356626__$1 = state_356626;var statearr_356639_356658 = state_356626__$1;(statearr_356639_356658[2] = inst_356618);
(statearr_356639_356658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356627 === 11))
{var inst_356603 = (state_356626[7]);var inst_356613 = (state_356626[2]);var inst_356614 = (inst_356603 + 1);var inst_356603__$1 = inst_356614;var state_356626__$1 = (function (){var statearr_356640 = state_356626;(statearr_356640[10] = inst_356613);
(statearr_356640[7] = inst_356603__$1);
return statearr_356640;
})();var statearr_356641_356659 = state_356626__$1;(statearr_356641_356659[2] = null);
(statearr_356641_356659[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_356645 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_356645[0] = state_machine__18220__auto__);
(statearr_356645[1] = 1);
return statearr_356645;
});
var state_machine__18220__auto____1 = (function (state_356626){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_356626);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e356646){if((e356646 instanceof Object))
{var ex__18223__auto__ = e356646;var statearr_356647_356660 = state_356626;(statearr_356647_356660[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e356646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356661 = state_356626;
state_356626 = G__356661;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_356626){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_356626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_356648 = f__18290__auto__.call(null);(statearr_356648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___356649);
return statearr_356648;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___356758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_356733){var state_val_356734 = (state_356733[1]);if((state_val_356734 === 1))
{var inst_356710 = null;var state_356733__$1 = (function (){var statearr_356735 = state_356733;(statearr_356735[7] = inst_356710);
return statearr_356735;
})();var statearr_356736_356759 = state_356733__$1;(statearr_356736_356759[2] = null);
(statearr_356736_356759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 2))
{var state_356733__$1 = state_356733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356733__$1,4,ch);
} else
{if((state_val_356734 === 3))
{var inst_356730 = (state_356733[2]);var inst_356731 = cljs.core.async.close_BANG_.call(null,out);var state_356733__$1 = (function (){var statearr_356737 = state_356733;(statearr_356737[8] = inst_356730);
return statearr_356737;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356733__$1,inst_356731);
} else
{if((state_val_356734 === 4))
{var inst_356713 = (state_356733[9]);var inst_356713__$1 = (state_356733[2]);var inst_356714 = (inst_356713__$1 == null);var inst_356715 = cljs.core.not.call(null,inst_356714);var state_356733__$1 = (function (){var statearr_356738 = state_356733;(statearr_356738[9] = inst_356713__$1);
return statearr_356738;
})();if(inst_356715)
{var statearr_356739_356760 = state_356733__$1;(statearr_356739_356760[1] = 5);
} else
{var statearr_356740_356761 = state_356733__$1;(statearr_356740_356761[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 5))
{var inst_356710 = (state_356733[7]);var inst_356713 = (state_356733[9]);var inst_356717 = cljs.core._EQ_.call(null,inst_356713,inst_356710);var state_356733__$1 = state_356733;if(inst_356717)
{var statearr_356741_356762 = state_356733__$1;(statearr_356741_356762[1] = 8);
} else
{var statearr_356742_356763 = state_356733__$1;(statearr_356742_356763[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 6))
{var state_356733__$1 = state_356733;var statearr_356744_356764 = state_356733__$1;(statearr_356744_356764[2] = null);
(statearr_356744_356764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 7))
{var inst_356728 = (state_356733[2]);var state_356733__$1 = state_356733;var statearr_356745_356765 = state_356733__$1;(statearr_356745_356765[2] = inst_356728);
(statearr_356745_356765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 8))
{var inst_356710 = (state_356733[7]);var tmp356743 = inst_356710;var inst_356710__$1 = tmp356743;var state_356733__$1 = (function (){var statearr_356746 = state_356733;(statearr_356746[7] = inst_356710__$1);
return statearr_356746;
})();var statearr_356747_356766 = state_356733__$1;(statearr_356747_356766[2] = null);
(statearr_356747_356766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 9))
{var inst_356713 = (state_356733[9]);var state_356733__$1 = state_356733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356733__$1,11,out,inst_356713);
} else
{if((state_val_356734 === 10))
{var inst_356725 = (state_356733[2]);var state_356733__$1 = state_356733;var statearr_356748_356767 = state_356733__$1;(statearr_356748_356767[2] = inst_356725);
(statearr_356748_356767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356734 === 11))
{var inst_356713 = (state_356733[9]);var inst_356722 = (state_356733[2]);var inst_356710 = inst_356713;var state_356733__$1 = (function (){var statearr_356749 = state_356733;(statearr_356749[7] = inst_356710);
(statearr_356749[10] = inst_356722);
return statearr_356749;
})();var statearr_356750_356768 = state_356733__$1;(statearr_356750_356768[2] = null);
(statearr_356750_356768[1] = 2);
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
var state_machine__18220__auto____0 = (function (){var statearr_356754 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_356754[0] = state_machine__18220__auto__);
(statearr_356754[1] = 1);
return statearr_356754;
});
var state_machine__18220__auto____1 = (function (state_356733){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_356733);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e356755){if((e356755 instanceof Object))
{var ex__18223__auto__ = e356755;var statearr_356756_356769 = state_356733;(statearr_356756_356769[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e356755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356770 = state_356733;
state_356733 = G__356770;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_356733){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_356733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_356757 = f__18290__auto__.call(null);(statearr_356757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___356758);
return statearr_356757;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___356905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_356875){var state_val_356876 = (state_356875[1]);if((state_val_356876 === 1))
{var inst_356838 = (new Array(n));var inst_356839 = inst_356838;var inst_356840 = 0;var state_356875__$1 = (function (){var statearr_356877 = state_356875;(statearr_356877[7] = inst_356839);
(statearr_356877[8] = inst_356840);
return statearr_356877;
})();var statearr_356878_356906 = state_356875__$1;(statearr_356878_356906[2] = null);
(statearr_356878_356906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 2))
{var state_356875__$1 = state_356875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_356875__$1,4,ch);
} else
{if((state_val_356876 === 3))
{var inst_356873 = (state_356875[2]);var state_356875__$1 = state_356875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_356875__$1,inst_356873);
} else
{if((state_val_356876 === 4))
{var inst_356843 = (state_356875[9]);var inst_356843__$1 = (state_356875[2]);var inst_356844 = (inst_356843__$1 == null);var inst_356845 = cljs.core.not.call(null,inst_356844);var state_356875__$1 = (function (){var statearr_356879 = state_356875;(statearr_356879[9] = inst_356843__$1);
return statearr_356879;
})();if(inst_356845)
{var statearr_356880_356907 = state_356875__$1;(statearr_356880_356907[1] = 5);
} else
{var statearr_356881_356908 = state_356875__$1;(statearr_356881_356908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 5))
{var inst_356839 = (state_356875[7]);var inst_356848 = (state_356875[10]);var inst_356843 = (state_356875[9]);var inst_356840 = (state_356875[8]);var inst_356847 = (inst_356839[inst_356840] = inst_356843);var inst_356848__$1 = (inst_356840 + 1);var inst_356849 = (inst_356848__$1 < n);var state_356875__$1 = (function (){var statearr_356882 = state_356875;(statearr_356882[10] = inst_356848__$1);
(statearr_356882[11] = inst_356847);
return statearr_356882;
})();if(cljs.core.truth_(inst_356849))
{var statearr_356883_356909 = state_356875__$1;(statearr_356883_356909[1] = 8);
} else
{var statearr_356884_356910 = state_356875__$1;(statearr_356884_356910[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 6))
{var inst_356840 = (state_356875[8]);var inst_356861 = (inst_356840 > 0);var state_356875__$1 = state_356875;if(cljs.core.truth_(inst_356861))
{var statearr_356886_356911 = state_356875__$1;(statearr_356886_356911[1] = 12);
} else
{var statearr_356887_356912 = state_356875__$1;(statearr_356887_356912[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 7))
{var inst_356871 = (state_356875[2]);var state_356875__$1 = state_356875;var statearr_356888_356913 = state_356875__$1;(statearr_356888_356913[2] = inst_356871);
(statearr_356888_356913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 8))
{var inst_356839 = (state_356875[7]);var inst_356848 = (state_356875[10]);var tmp356885 = inst_356839;var inst_356839__$1 = tmp356885;var inst_356840 = inst_356848;var state_356875__$1 = (function (){var statearr_356889 = state_356875;(statearr_356889[7] = inst_356839__$1);
(statearr_356889[8] = inst_356840);
return statearr_356889;
})();var statearr_356890_356914 = state_356875__$1;(statearr_356890_356914[2] = null);
(statearr_356890_356914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 9))
{var inst_356839 = (state_356875[7]);var inst_356853 = cljs.core.vec.call(null,inst_356839);var state_356875__$1 = state_356875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356875__$1,11,out,inst_356853);
} else
{if((state_val_356876 === 10))
{var inst_356859 = (state_356875[2]);var state_356875__$1 = state_356875;var statearr_356891_356915 = state_356875__$1;(statearr_356891_356915[2] = inst_356859);
(statearr_356891_356915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 11))
{var inst_356855 = (state_356875[2]);var inst_356856 = (new Array(n));var inst_356839 = inst_356856;var inst_356840 = 0;var state_356875__$1 = (function (){var statearr_356892 = state_356875;(statearr_356892[7] = inst_356839);
(statearr_356892[12] = inst_356855);
(statearr_356892[8] = inst_356840);
return statearr_356892;
})();var statearr_356893_356916 = state_356875__$1;(statearr_356893_356916[2] = null);
(statearr_356893_356916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 12))
{var inst_356839 = (state_356875[7]);var inst_356863 = cljs.core.vec.call(null,inst_356839);var state_356875__$1 = state_356875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_356875__$1,15,out,inst_356863);
} else
{if((state_val_356876 === 13))
{var state_356875__$1 = state_356875;var statearr_356894_356917 = state_356875__$1;(statearr_356894_356917[2] = null);
(statearr_356894_356917[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 14))
{var inst_356868 = (state_356875[2]);var inst_356869 = cljs.core.async.close_BANG_.call(null,out);var state_356875__$1 = (function (){var statearr_356895 = state_356875;(statearr_356895[13] = inst_356868);
return statearr_356895;
})();var statearr_356896_356918 = state_356875__$1;(statearr_356896_356918[2] = inst_356869);
(statearr_356896_356918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_356876 === 15))
{var inst_356865 = (state_356875[2]);var state_356875__$1 = state_356875;var statearr_356897_356919 = state_356875__$1;(statearr_356897_356919[2] = inst_356865);
(statearr_356897_356919[1] = 14);
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
var state_machine__18220__auto____0 = (function (){var statearr_356901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_356901[0] = state_machine__18220__auto__);
(statearr_356901[1] = 1);
return statearr_356901;
});
var state_machine__18220__auto____1 = (function (state_356875){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_356875);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e356902){if((e356902 instanceof Object))
{var ex__18223__auto__ = e356902;var statearr_356903_356920 = state_356875;(statearr_356903_356920[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_356875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e356902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__356921 = state_356875;
state_356875 = G__356921;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_356875){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_356875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_356904 = f__18290__auto__.call(null);(statearr_356904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___356905);
return statearr_356904;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18289__auto___357064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_357034){var state_val_357035 = (state_357034[1]);if((state_val_357035 === 1))
{var inst_356993 = [];var inst_356994 = inst_356993;var inst_356995 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_357034__$1 = (function (){var statearr_357036 = state_357034;(statearr_357036[7] = inst_356995);
(statearr_357036[8] = inst_356994);
return statearr_357036;
})();var statearr_357037_357065 = state_357034__$1;(statearr_357037_357065[2] = null);
(statearr_357037_357065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 2))
{var state_357034__$1 = state_357034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_357034__$1,4,ch);
} else
{if((state_val_357035 === 3))
{var inst_357032 = (state_357034[2]);var state_357034__$1 = state_357034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_357034__$1,inst_357032);
} else
{if((state_val_357035 === 4))
{var inst_356998 = (state_357034[9]);var inst_356998__$1 = (state_357034[2]);var inst_356999 = (inst_356998__$1 == null);var inst_357000 = cljs.core.not.call(null,inst_356999);var state_357034__$1 = (function (){var statearr_357038 = state_357034;(statearr_357038[9] = inst_356998__$1);
return statearr_357038;
})();if(inst_357000)
{var statearr_357039_357066 = state_357034__$1;(statearr_357039_357066[1] = 5);
} else
{var statearr_357040_357067 = state_357034__$1;(statearr_357040_357067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 5))
{var inst_356995 = (state_357034[7]);var inst_357002 = (state_357034[10]);var inst_356998 = (state_357034[9]);var inst_357002__$1 = f.call(null,inst_356998);var inst_357003 = cljs.core._EQ_.call(null,inst_357002__$1,inst_356995);var inst_357004 = cljs.core.keyword_identical_QMARK_.call(null,inst_356995,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_357005 = (inst_357003) || (inst_357004);var state_357034__$1 = (function (){var statearr_357041 = state_357034;(statearr_357041[10] = inst_357002__$1);
return statearr_357041;
})();if(cljs.core.truth_(inst_357005))
{var statearr_357042_357068 = state_357034__$1;(statearr_357042_357068[1] = 8);
} else
{var statearr_357043_357069 = state_357034__$1;(statearr_357043_357069[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 6))
{var inst_356994 = (state_357034[8]);var inst_357019 = inst_356994.length;var inst_357020 = (inst_357019 > 0);var state_357034__$1 = state_357034;if(cljs.core.truth_(inst_357020))
{var statearr_357045_357070 = state_357034__$1;(statearr_357045_357070[1] = 12);
} else
{var statearr_357046_357071 = state_357034__$1;(statearr_357046_357071[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 7))
{var inst_357030 = (state_357034[2]);var state_357034__$1 = state_357034;var statearr_357047_357072 = state_357034__$1;(statearr_357047_357072[2] = inst_357030);
(statearr_357047_357072[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 8))
{var inst_356994 = (state_357034[8]);var inst_357002 = (state_357034[10]);var inst_356998 = (state_357034[9]);var inst_357007 = inst_356994.push(inst_356998);var tmp357044 = inst_356994;var inst_356994__$1 = tmp357044;var inst_356995 = inst_357002;var state_357034__$1 = (function (){var statearr_357048 = state_357034;(statearr_357048[11] = inst_357007);
(statearr_357048[7] = inst_356995);
(statearr_357048[8] = inst_356994__$1);
return statearr_357048;
})();var statearr_357049_357073 = state_357034__$1;(statearr_357049_357073[2] = null);
(statearr_357049_357073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 9))
{var inst_356994 = (state_357034[8]);var inst_357010 = cljs.core.vec.call(null,inst_356994);var state_357034__$1 = state_357034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_357034__$1,11,out,inst_357010);
} else
{if((state_val_357035 === 10))
{var inst_357017 = (state_357034[2]);var state_357034__$1 = state_357034;var statearr_357050_357074 = state_357034__$1;(statearr_357050_357074[2] = inst_357017);
(statearr_357050_357074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 11))
{var inst_357002 = (state_357034[10]);var inst_356998 = (state_357034[9]);var inst_357012 = (state_357034[2]);var inst_357013 = [];var inst_357014 = inst_357013.push(inst_356998);var inst_356994 = inst_357013;var inst_356995 = inst_357002;var state_357034__$1 = (function (){var statearr_357051 = state_357034;(statearr_357051[7] = inst_356995);
(statearr_357051[8] = inst_356994);
(statearr_357051[12] = inst_357014);
(statearr_357051[13] = inst_357012);
return statearr_357051;
})();var statearr_357052_357075 = state_357034__$1;(statearr_357052_357075[2] = null);
(statearr_357052_357075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 12))
{var inst_356994 = (state_357034[8]);var inst_357022 = cljs.core.vec.call(null,inst_356994);var state_357034__$1 = state_357034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_357034__$1,15,out,inst_357022);
} else
{if((state_val_357035 === 13))
{var state_357034__$1 = state_357034;var statearr_357053_357076 = state_357034__$1;(statearr_357053_357076[2] = null);
(statearr_357053_357076[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 14))
{var inst_357027 = (state_357034[2]);var inst_357028 = cljs.core.async.close_BANG_.call(null,out);var state_357034__$1 = (function (){var statearr_357054 = state_357034;(statearr_357054[14] = inst_357027);
return statearr_357054;
})();var statearr_357055_357077 = state_357034__$1;(statearr_357055_357077[2] = inst_357028);
(statearr_357055_357077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_357035 === 15))
{var inst_357024 = (state_357034[2]);var state_357034__$1 = state_357034;var statearr_357056_357078 = state_357034__$1;(statearr_357056_357078[2] = inst_357024);
(statearr_357056_357078[1] = 14);
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
var state_machine__18220__auto____0 = (function (){var statearr_357060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_357060[0] = state_machine__18220__auto__);
(statearr_357060[1] = 1);
return statearr_357060;
});
var state_machine__18220__auto____1 = (function (state_357034){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_357034);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e357061){if((e357061 instanceof Object))
{var ex__18223__auto__ = e357061;var statearr_357062_357079 = state_357034;(statearr_357062_357079[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_357034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e357061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__357080 = state_357034;
state_357034 = G__357080;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_357034){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_357034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_357063 = f__18290__auto__.call(null);(statearr_357063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___357064);
return statearr_357063;
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