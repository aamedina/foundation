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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t79734 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79734 = (function (f,fn_handler,meta79735){
this.f = f;
this.fn_handler = fn_handler;
this.meta79735 = meta79735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79734.cljs$lang$type = true;
cljs.core.async.t79734.cljs$lang$ctorStr = "cljs.core.async/t79734";
cljs.core.async.t79734.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79734");
});
cljs.core.async.t79734.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t79734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t79734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t79734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79736){var self__ = this;
var _79736__$1 = this;return self__.meta79735;
});
cljs.core.async.t79734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79736,meta79735__$1){var self__ = this;
var _79736__$1 = this;return (new cljs.core.async.t79734(self__.f,self__.fn_handler,meta79735__$1));
});
cljs.core.async.__GT_t79734 = (function __GT_t79734(f__$1,fn_handler__$1,meta79735){return (new cljs.core.async.t79734(f__$1,fn_handler__$1,meta79735));
});
}
return (new cljs.core.async.t79734(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__79738 = buff;if(G__79738)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__79738.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__79738.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__79738);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__79738);
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
{var val_79739 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_79739);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_79739);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__6277__auto__ = ret;if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__6277__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__7112__auto___79740 = n;var x_79741 = 0;while(true){
if((x_79741 < n__7112__auto___79740))
{(a[x_79741] = 0);
{
var G__79742 = (x_79741 + 1);
x_79741 = G__79742;
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
var G__79743 = (i + 1);
i = G__79743;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t79747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79747 = (function (flag,alt_flag,meta79748){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta79748 = meta79748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79747.cljs$lang$type = true;
cljs.core.async.t79747.cljs$lang$ctorStr = "cljs.core.async/t79747";
cljs.core.async.t79747.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79747");
});
cljs.core.async.t79747.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t79747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t79747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t79747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79749){var self__ = this;
var _79749__$1 = this;return self__.meta79748;
});
cljs.core.async.t79747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79749,meta79748__$1){var self__ = this;
var _79749__$1 = this;return (new cljs.core.async.t79747(self__.flag,self__.alt_flag,meta79748__$1));
});
cljs.core.async.__GT_t79747 = (function __GT_t79747(flag__$1,alt_flag__$1,meta79748){return (new cljs.core.async.t79747(flag__$1,alt_flag__$1,meta79748));
});
}
return (new cljs.core.async.t79747(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t79753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79753 = (function (cb,flag,alt_handler,meta79754){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta79754 = meta79754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79753.cljs$lang$type = true;
cljs.core.async.t79753.cljs$lang$ctorStr = "cljs.core.async/t79753";
cljs.core.async.t79753.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79753");
});
cljs.core.async.t79753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t79753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t79753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t79753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79755){var self__ = this;
var _79755__$1 = this;return self__.meta79754;
});
cljs.core.async.t79753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79755,meta79754__$1){var self__ = this;
var _79755__$1 = this;return (new cljs.core.async.t79753(self__.cb,self__.flag,self__.alt_handler,meta79754__$1));
});
cljs.core.async.__GT_t79753 = (function __GT_t79753(cb__$1,flag__$1,alt_handler__$1,meta79754){return (new cljs.core.async.t79753(cb__$1,flag__$1,alt_handler__$1,meta79754));
});
}
return (new cljs.core.async.t79753(cb,flag,alt_handler,null));
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
return (function (p1__79756_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79756_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6289__auto__ = wport;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__79757 = (i + 1);
i = G__79757;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__6289__auto__ = ret;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__6277__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__6277__auto__;
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
var alts_BANG___delegate = function (ports,p__79758){var map__79760 = p__79758;var map__79760__$1 = ((cljs.core.seq_QMARK_.call(null,map__79760))?cljs.core.apply.call(null,cljs.core.hash_map,map__79760):map__79760);var opts = map__79760__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__79758 = null;if (arguments.length > 1) {
  p__79758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__79758);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__79761){
var ports = cljs.core.first(arglist__79761);
var p__79758 = cljs.core.rest(arglist__79761);
return alts_BANG___delegate(ports,p__79758);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t79769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79769 = (function (ch,f,map_LT_,meta79770){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta79770 = meta79770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79769.cljs$lang$type = true;
cljs.core.async.t79769.cljs$lang$ctorStr = "cljs.core.async/t79769";
cljs.core.async.t79769.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79769");
});
cljs.core.async.t79769.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t79769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t79769.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t79769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t79772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79772 = (function (fn1,_,meta79770,ch,f,map_LT_,meta79773){
this.fn1 = fn1;
this._ = _;
this.meta79770 = meta79770;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta79773 = meta79773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79772.cljs$lang$type = true;
cljs.core.async.t79772.cljs$lang$ctorStr = "cljs.core.async/t79772";
cljs.core.async.t79772.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79772");
});
cljs.core.async.t79772.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t79772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t79772.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t79772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__79762_SHARP_){return f1.call(null,(((p1__79762_SHARP_ == null))?null:self__.f.call(null,p1__79762_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t79772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79774){var self__ = this;
var _79774__$1 = this;return self__.meta79773;
});
cljs.core.async.t79772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79774,meta79773__$1){var self__ = this;
var _79774__$1 = this;return (new cljs.core.async.t79772(self__.fn1,self__._,self__.meta79770,self__.ch,self__.f,self__.map_LT_,meta79773__$1));
});
cljs.core.async.__GT_t79772 = (function __GT_t79772(fn1__$1,___$2,meta79770__$1,ch__$2,f__$2,map_LT___$2,meta79773){return (new cljs.core.async.t79772(fn1__$1,___$2,meta79770__$1,ch__$2,f__$2,map_LT___$2,meta79773));
});
}
return (new cljs.core.async.t79772(fn1,___$1,self__.meta79770,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__6277__auto__ = ret;if(cljs.core.truth_(and__6277__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__6277__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t79769.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t79769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t79769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79771){var self__ = this;
var _79771__$1 = this;return self__.meta79770;
});
cljs.core.async.t79769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79771,meta79770__$1){var self__ = this;
var _79771__$1 = this;return (new cljs.core.async.t79769(self__.ch,self__.f,self__.map_LT_,meta79770__$1));
});
cljs.core.async.__GT_t79769 = (function __GT_t79769(ch__$1,f__$1,map_LT___$1,meta79770){return (new cljs.core.async.t79769(ch__$1,f__$1,map_LT___$1,meta79770));
});
}
return (new cljs.core.async.t79769(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t79778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79778 = (function (ch,f,map_GT_,meta79779){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta79779 = meta79779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79778.cljs$lang$type = true;
cljs.core.async.t79778.cljs$lang$ctorStr = "cljs.core.async/t79778";
cljs.core.async.t79778.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79778");
});
cljs.core.async.t79778.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t79778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t79778.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t79778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t79778.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t79778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t79778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79780){var self__ = this;
var _79780__$1 = this;return self__.meta79779;
});
cljs.core.async.t79778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79780,meta79779__$1){var self__ = this;
var _79780__$1 = this;return (new cljs.core.async.t79778(self__.ch,self__.f,self__.map_GT_,meta79779__$1));
});
cljs.core.async.__GT_t79778 = (function __GT_t79778(ch__$1,f__$1,map_GT___$1,meta79779){return (new cljs.core.async.t79778(ch__$1,f__$1,map_GT___$1,meta79779));
});
}
return (new cljs.core.async.t79778(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t79784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t79784 = (function (ch,p,filter_GT_,meta79785){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta79785 = meta79785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t79784.cljs$lang$type = true;
cljs.core.async.t79784.cljs$lang$ctorStr = "cljs.core.async/t79784";
cljs.core.async.t79784.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t79784");
});
cljs.core.async.t79784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t79784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t79784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t79784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t79784.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t79784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t79784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79786){var self__ = this;
var _79786__$1 = this;return self__.meta79785;
});
cljs.core.async.t79784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79786,meta79785__$1){var self__ = this;
var _79786__$1 = this;return (new cljs.core.async.t79784(self__.ch,self__.p,self__.filter_GT_,meta79785__$1));
});
cljs.core.async.__GT_t79784 = (function __GT_t79784(ch__$1,p__$1,filter_GT___$1,meta79785){return (new cljs.core.async.t79784(ch__$1,p__$1,filter_GT___$1,meta79785));
});
}
return (new cljs.core.async.t79784(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___79869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_79848){var state_val_79849 = (state_79848[1]);if((state_val_79849 === 1))
{var state_79848__$1 = state_79848;var statearr_79850_79870 = state_79848__$1;(statearr_79850_79870[2] = null);
(statearr_79850_79870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 2))
{var state_79848__$1 = state_79848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79848__$1,4,ch);
} else
{if((state_val_79849 === 3))
{var inst_79846 = (state_79848[2]);var state_79848__$1 = state_79848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79848__$1,inst_79846);
} else
{if((state_val_79849 === 4))
{var inst_79830 = (state_79848[7]);var inst_79830__$1 = (state_79848[2]);var inst_79831 = (inst_79830__$1 == null);var state_79848__$1 = (function (){var statearr_79851 = state_79848;(statearr_79851[7] = inst_79830__$1);
return statearr_79851;
})();if(cljs.core.truth_(inst_79831))
{var statearr_79852_79871 = state_79848__$1;(statearr_79852_79871[1] = 5);
} else
{var statearr_79853_79872 = state_79848__$1;(statearr_79853_79872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 5))
{var inst_79833 = cljs.core.async.close_BANG_.call(null,out);var state_79848__$1 = state_79848;var statearr_79854_79873 = state_79848__$1;(statearr_79854_79873[2] = inst_79833);
(statearr_79854_79873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 6))
{var inst_79830 = (state_79848[7]);var inst_79835 = p.call(null,inst_79830);var state_79848__$1 = state_79848;if(cljs.core.truth_(inst_79835))
{var statearr_79855_79874 = state_79848__$1;(statearr_79855_79874[1] = 8);
} else
{var statearr_79856_79875 = state_79848__$1;(statearr_79856_79875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 7))
{var inst_79844 = (state_79848[2]);var state_79848__$1 = state_79848;var statearr_79857_79876 = state_79848__$1;(statearr_79857_79876[2] = inst_79844);
(statearr_79857_79876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 8))
{var inst_79830 = (state_79848[7]);var state_79848__$1 = state_79848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79848__$1,11,out,inst_79830);
} else
{if((state_val_79849 === 9))
{var state_79848__$1 = state_79848;var statearr_79858_79877 = state_79848__$1;(statearr_79858_79877[2] = null);
(statearr_79858_79877[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 10))
{var inst_79841 = (state_79848[2]);var state_79848__$1 = (function (){var statearr_79859 = state_79848;(statearr_79859[8] = inst_79841);
return statearr_79859;
})();var statearr_79860_79878 = state_79848__$1;(statearr_79860_79878[2] = null);
(statearr_79860_79878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_79849 === 11))
{var inst_79838 = (state_79848[2]);var state_79848__$1 = state_79848;var statearr_79861_79879 = state_79848__$1;(statearr_79861_79879[2] = inst_79838);
(statearr_79861_79879[1] = 10);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_79865 = (new Array(9));(statearr_79865[0] = state_machine__13310__auto__);
(statearr_79865[1] = 1);
return statearr_79865;
});
var state_machine__13310__auto____1 = (function (state_79848){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_79848);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e79866){if((e79866 instanceof Object))
{var ex__13313__auto__ = e79866;var statearr_79867_79880 = state_79848;(statearr_79867_79880[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e79866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__79881 = state_79848;
state_79848 = G__79881;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_79848){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_79848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_79868 = f__13410__auto__.call(null);(statearr_79868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___79869);
return statearr_79868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_80033){var state_val_80034 = (state_80033[1]);if((state_val_80034 === 1))
{var state_80033__$1 = state_80033;var statearr_80035_80072 = state_80033__$1;(statearr_80035_80072[2] = null);
(statearr_80035_80072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 2))
{var state_80033__$1 = state_80033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80033__$1,4,in$);
} else
{if((state_val_80034 === 3))
{var inst_80031 = (state_80033[2]);var state_80033__$1 = state_80033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80033__$1,inst_80031);
} else
{if((state_val_80034 === 4))
{var inst_79979 = (state_80033[7]);var inst_79979__$1 = (state_80033[2]);var inst_79980 = (inst_79979__$1 == null);var state_80033__$1 = (function (){var statearr_80036 = state_80033;(statearr_80036[7] = inst_79979__$1);
return statearr_80036;
})();if(cljs.core.truth_(inst_79980))
{var statearr_80037_80073 = state_80033__$1;(statearr_80037_80073[1] = 5);
} else
{var statearr_80038_80074 = state_80033__$1;(statearr_80038_80074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 5))
{var inst_79982 = cljs.core.async.close_BANG_.call(null,out);var state_80033__$1 = state_80033;var statearr_80039_80075 = state_80033__$1;(statearr_80039_80075[2] = inst_79982);
(statearr_80039_80075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 6))
{var inst_79979 = (state_80033[7]);var inst_79984 = f.call(null,inst_79979);var inst_79989 = cljs.core.seq.call(null,inst_79984);var inst_79990 = inst_79989;var inst_79991 = null;var inst_79992 = 0;var inst_79993 = 0;var state_80033__$1 = (function (){var statearr_80040 = state_80033;(statearr_80040[8] = inst_79991);
(statearr_80040[9] = inst_79992);
(statearr_80040[10] = inst_79990);
(statearr_80040[11] = inst_79993);
return statearr_80040;
})();var statearr_80041_80076 = state_80033__$1;(statearr_80041_80076[2] = null);
(statearr_80041_80076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 7))
{var inst_80029 = (state_80033[2]);var state_80033__$1 = state_80033;var statearr_80042_80077 = state_80033__$1;(statearr_80042_80077[2] = inst_80029);
(statearr_80042_80077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 8))
{var inst_79992 = (state_80033[9]);var inst_79993 = (state_80033[11]);var inst_79995 = (inst_79993 < inst_79992);var inst_79996 = inst_79995;var state_80033__$1 = state_80033;if(cljs.core.truth_(inst_79996))
{var statearr_80043_80078 = state_80033__$1;(statearr_80043_80078[1] = 10);
} else
{var statearr_80044_80079 = state_80033__$1;(statearr_80044_80079[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 9))
{var inst_80026 = (state_80033[2]);var state_80033__$1 = (function (){var statearr_80045 = state_80033;(statearr_80045[12] = inst_80026);
return statearr_80045;
})();var statearr_80046_80080 = state_80033__$1;(statearr_80046_80080[2] = null);
(statearr_80046_80080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 10))
{var inst_79991 = (state_80033[8]);var inst_79993 = (state_80033[11]);var inst_79998 = cljs.core._nth.call(null,inst_79991,inst_79993);var state_80033__$1 = state_80033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80033__$1,13,out,inst_79998);
} else
{if((state_val_80034 === 11))
{var inst_79990 = (state_80033[10]);var inst_80004 = (state_80033[13]);var inst_80004__$1 = cljs.core.seq.call(null,inst_79990);var state_80033__$1 = (function (){var statearr_80050 = state_80033;(statearr_80050[13] = inst_80004__$1);
return statearr_80050;
})();if(inst_80004__$1)
{var statearr_80051_80081 = state_80033__$1;(statearr_80051_80081[1] = 14);
} else
{var statearr_80052_80082 = state_80033__$1;(statearr_80052_80082[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 12))
{var inst_80024 = (state_80033[2]);var state_80033__$1 = state_80033;var statearr_80053_80083 = state_80033__$1;(statearr_80053_80083[2] = inst_80024);
(statearr_80053_80083[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 13))
{var inst_79991 = (state_80033[8]);var inst_79992 = (state_80033[9]);var inst_79990 = (state_80033[10]);var inst_79993 = (state_80033[11]);var inst_80000 = (state_80033[2]);var inst_80001 = (inst_79993 + 1);var tmp80047 = inst_79991;var tmp80048 = inst_79992;var tmp80049 = inst_79990;var inst_79990__$1 = tmp80049;var inst_79991__$1 = tmp80047;var inst_79992__$1 = tmp80048;var inst_79993__$1 = inst_80001;var state_80033__$1 = (function (){var statearr_80054 = state_80033;(statearr_80054[14] = inst_80000);
(statearr_80054[8] = inst_79991__$1);
(statearr_80054[9] = inst_79992__$1);
(statearr_80054[10] = inst_79990__$1);
(statearr_80054[11] = inst_79993__$1);
return statearr_80054;
})();var statearr_80055_80084 = state_80033__$1;(statearr_80055_80084[2] = null);
(statearr_80055_80084[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 14))
{var inst_80004 = (state_80033[13]);var inst_80006 = cljs.core.chunked_seq_QMARK_.call(null,inst_80004);var state_80033__$1 = state_80033;if(inst_80006)
{var statearr_80056_80085 = state_80033__$1;(statearr_80056_80085[1] = 17);
} else
{var statearr_80057_80086 = state_80033__$1;(statearr_80057_80086[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 15))
{var state_80033__$1 = state_80033;var statearr_80058_80087 = state_80033__$1;(statearr_80058_80087[2] = null);
(statearr_80058_80087[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 16))
{var inst_80022 = (state_80033[2]);var state_80033__$1 = state_80033;var statearr_80059_80088 = state_80033__$1;(statearr_80059_80088[2] = inst_80022);
(statearr_80059_80088[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 17))
{var inst_80004 = (state_80033[13]);var inst_80008 = cljs.core.chunk_first.call(null,inst_80004);var inst_80009 = cljs.core.chunk_rest.call(null,inst_80004);var inst_80010 = cljs.core.count.call(null,inst_80008);var inst_79990 = inst_80009;var inst_79991 = inst_80008;var inst_79992 = inst_80010;var inst_79993 = 0;var state_80033__$1 = (function (){var statearr_80060 = state_80033;(statearr_80060[8] = inst_79991);
(statearr_80060[9] = inst_79992);
(statearr_80060[10] = inst_79990);
(statearr_80060[11] = inst_79993);
return statearr_80060;
})();var statearr_80061_80089 = state_80033__$1;(statearr_80061_80089[2] = null);
(statearr_80061_80089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 18))
{var inst_80004 = (state_80033[13]);var inst_80013 = cljs.core.first.call(null,inst_80004);var state_80033__$1 = state_80033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80033__$1,20,out,inst_80013);
} else
{if((state_val_80034 === 19))
{var inst_80019 = (state_80033[2]);var state_80033__$1 = state_80033;var statearr_80062_80090 = state_80033__$1;(statearr_80062_80090[2] = inst_80019);
(statearr_80062_80090[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80034 === 20))
{var inst_80004 = (state_80033[13]);var inst_80015 = (state_80033[2]);var inst_80016 = cljs.core.next.call(null,inst_80004);var inst_79990 = inst_80016;var inst_79991 = null;var inst_79992 = 0;var inst_79993 = 0;var state_80033__$1 = (function (){var statearr_80063 = state_80033;(statearr_80063[15] = inst_80015);
(statearr_80063[8] = inst_79991);
(statearr_80063[9] = inst_79992);
(statearr_80063[10] = inst_79990);
(statearr_80063[11] = inst_79993);
return statearr_80063;
})();var statearr_80064_80091 = state_80033__$1;(statearr_80064_80091[2] = null);
(statearr_80064_80091[1] = 8);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_80068 = (new Array(16));(statearr_80068[0] = state_machine__13310__auto__);
(statearr_80068[1] = 1);
return statearr_80068;
});
var state_machine__13310__auto____1 = (function (state_80033){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_80033);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e80069){if((e80069 instanceof Object))
{var ex__13313__auto__ = e80069;var statearr_80070_80092 = state_80033;(statearr_80070_80092[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80093 = state_80033;
state_80033 = G__80093;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_80033){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_80033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_80071 = f__13410__auto__.call(null);(statearr_80071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_80071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13409__auto___80174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_80153){var state_val_80154 = (state_80153[1]);if((state_val_80154 === 1))
{var state_80153__$1 = state_80153;var statearr_80155_80175 = state_80153__$1;(statearr_80155_80175[2] = null);
(statearr_80155_80175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 2))
{var state_80153__$1 = state_80153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80153__$1,4,from);
} else
{if((state_val_80154 === 3))
{var inst_80151 = (state_80153[2]);var state_80153__$1 = state_80153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80153__$1,inst_80151);
} else
{if((state_val_80154 === 4))
{var inst_80136 = (state_80153[7]);var inst_80136__$1 = (state_80153[2]);var inst_80137 = (inst_80136__$1 == null);var state_80153__$1 = (function (){var statearr_80156 = state_80153;(statearr_80156[7] = inst_80136__$1);
return statearr_80156;
})();if(cljs.core.truth_(inst_80137))
{var statearr_80157_80176 = state_80153__$1;(statearr_80157_80176[1] = 5);
} else
{var statearr_80158_80177 = state_80153__$1;(statearr_80158_80177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 5))
{var state_80153__$1 = state_80153;if(cljs.core.truth_(close_QMARK_))
{var statearr_80159_80178 = state_80153__$1;(statearr_80159_80178[1] = 8);
} else
{var statearr_80160_80179 = state_80153__$1;(statearr_80160_80179[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 6))
{var inst_80136 = (state_80153[7]);var state_80153__$1 = state_80153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80153__$1,11,to,inst_80136);
} else
{if((state_val_80154 === 7))
{var inst_80149 = (state_80153[2]);var state_80153__$1 = state_80153;var statearr_80161_80180 = state_80153__$1;(statearr_80161_80180[2] = inst_80149);
(statearr_80161_80180[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 8))
{var inst_80140 = cljs.core.async.close_BANG_.call(null,to);var state_80153__$1 = state_80153;var statearr_80162_80181 = state_80153__$1;(statearr_80162_80181[2] = inst_80140);
(statearr_80162_80181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 9))
{var state_80153__$1 = state_80153;var statearr_80163_80182 = state_80153__$1;(statearr_80163_80182[2] = null);
(statearr_80163_80182[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 10))
{var inst_80143 = (state_80153[2]);var state_80153__$1 = state_80153;var statearr_80164_80183 = state_80153__$1;(statearr_80164_80183[2] = inst_80143);
(statearr_80164_80183[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80154 === 11))
{var inst_80146 = (state_80153[2]);var state_80153__$1 = (function (){var statearr_80165 = state_80153;(statearr_80165[8] = inst_80146);
return statearr_80165;
})();var statearr_80166_80184 = state_80153__$1;(statearr_80166_80184[2] = null);
(statearr_80166_80184[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_80170 = (new Array(9));(statearr_80170[0] = state_machine__13310__auto__);
(statearr_80170[1] = 1);
return statearr_80170;
});
var state_machine__13310__auto____1 = (function (state_80153){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_80153);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e80171){if((e80171 instanceof Object))
{var ex__13313__auto__ = e80171;var statearr_80172_80185 = state_80153;(statearr_80172_80185[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80186 = state_80153;
state_80153 = G__80186;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_80153){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_80153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_80173 = f__13410__auto__.call(null);(statearr_80173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___80174);
return statearr_80173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13409__auto___80273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_80251){var state_val_80252 = (state_80251[1]);if((state_val_80252 === 1))
{var state_80251__$1 = state_80251;var statearr_80253_80274 = state_80251__$1;(statearr_80253_80274[2] = null);
(statearr_80253_80274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 2))
{var state_80251__$1 = state_80251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80251__$1,4,ch);
} else
{if((state_val_80252 === 3))
{var inst_80249 = (state_80251[2]);var state_80251__$1 = state_80251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80251__$1,inst_80249);
} else
{if((state_val_80252 === 4))
{var inst_80232 = (state_80251[7]);var inst_80232__$1 = (state_80251[2]);var inst_80233 = (inst_80232__$1 == null);var state_80251__$1 = (function (){var statearr_80254 = state_80251;(statearr_80254[7] = inst_80232__$1);
return statearr_80254;
})();if(cljs.core.truth_(inst_80233))
{var statearr_80255_80275 = state_80251__$1;(statearr_80255_80275[1] = 5);
} else
{var statearr_80256_80276 = state_80251__$1;(statearr_80256_80276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 5))
{var inst_80235 = cljs.core.async.close_BANG_.call(null,tc);var inst_80236 = cljs.core.async.close_BANG_.call(null,fc);var state_80251__$1 = (function (){var statearr_80257 = state_80251;(statearr_80257[8] = inst_80235);
return statearr_80257;
})();var statearr_80258_80277 = state_80251__$1;(statearr_80258_80277[2] = inst_80236);
(statearr_80258_80277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 6))
{var inst_80232 = (state_80251[7]);var inst_80238 = p.call(null,inst_80232);var state_80251__$1 = state_80251;if(cljs.core.truth_(inst_80238))
{var statearr_80259_80278 = state_80251__$1;(statearr_80259_80278[1] = 9);
} else
{var statearr_80260_80279 = state_80251__$1;(statearr_80260_80279[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 7))
{var inst_80247 = (state_80251[2]);var state_80251__$1 = state_80251;var statearr_80261_80280 = state_80251__$1;(statearr_80261_80280[2] = inst_80247);
(statearr_80261_80280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 8))
{var inst_80244 = (state_80251[2]);var state_80251__$1 = (function (){var statearr_80262 = state_80251;(statearr_80262[9] = inst_80244);
return statearr_80262;
})();var statearr_80263_80281 = state_80251__$1;(statearr_80263_80281[2] = null);
(statearr_80263_80281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 9))
{var state_80251__$1 = state_80251;var statearr_80264_80282 = state_80251__$1;(statearr_80264_80282[2] = tc);
(statearr_80264_80282[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 10))
{var state_80251__$1 = state_80251;var statearr_80265_80283 = state_80251__$1;(statearr_80265_80283[2] = fc);
(statearr_80265_80283[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80252 === 11))
{var inst_80232 = (state_80251[7]);var inst_80242 = (state_80251[2]);var state_80251__$1 = state_80251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80251__$1,8,inst_80242,inst_80232);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_80269 = (new Array(10));(statearr_80269[0] = state_machine__13310__auto__);
(statearr_80269[1] = 1);
return statearr_80269;
});
var state_machine__13310__auto____1 = (function (state_80251){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_80251);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e80270){if((e80270 instanceof Object))
{var ex__13313__auto__ = e80270;var statearr_80271_80284 = state_80251;(statearr_80271_80284[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80285 = state_80251;
state_80251 = G__80285;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_80251){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_80251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_80272 = f__13410__auto__.call(null);(statearr_80272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___80273);
return statearr_80272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_80332){var state_val_80333 = (state_80332[1]);if((state_val_80333 === 7))
{var inst_80328 = (state_80332[2]);var state_80332__$1 = state_80332;var statearr_80334_80350 = state_80332__$1;(statearr_80334_80350[2] = inst_80328);
(statearr_80334_80350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80333 === 6))
{var inst_80321 = (state_80332[7]);var inst_80318 = (state_80332[8]);var inst_80325 = f.call(null,inst_80318,inst_80321);var inst_80318__$1 = inst_80325;var state_80332__$1 = (function (){var statearr_80335 = state_80332;(statearr_80335[8] = inst_80318__$1);
return statearr_80335;
})();var statearr_80336_80351 = state_80332__$1;(statearr_80336_80351[2] = null);
(statearr_80336_80351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80333 === 5))
{var inst_80318 = (state_80332[8]);var state_80332__$1 = state_80332;var statearr_80337_80352 = state_80332__$1;(statearr_80337_80352[2] = inst_80318);
(statearr_80337_80352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80333 === 4))
{var inst_80321 = (state_80332[7]);var inst_80321__$1 = (state_80332[2]);var inst_80322 = (inst_80321__$1 == null);var state_80332__$1 = (function (){var statearr_80338 = state_80332;(statearr_80338[7] = inst_80321__$1);
return statearr_80338;
})();if(cljs.core.truth_(inst_80322))
{var statearr_80339_80353 = state_80332__$1;(statearr_80339_80353[1] = 5);
} else
{var statearr_80340_80354 = state_80332__$1;(statearr_80340_80354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80333 === 3))
{var inst_80330 = (state_80332[2]);var state_80332__$1 = state_80332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80332__$1,inst_80330);
} else
{if((state_val_80333 === 2))
{var state_80332__$1 = state_80332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80332__$1,4,ch);
} else
{if((state_val_80333 === 1))
{var inst_80318 = init;var state_80332__$1 = (function (){var statearr_80341 = state_80332;(statearr_80341[8] = inst_80318);
return statearr_80341;
})();var statearr_80342_80355 = state_80332__$1;(statearr_80342_80355[2] = null);
(statearr_80342_80355[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_80346 = (new Array(9));(statearr_80346[0] = state_machine__13310__auto__);
(statearr_80346[1] = 1);
return statearr_80346;
});
var state_machine__13310__auto____1 = (function (state_80332){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_80332);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e80347){if((e80347 instanceof Object))
{var ex__13313__auto__ = e80347;var statearr_80348_80356 = state_80332;(statearr_80348_80356[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80357 = state_80332;
state_80332 = G__80357;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_80332){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_80332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_80349 = f__13410__auto__.call(null);(statearr_80349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_80349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_80419){var state_val_80420 = (state_80419[1]);if((state_val_80420 === 1))
{var inst_80399 = cljs.core.seq.call(null,coll);var inst_80400 = inst_80399;var state_80419__$1 = (function (){var statearr_80421 = state_80419;(statearr_80421[7] = inst_80400);
return statearr_80421;
})();var statearr_80422_80440 = state_80419__$1;(statearr_80422_80440[2] = null);
(statearr_80422_80440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 2))
{var inst_80400 = (state_80419[7]);var state_80419__$1 = state_80419;if(cljs.core.truth_(inst_80400))
{var statearr_80423_80441 = state_80419__$1;(statearr_80423_80441[1] = 4);
} else
{var statearr_80424_80442 = state_80419__$1;(statearr_80424_80442[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 3))
{var inst_80417 = (state_80419[2]);var state_80419__$1 = state_80419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80419__$1,inst_80417);
} else
{if((state_val_80420 === 4))
{var inst_80400 = (state_80419[7]);var inst_80403 = cljs.core.first.call(null,inst_80400);var state_80419__$1 = state_80419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80419__$1,7,ch,inst_80403);
} else
{if((state_val_80420 === 5))
{var state_80419__$1 = state_80419;if(cljs.core.truth_(close_QMARK_))
{var statearr_80425_80443 = state_80419__$1;(statearr_80425_80443[1] = 8);
} else
{var statearr_80426_80444 = state_80419__$1;(statearr_80426_80444[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 6))
{var inst_80415 = (state_80419[2]);var state_80419__$1 = state_80419;var statearr_80427_80445 = state_80419__$1;(statearr_80427_80445[2] = inst_80415);
(statearr_80427_80445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 7))
{var inst_80400 = (state_80419[7]);var inst_80405 = (state_80419[2]);var inst_80406 = cljs.core.next.call(null,inst_80400);var inst_80400__$1 = inst_80406;var state_80419__$1 = (function (){var statearr_80428 = state_80419;(statearr_80428[8] = inst_80405);
(statearr_80428[7] = inst_80400__$1);
return statearr_80428;
})();var statearr_80429_80446 = state_80419__$1;(statearr_80429_80446[2] = null);
(statearr_80429_80446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 8))
{var inst_80410 = cljs.core.async.close_BANG_.call(null,ch);var state_80419__$1 = state_80419;var statearr_80430_80447 = state_80419__$1;(statearr_80430_80447[2] = inst_80410);
(statearr_80430_80447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 9))
{var state_80419__$1 = state_80419;var statearr_80431_80448 = state_80419__$1;(statearr_80431_80448[2] = null);
(statearr_80431_80448[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80420 === 10))
{var inst_80413 = (state_80419[2]);var state_80419__$1 = state_80419;var statearr_80432_80449 = state_80419__$1;(statearr_80432_80449[2] = inst_80413);
(statearr_80432_80449[1] = 6);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_80436 = (new Array(9));(statearr_80436[0] = state_machine__13310__auto__);
(statearr_80436[1] = 1);
return statearr_80436;
});
var state_machine__13310__auto____1 = (function (state_80419){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_80419);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e80437){if((e80437 instanceof Object))
{var ex__13313__auto__ = e80437;var statearr_80438_80450 = state_80419;(statearr_80438_80450[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80451 = state_80419;
state_80419 = G__80451;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_80419){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_80419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_80439 = f__13410__auto__.call(null);(statearr_80439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_80439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
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
cljs.core.async.Mux = (function (){var obj80453 = {};return obj80453;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__6277__auto__ = _;if(and__6277__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__6892__auto__ = (((_ == null))?null:_);return (function (){var or__6289__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj80455 = {};return obj80455;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t80670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t80670 = (function (cs,ch,mult,meta80671){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta80671 = meta80671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t80670.cljs$lang$type = true;
cljs.core.async.t80670.cljs$lang$ctorStr = "cljs.core.async/t80670";
cljs.core.async.t80670.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t80670");
});})(cs))
;
cljs.core.async.t80670.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t80670.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t80670.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t80670.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t80670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t80670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t80670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_80672){var self__ = this;
var _80672__$1 = this;return self__.meta80671;
});})(cs))
;
cljs.core.async.t80670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_80672,meta80671__$1){var self__ = this;
var _80672__$1 = this;return (new cljs.core.async.t80670(self__.cs,self__.ch,self__.mult,meta80671__$1));
});})(cs))
;
cljs.core.async.__GT_t80670 = ((function (cs){
return (function __GT_t80670(cs__$1,ch__$1,mult__$1,meta80671){return (new cljs.core.async.t80670(cs__$1,ch__$1,mult__$1,meta80671));
});})(cs))
;
}
return (new cljs.core.async.t80670(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13409__auto___80884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_80802){var state_val_80803 = (state_80802[1]);if((state_val_80803 === 32))
{var inst_80675 = (state_80802[7]);var inst_80751 = (state_80802[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_80802,31,Object,null,30);var inst_80758 = cljs.core.async.put_BANG_.call(null,inst_80751,inst_80675,done);var state_80802__$1 = state_80802;var statearr_80804_80885 = state_80802__$1;(statearr_80804_80885[2] = inst_80758);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 1))
{var state_80802__$1 = state_80802;var statearr_80805_80886 = state_80802__$1;(statearr_80805_80886[2] = null);
(statearr_80805_80886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 33))
{var inst_80764 = (state_80802[9]);var inst_80766 = cljs.core.chunked_seq_QMARK_.call(null,inst_80764);var state_80802__$1 = state_80802;if(inst_80766)
{var statearr_80806_80887 = state_80802__$1;(statearr_80806_80887[1] = 36);
} else
{var statearr_80807_80888 = state_80802__$1;(statearr_80807_80888[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 2))
{var state_80802__$1 = state_80802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80802__$1,4,ch);
} else
{if((state_val_80803 === 34))
{var state_80802__$1 = state_80802;var statearr_80808_80889 = state_80802__$1;(statearr_80808_80889[2] = null);
(statearr_80808_80889[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 3))
{var inst_80800 = (state_80802[2]);var state_80802__$1 = state_80802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80802__$1,inst_80800);
} else
{if((state_val_80803 === 35))
{var inst_80789 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80809_80890 = state_80802__$1;(statearr_80809_80890[2] = inst_80789);
(statearr_80809_80890[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 4))
{var inst_80675 = (state_80802[7]);var inst_80675__$1 = (state_80802[2]);var inst_80676 = (inst_80675__$1 == null);var state_80802__$1 = (function (){var statearr_80810 = state_80802;(statearr_80810[7] = inst_80675__$1);
return statearr_80810;
})();if(cljs.core.truth_(inst_80676))
{var statearr_80811_80891 = state_80802__$1;(statearr_80811_80891[1] = 5);
} else
{var statearr_80812_80892 = state_80802__$1;(statearr_80812_80892[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 36))
{var inst_80764 = (state_80802[9]);var inst_80768 = cljs.core.chunk_first.call(null,inst_80764);var inst_80769 = cljs.core.chunk_rest.call(null,inst_80764);var inst_80770 = cljs.core.count.call(null,inst_80768);var inst_80743 = inst_80769;var inst_80744 = inst_80768;var inst_80745 = inst_80770;var inst_80746 = 0;var state_80802__$1 = (function (){var statearr_80813 = state_80802;(statearr_80813[10] = inst_80746);
(statearr_80813[11] = inst_80744);
(statearr_80813[12] = inst_80745);
(statearr_80813[13] = inst_80743);
return statearr_80813;
})();var statearr_80814_80893 = state_80802__$1;(statearr_80814_80893[2] = null);
(statearr_80814_80893[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 5))
{var inst_80682 = cljs.core.deref.call(null,cs);var inst_80683 = cljs.core.seq.call(null,inst_80682);var inst_80684 = inst_80683;var inst_80685 = null;var inst_80686 = 0;var inst_80687 = 0;var state_80802__$1 = (function (){var statearr_80815 = state_80802;(statearr_80815[14] = inst_80684);
(statearr_80815[15] = inst_80686);
(statearr_80815[16] = inst_80685);
(statearr_80815[17] = inst_80687);
return statearr_80815;
})();var statearr_80816_80894 = state_80802__$1;(statearr_80816_80894[2] = null);
(statearr_80816_80894[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 37))
{var inst_80764 = (state_80802[9]);var inst_80773 = cljs.core.first.call(null,inst_80764);var state_80802__$1 = (function (){var statearr_80817 = state_80802;(statearr_80817[18] = inst_80773);
return statearr_80817;
})();var statearr_80818_80895 = state_80802__$1;(statearr_80818_80895[2] = null);
(statearr_80818_80895[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 6))
{var inst_80734 = cljs.core.deref.call(null,cs);var inst_80735 = cljs.core.keys.call(null,inst_80734);var inst_80736 = cljs.core.count.call(null,inst_80735);var inst_80737 = cljs.core.reset_BANG_.call(null,dctr,inst_80736);var inst_80742 = cljs.core.seq.call(null,inst_80735);var inst_80743 = inst_80742;var inst_80744 = null;var inst_80745 = 0;var inst_80746 = 0;var state_80802__$1 = (function (){var statearr_80819 = state_80802;(statearr_80819[10] = inst_80746);
(statearr_80819[19] = inst_80737);
(statearr_80819[11] = inst_80744);
(statearr_80819[12] = inst_80745);
(statearr_80819[13] = inst_80743);
return statearr_80819;
})();var statearr_80820_80896 = state_80802__$1;(statearr_80820_80896[2] = null);
(statearr_80820_80896[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 38))
{var inst_80786 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80821_80897 = state_80802__$1;(statearr_80821_80897[2] = inst_80786);
(statearr_80821_80897[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 7))
{var inst_80798 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80822_80898 = state_80802__$1;(statearr_80822_80898[2] = inst_80798);
(statearr_80822_80898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 39))
{var inst_80764 = (state_80802[9]);var inst_80782 = (state_80802[2]);var inst_80783 = cljs.core.next.call(null,inst_80764);var inst_80743 = inst_80783;var inst_80744 = null;var inst_80745 = 0;var inst_80746 = 0;var state_80802__$1 = (function (){var statearr_80823 = state_80802;(statearr_80823[10] = inst_80746);
(statearr_80823[20] = inst_80782);
(statearr_80823[11] = inst_80744);
(statearr_80823[12] = inst_80745);
(statearr_80823[13] = inst_80743);
return statearr_80823;
})();var statearr_80824_80899 = state_80802__$1;(statearr_80824_80899[2] = null);
(statearr_80824_80899[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 8))
{var inst_80686 = (state_80802[15]);var inst_80687 = (state_80802[17]);var inst_80689 = (inst_80687 < inst_80686);var inst_80690 = inst_80689;var state_80802__$1 = state_80802;if(cljs.core.truth_(inst_80690))
{var statearr_80825_80900 = state_80802__$1;(statearr_80825_80900[1] = 10);
} else
{var statearr_80826_80901 = state_80802__$1;(statearr_80826_80901[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 40))
{var inst_80773 = (state_80802[18]);var inst_80774 = (state_80802[2]);var inst_80775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_80776 = cljs.core.async.untap_STAR_.call(null,m,inst_80773);var state_80802__$1 = (function (){var statearr_80827 = state_80802;(statearr_80827[21] = inst_80774);
(statearr_80827[22] = inst_80775);
return statearr_80827;
})();var statearr_80828_80902 = state_80802__$1;(statearr_80828_80902[2] = inst_80776);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 9))
{var inst_80732 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80829_80903 = state_80802__$1;(statearr_80829_80903[2] = inst_80732);
(statearr_80829_80903[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 41))
{var inst_80773 = (state_80802[18]);var inst_80675 = (state_80802[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_80802,40,Object,null,39);var inst_80780 = cljs.core.async.put_BANG_.call(null,inst_80773,inst_80675,done);var state_80802__$1 = state_80802;var statearr_80830_80904 = state_80802__$1;(statearr_80830_80904[2] = inst_80780);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 10))
{var inst_80685 = (state_80802[16]);var inst_80687 = (state_80802[17]);var inst_80693 = cljs.core._nth.call(null,inst_80685,inst_80687);var inst_80694 = cljs.core.nth.call(null,inst_80693,0,null);var inst_80695 = cljs.core.nth.call(null,inst_80693,1,null);var state_80802__$1 = (function (){var statearr_80831 = state_80802;(statearr_80831[23] = inst_80694);
return statearr_80831;
})();if(cljs.core.truth_(inst_80695))
{var statearr_80832_80905 = state_80802__$1;(statearr_80832_80905[1] = 13);
} else
{var statearr_80833_80906 = state_80802__$1;(statearr_80833_80906[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 42))
{var inst_80795 = (state_80802[2]);var state_80802__$1 = (function (){var statearr_80834 = state_80802;(statearr_80834[24] = inst_80795);
return statearr_80834;
})();var statearr_80835_80907 = state_80802__$1;(statearr_80835_80907[2] = null);
(statearr_80835_80907[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 11))
{var inst_80704 = (state_80802[25]);var inst_80684 = (state_80802[14]);var inst_80704__$1 = cljs.core.seq.call(null,inst_80684);var state_80802__$1 = (function (){var statearr_80836 = state_80802;(statearr_80836[25] = inst_80704__$1);
return statearr_80836;
})();if(inst_80704__$1)
{var statearr_80837_80908 = state_80802__$1;(statearr_80837_80908[1] = 16);
} else
{var statearr_80838_80909 = state_80802__$1;(statearr_80838_80909[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 12))
{var inst_80730 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80839_80910 = state_80802__$1;(statearr_80839_80910[2] = inst_80730);
(statearr_80839_80910[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 13))
{var inst_80694 = (state_80802[23]);var inst_80697 = cljs.core.async.close_BANG_.call(null,inst_80694);var state_80802__$1 = state_80802;var statearr_80843_80911 = state_80802__$1;(statearr_80843_80911[2] = inst_80697);
(statearr_80843_80911[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 14))
{var state_80802__$1 = state_80802;var statearr_80844_80912 = state_80802__$1;(statearr_80844_80912[2] = null);
(statearr_80844_80912[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 15))
{var inst_80684 = (state_80802[14]);var inst_80686 = (state_80802[15]);var inst_80685 = (state_80802[16]);var inst_80687 = (state_80802[17]);var inst_80700 = (state_80802[2]);var inst_80701 = (inst_80687 + 1);var tmp80840 = inst_80684;var tmp80841 = inst_80686;var tmp80842 = inst_80685;var inst_80684__$1 = tmp80840;var inst_80685__$1 = tmp80842;var inst_80686__$1 = tmp80841;var inst_80687__$1 = inst_80701;var state_80802__$1 = (function (){var statearr_80845 = state_80802;(statearr_80845[26] = inst_80700);
(statearr_80845[14] = inst_80684__$1);
(statearr_80845[15] = inst_80686__$1);
(statearr_80845[16] = inst_80685__$1);
(statearr_80845[17] = inst_80687__$1);
return statearr_80845;
})();var statearr_80846_80913 = state_80802__$1;(statearr_80846_80913[2] = null);
(statearr_80846_80913[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 16))
{var inst_80704 = (state_80802[25]);var inst_80706 = cljs.core.chunked_seq_QMARK_.call(null,inst_80704);var state_80802__$1 = state_80802;if(inst_80706)
{var statearr_80847_80914 = state_80802__$1;(statearr_80847_80914[1] = 19);
} else
{var statearr_80848_80915 = state_80802__$1;(statearr_80848_80915[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 17))
{var state_80802__$1 = state_80802;var statearr_80849_80916 = state_80802__$1;(statearr_80849_80916[2] = null);
(statearr_80849_80916[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 18))
{var inst_80728 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80850_80917 = state_80802__$1;(statearr_80850_80917[2] = inst_80728);
(statearr_80850_80917[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 19))
{var inst_80704 = (state_80802[25]);var inst_80708 = cljs.core.chunk_first.call(null,inst_80704);var inst_80709 = cljs.core.chunk_rest.call(null,inst_80704);var inst_80710 = cljs.core.count.call(null,inst_80708);var inst_80684 = inst_80709;var inst_80685 = inst_80708;var inst_80686 = inst_80710;var inst_80687 = 0;var state_80802__$1 = (function (){var statearr_80851 = state_80802;(statearr_80851[14] = inst_80684);
(statearr_80851[15] = inst_80686);
(statearr_80851[16] = inst_80685);
(statearr_80851[17] = inst_80687);
return statearr_80851;
})();var statearr_80852_80918 = state_80802__$1;(statearr_80852_80918[2] = null);
(statearr_80852_80918[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 20))
{var inst_80704 = (state_80802[25]);var inst_80714 = cljs.core.first.call(null,inst_80704);var inst_80715 = cljs.core.nth.call(null,inst_80714,0,null);var inst_80716 = cljs.core.nth.call(null,inst_80714,1,null);var state_80802__$1 = (function (){var statearr_80853 = state_80802;(statearr_80853[27] = inst_80715);
return statearr_80853;
})();if(cljs.core.truth_(inst_80716))
{var statearr_80854_80919 = state_80802__$1;(statearr_80854_80919[1] = 22);
} else
{var statearr_80855_80920 = state_80802__$1;(statearr_80855_80920[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 21))
{var inst_80725 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80856_80921 = state_80802__$1;(statearr_80856_80921[2] = inst_80725);
(statearr_80856_80921[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 22))
{var inst_80715 = (state_80802[27]);var inst_80718 = cljs.core.async.close_BANG_.call(null,inst_80715);var state_80802__$1 = state_80802;var statearr_80857_80922 = state_80802__$1;(statearr_80857_80922[2] = inst_80718);
(statearr_80857_80922[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 23))
{var state_80802__$1 = state_80802;var statearr_80858_80923 = state_80802__$1;(statearr_80858_80923[2] = null);
(statearr_80858_80923[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 24))
{var inst_80704 = (state_80802[25]);var inst_80721 = (state_80802[2]);var inst_80722 = cljs.core.next.call(null,inst_80704);var inst_80684 = inst_80722;var inst_80685 = null;var inst_80686 = 0;var inst_80687 = 0;var state_80802__$1 = (function (){var statearr_80859 = state_80802;(statearr_80859[14] = inst_80684);
(statearr_80859[15] = inst_80686);
(statearr_80859[16] = inst_80685);
(statearr_80859[17] = inst_80687);
(statearr_80859[28] = inst_80721);
return statearr_80859;
})();var statearr_80860_80924 = state_80802__$1;(statearr_80860_80924[2] = null);
(statearr_80860_80924[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 25))
{var inst_80746 = (state_80802[10]);var inst_80745 = (state_80802[12]);var inst_80748 = (inst_80746 < inst_80745);var inst_80749 = inst_80748;var state_80802__$1 = state_80802;if(cljs.core.truth_(inst_80749))
{var statearr_80861_80925 = state_80802__$1;(statearr_80861_80925[1] = 27);
} else
{var statearr_80862_80926 = state_80802__$1;(statearr_80862_80926[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 26))
{var inst_80793 = (state_80802[2]);var state_80802__$1 = (function (){var statearr_80863 = state_80802;(statearr_80863[29] = inst_80793);
return statearr_80863;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80802__$1,42,dchan);
} else
{if((state_val_80803 === 27))
{var inst_80746 = (state_80802[10]);var inst_80744 = (state_80802[11]);var inst_80751 = cljs.core._nth.call(null,inst_80744,inst_80746);var state_80802__$1 = (function (){var statearr_80864 = state_80802;(statearr_80864[8] = inst_80751);
return statearr_80864;
})();var statearr_80865_80927 = state_80802__$1;(statearr_80865_80927[2] = null);
(statearr_80865_80927[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 28))
{var inst_80743 = (state_80802[13]);var inst_80764 = (state_80802[9]);var inst_80764__$1 = cljs.core.seq.call(null,inst_80743);var state_80802__$1 = (function (){var statearr_80869 = state_80802;(statearr_80869[9] = inst_80764__$1);
return statearr_80869;
})();if(inst_80764__$1)
{var statearr_80870_80928 = state_80802__$1;(statearr_80870_80928[1] = 33);
} else
{var statearr_80871_80929 = state_80802__$1;(statearr_80871_80929[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 29))
{var inst_80791 = (state_80802[2]);var state_80802__$1 = state_80802;var statearr_80872_80930 = state_80802__$1;(statearr_80872_80930[2] = inst_80791);
(statearr_80872_80930[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 30))
{var inst_80746 = (state_80802[10]);var inst_80744 = (state_80802[11]);var inst_80745 = (state_80802[12]);var inst_80743 = (state_80802[13]);var inst_80760 = (state_80802[2]);var inst_80761 = (inst_80746 + 1);var tmp80866 = inst_80744;var tmp80867 = inst_80745;var tmp80868 = inst_80743;var inst_80743__$1 = tmp80868;var inst_80744__$1 = tmp80866;var inst_80745__$1 = tmp80867;var inst_80746__$1 = inst_80761;var state_80802__$1 = (function (){var statearr_80873 = state_80802;(statearr_80873[10] = inst_80746__$1);
(statearr_80873[11] = inst_80744__$1);
(statearr_80873[12] = inst_80745__$1);
(statearr_80873[13] = inst_80743__$1);
(statearr_80873[30] = inst_80760);
return statearr_80873;
})();var statearr_80874_80931 = state_80802__$1;(statearr_80874_80931[2] = null);
(statearr_80874_80931[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_80803 === 31))
{var inst_80751 = (state_80802[8]);var inst_80752 = (state_80802[2]);var inst_80753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_80754 = cljs.core.async.untap_STAR_.call(null,m,inst_80751);var state_80802__$1 = (function (){var statearr_80875 = state_80802;(statearr_80875[31] = inst_80752);
(statearr_80875[32] = inst_80753);
return statearr_80875;
})();var statearr_80876_80932 = state_80802__$1;(statearr_80876_80932[2] = inst_80754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80802__$1);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_80880 = (new Array(33));(statearr_80880[0] = state_machine__13310__auto__);
(statearr_80880[1] = 1);
return statearr_80880;
});
var state_machine__13310__auto____1 = (function (state_80802){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_80802);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e80881){if((e80881 instanceof Object))
{var ex__13313__auto__ = e80881;var statearr_80882_80933 = state_80802;(statearr_80882_80933[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__80934 = state_80802;
state_80802 = G__80934;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_80802){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_80802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_80883 = f__13410__auto__.call(null);(statearr_80883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___80884);
return statearr_80883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.Mix = (function (){var obj80936 = {};return obj80936;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__6277__auto__ = m;if(and__6277__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__6892__auto__ = (((m == null))?null:m);return (function (){var or__6289__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t81046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81046 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta81047){
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
this.meta81047 = meta81047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81046.cljs$lang$type = true;
cljs.core.async.t81046.cljs$lang$ctorStr = "cljs.core.async/t81046";
cljs.core.async.t81046.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t81046");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t81046.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t81046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_81048){var self__ = this;
var _81048__$1 = this;return self__.meta81047;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t81046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_81048,meta81047__$1){var self__ = this;
var _81048__$1 = this;return (new cljs.core.async.t81046(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta81047__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t81046 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t81046(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta81047){return (new cljs.core.async.t81046(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta81047));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t81046(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13409__auto___81155 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_81113){var state_val_81114 = (state_81113[1]);if((state_val_81114 === 1))
{var inst_81052 = (state_81113[7]);var inst_81052__$1 = calc_state.call(null);var inst_81053 = cljs.core.seq_QMARK_.call(null,inst_81052__$1);var state_81113__$1 = (function (){var statearr_81115 = state_81113;(statearr_81115[7] = inst_81052__$1);
return statearr_81115;
})();if(inst_81053)
{var statearr_81116_81156 = state_81113__$1;(statearr_81116_81156[1] = 2);
} else
{var statearr_81117_81157 = state_81113__$1;(statearr_81117_81157[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 2))
{var inst_81052 = (state_81113[7]);var inst_81055 = cljs.core.apply.call(null,cljs.core.hash_map,inst_81052);var state_81113__$1 = state_81113;var statearr_81118_81158 = state_81113__$1;(statearr_81118_81158[2] = inst_81055);
(statearr_81118_81158[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 3))
{var inst_81052 = (state_81113[7]);var state_81113__$1 = state_81113;var statearr_81119_81159 = state_81113__$1;(statearr_81119_81159[2] = inst_81052);
(statearr_81119_81159[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 4))
{var inst_81052 = (state_81113[7]);var inst_81058 = (state_81113[2]);var inst_81059 = cljs.core.get.call(null,inst_81058,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_81060 = cljs.core.get.call(null,inst_81058,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_81061 = cljs.core.get.call(null,inst_81058,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_81062 = inst_81052;var state_81113__$1 = (function (){var statearr_81120 = state_81113;(statearr_81120[8] = inst_81062);
(statearr_81120[9] = inst_81061);
(statearr_81120[10] = inst_81060);
(statearr_81120[11] = inst_81059);
return statearr_81120;
})();var statearr_81121_81160 = state_81113__$1;(statearr_81121_81160[2] = null);
(statearr_81121_81160[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 5))
{var inst_81062 = (state_81113[8]);var inst_81065 = cljs.core.seq_QMARK_.call(null,inst_81062);var state_81113__$1 = state_81113;if(inst_81065)
{var statearr_81122_81161 = state_81113__$1;(statearr_81122_81161[1] = 7);
} else
{var statearr_81123_81162 = state_81113__$1;(statearr_81123_81162[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 6))
{var inst_81111 = (state_81113[2]);var state_81113__$1 = state_81113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81113__$1,inst_81111);
} else
{if((state_val_81114 === 7))
{var inst_81062 = (state_81113[8]);var inst_81067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_81062);var state_81113__$1 = state_81113;var statearr_81124_81163 = state_81113__$1;(statearr_81124_81163[2] = inst_81067);
(statearr_81124_81163[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 8))
{var inst_81062 = (state_81113[8]);var state_81113__$1 = state_81113;var statearr_81125_81164 = state_81113__$1;(statearr_81125_81164[2] = inst_81062);
(statearr_81125_81164[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 9))
{var inst_81070 = (state_81113[12]);var inst_81070__$1 = (state_81113[2]);var inst_81071 = cljs.core.get.call(null,inst_81070__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_81072 = cljs.core.get.call(null,inst_81070__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_81073 = cljs.core.get.call(null,inst_81070__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_81113__$1 = (function (){var statearr_81126 = state_81113;(statearr_81126[12] = inst_81070__$1);
(statearr_81126[13] = inst_81073);
(statearr_81126[14] = inst_81072);
return statearr_81126;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_81113__$1,10,inst_81071);
} else
{if((state_val_81114 === 10))
{var inst_81077 = (state_81113[15]);var inst_81078 = (state_81113[16]);var inst_81076 = (state_81113[2]);var inst_81077__$1 = cljs.core.nth.call(null,inst_81076,0,null);var inst_81078__$1 = cljs.core.nth.call(null,inst_81076,1,null);var inst_81079 = (inst_81077__$1 == null);var inst_81080 = cljs.core._EQ_.call(null,inst_81078__$1,change);var inst_81081 = (inst_81079) || (inst_81080);var state_81113__$1 = (function (){var statearr_81127 = state_81113;(statearr_81127[15] = inst_81077__$1);
(statearr_81127[16] = inst_81078__$1);
return statearr_81127;
})();if(cljs.core.truth_(inst_81081))
{var statearr_81128_81165 = state_81113__$1;(statearr_81128_81165[1] = 11);
} else
{var statearr_81129_81166 = state_81113__$1;(statearr_81129_81166[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 11))
{var inst_81077 = (state_81113[15]);var inst_81083 = (inst_81077 == null);var state_81113__$1 = state_81113;if(cljs.core.truth_(inst_81083))
{var statearr_81130_81167 = state_81113__$1;(statearr_81130_81167[1] = 14);
} else
{var statearr_81131_81168 = state_81113__$1;(statearr_81131_81168[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 12))
{var inst_81092 = (state_81113[17]);var inst_81078 = (state_81113[16]);var inst_81073 = (state_81113[13]);var inst_81092__$1 = inst_81073.call(null,inst_81078);var state_81113__$1 = (function (){var statearr_81132 = state_81113;(statearr_81132[17] = inst_81092__$1);
return statearr_81132;
})();if(cljs.core.truth_(inst_81092__$1))
{var statearr_81133_81169 = state_81113__$1;(statearr_81133_81169[1] = 17);
} else
{var statearr_81134_81170 = state_81113__$1;(statearr_81134_81170[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 13))
{var inst_81109 = (state_81113[2]);var state_81113__$1 = state_81113;var statearr_81135_81171 = state_81113__$1;(statearr_81135_81171[2] = inst_81109);
(statearr_81135_81171[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 14))
{var inst_81078 = (state_81113[16]);var inst_81085 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_81078);var state_81113__$1 = state_81113;var statearr_81136_81172 = state_81113__$1;(statearr_81136_81172[2] = inst_81085);
(statearr_81136_81172[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 15))
{var state_81113__$1 = state_81113;var statearr_81137_81173 = state_81113__$1;(statearr_81137_81173[2] = null);
(statearr_81137_81173[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 16))
{var inst_81088 = (state_81113[2]);var inst_81089 = calc_state.call(null);var inst_81062 = inst_81089;var state_81113__$1 = (function (){var statearr_81138 = state_81113;(statearr_81138[8] = inst_81062);
(statearr_81138[18] = inst_81088);
return statearr_81138;
})();var statearr_81139_81174 = state_81113__$1;(statearr_81139_81174[2] = null);
(statearr_81139_81174[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 17))
{var inst_81092 = (state_81113[17]);var state_81113__$1 = state_81113;var statearr_81140_81175 = state_81113__$1;(statearr_81140_81175[2] = inst_81092);
(statearr_81140_81175[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 18))
{var inst_81078 = (state_81113[16]);var inst_81073 = (state_81113[13]);var inst_81072 = (state_81113[14]);var inst_81095 = cljs.core.empty_QMARK_.call(null,inst_81073);var inst_81096 = inst_81072.call(null,inst_81078);var inst_81097 = cljs.core.not.call(null,inst_81096);var inst_81098 = (inst_81095) && (inst_81097);var state_81113__$1 = state_81113;var statearr_81141_81176 = state_81113__$1;(statearr_81141_81176[2] = inst_81098);
(statearr_81141_81176[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 19))
{var inst_81100 = (state_81113[2]);var state_81113__$1 = state_81113;if(cljs.core.truth_(inst_81100))
{var statearr_81142_81177 = state_81113__$1;(statearr_81142_81177[1] = 20);
} else
{var statearr_81143_81178 = state_81113__$1;(statearr_81143_81178[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 20))
{var inst_81077 = (state_81113[15]);var state_81113__$1 = state_81113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81113__$1,23,out,inst_81077);
} else
{if((state_val_81114 === 21))
{var state_81113__$1 = state_81113;var statearr_81144_81179 = state_81113__$1;(statearr_81144_81179[2] = null);
(statearr_81144_81179[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 22))
{var inst_81070 = (state_81113[12]);var inst_81106 = (state_81113[2]);var inst_81062 = inst_81070;var state_81113__$1 = (function (){var statearr_81145 = state_81113;(statearr_81145[8] = inst_81062);
(statearr_81145[19] = inst_81106);
return statearr_81145;
})();var statearr_81146_81180 = state_81113__$1;(statearr_81146_81180[2] = null);
(statearr_81146_81180[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81114 === 23))
{var inst_81103 = (state_81113[2]);var state_81113__$1 = state_81113;var statearr_81147_81181 = state_81113__$1;(statearr_81147_81181[2] = inst_81103);
(statearr_81147_81181[1] = 22);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_81151 = (new Array(20));(statearr_81151[0] = state_machine__13310__auto__);
(statearr_81151[1] = 1);
return statearr_81151;
});
var state_machine__13310__auto____1 = (function (state_81113){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_81113);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e81152){if((e81152 instanceof Object))
{var ex__13313__auto__ = e81152;var statearr_81153_81182 = state_81113;(statearr_81153_81182[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81183 = state_81113;
state_81113 = G__81183;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_81113){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_81113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_81154 = f__13410__auto__.call(null);(statearr_81154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___81155);
return statearr_81154;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
cljs.core.async.Pub = (function (){var obj81185 = {};return obj81185;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__6277__auto__ = p;if(and__6277__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__6892__auto__ = (((p == null))?null:p);return (function (){var or__6289__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
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
return (function (topic){var or__6289__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6289__auto__,mults){
return (function (p1__81186_SHARP_){if(cljs.core.truth_(p1__81186_SHARP_.call(null,topic)))
{return p1__81186_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__81186_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6289__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t81311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81311 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta81312){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta81312 = meta81312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81311.cljs$lang$type = true;
cljs.core.async.t81311.cljs$lang$ctorStr = "cljs.core.async/t81311";
cljs.core.async.t81311.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.async/t81311");
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t81311.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t81311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_81313){var self__ = this;
var _81313__$1 = this;return self__.meta81312;
});})(mults,ensure_mult))
;
cljs.core.async.t81311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_81313,meta81312__$1){var self__ = this;
var _81313__$1 = this;return (new cljs.core.async.t81311(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta81312__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t81311 = ((function (mults,ensure_mult){
return (function __GT_t81311(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta81312){return (new cljs.core.async.t81311(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta81312));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t81311(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13409__auto___81435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_81387){var state_val_81388 = (state_81387[1]);if((state_val_81388 === 1))
{var state_81387__$1 = state_81387;var statearr_81389_81436 = state_81387__$1;(statearr_81389_81436[2] = null);
(statearr_81389_81436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 2))
{var state_81387__$1 = state_81387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81387__$1,4,ch);
} else
{if((state_val_81388 === 3))
{var inst_81385 = (state_81387[2]);var state_81387__$1 = state_81387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81387__$1,inst_81385);
} else
{if((state_val_81388 === 4))
{var inst_81316 = (state_81387[7]);var inst_81316__$1 = (state_81387[2]);var inst_81317 = (inst_81316__$1 == null);var state_81387__$1 = (function (){var statearr_81390 = state_81387;(statearr_81390[7] = inst_81316__$1);
return statearr_81390;
})();if(cljs.core.truth_(inst_81317))
{var statearr_81391_81437 = state_81387__$1;(statearr_81391_81437[1] = 5);
} else
{var statearr_81392_81438 = state_81387__$1;(statearr_81392_81438[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 5))
{var inst_81323 = cljs.core.deref.call(null,mults);var inst_81324 = cljs.core.vals.call(null,inst_81323);var inst_81325 = cljs.core.seq.call(null,inst_81324);var inst_81326 = inst_81325;var inst_81327 = null;var inst_81328 = 0;var inst_81329 = 0;var state_81387__$1 = (function (){var statearr_81393 = state_81387;(statearr_81393[8] = inst_81327);
(statearr_81393[9] = inst_81328);
(statearr_81393[10] = inst_81326);
(statearr_81393[11] = inst_81329);
return statearr_81393;
})();var statearr_81394_81439 = state_81387__$1;(statearr_81394_81439[2] = null);
(statearr_81394_81439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 6))
{var inst_81316 = (state_81387[7]);var inst_81364 = (state_81387[12]);var inst_81366 = (state_81387[13]);var inst_81364__$1 = topic_fn.call(null,inst_81316);var inst_81365 = cljs.core.deref.call(null,mults);var inst_81366__$1 = cljs.core.get.call(null,inst_81365,inst_81364__$1);var state_81387__$1 = (function (){var statearr_81395 = state_81387;(statearr_81395[12] = inst_81364__$1);
(statearr_81395[13] = inst_81366__$1);
return statearr_81395;
})();if(cljs.core.truth_(inst_81366__$1))
{var statearr_81396_81440 = state_81387__$1;(statearr_81396_81440[1] = 19);
} else
{var statearr_81397_81441 = state_81387__$1;(statearr_81397_81441[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 7))
{var inst_81383 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81398_81442 = state_81387__$1;(statearr_81398_81442[2] = inst_81383);
(statearr_81398_81442[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 8))
{var inst_81328 = (state_81387[9]);var inst_81329 = (state_81387[11]);var inst_81331 = (inst_81329 < inst_81328);var inst_81332 = inst_81331;var state_81387__$1 = state_81387;if(cljs.core.truth_(inst_81332))
{var statearr_81402_81443 = state_81387__$1;(statearr_81402_81443[1] = 10);
} else
{var statearr_81403_81444 = state_81387__$1;(statearr_81403_81444[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 9))
{var inst_81362 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81404_81445 = state_81387__$1;(statearr_81404_81445[2] = inst_81362);
(statearr_81404_81445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 10))
{var inst_81327 = (state_81387[8]);var inst_81328 = (state_81387[9]);var inst_81326 = (state_81387[10]);var inst_81329 = (state_81387[11]);var inst_81334 = cljs.core._nth.call(null,inst_81327,inst_81329);var inst_81335 = cljs.core.async.muxch_STAR_.call(null,inst_81334);var inst_81336 = cljs.core.async.close_BANG_.call(null,inst_81335);var inst_81337 = (inst_81329 + 1);var tmp81399 = inst_81327;var tmp81400 = inst_81328;var tmp81401 = inst_81326;var inst_81326__$1 = tmp81401;var inst_81327__$1 = tmp81399;var inst_81328__$1 = tmp81400;var inst_81329__$1 = inst_81337;var state_81387__$1 = (function (){var statearr_81405 = state_81387;(statearr_81405[8] = inst_81327__$1);
(statearr_81405[9] = inst_81328__$1);
(statearr_81405[10] = inst_81326__$1);
(statearr_81405[11] = inst_81329__$1);
(statearr_81405[14] = inst_81336);
return statearr_81405;
})();var statearr_81406_81446 = state_81387__$1;(statearr_81406_81446[2] = null);
(statearr_81406_81446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 11))
{var inst_81326 = (state_81387[10]);var inst_81340 = (state_81387[15]);var inst_81340__$1 = cljs.core.seq.call(null,inst_81326);var state_81387__$1 = (function (){var statearr_81407 = state_81387;(statearr_81407[15] = inst_81340__$1);
return statearr_81407;
})();if(inst_81340__$1)
{var statearr_81408_81447 = state_81387__$1;(statearr_81408_81447[1] = 13);
} else
{var statearr_81409_81448 = state_81387__$1;(statearr_81409_81448[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 12))
{var inst_81360 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81410_81449 = state_81387__$1;(statearr_81410_81449[2] = inst_81360);
(statearr_81410_81449[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 13))
{var inst_81340 = (state_81387[15]);var inst_81342 = cljs.core.chunked_seq_QMARK_.call(null,inst_81340);var state_81387__$1 = state_81387;if(inst_81342)
{var statearr_81411_81450 = state_81387__$1;(statearr_81411_81450[1] = 16);
} else
{var statearr_81412_81451 = state_81387__$1;(statearr_81412_81451[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 14))
{var state_81387__$1 = state_81387;var statearr_81413_81452 = state_81387__$1;(statearr_81413_81452[2] = null);
(statearr_81413_81452[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 15))
{var inst_81358 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81414_81453 = state_81387__$1;(statearr_81414_81453[2] = inst_81358);
(statearr_81414_81453[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 16))
{var inst_81340 = (state_81387[15]);var inst_81344 = cljs.core.chunk_first.call(null,inst_81340);var inst_81345 = cljs.core.chunk_rest.call(null,inst_81340);var inst_81346 = cljs.core.count.call(null,inst_81344);var inst_81326 = inst_81345;var inst_81327 = inst_81344;var inst_81328 = inst_81346;var inst_81329 = 0;var state_81387__$1 = (function (){var statearr_81415 = state_81387;(statearr_81415[8] = inst_81327);
(statearr_81415[9] = inst_81328);
(statearr_81415[10] = inst_81326);
(statearr_81415[11] = inst_81329);
return statearr_81415;
})();var statearr_81416_81454 = state_81387__$1;(statearr_81416_81454[2] = null);
(statearr_81416_81454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 17))
{var inst_81340 = (state_81387[15]);var inst_81349 = cljs.core.first.call(null,inst_81340);var inst_81350 = cljs.core.async.muxch_STAR_.call(null,inst_81349);var inst_81351 = cljs.core.async.close_BANG_.call(null,inst_81350);var inst_81352 = cljs.core.next.call(null,inst_81340);var inst_81326 = inst_81352;var inst_81327 = null;var inst_81328 = 0;var inst_81329 = 0;var state_81387__$1 = (function (){var statearr_81417 = state_81387;(statearr_81417[8] = inst_81327);
(statearr_81417[16] = inst_81351);
(statearr_81417[9] = inst_81328);
(statearr_81417[10] = inst_81326);
(statearr_81417[11] = inst_81329);
return statearr_81417;
})();var statearr_81418_81455 = state_81387__$1;(statearr_81418_81455[2] = null);
(statearr_81418_81455[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 18))
{var inst_81355 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81419_81456 = state_81387__$1;(statearr_81419_81456[2] = inst_81355);
(statearr_81419_81456[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 19))
{var state_81387__$1 = state_81387;var statearr_81420_81457 = state_81387__$1;(statearr_81420_81457[2] = null);
(statearr_81420_81457[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 20))
{var state_81387__$1 = state_81387;var statearr_81421_81458 = state_81387__$1;(statearr_81421_81458[2] = null);
(statearr_81421_81458[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 21))
{var inst_81380 = (state_81387[2]);var state_81387__$1 = (function (){var statearr_81422 = state_81387;(statearr_81422[17] = inst_81380);
return statearr_81422;
})();var statearr_81423_81459 = state_81387__$1;(statearr_81423_81459[2] = null);
(statearr_81423_81459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 22))
{var inst_81377 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81424_81460 = state_81387__$1;(statearr_81424_81460[2] = inst_81377);
(statearr_81424_81460[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 23))
{var inst_81364 = (state_81387[12]);var inst_81368 = (state_81387[2]);var inst_81369 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_81364);var state_81387__$1 = (function (){var statearr_81425 = state_81387;(statearr_81425[18] = inst_81368);
return statearr_81425;
})();var statearr_81426_81461 = state_81387__$1;(statearr_81426_81461[2] = inst_81369);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81387__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81388 === 24))
{var inst_81316 = (state_81387[7]);var inst_81366 = (state_81387[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_81387,23,Object,null,22);var inst_81373 = cljs.core.async.muxch_STAR_.call(null,inst_81366);var state_81387__$1 = state_81387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81387__$1,25,inst_81373,inst_81316);
} else
{if((state_val_81388 === 25))
{var inst_81375 = (state_81387[2]);var state_81387__$1 = state_81387;var statearr_81427_81462 = state_81387__$1;(statearr_81427_81462[2] = inst_81375);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81387__$1);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_81431 = (new Array(19));(statearr_81431[0] = state_machine__13310__auto__);
(statearr_81431[1] = 1);
return statearr_81431;
});
var state_machine__13310__auto____1 = (function (state_81387){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_81387);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e81432){if((e81432 instanceof Object))
{var ex__13313__auto__ = e81432;var statearr_81433_81463 = state_81387;(statearr_81433_81463[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81464 = state_81387;
state_81387 = G__81464;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_81387){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_81387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_81434 = f__13410__auto__.call(null);(statearr_81434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___81435);
return statearr_81434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
,cljs.core.range.call(null,cnt));var c__13409__auto___81601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_81571){var state_val_81572 = (state_81571[1]);if((state_val_81572 === 1))
{var state_81571__$1 = state_81571;var statearr_81573_81602 = state_81571__$1;(statearr_81573_81602[2] = null);
(statearr_81573_81602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 2))
{var inst_81534 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_81535 = 0;var state_81571__$1 = (function (){var statearr_81574 = state_81571;(statearr_81574[7] = inst_81534);
(statearr_81574[8] = inst_81535);
return statearr_81574;
})();var statearr_81575_81603 = state_81571__$1;(statearr_81575_81603[2] = null);
(statearr_81575_81603[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 3))
{var inst_81569 = (state_81571[2]);var state_81571__$1 = state_81571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81571__$1,inst_81569);
} else
{if((state_val_81572 === 4))
{var inst_81535 = (state_81571[8]);var inst_81537 = (inst_81535 < cnt);var state_81571__$1 = state_81571;if(cljs.core.truth_(inst_81537))
{var statearr_81576_81604 = state_81571__$1;(statearr_81576_81604[1] = 6);
} else
{var statearr_81577_81605 = state_81571__$1;(statearr_81577_81605[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 5))
{var inst_81555 = (state_81571[2]);var state_81571__$1 = (function (){var statearr_81578 = state_81571;(statearr_81578[9] = inst_81555);
return statearr_81578;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81571__$1,12,dchan);
} else
{if((state_val_81572 === 6))
{var state_81571__$1 = state_81571;var statearr_81579_81606 = state_81571__$1;(statearr_81579_81606[2] = null);
(statearr_81579_81606[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 7))
{var state_81571__$1 = state_81571;var statearr_81580_81607 = state_81571__$1;(statearr_81580_81607[2] = null);
(statearr_81580_81607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 8))
{var inst_81553 = (state_81571[2]);var state_81571__$1 = state_81571;var statearr_81581_81608 = state_81571__$1;(statearr_81581_81608[2] = inst_81553);
(statearr_81581_81608[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 9))
{var inst_81535 = (state_81571[8]);var inst_81548 = (state_81571[2]);var inst_81549 = (inst_81535 + 1);var inst_81535__$1 = inst_81549;var state_81571__$1 = (function (){var statearr_81582 = state_81571;(statearr_81582[10] = inst_81548);
(statearr_81582[8] = inst_81535__$1);
return statearr_81582;
})();var statearr_81583_81609 = state_81571__$1;(statearr_81583_81609[2] = null);
(statearr_81583_81609[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 10))
{var inst_81539 = (state_81571[2]);var inst_81540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_81571__$1 = (function (){var statearr_81584 = state_81571;(statearr_81584[11] = inst_81539);
return statearr_81584;
})();var statearr_81585_81610 = state_81571__$1;(statearr_81585_81610[2] = inst_81540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 11))
{var inst_81535 = (state_81571[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_81571,10,Object,null,9);var inst_81544 = chs__$1.call(null,inst_81535);var inst_81545 = done.call(null,inst_81535);var inst_81546 = cljs.core.async.take_BANG_.call(null,inst_81544,inst_81545);var state_81571__$1 = state_81571;var statearr_81586_81611 = state_81571__$1;(statearr_81586_81611[2] = inst_81546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81571__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 12))
{var inst_81557 = (state_81571[12]);var inst_81557__$1 = (state_81571[2]);var inst_81558 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_81557__$1);var state_81571__$1 = (function (){var statearr_81587 = state_81571;(statearr_81587[12] = inst_81557__$1);
return statearr_81587;
})();if(cljs.core.truth_(inst_81558))
{var statearr_81588_81612 = state_81571__$1;(statearr_81588_81612[1] = 13);
} else
{var statearr_81589_81613 = state_81571__$1;(statearr_81589_81613[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 13))
{var inst_81560 = cljs.core.async.close_BANG_.call(null,out);var state_81571__$1 = state_81571;var statearr_81590_81614 = state_81571__$1;(statearr_81590_81614[2] = inst_81560);
(statearr_81590_81614[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 14))
{var inst_81557 = (state_81571[12]);var inst_81562 = cljs.core.apply.call(null,f,inst_81557);var state_81571__$1 = state_81571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81571__$1,16,out,inst_81562);
} else
{if((state_val_81572 === 15))
{var inst_81567 = (state_81571[2]);var state_81571__$1 = state_81571;var statearr_81591_81615 = state_81571__$1;(statearr_81591_81615[2] = inst_81567);
(statearr_81591_81615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81572 === 16))
{var inst_81564 = (state_81571[2]);var state_81571__$1 = (function (){var statearr_81592 = state_81571;(statearr_81592[13] = inst_81564);
return statearr_81592;
})();var statearr_81593_81616 = state_81571__$1;(statearr_81593_81616[2] = null);
(statearr_81593_81616[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_81597 = (new Array(14));(statearr_81597[0] = state_machine__13310__auto__);
(statearr_81597[1] = 1);
return statearr_81597;
});
var state_machine__13310__auto____1 = (function (state_81571){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_81571);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e81598){if((e81598 instanceof Object))
{var ex__13313__auto__ = e81598;var statearr_81599_81617 = state_81571;(statearr_81599_81617[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81618 = state_81571;
state_81571 = G__81618;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_81571){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_81571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_81600 = f__13410__auto__.call(null);(statearr_81600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___81601);
return statearr_81600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___81726 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_81702){var state_val_81703 = (state_81702[1]);if((state_val_81703 === 1))
{var inst_81673 = cljs.core.vec.call(null,chs);var inst_81674 = inst_81673;var state_81702__$1 = (function (){var statearr_81704 = state_81702;(statearr_81704[7] = inst_81674);
return statearr_81704;
})();var statearr_81705_81727 = state_81702__$1;(statearr_81705_81727[2] = null);
(statearr_81705_81727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 2))
{var inst_81674 = (state_81702[7]);var inst_81676 = cljs.core.count.call(null,inst_81674);var inst_81677 = (inst_81676 > 0);var state_81702__$1 = state_81702;if(cljs.core.truth_(inst_81677))
{var statearr_81706_81728 = state_81702__$1;(statearr_81706_81728[1] = 4);
} else
{var statearr_81707_81729 = state_81702__$1;(statearr_81707_81729[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 3))
{var inst_81700 = (state_81702[2]);var state_81702__$1 = state_81702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81702__$1,inst_81700);
} else
{if((state_val_81703 === 4))
{var inst_81674 = (state_81702[7]);var state_81702__$1 = state_81702;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_81702__$1,7,inst_81674);
} else
{if((state_val_81703 === 5))
{var inst_81696 = cljs.core.async.close_BANG_.call(null,out);var state_81702__$1 = state_81702;var statearr_81708_81730 = state_81702__$1;(statearr_81708_81730[2] = inst_81696);
(statearr_81708_81730[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 6))
{var inst_81698 = (state_81702[2]);var state_81702__$1 = state_81702;var statearr_81709_81731 = state_81702__$1;(statearr_81709_81731[2] = inst_81698);
(statearr_81709_81731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 7))
{var inst_81681 = (state_81702[8]);var inst_81682 = (state_81702[9]);var inst_81681__$1 = (state_81702[2]);var inst_81682__$1 = cljs.core.nth.call(null,inst_81681__$1,0,null);var inst_81683 = cljs.core.nth.call(null,inst_81681__$1,1,null);var inst_81684 = (inst_81682__$1 == null);var state_81702__$1 = (function (){var statearr_81710 = state_81702;(statearr_81710[8] = inst_81681__$1);
(statearr_81710[9] = inst_81682__$1);
(statearr_81710[10] = inst_81683);
return statearr_81710;
})();if(cljs.core.truth_(inst_81684))
{var statearr_81711_81732 = state_81702__$1;(statearr_81711_81732[1] = 8);
} else
{var statearr_81712_81733 = state_81702__$1;(statearr_81712_81733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 8))
{var inst_81674 = (state_81702[7]);var inst_81681 = (state_81702[8]);var inst_81682 = (state_81702[9]);var inst_81683 = (state_81702[10]);var inst_81686 = (function (){var c = inst_81683;var v = inst_81682;var vec__81679 = inst_81681;var cs = inst_81674;return ((function (c,v,vec__81679,cs,inst_81674,inst_81681,inst_81682,inst_81683,state_val_81703){
return (function (p1__81619_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__81619_SHARP_);
});
;})(c,v,vec__81679,cs,inst_81674,inst_81681,inst_81682,inst_81683,state_val_81703))
})();var inst_81687 = cljs.core.filterv.call(null,inst_81686,inst_81674);var inst_81674__$1 = inst_81687;var state_81702__$1 = (function (){var statearr_81713 = state_81702;(statearr_81713[7] = inst_81674__$1);
return statearr_81713;
})();var statearr_81714_81734 = state_81702__$1;(statearr_81714_81734[2] = null);
(statearr_81714_81734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 9))
{var inst_81682 = (state_81702[9]);var state_81702__$1 = state_81702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81702__$1,11,out,inst_81682);
} else
{if((state_val_81703 === 10))
{var inst_81694 = (state_81702[2]);var state_81702__$1 = state_81702;var statearr_81716_81735 = state_81702__$1;(statearr_81716_81735[2] = inst_81694);
(statearr_81716_81735[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81703 === 11))
{var inst_81674 = (state_81702[7]);var inst_81691 = (state_81702[2]);var tmp81715 = inst_81674;var inst_81674__$1 = tmp81715;var state_81702__$1 = (function (){var statearr_81717 = state_81702;(statearr_81717[11] = inst_81691);
(statearr_81717[7] = inst_81674__$1);
return statearr_81717;
})();var statearr_81718_81736 = state_81702__$1;(statearr_81718_81736[2] = null);
(statearr_81718_81736[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_81722 = (new Array(12));(statearr_81722[0] = state_machine__13310__auto__);
(statearr_81722[1] = 1);
return statearr_81722;
});
var state_machine__13310__auto____1 = (function (state_81702){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_81702);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e81723){if((e81723 instanceof Object))
{var ex__13313__auto__ = e81723;var statearr_81724_81737 = state_81702;(statearr_81724_81737[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81738 = state_81702;
state_81702 = G__81738;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_81702){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_81702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_81725 = f__13410__auto__.call(null);(statearr_81725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___81726);
return statearr_81725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___81831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_81808){var state_val_81809 = (state_81808[1]);if((state_val_81809 === 1))
{var inst_81785 = 0;var state_81808__$1 = (function (){var statearr_81810 = state_81808;(statearr_81810[7] = inst_81785);
return statearr_81810;
})();var statearr_81811_81832 = state_81808__$1;(statearr_81811_81832[2] = null);
(statearr_81811_81832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 2))
{var inst_81785 = (state_81808[7]);var inst_81787 = (inst_81785 < n);var state_81808__$1 = state_81808;if(cljs.core.truth_(inst_81787))
{var statearr_81812_81833 = state_81808__$1;(statearr_81812_81833[1] = 4);
} else
{var statearr_81813_81834 = state_81808__$1;(statearr_81813_81834[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 3))
{var inst_81805 = (state_81808[2]);var inst_81806 = cljs.core.async.close_BANG_.call(null,out);var state_81808__$1 = (function (){var statearr_81814 = state_81808;(statearr_81814[8] = inst_81805);
return statearr_81814;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81808__$1,inst_81806);
} else
{if((state_val_81809 === 4))
{var state_81808__$1 = state_81808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81808__$1,7,ch);
} else
{if((state_val_81809 === 5))
{var state_81808__$1 = state_81808;var statearr_81815_81835 = state_81808__$1;(statearr_81815_81835[2] = null);
(statearr_81815_81835[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 6))
{var inst_81803 = (state_81808[2]);var state_81808__$1 = state_81808;var statearr_81816_81836 = state_81808__$1;(statearr_81816_81836[2] = inst_81803);
(statearr_81816_81836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 7))
{var inst_81790 = (state_81808[9]);var inst_81790__$1 = (state_81808[2]);var inst_81791 = (inst_81790__$1 == null);var inst_81792 = cljs.core.not.call(null,inst_81791);var state_81808__$1 = (function (){var statearr_81817 = state_81808;(statearr_81817[9] = inst_81790__$1);
return statearr_81817;
})();if(inst_81792)
{var statearr_81818_81837 = state_81808__$1;(statearr_81818_81837[1] = 8);
} else
{var statearr_81819_81838 = state_81808__$1;(statearr_81819_81838[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 8))
{var inst_81790 = (state_81808[9]);var state_81808__$1 = state_81808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81808__$1,11,out,inst_81790);
} else
{if((state_val_81809 === 9))
{var state_81808__$1 = state_81808;var statearr_81820_81839 = state_81808__$1;(statearr_81820_81839[2] = null);
(statearr_81820_81839[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 10))
{var inst_81800 = (state_81808[2]);var state_81808__$1 = state_81808;var statearr_81821_81840 = state_81808__$1;(statearr_81821_81840[2] = inst_81800);
(statearr_81821_81840[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81809 === 11))
{var inst_81785 = (state_81808[7]);var inst_81795 = (state_81808[2]);var inst_81796 = (inst_81785 + 1);var inst_81785__$1 = inst_81796;var state_81808__$1 = (function (){var statearr_81822 = state_81808;(statearr_81822[7] = inst_81785__$1);
(statearr_81822[10] = inst_81795);
return statearr_81822;
})();var statearr_81823_81841 = state_81808__$1;(statearr_81823_81841[2] = null);
(statearr_81823_81841[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_81827 = (new Array(11));(statearr_81827[0] = state_machine__13310__auto__);
(statearr_81827[1] = 1);
return statearr_81827;
});
var state_machine__13310__auto____1 = (function (state_81808){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_81808);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e81828){if((e81828 instanceof Object))
{var ex__13313__auto__ = e81828;var statearr_81829_81842 = state_81808;(statearr_81829_81842[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81843 = state_81808;
state_81808 = G__81843;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_81808){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_81808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_81830 = f__13410__auto__.call(null);(statearr_81830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___81831);
return statearr_81830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___81940 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_81915){var state_val_81916 = (state_81915[1]);if((state_val_81916 === 1))
{var inst_81892 = null;var state_81915__$1 = (function (){var statearr_81917 = state_81915;(statearr_81917[7] = inst_81892);
return statearr_81917;
})();var statearr_81918_81941 = state_81915__$1;(statearr_81918_81941[2] = null);
(statearr_81918_81941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 2))
{var state_81915__$1 = state_81915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81915__$1,4,ch);
} else
{if((state_val_81916 === 3))
{var inst_81912 = (state_81915[2]);var inst_81913 = cljs.core.async.close_BANG_.call(null,out);var state_81915__$1 = (function (){var statearr_81919 = state_81915;(statearr_81919[8] = inst_81912);
return statearr_81919;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81915__$1,inst_81913);
} else
{if((state_val_81916 === 4))
{var inst_81895 = (state_81915[9]);var inst_81895__$1 = (state_81915[2]);var inst_81896 = (inst_81895__$1 == null);var inst_81897 = cljs.core.not.call(null,inst_81896);var state_81915__$1 = (function (){var statearr_81920 = state_81915;(statearr_81920[9] = inst_81895__$1);
return statearr_81920;
})();if(inst_81897)
{var statearr_81921_81942 = state_81915__$1;(statearr_81921_81942[1] = 5);
} else
{var statearr_81922_81943 = state_81915__$1;(statearr_81922_81943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 5))
{var inst_81892 = (state_81915[7]);var inst_81895 = (state_81915[9]);var inst_81899 = cljs.core._EQ_.call(null,inst_81895,inst_81892);var state_81915__$1 = state_81915;if(inst_81899)
{var statearr_81923_81944 = state_81915__$1;(statearr_81923_81944[1] = 8);
} else
{var statearr_81924_81945 = state_81915__$1;(statearr_81924_81945[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 6))
{var state_81915__$1 = state_81915;var statearr_81926_81946 = state_81915__$1;(statearr_81926_81946[2] = null);
(statearr_81926_81946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 7))
{var inst_81910 = (state_81915[2]);var state_81915__$1 = state_81915;var statearr_81927_81947 = state_81915__$1;(statearr_81927_81947[2] = inst_81910);
(statearr_81927_81947[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 8))
{var inst_81892 = (state_81915[7]);var tmp81925 = inst_81892;var inst_81892__$1 = tmp81925;var state_81915__$1 = (function (){var statearr_81928 = state_81915;(statearr_81928[7] = inst_81892__$1);
return statearr_81928;
})();var statearr_81929_81948 = state_81915__$1;(statearr_81929_81948[2] = null);
(statearr_81929_81948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 9))
{var inst_81895 = (state_81915[9]);var state_81915__$1 = state_81915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81915__$1,11,out,inst_81895);
} else
{if((state_val_81916 === 10))
{var inst_81907 = (state_81915[2]);var state_81915__$1 = state_81915;var statearr_81930_81949 = state_81915__$1;(statearr_81930_81949[2] = inst_81907);
(statearr_81930_81949[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81916 === 11))
{var inst_81895 = (state_81915[9]);var inst_81904 = (state_81915[2]);var inst_81892 = inst_81895;var state_81915__$1 = (function (){var statearr_81931 = state_81915;(statearr_81931[7] = inst_81892);
(statearr_81931[10] = inst_81904);
return statearr_81931;
})();var statearr_81932_81950 = state_81915__$1;(statearr_81932_81950[2] = null);
(statearr_81932_81950[1] = 2);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_81936 = (new Array(11));(statearr_81936[0] = state_machine__13310__auto__);
(statearr_81936[1] = 1);
return statearr_81936;
});
var state_machine__13310__auto____1 = (function (state_81915){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_81915);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e81937){if((e81937 instanceof Object))
{var ex__13313__auto__ = e81937;var statearr_81938_81951 = state_81915;(statearr_81938_81951[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81915);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81952 = state_81915;
state_81915 = G__81952;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_81915){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_81915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_81939 = f__13410__auto__.call(null);(statearr_81939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___81940);
return statearr_81939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___82087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_82057){var state_val_82058 = (state_82057[1]);if((state_val_82058 === 1))
{var inst_82020 = (new Array(n));var inst_82021 = inst_82020;var inst_82022 = 0;var state_82057__$1 = (function (){var statearr_82059 = state_82057;(statearr_82059[7] = inst_82021);
(statearr_82059[8] = inst_82022);
return statearr_82059;
})();var statearr_82060_82088 = state_82057__$1;(statearr_82060_82088[2] = null);
(statearr_82060_82088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 2))
{var state_82057__$1 = state_82057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82057__$1,4,ch);
} else
{if((state_val_82058 === 3))
{var inst_82055 = (state_82057[2]);var state_82057__$1 = state_82057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82057__$1,inst_82055);
} else
{if((state_val_82058 === 4))
{var inst_82025 = (state_82057[9]);var inst_82025__$1 = (state_82057[2]);var inst_82026 = (inst_82025__$1 == null);var inst_82027 = cljs.core.not.call(null,inst_82026);var state_82057__$1 = (function (){var statearr_82061 = state_82057;(statearr_82061[9] = inst_82025__$1);
return statearr_82061;
})();if(inst_82027)
{var statearr_82062_82089 = state_82057__$1;(statearr_82062_82089[1] = 5);
} else
{var statearr_82063_82090 = state_82057__$1;(statearr_82063_82090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 5))
{var inst_82021 = (state_82057[7]);var inst_82022 = (state_82057[8]);var inst_82030 = (state_82057[10]);var inst_82025 = (state_82057[9]);var inst_82029 = (inst_82021[inst_82022] = inst_82025);var inst_82030__$1 = (inst_82022 + 1);var inst_82031 = (inst_82030__$1 < n);var state_82057__$1 = (function (){var statearr_82064 = state_82057;(statearr_82064[10] = inst_82030__$1);
(statearr_82064[11] = inst_82029);
return statearr_82064;
})();if(cljs.core.truth_(inst_82031))
{var statearr_82065_82091 = state_82057__$1;(statearr_82065_82091[1] = 8);
} else
{var statearr_82066_82092 = state_82057__$1;(statearr_82066_82092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 6))
{var inst_82022 = (state_82057[8]);var inst_82043 = (inst_82022 > 0);var state_82057__$1 = state_82057;if(cljs.core.truth_(inst_82043))
{var statearr_82068_82093 = state_82057__$1;(statearr_82068_82093[1] = 12);
} else
{var statearr_82069_82094 = state_82057__$1;(statearr_82069_82094[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 7))
{var inst_82053 = (state_82057[2]);var state_82057__$1 = state_82057;var statearr_82070_82095 = state_82057__$1;(statearr_82070_82095[2] = inst_82053);
(statearr_82070_82095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 8))
{var inst_82021 = (state_82057[7]);var inst_82030 = (state_82057[10]);var tmp82067 = inst_82021;var inst_82021__$1 = tmp82067;var inst_82022 = inst_82030;var state_82057__$1 = (function (){var statearr_82071 = state_82057;(statearr_82071[7] = inst_82021__$1);
(statearr_82071[8] = inst_82022);
return statearr_82071;
})();var statearr_82072_82096 = state_82057__$1;(statearr_82072_82096[2] = null);
(statearr_82072_82096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 9))
{var inst_82021 = (state_82057[7]);var inst_82035 = cljs.core.vec.call(null,inst_82021);var state_82057__$1 = state_82057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82057__$1,11,out,inst_82035);
} else
{if((state_val_82058 === 10))
{var inst_82041 = (state_82057[2]);var state_82057__$1 = state_82057;var statearr_82073_82097 = state_82057__$1;(statearr_82073_82097[2] = inst_82041);
(statearr_82073_82097[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 11))
{var inst_82037 = (state_82057[2]);var inst_82038 = (new Array(n));var inst_82021 = inst_82038;var inst_82022 = 0;var state_82057__$1 = (function (){var statearr_82074 = state_82057;(statearr_82074[12] = inst_82037);
(statearr_82074[7] = inst_82021);
(statearr_82074[8] = inst_82022);
return statearr_82074;
})();var statearr_82075_82098 = state_82057__$1;(statearr_82075_82098[2] = null);
(statearr_82075_82098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 12))
{var inst_82021 = (state_82057[7]);var inst_82045 = cljs.core.vec.call(null,inst_82021);var state_82057__$1 = state_82057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82057__$1,15,out,inst_82045);
} else
{if((state_val_82058 === 13))
{var state_82057__$1 = state_82057;var statearr_82076_82099 = state_82057__$1;(statearr_82076_82099[2] = null);
(statearr_82076_82099[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 14))
{var inst_82050 = (state_82057[2]);var inst_82051 = cljs.core.async.close_BANG_.call(null,out);var state_82057__$1 = (function (){var statearr_82077 = state_82057;(statearr_82077[13] = inst_82050);
return statearr_82077;
})();var statearr_82078_82100 = state_82057__$1;(statearr_82078_82100[2] = inst_82051);
(statearr_82078_82100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82058 === 15))
{var inst_82047 = (state_82057[2]);var state_82057__$1 = state_82057;var statearr_82079_82101 = state_82057__$1;(statearr_82079_82101[2] = inst_82047);
(statearr_82079_82101[1] = 14);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_82083 = (new Array(14));(statearr_82083[0] = state_machine__13310__auto__);
(statearr_82083[1] = 1);
return statearr_82083;
});
var state_machine__13310__auto____1 = (function (state_82057){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_82057);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e82084){if((e82084 instanceof Object))
{var ex__13313__auto__ = e82084;var statearr_82085_82102 = state_82057;(statearr_82085_82102[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82103 = state_82057;
state_82057 = G__82103;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_82057){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_82057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_82086 = f__13410__auto__.call(null);(statearr_82086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___82087);
return statearr_82086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13409__auto___82246 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_82216){var state_val_82217 = (state_82216[1]);if((state_val_82217 === 1))
{var inst_82175 = (new Array(0));var inst_82176 = inst_82175;var inst_82177 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_82216__$1 = (function (){var statearr_82218 = state_82216;(statearr_82218[7] = inst_82176);
(statearr_82218[8] = inst_82177);
return statearr_82218;
})();var statearr_82219_82247 = state_82216__$1;(statearr_82219_82247[2] = null);
(statearr_82219_82247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 2))
{var state_82216__$1 = state_82216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82216__$1,4,ch);
} else
{if((state_val_82217 === 3))
{var inst_82214 = (state_82216[2]);var state_82216__$1 = state_82216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82216__$1,inst_82214);
} else
{if((state_val_82217 === 4))
{var inst_82180 = (state_82216[9]);var inst_82180__$1 = (state_82216[2]);var inst_82181 = (inst_82180__$1 == null);var inst_82182 = cljs.core.not.call(null,inst_82181);var state_82216__$1 = (function (){var statearr_82220 = state_82216;(statearr_82220[9] = inst_82180__$1);
return statearr_82220;
})();if(inst_82182)
{var statearr_82221_82248 = state_82216__$1;(statearr_82221_82248[1] = 5);
} else
{var statearr_82222_82249 = state_82216__$1;(statearr_82222_82249[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 5))
{var inst_82180 = (state_82216[9]);var inst_82184 = (state_82216[10]);var inst_82177 = (state_82216[8]);var inst_82184__$1 = f.call(null,inst_82180);var inst_82185 = cljs.core._EQ_.call(null,inst_82184__$1,inst_82177);var inst_82186 = cljs.core.keyword_identical_QMARK_.call(null,inst_82177,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_82187 = (inst_82185) || (inst_82186);var state_82216__$1 = (function (){var statearr_82223 = state_82216;(statearr_82223[10] = inst_82184__$1);
return statearr_82223;
})();if(cljs.core.truth_(inst_82187))
{var statearr_82224_82250 = state_82216__$1;(statearr_82224_82250[1] = 8);
} else
{var statearr_82225_82251 = state_82216__$1;(statearr_82225_82251[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 6))
{var inst_82176 = (state_82216[7]);var inst_82201 = inst_82176.length;var inst_82202 = (inst_82201 > 0);var state_82216__$1 = state_82216;if(cljs.core.truth_(inst_82202))
{var statearr_82227_82252 = state_82216__$1;(statearr_82227_82252[1] = 12);
} else
{var statearr_82228_82253 = state_82216__$1;(statearr_82228_82253[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 7))
{var inst_82212 = (state_82216[2]);var state_82216__$1 = state_82216;var statearr_82229_82254 = state_82216__$1;(statearr_82229_82254[2] = inst_82212);
(statearr_82229_82254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 8))
{var inst_82180 = (state_82216[9]);var inst_82184 = (state_82216[10]);var inst_82176 = (state_82216[7]);var inst_82189 = inst_82176.push(inst_82180);var tmp82226 = inst_82176;var inst_82176__$1 = tmp82226;var inst_82177 = inst_82184;var state_82216__$1 = (function (){var statearr_82230 = state_82216;(statearr_82230[11] = inst_82189);
(statearr_82230[7] = inst_82176__$1);
(statearr_82230[8] = inst_82177);
return statearr_82230;
})();var statearr_82231_82255 = state_82216__$1;(statearr_82231_82255[2] = null);
(statearr_82231_82255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 9))
{var inst_82176 = (state_82216[7]);var inst_82192 = cljs.core.vec.call(null,inst_82176);var state_82216__$1 = state_82216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82216__$1,11,out,inst_82192);
} else
{if((state_val_82217 === 10))
{var inst_82199 = (state_82216[2]);var state_82216__$1 = state_82216;var statearr_82232_82256 = state_82216__$1;(statearr_82232_82256[2] = inst_82199);
(statearr_82232_82256[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 11))
{var inst_82180 = (state_82216[9]);var inst_82184 = (state_82216[10]);var inst_82194 = (state_82216[2]);var inst_82195 = (new Array(0));var inst_82196 = inst_82195.push(inst_82180);var inst_82176 = inst_82195;var inst_82177 = inst_82184;var state_82216__$1 = (function (){var statearr_82233 = state_82216;(statearr_82233[12] = inst_82196);
(statearr_82233[13] = inst_82194);
(statearr_82233[7] = inst_82176);
(statearr_82233[8] = inst_82177);
return statearr_82233;
})();var statearr_82234_82257 = state_82216__$1;(statearr_82234_82257[2] = null);
(statearr_82234_82257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 12))
{var inst_82176 = (state_82216[7]);var inst_82204 = cljs.core.vec.call(null,inst_82176);var state_82216__$1 = state_82216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82216__$1,15,out,inst_82204);
} else
{if((state_val_82217 === 13))
{var state_82216__$1 = state_82216;var statearr_82235_82258 = state_82216__$1;(statearr_82235_82258[2] = null);
(statearr_82235_82258[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 14))
{var inst_82209 = (state_82216[2]);var inst_82210 = cljs.core.async.close_BANG_.call(null,out);var state_82216__$1 = (function (){var statearr_82236 = state_82216;(statearr_82236[14] = inst_82209);
return statearr_82236;
})();var statearr_82237_82259 = state_82216__$1;(statearr_82237_82259[2] = inst_82210);
(statearr_82237_82259[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82217 === 15))
{var inst_82206 = (state_82216[2]);var state_82216__$1 = state_82216;var statearr_82238_82260 = state_82216__$1;(statearr_82238_82260[2] = inst_82206);
(statearr_82238_82260[1] = 14);
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
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_82242 = (new Array(15));(statearr_82242[0] = state_machine__13310__auto__);
(statearr_82242[1] = 1);
return statearr_82242;
});
var state_machine__13310__auto____1 = (function (state_82216){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_82216);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e82243){if((e82243 instanceof Object))
{var ex__13313__auto__ = e82243;var statearr_82244_82261 = state_82216;(statearr_82244_82261[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82262 = state_82216;
state_82216 = G__82262;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_82216){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_82216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_82245 = f__13410__auto__.call(null);(statearr_82245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto___82246);
return statearr_82245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
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
