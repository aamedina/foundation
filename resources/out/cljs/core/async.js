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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t81442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81442 = (function (f,fn_handler,meta81443){
this.f = f;
this.fn_handler = fn_handler;
this.meta81443 = meta81443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81442.cljs$lang$type = true;
cljs.core.async.t81442.cljs$lang$ctorStr = "cljs.core.async/t81442";
cljs.core.async.t81442.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81442");
});
cljs.core.async.t81442.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t81442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t81442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81444){var self__ = this;
var _81444__$1 = this;return self__.meta81443;
});
cljs.core.async.t81442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81444,meta81443__$1){var self__ = this;
var _81444__$1 = this;return (new cljs.core.async.t81442(self__.f,self__.fn_handler,meta81443__$1));
});
cljs.core.async.__GT_t81442 = (function __GT_t81442(f__$1,fn_handler__$1,meta81443){return (new cljs.core.async.t81442(f__$1,fn_handler__$1,meta81443));
});
}
return (new cljs.core.async.t81442(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__81446 = buff;if(G__81446)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__81446.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__81446.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__81446);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__81446);
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
{var val_81447 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_81447);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_81447);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13809__auto__ = ret;if(cljs.core.truth_(and__13809__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13809__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14644__auto___81448 = n;var x_81449 = 0;while(true){
if((x_81449 < n__14644__auto___81448))
{(a[x_81449] = 0);
{
var G__81450 = (x_81449 + 1);
x_81449 = G__81450;
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
var G__81451 = (i + 1);
i = G__81451;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t81455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81455 = (function (flag,alt_flag,meta81456){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta81456 = meta81456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81455.cljs$lang$type = true;
cljs.core.async.t81455.cljs$lang$ctorStr = "cljs.core.async/t81455";
cljs.core.async.t81455.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81455");
});
cljs.core.async.t81455.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t81455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t81455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81457){var self__ = this;
var _81457__$1 = this;return self__.meta81456;
});
cljs.core.async.t81455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81457,meta81456__$1){var self__ = this;
var _81457__$1 = this;return (new cljs.core.async.t81455(self__.flag,self__.alt_flag,meta81456__$1));
});
cljs.core.async.__GT_t81455 = (function __GT_t81455(flag__$1,alt_flag__$1,meta81456){return (new cljs.core.async.t81455(flag__$1,alt_flag__$1,meta81456));
});
}
return (new cljs.core.async.t81455(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t81461 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81461 = (function (cb,flag,alt_handler,meta81462){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta81462 = meta81462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81461.cljs$lang$type = true;
cljs.core.async.t81461.cljs$lang$ctorStr = "cljs.core.async/t81461";
cljs.core.async.t81461.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81461");
});
cljs.core.async.t81461.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t81461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t81461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81463){var self__ = this;
var _81463__$1 = this;return self__.meta81462;
});
cljs.core.async.t81461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81463,meta81462__$1){var self__ = this;
var _81463__$1 = this;return (new cljs.core.async.t81461(self__.cb,self__.flag,self__.alt_handler,meta81462__$1));
});
cljs.core.async.__GT_t81461 = (function __GT_t81461(cb__$1,flag__$1,alt_handler__$1,meta81462){return (new cljs.core.async.t81461(cb__$1,flag__$1,alt_handler__$1,meta81462));
});
}
return (new cljs.core.async.t81461(cb,flag,alt_handler,null));
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
return (function (p1__81464_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81464_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13821__auto__ = wport;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__81465 = (i + 1);
i = G__81465;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13821__auto__ = ret;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13809__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13809__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13809__auto__;
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
var alts_BANG___delegate = function (ports,p__81466){var map__81468 = p__81466;var map__81468__$1 = ((cljs.core.seq_QMARK_.call(null,map__81468))?cljs.core.apply.call(null,cljs.core.hash_map,map__81468):map__81468);var opts = map__81468__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__81466 = null;if (arguments.length > 1) {
  p__81466 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__81466);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__81469){
var ports = cljs.core.first(arglist__81469);
var p__81466 = cljs.core.rest(arglist__81469);
return alts_BANG___delegate(ports,p__81466);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t81477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81477 = (function (ch,f,map_LT_,meta81478){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta81478 = meta81478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81477.cljs$lang$type = true;
cljs.core.async.t81477.cljs$lang$ctorStr = "cljs.core.async/t81477";
cljs.core.async.t81477.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81477");
});
cljs.core.async.t81477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t81477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t81477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t81477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t81480 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81480 = (function (fn1,_,meta81478,ch,f,map_LT_,meta81481){
this.fn1 = fn1;
this._ = _;
this.meta81478 = meta81478;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta81481 = meta81481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81480.cljs$lang$type = true;
cljs.core.async.t81480.cljs$lang$ctorStr = "cljs.core.async/t81480";
cljs.core.async.t81480.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81480");
});
cljs.core.async.t81480.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t81480.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t81480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__81470_SHARP_){return f1.call(null,(((p1__81470_SHARP_ == null))?null:self__.f.call(null,p1__81470_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t81480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81482){var self__ = this;
var _81482__$1 = this;return self__.meta81481;
});
cljs.core.async.t81480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81482,meta81481__$1){var self__ = this;
var _81482__$1 = this;return (new cljs.core.async.t81480(self__.fn1,self__._,self__.meta81478,self__.ch,self__.f,self__.map_LT_,meta81481__$1));
});
cljs.core.async.__GT_t81480 = (function __GT_t81480(fn1__$1,___$2,meta81478__$1,ch__$2,f__$2,map_LT___$2,meta81481){return (new cljs.core.async.t81480(fn1__$1,___$2,meta81478__$1,ch__$2,f__$2,map_LT___$2,meta81481));
});
}
return (new cljs.core.async.t81480(fn1,___$1,self__.meta81478,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13809__auto__ = ret;if(cljs.core.truth_(and__13809__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13809__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t81477.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t81477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t81477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81479){var self__ = this;
var _81479__$1 = this;return self__.meta81478;
});
cljs.core.async.t81477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81479,meta81478__$1){var self__ = this;
var _81479__$1 = this;return (new cljs.core.async.t81477(self__.ch,self__.f,self__.map_LT_,meta81478__$1));
});
cljs.core.async.__GT_t81477 = (function __GT_t81477(ch__$1,f__$1,map_LT___$1,meta81478){return (new cljs.core.async.t81477(ch__$1,f__$1,map_LT___$1,meta81478));
});
}
return (new cljs.core.async.t81477(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t81486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81486 = (function (ch,f,map_GT_,meta81487){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta81487 = meta81487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81486.cljs$lang$type = true;
cljs.core.async.t81486.cljs$lang$ctorStr = "cljs.core.async/t81486";
cljs.core.async.t81486.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81486");
});
cljs.core.async.t81486.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t81486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t81486.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t81486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t81486.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t81486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t81486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81488){var self__ = this;
var _81488__$1 = this;return self__.meta81487;
});
cljs.core.async.t81486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81488,meta81487__$1){var self__ = this;
var _81488__$1 = this;return (new cljs.core.async.t81486(self__.ch,self__.f,self__.map_GT_,meta81487__$1));
});
cljs.core.async.__GT_t81486 = (function __GT_t81486(ch__$1,f__$1,map_GT___$1,meta81487){return (new cljs.core.async.t81486(ch__$1,f__$1,map_GT___$1,meta81487));
});
}
return (new cljs.core.async.t81486(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t81492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81492 = (function (ch,p,filter_GT_,meta81493){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta81493 = meta81493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81492.cljs$lang$type = true;
cljs.core.async.t81492.cljs$lang$ctorStr = "cljs.core.async/t81492";
cljs.core.async.t81492.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t81492");
});
cljs.core.async.t81492.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t81492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t81492.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t81492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t81492.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t81492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t81492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81494){var self__ = this;
var _81494__$1 = this;return self__.meta81493;
});
cljs.core.async.t81492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81494,meta81493__$1){var self__ = this;
var _81494__$1 = this;return (new cljs.core.async.t81492(self__.ch,self__.p,self__.filter_GT_,meta81493__$1));
});
cljs.core.async.__GT_t81492 = (function __GT_t81492(ch__$1,p__$1,filter_GT___$1,meta81493){return (new cljs.core.async.t81492(ch__$1,p__$1,filter_GT___$1,meta81493));
});
}
return (new cljs.core.async.t81492(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___81577 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_81556){var state_val_81557 = (state_81556[1]);if((state_val_81557 === 1))
{var state_81556__$1 = state_81556;var statearr_81558_81578 = state_81556__$1;(statearr_81558_81578[2] = null);
(statearr_81558_81578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 2))
{var state_81556__$1 = state_81556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81556__$1,4,ch);
} else
{if((state_val_81557 === 3))
{var inst_81554 = (state_81556[2]);var state_81556__$1 = state_81556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81556__$1,inst_81554);
} else
{if((state_val_81557 === 4))
{var inst_81538 = (state_81556[7]);var inst_81538__$1 = (state_81556[2]);var inst_81539 = (inst_81538__$1 == null);var state_81556__$1 = (function (){var statearr_81559 = state_81556;(statearr_81559[7] = inst_81538__$1);
return statearr_81559;
})();if(cljs.core.truth_(inst_81539))
{var statearr_81560_81579 = state_81556__$1;(statearr_81560_81579[1] = 5);
} else
{var statearr_81561_81580 = state_81556__$1;(statearr_81561_81580[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 5))
{var inst_81541 = cljs.core.async.close_BANG_.call(null,out);var state_81556__$1 = state_81556;var statearr_81562_81581 = state_81556__$1;(statearr_81562_81581[2] = inst_81541);
(statearr_81562_81581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 6))
{var inst_81538 = (state_81556[7]);var inst_81543 = p.call(null,inst_81538);var state_81556__$1 = state_81556;if(cljs.core.truth_(inst_81543))
{var statearr_81563_81582 = state_81556__$1;(statearr_81563_81582[1] = 8);
} else
{var statearr_81564_81583 = state_81556__$1;(statearr_81564_81583[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 7))
{var inst_81552 = (state_81556[2]);var state_81556__$1 = state_81556;var statearr_81565_81584 = state_81556__$1;(statearr_81565_81584[2] = inst_81552);
(statearr_81565_81584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 8))
{var inst_81538 = (state_81556[7]);var state_81556__$1 = state_81556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81556__$1,11,out,inst_81538);
} else
{if((state_val_81557 === 9))
{var state_81556__$1 = state_81556;var statearr_81566_81585 = state_81556__$1;(statearr_81566_81585[2] = null);
(statearr_81566_81585[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 10))
{var inst_81549 = (state_81556[2]);var state_81556__$1 = (function (){var statearr_81567 = state_81556;(statearr_81567[8] = inst_81549);
return statearr_81567;
})();var statearr_81568_81586 = state_81556__$1;(statearr_81568_81586[2] = null);
(statearr_81568_81586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81557 === 11))
{var inst_81546 = (state_81556[2]);var state_81556__$1 = state_81556;var statearr_81569_81587 = state_81556__$1;(statearr_81569_81587[2] = inst_81546);
(statearr_81569_81587[1] = 10);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_81573 = (new Array(9));(statearr_81573[0] = state_machine__16760__auto__);
(statearr_81573[1] = 1);
return statearr_81573;
});
var state_machine__16760__auto____1 = (function (state_81556){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_81556);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e81574){if((e81574 instanceof Object))
{var ex__16763__auto__ = e81574;var statearr_81575_81588 = state_81556;(statearr_81575_81588[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81589 = state_81556;
state_81556 = G__81589;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_81556){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_81556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_81576 = f__16830__auto__.call(null);(statearr_81576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___81577);
return statearr_81576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_81741){var state_val_81742 = (state_81741[1]);if((state_val_81742 === 1))
{var state_81741__$1 = state_81741;var statearr_81743_81780 = state_81741__$1;(statearr_81743_81780[2] = null);
(statearr_81743_81780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 2))
{var state_81741__$1 = state_81741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81741__$1,4,in$);
} else
{if((state_val_81742 === 3))
{var inst_81739 = (state_81741[2]);var state_81741__$1 = state_81741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81741__$1,inst_81739);
} else
{if((state_val_81742 === 4))
{var inst_81687 = (state_81741[7]);var inst_81687__$1 = (state_81741[2]);var inst_81688 = (inst_81687__$1 == null);var state_81741__$1 = (function (){var statearr_81744 = state_81741;(statearr_81744[7] = inst_81687__$1);
return statearr_81744;
})();if(cljs.core.truth_(inst_81688))
{var statearr_81745_81781 = state_81741__$1;(statearr_81745_81781[1] = 5);
} else
{var statearr_81746_81782 = state_81741__$1;(statearr_81746_81782[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 5))
{var inst_81690 = cljs.core.async.close_BANG_.call(null,out);var state_81741__$1 = state_81741;var statearr_81747_81783 = state_81741__$1;(statearr_81747_81783[2] = inst_81690);
(statearr_81747_81783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 6))
{var inst_81687 = (state_81741[7]);var inst_81692 = f.call(null,inst_81687);var inst_81697 = cljs.core.seq.call(null,inst_81692);var inst_81698 = inst_81697;var inst_81699 = null;var inst_81700 = 0;var inst_81701 = 0;var state_81741__$1 = (function (){var statearr_81748 = state_81741;(statearr_81748[8] = inst_81701);
(statearr_81748[9] = inst_81700);
(statearr_81748[10] = inst_81698);
(statearr_81748[11] = inst_81699);
return statearr_81748;
})();var statearr_81749_81784 = state_81741__$1;(statearr_81749_81784[2] = null);
(statearr_81749_81784[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 7))
{var inst_81737 = (state_81741[2]);var state_81741__$1 = state_81741;var statearr_81750_81785 = state_81741__$1;(statearr_81750_81785[2] = inst_81737);
(statearr_81750_81785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 8))
{var inst_81701 = (state_81741[8]);var inst_81700 = (state_81741[9]);var inst_81703 = (inst_81701 < inst_81700);var inst_81704 = inst_81703;var state_81741__$1 = state_81741;if(cljs.core.truth_(inst_81704))
{var statearr_81751_81786 = state_81741__$1;(statearr_81751_81786[1] = 10);
} else
{var statearr_81752_81787 = state_81741__$1;(statearr_81752_81787[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 9))
{var inst_81734 = (state_81741[2]);var state_81741__$1 = (function (){var statearr_81753 = state_81741;(statearr_81753[12] = inst_81734);
return statearr_81753;
})();var statearr_81754_81788 = state_81741__$1;(statearr_81754_81788[2] = null);
(statearr_81754_81788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 10))
{var inst_81701 = (state_81741[8]);var inst_81699 = (state_81741[11]);var inst_81706 = cljs.core._nth.call(null,inst_81699,inst_81701);var state_81741__$1 = state_81741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81741__$1,13,out,inst_81706);
} else
{if((state_val_81742 === 11))
{var inst_81712 = (state_81741[13]);var inst_81698 = (state_81741[10]);var inst_81712__$1 = cljs.core.seq.call(null,inst_81698);var state_81741__$1 = (function (){var statearr_81758 = state_81741;(statearr_81758[13] = inst_81712__$1);
return statearr_81758;
})();if(inst_81712__$1)
{var statearr_81759_81789 = state_81741__$1;(statearr_81759_81789[1] = 14);
} else
{var statearr_81760_81790 = state_81741__$1;(statearr_81760_81790[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 12))
{var inst_81732 = (state_81741[2]);var state_81741__$1 = state_81741;var statearr_81761_81791 = state_81741__$1;(statearr_81761_81791[2] = inst_81732);
(statearr_81761_81791[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 13))
{var inst_81701 = (state_81741[8]);var inst_81700 = (state_81741[9]);var inst_81698 = (state_81741[10]);var inst_81699 = (state_81741[11]);var inst_81708 = (state_81741[2]);var inst_81709 = (inst_81701 + 1);var tmp81755 = inst_81700;var tmp81756 = inst_81698;var tmp81757 = inst_81699;var inst_81698__$1 = tmp81756;var inst_81699__$1 = tmp81757;var inst_81700__$1 = tmp81755;var inst_81701__$1 = inst_81709;var state_81741__$1 = (function (){var statearr_81762 = state_81741;(statearr_81762[8] = inst_81701__$1);
(statearr_81762[9] = inst_81700__$1);
(statearr_81762[14] = inst_81708);
(statearr_81762[10] = inst_81698__$1);
(statearr_81762[11] = inst_81699__$1);
return statearr_81762;
})();var statearr_81763_81792 = state_81741__$1;(statearr_81763_81792[2] = null);
(statearr_81763_81792[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 14))
{var inst_81712 = (state_81741[13]);var inst_81714 = cljs.core.chunked_seq_QMARK_.call(null,inst_81712);var state_81741__$1 = state_81741;if(inst_81714)
{var statearr_81764_81793 = state_81741__$1;(statearr_81764_81793[1] = 17);
} else
{var statearr_81765_81794 = state_81741__$1;(statearr_81765_81794[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 15))
{var state_81741__$1 = state_81741;var statearr_81766_81795 = state_81741__$1;(statearr_81766_81795[2] = null);
(statearr_81766_81795[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 16))
{var inst_81730 = (state_81741[2]);var state_81741__$1 = state_81741;var statearr_81767_81796 = state_81741__$1;(statearr_81767_81796[2] = inst_81730);
(statearr_81767_81796[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 17))
{var inst_81712 = (state_81741[13]);var inst_81716 = cljs.core.chunk_first.call(null,inst_81712);var inst_81717 = cljs.core.chunk_rest.call(null,inst_81712);var inst_81718 = cljs.core.count.call(null,inst_81716);var inst_81698 = inst_81717;var inst_81699 = inst_81716;var inst_81700 = inst_81718;var inst_81701 = 0;var state_81741__$1 = (function (){var statearr_81768 = state_81741;(statearr_81768[8] = inst_81701);
(statearr_81768[9] = inst_81700);
(statearr_81768[10] = inst_81698);
(statearr_81768[11] = inst_81699);
return statearr_81768;
})();var statearr_81769_81797 = state_81741__$1;(statearr_81769_81797[2] = null);
(statearr_81769_81797[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 18))
{var inst_81712 = (state_81741[13]);var inst_81721 = cljs.core.first.call(null,inst_81712);var state_81741__$1 = state_81741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81741__$1,20,out,inst_81721);
} else
{if((state_val_81742 === 19))
{var inst_81727 = (state_81741[2]);var state_81741__$1 = state_81741;var statearr_81770_81798 = state_81741__$1;(statearr_81770_81798[2] = inst_81727);
(statearr_81770_81798[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81742 === 20))
{var inst_81712 = (state_81741[13]);var inst_81723 = (state_81741[2]);var inst_81724 = cljs.core.next.call(null,inst_81712);var inst_81698 = inst_81724;var inst_81699 = null;var inst_81700 = 0;var inst_81701 = 0;var state_81741__$1 = (function (){var statearr_81771 = state_81741;(statearr_81771[8] = inst_81701);
(statearr_81771[9] = inst_81700);
(statearr_81771[15] = inst_81723);
(statearr_81771[10] = inst_81698);
(statearr_81771[11] = inst_81699);
return statearr_81771;
})();var statearr_81772_81799 = state_81741__$1;(statearr_81772_81799[2] = null);
(statearr_81772_81799[1] = 8);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_81776 = (new Array(16));(statearr_81776[0] = state_machine__16760__auto__);
(statearr_81776[1] = 1);
return statearr_81776;
});
var state_machine__16760__auto____1 = (function (state_81741){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_81741);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e81777){if((e81777 instanceof Object))
{var ex__16763__auto__ = e81777;var statearr_81778_81800 = state_81741;(statearr_81778_81800[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81801 = state_81741;
state_81741 = G__81801;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_81741){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_81741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_81779 = f__16830__auto__.call(null);(statearr_81779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_81779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__16829__auto___81882 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_81861){var state_val_81862 = (state_81861[1]);if((state_val_81862 === 1))
{var state_81861__$1 = state_81861;var statearr_81863_81883 = state_81861__$1;(statearr_81863_81883[2] = null);
(statearr_81863_81883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 2))
{var state_81861__$1 = state_81861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81861__$1,4,from);
} else
{if((state_val_81862 === 3))
{var inst_81859 = (state_81861[2]);var state_81861__$1 = state_81861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81861__$1,inst_81859);
} else
{if((state_val_81862 === 4))
{var inst_81844 = (state_81861[7]);var inst_81844__$1 = (state_81861[2]);var inst_81845 = (inst_81844__$1 == null);var state_81861__$1 = (function (){var statearr_81864 = state_81861;(statearr_81864[7] = inst_81844__$1);
return statearr_81864;
})();if(cljs.core.truth_(inst_81845))
{var statearr_81865_81884 = state_81861__$1;(statearr_81865_81884[1] = 5);
} else
{var statearr_81866_81885 = state_81861__$1;(statearr_81866_81885[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 5))
{var state_81861__$1 = state_81861;if(cljs.core.truth_(close_QMARK_))
{var statearr_81867_81886 = state_81861__$1;(statearr_81867_81886[1] = 8);
} else
{var statearr_81868_81887 = state_81861__$1;(statearr_81868_81887[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 6))
{var inst_81844 = (state_81861[7]);var state_81861__$1 = state_81861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81861__$1,11,to,inst_81844);
} else
{if((state_val_81862 === 7))
{var inst_81857 = (state_81861[2]);var state_81861__$1 = state_81861;var statearr_81869_81888 = state_81861__$1;(statearr_81869_81888[2] = inst_81857);
(statearr_81869_81888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 8))
{var inst_81848 = cljs.core.async.close_BANG_.call(null,to);var state_81861__$1 = state_81861;var statearr_81870_81889 = state_81861__$1;(statearr_81870_81889[2] = inst_81848);
(statearr_81870_81889[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 9))
{var state_81861__$1 = state_81861;var statearr_81871_81890 = state_81861__$1;(statearr_81871_81890[2] = null);
(statearr_81871_81890[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 10))
{var inst_81851 = (state_81861[2]);var state_81861__$1 = state_81861;var statearr_81872_81891 = state_81861__$1;(statearr_81872_81891[2] = inst_81851);
(statearr_81872_81891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81862 === 11))
{var inst_81854 = (state_81861[2]);var state_81861__$1 = (function (){var statearr_81873 = state_81861;(statearr_81873[8] = inst_81854);
return statearr_81873;
})();var statearr_81874_81892 = state_81861__$1;(statearr_81874_81892[2] = null);
(statearr_81874_81892[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_81878 = (new Array(9));(statearr_81878[0] = state_machine__16760__auto__);
(statearr_81878[1] = 1);
return statearr_81878;
});
var state_machine__16760__auto____1 = (function (state_81861){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_81861);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e81879){if((e81879 instanceof Object))
{var ex__16763__auto__ = e81879;var statearr_81880_81893 = state_81861;(statearr_81880_81893[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81894 = state_81861;
state_81861 = G__81894;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_81861){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_81861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_81881 = f__16830__auto__.call(null);(statearr_81881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___81882);
return statearr_81881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16829__auto___81981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_81959){var state_val_81960 = (state_81959[1]);if((state_val_81960 === 1))
{var state_81959__$1 = state_81959;var statearr_81961_81982 = state_81959__$1;(statearr_81961_81982[2] = null);
(statearr_81961_81982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 2))
{var state_81959__$1 = state_81959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81959__$1,4,ch);
} else
{if((state_val_81960 === 3))
{var inst_81957 = (state_81959[2]);var state_81959__$1 = state_81959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81959__$1,inst_81957);
} else
{if((state_val_81960 === 4))
{var inst_81940 = (state_81959[7]);var inst_81940__$1 = (state_81959[2]);var inst_81941 = (inst_81940__$1 == null);var state_81959__$1 = (function (){var statearr_81962 = state_81959;(statearr_81962[7] = inst_81940__$1);
return statearr_81962;
})();if(cljs.core.truth_(inst_81941))
{var statearr_81963_81983 = state_81959__$1;(statearr_81963_81983[1] = 5);
} else
{var statearr_81964_81984 = state_81959__$1;(statearr_81964_81984[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 5))
{var inst_81943 = cljs.core.async.close_BANG_.call(null,tc);var inst_81944 = cljs.core.async.close_BANG_.call(null,fc);var state_81959__$1 = (function (){var statearr_81965 = state_81959;(statearr_81965[8] = inst_81943);
return statearr_81965;
})();var statearr_81966_81985 = state_81959__$1;(statearr_81966_81985[2] = inst_81944);
(statearr_81966_81985[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 6))
{var inst_81940 = (state_81959[7]);var inst_81946 = p.call(null,inst_81940);var state_81959__$1 = state_81959;if(cljs.core.truth_(inst_81946))
{var statearr_81967_81986 = state_81959__$1;(statearr_81967_81986[1] = 9);
} else
{var statearr_81968_81987 = state_81959__$1;(statearr_81968_81987[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 7))
{var inst_81955 = (state_81959[2]);var state_81959__$1 = state_81959;var statearr_81969_81988 = state_81959__$1;(statearr_81969_81988[2] = inst_81955);
(statearr_81969_81988[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 8))
{var inst_81952 = (state_81959[2]);var state_81959__$1 = (function (){var statearr_81970 = state_81959;(statearr_81970[9] = inst_81952);
return statearr_81970;
})();var statearr_81971_81989 = state_81959__$1;(statearr_81971_81989[2] = null);
(statearr_81971_81989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 9))
{var state_81959__$1 = state_81959;var statearr_81972_81990 = state_81959__$1;(statearr_81972_81990[2] = tc);
(statearr_81972_81990[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 10))
{var state_81959__$1 = state_81959;var statearr_81973_81991 = state_81959__$1;(statearr_81973_81991[2] = fc);
(statearr_81973_81991[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_81960 === 11))
{var inst_81940 = (state_81959[7]);var inst_81950 = (state_81959[2]);var state_81959__$1 = state_81959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81959__$1,8,inst_81950,inst_81940);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_81977 = (new Array(10));(statearr_81977[0] = state_machine__16760__auto__);
(statearr_81977[1] = 1);
return statearr_81977;
});
var state_machine__16760__auto____1 = (function (state_81959){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_81959);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e81978){if((e81978 instanceof Object))
{var ex__16763__auto__ = e81978;var statearr_81979_81992 = state_81959;(statearr_81979_81992[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__81993 = state_81959;
state_81959 = G__81993;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_81959){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_81959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_81980 = f__16830__auto__.call(null);(statearr_81980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___81981);
return statearr_81980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_82040){var state_val_82041 = (state_82040[1]);if((state_val_82041 === 7))
{var inst_82036 = (state_82040[2]);var state_82040__$1 = state_82040;var statearr_82042_82058 = state_82040__$1;(statearr_82042_82058[2] = inst_82036);
(statearr_82042_82058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82041 === 6))
{var inst_82026 = (state_82040[7]);var inst_82029 = (state_82040[8]);var inst_82033 = f.call(null,inst_82026,inst_82029);var inst_82026__$1 = inst_82033;var state_82040__$1 = (function (){var statearr_82043 = state_82040;(statearr_82043[7] = inst_82026__$1);
return statearr_82043;
})();var statearr_82044_82059 = state_82040__$1;(statearr_82044_82059[2] = null);
(statearr_82044_82059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82041 === 5))
{var inst_82026 = (state_82040[7]);var state_82040__$1 = state_82040;var statearr_82045_82060 = state_82040__$1;(statearr_82045_82060[2] = inst_82026);
(statearr_82045_82060[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82041 === 4))
{var inst_82029 = (state_82040[8]);var inst_82029__$1 = (state_82040[2]);var inst_82030 = (inst_82029__$1 == null);var state_82040__$1 = (function (){var statearr_82046 = state_82040;(statearr_82046[8] = inst_82029__$1);
return statearr_82046;
})();if(cljs.core.truth_(inst_82030))
{var statearr_82047_82061 = state_82040__$1;(statearr_82047_82061[1] = 5);
} else
{var statearr_82048_82062 = state_82040__$1;(statearr_82048_82062[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82041 === 3))
{var inst_82038 = (state_82040[2]);var state_82040__$1 = state_82040;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82040__$1,inst_82038);
} else
{if((state_val_82041 === 2))
{var state_82040__$1 = state_82040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82040__$1,4,ch);
} else
{if((state_val_82041 === 1))
{var inst_82026 = init;var state_82040__$1 = (function (){var statearr_82049 = state_82040;(statearr_82049[7] = inst_82026);
return statearr_82049;
})();var statearr_82050_82063 = state_82040__$1;(statearr_82050_82063[2] = null);
(statearr_82050_82063[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_82054 = (new Array(9));(statearr_82054[0] = state_machine__16760__auto__);
(statearr_82054[1] = 1);
return statearr_82054;
});
var state_machine__16760__auto____1 = (function (state_82040){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_82040);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e82055){if((e82055 instanceof Object))
{var ex__16763__auto__ = e82055;var statearr_82056_82064 = state_82040;(statearr_82056_82064[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82040);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82065 = state_82040;
state_82040 = G__82065;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_82040){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_82040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_82057 = f__16830__auto__.call(null);(statearr_82057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_82057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16829__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_82127){var state_val_82128 = (state_82127[1]);if((state_val_82128 === 1))
{var inst_82107 = cljs.core.seq.call(null,coll);var inst_82108 = inst_82107;var state_82127__$1 = (function (){var statearr_82129 = state_82127;(statearr_82129[7] = inst_82108);
return statearr_82129;
})();var statearr_82130_82148 = state_82127__$1;(statearr_82130_82148[2] = null);
(statearr_82130_82148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 2))
{var inst_82108 = (state_82127[7]);var state_82127__$1 = state_82127;if(cljs.core.truth_(inst_82108))
{var statearr_82131_82149 = state_82127__$1;(statearr_82131_82149[1] = 4);
} else
{var statearr_82132_82150 = state_82127__$1;(statearr_82132_82150[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 3))
{var inst_82125 = (state_82127[2]);var state_82127__$1 = state_82127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82127__$1,inst_82125);
} else
{if((state_val_82128 === 4))
{var inst_82108 = (state_82127[7]);var inst_82111 = cljs.core.first.call(null,inst_82108);var state_82127__$1 = state_82127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82127__$1,7,ch,inst_82111);
} else
{if((state_val_82128 === 5))
{var state_82127__$1 = state_82127;if(cljs.core.truth_(close_QMARK_))
{var statearr_82133_82151 = state_82127__$1;(statearr_82133_82151[1] = 8);
} else
{var statearr_82134_82152 = state_82127__$1;(statearr_82134_82152[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 6))
{var inst_82123 = (state_82127[2]);var state_82127__$1 = state_82127;var statearr_82135_82153 = state_82127__$1;(statearr_82135_82153[2] = inst_82123);
(statearr_82135_82153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 7))
{var inst_82108 = (state_82127[7]);var inst_82113 = (state_82127[2]);var inst_82114 = cljs.core.next.call(null,inst_82108);var inst_82108__$1 = inst_82114;var state_82127__$1 = (function (){var statearr_82136 = state_82127;(statearr_82136[8] = inst_82113);
(statearr_82136[7] = inst_82108__$1);
return statearr_82136;
})();var statearr_82137_82154 = state_82127__$1;(statearr_82137_82154[2] = null);
(statearr_82137_82154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 8))
{var inst_82118 = cljs.core.async.close_BANG_.call(null,ch);var state_82127__$1 = state_82127;var statearr_82138_82155 = state_82127__$1;(statearr_82138_82155[2] = inst_82118);
(statearr_82138_82155[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 9))
{var state_82127__$1 = state_82127;var statearr_82139_82156 = state_82127__$1;(statearr_82139_82156[2] = null);
(statearr_82139_82156[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82128 === 10))
{var inst_82121 = (state_82127[2]);var state_82127__$1 = state_82127;var statearr_82140_82157 = state_82127__$1;(statearr_82140_82157[2] = inst_82121);
(statearr_82140_82157[1] = 6);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_82144 = (new Array(9));(statearr_82144[0] = state_machine__16760__auto__);
(statearr_82144[1] = 1);
return statearr_82144;
});
var state_machine__16760__auto____1 = (function (state_82127){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_82127);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e82145){if((e82145 instanceof Object))
{var ex__16763__auto__ = e82145;var statearr_82146_82158 = state_82127;(statearr_82146_82158[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82159 = state_82127;
state_82127 = G__82159;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_82127){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_82127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_82147 = f__16830__auto__.call(null);(statearr_82147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto__);
return statearr_82147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return c__16829__auto__;
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
cljs.core.async.Mux = (function (){var obj82161 = {};return obj82161;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13809__auto__ = _;if(and__13809__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14424__auto__ = (((_ == null))?null:_);return (function (){var or__13821__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj82163 = {};return obj82163;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t82387 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82387 = (function (cs,ch,mult,meta82388){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta82388 = meta82388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82387.cljs$lang$type = true;
cljs.core.async.t82387.cljs$lang$ctorStr = "cljs.core.async/t82387";
cljs.core.async.t82387.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t82387");
});})(cs))
;
cljs.core.async.t82387.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t82387.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t82387.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t82387.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t82387.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t82387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_82389){var self__ = this;
var _82389__$1 = this;return self__.meta82388;
});})(cs))
;
cljs.core.async.t82387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_82389,meta82388__$1){var self__ = this;
var _82389__$1 = this;return (new cljs.core.async.t82387(self__.cs,self__.ch,self__.mult,meta82388__$1));
});})(cs))
;
cljs.core.async.__GT_t82387 = ((function (cs){
return (function __GT_t82387(cs__$1,ch__$1,mult__$1,meta82388){return (new cljs.core.async.t82387(cs__$1,ch__$1,mult__$1,meta82388));
});})(cs))
;
}
return (new cljs.core.async.t82387(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16829__auto___82610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_82524){var state_val_82525 = (state_82524[1]);if((state_val_82525 === 32))
{var inst_82392 = (state_82524[7]);var inst_82468 = (state_82524[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82524,31,Object,null,30);var inst_82475 = cljs.core.async.put_BANG_.call(null,inst_82468,inst_82392,done);var state_82524__$1 = state_82524;var statearr_82526_82611 = state_82524__$1;(statearr_82526_82611[2] = inst_82475);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82524__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 1))
{var state_82524__$1 = state_82524;var statearr_82527_82612 = state_82524__$1;(statearr_82527_82612[2] = null);
(statearr_82527_82612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 33))
{var inst_82481 = (state_82524[9]);var inst_82483 = cljs.core.chunked_seq_QMARK_.call(null,inst_82481);var state_82524__$1 = state_82524;if(inst_82483)
{var statearr_82528_82613 = state_82524__$1;(statearr_82528_82613[1] = 36);
} else
{var statearr_82529_82614 = state_82524__$1;(statearr_82529_82614[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 2))
{var state_82524__$1 = state_82524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82524__$1,4,ch);
} else
{if((state_val_82525 === 34))
{var state_82524__$1 = state_82524;var statearr_82530_82615 = state_82524__$1;(statearr_82530_82615[2] = null);
(statearr_82530_82615[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 3))
{var inst_82522 = (state_82524[2]);var state_82524__$1 = state_82524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82524__$1,inst_82522);
} else
{if((state_val_82525 === 35))
{var inst_82506 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82531_82616 = state_82524__$1;(statearr_82531_82616[2] = inst_82506);
(statearr_82531_82616[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 4))
{var inst_82392 = (state_82524[7]);var inst_82392__$1 = (state_82524[2]);var inst_82393 = (inst_82392__$1 == null);var state_82524__$1 = (function (){var statearr_82532 = state_82524;(statearr_82532[7] = inst_82392__$1);
return statearr_82532;
})();if(cljs.core.truth_(inst_82393))
{var statearr_82533_82617 = state_82524__$1;(statearr_82533_82617[1] = 5);
} else
{var statearr_82534_82618 = state_82524__$1;(statearr_82534_82618[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 36))
{var inst_82481 = (state_82524[9]);var inst_82485 = cljs.core.chunk_first.call(null,inst_82481);var inst_82486 = cljs.core.chunk_rest.call(null,inst_82481);var inst_82487 = cljs.core.count.call(null,inst_82485);var inst_82460 = inst_82486;var inst_82461 = inst_82485;var inst_82462 = inst_82487;var inst_82463 = 0;var state_82524__$1 = (function (){var statearr_82535 = state_82524;(statearr_82535[10] = inst_82461);
(statearr_82535[11] = inst_82462);
(statearr_82535[12] = inst_82463);
(statearr_82535[13] = inst_82460);
return statearr_82535;
})();var statearr_82536_82619 = state_82524__$1;(statearr_82536_82619[2] = null);
(statearr_82536_82619[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 5))
{var inst_82399 = cljs.core.deref.call(null,cs);var inst_82400 = cljs.core.seq.call(null,inst_82399);var inst_82401 = inst_82400;var inst_82402 = null;var inst_82403 = 0;var inst_82404 = 0;var state_82524__$1 = (function (){var statearr_82537 = state_82524;(statearr_82537[14] = inst_82402);
(statearr_82537[15] = inst_82401);
(statearr_82537[16] = inst_82403);
(statearr_82537[17] = inst_82404);
return statearr_82537;
})();var statearr_82538_82620 = state_82524__$1;(statearr_82538_82620[2] = null);
(statearr_82538_82620[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 37))
{var inst_82481 = (state_82524[9]);var inst_82490 = cljs.core.first.call(null,inst_82481);var state_82524__$1 = (function (){var statearr_82539 = state_82524;(statearr_82539[18] = inst_82490);
return statearr_82539;
})();var statearr_82540_82621 = state_82524__$1;(statearr_82540_82621[2] = null);
(statearr_82540_82621[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 6))
{var inst_82452 = (state_82524[19]);var inst_82451 = cljs.core.deref.call(null,cs);var inst_82452__$1 = cljs.core.keys.call(null,inst_82451);var inst_82453 = cljs.core.count.call(null,inst_82452__$1);var inst_82454 = cljs.core.reset_BANG_.call(null,dctr,inst_82453);var inst_82459 = cljs.core.seq.call(null,inst_82452__$1);var inst_82460 = inst_82459;var inst_82461 = null;var inst_82462 = 0;var inst_82463 = 0;var state_82524__$1 = (function (){var statearr_82541 = state_82524;(statearr_82541[10] = inst_82461);
(statearr_82541[11] = inst_82462);
(statearr_82541[12] = inst_82463);
(statearr_82541[13] = inst_82460);
(statearr_82541[19] = inst_82452__$1);
(statearr_82541[20] = inst_82454);
return statearr_82541;
})();var statearr_82542_82622 = state_82524__$1;(statearr_82542_82622[2] = null);
(statearr_82542_82622[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 38))
{var inst_82503 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82543_82623 = state_82524__$1;(statearr_82543_82623[2] = inst_82503);
(statearr_82543_82623[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 7))
{var inst_82520 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82544_82624 = state_82524__$1;(statearr_82544_82624[2] = inst_82520);
(statearr_82544_82624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 39))
{var inst_82481 = (state_82524[9]);var inst_82499 = (state_82524[2]);var inst_82500 = cljs.core.next.call(null,inst_82481);var inst_82460 = inst_82500;var inst_82461 = null;var inst_82462 = 0;var inst_82463 = 0;var state_82524__$1 = (function (){var statearr_82545 = state_82524;(statearr_82545[10] = inst_82461);
(statearr_82545[11] = inst_82462);
(statearr_82545[12] = inst_82463);
(statearr_82545[13] = inst_82460);
(statearr_82545[21] = inst_82499);
return statearr_82545;
})();var statearr_82546_82625 = state_82524__$1;(statearr_82546_82625[2] = null);
(statearr_82546_82625[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 8))
{var inst_82403 = (state_82524[16]);var inst_82404 = (state_82524[17]);var inst_82406 = (inst_82404 < inst_82403);var inst_82407 = inst_82406;var state_82524__$1 = state_82524;if(cljs.core.truth_(inst_82407))
{var statearr_82547_82626 = state_82524__$1;(statearr_82547_82626[1] = 10);
} else
{var statearr_82548_82627 = state_82524__$1;(statearr_82548_82627[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 40))
{var inst_82490 = (state_82524[18]);var inst_82491 = (state_82524[2]);var inst_82492 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_82493 = cljs.core.async.untap_STAR_.call(null,m,inst_82490);var state_82524__$1 = (function (){var statearr_82549 = state_82524;(statearr_82549[22] = inst_82492);
(statearr_82549[23] = inst_82491);
return statearr_82549;
})();var statearr_82550_82628 = state_82524__$1;(statearr_82550_82628[2] = inst_82493);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82524__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 9))
{var inst_82449 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82551_82629 = state_82524__$1;(statearr_82551_82629[2] = inst_82449);
(statearr_82551_82629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 41))
{var inst_82392 = (state_82524[7]);var inst_82490 = (state_82524[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_82524,40,Object,null,39);var inst_82497 = cljs.core.async.put_BANG_.call(null,inst_82490,inst_82392,done);var state_82524__$1 = state_82524;var statearr_82552_82630 = state_82524__$1;(statearr_82552_82630[2] = inst_82497);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82524__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 10))
{var inst_82402 = (state_82524[14]);var inst_82404 = (state_82524[17]);var inst_82410 = cljs.core._nth.call(null,inst_82402,inst_82404);var inst_82411 = cljs.core.nth.call(null,inst_82410,0,null);var inst_82412 = cljs.core.nth.call(null,inst_82410,1,null);var state_82524__$1 = (function (){var statearr_82553 = state_82524;(statearr_82553[24] = inst_82411);
return statearr_82553;
})();if(cljs.core.truth_(inst_82412))
{var statearr_82554_82631 = state_82524__$1;(statearr_82554_82631[1] = 13);
} else
{var statearr_82555_82632 = state_82524__$1;(statearr_82555_82632[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 42))
{var state_82524__$1 = state_82524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82524__$1,45,dchan);
} else
{if((state_val_82525 === 11))
{var inst_82401 = (state_82524[15]);var inst_82421 = (state_82524[25]);var inst_82421__$1 = cljs.core.seq.call(null,inst_82401);var state_82524__$1 = (function (){var statearr_82556 = state_82524;(statearr_82556[25] = inst_82421__$1);
return statearr_82556;
})();if(inst_82421__$1)
{var statearr_82557_82633 = state_82524__$1;(statearr_82557_82633[1] = 16);
} else
{var statearr_82558_82634 = state_82524__$1;(statearr_82558_82634[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 43))
{var state_82524__$1 = state_82524;var statearr_82559_82635 = state_82524__$1;(statearr_82559_82635[2] = null);
(statearr_82559_82635[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 12))
{var inst_82447 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82560_82636 = state_82524__$1;(statearr_82560_82636[2] = inst_82447);
(statearr_82560_82636[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 44))
{var inst_82517 = (state_82524[2]);var state_82524__$1 = (function (){var statearr_82561 = state_82524;(statearr_82561[26] = inst_82517);
return statearr_82561;
})();var statearr_82562_82637 = state_82524__$1;(statearr_82562_82637[2] = null);
(statearr_82562_82637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 13))
{var inst_82411 = (state_82524[24]);var inst_82414 = cljs.core.async.close_BANG_.call(null,inst_82411);var state_82524__$1 = state_82524;var statearr_82563_82638 = state_82524__$1;(statearr_82563_82638[2] = inst_82414);
(statearr_82563_82638[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 45))
{var inst_82514 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82567_82639 = state_82524__$1;(statearr_82567_82639[2] = inst_82514);
(statearr_82567_82639[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 14))
{var state_82524__$1 = state_82524;var statearr_82568_82640 = state_82524__$1;(statearr_82568_82640[2] = null);
(statearr_82568_82640[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 15))
{var inst_82402 = (state_82524[14]);var inst_82401 = (state_82524[15]);var inst_82403 = (state_82524[16]);var inst_82404 = (state_82524[17]);var inst_82417 = (state_82524[2]);var inst_82418 = (inst_82404 + 1);var tmp82564 = inst_82402;var tmp82565 = inst_82401;var tmp82566 = inst_82403;var inst_82401__$1 = tmp82565;var inst_82402__$1 = tmp82564;var inst_82403__$1 = tmp82566;var inst_82404__$1 = inst_82418;var state_82524__$1 = (function (){var statearr_82569 = state_82524;(statearr_82569[14] = inst_82402__$1);
(statearr_82569[15] = inst_82401__$1);
(statearr_82569[16] = inst_82403__$1);
(statearr_82569[17] = inst_82404__$1);
(statearr_82569[27] = inst_82417);
return statearr_82569;
})();var statearr_82570_82641 = state_82524__$1;(statearr_82570_82641[2] = null);
(statearr_82570_82641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 16))
{var inst_82421 = (state_82524[25]);var inst_82423 = cljs.core.chunked_seq_QMARK_.call(null,inst_82421);var state_82524__$1 = state_82524;if(inst_82423)
{var statearr_82571_82642 = state_82524__$1;(statearr_82571_82642[1] = 19);
} else
{var statearr_82572_82643 = state_82524__$1;(statearr_82572_82643[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 17))
{var state_82524__$1 = state_82524;var statearr_82573_82644 = state_82524__$1;(statearr_82573_82644[2] = null);
(statearr_82573_82644[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 18))
{var inst_82445 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82574_82645 = state_82524__$1;(statearr_82574_82645[2] = inst_82445);
(statearr_82574_82645[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 19))
{var inst_82421 = (state_82524[25]);var inst_82425 = cljs.core.chunk_first.call(null,inst_82421);var inst_82426 = cljs.core.chunk_rest.call(null,inst_82421);var inst_82427 = cljs.core.count.call(null,inst_82425);var inst_82401 = inst_82426;var inst_82402 = inst_82425;var inst_82403 = inst_82427;var inst_82404 = 0;var state_82524__$1 = (function (){var statearr_82575 = state_82524;(statearr_82575[14] = inst_82402);
(statearr_82575[15] = inst_82401);
(statearr_82575[16] = inst_82403);
(statearr_82575[17] = inst_82404);
return statearr_82575;
})();var statearr_82576_82646 = state_82524__$1;(statearr_82576_82646[2] = null);
(statearr_82576_82646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 20))
{var inst_82421 = (state_82524[25]);var inst_82431 = cljs.core.first.call(null,inst_82421);var inst_82432 = cljs.core.nth.call(null,inst_82431,0,null);var inst_82433 = cljs.core.nth.call(null,inst_82431,1,null);var state_82524__$1 = (function (){var statearr_82577 = state_82524;(statearr_82577[28] = inst_82432);
return statearr_82577;
})();if(cljs.core.truth_(inst_82433))
{var statearr_82578_82647 = state_82524__$1;(statearr_82578_82647[1] = 22);
} else
{var statearr_82579_82648 = state_82524__$1;(statearr_82579_82648[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 21))
{var inst_82442 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82580_82649 = state_82524__$1;(statearr_82580_82649[2] = inst_82442);
(statearr_82580_82649[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 22))
{var inst_82432 = (state_82524[28]);var inst_82435 = cljs.core.async.close_BANG_.call(null,inst_82432);var state_82524__$1 = state_82524;var statearr_82581_82650 = state_82524__$1;(statearr_82581_82650[2] = inst_82435);
(statearr_82581_82650[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 23))
{var state_82524__$1 = state_82524;var statearr_82582_82651 = state_82524__$1;(statearr_82582_82651[2] = null);
(statearr_82582_82651[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 24))
{var inst_82421 = (state_82524[25]);var inst_82438 = (state_82524[2]);var inst_82439 = cljs.core.next.call(null,inst_82421);var inst_82401 = inst_82439;var inst_82402 = null;var inst_82403 = 0;var inst_82404 = 0;var state_82524__$1 = (function (){var statearr_82583 = state_82524;(statearr_82583[29] = inst_82438);
(statearr_82583[14] = inst_82402);
(statearr_82583[15] = inst_82401);
(statearr_82583[16] = inst_82403);
(statearr_82583[17] = inst_82404);
return statearr_82583;
})();var statearr_82584_82652 = state_82524__$1;(statearr_82584_82652[2] = null);
(statearr_82584_82652[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 25))
{var inst_82462 = (state_82524[11]);var inst_82463 = (state_82524[12]);var inst_82465 = (inst_82463 < inst_82462);var inst_82466 = inst_82465;var state_82524__$1 = state_82524;if(cljs.core.truth_(inst_82466))
{var statearr_82585_82653 = state_82524__$1;(statearr_82585_82653[1] = 27);
} else
{var statearr_82586_82654 = state_82524__$1;(statearr_82586_82654[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 26))
{var inst_82452 = (state_82524[19]);var inst_82510 = (state_82524[2]);var inst_82511 = cljs.core.seq.call(null,inst_82452);var state_82524__$1 = (function (){var statearr_82587 = state_82524;(statearr_82587[30] = inst_82510);
return statearr_82587;
})();if(inst_82511)
{var statearr_82588_82655 = state_82524__$1;(statearr_82588_82655[1] = 42);
} else
{var statearr_82589_82656 = state_82524__$1;(statearr_82589_82656[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 27))
{var inst_82461 = (state_82524[10]);var inst_82463 = (state_82524[12]);var inst_82468 = cljs.core._nth.call(null,inst_82461,inst_82463);var state_82524__$1 = (function (){var statearr_82590 = state_82524;(statearr_82590[8] = inst_82468);
return statearr_82590;
})();var statearr_82591_82657 = state_82524__$1;(statearr_82591_82657[2] = null);
(statearr_82591_82657[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 28))
{var inst_82460 = (state_82524[13]);var inst_82481 = (state_82524[9]);var inst_82481__$1 = cljs.core.seq.call(null,inst_82460);var state_82524__$1 = (function (){var statearr_82595 = state_82524;(statearr_82595[9] = inst_82481__$1);
return statearr_82595;
})();if(inst_82481__$1)
{var statearr_82596_82658 = state_82524__$1;(statearr_82596_82658[1] = 33);
} else
{var statearr_82597_82659 = state_82524__$1;(statearr_82597_82659[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 29))
{var inst_82508 = (state_82524[2]);var state_82524__$1 = state_82524;var statearr_82598_82660 = state_82524__$1;(statearr_82598_82660[2] = inst_82508);
(statearr_82598_82660[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 30))
{var inst_82461 = (state_82524[10]);var inst_82462 = (state_82524[11]);var inst_82463 = (state_82524[12]);var inst_82460 = (state_82524[13]);var inst_82477 = (state_82524[2]);var inst_82478 = (inst_82463 + 1);var tmp82592 = inst_82461;var tmp82593 = inst_82462;var tmp82594 = inst_82460;var inst_82460__$1 = tmp82594;var inst_82461__$1 = tmp82592;var inst_82462__$1 = tmp82593;var inst_82463__$1 = inst_82478;var state_82524__$1 = (function (){var statearr_82599 = state_82524;(statearr_82599[31] = inst_82477);
(statearr_82599[10] = inst_82461__$1);
(statearr_82599[11] = inst_82462__$1);
(statearr_82599[12] = inst_82463__$1);
(statearr_82599[13] = inst_82460__$1);
return statearr_82599;
})();var statearr_82600_82661 = state_82524__$1;(statearr_82600_82661[2] = null);
(statearr_82600_82661[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82525 === 31))
{var inst_82468 = (state_82524[8]);var inst_82469 = (state_82524[2]);var inst_82470 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_82471 = cljs.core.async.untap_STAR_.call(null,m,inst_82468);var state_82524__$1 = (function (){var statearr_82601 = state_82524;(statearr_82601[32] = inst_82470);
(statearr_82601[33] = inst_82469);
return statearr_82601;
})();var statearr_82602_82662 = state_82524__$1;(statearr_82602_82662[2] = inst_82471);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82524__$1);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_82606 = (new Array(34));(statearr_82606[0] = state_machine__16760__auto__);
(statearr_82606[1] = 1);
return statearr_82606;
});
var state_machine__16760__auto____1 = (function (state_82524){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_82524);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e82607){if((e82607 instanceof Object))
{var ex__16763__auto__ = e82607;var statearr_82608_82663 = state_82524;(statearr_82608_82663[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82664 = state_82524;
state_82524 = G__82664;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_82524){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_82524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_82609 = f__16830__auto__.call(null);(statearr_82609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___82610);
return statearr_82609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.Mix = (function (){var obj82666 = {};return obj82666;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13809__auto__ = m;if(and__13809__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14424__auto__ = (((m == null))?null:m);return (function (){var or__13821__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t82776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82776 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta82777){
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
this.meta82777 = meta82777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82776.cljs$lang$type = true;
cljs.core.async.t82776.cljs$lang$ctorStr = "cljs.core.async/t82776";
cljs.core.async.t82776.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t82776");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t82776.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82778){var self__ = this;
var _82778__$1 = this;return self__.meta82777;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82778,meta82777__$1){var self__ = this;
var _82778__$1 = this;return (new cljs.core.async.t82776(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta82777__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t82776 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t82776(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta82777){return (new cljs.core.async.t82776(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta82777));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t82776(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__16829__auto___82885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_82843){var state_val_82844 = (state_82843[1]);if((state_val_82844 === 1))
{var inst_82782 = (state_82843[7]);var inst_82782__$1 = calc_state.call(null);var inst_82783 = cljs.core.seq_QMARK_.call(null,inst_82782__$1);var state_82843__$1 = (function (){var statearr_82845 = state_82843;(statearr_82845[7] = inst_82782__$1);
return statearr_82845;
})();if(inst_82783)
{var statearr_82846_82886 = state_82843__$1;(statearr_82846_82886[1] = 2);
} else
{var statearr_82847_82887 = state_82843__$1;(statearr_82847_82887[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 2))
{var inst_82782 = (state_82843[7]);var inst_82785 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82782);var state_82843__$1 = state_82843;var statearr_82848_82888 = state_82843__$1;(statearr_82848_82888[2] = inst_82785);
(statearr_82848_82888[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 3))
{var inst_82782 = (state_82843[7]);var state_82843__$1 = state_82843;var statearr_82849_82889 = state_82843__$1;(statearr_82849_82889[2] = inst_82782);
(statearr_82849_82889[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 4))
{var inst_82782 = (state_82843[7]);var inst_82788 = (state_82843[2]);var inst_82789 = cljs.core.get.call(null,inst_82788,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_82790 = cljs.core.get.call(null,inst_82788,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_82791 = cljs.core.get.call(null,inst_82788,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_82792 = inst_82782;var state_82843__$1 = (function (){var statearr_82850 = state_82843;(statearr_82850[8] = inst_82790);
(statearr_82850[9] = inst_82791);
(statearr_82850[10] = inst_82792);
(statearr_82850[11] = inst_82789);
return statearr_82850;
})();var statearr_82851_82890 = state_82843__$1;(statearr_82851_82890[2] = null);
(statearr_82851_82890[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 5))
{var inst_82792 = (state_82843[10]);var inst_82795 = cljs.core.seq_QMARK_.call(null,inst_82792);var state_82843__$1 = state_82843;if(inst_82795)
{var statearr_82852_82891 = state_82843__$1;(statearr_82852_82891[1] = 7);
} else
{var statearr_82853_82892 = state_82843__$1;(statearr_82853_82892[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 6))
{var inst_82841 = (state_82843[2]);var state_82843__$1 = state_82843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82843__$1,inst_82841);
} else
{if((state_val_82844 === 7))
{var inst_82792 = (state_82843[10]);var inst_82797 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82792);var state_82843__$1 = state_82843;var statearr_82854_82893 = state_82843__$1;(statearr_82854_82893[2] = inst_82797);
(statearr_82854_82893[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 8))
{var inst_82792 = (state_82843[10]);var state_82843__$1 = state_82843;var statearr_82855_82894 = state_82843__$1;(statearr_82855_82894[2] = inst_82792);
(statearr_82855_82894[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 9))
{var inst_82800 = (state_82843[12]);var inst_82800__$1 = (state_82843[2]);var inst_82801 = cljs.core.get.call(null,inst_82800__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_82802 = cljs.core.get.call(null,inst_82800__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_82803 = cljs.core.get.call(null,inst_82800__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_82843__$1 = (function (){var statearr_82856 = state_82843;(statearr_82856[13] = inst_82803);
(statearr_82856[14] = inst_82802);
(statearr_82856[12] = inst_82800__$1);
return statearr_82856;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_82843__$1,10,inst_82801);
} else
{if((state_val_82844 === 10))
{var inst_82807 = (state_82843[15]);var inst_82808 = (state_82843[16]);var inst_82806 = (state_82843[2]);var inst_82807__$1 = cljs.core.nth.call(null,inst_82806,0,null);var inst_82808__$1 = cljs.core.nth.call(null,inst_82806,1,null);var inst_82809 = (inst_82807__$1 == null);var inst_82810 = cljs.core._EQ_.call(null,inst_82808__$1,change);var inst_82811 = (inst_82809) || (inst_82810);var state_82843__$1 = (function (){var statearr_82857 = state_82843;(statearr_82857[15] = inst_82807__$1);
(statearr_82857[16] = inst_82808__$1);
return statearr_82857;
})();if(cljs.core.truth_(inst_82811))
{var statearr_82858_82895 = state_82843__$1;(statearr_82858_82895[1] = 11);
} else
{var statearr_82859_82896 = state_82843__$1;(statearr_82859_82896[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 11))
{var inst_82807 = (state_82843[15]);var inst_82813 = (inst_82807 == null);var state_82843__$1 = state_82843;if(cljs.core.truth_(inst_82813))
{var statearr_82860_82897 = state_82843__$1;(statearr_82860_82897[1] = 14);
} else
{var statearr_82861_82898 = state_82843__$1;(statearr_82861_82898[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 12))
{var inst_82808 = (state_82843[16]);var inst_82803 = (state_82843[13]);var inst_82822 = (state_82843[17]);var inst_82822__$1 = inst_82803.call(null,inst_82808);var state_82843__$1 = (function (){var statearr_82862 = state_82843;(statearr_82862[17] = inst_82822__$1);
return statearr_82862;
})();if(cljs.core.truth_(inst_82822__$1))
{var statearr_82863_82899 = state_82843__$1;(statearr_82863_82899[1] = 17);
} else
{var statearr_82864_82900 = state_82843__$1;(statearr_82864_82900[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 13))
{var inst_82839 = (state_82843[2]);var state_82843__$1 = state_82843;var statearr_82865_82901 = state_82843__$1;(statearr_82865_82901[2] = inst_82839);
(statearr_82865_82901[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 14))
{var inst_82808 = (state_82843[16]);var inst_82815 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_82808);var state_82843__$1 = state_82843;var statearr_82866_82902 = state_82843__$1;(statearr_82866_82902[2] = inst_82815);
(statearr_82866_82902[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 15))
{var state_82843__$1 = state_82843;var statearr_82867_82903 = state_82843__$1;(statearr_82867_82903[2] = null);
(statearr_82867_82903[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 16))
{var inst_82818 = (state_82843[2]);var inst_82819 = calc_state.call(null);var inst_82792 = inst_82819;var state_82843__$1 = (function (){var statearr_82868 = state_82843;(statearr_82868[18] = inst_82818);
(statearr_82868[10] = inst_82792);
return statearr_82868;
})();var statearr_82869_82904 = state_82843__$1;(statearr_82869_82904[2] = null);
(statearr_82869_82904[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 17))
{var inst_82822 = (state_82843[17]);var state_82843__$1 = state_82843;var statearr_82870_82905 = state_82843__$1;(statearr_82870_82905[2] = inst_82822);
(statearr_82870_82905[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 18))
{var inst_82808 = (state_82843[16]);var inst_82803 = (state_82843[13]);var inst_82802 = (state_82843[14]);var inst_82825 = cljs.core.empty_QMARK_.call(null,inst_82803);var inst_82826 = inst_82802.call(null,inst_82808);var inst_82827 = cljs.core.not.call(null,inst_82826);var inst_82828 = (inst_82825) && (inst_82827);var state_82843__$1 = state_82843;var statearr_82871_82906 = state_82843__$1;(statearr_82871_82906[2] = inst_82828);
(statearr_82871_82906[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 19))
{var inst_82830 = (state_82843[2]);var state_82843__$1 = state_82843;if(cljs.core.truth_(inst_82830))
{var statearr_82872_82907 = state_82843__$1;(statearr_82872_82907[1] = 20);
} else
{var statearr_82873_82908 = state_82843__$1;(statearr_82873_82908[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 20))
{var inst_82807 = (state_82843[15]);var state_82843__$1 = state_82843;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82843__$1,23,out,inst_82807);
} else
{if((state_val_82844 === 21))
{var state_82843__$1 = state_82843;var statearr_82874_82909 = state_82843__$1;(statearr_82874_82909[2] = null);
(statearr_82874_82909[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 22))
{var inst_82800 = (state_82843[12]);var inst_82836 = (state_82843[2]);var inst_82792 = inst_82800;var state_82843__$1 = (function (){var statearr_82875 = state_82843;(statearr_82875[19] = inst_82836);
(statearr_82875[10] = inst_82792);
return statearr_82875;
})();var statearr_82876_82910 = state_82843__$1;(statearr_82876_82910[2] = null);
(statearr_82876_82910[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_82844 === 23))
{var inst_82833 = (state_82843[2]);var state_82843__$1 = state_82843;var statearr_82877_82911 = state_82843__$1;(statearr_82877_82911[2] = inst_82833);
(statearr_82877_82911[1] = 22);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_82881 = (new Array(20));(statearr_82881[0] = state_machine__16760__auto__);
(statearr_82881[1] = 1);
return statearr_82881;
});
var state_machine__16760__auto____1 = (function (state_82843){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_82843);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e82882){if((e82882 instanceof Object))
{var ex__16763__auto__ = e82882;var statearr_82883_82912 = state_82843;(statearr_82883_82912[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e82882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__82913 = state_82843;
state_82843 = G__82913;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_82843){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_82843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_82884 = f__16830__auto__.call(null);(statearr_82884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___82885);
return statearr_82884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
cljs.core.async.Pub = (function (){var obj82915 = {};return obj82915;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13809__auto__ = p;if(and__13809__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14424__auto__ = (((p == null))?null:p);return (function (){var or__13821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
return (function (topic){var or__13821__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13821__auto__,mults){
return (function (p1__82916_SHARP_){if(cljs.core.truth_(p1__82916_SHARP_.call(null,topic)))
{return p1__82916_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__82916_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13821__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t83041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83041 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta83042){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta83042 = meta83042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83041.cljs$lang$type = true;
cljs.core.async.t83041.cljs$lang$ctorStr = "cljs.core.async/t83041";
cljs.core.async.t83041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"cljs.core.async/t83041");
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t83041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t83041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_83043){var self__ = this;
var _83043__$1 = this;return self__.meta83042;
});})(mults,ensure_mult))
;
cljs.core.async.t83041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_83043,meta83042__$1){var self__ = this;
var _83043__$1 = this;return (new cljs.core.async.t83041(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta83042__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t83041 = ((function (mults,ensure_mult){
return (function __GT_t83041(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta83042){return (new cljs.core.async.t83041(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta83042));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t83041(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16829__auto___83165 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83117){var state_val_83118 = (state_83117[1]);if((state_val_83118 === 1))
{var state_83117__$1 = state_83117;var statearr_83119_83166 = state_83117__$1;(statearr_83119_83166[2] = null);
(statearr_83119_83166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 2))
{var state_83117__$1 = state_83117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83117__$1,4,ch);
} else
{if((state_val_83118 === 3))
{var inst_83115 = (state_83117[2]);var state_83117__$1 = state_83117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83117__$1,inst_83115);
} else
{if((state_val_83118 === 4))
{var inst_83046 = (state_83117[7]);var inst_83046__$1 = (state_83117[2]);var inst_83047 = (inst_83046__$1 == null);var state_83117__$1 = (function (){var statearr_83120 = state_83117;(statearr_83120[7] = inst_83046__$1);
return statearr_83120;
})();if(cljs.core.truth_(inst_83047))
{var statearr_83121_83167 = state_83117__$1;(statearr_83121_83167[1] = 5);
} else
{var statearr_83122_83168 = state_83117__$1;(statearr_83122_83168[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 5))
{var inst_83053 = cljs.core.deref.call(null,mults);var inst_83054 = cljs.core.vals.call(null,inst_83053);var inst_83055 = cljs.core.seq.call(null,inst_83054);var inst_83056 = inst_83055;var inst_83057 = null;var inst_83058 = 0;var inst_83059 = 0;var state_83117__$1 = (function (){var statearr_83123 = state_83117;(statearr_83123[8] = inst_83059);
(statearr_83123[9] = inst_83056);
(statearr_83123[10] = inst_83057);
(statearr_83123[11] = inst_83058);
return statearr_83123;
})();var statearr_83124_83169 = state_83117__$1;(statearr_83124_83169[2] = null);
(statearr_83124_83169[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 6))
{var inst_83094 = (state_83117[12]);var inst_83046 = (state_83117[7]);var inst_83096 = (state_83117[13]);var inst_83094__$1 = topic_fn.call(null,inst_83046);var inst_83095 = cljs.core.deref.call(null,mults);var inst_83096__$1 = cljs.core.get.call(null,inst_83095,inst_83094__$1);var state_83117__$1 = (function (){var statearr_83125 = state_83117;(statearr_83125[12] = inst_83094__$1);
(statearr_83125[13] = inst_83096__$1);
return statearr_83125;
})();if(cljs.core.truth_(inst_83096__$1))
{var statearr_83126_83170 = state_83117__$1;(statearr_83126_83170[1] = 19);
} else
{var statearr_83127_83171 = state_83117__$1;(statearr_83127_83171[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 7))
{var inst_83113 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83128_83172 = state_83117__$1;(statearr_83128_83172[2] = inst_83113);
(statearr_83128_83172[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 8))
{var inst_83059 = (state_83117[8]);var inst_83058 = (state_83117[11]);var inst_83061 = (inst_83059 < inst_83058);var inst_83062 = inst_83061;var state_83117__$1 = state_83117;if(cljs.core.truth_(inst_83062))
{var statearr_83132_83173 = state_83117__$1;(statearr_83132_83173[1] = 10);
} else
{var statearr_83133_83174 = state_83117__$1;(statearr_83133_83174[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 9))
{var inst_83092 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83134_83175 = state_83117__$1;(statearr_83134_83175[2] = inst_83092);
(statearr_83134_83175[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 10))
{var inst_83059 = (state_83117[8]);var inst_83056 = (state_83117[9]);var inst_83057 = (state_83117[10]);var inst_83058 = (state_83117[11]);var inst_83064 = cljs.core._nth.call(null,inst_83057,inst_83059);var inst_83065 = cljs.core.async.muxch_STAR_.call(null,inst_83064);var inst_83066 = cljs.core.async.close_BANG_.call(null,inst_83065);var inst_83067 = (inst_83059 + 1);var tmp83129 = inst_83056;var tmp83130 = inst_83057;var tmp83131 = inst_83058;var inst_83056__$1 = tmp83129;var inst_83057__$1 = tmp83130;var inst_83058__$1 = tmp83131;var inst_83059__$1 = inst_83067;var state_83117__$1 = (function (){var statearr_83135 = state_83117;(statearr_83135[8] = inst_83059__$1);
(statearr_83135[14] = inst_83066);
(statearr_83135[9] = inst_83056__$1);
(statearr_83135[10] = inst_83057__$1);
(statearr_83135[11] = inst_83058__$1);
return statearr_83135;
})();var statearr_83136_83176 = state_83117__$1;(statearr_83136_83176[2] = null);
(statearr_83136_83176[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 11))
{var inst_83070 = (state_83117[15]);var inst_83056 = (state_83117[9]);var inst_83070__$1 = cljs.core.seq.call(null,inst_83056);var state_83117__$1 = (function (){var statearr_83137 = state_83117;(statearr_83137[15] = inst_83070__$1);
return statearr_83137;
})();if(inst_83070__$1)
{var statearr_83138_83177 = state_83117__$1;(statearr_83138_83177[1] = 13);
} else
{var statearr_83139_83178 = state_83117__$1;(statearr_83139_83178[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 12))
{var inst_83090 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83140_83179 = state_83117__$1;(statearr_83140_83179[2] = inst_83090);
(statearr_83140_83179[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 13))
{var inst_83070 = (state_83117[15]);var inst_83072 = cljs.core.chunked_seq_QMARK_.call(null,inst_83070);var state_83117__$1 = state_83117;if(inst_83072)
{var statearr_83141_83180 = state_83117__$1;(statearr_83141_83180[1] = 16);
} else
{var statearr_83142_83181 = state_83117__$1;(statearr_83142_83181[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 14))
{var state_83117__$1 = state_83117;var statearr_83143_83182 = state_83117__$1;(statearr_83143_83182[2] = null);
(statearr_83143_83182[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 15))
{var inst_83088 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83144_83183 = state_83117__$1;(statearr_83144_83183[2] = inst_83088);
(statearr_83144_83183[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 16))
{var inst_83070 = (state_83117[15]);var inst_83074 = cljs.core.chunk_first.call(null,inst_83070);var inst_83075 = cljs.core.chunk_rest.call(null,inst_83070);var inst_83076 = cljs.core.count.call(null,inst_83074);var inst_83056 = inst_83075;var inst_83057 = inst_83074;var inst_83058 = inst_83076;var inst_83059 = 0;var state_83117__$1 = (function (){var statearr_83145 = state_83117;(statearr_83145[8] = inst_83059);
(statearr_83145[9] = inst_83056);
(statearr_83145[10] = inst_83057);
(statearr_83145[11] = inst_83058);
return statearr_83145;
})();var statearr_83146_83184 = state_83117__$1;(statearr_83146_83184[2] = null);
(statearr_83146_83184[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 17))
{var inst_83070 = (state_83117[15]);var inst_83079 = cljs.core.first.call(null,inst_83070);var inst_83080 = cljs.core.async.muxch_STAR_.call(null,inst_83079);var inst_83081 = cljs.core.async.close_BANG_.call(null,inst_83080);var inst_83082 = cljs.core.next.call(null,inst_83070);var inst_83056 = inst_83082;var inst_83057 = null;var inst_83058 = 0;var inst_83059 = 0;var state_83117__$1 = (function (){var statearr_83147 = state_83117;(statearr_83147[8] = inst_83059);
(statearr_83147[16] = inst_83081);
(statearr_83147[9] = inst_83056);
(statearr_83147[10] = inst_83057);
(statearr_83147[11] = inst_83058);
return statearr_83147;
})();var statearr_83148_83185 = state_83117__$1;(statearr_83148_83185[2] = null);
(statearr_83148_83185[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 18))
{var inst_83085 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83149_83186 = state_83117__$1;(statearr_83149_83186[2] = inst_83085);
(statearr_83149_83186[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 19))
{var state_83117__$1 = state_83117;var statearr_83150_83187 = state_83117__$1;(statearr_83150_83187[2] = null);
(statearr_83150_83187[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 20))
{var state_83117__$1 = state_83117;var statearr_83151_83188 = state_83117__$1;(statearr_83151_83188[2] = null);
(statearr_83151_83188[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 21))
{var inst_83110 = (state_83117[2]);var state_83117__$1 = (function (){var statearr_83152 = state_83117;(statearr_83152[17] = inst_83110);
return statearr_83152;
})();var statearr_83153_83189 = state_83117__$1;(statearr_83153_83189[2] = null);
(statearr_83153_83189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 22))
{var inst_83107 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83154_83190 = state_83117__$1;(statearr_83154_83190[2] = inst_83107);
(statearr_83154_83190[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 23))
{var inst_83094 = (state_83117[12]);var inst_83098 = (state_83117[2]);var inst_83099 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_83094);var state_83117__$1 = (function (){var statearr_83155 = state_83117;(statearr_83155[18] = inst_83098);
return statearr_83155;
})();var statearr_83156_83191 = state_83117__$1;(statearr_83156_83191[2] = inst_83099);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83117__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83118 === 24))
{var inst_83046 = (state_83117[7]);var inst_83096 = (state_83117[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83117,23,Object,null,22);var inst_83103 = cljs.core.async.muxch_STAR_.call(null,inst_83096);var state_83117__$1 = state_83117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83117__$1,25,inst_83103,inst_83046);
} else
{if((state_val_83118 === 25))
{var inst_83105 = (state_83117[2]);var state_83117__$1 = state_83117;var statearr_83157_83192 = state_83117__$1;(statearr_83157_83192[2] = inst_83105);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83117__$1);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83161 = (new Array(19));(statearr_83161[0] = state_machine__16760__auto__);
(statearr_83161[1] = 1);
return statearr_83161;
});
var state_machine__16760__auto____1 = (function (state_83117){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83117);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83162){if((e83162 instanceof Object))
{var ex__16763__auto__ = e83162;var statearr_83163_83193 = state_83117;(statearr_83163_83193[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83194 = state_83117;
state_83117 = G__83194;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83117){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83164 = f__16830__auto__.call(null);(statearr_83164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83165);
return statearr_83164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
,cljs.core.range.call(null,cnt));var c__16829__auto___83331 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83301){var state_val_83302 = (state_83301[1]);if((state_val_83302 === 1))
{var state_83301__$1 = state_83301;var statearr_83303_83332 = state_83301__$1;(statearr_83303_83332[2] = null);
(statearr_83303_83332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 2))
{var inst_83264 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_83265 = 0;var state_83301__$1 = (function (){var statearr_83304 = state_83301;(statearr_83304[7] = inst_83264);
(statearr_83304[8] = inst_83265);
return statearr_83304;
})();var statearr_83305_83333 = state_83301__$1;(statearr_83305_83333[2] = null);
(statearr_83305_83333[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 3))
{var inst_83299 = (state_83301[2]);var state_83301__$1 = state_83301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83301__$1,inst_83299);
} else
{if((state_val_83302 === 4))
{var inst_83265 = (state_83301[8]);var inst_83267 = (inst_83265 < cnt);var state_83301__$1 = state_83301;if(cljs.core.truth_(inst_83267))
{var statearr_83306_83334 = state_83301__$1;(statearr_83306_83334[1] = 6);
} else
{var statearr_83307_83335 = state_83301__$1;(statearr_83307_83335[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 5))
{var inst_83285 = (state_83301[2]);var state_83301__$1 = (function (){var statearr_83308 = state_83301;(statearr_83308[9] = inst_83285);
return statearr_83308;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83301__$1,12,dchan);
} else
{if((state_val_83302 === 6))
{var state_83301__$1 = state_83301;var statearr_83309_83336 = state_83301__$1;(statearr_83309_83336[2] = null);
(statearr_83309_83336[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 7))
{var state_83301__$1 = state_83301;var statearr_83310_83337 = state_83301__$1;(statearr_83310_83337[2] = null);
(statearr_83310_83337[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 8))
{var inst_83283 = (state_83301[2]);var state_83301__$1 = state_83301;var statearr_83311_83338 = state_83301__$1;(statearr_83311_83338[2] = inst_83283);
(statearr_83311_83338[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 9))
{var inst_83265 = (state_83301[8]);var inst_83278 = (state_83301[2]);var inst_83279 = (inst_83265 + 1);var inst_83265__$1 = inst_83279;var state_83301__$1 = (function (){var statearr_83312 = state_83301;(statearr_83312[10] = inst_83278);
(statearr_83312[8] = inst_83265__$1);
return statearr_83312;
})();var statearr_83313_83339 = state_83301__$1;(statearr_83313_83339[2] = null);
(statearr_83313_83339[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 10))
{var inst_83269 = (state_83301[2]);var inst_83270 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_83301__$1 = (function (){var statearr_83314 = state_83301;(statearr_83314[11] = inst_83269);
return statearr_83314;
})();var statearr_83315_83340 = state_83301__$1;(statearr_83315_83340[2] = inst_83270);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83301__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 11))
{var inst_83265 = (state_83301[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83301,10,Object,null,9);var inst_83274 = chs__$1.call(null,inst_83265);var inst_83275 = done.call(null,inst_83265);var inst_83276 = cljs.core.async.take_BANG_.call(null,inst_83274,inst_83275);var state_83301__$1 = state_83301;var statearr_83316_83341 = state_83301__$1;(statearr_83316_83341[2] = inst_83276);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83301__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 12))
{var inst_83287 = (state_83301[12]);var inst_83287__$1 = (state_83301[2]);var inst_83288 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_83287__$1);var state_83301__$1 = (function (){var statearr_83317 = state_83301;(statearr_83317[12] = inst_83287__$1);
return statearr_83317;
})();if(cljs.core.truth_(inst_83288))
{var statearr_83318_83342 = state_83301__$1;(statearr_83318_83342[1] = 13);
} else
{var statearr_83319_83343 = state_83301__$1;(statearr_83319_83343[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 13))
{var inst_83290 = cljs.core.async.close_BANG_.call(null,out);var state_83301__$1 = state_83301;var statearr_83320_83344 = state_83301__$1;(statearr_83320_83344[2] = inst_83290);
(statearr_83320_83344[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 14))
{var inst_83287 = (state_83301[12]);var inst_83292 = cljs.core.apply.call(null,f,inst_83287);var state_83301__$1 = state_83301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83301__$1,16,out,inst_83292);
} else
{if((state_val_83302 === 15))
{var inst_83297 = (state_83301[2]);var state_83301__$1 = state_83301;var statearr_83321_83345 = state_83301__$1;(statearr_83321_83345[2] = inst_83297);
(statearr_83321_83345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83302 === 16))
{var inst_83294 = (state_83301[2]);var state_83301__$1 = (function (){var statearr_83322 = state_83301;(statearr_83322[13] = inst_83294);
return statearr_83322;
})();var statearr_83323_83346 = state_83301__$1;(statearr_83323_83346[2] = null);
(statearr_83323_83346[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83327 = (new Array(14));(statearr_83327[0] = state_machine__16760__auto__);
(statearr_83327[1] = 1);
return statearr_83327;
});
var state_machine__16760__auto____1 = (function (state_83301){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83301);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83328){if((e83328 instanceof Object))
{var ex__16763__auto__ = e83328;var statearr_83329_83347 = state_83301;(statearr_83329_83347[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83348 = state_83301;
state_83301 = G__83348;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83301){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83330 = f__16830__auto__.call(null);(statearr_83330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83331);
return statearr_83330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___83456 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83432){var state_val_83433 = (state_83432[1]);if((state_val_83433 === 1))
{var inst_83403 = cljs.core.vec.call(null,chs);var inst_83404 = inst_83403;var state_83432__$1 = (function (){var statearr_83434 = state_83432;(statearr_83434[7] = inst_83404);
return statearr_83434;
})();var statearr_83435_83457 = state_83432__$1;(statearr_83435_83457[2] = null);
(statearr_83435_83457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 2))
{var inst_83404 = (state_83432[7]);var inst_83406 = cljs.core.count.call(null,inst_83404);var inst_83407 = (inst_83406 > 0);var state_83432__$1 = state_83432;if(cljs.core.truth_(inst_83407))
{var statearr_83436_83458 = state_83432__$1;(statearr_83436_83458[1] = 4);
} else
{var statearr_83437_83459 = state_83432__$1;(statearr_83437_83459[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 3))
{var inst_83430 = (state_83432[2]);var state_83432__$1 = state_83432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83432__$1,inst_83430);
} else
{if((state_val_83433 === 4))
{var inst_83404 = (state_83432[7]);var state_83432__$1 = state_83432;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_83432__$1,7,inst_83404);
} else
{if((state_val_83433 === 5))
{var inst_83426 = cljs.core.async.close_BANG_.call(null,out);var state_83432__$1 = state_83432;var statearr_83438_83460 = state_83432__$1;(statearr_83438_83460[2] = inst_83426);
(statearr_83438_83460[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 6))
{var inst_83428 = (state_83432[2]);var state_83432__$1 = state_83432;var statearr_83439_83461 = state_83432__$1;(statearr_83439_83461[2] = inst_83428);
(statearr_83439_83461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 7))
{var inst_83412 = (state_83432[8]);var inst_83411 = (state_83432[9]);var inst_83411__$1 = (state_83432[2]);var inst_83412__$1 = cljs.core.nth.call(null,inst_83411__$1,0,null);var inst_83413 = cljs.core.nth.call(null,inst_83411__$1,1,null);var inst_83414 = (inst_83412__$1 == null);var state_83432__$1 = (function (){var statearr_83440 = state_83432;(statearr_83440[8] = inst_83412__$1);
(statearr_83440[9] = inst_83411__$1);
(statearr_83440[10] = inst_83413);
return statearr_83440;
})();if(cljs.core.truth_(inst_83414))
{var statearr_83441_83462 = state_83432__$1;(statearr_83441_83462[1] = 8);
} else
{var statearr_83442_83463 = state_83432__$1;(statearr_83442_83463[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 8))
{var inst_83404 = (state_83432[7]);var inst_83412 = (state_83432[8]);var inst_83411 = (state_83432[9]);var inst_83413 = (state_83432[10]);var inst_83416 = (function (){var c = inst_83413;var v = inst_83412;var vec__83409 = inst_83411;var cs = inst_83404;return ((function (c,v,vec__83409,cs,inst_83404,inst_83412,inst_83411,inst_83413,state_val_83433){
return (function (p1__83349_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__83349_SHARP_);
});
;})(c,v,vec__83409,cs,inst_83404,inst_83412,inst_83411,inst_83413,state_val_83433))
})();var inst_83417 = cljs.core.filterv.call(null,inst_83416,inst_83404);var inst_83404__$1 = inst_83417;var state_83432__$1 = (function (){var statearr_83443 = state_83432;(statearr_83443[7] = inst_83404__$1);
return statearr_83443;
})();var statearr_83444_83464 = state_83432__$1;(statearr_83444_83464[2] = null);
(statearr_83444_83464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 9))
{var inst_83412 = (state_83432[8]);var state_83432__$1 = state_83432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83432__$1,11,out,inst_83412);
} else
{if((state_val_83433 === 10))
{var inst_83424 = (state_83432[2]);var state_83432__$1 = state_83432;var statearr_83446_83465 = state_83432__$1;(statearr_83446_83465[2] = inst_83424);
(statearr_83446_83465[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83433 === 11))
{var inst_83404 = (state_83432[7]);var inst_83421 = (state_83432[2]);var tmp83445 = inst_83404;var inst_83404__$1 = tmp83445;var state_83432__$1 = (function (){var statearr_83447 = state_83432;(statearr_83447[7] = inst_83404__$1);
(statearr_83447[11] = inst_83421);
return statearr_83447;
})();var statearr_83448_83466 = state_83432__$1;(statearr_83448_83466[2] = null);
(statearr_83448_83466[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83452 = (new Array(12));(statearr_83452[0] = state_machine__16760__auto__);
(statearr_83452[1] = 1);
return statearr_83452;
});
var state_machine__16760__auto____1 = (function (state_83432){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83432);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83453){if((e83453 instanceof Object))
{var ex__16763__auto__ = e83453;var statearr_83454_83467 = state_83432;(statearr_83454_83467[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83468 = state_83432;
state_83432 = G__83468;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83432){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83455 = f__16830__auto__.call(null);(statearr_83455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83456);
return statearr_83455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___83561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83538){var state_val_83539 = (state_83538[1]);if((state_val_83539 === 1))
{var inst_83515 = 0;var state_83538__$1 = (function (){var statearr_83540 = state_83538;(statearr_83540[7] = inst_83515);
return statearr_83540;
})();var statearr_83541_83562 = state_83538__$1;(statearr_83541_83562[2] = null);
(statearr_83541_83562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 2))
{var inst_83515 = (state_83538[7]);var inst_83517 = (inst_83515 < n);var state_83538__$1 = state_83538;if(cljs.core.truth_(inst_83517))
{var statearr_83542_83563 = state_83538__$1;(statearr_83542_83563[1] = 4);
} else
{var statearr_83543_83564 = state_83538__$1;(statearr_83543_83564[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 3))
{var inst_83535 = (state_83538[2]);var inst_83536 = cljs.core.async.close_BANG_.call(null,out);var state_83538__$1 = (function (){var statearr_83544 = state_83538;(statearr_83544[8] = inst_83535);
return statearr_83544;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83538__$1,inst_83536);
} else
{if((state_val_83539 === 4))
{var state_83538__$1 = state_83538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83538__$1,7,ch);
} else
{if((state_val_83539 === 5))
{var state_83538__$1 = state_83538;var statearr_83545_83565 = state_83538__$1;(statearr_83545_83565[2] = null);
(statearr_83545_83565[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 6))
{var inst_83533 = (state_83538[2]);var state_83538__$1 = state_83538;var statearr_83546_83566 = state_83538__$1;(statearr_83546_83566[2] = inst_83533);
(statearr_83546_83566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 7))
{var inst_83520 = (state_83538[9]);var inst_83520__$1 = (state_83538[2]);var inst_83521 = (inst_83520__$1 == null);var inst_83522 = cljs.core.not.call(null,inst_83521);var state_83538__$1 = (function (){var statearr_83547 = state_83538;(statearr_83547[9] = inst_83520__$1);
return statearr_83547;
})();if(inst_83522)
{var statearr_83548_83567 = state_83538__$1;(statearr_83548_83567[1] = 8);
} else
{var statearr_83549_83568 = state_83538__$1;(statearr_83549_83568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 8))
{var inst_83520 = (state_83538[9]);var state_83538__$1 = state_83538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83538__$1,11,out,inst_83520);
} else
{if((state_val_83539 === 9))
{var state_83538__$1 = state_83538;var statearr_83550_83569 = state_83538__$1;(statearr_83550_83569[2] = null);
(statearr_83550_83569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 10))
{var inst_83530 = (state_83538[2]);var state_83538__$1 = state_83538;var statearr_83551_83570 = state_83538__$1;(statearr_83551_83570[2] = inst_83530);
(statearr_83551_83570[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83539 === 11))
{var inst_83515 = (state_83538[7]);var inst_83525 = (state_83538[2]);var inst_83526 = (inst_83515 + 1);var inst_83515__$1 = inst_83526;var state_83538__$1 = (function (){var statearr_83552 = state_83538;(statearr_83552[10] = inst_83525);
(statearr_83552[7] = inst_83515__$1);
return statearr_83552;
})();var statearr_83553_83571 = state_83538__$1;(statearr_83553_83571[2] = null);
(statearr_83553_83571[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83557 = (new Array(11));(statearr_83557[0] = state_machine__16760__auto__);
(statearr_83557[1] = 1);
return statearr_83557;
});
var state_machine__16760__auto____1 = (function (state_83538){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83538);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83558){if((e83558 instanceof Object))
{var ex__16763__auto__ = e83558;var statearr_83559_83572 = state_83538;(statearr_83559_83572[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83573 = state_83538;
state_83538 = G__83573;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83538){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83560 = f__16830__auto__.call(null);(statearr_83560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83561);
return statearr_83560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___83670 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83645){var state_val_83646 = (state_83645[1]);if((state_val_83646 === 1))
{var inst_83622 = null;var state_83645__$1 = (function (){var statearr_83647 = state_83645;(statearr_83647[7] = inst_83622);
return statearr_83647;
})();var statearr_83648_83671 = state_83645__$1;(statearr_83648_83671[2] = null);
(statearr_83648_83671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 2))
{var state_83645__$1 = state_83645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83645__$1,4,ch);
} else
{if((state_val_83646 === 3))
{var inst_83642 = (state_83645[2]);var inst_83643 = cljs.core.async.close_BANG_.call(null,out);var state_83645__$1 = (function (){var statearr_83649 = state_83645;(statearr_83649[8] = inst_83642);
return statearr_83649;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83645__$1,inst_83643);
} else
{if((state_val_83646 === 4))
{var inst_83625 = (state_83645[9]);var inst_83625__$1 = (state_83645[2]);var inst_83626 = (inst_83625__$1 == null);var inst_83627 = cljs.core.not.call(null,inst_83626);var state_83645__$1 = (function (){var statearr_83650 = state_83645;(statearr_83650[9] = inst_83625__$1);
return statearr_83650;
})();if(inst_83627)
{var statearr_83651_83672 = state_83645__$1;(statearr_83651_83672[1] = 5);
} else
{var statearr_83652_83673 = state_83645__$1;(statearr_83652_83673[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 5))
{var inst_83622 = (state_83645[7]);var inst_83625 = (state_83645[9]);var inst_83629 = cljs.core._EQ_.call(null,inst_83625,inst_83622);var state_83645__$1 = state_83645;if(inst_83629)
{var statearr_83653_83674 = state_83645__$1;(statearr_83653_83674[1] = 8);
} else
{var statearr_83654_83675 = state_83645__$1;(statearr_83654_83675[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 6))
{var state_83645__$1 = state_83645;var statearr_83656_83676 = state_83645__$1;(statearr_83656_83676[2] = null);
(statearr_83656_83676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 7))
{var inst_83640 = (state_83645[2]);var state_83645__$1 = state_83645;var statearr_83657_83677 = state_83645__$1;(statearr_83657_83677[2] = inst_83640);
(statearr_83657_83677[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 8))
{var inst_83622 = (state_83645[7]);var tmp83655 = inst_83622;var inst_83622__$1 = tmp83655;var state_83645__$1 = (function (){var statearr_83658 = state_83645;(statearr_83658[7] = inst_83622__$1);
return statearr_83658;
})();var statearr_83659_83678 = state_83645__$1;(statearr_83659_83678[2] = null);
(statearr_83659_83678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 9))
{var inst_83625 = (state_83645[9]);var state_83645__$1 = state_83645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83645__$1,11,out,inst_83625);
} else
{if((state_val_83646 === 10))
{var inst_83637 = (state_83645[2]);var state_83645__$1 = state_83645;var statearr_83660_83679 = state_83645__$1;(statearr_83660_83679[2] = inst_83637);
(statearr_83660_83679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83646 === 11))
{var inst_83625 = (state_83645[9]);var inst_83634 = (state_83645[2]);var inst_83622 = inst_83625;var state_83645__$1 = (function (){var statearr_83661 = state_83645;(statearr_83661[7] = inst_83622);
(statearr_83661[10] = inst_83634);
return statearr_83661;
})();var statearr_83662_83680 = state_83645__$1;(statearr_83662_83680[2] = null);
(statearr_83662_83680[1] = 2);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83666 = (new Array(11));(statearr_83666[0] = state_machine__16760__auto__);
(statearr_83666[1] = 1);
return statearr_83666;
});
var state_machine__16760__auto____1 = (function (state_83645){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83645);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83667){if((e83667 instanceof Object))
{var ex__16763__auto__ = e83667;var statearr_83668_83681 = state_83645;(statearr_83668_83681[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83682 = state_83645;
state_83645 = G__83682;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83645){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83669 = f__16830__auto__.call(null);(statearr_83669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83670);
return statearr_83669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___83817 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83787){var state_val_83788 = (state_83787[1]);if((state_val_83788 === 1))
{var inst_83750 = (new Array(n));var inst_83751 = inst_83750;var inst_83752 = 0;var state_83787__$1 = (function (){var statearr_83789 = state_83787;(statearr_83789[7] = inst_83751);
(statearr_83789[8] = inst_83752);
return statearr_83789;
})();var statearr_83790_83818 = state_83787__$1;(statearr_83790_83818[2] = null);
(statearr_83790_83818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 2))
{var state_83787__$1 = state_83787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83787__$1,4,ch);
} else
{if((state_val_83788 === 3))
{var inst_83785 = (state_83787[2]);var state_83787__$1 = state_83787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83787__$1,inst_83785);
} else
{if((state_val_83788 === 4))
{var inst_83755 = (state_83787[9]);var inst_83755__$1 = (state_83787[2]);var inst_83756 = (inst_83755__$1 == null);var inst_83757 = cljs.core.not.call(null,inst_83756);var state_83787__$1 = (function (){var statearr_83791 = state_83787;(statearr_83791[9] = inst_83755__$1);
return statearr_83791;
})();if(inst_83757)
{var statearr_83792_83819 = state_83787__$1;(statearr_83792_83819[1] = 5);
} else
{var statearr_83793_83820 = state_83787__$1;(statearr_83793_83820[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 5))
{var inst_83751 = (state_83787[7]);var inst_83752 = (state_83787[8]);var inst_83755 = (state_83787[9]);var inst_83760 = (state_83787[10]);var inst_83759 = (inst_83751[inst_83752] = inst_83755);var inst_83760__$1 = (inst_83752 + 1);var inst_83761 = (inst_83760__$1 < n);var state_83787__$1 = (function (){var statearr_83794 = state_83787;(statearr_83794[11] = inst_83759);
(statearr_83794[10] = inst_83760__$1);
return statearr_83794;
})();if(cljs.core.truth_(inst_83761))
{var statearr_83795_83821 = state_83787__$1;(statearr_83795_83821[1] = 8);
} else
{var statearr_83796_83822 = state_83787__$1;(statearr_83796_83822[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 6))
{var inst_83752 = (state_83787[8]);var inst_83773 = (inst_83752 > 0);var state_83787__$1 = state_83787;if(cljs.core.truth_(inst_83773))
{var statearr_83798_83823 = state_83787__$1;(statearr_83798_83823[1] = 12);
} else
{var statearr_83799_83824 = state_83787__$1;(statearr_83799_83824[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 7))
{var inst_83783 = (state_83787[2]);var state_83787__$1 = state_83787;var statearr_83800_83825 = state_83787__$1;(statearr_83800_83825[2] = inst_83783);
(statearr_83800_83825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 8))
{var inst_83751 = (state_83787[7]);var inst_83760 = (state_83787[10]);var tmp83797 = inst_83751;var inst_83751__$1 = tmp83797;var inst_83752 = inst_83760;var state_83787__$1 = (function (){var statearr_83801 = state_83787;(statearr_83801[7] = inst_83751__$1);
(statearr_83801[8] = inst_83752);
return statearr_83801;
})();var statearr_83802_83826 = state_83787__$1;(statearr_83802_83826[2] = null);
(statearr_83802_83826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 9))
{var inst_83751 = (state_83787[7]);var inst_83765 = cljs.core.vec.call(null,inst_83751);var state_83787__$1 = state_83787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83787__$1,11,out,inst_83765);
} else
{if((state_val_83788 === 10))
{var inst_83771 = (state_83787[2]);var state_83787__$1 = state_83787;var statearr_83803_83827 = state_83787__$1;(statearr_83803_83827[2] = inst_83771);
(statearr_83803_83827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 11))
{var inst_83767 = (state_83787[2]);var inst_83768 = (new Array(n));var inst_83751 = inst_83768;var inst_83752 = 0;var state_83787__$1 = (function (){var statearr_83804 = state_83787;(statearr_83804[12] = inst_83767);
(statearr_83804[7] = inst_83751);
(statearr_83804[8] = inst_83752);
return statearr_83804;
})();var statearr_83805_83828 = state_83787__$1;(statearr_83805_83828[2] = null);
(statearr_83805_83828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 12))
{var inst_83751 = (state_83787[7]);var inst_83775 = cljs.core.vec.call(null,inst_83751);var state_83787__$1 = state_83787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83787__$1,15,out,inst_83775);
} else
{if((state_val_83788 === 13))
{var state_83787__$1 = state_83787;var statearr_83806_83829 = state_83787__$1;(statearr_83806_83829[2] = null);
(statearr_83806_83829[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 14))
{var inst_83780 = (state_83787[2]);var inst_83781 = cljs.core.async.close_BANG_.call(null,out);var state_83787__$1 = (function (){var statearr_83807 = state_83787;(statearr_83807[13] = inst_83780);
return statearr_83807;
})();var statearr_83808_83830 = state_83787__$1;(statearr_83808_83830[2] = inst_83781);
(statearr_83808_83830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83788 === 15))
{var inst_83777 = (state_83787[2]);var state_83787__$1 = state_83787;var statearr_83809_83831 = state_83787__$1;(statearr_83809_83831[2] = inst_83777);
(statearr_83809_83831[1] = 14);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83813 = (new Array(14));(statearr_83813[0] = state_machine__16760__auto__);
(statearr_83813[1] = 1);
return statearr_83813;
});
var state_machine__16760__auto____1 = (function (state_83787){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83787);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83814){if((e83814 instanceof Object))
{var ex__16763__auto__ = e83814;var statearr_83815_83832 = state_83787;(statearr_83815_83832[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83833 = state_83787;
state_83787 = G__83833;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83787){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83816 = f__16830__auto__.call(null);(statearr_83816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83817);
return statearr_83816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16829__auto___83976 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_83946){var state_val_83947 = (state_83946[1]);if((state_val_83947 === 1))
{var inst_83905 = (new Array(0));var inst_83906 = inst_83905;var inst_83907 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_83946__$1 = (function (){var statearr_83948 = state_83946;(statearr_83948[7] = inst_83907);
(statearr_83948[8] = inst_83906);
return statearr_83948;
})();var statearr_83949_83977 = state_83946__$1;(statearr_83949_83977[2] = null);
(statearr_83949_83977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 2))
{var state_83946__$1 = state_83946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83946__$1,4,ch);
} else
{if((state_val_83947 === 3))
{var inst_83944 = (state_83946[2]);var state_83946__$1 = state_83946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83946__$1,inst_83944);
} else
{if((state_val_83947 === 4))
{var inst_83910 = (state_83946[9]);var inst_83910__$1 = (state_83946[2]);var inst_83911 = (inst_83910__$1 == null);var inst_83912 = cljs.core.not.call(null,inst_83911);var state_83946__$1 = (function (){var statearr_83950 = state_83946;(statearr_83950[9] = inst_83910__$1);
return statearr_83950;
})();if(inst_83912)
{var statearr_83951_83978 = state_83946__$1;(statearr_83951_83978[1] = 5);
} else
{var statearr_83952_83979 = state_83946__$1;(statearr_83952_83979[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 5))
{var inst_83914 = (state_83946[10]);var inst_83907 = (state_83946[7]);var inst_83910 = (state_83946[9]);var inst_83914__$1 = f.call(null,inst_83910);var inst_83915 = cljs.core._EQ_.call(null,inst_83914__$1,inst_83907);var inst_83916 = cljs.core.keyword_identical_QMARK_.call(null,inst_83907,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_83917 = (inst_83915) || (inst_83916);var state_83946__$1 = (function (){var statearr_83953 = state_83946;(statearr_83953[10] = inst_83914__$1);
return statearr_83953;
})();if(cljs.core.truth_(inst_83917))
{var statearr_83954_83980 = state_83946__$1;(statearr_83954_83980[1] = 8);
} else
{var statearr_83955_83981 = state_83946__$1;(statearr_83955_83981[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 6))
{var inst_83906 = (state_83946[8]);var inst_83931 = inst_83906.length;var inst_83932 = (inst_83931 > 0);var state_83946__$1 = state_83946;if(cljs.core.truth_(inst_83932))
{var statearr_83957_83982 = state_83946__$1;(statearr_83957_83982[1] = 12);
} else
{var statearr_83958_83983 = state_83946__$1;(statearr_83958_83983[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 7))
{var inst_83942 = (state_83946[2]);var state_83946__$1 = state_83946;var statearr_83959_83984 = state_83946__$1;(statearr_83959_83984[2] = inst_83942);
(statearr_83959_83984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 8))
{var inst_83914 = (state_83946[10]);var inst_83906 = (state_83946[8]);var inst_83910 = (state_83946[9]);var inst_83919 = inst_83906.push(inst_83910);var tmp83956 = inst_83906;var inst_83906__$1 = tmp83956;var inst_83907 = inst_83914;var state_83946__$1 = (function (){var statearr_83960 = state_83946;(statearr_83960[11] = inst_83919);
(statearr_83960[7] = inst_83907);
(statearr_83960[8] = inst_83906__$1);
return statearr_83960;
})();var statearr_83961_83985 = state_83946__$1;(statearr_83961_83985[2] = null);
(statearr_83961_83985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 9))
{var inst_83906 = (state_83946[8]);var inst_83922 = cljs.core.vec.call(null,inst_83906);var state_83946__$1 = state_83946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83946__$1,11,out,inst_83922);
} else
{if((state_val_83947 === 10))
{var inst_83929 = (state_83946[2]);var state_83946__$1 = state_83946;var statearr_83962_83986 = state_83946__$1;(statearr_83962_83986[2] = inst_83929);
(statearr_83962_83986[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 11))
{var inst_83914 = (state_83946[10]);var inst_83910 = (state_83946[9]);var inst_83924 = (state_83946[2]);var inst_83925 = (new Array(0));var inst_83926 = inst_83925.push(inst_83910);var inst_83906 = inst_83925;var inst_83907 = inst_83914;var state_83946__$1 = (function (){var statearr_83963 = state_83946;(statearr_83963[12] = inst_83924);
(statearr_83963[13] = inst_83926);
(statearr_83963[7] = inst_83907);
(statearr_83963[8] = inst_83906);
return statearr_83963;
})();var statearr_83964_83987 = state_83946__$1;(statearr_83964_83987[2] = null);
(statearr_83964_83987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 12))
{var inst_83906 = (state_83946[8]);var inst_83934 = cljs.core.vec.call(null,inst_83906);var state_83946__$1 = state_83946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83946__$1,15,out,inst_83934);
} else
{if((state_val_83947 === 13))
{var state_83946__$1 = state_83946;var statearr_83965_83988 = state_83946__$1;(statearr_83965_83988[2] = null);
(statearr_83965_83988[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 14))
{var inst_83939 = (state_83946[2]);var inst_83940 = cljs.core.async.close_BANG_.call(null,out);var state_83946__$1 = (function (){var statearr_83966 = state_83946;(statearr_83966[14] = inst_83939);
return statearr_83966;
})();var statearr_83967_83989 = state_83946__$1;(statearr_83967_83989[2] = inst_83940);
(statearr_83967_83989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83947 === 15))
{var inst_83936 = (state_83946[2]);var state_83946__$1 = state_83946;var statearr_83968_83990 = state_83946__$1;(statearr_83968_83990[2] = inst_83936);
(statearr_83968_83990[1] = 14);
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
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_83972 = (new Array(15));(statearr_83972[0] = state_machine__16760__auto__);
(statearr_83972[1] = 1);
return statearr_83972;
});
var state_machine__16760__auto____1 = (function (state_83946){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_83946);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e83973){if((e83973 instanceof Object))
{var ex__16763__auto__ = e83973;var statearr_83974_83991 = state_83946;(statearr_83974_83991[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83992 = state_83946;
state_83946 = G__83992;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_83946){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_83946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_83975 = f__16830__auto__.call(null);(statearr_83975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___83976);
return statearr_83975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
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