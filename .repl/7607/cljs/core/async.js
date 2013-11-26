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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18225 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18225 = (function (f,fn_handler,meta18226){
this.f = f;
this.fn_handler = fn_handler;
this.meta18226 = meta18226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18225.cljs$lang$type = true;
cljs.core.async.t18225.cljs$lang$ctorStr = "cljs.core.async/t18225";
cljs.core.async.t18225.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18225");
});
cljs.core.async.t18225.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18227){var self__ = this;
var _18227__$1 = this;return self__.meta18226;
});
cljs.core.async.t18225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18227,meta18226__$1){var self__ = this;
var _18227__$1 = this;return (new cljs.core.async.t18225(self__.f,self__.fn_handler,meta18226__$1));
});
cljs.core.async.__GT_t18225 = (function __GT_t18225(f__$1,fn_handler__$1,meta18226){return (new cljs.core.async.t18225(f__$1,fn_handler__$1,meta18226));
});
}
return (new cljs.core.async.t18225(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18229 = buff;if(G__18229)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__18229.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18229.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18229);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18229);
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
{var val_18230 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18230);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_18230);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__5145__auto__ = ret;if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__5145__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5980__auto___18231 = n;var x_18232 = 0;while(true){
if((x_18232 < n__5980__auto___18231))
{(a[x_18232] = 0);
{
var G__18233 = (x_18232 + 1);
x_18232 = G__18233;
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
var G__18234 = (i + 1);
i = G__18234;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18238 = (function (flag,alt_flag,meta18239){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18239 = meta18239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18238.cljs$lang$type = true;
cljs.core.async.t18238.cljs$lang$ctorStr = "cljs.core.async/t18238";
cljs.core.async.t18238.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18238");
});
cljs.core.async.t18238.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t18238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t18238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18240){var self__ = this;
var _18240__$1 = this;return self__.meta18239;
});
cljs.core.async.t18238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18240,meta18239__$1){var self__ = this;
var _18240__$1 = this;return (new cljs.core.async.t18238(self__.flag,self__.alt_flag,meta18239__$1));
});
cljs.core.async.__GT_t18238 = (function __GT_t18238(flag__$1,alt_flag__$1,meta18239){return (new cljs.core.async.t18238(flag__$1,alt_flag__$1,meta18239));
});
}
return (new cljs.core.async.t18238(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18244 = (function (cb,flag,alt_handler,meta18245){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18245 = meta18245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18244.cljs$lang$type = true;
cljs.core.async.t18244.cljs$lang$ctorStr = "cljs.core.async/t18244";
cljs.core.async.t18244.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18244");
});
cljs.core.async.t18244.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18246){var self__ = this;
var _18246__$1 = this;return self__.meta18245;
});
cljs.core.async.t18244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18246,meta18245__$1){var self__ = this;
var _18246__$1 = this;return (new cljs.core.async.t18244(self__.cb,self__.flag,self__.alt_handler,meta18245__$1));
});
cljs.core.async.__GT_t18244 = (function __GT_t18244(cb__$1,flag__$1,alt_handler__$1,meta18245){return (new cljs.core.async.t18244(cb__$1,flag__$1,alt_handler__$1,meta18245));
});
}
return (new cljs.core.async.t18244(cb,flag,alt_handler,null));
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
return (function (p1__18247_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18247_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5157__auto__ = wport;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18248 = (i + 1);
i = G__18248;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5157__auto__ = ret;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__5145__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__5145__auto__;
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
var alts_BANG___delegate = function (ports,p__18249){var map__18251 = p__18249;var map__18251__$1 = ((cljs.core.seq_QMARK_.call(null,map__18251))?cljs.core.apply.call(null,cljs.core.hash_map,map__18251):map__18251);var opts = map__18251__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18249 = null;if (arguments.length > 1) {
  p__18249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18249);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18252){
var ports = cljs.core.first(arglist__18252);
var p__18249 = cljs.core.rest(arglist__18252);
return alts_BANG___delegate(ports,p__18249);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18260 = (function (ch,f,map_LT_,meta18261){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18261 = meta18261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18260.cljs$lang$type = true;
cljs.core.async.t18260.cljs$lang$ctorStr = "cljs.core.async/t18260";
cljs.core.async.t18260.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18260");
});
cljs.core.async.t18260.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t18260.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18263 = (function (fn1,_,meta18261,ch,f,map_LT_,meta18264){
this.fn1 = fn1;
this._ = _;
this.meta18261 = meta18261;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18264 = meta18264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18263.cljs$lang$type = true;
cljs.core.async.t18263.cljs$lang$ctorStr = "cljs.core.async/t18263";
cljs.core.async.t18263.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18263");
});
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t18263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__18253_SHARP_){return f1.call(null,(((p1__18253_SHARP_ == null))?null:self__.f.call(null,p1__18253_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t18263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18265){var self__ = this;
var _18265__$1 = this;return self__.meta18264;
});
cljs.core.async.t18263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18265,meta18264__$1){var self__ = this;
var _18265__$1 = this;return (new cljs.core.async.t18263(self__.fn1,self__._,self__.meta18261,self__.ch,self__.f,self__.map_LT_,meta18264__$1));
});
cljs.core.async.__GT_t18263 = (function __GT_t18263(fn1__$1,___$2,meta18261__$1,ch__$2,f__$2,map_LT___$2,meta18264){return (new cljs.core.async.t18263(fn1__$1,___$2,meta18261__$1,ch__$2,f__$2,map_LT___$2,meta18264));
});
}
return (new cljs.core.async.t18263(fn1,___$1,self__.meta18261,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__5145__auto__ = ret;if(cljs.core.truth_(and__5145__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__5145__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18260.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18262){var self__ = this;
var _18262__$1 = this;return self__.meta18261;
});
cljs.core.async.t18260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18262,meta18261__$1){var self__ = this;
var _18262__$1 = this;return (new cljs.core.async.t18260(self__.ch,self__.f,self__.map_LT_,meta18261__$1));
});
cljs.core.async.__GT_t18260 = (function __GT_t18260(ch__$1,f__$1,map_LT___$1,meta18261){return (new cljs.core.async.t18260(ch__$1,f__$1,map_LT___$1,meta18261));
});
}
return (new cljs.core.async.t18260(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18269 = (function (ch,f,map_GT_,meta18270){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18270 = meta18270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18269.cljs$lang$type = true;
cljs.core.async.t18269.cljs$lang$ctorStr = "cljs.core.async/t18269";
cljs.core.async.t18269.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18269");
});
cljs.core.async.t18269.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t18269.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18269.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18271){var self__ = this;
var _18271__$1 = this;return self__.meta18270;
});
cljs.core.async.t18269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18271,meta18270__$1){var self__ = this;
var _18271__$1 = this;return (new cljs.core.async.t18269(self__.ch,self__.f,self__.map_GT_,meta18270__$1));
});
cljs.core.async.__GT_t18269 = (function __GT_t18269(ch__$1,f__$1,map_GT___$1,meta18270){return (new cljs.core.async.t18269(ch__$1,f__$1,map_GT___$1,meta18270));
});
}
return (new cljs.core.async.t18269(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18275 = (function (ch,p,filter_GT_,meta18276){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18276 = meta18276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18275.cljs$lang$type = true;
cljs.core.async.t18275.cljs$lang$ctorStr = "cljs.core.async/t18275";
cljs.core.async.t18275.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t18275");
});
cljs.core.async.t18275.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t18275.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18275.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18277){var self__ = this;
var _18277__$1 = this;return self__.meta18276;
});
cljs.core.async.t18275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18277,meta18276__$1){var self__ = this;
var _18277__$1 = this;return (new cljs.core.async.t18275(self__.ch,self__.p,self__.filter_GT_,meta18276__$1));
});
cljs.core.async.__GT_t18275 = (function __GT_t18275(ch__$1,p__$1,filter_GT___$1,meta18276){return (new cljs.core.async.t18275(ch__$1,p__$1,filter_GT___$1,meta18276));
});
}
return (new cljs.core.async.t18275(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___18360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_18339){var state_val_18340 = (state_18339[1]);if((state_val_18340 === 1))
{var state_18339__$1 = state_18339;var statearr_18341_18361 = state_18339__$1;(statearr_18341_18361[2] = null);
(statearr_18341_18361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 2))
{var state_18339__$1 = state_18339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18339__$1,4,ch);
} else
{if((state_val_18340 === 3))
{var inst_18337 = (state_18339[2]);var state_18339__$1 = state_18339;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18339__$1,inst_18337);
} else
{if((state_val_18340 === 4))
{var inst_18321 = (state_18339[7]);var inst_18321__$1 = (state_18339[2]);var inst_18322 = (inst_18321__$1 == null);var state_18339__$1 = (function (){var statearr_18342 = state_18339;(statearr_18342[7] = inst_18321__$1);
return statearr_18342;
})();if(cljs.core.truth_(inst_18322))
{var statearr_18343_18362 = state_18339__$1;(statearr_18343_18362[1] = 5);
} else
{var statearr_18344_18363 = state_18339__$1;(statearr_18344_18363[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 5))
{var inst_18324 = cljs.core.async.close_BANG_.call(null,out);var state_18339__$1 = state_18339;var statearr_18345_18364 = state_18339__$1;(statearr_18345_18364[2] = inst_18324);
(statearr_18345_18364[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 6))
{var inst_18321 = (state_18339[7]);var inst_18326 = p.call(null,inst_18321);var state_18339__$1 = state_18339;if(cljs.core.truth_(inst_18326))
{var statearr_18346_18365 = state_18339__$1;(statearr_18346_18365[1] = 8);
} else
{var statearr_18347_18366 = state_18339__$1;(statearr_18347_18366[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 7))
{var inst_18335 = (state_18339[2]);var state_18339__$1 = state_18339;var statearr_18348_18367 = state_18339__$1;(statearr_18348_18367[2] = inst_18335);
(statearr_18348_18367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 8))
{var inst_18321 = (state_18339[7]);var state_18339__$1 = state_18339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18339__$1,11,out,inst_18321);
} else
{if((state_val_18340 === 9))
{var state_18339__$1 = state_18339;var statearr_18349_18368 = state_18339__$1;(statearr_18349_18368[2] = null);
(statearr_18349_18368[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 10))
{var inst_18332 = (state_18339[2]);var state_18339__$1 = (function (){var statearr_18350 = state_18339;(statearr_18350[8] = inst_18332);
return statearr_18350;
})();var statearr_18351_18369 = state_18339__$1;(statearr_18351_18369[2] = null);
(statearr_18351_18369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18340 === 11))
{var inst_18329 = (state_18339[2]);var state_18339__$1 = state_18339;var statearr_18352_18370 = state_18339__$1;(statearr_18352_18370[2] = inst_18329);
(statearr_18352_18370[1] = 10);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_18356 = (new Array(9));(statearr_18356[0] = state_machine__12457__auto__);
(statearr_18356[1] = 1);
return statearr_18356;
});
var state_machine__12457__auto____1 = (function (state_18339){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_18339);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e18357){if((e18357 instanceof Object))
{var ex__12460__auto__ = e18357;var statearr_18358_18371 = state_18339;(statearr_18358_18371[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18339);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18372 = state_18339;
state_18339 = G__18372;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_18339){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_18339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_18359 = f__12543__auto__.call(null);(statearr_18359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___18360);
return statearr_18359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12542__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_18524){var state_val_18525 = (state_18524[1]);if((state_val_18525 === 1))
{var state_18524__$1 = state_18524;var statearr_18526_18563 = state_18524__$1;(statearr_18526_18563[2] = null);
(statearr_18526_18563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 2))
{var state_18524__$1 = state_18524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18524__$1,4,in$);
} else
{if((state_val_18525 === 3))
{var inst_18522 = (state_18524[2]);var state_18524__$1 = state_18524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18524__$1,inst_18522);
} else
{if((state_val_18525 === 4))
{var inst_18470 = (state_18524[7]);var inst_18470__$1 = (state_18524[2]);var inst_18471 = (inst_18470__$1 == null);var state_18524__$1 = (function (){var statearr_18527 = state_18524;(statearr_18527[7] = inst_18470__$1);
return statearr_18527;
})();if(cljs.core.truth_(inst_18471))
{var statearr_18528_18564 = state_18524__$1;(statearr_18528_18564[1] = 5);
} else
{var statearr_18529_18565 = state_18524__$1;(statearr_18529_18565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 5))
{var inst_18473 = cljs.core.async.close_BANG_.call(null,out);var state_18524__$1 = state_18524;var statearr_18530_18566 = state_18524__$1;(statearr_18530_18566[2] = inst_18473);
(statearr_18530_18566[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 6))
{var inst_18470 = (state_18524[7]);var inst_18475 = f.call(null,inst_18470);var inst_18480 = cljs.core.seq.call(null,inst_18475);var inst_18481 = inst_18480;var inst_18482 = null;var inst_18483 = 0;var inst_18484 = 0;var state_18524__$1 = (function (){var statearr_18531 = state_18524;(statearr_18531[8] = inst_18484);
(statearr_18531[9] = inst_18481);
(statearr_18531[10] = inst_18482);
(statearr_18531[11] = inst_18483);
return statearr_18531;
})();var statearr_18532_18567 = state_18524__$1;(statearr_18532_18567[2] = null);
(statearr_18532_18567[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 7))
{var inst_18520 = (state_18524[2]);var state_18524__$1 = state_18524;var statearr_18533_18568 = state_18524__$1;(statearr_18533_18568[2] = inst_18520);
(statearr_18533_18568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 8))
{var inst_18484 = (state_18524[8]);var inst_18483 = (state_18524[11]);var inst_18486 = (inst_18484 < inst_18483);var inst_18487 = inst_18486;var state_18524__$1 = state_18524;if(cljs.core.truth_(inst_18487))
{var statearr_18534_18569 = state_18524__$1;(statearr_18534_18569[1] = 10);
} else
{var statearr_18535_18570 = state_18524__$1;(statearr_18535_18570[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 9))
{var inst_18517 = (state_18524[2]);var state_18524__$1 = (function (){var statearr_18536 = state_18524;(statearr_18536[12] = inst_18517);
return statearr_18536;
})();var statearr_18537_18571 = state_18524__$1;(statearr_18537_18571[2] = null);
(statearr_18537_18571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 10))
{var inst_18484 = (state_18524[8]);var inst_18482 = (state_18524[10]);var inst_18489 = cljs.core._nth.call(null,inst_18482,inst_18484);var state_18524__$1 = state_18524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18524__$1,13,out,inst_18489);
} else
{if((state_val_18525 === 11))
{var inst_18495 = (state_18524[13]);var inst_18481 = (state_18524[9]);var inst_18495__$1 = cljs.core.seq.call(null,inst_18481);var state_18524__$1 = (function (){var statearr_18541 = state_18524;(statearr_18541[13] = inst_18495__$1);
return statearr_18541;
})();if(inst_18495__$1)
{var statearr_18542_18572 = state_18524__$1;(statearr_18542_18572[1] = 14);
} else
{var statearr_18543_18573 = state_18524__$1;(statearr_18543_18573[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 12))
{var inst_18515 = (state_18524[2]);var state_18524__$1 = state_18524;var statearr_18544_18574 = state_18524__$1;(statearr_18544_18574[2] = inst_18515);
(statearr_18544_18574[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 13))
{var inst_18484 = (state_18524[8]);var inst_18481 = (state_18524[9]);var inst_18482 = (state_18524[10]);var inst_18483 = (state_18524[11]);var inst_18491 = (state_18524[2]);var inst_18492 = (inst_18484 + 1);var tmp18538 = inst_18481;var tmp18539 = inst_18482;var tmp18540 = inst_18483;var inst_18481__$1 = tmp18538;var inst_18482__$1 = tmp18539;var inst_18483__$1 = tmp18540;var inst_18484__$1 = inst_18492;var state_18524__$1 = (function (){var statearr_18545 = state_18524;(statearr_18545[8] = inst_18484__$1);
(statearr_18545[14] = inst_18491);
(statearr_18545[9] = inst_18481__$1);
(statearr_18545[10] = inst_18482__$1);
(statearr_18545[11] = inst_18483__$1);
return statearr_18545;
})();var statearr_18546_18575 = state_18524__$1;(statearr_18546_18575[2] = null);
(statearr_18546_18575[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 14))
{var inst_18495 = (state_18524[13]);var inst_18497 = cljs.core.chunked_seq_QMARK_.call(null,inst_18495);var state_18524__$1 = state_18524;if(inst_18497)
{var statearr_18547_18576 = state_18524__$1;(statearr_18547_18576[1] = 17);
} else
{var statearr_18548_18577 = state_18524__$1;(statearr_18548_18577[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 15))
{var state_18524__$1 = state_18524;var statearr_18549_18578 = state_18524__$1;(statearr_18549_18578[2] = null);
(statearr_18549_18578[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 16))
{var inst_18513 = (state_18524[2]);var state_18524__$1 = state_18524;var statearr_18550_18579 = state_18524__$1;(statearr_18550_18579[2] = inst_18513);
(statearr_18550_18579[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 17))
{var inst_18495 = (state_18524[13]);var inst_18499 = cljs.core.chunk_first.call(null,inst_18495);var inst_18500 = cljs.core.chunk_rest.call(null,inst_18495);var inst_18501 = cljs.core.count.call(null,inst_18499);var inst_18481 = inst_18500;var inst_18482 = inst_18499;var inst_18483 = inst_18501;var inst_18484 = 0;var state_18524__$1 = (function (){var statearr_18551 = state_18524;(statearr_18551[8] = inst_18484);
(statearr_18551[9] = inst_18481);
(statearr_18551[10] = inst_18482);
(statearr_18551[11] = inst_18483);
return statearr_18551;
})();var statearr_18552_18580 = state_18524__$1;(statearr_18552_18580[2] = null);
(statearr_18552_18580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 18))
{var inst_18495 = (state_18524[13]);var inst_18504 = cljs.core.first.call(null,inst_18495);var state_18524__$1 = state_18524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18524__$1,20,out,inst_18504);
} else
{if((state_val_18525 === 19))
{var inst_18510 = (state_18524[2]);var state_18524__$1 = state_18524;var statearr_18553_18581 = state_18524__$1;(statearr_18553_18581[2] = inst_18510);
(statearr_18553_18581[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18525 === 20))
{var inst_18495 = (state_18524[13]);var inst_18506 = (state_18524[2]);var inst_18507 = cljs.core.next.call(null,inst_18495);var inst_18481 = inst_18507;var inst_18482 = null;var inst_18483 = 0;var inst_18484 = 0;var state_18524__$1 = (function (){var statearr_18554 = state_18524;(statearr_18554[8] = inst_18484);
(statearr_18554[9] = inst_18481);
(statearr_18554[10] = inst_18482);
(statearr_18554[11] = inst_18483);
(statearr_18554[15] = inst_18506);
return statearr_18554;
})();var statearr_18555_18582 = state_18524__$1;(statearr_18555_18582[2] = null);
(statearr_18555_18582[1] = 8);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_18559 = (new Array(16));(statearr_18559[0] = state_machine__12457__auto__);
(statearr_18559[1] = 1);
return statearr_18559;
});
var state_machine__12457__auto____1 = (function (state_18524){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_18524);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e18560){if((e18560 instanceof Object))
{var ex__12460__auto__ = e18560;var statearr_18561_18583 = state_18524;(statearr_18561_18583[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18584 = state_18524;
state_18524 = G__18584;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_18524){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_18524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_18562 = f__12543__auto__.call(null);(statearr_18562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto__);
return statearr_18562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
}));
return c__12542__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12542__auto___18665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_18644){var state_val_18645 = (state_18644[1]);if((state_val_18645 === 1))
{var state_18644__$1 = state_18644;var statearr_18646_18666 = state_18644__$1;(statearr_18646_18666[2] = null);
(statearr_18646_18666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 2))
{var state_18644__$1 = state_18644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18644__$1,4,from);
} else
{if((state_val_18645 === 3))
{var inst_18642 = (state_18644[2]);var state_18644__$1 = state_18644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18644__$1,inst_18642);
} else
{if((state_val_18645 === 4))
{var inst_18627 = (state_18644[7]);var inst_18627__$1 = (state_18644[2]);var inst_18628 = (inst_18627__$1 == null);var state_18644__$1 = (function (){var statearr_18647 = state_18644;(statearr_18647[7] = inst_18627__$1);
return statearr_18647;
})();if(cljs.core.truth_(inst_18628))
{var statearr_18648_18667 = state_18644__$1;(statearr_18648_18667[1] = 5);
} else
{var statearr_18649_18668 = state_18644__$1;(statearr_18649_18668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 5))
{var state_18644__$1 = state_18644;if(cljs.core.truth_(close_QMARK_))
{var statearr_18650_18669 = state_18644__$1;(statearr_18650_18669[1] = 8);
} else
{var statearr_18651_18670 = state_18644__$1;(statearr_18651_18670[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 6))
{var inst_18627 = (state_18644[7]);var state_18644__$1 = state_18644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18644__$1,11,to,inst_18627);
} else
{if((state_val_18645 === 7))
{var inst_18640 = (state_18644[2]);var state_18644__$1 = state_18644;var statearr_18652_18671 = state_18644__$1;(statearr_18652_18671[2] = inst_18640);
(statearr_18652_18671[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 8))
{var inst_18631 = cljs.core.async.close_BANG_.call(null,to);var state_18644__$1 = state_18644;var statearr_18653_18672 = state_18644__$1;(statearr_18653_18672[2] = inst_18631);
(statearr_18653_18672[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 9))
{var state_18644__$1 = state_18644;var statearr_18654_18673 = state_18644__$1;(statearr_18654_18673[2] = null);
(statearr_18654_18673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 10))
{var inst_18634 = (state_18644[2]);var state_18644__$1 = state_18644;var statearr_18655_18674 = state_18644__$1;(statearr_18655_18674[2] = inst_18634);
(statearr_18655_18674[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18645 === 11))
{var inst_18637 = (state_18644[2]);var state_18644__$1 = (function (){var statearr_18656 = state_18644;(statearr_18656[8] = inst_18637);
return statearr_18656;
})();var statearr_18657_18675 = state_18644__$1;(statearr_18657_18675[2] = null);
(statearr_18657_18675[1] = 2);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_18661 = (new Array(9));(statearr_18661[0] = state_machine__12457__auto__);
(statearr_18661[1] = 1);
return statearr_18661;
});
var state_machine__12457__auto____1 = (function (state_18644){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_18644);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e18662){if((e18662 instanceof Object))
{var ex__12460__auto__ = e18662;var statearr_18663_18676 = state_18644;(statearr_18663_18676[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18644);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18677 = state_18644;
state_18644 = G__18677;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_18644){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_18644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_18664 = f__12543__auto__.call(null);(statearr_18664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___18665);
return statearr_18664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12542__auto___18764 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_18742){var state_val_18743 = (state_18742[1]);if((state_val_18743 === 1))
{var state_18742__$1 = state_18742;var statearr_18744_18765 = state_18742__$1;(statearr_18744_18765[2] = null);
(statearr_18744_18765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 2))
{var state_18742__$1 = state_18742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18742__$1,4,ch);
} else
{if((state_val_18743 === 3))
{var inst_18740 = (state_18742[2]);var state_18742__$1 = state_18742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18742__$1,inst_18740);
} else
{if((state_val_18743 === 4))
{var inst_18723 = (state_18742[7]);var inst_18723__$1 = (state_18742[2]);var inst_18724 = (inst_18723__$1 == null);var state_18742__$1 = (function (){var statearr_18745 = state_18742;(statearr_18745[7] = inst_18723__$1);
return statearr_18745;
})();if(cljs.core.truth_(inst_18724))
{var statearr_18746_18766 = state_18742__$1;(statearr_18746_18766[1] = 5);
} else
{var statearr_18747_18767 = state_18742__$1;(statearr_18747_18767[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 5))
{var inst_18726 = cljs.core.async.close_BANG_.call(null,tc);var inst_18727 = cljs.core.async.close_BANG_.call(null,fc);var state_18742__$1 = (function (){var statearr_18748 = state_18742;(statearr_18748[8] = inst_18726);
return statearr_18748;
})();var statearr_18749_18768 = state_18742__$1;(statearr_18749_18768[2] = inst_18727);
(statearr_18749_18768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 6))
{var inst_18723 = (state_18742[7]);var inst_18729 = p.call(null,inst_18723);var state_18742__$1 = state_18742;if(cljs.core.truth_(inst_18729))
{var statearr_18750_18769 = state_18742__$1;(statearr_18750_18769[1] = 9);
} else
{var statearr_18751_18770 = state_18742__$1;(statearr_18751_18770[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 7))
{var inst_18738 = (state_18742[2]);var state_18742__$1 = state_18742;var statearr_18752_18771 = state_18742__$1;(statearr_18752_18771[2] = inst_18738);
(statearr_18752_18771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 8))
{var inst_18735 = (state_18742[2]);var state_18742__$1 = (function (){var statearr_18753 = state_18742;(statearr_18753[9] = inst_18735);
return statearr_18753;
})();var statearr_18754_18772 = state_18742__$1;(statearr_18754_18772[2] = null);
(statearr_18754_18772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 9))
{var state_18742__$1 = state_18742;var statearr_18755_18773 = state_18742__$1;(statearr_18755_18773[2] = tc);
(statearr_18755_18773[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 10))
{var state_18742__$1 = state_18742;var statearr_18756_18774 = state_18742__$1;(statearr_18756_18774[2] = fc);
(statearr_18756_18774[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18743 === 11))
{var inst_18723 = (state_18742[7]);var inst_18733 = (state_18742[2]);var state_18742__$1 = state_18742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18742__$1,8,inst_18733,inst_18723);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_18760 = (new Array(10));(statearr_18760[0] = state_machine__12457__auto__);
(statearr_18760[1] = 1);
return statearr_18760;
});
var state_machine__12457__auto____1 = (function (state_18742){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_18742);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e18761){if((e18761 instanceof Object))
{var ex__12460__auto__ = e18761;var statearr_18762_18775 = state_18742;(statearr_18762_18775[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18742);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18776 = state_18742;
state_18742 = G__18776;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_18763 = f__12543__auto__.call(null);(statearr_18763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___18764);
return statearr_18763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12542__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_18823){var state_val_18824 = (state_18823[1]);if((state_val_18824 === 7))
{var inst_18819 = (state_18823[2]);var state_18823__$1 = state_18823;var statearr_18825_18841 = state_18823__$1;(statearr_18825_18841[2] = inst_18819);
(statearr_18825_18841[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18824 === 6))
{var inst_18812 = (state_18823[7]);var inst_18809 = (state_18823[8]);var inst_18816 = f.call(null,inst_18809,inst_18812);var inst_18809__$1 = inst_18816;var state_18823__$1 = (function (){var statearr_18826 = state_18823;(statearr_18826[8] = inst_18809__$1);
return statearr_18826;
})();var statearr_18827_18842 = state_18823__$1;(statearr_18827_18842[2] = null);
(statearr_18827_18842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18824 === 5))
{var inst_18809 = (state_18823[8]);var state_18823__$1 = state_18823;var statearr_18828_18843 = state_18823__$1;(statearr_18828_18843[2] = inst_18809);
(statearr_18828_18843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18824 === 4))
{var inst_18812 = (state_18823[7]);var inst_18812__$1 = (state_18823[2]);var inst_18813 = (inst_18812__$1 == null);var state_18823__$1 = (function (){var statearr_18829 = state_18823;(statearr_18829[7] = inst_18812__$1);
return statearr_18829;
})();if(cljs.core.truth_(inst_18813))
{var statearr_18830_18844 = state_18823__$1;(statearr_18830_18844[1] = 5);
} else
{var statearr_18831_18845 = state_18823__$1;(statearr_18831_18845[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18824 === 3))
{var inst_18821 = (state_18823[2]);var state_18823__$1 = state_18823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18823__$1,inst_18821);
} else
{if((state_val_18824 === 2))
{var state_18823__$1 = state_18823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18823__$1,4,ch);
} else
{if((state_val_18824 === 1))
{var inst_18809 = init;var state_18823__$1 = (function (){var statearr_18832 = state_18823;(statearr_18832[8] = inst_18809);
return statearr_18832;
})();var statearr_18833_18846 = state_18823__$1;(statearr_18833_18846[2] = null);
(statearr_18833_18846[1] = 2);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_18837 = (new Array(9));(statearr_18837[0] = state_machine__12457__auto__);
(statearr_18837[1] = 1);
return statearr_18837;
});
var state_machine__12457__auto____1 = (function (state_18823){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_18823);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e18838){if((e18838 instanceof Object))
{var ex__12460__auto__ = e18838;var statearr_18839_18847 = state_18823;(statearr_18839_18847[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18848 = state_18823;
state_18823 = G__18848;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_18823){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_18823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_18840 = f__12543__auto__.call(null);(statearr_18840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto__);
return statearr_18840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
}));
return c__12542__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12542__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_18910){var state_val_18911 = (state_18910[1]);if((state_val_18911 === 1))
{var inst_18890 = cljs.core.seq.call(null,coll);var inst_18891 = inst_18890;var state_18910__$1 = (function (){var statearr_18912 = state_18910;(statearr_18912[7] = inst_18891);
return statearr_18912;
})();var statearr_18913_18931 = state_18910__$1;(statearr_18913_18931[2] = null);
(statearr_18913_18931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 2))
{var inst_18891 = (state_18910[7]);var state_18910__$1 = state_18910;if(cljs.core.truth_(inst_18891))
{var statearr_18914_18932 = state_18910__$1;(statearr_18914_18932[1] = 4);
} else
{var statearr_18915_18933 = state_18910__$1;(statearr_18915_18933[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 3))
{var inst_18908 = (state_18910[2]);var state_18910__$1 = state_18910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18910__$1,inst_18908);
} else
{if((state_val_18911 === 4))
{var inst_18891 = (state_18910[7]);var inst_18894 = cljs.core.first.call(null,inst_18891);var state_18910__$1 = state_18910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18910__$1,7,ch,inst_18894);
} else
{if((state_val_18911 === 5))
{var state_18910__$1 = state_18910;if(cljs.core.truth_(close_QMARK_))
{var statearr_18916_18934 = state_18910__$1;(statearr_18916_18934[1] = 8);
} else
{var statearr_18917_18935 = state_18910__$1;(statearr_18917_18935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 6))
{var inst_18906 = (state_18910[2]);var state_18910__$1 = state_18910;var statearr_18918_18936 = state_18910__$1;(statearr_18918_18936[2] = inst_18906);
(statearr_18918_18936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 7))
{var inst_18891 = (state_18910[7]);var inst_18896 = (state_18910[2]);var inst_18897 = cljs.core.next.call(null,inst_18891);var inst_18891__$1 = inst_18897;var state_18910__$1 = (function (){var statearr_18919 = state_18910;(statearr_18919[8] = inst_18896);
(statearr_18919[7] = inst_18891__$1);
return statearr_18919;
})();var statearr_18920_18937 = state_18910__$1;(statearr_18920_18937[2] = null);
(statearr_18920_18937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 8))
{var inst_18901 = cljs.core.async.close_BANG_.call(null,ch);var state_18910__$1 = state_18910;var statearr_18921_18938 = state_18910__$1;(statearr_18921_18938[2] = inst_18901);
(statearr_18921_18938[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 9))
{var state_18910__$1 = state_18910;var statearr_18922_18939 = state_18910__$1;(statearr_18922_18939[2] = null);
(statearr_18922_18939[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18911 === 10))
{var inst_18904 = (state_18910[2]);var state_18910__$1 = state_18910;var statearr_18923_18940 = state_18910__$1;(statearr_18923_18940[2] = inst_18904);
(statearr_18923_18940[1] = 6);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_18927 = (new Array(9));(statearr_18927[0] = state_machine__12457__auto__);
(statearr_18927[1] = 1);
return statearr_18927;
});
var state_machine__12457__auto____1 = (function (state_18910){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_18910);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e18928){if((e18928 instanceof Object))
{var ex__12460__auto__ = e18928;var statearr_18929_18941 = state_18910;(statearr_18929_18941[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18942 = state_18910;
state_18910 = G__18942;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_18910){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_18910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_18930 = f__12543__auto__.call(null);(statearr_18930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto__);
return statearr_18930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
}));
return c__12542__auto__;
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
cljs.core.async.Mux = (function (){var obj18944 = {};return obj18944;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__5145__auto__ = _;if(and__5145__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5760__auto__ = (((_ == null))?null:_);return (function (){var or__5157__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18946 = {};return obj18946;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19161 = (function (cs,ch,mult,meta19162){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19162 = meta19162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19161.cljs$lang$type = true;
cljs.core.async.t19161.cljs$lang$ctorStr = "cljs.core.async/t19161";
cljs.core.async.t19161.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t19161");
});})(cs))
;
cljs.core.async.t19161.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19161.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19161.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19161.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19161.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19163){var self__ = this;
var _19163__$1 = this;return self__.meta19162;
});})(cs))
;
cljs.core.async.t19161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19163,meta19162__$1){var self__ = this;
var _19163__$1 = this;return (new cljs.core.async.t19161(self__.cs,self__.ch,self__.mult,meta19162__$1));
});})(cs))
;
cljs.core.async.__GT_t19161 = ((function (cs){
return (function __GT_t19161(cs__$1,ch__$1,mult__$1,meta19162){return (new cljs.core.async.t19161(cs__$1,ch__$1,mult__$1,meta19162));
});})(cs))
;
}
return (new cljs.core.async.t19161(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12542__auto___19375 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_19293){var state_val_19294 = (state_19293[1]);if((state_val_19294 === 32))
{var inst_19242 = (state_19293[7]);var inst_19166 = (state_19293[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19293,31,Object,null,30);var inst_19249 = cljs.core.async.put_BANG_.call(null,inst_19242,inst_19166,done);var state_19293__$1 = state_19293;var statearr_19295_19376 = state_19293__$1;(statearr_19295_19376[2] = inst_19249);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19293__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 1))
{var state_19293__$1 = state_19293;var statearr_19296_19377 = state_19293__$1;(statearr_19296_19377[2] = null);
(statearr_19296_19377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 33))
{var inst_19255 = (state_19293[9]);var inst_19257 = cljs.core.chunked_seq_QMARK_.call(null,inst_19255);var state_19293__$1 = state_19293;if(inst_19257)
{var statearr_19297_19378 = state_19293__$1;(statearr_19297_19378[1] = 36);
} else
{var statearr_19298_19379 = state_19293__$1;(statearr_19298_19379[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 2))
{var state_19293__$1 = state_19293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19293__$1,4,ch);
} else
{if((state_val_19294 === 34))
{var state_19293__$1 = state_19293;var statearr_19299_19380 = state_19293__$1;(statearr_19299_19380[2] = null);
(statearr_19299_19380[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 3))
{var inst_19291 = (state_19293[2]);var state_19293__$1 = state_19293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19293__$1,inst_19291);
} else
{if((state_val_19294 === 35))
{var inst_19280 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19300_19381 = state_19293__$1;(statearr_19300_19381[2] = inst_19280);
(statearr_19300_19381[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 4))
{var inst_19166 = (state_19293[8]);var inst_19166__$1 = (state_19293[2]);var inst_19167 = (inst_19166__$1 == null);var state_19293__$1 = (function (){var statearr_19301 = state_19293;(statearr_19301[8] = inst_19166__$1);
return statearr_19301;
})();if(cljs.core.truth_(inst_19167))
{var statearr_19302_19382 = state_19293__$1;(statearr_19302_19382[1] = 5);
} else
{var statearr_19303_19383 = state_19293__$1;(statearr_19303_19383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 36))
{var inst_19255 = (state_19293[9]);var inst_19259 = cljs.core.chunk_first.call(null,inst_19255);var inst_19260 = cljs.core.chunk_rest.call(null,inst_19255);var inst_19261 = cljs.core.count.call(null,inst_19259);var inst_19234 = inst_19260;var inst_19235 = inst_19259;var inst_19236 = inst_19261;var inst_19237 = 0;var state_19293__$1 = (function (){var statearr_19304 = state_19293;(statearr_19304[10] = inst_19236);
(statearr_19304[11] = inst_19237);
(statearr_19304[12] = inst_19235);
(statearr_19304[13] = inst_19234);
return statearr_19304;
})();var statearr_19305_19384 = state_19293__$1;(statearr_19305_19384[2] = null);
(statearr_19305_19384[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 5))
{var inst_19173 = cljs.core.deref.call(null,cs);var inst_19174 = cljs.core.seq.call(null,inst_19173);var inst_19175 = inst_19174;var inst_19176 = null;var inst_19177 = 0;var inst_19178 = 0;var state_19293__$1 = (function (){var statearr_19306 = state_19293;(statearr_19306[14] = inst_19178);
(statearr_19306[15] = inst_19177);
(statearr_19306[16] = inst_19175);
(statearr_19306[17] = inst_19176);
return statearr_19306;
})();var statearr_19307_19385 = state_19293__$1;(statearr_19307_19385[2] = null);
(statearr_19307_19385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 37))
{var inst_19255 = (state_19293[9]);var inst_19264 = cljs.core.first.call(null,inst_19255);var state_19293__$1 = (function (){var statearr_19308 = state_19293;(statearr_19308[18] = inst_19264);
return statearr_19308;
})();var statearr_19309_19386 = state_19293__$1;(statearr_19309_19386[2] = null);
(statearr_19309_19386[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 6))
{var inst_19225 = cljs.core.deref.call(null,cs);var inst_19226 = cljs.core.keys.call(null,inst_19225);var inst_19227 = cljs.core.count.call(null,inst_19226);var inst_19228 = cljs.core.reset_BANG_.call(null,dctr,inst_19227);var inst_19233 = cljs.core.seq.call(null,inst_19226);var inst_19234 = inst_19233;var inst_19235 = null;var inst_19236 = 0;var inst_19237 = 0;var state_19293__$1 = (function (){var statearr_19310 = state_19293;(statearr_19310[19] = inst_19228);
(statearr_19310[10] = inst_19236);
(statearr_19310[11] = inst_19237);
(statearr_19310[12] = inst_19235);
(statearr_19310[13] = inst_19234);
return statearr_19310;
})();var statearr_19311_19387 = state_19293__$1;(statearr_19311_19387[2] = null);
(statearr_19311_19387[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 38))
{var inst_19277 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19312_19388 = state_19293__$1;(statearr_19312_19388[2] = inst_19277);
(statearr_19312_19388[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 7))
{var inst_19289 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19313_19389 = state_19293__$1;(statearr_19313_19389[2] = inst_19289);
(statearr_19313_19389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 39))
{var inst_19255 = (state_19293[9]);var inst_19273 = (state_19293[2]);var inst_19274 = cljs.core.next.call(null,inst_19255);var inst_19234 = inst_19274;var inst_19235 = null;var inst_19236 = 0;var inst_19237 = 0;var state_19293__$1 = (function (){var statearr_19314 = state_19293;(statearr_19314[20] = inst_19273);
(statearr_19314[10] = inst_19236);
(statearr_19314[11] = inst_19237);
(statearr_19314[12] = inst_19235);
(statearr_19314[13] = inst_19234);
return statearr_19314;
})();var statearr_19315_19390 = state_19293__$1;(statearr_19315_19390[2] = null);
(statearr_19315_19390[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 8))
{var inst_19178 = (state_19293[14]);var inst_19177 = (state_19293[15]);var inst_19180 = (inst_19178 < inst_19177);var inst_19181 = inst_19180;var state_19293__$1 = state_19293;if(cljs.core.truth_(inst_19181))
{var statearr_19316_19391 = state_19293__$1;(statearr_19316_19391[1] = 10);
} else
{var statearr_19317_19392 = state_19293__$1;(statearr_19317_19392[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 40))
{var inst_19264 = (state_19293[18]);var inst_19265 = (state_19293[2]);var inst_19266 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19267 = cljs.core.async.untap_STAR_.call(null,m,inst_19264);var state_19293__$1 = (function (){var statearr_19318 = state_19293;(statearr_19318[21] = inst_19266);
(statearr_19318[22] = inst_19265);
return statearr_19318;
})();var statearr_19319_19393 = state_19293__$1;(statearr_19319_19393[2] = inst_19267);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19293__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 9))
{var inst_19223 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19320_19394 = state_19293__$1;(statearr_19320_19394[2] = inst_19223);
(statearr_19320_19394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 41))
{var inst_19264 = (state_19293[18]);var inst_19166 = (state_19293[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19293,40,Object,null,39);var inst_19271 = cljs.core.async.put_BANG_.call(null,inst_19264,inst_19166,done);var state_19293__$1 = state_19293;var statearr_19321_19395 = state_19293__$1;(statearr_19321_19395[2] = inst_19271);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19293__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 10))
{var inst_19178 = (state_19293[14]);var inst_19176 = (state_19293[17]);var inst_19184 = cljs.core._nth.call(null,inst_19176,inst_19178);var inst_19185 = cljs.core.nth.call(null,inst_19184,0,null);var inst_19186 = cljs.core.nth.call(null,inst_19184,1,null);var state_19293__$1 = (function (){var statearr_19322 = state_19293;(statearr_19322[23] = inst_19185);
return statearr_19322;
})();if(cljs.core.truth_(inst_19186))
{var statearr_19323_19396 = state_19293__$1;(statearr_19323_19396[1] = 13);
} else
{var statearr_19324_19397 = state_19293__$1;(statearr_19324_19397[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 42))
{var inst_19286 = (state_19293[2]);var state_19293__$1 = (function (){var statearr_19325 = state_19293;(statearr_19325[24] = inst_19286);
return statearr_19325;
})();var statearr_19326_19398 = state_19293__$1;(statearr_19326_19398[2] = null);
(statearr_19326_19398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 11))
{var inst_19195 = (state_19293[25]);var inst_19175 = (state_19293[16]);var inst_19195__$1 = cljs.core.seq.call(null,inst_19175);var state_19293__$1 = (function (){var statearr_19327 = state_19293;(statearr_19327[25] = inst_19195__$1);
return statearr_19327;
})();if(inst_19195__$1)
{var statearr_19328_19399 = state_19293__$1;(statearr_19328_19399[1] = 16);
} else
{var statearr_19329_19400 = state_19293__$1;(statearr_19329_19400[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 12))
{var inst_19221 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19330_19401 = state_19293__$1;(statearr_19330_19401[2] = inst_19221);
(statearr_19330_19401[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 13))
{var inst_19185 = (state_19293[23]);var inst_19188 = cljs.core.async.close_BANG_.call(null,inst_19185);var state_19293__$1 = state_19293;var statearr_19334_19402 = state_19293__$1;(statearr_19334_19402[2] = inst_19188);
(statearr_19334_19402[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 14))
{var state_19293__$1 = state_19293;var statearr_19335_19403 = state_19293__$1;(statearr_19335_19403[2] = null);
(statearr_19335_19403[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 15))
{var inst_19178 = (state_19293[14]);var inst_19177 = (state_19293[15]);var inst_19175 = (state_19293[16]);var inst_19176 = (state_19293[17]);var inst_19191 = (state_19293[2]);var inst_19192 = (inst_19178 + 1);var tmp19331 = inst_19177;var tmp19332 = inst_19175;var tmp19333 = inst_19176;var inst_19175__$1 = tmp19332;var inst_19176__$1 = tmp19333;var inst_19177__$1 = tmp19331;var inst_19178__$1 = inst_19192;var state_19293__$1 = (function (){var statearr_19336 = state_19293;(statearr_19336[14] = inst_19178__$1);
(statearr_19336[15] = inst_19177__$1);
(statearr_19336[26] = inst_19191);
(statearr_19336[16] = inst_19175__$1);
(statearr_19336[17] = inst_19176__$1);
return statearr_19336;
})();var statearr_19337_19404 = state_19293__$1;(statearr_19337_19404[2] = null);
(statearr_19337_19404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 16))
{var inst_19195 = (state_19293[25]);var inst_19197 = cljs.core.chunked_seq_QMARK_.call(null,inst_19195);var state_19293__$1 = state_19293;if(inst_19197)
{var statearr_19338_19405 = state_19293__$1;(statearr_19338_19405[1] = 19);
} else
{var statearr_19339_19406 = state_19293__$1;(statearr_19339_19406[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 17))
{var state_19293__$1 = state_19293;var statearr_19340_19407 = state_19293__$1;(statearr_19340_19407[2] = null);
(statearr_19340_19407[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 18))
{var inst_19219 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19341_19408 = state_19293__$1;(statearr_19341_19408[2] = inst_19219);
(statearr_19341_19408[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 19))
{var inst_19195 = (state_19293[25]);var inst_19199 = cljs.core.chunk_first.call(null,inst_19195);var inst_19200 = cljs.core.chunk_rest.call(null,inst_19195);var inst_19201 = cljs.core.count.call(null,inst_19199);var inst_19175 = inst_19200;var inst_19176 = inst_19199;var inst_19177 = inst_19201;var inst_19178 = 0;var state_19293__$1 = (function (){var statearr_19342 = state_19293;(statearr_19342[14] = inst_19178);
(statearr_19342[15] = inst_19177);
(statearr_19342[16] = inst_19175);
(statearr_19342[17] = inst_19176);
return statearr_19342;
})();var statearr_19343_19409 = state_19293__$1;(statearr_19343_19409[2] = null);
(statearr_19343_19409[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 20))
{var inst_19195 = (state_19293[25]);var inst_19205 = cljs.core.first.call(null,inst_19195);var inst_19206 = cljs.core.nth.call(null,inst_19205,0,null);var inst_19207 = cljs.core.nth.call(null,inst_19205,1,null);var state_19293__$1 = (function (){var statearr_19344 = state_19293;(statearr_19344[27] = inst_19206);
return statearr_19344;
})();if(cljs.core.truth_(inst_19207))
{var statearr_19345_19410 = state_19293__$1;(statearr_19345_19410[1] = 22);
} else
{var statearr_19346_19411 = state_19293__$1;(statearr_19346_19411[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 21))
{var inst_19216 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19347_19412 = state_19293__$1;(statearr_19347_19412[2] = inst_19216);
(statearr_19347_19412[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 22))
{var inst_19206 = (state_19293[27]);var inst_19209 = cljs.core.async.close_BANG_.call(null,inst_19206);var state_19293__$1 = state_19293;var statearr_19348_19413 = state_19293__$1;(statearr_19348_19413[2] = inst_19209);
(statearr_19348_19413[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 23))
{var state_19293__$1 = state_19293;var statearr_19349_19414 = state_19293__$1;(statearr_19349_19414[2] = null);
(statearr_19349_19414[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 24))
{var inst_19195 = (state_19293[25]);var inst_19212 = (state_19293[2]);var inst_19213 = cljs.core.next.call(null,inst_19195);var inst_19175 = inst_19213;var inst_19176 = null;var inst_19177 = 0;var inst_19178 = 0;var state_19293__$1 = (function (){var statearr_19350 = state_19293;(statearr_19350[14] = inst_19178);
(statearr_19350[15] = inst_19177);
(statearr_19350[28] = inst_19212);
(statearr_19350[16] = inst_19175);
(statearr_19350[17] = inst_19176);
return statearr_19350;
})();var statearr_19351_19415 = state_19293__$1;(statearr_19351_19415[2] = null);
(statearr_19351_19415[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 25))
{var inst_19236 = (state_19293[10]);var inst_19237 = (state_19293[11]);var inst_19239 = (inst_19237 < inst_19236);var inst_19240 = inst_19239;var state_19293__$1 = state_19293;if(cljs.core.truth_(inst_19240))
{var statearr_19352_19416 = state_19293__$1;(statearr_19352_19416[1] = 27);
} else
{var statearr_19353_19417 = state_19293__$1;(statearr_19353_19417[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 26))
{var inst_19284 = (state_19293[2]);var state_19293__$1 = (function (){var statearr_19354 = state_19293;(statearr_19354[29] = inst_19284);
return statearr_19354;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19293__$1,42,dchan);
} else
{if((state_val_19294 === 27))
{var inst_19237 = (state_19293[11]);var inst_19235 = (state_19293[12]);var inst_19242 = cljs.core._nth.call(null,inst_19235,inst_19237);var state_19293__$1 = (function (){var statearr_19355 = state_19293;(statearr_19355[7] = inst_19242);
return statearr_19355;
})();var statearr_19356_19418 = state_19293__$1;(statearr_19356_19418[2] = null);
(statearr_19356_19418[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 28))
{var inst_19255 = (state_19293[9]);var inst_19234 = (state_19293[13]);var inst_19255__$1 = cljs.core.seq.call(null,inst_19234);var state_19293__$1 = (function (){var statearr_19360 = state_19293;(statearr_19360[9] = inst_19255__$1);
return statearr_19360;
})();if(inst_19255__$1)
{var statearr_19361_19419 = state_19293__$1;(statearr_19361_19419[1] = 33);
} else
{var statearr_19362_19420 = state_19293__$1;(statearr_19362_19420[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 29))
{var inst_19282 = (state_19293[2]);var state_19293__$1 = state_19293;var statearr_19363_19421 = state_19293__$1;(statearr_19363_19421[2] = inst_19282);
(statearr_19363_19421[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 30))
{var inst_19236 = (state_19293[10]);var inst_19237 = (state_19293[11]);var inst_19235 = (state_19293[12]);var inst_19234 = (state_19293[13]);var inst_19251 = (state_19293[2]);var inst_19252 = (inst_19237 + 1);var tmp19357 = inst_19236;var tmp19358 = inst_19235;var tmp19359 = inst_19234;var inst_19234__$1 = tmp19359;var inst_19235__$1 = tmp19358;var inst_19236__$1 = tmp19357;var inst_19237__$1 = inst_19252;var state_19293__$1 = (function (){var statearr_19364 = state_19293;(statearr_19364[10] = inst_19236__$1);
(statearr_19364[11] = inst_19237__$1);
(statearr_19364[12] = inst_19235__$1);
(statearr_19364[13] = inst_19234__$1);
(statearr_19364[30] = inst_19251);
return statearr_19364;
})();var statearr_19365_19422 = state_19293__$1;(statearr_19365_19422[2] = null);
(statearr_19365_19422[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19294 === 31))
{var inst_19242 = (state_19293[7]);var inst_19243 = (state_19293[2]);var inst_19244 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19245 = cljs.core.async.untap_STAR_.call(null,m,inst_19242);var state_19293__$1 = (function (){var statearr_19366 = state_19293;(statearr_19366[31] = inst_19244);
(statearr_19366[32] = inst_19243);
return statearr_19366;
})();var statearr_19367_19423 = state_19293__$1;(statearr_19367_19423[2] = inst_19245);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19293__$1);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_19371 = (new Array(33));(statearr_19371[0] = state_machine__12457__auto__);
(statearr_19371[1] = 1);
return statearr_19371;
});
var state_machine__12457__auto____1 = (function (state_19293){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_19293);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e19372){if((e19372 instanceof Object))
{var ex__12460__auto__ = e19372;var statearr_19373_19424 = state_19293;(statearr_19373_19424[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19293);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19425 = state_19293;
state_19293 = G__19425;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_19293){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_19293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_19374 = f__12543__auto__.call(null);(statearr_19374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___19375);
return statearr_19374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
cljs.core.async.Mix = (function (){var obj19427 = {};return obj19427;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__5145__auto__ = m;if(and__5145__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5760__auto__ = (((m == null))?null:m);return (function (){var or__5157__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t19537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19537 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19538){
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
this.meta19538 = meta19538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19537.cljs$lang$type = true;
cljs.core.async.t19537.cljs$lang$ctorStr = "cljs.core.async/t19537";
cljs.core.async.t19537.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t19537");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19537.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19539){var self__ = this;
var _19539__$1 = this;return self__.meta19538;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19539,meta19538__$1){var self__ = this;
var _19539__$1 = this;return (new cljs.core.async.t19537(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19538__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19537 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19537(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19538){return (new cljs.core.async.t19537(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19538));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19537(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12542__auto___19646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_19604){var state_val_19605 = (state_19604[1]);if((state_val_19605 === 1))
{var inst_19543 = (state_19604[7]);var inst_19543__$1 = calc_state.call(null);var inst_19544 = cljs.core.seq_QMARK_.call(null,inst_19543__$1);var state_19604__$1 = (function (){var statearr_19606 = state_19604;(statearr_19606[7] = inst_19543__$1);
return statearr_19606;
})();if(inst_19544)
{var statearr_19607_19647 = state_19604__$1;(statearr_19607_19647[1] = 2);
} else
{var statearr_19608_19648 = state_19604__$1;(statearr_19608_19648[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 2))
{var inst_19543 = (state_19604[7]);var inst_19546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19543);var state_19604__$1 = state_19604;var statearr_19609_19649 = state_19604__$1;(statearr_19609_19649[2] = inst_19546);
(statearr_19609_19649[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 3))
{var inst_19543 = (state_19604[7]);var state_19604__$1 = state_19604;var statearr_19610_19650 = state_19604__$1;(statearr_19610_19650[2] = inst_19543);
(statearr_19610_19650[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 4))
{var inst_19543 = (state_19604[7]);var inst_19549 = (state_19604[2]);var inst_19550 = cljs.core.get.call(null,inst_19549,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19551 = cljs.core.get.call(null,inst_19549,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19552 = cljs.core.get.call(null,inst_19549,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19553 = inst_19543;var state_19604__$1 = (function (){var statearr_19611 = state_19604;(statearr_19611[8] = inst_19550);
(statearr_19611[9] = inst_19552);
(statearr_19611[10] = inst_19551);
(statearr_19611[11] = inst_19553);
return statearr_19611;
})();var statearr_19612_19651 = state_19604__$1;(statearr_19612_19651[2] = null);
(statearr_19612_19651[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 5))
{var inst_19553 = (state_19604[11]);var inst_19556 = cljs.core.seq_QMARK_.call(null,inst_19553);var state_19604__$1 = state_19604;if(inst_19556)
{var statearr_19613_19652 = state_19604__$1;(statearr_19613_19652[1] = 7);
} else
{var statearr_19614_19653 = state_19604__$1;(statearr_19614_19653[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 6))
{var inst_19602 = (state_19604[2]);var state_19604__$1 = state_19604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19604__$1,inst_19602);
} else
{if((state_val_19605 === 7))
{var inst_19553 = (state_19604[11]);var inst_19558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19553);var state_19604__$1 = state_19604;var statearr_19615_19654 = state_19604__$1;(statearr_19615_19654[2] = inst_19558);
(statearr_19615_19654[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 8))
{var inst_19553 = (state_19604[11]);var state_19604__$1 = state_19604;var statearr_19616_19655 = state_19604__$1;(statearr_19616_19655[2] = inst_19553);
(statearr_19616_19655[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 9))
{var inst_19561 = (state_19604[12]);var inst_19561__$1 = (state_19604[2]);var inst_19562 = cljs.core.get.call(null,inst_19561__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19563 = cljs.core.get.call(null,inst_19561__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19564 = cljs.core.get.call(null,inst_19561__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_19604__$1 = (function (){var statearr_19617 = state_19604;(statearr_19617[12] = inst_19561__$1);
(statearr_19617[13] = inst_19563);
(statearr_19617[14] = inst_19564);
return statearr_19617;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19604__$1,10,inst_19562);
} else
{if((state_val_19605 === 10))
{var inst_19568 = (state_19604[15]);var inst_19569 = (state_19604[16]);var inst_19567 = (state_19604[2]);var inst_19568__$1 = cljs.core.nth.call(null,inst_19567,0,null);var inst_19569__$1 = cljs.core.nth.call(null,inst_19567,1,null);var inst_19570 = (inst_19568__$1 == null);var inst_19571 = cljs.core._EQ_.call(null,inst_19569__$1,change);var inst_19572 = (inst_19570) || (inst_19571);var state_19604__$1 = (function (){var statearr_19618 = state_19604;(statearr_19618[15] = inst_19568__$1);
(statearr_19618[16] = inst_19569__$1);
return statearr_19618;
})();if(cljs.core.truth_(inst_19572))
{var statearr_19619_19656 = state_19604__$1;(statearr_19619_19656[1] = 11);
} else
{var statearr_19620_19657 = state_19604__$1;(statearr_19620_19657[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 11))
{var inst_19568 = (state_19604[15]);var inst_19574 = (inst_19568 == null);var state_19604__$1 = state_19604;if(cljs.core.truth_(inst_19574))
{var statearr_19621_19658 = state_19604__$1;(statearr_19621_19658[1] = 14);
} else
{var statearr_19622_19659 = state_19604__$1;(statearr_19622_19659[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 12))
{var inst_19583 = (state_19604[17]);var inst_19569 = (state_19604[16]);var inst_19564 = (state_19604[14]);var inst_19583__$1 = inst_19564.call(null,inst_19569);var state_19604__$1 = (function (){var statearr_19623 = state_19604;(statearr_19623[17] = inst_19583__$1);
return statearr_19623;
})();if(cljs.core.truth_(inst_19583__$1))
{var statearr_19624_19660 = state_19604__$1;(statearr_19624_19660[1] = 17);
} else
{var statearr_19625_19661 = state_19604__$1;(statearr_19625_19661[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 13))
{var inst_19600 = (state_19604[2]);var state_19604__$1 = state_19604;var statearr_19626_19662 = state_19604__$1;(statearr_19626_19662[2] = inst_19600);
(statearr_19626_19662[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 14))
{var inst_19569 = (state_19604[16]);var inst_19576 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19569);var state_19604__$1 = state_19604;var statearr_19627_19663 = state_19604__$1;(statearr_19627_19663[2] = inst_19576);
(statearr_19627_19663[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 15))
{var state_19604__$1 = state_19604;var statearr_19628_19664 = state_19604__$1;(statearr_19628_19664[2] = null);
(statearr_19628_19664[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 16))
{var inst_19579 = (state_19604[2]);var inst_19580 = calc_state.call(null);var inst_19553 = inst_19580;var state_19604__$1 = (function (){var statearr_19629 = state_19604;(statearr_19629[18] = inst_19579);
(statearr_19629[11] = inst_19553);
return statearr_19629;
})();var statearr_19630_19665 = state_19604__$1;(statearr_19630_19665[2] = null);
(statearr_19630_19665[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 17))
{var inst_19583 = (state_19604[17]);var state_19604__$1 = state_19604;var statearr_19631_19666 = state_19604__$1;(statearr_19631_19666[2] = inst_19583);
(statearr_19631_19666[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 18))
{var inst_19569 = (state_19604[16]);var inst_19563 = (state_19604[13]);var inst_19564 = (state_19604[14]);var inst_19586 = cljs.core.empty_QMARK_.call(null,inst_19564);var inst_19587 = inst_19563.call(null,inst_19569);var inst_19588 = cljs.core.not.call(null,inst_19587);var inst_19589 = (inst_19586) && (inst_19588);var state_19604__$1 = state_19604;var statearr_19632_19667 = state_19604__$1;(statearr_19632_19667[2] = inst_19589);
(statearr_19632_19667[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 19))
{var inst_19591 = (state_19604[2]);var state_19604__$1 = state_19604;if(cljs.core.truth_(inst_19591))
{var statearr_19633_19668 = state_19604__$1;(statearr_19633_19668[1] = 20);
} else
{var statearr_19634_19669 = state_19604__$1;(statearr_19634_19669[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 20))
{var inst_19568 = (state_19604[15]);var state_19604__$1 = state_19604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19604__$1,23,out,inst_19568);
} else
{if((state_val_19605 === 21))
{var state_19604__$1 = state_19604;var statearr_19635_19670 = state_19604__$1;(statearr_19635_19670[2] = null);
(statearr_19635_19670[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 22))
{var inst_19561 = (state_19604[12]);var inst_19597 = (state_19604[2]);var inst_19553 = inst_19561;var state_19604__$1 = (function (){var statearr_19636 = state_19604;(statearr_19636[11] = inst_19553);
(statearr_19636[19] = inst_19597);
return statearr_19636;
})();var statearr_19637_19671 = state_19604__$1;(statearr_19637_19671[2] = null);
(statearr_19637_19671[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19605 === 23))
{var inst_19594 = (state_19604[2]);var state_19604__$1 = state_19604;var statearr_19638_19672 = state_19604__$1;(statearr_19638_19672[2] = inst_19594);
(statearr_19638_19672[1] = 22);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_19642 = (new Array(20));(statearr_19642[0] = state_machine__12457__auto__);
(statearr_19642[1] = 1);
return statearr_19642;
});
var state_machine__12457__auto____1 = (function (state_19604){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_19604);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e19643){if((e19643 instanceof Object))
{var ex__12460__auto__ = e19643;var statearr_19644_19673 = state_19604;(statearr_19644_19673[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19604);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19674 = state_19604;
state_19604 = G__19674;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_19604){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_19604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_19645 = f__12543__auto__.call(null);(statearr_19645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___19646);
return statearr_19645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
cljs.core.async.Pub = (function (){var obj19676 = {};return obj19676;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__5145__auto__ = p;if(and__5145__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5760__auto__ = (((p == null))?null:p);return (function (){var or__5157__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
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
return (function (topic){var or__5157__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5157__auto__,mults){
return (function (p1__19677_SHARP_){if(cljs.core.truth_(p1__19677_SHARP_.call(null,topic)))
{return p1__19677_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19677_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5157__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19802 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19803){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19803 = meta19803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19802.cljs$lang$type = true;
cljs.core.async.t19802.cljs$lang$ctorStr = "cljs.core.async/t19802";
cljs.core.async.t19802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t19802");
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19804){var self__ = this;
var _19804__$1 = this;return self__.meta19803;
});})(mults,ensure_mult))
;
cljs.core.async.t19802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19804,meta19803__$1){var self__ = this;
var _19804__$1 = this;return (new cljs.core.async.t19802(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19803__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19802 = ((function (mults,ensure_mult){
return (function __GT_t19802(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19803){return (new cljs.core.async.t19802(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19803));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19802(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12542__auto___19926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_19878){var state_val_19879 = (state_19878[1]);if((state_val_19879 === 1))
{var state_19878__$1 = state_19878;var statearr_19880_19927 = state_19878__$1;(statearr_19880_19927[2] = null);
(statearr_19880_19927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 2))
{var state_19878__$1 = state_19878;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19878__$1,4,ch);
} else
{if((state_val_19879 === 3))
{var inst_19876 = (state_19878[2]);var state_19878__$1 = state_19878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19878__$1,inst_19876);
} else
{if((state_val_19879 === 4))
{var inst_19807 = (state_19878[7]);var inst_19807__$1 = (state_19878[2]);var inst_19808 = (inst_19807__$1 == null);var state_19878__$1 = (function (){var statearr_19881 = state_19878;(statearr_19881[7] = inst_19807__$1);
return statearr_19881;
})();if(cljs.core.truth_(inst_19808))
{var statearr_19882_19928 = state_19878__$1;(statearr_19882_19928[1] = 5);
} else
{var statearr_19883_19929 = state_19878__$1;(statearr_19883_19929[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 5))
{var inst_19814 = cljs.core.deref.call(null,mults);var inst_19815 = cljs.core.vals.call(null,inst_19814);var inst_19816 = cljs.core.seq.call(null,inst_19815);var inst_19817 = inst_19816;var inst_19818 = null;var inst_19819 = 0;var inst_19820 = 0;var state_19878__$1 = (function (){var statearr_19884 = state_19878;(statearr_19884[8] = inst_19817);
(statearr_19884[9] = inst_19818);
(statearr_19884[10] = inst_19819);
(statearr_19884[11] = inst_19820);
return statearr_19884;
})();var statearr_19885_19930 = state_19878__$1;(statearr_19885_19930[2] = null);
(statearr_19885_19930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 6))
{var inst_19855 = (state_19878[12]);var inst_19807 = (state_19878[7]);var inst_19857 = (state_19878[13]);var inst_19855__$1 = topic_fn.call(null,inst_19807);var inst_19856 = cljs.core.deref.call(null,mults);var inst_19857__$1 = cljs.core.get.call(null,inst_19856,inst_19855__$1);var state_19878__$1 = (function (){var statearr_19886 = state_19878;(statearr_19886[12] = inst_19855__$1);
(statearr_19886[13] = inst_19857__$1);
return statearr_19886;
})();if(cljs.core.truth_(inst_19857__$1))
{var statearr_19887_19931 = state_19878__$1;(statearr_19887_19931[1] = 19);
} else
{var statearr_19888_19932 = state_19878__$1;(statearr_19888_19932[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 7))
{var inst_19874 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19889_19933 = state_19878__$1;(statearr_19889_19933[2] = inst_19874);
(statearr_19889_19933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 8))
{var inst_19819 = (state_19878[10]);var inst_19820 = (state_19878[11]);var inst_19822 = (inst_19820 < inst_19819);var inst_19823 = inst_19822;var state_19878__$1 = state_19878;if(cljs.core.truth_(inst_19823))
{var statearr_19893_19934 = state_19878__$1;(statearr_19893_19934[1] = 10);
} else
{var statearr_19894_19935 = state_19878__$1;(statearr_19894_19935[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 9))
{var inst_19853 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19895_19936 = state_19878__$1;(statearr_19895_19936[2] = inst_19853);
(statearr_19895_19936[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 10))
{var inst_19817 = (state_19878[8]);var inst_19818 = (state_19878[9]);var inst_19819 = (state_19878[10]);var inst_19820 = (state_19878[11]);var inst_19825 = cljs.core._nth.call(null,inst_19818,inst_19820);var inst_19826 = cljs.core.async.muxch_STAR_.call(null,inst_19825);var inst_19827 = cljs.core.async.close_BANG_.call(null,inst_19826);var inst_19828 = (inst_19820 + 1);var tmp19890 = inst_19817;var tmp19891 = inst_19818;var tmp19892 = inst_19819;var inst_19817__$1 = tmp19890;var inst_19818__$1 = tmp19891;var inst_19819__$1 = tmp19892;var inst_19820__$1 = inst_19828;var state_19878__$1 = (function (){var statearr_19896 = state_19878;(statearr_19896[8] = inst_19817__$1);
(statearr_19896[9] = inst_19818__$1);
(statearr_19896[10] = inst_19819__$1);
(statearr_19896[11] = inst_19820__$1);
(statearr_19896[14] = inst_19827);
return statearr_19896;
})();var statearr_19897_19937 = state_19878__$1;(statearr_19897_19937[2] = null);
(statearr_19897_19937[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 11))
{var inst_19817 = (state_19878[8]);var inst_19831 = (state_19878[15]);var inst_19831__$1 = cljs.core.seq.call(null,inst_19817);var state_19878__$1 = (function (){var statearr_19898 = state_19878;(statearr_19898[15] = inst_19831__$1);
return statearr_19898;
})();if(inst_19831__$1)
{var statearr_19899_19938 = state_19878__$1;(statearr_19899_19938[1] = 13);
} else
{var statearr_19900_19939 = state_19878__$1;(statearr_19900_19939[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 12))
{var inst_19851 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19901_19940 = state_19878__$1;(statearr_19901_19940[2] = inst_19851);
(statearr_19901_19940[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 13))
{var inst_19831 = (state_19878[15]);var inst_19833 = cljs.core.chunked_seq_QMARK_.call(null,inst_19831);var state_19878__$1 = state_19878;if(inst_19833)
{var statearr_19902_19941 = state_19878__$1;(statearr_19902_19941[1] = 16);
} else
{var statearr_19903_19942 = state_19878__$1;(statearr_19903_19942[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 14))
{var state_19878__$1 = state_19878;var statearr_19904_19943 = state_19878__$1;(statearr_19904_19943[2] = null);
(statearr_19904_19943[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 15))
{var inst_19849 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19905_19944 = state_19878__$1;(statearr_19905_19944[2] = inst_19849);
(statearr_19905_19944[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 16))
{var inst_19831 = (state_19878[15]);var inst_19835 = cljs.core.chunk_first.call(null,inst_19831);var inst_19836 = cljs.core.chunk_rest.call(null,inst_19831);var inst_19837 = cljs.core.count.call(null,inst_19835);var inst_19817 = inst_19836;var inst_19818 = inst_19835;var inst_19819 = inst_19837;var inst_19820 = 0;var state_19878__$1 = (function (){var statearr_19906 = state_19878;(statearr_19906[8] = inst_19817);
(statearr_19906[9] = inst_19818);
(statearr_19906[10] = inst_19819);
(statearr_19906[11] = inst_19820);
return statearr_19906;
})();var statearr_19907_19945 = state_19878__$1;(statearr_19907_19945[2] = null);
(statearr_19907_19945[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 17))
{var inst_19831 = (state_19878[15]);var inst_19840 = cljs.core.first.call(null,inst_19831);var inst_19841 = cljs.core.async.muxch_STAR_.call(null,inst_19840);var inst_19842 = cljs.core.async.close_BANG_.call(null,inst_19841);var inst_19843 = cljs.core.next.call(null,inst_19831);var inst_19817 = inst_19843;var inst_19818 = null;var inst_19819 = 0;var inst_19820 = 0;var state_19878__$1 = (function (){var statearr_19908 = state_19878;(statearr_19908[8] = inst_19817);
(statearr_19908[9] = inst_19818);
(statearr_19908[10] = inst_19819);
(statearr_19908[11] = inst_19820);
(statearr_19908[16] = inst_19842);
return statearr_19908;
})();var statearr_19909_19946 = state_19878__$1;(statearr_19909_19946[2] = null);
(statearr_19909_19946[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 18))
{var inst_19846 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19910_19947 = state_19878__$1;(statearr_19910_19947[2] = inst_19846);
(statearr_19910_19947[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 19))
{var state_19878__$1 = state_19878;var statearr_19911_19948 = state_19878__$1;(statearr_19911_19948[2] = null);
(statearr_19911_19948[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 20))
{var state_19878__$1 = state_19878;var statearr_19912_19949 = state_19878__$1;(statearr_19912_19949[2] = null);
(statearr_19912_19949[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 21))
{var inst_19871 = (state_19878[2]);var state_19878__$1 = (function (){var statearr_19913 = state_19878;(statearr_19913[17] = inst_19871);
return statearr_19913;
})();var statearr_19914_19950 = state_19878__$1;(statearr_19914_19950[2] = null);
(statearr_19914_19950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 22))
{var inst_19868 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19915_19951 = state_19878__$1;(statearr_19915_19951[2] = inst_19868);
(statearr_19915_19951[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 23))
{var inst_19855 = (state_19878[12]);var inst_19859 = (state_19878[2]);var inst_19860 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19855);var state_19878__$1 = (function (){var statearr_19916 = state_19878;(statearr_19916[18] = inst_19859);
return statearr_19916;
})();var statearr_19917_19952 = state_19878__$1;(statearr_19917_19952[2] = inst_19860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19878__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19879 === 24))
{var inst_19807 = (state_19878[7]);var inst_19857 = (state_19878[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19878,23,Object,null,22);var inst_19864 = cljs.core.async.muxch_STAR_.call(null,inst_19857);var state_19878__$1 = state_19878;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19878__$1,25,inst_19864,inst_19807);
} else
{if((state_val_19879 === 25))
{var inst_19866 = (state_19878[2]);var state_19878__$1 = state_19878;var statearr_19918_19953 = state_19878__$1;(statearr_19918_19953[2] = inst_19866);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19878__$1);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_19922 = (new Array(19));(statearr_19922[0] = state_machine__12457__auto__);
(statearr_19922[1] = 1);
return statearr_19922;
});
var state_machine__12457__auto____1 = (function (state_19878){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_19878);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e19923){if((e19923 instanceof Object))
{var ex__12460__auto__ = e19923;var statearr_19924_19954 = state_19878;(statearr_19924_19954[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19878);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19955 = state_19878;
state_19878 = G__19955;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_19878){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_19878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_19925 = f__12543__auto__.call(null);(statearr_19925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___19926);
return statearr_19925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
,cljs.core.range.call(null,cnt));var c__12542__auto___20092 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_20062){var state_val_20063 = (state_20062[1]);if((state_val_20063 === 1))
{var state_20062__$1 = state_20062;var statearr_20064_20093 = state_20062__$1;(statearr_20064_20093[2] = null);
(statearr_20064_20093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 2))
{var inst_20025 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20026 = 0;var state_20062__$1 = (function (){var statearr_20065 = state_20062;(statearr_20065[7] = inst_20025);
(statearr_20065[8] = inst_20026);
return statearr_20065;
})();var statearr_20066_20094 = state_20062__$1;(statearr_20066_20094[2] = null);
(statearr_20066_20094[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 3))
{var inst_20060 = (state_20062[2]);var state_20062__$1 = state_20062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20062__$1,inst_20060);
} else
{if((state_val_20063 === 4))
{var inst_20026 = (state_20062[8]);var inst_20028 = (inst_20026 < cnt);var state_20062__$1 = state_20062;if(cljs.core.truth_(inst_20028))
{var statearr_20067_20095 = state_20062__$1;(statearr_20067_20095[1] = 6);
} else
{var statearr_20068_20096 = state_20062__$1;(statearr_20068_20096[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 5))
{var inst_20046 = (state_20062[2]);var state_20062__$1 = (function (){var statearr_20069 = state_20062;(statearr_20069[9] = inst_20046);
return statearr_20069;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20062__$1,12,dchan);
} else
{if((state_val_20063 === 6))
{var state_20062__$1 = state_20062;var statearr_20070_20097 = state_20062__$1;(statearr_20070_20097[2] = null);
(statearr_20070_20097[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 7))
{var state_20062__$1 = state_20062;var statearr_20071_20098 = state_20062__$1;(statearr_20071_20098[2] = null);
(statearr_20071_20098[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 8))
{var inst_20044 = (state_20062[2]);var state_20062__$1 = state_20062;var statearr_20072_20099 = state_20062__$1;(statearr_20072_20099[2] = inst_20044);
(statearr_20072_20099[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 9))
{var inst_20026 = (state_20062[8]);var inst_20039 = (state_20062[2]);var inst_20040 = (inst_20026 + 1);var inst_20026__$1 = inst_20040;var state_20062__$1 = (function (){var statearr_20073 = state_20062;(statearr_20073[10] = inst_20039);
(statearr_20073[8] = inst_20026__$1);
return statearr_20073;
})();var statearr_20074_20100 = state_20062__$1;(statearr_20074_20100[2] = null);
(statearr_20074_20100[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 10))
{var inst_20030 = (state_20062[2]);var inst_20031 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20062__$1 = (function (){var statearr_20075 = state_20062;(statearr_20075[11] = inst_20030);
return statearr_20075;
})();var statearr_20076_20101 = state_20062__$1;(statearr_20076_20101[2] = inst_20031);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20062__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 11))
{var inst_20026 = (state_20062[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20062,10,Object,null,9);var inst_20035 = chs__$1.call(null,inst_20026);var inst_20036 = done.call(null,inst_20026);var inst_20037 = cljs.core.async.take_BANG_.call(null,inst_20035,inst_20036);var state_20062__$1 = state_20062;var statearr_20077_20102 = state_20062__$1;(statearr_20077_20102[2] = inst_20037);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20062__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 12))
{var inst_20048 = (state_20062[12]);var inst_20048__$1 = (state_20062[2]);var inst_20049 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20048__$1);var state_20062__$1 = (function (){var statearr_20078 = state_20062;(statearr_20078[12] = inst_20048__$1);
return statearr_20078;
})();if(cljs.core.truth_(inst_20049))
{var statearr_20079_20103 = state_20062__$1;(statearr_20079_20103[1] = 13);
} else
{var statearr_20080_20104 = state_20062__$1;(statearr_20080_20104[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 13))
{var inst_20051 = cljs.core.async.close_BANG_.call(null,out);var state_20062__$1 = state_20062;var statearr_20081_20105 = state_20062__$1;(statearr_20081_20105[2] = inst_20051);
(statearr_20081_20105[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 14))
{var inst_20048 = (state_20062[12]);var inst_20053 = cljs.core.apply.call(null,f,inst_20048);var state_20062__$1 = state_20062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20062__$1,16,out,inst_20053);
} else
{if((state_val_20063 === 15))
{var inst_20058 = (state_20062[2]);var state_20062__$1 = state_20062;var statearr_20082_20106 = state_20062__$1;(statearr_20082_20106[2] = inst_20058);
(statearr_20082_20106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20063 === 16))
{var inst_20055 = (state_20062[2]);var state_20062__$1 = (function (){var statearr_20083 = state_20062;(statearr_20083[13] = inst_20055);
return statearr_20083;
})();var statearr_20084_20107 = state_20062__$1;(statearr_20084_20107[2] = null);
(statearr_20084_20107[1] = 2);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_20088 = (new Array(14));(statearr_20088[0] = state_machine__12457__auto__);
(statearr_20088[1] = 1);
return statearr_20088;
});
var state_machine__12457__auto____1 = (function (state_20062){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_20062);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e20089){if((e20089 instanceof Object))
{var ex__12460__auto__ = e20089;var statearr_20090_20108 = state_20062;(statearr_20090_20108[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20062);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20109 = state_20062;
state_20062 = G__20109;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_20062){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_20062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_20091 = f__12543__auto__.call(null);(statearr_20091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___20092);
return statearr_20091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___20217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_20193){var state_val_20194 = (state_20193[1]);if((state_val_20194 === 1))
{var inst_20164 = cljs.core.vec.call(null,chs);var inst_20165 = inst_20164;var state_20193__$1 = (function (){var statearr_20195 = state_20193;(statearr_20195[7] = inst_20165);
return statearr_20195;
})();var statearr_20196_20218 = state_20193__$1;(statearr_20196_20218[2] = null);
(statearr_20196_20218[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 2))
{var inst_20165 = (state_20193[7]);var inst_20167 = cljs.core.count.call(null,inst_20165);var inst_20168 = (inst_20167 > 0);var state_20193__$1 = state_20193;if(cljs.core.truth_(inst_20168))
{var statearr_20197_20219 = state_20193__$1;(statearr_20197_20219[1] = 4);
} else
{var statearr_20198_20220 = state_20193__$1;(statearr_20198_20220[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 3))
{var inst_20191 = (state_20193[2]);var state_20193__$1 = state_20193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20193__$1,inst_20191);
} else
{if((state_val_20194 === 4))
{var inst_20165 = (state_20193[7]);var state_20193__$1 = state_20193;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20193__$1,7,inst_20165);
} else
{if((state_val_20194 === 5))
{var inst_20187 = cljs.core.async.close_BANG_.call(null,out);var state_20193__$1 = state_20193;var statearr_20199_20221 = state_20193__$1;(statearr_20199_20221[2] = inst_20187);
(statearr_20199_20221[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 6))
{var inst_20189 = (state_20193[2]);var state_20193__$1 = state_20193;var statearr_20200_20222 = state_20193__$1;(statearr_20200_20222[2] = inst_20189);
(statearr_20200_20222[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 7))
{var inst_20173 = (state_20193[8]);var inst_20172 = (state_20193[9]);var inst_20172__$1 = (state_20193[2]);var inst_20173__$1 = cljs.core.nth.call(null,inst_20172__$1,0,null);var inst_20174 = cljs.core.nth.call(null,inst_20172__$1,1,null);var inst_20175 = (inst_20173__$1 == null);var state_20193__$1 = (function (){var statearr_20201 = state_20193;(statearr_20201[8] = inst_20173__$1);
(statearr_20201[10] = inst_20174);
(statearr_20201[9] = inst_20172__$1);
return statearr_20201;
})();if(cljs.core.truth_(inst_20175))
{var statearr_20202_20223 = state_20193__$1;(statearr_20202_20223[1] = 8);
} else
{var statearr_20203_20224 = state_20193__$1;(statearr_20203_20224[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 8))
{var inst_20173 = (state_20193[8]);var inst_20174 = (state_20193[10]);var inst_20172 = (state_20193[9]);var inst_20165 = (state_20193[7]);var inst_20177 = (function (){var c = inst_20174;var v = inst_20173;var vec__20170 = inst_20172;var cs = inst_20165;return ((function (c,v,vec__20170,cs,inst_20173,inst_20174,inst_20172,inst_20165,state_val_20194){
return (function (p1__20110_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20110_SHARP_);
});
;})(c,v,vec__20170,cs,inst_20173,inst_20174,inst_20172,inst_20165,state_val_20194))
})();var inst_20178 = cljs.core.filterv.call(null,inst_20177,inst_20165);var inst_20165__$1 = inst_20178;var state_20193__$1 = (function (){var statearr_20204 = state_20193;(statearr_20204[7] = inst_20165__$1);
return statearr_20204;
})();var statearr_20205_20225 = state_20193__$1;(statearr_20205_20225[2] = null);
(statearr_20205_20225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 9))
{var inst_20173 = (state_20193[8]);var state_20193__$1 = state_20193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20193__$1,11,out,inst_20173);
} else
{if((state_val_20194 === 10))
{var inst_20185 = (state_20193[2]);var state_20193__$1 = state_20193;var statearr_20207_20226 = state_20193__$1;(statearr_20207_20226[2] = inst_20185);
(statearr_20207_20226[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20194 === 11))
{var inst_20165 = (state_20193[7]);var inst_20182 = (state_20193[2]);var tmp20206 = inst_20165;var inst_20165__$1 = tmp20206;var state_20193__$1 = (function (){var statearr_20208 = state_20193;(statearr_20208[7] = inst_20165__$1);
(statearr_20208[11] = inst_20182);
return statearr_20208;
})();var statearr_20209_20227 = state_20193__$1;(statearr_20209_20227[2] = null);
(statearr_20209_20227[1] = 2);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_20213 = (new Array(12));(statearr_20213[0] = state_machine__12457__auto__);
(statearr_20213[1] = 1);
return statearr_20213;
});
var state_machine__12457__auto____1 = (function (state_20193){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_20193);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e20214){if((e20214 instanceof Object))
{var ex__12460__auto__ = e20214;var statearr_20215_20228 = state_20193;(statearr_20215_20228[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20229 = state_20193;
state_20193 = G__20229;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_20193){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_20193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_20216 = f__12543__auto__.call(null);(statearr_20216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___20217);
return statearr_20216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___20322 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_20299){var state_val_20300 = (state_20299[1]);if((state_val_20300 === 1))
{var inst_20276 = 0;var state_20299__$1 = (function (){var statearr_20301 = state_20299;(statearr_20301[7] = inst_20276);
return statearr_20301;
})();var statearr_20302_20323 = state_20299__$1;(statearr_20302_20323[2] = null);
(statearr_20302_20323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 2))
{var inst_20276 = (state_20299[7]);var inst_20278 = (inst_20276 < n);var state_20299__$1 = state_20299;if(cljs.core.truth_(inst_20278))
{var statearr_20303_20324 = state_20299__$1;(statearr_20303_20324[1] = 4);
} else
{var statearr_20304_20325 = state_20299__$1;(statearr_20304_20325[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 3))
{var inst_20296 = (state_20299[2]);var inst_20297 = cljs.core.async.close_BANG_.call(null,out);var state_20299__$1 = (function (){var statearr_20305 = state_20299;(statearr_20305[8] = inst_20296);
return statearr_20305;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20299__$1,inst_20297);
} else
{if((state_val_20300 === 4))
{var state_20299__$1 = state_20299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,7,ch);
} else
{if((state_val_20300 === 5))
{var state_20299__$1 = state_20299;var statearr_20306_20326 = state_20299__$1;(statearr_20306_20326[2] = null);
(statearr_20306_20326[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 6))
{var inst_20294 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20307_20327 = state_20299__$1;(statearr_20307_20327[2] = inst_20294);
(statearr_20307_20327[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 7))
{var inst_20281 = (state_20299[9]);var inst_20281__$1 = (state_20299[2]);var inst_20282 = (inst_20281__$1 == null);var inst_20283 = cljs.core.not.call(null,inst_20282);var state_20299__$1 = (function (){var statearr_20308 = state_20299;(statearr_20308[9] = inst_20281__$1);
return statearr_20308;
})();if(inst_20283)
{var statearr_20309_20328 = state_20299__$1;(statearr_20309_20328[1] = 8);
} else
{var statearr_20310_20329 = state_20299__$1;(statearr_20310_20329[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 8))
{var inst_20281 = (state_20299[9]);var state_20299__$1 = state_20299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20299__$1,11,out,inst_20281);
} else
{if((state_val_20300 === 9))
{var state_20299__$1 = state_20299;var statearr_20311_20330 = state_20299__$1;(statearr_20311_20330[2] = null);
(statearr_20311_20330[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 10))
{var inst_20291 = (state_20299[2]);var state_20299__$1 = state_20299;var statearr_20312_20331 = state_20299__$1;(statearr_20312_20331[2] = inst_20291);
(statearr_20312_20331[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20300 === 11))
{var inst_20276 = (state_20299[7]);var inst_20286 = (state_20299[2]);var inst_20287 = (inst_20276 + 1);var inst_20276__$1 = inst_20287;var state_20299__$1 = (function (){var statearr_20313 = state_20299;(statearr_20313[10] = inst_20286);
(statearr_20313[7] = inst_20276__$1);
return statearr_20313;
})();var statearr_20314_20332 = state_20299__$1;(statearr_20314_20332[2] = null);
(statearr_20314_20332[1] = 2);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_20318 = (new Array(11));(statearr_20318[0] = state_machine__12457__auto__);
(statearr_20318[1] = 1);
return statearr_20318;
});
var state_machine__12457__auto____1 = (function (state_20299){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_20299);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e20319){if((e20319 instanceof Object))
{var ex__12460__auto__ = e20319;var statearr_20320_20333 = state_20299;(statearr_20320_20333[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20334 = state_20299;
state_20299 = G__20334;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_20299){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_20299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_20321 = f__12543__auto__.call(null);(statearr_20321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___20322);
return statearr_20321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___20431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_20406){var state_val_20407 = (state_20406[1]);if((state_val_20407 === 1))
{var inst_20383 = null;var state_20406__$1 = (function (){var statearr_20408 = state_20406;(statearr_20408[7] = inst_20383);
return statearr_20408;
})();var statearr_20409_20432 = state_20406__$1;(statearr_20409_20432[2] = null);
(statearr_20409_20432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 2))
{var state_20406__$1 = state_20406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20406__$1,4,ch);
} else
{if((state_val_20407 === 3))
{var inst_20403 = (state_20406[2]);var inst_20404 = cljs.core.async.close_BANG_.call(null,out);var state_20406__$1 = (function (){var statearr_20410 = state_20406;(statearr_20410[8] = inst_20403);
return statearr_20410;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20406__$1,inst_20404);
} else
{if((state_val_20407 === 4))
{var inst_20386 = (state_20406[9]);var inst_20386__$1 = (state_20406[2]);var inst_20387 = (inst_20386__$1 == null);var inst_20388 = cljs.core.not.call(null,inst_20387);var state_20406__$1 = (function (){var statearr_20411 = state_20406;(statearr_20411[9] = inst_20386__$1);
return statearr_20411;
})();if(inst_20388)
{var statearr_20412_20433 = state_20406__$1;(statearr_20412_20433[1] = 5);
} else
{var statearr_20413_20434 = state_20406__$1;(statearr_20413_20434[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 5))
{var inst_20383 = (state_20406[7]);var inst_20386 = (state_20406[9]);var inst_20390 = cljs.core._EQ_.call(null,inst_20386,inst_20383);var state_20406__$1 = state_20406;if(inst_20390)
{var statearr_20414_20435 = state_20406__$1;(statearr_20414_20435[1] = 8);
} else
{var statearr_20415_20436 = state_20406__$1;(statearr_20415_20436[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 6))
{var state_20406__$1 = state_20406;var statearr_20417_20437 = state_20406__$1;(statearr_20417_20437[2] = null);
(statearr_20417_20437[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 7))
{var inst_20401 = (state_20406[2]);var state_20406__$1 = state_20406;var statearr_20418_20438 = state_20406__$1;(statearr_20418_20438[2] = inst_20401);
(statearr_20418_20438[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 8))
{var inst_20383 = (state_20406[7]);var tmp20416 = inst_20383;var inst_20383__$1 = tmp20416;var state_20406__$1 = (function (){var statearr_20419 = state_20406;(statearr_20419[7] = inst_20383__$1);
return statearr_20419;
})();var statearr_20420_20439 = state_20406__$1;(statearr_20420_20439[2] = null);
(statearr_20420_20439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 9))
{var inst_20386 = (state_20406[9]);var state_20406__$1 = state_20406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20406__$1,11,out,inst_20386);
} else
{if((state_val_20407 === 10))
{var inst_20398 = (state_20406[2]);var state_20406__$1 = state_20406;var statearr_20421_20440 = state_20406__$1;(statearr_20421_20440[2] = inst_20398);
(statearr_20421_20440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20407 === 11))
{var inst_20386 = (state_20406[9]);var inst_20395 = (state_20406[2]);var inst_20383 = inst_20386;var state_20406__$1 = (function (){var statearr_20422 = state_20406;(statearr_20422[7] = inst_20383);
(statearr_20422[10] = inst_20395);
return statearr_20422;
})();var statearr_20423_20441 = state_20406__$1;(statearr_20423_20441[2] = null);
(statearr_20423_20441[1] = 2);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_20427 = (new Array(11));(statearr_20427[0] = state_machine__12457__auto__);
(statearr_20427[1] = 1);
return statearr_20427;
});
var state_machine__12457__auto____1 = (function (state_20406){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_20406);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e20428){if((e20428 instanceof Object))
{var ex__12460__auto__ = e20428;var statearr_20429_20442 = state_20406;(statearr_20429_20442[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20443 = state_20406;
state_20406 = G__20443;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_20406){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_20406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_20430 = f__12543__auto__.call(null);(statearr_20430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___20431);
return statearr_20430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___20578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_20548){var state_val_20549 = (state_20548[1]);if((state_val_20549 === 1))
{var inst_20511 = (new Array(n));var inst_20512 = inst_20511;var inst_20513 = 0;var state_20548__$1 = (function (){var statearr_20550 = state_20548;(statearr_20550[7] = inst_20512);
(statearr_20550[8] = inst_20513);
return statearr_20550;
})();var statearr_20551_20579 = state_20548__$1;(statearr_20551_20579[2] = null);
(statearr_20551_20579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 2))
{var state_20548__$1 = state_20548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20548__$1,4,ch);
} else
{if((state_val_20549 === 3))
{var inst_20546 = (state_20548[2]);var state_20548__$1 = state_20548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20548__$1,inst_20546);
} else
{if((state_val_20549 === 4))
{var inst_20516 = (state_20548[9]);var inst_20516__$1 = (state_20548[2]);var inst_20517 = (inst_20516__$1 == null);var inst_20518 = cljs.core.not.call(null,inst_20517);var state_20548__$1 = (function (){var statearr_20552 = state_20548;(statearr_20552[9] = inst_20516__$1);
return statearr_20552;
})();if(inst_20518)
{var statearr_20553_20580 = state_20548__$1;(statearr_20553_20580[1] = 5);
} else
{var statearr_20554_20581 = state_20548__$1;(statearr_20554_20581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 5))
{var inst_20521 = (state_20548[10]);var inst_20512 = (state_20548[7]);var inst_20513 = (state_20548[8]);var inst_20516 = (state_20548[9]);var inst_20520 = (inst_20512[inst_20513] = inst_20516);var inst_20521__$1 = (inst_20513 + 1);var inst_20522 = (inst_20521__$1 < n);var state_20548__$1 = (function (){var statearr_20555 = state_20548;(statearr_20555[11] = inst_20520);
(statearr_20555[10] = inst_20521__$1);
return statearr_20555;
})();if(cljs.core.truth_(inst_20522))
{var statearr_20556_20582 = state_20548__$1;(statearr_20556_20582[1] = 8);
} else
{var statearr_20557_20583 = state_20548__$1;(statearr_20557_20583[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 6))
{var inst_20513 = (state_20548[8]);var inst_20534 = (inst_20513 > 0);var state_20548__$1 = state_20548;if(cljs.core.truth_(inst_20534))
{var statearr_20559_20584 = state_20548__$1;(statearr_20559_20584[1] = 12);
} else
{var statearr_20560_20585 = state_20548__$1;(statearr_20560_20585[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 7))
{var inst_20544 = (state_20548[2]);var state_20548__$1 = state_20548;var statearr_20561_20586 = state_20548__$1;(statearr_20561_20586[2] = inst_20544);
(statearr_20561_20586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 8))
{var inst_20521 = (state_20548[10]);var inst_20512 = (state_20548[7]);var tmp20558 = inst_20512;var inst_20512__$1 = tmp20558;var inst_20513 = inst_20521;var state_20548__$1 = (function (){var statearr_20562 = state_20548;(statearr_20562[7] = inst_20512__$1);
(statearr_20562[8] = inst_20513);
return statearr_20562;
})();var statearr_20563_20587 = state_20548__$1;(statearr_20563_20587[2] = null);
(statearr_20563_20587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 9))
{var inst_20512 = (state_20548[7]);var inst_20526 = cljs.core.vec.call(null,inst_20512);var state_20548__$1 = state_20548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20548__$1,11,out,inst_20526);
} else
{if((state_val_20549 === 10))
{var inst_20532 = (state_20548[2]);var state_20548__$1 = state_20548;var statearr_20564_20588 = state_20548__$1;(statearr_20564_20588[2] = inst_20532);
(statearr_20564_20588[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 11))
{var inst_20528 = (state_20548[2]);var inst_20529 = (new Array(n));var inst_20512 = inst_20529;var inst_20513 = 0;var state_20548__$1 = (function (){var statearr_20565 = state_20548;(statearr_20565[7] = inst_20512);
(statearr_20565[8] = inst_20513);
(statearr_20565[12] = inst_20528);
return statearr_20565;
})();var statearr_20566_20589 = state_20548__$1;(statearr_20566_20589[2] = null);
(statearr_20566_20589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 12))
{var inst_20512 = (state_20548[7]);var inst_20536 = cljs.core.vec.call(null,inst_20512);var state_20548__$1 = state_20548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20548__$1,15,out,inst_20536);
} else
{if((state_val_20549 === 13))
{var state_20548__$1 = state_20548;var statearr_20567_20590 = state_20548__$1;(statearr_20567_20590[2] = null);
(statearr_20567_20590[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 14))
{var inst_20541 = (state_20548[2]);var inst_20542 = cljs.core.async.close_BANG_.call(null,out);var state_20548__$1 = (function (){var statearr_20568 = state_20548;(statearr_20568[13] = inst_20541);
return statearr_20568;
})();var statearr_20569_20591 = state_20548__$1;(statearr_20569_20591[2] = inst_20542);
(statearr_20569_20591[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20549 === 15))
{var inst_20538 = (state_20548[2]);var state_20548__$1 = state_20548;var statearr_20570_20592 = state_20548__$1;(statearr_20570_20592[2] = inst_20538);
(statearr_20570_20592[1] = 14);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_20574 = (new Array(14));(statearr_20574[0] = state_machine__12457__auto__);
(statearr_20574[1] = 1);
return statearr_20574;
});
var state_machine__12457__auto____1 = (function (state_20548){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_20548);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e20575){if((e20575 instanceof Object))
{var ex__12460__auto__ = e20575;var statearr_20576_20593 = state_20548;(statearr_20576_20593[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20548);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20594 = state_20548;
state_20548 = G__20594;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_20548){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_20548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_20577 = f__12543__auto__.call(null);(statearr_20577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___20578);
return statearr_20577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___20737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_20707){var state_val_20708 = (state_20707[1]);if((state_val_20708 === 1))
{var inst_20666 = (new Array(0));var inst_20667 = inst_20666;var inst_20668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_20707__$1 = (function (){var statearr_20709 = state_20707;(statearr_20709[7] = inst_20668);
(statearr_20709[8] = inst_20667);
return statearr_20709;
})();var statearr_20710_20738 = state_20707__$1;(statearr_20710_20738[2] = null);
(statearr_20710_20738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 2))
{var state_20707__$1 = state_20707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20707__$1,4,ch);
} else
{if((state_val_20708 === 3))
{var inst_20705 = (state_20707[2]);var state_20707__$1 = state_20707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20707__$1,inst_20705);
} else
{if((state_val_20708 === 4))
{var inst_20671 = (state_20707[9]);var inst_20671__$1 = (state_20707[2]);var inst_20672 = (inst_20671__$1 == null);var inst_20673 = cljs.core.not.call(null,inst_20672);var state_20707__$1 = (function (){var statearr_20711 = state_20707;(statearr_20711[9] = inst_20671__$1);
return statearr_20711;
})();if(inst_20673)
{var statearr_20712_20739 = state_20707__$1;(statearr_20712_20739[1] = 5);
} else
{var statearr_20713_20740 = state_20707__$1;(statearr_20713_20740[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 5))
{var inst_20668 = (state_20707[7]);var inst_20675 = (state_20707[10]);var inst_20671 = (state_20707[9]);var inst_20675__$1 = f.call(null,inst_20671);var inst_20676 = cljs.core._EQ_.call(null,inst_20675__$1,inst_20668);var inst_20677 = cljs.core.keyword_identical_QMARK_.call(null,inst_20668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_20678 = (inst_20676) || (inst_20677);var state_20707__$1 = (function (){var statearr_20714 = state_20707;(statearr_20714[10] = inst_20675__$1);
return statearr_20714;
})();if(cljs.core.truth_(inst_20678))
{var statearr_20715_20741 = state_20707__$1;(statearr_20715_20741[1] = 8);
} else
{var statearr_20716_20742 = state_20707__$1;(statearr_20716_20742[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 6))
{var inst_20667 = (state_20707[8]);var inst_20692 = inst_20667.length;var inst_20693 = (inst_20692 > 0);var state_20707__$1 = state_20707;if(cljs.core.truth_(inst_20693))
{var statearr_20718_20743 = state_20707__$1;(statearr_20718_20743[1] = 12);
} else
{var statearr_20719_20744 = state_20707__$1;(statearr_20719_20744[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 7))
{var inst_20703 = (state_20707[2]);var state_20707__$1 = state_20707;var statearr_20720_20745 = state_20707__$1;(statearr_20720_20745[2] = inst_20703);
(statearr_20720_20745[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 8))
{var inst_20667 = (state_20707[8]);var inst_20675 = (state_20707[10]);var inst_20671 = (state_20707[9]);var inst_20680 = inst_20667.push(inst_20671);var tmp20717 = inst_20667;var inst_20667__$1 = tmp20717;var inst_20668 = inst_20675;var state_20707__$1 = (function (){var statearr_20721 = state_20707;(statearr_20721[11] = inst_20680);
(statearr_20721[7] = inst_20668);
(statearr_20721[8] = inst_20667__$1);
return statearr_20721;
})();var statearr_20722_20746 = state_20707__$1;(statearr_20722_20746[2] = null);
(statearr_20722_20746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 9))
{var inst_20667 = (state_20707[8]);var inst_20683 = cljs.core.vec.call(null,inst_20667);var state_20707__$1 = state_20707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20707__$1,11,out,inst_20683);
} else
{if((state_val_20708 === 10))
{var inst_20690 = (state_20707[2]);var state_20707__$1 = state_20707;var statearr_20723_20747 = state_20707__$1;(statearr_20723_20747[2] = inst_20690);
(statearr_20723_20747[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 11))
{var inst_20675 = (state_20707[10]);var inst_20671 = (state_20707[9]);var inst_20685 = (state_20707[2]);var inst_20686 = (new Array(0));var inst_20687 = inst_20686.push(inst_20671);var inst_20667 = inst_20686;var inst_20668 = inst_20675;var state_20707__$1 = (function (){var statearr_20724 = state_20707;(statearr_20724[12] = inst_20685);
(statearr_20724[13] = inst_20687);
(statearr_20724[7] = inst_20668);
(statearr_20724[8] = inst_20667);
return statearr_20724;
})();var statearr_20725_20748 = state_20707__$1;(statearr_20725_20748[2] = null);
(statearr_20725_20748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 12))
{var inst_20667 = (state_20707[8]);var inst_20695 = cljs.core.vec.call(null,inst_20667);var state_20707__$1 = state_20707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20707__$1,15,out,inst_20695);
} else
{if((state_val_20708 === 13))
{var state_20707__$1 = state_20707;var statearr_20726_20749 = state_20707__$1;(statearr_20726_20749[2] = null);
(statearr_20726_20749[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 14))
{var inst_20700 = (state_20707[2]);var inst_20701 = cljs.core.async.close_BANG_.call(null,out);var state_20707__$1 = (function (){var statearr_20727 = state_20707;(statearr_20727[14] = inst_20700);
return statearr_20727;
})();var statearr_20728_20750 = state_20707__$1;(statearr_20728_20750[2] = inst_20701);
(statearr_20728_20750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20708 === 15))
{var inst_20697 = (state_20707[2]);var state_20707__$1 = state_20707;var statearr_20729_20751 = state_20707__$1;(statearr_20729_20751[2] = inst_20697);
(statearr_20729_20751[1] = 14);
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
});return ((function (switch__12456__auto__){
return (function() {
var state_machine__12457__auto__ = null;
var state_machine__12457__auto____0 = (function (){var statearr_20733 = (new Array(15));(statearr_20733[0] = state_machine__12457__auto__);
(statearr_20733[1] = 1);
return statearr_20733;
});
var state_machine__12457__auto____1 = (function (state_20707){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_20707);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e20734){if((e20734 instanceof Object))
{var ex__12460__auto__ = e20734;var statearr_20735_20752 = state_20707;(statearr_20735_20752[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20753 = state_20707;
state_20707 = G__20753;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_20707){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_20707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_20736 = f__12543__auto__.call(null);(statearr_20736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___20737);
return statearr_20736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12544__auto__);
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
