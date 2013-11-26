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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34784 = (function (f,fn_handler,meta34785){
this.f = f;
this.fn_handler = fn_handler;
this.meta34785 = meta34785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34784.cljs$lang$type = true;
cljs.core.async.t34784.cljs$lang$ctorStr = "cljs.core.async/t34784";
cljs.core.async.t34784.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34784");
});
cljs.core.async.t34784.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34784.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34784.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34786){var self__ = this;
var _34786__$1 = this;return self__.meta34785;
});
cljs.core.async.t34784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34786,meta34785__$1){var self__ = this;
var _34786__$1 = this;return (new cljs.core.async.t34784(self__.f,self__.fn_handler,meta34785__$1));
});
cljs.core.async.__GT_t34784 = (function __GT_t34784(f__$1,fn_handler__$1,meta34785){return (new cljs.core.async.t34784(f__$1,fn_handler__$1,meta34785));
});
}
return (new cljs.core.async.t34784(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34788 = buff;if(G__34788)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__34788.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34788.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34788);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34788);
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
{var val_34789 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34789);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34789);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5980__auto___34790 = n;var x_34791 = 0;while(true){
if((x_34791 < n__5980__auto___34790))
{(a[x_34791] = 0);
{
var G__34792 = (x_34791 + 1);
x_34791 = G__34792;
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
var G__34793 = (i + 1);
i = G__34793;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34797 = (function (flag,alt_flag,meta34798){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34798 = meta34798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34797.cljs$lang$type = true;
cljs.core.async.t34797.cljs$lang$ctorStr = "cljs.core.async/t34797";
cljs.core.async.t34797.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34797");
});
cljs.core.async.t34797.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34799){var self__ = this;
var _34799__$1 = this;return self__.meta34798;
});
cljs.core.async.t34797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34799,meta34798__$1){var self__ = this;
var _34799__$1 = this;return (new cljs.core.async.t34797(self__.flag,self__.alt_flag,meta34798__$1));
});
cljs.core.async.__GT_t34797 = (function __GT_t34797(flag__$1,alt_flag__$1,meta34798){return (new cljs.core.async.t34797(flag__$1,alt_flag__$1,meta34798));
});
}
return (new cljs.core.async.t34797(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34803 = (function (cb,flag,alt_handler,meta34804){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34804 = meta34804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34803.cljs$lang$type = true;
cljs.core.async.t34803.cljs$lang$ctorStr = "cljs.core.async/t34803";
cljs.core.async.t34803.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34803");
});
cljs.core.async.t34803.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34805){var self__ = this;
var _34805__$1 = this;return self__.meta34804;
});
cljs.core.async.t34803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34805,meta34804__$1){var self__ = this;
var _34805__$1 = this;return (new cljs.core.async.t34803(self__.cb,self__.flag,self__.alt_handler,meta34804__$1));
});
cljs.core.async.__GT_t34803 = (function __GT_t34803(cb__$1,flag__$1,alt_handler__$1,meta34804){return (new cljs.core.async.t34803(cb__$1,flag__$1,alt_handler__$1,meta34804));
});
}
return (new cljs.core.async.t34803(cb,flag,alt_handler,null));
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
return (function (p1__34806_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34806_SHARP_,port], null));
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
var G__34807 = (i + 1);
i = G__34807;
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
var alts_BANG___delegate = function (ports,p__34808){var map__34810 = p__34808;var map__34810__$1 = ((cljs.core.seq_QMARK_.call(null,map__34810))?cljs.core.apply.call(null,cljs.core.hash_map,map__34810):map__34810);var opts = map__34810__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34808 = null;if (arguments.length > 1) {
  p__34808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34808);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34811){
var ports = cljs.core.first(arglist__34811);
var p__34808 = cljs.core.rest(arglist__34811);
return alts_BANG___delegate(ports,p__34808);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34819 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34819 = (function (ch,f,map_LT_,meta34820){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34820 = meta34820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34819.cljs$lang$type = true;
cljs.core.async.t34819.cljs$lang$ctorStr = "cljs.core.async/t34819";
cljs.core.async.t34819.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34819");
});
cljs.core.async.t34819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34822 = (function (fn1,_,meta34820,ch,f,map_LT_,meta34823){
this.fn1 = fn1;
this._ = _;
this.meta34820 = meta34820;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34822.cljs$lang$type = true;
cljs.core.async.t34822.cljs$lang$ctorStr = "cljs.core.async/t34822";
cljs.core.async.t34822.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34822");
});
cljs.core.async.t34822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34822.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34812_SHARP_){return f1.call(null,(((p1__34812_SHARP_ == null))?null:self__.f.call(null,p1__34812_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34824){var self__ = this;
var _34824__$1 = this;return self__.meta34823;
});
cljs.core.async.t34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34824,meta34823__$1){var self__ = this;
var _34824__$1 = this;return (new cljs.core.async.t34822(self__.fn1,self__._,self__.meta34820,self__.ch,self__.f,self__.map_LT_,meta34823__$1));
});
cljs.core.async.__GT_t34822 = (function __GT_t34822(fn1__$1,___$2,meta34820__$1,ch__$2,f__$2,map_LT___$2,meta34823){return (new cljs.core.async.t34822(fn1__$1,___$2,meta34820__$1,ch__$2,f__$2,map_LT___$2,meta34823));
});
}
return (new cljs.core.async.t34822(fn1,___$1,self__.meta34820,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34819.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34821){var self__ = this;
var _34821__$1 = this;return self__.meta34820;
});
cljs.core.async.t34819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34821,meta34820__$1){var self__ = this;
var _34821__$1 = this;return (new cljs.core.async.t34819(self__.ch,self__.f,self__.map_LT_,meta34820__$1));
});
cljs.core.async.__GT_t34819 = (function __GT_t34819(ch__$1,f__$1,map_LT___$1,meta34820){return (new cljs.core.async.t34819(ch__$1,f__$1,map_LT___$1,meta34820));
});
}
return (new cljs.core.async.t34819(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34828 = (function (ch,f,map_GT_,meta34829){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34829 = meta34829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34828.cljs$lang$type = true;
cljs.core.async.t34828.cljs$lang$ctorStr = "cljs.core.async/t34828";
cljs.core.async.t34828.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34828");
});
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34830){var self__ = this;
var _34830__$1 = this;return self__.meta34829;
});
cljs.core.async.t34828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34830,meta34829__$1){var self__ = this;
var _34830__$1 = this;return (new cljs.core.async.t34828(self__.ch,self__.f,self__.map_GT_,meta34829__$1));
});
cljs.core.async.__GT_t34828 = (function __GT_t34828(ch__$1,f__$1,map_GT___$1,meta34829){return (new cljs.core.async.t34828(ch__$1,f__$1,map_GT___$1,meta34829));
});
}
return (new cljs.core.async.t34828(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34834 = (function (ch,p,filter_GT_,meta34835){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34835 = meta34835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34834.cljs$lang$type = true;
cljs.core.async.t34834.cljs$lang$ctorStr = "cljs.core.async/t34834";
cljs.core.async.t34834.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t34834");
});
cljs.core.async.t34834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34836){var self__ = this;
var _34836__$1 = this;return self__.meta34835;
});
cljs.core.async.t34834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34836,meta34835__$1){var self__ = this;
var _34836__$1 = this;return (new cljs.core.async.t34834(self__.ch,self__.p,self__.filter_GT_,meta34835__$1));
});
cljs.core.async.__GT_t34834 = (function __GT_t34834(ch__$1,p__$1,filter_GT___$1,meta34835){return (new cljs.core.async.t34834(ch__$1,p__$1,filter_GT___$1,meta34835));
});
}
return (new cljs.core.async.t34834(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___34919 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_34898){var state_val_34899 = (state_34898[1]);if((state_val_34899 === 1))
{var state_34898__$1 = state_34898;var statearr_34900_34920 = state_34898__$1;(statearr_34900_34920[2] = null);
(statearr_34900_34920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 2))
{var state_34898__$1 = state_34898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34898__$1,4,ch);
} else
{if((state_val_34899 === 3))
{var inst_34896 = (state_34898[2]);var state_34898__$1 = state_34898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34898__$1,inst_34896);
} else
{if((state_val_34899 === 4))
{var inst_34880 = (state_34898[7]);var inst_34880__$1 = (state_34898[2]);var inst_34881 = (inst_34880__$1 == null);var state_34898__$1 = (function (){var statearr_34901 = state_34898;(statearr_34901[7] = inst_34880__$1);
return statearr_34901;
})();if(cljs.core.truth_(inst_34881))
{var statearr_34902_34921 = state_34898__$1;(statearr_34902_34921[1] = 5);
} else
{var statearr_34903_34922 = state_34898__$1;(statearr_34903_34922[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 5))
{var inst_34883 = cljs.core.async.close_BANG_.call(null,out);var state_34898__$1 = state_34898;var statearr_34904_34923 = state_34898__$1;(statearr_34904_34923[2] = inst_34883);
(statearr_34904_34923[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 6))
{var inst_34880 = (state_34898[7]);var inst_34885 = p.call(null,inst_34880);var state_34898__$1 = state_34898;if(cljs.core.truth_(inst_34885))
{var statearr_34905_34924 = state_34898__$1;(statearr_34905_34924[1] = 8);
} else
{var statearr_34906_34925 = state_34898__$1;(statearr_34906_34925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 7))
{var inst_34894 = (state_34898[2]);var state_34898__$1 = state_34898;var statearr_34907_34926 = state_34898__$1;(statearr_34907_34926[2] = inst_34894);
(statearr_34907_34926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 8))
{var inst_34880 = (state_34898[7]);var state_34898__$1 = state_34898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34898__$1,11,out,inst_34880);
} else
{if((state_val_34899 === 9))
{var state_34898__$1 = state_34898;var statearr_34908_34927 = state_34898__$1;(statearr_34908_34927[2] = null);
(statearr_34908_34927[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 10))
{var inst_34891 = (state_34898[2]);var state_34898__$1 = (function (){var statearr_34909 = state_34898;(statearr_34909[8] = inst_34891);
return statearr_34909;
})();var statearr_34910_34928 = state_34898__$1;(statearr_34910_34928[2] = null);
(statearr_34910_34928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34899 === 11))
{var inst_34888 = (state_34898[2]);var state_34898__$1 = state_34898;var statearr_34911_34929 = state_34898__$1;(statearr_34911_34929[2] = inst_34888);
(statearr_34911_34929[1] = 10);
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
var state_machine__12457__auto____0 = (function (){var statearr_34915 = (new Array(9));(statearr_34915[0] = state_machine__12457__auto__);
(statearr_34915[1] = 1);
return statearr_34915;
});
var state_machine__12457__auto____1 = (function (state_34898){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_34898);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e34916){if((e34916 instanceof Object))
{var ex__12460__auto__ = e34916;var statearr_34917_34930 = state_34898;(statearr_34917_34930[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34931 = state_34898;
state_34898 = G__34931;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_34898){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_34898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_34918 = f__12543__auto__.call(null);(statearr_34918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___34919);
return statearr_34918;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12542__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_35083){var state_val_35084 = (state_35083[1]);if((state_val_35084 === 1))
{var state_35083__$1 = state_35083;var statearr_35085_35122 = state_35083__$1;(statearr_35085_35122[2] = null);
(statearr_35085_35122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 2))
{var state_35083__$1 = state_35083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35083__$1,4,in$);
} else
{if((state_val_35084 === 3))
{var inst_35081 = (state_35083[2]);var state_35083__$1 = state_35083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35083__$1,inst_35081);
} else
{if((state_val_35084 === 4))
{var inst_35029 = (state_35083[7]);var inst_35029__$1 = (state_35083[2]);var inst_35030 = (inst_35029__$1 == null);var state_35083__$1 = (function (){var statearr_35086 = state_35083;(statearr_35086[7] = inst_35029__$1);
return statearr_35086;
})();if(cljs.core.truth_(inst_35030))
{var statearr_35087_35123 = state_35083__$1;(statearr_35087_35123[1] = 5);
} else
{var statearr_35088_35124 = state_35083__$1;(statearr_35088_35124[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 5))
{var inst_35032 = cljs.core.async.close_BANG_.call(null,out);var state_35083__$1 = state_35083;var statearr_35089_35125 = state_35083__$1;(statearr_35089_35125[2] = inst_35032);
(statearr_35089_35125[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 6))
{var inst_35029 = (state_35083[7]);var inst_35034 = f.call(null,inst_35029);var inst_35039 = cljs.core.seq.call(null,inst_35034);var inst_35040 = inst_35039;var inst_35041 = null;var inst_35042 = 0;var inst_35043 = 0;var state_35083__$1 = (function (){var statearr_35090 = state_35083;(statearr_35090[8] = inst_35043);
(statearr_35090[9] = inst_35040);
(statearr_35090[10] = inst_35042);
(statearr_35090[11] = inst_35041);
return statearr_35090;
})();var statearr_35091_35126 = state_35083__$1;(statearr_35091_35126[2] = null);
(statearr_35091_35126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 7))
{var inst_35079 = (state_35083[2]);var state_35083__$1 = state_35083;var statearr_35092_35127 = state_35083__$1;(statearr_35092_35127[2] = inst_35079);
(statearr_35092_35127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 8))
{var inst_35043 = (state_35083[8]);var inst_35042 = (state_35083[10]);var inst_35045 = (inst_35043 < inst_35042);var inst_35046 = inst_35045;var state_35083__$1 = state_35083;if(cljs.core.truth_(inst_35046))
{var statearr_35093_35128 = state_35083__$1;(statearr_35093_35128[1] = 10);
} else
{var statearr_35094_35129 = state_35083__$1;(statearr_35094_35129[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 9))
{var inst_35076 = (state_35083[2]);var state_35083__$1 = (function (){var statearr_35095 = state_35083;(statearr_35095[12] = inst_35076);
return statearr_35095;
})();var statearr_35096_35130 = state_35083__$1;(statearr_35096_35130[2] = null);
(statearr_35096_35130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 10))
{var inst_35043 = (state_35083[8]);var inst_35041 = (state_35083[11]);var inst_35048 = cljs.core._nth.call(null,inst_35041,inst_35043);var state_35083__$1 = state_35083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35083__$1,13,out,inst_35048);
} else
{if((state_val_35084 === 11))
{var inst_35054 = (state_35083[13]);var inst_35040 = (state_35083[9]);var inst_35054__$1 = cljs.core.seq.call(null,inst_35040);var state_35083__$1 = (function (){var statearr_35100 = state_35083;(statearr_35100[13] = inst_35054__$1);
return statearr_35100;
})();if(inst_35054__$1)
{var statearr_35101_35131 = state_35083__$1;(statearr_35101_35131[1] = 14);
} else
{var statearr_35102_35132 = state_35083__$1;(statearr_35102_35132[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 12))
{var inst_35074 = (state_35083[2]);var state_35083__$1 = state_35083;var statearr_35103_35133 = state_35083__$1;(statearr_35103_35133[2] = inst_35074);
(statearr_35103_35133[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 13))
{var inst_35043 = (state_35083[8]);var inst_35040 = (state_35083[9]);var inst_35042 = (state_35083[10]);var inst_35041 = (state_35083[11]);var inst_35050 = (state_35083[2]);var inst_35051 = (inst_35043 + 1);var tmp35097 = inst_35040;var tmp35098 = inst_35042;var tmp35099 = inst_35041;var inst_35040__$1 = tmp35097;var inst_35041__$1 = tmp35099;var inst_35042__$1 = tmp35098;var inst_35043__$1 = inst_35051;var state_35083__$1 = (function (){var statearr_35104 = state_35083;(statearr_35104[14] = inst_35050);
(statearr_35104[8] = inst_35043__$1);
(statearr_35104[9] = inst_35040__$1);
(statearr_35104[10] = inst_35042__$1);
(statearr_35104[11] = inst_35041__$1);
return statearr_35104;
})();var statearr_35105_35134 = state_35083__$1;(statearr_35105_35134[2] = null);
(statearr_35105_35134[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 14))
{var inst_35054 = (state_35083[13]);var inst_35056 = cljs.core.chunked_seq_QMARK_.call(null,inst_35054);var state_35083__$1 = state_35083;if(inst_35056)
{var statearr_35106_35135 = state_35083__$1;(statearr_35106_35135[1] = 17);
} else
{var statearr_35107_35136 = state_35083__$1;(statearr_35107_35136[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 15))
{var state_35083__$1 = state_35083;var statearr_35108_35137 = state_35083__$1;(statearr_35108_35137[2] = null);
(statearr_35108_35137[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 16))
{var inst_35072 = (state_35083[2]);var state_35083__$1 = state_35083;var statearr_35109_35138 = state_35083__$1;(statearr_35109_35138[2] = inst_35072);
(statearr_35109_35138[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 17))
{var inst_35054 = (state_35083[13]);var inst_35058 = cljs.core.chunk_first.call(null,inst_35054);var inst_35059 = cljs.core.chunk_rest.call(null,inst_35054);var inst_35060 = cljs.core.count.call(null,inst_35058);var inst_35040 = inst_35059;var inst_35041 = inst_35058;var inst_35042 = inst_35060;var inst_35043 = 0;var state_35083__$1 = (function (){var statearr_35110 = state_35083;(statearr_35110[8] = inst_35043);
(statearr_35110[9] = inst_35040);
(statearr_35110[10] = inst_35042);
(statearr_35110[11] = inst_35041);
return statearr_35110;
})();var statearr_35111_35139 = state_35083__$1;(statearr_35111_35139[2] = null);
(statearr_35111_35139[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 18))
{var inst_35054 = (state_35083[13]);var inst_35063 = cljs.core.first.call(null,inst_35054);var state_35083__$1 = state_35083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35083__$1,20,out,inst_35063);
} else
{if((state_val_35084 === 19))
{var inst_35069 = (state_35083[2]);var state_35083__$1 = state_35083;var statearr_35112_35140 = state_35083__$1;(statearr_35112_35140[2] = inst_35069);
(statearr_35112_35140[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35084 === 20))
{var inst_35054 = (state_35083[13]);var inst_35065 = (state_35083[2]);var inst_35066 = cljs.core.next.call(null,inst_35054);var inst_35040 = inst_35066;var inst_35041 = null;var inst_35042 = 0;var inst_35043 = 0;var state_35083__$1 = (function (){var statearr_35113 = state_35083;(statearr_35113[15] = inst_35065);
(statearr_35113[8] = inst_35043);
(statearr_35113[9] = inst_35040);
(statearr_35113[10] = inst_35042);
(statearr_35113[11] = inst_35041);
return statearr_35113;
})();var statearr_35114_35141 = state_35083__$1;(statearr_35114_35141[2] = null);
(statearr_35114_35141[1] = 8);
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
var state_machine__12457__auto____0 = (function (){var statearr_35118 = (new Array(16));(statearr_35118[0] = state_machine__12457__auto__);
(statearr_35118[1] = 1);
return statearr_35118;
});
var state_machine__12457__auto____1 = (function (state_35083){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_35083);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e35119){if((e35119 instanceof Object))
{var ex__12460__auto__ = e35119;var statearr_35120_35142 = state_35083;(statearr_35120_35142[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35143 = state_35083;
state_35083 = G__35143;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_35083){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_35083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_35121 = f__12543__auto__.call(null);(statearr_35121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto__);
return statearr_35121;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__12542__auto___35224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_35203){var state_val_35204 = (state_35203[1]);if((state_val_35204 === 1))
{var state_35203__$1 = state_35203;var statearr_35205_35225 = state_35203__$1;(statearr_35205_35225[2] = null);
(statearr_35205_35225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 2))
{var state_35203__$1 = state_35203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35203__$1,4,from);
} else
{if((state_val_35204 === 3))
{var inst_35201 = (state_35203[2]);var state_35203__$1 = state_35203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35203__$1,inst_35201);
} else
{if((state_val_35204 === 4))
{var inst_35186 = (state_35203[7]);var inst_35186__$1 = (state_35203[2]);var inst_35187 = (inst_35186__$1 == null);var state_35203__$1 = (function (){var statearr_35206 = state_35203;(statearr_35206[7] = inst_35186__$1);
return statearr_35206;
})();if(cljs.core.truth_(inst_35187))
{var statearr_35207_35226 = state_35203__$1;(statearr_35207_35226[1] = 5);
} else
{var statearr_35208_35227 = state_35203__$1;(statearr_35208_35227[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 5))
{var state_35203__$1 = state_35203;if(cljs.core.truth_(close_QMARK_))
{var statearr_35209_35228 = state_35203__$1;(statearr_35209_35228[1] = 8);
} else
{var statearr_35210_35229 = state_35203__$1;(statearr_35210_35229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 6))
{var inst_35186 = (state_35203[7]);var state_35203__$1 = state_35203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35203__$1,11,to,inst_35186);
} else
{if((state_val_35204 === 7))
{var inst_35199 = (state_35203[2]);var state_35203__$1 = state_35203;var statearr_35211_35230 = state_35203__$1;(statearr_35211_35230[2] = inst_35199);
(statearr_35211_35230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 8))
{var inst_35190 = cljs.core.async.close_BANG_.call(null,to);var state_35203__$1 = state_35203;var statearr_35212_35231 = state_35203__$1;(statearr_35212_35231[2] = inst_35190);
(statearr_35212_35231[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 9))
{var state_35203__$1 = state_35203;var statearr_35213_35232 = state_35203__$1;(statearr_35213_35232[2] = null);
(statearr_35213_35232[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 10))
{var inst_35193 = (state_35203[2]);var state_35203__$1 = state_35203;var statearr_35214_35233 = state_35203__$1;(statearr_35214_35233[2] = inst_35193);
(statearr_35214_35233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35204 === 11))
{var inst_35196 = (state_35203[2]);var state_35203__$1 = (function (){var statearr_35215 = state_35203;(statearr_35215[8] = inst_35196);
return statearr_35215;
})();var statearr_35216_35234 = state_35203__$1;(statearr_35216_35234[2] = null);
(statearr_35216_35234[1] = 2);
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
var state_machine__12457__auto____0 = (function (){var statearr_35220 = (new Array(9));(statearr_35220[0] = state_machine__12457__auto__);
(statearr_35220[1] = 1);
return statearr_35220;
});
var state_machine__12457__auto____1 = (function (state_35203){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_35203);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e35221){if((e35221 instanceof Object))
{var ex__12460__auto__ = e35221;var statearr_35222_35235 = state_35203;(statearr_35222_35235[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35236 = state_35203;
state_35203 = G__35236;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_35203){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_35203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_35223 = f__12543__auto__.call(null);(statearr_35223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___35224);
return statearr_35223;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12542__auto___35323 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_35301){var state_val_35302 = (state_35301[1]);if((state_val_35302 === 1))
{var state_35301__$1 = state_35301;var statearr_35303_35324 = state_35301__$1;(statearr_35303_35324[2] = null);
(statearr_35303_35324[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 2))
{var state_35301__$1 = state_35301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35301__$1,4,ch);
} else
{if((state_val_35302 === 3))
{var inst_35299 = (state_35301[2]);var state_35301__$1 = state_35301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35301__$1,inst_35299);
} else
{if((state_val_35302 === 4))
{var inst_35282 = (state_35301[7]);var inst_35282__$1 = (state_35301[2]);var inst_35283 = (inst_35282__$1 == null);var state_35301__$1 = (function (){var statearr_35304 = state_35301;(statearr_35304[7] = inst_35282__$1);
return statearr_35304;
})();if(cljs.core.truth_(inst_35283))
{var statearr_35305_35325 = state_35301__$1;(statearr_35305_35325[1] = 5);
} else
{var statearr_35306_35326 = state_35301__$1;(statearr_35306_35326[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 5))
{var inst_35285 = cljs.core.async.close_BANG_.call(null,tc);var inst_35286 = cljs.core.async.close_BANG_.call(null,fc);var state_35301__$1 = (function (){var statearr_35307 = state_35301;(statearr_35307[8] = inst_35285);
return statearr_35307;
})();var statearr_35308_35327 = state_35301__$1;(statearr_35308_35327[2] = inst_35286);
(statearr_35308_35327[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 6))
{var inst_35282 = (state_35301[7]);var inst_35288 = p.call(null,inst_35282);var state_35301__$1 = state_35301;if(cljs.core.truth_(inst_35288))
{var statearr_35309_35328 = state_35301__$1;(statearr_35309_35328[1] = 9);
} else
{var statearr_35310_35329 = state_35301__$1;(statearr_35310_35329[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 7))
{var inst_35297 = (state_35301[2]);var state_35301__$1 = state_35301;var statearr_35311_35330 = state_35301__$1;(statearr_35311_35330[2] = inst_35297);
(statearr_35311_35330[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 8))
{var inst_35294 = (state_35301[2]);var state_35301__$1 = (function (){var statearr_35312 = state_35301;(statearr_35312[9] = inst_35294);
return statearr_35312;
})();var statearr_35313_35331 = state_35301__$1;(statearr_35313_35331[2] = null);
(statearr_35313_35331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 9))
{var state_35301__$1 = state_35301;var statearr_35314_35332 = state_35301__$1;(statearr_35314_35332[2] = tc);
(statearr_35314_35332[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 10))
{var state_35301__$1 = state_35301;var statearr_35315_35333 = state_35301__$1;(statearr_35315_35333[2] = fc);
(statearr_35315_35333[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35302 === 11))
{var inst_35282 = (state_35301[7]);var inst_35292 = (state_35301[2]);var state_35301__$1 = state_35301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35301__$1,8,inst_35292,inst_35282);
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
var state_machine__12457__auto____0 = (function (){var statearr_35319 = (new Array(10));(statearr_35319[0] = state_machine__12457__auto__);
(statearr_35319[1] = 1);
return statearr_35319;
});
var state_machine__12457__auto____1 = (function (state_35301){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_35301);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e35320){if((e35320 instanceof Object))
{var ex__12460__auto__ = e35320;var statearr_35321_35334 = state_35301;(statearr_35321_35334[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35335 = state_35301;
state_35301 = G__35335;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_35301){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_35301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_35322 = f__12543__auto__.call(null);(statearr_35322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___35323);
return statearr_35322;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12542__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_35382){var state_val_35383 = (state_35382[1]);if((state_val_35383 === 7))
{var inst_35378 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35384_35400 = state_35382__$1;(statearr_35384_35400[2] = inst_35378);
(statearr_35384_35400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 6))
{var inst_35371 = (state_35382[7]);var inst_35368 = (state_35382[8]);var inst_35375 = f.call(null,inst_35368,inst_35371);var inst_35368__$1 = inst_35375;var state_35382__$1 = (function (){var statearr_35385 = state_35382;(statearr_35385[8] = inst_35368__$1);
return statearr_35385;
})();var statearr_35386_35401 = state_35382__$1;(statearr_35386_35401[2] = null);
(statearr_35386_35401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 5))
{var inst_35368 = (state_35382[8]);var state_35382__$1 = state_35382;var statearr_35387_35402 = state_35382__$1;(statearr_35387_35402[2] = inst_35368);
(statearr_35387_35402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 4))
{var inst_35371 = (state_35382[7]);var inst_35371__$1 = (state_35382[2]);var inst_35372 = (inst_35371__$1 == null);var state_35382__$1 = (function (){var statearr_35388 = state_35382;(statearr_35388[7] = inst_35371__$1);
return statearr_35388;
})();if(cljs.core.truth_(inst_35372))
{var statearr_35389_35403 = state_35382__$1;(statearr_35389_35403[1] = 5);
} else
{var statearr_35390_35404 = state_35382__$1;(statearr_35390_35404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 3))
{var inst_35380 = (state_35382[2]);var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35382__$1,inst_35380);
} else
{if((state_val_35383 === 2))
{var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35382__$1,4,ch);
} else
{if((state_val_35383 === 1))
{var inst_35368 = init;var state_35382__$1 = (function (){var statearr_35391 = state_35382;(statearr_35391[8] = inst_35368);
return statearr_35391;
})();var statearr_35392_35405 = state_35382__$1;(statearr_35392_35405[2] = null);
(statearr_35392_35405[1] = 2);
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
var state_machine__12457__auto____0 = (function (){var statearr_35396 = (new Array(9));(statearr_35396[0] = state_machine__12457__auto__);
(statearr_35396[1] = 1);
return statearr_35396;
});
var state_machine__12457__auto____1 = (function (state_35382){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_35382);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e35397){if((e35397 instanceof Object))
{var ex__12460__auto__ = e35397;var statearr_35398_35406 = state_35382;(statearr_35398_35406[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35407 = state_35382;
state_35382 = G__35407;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_35382){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_35382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_35399 = f__12543__auto__.call(null);(statearr_35399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto__);
return statearr_35399;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12542__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_35469){var state_val_35470 = (state_35469[1]);if((state_val_35470 === 1))
{var inst_35449 = cljs.core.seq.call(null,coll);var inst_35450 = inst_35449;var state_35469__$1 = (function (){var statearr_35471 = state_35469;(statearr_35471[7] = inst_35450);
return statearr_35471;
})();var statearr_35472_35490 = state_35469__$1;(statearr_35472_35490[2] = null);
(statearr_35472_35490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 2))
{var inst_35450 = (state_35469[7]);var state_35469__$1 = state_35469;if(cljs.core.truth_(inst_35450))
{var statearr_35473_35491 = state_35469__$1;(statearr_35473_35491[1] = 4);
} else
{var statearr_35474_35492 = state_35469__$1;(statearr_35474_35492[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 3))
{var inst_35467 = (state_35469[2]);var state_35469__$1 = state_35469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35469__$1,inst_35467);
} else
{if((state_val_35470 === 4))
{var inst_35450 = (state_35469[7]);var inst_35453 = cljs.core.first.call(null,inst_35450);var state_35469__$1 = state_35469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35469__$1,7,ch,inst_35453);
} else
{if((state_val_35470 === 5))
{var state_35469__$1 = state_35469;if(cljs.core.truth_(close_QMARK_))
{var statearr_35475_35493 = state_35469__$1;(statearr_35475_35493[1] = 8);
} else
{var statearr_35476_35494 = state_35469__$1;(statearr_35476_35494[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 6))
{var inst_35465 = (state_35469[2]);var state_35469__$1 = state_35469;var statearr_35477_35495 = state_35469__$1;(statearr_35477_35495[2] = inst_35465);
(statearr_35477_35495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 7))
{var inst_35450 = (state_35469[7]);var inst_35455 = (state_35469[2]);var inst_35456 = cljs.core.next.call(null,inst_35450);var inst_35450__$1 = inst_35456;var state_35469__$1 = (function (){var statearr_35478 = state_35469;(statearr_35478[7] = inst_35450__$1);
(statearr_35478[8] = inst_35455);
return statearr_35478;
})();var statearr_35479_35496 = state_35469__$1;(statearr_35479_35496[2] = null);
(statearr_35479_35496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 8))
{var inst_35460 = cljs.core.async.close_BANG_.call(null,ch);var state_35469__$1 = state_35469;var statearr_35480_35497 = state_35469__$1;(statearr_35480_35497[2] = inst_35460);
(statearr_35480_35497[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 9))
{var state_35469__$1 = state_35469;var statearr_35481_35498 = state_35469__$1;(statearr_35481_35498[2] = null);
(statearr_35481_35498[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35470 === 10))
{var inst_35463 = (state_35469[2]);var state_35469__$1 = state_35469;var statearr_35482_35499 = state_35469__$1;(statearr_35482_35499[2] = inst_35463);
(statearr_35482_35499[1] = 6);
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
var state_machine__12457__auto____0 = (function (){var statearr_35486 = (new Array(9));(statearr_35486[0] = state_machine__12457__auto__);
(statearr_35486[1] = 1);
return statearr_35486;
});
var state_machine__12457__auto____1 = (function (state_35469){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_35469);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e35487){if((e35487 instanceof Object))
{var ex__12460__auto__ = e35487;var statearr_35488_35500 = state_35469;(statearr_35488_35500[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35501 = state_35469;
state_35469 = G__35501;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_35469){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_35469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_35489 = f__12543__auto__.call(null);(statearr_35489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto__);
return statearr_35489;
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
cljs.core.async.Mux = (function (){var obj35503 = {};return obj35503;
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
cljs.core.async.Mult = (function (){var obj35505 = {};return obj35505;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35720 = (function (cs,ch,mult,meta35721){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35721 = meta35721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35720.cljs$lang$type = true;
cljs.core.async.t35720.cljs$lang$ctorStr = "cljs.core.async/t35720";
cljs.core.async.t35720.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t35720");
});})(cs))
;
cljs.core.async.t35720.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35720.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35720.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35720.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35720.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35722){var self__ = this;
var _35722__$1 = this;return self__.meta35721;
});})(cs))
;
cljs.core.async.t35720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35722,meta35721__$1){var self__ = this;
var _35722__$1 = this;return (new cljs.core.async.t35720(self__.cs,self__.ch,self__.mult,meta35721__$1));
});})(cs))
;
cljs.core.async.__GT_t35720 = ((function (cs){
return (function __GT_t35720(cs__$1,ch__$1,mult__$1,meta35721){return (new cljs.core.async.t35720(cs__$1,ch__$1,mult__$1,meta35721));
});})(cs))
;
}
return (new cljs.core.async.t35720(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12542__auto___35934 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_35852){var state_val_35853 = (state_35852[1]);if((state_val_35853 === 32))
{var inst_35801 = (state_35852[7]);var inst_35725 = (state_35852[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35852,31,Object,null,30);var inst_35808 = cljs.core.async.put_BANG_.call(null,inst_35801,inst_35725,done);var state_35852__$1 = state_35852;var statearr_35854_35935 = state_35852__$1;(statearr_35854_35935[2] = inst_35808);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35852__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 1))
{var state_35852__$1 = state_35852;var statearr_35855_35936 = state_35852__$1;(statearr_35855_35936[2] = null);
(statearr_35855_35936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 33))
{var inst_35814 = (state_35852[9]);var inst_35816 = cljs.core.chunked_seq_QMARK_.call(null,inst_35814);var state_35852__$1 = state_35852;if(inst_35816)
{var statearr_35856_35937 = state_35852__$1;(statearr_35856_35937[1] = 36);
} else
{var statearr_35857_35938 = state_35852__$1;(statearr_35857_35938[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 2))
{var state_35852__$1 = state_35852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35852__$1,4,ch);
} else
{if((state_val_35853 === 34))
{var state_35852__$1 = state_35852;var statearr_35858_35939 = state_35852__$1;(statearr_35858_35939[2] = null);
(statearr_35858_35939[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 3))
{var inst_35850 = (state_35852[2]);var state_35852__$1 = state_35852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35852__$1,inst_35850);
} else
{if((state_val_35853 === 35))
{var inst_35839 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35859_35940 = state_35852__$1;(statearr_35859_35940[2] = inst_35839);
(statearr_35859_35940[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 4))
{var inst_35725 = (state_35852[8]);var inst_35725__$1 = (state_35852[2]);var inst_35726 = (inst_35725__$1 == null);var state_35852__$1 = (function (){var statearr_35860 = state_35852;(statearr_35860[8] = inst_35725__$1);
return statearr_35860;
})();if(cljs.core.truth_(inst_35726))
{var statearr_35861_35941 = state_35852__$1;(statearr_35861_35941[1] = 5);
} else
{var statearr_35862_35942 = state_35852__$1;(statearr_35862_35942[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 36))
{var inst_35814 = (state_35852[9]);var inst_35818 = cljs.core.chunk_first.call(null,inst_35814);var inst_35819 = cljs.core.chunk_rest.call(null,inst_35814);var inst_35820 = cljs.core.count.call(null,inst_35818);var inst_35793 = inst_35819;var inst_35794 = inst_35818;var inst_35795 = inst_35820;var inst_35796 = 0;var state_35852__$1 = (function (){var statearr_35863 = state_35852;(statearr_35863[10] = inst_35793);
(statearr_35863[11] = inst_35794);
(statearr_35863[12] = inst_35796);
(statearr_35863[13] = inst_35795);
return statearr_35863;
})();var statearr_35864_35943 = state_35852__$1;(statearr_35864_35943[2] = null);
(statearr_35864_35943[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 5))
{var inst_35732 = cljs.core.deref.call(null,cs);var inst_35733 = cljs.core.seq.call(null,inst_35732);var inst_35734 = inst_35733;var inst_35735 = null;var inst_35736 = 0;var inst_35737 = 0;var state_35852__$1 = (function (){var statearr_35865 = state_35852;(statearr_35865[14] = inst_35734);
(statearr_35865[15] = inst_35735);
(statearr_35865[16] = inst_35736);
(statearr_35865[17] = inst_35737);
return statearr_35865;
})();var statearr_35866_35944 = state_35852__$1;(statearr_35866_35944[2] = null);
(statearr_35866_35944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 37))
{var inst_35814 = (state_35852[9]);var inst_35823 = cljs.core.first.call(null,inst_35814);var state_35852__$1 = (function (){var statearr_35867 = state_35852;(statearr_35867[18] = inst_35823);
return statearr_35867;
})();var statearr_35868_35945 = state_35852__$1;(statearr_35868_35945[2] = null);
(statearr_35868_35945[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 6))
{var inst_35784 = cljs.core.deref.call(null,cs);var inst_35785 = cljs.core.keys.call(null,inst_35784);var inst_35786 = cljs.core.count.call(null,inst_35785);var inst_35787 = cljs.core.reset_BANG_.call(null,dctr,inst_35786);var inst_35792 = cljs.core.seq.call(null,inst_35785);var inst_35793 = inst_35792;var inst_35794 = null;var inst_35795 = 0;var inst_35796 = 0;var state_35852__$1 = (function (){var statearr_35869 = state_35852;(statearr_35869[19] = inst_35787);
(statearr_35869[10] = inst_35793);
(statearr_35869[11] = inst_35794);
(statearr_35869[12] = inst_35796);
(statearr_35869[13] = inst_35795);
return statearr_35869;
})();var statearr_35870_35946 = state_35852__$1;(statearr_35870_35946[2] = null);
(statearr_35870_35946[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 38))
{var inst_35836 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35871_35947 = state_35852__$1;(statearr_35871_35947[2] = inst_35836);
(statearr_35871_35947[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 7))
{var inst_35848 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35872_35948 = state_35852__$1;(statearr_35872_35948[2] = inst_35848);
(statearr_35872_35948[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 39))
{var inst_35814 = (state_35852[9]);var inst_35832 = (state_35852[2]);var inst_35833 = cljs.core.next.call(null,inst_35814);var inst_35793 = inst_35833;var inst_35794 = null;var inst_35795 = 0;var inst_35796 = 0;var state_35852__$1 = (function (){var statearr_35873 = state_35852;(statearr_35873[10] = inst_35793);
(statearr_35873[11] = inst_35794);
(statearr_35873[20] = inst_35832);
(statearr_35873[12] = inst_35796);
(statearr_35873[13] = inst_35795);
return statearr_35873;
})();var statearr_35874_35949 = state_35852__$1;(statearr_35874_35949[2] = null);
(statearr_35874_35949[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 8))
{var inst_35736 = (state_35852[16]);var inst_35737 = (state_35852[17]);var inst_35739 = (inst_35737 < inst_35736);var inst_35740 = inst_35739;var state_35852__$1 = state_35852;if(cljs.core.truth_(inst_35740))
{var statearr_35875_35950 = state_35852__$1;(statearr_35875_35950[1] = 10);
} else
{var statearr_35876_35951 = state_35852__$1;(statearr_35876_35951[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 40))
{var inst_35823 = (state_35852[18]);var inst_35824 = (state_35852[2]);var inst_35825 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35826 = cljs.core.async.untap_STAR_.call(null,m,inst_35823);var state_35852__$1 = (function (){var statearr_35877 = state_35852;(statearr_35877[21] = inst_35825);
(statearr_35877[22] = inst_35824);
return statearr_35877;
})();var statearr_35878_35952 = state_35852__$1;(statearr_35878_35952[2] = inst_35826);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35852__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 9))
{var inst_35782 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35879_35953 = state_35852__$1;(statearr_35879_35953[2] = inst_35782);
(statearr_35879_35953[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 41))
{var inst_35725 = (state_35852[8]);var inst_35823 = (state_35852[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35852,40,Object,null,39);var inst_35830 = cljs.core.async.put_BANG_.call(null,inst_35823,inst_35725,done);var state_35852__$1 = state_35852;var statearr_35880_35954 = state_35852__$1;(statearr_35880_35954[2] = inst_35830);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35852__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 10))
{var inst_35735 = (state_35852[15]);var inst_35737 = (state_35852[17]);var inst_35743 = cljs.core._nth.call(null,inst_35735,inst_35737);var inst_35744 = cljs.core.nth.call(null,inst_35743,0,null);var inst_35745 = cljs.core.nth.call(null,inst_35743,1,null);var state_35852__$1 = (function (){var statearr_35881 = state_35852;(statearr_35881[23] = inst_35744);
return statearr_35881;
})();if(cljs.core.truth_(inst_35745))
{var statearr_35882_35955 = state_35852__$1;(statearr_35882_35955[1] = 13);
} else
{var statearr_35883_35956 = state_35852__$1;(statearr_35883_35956[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 42))
{var inst_35845 = (state_35852[2]);var state_35852__$1 = (function (){var statearr_35884 = state_35852;(statearr_35884[24] = inst_35845);
return statearr_35884;
})();var statearr_35885_35957 = state_35852__$1;(statearr_35885_35957[2] = null);
(statearr_35885_35957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 11))
{var inst_35734 = (state_35852[14]);var inst_35754 = (state_35852[25]);var inst_35754__$1 = cljs.core.seq.call(null,inst_35734);var state_35852__$1 = (function (){var statearr_35886 = state_35852;(statearr_35886[25] = inst_35754__$1);
return statearr_35886;
})();if(inst_35754__$1)
{var statearr_35887_35958 = state_35852__$1;(statearr_35887_35958[1] = 16);
} else
{var statearr_35888_35959 = state_35852__$1;(statearr_35888_35959[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 12))
{var inst_35780 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35889_35960 = state_35852__$1;(statearr_35889_35960[2] = inst_35780);
(statearr_35889_35960[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 13))
{var inst_35744 = (state_35852[23]);var inst_35747 = cljs.core.async.close_BANG_.call(null,inst_35744);var state_35852__$1 = state_35852;var statearr_35893_35961 = state_35852__$1;(statearr_35893_35961[2] = inst_35747);
(statearr_35893_35961[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 14))
{var state_35852__$1 = state_35852;var statearr_35894_35962 = state_35852__$1;(statearr_35894_35962[2] = null);
(statearr_35894_35962[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 15))
{var inst_35734 = (state_35852[14]);var inst_35735 = (state_35852[15]);var inst_35736 = (state_35852[16]);var inst_35737 = (state_35852[17]);var inst_35750 = (state_35852[2]);var inst_35751 = (inst_35737 + 1);var tmp35890 = inst_35734;var tmp35891 = inst_35735;var tmp35892 = inst_35736;var inst_35734__$1 = tmp35890;var inst_35735__$1 = tmp35891;var inst_35736__$1 = tmp35892;var inst_35737__$1 = inst_35751;var state_35852__$1 = (function (){var statearr_35895 = state_35852;(statearr_35895[14] = inst_35734__$1);
(statearr_35895[15] = inst_35735__$1);
(statearr_35895[16] = inst_35736__$1);
(statearr_35895[26] = inst_35750);
(statearr_35895[17] = inst_35737__$1);
return statearr_35895;
})();var statearr_35896_35963 = state_35852__$1;(statearr_35896_35963[2] = null);
(statearr_35896_35963[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 16))
{var inst_35754 = (state_35852[25]);var inst_35756 = cljs.core.chunked_seq_QMARK_.call(null,inst_35754);var state_35852__$1 = state_35852;if(inst_35756)
{var statearr_35897_35964 = state_35852__$1;(statearr_35897_35964[1] = 19);
} else
{var statearr_35898_35965 = state_35852__$1;(statearr_35898_35965[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 17))
{var state_35852__$1 = state_35852;var statearr_35899_35966 = state_35852__$1;(statearr_35899_35966[2] = null);
(statearr_35899_35966[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 18))
{var inst_35778 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35900_35967 = state_35852__$1;(statearr_35900_35967[2] = inst_35778);
(statearr_35900_35967[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 19))
{var inst_35754 = (state_35852[25]);var inst_35758 = cljs.core.chunk_first.call(null,inst_35754);var inst_35759 = cljs.core.chunk_rest.call(null,inst_35754);var inst_35760 = cljs.core.count.call(null,inst_35758);var inst_35734 = inst_35759;var inst_35735 = inst_35758;var inst_35736 = inst_35760;var inst_35737 = 0;var state_35852__$1 = (function (){var statearr_35901 = state_35852;(statearr_35901[14] = inst_35734);
(statearr_35901[15] = inst_35735);
(statearr_35901[16] = inst_35736);
(statearr_35901[17] = inst_35737);
return statearr_35901;
})();var statearr_35902_35968 = state_35852__$1;(statearr_35902_35968[2] = null);
(statearr_35902_35968[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 20))
{var inst_35754 = (state_35852[25]);var inst_35764 = cljs.core.first.call(null,inst_35754);var inst_35765 = cljs.core.nth.call(null,inst_35764,0,null);var inst_35766 = cljs.core.nth.call(null,inst_35764,1,null);var state_35852__$1 = (function (){var statearr_35903 = state_35852;(statearr_35903[27] = inst_35765);
return statearr_35903;
})();if(cljs.core.truth_(inst_35766))
{var statearr_35904_35969 = state_35852__$1;(statearr_35904_35969[1] = 22);
} else
{var statearr_35905_35970 = state_35852__$1;(statearr_35905_35970[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 21))
{var inst_35775 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35906_35971 = state_35852__$1;(statearr_35906_35971[2] = inst_35775);
(statearr_35906_35971[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 22))
{var inst_35765 = (state_35852[27]);var inst_35768 = cljs.core.async.close_BANG_.call(null,inst_35765);var state_35852__$1 = state_35852;var statearr_35907_35972 = state_35852__$1;(statearr_35907_35972[2] = inst_35768);
(statearr_35907_35972[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 23))
{var state_35852__$1 = state_35852;var statearr_35908_35973 = state_35852__$1;(statearr_35908_35973[2] = null);
(statearr_35908_35973[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 24))
{var inst_35754 = (state_35852[25]);var inst_35771 = (state_35852[2]);var inst_35772 = cljs.core.next.call(null,inst_35754);var inst_35734 = inst_35772;var inst_35735 = null;var inst_35736 = 0;var inst_35737 = 0;var state_35852__$1 = (function (){var statearr_35909 = state_35852;(statearr_35909[28] = inst_35771);
(statearr_35909[14] = inst_35734);
(statearr_35909[15] = inst_35735);
(statearr_35909[16] = inst_35736);
(statearr_35909[17] = inst_35737);
return statearr_35909;
})();var statearr_35910_35974 = state_35852__$1;(statearr_35910_35974[2] = null);
(statearr_35910_35974[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 25))
{var inst_35796 = (state_35852[12]);var inst_35795 = (state_35852[13]);var inst_35798 = (inst_35796 < inst_35795);var inst_35799 = inst_35798;var state_35852__$1 = state_35852;if(cljs.core.truth_(inst_35799))
{var statearr_35911_35975 = state_35852__$1;(statearr_35911_35975[1] = 27);
} else
{var statearr_35912_35976 = state_35852__$1;(statearr_35912_35976[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 26))
{var inst_35843 = (state_35852[2]);var state_35852__$1 = (function (){var statearr_35913 = state_35852;(statearr_35913[29] = inst_35843);
return statearr_35913;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35852__$1,42,dchan);
} else
{if((state_val_35853 === 27))
{var inst_35794 = (state_35852[11]);var inst_35796 = (state_35852[12]);var inst_35801 = cljs.core._nth.call(null,inst_35794,inst_35796);var state_35852__$1 = (function (){var statearr_35914 = state_35852;(statearr_35914[7] = inst_35801);
return statearr_35914;
})();var statearr_35915_35977 = state_35852__$1;(statearr_35915_35977[2] = null);
(statearr_35915_35977[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 28))
{var inst_35793 = (state_35852[10]);var inst_35814 = (state_35852[9]);var inst_35814__$1 = cljs.core.seq.call(null,inst_35793);var state_35852__$1 = (function (){var statearr_35919 = state_35852;(statearr_35919[9] = inst_35814__$1);
return statearr_35919;
})();if(inst_35814__$1)
{var statearr_35920_35978 = state_35852__$1;(statearr_35920_35978[1] = 33);
} else
{var statearr_35921_35979 = state_35852__$1;(statearr_35921_35979[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 29))
{var inst_35841 = (state_35852[2]);var state_35852__$1 = state_35852;var statearr_35922_35980 = state_35852__$1;(statearr_35922_35980[2] = inst_35841);
(statearr_35922_35980[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 30))
{var inst_35793 = (state_35852[10]);var inst_35794 = (state_35852[11]);var inst_35796 = (state_35852[12]);var inst_35795 = (state_35852[13]);var inst_35810 = (state_35852[2]);var inst_35811 = (inst_35796 + 1);var tmp35916 = inst_35793;var tmp35917 = inst_35794;var tmp35918 = inst_35795;var inst_35793__$1 = tmp35916;var inst_35794__$1 = tmp35917;var inst_35795__$1 = tmp35918;var inst_35796__$1 = inst_35811;var state_35852__$1 = (function (){var statearr_35923 = state_35852;(statearr_35923[30] = inst_35810);
(statearr_35923[10] = inst_35793__$1);
(statearr_35923[11] = inst_35794__$1);
(statearr_35923[12] = inst_35796__$1);
(statearr_35923[13] = inst_35795__$1);
return statearr_35923;
})();var statearr_35924_35981 = state_35852__$1;(statearr_35924_35981[2] = null);
(statearr_35924_35981[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35853 === 31))
{var inst_35801 = (state_35852[7]);var inst_35802 = (state_35852[2]);var inst_35803 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35804 = cljs.core.async.untap_STAR_.call(null,m,inst_35801);var state_35852__$1 = (function (){var statearr_35925 = state_35852;(statearr_35925[31] = inst_35802);
(statearr_35925[32] = inst_35803);
return statearr_35925;
})();var statearr_35926_35982 = state_35852__$1;(statearr_35926_35982[2] = inst_35804);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35852__$1);
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
var state_machine__12457__auto____0 = (function (){var statearr_35930 = (new Array(33));(statearr_35930[0] = state_machine__12457__auto__);
(statearr_35930[1] = 1);
return statearr_35930;
});
var state_machine__12457__auto____1 = (function (state_35852){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_35852);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e35931){if((e35931 instanceof Object))
{var ex__12460__auto__ = e35931;var statearr_35932_35983 = state_35852;(statearr_35932_35983[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35984 = state_35852;
state_35852 = G__35984;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_35852){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_35852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_35933 = f__12543__auto__.call(null);(statearr_35933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___35934);
return statearr_35933;
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
cljs.core.async.Mix = (function (){var obj35986 = {};return obj35986;
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
;var m = (function (){if(typeof cljs.core.async.t36096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36096 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36097){
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
this.meta36097 = meta36097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36096.cljs$lang$type = true;
cljs.core.async.t36096.cljs$lang$ctorStr = "cljs.core.async/t36096";
cljs.core.async.t36096.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t36096");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36096.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36098){var self__ = this;
var _36098__$1 = this;return self__.meta36097;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36098,meta36097__$1){var self__ = this;
var _36098__$1 = this;return (new cljs.core.async.t36096(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36097__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36096 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36096(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36097){return (new cljs.core.async.t36096(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36097));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36096(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12542__auto___36205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_36163){var state_val_36164 = (state_36163[1]);if((state_val_36164 === 1))
{var inst_36102 = (state_36163[7]);var inst_36102__$1 = calc_state.call(null);var inst_36103 = cljs.core.seq_QMARK_.call(null,inst_36102__$1);var state_36163__$1 = (function (){var statearr_36165 = state_36163;(statearr_36165[7] = inst_36102__$1);
return statearr_36165;
})();if(inst_36103)
{var statearr_36166_36206 = state_36163__$1;(statearr_36166_36206[1] = 2);
} else
{var statearr_36167_36207 = state_36163__$1;(statearr_36167_36207[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 2))
{var inst_36102 = (state_36163[7]);var inst_36105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36102);var state_36163__$1 = state_36163;var statearr_36168_36208 = state_36163__$1;(statearr_36168_36208[2] = inst_36105);
(statearr_36168_36208[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 3))
{var inst_36102 = (state_36163[7]);var state_36163__$1 = state_36163;var statearr_36169_36209 = state_36163__$1;(statearr_36169_36209[2] = inst_36102);
(statearr_36169_36209[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 4))
{var inst_36102 = (state_36163[7]);var inst_36108 = (state_36163[2]);var inst_36109 = cljs.core.get.call(null,inst_36108,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36110 = cljs.core.get.call(null,inst_36108,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36111 = cljs.core.get.call(null,inst_36108,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36112 = inst_36102;var state_36163__$1 = (function (){var statearr_36170 = state_36163;(statearr_36170[8] = inst_36109);
(statearr_36170[9] = inst_36112);
(statearr_36170[10] = inst_36110);
(statearr_36170[11] = inst_36111);
return statearr_36170;
})();var statearr_36171_36210 = state_36163__$1;(statearr_36171_36210[2] = null);
(statearr_36171_36210[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 5))
{var inst_36112 = (state_36163[9]);var inst_36115 = cljs.core.seq_QMARK_.call(null,inst_36112);var state_36163__$1 = state_36163;if(inst_36115)
{var statearr_36172_36211 = state_36163__$1;(statearr_36172_36211[1] = 7);
} else
{var statearr_36173_36212 = state_36163__$1;(statearr_36173_36212[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 6))
{var inst_36161 = (state_36163[2]);var state_36163__$1 = state_36163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36163__$1,inst_36161);
} else
{if((state_val_36164 === 7))
{var inst_36112 = (state_36163[9]);var inst_36117 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36112);var state_36163__$1 = state_36163;var statearr_36174_36213 = state_36163__$1;(statearr_36174_36213[2] = inst_36117);
(statearr_36174_36213[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 8))
{var inst_36112 = (state_36163[9]);var state_36163__$1 = state_36163;var statearr_36175_36214 = state_36163__$1;(statearr_36175_36214[2] = inst_36112);
(statearr_36175_36214[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 9))
{var inst_36120 = (state_36163[12]);var inst_36120__$1 = (state_36163[2]);var inst_36121 = cljs.core.get.call(null,inst_36120__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36122 = cljs.core.get.call(null,inst_36120__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36123 = cljs.core.get.call(null,inst_36120__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36163__$1 = (function (){var statearr_36176 = state_36163;(statearr_36176[13] = inst_36123);
(statearr_36176[14] = inst_36122);
(statearr_36176[12] = inst_36120__$1);
return statearr_36176;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36163__$1,10,inst_36121);
} else
{if((state_val_36164 === 10))
{var inst_36128 = (state_36163[15]);var inst_36127 = (state_36163[16]);var inst_36126 = (state_36163[2]);var inst_36127__$1 = cljs.core.nth.call(null,inst_36126,0,null);var inst_36128__$1 = cljs.core.nth.call(null,inst_36126,1,null);var inst_36129 = (inst_36127__$1 == null);var inst_36130 = cljs.core._EQ_.call(null,inst_36128__$1,change);var inst_36131 = (inst_36129) || (inst_36130);var state_36163__$1 = (function (){var statearr_36177 = state_36163;(statearr_36177[15] = inst_36128__$1);
(statearr_36177[16] = inst_36127__$1);
return statearr_36177;
})();if(cljs.core.truth_(inst_36131))
{var statearr_36178_36215 = state_36163__$1;(statearr_36178_36215[1] = 11);
} else
{var statearr_36179_36216 = state_36163__$1;(statearr_36179_36216[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 11))
{var inst_36127 = (state_36163[16]);var inst_36133 = (inst_36127 == null);var state_36163__$1 = state_36163;if(cljs.core.truth_(inst_36133))
{var statearr_36180_36217 = state_36163__$1;(statearr_36180_36217[1] = 14);
} else
{var statearr_36181_36218 = state_36163__$1;(statearr_36181_36218[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 12))
{var inst_36142 = (state_36163[17]);var inst_36123 = (state_36163[13]);var inst_36128 = (state_36163[15]);var inst_36142__$1 = inst_36123.call(null,inst_36128);var state_36163__$1 = (function (){var statearr_36182 = state_36163;(statearr_36182[17] = inst_36142__$1);
return statearr_36182;
})();if(cljs.core.truth_(inst_36142__$1))
{var statearr_36183_36219 = state_36163__$1;(statearr_36183_36219[1] = 17);
} else
{var statearr_36184_36220 = state_36163__$1;(statearr_36184_36220[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 13))
{var inst_36159 = (state_36163[2]);var state_36163__$1 = state_36163;var statearr_36185_36221 = state_36163__$1;(statearr_36185_36221[2] = inst_36159);
(statearr_36185_36221[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 14))
{var inst_36128 = (state_36163[15]);var inst_36135 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36128);var state_36163__$1 = state_36163;var statearr_36186_36222 = state_36163__$1;(statearr_36186_36222[2] = inst_36135);
(statearr_36186_36222[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 15))
{var state_36163__$1 = state_36163;var statearr_36187_36223 = state_36163__$1;(statearr_36187_36223[2] = null);
(statearr_36187_36223[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 16))
{var inst_36138 = (state_36163[2]);var inst_36139 = calc_state.call(null);var inst_36112 = inst_36139;var state_36163__$1 = (function (){var statearr_36188 = state_36163;(statearr_36188[9] = inst_36112);
(statearr_36188[18] = inst_36138);
return statearr_36188;
})();var statearr_36189_36224 = state_36163__$1;(statearr_36189_36224[2] = null);
(statearr_36189_36224[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 17))
{var inst_36142 = (state_36163[17]);var state_36163__$1 = state_36163;var statearr_36190_36225 = state_36163__$1;(statearr_36190_36225[2] = inst_36142);
(statearr_36190_36225[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 18))
{var inst_36123 = (state_36163[13]);var inst_36122 = (state_36163[14]);var inst_36128 = (state_36163[15]);var inst_36145 = cljs.core.empty_QMARK_.call(null,inst_36123);var inst_36146 = inst_36122.call(null,inst_36128);var inst_36147 = cljs.core.not.call(null,inst_36146);var inst_36148 = (inst_36145) && (inst_36147);var state_36163__$1 = state_36163;var statearr_36191_36226 = state_36163__$1;(statearr_36191_36226[2] = inst_36148);
(statearr_36191_36226[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 19))
{var inst_36150 = (state_36163[2]);var state_36163__$1 = state_36163;if(cljs.core.truth_(inst_36150))
{var statearr_36192_36227 = state_36163__$1;(statearr_36192_36227[1] = 20);
} else
{var statearr_36193_36228 = state_36163__$1;(statearr_36193_36228[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 20))
{var inst_36127 = (state_36163[16]);var state_36163__$1 = state_36163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36163__$1,23,out,inst_36127);
} else
{if((state_val_36164 === 21))
{var state_36163__$1 = state_36163;var statearr_36194_36229 = state_36163__$1;(statearr_36194_36229[2] = null);
(statearr_36194_36229[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 22))
{var inst_36120 = (state_36163[12]);var inst_36156 = (state_36163[2]);var inst_36112 = inst_36120;var state_36163__$1 = (function (){var statearr_36195 = state_36163;(statearr_36195[9] = inst_36112);
(statearr_36195[19] = inst_36156);
return statearr_36195;
})();var statearr_36196_36230 = state_36163__$1;(statearr_36196_36230[2] = null);
(statearr_36196_36230[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36164 === 23))
{var inst_36153 = (state_36163[2]);var state_36163__$1 = state_36163;var statearr_36197_36231 = state_36163__$1;(statearr_36197_36231[2] = inst_36153);
(statearr_36197_36231[1] = 22);
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
var state_machine__12457__auto____0 = (function (){var statearr_36201 = (new Array(20));(statearr_36201[0] = state_machine__12457__auto__);
(statearr_36201[1] = 1);
return statearr_36201;
});
var state_machine__12457__auto____1 = (function (state_36163){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_36163);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e36202){if((e36202 instanceof Object))
{var ex__12460__auto__ = e36202;var statearr_36203_36232 = state_36163;(statearr_36203_36232[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36233 = state_36163;
state_36163 = G__36233;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_36163){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_36163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_36204 = f__12543__auto__.call(null);(statearr_36204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___36205);
return statearr_36204;
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
cljs.core.async.Pub = (function (){var obj36235 = {};return obj36235;
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
return (function (p1__36236_SHARP_){if(cljs.core.truth_(p1__36236_SHARP_.call(null,topic)))
{return p1__36236_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36236_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5157__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36361 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36362){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36362 = meta36362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36361.cljs$lang$type = true;
cljs.core.async.t36361.cljs$lang$ctorStr = "cljs.core.async/t36361";
cljs.core.async.t36361.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async/t36361");
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36361.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36363){var self__ = this;
var _36363__$1 = this;return self__.meta36362;
});})(mults,ensure_mult))
;
cljs.core.async.t36361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36363,meta36362__$1){var self__ = this;
var _36363__$1 = this;return (new cljs.core.async.t36361(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36362__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36361 = ((function (mults,ensure_mult){
return (function __GT_t36361(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36362){return (new cljs.core.async.t36361(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36362));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36361(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12542__auto___36485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_36437){var state_val_36438 = (state_36437[1]);if((state_val_36438 === 1))
{var state_36437__$1 = state_36437;var statearr_36439_36486 = state_36437__$1;(statearr_36439_36486[2] = null);
(statearr_36439_36486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 2))
{var state_36437__$1 = state_36437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36437__$1,4,ch);
} else
{if((state_val_36438 === 3))
{var inst_36435 = (state_36437[2]);var state_36437__$1 = state_36437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36437__$1,inst_36435);
} else
{if((state_val_36438 === 4))
{var inst_36366 = (state_36437[7]);var inst_36366__$1 = (state_36437[2]);var inst_36367 = (inst_36366__$1 == null);var state_36437__$1 = (function (){var statearr_36440 = state_36437;(statearr_36440[7] = inst_36366__$1);
return statearr_36440;
})();if(cljs.core.truth_(inst_36367))
{var statearr_36441_36487 = state_36437__$1;(statearr_36441_36487[1] = 5);
} else
{var statearr_36442_36488 = state_36437__$1;(statearr_36442_36488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 5))
{var inst_36373 = cljs.core.deref.call(null,mults);var inst_36374 = cljs.core.vals.call(null,inst_36373);var inst_36375 = cljs.core.seq.call(null,inst_36374);var inst_36376 = inst_36375;var inst_36377 = null;var inst_36378 = 0;var inst_36379 = 0;var state_36437__$1 = (function (){var statearr_36443 = state_36437;(statearr_36443[8] = inst_36379);
(statearr_36443[9] = inst_36378);
(statearr_36443[10] = inst_36376);
(statearr_36443[11] = inst_36377);
return statearr_36443;
})();var statearr_36444_36489 = state_36437__$1;(statearr_36444_36489[2] = null);
(statearr_36444_36489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 6))
{var inst_36416 = (state_36437[12]);var inst_36366 = (state_36437[7]);var inst_36414 = (state_36437[13]);var inst_36414__$1 = topic_fn.call(null,inst_36366);var inst_36415 = cljs.core.deref.call(null,mults);var inst_36416__$1 = cljs.core.get.call(null,inst_36415,inst_36414__$1);var state_36437__$1 = (function (){var statearr_36445 = state_36437;(statearr_36445[12] = inst_36416__$1);
(statearr_36445[13] = inst_36414__$1);
return statearr_36445;
})();if(cljs.core.truth_(inst_36416__$1))
{var statearr_36446_36490 = state_36437__$1;(statearr_36446_36490[1] = 19);
} else
{var statearr_36447_36491 = state_36437__$1;(statearr_36447_36491[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 7))
{var inst_36433 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36448_36492 = state_36437__$1;(statearr_36448_36492[2] = inst_36433);
(statearr_36448_36492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 8))
{var inst_36379 = (state_36437[8]);var inst_36378 = (state_36437[9]);var inst_36381 = (inst_36379 < inst_36378);var inst_36382 = inst_36381;var state_36437__$1 = state_36437;if(cljs.core.truth_(inst_36382))
{var statearr_36452_36493 = state_36437__$1;(statearr_36452_36493[1] = 10);
} else
{var statearr_36453_36494 = state_36437__$1;(statearr_36453_36494[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 9))
{var inst_36412 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36454_36495 = state_36437__$1;(statearr_36454_36495[2] = inst_36412);
(statearr_36454_36495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 10))
{var inst_36379 = (state_36437[8]);var inst_36378 = (state_36437[9]);var inst_36376 = (state_36437[10]);var inst_36377 = (state_36437[11]);var inst_36384 = cljs.core._nth.call(null,inst_36377,inst_36379);var inst_36385 = cljs.core.async.muxch_STAR_.call(null,inst_36384);var inst_36386 = cljs.core.async.close_BANG_.call(null,inst_36385);var inst_36387 = (inst_36379 + 1);var tmp36449 = inst_36378;var tmp36450 = inst_36376;var tmp36451 = inst_36377;var inst_36376__$1 = tmp36450;var inst_36377__$1 = tmp36451;var inst_36378__$1 = tmp36449;var inst_36379__$1 = inst_36387;var state_36437__$1 = (function (){var statearr_36455 = state_36437;(statearr_36455[14] = inst_36386);
(statearr_36455[8] = inst_36379__$1);
(statearr_36455[9] = inst_36378__$1);
(statearr_36455[10] = inst_36376__$1);
(statearr_36455[11] = inst_36377__$1);
return statearr_36455;
})();var statearr_36456_36496 = state_36437__$1;(statearr_36456_36496[2] = null);
(statearr_36456_36496[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 11))
{var inst_36390 = (state_36437[15]);var inst_36376 = (state_36437[10]);var inst_36390__$1 = cljs.core.seq.call(null,inst_36376);var state_36437__$1 = (function (){var statearr_36457 = state_36437;(statearr_36457[15] = inst_36390__$1);
return statearr_36457;
})();if(inst_36390__$1)
{var statearr_36458_36497 = state_36437__$1;(statearr_36458_36497[1] = 13);
} else
{var statearr_36459_36498 = state_36437__$1;(statearr_36459_36498[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 12))
{var inst_36410 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36460_36499 = state_36437__$1;(statearr_36460_36499[2] = inst_36410);
(statearr_36460_36499[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 13))
{var inst_36390 = (state_36437[15]);var inst_36392 = cljs.core.chunked_seq_QMARK_.call(null,inst_36390);var state_36437__$1 = state_36437;if(inst_36392)
{var statearr_36461_36500 = state_36437__$1;(statearr_36461_36500[1] = 16);
} else
{var statearr_36462_36501 = state_36437__$1;(statearr_36462_36501[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 14))
{var state_36437__$1 = state_36437;var statearr_36463_36502 = state_36437__$1;(statearr_36463_36502[2] = null);
(statearr_36463_36502[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 15))
{var inst_36408 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36464_36503 = state_36437__$1;(statearr_36464_36503[2] = inst_36408);
(statearr_36464_36503[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 16))
{var inst_36390 = (state_36437[15]);var inst_36394 = cljs.core.chunk_first.call(null,inst_36390);var inst_36395 = cljs.core.chunk_rest.call(null,inst_36390);var inst_36396 = cljs.core.count.call(null,inst_36394);var inst_36376 = inst_36395;var inst_36377 = inst_36394;var inst_36378 = inst_36396;var inst_36379 = 0;var state_36437__$1 = (function (){var statearr_36465 = state_36437;(statearr_36465[8] = inst_36379);
(statearr_36465[9] = inst_36378);
(statearr_36465[10] = inst_36376);
(statearr_36465[11] = inst_36377);
return statearr_36465;
})();var statearr_36466_36504 = state_36437__$1;(statearr_36466_36504[2] = null);
(statearr_36466_36504[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 17))
{var inst_36390 = (state_36437[15]);var inst_36399 = cljs.core.first.call(null,inst_36390);var inst_36400 = cljs.core.async.muxch_STAR_.call(null,inst_36399);var inst_36401 = cljs.core.async.close_BANG_.call(null,inst_36400);var inst_36402 = cljs.core.next.call(null,inst_36390);var inst_36376 = inst_36402;var inst_36377 = null;var inst_36378 = 0;var inst_36379 = 0;var state_36437__$1 = (function (){var statearr_36467 = state_36437;(statearr_36467[8] = inst_36379);
(statearr_36467[9] = inst_36378);
(statearr_36467[10] = inst_36376);
(statearr_36467[11] = inst_36377);
(statearr_36467[16] = inst_36401);
return statearr_36467;
})();var statearr_36468_36505 = state_36437__$1;(statearr_36468_36505[2] = null);
(statearr_36468_36505[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 18))
{var inst_36405 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36469_36506 = state_36437__$1;(statearr_36469_36506[2] = inst_36405);
(statearr_36469_36506[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 19))
{var state_36437__$1 = state_36437;var statearr_36470_36507 = state_36437__$1;(statearr_36470_36507[2] = null);
(statearr_36470_36507[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 20))
{var state_36437__$1 = state_36437;var statearr_36471_36508 = state_36437__$1;(statearr_36471_36508[2] = null);
(statearr_36471_36508[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 21))
{var inst_36430 = (state_36437[2]);var state_36437__$1 = (function (){var statearr_36472 = state_36437;(statearr_36472[17] = inst_36430);
return statearr_36472;
})();var statearr_36473_36509 = state_36437__$1;(statearr_36473_36509[2] = null);
(statearr_36473_36509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 22))
{var inst_36427 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36474_36510 = state_36437__$1;(statearr_36474_36510[2] = inst_36427);
(statearr_36474_36510[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 23))
{var inst_36414 = (state_36437[13]);var inst_36418 = (state_36437[2]);var inst_36419 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36414);var state_36437__$1 = (function (){var statearr_36475 = state_36437;(statearr_36475[18] = inst_36418);
return statearr_36475;
})();var statearr_36476_36511 = state_36437__$1;(statearr_36476_36511[2] = inst_36419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36437__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36438 === 24))
{var inst_36416 = (state_36437[12]);var inst_36366 = (state_36437[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36437,23,Object,null,22);var inst_36423 = cljs.core.async.muxch_STAR_.call(null,inst_36416);var state_36437__$1 = state_36437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36437__$1,25,inst_36423,inst_36366);
} else
{if((state_val_36438 === 25))
{var inst_36425 = (state_36437[2]);var state_36437__$1 = state_36437;var statearr_36477_36512 = state_36437__$1;(statearr_36477_36512[2] = inst_36425);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36437__$1);
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
var state_machine__12457__auto____0 = (function (){var statearr_36481 = (new Array(19));(statearr_36481[0] = state_machine__12457__auto__);
(statearr_36481[1] = 1);
return statearr_36481;
});
var state_machine__12457__auto____1 = (function (state_36437){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_36437);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e36482){if((e36482 instanceof Object))
{var ex__12460__auto__ = e36482;var statearr_36483_36513 = state_36437;(statearr_36483_36513[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36514 = state_36437;
state_36437 = G__36514;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_36437){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_36437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_36484 = f__12543__auto__.call(null);(statearr_36484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___36485);
return statearr_36484;
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
,cljs.core.range.call(null,cnt));var c__12542__auto___36651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_36621){var state_val_36622 = (state_36621[1]);if((state_val_36622 === 1))
{var state_36621__$1 = state_36621;var statearr_36623_36652 = state_36621__$1;(statearr_36623_36652[2] = null);
(statearr_36623_36652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 2))
{var inst_36584 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36585 = 0;var state_36621__$1 = (function (){var statearr_36624 = state_36621;(statearr_36624[7] = inst_36585);
(statearr_36624[8] = inst_36584);
return statearr_36624;
})();var statearr_36625_36653 = state_36621__$1;(statearr_36625_36653[2] = null);
(statearr_36625_36653[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 3))
{var inst_36619 = (state_36621[2]);var state_36621__$1 = state_36621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36621__$1,inst_36619);
} else
{if((state_val_36622 === 4))
{var inst_36585 = (state_36621[7]);var inst_36587 = (inst_36585 < cnt);var state_36621__$1 = state_36621;if(cljs.core.truth_(inst_36587))
{var statearr_36626_36654 = state_36621__$1;(statearr_36626_36654[1] = 6);
} else
{var statearr_36627_36655 = state_36621__$1;(statearr_36627_36655[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 5))
{var inst_36605 = (state_36621[2]);var state_36621__$1 = (function (){var statearr_36628 = state_36621;(statearr_36628[9] = inst_36605);
return statearr_36628;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36621__$1,12,dchan);
} else
{if((state_val_36622 === 6))
{var state_36621__$1 = state_36621;var statearr_36629_36656 = state_36621__$1;(statearr_36629_36656[2] = null);
(statearr_36629_36656[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 7))
{var state_36621__$1 = state_36621;var statearr_36630_36657 = state_36621__$1;(statearr_36630_36657[2] = null);
(statearr_36630_36657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 8))
{var inst_36603 = (state_36621[2]);var state_36621__$1 = state_36621;var statearr_36631_36658 = state_36621__$1;(statearr_36631_36658[2] = inst_36603);
(statearr_36631_36658[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 9))
{var inst_36585 = (state_36621[7]);var inst_36598 = (state_36621[2]);var inst_36599 = (inst_36585 + 1);var inst_36585__$1 = inst_36599;var state_36621__$1 = (function (){var statearr_36632 = state_36621;(statearr_36632[7] = inst_36585__$1);
(statearr_36632[10] = inst_36598);
return statearr_36632;
})();var statearr_36633_36659 = state_36621__$1;(statearr_36633_36659[2] = null);
(statearr_36633_36659[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 10))
{var inst_36589 = (state_36621[2]);var inst_36590 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36621__$1 = (function (){var statearr_36634 = state_36621;(statearr_36634[11] = inst_36589);
return statearr_36634;
})();var statearr_36635_36660 = state_36621__$1;(statearr_36635_36660[2] = inst_36590);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36621__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 11))
{var inst_36585 = (state_36621[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36621,10,Object,null,9);var inst_36594 = chs__$1.call(null,inst_36585);var inst_36595 = done.call(null,inst_36585);var inst_36596 = cljs.core.async.take_BANG_.call(null,inst_36594,inst_36595);var state_36621__$1 = state_36621;var statearr_36636_36661 = state_36621__$1;(statearr_36636_36661[2] = inst_36596);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36621__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 12))
{var inst_36607 = (state_36621[12]);var inst_36607__$1 = (state_36621[2]);var inst_36608 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36607__$1);var state_36621__$1 = (function (){var statearr_36637 = state_36621;(statearr_36637[12] = inst_36607__$1);
return statearr_36637;
})();if(cljs.core.truth_(inst_36608))
{var statearr_36638_36662 = state_36621__$1;(statearr_36638_36662[1] = 13);
} else
{var statearr_36639_36663 = state_36621__$1;(statearr_36639_36663[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 13))
{var inst_36610 = cljs.core.async.close_BANG_.call(null,out);var state_36621__$1 = state_36621;var statearr_36640_36664 = state_36621__$1;(statearr_36640_36664[2] = inst_36610);
(statearr_36640_36664[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 14))
{var inst_36607 = (state_36621[12]);var inst_36612 = cljs.core.apply.call(null,f,inst_36607);var state_36621__$1 = state_36621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36621__$1,16,out,inst_36612);
} else
{if((state_val_36622 === 15))
{var inst_36617 = (state_36621[2]);var state_36621__$1 = state_36621;var statearr_36641_36665 = state_36621__$1;(statearr_36641_36665[2] = inst_36617);
(statearr_36641_36665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36622 === 16))
{var inst_36614 = (state_36621[2]);var state_36621__$1 = (function (){var statearr_36642 = state_36621;(statearr_36642[13] = inst_36614);
return statearr_36642;
})();var statearr_36643_36666 = state_36621__$1;(statearr_36643_36666[2] = null);
(statearr_36643_36666[1] = 2);
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
var state_machine__12457__auto____0 = (function (){var statearr_36647 = (new Array(14));(statearr_36647[0] = state_machine__12457__auto__);
(statearr_36647[1] = 1);
return statearr_36647;
});
var state_machine__12457__auto____1 = (function (state_36621){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_36621);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e36648){if((e36648 instanceof Object))
{var ex__12460__auto__ = e36648;var statearr_36649_36667 = state_36621;(statearr_36649_36667[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36668 = state_36621;
state_36621 = G__36668;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_36621){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_36621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_36650 = f__12543__auto__.call(null);(statearr_36650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___36651);
return statearr_36650;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___36776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_36752){var state_val_36753 = (state_36752[1]);if((state_val_36753 === 1))
{var inst_36723 = cljs.core.vec.call(null,chs);var inst_36724 = inst_36723;var state_36752__$1 = (function (){var statearr_36754 = state_36752;(statearr_36754[7] = inst_36724);
return statearr_36754;
})();var statearr_36755_36777 = state_36752__$1;(statearr_36755_36777[2] = null);
(statearr_36755_36777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 2))
{var inst_36724 = (state_36752[7]);var inst_36726 = cljs.core.count.call(null,inst_36724);var inst_36727 = (inst_36726 > 0);var state_36752__$1 = state_36752;if(cljs.core.truth_(inst_36727))
{var statearr_36756_36778 = state_36752__$1;(statearr_36756_36778[1] = 4);
} else
{var statearr_36757_36779 = state_36752__$1;(statearr_36757_36779[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 3))
{var inst_36750 = (state_36752[2]);var state_36752__$1 = state_36752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36752__$1,inst_36750);
} else
{if((state_val_36753 === 4))
{var inst_36724 = (state_36752[7]);var state_36752__$1 = state_36752;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36752__$1,7,inst_36724);
} else
{if((state_val_36753 === 5))
{var inst_36746 = cljs.core.async.close_BANG_.call(null,out);var state_36752__$1 = state_36752;var statearr_36758_36780 = state_36752__$1;(statearr_36758_36780[2] = inst_36746);
(statearr_36758_36780[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 6))
{var inst_36748 = (state_36752[2]);var state_36752__$1 = state_36752;var statearr_36759_36781 = state_36752__$1;(statearr_36759_36781[2] = inst_36748);
(statearr_36759_36781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 7))
{var inst_36732 = (state_36752[8]);var inst_36731 = (state_36752[9]);var inst_36731__$1 = (state_36752[2]);var inst_36732__$1 = cljs.core.nth.call(null,inst_36731__$1,0,null);var inst_36733 = cljs.core.nth.call(null,inst_36731__$1,1,null);var inst_36734 = (inst_36732__$1 == null);var state_36752__$1 = (function (){var statearr_36760 = state_36752;(statearr_36760[10] = inst_36733);
(statearr_36760[8] = inst_36732__$1);
(statearr_36760[9] = inst_36731__$1);
return statearr_36760;
})();if(cljs.core.truth_(inst_36734))
{var statearr_36761_36782 = state_36752__$1;(statearr_36761_36782[1] = 8);
} else
{var statearr_36762_36783 = state_36752__$1;(statearr_36762_36783[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 8))
{var inst_36733 = (state_36752[10]);var inst_36724 = (state_36752[7]);var inst_36732 = (state_36752[8]);var inst_36731 = (state_36752[9]);var inst_36736 = (function (){var c = inst_36733;var v = inst_36732;var vec__36729 = inst_36731;var cs = inst_36724;return ((function (c,v,vec__36729,cs,inst_36733,inst_36724,inst_36732,inst_36731,state_val_36753){
return (function (p1__36669_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36669_SHARP_);
});
;})(c,v,vec__36729,cs,inst_36733,inst_36724,inst_36732,inst_36731,state_val_36753))
})();var inst_36737 = cljs.core.filterv.call(null,inst_36736,inst_36724);var inst_36724__$1 = inst_36737;var state_36752__$1 = (function (){var statearr_36763 = state_36752;(statearr_36763[7] = inst_36724__$1);
return statearr_36763;
})();var statearr_36764_36784 = state_36752__$1;(statearr_36764_36784[2] = null);
(statearr_36764_36784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 9))
{var inst_36732 = (state_36752[8]);var state_36752__$1 = state_36752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36752__$1,11,out,inst_36732);
} else
{if((state_val_36753 === 10))
{var inst_36744 = (state_36752[2]);var state_36752__$1 = state_36752;var statearr_36766_36785 = state_36752__$1;(statearr_36766_36785[2] = inst_36744);
(statearr_36766_36785[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36753 === 11))
{var inst_36724 = (state_36752[7]);var inst_36741 = (state_36752[2]);var tmp36765 = inst_36724;var inst_36724__$1 = tmp36765;var state_36752__$1 = (function (){var statearr_36767 = state_36752;(statearr_36767[11] = inst_36741);
(statearr_36767[7] = inst_36724__$1);
return statearr_36767;
})();var statearr_36768_36786 = state_36752__$1;(statearr_36768_36786[2] = null);
(statearr_36768_36786[1] = 2);
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
var state_machine__12457__auto____0 = (function (){var statearr_36772 = (new Array(12));(statearr_36772[0] = state_machine__12457__auto__);
(statearr_36772[1] = 1);
return statearr_36772;
});
var state_machine__12457__auto____1 = (function (state_36752){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_36752);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e36773){if((e36773 instanceof Object))
{var ex__12460__auto__ = e36773;var statearr_36774_36787 = state_36752;(statearr_36774_36787[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36788 = state_36752;
state_36752 = G__36788;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_36752){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_36752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_36775 = f__12543__auto__.call(null);(statearr_36775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___36776);
return statearr_36775;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___36881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_36858){var state_val_36859 = (state_36858[1]);if((state_val_36859 === 1))
{var inst_36835 = 0;var state_36858__$1 = (function (){var statearr_36860 = state_36858;(statearr_36860[7] = inst_36835);
return statearr_36860;
})();var statearr_36861_36882 = state_36858__$1;(statearr_36861_36882[2] = null);
(statearr_36861_36882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 2))
{var inst_36835 = (state_36858[7]);var inst_36837 = (inst_36835 < n);var state_36858__$1 = state_36858;if(cljs.core.truth_(inst_36837))
{var statearr_36862_36883 = state_36858__$1;(statearr_36862_36883[1] = 4);
} else
{var statearr_36863_36884 = state_36858__$1;(statearr_36863_36884[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 3))
{var inst_36855 = (state_36858[2]);var inst_36856 = cljs.core.async.close_BANG_.call(null,out);var state_36858__$1 = (function (){var statearr_36864 = state_36858;(statearr_36864[8] = inst_36855);
return statearr_36864;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36858__$1,inst_36856);
} else
{if((state_val_36859 === 4))
{var state_36858__$1 = state_36858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36858__$1,7,ch);
} else
{if((state_val_36859 === 5))
{var state_36858__$1 = state_36858;var statearr_36865_36885 = state_36858__$1;(statearr_36865_36885[2] = null);
(statearr_36865_36885[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 6))
{var inst_36853 = (state_36858[2]);var state_36858__$1 = state_36858;var statearr_36866_36886 = state_36858__$1;(statearr_36866_36886[2] = inst_36853);
(statearr_36866_36886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 7))
{var inst_36840 = (state_36858[9]);var inst_36840__$1 = (state_36858[2]);var inst_36841 = (inst_36840__$1 == null);var inst_36842 = cljs.core.not.call(null,inst_36841);var state_36858__$1 = (function (){var statearr_36867 = state_36858;(statearr_36867[9] = inst_36840__$1);
return statearr_36867;
})();if(inst_36842)
{var statearr_36868_36887 = state_36858__$1;(statearr_36868_36887[1] = 8);
} else
{var statearr_36869_36888 = state_36858__$1;(statearr_36869_36888[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 8))
{var inst_36840 = (state_36858[9]);var state_36858__$1 = state_36858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36858__$1,11,out,inst_36840);
} else
{if((state_val_36859 === 9))
{var state_36858__$1 = state_36858;var statearr_36870_36889 = state_36858__$1;(statearr_36870_36889[2] = null);
(statearr_36870_36889[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 10))
{var inst_36850 = (state_36858[2]);var state_36858__$1 = state_36858;var statearr_36871_36890 = state_36858__$1;(statearr_36871_36890[2] = inst_36850);
(statearr_36871_36890[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36859 === 11))
{var inst_36835 = (state_36858[7]);var inst_36845 = (state_36858[2]);var inst_36846 = (inst_36835 + 1);var inst_36835__$1 = inst_36846;var state_36858__$1 = (function (){var statearr_36872 = state_36858;(statearr_36872[10] = inst_36845);
(statearr_36872[7] = inst_36835__$1);
return statearr_36872;
})();var statearr_36873_36891 = state_36858__$1;(statearr_36873_36891[2] = null);
(statearr_36873_36891[1] = 2);
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
var state_machine__12457__auto____0 = (function (){var statearr_36877 = (new Array(11));(statearr_36877[0] = state_machine__12457__auto__);
(statearr_36877[1] = 1);
return statearr_36877;
});
var state_machine__12457__auto____1 = (function (state_36858){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_36858);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e36878){if((e36878 instanceof Object))
{var ex__12460__auto__ = e36878;var statearr_36879_36892 = state_36858;(statearr_36879_36892[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36893 = state_36858;
state_36858 = G__36893;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_36858){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_36858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_36880 = f__12543__auto__.call(null);(statearr_36880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___36881);
return statearr_36880;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___36990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_36965){var state_val_36966 = (state_36965[1]);if((state_val_36966 === 1))
{var inst_36942 = null;var state_36965__$1 = (function (){var statearr_36967 = state_36965;(statearr_36967[7] = inst_36942);
return statearr_36967;
})();var statearr_36968_36991 = state_36965__$1;(statearr_36968_36991[2] = null);
(statearr_36968_36991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 2))
{var state_36965__$1 = state_36965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36965__$1,4,ch);
} else
{if((state_val_36966 === 3))
{var inst_36962 = (state_36965[2]);var inst_36963 = cljs.core.async.close_BANG_.call(null,out);var state_36965__$1 = (function (){var statearr_36969 = state_36965;(statearr_36969[8] = inst_36962);
return statearr_36969;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36965__$1,inst_36963);
} else
{if((state_val_36966 === 4))
{var inst_36945 = (state_36965[9]);var inst_36945__$1 = (state_36965[2]);var inst_36946 = (inst_36945__$1 == null);var inst_36947 = cljs.core.not.call(null,inst_36946);var state_36965__$1 = (function (){var statearr_36970 = state_36965;(statearr_36970[9] = inst_36945__$1);
return statearr_36970;
})();if(inst_36947)
{var statearr_36971_36992 = state_36965__$1;(statearr_36971_36992[1] = 5);
} else
{var statearr_36972_36993 = state_36965__$1;(statearr_36972_36993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 5))
{var inst_36945 = (state_36965[9]);var inst_36942 = (state_36965[7]);var inst_36949 = cljs.core._EQ_.call(null,inst_36945,inst_36942);var state_36965__$1 = state_36965;if(inst_36949)
{var statearr_36973_36994 = state_36965__$1;(statearr_36973_36994[1] = 8);
} else
{var statearr_36974_36995 = state_36965__$1;(statearr_36974_36995[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 6))
{var state_36965__$1 = state_36965;var statearr_36976_36996 = state_36965__$1;(statearr_36976_36996[2] = null);
(statearr_36976_36996[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 7))
{var inst_36960 = (state_36965[2]);var state_36965__$1 = state_36965;var statearr_36977_36997 = state_36965__$1;(statearr_36977_36997[2] = inst_36960);
(statearr_36977_36997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 8))
{var inst_36942 = (state_36965[7]);var tmp36975 = inst_36942;var inst_36942__$1 = tmp36975;var state_36965__$1 = (function (){var statearr_36978 = state_36965;(statearr_36978[7] = inst_36942__$1);
return statearr_36978;
})();var statearr_36979_36998 = state_36965__$1;(statearr_36979_36998[2] = null);
(statearr_36979_36998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 9))
{var inst_36945 = (state_36965[9]);var state_36965__$1 = state_36965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36965__$1,11,out,inst_36945);
} else
{if((state_val_36966 === 10))
{var inst_36957 = (state_36965[2]);var state_36965__$1 = state_36965;var statearr_36980_36999 = state_36965__$1;(statearr_36980_36999[2] = inst_36957);
(statearr_36980_36999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36966 === 11))
{var inst_36945 = (state_36965[9]);var inst_36954 = (state_36965[2]);var inst_36942 = inst_36945;var state_36965__$1 = (function (){var statearr_36981 = state_36965;(statearr_36981[7] = inst_36942);
(statearr_36981[10] = inst_36954);
return statearr_36981;
})();var statearr_36982_37000 = state_36965__$1;(statearr_36982_37000[2] = null);
(statearr_36982_37000[1] = 2);
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
var state_machine__12457__auto____0 = (function (){var statearr_36986 = (new Array(11));(statearr_36986[0] = state_machine__12457__auto__);
(statearr_36986[1] = 1);
return statearr_36986;
});
var state_machine__12457__auto____1 = (function (state_36965){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_36965);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e36987){if((e36987 instanceof Object))
{var ex__12460__auto__ = e36987;var statearr_36988_37001 = state_36965;(statearr_36988_37001[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37002 = state_36965;
state_36965 = G__37002;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_36965){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_36965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_36989 = f__12543__auto__.call(null);(statearr_36989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___36990);
return statearr_36989;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___37137 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_37107){var state_val_37108 = (state_37107[1]);if((state_val_37108 === 1))
{var inst_37070 = (new Array(n));var inst_37071 = inst_37070;var inst_37072 = 0;var state_37107__$1 = (function (){var statearr_37109 = state_37107;(statearr_37109[7] = inst_37071);
(statearr_37109[8] = inst_37072);
return statearr_37109;
})();var statearr_37110_37138 = state_37107__$1;(statearr_37110_37138[2] = null);
(statearr_37110_37138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 2))
{var state_37107__$1 = state_37107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37107__$1,4,ch);
} else
{if((state_val_37108 === 3))
{var inst_37105 = (state_37107[2]);var state_37107__$1 = state_37107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37107__$1,inst_37105);
} else
{if((state_val_37108 === 4))
{var inst_37075 = (state_37107[9]);var inst_37075__$1 = (state_37107[2]);var inst_37076 = (inst_37075__$1 == null);var inst_37077 = cljs.core.not.call(null,inst_37076);var state_37107__$1 = (function (){var statearr_37111 = state_37107;(statearr_37111[9] = inst_37075__$1);
return statearr_37111;
})();if(inst_37077)
{var statearr_37112_37139 = state_37107__$1;(statearr_37112_37139[1] = 5);
} else
{var statearr_37113_37140 = state_37107__$1;(statearr_37113_37140[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 5))
{var inst_37075 = (state_37107[9]);var inst_37080 = (state_37107[10]);var inst_37071 = (state_37107[7]);var inst_37072 = (state_37107[8]);var inst_37079 = (inst_37071[inst_37072] = inst_37075);var inst_37080__$1 = (inst_37072 + 1);var inst_37081 = (inst_37080__$1 < n);var state_37107__$1 = (function (){var statearr_37114 = state_37107;(statearr_37114[11] = inst_37079);
(statearr_37114[10] = inst_37080__$1);
return statearr_37114;
})();if(cljs.core.truth_(inst_37081))
{var statearr_37115_37141 = state_37107__$1;(statearr_37115_37141[1] = 8);
} else
{var statearr_37116_37142 = state_37107__$1;(statearr_37116_37142[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 6))
{var inst_37072 = (state_37107[8]);var inst_37093 = (inst_37072 > 0);var state_37107__$1 = state_37107;if(cljs.core.truth_(inst_37093))
{var statearr_37118_37143 = state_37107__$1;(statearr_37118_37143[1] = 12);
} else
{var statearr_37119_37144 = state_37107__$1;(statearr_37119_37144[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 7))
{var inst_37103 = (state_37107[2]);var state_37107__$1 = state_37107;var statearr_37120_37145 = state_37107__$1;(statearr_37120_37145[2] = inst_37103);
(statearr_37120_37145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 8))
{var inst_37080 = (state_37107[10]);var inst_37071 = (state_37107[7]);var tmp37117 = inst_37071;var inst_37071__$1 = tmp37117;var inst_37072 = inst_37080;var state_37107__$1 = (function (){var statearr_37121 = state_37107;(statearr_37121[7] = inst_37071__$1);
(statearr_37121[8] = inst_37072);
return statearr_37121;
})();var statearr_37122_37146 = state_37107__$1;(statearr_37122_37146[2] = null);
(statearr_37122_37146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 9))
{var inst_37071 = (state_37107[7]);var inst_37085 = cljs.core.vec.call(null,inst_37071);var state_37107__$1 = state_37107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37107__$1,11,out,inst_37085);
} else
{if((state_val_37108 === 10))
{var inst_37091 = (state_37107[2]);var state_37107__$1 = state_37107;var statearr_37123_37147 = state_37107__$1;(statearr_37123_37147[2] = inst_37091);
(statearr_37123_37147[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 11))
{var inst_37087 = (state_37107[2]);var inst_37088 = (new Array(n));var inst_37071 = inst_37088;var inst_37072 = 0;var state_37107__$1 = (function (){var statearr_37124 = state_37107;(statearr_37124[12] = inst_37087);
(statearr_37124[7] = inst_37071);
(statearr_37124[8] = inst_37072);
return statearr_37124;
})();var statearr_37125_37148 = state_37107__$1;(statearr_37125_37148[2] = null);
(statearr_37125_37148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 12))
{var inst_37071 = (state_37107[7]);var inst_37095 = cljs.core.vec.call(null,inst_37071);var state_37107__$1 = state_37107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37107__$1,15,out,inst_37095);
} else
{if((state_val_37108 === 13))
{var state_37107__$1 = state_37107;var statearr_37126_37149 = state_37107__$1;(statearr_37126_37149[2] = null);
(statearr_37126_37149[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 14))
{var inst_37100 = (state_37107[2]);var inst_37101 = cljs.core.async.close_BANG_.call(null,out);var state_37107__$1 = (function (){var statearr_37127 = state_37107;(statearr_37127[13] = inst_37100);
return statearr_37127;
})();var statearr_37128_37150 = state_37107__$1;(statearr_37128_37150[2] = inst_37101);
(statearr_37128_37150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37108 === 15))
{var inst_37097 = (state_37107[2]);var state_37107__$1 = state_37107;var statearr_37129_37151 = state_37107__$1;(statearr_37129_37151[2] = inst_37097);
(statearr_37129_37151[1] = 14);
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
var state_machine__12457__auto____0 = (function (){var statearr_37133 = (new Array(14));(statearr_37133[0] = state_machine__12457__auto__);
(statearr_37133[1] = 1);
return statearr_37133;
});
var state_machine__12457__auto____1 = (function (state_37107){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_37107);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e37134){if((e37134 instanceof Object))
{var ex__12460__auto__ = e37134;var statearr_37135_37152 = state_37107;(statearr_37135_37152[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37153 = state_37107;
state_37107 = G__37153;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_37107){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_37107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_37136 = f__12543__auto__.call(null);(statearr_37136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___37137);
return statearr_37136;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12542__auto___37296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12543__auto__ = (function (){var switch__12456__auto__ = (function (state_37266){var state_val_37267 = (state_37266[1]);if((state_val_37267 === 1))
{var inst_37225 = (new Array(0));var inst_37226 = inst_37225;var inst_37227 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37266__$1 = (function (){var statearr_37268 = state_37266;(statearr_37268[7] = inst_37227);
(statearr_37268[8] = inst_37226);
return statearr_37268;
})();var statearr_37269_37297 = state_37266__$1;(statearr_37269_37297[2] = null);
(statearr_37269_37297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 2))
{var state_37266__$1 = state_37266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37266__$1,4,ch);
} else
{if((state_val_37267 === 3))
{var inst_37264 = (state_37266[2]);var state_37266__$1 = state_37266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37266__$1,inst_37264);
} else
{if((state_val_37267 === 4))
{var inst_37230 = (state_37266[9]);var inst_37230__$1 = (state_37266[2]);var inst_37231 = (inst_37230__$1 == null);var inst_37232 = cljs.core.not.call(null,inst_37231);var state_37266__$1 = (function (){var statearr_37270 = state_37266;(statearr_37270[9] = inst_37230__$1);
return statearr_37270;
})();if(inst_37232)
{var statearr_37271_37298 = state_37266__$1;(statearr_37271_37298[1] = 5);
} else
{var statearr_37272_37299 = state_37266__$1;(statearr_37272_37299[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 5))
{var inst_37234 = (state_37266[10]);var inst_37230 = (state_37266[9]);var inst_37227 = (state_37266[7]);var inst_37234__$1 = f.call(null,inst_37230);var inst_37235 = cljs.core._EQ_.call(null,inst_37234__$1,inst_37227);var inst_37236 = cljs.core.keyword_identical_QMARK_.call(null,inst_37227,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37237 = (inst_37235) || (inst_37236);var state_37266__$1 = (function (){var statearr_37273 = state_37266;(statearr_37273[10] = inst_37234__$1);
return statearr_37273;
})();if(cljs.core.truth_(inst_37237))
{var statearr_37274_37300 = state_37266__$1;(statearr_37274_37300[1] = 8);
} else
{var statearr_37275_37301 = state_37266__$1;(statearr_37275_37301[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 6))
{var inst_37226 = (state_37266[8]);var inst_37251 = inst_37226.length;var inst_37252 = (inst_37251 > 0);var state_37266__$1 = state_37266;if(cljs.core.truth_(inst_37252))
{var statearr_37277_37302 = state_37266__$1;(statearr_37277_37302[1] = 12);
} else
{var statearr_37278_37303 = state_37266__$1;(statearr_37278_37303[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 7))
{var inst_37262 = (state_37266[2]);var state_37266__$1 = state_37266;var statearr_37279_37304 = state_37266__$1;(statearr_37279_37304[2] = inst_37262);
(statearr_37279_37304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 8))
{var inst_37234 = (state_37266[10]);var inst_37230 = (state_37266[9]);var inst_37226 = (state_37266[8]);var inst_37239 = inst_37226.push(inst_37230);var tmp37276 = inst_37226;var inst_37226__$1 = tmp37276;var inst_37227 = inst_37234;var state_37266__$1 = (function (){var statearr_37280 = state_37266;(statearr_37280[11] = inst_37239);
(statearr_37280[7] = inst_37227);
(statearr_37280[8] = inst_37226__$1);
return statearr_37280;
})();var statearr_37281_37305 = state_37266__$1;(statearr_37281_37305[2] = null);
(statearr_37281_37305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 9))
{var inst_37226 = (state_37266[8]);var inst_37242 = cljs.core.vec.call(null,inst_37226);var state_37266__$1 = state_37266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37266__$1,11,out,inst_37242);
} else
{if((state_val_37267 === 10))
{var inst_37249 = (state_37266[2]);var state_37266__$1 = state_37266;var statearr_37282_37306 = state_37266__$1;(statearr_37282_37306[2] = inst_37249);
(statearr_37282_37306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 11))
{var inst_37234 = (state_37266[10]);var inst_37230 = (state_37266[9]);var inst_37244 = (state_37266[2]);var inst_37245 = (new Array(0));var inst_37246 = inst_37245.push(inst_37230);var inst_37226 = inst_37245;var inst_37227 = inst_37234;var state_37266__$1 = (function (){var statearr_37283 = state_37266;(statearr_37283[12] = inst_37246);
(statearr_37283[13] = inst_37244);
(statearr_37283[7] = inst_37227);
(statearr_37283[8] = inst_37226);
return statearr_37283;
})();var statearr_37284_37307 = state_37266__$1;(statearr_37284_37307[2] = null);
(statearr_37284_37307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 12))
{var inst_37226 = (state_37266[8]);var inst_37254 = cljs.core.vec.call(null,inst_37226);var state_37266__$1 = state_37266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37266__$1,15,out,inst_37254);
} else
{if((state_val_37267 === 13))
{var state_37266__$1 = state_37266;var statearr_37285_37308 = state_37266__$1;(statearr_37285_37308[2] = null);
(statearr_37285_37308[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 14))
{var inst_37259 = (state_37266[2]);var inst_37260 = cljs.core.async.close_BANG_.call(null,out);var state_37266__$1 = (function (){var statearr_37286 = state_37266;(statearr_37286[14] = inst_37259);
return statearr_37286;
})();var statearr_37287_37309 = state_37266__$1;(statearr_37287_37309[2] = inst_37260);
(statearr_37287_37309[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37267 === 15))
{var inst_37256 = (state_37266[2]);var state_37266__$1 = state_37266;var statearr_37288_37310 = state_37266__$1;(statearr_37288_37310[2] = inst_37256);
(statearr_37288_37310[1] = 14);
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
var state_machine__12457__auto____0 = (function (){var statearr_37292 = (new Array(15));(statearr_37292[0] = state_machine__12457__auto__);
(statearr_37292[1] = 1);
return statearr_37292;
});
var state_machine__12457__auto____1 = (function (state_37266){while(true){
var ret_value__12458__auto__ = (function (){try{while(true){
var result__12459__auto__ = switch__12456__auto__.call(null,state_37266);if(cljs.core.keyword_identical_QMARK_.call(null,result__12459__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12459__auto__;
}
break;
}
}catch (e37293){if((e37293 instanceof Object))
{var ex__12460__auto__ = e37293;var statearr_37294_37311 = state_37266;(statearr_37294_37311[5] = ex__12460__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12458__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37312 = state_37266;
state_37266 = G__37312;
continue;
}
} else
{return ret_value__12458__auto__;
}
break;
}
});
state_machine__12457__auto__ = function(state_37266){
switch(arguments.length){
case 0:
return state_machine__12457__auto____0.call(this);
case 1:
return state_machine__12457__auto____1.call(this,state_37266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12457__auto____0;
state_machine__12457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12457__auto____1;
return state_machine__12457__auto__;
})()
;})(switch__12456__auto__))
})();var state__12544__auto__ = (function (){var statearr_37295 = f__12543__auto__.call(null);(statearr_37295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12542__auto___37296);
return statearr_37295;
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
