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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t36941 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36941 = (function (f,fn_handler,meta36942){
this.f = f;
this.fn_handler = fn_handler;
this.meta36942 = meta36942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36941.cljs$lang$type = true;
cljs.core.async.t36941.cljs$lang$ctorStr = "cljs.core.async/t36941";
cljs.core.async.t36941.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36941");
});
cljs.core.async.t36941.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t36941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t36941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36943){var self__ = this;
var _36943__$1 = this;return self__.meta36942;
});
cljs.core.async.t36941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36943,meta36942__$1){var self__ = this;
var _36943__$1 = this;return (new cljs.core.async.t36941(self__.f,self__.fn_handler,meta36942__$1));
});
cljs.core.async.__GT_t36941 = (function __GT_t36941(f__$1,fn_handler__$1,meta36942){return (new cljs.core.async.t36941(f__$1,fn_handler__$1,meta36942));
});
}
return (new cljs.core.async.t36941(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__36945 = buff;if(G__36945)
{var bit__11523__auto__ = null;if(cljs.core.truth_((function (){var or__10897__auto__ = bit__11523__auto__;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return G__36945.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__36945.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36945);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36945);
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
{var val_36946 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_36946);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_36946);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__10885__auto__ = ret;if(cljs.core.truth_(and__10885__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__10885__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11720__auto___36947 = n;var x_36948 = 0;while(true){
if((x_36948 < n__11720__auto___36947))
{(a[x_36948] = 0);
{
var G__36949 = (x_36948 + 1);
x_36948 = G__36949;
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
var G__36950 = (i + 1);
i = G__36950;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t36954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36954 = (function (flag,alt_flag,meta36955){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36955 = meta36955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36954.cljs$lang$type = true;
cljs.core.async.t36954.cljs$lang$ctorStr = "cljs.core.async/t36954";
cljs.core.async.t36954.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36954");
});
cljs.core.async.t36954.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t36954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t36954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36956){var self__ = this;
var _36956__$1 = this;return self__.meta36955;
});
cljs.core.async.t36954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36956,meta36955__$1){var self__ = this;
var _36956__$1 = this;return (new cljs.core.async.t36954(self__.flag,self__.alt_flag,meta36955__$1));
});
cljs.core.async.__GT_t36954 = (function __GT_t36954(flag__$1,alt_flag__$1,meta36955){return (new cljs.core.async.t36954(flag__$1,alt_flag__$1,meta36955));
});
}
return (new cljs.core.async.t36954(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t36960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36960 = (function (cb,flag,alt_handler,meta36961){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36961 = meta36961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36960.cljs$lang$type = true;
cljs.core.async.t36960.cljs$lang$ctorStr = "cljs.core.async/t36960";
cljs.core.async.t36960.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36960");
});
cljs.core.async.t36960.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t36960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t36960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36962){var self__ = this;
var _36962__$1 = this;return self__.meta36961;
});
cljs.core.async.t36960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36962,meta36961__$1){var self__ = this;
var _36962__$1 = this;return (new cljs.core.async.t36960(self__.cb,self__.flag,self__.alt_handler,meta36961__$1));
});
cljs.core.async.__GT_t36960 = (function __GT_t36960(cb__$1,flag__$1,alt_handler__$1,meta36961){return (new cljs.core.async.t36960(cb__$1,flag__$1,alt_handler__$1,meta36961));
});
}
return (new cljs.core.async.t36960(cb,flag,alt_handler,null));
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
return (function (p1__36963_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36963_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10897__auto__ = wport;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__36964 = (i + 1);
i = G__36964;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10897__auto__ = ret;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__10885__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10885__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10885__auto__;
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
var alts_BANG___delegate = function (ports,p__36965){var map__36967 = p__36965;var map__36967__$1 = ((cljs.core.seq_QMARK_.call(null,map__36967))?cljs.core.apply.call(null,cljs.core.hash_map,map__36967):map__36967);var opts = map__36967__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__36965 = null;if (arguments.length > 1) {
  p__36965 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__36965);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36968){
var ports = cljs.core.first(arglist__36968);
var p__36965 = cljs.core.rest(arglist__36968);
return alts_BANG___delegate(ports,p__36965);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36976 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36976 = (function (ch,f,map_LT_,meta36977){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36977 = meta36977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36976.cljs$lang$type = true;
cljs.core.async.t36976.cljs$lang$ctorStr = "cljs.core.async/t36976";
cljs.core.async.t36976.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36976");
});
cljs.core.async.t36976.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t36976.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t36979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36979 = (function (fn1,_,meta36977,ch,f,map_LT_,meta36980){
this.fn1 = fn1;
this._ = _;
this.meta36977 = meta36977;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36980 = meta36980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36979.cljs$lang$type = true;
cljs.core.async.t36979.cljs$lang$ctorStr = "cljs.core.async/t36979";
cljs.core.async.t36979.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36979");
});
cljs.core.async.t36979.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t36979.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t36979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__36969_SHARP_){return f1.call(null,(((p1__36969_SHARP_ == null))?null:self__.f.call(null,p1__36969_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t36979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36981){var self__ = this;
var _36981__$1 = this;return self__.meta36980;
});
cljs.core.async.t36979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36981,meta36980__$1){var self__ = this;
var _36981__$1 = this;return (new cljs.core.async.t36979(self__.fn1,self__._,self__.meta36977,self__.ch,self__.f,self__.map_LT_,meta36980__$1));
});
cljs.core.async.__GT_t36979 = (function __GT_t36979(fn1__$1,___$2,meta36977__$1,ch__$2,f__$2,map_LT___$2,meta36980){return (new cljs.core.async.t36979(fn1__$1,___$2,meta36977__$1,ch__$2,f__$2,map_LT___$2,meta36980));
});
}
return (new cljs.core.async.t36979(fn1,___$1,self__.meta36977,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10885__auto__ = ret;if(cljs.core.truth_(and__10885__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10885__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t36976.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36978){var self__ = this;
var _36978__$1 = this;return self__.meta36977;
});
cljs.core.async.t36976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36978,meta36977__$1){var self__ = this;
var _36978__$1 = this;return (new cljs.core.async.t36976(self__.ch,self__.f,self__.map_LT_,meta36977__$1));
});
cljs.core.async.__GT_t36976 = (function __GT_t36976(ch__$1,f__$1,map_LT___$1,meta36977){return (new cljs.core.async.t36976(ch__$1,f__$1,map_LT___$1,meta36977));
});
}
return (new cljs.core.async.t36976(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36985 = (function (ch,f,map_GT_,meta36986){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36986 = meta36986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36985.cljs$lang$type = true;
cljs.core.async.t36985.cljs$lang$ctorStr = "cljs.core.async/t36985";
cljs.core.async.t36985.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36985");
});
cljs.core.async.t36985.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t36985.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t36985.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36987){var self__ = this;
var _36987__$1 = this;return self__.meta36986;
});
cljs.core.async.t36985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36987,meta36986__$1){var self__ = this;
var _36987__$1 = this;return (new cljs.core.async.t36985(self__.ch,self__.f,self__.map_GT_,meta36986__$1));
});
cljs.core.async.__GT_t36985 = (function __GT_t36985(ch__$1,f__$1,map_GT___$1,meta36986){return (new cljs.core.async.t36985(ch__$1,f__$1,map_GT___$1,meta36986));
});
}
return (new cljs.core.async.t36985(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36991 = (function (ch,p,filter_GT_,meta36992){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36992 = meta36992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36991.cljs$lang$type = true;
cljs.core.async.t36991.cljs$lang$ctorStr = "cljs.core.async/t36991";
cljs.core.async.t36991.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t36991");
});
cljs.core.async.t36991.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t36991.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t36991.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36993){var self__ = this;
var _36993__$1 = this;return self__.meta36992;
});
cljs.core.async.t36991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36993,meta36992__$1){var self__ = this;
var _36993__$1 = this;return (new cljs.core.async.t36991(self__.ch,self__.p,self__.filter_GT_,meta36992__$1));
});
cljs.core.async.__GT_t36991 = (function __GT_t36991(ch__$1,p__$1,filter_GT___$1,meta36992){return (new cljs.core.async.t36991(ch__$1,p__$1,filter_GT___$1,meta36992));
});
}
return (new cljs.core.async.t36991(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___37076 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_37055){var state_val_37056 = (state_37055[1]);if((state_val_37056 === 1))
{var state_37055__$1 = state_37055;var statearr_37057_37077 = state_37055__$1;(statearr_37057_37077[2] = null);
(statearr_37057_37077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 2))
{var state_37055__$1 = state_37055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37055__$1,4,ch);
} else
{if((state_val_37056 === 3))
{var inst_37053 = (state_37055[2]);var state_37055__$1 = state_37055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37055__$1,inst_37053);
} else
{if((state_val_37056 === 4))
{var inst_37037 = (state_37055[7]);var inst_37037__$1 = (state_37055[2]);var inst_37038 = (inst_37037__$1 == null);var state_37055__$1 = (function (){var statearr_37058 = state_37055;(statearr_37058[7] = inst_37037__$1);
return statearr_37058;
})();if(cljs.core.truth_(inst_37038))
{var statearr_37059_37078 = state_37055__$1;(statearr_37059_37078[1] = 5);
} else
{var statearr_37060_37079 = state_37055__$1;(statearr_37060_37079[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 5))
{var inst_37040 = cljs.core.async.close_BANG_.call(null,out);var state_37055__$1 = state_37055;var statearr_37061_37080 = state_37055__$1;(statearr_37061_37080[2] = inst_37040);
(statearr_37061_37080[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 6))
{var inst_37037 = (state_37055[7]);var inst_37042 = p.call(null,inst_37037);var state_37055__$1 = state_37055;if(cljs.core.truth_(inst_37042))
{var statearr_37062_37081 = state_37055__$1;(statearr_37062_37081[1] = 8);
} else
{var statearr_37063_37082 = state_37055__$1;(statearr_37063_37082[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 7))
{var inst_37051 = (state_37055[2]);var state_37055__$1 = state_37055;var statearr_37064_37083 = state_37055__$1;(statearr_37064_37083[2] = inst_37051);
(statearr_37064_37083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 8))
{var inst_37037 = (state_37055[7]);var state_37055__$1 = state_37055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37055__$1,11,out,inst_37037);
} else
{if((state_val_37056 === 9))
{var state_37055__$1 = state_37055;var statearr_37065_37084 = state_37055__$1;(statearr_37065_37084[2] = null);
(statearr_37065_37084[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 10))
{var inst_37048 = (state_37055[2]);var state_37055__$1 = (function (){var statearr_37066 = state_37055;(statearr_37066[8] = inst_37048);
return statearr_37066;
})();var statearr_37067_37085 = state_37055__$1;(statearr_37067_37085[2] = null);
(statearr_37067_37085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37056 === 11))
{var inst_37045 = (state_37055[2]);var state_37055__$1 = state_37055;var statearr_37068_37086 = state_37055__$1;(statearr_37068_37086[2] = inst_37045);
(statearr_37068_37086[1] = 10);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_37072 = (new Array(9));(statearr_37072[0] = state_machine__13894__auto__);
(statearr_37072[1] = 1);
return statearr_37072;
});
var state_machine__13894__auto____1 = (function (state_37055){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_37055);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e37073){if((e37073 instanceof Object))
{var ex__13897__auto__ = e37073;var statearr_37074_37087 = state_37055;(statearr_37074_37087[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37088 = state_37055;
state_37055 = G__37088;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_37055){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_37055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_37075 = f__13964__auto__.call(null);(statearr_37075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___37076);
return statearr_37075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_37240){var state_val_37241 = (state_37240[1]);if((state_val_37241 === 1))
{var state_37240__$1 = state_37240;var statearr_37242_37279 = state_37240__$1;(statearr_37242_37279[2] = null);
(statearr_37242_37279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 2))
{var state_37240__$1 = state_37240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37240__$1,4,in$);
} else
{if((state_val_37241 === 3))
{var inst_37238 = (state_37240[2]);var state_37240__$1 = state_37240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37240__$1,inst_37238);
} else
{if((state_val_37241 === 4))
{var inst_37186 = (state_37240[7]);var inst_37186__$1 = (state_37240[2]);var inst_37187 = (inst_37186__$1 == null);var state_37240__$1 = (function (){var statearr_37243 = state_37240;(statearr_37243[7] = inst_37186__$1);
return statearr_37243;
})();if(cljs.core.truth_(inst_37187))
{var statearr_37244_37280 = state_37240__$1;(statearr_37244_37280[1] = 5);
} else
{var statearr_37245_37281 = state_37240__$1;(statearr_37245_37281[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 5))
{var inst_37189 = cljs.core.async.close_BANG_.call(null,out);var state_37240__$1 = state_37240;var statearr_37246_37282 = state_37240__$1;(statearr_37246_37282[2] = inst_37189);
(statearr_37246_37282[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 6))
{var inst_37186 = (state_37240[7]);var inst_37191 = f.call(null,inst_37186);var inst_37196 = cljs.core.seq.call(null,inst_37191);var inst_37197 = inst_37196;var inst_37198 = null;var inst_37199 = 0;var inst_37200 = 0;var state_37240__$1 = (function (){var statearr_37247 = state_37240;(statearr_37247[8] = inst_37199);
(statearr_37247[9] = inst_37198);
(statearr_37247[10] = inst_37197);
(statearr_37247[11] = inst_37200);
return statearr_37247;
})();var statearr_37248_37283 = state_37240__$1;(statearr_37248_37283[2] = null);
(statearr_37248_37283[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 7))
{var inst_37236 = (state_37240[2]);var state_37240__$1 = state_37240;var statearr_37249_37284 = state_37240__$1;(statearr_37249_37284[2] = inst_37236);
(statearr_37249_37284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 8))
{var inst_37199 = (state_37240[8]);var inst_37200 = (state_37240[11]);var inst_37202 = (inst_37200 < inst_37199);var inst_37203 = inst_37202;var state_37240__$1 = state_37240;if(cljs.core.truth_(inst_37203))
{var statearr_37250_37285 = state_37240__$1;(statearr_37250_37285[1] = 10);
} else
{var statearr_37251_37286 = state_37240__$1;(statearr_37251_37286[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 9))
{var inst_37233 = (state_37240[2]);var state_37240__$1 = (function (){var statearr_37252 = state_37240;(statearr_37252[12] = inst_37233);
return statearr_37252;
})();var statearr_37253_37287 = state_37240__$1;(statearr_37253_37287[2] = null);
(statearr_37253_37287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 10))
{var inst_37198 = (state_37240[9]);var inst_37200 = (state_37240[11]);var inst_37205 = cljs.core._nth.call(null,inst_37198,inst_37200);var state_37240__$1 = state_37240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37240__$1,13,out,inst_37205);
} else
{if((state_val_37241 === 11))
{var inst_37197 = (state_37240[10]);var inst_37211 = (state_37240[13]);var inst_37211__$1 = cljs.core.seq.call(null,inst_37197);var state_37240__$1 = (function (){var statearr_37257 = state_37240;(statearr_37257[13] = inst_37211__$1);
return statearr_37257;
})();if(inst_37211__$1)
{var statearr_37258_37288 = state_37240__$1;(statearr_37258_37288[1] = 14);
} else
{var statearr_37259_37289 = state_37240__$1;(statearr_37259_37289[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 12))
{var inst_37231 = (state_37240[2]);var state_37240__$1 = state_37240;var statearr_37260_37290 = state_37240__$1;(statearr_37260_37290[2] = inst_37231);
(statearr_37260_37290[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 13))
{var inst_37199 = (state_37240[8]);var inst_37198 = (state_37240[9]);var inst_37197 = (state_37240[10]);var inst_37200 = (state_37240[11]);var inst_37207 = (state_37240[2]);var inst_37208 = (inst_37200 + 1);var tmp37254 = inst_37199;var tmp37255 = inst_37198;var tmp37256 = inst_37197;var inst_37197__$1 = tmp37256;var inst_37198__$1 = tmp37255;var inst_37199__$1 = tmp37254;var inst_37200__$1 = inst_37208;var state_37240__$1 = (function (){var statearr_37261 = state_37240;(statearr_37261[8] = inst_37199__$1);
(statearr_37261[9] = inst_37198__$1);
(statearr_37261[10] = inst_37197__$1);
(statearr_37261[11] = inst_37200__$1);
(statearr_37261[14] = inst_37207);
return statearr_37261;
})();var statearr_37262_37291 = state_37240__$1;(statearr_37262_37291[2] = null);
(statearr_37262_37291[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 14))
{var inst_37211 = (state_37240[13]);var inst_37213 = cljs.core.chunked_seq_QMARK_.call(null,inst_37211);var state_37240__$1 = state_37240;if(inst_37213)
{var statearr_37263_37292 = state_37240__$1;(statearr_37263_37292[1] = 17);
} else
{var statearr_37264_37293 = state_37240__$1;(statearr_37264_37293[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 15))
{var state_37240__$1 = state_37240;var statearr_37265_37294 = state_37240__$1;(statearr_37265_37294[2] = null);
(statearr_37265_37294[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 16))
{var inst_37229 = (state_37240[2]);var state_37240__$1 = state_37240;var statearr_37266_37295 = state_37240__$1;(statearr_37266_37295[2] = inst_37229);
(statearr_37266_37295[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 17))
{var inst_37211 = (state_37240[13]);var inst_37215 = cljs.core.chunk_first.call(null,inst_37211);var inst_37216 = cljs.core.chunk_rest.call(null,inst_37211);var inst_37217 = cljs.core.count.call(null,inst_37215);var inst_37197 = inst_37216;var inst_37198 = inst_37215;var inst_37199 = inst_37217;var inst_37200 = 0;var state_37240__$1 = (function (){var statearr_37267 = state_37240;(statearr_37267[8] = inst_37199);
(statearr_37267[9] = inst_37198);
(statearr_37267[10] = inst_37197);
(statearr_37267[11] = inst_37200);
return statearr_37267;
})();var statearr_37268_37296 = state_37240__$1;(statearr_37268_37296[2] = null);
(statearr_37268_37296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 18))
{var inst_37211 = (state_37240[13]);var inst_37220 = cljs.core.first.call(null,inst_37211);var state_37240__$1 = state_37240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37240__$1,20,out,inst_37220);
} else
{if((state_val_37241 === 19))
{var inst_37226 = (state_37240[2]);var state_37240__$1 = state_37240;var statearr_37269_37297 = state_37240__$1;(statearr_37269_37297[2] = inst_37226);
(statearr_37269_37297[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37241 === 20))
{var inst_37211 = (state_37240[13]);var inst_37222 = (state_37240[2]);var inst_37223 = cljs.core.next.call(null,inst_37211);var inst_37197 = inst_37223;var inst_37198 = null;var inst_37199 = 0;var inst_37200 = 0;var state_37240__$1 = (function (){var statearr_37270 = state_37240;(statearr_37270[8] = inst_37199);
(statearr_37270[9] = inst_37198);
(statearr_37270[10] = inst_37197);
(statearr_37270[11] = inst_37200);
(statearr_37270[15] = inst_37222);
return statearr_37270;
})();var statearr_37271_37298 = state_37240__$1;(statearr_37271_37298[2] = null);
(statearr_37271_37298[1] = 8);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_37275 = (new Array(16));(statearr_37275[0] = state_machine__13894__auto__);
(statearr_37275[1] = 1);
return statearr_37275;
});
var state_machine__13894__auto____1 = (function (state_37240){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_37240);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e37276){if((e37276 instanceof Object))
{var ex__13897__auto__ = e37276;var statearr_37277_37299 = state_37240;(statearr_37277_37299[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37300 = state_37240;
state_37240 = G__37300;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_37240){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_37240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_37278 = f__13964__auto__.call(null);(statearr_37278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_37278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13963__auto___37381 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_37360){var state_val_37361 = (state_37360[1]);if((state_val_37361 === 1))
{var state_37360__$1 = state_37360;var statearr_37362_37382 = state_37360__$1;(statearr_37362_37382[2] = null);
(statearr_37362_37382[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 2))
{var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37360__$1,4,from);
} else
{if((state_val_37361 === 3))
{var inst_37358 = (state_37360[2]);var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37360__$1,inst_37358);
} else
{if((state_val_37361 === 4))
{var inst_37343 = (state_37360[7]);var inst_37343__$1 = (state_37360[2]);var inst_37344 = (inst_37343__$1 == null);var state_37360__$1 = (function (){var statearr_37363 = state_37360;(statearr_37363[7] = inst_37343__$1);
return statearr_37363;
})();if(cljs.core.truth_(inst_37344))
{var statearr_37364_37383 = state_37360__$1;(statearr_37364_37383[1] = 5);
} else
{var statearr_37365_37384 = state_37360__$1;(statearr_37365_37384[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 5))
{var state_37360__$1 = state_37360;if(cljs.core.truth_(close_QMARK_))
{var statearr_37366_37385 = state_37360__$1;(statearr_37366_37385[1] = 8);
} else
{var statearr_37367_37386 = state_37360__$1;(statearr_37367_37386[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 6))
{var inst_37343 = (state_37360[7]);var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37360__$1,11,to,inst_37343);
} else
{if((state_val_37361 === 7))
{var inst_37356 = (state_37360[2]);var state_37360__$1 = state_37360;var statearr_37368_37387 = state_37360__$1;(statearr_37368_37387[2] = inst_37356);
(statearr_37368_37387[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 8))
{var inst_37347 = cljs.core.async.close_BANG_.call(null,to);var state_37360__$1 = state_37360;var statearr_37369_37388 = state_37360__$1;(statearr_37369_37388[2] = inst_37347);
(statearr_37369_37388[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 9))
{var state_37360__$1 = state_37360;var statearr_37370_37389 = state_37360__$1;(statearr_37370_37389[2] = null);
(statearr_37370_37389[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 10))
{var inst_37350 = (state_37360[2]);var state_37360__$1 = state_37360;var statearr_37371_37390 = state_37360__$1;(statearr_37371_37390[2] = inst_37350);
(statearr_37371_37390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 11))
{var inst_37353 = (state_37360[2]);var state_37360__$1 = (function (){var statearr_37372 = state_37360;(statearr_37372[8] = inst_37353);
return statearr_37372;
})();var statearr_37373_37391 = state_37360__$1;(statearr_37373_37391[2] = null);
(statearr_37373_37391[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_37377 = (new Array(9));(statearr_37377[0] = state_machine__13894__auto__);
(statearr_37377[1] = 1);
return statearr_37377;
});
var state_machine__13894__auto____1 = (function (state_37360){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_37360);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e37378){if((e37378 instanceof Object))
{var ex__13897__auto__ = e37378;var statearr_37379_37392 = state_37360;(statearr_37379_37392[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37393 = state_37360;
state_37360 = G__37393;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_37360){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_37360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_37380 = f__13964__auto__.call(null);(statearr_37380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___37381);
return statearr_37380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13963__auto___37480 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_37458){var state_val_37459 = (state_37458[1]);if((state_val_37459 === 1))
{var state_37458__$1 = state_37458;var statearr_37460_37481 = state_37458__$1;(statearr_37460_37481[2] = null);
(statearr_37460_37481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 2))
{var state_37458__$1 = state_37458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37458__$1,4,ch);
} else
{if((state_val_37459 === 3))
{var inst_37456 = (state_37458[2]);var state_37458__$1 = state_37458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37458__$1,inst_37456);
} else
{if((state_val_37459 === 4))
{var inst_37439 = (state_37458[7]);var inst_37439__$1 = (state_37458[2]);var inst_37440 = (inst_37439__$1 == null);var state_37458__$1 = (function (){var statearr_37461 = state_37458;(statearr_37461[7] = inst_37439__$1);
return statearr_37461;
})();if(cljs.core.truth_(inst_37440))
{var statearr_37462_37482 = state_37458__$1;(statearr_37462_37482[1] = 5);
} else
{var statearr_37463_37483 = state_37458__$1;(statearr_37463_37483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 5))
{var inst_37442 = cljs.core.async.close_BANG_.call(null,tc);var inst_37443 = cljs.core.async.close_BANG_.call(null,fc);var state_37458__$1 = (function (){var statearr_37464 = state_37458;(statearr_37464[8] = inst_37442);
return statearr_37464;
})();var statearr_37465_37484 = state_37458__$1;(statearr_37465_37484[2] = inst_37443);
(statearr_37465_37484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 6))
{var inst_37439 = (state_37458[7]);var inst_37445 = p.call(null,inst_37439);var state_37458__$1 = state_37458;if(cljs.core.truth_(inst_37445))
{var statearr_37466_37485 = state_37458__$1;(statearr_37466_37485[1] = 9);
} else
{var statearr_37467_37486 = state_37458__$1;(statearr_37467_37486[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 7))
{var inst_37454 = (state_37458[2]);var state_37458__$1 = state_37458;var statearr_37468_37487 = state_37458__$1;(statearr_37468_37487[2] = inst_37454);
(statearr_37468_37487[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 8))
{var inst_37451 = (state_37458[2]);var state_37458__$1 = (function (){var statearr_37469 = state_37458;(statearr_37469[9] = inst_37451);
return statearr_37469;
})();var statearr_37470_37488 = state_37458__$1;(statearr_37470_37488[2] = null);
(statearr_37470_37488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 9))
{var state_37458__$1 = state_37458;var statearr_37471_37489 = state_37458__$1;(statearr_37471_37489[2] = tc);
(statearr_37471_37489[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 10))
{var state_37458__$1 = state_37458;var statearr_37472_37490 = state_37458__$1;(statearr_37472_37490[2] = fc);
(statearr_37472_37490[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37459 === 11))
{var inst_37439 = (state_37458[7]);var inst_37449 = (state_37458[2]);var state_37458__$1 = state_37458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37458__$1,8,inst_37449,inst_37439);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_37476 = (new Array(10));(statearr_37476[0] = state_machine__13894__auto__);
(statearr_37476[1] = 1);
return statearr_37476;
});
var state_machine__13894__auto____1 = (function (state_37458){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_37458);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e37477){if((e37477 instanceof Object))
{var ex__13897__auto__ = e37477;var statearr_37478_37491 = state_37458;(statearr_37478_37491[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37492 = state_37458;
state_37458 = G__37492;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_37458){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_37458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_37479 = f__13964__auto__.call(null);(statearr_37479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___37480);
return statearr_37479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_37539){var state_val_37540 = (state_37539[1]);if((state_val_37540 === 7))
{var inst_37535 = (state_37539[2]);var state_37539__$1 = state_37539;var statearr_37541_37557 = state_37539__$1;(statearr_37541_37557[2] = inst_37535);
(statearr_37541_37557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37540 === 6))
{var inst_37525 = (state_37539[7]);var inst_37528 = (state_37539[8]);var inst_37532 = f.call(null,inst_37525,inst_37528);var inst_37525__$1 = inst_37532;var state_37539__$1 = (function (){var statearr_37542 = state_37539;(statearr_37542[7] = inst_37525__$1);
return statearr_37542;
})();var statearr_37543_37558 = state_37539__$1;(statearr_37543_37558[2] = null);
(statearr_37543_37558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37540 === 5))
{var inst_37525 = (state_37539[7]);var state_37539__$1 = state_37539;var statearr_37544_37559 = state_37539__$1;(statearr_37544_37559[2] = inst_37525);
(statearr_37544_37559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37540 === 4))
{var inst_37528 = (state_37539[8]);var inst_37528__$1 = (state_37539[2]);var inst_37529 = (inst_37528__$1 == null);var state_37539__$1 = (function (){var statearr_37545 = state_37539;(statearr_37545[8] = inst_37528__$1);
return statearr_37545;
})();if(cljs.core.truth_(inst_37529))
{var statearr_37546_37560 = state_37539__$1;(statearr_37546_37560[1] = 5);
} else
{var statearr_37547_37561 = state_37539__$1;(statearr_37547_37561[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37540 === 3))
{var inst_37537 = (state_37539[2]);var state_37539__$1 = state_37539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37539__$1,inst_37537);
} else
{if((state_val_37540 === 2))
{var state_37539__$1 = state_37539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37539__$1,4,ch);
} else
{if((state_val_37540 === 1))
{var inst_37525 = init;var state_37539__$1 = (function (){var statearr_37548 = state_37539;(statearr_37548[7] = inst_37525);
return statearr_37548;
})();var statearr_37549_37562 = state_37539__$1;(statearr_37549_37562[2] = null);
(statearr_37549_37562[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_37553 = (new Array(9));(statearr_37553[0] = state_machine__13894__auto__);
(statearr_37553[1] = 1);
return statearr_37553;
});
var state_machine__13894__auto____1 = (function (state_37539){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_37539);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e37554){if((e37554 instanceof Object))
{var ex__13897__auto__ = e37554;var statearr_37555_37563 = state_37539;(statearr_37555_37563[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37564 = state_37539;
state_37539 = G__37564;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_37539){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_37539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_37556 = f__13964__auto__.call(null);(statearr_37556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_37556;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_37626){var state_val_37627 = (state_37626[1]);if((state_val_37627 === 1))
{var inst_37606 = cljs.core.seq.call(null,coll);var inst_37607 = inst_37606;var state_37626__$1 = (function (){var statearr_37628 = state_37626;(statearr_37628[7] = inst_37607);
return statearr_37628;
})();var statearr_37629_37647 = state_37626__$1;(statearr_37629_37647[2] = null);
(statearr_37629_37647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 2))
{var inst_37607 = (state_37626[7]);var state_37626__$1 = state_37626;if(cljs.core.truth_(inst_37607))
{var statearr_37630_37648 = state_37626__$1;(statearr_37630_37648[1] = 4);
} else
{var statearr_37631_37649 = state_37626__$1;(statearr_37631_37649[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 3))
{var inst_37624 = (state_37626[2]);var state_37626__$1 = state_37626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37626__$1,inst_37624);
} else
{if((state_val_37627 === 4))
{var inst_37607 = (state_37626[7]);var inst_37610 = cljs.core.first.call(null,inst_37607);var state_37626__$1 = state_37626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37626__$1,7,ch,inst_37610);
} else
{if((state_val_37627 === 5))
{var state_37626__$1 = state_37626;if(cljs.core.truth_(close_QMARK_))
{var statearr_37632_37650 = state_37626__$1;(statearr_37632_37650[1] = 8);
} else
{var statearr_37633_37651 = state_37626__$1;(statearr_37633_37651[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 6))
{var inst_37622 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37634_37652 = state_37626__$1;(statearr_37634_37652[2] = inst_37622);
(statearr_37634_37652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 7))
{var inst_37607 = (state_37626[7]);var inst_37612 = (state_37626[2]);var inst_37613 = cljs.core.next.call(null,inst_37607);var inst_37607__$1 = inst_37613;var state_37626__$1 = (function (){var statearr_37635 = state_37626;(statearr_37635[7] = inst_37607__$1);
(statearr_37635[8] = inst_37612);
return statearr_37635;
})();var statearr_37636_37653 = state_37626__$1;(statearr_37636_37653[2] = null);
(statearr_37636_37653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 8))
{var inst_37617 = cljs.core.async.close_BANG_.call(null,ch);var state_37626__$1 = state_37626;var statearr_37637_37654 = state_37626__$1;(statearr_37637_37654[2] = inst_37617);
(statearr_37637_37654[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 9))
{var state_37626__$1 = state_37626;var statearr_37638_37655 = state_37626__$1;(statearr_37638_37655[2] = null);
(statearr_37638_37655[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37627 === 10))
{var inst_37620 = (state_37626[2]);var state_37626__$1 = state_37626;var statearr_37639_37656 = state_37626__$1;(statearr_37639_37656[2] = inst_37620);
(statearr_37639_37656[1] = 6);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_37643 = (new Array(9));(statearr_37643[0] = state_machine__13894__auto__);
(statearr_37643[1] = 1);
return statearr_37643;
});
var state_machine__13894__auto____1 = (function (state_37626){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_37626);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e37644){if((e37644 instanceof Object))
{var ex__13897__auto__ = e37644;var statearr_37645_37657 = state_37626;(statearr_37645_37657[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37658 = state_37626;
state_37626 = G__37658;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_37626){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_37626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_37646 = f__13964__auto__.call(null);(statearr_37646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_37646;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
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
cljs.core.async.Mux = (function (){var obj37660 = {};return obj37660;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10885__auto__ = _;if(and__10885__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__11500__auto__ = (((_ == null))?null:_);return (function (){var or__10897__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37662 = {};return obj37662;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37877 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37877 = (function (cs,ch,mult,meta37878){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37878 = meta37878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37877.cljs$lang$type = true;
cljs.core.async.t37877.cljs$lang$ctorStr = "cljs.core.async/t37877";
cljs.core.async.t37877.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t37877");
});})(cs))
;
cljs.core.async.t37877.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37877.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37877.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37877.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37877.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37879){var self__ = this;
var _37879__$1 = this;return self__.meta37878;
});})(cs))
;
cljs.core.async.t37877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37879,meta37878__$1){var self__ = this;
var _37879__$1 = this;return (new cljs.core.async.t37877(self__.cs,self__.ch,self__.mult,meta37878__$1));
});})(cs))
;
cljs.core.async.__GT_t37877 = ((function (cs){
return (function __GT_t37877(cs__$1,ch__$1,mult__$1,meta37878){return (new cljs.core.async.t37877(cs__$1,ch__$1,mult__$1,meta37878));
});})(cs))
;
}
return (new cljs.core.async.t37877(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13963__auto___38091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_38009){var state_val_38010 = (state_38009[1]);if((state_val_38010 === 32))
{var inst_37958 = (state_38009[7]);var inst_37882 = (state_38009[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38009,31,Object,null,30);var inst_37965 = cljs.core.async.put_BANG_.call(null,inst_37958,inst_37882,done);var state_38009__$1 = state_38009;var statearr_38011_38092 = state_38009__$1;(statearr_38011_38092[2] = inst_37965);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 1))
{var state_38009__$1 = state_38009;var statearr_38012_38093 = state_38009__$1;(statearr_38012_38093[2] = null);
(statearr_38012_38093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 33))
{var inst_37971 = (state_38009[9]);var inst_37973 = cljs.core.chunked_seq_QMARK_.call(null,inst_37971);var state_38009__$1 = state_38009;if(inst_37973)
{var statearr_38013_38094 = state_38009__$1;(statearr_38013_38094[1] = 36);
} else
{var statearr_38014_38095 = state_38009__$1;(statearr_38014_38095[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 2))
{var state_38009__$1 = state_38009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,4,ch);
} else
{if((state_val_38010 === 34))
{var state_38009__$1 = state_38009;var statearr_38015_38096 = state_38009__$1;(statearr_38015_38096[2] = null);
(statearr_38015_38096[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 3))
{var inst_38007 = (state_38009[2]);var state_38009__$1 = state_38009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38009__$1,inst_38007);
} else
{if((state_val_38010 === 35))
{var inst_37996 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38016_38097 = state_38009__$1;(statearr_38016_38097[2] = inst_37996);
(statearr_38016_38097[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 4))
{var inst_37882 = (state_38009[8]);var inst_37882__$1 = (state_38009[2]);var inst_37883 = (inst_37882__$1 == null);var state_38009__$1 = (function (){var statearr_38017 = state_38009;(statearr_38017[8] = inst_37882__$1);
return statearr_38017;
})();if(cljs.core.truth_(inst_37883))
{var statearr_38018_38098 = state_38009__$1;(statearr_38018_38098[1] = 5);
} else
{var statearr_38019_38099 = state_38009__$1;(statearr_38019_38099[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 36))
{var inst_37971 = (state_38009[9]);var inst_37975 = cljs.core.chunk_first.call(null,inst_37971);var inst_37976 = cljs.core.chunk_rest.call(null,inst_37971);var inst_37977 = cljs.core.count.call(null,inst_37975);var inst_37950 = inst_37976;var inst_37951 = inst_37975;var inst_37952 = inst_37977;var inst_37953 = 0;var state_38009__$1 = (function (){var statearr_38020 = state_38009;(statearr_38020[10] = inst_37950);
(statearr_38020[11] = inst_37953);
(statearr_38020[12] = inst_37952);
(statearr_38020[13] = inst_37951);
return statearr_38020;
})();var statearr_38021_38100 = state_38009__$1;(statearr_38021_38100[2] = null);
(statearr_38021_38100[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 5))
{var inst_37889 = cljs.core.deref.call(null,cs);var inst_37890 = cljs.core.seq.call(null,inst_37889);var inst_37891 = inst_37890;var inst_37892 = null;var inst_37893 = 0;var inst_37894 = 0;var state_38009__$1 = (function (){var statearr_38022 = state_38009;(statearr_38022[14] = inst_37894);
(statearr_38022[15] = inst_37892);
(statearr_38022[16] = inst_37893);
(statearr_38022[17] = inst_37891);
return statearr_38022;
})();var statearr_38023_38101 = state_38009__$1;(statearr_38023_38101[2] = null);
(statearr_38023_38101[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 37))
{var inst_37971 = (state_38009[9]);var inst_37980 = cljs.core.first.call(null,inst_37971);var state_38009__$1 = (function (){var statearr_38024 = state_38009;(statearr_38024[18] = inst_37980);
return statearr_38024;
})();var statearr_38025_38102 = state_38009__$1;(statearr_38025_38102[2] = null);
(statearr_38025_38102[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 6))
{var inst_37941 = cljs.core.deref.call(null,cs);var inst_37942 = cljs.core.keys.call(null,inst_37941);var inst_37943 = cljs.core.count.call(null,inst_37942);var inst_37944 = cljs.core.reset_BANG_.call(null,dctr,inst_37943);var inst_37949 = cljs.core.seq.call(null,inst_37942);var inst_37950 = inst_37949;var inst_37951 = null;var inst_37952 = 0;var inst_37953 = 0;var state_38009__$1 = (function (){var statearr_38026 = state_38009;(statearr_38026[10] = inst_37950);
(statearr_38026[19] = inst_37944);
(statearr_38026[11] = inst_37953);
(statearr_38026[12] = inst_37952);
(statearr_38026[13] = inst_37951);
return statearr_38026;
})();var statearr_38027_38103 = state_38009__$1;(statearr_38027_38103[2] = null);
(statearr_38027_38103[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 38))
{var inst_37993 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38028_38104 = state_38009__$1;(statearr_38028_38104[2] = inst_37993);
(statearr_38028_38104[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 7))
{var inst_38005 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38029_38105 = state_38009__$1;(statearr_38029_38105[2] = inst_38005);
(statearr_38029_38105[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 39))
{var inst_37971 = (state_38009[9]);var inst_37989 = (state_38009[2]);var inst_37990 = cljs.core.next.call(null,inst_37971);var inst_37950 = inst_37990;var inst_37951 = null;var inst_37952 = 0;var inst_37953 = 0;var state_38009__$1 = (function (){var statearr_38030 = state_38009;(statearr_38030[10] = inst_37950);
(statearr_38030[11] = inst_37953);
(statearr_38030[20] = inst_37989);
(statearr_38030[12] = inst_37952);
(statearr_38030[13] = inst_37951);
return statearr_38030;
})();var statearr_38031_38106 = state_38009__$1;(statearr_38031_38106[2] = null);
(statearr_38031_38106[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 8))
{var inst_37894 = (state_38009[14]);var inst_37893 = (state_38009[16]);var inst_37896 = (inst_37894 < inst_37893);var inst_37897 = inst_37896;var state_38009__$1 = state_38009;if(cljs.core.truth_(inst_37897))
{var statearr_38032_38107 = state_38009__$1;(statearr_38032_38107[1] = 10);
} else
{var statearr_38033_38108 = state_38009__$1;(statearr_38033_38108[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 40))
{var inst_37980 = (state_38009[18]);var inst_37981 = (state_38009[2]);var inst_37982 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_37983 = cljs.core.async.untap_STAR_.call(null,m,inst_37980);var state_38009__$1 = (function (){var statearr_38034 = state_38009;(statearr_38034[21] = inst_37982);
(statearr_38034[22] = inst_37981);
return statearr_38034;
})();var statearr_38035_38109 = state_38009__$1;(statearr_38035_38109[2] = inst_37983);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 9))
{var inst_37939 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38036_38110 = state_38009__$1;(statearr_38036_38110[2] = inst_37939);
(statearr_38036_38110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 41))
{var inst_37882 = (state_38009[8]);var inst_37980 = (state_38009[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38009,40,Object,null,39);var inst_37987 = cljs.core.async.put_BANG_.call(null,inst_37980,inst_37882,done);var state_38009__$1 = state_38009;var statearr_38037_38111 = state_38009__$1;(statearr_38037_38111[2] = inst_37987);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 10))
{var inst_37894 = (state_38009[14]);var inst_37892 = (state_38009[15]);var inst_37900 = cljs.core._nth.call(null,inst_37892,inst_37894);var inst_37901 = cljs.core.nth.call(null,inst_37900,0,null);var inst_37902 = cljs.core.nth.call(null,inst_37900,1,null);var state_38009__$1 = (function (){var statearr_38038 = state_38009;(statearr_38038[23] = inst_37901);
return statearr_38038;
})();if(cljs.core.truth_(inst_37902))
{var statearr_38039_38112 = state_38009__$1;(statearr_38039_38112[1] = 13);
} else
{var statearr_38040_38113 = state_38009__$1;(statearr_38040_38113[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 42))
{var inst_38002 = (state_38009[2]);var state_38009__$1 = (function (){var statearr_38041 = state_38009;(statearr_38041[24] = inst_38002);
return statearr_38041;
})();var statearr_38042_38114 = state_38009__$1;(statearr_38042_38114[2] = null);
(statearr_38042_38114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 11))
{var inst_37911 = (state_38009[25]);var inst_37891 = (state_38009[17]);var inst_37911__$1 = cljs.core.seq.call(null,inst_37891);var state_38009__$1 = (function (){var statearr_38043 = state_38009;(statearr_38043[25] = inst_37911__$1);
return statearr_38043;
})();if(inst_37911__$1)
{var statearr_38044_38115 = state_38009__$1;(statearr_38044_38115[1] = 16);
} else
{var statearr_38045_38116 = state_38009__$1;(statearr_38045_38116[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 12))
{var inst_37937 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38046_38117 = state_38009__$1;(statearr_38046_38117[2] = inst_37937);
(statearr_38046_38117[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 13))
{var inst_37901 = (state_38009[23]);var inst_37904 = cljs.core.async.close_BANG_.call(null,inst_37901);var state_38009__$1 = state_38009;var statearr_38050_38118 = state_38009__$1;(statearr_38050_38118[2] = inst_37904);
(statearr_38050_38118[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 14))
{var state_38009__$1 = state_38009;var statearr_38051_38119 = state_38009__$1;(statearr_38051_38119[2] = null);
(statearr_38051_38119[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 15))
{var inst_37894 = (state_38009[14]);var inst_37892 = (state_38009[15]);var inst_37893 = (state_38009[16]);var inst_37891 = (state_38009[17]);var inst_37907 = (state_38009[2]);var inst_37908 = (inst_37894 + 1);var tmp38047 = inst_37892;var tmp38048 = inst_37893;var tmp38049 = inst_37891;var inst_37891__$1 = tmp38049;var inst_37892__$1 = tmp38047;var inst_37893__$1 = tmp38048;var inst_37894__$1 = inst_37908;var state_38009__$1 = (function (){var statearr_38052 = state_38009;(statearr_38052[14] = inst_37894__$1);
(statearr_38052[15] = inst_37892__$1);
(statearr_38052[26] = inst_37907);
(statearr_38052[16] = inst_37893__$1);
(statearr_38052[17] = inst_37891__$1);
return statearr_38052;
})();var statearr_38053_38120 = state_38009__$1;(statearr_38053_38120[2] = null);
(statearr_38053_38120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 16))
{var inst_37911 = (state_38009[25]);var inst_37913 = cljs.core.chunked_seq_QMARK_.call(null,inst_37911);var state_38009__$1 = state_38009;if(inst_37913)
{var statearr_38054_38121 = state_38009__$1;(statearr_38054_38121[1] = 19);
} else
{var statearr_38055_38122 = state_38009__$1;(statearr_38055_38122[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 17))
{var state_38009__$1 = state_38009;var statearr_38056_38123 = state_38009__$1;(statearr_38056_38123[2] = null);
(statearr_38056_38123[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 18))
{var inst_37935 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38057_38124 = state_38009__$1;(statearr_38057_38124[2] = inst_37935);
(statearr_38057_38124[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 19))
{var inst_37911 = (state_38009[25]);var inst_37915 = cljs.core.chunk_first.call(null,inst_37911);var inst_37916 = cljs.core.chunk_rest.call(null,inst_37911);var inst_37917 = cljs.core.count.call(null,inst_37915);var inst_37891 = inst_37916;var inst_37892 = inst_37915;var inst_37893 = inst_37917;var inst_37894 = 0;var state_38009__$1 = (function (){var statearr_38058 = state_38009;(statearr_38058[14] = inst_37894);
(statearr_38058[15] = inst_37892);
(statearr_38058[16] = inst_37893);
(statearr_38058[17] = inst_37891);
return statearr_38058;
})();var statearr_38059_38125 = state_38009__$1;(statearr_38059_38125[2] = null);
(statearr_38059_38125[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 20))
{var inst_37911 = (state_38009[25]);var inst_37921 = cljs.core.first.call(null,inst_37911);var inst_37922 = cljs.core.nth.call(null,inst_37921,0,null);var inst_37923 = cljs.core.nth.call(null,inst_37921,1,null);var state_38009__$1 = (function (){var statearr_38060 = state_38009;(statearr_38060[27] = inst_37922);
return statearr_38060;
})();if(cljs.core.truth_(inst_37923))
{var statearr_38061_38126 = state_38009__$1;(statearr_38061_38126[1] = 22);
} else
{var statearr_38062_38127 = state_38009__$1;(statearr_38062_38127[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 21))
{var inst_37932 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38063_38128 = state_38009__$1;(statearr_38063_38128[2] = inst_37932);
(statearr_38063_38128[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 22))
{var inst_37922 = (state_38009[27]);var inst_37925 = cljs.core.async.close_BANG_.call(null,inst_37922);var state_38009__$1 = state_38009;var statearr_38064_38129 = state_38009__$1;(statearr_38064_38129[2] = inst_37925);
(statearr_38064_38129[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 23))
{var state_38009__$1 = state_38009;var statearr_38065_38130 = state_38009__$1;(statearr_38065_38130[2] = null);
(statearr_38065_38130[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 24))
{var inst_37911 = (state_38009[25]);var inst_37928 = (state_38009[2]);var inst_37929 = cljs.core.next.call(null,inst_37911);var inst_37891 = inst_37929;var inst_37892 = null;var inst_37893 = 0;var inst_37894 = 0;var state_38009__$1 = (function (){var statearr_38066 = state_38009;(statearr_38066[28] = inst_37928);
(statearr_38066[14] = inst_37894);
(statearr_38066[15] = inst_37892);
(statearr_38066[16] = inst_37893);
(statearr_38066[17] = inst_37891);
return statearr_38066;
})();var statearr_38067_38131 = state_38009__$1;(statearr_38067_38131[2] = null);
(statearr_38067_38131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 25))
{var inst_37953 = (state_38009[11]);var inst_37952 = (state_38009[12]);var inst_37955 = (inst_37953 < inst_37952);var inst_37956 = inst_37955;var state_38009__$1 = state_38009;if(cljs.core.truth_(inst_37956))
{var statearr_38068_38132 = state_38009__$1;(statearr_38068_38132[1] = 27);
} else
{var statearr_38069_38133 = state_38009__$1;(statearr_38069_38133[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 26))
{var inst_38000 = (state_38009[2]);var state_38009__$1 = (function (){var statearr_38070 = state_38009;(statearr_38070[29] = inst_38000);
return statearr_38070;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38009__$1,42,dchan);
} else
{if((state_val_38010 === 27))
{var inst_37953 = (state_38009[11]);var inst_37951 = (state_38009[13]);var inst_37958 = cljs.core._nth.call(null,inst_37951,inst_37953);var state_38009__$1 = (function (){var statearr_38071 = state_38009;(statearr_38071[7] = inst_37958);
return statearr_38071;
})();var statearr_38072_38134 = state_38009__$1;(statearr_38072_38134[2] = null);
(statearr_38072_38134[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 28))
{var inst_37950 = (state_38009[10]);var inst_37971 = (state_38009[9]);var inst_37971__$1 = cljs.core.seq.call(null,inst_37950);var state_38009__$1 = (function (){var statearr_38076 = state_38009;(statearr_38076[9] = inst_37971__$1);
return statearr_38076;
})();if(inst_37971__$1)
{var statearr_38077_38135 = state_38009__$1;(statearr_38077_38135[1] = 33);
} else
{var statearr_38078_38136 = state_38009__$1;(statearr_38078_38136[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 29))
{var inst_37998 = (state_38009[2]);var state_38009__$1 = state_38009;var statearr_38079_38137 = state_38009__$1;(statearr_38079_38137[2] = inst_37998);
(statearr_38079_38137[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 30))
{var inst_37950 = (state_38009[10]);var inst_37953 = (state_38009[11]);var inst_37952 = (state_38009[12]);var inst_37951 = (state_38009[13]);var inst_37967 = (state_38009[2]);var inst_37968 = (inst_37953 + 1);var tmp38073 = inst_37950;var tmp38074 = inst_37952;var tmp38075 = inst_37951;var inst_37950__$1 = tmp38073;var inst_37951__$1 = tmp38075;var inst_37952__$1 = tmp38074;var inst_37953__$1 = inst_37968;var state_38009__$1 = (function (){var statearr_38080 = state_38009;(statearr_38080[10] = inst_37950__$1);
(statearr_38080[11] = inst_37953__$1);
(statearr_38080[12] = inst_37952__$1);
(statearr_38080[13] = inst_37951__$1);
(statearr_38080[30] = inst_37967);
return statearr_38080;
})();var statearr_38081_38138 = state_38009__$1;(statearr_38081_38138[2] = null);
(statearr_38081_38138[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38010 === 31))
{var inst_37958 = (state_38009[7]);var inst_37959 = (state_38009[2]);var inst_37960 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_37961 = cljs.core.async.untap_STAR_.call(null,m,inst_37958);var state_38009__$1 = (function (){var statearr_38082 = state_38009;(statearr_38082[31] = inst_37960);
(statearr_38082[32] = inst_37959);
return statearr_38082;
})();var statearr_38083_38139 = state_38009__$1;(statearr_38083_38139[2] = inst_37961);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009__$1);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_38087 = (new Array(33));(statearr_38087[0] = state_machine__13894__auto__);
(statearr_38087[1] = 1);
return statearr_38087;
});
var state_machine__13894__auto____1 = (function (state_38009){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_38009);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e38088){if((e38088 instanceof Object))
{var ex__13897__auto__ = e38088;var statearr_38089_38140 = state_38009;(statearr_38089_38140[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38141 = state_38009;
state_38009 = G__38141;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_38009){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_38009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_38090 = f__13964__auto__.call(null);(statearr_38090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___38091);
return statearr_38090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.Mix = (function (){var obj38143 = {};return obj38143;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t38253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38253 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta38254){
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
this.meta38254 = meta38254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38253.cljs$lang$type = true;
cljs.core.async.t38253.cljs$lang$ctorStr = "cljs.core.async/t38253";
cljs.core.async.t38253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t38253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38255){var self__ = this;
var _38255__$1 = this;return self__.meta38254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38255,meta38254__$1){var self__ = this;
var _38255__$1 = this;return (new cljs.core.async.t38253(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta38254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta38254){return (new cljs.core.async.t38253(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta38254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38253(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13963__auto___38362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_38320){var state_val_38321 = (state_38320[1]);if((state_val_38321 === 1))
{var inst_38259 = (state_38320[7]);var inst_38259__$1 = calc_state.call(null);var inst_38260 = cljs.core.seq_QMARK_.call(null,inst_38259__$1);var state_38320__$1 = (function (){var statearr_38322 = state_38320;(statearr_38322[7] = inst_38259__$1);
return statearr_38322;
})();if(inst_38260)
{var statearr_38323_38363 = state_38320__$1;(statearr_38323_38363[1] = 2);
} else
{var statearr_38324_38364 = state_38320__$1;(statearr_38324_38364[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 2))
{var inst_38259 = (state_38320[7]);var inst_38262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38259);var state_38320__$1 = state_38320;var statearr_38325_38365 = state_38320__$1;(statearr_38325_38365[2] = inst_38262);
(statearr_38325_38365[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 3))
{var inst_38259 = (state_38320[7]);var state_38320__$1 = state_38320;var statearr_38326_38366 = state_38320__$1;(statearr_38326_38366[2] = inst_38259);
(statearr_38326_38366[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 4))
{var inst_38259 = (state_38320[7]);var inst_38265 = (state_38320[2]);var inst_38266 = cljs.core.get.call(null,inst_38265,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38267 = cljs.core.get.call(null,inst_38265,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38268 = cljs.core.get.call(null,inst_38265,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_38269 = inst_38259;var state_38320__$1 = (function (){var statearr_38327 = state_38320;(statearr_38327[8] = inst_38268);
(statearr_38327[9] = inst_38269);
(statearr_38327[10] = inst_38266);
(statearr_38327[11] = inst_38267);
return statearr_38327;
})();var statearr_38328_38367 = state_38320__$1;(statearr_38328_38367[2] = null);
(statearr_38328_38367[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 5))
{var inst_38269 = (state_38320[9]);var inst_38272 = cljs.core.seq_QMARK_.call(null,inst_38269);var state_38320__$1 = state_38320;if(inst_38272)
{var statearr_38329_38368 = state_38320__$1;(statearr_38329_38368[1] = 7);
} else
{var statearr_38330_38369 = state_38320__$1;(statearr_38330_38369[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 6))
{var inst_38318 = (state_38320[2]);var state_38320__$1 = state_38320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38320__$1,inst_38318);
} else
{if((state_val_38321 === 7))
{var inst_38269 = (state_38320[9]);var inst_38274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38269);var state_38320__$1 = state_38320;var statearr_38331_38370 = state_38320__$1;(statearr_38331_38370[2] = inst_38274);
(statearr_38331_38370[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 8))
{var inst_38269 = (state_38320[9]);var state_38320__$1 = state_38320;var statearr_38332_38371 = state_38320__$1;(statearr_38332_38371[2] = inst_38269);
(statearr_38332_38371[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 9))
{var inst_38277 = (state_38320[12]);var inst_38277__$1 = (state_38320[2]);var inst_38278 = cljs.core.get.call(null,inst_38277__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38279 = cljs.core.get.call(null,inst_38277__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38280 = cljs.core.get.call(null,inst_38277__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_38320__$1 = (function (){var statearr_38333 = state_38320;(statearr_38333[13] = inst_38279);
(statearr_38333[14] = inst_38280);
(statearr_38333[12] = inst_38277__$1);
return statearr_38333;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_38320__$1,10,inst_38278);
} else
{if((state_val_38321 === 10))
{var inst_38285 = (state_38320[15]);var inst_38284 = (state_38320[16]);var inst_38283 = (state_38320[2]);var inst_38284__$1 = cljs.core.nth.call(null,inst_38283,0,null);var inst_38285__$1 = cljs.core.nth.call(null,inst_38283,1,null);var inst_38286 = (inst_38284__$1 == null);var inst_38287 = cljs.core._EQ_.call(null,inst_38285__$1,change);var inst_38288 = (inst_38286) || (inst_38287);var state_38320__$1 = (function (){var statearr_38334 = state_38320;(statearr_38334[15] = inst_38285__$1);
(statearr_38334[16] = inst_38284__$1);
return statearr_38334;
})();if(cljs.core.truth_(inst_38288))
{var statearr_38335_38372 = state_38320__$1;(statearr_38335_38372[1] = 11);
} else
{var statearr_38336_38373 = state_38320__$1;(statearr_38336_38373[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 11))
{var inst_38284 = (state_38320[16]);var inst_38290 = (inst_38284 == null);var state_38320__$1 = state_38320;if(cljs.core.truth_(inst_38290))
{var statearr_38337_38374 = state_38320__$1;(statearr_38337_38374[1] = 14);
} else
{var statearr_38338_38375 = state_38320__$1;(statearr_38338_38375[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 12))
{var inst_38285 = (state_38320[15]);var inst_38299 = (state_38320[17]);var inst_38280 = (state_38320[14]);var inst_38299__$1 = inst_38280.call(null,inst_38285);var state_38320__$1 = (function (){var statearr_38339 = state_38320;(statearr_38339[17] = inst_38299__$1);
return statearr_38339;
})();if(cljs.core.truth_(inst_38299__$1))
{var statearr_38340_38376 = state_38320__$1;(statearr_38340_38376[1] = 17);
} else
{var statearr_38341_38377 = state_38320__$1;(statearr_38341_38377[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 13))
{var inst_38316 = (state_38320[2]);var state_38320__$1 = state_38320;var statearr_38342_38378 = state_38320__$1;(statearr_38342_38378[2] = inst_38316);
(statearr_38342_38378[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 14))
{var inst_38285 = (state_38320[15]);var inst_38292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38285);var state_38320__$1 = state_38320;var statearr_38343_38379 = state_38320__$1;(statearr_38343_38379[2] = inst_38292);
(statearr_38343_38379[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 15))
{var state_38320__$1 = state_38320;var statearr_38344_38380 = state_38320__$1;(statearr_38344_38380[2] = null);
(statearr_38344_38380[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 16))
{var inst_38295 = (state_38320[2]);var inst_38296 = calc_state.call(null);var inst_38269 = inst_38296;var state_38320__$1 = (function (){var statearr_38345 = state_38320;(statearr_38345[18] = inst_38295);
(statearr_38345[9] = inst_38269);
return statearr_38345;
})();var statearr_38346_38381 = state_38320__$1;(statearr_38346_38381[2] = null);
(statearr_38346_38381[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 17))
{var inst_38299 = (state_38320[17]);var state_38320__$1 = state_38320;var statearr_38347_38382 = state_38320__$1;(statearr_38347_38382[2] = inst_38299);
(statearr_38347_38382[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 18))
{var inst_38285 = (state_38320[15]);var inst_38279 = (state_38320[13]);var inst_38280 = (state_38320[14]);var inst_38302 = cljs.core.empty_QMARK_.call(null,inst_38280);var inst_38303 = inst_38279.call(null,inst_38285);var inst_38304 = cljs.core.not.call(null,inst_38303);var inst_38305 = (inst_38302) && (inst_38304);var state_38320__$1 = state_38320;var statearr_38348_38383 = state_38320__$1;(statearr_38348_38383[2] = inst_38305);
(statearr_38348_38383[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 19))
{var inst_38307 = (state_38320[2]);var state_38320__$1 = state_38320;if(cljs.core.truth_(inst_38307))
{var statearr_38349_38384 = state_38320__$1;(statearr_38349_38384[1] = 20);
} else
{var statearr_38350_38385 = state_38320__$1;(statearr_38350_38385[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 20))
{var inst_38284 = (state_38320[16]);var state_38320__$1 = state_38320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38320__$1,23,out,inst_38284);
} else
{if((state_val_38321 === 21))
{var state_38320__$1 = state_38320;var statearr_38351_38386 = state_38320__$1;(statearr_38351_38386[2] = null);
(statearr_38351_38386[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 22))
{var inst_38277 = (state_38320[12]);var inst_38313 = (state_38320[2]);var inst_38269 = inst_38277;var state_38320__$1 = (function (){var statearr_38352 = state_38320;(statearr_38352[9] = inst_38269);
(statearr_38352[19] = inst_38313);
return statearr_38352;
})();var statearr_38353_38387 = state_38320__$1;(statearr_38353_38387[2] = null);
(statearr_38353_38387[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38321 === 23))
{var inst_38310 = (state_38320[2]);var state_38320__$1 = state_38320;var statearr_38354_38388 = state_38320__$1;(statearr_38354_38388[2] = inst_38310);
(statearr_38354_38388[1] = 22);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_38358 = (new Array(20));(statearr_38358[0] = state_machine__13894__auto__);
(statearr_38358[1] = 1);
return statearr_38358;
});
var state_machine__13894__auto____1 = (function (state_38320){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_38320);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e38359){if((e38359 instanceof Object))
{var ex__13897__auto__ = e38359;var statearr_38360_38389 = state_38320;(statearr_38360_38389[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38390 = state_38320;
state_38320 = G__38390;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_38320){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_38320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_38361 = f__13964__auto__.call(null);(statearr_38361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___38362);
return statearr_38361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
cljs.core.async.Pub = (function (){var obj38392 = {};return obj38392;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
return (function (topic){var or__10897__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10897__auto__,mults){
return (function (p1__38393_SHARP_){if(cljs.core.truth_(p1__38393_SHARP_.call(null,topic)))
{return p1__38393_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__38393_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10897__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38518 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38519){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38519 = meta38519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38518.cljs$lang$type = true;
cljs.core.async.t38518.cljs$lang$ctorStr = "cljs.core.async/t38518";
cljs.core.async.t38518.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write.call(null,writer__11442__auto__,"cljs.core.async/t38518");
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38520){var self__ = this;
var _38520__$1 = this;return self__.meta38519;
});})(mults,ensure_mult))
;
cljs.core.async.t38518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38520,meta38519__$1){var self__ = this;
var _38520__$1 = this;return (new cljs.core.async.t38518(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38519__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38518 = ((function (mults,ensure_mult){
return (function __GT_t38518(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38519){return (new cljs.core.async.t38518(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38519));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38518(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13963__auto___38642 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_38594){var state_val_38595 = (state_38594[1]);if((state_val_38595 === 1))
{var state_38594__$1 = state_38594;var statearr_38596_38643 = state_38594__$1;(statearr_38596_38643[2] = null);
(statearr_38596_38643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 2))
{var state_38594__$1 = state_38594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38594__$1,4,ch);
} else
{if((state_val_38595 === 3))
{var inst_38592 = (state_38594[2]);var state_38594__$1 = state_38594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38594__$1,inst_38592);
} else
{if((state_val_38595 === 4))
{var inst_38523 = (state_38594[7]);var inst_38523__$1 = (state_38594[2]);var inst_38524 = (inst_38523__$1 == null);var state_38594__$1 = (function (){var statearr_38597 = state_38594;(statearr_38597[7] = inst_38523__$1);
return statearr_38597;
})();if(cljs.core.truth_(inst_38524))
{var statearr_38598_38644 = state_38594__$1;(statearr_38598_38644[1] = 5);
} else
{var statearr_38599_38645 = state_38594__$1;(statearr_38599_38645[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 5))
{var inst_38530 = cljs.core.deref.call(null,mults);var inst_38531 = cljs.core.vals.call(null,inst_38530);var inst_38532 = cljs.core.seq.call(null,inst_38531);var inst_38533 = inst_38532;var inst_38534 = null;var inst_38535 = 0;var inst_38536 = 0;var state_38594__$1 = (function (){var statearr_38600 = state_38594;(statearr_38600[8] = inst_38536);
(statearr_38600[9] = inst_38535);
(statearr_38600[10] = inst_38534);
(statearr_38600[11] = inst_38533);
return statearr_38600;
})();var statearr_38601_38646 = state_38594__$1;(statearr_38601_38646[2] = null);
(statearr_38601_38646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 6))
{var inst_38571 = (state_38594[12]);var inst_38573 = (state_38594[13]);var inst_38523 = (state_38594[7]);var inst_38571__$1 = topic_fn.call(null,inst_38523);var inst_38572 = cljs.core.deref.call(null,mults);var inst_38573__$1 = cljs.core.get.call(null,inst_38572,inst_38571__$1);var state_38594__$1 = (function (){var statearr_38602 = state_38594;(statearr_38602[12] = inst_38571__$1);
(statearr_38602[13] = inst_38573__$1);
return statearr_38602;
})();if(cljs.core.truth_(inst_38573__$1))
{var statearr_38603_38647 = state_38594__$1;(statearr_38603_38647[1] = 19);
} else
{var statearr_38604_38648 = state_38594__$1;(statearr_38604_38648[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 7))
{var inst_38590 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38605_38649 = state_38594__$1;(statearr_38605_38649[2] = inst_38590);
(statearr_38605_38649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 8))
{var inst_38536 = (state_38594[8]);var inst_38535 = (state_38594[9]);var inst_38538 = (inst_38536 < inst_38535);var inst_38539 = inst_38538;var state_38594__$1 = state_38594;if(cljs.core.truth_(inst_38539))
{var statearr_38609_38650 = state_38594__$1;(statearr_38609_38650[1] = 10);
} else
{var statearr_38610_38651 = state_38594__$1;(statearr_38610_38651[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 9))
{var inst_38569 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38611_38652 = state_38594__$1;(statearr_38611_38652[2] = inst_38569);
(statearr_38611_38652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 10))
{var inst_38536 = (state_38594[8]);var inst_38535 = (state_38594[9]);var inst_38534 = (state_38594[10]);var inst_38533 = (state_38594[11]);var inst_38541 = cljs.core._nth.call(null,inst_38534,inst_38536);var inst_38542 = cljs.core.async.muxch_STAR_.call(null,inst_38541);var inst_38543 = cljs.core.async.close_BANG_.call(null,inst_38542);var inst_38544 = (inst_38536 + 1);var tmp38606 = inst_38535;var tmp38607 = inst_38534;var tmp38608 = inst_38533;var inst_38533__$1 = tmp38608;var inst_38534__$1 = tmp38607;var inst_38535__$1 = tmp38606;var inst_38536__$1 = inst_38544;var state_38594__$1 = (function (){var statearr_38612 = state_38594;(statearr_38612[8] = inst_38536__$1);
(statearr_38612[9] = inst_38535__$1);
(statearr_38612[10] = inst_38534__$1);
(statearr_38612[11] = inst_38533__$1);
(statearr_38612[14] = inst_38543);
return statearr_38612;
})();var statearr_38613_38653 = state_38594__$1;(statearr_38613_38653[2] = null);
(statearr_38613_38653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 11))
{var inst_38533 = (state_38594[11]);var inst_38547 = (state_38594[15]);var inst_38547__$1 = cljs.core.seq.call(null,inst_38533);var state_38594__$1 = (function (){var statearr_38614 = state_38594;(statearr_38614[15] = inst_38547__$1);
return statearr_38614;
})();if(inst_38547__$1)
{var statearr_38615_38654 = state_38594__$1;(statearr_38615_38654[1] = 13);
} else
{var statearr_38616_38655 = state_38594__$1;(statearr_38616_38655[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 12))
{var inst_38567 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38617_38656 = state_38594__$1;(statearr_38617_38656[2] = inst_38567);
(statearr_38617_38656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 13))
{var inst_38547 = (state_38594[15]);var inst_38549 = cljs.core.chunked_seq_QMARK_.call(null,inst_38547);var state_38594__$1 = state_38594;if(inst_38549)
{var statearr_38618_38657 = state_38594__$1;(statearr_38618_38657[1] = 16);
} else
{var statearr_38619_38658 = state_38594__$1;(statearr_38619_38658[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 14))
{var state_38594__$1 = state_38594;var statearr_38620_38659 = state_38594__$1;(statearr_38620_38659[2] = null);
(statearr_38620_38659[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 15))
{var inst_38565 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38621_38660 = state_38594__$1;(statearr_38621_38660[2] = inst_38565);
(statearr_38621_38660[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 16))
{var inst_38547 = (state_38594[15]);var inst_38551 = cljs.core.chunk_first.call(null,inst_38547);var inst_38552 = cljs.core.chunk_rest.call(null,inst_38547);var inst_38553 = cljs.core.count.call(null,inst_38551);var inst_38533 = inst_38552;var inst_38534 = inst_38551;var inst_38535 = inst_38553;var inst_38536 = 0;var state_38594__$1 = (function (){var statearr_38622 = state_38594;(statearr_38622[8] = inst_38536);
(statearr_38622[9] = inst_38535);
(statearr_38622[10] = inst_38534);
(statearr_38622[11] = inst_38533);
return statearr_38622;
})();var statearr_38623_38661 = state_38594__$1;(statearr_38623_38661[2] = null);
(statearr_38623_38661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 17))
{var inst_38547 = (state_38594[15]);var inst_38556 = cljs.core.first.call(null,inst_38547);var inst_38557 = cljs.core.async.muxch_STAR_.call(null,inst_38556);var inst_38558 = cljs.core.async.close_BANG_.call(null,inst_38557);var inst_38559 = cljs.core.next.call(null,inst_38547);var inst_38533 = inst_38559;var inst_38534 = null;var inst_38535 = 0;var inst_38536 = 0;var state_38594__$1 = (function (){var statearr_38624 = state_38594;(statearr_38624[8] = inst_38536);
(statearr_38624[9] = inst_38535);
(statearr_38624[10] = inst_38534);
(statearr_38624[11] = inst_38533);
(statearr_38624[16] = inst_38558);
return statearr_38624;
})();var statearr_38625_38662 = state_38594__$1;(statearr_38625_38662[2] = null);
(statearr_38625_38662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 18))
{var inst_38562 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38626_38663 = state_38594__$1;(statearr_38626_38663[2] = inst_38562);
(statearr_38626_38663[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 19))
{var state_38594__$1 = state_38594;var statearr_38627_38664 = state_38594__$1;(statearr_38627_38664[2] = null);
(statearr_38627_38664[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 20))
{var state_38594__$1 = state_38594;var statearr_38628_38665 = state_38594__$1;(statearr_38628_38665[2] = null);
(statearr_38628_38665[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 21))
{var inst_38587 = (state_38594[2]);var state_38594__$1 = (function (){var statearr_38629 = state_38594;(statearr_38629[17] = inst_38587);
return statearr_38629;
})();var statearr_38630_38666 = state_38594__$1;(statearr_38630_38666[2] = null);
(statearr_38630_38666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 22))
{var inst_38584 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38631_38667 = state_38594__$1;(statearr_38631_38667[2] = inst_38584);
(statearr_38631_38667[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 23))
{var inst_38571 = (state_38594[12]);var inst_38575 = (state_38594[2]);var inst_38576 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38571);var state_38594__$1 = (function (){var statearr_38632 = state_38594;(statearr_38632[18] = inst_38575);
return statearr_38632;
})();var statearr_38633_38668 = state_38594__$1;(statearr_38633_38668[2] = inst_38576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38594__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38595 === 24))
{var inst_38573 = (state_38594[13]);var inst_38523 = (state_38594[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38594,23,Object,null,22);var inst_38580 = cljs.core.async.muxch_STAR_.call(null,inst_38573);var state_38594__$1 = state_38594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38594__$1,25,inst_38580,inst_38523);
} else
{if((state_val_38595 === 25))
{var inst_38582 = (state_38594[2]);var state_38594__$1 = state_38594;var statearr_38634_38669 = state_38594__$1;(statearr_38634_38669[2] = inst_38582);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38594__$1);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_38638 = (new Array(19));(statearr_38638[0] = state_machine__13894__auto__);
(statearr_38638[1] = 1);
return statearr_38638;
});
var state_machine__13894__auto____1 = (function (state_38594){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_38594);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e38639){if((e38639 instanceof Object))
{var ex__13897__auto__ = e38639;var statearr_38640_38670 = state_38594;(statearr_38640_38670[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38671 = state_38594;
state_38594 = G__38671;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_38594){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_38594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_38641 = f__13964__auto__.call(null);(statearr_38641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___38642);
return statearr_38641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
,cljs.core.range.call(null,cnt));var c__13963__auto___38808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_38778){var state_val_38779 = (state_38778[1]);if((state_val_38779 === 1))
{var state_38778__$1 = state_38778;var statearr_38780_38809 = state_38778__$1;(statearr_38780_38809[2] = null);
(statearr_38780_38809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 2))
{var inst_38741 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_38742 = 0;var state_38778__$1 = (function (){var statearr_38781 = state_38778;(statearr_38781[7] = inst_38741);
(statearr_38781[8] = inst_38742);
return statearr_38781;
})();var statearr_38782_38810 = state_38778__$1;(statearr_38782_38810[2] = null);
(statearr_38782_38810[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 3))
{var inst_38776 = (state_38778[2]);var state_38778__$1 = state_38778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38778__$1,inst_38776);
} else
{if((state_val_38779 === 4))
{var inst_38742 = (state_38778[8]);var inst_38744 = (inst_38742 < cnt);var state_38778__$1 = state_38778;if(cljs.core.truth_(inst_38744))
{var statearr_38783_38811 = state_38778__$1;(statearr_38783_38811[1] = 6);
} else
{var statearr_38784_38812 = state_38778__$1;(statearr_38784_38812[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 5))
{var inst_38762 = (state_38778[2]);var state_38778__$1 = (function (){var statearr_38785 = state_38778;(statearr_38785[9] = inst_38762);
return statearr_38785;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38778__$1,12,dchan);
} else
{if((state_val_38779 === 6))
{var state_38778__$1 = state_38778;var statearr_38786_38813 = state_38778__$1;(statearr_38786_38813[2] = null);
(statearr_38786_38813[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 7))
{var state_38778__$1 = state_38778;var statearr_38787_38814 = state_38778__$1;(statearr_38787_38814[2] = null);
(statearr_38787_38814[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 8))
{var inst_38760 = (state_38778[2]);var state_38778__$1 = state_38778;var statearr_38788_38815 = state_38778__$1;(statearr_38788_38815[2] = inst_38760);
(statearr_38788_38815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 9))
{var inst_38742 = (state_38778[8]);var inst_38755 = (state_38778[2]);var inst_38756 = (inst_38742 + 1);var inst_38742__$1 = inst_38756;var state_38778__$1 = (function (){var statearr_38789 = state_38778;(statearr_38789[8] = inst_38742__$1);
(statearr_38789[10] = inst_38755);
return statearr_38789;
})();var statearr_38790_38816 = state_38778__$1;(statearr_38790_38816[2] = null);
(statearr_38790_38816[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 10))
{var inst_38746 = (state_38778[2]);var inst_38747 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_38778__$1 = (function (){var statearr_38791 = state_38778;(statearr_38791[11] = inst_38746);
return statearr_38791;
})();var statearr_38792_38817 = state_38778__$1;(statearr_38792_38817[2] = inst_38747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 11))
{var inst_38742 = (state_38778[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38778,10,Object,null,9);var inst_38751 = chs__$1.call(null,inst_38742);var inst_38752 = done.call(null,inst_38742);var inst_38753 = cljs.core.async.take_BANG_.call(null,inst_38751,inst_38752);var state_38778__$1 = state_38778;var statearr_38793_38818 = state_38778__$1;(statearr_38793_38818[2] = inst_38753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38778__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 12))
{var inst_38764 = (state_38778[12]);var inst_38764__$1 = (state_38778[2]);var inst_38765 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38764__$1);var state_38778__$1 = (function (){var statearr_38794 = state_38778;(statearr_38794[12] = inst_38764__$1);
return statearr_38794;
})();if(cljs.core.truth_(inst_38765))
{var statearr_38795_38819 = state_38778__$1;(statearr_38795_38819[1] = 13);
} else
{var statearr_38796_38820 = state_38778__$1;(statearr_38796_38820[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 13))
{var inst_38767 = cljs.core.async.close_BANG_.call(null,out);var state_38778__$1 = state_38778;var statearr_38797_38821 = state_38778__$1;(statearr_38797_38821[2] = inst_38767);
(statearr_38797_38821[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 14))
{var inst_38764 = (state_38778[12]);var inst_38769 = cljs.core.apply.call(null,f,inst_38764);var state_38778__$1 = state_38778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38778__$1,16,out,inst_38769);
} else
{if((state_val_38779 === 15))
{var inst_38774 = (state_38778[2]);var state_38778__$1 = state_38778;var statearr_38798_38822 = state_38778__$1;(statearr_38798_38822[2] = inst_38774);
(statearr_38798_38822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38779 === 16))
{var inst_38771 = (state_38778[2]);var state_38778__$1 = (function (){var statearr_38799 = state_38778;(statearr_38799[13] = inst_38771);
return statearr_38799;
})();var statearr_38800_38823 = state_38778__$1;(statearr_38800_38823[2] = null);
(statearr_38800_38823[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_38804 = (new Array(14));(statearr_38804[0] = state_machine__13894__auto__);
(statearr_38804[1] = 1);
return statearr_38804;
});
var state_machine__13894__auto____1 = (function (state_38778){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_38778);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e38805){if((e38805 instanceof Object))
{var ex__13897__auto__ = e38805;var statearr_38806_38824 = state_38778;(statearr_38806_38824[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38825 = state_38778;
state_38778 = G__38825;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_38778){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_38778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_38807 = f__13964__auto__.call(null);(statearr_38807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___38808);
return statearr_38807;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___38933 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_38909){var state_val_38910 = (state_38909[1]);if((state_val_38910 === 1))
{var inst_38880 = cljs.core.vec.call(null,chs);var inst_38881 = inst_38880;var state_38909__$1 = (function (){var statearr_38911 = state_38909;(statearr_38911[7] = inst_38881);
return statearr_38911;
})();var statearr_38912_38934 = state_38909__$1;(statearr_38912_38934[2] = null);
(statearr_38912_38934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 2))
{var inst_38881 = (state_38909[7]);var inst_38883 = cljs.core.count.call(null,inst_38881);var inst_38884 = (inst_38883 > 0);var state_38909__$1 = state_38909;if(cljs.core.truth_(inst_38884))
{var statearr_38913_38935 = state_38909__$1;(statearr_38913_38935[1] = 4);
} else
{var statearr_38914_38936 = state_38909__$1;(statearr_38914_38936[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 3))
{var inst_38907 = (state_38909[2]);var state_38909__$1 = state_38909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38909__$1,inst_38907);
} else
{if((state_val_38910 === 4))
{var inst_38881 = (state_38909[7]);var state_38909__$1 = state_38909;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_38909__$1,7,inst_38881);
} else
{if((state_val_38910 === 5))
{var inst_38903 = cljs.core.async.close_BANG_.call(null,out);var state_38909__$1 = state_38909;var statearr_38915_38937 = state_38909__$1;(statearr_38915_38937[2] = inst_38903);
(statearr_38915_38937[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 6))
{var inst_38905 = (state_38909[2]);var state_38909__$1 = state_38909;var statearr_38916_38938 = state_38909__$1;(statearr_38916_38938[2] = inst_38905);
(statearr_38916_38938[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 7))
{var inst_38889 = (state_38909[8]);var inst_38888 = (state_38909[9]);var inst_38888__$1 = (state_38909[2]);var inst_38889__$1 = cljs.core.nth.call(null,inst_38888__$1,0,null);var inst_38890 = cljs.core.nth.call(null,inst_38888__$1,1,null);var inst_38891 = (inst_38889__$1 == null);var state_38909__$1 = (function (){var statearr_38917 = state_38909;(statearr_38917[10] = inst_38890);
(statearr_38917[8] = inst_38889__$1);
(statearr_38917[9] = inst_38888__$1);
return statearr_38917;
})();if(cljs.core.truth_(inst_38891))
{var statearr_38918_38939 = state_38909__$1;(statearr_38918_38939[1] = 8);
} else
{var statearr_38919_38940 = state_38909__$1;(statearr_38919_38940[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 8))
{var inst_38881 = (state_38909[7]);var inst_38890 = (state_38909[10]);var inst_38889 = (state_38909[8]);var inst_38888 = (state_38909[9]);var inst_38893 = (function (){var c = inst_38890;var v = inst_38889;var vec__38886 = inst_38888;var cs = inst_38881;return ((function (c,v,vec__38886,cs,inst_38881,inst_38890,inst_38889,inst_38888,state_val_38910){
return (function (p1__38826_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__38826_SHARP_);
});
;})(c,v,vec__38886,cs,inst_38881,inst_38890,inst_38889,inst_38888,state_val_38910))
})();var inst_38894 = cljs.core.filterv.call(null,inst_38893,inst_38881);var inst_38881__$1 = inst_38894;var state_38909__$1 = (function (){var statearr_38920 = state_38909;(statearr_38920[7] = inst_38881__$1);
return statearr_38920;
})();var statearr_38921_38941 = state_38909__$1;(statearr_38921_38941[2] = null);
(statearr_38921_38941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 9))
{var inst_38889 = (state_38909[8]);var state_38909__$1 = state_38909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38909__$1,11,out,inst_38889);
} else
{if((state_val_38910 === 10))
{var inst_38901 = (state_38909[2]);var state_38909__$1 = state_38909;var statearr_38923_38942 = state_38909__$1;(statearr_38923_38942[2] = inst_38901);
(statearr_38923_38942[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38910 === 11))
{var inst_38881 = (state_38909[7]);var inst_38898 = (state_38909[2]);var tmp38922 = inst_38881;var inst_38881__$1 = tmp38922;var state_38909__$1 = (function (){var statearr_38924 = state_38909;(statearr_38924[7] = inst_38881__$1);
(statearr_38924[11] = inst_38898);
return statearr_38924;
})();var statearr_38925_38943 = state_38909__$1;(statearr_38925_38943[2] = null);
(statearr_38925_38943[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_38929 = (new Array(12));(statearr_38929[0] = state_machine__13894__auto__);
(statearr_38929[1] = 1);
return statearr_38929;
});
var state_machine__13894__auto____1 = (function (state_38909){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_38909);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e38930){if((e38930 instanceof Object))
{var ex__13897__auto__ = e38930;var statearr_38931_38944 = state_38909;(statearr_38931_38944[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38930;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38945 = state_38909;
state_38909 = G__38945;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_38909){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_38909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_38932 = f__13964__auto__.call(null);(statearr_38932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___38933);
return statearr_38932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___39038 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_39015){var state_val_39016 = (state_39015[1]);if((state_val_39016 === 1))
{var inst_38992 = 0;var state_39015__$1 = (function (){var statearr_39017 = state_39015;(statearr_39017[7] = inst_38992);
return statearr_39017;
})();var statearr_39018_39039 = state_39015__$1;(statearr_39018_39039[2] = null);
(statearr_39018_39039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 2))
{var inst_38992 = (state_39015[7]);var inst_38994 = (inst_38992 < n);var state_39015__$1 = state_39015;if(cljs.core.truth_(inst_38994))
{var statearr_39019_39040 = state_39015__$1;(statearr_39019_39040[1] = 4);
} else
{var statearr_39020_39041 = state_39015__$1;(statearr_39020_39041[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 3))
{var inst_39012 = (state_39015[2]);var inst_39013 = cljs.core.async.close_BANG_.call(null,out);var state_39015__$1 = (function (){var statearr_39021 = state_39015;(statearr_39021[8] = inst_39012);
return statearr_39021;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39015__$1,inst_39013);
} else
{if((state_val_39016 === 4))
{var state_39015__$1 = state_39015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39015__$1,7,ch);
} else
{if((state_val_39016 === 5))
{var state_39015__$1 = state_39015;var statearr_39022_39042 = state_39015__$1;(statearr_39022_39042[2] = null);
(statearr_39022_39042[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 6))
{var inst_39010 = (state_39015[2]);var state_39015__$1 = state_39015;var statearr_39023_39043 = state_39015__$1;(statearr_39023_39043[2] = inst_39010);
(statearr_39023_39043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 7))
{var inst_38997 = (state_39015[9]);var inst_38997__$1 = (state_39015[2]);var inst_38998 = (inst_38997__$1 == null);var inst_38999 = cljs.core.not.call(null,inst_38998);var state_39015__$1 = (function (){var statearr_39024 = state_39015;(statearr_39024[9] = inst_38997__$1);
return statearr_39024;
})();if(inst_38999)
{var statearr_39025_39044 = state_39015__$1;(statearr_39025_39044[1] = 8);
} else
{var statearr_39026_39045 = state_39015__$1;(statearr_39026_39045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 8))
{var inst_38997 = (state_39015[9]);var state_39015__$1 = state_39015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39015__$1,11,out,inst_38997);
} else
{if((state_val_39016 === 9))
{var state_39015__$1 = state_39015;var statearr_39027_39046 = state_39015__$1;(statearr_39027_39046[2] = null);
(statearr_39027_39046[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 10))
{var inst_39007 = (state_39015[2]);var state_39015__$1 = state_39015;var statearr_39028_39047 = state_39015__$1;(statearr_39028_39047[2] = inst_39007);
(statearr_39028_39047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39016 === 11))
{var inst_38992 = (state_39015[7]);var inst_39002 = (state_39015[2]);var inst_39003 = (inst_38992 + 1);var inst_38992__$1 = inst_39003;var state_39015__$1 = (function (){var statearr_39029 = state_39015;(statearr_39029[7] = inst_38992__$1);
(statearr_39029[10] = inst_39002);
return statearr_39029;
})();var statearr_39030_39048 = state_39015__$1;(statearr_39030_39048[2] = null);
(statearr_39030_39048[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_39034 = (new Array(11));(statearr_39034[0] = state_machine__13894__auto__);
(statearr_39034[1] = 1);
return statearr_39034;
});
var state_machine__13894__auto____1 = (function (state_39015){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_39015);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e39035){if((e39035 instanceof Object))
{var ex__13897__auto__ = e39035;var statearr_39036_39049 = state_39015;(statearr_39036_39049[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39050 = state_39015;
state_39015 = G__39050;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_39015){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_39015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_39037 = f__13964__auto__.call(null);(statearr_39037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___39038);
return statearr_39037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___39147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_39122){var state_val_39123 = (state_39122[1]);if((state_val_39123 === 1))
{var inst_39099 = null;var state_39122__$1 = (function (){var statearr_39124 = state_39122;(statearr_39124[7] = inst_39099);
return statearr_39124;
})();var statearr_39125_39148 = state_39122__$1;(statearr_39125_39148[2] = null);
(statearr_39125_39148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 2))
{var state_39122__$1 = state_39122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39122__$1,4,ch);
} else
{if((state_val_39123 === 3))
{var inst_39119 = (state_39122[2]);var inst_39120 = cljs.core.async.close_BANG_.call(null,out);var state_39122__$1 = (function (){var statearr_39126 = state_39122;(statearr_39126[8] = inst_39119);
return statearr_39126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39122__$1,inst_39120);
} else
{if((state_val_39123 === 4))
{var inst_39102 = (state_39122[9]);var inst_39102__$1 = (state_39122[2]);var inst_39103 = (inst_39102__$1 == null);var inst_39104 = cljs.core.not.call(null,inst_39103);var state_39122__$1 = (function (){var statearr_39127 = state_39122;(statearr_39127[9] = inst_39102__$1);
return statearr_39127;
})();if(inst_39104)
{var statearr_39128_39149 = state_39122__$1;(statearr_39128_39149[1] = 5);
} else
{var statearr_39129_39150 = state_39122__$1;(statearr_39129_39150[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 5))
{var inst_39099 = (state_39122[7]);var inst_39102 = (state_39122[9]);var inst_39106 = cljs.core._EQ_.call(null,inst_39102,inst_39099);var state_39122__$1 = state_39122;if(inst_39106)
{var statearr_39130_39151 = state_39122__$1;(statearr_39130_39151[1] = 8);
} else
{var statearr_39131_39152 = state_39122__$1;(statearr_39131_39152[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 6))
{var state_39122__$1 = state_39122;var statearr_39133_39153 = state_39122__$1;(statearr_39133_39153[2] = null);
(statearr_39133_39153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 7))
{var inst_39117 = (state_39122[2]);var state_39122__$1 = state_39122;var statearr_39134_39154 = state_39122__$1;(statearr_39134_39154[2] = inst_39117);
(statearr_39134_39154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 8))
{var inst_39099 = (state_39122[7]);var tmp39132 = inst_39099;var inst_39099__$1 = tmp39132;var state_39122__$1 = (function (){var statearr_39135 = state_39122;(statearr_39135[7] = inst_39099__$1);
return statearr_39135;
})();var statearr_39136_39155 = state_39122__$1;(statearr_39136_39155[2] = null);
(statearr_39136_39155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 9))
{var inst_39102 = (state_39122[9]);var state_39122__$1 = state_39122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39122__$1,11,out,inst_39102);
} else
{if((state_val_39123 === 10))
{var inst_39114 = (state_39122[2]);var state_39122__$1 = state_39122;var statearr_39137_39156 = state_39122__$1;(statearr_39137_39156[2] = inst_39114);
(statearr_39137_39156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39123 === 11))
{var inst_39102 = (state_39122[9]);var inst_39111 = (state_39122[2]);var inst_39099 = inst_39102;var state_39122__$1 = (function (){var statearr_39138 = state_39122;(statearr_39138[7] = inst_39099);
(statearr_39138[10] = inst_39111);
return statearr_39138;
})();var statearr_39139_39157 = state_39122__$1;(statearr_39139_39157[2] = null);
(statearr_39139_39157[1] = 2);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_39143 = (new Array(11));(statearr_39143[0] = state_machine__13894__auto__);
(statearr_39143[1] = 1);
return statearr_39143;
});
var state_machine__13894__auto____1 = (function (state_39122){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_39122);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e39144){if((e39144 instanceof Object))
{var ex__13897__auto__ = e39144;var statearr_39145_39158 = state_39122;(statearr_39145_39158[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39159 = state_39122;
state_39122 = G__39159;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_39122){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_39122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_39146 = f__13964__auto__.call(null);(statearr_39146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___39147);
return statearr_39146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___39294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_39264){var state_val_39265 = (state_39264[1]);if((state_val_39265 === 1))
{var inst_39227 = (new Array(n));var inst_39228 = inst_39227;var inst_39229 = 0;var state_39264__$1 = (function (){var statearr_39266 = state_39264;(statearr_39266[7] = inst_39229);
(statearr_39266[8] = inst_39228);
return statearr_39266;
})();var statearr_39267_39295 = state_39264__$1;(statearr_39267_39295[2] = null);
(statearr_39267_39295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 2))
{var state_39264__$1 = state_39264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,4,ch);
} else
{if((state_val_39265 === 3))
{var inst_39262 = (state_39264[2]);var state_39264__$1 = state_39264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39264__$1,inst_39262);
} else
{if((state_val_39265 === 4))
{var inst_39232 = (state_39264[9]);var inst_39232__$1 = (state_39264[2]);var inst_39233 = (inst_39232__$1 == null);var inst_39234 = cljs.core.not.call(null,inst_39233);var state_39264__$1 = (function (){var statearr_39268 = state_39264;(statearr_39268[9] = inst_39232__$1);
return statearr_39268;
})();if(inst_39234)
{var statearr_39269_39296 = state_39264__$1;(statearr_39269_39296[1] = 5);
} else
{var statearr_39270_39297 = state_39264__$1;(statearr_39270_39297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 5))
{var inst_39229 = (state_39264[7]);var inst_39228 = (state_39264[8]);var inst_39237 = (state_39264[10]);var inst_39232 = (state_39264[9]);var inst_39236 = (inst_39228[inst_39229] = inst_39232);var inst_39237__$1 = (inst_39229 + 1);var inst_39238 = (inst_39237__$1 < n);var state_39264__$1 = (function (){var statearr_39271 = state_39264;(statearr_39271[11] = inst_39236);
(statearr_39271[10] = inst_39237__$1);
return statearr_39271;
})();if(cljs.core.truth_(inst_39238))
{var statearr_39272_39298 = state_39264__$1;(statearr_39272_39298[1] = 8);
} else
{var statearr_39273_39299 = state_39264__$1;(statearr_39273_39299[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 6))
{var inst_39229 = (state_39264[7]);var inst_39250 = (inst_39229 > 0);var state_39264__$1 = state_39264;if(cljs.core.truth_(inst_39250))
{var statearr_39275_39300 = state_39264__$1;(statearr_39275_39300[1] = 12);
} else
{var statearr_39276_39301 = state_39264__$1;(statearr_39276_39301[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 7))
{var inst_39260 = (state_39264[2]);var state_39264__$1 = state_39264;var statearr_39277_39302 = state_39264__$1;(statearr_39277_39302[2] = inst_39260);
(statearr_39277_39302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 8))
{var inst_39228 = (state_39264[8]);var inst_39237 = (state_39264[10]);var tmp39274 = inst_39228;var inst_39228__$1 = tmp39274;var inst_39229 = inst_39237;var state_39264__$1 = (function (){var statearr_39278 = state_39264;(statearr_39278[7] = inst_39229);
(statearr_39278[8] = inst_39228__$1);
return statearr_39278;
})();var statearr_39279_39303 = state_39264__$1;(statearr_39279_39303[2] = null);
(statearr_39279_39303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 9))
{var inst_39228 = (state_39264[8]);var inst_39242 = cljs.core.vec.call(null,inst_39228);var state_39264__$1 = state_39264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39264__$1,11,out,inst_39242);
} else
{if((state_val_39265 === 10))
{var inst_39248 = (state_39264[2]);var state_39264__$1 = state_39264;var statearr_39280_39304 = state_39264__$1;(statearr_39280_39304[2] = inst_39248);
(statearr_39280_39304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 11))
{var inst_39244 = (state_39264[2]);var inst_39245 = (new Array(n));var inst_39228 = inst_39245;var inst_39229 = 0;var state_39264__$1 = (function (){var statearr_39281 = state_39264;(statearr_39281[7] = inst_39229);
(statearr_39281[8] = inst_39228);
(statearr_39281[12] = inst_39244);
return statearr_39281;
})();var statearr_39282_39305 = state_39264__$1;(statearr_39282_39305[2] = null);
(statearr_39282_39305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 12))
{var inst_39228 = (state_39264[8]);var inst_39252 = cljs.core.vec.call(null,inst_39228);var state_39264__$1 = state_39264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39264__$1,15,out,inst_39252);
} else
{if((state_val_39265 === 13))
{var state_39264__$1 = state_39264;var statearr_39283_39306 = state_39264__$1;(statearr_39283_39306[2] = null);
(statearr_39283_39306[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 14))
{var inst_39257 = (state_39264[2]);var inst_39258 = cljs.core.async.close_BANG_.call(null,out);var state_39264__$1 = (function (){var statearr_39284 = state_39264;(statearr_39284[13] = inst_39257);
return statearr_39284;
})();var statearr_39285_39307 = state_39264__$1;(statearr_39285_39307[2] = inst_39258);
(statearr_39285_39307[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39265 === 15))
{var inst_39254 = (state_39264[2]);var state_39264__$1 = state_39264;var statearr_39286_39308 = state_39264__$1;(statearr_39286_39308[2] = inst_39254);
(statearr_39286_39308[1] = 14);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_39290 = (new Array(14));(statearr_39290[0] = state_machine__13894__auto__);
(statearr_39290[1] = 1);
return statearr_39290;
});
var state_machine__13894__auto____1 = (function (state_39264){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_39264);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e39291){if((e39291 instanceof Object))
{var ex__13897__auto__ = e39291;var statearr_39292_39309 = state_39264;(statearr_39292_39309[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39310 = state_39264;
state_39264 = G__39310;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_39264){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_39264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_39293 = f__13964__auto__.call(null);(statearr_39293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___39294);
return statearr_39293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13963__auto___39453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_39423){var state_val_39424 = (state_39423[1]);if((state_val_39424 === 1))
{var inst_39382 = (new Array(0));var inst_39383 = inst_39382;var inst_39384 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_39423__$1 = (function (){var statearr_39425 = state_39423;(statearr_39425[7] = inst_39384);
(statearr_39425[8] = inst_39383);
return statearr_39425;
})();var statearr_39426_39454 = state_39423__$1;(statearr_39426_39454[2] = null);
(statearr_39426_39454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 2))
{var state_39423__$1 = state_39423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39423__$1,4,ch);
} else
{if((state_val_39424 === 3))
{var inst_39421 = (state_39423[2]);var state_39423__$1 = state_39423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39423__$1,inst_39421);
} else
{if((state_val_39424 === 4))
{var inst_39387 = (state_39423[9]);var inst_39387__$1 = (state_39423[2]);var inst_39388 = (inst_39387__$1 == null);var inst_39389 = cljs.core.not.call(null,inst_39388);var state_39423__$1 = (function (){var statearr_39427 = state_39423;(statearr_39427[9] = inst_39387__$1);
return statearr_39427;
})();if(inst_39389)
{var statearr_39428_39455 = state_39423__$1;(statearr_39428_39455[1] = 5);
} else
{var statearr_39429_39456 = state_39423__$1;(statearr_39429_39456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 5))
{var inst_39391 = (state_39423[10]);var inst_39384 = (state_39423[7]);var inst_39387 = (state_39423[9]);var inst_39391__$1 = f.call(null,inst_39387);var inst_39392 = cljs.core._EQ_.call(null,inst_39391__$1,inst_39384);var inst_39393 = cljs.core.keyword_identical_QMARK_.call(null,inst_39384,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_39394 = (inst_39392) || (inst_39393);var state_39423__$1 = (function (){var statearr_39430 = state_39423;(statearr_39430[10] = inst_39391__$1);
return statearr_39430;
})();if(cljs.core.truth_(inst_39394))
{var statearr_39431_39457 = state_39423__$1;(statearr_39431_39457[1] = 8);
} else
{var statearr_39432_39458 = state_39423__$1;(statearr_39432_39458[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 6))
{var inst_39383 = (state_39423[8]);var inst_39408 = inst_39383.length;var inst_39409 = (inst_39408 > 0);var state_39423__$1 = state_39423;if(cljs.core.truth_(inst_39409))
{var statearr_39434_39459 = state_39423__$1;(statearr_39434_39459[1] = 12);
} else
{var statearr_39435_39460 = state_39423__$1;(statearr_39435_39460[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 7))
{var inst_39419 = (state_39423[2]);var state_39423__$1 = state_39423;var statearr_39436_39461 = state_39423__$1;(statearr_39436_39461[2] = inst_39419);
(statearr_39436_39461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 8))
{var inst_39391 = (state_39423[10]);var inst_39387 = (state_39423[9]);var inst_39383 = (state_39423[8]);var inst_39396 = inst_39383.push(inst_39387);var tmp39433 = inst_39383;var inst_39383__$1 = tmp39433;var inst_39384 = inst_39391;var state_39423__$1 = (function (){var statearr_39437 = state_39423;(statearr_39437[7] = inst_39384);
(statearr_39437[8] = inst_39383__$1);
(statearr_39437[11] = inst_39396);
return statearr_39437;
})();var statearr_39438_39462 = state_39423__$1;(statearr_39438_39462[2] = null);
(statearr_39438_39462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 9))
{var inst_39383 = (state_39423[8]);var inst_39399 = cljs.core.vec.call(null,inst_39383);var state_39423__$1 = state_39423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39423__$1,11,out,inst_39399);
} else
{if((state_val_39424 === 10))
{var inst_39406 = (state_39423[2]);var state_39423__$1 = state_39423;var statearr_39439_39463 = state_39423__$1;(statearr_39439_39463[2] = inst_39406);
(statearr_39439_39463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 11))
{var inst_39391 = (state_39423[10]);var inst_39387 = (state_39423[9]);var inst_39401 = (state_39423[2]);var inst_39402 = (new Array(0));var inst_39403 = inst_39402.push(inst_39387);var inst_39383 = inst_39402;var inst_39384 = inst_39391;var state_39423__$1 = (function (){var statearr_39440 = state_39423;(statearr_39440[7] = inst_39384);
(statearr_39440[8] = inst_39383);
(statearr_39440[12] = inst_39403);
(statearr_39440[13] = inst_39401);
return statearr_39440;
})();var statearr_39441_39464 = state_39423__$1;(statearr_39441_39464[2] = null);
(statearr_39441_39464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 12))
{var inst_39383 = (state_39423[8]);var inst_39411 = cljs.core.vec.call(null,inst_39383);var state_39423__$1 = state_39423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39423__$1,15,out,inst_39411);
} else
{if((state_val_39424 === 13))
{var state_39423__$1 = state_39423;var statearr_39442_39465 = state_39423__$1;(statearr_39442_39465[2] = null);
(statearr_39442_39465[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 14))
{var inst_39416 = (state_39423[2]);var inst_39417 = cljs.core.async.close_BANG_.call(null,out);var state_39423__$1 = (function (){var statearr_39443 = state_39423;(statearr_39443[14] = inst_39416);
return statearr_39443;
})();var statearr_39444_39466 = state_39423__$1;(statearr_39444_39466[2] = inst_39417);
(statearr_39444_39466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39424 === 15))
{var inst_39413 = (state_39423[2]);var state_39423__$1 = state_39423;var statearr_39445_39467 = state_39423__$1;(statearr_39445_39467[2] = inst_39413);
(statearr_39445_39467[1] = 14);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_39449 = (new Array(15));(statearr_39449[0] = state_machine__13894__auto__);
(statearr_39449[1] = 1);
return statearr_39449;
});
var state_machine__13894__auto____1 = (function (state_39423){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_39423);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e39450){if((e39450 instanceof Object))
{var ex__13897__auto__ = e39450;var statearr_39451_39468 = state_39423;(statearr_39451_39468[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39469 = state_39423;
state_39423 = G__39469;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_39423){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_39423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_39452 = f__13964__auto__.call(null);(statearr_39452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___39453);
return statearr_39452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
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
