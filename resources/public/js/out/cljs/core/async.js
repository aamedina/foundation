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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22829 = (function (f,fn_handler,meta22830){
this.f = f;
this.fn_handler = fn_handler;
this.meta22830 = meta22830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22829.cljs$lang$type = true;
cljs.core.async.t22829.cljs$lang$ctorStr = "cljs.core.async/t22829";
cljs.core.async.t22829.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22829");
});
cljs.core.async.t22829.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22831){var self__ = this;
var _22831__$1 = this;return self__.meta22830;
});
cljs.core.async.t22829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22831,meta22830__$1){var self__ = this;
var _22831__$1 = this;return (new cljs.core.async.t22829(self__.f,self__.fn_handler,meta22830__$1));
});
cljs.core.async.__GT_t22829 = (function __GT_t22829(f__$1,fn_handler__$1,meta22830){return (new cljs.core.async.t22829(f__$1,fn_handler__$1,meta22830));
});
}
return (new cljs.core.async.t22829(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22833 = buff;if(G__22833)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__22833.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22833.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22833);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22833);
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
{var val_22834 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_22834);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_22834);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8186__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9026__auto___22835 = n;var x_22836 = 0;while(true){
if((x_22836 < n__9026__auto___22835))
{(a[x_22836] = 0);
{
var G__22837 = (x_22836 + 1);
x_22836 = G__22837;
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
var G__22838 = (i + 1);
i = G__22838;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t22842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22842 = (function (flag,alt_flag,meta22843){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22843 = meta22843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22842.cljs$lang$type = true;
cljs.core.async.t22842.cljs$lang$ctorStr = "cljs.core.async/t22842";
cljs.core.async.t22842.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22842");
});
cljs.core.async.t22842.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t22842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t22842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22844){var self__ = this;
var _22844__$1 = this;return self__.meta22843;
});
cljs.core.async.t22842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22844,meta22843__$1){var self__ = this;
var _22844__$1 = this;return (new cljs.core.async.t22842(self__.flag,self__.alt_flag,meta22843__$1));
});
cljs.core.async.__GT_t22842 = (function __GT_t22842(flag__$1,alt_flag__$1,meta22843){return (new cljs.core.async.t22842(flag__$1,alt_flag__$1,meta22843));
});
}
return (new cljs.core.async.t22842(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22848 = (function (cb,flag,alt_handler,meta22849){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22849 = meta22849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22848.cljs$lang$type = true;
cljs.core.async.t22848.cljs$lang$ctorStr = "cljs.core.async/t22848";
cljs.core.async.t22848.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22848");
});
cljs.core.async.t22848.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t22848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t22848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22850){var self__ = this;
var _22850__$1 = this;return self__.meta22849;
});
cljs.core.async.t22848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22850,meta22849__$1){var self__ = this;
var _22850__$1 = this;return (new cljs.core.async.t22848(self__.cb,self__.flag,self__.alt_handler,meta22849__$1));
});
cljs.core.async.__GT_t22848 = (function __GT_t22848(cb__$1,flag__$1,alt_handler__$1,meta22849){return (new cljs.core.async.t22848(cb__$1,flag__$1,alt_handler__$1,meta22849));
});
}
return (new cljs.core.async.t22848(cb,flag,alt_handler,null));
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
return (function (p1__22851_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22851_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8198__auto__ = wport;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22852 = (i + 1);
i = G__22852;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8198__auto__ = ret;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8186__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8186__auto__;
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
var alts_BANG___delegate = function (ports,p__22853){var map__22855 = p__22853;var map__22855__$1 = ((cljs.core.seq_QMARK_.call(null,map__22855))?cljs.core.apply.call(null,cljs.core.hash_map,map__22855):map__22855);var opts = map__22855__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22853 = null;if (arguments.length > 1) {
  p__22853 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22853);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22856){
var ports = cljs.core.first(arglist__22856);
var p__22853 = cljs.core.rest(arglist__22856);
return alts_BANG___delegate(ports,p__22853);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22864 = (function (ch,f,map_LT_,meta22865){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22865 = meta22865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22864.cljs$lang$type = true;
cljs.core.async.t22864.cljs$lang$ctorStr = "cljs.core.async/t22864";
cljs.core.async.t22864.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22864");
});
cljs.core.async.t22864.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t22864.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t22867 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22867 = (function (fn1,_,meta22865,ch,f,map_LT_,meta22868){
this.fn1 = fn1;
this._ = _;
this.meta22865 = meta22865;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22868 = meta22868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22867.cljs$lang$type = true;
cljs.core.async.t22867.cljs$lang$ctorStr = "cljs.core.async/t22867";
cljs.core.async.t22867.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22867");
});
cljs.core.async.t22867.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t22867.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t22867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__22857_SHARP_){return f1.call(null,(((p1__22857_SHARP_ == null))?null:self__.f.call(null,p1__22857_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t22867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22869){var self__ = this;
var _22869__$1 = this;return self__.meta22868;
});
cljs.core.async.t22867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22869,meta22868__$1){var self__ = this;
var _22869__$1 = this;return (new cljs.core.async.t22867(self__.fn1,self__._,self__.meta22865,self__.ch,self__.f,self__.map_LT_,meta22868__$1));
});
cljs.core.async.__GT_t22867 = (function __GT_t22867(fn1__$1,___$2,meta22865__$1,ch__$2,f__$2,map_LT___$2,meta22868){return (new cljs.core.async.t22867(fn1__$1,___$2,meta22865__$1,ch__$2,f__$2,map_LT___$2,meta22868));
});
}
return (new cljs.core.async.t22867(fn1,___$1,self__.meta22865,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8186__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t22864.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22866){var self__ = this;
var _22866__$1 = this;return self__.meta22865;
});
cljs.core.async.t22864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22866,meta22865__$1){var self__ = this;
var _22866__$1 = this;return (new cljs.core.async.t22864(self__.ch,self__.f,self__.map_LT_,meta22865__$1));
});
cljs.core.async.__GT_t22864 = (function __GT_t22864(ch__$1,f__$1,map_LT___$1,meta22865){return (new cljs.core.async.t22864(ch__$1,f__$1,map_LT___$1,meta22865));
});
}
return (new cljs.core.async.t22864(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22873 = (function (ch,f,map_GT_,meta22874){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22874 = meta22874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22873.cljs$lang$type = true;
cljs.core.async.t22873.cljs$lang$ctorStr = "cljs.core.async/t22873";
cljs.core.async.t22873.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22873");
});
cljs.core.async.t22873.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t22873.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22873.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22875){var self__ = this;
var _22875__$1 = this;return self__.meta22874;
});
cljs.core.async.t22873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22875,meta22874__$1){var self__ = this;
var _22875__$1 = this;return (new cljs.core.async.t22873(self__.ch,self__.f,self__.map_GT_,meta22874__$1));
});
cljs.core.async.__GT_t22873 = (function __GT_t22873(ch__$1,f__$1,map_GT___$1,meta22874){return (new cljs.core.async.t22873(ch__$1,f__$1,map_GT___$1,meta22874));
});
}
return (new cljs.core.async.t22873(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22879 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22879 = (function (ch,p,filter_GT_,meta22880){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22880 = meta22880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22879.cljs$lang$type = true;
cljs.core.async.t22879.cljs$lang$ctorStr = "cljs.core.async/t22879";
cljs.core.async.t22879.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22879");
});
cljs.core.async.t22879.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t22879.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22879.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22881){var self__ = this;
var _22881__$1 = this;return self__.meta22880;
});
cljs.core.async.t22879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22881,meta22880__$1){var self__ = this;
var _22881__$1 = this;return (new cljs.core.async.t22879(self__.ch,self__.p,self__.filter_GT_,meta22880__$1));
});
cljs.core.async.__GT_t22879 = (function __GT_t22879(ch__$1,p__$1,filter_GT___$1,meta22880){return (new cljs.core.async.t22879(ch__$1,p__$1,filter_GT___$1,meta22880));
});
}
return (new cljs.core.async.t22879(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15177__auto___22964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_22943){var state_val_22944 = (state_22943[1]);if((state_val_22944 === 1))
{var state_22943__$1 = state_22943;var statearr_22945_22965 = state_22943__$1;(statearr_22945_22965[2] = null);
(statearr_22945_22965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 2))
{var state_22943__$1 = state_22943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22943__$1,4,ch);
} else
{if((state_val_22944 === 3))
{var inst_22941 = (state_22943[2]);var state_22943__$1 = state_22943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22943__$1,inst_22941);
} else
{if((state_val_22944 === 4))
{var inst_22925 = (state_22943[7]);var inst_22925__$1 = (state_22943[2]);var inst_22926 = (inst_22925__$1 == null);var state_22943__$1 = (function (){var statearr_22946 = state_22943;(statearr_22946[7] = inst_22925__$1);
return statearr_22946;
})();if(cljs.core.truth_(inst_22926))
{var statearr_22947_22966 = state_22943__$1;(statearr_22947_22966[1] = 5);
} else
{var statearr_22948_22967 = state_22943__$1;(statearr_22948_22967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 5))
{var inst_22928 = cljs.core.async.close_BANG_.call(null,out);var state_22943__$1 = state_22943;var statearr_22949_22968 = state_22943__$1;(statearr_22949_22968[2] = inst_22928);
(statearr_22949_22968[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 6))
{var inst_22925 = (state_22943[7]);var inst_22930 = p.call(null,inst_22925);var state_22943__$1 = state_22943;if(cljs.core.truth_(inst_22930))
{var statearr_22950_22969 = state_22943__$1;(statearr_22950_22969[1] = 8);
} else
{var statearr_22951_22970 = state_22943__$1;(statearr_22951_22970[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 7))
{var inst_22939 = (state_22943[2]);var state_22943__$1 = state_22943;var statearr_22952_22971 = state_22943__$1;(statearr_22952_22971[2] = inst_22939);
(statearr_22952_22971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 8))
{var inst_22925 = (state_22943[7]);var state_22943__$1 = state_22943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22943__$1,11,out,inst_22925);
} else
{if((state_val_22944 === 9))
{var state_22943__$1 = state_22943;var statearr_22953_22972 = state_22943__$1;(statearr_22953_22972[2] = null);
(statearr_22953_22972[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 10))
{var inst_22936 = (state_22943[2]);var state_22943__$1 = (function (){var statearr_22954 = state_22943;(statearr_22954[8] = inst_22936);
return statearr_22954;
})();var statearr_22955_22973 = state_22943__$1;(statearr_22955_22973[2] = null);
(statearr_22955_22973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22944 === 11))
{var inst_22933 = (state_22943[2]);var state_22943__$1 = state_22943;var statearr_22956_22974 = state_22943__$1;(statearr_22956_22974[2] = inst_22933);
(statearr_22956_22974[1] = 10);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_22960 = [null,null,null,null,null,null,null,null,null];(statearr_22960[0] = state_machine__15108__auto__);
(statearr_22960[1] = 1);
return statearr_22960;
});
var state_machine__15108__auto____1 = (function (state_22943){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_22943);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e22961){if((e22961 instanceof Object))
{var ex__15111__auto__ = e22961;var statearr_22962_22975 = state_22943;(statearr_22962_22975[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22943);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22976 = state_22943;
state_22943 = G__22976;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_22943){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_22943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_22963 = f__15178__auto__.call(null);(statearr_22963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___22964);
return statearr_22963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15177__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_23128){var state_val_23129 = (state_23128[1]);if((state_val_23129 === 1))
{var state_23128__$1 = state_23128;var statearr_23130_23167 = state_23128__$1;(statearr_23130_23167[2] = null);
(statearr_23130_23167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 2))
{var state_23128__$1 = state_23128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23128__$1,4,in$);
} else
{if((state_val_23129 === 3))
{var inst_23126 = (state_23128[2]);var state_23128__$1 = state_23128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23128__$1,inst_23126);
} else
{if((state_val_23129 === 4))
{var inst_23074 = (state_23128[7]);var inst_23074__$1 = (state_23128[2]);var inst_23075 = (inst_23074__$1 == null);var state_23128__$1 = (function (){var statearr_23131 = state_23128;(statearr_23131[7] = inst_23074__$1);
return statearr_23131;
})();if(cljs.core.truth_(inst_23075))
{var statearr_23132_23168 = state_23128__$1;(statearr_23132_23168[1] = 5);
} else
{var statearr_23133_23169 = state_23128__$1;(statearr_23133_23169[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 5))
{var inst_23077 = cljs.core.async.close_BANG_.call(null,out);var state_23128__$1 = state_23128;var statearr_23134_23170 = state_23128__$1;(statearr_23134_23170[2] = inst_23077);
(statearr_23134_23170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 6))
{var inst_23074 = (state_23128[7]);var inst_23079 = f.call(null,inst_23074);var inst_23084 = cljs.core.seq.call(null,inst_23079);var inst_23085 = inst_23084;var inst_23086 = null;var inst_23087 = 0;var inst_23088 = 0;var state_23128__$1 = (function (){var statearr_23135 = state_23128;(statearr_23135[8] = inst_23088);
(statearr_23135[9] = inst_23086);
(statearr_23135[10] = inst_23087);
(statearr_23135[11] = inst_23085);
return statearr_23135;
})();var statearr_23136_23171 = state_23128__$1;(statearr_23136_23171[2] = null);
(statearr_23136_23171[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 7))
{var inst_23124 = (state_23128[2]);var state_23128__$1 = state_23128;var statearr_23137_23172 = state_23128__$1;(statearr_23137_23172[2] = inst_23124);
(statearr_23137_23172[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 8))
{var inst_23088 = (state_23128[8]);var inst_23087 = (state_23128[10]);var inst_23090 = (inst_23088 < inst_23087);var inst_23091 = inst_23090;var state_23128__$1 = state_23128;if(cljs.core.truth_(inst_23091))
{var statearr_23138_23173 = state_23128__$1;(statearr_23138_23173[1] = 10);
} else
{var statearr_23139_23174 = state_23128__$1;(statearr_23139_23174[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 9))
{var inst_23121 = (state_23128[2]);var state_23128__$1 = (function (){var statearr_23140 = state_23128;(statearr_23140[12] = inst_23121);
return statearr_23140;
})();var statearr_23141_23175 = state_23128__$1;(statearr_23141_23175[2] = null);
(statearr_23141_23175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 10))
{var inst_23088 = (state_23128[8]);var inst_23086 = (state_23128[9]);var inst_23093 = cljs.core._nth.call(null,inst_23086,inst_23088);var state_23128__$1 = state_23128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23128__$1,13,out,inst_23093);
} else
{if((state_val_23129 === 11))
{var inst_23085 = (state_23128[11]);var inst_23099 = (state_23128[13]);var inst_23099__$1 = cljs.core.seq.call(null,inst_23085);var state_23128__$1 = (function (){var statearr_23145 = state_23128;(statearr_23145[13] = inst_23099__$1);
return statearr_23145;
})();if(inst_23099__$1)
{var statearr_23146_23176 = state_23128__$1;(statearr_23146_23176[1] = 14);
} else
{var statearr_23147_23177 = state_23128__$1;(statearr_23147_23177[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 12))
{var inst_23119 = (state_23128[2]);var state_23128__$1 = state_23128;var statearr_23148_23178 = state_23128__$1;(statearr_23148_23178[2] = inst_23119);
(statearr_23148_23178[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 13))
{var inst_23088 = (state_23128[8]);var inst_23086 = (state_23128[9]);var inst_23087 = (state_23128[10]);var inst_23085 = (state_23128[11]);var inst_23095 = (state_23128[2]);var inst_23096 = (inst_23088 + 1);var tmp23142 = inst_23086;var tmp23143 = inst_23087;var tmp23144 = inst_23085;var inst_23085__$1 = tmp23144;var inst_23086__$1 = tmp23142;var inst_23087__$1 = tmp23143;var inst_23088__$1 = inst_23096;var state_23128__$1 = (function (){var statearr_23149 = state_23128;(statearr_23149[8] = inst_23088__$1);
(statearr_23149[9] = inst_23086__$1);
(statearr_23149[10] = inst_23087__$1);
(statearr_23149[11] = inst_23085__$1);
(statearr_23149[14] = inst_23095);
return statearr_23149;
})();var statearr_23150_23179 = state_23128__$1;(statearr_23150_23179[2] = null);
(statearr_23150_23179[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 14))
{var inst_23099 = (state_23128[13]);var inst_23101 = cljs.core.chunked_seq_QMARK_.call(null,inst_23099);var state_23128__$1 = state_23128;if(inst_23101)
{var statearr_23151_23180 = state_23128__$1;(statearr_23151_23180[1] = 17);
} else
{var statearr_23152_23181 = state_23128__$1;(statearr_23152_23181[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 15))
{var state_23128__$1 = state_23128;var statearr_23153_23182 = state_23128__$1;(statearr_23153_23182[2] = null);
(statearr_23153_23182[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 16))
{var inst_23117 = (state_23128[2]);var state_23128__$1 = state_23128;var statearr_23154_23183 = state_23128__$1;(statearr_23154_23183[2] = inst_23117);
(statearr_23154_23183[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 17))
{var inst_23099 = (state_23128[13]);var inst_23103 = cljs.core.chunk_first.call(null,inst_23099);var inst_23104 = cljs.core.chunk_rest.call(null,inst_23099);var inst_23105 = cljs.core.count.call(null,inst_23103);var inst_23085 = inst_23104;var inst_23086 = inst_23103;var inst_23087 = inst_23105;var inst_23088 = 0;var state_23128__$1 = (function (){var statearr_23155 = state_23128;(statearr_23155[8] = inst_23088);
(statearr_23155[9] = inst_23086);
(statearr_23155[10] = inst_23087);
(statearr_23155[11] = inst_23085);
return statearr_23155;
})();var statearr_23156_23184 = state_23128__$1;(statearr_23156_23184[2] = null);
(statearr_23156_23184[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 18))
{var inst_23099 = (state_23128[13]);var inst_23108 = cljs.core.first.call(null,inst_23099);var state_23128__$1 = state_23128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23128__$1,20,out,inst_23108);
} else
{if((state_val_23129 === 19))
{var inst_23114 = (state_23128[2]);var state_23128__$1 = state_23128;var statearr_23157_23185 = state_23128__$1;(statearr_23157_23185[2] = inst_23114);
(statearr_23157_23185[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23129 === 20))
{var inst_23099 = (state_23128[13]);var inst_23110 = (state_23128[2]);var inst_23111 = cljs.core.next.call(null,inst_23099);var inst_23085 = inst_23111;var inst_23086 = null;var inst_23087 = 0;var inst_23088 = 0;var state_23128__$1 = (function (){var statearr_23158 = state_23128;(statearr_23158[15] = inst_23110);
(statearr_23158[8] = inst_23088);
(statearr_23158[9] = inst_23086);
(statearr_23158[10] = inst_23087);
(statearr_23158[11] = inst_23085);
return statearr_23158;
})();var statearr_23159_23186 = state_23128__$1;(statearr_23159_23186[2] = null);
(statearr_23159_23186[1] = 8);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_23163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23163[0] = state_machine__15108__auto__);
(statearr_23163[1] = 1);
return statearr_23163;
});
var state_machine__15108__auto____1 = (function (state_23128){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_23128);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e23164){if((e23164 instanceof Object))
{var ex__15111__auto__ = e23164;var statearr_23165_23187 = state_23128;(statearr_23165_23187[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23188 = state_23128;
state_23128 = G__23188;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_23128){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_23128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_23166 = f__15178__auto__.call(null);(statearr_23166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto__);
return statearr_23166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
}));
return c__15177__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__15177__auto___23269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_23248){var state_val_23249 = (state_23248[1]);if((state_val_23249 === 1))
{var state_23248__$1 = state_23248;var statearr_23250_23270 = state_23248__$1;(statearr_23250_23270[2] = null);
(statearr_23250_23270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 2))
{var state_23248__$1 = state_23248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23248__$1,4,from);
} else
{if((state_val_23249 === 3))
{var inst_23246 = (state_23248[2]);var state_23248__$1 = state_23248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23248__$1,inst_23246);
} else
{if((state_val_23249 === 4))
{var inst_23231 = (state_23248[7]);var inst_23231__$1 = (state_23248[2]);var inst_23232 = (inst_23231__$1 == null);var state_23248__$1 = (function (){var statearr_23251 = state_23248;(statearr_23251[7] = inst_23231__$1);
return statearr_23251;
})();if(cljs.core.truth_(inst_23232))
{var statearr_23252_23271 = state_23248__$1;(statearr_23252_23271[1] = 5);
} else
{var statearr_23253_23272 = state_23248__$1;(statearr_23253_23272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 5))
{var state_23248__$1 = state_23248;if(cljs.core.truth_(close_QMARK_))
{var statearr_23254_23273 = state_23248__$1;(statearr_23254_23273[1] = 8);
} else
{var statearr_23255_23274 = state_23248__$1;(statearr_23255_23274[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 6))
{var inst_23231 = (state_23248[7]);var state_23248__$1 = state_23248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23248__$1,11,to,inst_23231);
} else
{if((state_val_23249 === 7))
{var inst_23244 = (state_23248[2]);var state_23248__$1 = state_23248;var statearr_23256_23275 = state_23248__$1;(statearr_23256_23275[2] = inst_23244);
(statearr_23256_23275[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 8))
{var inst_23235 = cljs.core.async.close_BANG_.call(null,to);var state_23248__$1 = state_23248;var statearr_23257_23276 = state_23248__$1;(statearr_23257_23276[2] = inst_23235);
(statearr_23257_23276[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 9))
{var state_23248__$1 = state_23248;var statearr_23258_23277 = state_23248__$1;(statearr_23258_23277[2] = null);
(statearr_23258_23277[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 10))
{var inst_23238 = (state_23248[2]);var state_23248__$1 = state_23248;var statearr_23259_23278 = state_23248__$1;(statearr_23259_23278[2] = inst_23238);
(statearr_23259_23278[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23249 === 11))
{var inst_23241 = (state_23248[2]);var state_23248__$1 = (function (){var statearr_23260 = state_23248;(statearr_23260[8] = inst_23241);
return statearr_23260;
})();var statearr_23261_23279 = state_23248__$1;(statearr_23261_23279[2] = null);
(statearr_23261_23279[1] = 2);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_23265 = [null,null,null,null,null,null,null,null,null];(statearr_23265[0] = state_machine__15108__auto__);
(statearr_23265[1] = 1);
return statearr_23265;
});
var state_machine__15108__auto____1 = (function (state_23248){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_23248);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e23266){if((e23266 instanceof Object))
{var ex__15111__auto__ = e23266;var statearr_23267_23280 = state_23248;(statearr_23267_23280[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23281 = state_23248;
state_23248 = G__23281;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_23248){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_23248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_23268 = f__15178__auto__.call(null);(statearr_23268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___23269);
return statearr_23268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15177__auto___23368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_23346){var state_val_23347 = (state_23346[1]);if((state_val_23347 === 1))
{var state_23346__$1 = state_23346;var statearr_23348_23369 = state_23346__$1;(statearr_23348_23369[2] = null);
(statearr_23348_23369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 2))
{var state_23346__$1 = state_23346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23346__$1,4,ch);
} else
{if((state_val_23347 === 3))
{var inst_23344 = (state_23346[2]);var state_23346__$1 = state_23346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23346__$1,inst_23344);
} else
{if((state_val_23347 === 4))
{var inst_23327 = (state_23346[7]);var inst_23327__$1 = (state_23346[2]);var inst_23328 = (inst_23327__$1 == null);var state_23346__$1 = (function (){var statearr_23349 = state_23346;(statearr_23349[7] = inst_23327__$1);
return statearr_23349;
})();if(cljs.core.truth_(inst_23328))
{var statearr_23350_23370 = state_23346__$1;(statearr_23350_23370[1] = 5);
} else
{var statearr_23351_23371 = state_23346__$1;(statearr_23351_23371[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 5))
{var inst_23330 = cljs.core.async.close_BANG_.call(null,tc);var inst_23331 = cljs.core.async.close_BANG_.call(null,fc);var state_23346__$1 = (function (){var statearr_23352 = state_23346;(statearr_23352[8] = inst_23330);
return statearr_23352;
})();var statearr_23353_23372 = state_23346__$1;(statearr_23353_23372[2] = inst_23331);
(statearr_23353_23372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 6))
{var inst_23327 = (state_23346[7]);var inst_23333 = p.call(null,inst_23327);var state_23346__$1 = state_23346;if(cljs.core.truth_(inst_23333))
{var statearr_23354_23373 = state_23346__$1;(statearr_23354_23373[1] = 9);
} else
{var statearr_23355_23374 = state_23346__$1;(statearr_23355_23374[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 7))
{var inst_23342 = (state_23346[2]);var state_23346__$1 = state_23346;var statearr_23356_23375 = state_23346__$1;(statearr_23356_23375[2] = inst_23342);
(statearr_23356_23375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 8))
{var inst_23339 = (state_23346[2]);var state_23346__$1 = (function (){var statearr_23357 = state_23346;(statearr_23357[9] = inst_23339);
return statearr_23357;
})();var statearr_23358_23376 = state_23346__$1;(statearr_23358_23376[2] = null);
(statearr_23358_23376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 9))
{var state_23346__$1 = state_23346;var statearr_23359_23377 = state_23346__$1;(statearr_23359_23377[2] = tc);
(statearr_23359_23377[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 10))
{var state_23346__$1 = state_23346;var statearr_23360_23378 = state_23346__$1;(statearr_23360_23378[2] = fc);
(statearr_23360_23378[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23347 === 11))
{var inst_23327 = (state_23346[7]);var inst_23337 = (state_23346[2]);var state_23346__$1 = state_23346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23346__$1,8,inst_23337,inst_23327);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_23364 = [null,null,null,null,null,null,null,null,null,null];(statearr_23364[0] = state_machine__15108__auto__);
(statearr_23364[1] = 1);
return statearr_23364;
});
var state_machine__15108__auto____1 = (function (state_23346){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_23346);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e23365){if((e23365 instanceof Object))
{var ex__15111__auto__ = e23365;var statearr_23366_23379 = state_23346;(statearr_23366_23379[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23380 = state_23346;
state_23346 = G__23380;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_23346){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_23346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_23367 = f__15178__auto__.call(null);(statearr_23367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___23368);
return statearr_23367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15177__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_23427){var state_val_23428 = (state_23427[1]);if((state_val_23428 === 7))
{var inst_23423 = (state_23427[2]);var state_23427__$1 = state_23427;var statearr_23429_23445 = state_23427__$1;(statearr_23429_23445[2] = inst_23423);
(statearr_23429_23445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23428 === 6))
{var inst_23413 = (state_23427[7]);var inst_23416 = (state_23427[8]);var inst_23420 = f.call(null,inst_23413,inst_23416);var inst_23413__$1 = inst_23420;var state_23427__$1 = (function (){var statearr_23430 = state_23427;(statearr_23430[7] = inst_23413__$1);
return statearr_23430;
})();var statearr_23431_23446 = state_23427__$1;(statearr_23431_23446[2] = null);
(statearr_23431_23446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23428 === 5))
{var inst_23413 = (state_23427[7]);var state_23427__$1 = state_23427;var statearr_23432_23447 = state_23427__$1;(statearr_23432_23447[2] = inst_23413);
(statearr_23432_23447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23428 === 4))
{var inst_23416 = (state_23427[8]);var inst_23416__$1 = (state_23427[2]);var inst_23417 = (inst_23416__$1 == null);var state_23427__$1 = (function (){var statearr_23433 = state_23427;(statearr_23433[8] = inst_23416__$1);
return statearr_23433;
})();if(cljs.core.truth_(inst_23417))
{var statearr_23434_23448 = state_23427__$1;(statearr_23434_23448[1] = 5);
} else
{var statearr_23435_23449 = state_23427__$1;(statearr_23435_23449[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23428 === 3))
{var inst_23425 = (state_23427[2]);var state_23427__$1 = state_23427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23427__$1,inst_23425);
} else
{if((state_val_23428 === 2))
{var state_23427__$1 = state_23427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23427__$1,4,ch);
} else
{if((state_val_23428 === 1))
{var inst_23413 = init;var state_23427__$1 = (function (){var statearr_23436 = state_23427;(statearr_23436[7] = inst_23413);
return statearr_23436;
})();var statearr_23437_23450 = state_23427__$1;(statearr_23437_23450[2] = null);
(statearr_23437_23450[1] = 2);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_23441 = [null,null,null,null,null,null,null,null,null];(statearr_23441[0] = state_machine__15108__auto__);
(statearr_23441[1] = 1);
return statearr_23441;
});
var state_machine__15108__auto____1 = (function (state_23427){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_23427);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e23442){if((e23442 instanceof Object))
{var ex__15111__auto__ = e23442;var statearr_23443_23451 = state_23427;(statearr_23443_23451[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23452 = state_23427;
state_23427 = G__23452;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_23427){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_23427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_23444 = f__15178__auto__.call(null);(statearr_23444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto__);
return statearr_23444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
}));
return c__15177__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15177__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_23514){var state_val_23515 = (state_23514[1]);if((state_val_23515 === 1))
{var inst_23494 = cljs.core.seq.call(null,coll);var inst_23495 = inst_23494;var state_23514__$1 = (function (){var statearr_23516 = state_23514;(statearr_23516[7] = inst_23495);
return statearr_23516;
})();var statearr_23517_23535 = state_23514__$1;(statearr_23517_23535[2] = null);
(statearr_23517_23535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 2))
{var inst_23495 = (state_23514[7]);var state_23514__$1 = state_23514;if(cljs.core.truth_(inst_23495))
{var statearr_23518_23536 = state_23514__$1;(statearr_23518_23536[1] = 4);
} else
{var statearr_23519_23537 = state_23514__$1;(statearr_23519_23537[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 3))
{var inst_23512 = (state_23514[2]);var state_23514__$1 = state_23514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23514__$1,inst_23512);
} else
{if((state_val_23515 === 4))
{var inst_23495 = (state_23514[7]);var inst_23498 = cljs.core.first.call(null,inst_23495);var state_23514__$1 = state_23514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23514__$1,7,ch,inst_23498);
} else
{if((state_val_23515 === 5))
{var state_23514__$1 = state_23514;if(cljs.core.truth_(close_QMARK_))
{var statearr_23520_23538 = state_23514__$1;(statearr_23520_23538[1] = 8);
} else
{var statearr_23521_23539 = state_23514__$1;(statearr_23521_23539[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 6))
{var inst_23510 = (state_23514[2]);var state_23514__$1 = state_23514;var statearr_23522_23540 = state_23514__$1;(statearr_23522_23540[2] = inst_23510);
(statearr_23522_23540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 7))
{var inst_23495 = (state_23514[7]);var inst_23500 = (state_23514[2]);var inst_23501 = cljs.core.next.call(null,inst_23495);var inst_23495__$1 = inst_23501;var state_23514__$1 = (function (){var statearr_23523 = state_23514;(statearr_23523[7] = inst_23495__$1);
(statearr_23523[8] = inst_23500);
return statearr_23523;
})();var statearr_23524_23541 = state_23514__$1;(statearr_23524_23541[2] = null);
(statearr_23524_23541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 8))
{var inst_23505 = cljs.core.async.close_BANG_.call(null,ch);var state_23514__$1 = state_23514;var statearr_23525_23542 = state_23514__$1;(statearr_23525_23542[2] = inst_23505);
(statearr_23525_23542[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 9))
{var state_23514__$1 = state_23514;var statearr_23526_23543 = state_23514__$1;(statearr_23526_23543[2] = null);
(statearr_23526_23543[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23515 === 10))
{var inst_23508 = (state_23514[2]);var state_23514__$1 = state_23514;var statearr_23527_23544 = state_23514__$1;(statearr_23527_23544[2] = inst_23508);
(statearr_23527_23544[1] = 6);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_23531 = [null,null,null,null,null,null,null,null,null];(statearr_23531[0] = state_machine__15108__auto__);
(statearr_23531[1] = 1);
return statearr_23531;
});
var state_machine__15108__auto____1 = (function (state_23514){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_23514);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e23532){if((e23532 instanceof Object))
{var ex__15111__auto__ = e23532;var statearr_23533_23545 = state_23514;(statearr_23533_23545[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23546 = state_23514;
state_23514 = G__23546;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_23514){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_23514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_23534 = f__15178__auto__.call(null);(statearr_23534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto__);
return statearr_23534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
}));
return c__15177__auto__;
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
cljs.core.async.Mux = (function (){var obj23548 = {};return obj23548;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23550 = {};return obj23550;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23774 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23774 = (function (cs,ch,mult,meta23775){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23775 = meta23775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23774.cljs$lang$type = true;
cljs.core.async.t23774.cljs$lang$ctorStr = "cljs.core.async/t23774";
cljs.core.async.t23774.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t23774");
});})(cs))
;
cljs.core.async.t23774.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23774.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23774.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23774.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23774.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23776){var self__ = this;
var _23776__$1 = this;return self__.meta23775;
});})(cs))
;
cljs.core.async.t23774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23776,meta23775__$1){var self__ = this;
var _23776__$1 = this;return (new cljs.core.async.t23774(self__.cs,self__.ch,self__.mult,meta23775__$1));
});})(cs))
;
cljs.core.async.__GT_t23774 = ((function (cs){
return (function __GT_t23774(cs__$1,ch__$1,mult__$1,meta23775){return (new cljs.core.async.t23774(cs__$1,ch__$1,mult__$1,meta23775));
});})(cs))
;
}
return (new cljs.core.async.t23774(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15177__auto___23997 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_23911){var state_val_23912 = (state_23911[1]);if((state_val_23912 === 32))
{var inst_23855 = (state_23911[7]);var inst_23779 = (state_23911[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23911,31,Object,null,30);var inst_23862 = cljs.core.async.put_BANG_.call(null,inst_23855,inst_23779,done);var state_23911__$1 = state_23911;var statearr_23913_23998 = state_23911__$1;(statearr_23913_23998[2] = inst_23862);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 1))
{var state_23911__$1 = state_23911;var statearr_23914_23999 = state_23911__$1;(statearr_23914_23999[2] = null);
(statearr_23914_23999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 33))
{var inst_23868 = (state_23911[9]);var inst_23870 = cljs.core.chunked_seq_QMARK_.call(null,inst_23868);var state_23911__$1 = state_23911;if(inst_23870)
{var statearr_23915_24000 = state_23911__$1;(statearr_23915_24000[1] = 36);
} else
{var statearr_23916_24001 = state_23911__$1;(statearr_23916_24001[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 2))
{var state_23911__$1 = state_23911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23911__$1,4,ch);
} else
{if((state_val_23912 === 34))
{var state_23911__$1 = state_23911;var statearr_23917_24002 = state_23911__$1;(statearr_23917_24002[2] = null);
(statearr_23917_24002[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 3))
{var inst_23909 = (state_23911[2]);var state_23911__$1 = state_23911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23911__$1,inst_23909);
} else
{if((state_val_23912 === 35))
{var inst_23893 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23918_24003 = state_23911__$1;(statearr_23918_24003[2] = inst_23893);
(statearr_23918_24003[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 4))
{var inst_23779 = (state_23911[8]);var inst_23779__$1 = (state_23911[2]);var inst_23780 = (inst_23779__$1 == null);var state_23911__$1 = (function (){var statearr_23919 = state_23911;(statearr_23919[8] = inst_23779__$1);
return statearr_23919;
})();if(cljs.core.truth_(inst_23780))
{var statearr_23920_24004 = state_23911__$1;(statearr_23920_24004[1] = 5);
} else
{var statearr_23921_24005 = state_23911__$1;(statearr_23921_24005[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 36))
{var inst_23868 = (state_23911[9]);var inst_23872 = cljs.core.chunk_first.call(null,inst_23868);var inst_23873 = cljs.core.chunk_rest.call(null,inst_23868);var inst_23874 = cljs.core.count.call(null,inst_23872);var inst_23847 = inst_23873;var inst_23848 = inst_23872;var inst_23849 = inst_23874;var inst_23850 = 0;var state_23911__$1 = (function (){var statearr_23922 = state_23911;(statearr_23922[10] = inst_23847);
(statearr_23922[11] = inst_23849);
(statearr_23922[12] = inst_23848);
(statearr_23922[13] = inst_23850);
return statearr_23922;
})();var statearr_23923_24006 = state_23911__$1;(statearr_23923_24006[2] = null);
(statearr_23923_24006[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 5))
{var inst_23786 = cljs.core.deref.call(null,cs);var inst_23787 = cljs.core.seq.call(null,inst_23786);var inst_23788 = inst_23787;var inst_23789 = null;var inst_23790 = 0;var inst_23791 = 0;var state_23911__$1 = (function (){var statearr_23924 = state_23911;(statearr_23924[14] = inst_23790);
(statearr_23924[15] = inst_23791);
(statearr_23924[16] = inst_23788);
(statearr_23924[17] = inst_23789);
return statearr_23924;
})();var statearr_23925_24007 = state_23911__$1;(statearr_23925_24007[2] = null);
(statearr_23925_24007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 37))
{var inst_23868 = (state_23911[9]);var inst_23877 = cljs.core.first.call(null,inst_23868);var state_23911__$1 = (function (){var statearr_23926 = state_23911;(statearr_23926[18] = inst_23877);
return statearr_23926;
})();var statearr_23927_24008 = state_23911__$1;(statearr_23927_24008[2] = null);
(statearr_23927_24008[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 6))
{var inst_23839 = (state_23911[19]);var inst_23838 = cljs.core.deref.call(null,cs);var inst_23839__$1 = cljs.core.keys.call(null,inst_23838);var inst_23840 = cljs.core.count.call(null,inst_23839__$1);var inst_23841 = cljs.core.reset_BANG_.call(null,dctr,inst_23840);var inst_23846 = cljs.core.seq.call(null,inst_23839__$1);var inst_23847 = inst_23846;var inst_23848 = null;var inst_23849 = 0;var inst_23850 = 0;var state_23911__$1 = (function (){var statearr_23928 = state_23911;(statearr_23928[10] = inst_23847);
(statearr_23928[11] = inst_23849);
(statearr_23928[12] = inst_23848);
(statearr_23928[20] = inst_23841);
(statearr_23928[13] = inst_23850);
(statearr_23928[19] = inst_23839__$1);
return statearr_23928;
})();var statearr_23929_24009 = state_23911__$1;(statearr_23929_24009[2] = null);
(statearr_23929_24009[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 38))
{var inst_23890 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23930_24010 = state_23911__$1;(statearr_23930_24010[2] = inst_23890);
(statearr_23930_24010[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 7))
{var inst_23907 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23931_24011 = state_23911__$1;(statearr_23931_24011[2] = inst_23907);
(statearr_23931_24011[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 39))
{var inst_23868 = (state_23911[9]);var inst_23886 = (state_23911[2]);var inst_23887 = cljs.core.next.call(null,inst_23868);var inst_23847 = inst_23887;var inst_23848 = null;var inst_23849 = 0;var inst_23850 = 0;var state_23911__$1 = (function (){var statearr_23932 = state_23911;(statearr_23932[10] = inst_23847);
(statearr_23932[11] = inst_23849);
(statearr_23932[12] = inst_23848);
(statearr_23932[21] = inst_23886);
(statearr_23932[13] = inst_23850);
return statearr_23932;
})();var statearr_23933_24012 = state_23911__$1;(statearr_23933_24012[2] = null);
(statearr_23933_24012[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 8))
{var inst_23790 = (state_23911[14]);var inst_23791 = (state_23911[15]);var inst_23793 = (inst_23791 < inst_23790);var inst_23794 = inst_23793;var state_23911__$1 = state_23911;if(cljs.core.truth_(inst_23794))
{var statearr_23934_24013 = state_23911__$1;(statearr_23934_24013[1] = 10);
} else
{var statearr_23935_24014 = state_23911__$1;(statearr_23935_24014[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 40))
{var inst_23877 = (state_23911[18]);var inst_23878 = (state_23911[2]);var inst_23879 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23880 = cljs.core.async.untap_STAR_.call(null,m,inst_23877);var state_23911__$1 = (function (){var statearr_23936 = state_23911;(statearr_23936[22] = inst_23878);
(statearr_23936[23] = inst_23879);
return statearr_23936;
})();var statearr_23937_24015 = state_23911__$1;(statearr_23937_24015[2] = inst_23880);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 9))
{var inst_23836 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23938_24016 = state_23911__$1;(statearr_23938_24016[2] = inst_23836);
(statearr_23938_24016[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 41))
{var inst_23877 = (state_23911[18]);var inst_23779 = (state_23911[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23911,40,Object,null,39);var inst_23884 = cljs.core.async.put_BANG_.call(null,inst_23877,inst_23779,done);var state_23911__$1 = state_23911;var statearr_23939_24017 = state_23911__$1;(statearr_23939_24017[2] = inst_23884);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23911__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 10))
{var inst_23791 = (state_23911[15]);var inst_23789 = (state_23911[17]);var inst_23797 = cljs.core._nth.call(null,inst_23789,inst_23791);var inst_23798 = cljs.core.nth.call(null,inst_23797,0,null);var inst_23799 = cljs.core.nth.call(null,inst_23797,1,null);var state_23911__$1 = (function (){var statearr_23940 = state_23911;(statearr_23940[24] = inst_23798);
return statearr_23940;
})();if(cljs.core.truth_(inst_23799))
{var statearr_23941_24018 = state_23911__$1;(statearr_23941_24018[1] = 13);
} else
{var statearr_23942_24019 = state_23911__$1;(statearr_23942_24019[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 42))
{var state_23911__$1 = state_23911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23911__$1,45,dchan);
} else
{if((state_val_23912 === 11))
{var inst_23808 = (state_23911[25]);var inst_23788 = (state_23911[16]);var inst_23808__$1 = cljs.core.seq.call(null,inst_23788);var state_23911__$1 = (function (){var statearr_23943 = state_23911;(statearr_23943[25] = inst_23808__$1);
return statearr_23943;
})();if(inst_23808__$1)
{var statearr_23944_24020 = state_23911__$1;(statearr_23944_24020[1] = 16);
} else
{var statearr_23945_24021 = state_23911__$1;(statearr_23945_24021[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 43))
{var state_23911__$1 = state_23911;var statearr_23946_24022 = state_23911__$1;(statearr_23946_24022[2] = null);
(statearr_23946_24022[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 12))
{var inst_23834 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23947_24023 = state_23911__$1;(statearr_23947_24023[2] = inst_23834);
(statearr_23947_24023[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 44))
{var inst_23904 = (state_23911[2]);var state_23911__$1 = (function (){var statearr_23948 = state_23911;(statearr_23948[26] = inst_23904);
return statearr_23948;
})();var statearr_23949_24024 = state_23911__$1;(statearr_23949_24024[2] = null);
(statearr_23949_24024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 13))
{var inst_23798 = (state_23911[24]);var inst_23801 = cljs.core.async.close_BANG_.call(null,inst_23798);var state_23911__$1 = state_23911;var statearr_23950_24025 = state_23911__$1;(statearr_23950_24025[2] = inst_23801);
(statearr_23950_24025[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 45))
{var inst_23901 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23954_24026 = state_23911__$1;(statearr_23954_24026[2] = inst_23901);
(statearr_23954_24026[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 14))
{var state_23911__$1 = state_23911;var statearr_23955_24027 = state_23911__$1;(statearr_23955_24027[2] = null);
(statearr_23955_24027[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 15))
{var inst_23790 = (state_23911[14]);var inst_23791 = (state_23911[15]);var inst_23788 = (state_23911[16]);var inst_23789 = (state_23911[17]);var inst_23804 = (state_23911[2]);var inst_23805 = (inst_23791 + 1);var tmp23951 = inst_23790;var tmp23952 = inst_23788;var tmp23953 = inst_23789;var inst_23788__$1 = tmp23952;var inst_23789__$1 = tmp23953;var inst_23790__$1 = tmp23951;var inst_23791__$1 = inst_23805;var state_23911__$1 = (function (){var statearr_23956 = state_23911;(statearr_23956[14] = inst_23790__$1);
(statearr_23956[15] = inst_23791__$1);
(statearr_23956[27] = inst_23804);
(statearr_23956[16] = inst_23788__$1);
(statearr_23956[17] = inst_23789__$1);
return statearr_23956;
})();var statearr_23957_24028 = state_23911__$1;(statearr_23957_24028[2] = null);
(statearr_23957_24028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 16))
{var inst_23808 = (state_23911[25]);var inst_23810 = cljs.core.chunked_seq_QMARK_.call(null,inst_23808);var state_23911__$1 = state_23911;if(inst_23810)
{var statearr_23958_24029 = state_23911__$1;(statearr_23958_24029[1] = 19);
} else
{var statearr_23959_24030 = state_23911__$1;(statearr_23959_24030[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 17))
{var state_23911__$1 = state_23911;var statearr_23960_24031 = state_23911__$1;(statearr_23960_24031[2] = null);
(statearr_23960_24031[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 18))
{var inst_23832 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23961_24032 = state_23911__$1;(statearr_23961_24032[2] = inst_23832);
(statearr_23961_24032[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 19))
{var inst_23808 = (state_23911[25]);var inst_23812 = cljs.core.chunk_first.call(null,inst_23808);var inst_23813 = cljs.core.chunk_rest.call(null,inst_23808);var inst_23814 = cljs.core.count.call(null,inst_23812);var inst_23788 = inst_23813;var inst_23789 = inst_23812;var inst_23790 = inst_23814;var inst_23791 = 0;var state_23911__$1 = (function (){var statearr_23962 = state_23911;(statearr_23962[14] = inst_23790);
(statearr_23962[15] = inst_23791);
(statearr_23962[16] = inst_23788);
(statearr_23962[17] = inst_23789);
return statearr_23962;
})();var statearr_23963_24033 = state_23911__$1;(statearr_23963_24033[2] = null);
(statearr_23963_24033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 20))
{var inst_23808 = (state_23911[25]);var inst_23818 = cljs.core.first.call(null,inst_23808);var inst_23819 = cljs.core.nth.call(null,inst_23818,0,null);var inst_23820 = cljs.core.nth.call(null,inst_23818,1,null);var state_23911__$1 = (function (){var statearr_23964 = state_23911;(statearr_23964[28] = inst_23819);
return statearr_23964;
})();if(cljs.core.truth_(inst_23820))
{var statearr_23965_24034 = state_23911__$1;(statearr_23965_24034[1] = 22);
} else
{var statearr_23966_24035 = state_23911__$1;(statearr_23966_24035[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 21))
{var inst_23829 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23967_24036 = state_23911__$1;(statearr_23967_24036[2] = inst_23829);
(statearr_23967_24036[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 22))
{var inst_23819 = (state_23911[28]);var inst_23822 = cljs.core.async.close_BANG_.call(null,inst_23819);var state_23911__$1 = state_23911;var statearr_23968_24037 = state_23911__$1;(statearr_23968_24037[2] = inst_23822);
(statearr_23968_24037[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 23))
{var state_23911__$1 = state_23911;var statearr_23969_24038 = state_23911__$1;(statearr_23969_24038[2] = null);
(statearr_23969_24038[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 24))
{var inst_23808 = (state_23911[25]);var inst_23825 = (state_23911[2]);var inst_23826 = cljs.core.next.call(null,inst_23808);var inst_23788 = inst_23826;var inst_23789 = null;var inst_23790 = 0;var inst_23791 = 0;var state_23911__$1 = (function (){var statearr_23970 = state_23911;(statearr_23970[14] = inst_23790);
(statearr_23970[15] = inst_23791);
(statearr_23970[16] = inst_23788);
(statearr_23970[17] = inst_23789);
(statearr_23970[29] = inst_23825);
return statearr_23970;
})();var statearr_23971_24039 = state_23911__$1;(statearr_23971_24039[2] = null);
(statearr_23971_24039[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 25))
{var inst_23849 = (state_23911[11]);var inst_23850 = (state_23911[13]);var inst_23852 = (inst_23850 < inst_23849);var inst_23853 = inst_23852;var state_23911__$1 = state_23911;if(cljs.core.truth_(inst_23853))
{var statearr_23972_24040 = state_23911__$1;(statearr_23972_24040[1] = 27);
} else
{var statearr_23973_24041 = state_23911__$1;(statearr_23973_24041[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 26))
{var inst_23839 = (state_23911[19]);var inst_23897 = (state_23911[2]);var inst_23898 = cljs.core.seq.call(null,inst_23839);var state_23911__$1 = (function (){var statearr_23974 = state_23911;(statearr_23974[30] = inst_23897);
return statearr_23974;
})();if(inst_23898)
{var statearr_23975_24042 = state_23911__$1;(statearr_23975_24042[1] = 42);
} else
{var statearr_23976_24043 = state_23911__$1;(statearr_23976_24043[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 27))
{var inst_23848 = (state_23911[12]);var inst_23850 = (state_23911[13]);var inst_23855 = cljs.core._nth.call(null,inst_23848,inst_23850);var state_23911__$1 = (function (){var statearr_23977 = state_23911;(statearr_23977[7] = inst_23855);
return statearr_23977;
})();var statearr_23978_24044 = state_23911__$1;(statearr_23978_24044[2] = null);
(statearr_23978_24044[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 28))
{var inst_23847 = (state_23911[10]);var inst_23868 = (state_23911[9]);var inst_23868__$1 = cljs.core.seq.call(null,inst_23847);var state_23911__$1 = (function (){var statearr_23982 = state_23911;(statearr_23982[9] = inst_23868__$1);
return statearr_23982;
})();if(inst_23868__$1)
{var statearr_23983_24045 = state_23911__$1;(statearr_23983_24045[1] = 33);
} else
{var statearr_23984_24046 = state_23911__$1;(statearr_23984_24046[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 29))
{var inst_23895 = (state_23911[2]);var state_23911__$1 = state_23911;var statearr_23985_24047 = state_23911__$1;(statearr_23985_24047[2] = inst_23895);
(statearr_23985_24047[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 30))
{var inst_23847 = (state_23911[10]);var inst_23849 = (state_23911[11]);var inst_23848 = (state_23911[12]);var inst_23850 = (state_23911[13]);var inst_23864 = (state_23911[2]);var inst_23865 = (inst_23850 + 1);var tmp23979 = inst_23847;var tmp23980 = inst_23849;var tmp23981 = inst_23848;var inst_23847__$1 = tmp23979;var inst_23848__$1 = tmp23981;var inst_23849__$1 = tmp23980;var inst_23850__$1 = inst_23865;var state_23911__$1 = (function (){var statearr_23986 = state_23911;(statearr_23986[10] = inst_23847__$1);
(statearr_23986[11] = inst_23849__$1);
(statearr_23986[12] = inst_23848__$1);
(statearr_23986[31] = inst_23864);
(statearr_23986[13] = inst_23850__$1);
return statearr_23986;
})();var statearr_23987_24048 = state_23911__$1;(statearr_23987_24048[2] = null);
(statearr_23987_24048[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23912 === 31))
{var inst_23855 = (state_23911[7]);var inst_23856 = (state_23911[2]);var inst_23857 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23858 = cljs.core.async.untap_STAR_.call(null,m,inst_23855);var state_23911__$1 = (function (){var statearr_23988 = state_23911;(statearr_23988[32] = inst_23857);
(statearr_23988[33] = inst_23856);
return statearr_23988;
})();var statearr_23989_24049 = state_23911__$1;(statearr_23989_24049[2] = inst_23858);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23911__$1);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_23993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23993[0] = state_machine__15108__auto__);
(statearr_23993[1] = 1);
return statearr_23993;
});
var state_machine__15108__auto____1 = (function (state_23911){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_23911);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e23994){if((e23994 instanceof Object))
{var ex__15111__auto__ = e23994;var statearr_23995_24050 = state_23911;(statearr_23995_24050[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24051 = state_23911;
state_23911 = G__24051;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_23911){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_23911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_23996 = f__15178__auto__.call(null);(statearr_23996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___23997);
return statearr_23996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
cljs.core.async.Mix = (function (){var obj24053 = {};return obj24053;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t24163 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24163 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24164){
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
this.meta24164 = meta24164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24163.cljs$lang$type = true;
cljs.core.async.t24163.cljs$lang$ctorStr = "cljs.core.async/t24163";
cljs.core.async.t24163.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t24163");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24163.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24165){var self__ = this;
var _24165__$1 = this;return self__.meta24164;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24165,meta24164__$1){var self__ = this;
var _24165__$1 = this;return (new cljs.core.async.t24163(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24164__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24163 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24163(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24164){return (new cljs.core.async.t24163(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24164));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24163(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__15177__auto___24272 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_24230){var state_val_24231 = (state_24230[1]);if((state_val_24231 === 1))
{var inst_24169 = (state_24230[7]);var inst_24169__$1 = calc_state.call(null);var inst_24170 = cljs.core.seq_QMARK_.call(null,inst_24169__$1);var state_24230__$1 = (function (){var statearr_24232 = state_24230;(statearr_24232[7] = inst_24169__$1);
return statearr_24232;
})();if(inst_24170)
{var statearr_24233_24273 = state_24230__$1;(statearr_24233_24273[1] = 2);
} else
{var statearr_24234_24274 = state_24230__$1;(statearr_24234_24274[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 2))
{var inst_24169 = (state_24230[7]);var inst_24172 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24169);var state_24230__$1 = state_24230;var statearr_24235_24275 = state_24230__$1;(statearr_24235_24275[2] = inst_24172);
(statearr_24235_24275[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 3))
{var inst_24169 = (state_24230[7]);var state_24230__$1 = state_24230;var statearr_24236_24276 = state_24230__$1;(statearr_24236_24276[2] = inst_24169);
(statearr_24236_24276[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 4))
{var inst_24169 = (state_24230[7]);var inst_24175 = (state_24230[2]);var inst_24176 = cljs.core.get.call(null,inst_24175,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24177 = cljs.core.get.call(null,inst_24175,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24178 = cljs.core.get.call(null,inst_24175,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_24179 = inst_24169;var state_24230__$1 = (function (){var statearr_24237 = state_24230;(statearr_24237[8] = inst_24179);
(statearr_24237[9] = inst_24177);
(statearr_24237[10] = inst_24178);
(statearr_24237[11] = inst_24176);
return statearr_24237;
})();var statearr_24238_24277 = state_24230__$1;(statearr_24238_24277[2] = null);
(statearr_24238_24277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 5))
{var inst_24179 = (state_24230[8]);var inst_24182 = cljs.core.seq_QMARK_.call(null,inst_24179);var state_24230__$1 = state_24230;if(inst_24182)
{var statearr_24239_24278 = state_24230__$1;(statearr_24239_24278[1] = 7);
} else
{var statearr_24240_24279 = state_24230__$1;(statearr_24240_24279[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 6))
{var inst_24228 = (state_24230[2]);var state_24230__$1 = state_24230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24230__$1,inst_24228);
} else
{if((state_val_24231 === 7))
{var inst_24179 = (state_24230[8]);var inst_24184 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24179);var state_24230__$1 = state_24230;var statearr_24241_24280 = state_24230__$1;(statearr_24241_24280[2] = inst_24184);
(statearr_24241_24280[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 8))
{var inst_24179 = (state_24230[8]);var state_24230__$1 = state_24230;var statearr_24242_24281 = state_24230__$1;(statearr_24242_24281[2] = inst_24179);
(statearr_24242_24281[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 9))
{var inst_24187 = (state_24230[12]);var inst_24187__$1 = (state_24230[2]);var inst_24188 = cljs.core.get.call(null,inst_24187__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24189 = cljs.core.get.call(null,inst_24187__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24190 = cljs.core.get.call(null,inst_24187__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_24230__$1 = (function (){var statearr_24243 = state_24230;(statearr_24243[13] = inst_24190);
(statearr_24243[14] = inst_24189);
(statearr_24243[12] = inst_24187__$1);
return statearr_24243;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24230__$1,10,inst_24188);
} else
{if((state_val_24231 === 10))
{var inst_24194 = (state_24230[15]);var inst_24195 = (state_24230[16]);var inst_24193 = (state_24230[2]);var inst_24194__$1 = cljs.core.nth.call(null,inst_24193,0,null);var inst_24195__$1 = cljs.core.nth.call(null,inst_24193,1,null);var inst_24196 = (inst_24194__$1 == null);var inst_24197 = cljs.core._EQ_.call(null,inst_24195__$1,change);var inst_24198 = (inst_24196) || (inst_24197);var state_24230__$1 = (function (){var statearr_24244 = state_24230;(statearr_24244[15] = inst_24194__$1);
(statearr_24244[16] = inst_24195__$1);
return statearr_24244;
})();if(cljs.core.truth_(inst_24198))
{var statearr_24245_24282 = state_24230__$1;(statearr_24245_24282[1] = 11);
} else
{var statearr_24246_24283 = state_24230__$1;(statearr_24246_24283[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 11))
{var inst_24194 = (state_24230[15]);var inst_24200 = (inst_24194 == null);var state_24230__$1 = state_24230;if(cljs.core.truth_(inst_24200))
{var statearr_24247_24284 = state_24230__$1;(statearr_24247_24284[1] = 14);
} else
{var statearr_24248_24285 = state_24230__$1;(statearr_24248_24285[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 12))
{var inst_24190 = (state_24230[13]);var inst_24209 = (state_24230[17]);var inst_24195 = (state_24230[16]);var inst_24209__$1 = inst_24190.call(null,inst_24195);var state_24230__$1 = (function (){var statearr_24249 = state_24230;(statearr_24249[17] = inst_24209__$1);
return statearr_24249;
})();if(cljs.core.truth_(inst_24209__$1))
{var statearr_24250_24286 = state_24230__$1;(statearr_24250_24286[1] = 17);
} else
{var statearr_24251_24287 = state_24230__$1;(statearr_24251_24287[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 13))
{var inst_24226 = (state_24230[2]);var state_24230__$1 = state_24230;var statearr_24252_24288 = state_24230__$1;(statearr_24252_24288[2] = inst_24226);
(statearr_24252_24288[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 14))
{var inst_24195 = (state_24230[16]);var inst_24202 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24195);var state_24230__$1 = state_24230;var statearr_24253_24289 = state_24230__$1;(statearr_24253_24289[2] = inst_24202);
(statearr_24253_24289[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 15))
{var state_24230__$1 = state_24230;var statearr_24254_24290 = state_24230__$1;(statearr_24254_24290[2] = null);
(statearr_24254_24290[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 16))
{var inst_24205 = (state_24230[2]);var inst_24206 = calc_state.call(null);var inst_24179 = inst_24206;var state_24230__$1 = (function (){var statearr_24255 = state_24230;(statearr_24255[18] = inst_24205);
(statearr_24255[8] = inst_24179);
return statearr_24255;
})();var statearr_24256_24291 = state_24230__$1;(statearr_24256_24291[2] = null);
(statearr_24256_24291[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 17))
{var inst_24209 = (state_24230[17]);var state_24230__$1 = state_24230;var statearr_24257_24292 = state_24230__$1;(statearr_24257_24292[2] = inst_24209);
(statearr_24257_24292[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 18))
{var inst_24190 = (state_24230[13]);var inst_24189 = (state_24230[14]);var inst_24195 = (state_24230[16]);var inst_24212 = cljs.core.empty_QMARK_.call(null,inst_24190);var inst_24213 = inst_24189.call(null,inst_24195);var inst_24214 = cljs.core.not.call(null,inst_24213);var inst_24215 = (inst_24212) && (inst_24214);var state_24230__$1 = state_24230;var statearr_24258_24293 = state_24230__$1;(statearr_24258_24293[2] = inst_24215);
(statearr_24258_24293[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 19))
{var inst_24217 = (state_24230[2]);var state_24230__$1 = state_24230;if(cljs.core.truth_(inst_24217))
{var statearr_24259_24294 = state_24230__$1;(statearr_24259_24294[1] = 20);
} else
{var statearr_24260_24295 = state_24230__$1;(statearr_24260_24295[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 20))
{var inst_24194 = (state_24230[15]);var state_24230__$1 = state_24230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24230__$1,23,out,inst_24194);
} else
{if((state_val_24231 === 21))
{var state_24230__$1 = state_24230;var statearr_24261_24296 = state_24230__$1;(statearr_24261_24296[2] = null);
(statearr_24261_24296[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 22))
{var inst_24187 = (state_24230[12]);var inst_24223 = (state_24230[2]);var inst_24179 = inst_24187;var state_24230__$1 = (function (){var statearr_24262 = state_24230;(statearr_24262[8] = inst_24179);
(statearr_24262[19] = inst_24223);
return statearr_24262;
})();var statearr_24263_24297 = state_24230__$1;(statearr_24263_24297[2] = null);
(statearr_24263_24297[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24231 === 23))
{var inst_24220 = (state_24230[2]);var state_24230__$1 = state_24230;var statearr_24264_24298 = state_24230__$1;(statearr_24264_24298[2] = inst_24220);
(statearr_24264_24298[1] = 22);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_24268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24268[0] = state_machine__15108__auto__);
(statearr_24268[1] = 1);
return statearr_24268;
});
var state_machine__15108__auto____1 = (function (state_24230){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_24230);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e24269){if((e24269 instanceof Object))
{var ex__15111__auto__ = e24269;var statearr_24270_24299 = state_24230;(statearr_24270_24299[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24300 = state_24230;
state_24230 = G__24300;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_24230){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_24230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_24271 = f__15178__auto__.call(null);(statearr_24271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___24272);
return statearr_24271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
cljs.core.async.Pub = (function (){var obj24302 = {};return obj24302;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
return (function (topic){var or__8198__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8198__auto__,mults){
return (function (p1__24303_SHARP_){if(cljs.core.truth_(p1__24303_SHARP_.call(null,topic)))
{return p1__24303_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24303_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8198__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24428 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24429){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24429 = meta24429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24428.cljs$lang$type = true;
cljs.core.async.t24428.cljs$lang$ctorStr = "cljs.core.async/t24428";
cljs.core.async.t24428.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t24428");
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24428.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24430){var self__ = this;
var _24430__$1 = this;return self__.meta24429;
});})(mults,ensure_mult))
;
cljs.core.async.t24428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24430,meta24429__$1){var self__ = this;
var _24430__$1 = this;return (new cljs.core.async.t24428(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24429__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24428 = ((function (mults,ensure_mult){
return (function __GT_t24428(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24429){return (new cljs.core.async.t24428(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24429));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24428(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15177__auto___24552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_24504){var state_val_24505 = (state_24504[1]);if((state_val_24505 === 1))
{var state_24504__$1 = state_24504;var statearr_24506_24553 = state_24504__$1;(statearr_24506_24553[2] = null);
(statearr_24506_24553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 2))
{var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24504__$1,4,ch);
} else
{if((state_val_24505 === 3))
{var inst_24502 = (state_24504[2]);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24504__$1,inst_24502);
} else
{if((state_val_24505 === 4))
{var inst_24433 = (state_24504[7]);var inst_24433__$1 = (state_24504[2]);var inst_24434 = (inst_24433__$1 == null);var state_24504__$1 = (function (){var statearr_24507 = state_24504;(statearr_24507[7] = inst_24433__$1);
return statearr_24507;
})();if(cljs.core.truth_(inst_24434))
{var statearr_24508_24554 = state_24504__$1;(statearr_24508_24554[1] = 5);
} else
{var statearr_24509_24555 = state_24504__$1;(statearr_24509_24555[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 5))
{var inst_24440 = cljs.core.deref.call(null,mults);var inst_24441 = cljs.core.vals.call(null,inst_24440);var inst_24442 = cljs.core.seq.call(null,inst_24441);var inst_24443 = inst_24442;var inst_24444 = null;var inst_24445 = 0;var inst_24446 = 0;var state_24504__$1 = (function (){var statearr_24510 = state_24504;(statearr_24510[8] = inst_24446);
(statearr_24510[9] = inst_24445);
(statearr_24510[10] = inst_24444);
(statearr_24510[11] = inst_24443);
return statearr_24510;
})();var statearr_24511_24556 = state_24504__$1;(statearr_24511_24556[2] = null);
(statearr_24511_24556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 6))
{var inst_24483 = (state_24504[12]);var inst_24481 = (state_24504[13]);var inst_24433 = (state_24504[7]);var inst_24481__$1 = topic_fn.call(null,inst_24433);var inst_24482 = cljs.core.deref.call(null,mults);var inst_24483__$1 = cljs.core.get.call(null,inst_24482,inst_24481__$1);var state_24504__$1 = (function (){var statearr_24512 = state_24504;(statearr_24512[12] = inst_24483__$1);
(statearr_24512[13] = inst_24481__$1);
return statearr_24512;
})();if(cljs.core.truth_(inst_24483__$1))
{var statearr_24513_24557 = state_24504__$1;(statearr_24513_24557[1] = 19);
} else
{var statearr_24514_24558 = state_24504__$1;(statearr_24514_24558[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 7))
{var inst_24500 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24515_24559 = state_24504__$1;(statearr_24515_24559[2] = inst_24500);
(statearr_24515_24559[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 8))
{var inst_24446 = (state_24504[8]);var inst_24445 = (state_24504[9]);var inst_24448 = (inst_24446 < inst_24445);var inst_24449 = inst_24448;var state_24504__$1 = state_24504;if(cljs.core.truth_(inst_24449))
{var statearr_24519_24560 = state_24504__$1;(statearr_24519_24560[1] = 10);
} else
{var statearr_24520_24561 = state_24504__$1;(statearr_24520_24561[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 9))
{var inst_24479 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24521_24562 = state_24504__$1;(statearr_24521_24562[2] = inst_24479);
(statearr_24521_24562[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 10))
{var inst_24446 = (state_24504[8]);var inst_24445 = (state_24504[9]);var inst_24444 = (state_24504[10]);var inst_24443 = (state_24504[11]);var inst_24451 = cljs.core._nth.call(null,inst_24444,inst_24446);var inst_24452 = cljs.core.async.muxch_STAR_.call(null,inst_24451);var inst_24453 = cljs.core.async.close_BANG_.call(null,inst_24452);var inst_24454 = (inst_24446 + 1);var tmp24516 = inst_24445;var tmp24517 = inst_24444;var tmp24518 = inst_24443;var inst_24443__$1 = tmp24518;var inst_24444__$1 = tmp24517;var inst_24445__$1 = tmp24516;var inst_24446__$1 = inst_24454;var state_24504__$1 = (function (){var statearr_24522 = state_24504;(statearr_24522[14] = inst_24453);
(statearr_24522[8] = inst_24446__$1);
(statearr_24522[9] = inst_24445__$1);
(statearr_24522[10] = inst_24444__$1);
(statearr_24522[11] = inst_24443__$1);
return statearr_24522;
})();var statearr_24523_24563 = state_24504__$1;(statearr_24523_24563[2] = null);
(statearr_24523_24563[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 11))
{var inst_24457 = (state_24504[15]);var inst_24443 = (state_24504[11]);var inst_24457__$1 = cljs.core.seq.call(null,inst_24443);var state_24504__$1 = (function (){var statearr_24524 = state_24504;(statearr_24524[15] = inst_24457__$1);
return statearr_24524;
})();if(inst_24457__$1)
{var statearr_24525_24564 = state_24504__$1;(statearr_24525_24564[1] = 13);
} else
{var statearr_24526_24565 = state_24504__$1;(statearr_24526_24565[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 12))
{var inst_24477 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24527_24566 = state_24504__$1;(statearr_24527_24566[2] = inst_24477);
(statearr_24527_24566[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 13))
{var inst_24457 = (state_24504[15]);var inst_24459 = cljs.core.chunked_seq_QMARK_.call(null,inst_24457);var state_24504__$1 = state_24504;if(inst_24459)
{var statearr_24528_24567 = state_24504__$1;(statearr_24528_24567[1] = 16);
} else
{var statearr_24529_24568 = state_24504__$1;(statearr_24529_24568[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 14))
{var state_24504__$1 = state_24504;var statearr_24530_24569 = state_24504__$1;(statearr_24530_24569[2] = null);
(statearr_24530_24569[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 15))
{var inst_24475 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24531_24570 = state_24504__$1;(statearr_24531_24570[2] = inst_24475);
(statearr_24531_24570[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 16))
{var inst_24457 = (state_24504[15]);var inst_24461 = cljs.core.chunk_first.call(null,inst_24457);var inst_24462 = cljs.core.chunk_rest.call(null,inst_24457);var inst_24463 = cljs.core.count.call(null,inst_24461);var inst_24443 = inst_24462;var inst_24444 = inst_24461;var inst_24445 = inst_24463;var inst_24446 = 0;var state_24504__$1 = (function (){var statearr_24532 = state_24504;(statearr_24532[8] = inst_24446);
(statearr_24532[9] = inst_24445);
(statearr_24532[10] = inst_24444);
(statearr_24532[11] = inst_24443);
return statearr_24532;
})();var statearr_24533_24571 = state_24504__$1;(statearr_24533_24571[2] = null);
(statearr_24533_24571[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 17))
{var inst_24457 = (state_24504[15]);var inst_24466 = cljs.core.first.call(null,inst_24457);var inst_24467 = cljs.core.async.muxch_STAR_.call(null,inst_24466);var inst_24468 = cljs.core.async.close_BANG_.call(null,inst_24467);var inst_24469 = cljs.core.next.call(null,inst_24457);var inst_24443 = inst_24469;var inst_24444 = null;var inst_24445 = 0;var inst_24446 = 0;var state_24504__$1 = (function (){var statearr_24534 = state_24504;(statearr_24534[8] = inst_24446);
(statearr_24534[9] = inst_24445);
(statearr_24534[10] = inst_24444);
(statearr_24534[11] = inst_24443);
(statearr_24534[16] = inst_24468);
return statearr_24534;
})();var statearr_24535_24572 = state_24504__$1;(statearr_24535_24572[2] = null);
(statearr_24535_24572[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 18))
{var inst_24472 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24536_24573 = state_24504__$1;(statearr_24536_24573[2] = inst_24472);
(statearr_24536_24573[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 19))
{var state_24504__$1 = state_24504;var statearr_24537_24574 = state_24504__$1;(statearr_24537_24574[2] = null);
(statearr_24537_24574[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 20))
{var state_24504__$1 = state_24504;var statearr_24538_24575 = state_24504__$1;(statearr_24538_24575[2] = null);
(statearr_24538_24575[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 21))
{var inst_24497 = (state_24504[2]);var state_24504__$1 = (function (){var statearr_24539 = state_24504;(statearr_24539[17] = inst_24497);
return statearr_24539;
})();var statearr_24540_24576 = state_24504__$1;(statearr_24540_24576[2] = null);
(statearr_24540_24576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 22))
{var inst_24494 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24541_24577 = state_24504__$1;(statearr_24541_24577[2] = inst_24494);
(statearr_24541_24577[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 23))
{var inst_24481 = (state_24504[13]);var inst_24485 = (state_24504[2]);var inst_24486 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24481);var state_24504__$1 = (function (){var statearr_24542 = state_24504;(statearr_24542[18] = inst_24485);
return statearr_24542;
})();var statearr_24543_24578 = state_24504__$1;(statearr_24543_24578[2] = inst_24486);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24504__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24505 === 24))
{var inst_24483 = (state_24504[12]);var inst_24433 = (state_24504[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24504,23,Object,null,22);var inst_24490 = cljs.core.async.muxch_STAR_.call(null,inst_24483);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24504__$1,25,inst_24490,inst_24433);
} else
{if((state_val_24505 === 25))
{var inst_24492 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24544_24579 = state_24504__$1;(statearr_24544_24579[2] = inst_24492);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24504__$1);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_24548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24548[0] = state_machine__15108__auto__);
(statearr_24548[1] = 1);
return statearr_24548;
});
var state_machine__15108__auto____1 = (function (state_24504){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_24504);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e24549){if((e24549 instanceof Object))
{var ex__15111__auto__ = e24549;var statearr_24550_24580 = state_24504;(statearr_24550_24580[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24581 = state_24504;
state_24504 = G__24581;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_24504){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_24504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_24551 = f__15178__auto__.call(null);(statearr_24551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___24552);
return statearr_24551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
,cljs.core.range.call(null,cnt));var c__15177__auto___24718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_24688){var state_val_24689 = (state_24688[1]);if((state_val_24689 === 1))
{var state_24688__$1 = state_24688;var statearr_24690_24719 = state_24688__$1;(statearr_24690_24719[2] = null);
(statearr_24690_24719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 2))
{var inst_24651 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_24652 = 0;var state_24688__$1 = (function (){var statearr_24691 = state_24688;(statearr_24691[7] = inst_24652);
(statearr_24691[8] = inst_24651);
return statearr_24691;
})();var statearr_24692_24720 = state_24688__$1;(statearr_24692_24720[2] = null);
(statearr_24692_24720[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 3))
{var inst_24686 = (state_24688[2]);var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24688__$1,inst_24686);
} else
{if((state_val_24689 === 4))
{var inst_24652 = (state_24688[7]);var inst_24654 = (inst_24652 < cnt);var state_24688__$1 = state_24688;if(cljs.core.truth_(inst_24654))
{var statearr_24693_24721 = state_24688__$1;(statearr_24693_24721[1] = 6);
} else
{var statearr_24694_24722 = state_24688__$1;(statearr_24694_24722[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 5))
{var inst_24672 = (state_24688[2]);var state_24688__$1 = (function (){var statearr_24695 = state_24688;(statearr_24695[9] = inst_24672);
return statearr_24695;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24688__$1,12,dchan);
} else
{if((state_val_24689 === 6))
{var state_24688__$1 = state_24688;var statearr_24696_24723 = state_24688__$1;(statearr_24696_24723[2] = null);
(statearr_24696_24723[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 7))
{var state_24688__$1 = state_24688;var statearr_24697_24724 = state_24688__$1;(statearr_24697_24724[2] = null);
(statearr_24697_24724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 8))
{var inst_24670 = (state_24688[2]);var state_24688__$1 = state_24688;var statearr_24698_24725 = state_24688__$1;(statearr_24698_24725[2] = inst_24670);
(statearr_24698_24725[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 9))
{var inst_24652 = (state_24688[7]);var inst_24665 = (state_24688[2]);var inst_24666 = (inst_24652 + 1);var inst_24652__$1 = inst_24666;var state_24688__$1 = (function (){var statearr_24699 = state_24688;(statearr_24699[7] = inst_24652__$1);
(statearr_24699[10] = inst_24665);
return statearr_24699;
})();var statearr_24700_24726 = state_24688__$1;(statearr_24700_24726[2] = null);
(statearr_24700_24726[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 10))
{var inst_24656 = (state_24688[2]);var inst_24657 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_24688__$1 = (function (){var statearr_24701 = state_24688;(statearr_24701[11] = inst_24656);
return statearr_24701;
})();var statearr_24702_24727 = state_24688__$1;(statearr_24702_24727[2] = inst_24657);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24688__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 11))
{var inst_24652 = (state_24688[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24688,10,Object,null,9);var inst_24661 = chs__$1.call(null,inst_24652);var inst_24662 = done.call(null,inst_24652);var inst_24663 = cljs.core.async.take_BANG_.call(null,inst_24661,inst_24662);var state_24688__$1 = state_24688;var statearr_24703_24728 = state_24688__$1;(statearr_24703_24728[2] = inst_24663);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24688__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 12))
{var inst_24674 = (state_24688[12]);var inst_24674__$1 = (state_24688[2]);var inst_24675 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24674__$1);var state_24688__$1 = (function (){var statearr_24704 = state_24688;(statearr_24704[12] = inst_24674__$1);
return statearr_24704;
})();if(cljs.core.truth_(inst_24675))
{var statearr_24705_24729 = state_24688__$1;(statearr_24705_24729[1] = 13);
} else
{var statearr_24706_24730 = state_24688__$1;(statearr_24706_24730[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 13))
{var inst_24677 = cljs.core.async.close_BANG_.call(null,out);var state_24688__$1 = state_24688;var statearr_24707_24731 = state_24688__$1;(statearr_24707_24731[2] = inst_24677);
(statearr_24707_24731[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 14))
{var inst_24674 = (state_24688[12]);var inst_24679 = cljs.core.apply.call(null,f,inst_24674);var state_24688__$1 = state_24688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24688__$1,16,out,inst_24679);
} else
{if((state_val_24689 === 15))
{var inst_24684 = (state_24688[2]);var state_24688__$1 = state_24688;var statearr_24708_24732 = state_24688__$1;(statearr_24708_24732[2] = inst_24684);
(statearr_24708_24732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24689 === 16))
{var inst_24681 = (state_24688[2]);var state_24688__$1 = (function (){var statearr_24709 = state_24688;(statearr_24709[13] = inst_24681);
return statearr_24709;
})();var statearr_24710_24733 = state_24688__$1;(statearr_24710_24733[2] = null);
(statearr_24710_24733[1] = 2);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_24714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24714[0] = state_machine__15108__auto__);
(statearr_24714[1] = 1);
return statearr_24714;
});
var state_machine__15108__auto____1 = (function (state_24688){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_24688);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e24715){if((e24715 instanceof Object))
{var ex__15111__auto__ = e24715;var statearr_24716_24734 = state_24688;(statearr_24716_24734[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24735 = state_24688;
state_24688 = G__24735;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_24688){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_24688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_24717 = f__15178__auto__.call(null);(statearr_24717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___24718);
return statearr_24717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15177__auto___24843 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_24819){var state_val_24820 = (state_24819[1]);if((state_val_24820 === 1))
{var inst_24790 = cljs.core.vec.call(null,chs);var inst_24791 = inst_24790;var state_24819__$1 = (function (){var statearr_24821 = state_24819;(statearr_24821[7] = inst_24791);
return statearr_24821;
})();var statearr_24822_24844 = state_24819__$1;(statearr_24822_24844[2] = null);
(statearr_24822_24844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 2))
{var inst_24791 = (state_24819[7]);var inst_24793 = cljs.core.count.call(null,inst_24791);var inst_24794 = (inst_24793 > 0);var state_24819__$1 = state_24819;if(cljs.core.truth_(inst_24794))
{var statearr_24823_24845 = state_24819__$1;(statearr_24823_24845[1] = 4);
} else
{var statearr_24824_24846 = state_24819__$1;(statearr_24824_24846[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 3))
{var inst_24817 = (state_24819[2]);var state_24819__$1 = state_24819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24819__$1,inst_24817);
} else
{if((state_val_24820 === 4))
{var inst_24791 = (state_24819[7]);var state_24819__$1 = state_24819;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24819__$1,7,inst_24791);
} else
{if((state_val_24820 === 5))
{var inst_24813 = cljs.core.async.close_BANG_.call(null,out);var state_24819__$1 = state_24819;var statearr_24825_24847 = state_24819__$1;(statearr_24825_24847[2] = inst_24813);
(statearr_24825_24847[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 6))
{var inst_24815 = (state_24819[2]);var state_24819__$1 = state_24819;var statearr_24826_24848 = state_24819__$1;(statearr_24826_24848[2] = inst_24815);
(statearr_24826_24848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 7))
{var inst_24799 = (state_24819[8]);var inst_24798 = (state_24819[9]);var inst_24798__$1 = (state_24819[2]);var inst_24799__$1 = cljs.core.nth.call(null,inst_24798__$1,0,null);var inst_24800 = cljs.core.nth.call(null,inst_24798__$1,1,null);var inst_24801 = (inst_24799__$1 == null);var state_24819__$1 = (function (){var statearr_24827 = state_24819;(statearr_24827[10] = inst_24800);
(statearr_24827[8] = inst_24799__$1);
(statearr_24827[9] = inst_24798__$1);
return statearr_24827;
})();if(cljs.core.truth_(inst_24801))
{var statearr_24828_24849 = state_24819__$1;(statearr_24828_24849[1] = 8);
} else
{var statearr_24829_24850 = state_24819__$1;(statearr_24829_24850[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 8))
{var inst_24800 = (state_24819[10]);var inst_24799 = (state_24819[8]);var inst_24798 = (state_24819[9]);var inst_24791 = (state_24819[7]);var inst_24803 = (function (){var c = inst_24800;var v = inst_24799;var vec__24796 = inst_24798;var cs = inst_24791;return ((function (c,v,vec__24796,cs,inst_24800,inst_24799,inst_24798,inst_24791,state_val_24820){
return (function (p1__24736_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__24736_SHARP_);
});
;})(c,v,vec__24796,cs,inst_24800,inst_24799,inst_24798,inst_24791,state_val_24820))
})();var inst_24804 = cljs.core.filterv.call(null,inst_24803,inst_24791);var inst_24791__$1 = inst_24804;var state_24819__$1 = (function (){var statearr_24830 = state_24819;(statearr_24830[7] = inst_24791__$1);
return statearr_24830;
})();var statearr_24831_24851 = state_24819__$1;(statearr_24831_24851[2] = null);
(statearr_24831_24851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 9))
{var inst_24799 = (state_24819[8]);var state_24819__$1 = state_24819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24819__$1,11,out,inst_24799);
} else
{if((state_val_24820 === 10))
{var inst_24811 = (state_24819[2]);var state_24819__$1 = state_24819;var statearr_24833_24852 = state_24819__$1;(statearr_24833_24852[2] = inst_24811);
(statearr_24833_24852[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24820 === 11))
{var inst_24791 = (state_24819[7]);var inst_24808 = (state_24819[2]);var tmp24832 = inst_24791;var inst_24791__$1 = tmp24832;var state_24819__$1 = (function (){var statearr_24834 = state_24819;(statearr_24834[7] = inst_24791__$1);
(statearr_24834[11] = inst_24808);
return statearr_24834;
})();var statearr_24835_24853 = state_24819__$1;(statearr_24835_24853[2] = null);
(statearr_24835_24853[1] = 2);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_24839 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24839[0] = state_machine__15108__auto__);
(statearr_24839[1] = 1);
return statearr_24839;
});
var state_machine__15108__auto____1 = (function (state_24819){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_24819);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e24840){if((e24840 instanceof Object))
{var ex__15111__auto__ = e24840;var statearr_24841_24854 = state_24819;(statearr_24841_24854[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24840;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24855 = state_24819;
state_24819 = G__24855;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_24819){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_24819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_24842 = f__15178__auto__.call(null);(statearr_24842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___24843);
return statearr_24842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15177__auto___24948 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_24925){var state_val_24926 = (state_24925[1]);if((state_val_24926 === 1))
{var inst_24902 = 0;var state_24925__$1 = (function (){var statearr_24927 = state_24925;(statearr_24927[7] = inst_24902);
return statearr_24927;
})();var statearr_24928_24949 = state_24925__$1;(statearr_24928_24949[2] = null);
(statearr_24928_24949[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 2))
{var inst_24902 = (state_24925[7]);var inst_24904 = (inst_24902 < n);var state_24925__$1 = state_24925;if(cljs.core.truth_(inst_24904))
{var statearr_24929_24950 = state_24925__$1;(statearr_24929_24950[1] = 4);
} else
{var statearr_24930_24951 = state_24925__$1;(statearr_24930_24951[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 3))
{var inst_24922 = (state_24925[2]);var inst_24923 = cljs.core.async.close_BANG_.call(null,out);var state_24925__$1 = (function (){var statearr_24931 = state_24925;(statearr_24931[8] = inst_24922);
return statearr_24931;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else
{if((state_val_24926 === 4))
{var state_24925__$1 = state_24925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,7,ch);
} else
{if((state_val_24926 === 5))
{var state_24925__$1 = state_24925;var statearr_24932_24952 = state_24925__$1;(statearr_24932_24952[2] = null);
(statearr_24932_24952[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 6))
{var inst_24920 = (state_24925[2]);var state_24925__$1 = state_24925;var statearr_24933_24953 = state_24925__$1;(statearr_24933_24953[2] = inst_24920);
(statearr_24933_24953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 7))
{var inst_24907 = (state_24925[9]);var inst_24907__$1 = (state_24925[2]);var inst_24908 = (inst_24907__$1 == null);var inst_24909 = cljs.core.not.call(null,inst_24908);var state_24925__$1 = (function (){var statearr_24934 = state_24925;(statearr_24934[9] = inst_24907__$1);
return statearr_24934;
})();if(inst_24909)
{var statearr_24935_24954 = state_24925__$1;(statearr_24935_24954[1] = 8);
} else
{var statearr_24936_24955 = state_24925__$1;(statearr_24936_24955[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 8))
{var inst_24907 = (state_24925[9]);var state_24925__$1 = state_24925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24925__$1,11,out,inst_24907);
} else
{if((state_val_24926 === 9))
{var state_24925__$1 = state_24925;var statearr_24937_24956 = state_24925__$1;(statearr_24937_24956[2] = null);
(statearr_24937_24956[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 10))
{var inst_24917 = (state_24925[2]);var state_24925__$1 = state_24925;var statearr_24938_24957 = state_24925__$1;(statearr_24938_24957[2] = inst_24917);
(statearr_24938_24957[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24926 === 11))
{var inst_24902 = (state_24925[7]);var inst_24912 = (state_24925[2]);var inst_24913 = (inst_24902 + 1);var inst_24902__$1 = inst_24913;var state_24925__$1 = (function (){var statearr_24939 = state_24925;(statearr_24939[7] = inst_24902__$1);
(statearr_24939[10] = inst_24912);
return statearr_24939;
})();var statearr_24940_24958 = state_24925__$1;(statearr_24940_24958[2] = null);
(statearr_24940_24958[1] = 2);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_24944 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24944[0] = state_machine__15108__auto__);
(statearr_24944[1] = 1);
return statearr_24944;
});
var state_machine__15108__auto____1 = (function (state_24925){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_24925);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e24945){if((e24945 instanceof Object))
{var ex__15111__auto__ = e24945;var statearr_24946_24959 = state_24925;(statearr_24946_24959[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24960 = state_24925;
state_24925 = G__24960;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_24947 = f__15178__auto__.call(null);(statearr_24947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___24948);
return statearr_24947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15177__auto___25057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_25032){var state_val_25033 = (state_25032[1]);if((state_val_25033 === 1))
{var inst_25009 = null;var state_25032__$1 = (function (){var statearr_25034 = state_25032;(statearr_25034[7] = inst_25009);
return statearr_25034;
})();var statearr_25035_25058 = state_25032__$1;(statearr_25035_25058[2] = null);
(statearr_25035_25058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 2))
{var state_25032__$1 = state_25032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25032__$1,4,ch);
} else
{if((state_val_25033 === 3))
{var inst_25029 = (state_25032[2]);var inst_25030 = cljs.core.async.close_BANG_.call(null,out);var state_25032__$1 = (function (){var statearr_25036 = state_25032;(statearr_25036[8] = inst_25029);
return statearr_25036;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25032__$1,inst_25030);
} else
{if((state_val_25033 === 4))
{var inst_25012 = (state_25032[9]);var inst_25012__$1 = (state_25032[2]);var inst_25013 = (inst_25012__$1 == null);var inst_25014 = cljs.core.not.call(null,inst_25013);var state_25032__$1 = (function (){var statearr_25037 = state_25032;(statearr_25037[9] = inst_25012__$1);
return statearr_25037;
})();if(inst_25014)
{var statearr_25038_25059 = state_25032__$1;(statearr_25038_25059[1] = 5);
} else
{var statearr_25039_25060 = state_25032__$1;(statearr_25039_25060[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 5))
{var inst_25012 = (state_25032[9]);var inst_25009 = (state_25032[7]);var inst_25016 = cljs.core._EQ_.call(null,inst_25012,inst_25009);var state_25032__$1 = state_25032;if(inst_25016)
{var statearr_25040_25061 = state_25032__$1;(statearr_25040_25061[1] = 8);
} else
{var statearr_25041_25062 = state_25032__$1;(statearr_25041_25062[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 6))
{var state_25032__$1 = state_25032;var statearr_25043_25063 = state_25032__$1;(statearr_25043_25063[2] = null);
(statearr_25043_25063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 7))
{var inst_25027 = (state_25032[2]);var state_25032__$1 = state_25032;var statearr_25044_25064 = state_25032__$1;(statearr_25044_25064[2] = inst_25027);
(statearr_25044_25064[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 8))
{var inst_25009 = (state_25032[7]);var tmp25042 = inst_25009;var inst_25009__$1 = tmp25042;var state_25032__$1 = (function (){var statearr_25045 = state_25032;(statearr_25045[7] = inst_25009__$1);
return statearr_25045;
})();var statearr_25046_25065 = state_25032__$1;(statearr_25046_25065[2] = null);
(statearr_25046_25065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 9))
{var inst_25012 = (state_25032[9]);var state_25032__$1 = state_25032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25032__$1,11,out,inst_25012);
} else
{if((state_val_25033 === 10))
{var inst_25024 = (state_25032[2]);var state_25032__$1 = state_25032;var statearr_25047_25066 = state_25032__$1;(statearr_25047_25066[2] = inst_25024);
(statearr_25047_25066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25033 === 11))
{var inst_25012 = (state_25032[9]);var inst_25021 = (state_25032[2]);var inst_25009 = inst_25012;var state_25032__$1 = (function (){var statearr_25048 = state_25032;(statearr_25048[7] = inst_25009);
(statearr_25048[10] = inst_25021);
return statearr_25048;
})();var statearr_25049_25067 = state_25032__$1;(statearr_25049_25067[2] = null);
(statearr_25049_25067[1] = 2);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_25053 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25053[0] = state_machine__15108__auto__);
(statearr_25053[1] = 1);
return statearr_25053;
});
var state_machine__15108__auto____1 = (function (state_25032){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_25032);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e25054){if((e25054 instanceof Object))
{var ex__15111__auto__ = e25054;var statearr_25055_25068 = state_25032;(statearr_25055_25068[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25069 = state_25032;
state_25032 = G__25069;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_25032){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_25032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_25056 = f__15178__auto__.call(null);(statearr_25056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___25057);
return statearr_25056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15177__auto___25204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_25174){var state_val_25175 = (state_25174[1]);if((state_val_25175 === 1))
{var inst_25137 = (new Array(n));var inst_25138 = inst_25137;var inst_25139 = 0;var state_25174__$1 = (function (){var statearr_25176 = state_25174;(statearr_25176[7] = inst_25139);
(statearr_25176[8] = inst_25138);
return statearr_25176;
})();var statearr_25177_25205 = state_25174__$1;(statearr_25177_25205[2] = null);
(statearr_25177_25205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 2))
{var state_25174__$1 = state_25174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25174__$1,4,ch);
} else
{if((state_val_25175 === 3))
{var inst_25172 = (state_25174[2]);var state_25174__$1 = state_25174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25174__$1,inst_25172);
} else
{if((state_val_25175 === 4))
{var inst_25142 = (state_25174[9]);var inst_25142__$1 = (state_25174[2]);var inst_25143 = (inst_25142__$1 == null);var inst_25144 = cljs.core.not.call(null,inst_25143);var state_25174__$1 = (function (){var statearr_25178 = state_25174;(statearr_25178[9] = inst_25142__$1);
return statearr_25178;
})();if(inst_25144)
{var statearr_25179_25206 = state_25174__$1;(statearr_25179_25206[1] = 5);
} else
{var statearr_25180_25207 = state_25174__$1;(statearr_25180_25207[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 5))
{var inst_25147 = (state_25174[10]);var inst_25139 = (state_25174[7]);var inst_25138 = (state_25174[8]);var inst_25142 = (state_25174[9]);var inst_25146 = (inst_25138[inst_25139] = inst_25142);var inst_25147__$1 = (inst_25139 + 1);var inst_25148 = (inst_25147__$1 < n);var state_25174__$1 = (function (){var statearr_25181 = state_25174;(statearr_25181[10] = inst_25147__$1);
(statearr_25181[11] = inst_25146);
return statearr_25181;
})();if(cljs.core.truth_(inst_25148))
{var statearr_25182_25208 = state_25174__$1;(statearr_25182_25208[1] = 8);
} else
{var statearr_25183_25209 = state_25174__$1;(statearr_25183_25209[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 6))
{var inst_25139 = (state_25174[7]);var inst_25160 = (inst_25139 > 0);var state_25174__$1 = state_25174;if(cljs.core.truth_(inst_25160))
{var statearr_25185_25210 = state_25174__$1;(statearr_25185_25210[1] = 12);
} else
{var statearr_25186_25211 = state_25174__$1;(statearr_25186_25211[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 7))
{var inst_25170 = (state_25174[2]);var state_25174__$1 = state_25174;var statearr_25187_25212 = state_25174__$1;(statearr_25187_25212[2] = inst_25170);
(statearr_25187_25212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 8))
{var inst_25147 = (state_25174[10]);var inst_25138 = (state_25174[8]);var tmp25184 = inst_25138;var inst_25138__$1 = tmp25184;var inst_25139 = inst_25147;var state_25174__$1 = (function (){var statearr_25188 = state_25174;(statearr_25188[7] = inst_25139);
(statearr_25188[8] = inst_25138__$1);
return statearr_25188;
})();var statearr_25189_25213 = state_25174__$1;(statearr_25189_25213[2] = null);
(statearr_25189_25213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 9))
{var inst_25138 = (state_25174[8]);var inst_25152 = cljs.core.vec.call(null,inst_25138);var state_25174__$1 = state_25174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25174__$1,11,out,inst_25152);
} else
{if((state_val_25175 === 10))
{var inst_25158 = (state_25174[2]);var state_25174__$1 = state_25174;var statearr_25190_25214 = state_25174__$1;(statearr_25190_25214[2] = inst_25158);
(statearr_25190_25214[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 11))
{var inst_25154 = (state_25174[2]);var inst_25155 = (new Array(n));var inst_25138 = inst_25155;var inst_25139 = 0;var state_25174__$1 = (function (){var statearr_25191 = state_25174;(statearr_25191[7] = inst_25139);
(statearr_25191[8] = inst_25138);
(statearr_25191[12] = inst_25154);
return statearr_25191;
})();var statearr_25192_25215 = state_25174__$1;(statearr_25192_25215[2] = null);
(statearr_25192_25215[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 12))
{var inst_25138 = (state_25174[8]);var inst_25162 = cljs.core.vec.call(null,inst_25138);var state_25174__$1 = state_25174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25174__$1,15,out,inst_25162);
} else
{if((state_val_25175 === 13))
{var state_25174__$1 = state_25174;var statearr_25193_25216 = state_25174__$1;(statearr_25193_25216[2] = null);
(statearr_25193_25216[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 14))
{var inst_25167 = (state_25174[2]);var inst_25168 = cljs.core.async.close_BANG_.call(null,out);var state_25174__$1 = (function (){var statearr_25194 = state_25174;(statearr_25194[13] = inst_25167);
return statearr_25194;
})();var statearr_25195_25217 = state_25174__$1;(statearr_25195_25217[2] = inst_25168);
(statearr_25195_25217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25175 === 15))
{var inst_25164 = (state_25174[2]);var state_25174__$1 = state_25174;var statearr_25196_25218 = state_25174__$1;(statearr_25196_25218[2] = inst_25164);
(statearr_25196_25218[1] = 14);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_25200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25200[0] = state_machine__15108__auto__);
(statearr_25200[1] = 1);
return statearr_25200;
});
var state_machine__15108__auto____1 = (function (state_25174){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_25174);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e25201){if((e25201 instanceof Object))
{var ex__15111__auto__ = e25201;var statearr_25202_25219 = state_25174;(statearr_25202_25219[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25220 = state_25174;
state_25174 = G__25220;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_25174){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_25174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_25203 = f__15178__auto__.call(null);(statearr_25203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___25204);
return statearr_25203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15177__auto___25363 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__15178__auto__ = (function (){var switch__15107__auto__ = (function (state_25333){var state_val_25334 = (state_25333[1]);if((state_val_25334 === 1))
{var inst_25292 = [];var inst_25293 = inst_25292;var inst_25294 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_25333__$1 = (function (){var statearr_25335 = state_25333;(statearr_25335[7] = inst_25294);
(statearr_25335[8] = inst_25293);
return statearr_25335;
})();var statearr_25336_25364 = state_25333__$1;(statearr_25336_25364[2] = null);
(statearr_25336_25364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 2))
{var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,4,ch);
} else
{if((state_val_25334 === 3))
{var inst_25331 = (state_25333[2]);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else
{if((state_val_25334 === 4))
{var inst_25297 = (state_25333[9]);var inst_25297__$1 = (state_25333[2]);var inst_25298 = (inst_25297__$1 == null);var inst_25299 = cljs.core.not.call(null,inst_25298);var state_25333__$1 = (function (){var statearr_25337 = state_25333;(statearr_25337[9] = inst_25297__$1);
return statearr_25337;
})();if(inst_25299)
{var statearr_25338_25365 = state_25333__$1;(statearr_25338_25365[1] = 5);
} else
{var statearr_25339_25366 = state_25333__$1;(statearr_25339_25366[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 5))
{var inst_25297 = (state_25333[9]);var inst_25294 = (state_25333[7]);var inst_25301 = (state_25333[10]);var inst_25301__$1 = f.call(null,inst_25297);var inst_25302 = cljs.core._EQ_.call(null,inst_25301__$1,inst_25294);var inst_25303 = cljs.core.keyword_identical_QMARK_.call(null,inst_25294,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_25304 = (inst_25302) || (inst_25303);var state_25333__$1 = (function (){var statearr_25340 = state_25333;(statearr_25340[10] = inst_25301__$1);
return statearr_25340;
})();if(cljs.core.truth_(inst_25304))
{var statearr_25341_25367 = state_25333__$1;(statearr_25341_25367[1] = 8);
} else
{var statearr_25342_25368 = state_25333__$1;(statearr_25342_25368[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 6))
{var inst_25293 = (state_25333[8]);var inst_25318 = inst_25293.length;var inst_25319 = (inst_25318 > 0);var state_25333__$1 = state_25333;if(cljs.core.truth_(inst_25319))
{var statearr_25344_25369 = state_25333__$1;(statearr_25344_25369[1] = 12);
} else
{var statearr_25345_25370 = state_25333__$1;(statearr_25345_25370[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 7))
{var inst_25329 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25346_25371 = state_25333__$1;(statearr_25346_25371[2] = inst_25329);
(statearr_25346_25371[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 8))
{var inst_25297 = (state_25333[9]);var inst_25293 = (state_25333[8]);var inst_25301 = (state_25333[10]);var inst_25306 = inst_25293.push(inst_25297);var tmp25343 = inst_25293;var inst_25293__$1 = tmp25343;var inst_25294 = inst_25301;var state_25333__$1 = (function (){var statearr_25347 = state_25333;(statearr_25347[7] = inst_25294);
(statearr_25347[8] = inst_25293__$1);
(statearr_25347[11] = inst_25306);
return statearr_25347;
})();var statearr_25348_25372 = state_25333__$1;(statearr_25348_25372[2] = null);
(statearr_25348_25372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 9))
{var inst_25293 = (state_25333[8]);var inst_25309 = cljs.core.vec.call(null,inst_25293);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,11,out,inst_25309);
} else
{if((state_val_25334 === 10))
{var inst_25316 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25349_25373 = state_25333__$1;(statearr_25349_25373[2] = inst_25316);
(statearr_25349_25373[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 11))
{var inst_25297 = (state_25333[9]);var inst_25301 = (state_25333[10]);var inst_25311 = (state_25333[2]);var inst_25312 = [];var inst_25313 = inst_25312.push(inst_25297);var inst_25293 = inst_25312;var inst_25294 = inst_25301;var state_25333__$1 = (function (){var statearr_25350 = state_25333;(statearr_25350[7] = inst_25294);
(statearr_25350[8] = inst_25293);
(statearr_25350[12] = inst_25311);
(statearr_25350[13] = inst_25313);
return statearr_25350;
})();var statearr_25351_25374 = state_25333__$1;(statearr_25351_25374[2] = null);
(statearr_25351_25374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 12))
{var inst_25293 = (state_25333[8]);var inst_25321 = cljs.core.vec.call(null,inst_25293);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,15,out,inst_25321);
} else
{if((state_val_25334 === 13))
{var state_25333__$1 = state_25333;var statearr_25352_25375 = state_25333__$1;(statearr_25352_25375[2] = null);
(statearr_25352_25375[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 14))
{var inst_25326 = (state_25333[2]);var inst_25327 = cljs.core.async.close_BANG_.call(null,out);var state_25333__$1 = (function (){var statearr_25353 = state_25333;(statearr_25353[14] = inst_25326);
return statearr_25353;
})();var statearr_25354_25376 = state_25333__$1;(statearr_25354_25376[2] = inst_25327);
(statearr_25354_25376[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 15))
{var inst_25323 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25355_25377 = state_25333__$1;(statearr_25355_25377[2] = inst_25323);
(statearr_25355_25377[1] = 14);
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
});return ((function (switch__15107__auto__){
return (function() {
var state_machine__15108__auto__ = null;
var state_machine__15108__auto____0 = (function (){var statearr_25359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25359[0] = state_machine__15108__auto__);
(statearr_25359[1] = 1);
return statearr_25359;
});
var state_machine__15108__auto____1 = (function (state_25333){while(true){
var ret_value__15109__auto__ = (function (){try{while(true){
var result__15110__auto__ = switch__15107__auto__.call(null,state_25333);if(cljs.core.keyword_identical_QMARK_.call(null,result__15110__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15110__auto__;
}
break;
}
}catch (e25360){if((e25360 instanceof Object))
{var ex__15111__auto__ = e25360;var statearr_25361_25378 = state_25333;(statearr_25361_25378[5] = ex__15111__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15109__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25379 = state_25333;
state_25333 = G__25379;
continue;
}
} else
{return ret_value__15109__auto__;
}
break;
}
});
state_machine__15108__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return state_machine__15108__auto____0.call(this);
case 1:
return state_machine__15108__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15108__auto____0;
state_machine__15108__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15108__auto____1;
return state_machine__15108__auto__;
})()
;})(switch__15107__auto__))
})();var state__15179__auto__ = (function (){var statearr_25362 = f__15178__auto__.call(null);(statearr_25362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15177__auto___25363);
return statearr_25362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15179__auto__);
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