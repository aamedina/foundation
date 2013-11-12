// Compiled by ClojureScript 0.0-2030
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17218 = (function (f,fn_handler,meta17219){
this.f = f;
this.fn_handler = fn_handler;
this.meta17219 = meta17219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17218.cljs$lang$type = true;
cljs.core.async.t17218.cljs$lang$ctorStr = "cljs.core.async/t17218";
cljs.core.async.t17218.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17218");
});
cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17220){var self__ = this;
var _17220__$1 = this;return self__.meta17219;
});
cljs.core.async.t17218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17220,meta17219__$1){var self__ = this;
var _17220__$1 = this;return (new cljs.core.async.t17218(self__.f,self__.fn_handler,meta17219__$1));
});
cljs.core.async.__GT_t17218 = (function __GT_t17218(f__$1,fn_handler__$1,meta17219){return (new cljs.core.async.t17218(f__$1,fn_handler__$1,meta17219));
});
}
return (new cljs.core.async.t17218(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17222 = buff;if(G__17222)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__17222.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17222.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17222);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17222);
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
{var val_17223 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17223);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_17223);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7430__auto__ = ret;if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7430__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8228__auto___17224 = n;var x_17225 = 0;while(true){
if((x_17225 < n__8228__auto___17224))
{(a[x_17225] = 0);
{
var G__17226 = (x_17225 + 1);
x_17225 = G__17226;
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
var G__17227 = (i + 1);
i = G__17227;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17231 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17231 = (function (flag,alt_flag,meta17232){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17232 = meta17232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17231.cljs$lang$type = true;
cljs.core.async.t17231.cljs$lang$ctorStr = "cljs.core.async/t17231";
cljs.core.async.t17231.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17231");
});
cljs.core.async.t17231.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t17231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t17231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17233){var self__ = this;
var _17233__$1 = this;return self__.meta17232;
});
cljs.core.async.t17231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17233,meta17232__$1){var self__ = this;
var _17233__$1 = this;return (new cljs.core.async.t17231(self__.flag,self__.alt_flag,meta17232__$1));
});
cljs.core.async.__GT_t17231 = (function __GT_t17231(flag__$1,alt_flag__$1,meta17232){return (new cljs.core.async.t17231(flag__$1,alt_flag__$1,meta17232));
});
}
return (new cljs.core.async.t17231(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17237 = (function (cb,flag,alt_handler,meta17238){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17238 = meta17238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17237.cljs$lang$type = true;
cljs.core.async.t17237.cljs$lang$ctorStr = "cljs.core.async/t17237";
cljs.core.async.t17237.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17237");
});
cljs.core.async.t17237.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17239){var self__ = this;
var _17239__$1 = this;return self__.meta17238;
});
cljs.core.async.t17237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17239,meta17238__$1){var self__ = this;
var _17239__$1 = this;return (new cljs.core.async.t17237(self__.cb,self__.flag,self__.alt_handler,meta17238__$1));
});
cljs.core.async.__GT_t17237 = (function __GT_t17237(cb__$1,flag__$1,alt_handler__$1,meta17238){return (new cljs.core.async.t17237(cb__$1,flag__$1,alt_handler__$1,meta17238));
});
}
return (new cljs.core.async.t17237(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17240_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__17240_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__7439__auto__ = wport;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__17241 = (i + 1);
i = G__17241;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7439__auto__ = ret;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7430__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7430__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
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
var alts_BANG___delegate = function (ports,p__17242){var map__17244 = p__17242;var map__17244__$1 = ((cljs.core.seq_QMARK_.call(null,map__17244))?cljs.core.apply.call(null,cljs.core.hash_map,map__17244):map__17244);var opts = map__17244__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17242 = null;if (arguments.length > 1) {
  p__17242 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17242);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17245){
var ports = cljs.core.first(arglist__17245);
var p__17242 = cljs.core.rest(arglist__17245);
return alts_BANG___delegate(ports,p__17242);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17253 = (function (ch,f,map_LT_,meta17254){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17254 = meta17254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17253.cljs$lang$type = true;
cljs.core.async.t17253.cljs$lang$ctorStr = "cljs.core.async/t17253";
cljs.core.async.t17253.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17253");
});
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17256 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17256 = (function (fn1,_,meta17254,ch,f,map_LT_,meta17257){
this.fn1 = fn1;
this._ = _;
this.meta17254 = meta17254;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17257 = meta17257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17256.cljs$lang$type = true;
cljs.core.async.t17256.cljs$lang$ctorStr = "cljs.core.async/t17256";
cljs.core.async.t17256.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17256");
});
cljs.core.async.t17256.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t17256.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t17256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__17246_SHARP_){return f1.call(null,(((p1__17246_SHARP_ == null))?null:self__.f.call(null,p1__17246_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t17256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17258){var self__ = this;
var _17258__$1 = this;return self__.meta17257;
});
cljs.core.async.t17256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17258,meta17257__$1){var self__ = this;
var _17258__$1 = this;return (new cljs.core.async.t17256(self__.fn1,self__._,self__.meta17254,self__.ch,self__.f,self__.map_LT_,meta17257__$1));
});
cljs.core.async.__GT_t17256 = (function __GT_t17256(fn1__$1,___$2,meta17254__$1,ch__$2,f__$2,map_LT___$2,meta17257){return (new cljs.core.async.t17256(fn1__$1,___$2,meta17254__$1,ch__$2,f__$2,map_LT___$2,meta17257));
});
}
return (new cljs.core.async.t17256(fn1,___$1,self__.meta17254,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7430__auto__ = ret;if(cljs.core.truth_(and__7430__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7430__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17255){var self__ = this;
var _17255__$1 = this;return self__.meta17254;
});
cljs.core.async.t17253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17255,meta17254__$1){var self__ = this;
var _17255__$1 = this;return (new cljs.core.async.t17253(self__.ch,self__.f,self__.map_LT_,meta17254__$1));
});
cljs.core.async.__GT_t17253 = (function __GT_t17253(ch__$1,f__$1,map_LT___$1,meta17254){return (new cljs.core.async.t17253(ch__$1,f__$1,map_LT___$1,meta17254));
});
}
return (new cljs.core.async.t17253(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17262 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17262 = (function (ch,f,map_GT_,meta17263){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17263 = meta17263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17262.cljs$lang$type = true;
cljs.core.async.t17262.cljs$lang$ctorStr = "cljs.core.async/t17262";
cljs.core.async.t17262.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17262");
});
cljs.core.async.t17262.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t17262.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17262.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17264){var self__ = this;
var _17264__$1 = this;return self__.meta17263;
});
cljs.core.async.t17262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17264,meta17263__$1){var self__ = this;
var _17264__$1 = this;return (new cljs.core.async.t17262(self__.ch,self__.f,self__.map_GT_,meta17263__$1));
});
cljs.core.async.__GT_t17262 = (function __GT_t17262(ch__$1,f__$1,map_GT___$1,meta17263){return (new cljs.core.async.t17262(ch__$1,f__$1,map_GT___$1,meta17263));
});
}
return (new cljs.core.async.t17262(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17268 = (function (ch,p,filter_GT_,meta17269){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17269 = meta17269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17268.cljs$lang$type = true;
cljs.core.async.t17268.cljs$lang$ctorStr = "cljs.core.async/t17268";
cljs.core.async.t17268.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t17268");
});
cljs.core.async.t17268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t17268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17268.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17270){var self__ = this;
var _17270__$1 = this;return self__.meta17269;
});
cljs.core.async.t17268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17270,meta17269__$1){var self__ = this;
var _17270__$1 = this;return (new cljs.core.async.t17268(self__.ch,self__.p,self__.filter_GT_,meta17269__$1));
});
cljs.core.async.__GT_t17268 = (function __GT_t17268(ch__$1,p__$1,filter_GT___$1,meta17269){return (new cljs.core.async.t17268(ch__$1,p__$1,filter_GT___$1,meta17269));
});
}
return (new cljs.core.async.t17268(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___17353 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_17332){var state_val_17333 = (state_17332[1]);if((state_val_17333 === 1))
{var state_17332__$1 = state_17332;var statearr_17334_17354 = state_17332__$1;(statearr_17334_17354[2] = null);
(statearr_17334_17354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 2))
{var state_17332__$1 = state_17332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17332__$1,4,ch);
} else
{if((state_val_17333 === 3))
{var inst_17330 = (state_17332[2]);var state_17332__$1 = state_17332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17332__$1,inst_17330);
} else
{if((state_val_17333 === 4))
{var inst_17314 = (state_17332[7]);var inst_17314__$1 = (state_17332[2]);var inst_17315 = (inst_17314__$1 == null);var state_17332__$1 = (function (){var statearr_17335 = state_17332;(statearr_17335[7] = inst_17314__$1);
return statearr_17335;
})();if(cljs.core.truth_(inst_17315))
{var statearr_17336_17355 = state_17332__$1;(statearr_17336_17355[1] = 5);
} else
{var statearr_17337_17356 = state_17332__$1;(statearr_17337_17356[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 5))
{var inst_17317 = cljs.core.async.close_BANG_.call(null,out);var state_17332__$1 = state_17332;var statearr_17338_17357 = state_17332__$1;(statearr_17338_17357[2] = inst_17317);
(statearr_17338_17357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 6))
{var inst_17314 = (state_17332[7]);var inst_17319 = p.call(null,inst_17314);var state_17332__$1 = state_17332;if(cljs.core.truth_(inst_17319))
{var statearr_17339_17358 = state_17332__$1;(statearr_17339_17358[1] = 8);
} else
{var statearr_17340_17359 = state_17332__$1;(statearr_17340_17359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 7))
{var inst_17328 = (state_17332[2]);var state_17332__$1 = state_17332;var statearr_17341_17360 = state_17332__$1;(statearr_17341_17360[2] = inst_17328);
(statearr_17341_17360[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 8))
{var inst_17314 = (state_17332[7]);var state_17332__$1 = state_17332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17332__$1,11,out,inst_17314);
} else
{if((state_val_17333 === 9))
{var state_17332__$1 = state_17332;var statearr_17342_17361 = state_17332__$1;(statearr_17342_17361[2] = null);
(statearr_17342_17361[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 10))
{var inst_17325 = (state_17332[2]);var state_17332__$1 = (function (){var statearr_17343 = state_17332;(statearr_17343[8] = inst_17325);
return statearr_17343;
})();var statearr_17344_17362 = state_17332__$1;(statearr_17344_17362[2] = null);
(statearr_17344_17362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17333 === 11))
{var inst_17322 = (state_17332[2]);var state_17332__$1 = state_17332;var statearr_17345_17363 = state_17332__$1;(statearr_17345_17363[2] = inst_17322);
(statearr_17345_17363[1] = 10);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_17349 = (new Array(9));(statearr_17349[0] = state_machine__11439__auto__);
(statearr_17349[1] = 1);
return statearr_17349;
});
var state_machine__11439__auto____1 = (function (state_17332){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_17332);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e17350){if((e17350 instanceof Object))
{var ex__11442__auto__ = e17350;var statearr_17351_17364 = state_17332;(statearr_17351_17364[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17365 = state_17332;
state_17332 = G__17365;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_17332){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_17332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_17352 = f__11509__auto__.call(null);(statearr_17352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___17353);
return statearr_17352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_17517){var state_val_17518 = (state_17517[1]);if((state_val_17518 === 1))
{var state_17517__$1 = state_17517;var statearr_17519_17556 = state_17517__$1;(statearr_17519_17556[2] = null);
(statearr_17519_17556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 2))
{var state_17517__$1 = state_17517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17517__$1,4,in$);
} else
{if((state_val_17518 === 3))
{var inst_17515 = (state_17517[2]);var state_17517__$1 = state_17517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17517__$1,inst_17515);
} else
{if((state_val_17518 === 4))
{var inst_17463 = (state_17517[7]);var inst_17463__$1 = (state_17517[2]);var inst_17464 = (inst_17463__$1 == null);var state_17517__$1 = (function (){var statearr_17520 = state_17517;(statearr_17520[7] = inst_17463__$1);
return statearr_17520;
})();if(cljs.core.truth_(inst_17464))
{var statearr_17521_17557 = state_17517__$1;(statearr_17521_17557[1] = 5);
} else
{var statearr_17522_17558 = state_17517__$1;(statearr_17522_17558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 5))
{var inst_17466 = cljs.core.async.close_BANG_.call(null,out);var state_17517__$1 = state_17517;var statearr_17523_17559 = state_17517__$1;(statearr_17523_17559[2] = inst_17466);
(statearr_17523_17559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 6))
{var inst_17463 = (state_17517[7]);var inst_17468 = f.call(null,inst_17463);var inst_17473 = cljs.core.seq.call(null,inst_17468);var inst_17474 = inst_17473;var inst_17475 = null;var inst_17476 = 0;var inst_17477 = 0;var state_17517__$1 = (function (){var statearr_17524 = state_17517;(statearr_17524[8] = inst_17476);
(statearr_17524[9] = inst_17477);
(statearr_17524[10] = inst_17475);
(statearr_17524[11] = inst_17474);
return statearr_17524;
})();var statearr_17525_17560 = state_17517__$1;(statearr_17525_17560[2] = null);
(statearr_17525_17560[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 7))
{var inst_17513 = (state_17517[2]);var state_17517__$1 = state_17517;var statearr_17526_17561 = state_17517__$1;(statearr_17526_17561[2] = inst_17513);
(statearr_17526_17561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 8))
{var inst_17476 = (state_17517[8]);var inst_17477 = (state_17517[9]);var inst_17479 = (inst_17477 < inst_17476);var inst_17480 = inst_17479;var state_17517__$1 = state_17517;if(cljs.core.truth_(inst_17480))
{var statearr_17527_17562 = state_17517__$1;(statearr_17527_17562[1] = 10);
} else
{var statearr_17528_17563 = state_17517__$1;(statearr_17528_17563[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 9))
{var inst_17510 = (state_17517[2]);var state_17517__$1 = (function (){var statearr_17529 = state_17517;(statearr_17529[12] = inst_17510);
return statearr_17529;
})();var statearr_17530_17564 = state_17517__$1;(statearr_17530_17564[2] = null);
(statearr_17530_17564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 10))
{var inst_17477 = (state_17517[9]);var inst_17475 = (state_17517[10]);var inst_17482 = cljs.core._nth.call(null,inst_17475,inst_17477);var state_17517__$1 = state_17517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17517__$1,13,out,inst_17482);
} else
{if((state_val_17518 === 11))
{var inst_17474 = (state_17517[11]);var inst_17488 = (state_17517[13]);var inst_17488__$1 = cljs.core.seq.call(null,inst_17474);var state_17517__$1 = (function (){var statearr_17534 = state_17517;(statearr_17534[13] = inst_17488__$1);
return statearr_17534;
})();if(inst_17488__$1)
{var statearr_17535_17565 = state_17517__$1;(statearr_17535_17565[1] = 14);
} else
{var statearr_17536_17566 = state_17517__$1;(statearr_17536_17566[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 12))
{var inst_17508 = (state_17517[2]);var state_17517__$1 = state_17517;var statearr_17537_17567 = state_17517__$1;(statearr_17537_17567[2] = inst_17508);
(statearr_17537_17567[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 13))
{var inst_17476 = (state_17517[8]);var inst_17477 = (state_17517[9]);var inst_17475 = (state_17517[10]);var inst_17474 = (state_17517[11]);var inst_17484 = (state_17517[2]);var inst_17485 = (inst_17477 + 1);var tmp17531 = inst_17476;var tmp17532 = inst_17475;var tmp17533 = inst_17474;var inst_17474__$1 = tmp17533;var inst_17475__$1 = tmp17532;var inst_17476__$1 = tmp17531;var inst_17477__$1 = inst_17485;var state_17517__$1 = (function (){var statearr_17538 = state_17517;(statearr_17538[8] = inst_17476__$1);
(statearr_17538[9] = inst_17477__$1);
(statearr_17538[10] = inst_17475__$1);
(statearr_17538[11] = inst_17474__$1);
(statearr_17538[14] = inst_17484);
return statearr_17538;
})();var statearr_17539_17568 = state_17517__$1;(statearr_17539_17568[2] = null);
(statearr_17539_17568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 14))
{var inst_17488 = (state_17517[13]);var inst_17490 = cljs.core.chunked_seq_QMARK_.call(null,inst_17488);var state_17517__$1 = state_17517;if(inst_17490)
{var statearr_17540_17569 = state_17517__$1;(statearr_17540_17569[1] = 17);
} else
{var statearr_17541_17570 = state_17517__$1;(statearr_17541_17570[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 15))
{var state_17517__$1 = state_17517;var statearr_17542_17571 = state_17517__$1;(statearr_17542_17571[2] = null);
(statearr_17542_17571[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 16))
{var inst_17506 = (state_17517[2]);var state_17517__$1 = state_17517;var statearr_17543_17572 = state_17517__$1;(statearr_17543_17572[2] = inst_17506);
(statearr_17543_17572[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 17))
{var inst_17488 = (state_17517[13]);var inst_17492 = cljs.core.chunk_first.call(null,inst_17488);var inst_17493 = cljs.core.chunk_rest.call(null,inst_17488);var inst_17494 = cljs.core.count.call(null,inst_17492);var inst_17474 = inst_17493;var inst_17475 = inst_17492;var inst_17476 = inst_17494;var inst_17477 = 0;var state_17517__$1 = (function (){var statearr_17544 = state_17517;(statearr_17544[8] = inst_17476);
(statearr_17544[9] = inst_17477);
(statearr_17544[10] = inst_17475);
(statearr_17544[11] = inst_17474);
return statearr_17544;
})();var statearr_17545_17573 = state_17517__$1;(statearr_17545_17573[2] = null);
(statearr_17545_17573[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 18))
{var inst_17488 = (state_17517[13]);var inst_17497 = cljs.core.first.call(null,inst_17488);var state_17517__$1 = state_17517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17517__$1,20,out,inst_17497);
} else
{if((state_val_17518 === 19))
{var inst_17503 = (state_17517[2]);var state_17517__$1 = state_17517;var statearr_17546_17574 = state_17517__$1;(statearr_17546_17574[2] = inst_17503);
(statearr_17546_17574[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17518 === 20))
{var inst_17488 = (state_17517[13]);var inst_17499 = (state_17517[2]);var inst_17500 = cljs.core.next.call(null,inst_17488);var inst_17474 = inst_17500;var inst_17475 = null;var inst_17476 = 0;var inst_17477 = 0;var state_17517__$1 = (function (){var statearr_17547 = state_17517;(statearr_17547[8] = inst_17476);
(statearr_17547[9] = inst_17477);
(statearr_17547[10] = inst_17475);
(statearr_17547[11] = inst_17474);
(statearr_17547[15] = inst_17499);
return statearr_17547;
})();var statearr_17548_17575 = state_17517__$1;(statearr_17548_17575[2] = null);
(statearr_17548_17575[1] = 8);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_17552 = (new Array(16));(statearr_17552[0] = state_machine__11439__auto__);
(statearr_17552[1] = 1);
return statearr_17552;
});
var state_machine__11439__auto____1 = (function (state_17517){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_17517);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e17553){if((e17553 instanceof Object))
{var ex__11442__auto__ = e17553;var statearr_17554_17576 = state_17517;(statearr_17554_17576[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17577 = state_17517;
state_17517 = G__17577;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_17517){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_17517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_17555 = f__11509__auto__.call(null);(statearr_17555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_17555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11508__auto___17658 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_17637){var state_val_17638 = (state_17637[1]);if((state_val_17638 === 1))
{var state_17637__$1 = state_17637;var statearr_17639_17659 = state_17637__$1;(statearr_17639_17659[2] = null);
(statearr_17639_17659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 2))
{var state_17637__$1 = state_17637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17637__$1,4,from);
} else
{if((state_val_17638 === 3))
{var inst_17635 = (state_17637[2]);var state_17637__$1 = state_17637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17637__$1,inst_17635);
} else
{if((state_val_17638 === 4))
{var inst_17620 = (state_17637[7]);var inst_17620__$1 = (state_17637[2]);var inst_17621 = (inst_17620__$1 == null);var state_17637__$1 = (function (){var statearr_17640 = state_17637;(statearr_17640[7] = inst_17620__$1);
return statearr_17640;
})();if(cljs.core.truth_(inst_17621))
{var statearr_17641_17660 = state_17637__$1;(statearr_17641_17660[1] = 5);
} else
{var statearr_17642_17661 = state_17637__$1;(statearr_17642_17661[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 5))
{var state_17637__$1 = state_17637;if(cljs.core.truth_(close_QMARK_))
{var statearr_17643_17662 = state_17637__$1;(statearr_17643_17662[1] = 8);
} else
{var statearr_17644_17663 = state_17637__$1;(statearr_17644_17663[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 6))
{var inst_17620 = (state_17637[7]);var state_17637__$1 = state_17637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17637__$1,11,to,inst_17620);
} else
{if((state_val_17638 === 7))
{var inst_17633 = (state_17637[2]);var state_17637__$1 = state_17637;var statearr_17645_17664 = state_17637__$1;(statearr_17645_17664[2] = inst_17633);
(statearr_17645_17664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 8))
{var inst_17624 = cljs.core.async.close_BANG_.call(null,to);var state_17637__$1 = state_17637;var statearr_17646_17665 = state_17637__$1;(statearr_17646_17665[2] = inst_17624);
(statearr_17646_17665[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 9))
{var state_17637__$1 = state_17637;var statearr_17647_17666 = state_17637__$1;(statearr_17647_17666[2] = null);
(statearr_17647_17666[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 10))
{var inst_17627 = (state_17637[2]);var state_17637__$1 = state_17637;var statearr_17648_17667 = state_17637__$1;(statearr_17648_17667[2] = inst_17627);
(statearr_17648_17667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17638 === 11))
{var inst_17630 = (state_17637[2]);var state_17637__$1 = (function (){var statearr_17649 = state_17637;(statearr_17649[8] = inst_17630);
return statearr_17649;
})();var statearr_17650_17668 = state_17637__$1;(statearr_17650_17668[2] = null);
(statearr_17650_17668[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_17654 = (new Array(9));(statearr_17654[0] = state_machine__11439__auto__);
(statearr_17654[1] = 1);
return statearr_17654;
});
var state_machine__11439__auto____1 = (function (state_17637){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_17637);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e17655){if((e17655 instanceof Object))
{var ex__11442__auto__ = e17655;var statearr_17656_17669 = state_17637;(statearr_17656_17669[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17670 = state_17637;
state_17637 = G__17670;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_17637){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_17637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_17657 = f__11509__auto__.call(null);(statearr_17657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___17658);
return statearr_17657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11508__auto___17757 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_17735){var state_val_17736 = (state_17735[1]);if((state_val_17736 === 1))
{var state_17735__$1 = state_17735;var statearr_17737_17758 = state_17735__$1;(statearr_17737_17758[2] = null);
(statearr_17737_17758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 2))
{var state_17735__$1 = state_17735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17735__$1,4,ch);
} else
{if((state_val_17736 === 3))
{var inst_17733 = (state_17735[2]);var state_17735__$1 = state_17735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17735__$1,inst_17733);
} else
{if((state_val_17736 === 4))
{var inst_17716 = (state_17735[7]);var inst_17716__$1 = (state_17735[2]);var inst_17717 = (inst_17716__$1 == null);var state_17735__$1 = (function (){var statearr_17738 = state_17735;(statearr_17738[7] = inst_17716__$1);
return statearr_17738;
})();if(cljs.core.truth_(inst_17717))
{var statearr_17739_17759 = state_17735__$1;(statearr_17739_17759[1] = 5);
} else
{var statearr_17740_17760 = state_17735__$1;(statearr_17740_17760[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 5))
{var inst_17719 = cljs.core.async.close_BANG_.call(null,tc);var inst_17720 = cljs.core.async.close_BANG_.call(null,fc);var state_17735__$1 = (function (){var statearr_17741 = state_17735;(statearr_17741[8] = inst_17719);
return statearr_17741;
})();var statearr_17742_17761 = state_17735__$1;(statearr_17742_17761[2] = inst_17720);
(statearr_17742_17761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 6))
{var inst_17716 = (state_17735[7]);var inst_17722 = p.call(null,inst_17716);var state_17735__$1 = state_17735;if(cljs.core.truth_(inst_17722))
{var statearr_17743_17762 = state_17735__$1;(statearr_17743_17762[1] = 9);
} else
{var statearr_17744_17763 = state_17735__$1;(statearr_17744_17763[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 7))
{var inst_17731 = (state_17735[2]);var state_17735__$1 = state_17735;var statearr_17745_17764 = state_17735__$1;(statearr_17745_17764[2] = inst_17731);
(statearr_17745_17764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 8))
{var inst_17728 = (state_17735[2]);var state_17735__$1 = (function (){var statearr_17746 = state_17735;(statearr_17746[9] = inst_17728);
return statearr_17746;
})();var statearr_17747_17765 = state_17735__$1;(statearr_17747_17765[2] = null);
(statearr_17747_17765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 9))
{var state_17735__$1 = state_17735;var statearr_17748_17766 = state_17735__$1;(statearr_17748_17766[2] = tc);
(statearr_17748_17766[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 10))
{var state_17735__$1 = state_17735;var statearr_17749_17767 = state_17735__$1;(statearr_17749_17767[2] = fc);
(statearr_17749_17767[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17736 === 11))
{var inst_17716 = (state_17735[7]);var inst_17726 = (state_17735[2]);var state_17735__$1 = state_17735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17735__$1,8,inst_17726,inst_17716);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_17753 = (new Array(10));(statearr_17753[0] = state_machine__11439__auto__);
(statearr_17753[1] = 1);
return statearr_17753;
});
var state_machine__11439__auto____1 = (function (state_17735){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_17735);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e17754){if((e17754 instanceof Object))
{var ex__11442__auto__ = e17754;var statearr_17755_17768 = state_17735;(statearr_17755_17768[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17769 = state_17735;
state_17735 = G__17769;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_17735){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_17735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_17756 = f__11509__auto__.call(null);(statearr_17756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___17757);
return statearr_17756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_17816){var state_val_17817 = (state_17816[1]);if((state_val_17817 === 7))
{var inst_17812 = (state_17816[2]);var state_17816__$1 = state_17816;var statearr_17818_17834 = state_17816__$1;(statearr_17818_17834[2] = inst_17812);
(statearr_17818_17834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17817 === 6))
{var inst_17802 = (state_17816[7]);var inst_17805 = (state_17816[8]);var inst_17809 = f.call(null,inst_17802,inst_17805);var inst_17802__$1 = inst_17809;var state_17816__$1 = (function (){var statearr_17819 = state_17816;(statearr_17819[7] = inst_17802__$1);
return statearr_17819;
})();var statearr_17820_17835 = state_17816__$1;(statearr_17820_17835[2] = null);
(statearr_17820_17835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17817 === 5))
{var inst_17802 = (state_17816[7]);var state_17816__$1 = state_17816;var statearr_17821_17836 = state_17816__$1;(statearr_17821_17836[2] = inst_17802);
(statearr_17821_17836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17817 === 4))
{var inst_17805 = (state_17816[8]);var inst_17805__$1 = (state_17816[2]);var inst_17806 = (inst_17805__$1 == null);var state_17816__$1 = (function (){var statearr_17822 = state_17816;(statearr_17822[8] = inst_17805__$1);
return statearr_17822;
})();if(cljs.core.truth_(inst_17806))
{var statearr_17823_17837 = state_17816__$1;(statearr_17823_17837[1] = 5);
} else
{var statearr_17824_17838 = state_17816__$1;(statearr_17824_17838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17817 === 3))
{var inst_17814 = (state_17816[2]);var state_17816__$1 = state_17816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17816__$1,inst_17814);
} else
{if((state_val_17817 === 2))
{var state_17816__$1 = state_17816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17816__$1,4,ch);
} else
{if((state_val_17817 === 1))
{var inst_17802 = init;var state_17816__$1 = (function (){var statearr_17825 = state_17816;(statearr_17825[7] = inst_17802);
return statearr_17825;
})();var statearr_17826_17839 = state_17816__$1;(statearr_17826_17839[2] = null);
(statearr_17826_17839[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_17830 = (new Array(9));(statearr_17830[0] = state_machine__11439__auto__);
(statearr_17830[1] = 1);
return statearr_17830;
});
var state_machine__11439__auto____1 = (function (state_17816){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_17816);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e17831){if((e17831 instanceof Object))
{var ex__11442__auto__ = e17831;var statearr_17832_17840 = state_17816;(statearr_17832_17840[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17841 = state_17816;
state_17816 = G__17841;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_17816){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_17816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_17833 = f__11509__auto__.call(null);(statearr_17833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_17833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_17903){var state_val_17904 = (state_17903[1]);if((state_val_17904 === 1))
{var inst_17883 = cljs.core.seq.call(null,coll);var inst_17884 = inst_17883;var state_17903__$1 = (function (){var statearr_17905 = state_17903;(statearr_17905[7] = inst_17884);
return statearr_17905;
})();var statearr_17906_17924 = state_17903__$1;(statearr_17906_17924[2] = null);
(statearr_17906_17924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 2))
{var inst_17884 = (state_17903[7]);var state_17903__$1 = state_17903;if(cljs.core.truth_(inst_17884))
{var statearr_17907_17925 = state_17903__$1;(statearr_17907_17925[1] = 4);
} else
{var statearr_17908_17926 = state_17903__$1;(statearr_17908_17926[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 3))
{var inst_17901 = (state_17903[2]);var state_17903__$1 = state_17903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17903__$1,inst_17901);
} else
{if((state_val_17904 === 4))
{var inst_17884 = (state_17903[7]);var inst_17887 = cljs.core.first.call(null,inst_17884);var state_17903__$1 = state_17903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17903__$1,7,ch,inst_17887);
} else
{if((state_val_17904 === 5))
{var state_17903__$1 = state_17903;if(cljs.core.truth_(close_QMARK_))
{var statearr_17909_17927 = state_17903__$1;(statearr_17909_17927[1] = 8);
} else
{var statearr_17910_17928 = state_17903__$1;(statearr_17910_17928[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 6))
{var inst_17899 = (state_17903[2]);var state_17903__$1 = state_17903;var statearr_17911_17929 = state_17903__$1;(statearr_17911_17929[2] = inst_17899);
(statearr_17911_17929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 7))
{var inst_17884 = (state_17903[7]);var inst_17889 = (state_17903[2]);var inst_17890 = cljs.core.next.call(null,inst_17884);var inst_17884__$1 = inst_17890;var state_17903__$1 = (function (){var statearr_17912 = state_17903;(statearr_17912[8] = inst_17889);
(statearr_17912[7] = inst_17884__$1);
return statearr_17912;
})();var statearr_17913_17930 = state_17903__$1;(statearr_17913_17930[2] = null);
(statearr_17913_17930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 8))
{var inst_17894 = cljs.core.async.close_BANG_.call(null,ch);var state_17903__$1 = state_17903;var statearr_17914_17931 = state_17903__$1;(statearr_17914_17931[2] = inst_17894);
(statearr_17914_17931[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 9))
{var state_17903__$1 = state_17903;var statearr_17915_17932 = state_17903__$1;(statearr_17915_17932[2] = null);
(statearr_17915_17932[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17904 === 10))
{var inst_17897 = (state_17903[2]);var state_17903__$1 = state_17903;var statearr_17916_17933 = state_17903__$1;(statearr_17916_17933[2] = inst_17897);
(statearr_17916_17933[1] = 6);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_17920 = (new Array(9));(statearr_17920[0] = state_machine__11439__auto__);
(statearr_17920[1] = 1);
return statearr_17920;
});
var state_machine__11439__auto____1 = (function (state_17903){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_17903);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e17921){if((e17921 instanceof Object))
{var ex__11442__auto__ = e17921;var statearr_17922_17934 = state_17903;(statearr_17922_17934[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17935 = state_17903;
state_17903 = G__17935;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_17923 = f__11509__auto__.call(null);(statearr_17923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_17923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
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
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7430__auto__ = _;if(and__7430__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8035__auto__ = (((_ == null))?null:_);return (function (){var or__7439__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18150 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18150 = (function (cs,ch,mult,meta18151){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18151 = meta18151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18150.cljs$lang$type = true;
cljs.core.async.t18150.cljs$lang$ctorStr = "cljs.core.async/t18150";
cljs.core.async.t18150.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t18150");
});})(cs))
;
cljs.core.async.t18150.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18150.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18150.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18150.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18150.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18152){var self__ = this;
var _18152__$1 = this;return self__.meta18151;
});})(cs))
;
cljs.core.async.t18150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18152,meta18151__$1){var self__ = this;
var _18152__$1 = this;return (new cljs.core.async.t18150(self__.cs,self__.ch,self__.mult,meta18151__$1));
});})(cs))
;
cljs.core.async.__GT_t18150 = ((function (cs){
return (function __GT_t18150(cs__$1,ch__$1,mult__$1,meta18151){return (new cljs.core.async.t18150(cs__$1,ch__$1,mult__$1,meta18151));
});})(cs))
;
}
return (new cljs.core.async.t18150(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11508__auto___18364 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_18282){var state_val_18283 = (state_18282[1]);if((state_val_18283 === 32))
{var inst_18155 = (state_18282[7]);var inst_18231 = (state_18282[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18282,31,Object,null,30);var inst_18238 = cljs.core.async.put_BANG_.call(null,inst_18231,inst_18155,done);var state_18282__$1 = state_18282;var statearr_18284_18365 = state_18282__$1;(statearr_18284_18365[2] = inst_18238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 1))
{var state_18282__$1 = state_18282;var statearr_18285_18366 = state_18282__$1;(statearr_18285_18366[2] = null);
(statearr_18285_18366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 33))
{var inst_18244 = (state_18282[9]);var inst_18246 = cljs.core.chunked_seq_QMARK_.call(null,inst_18244);var state_18282__$1 = state_18282;if(inst_18246)
{var statearr_18286_18367 = state_18282__$1;(statearr_18286_18367[1] = 36);
} else
{var statearr_18287_18368 = state_18282__$1;(statearr_18287_18368[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 2))
{var state_18282__$1 = state_18282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18282__$1,4,ch);
} else
{if((state_val_18283 === 34))
{var state_18282__$1 = state_18282;var statearr_18288_18369 = state_18282__$1;(statearr_18288_18369[2] = null);
(statearr_18288_18369[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 3))
{var inst_18280 = (state_18282[2]);var state_18282__$1 = state_18282;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18282__$1,inst_18280);
} else
{if((state_val_18283 === 35))
{var inst_18269 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18289_18370 = state_18282__$1;(statearr_18289_18370[2] = inst_18269);
(statearr_18289_18370[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 4))
{var inst_18155 = (state_18282[7]);var inst_18155__$1 = (state_18282[2]);var inst_18156 = (inst_18155__$1 == null);var state_18282__$1 = (function (){var statearr_18290 = state_18282;(statearr_18290[7] = inst_18155__$1);
return statearr_18290;
})();if(cljs.core.truth_(inst_18156))
{var statearr_18291_18371 = state_18282__$1;(statearr_18291_18371[1] = 5);
} else
{var statearr_18292_18372 = state_18282__$1;(statearr_18292_18372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 36))
{var inst_18244 = (state_18282[9]);var inst_18248 = cljs.core.chunk_first.call(null,inst_18244);var inst_18249 = cljs.core.chunk_rest.call(null,inst_18244);var inst_18250 = cljs.core.count.call(null,inst_18248);var inst_18223 = inst_18249;var inst_18224 = inst_18248;var inst_18225 = inst_18250;var inst_18226 = 0;var state_18282__$1 = (function (){var statearr_18293 = state_18282;(statearr_18293[10] = inst_18226);
(statearr_18293[11] = inst_18224);
(statearr_18293[12] = inst_18225);
(statearr_18293[13] = inst_18223);
return statearr_18293;
})();var statearr_18294_18373 = state_18282__$1;(statearr_18294_18373[2] = null);
(statearr_18294_18373[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 5))
{var inst_18162 = cljs.core.deref.call(null,cs);var inst_18163 = cljs.core.seq.call(null,inst_18162);var inst_18164 = inst_18163;var inst_18165 = null;var inst_18166 = 0;var inst_18167 = 0;var state_18282__$1 = (function (){var statearr_18295 = state_18282;(statearr_18295[14] = inst_18166);
(statearr_18295[15] = inst_18165);
(statearr_18295[16] = inst_18167);
(statearr_18295[17] = inst_18164);
return statearr_18295;
})();var statearr_18296_18374 = state_18282__$1;(statearr_18296_18374[2] = null);
(statearr_18296_18374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 37))
{var inst_18244 = (state_18282[9]);var inst_18253 = cljs.core.first.call(null,inst_18244);var state_18282__$1 = (function (){var statearr_18297 = state_18282;(statearr_18297[18] = inst_18253);
return statearr_18297;
})();var statearr_18298_18375 = state_18282__$1;(statearr_18298_18375[2] = null);
(statearr_18298_18375[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 6))
{var inst_18214 = cljs.core.deref.call(null,cs);var inst_18215 = cljs.core.keys.call(null,inst_18214);var inst_18216 = cljs.core.count.call(null,inst_18215);var inst_18217 = cljs.core.reset_BANG_.call(null,dctr,inst_18216);var inst_18222 = cljs.core.seq.call(null,inst_18215);var inst_18223 = inst_18222;var inst_18224 = null;var inst_18225 = 0;var inst_18226 = 0;var state_18282__$1 = (function (){var statearr_18299 = state_18282;(statearr_18299[19] = inst_18217);
(statearr_18299[10] = inst_18226);
(statearr_18299[11] = inst_18224);
(statearr_18299[12] = inst_18225);
(statearr_18299[13] = inst_18223);
return statearr_18299;
})();var statearr_18300_18376 = state_18282__$1;(statearr_18300_18376[2] = null);
(statearr_18300_18376[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 38))
{var inst_18266 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18301_18377 = state_18282__$1;(statearr_18301_18377[2] = inst_18266);
(statearr_18301_18377[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 7))
{var inst_18278 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18302_18378 = state_18282__$1;(statearr_18302_18378[2] = inst_18278);
(statearr_18302_18378[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 39))
{var inst_18244 = (state_18282[9]);var inst_18262 = (state_18282[2]);var inst_18263 = cljs.core.next.call(null,inst_18244);var inst_18223 = inst_18263;var inst_18224 = null;var inst_18225 = 0;var inst_18226 = 0;var state_18282__$1 = (function (){var statearr_18303 = state_18282;(statearr_18303[20] = inst_18262);
(statearr_18303[10] = inst_18226);
(statearr_18303[11] = inst_18224);
(statearr_18303[12] = inst_18225);
(statearr_18303[13] = inst_18223);
return statearr_18303;
})();var statearr_18304_18379 = state_18282__$1;(statearr_18304_18379[2] = null);
(statearr_18304_18379[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 8))
{var inst_18166 = (state_18282[14]);var inst_18167 = (state_18282[16]);var inst_18169 = (inst_18167 < inst_18166);var inst_18170 = inst_18169;var state_18282__$1 = state_18282;if(cljs.core.truth_(inst_18170))
{var statearr_18305_18380 = state_18282__$1;(statearr_18305_18380[1] = 10);
} else
{var statearr_18306_18381 = state_18282__$1;(statearr_18306_18381[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 40))
{var inst_18253 = (state_18282[18]);var inst_18254 = (state_18282[2]);var inst_18255 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18256 = cljs.core.async.untap_STAR_.call(null,m,inst_18253);var state_18282__$1 = (function (){var statearr_18307 = state_18282;(statearr_18307[21] = inst_18254);
(statearr_18307[22] = inst_18255);
return statearr_18307;
})();var statearr_18308_18382 = state_18282__$1;(statearr_18308_18382[2] = inst_18256);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 9))
{var inst_18212 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18309_18383 = state_18282__$1;(statearr_18309_18383[2] = inst_18212);
(statearr_18309_18383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 41))
{var inst_18253 = (state_18282[18]);var inst_18155 = (state_18282[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18282,40,Object,null,39);var inst_18260 = cljs.core.async.put_BANG_.call(null,inst_18253,inst_18155,done);var state_18282__$1 = state_18282;var statearr_18310_18384 = state_18282__$1;(statearr_18310_18384[2] = inst_18260);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 10))
{var inst_18165 = (state_18282[15]);var inst_18167 = (state_18282[16]);var inst_18173 = cljs.core._nth.call(null,inst_18165,inst_18167);var inst_18174 = cljs.core.nth.call(null,inst_18173,0,null);var inst_18175 = cljs.core.nth.call(null,inst_18173,1,null);var state_18282__$1 = (function (){var statearr_18311 = state_18282;(statearr_18311[23] = inst_18174);
return statearr_18311;
})();if(cljs.core.truth_(inst_18175))
{var statearr_18312_18385 = state_18282__$1;(statearr_18312_18385[1] = 13);
} else
{var statearr_18313_18386 = state_18282__$1;(statearr_18313_18386[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 42))
{var inst_18275 = (state_18282[2]);var state_18282__$1 = (function (){var statearr_18314 = state_18282;(statearr_18314[24] = inst_18275);
return statearr_18314;
})();var statearr_18315_18387 = state_18282__$1;(statearr_18315_18387[2] = null);
(statearr_18315_18387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 11))
{var inst_18184 = (state_18282[25]);var inst_18164 = (state_18282[17]);var inst_18184__$1 = cljs.core.seq.call(null,inst_18164);var state_18282__$1 = (function (){var statearr_18316 = state_18282;(statearr_18316[25] = inst_18184__$1);
return statearr_18316;
})();if(inst_18184__$1)
{var statearr_18317_18388 = state_18282__$1;(statearr_18317_18388[1] = 16);
} else
{var statearr_18318_18389 = state_18282__$1;(statearr_18318_18389[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 12))
{var inst_18210 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18319_18390 = state_18282__$1;(statearr_18319_18390[2] = inst_18210);
(statearr_18319_18390[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 13))
{var inst_18174 = (state_18282[23]);var inst_18177 = cljs.core.async.close_BANG_.call(null,inst_18174);var state_18282__$1 = state_18282;var statearr_18323_18391 = state_18282__$1;(statearr_18323_18391[2] = inst_18177);
(statearr_18323_18391[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 14))
{var state_18282__$1 = state_18282;var statearr_18324_18392 = state_18282__$1;(statearr_18324_18392[2] = null);
(statearr_18324_18392[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 15))
{var inst_18166 = (state_18282[14]);var inst_18165 = (state_18282[15]);var inst_18167 = (state_18282[16]);var inst_18164 = (state_18282[17]);var inst_18180 = (state_18282[2]);var inst_18181 = (inst_18167 + 1);var tmp18320 = inst_18166;var tmp18321 = inst_18165;var tmp18322 = inst_18164;var inst_18164__$1 = tmp18322;var inst_18165__$1 = tmp18321;var inst_18166__$1 = tmp18320;var inst_18167__$1 = inst_18181;var state_18282__$1 = (function (){var statearr_18325 = state_18282;(statearr_18325[14] = inst_18166__$1);
(statearr_18325[15] = inst_18165__$1);
(statearr_18325[16] = inst_18167__$1);
(statearr_18325[26] = inst_18180);
(statearr_18325[17] = inst_18164__$1);
return statearr_18325;
})();var statearr_18326_18393 = state_18282__$1;(statearr_18326_18393[2] = null);
(statearr_18326_18393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 16))
{var inst_18184 = (state_18282[25]);var inst_18186 = cljs.core.chunked_seq_QMARK_.call(null,inst_18184);var state_18282__$1 = state_18282;if(inst_18186)
{var statearr_18327_18394 = state_18282__$1;(statearr_18327_18394[1] = 19);
} else
{var statearr_18328_18395 = state_18282__$1;(statearr_18328_18395[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 17))
{var state_18282__$1 = state_18282;var statearr_18329_18396 = state_18282__$1;(statearr_18329_18396[2] = null);
(statearr_18329_18396[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 18))
{var inst_18208 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18330_18397 = state_18282__$1;(statearr_18330_18397[2] = inst_18208);
(statearr_18330_18397[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 19))
{var inst_18184 = (state_18282[25]);var inst_18188 = cljs.core.chunk_first.call(null,inst_18184);var inst_18189 = cljs.core.chunk_rest.call(null,inst_18184);var inst_18190 = cljs.core.count.call(null,inst_18188);var inst_18164 = inst_18189;var inst_18165 = inst_18188;var inst_18166 = inst_18190;var inst_18167 = 0;var state_18282__$1 = (function (){var statearr_18331 = state_18282;(statearr_18331[14] = inst_18166);
(statearr_18331[15] = inst_18165);
(statearr_18331[16] = inst_18167);
(statearr_18331[17] = inst_18164);
return statearr_18331;
})();var statearr_18332_18398 = state_18282__$1;(statearr_18332_18398[2] = null);
(statearr_18332_18398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 20))
{var inst_18184 = (state_18282[25]);var inst_18194 = cljs.core.first.call(null,inst_18184);var inst_18195 = cljs.core.nth.call(null,inst_18194,0,null);var inst_18196 = cljs.core.nth.call(null,inst_18194,1,null);var state_18282__$1 = (function (){var statearr_18333 = state_18282;(statearr_18333[27] = inst_18195);
return statearr_18333;
})();if(cljs.core.truth_(inst_18196))
{var statearr_18334_18399 = state_18282__$1;(statearr_18334_18399[1] = 22);
} else
{var statearr_18335_18400 = state_18282__$1;(statearr_18335_18400[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 21))
{var inst_18205 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18336_18401 = state_18282__$1;(statearr_18336_18401[2] = inst_18205);
(statearr_18336_18401[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 22))
{var inst_18195 = (state_18282[27]);var inst_18198 = cljs.core.async.close_BANG_.call(null,inst_18195);var state_18282__$1 = state_18282;var statearr_18337_18402 = state_18282__$1;(statearr_18337_18402[2] = inst_18198);
(statearr_18337_18402[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 23))
{var state_18282__$1 = state_18282;var statearr_18338_18403 = state_18282__$1;(statearr_18338_18403[2] = null);
(statearr_18338_18403[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 24))
{var inst_18184 = (state_18282[25]);var inst_18201 = (state_18282[2]);var inst_18202 = cljs.core.next.call(null,inst_18184);var inst_18164 = inst_18202;var inst_18165 = null;var inst_18166 = 0;var inst_18167 = 0;var state_18282__$1 = (function (){var statearr_18339 = state_18282;(statearr_18339[14] = inst_18166);
(statearr_18339[15] = inst_18165);
(statearr_18339[28] = inst_18201);
(statearr_18339[16] = inst_18167);
(statearr_18339[17] = inst_18164);
return statearr_18339;
})();var statearr_18340_18404 = state_18282__$1;(statearr_18340_18404[2] = null);
(statearr_18340_18404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 25))
{var inst_18226 = (state_18282[10]);var inst_18225 = (state_18282[12]);var inst_18228 = (inst_18226 < inst_18225);var inst_18229 = inst_18228;var state_18282__$1 = state_18282;if(cljs.core.truth_(inst_18229))
{var statearr_18341_18405 = state_18282__$1;(statearr_18341_18405[1] = 27);
} else
{var statearr_18342_18406 = state_18282__$1;(statearr_18342_18406[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 26))
{var inst_18273 = (state_18282[2]);var state_18282__$1 = (function (){var statearr_18343 = state_18282;(statearr_18343[29] = inst_18273);
return statearr_18343;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18282__$1,42,dchan);
} else
{if((state_val_18283 === 27))
{var inst_18226 = (state_18282[10]);var inst_18224 = (state_18282[11]);var inst_18231 = cljs.core._nth.call(null,inst_18224,inst_18226);var state_18282__$1 = (function (){var statearr_18344 = state_18282;(statearr_18344[8] = inst_18231);
return statearr_18344;
})();var statearr_18345_18407 = state_18282__$1;(statearr_18345_18407[2] = null);
(statearr_18345_18407[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 28))
{var inst_18244 = (state_18282[9]);var inst_18223 = (state_18282[13]);var inst_18244__$1 = cljs.core.seq.call(null,inst_18223);var state_18282__$1 = (function (){var statearr_18349 = state_18282;(statearr_18349[9] = inst_18244__$1);
return statearr_18349;
})();if(inst_18244__$1)
{var statearr_18350_18408 = state_18282__$1;(statearr_18350_18408[1] = 33);
} else
{var statearr_18351_18409 = state_18282__$1;(statearr_18351_18409[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 29))
{var inst_18271 = (state_18282[2]);var state_18282__$1 = state_18282;var statearr_18352_18410 = state_18282__$1;(statearr_18352_18410[2] = inst_18271);
(statearr_18352_18410[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 30))
{var inst_18226 = (state_18282[10]);var inst_18224 = (state_18282[11]);var inst_18225 = (state_18282[12]);var inst_18223 = (state_18282[13]);var inst_18240 = (state_18282[2]);var inst_18241 = (inst_18226 + 1);var tmp18346 = inst_18224;var tmp18347 = inst_18225;var tmp18348 = inst_18223;var inst_18223__$1 = tmp18348;var inst_18224__$1 = tmp18346;var inst_18225__$1 = tmp18347;var inst_18226__$1 = inst_18241;var state_18282__$1 = (function (){var statearr_18353 = state_18282;(statearr_18353[10] = inst_18226__$1);
(statearr_18353[11] = inst_18224__$1);
(statearr_18353[12] = inst_18225__$1);
(statearr_18353[13] = inst_18223__$1);
(statearr_18353[30] = inst_18240);
return statearr_18353;
})();var statearr_18354_18411 = state_18282__$1;(statearr_18354_18411[2] = null);
(statearr_18354_18411[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18283 === 31))
{var inst_18231 = (state_18282[8]);var inst_18232 = (state_18282[2]);var inst_18233 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18234 = cljs.core.async.untap_STAR_.call(null,m,inst_18231);var state_18282__$1 = (function (){var statearr_18355 = state_18282;(statearr_18355[31] = inst_18232);
(statearr_18355[32] = inst_18233);
return statearr_18355;
})();var statearr_18356_18412 = state_18282__$1;(statearr_18356_18412[2] = inst_18234);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18282__$1);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_18360 = (new Array(33));(statearr_18360[0] = state_machine__11439__auto__);
(statearr_18360[1] = 1);
return statearr_18360;
});
var state_machine__11439__auto____1 = (function (state_18282){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_18282);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e18361){if((e18361 instanceof Object))
{var ex__11442__auto__ = e18361;var statearr_18362_18413 = state_18282;(statearr_18362_18413[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18414 = state_18282;
state_18282 = G__18414;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_18282){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_18282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_18363 = f__11509__auto__.call(null);(statearr_18363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___18364);
return statearr_18363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7430__auto__ = m;if(and__7430__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8035__auto__ = (((m == null))?null:m);return (function (){var or__7439__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18524 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta18525){
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
this.meta18525 = meta18525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18524.cljs$lang$type = true;
cljs.core.async.t18524.cljs$lang$ctorStr = "cljs.core.async/t18524";
cljs.core.async.t18524.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t18524");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18524.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18526){var self__ = this;
var _18526__$1 = this;return self__.meta18525;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18526,meta18525__$1){var self__ = this;
var _18526__$1 = this;return (new cljs.core.async.t18524(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta18525__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18524 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18524(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18525){return (new cljs.core.async.t18524(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18525));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18524(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11508__auto___18633 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_18591){var state_val_18592 = (state_18591[1]);if((state_val_18592 === 1))
{var inst_18530 = (state_18591[7]);var inst_18530__$1 = calc_state.call(null);var inst_18531 = cljs.core.seq_QMARK_.call(null,inst_18530__$1);var state_18591__$1 = (function (){var statearr_18593 = state_18591;(statearr_18593[7] = inst_18530__$1);
return statearr_18593;
})();if(inst_18531)
{var statearr_18594_18634 = state_18591__$1;(statearr_18594_18634[1] = 2);
} else
{var statearr_18595_18635 = state_18591__$1;(statearr_18595_18635[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 2))
{var inst_18530 = (state_18591[7]);var inst_18533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18530);var state_18591__$1 = state_18591;var statearr_18596_18636 = state_18591__$1;(statearr_18596_18636[2] = inst_18533);
(statearr_18596_18636[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 3))
{var inst_18530 = (state_18591[7]);var state_18591__$1 = state_18591;var statearr_18597_18637 = state_18591__$1;(statearr_18597_18637[2] = inst_18530);
(statearr_18597_18637[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 4))
{var inst_18530 = (state_18591[7]);var inst_18536 = (state_18591[2]);var inst_18537 = cljs.core.get.call(null,inst_18536,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18538 = cljs.core.get.call(null,inst_18536,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18539 = cljs.core.get.call(null,inst_18536,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_18540 = inst_18530;var state_18591__$1 = (function (){var statearr_18598 = state_18591;(statearr_18598[8] = inst_18539);
(statearr_18598[9] = inst_18538);
(statearr_18598[10] = inst_18537);
(statearr_18598[11] = inst_18540);
return statearr_18598;
})();var statearr_18599_18638 = state_18591__$1;(statearr_18599_18638[2] = null);
(statearr_18599_18638[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 5))
{var inst_18540 = (state_18591[11]);var inst_18543 = cljs.core.seq_QMARK_.call(null,inst_18540);var state_18591__$1 = state_18591;if(inst_18543)
{var statearr_18600_18639 = state_18591__$1;(statearr_18600_18639[1] = 7);
} else
{var statearr_18601_18640 = state_18591__$1;(statearr_18601_18640[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 6))
{var inst_18589 = (state_18591[2]);var state_18591__$1 = state_18591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18591__$1,inst_18589);
} else
{if((state_val_18592 === 7))
{var inst_18540 = (state_18591[11]);var inst_18545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18540);var state_18591__$1 = state_18591;var statearr_18602_18641 = state_18591__$1;(statearr_18602_18641[2] = inst_18545);
(statearr_18602_18641[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 8))
{var inst_18540 = (state_18591[11]);var state_18591__$1 = state_18591;var statearr_18603_18642 = state_18591__$1;(statearr_18603_18642[2] = inst_18540);
(statearr_18603_18642[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 9))
{var inst_18548 = (state_18591[12]);var inst_18548__$1 = (state_18591[2]);var inst_18549 = cljs.core.get.call(null,inst_18548__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18550 = cljs.core.get.call(null,inst_18548__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18551 = cljs.core.get.call(null,inst_18548__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_18591__$1 = (function (){var statearr_18604 = state_18591;(statearr_18604[13] = inst_18551);
(statearr_18604[14] = inst_18550);
(statearr_18604[12] = inst_18548__$1);
return statearr_18604;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18591__$1,10,inst_18549);
} else
{if((state_val_18592 === 10))
{var inst_18556 = (state_18591[15]);var inst_18555 = (state_18591[16]);var inst_18554 = (state_18591[2]);var inst_18555__$1 = cljs.core.nth.call(null,inst_18554,0,null);var inst_18556__$1 = cljs.core.nth.call(null,inst_18554,1,null);var inst_18557 = (inst_18555__$1 == null);var inst_18558 = cljs.core._EQ_.call(null,inst_18556__$1,change);var inst_18559 = (inst_18557) || (inst_18558);var state_18591__$1 = (function (){var statearr_18605 = state_18591;(statearr_18605[15] = inst_18556__$1);
(statearr_18605[16] = inst_18555__$1);
return statearr_18605;
})();if(cljs.core.truth_(inst_18559))
{var statearr_18606_18643 = state_18591__$1;(statearr_18606_18643[1] = 11);
} else
{var statearr_18607_18644 = state_18591__$1;(statearr_18607_18644[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 11))
{var inst_18555 = (state_18591[16]);var inst_18561 = (inst_18555 == null);var state_18591__$1 = state_18591;if(cljs.core.truth_(inst_18561))
{var statearr_18608_18645 = state_18591__$1;(statearr_18608_18645[1] = 14);
} else
{var statearr_18609_18646 = state_18591__$1;(statearr_18609_18646[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 12))
{var inst_18570 = (state_18591[17]);var inst_18556 = (state_18591[15]);var inst_18551 = (state_18591[13]);var inst_18570__$1 = inst_18551.call(null,inst_18556);var state_18591__$1 = (function (){var statearr_18610 = state_18591;(statearr_18610[17] = inst_18570__$1);
return statearr_18610;
})();if(cljs.core.truth_(inst_18570__$1))
{var statearr_18611_18647 = state_18591__$1;(statearr_18611_18647[1] = 17);
} else
{var statearr_18612_18648 = state_18591__$1;(statearr_18612_18648[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 13))
{var inst_18587 = (state_18591[2]);var state_18591__$1 = state_18591;var statearr_18613_18649 = state_18591__$1;(statearr_18613_18649[2] = inst_18587);
(statearr_18613_18649[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 14))
{var inst_18556 = (state_18591[15]);var inst_18563 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18556);var state_18591__$1 = state_18591;var statearr_18614_18650 = state_18591__$1;(statearr_18614_18650[2] = inst_18563);
(statearr_18614_18650[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 15))
{var state_18591__$1 = state_18591;var statearr_18615_18651 = state_18591__$1;(statearr_18615_18651[2] = null);
(statearr_18615_18651[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 16))
{var inst_18566 = (state_18591[2]);var inst_18567 = calc_state.call(null);var inst_18540 = inst_18567;var state_18591__$1 = (function (){var statearr_18616 = state_18591;(statearr_18616[18] = inst_18566);
(statearr_18616[11] = inst_18540);
return statearr_18616;
})();var statearr_18617_18652 = state_18591__$1;(statearr_18617_18652[2] = null);
(statearr_18617_18652[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 17))
{var inst_18570 = (state_18591[17]);var state_18591__$1 = state_18591;var statearr_18618_18653 = state_18591__$1;(statearr_18618_18653[2] = inst_18570);
(statearr_18618_18653[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 18))
{var inst_18556 = (state_18591[15]);var inst_18551 = (state_18591[13]);var inst_18550 = (state_18591[14]);var inst_18573 = cljs.core.empty_QMARK_.call(null,inst_18551);var inst_18574 = inst_18550.call(null,inst_18556);var inst_18575 = cljs.core.not.call(null,inst_18574);var inst_18576 = (inst_18573) && (inst_18575);var state_18591__$1 = state_18591;var statearr_18619_18654 = state_18591__$1;(statearr_18619_18654[2] = inst_18576);
(statearr_18619_18654[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 19))
{var inst_18578 = (state_18591[2]);var state_18591__$1 = state_18591;if(cljs.core.truth_(inst_18578))
{var statearr_18620_18655 = state_18591__$1;(statearr_18620_18655[1] = 20);
} else
{var statearr_18621_18656 = state_18591__$1;(statearr_18621_18656[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 20))
{var inst_18555 = (state_18591[16]);var state_18591__$1 = state_18591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18591__$1,23,out,inst_18555);
} else
{if((state_val_18592 === 21))
{var state_18591__$1 = state_18591;var statearr_18622_18657 = state_18591__$1;(statearr_18622_18657[2] = null);
(statearr_18622_18657[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 22))
{var inst_18548 = (state_18591[12]);var inst_18584 = (state_18591[2]);var inst_18540 = inst_18548;var state_18591__$1 = (function (){var statearr_18623 = state_18591;(statearr_18623[19] = inst_18584);
(statearr_18623[11] = inst_18540);
return statearr_18623;
})();var statearr_18624_18658 = state_18591__$1;(statearr_18624_18658[2] = null);
(statearr_18624_18658[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18592 === 23))
{var inst_18581 = (state_18591[2]);var state_18591__$1 = state_18591;var statearr_18625_18659 = state_18591__$1;(statearr_18625_18659[2] = inst_18581);
(statearr_18625_18659[1] = 22);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_18629 = (new Array(20));(statearr_18629[0] = state_machine__11439__auto__);
(statearr_18629[1] = 1);
return statearr_18629;
});
var state_machine__11439__auto____1 = (function (state_18591){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_18591);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e18630){if((e18630 instanceof Object))
{var ex__11442__auto__ = e18630;var statearr_18631_18660 = state_18591;(statearr_18631_18660[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18630;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18661 = state_18591;
state_18591 = G__18661;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_18591){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_18591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_18632 = f__11509__auto__.call(null);(statearr_18632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___18633);
return statearr_18632;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7430__auto__ = p;if(and__7430__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7430__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8035__auto__ = (((p == null))?null:p);return (function (){var or__7439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
return (function (topic){var or__7439__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7439__auto__,mults){
return (function (p1__18662_SHARP_){if(cljs.core.truth_(p1__18662_SHARP_.call(null,topic)))
{return p1__18662_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18662_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7439__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18787 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18788){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18788 = meta18788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18787.cljs$lang$type = true;
cljs.core.async.t18787.cljs$lang$ctorStr = "cljs.core.async/t18787";
cljs.core.async.t18787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async/t18787");
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18789){var self__ = this;
var _18789__$1 = this;return self__.meta18788;
});})(mults,ensure_mult))
;
cljs.core.async.t18787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18789,meta18788__$1){var self__ = this;
var _18789__$1 = this;return (new cljs.core.async.t18787(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18788__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18787 = ((function (mults,ensure_mult){
return (function __GT_t18787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18788){return (new cljs.core.async.t18787(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18788));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18787(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11508__auto___18911 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_18863){var state_val_18864 = (state_18863[1]);if((state_val_18864 === 1))
{var state_18863__$1 = state_18863;var statearr_18865_18912 = state_18863__$1;(statearr_18865_18912[2] = null);
(statearr_18865_18912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 2))
{var state_18863__$1 = state_18863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18863__$1,4,ch);
} else
{if((state_val_18864 === 3))
{var inst_18861 = (state_18863[2]);var state_18863__$1 = state_18863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18863__$1,inst_18861);
} else
{if((state_val_18864 === 4))
{var inst_18792 = (state_18863[7]);var inst_18792__$1 = (state_18863[2]);var inst_18793 = (inst_18792__$1 == null);var state_18863__$1 = (function (){var statearr_18866 = state_18863;(statearr_18866[7] = inst_18792__$1);
return statearr_18866;
})();if(cljs.core.truth_(inst_18793))
{var statearr_18867_18913 = state_18863__$1;(statearr_18867_18913[1] = 5);
} else
{var statearr_18868_18914 = state_18863__$1;(statearr_18868_18914[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 5))
{var inst_18799 = cljs.core.deref.call(null,mults);var inst_18800 = cljs.core.vals.call(null,inst_18799);var inst_18801 = cljs.core.seq.call(null,inst_18800);var inst_18802 = inst_18801;var inst_18803 = null;var inst_18804 = 0;var inst_18805 = 0;var state_18863__$1 = (function (){var statearr_18869 = state_18863;(statearr_18869[8] = inst_18804);
(statearr_18869[9] = inst_18805);
(statearr_18869[10] = inst_18803);
(statearr_18869[11] = inst_18802);
return statearr_18869;
})();var statearr_18870_18915 = state_18863__$1;(statearr_18870_18915[2] = null);
(statearr_18870_18915[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 6))
{var inst_18842 = (state_18863[12]);var inst_18840 = (state_18863[13]);var inst_18792 = (state_18863[7]);var inst_18840__$1 = topic_fn.call(null,inst_18792);var inst_18841 = cljs.core.deref.call(null,mults);var inst_18842__$1 = cljs.core.get.call(null,inst_18841,inst_18840__$1);var state_18863__$1 = (function (){var statearr_18871 = state_18863;(statearr_18871[12] = inst_18842__$1);
(statearr_18871[13] = inst_18840__$1);
return statearr_18871;
})();if(cljs.core.truth_(inst_18842__$1))
{var statearr_18872_18916 = state_18863__$1;(statearr_18872_18916[1] = 19);
} else
{var statearr_18873_18917 = state_18863__$1;(statearr_18873_18917[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 7))
{var inst_18859 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18874_18918 = state_18863__$1;(statearr_18874_18918[2] = inst_18859);
(statearr_18874_18918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 8))
{var inst_18804 = (state_18863[8]);var inst_18805 = (state_18863[9]);var inst_18807 = (inst_18805 < inst_18804);var inst_18808 = inst_18807;var state_18863__$1 = state_18863;if(cljs.core.truth_(inst_18808))
{var statearr_18878_18919 = state_18863__$1;(statearr_18878_18919[1] = 10);
} else
{var statearr_18879_18920 = state_18863__$1;(statearr_18879_18920[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 9))
{var inst_18838 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18880_18921 = state_18863__$1;(statearr_18880_18921[2] = inst_18838);
(statearr_18880_18921[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 10))
{var inst_18804 = (state_18863[8]);var inst_18805 = (state_18863[9]);var inst_18803 = (state_18863[10]);var inst_18802 = (state_18863[11]);var inst_18810 = cljs.core._nth.call(null,inst_18803,inst_18805);var inst_18811 = cljs.core.async.muxch_STAR_.call(null,inst_18810);var inst_18812 = cljs.core.async.close_BANG_.call(null,inst_18811);var inst_18813 = (inst_18805 + 1);var tmp18875 = inst_18804;var tmp18876 = inst_18803;var tmp18877 = inst_18802;var inst_18802__$1 = tmp18877;var inst_18803__$1 = tmp18876;var inst_18804__$1 = tmp18875;var inst_18805__$1 = inst_18813;var state_18863__$1 = (function (){var statearr_18881 = state_18863;(statearr_18881[8] = inst_18804__$1);
(statearr_18881[9] = inst_18805__$1);
(statearr_18881[14] = inst_18812);
(statearr_18881[10] = inst_18803__$1);
(statearr_18881[11] = inst_18802__$1);
return statearr_18881;
})();var statearr_18882_18922 = state_18863__$1;(statearr_18882_18922[2] = null);
(statearr_18882_18922[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 11))
{var inst_18802 = (state_18863[11]);var inst_18816 = (state_18863[15]);var inst_18816__$1 = cljs.core.seq.call(null,inst_18802);var state_18863__$1 = (function (){var statearr_18883 = state_18863;(statearr_18883[15] = inst_18816__$1);
return statearr_18883;
})();if(inst_18816__$1)
{var statearr_18884_18923 = state_18863__$1;(statearr_18884_18923[1] = 13);
} else
{var statearr_18885_18924 = state_18863__$1;(statearr_18885_18924[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 12))
{var inst_18836 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18886_18925 = state_18863__$1;(statearr_18886_18925[2] = inst_18836);
(statearr_18886_18925[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 13))
{var inst_18816 = (state_18863[15]);var inst_18818 = cljs.core.chunked_seq_QMARK_.call(null,inst_18816);var state_18863__$1 = state_18863;if(inst_18818)
{var statearr_18887_18926 = state_18863__$1;(statearr_18887_18926[1] = 16);
} else
{var statearr_18888_18927 = state_18863__$1;(statearr_18888_18927[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 14))
{var state_18863__$1 = state_18863;var statearr_18889_18928 = state_18863__$1;(statearr_18889_18928[2] = null);
(statearr_18889_18928[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 15))
{var inst_18834 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18890_18929 = state_18863__$1;(statearr_18890_18929[2] = inst_18834);
(statearr_18890_18929[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 16))
{var inst_18816 = (state_18863[15]);var inst_18820 = cljs.core.chunk_first.call(null,inst_18816);var inst_18821 = cljs.core.chunk_rest.call(null,inst_18816);var inst_18822 = cljs.core.count.call(null,inst_18820);var inst_18802 = inst_18821;var inst_18803 = inst_18820;var inst_18804 = inst_18822;var inst_18805 = 0;var state_18863__$1 = (function (){var statearr_18891 = state_18863;(statearr_18891[8] = inst_18804);
(statearr_18891[9] = inst_18805);
(statearr_18891[10] = inst_18803);
(statearr_18891[11] = inst_18802);
return statearr_18891;
})();var statearr_18892_18930 = state_18863__$1;(statearr_18892_18930[2] = null);
(statearr_18892_18930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 17))
{var inst_18816 = (state_18863[15]);var inst_18825 = cljs.core.first.call(null,inst_18816);var inst_18826 = cljs.core.async.muxch_STAR_.call(null,inst_18825);var inst_18827 = cljs.core.async.close_BANG_.call(null,inst_18826);var inst_18828 = cljs.core.next.call(null,inst_18816);var inst_18802 = inst_18828;var inst_18803 = null;var inst_18804 = 0;var inst_18805 = 0;var state_18863__$1 = (function (){var statearr_18893 = state_18863;(statearr_18893[8] = inst_18804);
(statearr_18893[9] = inst_18805);
(statearr_18893[10] = inst_18803);
(statearr_18893[11] = inst_18802);
(statearr_18893[16] = inst_18827);
return statearr_18893;
})();var statearr_18894_18931 = state_18863__$1;(statearr_18894_18931[2] = null);
(statearr_18894_18931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 18))
{var inst_18831 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18895_18932 = state_18863__$1;(statearr_18895_18932[2] = inst_18831);
(statearr_18895_18932[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 19))
{var state_18863__$1 = state_18863;var statearr_18896_18933 = state_18863__$1;(statearr_18896_18933[2] = null);
(statearr_18896_18933[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 20))
{var state_18863__$1 = state_18863;var statearr_18897_18934 = state_18863__$1;(statearr_18897_18934[2] = null);
(statearr_18897_18934[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 21))
{var inst_18856 = (state_18863[2]);var state_18863__$1 = (function (){var statearr_18898 = state_18863;(statearr_18898[17] = inst_18856);
return statearr_18898;
})();var statearr_18899_18935 = state_18863__$1;(statearr_18899_18935[2] = null);
(statearr_18899_18935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 22))
{var inst_18853 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18900_18936 = state_18863__$1;(statearr_18900_18936[2] = inst_18853);
(statearr_18900_18936[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 23))
{var inst_18840 = (state_18863[13]);var inst_18844 = (state_18863[2]);var inst_18845 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18840);var state_18863__$1 = (function (){var statearr_18901 = state_18863;(statearr_18901[18] = inst_18844);
return statearr_18901;
})();var statearr_18902_18937 = state_18863__$1;(statearr_18902_18937[2] = inst_18845);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18863__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18864 === 24))
{var inst_18842 = (state_18863[12]);var inst_18792 = (state_18863[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18863,23,Object,null,22);var inst_18849 = cljs.core.async.muxch_STAR_.call(null,inst_18842);var state_18863__$1 = state_18863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18863__$1,25,inst_18849,inst_18792);
} else
{if((state_val_18864 === 25))
{var inst_18851 = (state_18863[2]);var state_18863__$1 = state_18863;var statearr_18903_18938 = state_18863__$1;(statearr_18903_18938[2] = inst_18851);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18863__$1);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_18907 = (new Array(19));(statearr_18907[0] = state_machine__11439__auto__);
(statearr_18907[1] = 1);
return statearr_18907;
});
var state_machine__11439__auto____1 = (function (state_18863){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_18863);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e18908){if((e18908 instanceof Object))
{var ex__11442__auto__ = e18908;var statearr_18909_18939 = state_18863;(statearr_18909_18939[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18940 = state_18863;
state_18863 = G__18940;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_18863){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_18863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_18910 = f__11509__auto__.call(null);(statearr_18910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___18911);
return statearr_18910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
,cljs.core.range.call(null,cnt));var c__11508__auto___19077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_19047){var state_val_19048 = (state_19047[1]);if((state_val_19048 === 1))
{var state_19047__$1 = state_19047;var statearr_19049_19078 = state_19047__$1;(statearr_19049_19078[2] = null);
(statearr_19049_19078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 2))
{var inst_19010 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19011 = 0;var state_19047__$1 = (function (){var statearr_19050 = state_19047;(statearr_19050[7] = inst_19010);
(statearr_19050[8] = inst_19011);
return statearr_19050;
})();var statearr_19051_19079 = state_19047__$1;(statearr_19051_19079[2] = null);
(statearr_19051_19079[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 3))
{var inst_19045 = (state_19047[2]);var state_19047__$1 = state_19047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19047__$1,inst_19045);
} else
{if((state_val_19048 === 4))
{var inst_19011 = (state_19047[8]);var inst_19013 = (inst_19011 < cnt);var state_19047__$1 = state_19047;if(cljs.core.truth_(inst_19013))
{var statearr_19052_19080 = state_19047__$1;(statearr_19052_19080[1] = 6);
} else
{var statearr_19053_19081 = state_19047__$1;(statearr_19053_19081[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 5))
{var inst_19031 = (state_19047[2]);var state_19047__$1 = (function (){var statearr_19054 = state_19047;(statearr_19054[9] = inst_19031);
return statearr_19054;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,12,dchan);
} else
{if((state_val_19048 === 6))
{var state_19047__$1 = state_19047;var statearr_19055_19082 = state_19047__$1;(statearr_19055_19082[2] = null);
(statearr_19055_19082[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 7))
{var state_19047__$1 = state_19047;var statearr_19056_19083 = state_19047__$1;(statearr_19056_19083[2] = null);
(statearr_19056_19083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 8))
{var inst_19029 = (state_19047[2]);var state_19047__$1 = state_19047;var statearr_19057_19084 = state_19047__$1;(statearr_19057_19084[2] = inst_19029);
(statearr_19057_19084[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 9))
{var inst_19011 = (state_19047[8]);var inst_19024 = (state_19047[2]);var inst_19025 = (inst_19011 + 1);var inst_19011__$1 = inst_19025;var state_19047__$1 = (function (){var statearr_19058 = state_19047;(statearr_19058[10] = inst_19024);
(statearr_19058[8] = inst_19011__$1);
return statearr_19058;
})();var statearr_19059_19085 = state_19047__$1;(statearr_19059_19085[2] = null);
(statearr_19059_19085[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 10))
{var inst_19015 = (state_19047[2]);var inst_19016 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19047__$1 = (function (){var statearr_19060 = state_19047;(statearr_19060[11] = inst_19015);
return statearr_19060;
})();var statearr_19061_19086 = state_19047__$1;(statearr_19061_19086[2] = inst_19016);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 11))
{var inst_19011 = (state_19047[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19047,10,Object,null,9);var inst_19020 = chs__$1.call(null,inst_19011);var inst_19021 = done.call(null,inst_19011);var inst_19022 = cljs.core.async.take_BANG_.call(null,inst_19020,inst_19021);var state_19047__$1 = state_19047;var statearr_19062_19087 = state_19047__$1;(statearr_19062_19087[2] = inst_19022);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 12))
{var inst_19033 = (state_19047[12]);var inst_19033__$1 = (state_19047[2]);var inst_19034 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19033__$1);var state_19047__$1 = (function (){var statearr_19063 = state_19047;(statearr_19063[12] = inst_19033__$1);
return statearr_19063;
})();if(cljs.core.truth_(inst_19034))
{var statearr_19064_19088 = state_19047__$1;(statearr_19064_19088[1] = 13);
} else
{var statearr_19065_19089 = state_19047__$1;(statearr_19065_19089[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 13))
{var inst_19036 = cljs.core.async.close_BANG_.call(null,out);var state_19047__$1 = state_19047;var statearr_19066_19090 = state_19047__$1;(statearr_19066_19090[2] = inst_19036);
(statearr_19066_19090[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 14))
{var inst_19033 = (state_19047[12]);var inst_19038 = cljs.core.apply.call(null,f,inst_19033);var state_19047__$1 = state_19047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19047__$1,16,out,inst_19038);
} else
{if((state_val_19048 === 15))
{var inst_19043 = (state_19047[2]);var state_19047__$1 = state_19047;var statearr_19067_19091 = state_19047__$1;(statearr_19067_19091[2] = inst_19043);
(statearr_19067_19091[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19048 === 16))
{var inst_19040 = (state_19047[2]);var state_19047__$1 = (function (){var statearr_19068 = state_19047;(statearr_19068[13] = inst_19040);
return statearr_19068;
})();var statearr_19069_19092 = state_19047__$1;(statearr_19069_19092[2] = null);
(statearr_19069_19092[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_19073 = (new Array(14));(statearr_19073[0] = state_machine__11439__auto__);
(statearr_19073[1] = 1);
return statearr_19073;
});
var state_machine__11439__auto____1 = (function (state_19047){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_19047);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e19074){if((e19074 instanceof Object))
{var ex__11442__auto__ = e19074;var statearr_19075_19093 = state_19047;(statearr_19075_19093[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19094 = state_19047;
state_19047 = G__19094;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_19047){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_19047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_19076 = f__11509__auto__.call(null);(statearr_19076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___19077);
return statearr_19076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___19202 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_19178){var state_val_19179 = (state_19178[1]);if((state_val_19179 === 1))
{var inst_19149 = cljs.core.vec.call(null,chs);var inst_19150 = inst_19149;var state_19178__$1 = (function (){var statearr_19180 = state_19178;(statearr_19180[7] = inst_19150);
return statearr_19180;
})();var statearr_19181_19203 = state_19178__$1;(statearr_19181_19203[2] = null);
(statearr_19181_19203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 2))
{var inst_19150 = (state_19178[7]);var inst_19152 = cljs.core.count.call(null,inst_19150);var inst_19153 = (inst_19152 > 0);var state_19178__$1 = state_19178;if(cljs.core.truth_(inst_19153))
{var statearr_19182_19204 = state_19178__$1;(statearr_19182_19204[1] = 4);
} else
{var statearr_19183_19205 = state_19178__$1;(statearr_19183_19205[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 3))
{var inst_19176 = (state_19178[2]);var state_19178__$1 = state_19178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19178__$1,inst_19176);
} else
{if((state_val_19179 === 4))
{var inst_19150 = (state_19178[7]);var state_19178__$1 = state_19178;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19178__$1,7,inst_19150);
} else
{if((state_val_19179 === 5))
{var inst_19172 = cljs.core.async.close_BANG_.call(null,out);var state_19178__$1 = state_19178;var statearr_19184_19206 = state_19178__$1;(statearr_19184_19206[2] = inst_19172);
(statearr_19184_19206[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 6))
{var inst_19174 = (state_19178[2]);var state_19178__$1 = state_19178;var statearr_19185_19207 = state_19178__$1;(statearr_19185_19207[2] = inst_19174);
(statearr_19185_19207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 7))
{var inst_19158 = (state_19178[8]);var inst_19157 = (state_19178[9]);var inst_19157__$1 = (state_19178[2]);var inst_19158__$1 = cljs.core.nth.call(null,inst_19157__$1,0,null);var inst_19159 = cljs.core.nth.call(null,inst_19157__$1,1,null);var inst_19160 = (inst_19158__$1 == null);var state_19178__$1 = (function (){var statearr_19186 = state_19178;(statearr_19186[10] = inst_19159);
(statearr_19186[8] = inst_19158__$1);
(statearr_19186[9] = inst_19157__$1);
return statearr_19186;
})();if(cljs.core.truth_(inst_19160))
{var statearr_19187_19208 = state_19178__$1;(statearr_19187_19208[1] = 8);
} else
{var statearr_19188_19209 = state_19178__$1;(statearr_19188_19209[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 8))
{var inst_19150 = (state_19178[7]);var inst_19159 = (state_19178[10]);var inst_19158 = (state_19178[8]);var inst_19157 = (state_19178[9]);var inst_19162 = (function (){var c = inst_19159;var v = inst_19158;var vec__19155 = inst_19157;var cs = inst_19150;return ((function (c,v,vec__19155,cs,inst_19150,inst_19159,inst_19158,inst_19157,state_val_19179){
return (function (p1__19095_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19095_SHARP_);
});
;})(c,v,vec__19155,cs,inst_19150,inst_19159,inst_19158,inst_19157,state_val_19179))
})();var inst_19163 = cljs.core.filterv.call(null,inst_19162,inst_19150);var inst_19150__$1 = inst_19163;var state_19178__$1 = (function (){var statearr_19189 = state_19178;(statearr_19189[7] = inst_19150__$1);
return statearr_19189;
})();var statearr_19190_19210 = state_19178__$1;(statearr_19190_19210[2] = null);
(statearr_19190_19210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 9))
{var inst_19158 = (state_19178[8]);var state_19178__$1 = state_19178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19178__$1,11,out,inst_19158);
} else
{if((state_val_19179 === 10))
{var inst_19170 = (state_19178[2]);var state_19178__$1 = state_19178;var statearr_19192_19211 = state_19178__$1;(statearr_19192_19211[2] = inst_19170);
(statearr_19192_19211[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19179 === 11))
{var inst_19150 = (state_19178[7]);var inst_19167 = (state_19178[2]);var tmp19191 = inst_19150;var inst_19150__$1 = tmp19191;var state_19178__$1 = (function (){var statearr_19193 = state_19178;(statearr_19193[7] = inst_19150__$1);
(statearr_19193[11] = inst_19167);
return statearr_19193;
})();var statearr_19194_19212 = state_19178__$1;(statearr_19194_19212[2] = null);
(statearr_19194_19212[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_19198 = (new Array(12));(statearr_19198[0] = state_machine__11439__auto__);
(statearr_19198[1] = 1);
return statearr_19198;
});
var state_machine__11439__auto____1 = (function (state_19178){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_19178);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e19199){if((e19199 instanceof Object))
{var ex__11442__auto__ = e19199;var statearr_19200_19213 = state_19178;(statearr_19200_19213[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19214 = state_19178;
state_19178 = G__19214;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_19178){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_19178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_19201 = f__11509__auto__.call(null);(statearr_19201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___19202);
return statearr_19201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___19307 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_19284){var state_val_19285 = (state_19284[1]);if((state_val_19285 === 1))
{var inst_19261 = 0;var state_19284__$1 = (function (){var statearr_19286 = state_19284;(statearr_19286[7] = inst_19261);
return statearr_19286;
})();var statearr_19287_19308 = state_19284__$1;(statearr_19287_19308[2] = null);
(statearr_19287_19308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 2))
{var inst_19261 = (state_19284[7]);var inst_19263 = (inst_19261 < n);var state_19284__$1 = state_19284;if(cljs.core.truth_(inst_19263))
{var statearr_19288_19309 = state_19284__$1;(statearr_19288_19309[1] = 4);
} else
{var statearr_19289_19310 = state_19284__$1;(statearr_19289_19310[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 3))
{var inst_19281 = (state_19284[2]);var inst_19282 = cljs.core.async.close_BANG_.call(null,out);var state_19284__$1 = (function (){var statearr_19290 = state_19284;(statearr_19290[8] = inst_19281);
return statearr_19290;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19284__$1,inst_19282);
} else
{if((state_val_19285 === 4))
{var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19284__$1,7,ch);
} else
{if((state_val_19285 === 5))
{var state_19284__$1 = state_19284;var statearr_19291_19311 = state_19284__$1;(statearr_19291_19311[2] = null);
(statearr_19291_19311[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 6))
{var inst_19279 = (state_19284[2]);var state_19284__$1 = state_19284;var statearr_19292_19312 = state_19284__$1;(statearr_19292_19312[2] = inst_19279);
(statearr_19292_19312[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 7))
{var inst_19266 = (state_19284[9]);var inst_19266__$1 = (state_19284[2]);var inst_19267 = (inst_19266__$1 == null);var inst_19268 = cljs.core.not.call(null,inst_19267);var state_19284__$1 = (function (){var statearr_19293 = state_19284;(statearr_19293[9] = inst_19266__$1);
return statearr_19293;
})();if(inst_19268)
{var statearr_19294_19313 = state_19284__$1;(statearr_19294_19313[1] = 8);
} else
{var statearr_19295_19314 = state_19284__$1;(statearr_19295_19314[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 8))
{var inst_19266 = (state_19284[9]);var state_19284__$1 = state_19284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19284__$1,11,out,inst_19266);
} else
{if((state_val_19285 === 9))
{var state_19284__$1 = state_19284;var statearr_19296_19315 = state_19284__$1;(statearr_19296_19315[2] = null);
(statearr_19296_19315[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 10))
{var inst_19276 = (state_19284[2]);var state_19284__$1 = state_19284;var statearr_19297_19316 = state_19284__$1;(statearr_19297_19316[2] = inst_19276);
(statearr_19297_19316[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19285 === 11))
{var inst_19261 = (state_19284[7]);var inst_19271 = (state_19284[2]);var inst_19272 = (inst_19261 + 1);var inst_19261__$1 = inst_19272;var state_19284__$1 = (function (){var statearr_19298 = state_19284;(statearr_19298[10] = inst_19271);
(statearr_19298[7] = inst_19261__$1);
return statearr_19298;
})();var statearr_19299_19317 = state_19284__$1;(statearr_19299_19317[2] = null);
(statearr_19299_19317[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_19303 = (new Array(11));(statearr_19303[0] = state_machine__11439__auto__);
(statearr_19303[1] = 1);
return statearr_19303;
});
var state_machine__11439__auto____1 = (function (state_19284){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_19284);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e19304){if((e19304 instanceof Object))
{var ex__11442__auto__ = e19304;var statearr_19305_19318 = state_19284;(statearr_19305_19318[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19319 = state_19284;
state_19284 = G__19319;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_19284){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_19284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_19306 = f__11509__auto__.call(null);(statearr_19306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___19307);
return statearr_19306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___19416 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_19391){var state_val_19392 = (state_19391[1]);if((state_val_19392 === 1))
{var inst_19368 = null;var state_19391__$1 = (function (){var statearr_19393 = state_19391;(statearr_19393[7] = inst_19368);
return statearr_19393;
})();var statearr_19394_19417 = state_19391__$1;(statearr_19394_19417[2] = null);
(statearr_19394_19417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 2))
{var state_19391__$1 = state_19391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19391__$1,4,ch);
} else
{if((state_val_19392 === 3))
{var inst_19388 = (state_19391[2]);var inst_19389 = cljs.core.async.close_BANG_.call(null,out);var state_19391__$1 = (function (){var statearr_19395 = state_19391;(statearr_19395[8] = inst_19388);
return statearr_19395;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19391__$1,inst_19389);
} else
{if((state_val_19392 === 4))
{var inst_19371 = (state_19391[9]);var inst_19371__$1 = (state_19391[2]);var inst_19372 = (inst_19371__$1 == null);var inst_19373 = cljs.core.not.call(null,inst_19372);var state_19391__$1 = (function (){var statearr_19396 = state_19391;(statearr_19396[9] = inst_19371__$1);
return statearr_19396;
})();if(inst_19373)
{var statearr_19397_19418 = state_19391__$1;(statearr_19397_19418[1] = 5);
} else
{var statearr_19398_19419 = state_19391__$1;(statearr_19398_19419[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 5))
{var inst_19371 = (state_19391[9]);var inst_19368 = (state_19391[7]);var inst_19375 = cljs.core._EQ_.call(null,inst_19371,inst_19368);var state_19391__$1 = state_19391;if(inst_19375)
{var statearr_19399_19420 = state_19391__$1;(statearr_19399_19420[1] = 8);
} else
{var statearr_19400_19421 = state_19391__$1;(statearr_19400_19421[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 6))
{var state_19391__$1 = state_19391;var statearr_19402_19422 = state_19391__$1;(statearr_19402_19422[2] = null);
(statearr_19402_19422[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 7))
{var inst_19386 = (state_19391[2]);var state_19391__$1 = state_19391;var statearr_19403_19423 = state_19391__$1;(statearr_19403_19423[2] = inst_19386);
(statearr_19403_19423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 8))
{var inst_19368 = (state_19391[7]);var tmp19401 = inst_19368;var inst_19368__$1 = tmp19401;var state_19391__$1 = (function (){var statearr_19404 = state_19391;(statearr_19404[7] = inst_19368__$1);
return statearr_19404;
})();var statearr_19405_19424 = state_19391__$1;(statearr_19405_19424[2] = null);
(statearr_19405_19424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 9))
{var inst_19371 = (state_19391[9]);var state_19391__$1 = state_19391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19391__$1,11,out,inst_19371);
} else
{if((state_val_19392 === 10))
{var inst_19383 = (state_19391[2]);var state_19391__$1 = state_19391;var statearr_19406_19425 = state_19391__$1;(statearr_19406_19425[2] = inst_19383);
(statearr_19406_19425[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19392 === 11))
{var inst_19371 = (state_19391[9]);var inst_19380 = (state_19391[2]);var inst_19368 = inst_19371;var state_19391__$1 = (function (){var statearr_19407 = state_19391;(statearr_19407[10] = inst_19380);
(statearr_19407[7] = inst_19368);
return statearr_19407;
})();var statearr_19408_19426 = state_19391__$1;(statearr_19408_19426[2] = null);
(statearr_19408_19426[1] = 2);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_19412 = (new Array(11));(statearr_19412[0] = state_machine__11439__auto__);
(statearr_19412[1] = 1);
return statearr_19412;
});
var state_machine__11439__auto____1 = (function (state_19391){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_19391);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e19413){if((e19413 instanceof Object))
{var ex__11442__auto__ = e19413;var statearr_19414_19427 = state_19391;(statearr_19414_19427[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19428 = state_19391;
state_19391 = G__19428;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_19391){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_19391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_19415 = f__11509__auto__.call(null);(statearr_19415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___19416);
return statearr_19415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___19563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_19533){var state_val_19534 = (state_19533[1]);if((state_val_19534 === 1))
{var inst_19496 = (new Array(n));var inst_19497 = inst_19496;var inst_19498 = 0;var state_19533__$1 = (function (){var statearr_19535 = state_19533;(statearr_19535[7] = inst_19497);
(statearr_19535[8] = inst_19498);
return statearr_19535;
})();var statearr_19536_19564 = state_19533__$1;(statearr_19536_19564[2] = null);
(statearr_19536_19564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 2))
{var state_19533__$1 = state_19533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19533__$1,4,ch);
} else
{if((state_val_19534 === 3))
{var inst_19531 = (state_19533[2]);var state_19533__$1 = state_19533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19533__$1,inst_19531);
} else
{if((state_val_19534 === 4))
{var inst_19501 = (state_19533[9]);var inst_19501__$1 = (state_19533[2]);var inst_19502 = (inst_19501__$1 == null);var inst_19503 = cljs.core.not.call(null,inst_19502);var state_19533__$1 = (function (){var statearr_19537 = state_19533;(statearr_19537[9] = inst_19501__$1);
return statearr_19537;
})();if(inst_19503)
{var statearr_19538_19565 = state_19533__$1;(statearr_19538_19565[1] = 5);
} else
{var statearr_19539_19566 = state_19533__$1;(statearr_19539_19566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 5))
{var inst_19497 = (state_19533[7]);var inst_19506 = (state_19533[10]);var inst_19498 = (state_19533[8]);var inst_19501 = (state_19533[9]);var inst_19505 = (inst_19497[inst_19498] = inst_19501);var inst_19506__$1 = (inst_19498 + 1);var inst_19507 = (inst_19506__$1 < n);var state_19533__$1 = (function (){var statearr_19540 = state_19533;(statearr_19540[10] = inst_19506__$1);
(statearr_19540[11] = inst_19505);
return statearr_19540;
})();if(cljs.core.truth_(inst_19507))
{var statearr_19541_19567 = state_19533__$1;(statearr_19541_19567[1] = 8);
} else
{var statearr_19542_19568 = state_19533__$1;(statearr_19542_19568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 6))
{var inst_19498 = (state_19533[8]);var inst_19519 = (inst_19498 > 0);var state_19533__$1 = state_19533;if(cljs.core.truth_(inst_19519))
{var statearr_19544_19569 = state_19533__$1;(statearr_19544_19569[1] = 12);
} else
{var statearr_19545_19570 = state_19533__$1;(statearr_19545_19570[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 7))
{var inst_19529 = (state_19533[2]);var state_19533__$1 = state_19533;var statearr_19546_19571 = state_19533__$1;(statearr_19546_19571[2] = inst_19529);
(statearr_19546_19571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 8))
{var inst_19497 = (state_19533[7]);var inst_19506 = (state_19533[10]);var tmp19543 = inst_19497;var inst_19497__$1 = tmp19543;var inst_19498 = inst_19506;var state_19533__$1 = (function (){var statearr_19547 = state_19533;(statearr_19547[7] = inst_19497__$1);
(statearr_19547[8] = inst_19498);
return statearr_19547;
})();var statearr_19548_19572 = state_19533__$1;(statearr_19548_19572[2] = null);
(statearr_19548_19572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 9))
{var inst_19497 = (state_19533[7]);var inst_19511 = cljs.core.vec.call(null,inst_19497);var state_19533__$1 = state_19533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19533__$1,11,out,inst_19511);
} else
{if((state_val_19534 === 10))
{var inst_19517 = (state_19533[2]);var state_19533__$1 = state_19533;var statearr_19549_19573 = state_19533__$1;(statearr_19549_19573[2] = inst_19517);
(statearr_19549_19573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 11))
{var inst_19513 = (state_19533[2]);var inst_19514 = (new Array(n));var inst_19497 = inst_19514;var inst_19498 = 0;var state_19533__$1 = (function (){var statearr_19550 = state_19533;(statearr_19550[7] = inst_19497);
(statearr_19550[8] = inst_19498);
(statearr_19550[12] = inst_19513);
return statearr_19550;
})();var statearr_19551_19574 = state_19533__$1;(statearr_19551_19574[2] = null);
(statearr_19551_19574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 12))
{var inst_19497 = (state_19533[7]);var inst_19521 = cljs.core.vec.call(null,inst_19497);var state_19533__$1 = state_19533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19533__$1,15,out,inst_19521);
} else
{if((state_val_19534 === 13))
{var state_19533__$1 = state_19533;var statearr_19552_19575 = state_19533__$1;(statearr_19552_19575[2] = null);
(statearr_19552_19575[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 14))
{var inst_19526 = (state_19533[2]);var inst_19527 = cljs.core.async.close_BANG_.call(null,out);var state_19533__$1 = (function (){var statearr_19553 = state_19533;(statearr_19553[13] = inst_19526);
return statearr_19553;
})();var statearr_19554_19576 = state_19533__$1;(statearr_19554_19576[2] = inst_19527);
(statearr_19554_19576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19534 === 15))
{var inst_19523 = (state_19533[2]);var state_19533__$1 = state_19533;var statearr_19555_19577 = state_19533__$1;(statearr_19555_19577[2] = inst_19523);
(statearr_19555_19577[1] = 14);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_19559 = (new Array(14));(statearr_19559[0] = state_machine__11439__auto__);
(statearr_19559[1] = 1);
return statearr_19559;
});
var state_machine__11439__auto____1 = (function (state_19533){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_19533);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e19560){if((e19560 instanceof Object))
{var ex__11442__auto__ = e19560;var statearr_19561_19578 = state_19533;(statearr_19561_19578[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19579 = state_19533;
state_19533 = G__19579;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_19533){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_19533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_19562 = f__11509__auto__.call(null);(statearr_19562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___19563);
return statearr_19562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11508__auto___19722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_19692){var state_val_19693 = (state_19692[1]);if((state_val_19693 === 1))
{var inst_19651 = (new Array(0));var inst_19652 = inst_19651;var inst_19653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_19692__$1 = (function (){var statearr_19694 = state_19692;(statearr_19694[7] = inst_19653);
(statearr_19694[8] = inst_19652);
return statearr_19694;
})();var statearr_19695_19723 = state_19692__$1;(statearr_19695_19723[2] = null);
(statearr_19695_19723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 2))
{var state_19692__$1 = state_19692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19692__$1,4,ch);
} else
{if((state_val_19693 === 3))
{var inst_19690 = (state_19692[2]);var state_19692__$1 = state_19692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19692__$1,inst_19690);
} else
{if((state_val_19693 === 4))
{var inst_19656 = (state_19692[9]);var inst_19656__$1 = (state_19692[2]);var inst_19657 = (inst_19656__$1 == null);var inst_19658 = cljs.core.not.call(null,inst_19657);var state_19692__$1 = (function (){var statearr_19696 = state_19692;(statearr_19696[9] = inst_19656__$1);
return statearr_19696;
})();if(inst_19658)
{var statearr_19697_19724 = state_19692__$1;(statearr_19697_19724[1] = 5);
} else
{var statearr_19698_19725 = state_19692__$1;(statearr_19698_19725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 5))
{var inst_19656 = (state_19692[9]);var inst_19653 = (state_19692[7]);var inst_19660 = (state_19692[10]);var inst_19660__$1 = f.call(null,inst_19656);var inst_19661 = cljs.core._EQ_.call(null,inst_19660__$1,inst_19653);var inst_19662 = cljs.core.keyword_identical_QMARK_.call(null,inst_19653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_19663 = (inst_19661) || (inst_19662);var state_19692__$1 = (function (){var statearr_19699 = state_19692;(statearr_19699[10] = inst_19660__$1);
return statearr_19699;
})();if(cljs.core.truth_(inst_19663))
{var statearr_19700_19726 = state_19692__$1;(statearr_19700_19726[1] = 8);
} else
{var statearr_19701_19727 = state_19692__$1;(statearr_19701_19727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 6))
{var inst_19652 = (state_19692[8]);var inst_19677 = inst_19652.length;var inst_19678 = (inst_19677 > 0);var state_19692__$1 = state_19692;if(cljs.core.truth_(inst_19678))
{var statearr_19703_19728 = state_19692__$1;(statearr_19703_19728[1] = 12);
} else
{var statearr_19704_19729 = state_19692__$1;(statearr_19704_19729[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 7))
{var inst_19688 = (state_19692[2]);var state_19692__$1 = state_19692;var statearr_19705_19730 = state_19692__$1;(statearr_19705_19730[2] = inst_19688);
(statearr_19705_19730[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 8))
{var inst_19656 = (state_19692[9]);var inst_19652 = (state_19692[8]);var inst_19660 = (state_19692[10]);var inst_19665 = inst_19652.push(inst_19656);var tmp19702 = inst_19652;var inst_19652__$1 = tmp19702;var inst_19653 = inst_19660;var state_19692__$1 = (function (){var statearr_19706 = state_19692;(statearr_19706[7] = inst_19653);
(statearr_19706[8] = inst_19652__$1);
(statearr_19706[11] = inst_19665);
return statearr_19706;
})();var statearr_19707_19731 = state_19692__$1;(statearr_19707_19731[2] = null);
(statearr_19707_19731[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 9))
{var inst_19652 = (state_19692[8]);var inst_19668 = cljs.core.vec.call(null,inst_19652);var state_19692__$1 = state_19692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19692__$1,11,out,inst_19668);
} else
{if((state_val_19693 === 10))
{var inst_19675 = (state_19692[2]);var state_19692__$1 = state_19692;var statearr_19708_19732 = state_19692__$1;(statearr_19708_19732[2] = inst_19675);
(statearr_19708_19732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 11))
{var inst_19656 = (state_19692[9]);var inst_19660 = (state_19692[10]);var inst_19670 = (state_19692[2]);var inst_19671 = (new Array(0));var inst_19672 = inst_19671.push(inst_19656);var inst_19652 = inst_19671;var inst_19653 = inst_19660;var state_19692__$1 = (function (){var statearr_19709 = state_19692;(statearr_19709[7] = inst_19653);
(statearr_19709[8] = inst_19652);
(statearr_19709[12] = inst_19670);
(statearr_19709[13] = inst_19672);
return statearr_19709;
})();var statearr_19710_19733 = state_19692__$1;(statearr_19710_19733[2] = null);
(statearr_19710_19733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 12))
{var inst_19652 = (state_19692[8]);var inst_19680 = cljs.core.vec.call(null,inst_19652);var state_19692__$1 = state_19692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19692__$1,15,out,inst_19680);
} else
{if((state_val_19693 === 13))
{var state_19692__$1 = state_19692;var statearr_19711_19734 = state_19692__$1;(statearr_19711_19734[2] = null);
(statearr_19711_19734[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 14))
{var inst_19685 = (state_19692[2]);var inst_19686 = cljs.core.async.close_BANG_.call(null,out);var state_19692__$1 = (function (){var statearr_19712 = state_19692;(statearr_19712[14] = inst_19685);
return statearr_19712;
})();var statearr_19713_19735 = state_19692__$1;(statearr_19713_19735[2] = inst_19686);
(statearr_19713_19735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19693 === 15))
{var inst_19682 = (state_19692[2]);var state_19692__$1 = state_19692;var statearr_19714_19736 = state_19692__$1;(statearr_19714_19736[2] = inst_19682);
(statearr_19714_19736[1] = 14);
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
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_19718 = (new Array(15));(statearr_19718[0] = state_machine__11439__auto__);
(statearr_19718[1] = 1);
return statearr_19718;
});
var state_machine__11439__auto____1 = (function (state_19692){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_19692);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e19719){if((e19719 instanceof Object))
{var ex__11442__auto__ = e19719;var statearr_19720_19737 = state_19692;(statearr_19720_19737[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19738 = state_19692;
state_19692 = G__19738;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_19692){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_19692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_19721 = f__11509__auto__.call(null);(statearr_19721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto___19722);
return statearr_19721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
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
