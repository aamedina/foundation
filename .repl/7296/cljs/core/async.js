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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t42609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42609 = (function (f,fn_handler,meta42610){
this.f = f;
this.fn_handler = fn_handler;
this.meta42610 = meta42610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42609.cljs$lang$type = true;
cljs.core.async.t42609.cljs$lang$ctorStr = "cljs.core.async/t42609";
cljs.core.async.t42609.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42609");
});
cljs.core.async.t42609.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t42609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t42609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42611){var self__ = this;
var _42611__$1 = this;return self__.meta42610;
});
cljs.core.async.t42609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42611,meta42610__$1){var self__ = this;
var _42611__$1 = this;return (new cljs.core.async.t42609(self__.f,self__.fn_handler,meta42610__$1));
});
cljs.core.async.__GT_t42609 = (function __GT_t42609(f__$1,fn_handler__$1,meta42610){return (new cljs.core.async.t42609(f__$1,fn_handler__$1,meta42610));
});
}
return (new cljs.core.async.t42609(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__42613 = buff;if(G__42613)
{var bit__34921__auto__ = null;if(cljs.core.truth_((function (){var or__34295__auto__ = bit__34921__auto__;if(cljs.core.truth_(or__34295__auto__))
{return or__34295__auto__;
} else
{return G__42613.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__42613.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42613);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__42613);
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
{var val_42614 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_42614);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_42614);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__34283__auto__ = ret;if(cljs.core.truth_(and__34283__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__34283__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__35118__auto___42615 = n;var x_42616 = 0;while(true){
if((x_42616 < n__35118__auto___42615))
{(a[x_42616] = 0);
{
var G__42617 = (x_42616 + 1);
x_42616 = G__42617;
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
var G__42618 = (i + 1);
i = G__42618;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t42622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42622 = (function (flag,alt_flag,meta42623){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta42623 = meta42623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42622.cljs$lang$type = true;
cljs.core.async.t42622.cljs$lang$ctorStr = "cljs.core.async/t42622";
cljs.core.async.t42622.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42622");
});
cljs.core.async.t42622.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t42622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t42622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42624){var self__ = this;
var _42624__$1 = this;return self__.meta42623;
});
cljs.core.async.t42622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42624,meta42623__$1){var self__ = this;
var _42624__$1 = this;return (new cljs.core.async.t42622(self__.flag,self__.alt_flag,meta42623__$1));
});
cljs.core.async.__GT_t42622 = (function __GT_t42622(flag__$1,alt_flag__$1,meta42623){return (new cljs.core.async.t42622(flag__$1,alt_flag__$1,meta42623));
});
}
return (new cljs.core.async.t42622(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t42628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42628 = (function (cb,flag,alt_handler,meta42629){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta42629 = meta42629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42628.cljs$lang$type = true;
cljs.core.async.t42628.cljs$lang$ctorStr = "cljs.core.async/t42628";
cljs.core.async.t42628.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42628");
});
cljs.core.async.t42628.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t42628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t42628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42630){var self__ = this;
var _42630__$1 = this;return self__.meta42629;
});
cljs.core.async.t42628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42630,meta42629__$1){var self__ = this;
var _42630__$1 = this;return (new cljs.core.async.t42628(self__.cb,self__.flag,self__.alt_handler,meta42629__$1));
});
cljs.core.async.__GT_t42628 = (function __GT_t42628(cb__$1,flag__$1,alt_handler__$1,meta42629){return (new cljs.core.async.t42628(cb__$1,flag__$1,alt_handler__$1,meta42629));
});
}
return (new cljs.core.async.t42628(cb,flag,alt_handler,null));
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
return (function (p1__42631_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42631_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34295__auto__ = wport;if(cljs.core.truth_(or__34295__auto__))
{return or__34295__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__42632 = (i + 1);
i = G__42632;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__34295__auto__ = ret;if(cljs.core.truth_(or__34295__auto__))
{return or__34295__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__34283__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__34283__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__34283__auto__;
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
var alts_BANG___delegate = function (ports,p__42633){var map__42635 = p__42633;var map__42635__$1 = ((cljs.core.seq_QMARK_.call(null,map__42635))?cljs.core.apply.call(null,cljs.core.hash_map,map__42635):map__42635);var opts = map__42635__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__42633 = null;if (arguments.length > 1) {
  p__42633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__42633);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__42636){
var ports = cljs.core.first(arglist__42636);
var p__42633 = cljs.core.rest(arglist__42636);
return alts_BANG___delegate(ports,p__42633);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t42644 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42644 = (function (ch,f,map_LT_,meta42645){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42645 = meta42645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42644.cljs$lang$type = true;
cljs.core.async.t42644.cljs$lang$ctorStr = "cljs.core.async/t42644";
cljs.core.async.t42644.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42644");
});
cljs.core.async.t42644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t42644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t42647 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42647 = (function (fn1,_,meta42645,ch,f,map_LT_,meta42648){
this.fn1 = fn1;
this._ = _;
this.meta42645 = meta42645;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta42648 = meta42648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42647.cljs$lang$type = true;
cljs.core.async.t42647.cljs$lang$ctorStr = "cljs.core.async/t42647";
cljs.core.async.t42647.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42647");
});
cljs.core.async.t42647.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t42647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t42647.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t42647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__42637_SHARP_){return f1.call(null,(((p1__42637_SHARP_ == null))?null:self__.f.call(null,p1__42637_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t42647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42649){var self__ = this;
var _42649__$1 = this;return self__.meta42648;
});
cljs.core.async.t42647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42649,meta42648__$1){var self__ = this;
var _42649__$1 = this;return (new cljs.core.async.t42647(self__.fn1,self__._,self__.meta42645,self__.ch,self__.f,self__.map_LT_,meta42648__$1));
});
cljs.core.async.__GT_t42647 = (function __GT_t42647(fn1__$1,___$2,meta42645__$1,ch__$2,f__$2,map_LT___$2,meta42648){return (new cljs.core.async.t42647(fn1__$1,___$2,meta42645__$1,ch__$2,f__$2,map_LT___$2,meta42648));
});
}
return (new cljs.core.async.t42647(fn1,___$1,self__.meta42645,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__34283__auto__ = ret;if(cljs.core.truth_(and__34283__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__34283__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t42644.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42646){var self__ = this;
var _42646__$1 = this;return self__.meta42645;
});
cljs.core.async.t42644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42646,meta42645__$1){var self__ = this;
var _42646__$1 = this;return (new cljs.core.async.t42644(self__.ch,self__.f,self__.map_LT_,meta42645__$1));
});
cljs.core.async.__GT_t42644 = (function __GT_t42644(ch__$1,f__$1,map_LT___$1,meta42645){return (new cljs.core.async.t42644(ch__$1,f__$1,map_LT___$1,meta42645));
});
}
return (new cljs.core.async.t42644(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t42653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42653 = (function (ch,f,map_GT_,meta42654){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta42654 = meta42654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42653.cljs$lang$type = true;
cljs.core.async.t42653.cljs$lang$ctorStr = "cljs.core.async/t42653";
cljs.core.async.t42653.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42653");
});
cljs.core.async.t42653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t42653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t42653.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42655){var self__ = this;
var _42655__$1 = this;return self__.meta42654;
});
cljs.core.async.t42653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42655,meta42654__$1){var self__ = this;
var _42655__$1 = this;return (new cljs.core.async.t42653(self__.ch,self__.f,self__.map_GT_,meta42654__$1));
});
cljs.core.async.__GT_t42653 = (function __GT_t42653(ch__$1,f__$1,map_GT___$1,meta42654){return (new cljs.core.async.t42653(ch__$1,f__$1,map_GT___$1,meta42654));
});
}
return (new cljs.core.async.t42653(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t42659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42659 = (function (ch,p,filter_GT_,meta42660){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta42660 = meta42660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42659.cljs$lang$type = true;
cljs.core.async.t42659.cljs$lang$ctorStr = "cljs.core.async/t42659";
cljs.core.async.t42659.cljs$lang$ctorPrWriter = (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t42659");
});
cljs.core.async.t42659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t42659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t42659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t42659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t42659.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t42659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t42659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42661){var self__ = this;
var _42661__$1 = this;return self__.meta42660;
});
cljs.core.async.t42659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42661,meta42660__$1){var self__ = this;
var _42661__$1 = this;return (new cljs.core.async.t42659(self__.ch,self__.p,self__.filter_GT_,meta42660__$1));
});
cljs.core.async.__GT_t42659 = (function __GT_t42659(ch__$1,p__$1,filter_GT___$1,meta42660){return (new cljs.core.async.t42659(ch__$1,p__$1,filter_GT___$1,meta42660));
});
}
return (new cljs.core.async.t42659(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__40034__auto___42744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_42723){var state_val_42724 = (state_42723[1]);if((state_val_42724 === 1))
{var state_42723__$1 = state_42723;var statearr_42725_42745 = state_42723__$1;(statearr_42725_42745[2] = null);
(statearr_42725_42745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 2))
{var state_42723__$1 = state_42723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42723__$1,4,ch);
} else
{if((state_val_42724 === 3))
{var inst_42721 = (state_42723[2]);var state_42723__$1 = state_42723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42723__$1,inst_42721);
} else
{if((state_val_42724 === 4))
{var inst_42705 = (state_42723[7]);var inst_42705__$1 = (state_42723[2]);var inst_42706 = (inst_42705__$1 == null);var state_42723__$1 = (function (){var statearr_42726 = state_42723;(statearr_42726[7] = inst_42705__$1);
return statearr_42726;
})();if(cljs.core.truth_(inst_42706))
{var statearr_42727_42746 = state_42723__$1;(statearr_42727_42746[1] = 5);
} else
{var statearr_42728_42747 = state_42723__$1;(statearr_42728_42747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 5))
{var inst_42708 = cljs.core.async.close_BANG_.call(null,out);var state_42723__$1 = state_42723;var statearr_42729_42748 = state_42723__$1;(statearr_42729_42748[2] = inst_42708);
(statearr_42729_42748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 6))
{var inst_42705 = (state_42723[7]);var inst_42710 = p.call(null,inst_42705);var state_42723__$1 = state_42723;if(cljs.core.truth_(inst_42710))
{var statearr_42730_42749 = state_42723__$1;(statearr_42730_42749[1] = 8);
} else
{var statearr_42731_42750 = state_42723__$1;(statearr_42731_42750[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 7))
{var inst_42719 = (state_42723[2]);var state_42723__$1 = state_42723;var statearr_42732_42751 = state_42723__$1;(statearr_42732_42751[2] = inst_42719);
(statearr_42732_42751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 8))
{var inst_42705 = (state_42723[7]);var state_42723__$1 = state_42723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42723__$1,11,out,inst_42705);
} else
{if((state_val_42724 === 9))
{var state_42723__$1 = state_42723;var statearr_42733_42752 = state_42723__$1;(statearr_42733_42752[2] = null);
(statearr_42733_42752[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 10))
{var inst_42716 = (state_42723[2]);var state_42723__$1 = (function (){var statearr_42734 = state_42723;(statearr_42734[8] = inst_42716);
return statearr_42734;
})();var statearr_42735_42753 = state_42723__$1;(statearr_42735_42753[2] = null);
(statearr_42735_42753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42724 === 11))
{var inst_42713 = (state_42723[2]);var state_42723__$1 = state_42723;var statearr_42736_42754 = state_42723__$1;(statearr_42736_42754[2] = inst_42713);
(statearr_42736_42754[1] = 10);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_42740 = (new Array(9));(statearr_42740[0] = state_machine__39965__auto__);
(statearr_42740[1] = 1);
return statearr_42740;
});
var state_machine__39965__auto____1 = (function (state_42723){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_42723);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e42741){if((e42741 instanceof Object))
{var ex__39968__auto__ = e42741;var statearr_42742_42755 = state_42723;(statearr_42742_42755[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42756 = state_42723;
state_42723 = G__42756;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_42723){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_42723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_42743 = f__40035__auto__.call(null);(statearr_42743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___42744);
return statearr_42743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__40034__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_42908){var state_val_42909 = (state_42908[1]);if((state_val_42909 === 1))
{var state_42908__$1 = state_42908;var statearr_42910_42947 = state_42908__$1;(statearr_42910_42947[2] = null);
(statearr_42910_42947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 2))
{var state_42908__$1 = state_42908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42908__$1,4,in$);
} else
{if((state_val_42909 === 3))
{var inst_42906 = (state_42908[2]);var state_42908__$1 = state_42908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42908__$1,inst_42906);
} else
{if((state_val_42909 === 4))
{var inst_42854 = (state_42908[7]);var inst_42854__$1 = (state_42908[2]);var inst_42855 = (inst_42854__$1 == null);var state_42908__$1 = (function (){var statearr_42911 = state_42908;(statearr_42911[7] = inst_42854__$1);
return statearr_42911;
})();if(cljs.core.truth_(inst_42855))
{var statearr_42912_42948 = state_42908__$1;(statearr_42912_42948[1] = 5);
} else
{var statearr_42913_42949 = state_42908__$1;(statearr_42913_42949[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 5))
{var inst_42857 = cljs.core.async.close_BANG_.call(null,out);var state_42908__$1 = state_42908;var statearr_42914_42950 = state_42908__$1;(statearr_42914_42950[2] = inst_42857);
(statearr_42914_42950[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 6))
{var inst_42854 = (state_42908[7]);var inst_42859 = f.call(null,inst_42854);var inst_42864 = cljs.core.seq.call(null,inst_42859);var inst_42865 = inst_42864;var inst_42866 = null;var inst_42867 = 0;var inst_42868 = 0;var state_42908__$1 = (function (){var statearr_42915 = state_42908;(statearr_42915[8] = inst_42866);
(statearr_42915[9] = inst_42865);
(statearr_42915[10] = inst_42868);
(statearr_42915[11] = inst_42867);
return statearr_42915;
})();var statearr_42916_42951 = state_42908__$1;(statearr_42916_42951[2] = null);
(statearr_42916_42951[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 7))
{var inst_42904 = (state_42908[2]);var state_42908__$1 = state_42908;var statearr_42917_42952 = state_42908__$1;(statearr_42917_42952[2] = inst_42904);
(statearr_42917_42952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 8))
{var inst_42868 = (state_42908[10]);var inst_42867 = (state_42908[11]);var inst_42870 = (inst_42868 < inst_42867);var inst_42871 = inst_42870;var state_42908__$1 = state_42908;if(cljs.core.truth_(inst_42871))
{var statearr_42918_42953 = state_42908__$1;(statearr_42918_42953[1] = 10);
} else
{var statearr_42919_42954 = state_42908__$1;(statearr_42919_42954[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 9))
{var inst_42901 = (state_42908[2]);var state_42908__$1 = (function (){var statearr_42920 = state_42908;(statearr_42920[12] = inst_42901);
return statearr_42920;
})();var statearr_42921_42955 = state_42908__$1;(statearr_42921_42955[2] = null);
(statearr_42921_42955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 10))
{var inst_42866 = (state_42908[8]);var inst_42868 = (state_42908[10]);var inst_42873 = cljs.core._nth.call(null,inst_42866,inst_42868);var state_42908__$1 = state_42908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42908__$1,13,out,inst_42873);
} else
{if((state_val_42909 === 11))
{var inst_42879 = (state_42908[13]);var inst_42865 = (state_42908[9]);var inst_42879__$1 = cljs.core.seq.call(null,inst_42865);var state_42908__$1 = (function (){var statearr_42925 = state_42908;(statearr_42925[13] = inst_42879__$1);
return statearr_42925;
})();if(inst_42879__$1)
{var statearr_42926_42956 = state_42908__$1;(statearr_42926_42956[1] = 14);
} else
{var statearr_42927_42957 = state_42908__$1;(statearr_42927_42957[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 12))
{var inst_42899 = (state_42908[2]);var state_42908__$1 = state_42908;var statearr_42928_42958 = state_42908__$1;(statearr_42928_42958[2] = inst_42899);
(statearr_42928_42958[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 13))
{var inst_42866 = (state_42908[8]);var inst_42865 = (state_42908[9]);var inst_42868 = (state_42908[10]);var inst_42867 = (state_42908[11]);var inst_42875 = (state_42908[2]);var inst_42876 = (inst_42868 + 1);var tmp42922 = inst_42866;var tmp42923 = inst_42865;var tmp42924 = inst_42867;var inst_42865__$1 = tmp42923;var inst_42866__$1 = tmp42922;var inst_42867__$1 = tmp42924;var inst_42868__$1 = inst_42876;var state_42908__$1 = (function (){var statearr_42929 = state_42908;(statearr_42929[8] = inst_42866__$1);
(statearr_42929[9] = inst_42865__$1);
(statearr_42929[10] = inst_42868__$1);
(statearr_42929[11] = inst_42867__$1);
(statearr_42929[14] = inst_42875);
return statearr_42929;
})();var statearr_42930_42959 = state_42908__$1;(statearr_42930_42959[2] = null);
(statearr_42930_42959[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 14))
{var inst_42879 = (state_42908[13]);var inst_42881 = cljs.core.chunked_seq_QMARK_.call(null,inst_42879);var state_42908__$1 = state_42908;if(inst_42881)
{var statearr_42931_42960 = state_42908__$1;(statearr_42931_42960[1] = 17);
} else
{var statearr_42932_42961 = state_42908__$1;(statearr_42932_42961[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 15))
{var state_42908__$1 = state_42908;var statearr_42933_42962 = state_42908__$1;(statearr_42933_42962[2] = null);
(statearr_42933_42962[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 16))
{var inst_42897 = (state_42908[2]);var state_42908__$1 = state_42908;var statearr_42934_42963 = state_42908__$1;(statearr_42934_42963[2] = inst_42897);
(statearr_42934_42963[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 17))
{var inst_42879 = (state_42908[13]);var inst_42883 = cljs.core.chunk_first.call(null,inst_42879);var inst_42884 = cljs.core.chunk_rest.call(null,inst_42879);var inst_42885 = cljs.core.count.call(null,inst_42883);var inst_42865 = inst_42884;var inst_42866 = inst_42883;var inst_42867 = inst_42885;var inst_42868 = 0;var state_42908__$1 = (function (){var statearr_42935 = state_42908;(statearr_42935[8] = inst_42866);
(statearr_42935[9] = inst_42865);
(statearr_42935[10] = inst_42868);
(statearr_42935[11] = inst_42867);
return statearr_42935;
})();var statearr_42936_42964 = state_42908__$1;(statearr_42936_42964[2] = null);
(statearr_42936_42964[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 18))
{var inst_42879 = (state_42908[13]);var inst_42888 = cljs.core.first.call(null,inst_42879);var state_42908__$1 = state_42908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42908__$1,20,out,inst_42888);
} else
{if((state_val_42909 === 19))
{var inst_42894 = (state_42908[2]);var state_42908__$1 = state_42908;var statearr_42937_42965 = state_42908__$1;(statearr_42937_42965[2] = inst_42894);
(statearr_42937_42965[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42909 === 20))
{var inst_42879 = (state_42908[13]);var inst_42890 = (state_42908[2]);var inst_42891 = cljs.core.next.call(null,inst_42879);var inst_42865 = inst_42891;var inst_42866 = null;var inst_42867 = 0;var inst_42868 = 0;var state_42908__$1 = (function (){var statearr_42938 = state_42908;(statearr_42938[15] = inst_42890);
(statearr_42938[8] = inst_42866);
(statearr_42938[9] = inst_42865);
(statearr_42938[10] = inst_42868);
(statearr_42938[11] = inst_42867);
return statearr_42938;
})();var statearr_42939_42966 = state_42908__$1;(statearr_42939_42966[2] = null);
(statearr_42939_42966[1] = 8);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_42943 = (new Array(16));(statearr_42943[0] = state_machine__39965__auto__);
(statearr_42943[1] = 1);
return statearr_42943;
});
var state_machine__39965__auto____1 = (function (state_42908){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_42908);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e42944){if((e42944 instanceof Object))
{var ex__39968__auto__ = e42944;var statearr_42945_42967 = state_42908;(statearr_42945_42967[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42968 = state_42908;
state_42908 = G__42968;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_42908){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_42908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_42946 = f__40035__auto__.call(null);(statearr_42946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto__);
return statearr_42946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
}));
return c__40034__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__40034__auto___43049 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_43028){var state_val_43029 = (state_43028[1]);if((state_val_43029 === 1))
{var state_43028__$1 = state_43028;var statearr_43030_43050 = state_43028__$1;(statearr_43030_43050[2] = null);
(statearr_43030_43050[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 2))
{var state_43028__$1 = state_43028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43028__$1,4,from);
} else
{if((state_val_43029 === 3))
{var inst_43026 = (state_43028[2]);var state_43028__$1 = state_43028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43028__$1,inst_43026);
} else
{if((state_val_43029 === 4))
{var inst_43011 = (state_43028[7]);var inst_43011__$1 = (state_43028[2]);var inst_43012 = (inst_43011__$1 == null);var state_43028__$1 = (function (){var statearr_43031 = state_43028;(statearr_43031[7] = inst_43011__$1);
return statearr_43031;
})();if(cljs.core.truth_(inst_43012))
{var statearr_43032_43051 = state_43028__$1;(statearr_43032_43051[1] = 5);
} else
{var statearr_43033_43052 = state_43028__$1;(statearr_43033_43052[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 5))
{var state_43028__$1 = state_43028;if(cljs.core.truth_(close_QMARK_))
{var statearr_43034_43053 = state_43028__$1;(statearr_43034_43053[1] = 8);
} else
{var statearr_43035_43054 = state_43028__$1;(statearr_43035_43054[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 6))
{var inst_43011 = (state_43028[7]);var state_43028__$1 = state_43028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43028__$1,11,to,inst_43011);
} else
{if((state_val_43029 === 7))
{var inst_43024 = (state_43028[2]);var state_43028__$1 = state_43028;var statearr_43036_43055 = state_43028__$1;(statearr_43036_43055[2] = inst_43024);
(statearr_43036_43055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 8))
{var inst_43015 = cljs.core.async.close_BANG_.call(null,to);var state_43028__$1 = state_43028;var statearr_43037_43056 = state_43028__$1;(statearr_43037_43056[2] = inst_43015);
(statearr_43037_43056[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 9))
{var state_43028__$1 = state_43028;var statearr_43038_43057 = state_43028__$1;(statearr_43038_43057[2] = null);
(statearr_43038_43057[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 10))
{var inst_43018 = (state_43028[2]);var state_43028__$1 = state_43028;var statearr_43039_43058 = state_43028__$1;(statearr_43039_43058[2] = inst_43018);
(statearr_43039_43058[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43029 === 11))
{var inst_43021 = (state_43028[2]);var state_43028__$1 = (function (){var statearr_43040 = state_43028;(statearr_43040[8] = inst_43021);
return statearr_43040;
})();var statearr_43041_43059 = state_43028__$1;(statearr_43041_43059[2] = null);
(statearr_43041_43059[1] = 2);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_43045 = (new Array(9));(statearr_43045[0] = state_machine__39965__auto__);
(statearr_43045[1] = 1);
return statearr_43045;
});
var state_machine__39965__auto____1 = (function (state_43028){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_43028);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e43046){if((e43046 instanceof Object))
{var ex__39968__auto__ = e43046;var statearr_43047_43060 = state_43028;(statearr_43047_43060[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43061 = state_43028;
state_43028 = G__43061;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_43028){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_43028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_43048 = f__40035__auto__.call(null);(statearr_43048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___43049);
return statearr_43048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__40034__auto___43148 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_43126){var state_val_43127 = (state_43126[1]);if((state_val_43127 === 1))
{var state_43126__$1 = state_43126;var statearr_43128_43149 = state_43126__$1;(statearr_43128_43149[2] = null);
(statearr_43128_43149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 2))
{var state_43126__$1 = state_43126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43126__$1,4,ch);
} else
{if((state_val_43127 === 3))
{var inst_43124 = (state_43126[2]);var state_43126__$1 = state_43126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43126__$1,inst_43124);
} else
{if((state_val_43127 === 4))
{var inst_43107 = (state_43126[7]);var inst_43107__$1 = (state_43126[2]);var inst_43108 = (inst_43107__$1 == null);var state_43126__$1 = (function (){var statearr_43129 = state_43126;(statearr_43129[7] = inst_43107__$1);
return statearr_43129;
})();if(cljs.core.truth_(inst_43108))
{var statearr_43130_43150 = state_43126__$1;(statearr_43130_43150[1] = 5);
} else
{var statearr_43131_43151 = state_43126__$1;(statearr_43131_43151[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 5))
{var inst_43110 = cljs.core.async.close_BANG_.call(null,tc);var inst_43111 = cljs.core.async.close_BANG_.call(null,fc);var state_43126__$1 = (function (){var statearr_43132 = state_43126;(statearr_43132[8] = inst_43110);
return statearr_43132;
})();var statearr_43133_43152 = state_43126__$1;(statearr_43133_43152[2] = inst_43111);
(statearr_43133_43152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 6))
{var inst_43107 = (state_43126[7]);var inst_43113 = p.call(null,inst_43107);var state_43126__$1 = state_43126;if(cljs.core.truth_(inst_43113))
{var statearr_43134_43153 = state_43126__$1;(statearr_43134_43153[1] = 9);
} else
{var statearr_43135_43154 = state_43126__$1;(statearr_43135_43154[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 7))
{var inst_43122 = (state_43126[2]);var state_43126__$1 = state_43126;var statearr_43136_43155 = state_43126__$1;(statearr_43136_43155[2] = inst_43122);
(statearr_43136_43155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 8))
{var inst_43119 = (state_43126[2]);var state_43126__$1 = (function (){var statearr_43137 = state_43126;(statearr_43137[9] = inst_43119);
return statearr_43137;
})();var statearr_43138_43156 = state_43126__$1;(statearr_43138_43156[2] = null);
(statearr_43138_43156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 9))
{var state_43126__$1 = state_43126;var statearr_43139_43157 = state_43126__$1;(statearr_43139_43157[2] = tc);
(statearr_43139_43157[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 10))
{var state_43126__$1 = state_43126;var statearr_43140_43158 = state_43126__$1;(statearr_43140_43158[2] = fc);
(statearr_43140_43158[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43127 === 11))
{var inst_43107 = (state_43126[7]);var inst_43117 = (state_43126[2]);var state_43126__$1 = state_43126;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43126__$1,8,inst_43117,inst_43107);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_43144 = (new Array(10));(statearr_43144[0] = state_machine__39965__auto__);
(statearr_43144[1] = 1);
return statearr_43144;
});
var state_machine__39965__auto____1 = (function (state_43126){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_43126);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e43145){if((e43145 instanceof Object))
{var ex__39968__auto__ = e43145;var statearr_43146_43159 = state_43126;(statearr_43146_43159[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43160 = state_43126;
state_43126 = G__43160;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_43126){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_43126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_43147 = f__40035__auto__.call(null);(statearr_43147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___43148);
return statearr_43147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__40034__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_43207){var state_val_43208 = (state_43207[1]);if((state_val_43208 === 7))
{var inst_43203 = (state_43207[2]);var state_43207__$1 = state_43207;var statearr_43209_43225 = state_43207__$1;(statearr_43209_43225[2] = inst_43203);
(statearr_43209_43225[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43208 === 6))
{var inst_43196 = (state_43207[7]);var inst_43193 = (state_43207[8]);var inst_43200 = f.call(null,inst_43193,inst_43196);var inst_43193__$1 = inst_43200;var state_43207__$1 = (function (){var statearr_43210 = state_43207;(statearr_43210[8] = inst_43193__$1);
return statearr_43210;
})();var statearr_43211_43226 = state_43207__$1;(statearr_43211_43226[2] = null);
(statearr_43211_43226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43208 === 5))
{var inst_43193 = (state_43207[8]);var state_43207__$1 = state_43207;var statearr_43212_43227 = state_43207__$1;(statearr_43212_43227[2] = inst_43193);
(statearr_43212_43227[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43208 === 4))
{var inst_43196 = (state_43207[7]);var inst_43196__$1 = (state_43207[2]);var inst_43197 = (inst_43196__$1 == null);var state_43207__$1 = (function (){var statearr_43213 = state_43207;(statearr_43213[7] = inst_43196__$1);
return statearr_43213;
})();if(cljs.core.truth_(inst_43197))
{var statearr_43214_43228 = state_43207__$1;(statearr_43214_43228[1] = 5);
} else
{var statearr_43215_43229 = state_43207__$1;(statearr_43215_43229[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43208 === 3))
{var inst_43205 = (state_43207[2]);var state_43207__$1 = state_43207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43207__$1,inst_43205);
} else
{if((state_val_43208 === 2))
{var state_43207__$1 = state_43207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43207__$1,4,ch);
} else
{if((state_val_43208 === 1))
{var inst_43193 = init;var state_43207__$1 = (function (){var statearr_43216 = state_43207;(statearr_43216[8] = inst_43193);
return statearr_43216;
})();var statearr_43217_43230 = state_43207__$1;(statearr_43217_43230[2] = null);
(statearr_43217_43230[1] = 2);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_43221 = (new Array(9));(statearr_43221[0] = state_machine__39965__auto__);
(statearr_43221[1] = 1);
return statearr_43221;
});
var state_machine__39965__auto____1 = (function (state_43207){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_43207);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e43222){if((e43222 instanceof Object))
{var ex__39968__auto__ = e43222;var statearr_43223_43231 = state_43207;(statearr_43223_43231[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43207);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43232 = state_43207;
state_43207 = G__43232;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_43207){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_43207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_43224 = f__40035__auto__.call(null);(statearr_43224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto__);
return statearr_43224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
}));
return c__40034__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__40034__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_43294){var state_val_43295 = (state_43294[1]);if((state_val_43295 === 1))
{var inst_43274 = cljs.core.seq.call(null,coll);var inst_43275 = inst_43274;var state_43294__$1 = (function (){var statearr_43296 = state_43294;(statearr_43296[7] = inst_43275);
return statearr_43296;
})();var statearr_43297_43315 = state_43294__$1;(statearr_43297_43315[2] = null);
(statearr_43297_43315[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 2))
{var inst_43275 = (state_43294[7]);var state_43294__$1 = state_43294;if(cljs.core.truth_(inst_43275))
{var statearr_43298_43316 = state_43294__$1;(statearr_43298_43316[1] = 4);
} else
{var statearr_43299_43317 = state_43294__$1;(statearr_43299_43317[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 3))
{var inst_43292 = (state_43294[2]);var state_43294__$1 = state_43294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43294__$1,inst_43292);
} else
{if((state_val_43295 === 4))
{var inst_43275 = (state_43294[7]);var inst_43278 = cljs.core.first.call(null,inst_43275);var state_43294__$1 = state_43294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43294__$1,7,ch,inst_43278);
} else
{if((state_val_43295 === 5))
{var state_43294__$1 = state_43294;if(cljs.core.truth_(close_QMARK_))
{var statearr_43300_43318 = state_43294__$1;(statearr_43300_43318[1] = 8);
} else
{var statearr_43301_43319 = state_43294__$1;(statearr_43301_43319[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 6))
{var inst_43290 = (state_43294[2]);var state_43294__$1 = state_43294;var statearr_43302_43320 = state_43294__$1;(statearr_43302_43320[2] = inst_43290);
(statearr_43302_43320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 7))
{var inst_43275 = (state_43294[7]);var inst_43280 = (state_43294[2]);var inst_43281 = cljs.core.next.call(null,inst_43275);var inst_43275__$1 = inst_43281;var state_43294__$1 = (function (){var statearr_43303 = state_43294;(statearr_43303[7] = inst_43275__$1);
(statearr_43303[8] = inst_43280);
return statearr_43303;
})();var statearr_43304_43321 = state_43294__$1;(statearr_43304_43321[2] = null);
(statearr_43304_43321[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 8))
{var inst_43285 = cljs.core.async.close_BANG_.call(null,ch);var state_43294__$1 = state_43294;var statearr_43305_43322 = state_43294__$1;(statearr_43305_43322[2] = inst_43285);
(statearr_43305_43322[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 9))
{var state_43294__$1 = state_43294;var statearr_43306_43323 = state_43294__$1;(statearr_43306_43323[2] = null);
(statearr_43306_43323[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43295 === 10))
{var inst_43288 = (state_43294[2]);var state_43294__$1 = state_43294;var statearr_43307_43324 = state_43294__$1;(statearr_43307_43324[2] = inst_43288);
(statearr_43307_43324[1] = 6);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_43311 = (new Array(9));(statearr_43311[0] = state_machine__39965__auto__);
(statearr_43311[1] = 1);
return statearr_43311;
});
var state_machine__39965__auto____1 = (function (state_43294){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_43294);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e43312){if((e43312 instanceof Object))
{var ex__39968__auto__ = e43312;var statearr_43313_43325 = state_43294;(statearr_43313_43325[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43326 = state_43294;
state_43294 = G__43326;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_43294){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_43294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_43314 = f__40035__auto__.call(null);(statearr_43314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto__);
return statearr_43314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
}));
return c__40034__auto__;
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
cljs.core.async.Mux = (function (){var obj43328 = {};return obj43328;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__34283__auto__ = _;if(and__34283__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__34283__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__34898__auto__ = (((_ == null))?null:_);return (function (){var or__34295__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj43330 = {};return obj43330;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t43545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43545 = (function (cs,ch,mult,meta43546){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta43546 = meta43546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43545.cljs$lang$type = true;
cljs.core.async.t43545.cljs$lang$ctorStr = "cljs.core.async/t43545";
cljs.core.async.t43545.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t43545");
});})(cs))
;
cljs.core.async.t43545.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t43545.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t43545.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t43545.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t43545.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43545.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t43545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43547){var self__ = this;
var _43547__$1 = this;return self__.meta43546;
});})(cs))
;
cljs.core.async.t43545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43547,meta43546__$1){var self__ = this;
var _43547__$1 = this;return (new cljs.core.async.t43545(self__.cs,self__.ch,self__.mult,meta43546__$1));
});})(cs))
;
cljs.core.async.__GT_t43545 = ((function (cs){
return (function __GT_t43545(cs__$1,ch__$1,mult__$1,meta43546){return (new cljs.core.async.t43545(cs__$1,ch__$1,mult__$1,meta43546));
});})(cs))
;
}
return (new cljs.core.async.t43545(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__40034__auto___43759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_43677){var state_val_43678 = (state_43677[1]);if((state_val_43678 === 32))
{var inst_43550 = (state_43677[7]);var inst_43626 = (state_43677[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43677,31,Object,null,30);var inst_43633 = cljs.core.async.put_BANG_.call(null,inst_43626,inst_43550,done);var state_43677__$1 = state_43677;var statearr_43679_43760 = state_43677__$1;(statearr_43679_43760[2] = inst_43633);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43677__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 1))
{var state_43677__$1 = state_43677;var statearr_43680_43761 = state_43677__$1;(statearr_43680_43761[2] = null);
(statearr_43680_43761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 33))
{var inst_43639 = (state_43677[9]);var inst_43641 = cljs.core.chunked_seq_QMARK_.call(null,inst_43639);var state_43677__$1 = state_43677;if(inst_43641)
{var statearr_43681_43762 = state_43677__$1;(statearr_43681_43762[1] = 36);
} else
{var statearr_43682_43763 = state_43677__$1;(statearr_43682_43763[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 2))
{var state_43677__$1 = state_43677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43677__$1,4,ch);
} else
{if((state_val_43678 === 34))
{var state_43677__$1 = state_43677;var statearr_43683_43764 = state_43677__$1;(statearr_43683_43764[2] = null);
(statearr_43683_43764[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 3))
{var inst_43675 = (state_43677[2]);var state_43677__$1 = state_43677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43677__$1,inst_43675);
} else
{if((state_val_43678 === 35))
{var inst_43664 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43684_43765 = state_43677__$1;(statearr_43684_43765[2] = inst_43664);
(statearr_43684_43765[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 4))
{var inst_43550 = (state_43677[7]);var inst_43550__$1 = (state_43677[2]);var inst_43551 = (inst_43550__$1 == null);var state_43677__$1 = (function (){var statearr_43685 = state_43677;(statearr_43685[7] = inst_43550__$1);
return statearr_43685;
})();if(cljs.core.truth_(inst_43551))
{var statearr_43686_43766 = state_43677__$1;(statearr_43686_43766[1] = 5);
} else
{var statearr_43687_43767 = state_43677__$1;(statearr_43687_43767[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 36))
{var inst_43639 = (state_43677[9]);var inst_43643 = cljs.core.chunk_first.call(null,inst_43639);var inst_43644 = cljs.core.chunk_rest.call(null,inst_43639);var inst_43645 = cljs.core.count.call(null,inst_43643);var inst_43618 = inst_43644;var inst_43619 = inst_43643;var inst_43620 = inst_43645;var inst_43621 = 0;var state_43677__$1 = (function (){var statearr_43688 = state_43677;(statearr_43688[10] = inst_43619);
(statearr_43688[11] = inst_43620);
(statearr_43688[12] = inst_43621);
(statearr_43688[13] = inst_43618);
return statearr_43688;
})();var statearr_43689_43768 = state_43677__$1;(statearr_43689_43768[2] = null);
(statearr_43689_43768[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 5))
{var inst_43557 = cljs.core.deref.call(null,cs);var inst_43558 = cljs.core.seq.call(null,inst_43557);var inst_43559 = inst_43558;var inst_43560 = null;var inst_43561 = 0;var inst_43562 = 0;var state_43677__$1 = (function (){var statearr_43690 = state_43677;(statearr_43690[14] = inst_43562);
(statearr_43690[15] = inst_43561);
(statearr_43690[16] = inst_43560);
(statearr_43690[17] = inst_43559);
return statearr_43690;
})();var statearr_43691_43769 = state_43677__$1;(statearr_43691_43769[2] = null);
(statearr_43691_43769[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 37))
{var inst_43639 = (state_43677[9]);var inst_43648 = cljs.core.first.call(null,inst_43639);var state_43677__$1 = (function (){var statearr_43692 = state_43677;(statearr_43692[18] = inst_43648);
return statearr_43692;
})();var statearr_43693_43770 = state_43677__$1;(statearr_43693_43770[2] = null);
(statearr_43693_43770[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 6))
{var inst_43609 = cljs.core.deref.call(null,cs);var inst_43610 = cljs.core.keys.call(null,inst_43609);var inst_43611 = cljs.core.count.call(null,inst_43610);var inst_43612 = cljs.core.reset_BANG_.call(null,dctr,inst_43611);var inst_43617 = cljs.core.seq.call(null,inst_43610);var inst_43618 = inst_43617;var inst_43619 = null;var inst_43620 = 0;var inst_43621 = 0;var state_43677__$1 = (function (){var statearr_43694 = state_43677;(statearr_43694[10] = inst_43619);
(statearr_43694[11] = inst_43620);
(statearr_43694[12] = inst_43621);
(statearr_43694[13] = inst_43618);
(statearr_43694[19] = inst_43612);
return statearr_43694;
})();var statearr_43695_43771 = state_43677__$1;(statearr_43695_43771[2] = null);
(statearr_43695_43771[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 38))
{var inst_43661 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43696_43772 = state_43677__$1;(statearr_43696_43772[2] = inst_43661);
(statearr_43696_43772[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 7))
{var inst_43673 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43697_43773 = state_43677__$1;(statearr_43697_43773[2] = inst_43673);
(statearr_43697_43773[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 39))
{var inst_43639 = (state_43677[9]);var inst_43657 = (state_43677[2]);var inst_43658 = cljs.core.next.call(null,inst_43639);var inst_43618 = inst_43658;var inst_43619 = null;var inst_43620 = 0;var inst_43621 = 0;var state_43677__$1 = (function (){var statearr_43698 = state_43677;(statearr_43698[20] = inst_43657);
(statearr_43698[10] = inst_43619);
(statearr_43698[11] = inst_43620);
(statearr_43698[12] = inst_43621);
(statearr_43698[13] = inst_43618);
return statearr_43698;
})();var statearr_43699_43774 = state_43677__$1;(statearr_43699_43774[2] = null);
(statearr_43699_43774[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 8))
{var inst_43562 = (state_43677[14]);var inst_43561 = (state_43677[15]);var inst_43564 = (inst_43562 < inst_43561);var inst_43565 = inst_43564;var state_43677__$1 = state_43677;if(cljs.core.truth_(inst_43565))
{var statearr_43700_43775 = state_43677__$1;(statearr_43700_43775[1] = 10);
} else
{var statearr_43701_43776 = state_43677__$1;(statearr_43701_43776[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 40))
{var inst_43648 = (state_43677[18]);var inst_43649 = (state_43677[2]);var inst_43650 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_43651 = cljs.core.async.untap_STAR_.call(null,m,inst_43648);var state_43677__$1 = (function (){var statearr_43702 = state_43677;(statearr_43702[21] = inst_43649);
(statearr_43702[22] = inst_43650);
return statearr_43702;
})();var statearr_43703_43777 = state_43677__$1;(statearr_43703_43777[2] = inst_43651);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43677__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 9))
{var inst_43607 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43704_43778 = state_43677__$1;(statearr_43704_43778[2] = inst_43607);
(statearr_43704_43778[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 41))
{var inst_43648 = (state_43677[18]);var inst_43550 = (state_43677[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43677,40,Object,null,39);var inst_43655 = cljs.core.async.put_BANG_.call(null,inst_43648,inst_43550,done);var state_43677__$1 = state_43677;var statearr_43705_43779 = state_43677__$1;(statearr_43705_43779[2] = inst_43655);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43677__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 10))
{var inst_43562 = (state_43677[14]);var inst_43560 = (state_43677[16]);var inst_43568 = cljs.core._nth.call(null,inst_43560,inst_43562);var inst_43569 = cljs.core.nth.call(null,inst_43568,0,null);var inst_43570 = cljs.core.nth.call(null,inst_43568,1,null);var state_43677__$1 = (function (){var statearr_43706 = state_43677;(statearr_43706[23] = inst_43569);
return statearr_43706;
})();if(cljs.core.truth_(inst_43570))
{var statearr_43707_43780 = state_43677__$1;(statearr_43707_43780[1] = 13);
} else
{var statearr_43708_43781 = state_43677__$1;(statearr_43708_43781[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 42))
{var inst_43670 = (state_43677[2]);var state_43677__$1 = (function (){var statearr_43709 = state_43677;(statearr_43709[24] = inst_43670);
return statearr_43709;
})();var statearr_43710_43782 = state_43677__$1;(statearr_43710_43782[2] = null);
(statearr_43710_43782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 11))
{var inst_43579 = (state_43677[25]);var inst_43559 = (state_43677[17]);var inst_43579__$1 = cljs.core.seq.call(null,inst_43559);var state_43677__$1 = (function (){var statearr_43711 = state_43677;(statearr_43711[25] = inst_43579__$1);
return statearr_43711;
})();if(inst_43579__$1)
{var statearr_43712_43783 = state_43677__$1;(statearr_43712_43783[1] = 16);
} else
{var statearr_43713_43784 = state_43677__$1;(statearr_43713_43784[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 12))
{var inst_43605 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43714_43785 = state_43677__$1;(statearr_43714_43785[2] = inst_43605);
(statearr_43714_43785[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 13))
{var inst_43569 = (state_43677[23]);var inst_43572 = cljs.core.async.close_BANG_.call(null,inst_43569);var state_43677__$1 = state_43677;var statearr_43718_43786 = state_43677__$1;(statearr_43718_43786[2] = inst_43572);
(statearr_43718_43786[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 14))
{var state_43677__$1 = state_43677;var statearr_43719_43787 = state_43677__$1;(statearr_43719_43787[2] = null);
(statearr_43719_43787[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 15))
{var inst_43562 = (state_43677[14]);var inst_43561 = (state_43677[15]);var inst_43560 = (state_43677[16]);var inst_43559 = (state_43677[17]);var inst_43575 = (state_43677[2]);var inst_43576 = (inst_43562 + 1);var tmp43715 = inst_43561;var tmp43716 = inst_43560;var tmp43717 = inst_43559;var inst_43559__$1 = tmp43717;var inst_43560__$1 = tmp43716;var inst_43561__$1 = tmp43715;var inst_43562__$1 = inst_43576;var state_43677__$1 = (function (){var statearr_43720 = state_43677;(statearr_43720[14] = inst_43562__$1);
(statearr_43720[15] = inst_43561__$1);
(statearr_43720[16] = inst_43560__$1);
(statearr_43720[17] = inst_43559__$1);
(statearr_43720[26] = inst_43575);
return statearr_43720;
})();var statearr_43721_43788 = state_43677__$1;(statearr_43721_43788[2] = null);
(statearr_43721_43788[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 16))
{var inst_43579 = (state_43677[25]);var inst_43581 = cljs.core.chunked_seq_QMARK_.call(null,inst_43579);var state_43677__$1 = state_43677;if(inst_43581)
{var statearr_43722_43789 = state_43677__$1;(statearr_43722_43789[1] = 19);
} else
{var statearr_43723_43790 = state_43677__$1;(statearr_43723_43790[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 17))
{var state_43677__$1 = state_43677;var statearr_43724_43791 = state_43677__$1;(statearr_43724_43791[2] = null);
(statearr_43724_43791[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 18))
{var inst_43603 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43725_43792 = state_43677__$1;(statearr_43725_43792[2] = inst_43603);
(statearr_43725_43792[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 19))
{var inst_43579 = (state_43677[25]);var inst_43583 = cljs.core.chunk_first.call(null,inst_43579);var inst_43584 = cljs.core.chunk_rest.call(null,inst_43579);var inst_43585 = cljs.core.count.call(null,inst_43583);var inst_43559 = inst_43584;var inst_43560 = inst_43583;var inst_43561 = inst_43585;var inst_43562 = 0;var state_43677__$1 = (function (){var statearr_43726 = state_43677;(statearr_43726[14] = inst_43562);
(statearr_43726[15] = inst_43561);
(statearr_43726[16] = inst_43560);
(statearr_43726[17] = inst_43559);
return statearr_43726;
})();var statearr_43727_43793 = state_43677__$1;(statearr_43727_43793[2] = null);
(statearr_43727_43793[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 20))
{var inst_43579 = (state_43677[25]);var inst_43589 = cljs.core.first.call(null,inst_43579);var inst_43590 = cljs.core.nth.call(null,inst_43589,0,null);var inst_43591 = cljs.core.nth.call(null,inst_43589,1,null);var state_43677__$1 = (function (){var statearr_43728 = state_43677;(statearr_43728[27] = inst_43590);
return statearr_43728;
})();if(cljs.core.truth_(inst_43591))
{var statearr_43729_43794 = state_43677__$1;(statearr_43729_43794[1] = 22);
} else
{var statearr_43730_43795 = state_43677__$1;(statearr_43730_43795[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 21))
{var inst_43600 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43731_43796 = state_43677__$1;(statearr_43731_43796[2] = inst_43600);
(statearr_43731_43796[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 22))
{var inst_43590 = (state_43677[27]);var inst_43593 = cljs.core.async.close_BANG_.call(null,inst_43590);var state_43677__$1 = state_43677;var statearr_43732_43797 = state_43677__$1;(statearr_43732_43797[2] = inst_43593);
(statearr_43732_43797[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 23))
{var state_43677__$1 = state_43677;var statearr_43733_43798 = state_43677__$1;(statearr_43733_43798[2] = null);
(statearr_43733_43798[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 24))
{var inst_43579 = (state_43677[25]);var inst_43596 = (state_43677[2]);var inst_43597 = cljs.core.next.call(null,inst_43579);var inst_43559 = inst_43597;var inst_43560 = null;var inst_43561 = 0;var inst_43562 = 0;var state_43677__$1 = (function (){var statearr_43734 = state_43677;(statearr_43734[14] = inst_43562);
(statearr_43734[15] = inst_43561);
(statearr_43734[16] = inst_43560);
(statearr_43734[28] = inst_43596);
(statearr_43734[17] = inst_43559);
return statearr_43734;
})();var statearr_43735_43799 = state_43677__$1;(statearr_43735_43799[2] = null);
(statearr_43735_43799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 25))
{var inst_43620 = (state_43677[11]);var inst_43621 = (state_43677[12]);var inst_43623 = (inst_43621 < inst_43620);var inst_43624 = inst_43623;var state_43677__$1 = state_43677;if(cljs.core.truth_(inst_43624))
{var statearr_43736_43800 = state_43677__$1;(statearr_43736_43800[1] = 27);
} else
{var statearr_43737_43801 = state_43677__$1;(statearr_43737_43801[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 26))
{var inst_43668 = (state_43677[2]);var state_43677__$1 = (function (){var statearr_43738 = state_43677;(statearr_43738[29] = inst_43668);
return statearr_43738;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43677__$1,42,dchan);
} else
{if((state_val_43678 === 27))
{var inst_43619 = (state_43677[10]);var inst_43621 = (state_43677[12]);var inst_43626 = cljs.core._nth.call(null,inst_43619,inst_43621);var state_43677__$1 = (function (){var statearr_43739 = state_43677;(statearr_43739[8] = inst_43626);
return statearr_43739;
})();var statearr_43740_43802 = state_43677__$1;(statearr_43740_43802[2] = null);
(statearr_43740_43802[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 28))
{var inst_43618 = (state_43677[13]);var inst_43639 = (state_43677[9]);var inst_43639__$1 = cljs.core.seq.call(null,inst_43618);var state_43677__$1 = (function (){var statearr_43744 = state_43677;(statearr_43744[9] = inst_43639__$1);
return statearr_43744;
})();if(inst_43639__$1)
{var statearr_43745_43803 = state_43677__$1;(statearr_43745_43803[1] = 33);
} else
{var statearr_43746_43804 = state_43677__$1;(statearr_43746_43804[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 29))
{var inst_43666 = (state_43677[2]);var state_43677__$1 = state_43677;var statearr_43747_43805 = state_43677__$1;(statearr_43747_43805[2] = inst_43666);
(statearr_43747_43805[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 30))
{var inst_43619 = (state_43677[10]);var inst_43620 = (state_43677[11]);var inst_43621 = (state_43677[12]);var inst_43618 = (state_43677[13]);var inst_43635 = (state_43677[2]);var inst_43636 = (inst_43621 + 1);var tmp43741 = inst_43619;var tmp43742 = inst_43620;var tmp43743 = inst_43618;var inst_43618__$1 = tmp43743;var inst_43619__$1 = tmp43741;var inst_43620__$1 = tmp43742;var inst_43621__$1 = inst_43636;var state_43677__$1 = (function (){var statearr_43748 = state_43677;(statearr_43748[10] = inst_43619__$1);
(statearr_43748[11] = inst_43620__$1);
(statearr_43748[12] = inst_43621__$1);
(statearr_43748[13] = inst_43618__$1);
(statearr_43748[30] = inst_43635);
return statearr_43748;
})();var statearr_43749_43806 = state_43677__$1;(statearr_43749_43806[2] = null);
(statearr_43749_43806[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43678 === 31))
{var inst_43626 = (state_43677[8]);var inst_43627 = (state_43677[2]);var inst_43628 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_43629 = cljs.core.async.untap_STAR_.call(null,m,inst_43626);var state_43677__$1 = (function (){var statearr_43750 = state_43677;(statearr_43750[31] = inst_43627);
(statearr_43750[32] = inst_43628);
return statearr_43750;
})();var statearr_43751_43807 = state_43677__$1;(statearr_43751_43807[2] = inst_43629);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43677__$1);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_43755 = (new Array(33));(statearr_43755[0] = state_machine__39965__auto__);
(statearr_43755[1] = 1);
return statearr_43755;
});
var state_machine__39965__auto____1 = (function (state_43677){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_43677);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e43756){if((e43756 instanceof Object))
{var ex__39968__auto__ = e43756;var statearr_43757_43808 = state_43677;(statearr_43757_43808[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43809 = state_43677;
state_43677 = G__43809;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_43677){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_43677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_43758 = f__40035__auto__.call(null);(statearr_43758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___43759);
return statearr_43758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
cljs.core.async.Mix = (function (){var obj43811 = {};return obj43811;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__34283__auto__ = m;if(and__34283__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__34283__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__34898__auto__ = (((m == null))?null:m);return (function (){var or__34295__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t43921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43921 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta43922){
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
this.meta43922 = meta43922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43921.cljs$lang$type = true;
cljs.core.async.t43921.cljs$lang$ctorStr = "cljs.core.async/t43921";
cljs.core.async.t43921.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t43921");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43921.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43921.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43923){var self__ = this;
var _43923__$1 = this;return self__.meta43922;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43923,meta43922__$1){var self__ = this;
var _43923__$1 = this;return (new cljs.core.async.t43921(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta43922__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43921 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43921(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta43922){return (new cljs.core.async.t43921(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta43922));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43921(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__40034__auto___44030 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_43988){var state_val_43989 = (state_43988[1]);if((state_val_43989 === 1))
{var inst_43927 = (state_43988[7]);var inst_43927__$1 = calc_state.call(null);var inst_43928 = cljs.core.seq_QMARK_.call(null,inst_43927__$1);var state_43988__$1 = (function (){var statearr_43990 = state_43988;(statearr_43990[7] = inst_43927__$1);
return statearr_43990;
})();if(inst_43928)
{var statearr_43991_44031 = state_43988__$1;(statearr_43991_44031[1] = 2);
} else
{var statearr_43992_44032 = state_43988__$1;(statearr_43992_44032[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 2))
{var inst_43927 = (state_43988[7]);var inst_43930 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43927);var state_43988__$1 = state_43988;var statearr_43993_44033 = state_43988__$1;(statearr_43993_44033[2] = inst_43930);
(statearr_43993_44033[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 3))
{var inst_43927 = (state_43988[7]);var state_43988__$1 = state_43988;var statearr_43994_44034 = state_43988__$1;(statearr_43994_44034[2] = inst_43927);
(statearr_43994_44034[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 4))
{var inst_43927 = (state_43988[7]);var inst_43933 = (state_43988[2]);var inst_43934 = cljs.core.get.call(null,inst_43933,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43935 = cljs.core.get.call(null,inst_43933,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43936 = cljs.core.get.call(null,inst_43933,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_43937 = inst_43927;var state_43988__$1 = (function (){var statearr_43995 = state_43988;(statearr_43995[8] = inst_43935);
(statearr_43995[9] = inst_43934);
(statearr_43995[10] = inst_43936);
(statearr_43995[11] = inst_43937);
return statearr_43995;
})();var statearr_43996_44035 = state_43988__$1;(statearr_43996_44035[2] = null);
(statearr_43996_44035[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 5))
{var inst_43937 = (state_43988[11]);var inst_43940 = cljs.core.seq_QMARK_.call(null,inst_43937);var state_43988__$1 = state_43988;if(inst_43940)
{var statearr_43997_44036 = state_43988__$1;(statearr_43997_44036[1] = 7);
} else
{var statearr_43998_44037 = state_43988__$1;(statearr_43998_44037[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 6))
{var inst_43986 = (state_43988[2]);var state_43988__$1 = state_43988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43988__$1,inst_43986);
} else
{if((state_val_43989 === 7))
{var inst_43937 = (state_43988[11]);var inst_43942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43937);var state_43988__$1 = state_43988;var statearr_43999_44038 = state_43988__$1;(statearr_43999_44038[2] = inst_43942);
(statearr_43999_44038[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 8))
{var inst_43937 = (state_43988[11]);var state_43988__$1 = state_43988;var statearr_44000_44039 = state_43988__$1;(statearr_44000_44039[2] = inst_43937);
(statearr_44000_44039[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 9))
{var inst_43945 = (state_43988[12]);var inst_43945__$1 = (state_43988[2]);var inst_43946 = cljs.core.get.call(null,inst_43945__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43947 = cljs.core.get.call(null,inst_43945__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43948 = cljs.core.get.call(null,inst_43945__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_43988__$1 = (function (){var statearr_44001 = state_43988;(statearr_44001[12] = inst_43945__$1);
(statearr_44001[13] = inst_43947);
(statearr_44001[14] = inst_43948);
return statearr_44001;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43988__$1,10,inst_43946);
} else
{if((state_val_43989 === 10))
{var inst_43952 = (state_43988[15]);var inst_43953 = (state_43988[16]);var inst_43951 = (state_43988[2]);var inst_43952__$1 = cljs.core.nth.call(null,inst_43951,0,null);var inst_43953__$1 = cljs.core.nth.call(null,inst_43951,1,null);var inst_43954 = (inst_43952__$1 == null);var inst_43955 = cljs.core._EQ_.call(null,inst_43953__$1,change);var inst_43956 = (inst_43954) || (inst_43955);var state_43988__$1 = (function (){var statearr_44002 = state_43988;(statearr_44002[15] = inst_43952__$1);
(statearr_44002[16] = inst_43953__$1);
return statearr_44002;
})();if(cljs.core.truth_(inst_43956))
{var statearr_44003_44040 = state_43988__$1;(statearr_44003_44040[1] = 11);
} else
{var statearr_44004_44041 = state_43988__$1;(statearr_44004_44041[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 11))
{var inst_43952 = (state_43988[15]);var inst_43958 = (inst_43952 == null);var state_43988__$1 = state_43988;if(cljs.core.truth_(inst_43958))
{var statearr_44005_44042 = state_43988__$1;(statearr_44005_44042[1] = 14);
} else
{var statearr_44006_44043 = state_43988__$1;(statearr_44006_44043[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 12))
{var inst_43967 = (state_43988[17]);var inst_43953 = (state_43988[16]);var inst_43948 = (state_43988[14]);var inst_43967__$1 = inst_43948.call(null,inst_43953);var state_43988__$1 = (function (){var statearr_44007 = state_43988;(statearr_44007[17] = inst_43967__$1);
return statearr_44007;
})();if(cljs.core.truth_(inst_43967__$1))
{var statearr_44008_44044 = state_43988__$1;(statearr_44008_44044[1] = 17);
} else
{var statearr_44009_44045 = state_43988__$1;(statearr_44009_44045[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 13))
{var inst_43984 = (state_43988[2]);var state_43988__$1 = state_43988;var statearr_44010_44046 = state_43988__$1;(statearr_44010_44046[2] = inst_43984);
(statearr_44010_44046[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 14))
{var inst_43953 = (state_43988[16]);var inst_43960 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43953);var state_43988__$1 = state_43988;var statearr_44011_44047 = state_43988__$1;(statearr_44011_44047[2] = inst_43960);
(statearr_44011_44047[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 15))
{var state_43988__$1 = state_43988;var statearr_44012_44048 = state_43988__$1;(statearr_44012_44048[2] = null);
(statearr_44012_44048[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 16))
{var inst_43963 = (state_43988[2]);var inst_43964 = calc_state.call(null);var inst_43937 = inst_43964;var state_43988__$1 = (function (){var statearr_44013 = state_43988;(statearr_44013[11] = inst_43937);
(statearr_44013[18] = inst_43963);
return statearr_44013;
})();var statearr_44014_44049 = state_43988__$1;(statearr_44014_44049[2] = null);
(statearr_44014_44049[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 17))
{var inst_43967 = (state_43988[17]);var state_43988__$1 = state_43988;var statearr_44015_44050 = state_43988__$1;(statearr_44015_44050[2] = inst_43967);
(statearr_44015_44050[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 18))
{var inst_43953 = (state_43988[16]);var inst_43947 = (state_43988[13]);var inst_43948 = (state_43988[14]);var inst_43970 = cljs.core.empty_QMARK_.call(null,inst_43948);var inst_43971 = inst_43947.call(null,inst_43953);var inst_43972 = cljs.core.not.call(null,inst_43971);var inst_43973 = (inst_43970) && (inst_43972);var state_43988__$1 = state_43988;var statearr_44016_44051 = state_43988__$1;(statearr_44016_44051[2] = inst_43973);
(statearr_44016_44051[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 19))
{var inst_43975 = (state_43988[2]);var state_43988__$1 = state_43988;if(cljs.core.truth_(inst_43975))
{var statearr_44017_44052 = state_43988__$1;(statearr_44017_44052[1] = 20);
} else
{var statearr_44018_44053 = state_43988__$1;(statearr_44018_44053[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 20))
{var inst_43952 = (state_43988[15]);var state_43988__$1 = state_43988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43988__$1,23,out,inst_43952);
} else
{if((state_val_43989 === 21))
{var state_43988__$1 = state_43988;var statearr_44019_44054 = state_43988__$1;(statearr_44019_44054[2] = null);
(statearr_44019_44054[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 22))
{var inst_43945 = (state_43988[12]);var inst_43981 = (state_43988[2]);var inst_43937 = inst_43945;var state_43988__$1 = (function (){var statearr_44020 = state_43988;(statearr_44020[11] = inst_43937);
(statearr_44020[19] = inst_43981);
return statearr_44020;
})();var statearr_44021_44055 = state_43988__$1;(statearr_44021_44055[2] = null);
(statearr_44021_44055[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43989 === 23))
{var inst_43978 = (state_43988[2]);var state_43988__$1 = state_43988;var statearr_44022_44056 = state_43988__$1;(statearr_44022_44056[2] = inst_43978);
(statearr_44022_44056[1] = 22);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44026 = (new Array(20));(statearr_44026[0] = state_machine__39965__auto__);
(statearr_44026[1] = 1);
return statearr_44026;
});
var state_machine__39965__auto____1 = (function (state_43988){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_43988);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44027){if((e44027 instanceof Object))
{var ex__39968__auto__ = e44027;var statearr_44028_44057 = state_43988;(statearr_44028_44057[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44058 = state_43988;
state_43988 = G__44058;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_43988){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_43988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44029 = f__40035__auto__.call(null);(statearr_44029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44030);
return statearr_44029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
cljs.core.async.Pub = (function (){var obj44060 = {};return obj44060;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__34283__auto__ = p;if(and__34283__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__34283__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__34898__auto__ = (((p == null))?null:p);return (function (){var or__34295__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__34283__auto__ = p;if(and__34283__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__34283__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__34898__auto__ = (((p == null))?null:p);return (function (){var or__34295__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__34283__auto__ = p;if(and__34283__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__34283__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__34898__auto__ = (((p == null))?null:p);return (function (){var or__34295__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__34283__auto__ = p;if(and__34283__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__34283__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__34898__auto__ = (((p == null))?null:p);return (function (){var or__34295__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34898__auto__)]);if(or__34295__auto__)
{return or__34295__auto__;
} else
{var or__34295__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__34295__auto____$1)
{return or__34295__auto____$1;
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
return (function (topic){var or__34295__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__34295__auto__))
{return or__34295__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34295__auto__,mults){
return (function (p1__44061_SHARP_){if(cljs.core.truth_(p1__44061_SHARP_.call(null,topic)))
{return p1__44061_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__44061_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34295__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t44186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44186 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta44187){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta44187 = meta44187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44186.cljs$lang$type = true;
cljs.core.async.t44186.cljs$lang$ctorStr = "cljs.core.async/t44186";
cljs.core.async.t44186.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34839__auto__,writer__34840__auto__,opt__34841__auto__){return cljs.core._write.call(null,writer__34840__auto__,"cljs.core.async/t44186");
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t44186.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t44186.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44188){var self__ = this;
var _44188__$1 = this;return self__.meta44187;
});})(mults,ensure_mult))
;
cljs.core.async.t44186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44188,meta44187__$1){var self__ = this;
var _44188__$1 = this;return (new cljs.core.async.t44186(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta44187__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t44186 = ((function (mults,ensure_mult){
return (function __GT_t44186(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta44187){return (new cljs.core.async.t44186(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta44187));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t44186(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__40034__auto___44310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_44262){var state_val_44263 = (state_44262[1]);if((state_val_44263 === 1))
{var state_44262__$1 = state_44262;var statearr_44264_44311 = state_44262__$1;(statearr_44264_44311[2] = null);
(statearr_44264_44311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 2))
{var state_44262__$1 = state_44262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44262__$1,4,ch);
} else
{if((state_val_44263 === 3))
{var inst_44260 = (state_44262[2]);var state_44262__$1 = state_44262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44262__$1,inst_44260);
} else
{if((state_val_44263 === 4))
{var inst_44191 = (state_44262[7]);var inst_44191__$1 = (state_44262[2]);var inst_44192 = (inst_44191__$1 == null);var state_44262__$1 = (function (){var statearr_44265 = state_44262;(statearr_44265[7] = inst_44191__$1);
return statearr_44265;
})();if(cljs.core.truth_(inst_44192))
{var statearr_44266_44312 = state_44262__$1;(statearr_44266_44312[1] = 5);
} else
{var statearr_44267_44313 = state_44262__$1;(statearr_44267_44313[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 5))
{var inst_44198 = cljs.core.deref.call(null,mults);var inst_44199 = cljs.core.vals.call(null,inst_44198);var inst_44200 = cljs.core.seq.call(null,inst_44199);var inst_44201 = inst_44200;var inst_44202 = null;var inst_44203 = 0;var inst_44204 = 0;var state_44262__$1 = (function (){var statearr_44268 = state_44262;(statearr_44268[8] = inst_44203);
(statearr_44268[9] = inst_44204);
(statearr_44268[10] = inst_44202);
(statearr_44268[11] = inst_44201);
return statearr_44268;
})();var statearr_44269_44314 = state_44262__$1;(statearr_44269_44314[2] = null);
(statearr_44269_44314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 6))
{var inst_44241 = (state_44262[12]);var inst_44239 = (state_44262[13]);var inst_44191 = (state_44262[7]);var inst_44239__$1 = topic_fn.call(null,inst_44191);var inst_44240 = cljs.core.deref.call(null,mults);var inst_44241__$1 = cljs.core.get.call(null,inst_44240,inst_44239__$1);var state_44262__$1 = (function (){var statearr_44270 = state_44262;(statearr_44270[12] = inst_44241__$1);
(statearr_44270[13] = inst_44239__$1);
return statearr_44270;
})();if(cljs.core.truth_(inst_44241__$1))
{var statearr_44271_44315 = state_44262__$1;(statearr_44271_44315[1] = 19);
} else
{var statearr_44272_44316 = state_44262__$1;(statearr_44272_44316[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 7))
{var inst_44258 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44273_44317 = state_44262__$1;(statearr_44273_44317[2] = inst_44258);
(statearr_44273_44317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 8))
{var inst_44203 = (state_44262[8]);var inst_44204 = (state_44262[9]);var inst_44206 = (inst_44204 < inst_44203);var inst_44207 = inst_44206;var state_44262__$1 = state_44262;if(cljs.core.truth_(inst_44207))
{var statearr_44277_44318 = state_44262__$1;(statearr_44277_44318[1] = 10);
} else
{var statearr_44278_44319 = state_44262__$1;(statearr_44278_44319[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 9))
{var inst_44237 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44279_44320 = state_44262__$1;(statearr_44279_44320[2] = inst_44237);
(statearr_44279_44320[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 10))
{var inst_44203 = (state_44262[8]);var inst_44204 = (state_44262[9]);var inst_44202 = (state_44262[10]);var inst_44201 = (state_44262[11]);var inst_44209 = cljs.core._nth.call(null,inst_44202,inst_44204);var inst_44210 = cljs.core.async.muxch_STAR_.call(null,inst_44209);var inst_44211 = cljs.core.async.close_BANG_.call(null,inst_44210);var inst_44212 = (inst_44204 + 1);var tmp44274 = inst_44203;var tmp44275 = inst_44202;var tmp44276 = inst_44201;var inst_44201__$1 = tmp44276;var inst_44202__$1 = tmp44275;var inst_44203__$1 = tmp44274;var inst_44204__$1 = inst_44212;var state_44262__$1 = (function (){var statearr_44280 = state_44262;(statearr_44280[8] = inst_44203__$1);
(statearr_44280[9] = inst_44204__$1);
(statearr_44280[14] = inst_44211);
(statearr_44280[10] = inst_44202__$1);
(statearr_44280[11] = inst_44201__$1);
return statearr_44280;
})();var statearr_44281_44321 = state_44262__$1;(statearr_44281_44321[2] = null);
(statearr_44281_44321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 11))
{var inst_44201 = (state_44262[11]);var inst_44215 = (state_44262[15]);var inst_44215__$1 = cljs.core.seq.call(null,inst_44201);var state_44262__$1 = (function (){var statearr_44282 = state_44262;(statearr_44282[15] = inst_44215__$1);
return statearr_44282;
})();if(inst_44215__$1)
{var statearr_44283_44322 = state_44262__$1;(statearr_44283_44322[1] = 13);
} else
{var statearr_44284_44323 = state_44262__$1;(statearr_44284_44323[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 12))
{var inst_44235 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44285_44324 = state_44262__$1;(statearr_44285_44324[2] = inst_44235);
(statearr_44285_44324[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 13))
{var inst_44215 = (state_44262[15]);var inst_44217 = cljs.core.chunked_seq_QMARK_.call(null,inst_44215);var state_44262__$1 = state_44262;if(inst_44217)
{var statearr_44286_44325 = state_44262__$1;(statearr_44286_44325[1] = 16);
} else
{var statearr_44287_44326 = state_44262__$1;(statearr_44287_44326[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 14))
{var state_44262__$1 = state_44262;var statearr_44288_44327 = state_44262__$1;(statearr_44288_44327[2] = null);
(statearr_44288_44327[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 15))
{var inst_44233 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44289_44328 = state_44262__$1;(statearr_44289_44328[2] = inst_44233);
(statearr_44289_44328[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 16))
{var inst_44215 = (state_44262[15]);var inst_44219 = cljs.core.chunk_first.call(null,inst_44215);var inst_44220 = cljs.core.chunk_rest.call(null,inst_44215);var inst_44221 = cljs.core.count.call(null,inst_44219);var inst_44201 = inst_44220;var inst_44202 = inst_44219;var inst_44203 = inst_44221;var inst_44204 = 0;var state_44262__$1 = (function (){var statearr_44290 = state_44262;(statearr_44290[8] = inst_44203);
(statearr_44290[9] = inst_44204);
(statearr_44290[10] = inst_44202);
(statearr_44290[11] = inst_44201);
return statearr_44290;
})();var statearr_44291_44329 = state_44262__$1;(statearr_44291_44329[2] = null);
(statearr_44291_44329[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 17))
{var inst_44215 = (state_44262[15]);var inst_44224 = cljs.core.first.call(null,inst_44215);var inst_44225 = cljs.core.async.muxch_STAR_.call(null,inst_44224);var inst_44226 = cljs.core.async.close_BANG_.call(null,inst_44225);var inst_44227 = cljs.core.next.call(null,inst_44215);var inst_44201 = inst_44227;var inst_44202 = null;var inst_44203 = 0;var inst_44204 = 0;var state_44262__$1 = (function (){var statearr_44292 = state_44262;(statearr_44292[8] = inst_44203);
(statearr_44292[9] = inst_44204);
(statearr_44292[10] = inst_44202);
(statearr_44292[11] = inst_44201);
(statearr_44292[16] = inst_44226);
return statearr_44292;
})();var statearr_44293_44330 = state_44262__$1;(statearr_44293_44330[2] = null);
(statearr_44293_44330[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 18))
{var inst_44230 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44294_44331 = state_44262__$1;(statearr_44294_44331[2] = inst_44230);
(statearr_44294_44331[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 19))
{var state_44262__$1 = state_44262;var statearr_44295_44332 = state_44262__$1;(statearr_44295_44332[2] = null);
(statearr_44295_44332[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 20))
{var state_44262__$1 = state_44262;var statearr_44296_44333 = state_44262__$1;(statearr_44296_44333[2] = null);
(statearr_44296_44333[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 21))
{var inst_44255 = (state_44262[2]);var state_44262__$1 = (function (){var statearr_44297 = state_44262;(statearr_44297[17] = inst_44255);
return statearr_44297;
})();var statearr_44298_44334 = state_44262__$1;(statearr_44298_44334[2] = null);
(statearr_44298_44334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 22))
{var inst_44252 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44299_44335 = state_44262__$1;(statearr_44299_44335[2] = inst_44252);
(statearr_44299_44335[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 23))
{var inst_44239 = (state_44262[13]);var inst_44243 = (state_44262[2]);var inst_44244 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44239);var state_44262__$1 = (function (){var statearr_44300 = state_44262;(statearr_44300[18] = inst_44243);
return statearr_44300;
})();var statearr_44301_44336 = state_44262__$1;(statearr_44301_44336[2] = inst_44244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44262__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44263 === 24))
{var inst_44241 = (state_44262[12]);var inst_44191 = (state_44262[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44262,23,Object,null,22);var inst_44248 = cljs.core.async.muxch_STAR_.call(null,inst_44241);var state_44262__$1 = state_44262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44262__$1,25,inst_44248,inst_44191);
} else
{if((state_val_44263 === 25))
{var inst_44250 = (state_44262[2]);var state_44262__$1 = state_44262;var statearr_44302_44337 = state_44262__$1;(statearr_44302_44337[2] = inst_44250);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44262__$1);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44306 = (new Array(19));(statearr_44306[0] = state_machine__39965__auto__);
(statearr_44306[1] = 1);
return statearr_44306;
});
var state_machine__39965__auto____1 = (function (state_44262){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_44262);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44307){if((e44307 instanceof Object))
{var ex__39968__auto__ = e44307;var statearr_44308_44338 = state_44262;(statearr_44308_44338[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44262);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44339 = state_44262;
state_44262 = G__44339;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_44262){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_44262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44309 = f__40035__auto__.call(null);(statearr_44309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44310);
return statearr_44309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
,cljs.core.range.call(null,cnt));var c__40034__auto___44476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_44446){var state_val_44447 = (state_44446[1]);if((state_val_44447 === 1))
{var state_44446__$1 = state_44446;var statearr_44448_44477 = state_44446__$1;(statearr_44448_44477[2] = null);
(statearr_44448_44477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 2))
{var inst_44409 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_44410 = 0;var state_44446__$1 = (function (){var statearr_44449 = state_44446;(statearr_44449[7] = inst_44410);
(statearr_44449[8] = inst_44409);
return statearr_44449;
})();var statearr_44450_44478 = state_44446__$1;(statearr_44450_44478[2] = null);
(statearr_44450_44478[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 3))
{var inst_44444 = (state_44446[2]);var state_44446__$1 = state_44446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44446__$1,inst_44444);
} else
{if((state_val_44447 === 4))
{var inst_44410 = (state_44446[7]);var inst_44412 = (inst_44410 < cnt);var state_44446__$1 = state_44446;if(cljs.core.truth_(inst_44412))
{var statearr_44451_44479 = state_44446__$1;(statearr_44451_44479[1] = 6);
} else
{var statearr_44452_44480 = state_44446__$1;(statearr_44452_44480[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 5))
{var inst_44430 = (state_44446[2]);var state_44446__$1 = (function (){var statearr_44453 = state_44446;(statearr_44453[9] = inst_44430);
return statearr_44453;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,12,dchan);
} else
{if((state_val_44447 === 6))
{var state_44446__$1 = state_44446;var statearr_44454_44481 = state_44446__$1;(statearr_44454_44481[2] = null);
(statearr_44454_44481[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 7))
{var state_44446__$1 = state_44446;var statearr_44455_44482 = state_44446__$1;(statearr_44455_44482[2] = null);
(statearr_44455_44482[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 8))
{var inst_44428 = (state_44446[2]);var state_44446__$1 = state_44446;var statearr_44456_44483 = state_44446__$1;(statearr_44456_44483[2] = inst_44428);
(statearr_44456_44483[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 9))
{var inst_44410 = (state_44446[7]);var inst_44423 = (state_44446[2]);var inst_44424 = (inst_44410 + 1);var inst_44410__$1 = inst_44424;var state_44446__$1 = (function (){var statearr_44457 = state_44446;(statearr_44457[7] = inst_44410__$1);
(statearr_44457[10] = inst_44423);
return statearr_44457;
})();var statearr_44458_44484 = state_44446__$1;(statearr_44458_44484[2] = null);
(statearr_44458_44484[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 10))
{var inst_44414 = (state_44446[2]);var inst_44415 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_44446__$1 = (function (){var statearr_44459 = state_44446;(statearr_44459[11] = inst_44414);
return statearr_44459;
})();var statearr_44460_44485 = state_44446__$1;(statearr_44460_44485[2] = inst_44415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44446__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 11))
{var inst_44410 = (state_44446[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44446,10,Object,null,9);var inst_44419 = chs__$1.call(null,inst_44410);var inst_44420 = done.call(null,inst_44410);var inst_44421 = cljs.core.async.take_BANG_.call(null,inst_44419,inst_44420);var state_44446__$1 = state_44446;var statearr_44461_44486 = state_44446__$1;(statearr_44461_44486[2] = inst_44421);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44446__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 12))
{var inst_44432 = (state_44446[12]);var inst_44432__$1 = (state_44446[2]);var inst_44433 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44432__$1);var state_44446__$1 = (function (){var statearr_44462 = state_44446;(statearr_44462[12] = inst_44432__$1);
return statearr_44462;
})();if(cljs.core.truth_(inst_44433))
{var statearr_44463_44487 = state_44446__$1;(statearr_44463_44487[1] = 13);
} else
{var statearr_44464_44488 = state_44446__$1;(statearr_44464_44488[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 13))
{var inst_44435 = cljs.core.async.close_BANG_.call(null,out);var state_44446__$1 = state_44446;var statearr_44465_44489 = state_44446__$1;(statearr_44465_44489[2] = inst_44435);
(statearr_44465_44489[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 14))
{var inst_44432 = (state_44446[12]);var inst_44437 = cljs.core.apply.call(null,f,inst_44432);var state_44446__$1 = state_44446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44446__$1,16,out,inst_44437);
} else
{if((state_val_44447 === 15))
{var inst_44442 = (state_44446[2]);var state_44446__$1 = state_44446;var statearr_44466_44490 = state_44446__$1;(statearr_44466_44490[2] = inst_44442);
(statearr_44466_44490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44447 === 16))
{var inst_44439 = (state_44446[2]);var state_44446__$1 = (function (){var statearr_44467 = state_44446;(statearr_44467[13] = inst_44439);
return statearr_44467;
})();var statearr_44468_44491 = state_44446__$1;(statearr_44468_44491[2] = null);
(statearr_44468_44491[1] = 2);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44472 = (new Array(14));(statearr_44472[0] = state_machine__39965__auto__);
(statearr_44472[1] = 1);
return statearr_44472;
});
var state_machine__39965__auto____1 = (function (state_44446){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_44446);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44473){if((e44473 instanceof Object))
{var ex__39968__auto__ = e44473;var statearr_44474_44492 = state_44446;(statearr_44474_44492[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44493 = state_44446;
state_44446 = G__44493;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_44446){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_44446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44475 = f__40035__auto__.call(null);(statearr_44475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44476);
return statearr_44475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__40034__auto___44601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_44577){var state_val_44578 = (state_44577[1]);if((state_val_44578 === 1))
{var inst_44548 = cljs.core.vec.call(null,chs);var inst_44549 = inst_44548;var state_44577__$1 = (function (){var statearr_44579 = state_44577;(statearr_44579[7] = inst_44549);
return statearr_44579;
})();var statearr_44580_44602 = state_44577__$1;(statearr_44580_44602[2] = null);
(statearr_44580_44602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 2))
{var inst_44549 = (state_44577[7]);var inst_44551 = cljs.core.count.call(null,inst_44549);var inst_44552 = (inst_44551 > 0);var state_44577__$1 = state_44577;if(cljs.core.truth_(inst_44552))
{var statearr_44581_44603 = state_44577__$1;(statearr_44581_44603[1] = 4);
} else
{var statearr_44582_44604 = state_44577__$1;(statearr_44582_44604[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 3))
{var inst_44575 = (state_44577[2]);var state_44577__$1 = state_44577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44577__$1,inst_44575);
} else
{if((state_val_44578 === 4))
{var inst_44549 = (state_44577[7]);var state_44577__$1 = state_44577;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_44577__$1,7,inst_44549);
} else
{if((state_val_44578 === 5))
{var inst_44571 = cljs.core.async.close_BANG_.call(null,out);var state_44577__$1 = state_44577;var statearr_44583_44605 = state_44577__$1;(statearr_44583_44605[2] = inst_44571);
(statearr_44583_44605[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 6))
{var inst_44573 = (state_44577[2]);var state_44577__$1 = state_44577;var statearr_44584_44606 = state_44577__$1;(statearr_44584_44606[2] = inst_44573);
(statearr_44584_44606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 7))
{var inst_44556 = (state_44577[8]);var inst_44557 = (state_44577[9]);var inst_44556__$1 = (state_44577[2]);var inst_44557__$1 = cljs.core.nth.call(null,inst_44556__$1,0,null);var inst_44558 = cljs.core.nth.call(null,inst_44556__$1,1,null);var inst_44559 = (inst_44557__$1 == null);var state_44577__$1 = (function (){var statearr_44585 = state_44577;(statearr_44585[8] = inst_44556__$1);
(statearr_44585[9] = inst_44557__$1);
(statearr_44585[10] = inst_44558);
return statearr_44585;
})();if(cljs.core.truth_(inst_44559))
{var statearr_44586_44607 = state_44577__$1;(statearr_44586_44607[1] = 8);
} else
{var statearr_44587_44608 = state_44577__$1;(statearr_44587_44608[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 8))
{var inst_44549 = (state_44577[7]);var inst_44556 = (state_44577[8]);var inst_44557 = (state_44577[9]);var inst_44558 = (state_44577[10]);var inst_44561 = (function (){var c = inst_44558;var v = inst_44557;var vec__44554 = inst_44556;var cs = inst_44549;return ((function (c,v,vec__44554,cs,inst_44549,inst_44556,inst_44557,inst_44558,state_val_44578){
return (function (p1__44494_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__44494_SHARP_);
});
;})(c,v,vec__44554,cs,inst_44549,inst_44556,inst_44557,inst_44558,state_val_44578))
})();var inst_44562 = cljs.core.filterv.call(null,inst_44561,inst_44549);var inst_44549__$1 = inst_44562;var state_44577__$1 = (function (){var statearr_44588 = state_44577;(statearr_44588[7] = inst_44549__$1);
return statearr_44588;
})();var statearr_44589_44609 = state_44577__$1;(statearr_44589_44609[2] = null);
(statearr_44589_44609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 9))
{var inst_44557 = (state_44577[9]);var state_44577__$1 = state_44577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44577__$1,11,out,inst_44557);
} else
{if((state_val_44578 === 10))
{var inst_44569 = (state_44577[2]);var state_44577__$1 = state_44577;var statearr_44591_44610 = state_44577__$1;(statearr_44591_44610[2] = inst_44569);
(statearr_44591_44610[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44578 === 11))
{var inst_44549 = (state_44577[7]);var inst_44566 = (state_44577[2]);var tmp44590 = inst_44549;var inst_44549__$1 = tmp44590;var state_44577__$1 = (function (){var statearr_44592 = state_44577;(statearr_44592[11] = inst_44566);
(statearr_44592[7] = inst_44549__$1);
return statearr_44592;
})();var statearr_44593_44611 = state_44577__$1;(statearr_44593_44611[2] = null);
(statearr_44593_44611[1] = 2);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44597 = (new Array(12));(statearr_44597[0] = state_machine__39965__auto__);
(statearr_44597[1] = 1);
return statearr_44597;
});
var state_machine__39965__auto____1 = (function (state_44577){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_44577);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44598){if((e44598 instanceof Object))
{var ex__39968__auto__ = e44598;var statearr_44599_44612 = state_44577;(statearr_44599_44612[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44613 = state_44577;
state_44577 = G__44613;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_44577){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_44577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44600 = f__40035__auto__.call(null);(statearr_44600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44601);
return statearr_44600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__40034__auto___44706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_44683){var state_val_44684 = (state_44683[1]);if((state_val_44684 === 1))
{var inst_44660 = 0;var state_44683__$1 = (function (){var statearr_44685 = state_44683;(statearr_44685[7] = inst_44660);
return statearr_44685;
})();var statearr_44686_44707 = state_44683__$1;(statearr_44686_44707[2] = null);
(statearr_44686_44707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 2))
{var inst_44660 = (state_44683[7]);var inst_44662 = (inst_44660 < n);var state_44683__$1 = state_44683;if(cljs.core.truth_(inst_44662))
{var statearr_44687_44708 = state_44683__$1;(statearr_44687_44708[1] = 4);
} else
{var statearr_44688_44709 = state_44683__$1;(statearr_44688_44709[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 3))
{var inst_44680 = (state_44683[2]);var inst_44681 = cljs.core.async.close_BANG_.call(null,out);var state_44683__$1 = (function (){var statearr_44689 = state_44683;(statearr_44689[8] = inst_44680);
return statearr_44689;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44683__$1,inst_44681);
} else
{if((state_val_44684 === 4))
{var state_44683__$1 = state_44683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44683__$1,7,ch);
} else
{if((state_val_44684 === 5))
{var state_44683__$1 = state_44683;var statearr_44690_44710 = state_44683__$1;(statearr_44690_44710[2] = null);
(statearr_44690_44710[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 6))
{var inst_44678 = (state_44683[2]);var state_44683__$1 = state_44683;var statearr_44691_44711 = state_44683__$1;(statearr_44691_44711[2] = inst_44678);
(statearr_44691_44711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 7))
{var inst_44665 = (state_44683[9]);var inst_44665__$1 = (state_44683[2]);var inst_44666 = (inst_44665__$1 == null);var inst_44667 = cljs.core.not.call(null,inst_44666);var state_44683__$1 = (function (){var statearr_44692 = state_44683;(statearr_44692[9] = inst_44665__$1);
return statearr_44692;
})();if(inst_44667)
{var statearr_44693_44712 = state_44683__$1;(statearr_44693_44712[1] = 8);
} else
{var statearr_44694_44713 = state_44683__$1;(statearr_44694_44713[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 8))
{var inst_44665 = (state_44683[9]);var state_44683__$1 = state_44683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44683__$1,11,out,inst_44665);
} else
{if((state_val_44684 === 9))
{var state_44683__$1 = state_44683;var statearr_44695_44714 = state_44683__$1;(statearr_44695_44714[2] = null);
(statearr_44695_44714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 10))
{var inst_44675 = (state_44683[2]);var state_44683__$1 = state_44683;var statearr_44696_44715 = state_44683__$1;(statearr_44696_44715[2] = inst_44675);
(statearr_44696_44715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44684 === 11))
{var inst_44660 = (state_44683[7]);var inst_44670 = (state_44683[2]);var inst_44671 = (inst_44660 + 1);var inst_44660__$1 = inst_44671;var state_44683__$1 = (function (){var statearr_44697 = state_44683;(statearr_44697[7] = inst_44660__$1);
(statearr_44697[10] = inst_44670);
return statearr_44697;
})();var statearr_44698_44716 = state_44683__$1;(statearr_44698_44716[2] = null);
(statearr_44698_44716[1] = 2);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44702 = (new Array(11));(statearr_44702[0] = state_machine__39965__auto__);
(statearr_44702[1] = 1);
return statearr_44702;
});
var state_machine__39965__auto____1 = (function (state_44683){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_44683);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44703){if((e44703 instanceof Object))
{var ex__39968__auto__ = e44703;var statearr_44704_44717 = state_44683;(statearr_44704_44717[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44718 = state_44683;
state_44683 = G__44718;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_44683){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_44683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44705 = f__40035__auto__.call(null);(statearr_44705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44706);
return statearr_44705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__40034__auto___44815 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_44790){var state_val_44791 = (state_44790[1]);if((state_val_44791 === 1))
{var inst_44767 = null;var state_44790__$1 = (function (){var statearr_44792 = state_44790;(statearr_44792[7] = inst_44767);
return statearr_44792;
})();var statearr_44793_44816 = state_44790__$1;(statearr_44793_44816[2] = null);
(statearr_44793_44816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 2))
{var state_44790__$1 = state_44790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,4,ch);
} else
{if((state_val_44791 === 3))
{var inst_44787 = (state_44790[2]);var inst_44788 = cljs.core.async.close_BANG_.call(null,out);var state_44790__$1 = (function (){var statearr_44794 = state_44790;(statearr_44794[8] = inst_44787);
return statearr_44794;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44790__$1,inst_44788);
} else
{if((state_val_44791 === 4))
{var inst_44770 = (state_44790[9]);var inst_44770__$1 = (state_44790[2]);var inst_44771 = (inst_44770__$1 == null);var inst_44772 = cljs.core.not.call(null,inst_44771);var state_44790__$1 = (function (){var statearr_44795 = state_44790;(statearr_44795[9] = inst_44770__$1);
return statearr_44795;
})();if(inst_44772)
{var statearr_44796_44817 = state_44790__$1;(statearr_44796_44817[1] = 5);
} else
{var statearr_44797_44818 = state_44790__$1;(statearr_44797_44818[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 5))
{var inst_44767 = (state_44790[7]);var inst_44770 = (state_44790[9]);var inst_44774 = cljs.core._EQ_.call(null,inst_44770,inst_44767);var state_44790__$1 = state_44790;if(inst_44774)
{var statearr_44798_44819 = state_44790__$1;(statearr_44798_44819[1] = 8);
} else
{var statearr_44799_44820 = state_44790__$1;(statearr_44799_44820[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 6))
{var state_44790__$1 = state_44790;var statearr_44801_44821 = state_44790__$1;(statearr_44801_44821[2] = null);
(statearr_44801_44821[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 7))
{var inst_44785 = (state_44790[2]);var state_44790__$1 = state_44790;var statearr_44802_44822 = state_44790__$1;(statearr_44802_44822[2] = inst_44785);
(statearr_44802_44822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 8))
{var inst_44767 = (state_44790[7]);var tmp44800 = inst_44767;var inst_44767__$1 = tmp44800;var state_44790__$1 = (function (){var statearr_44803 = state_44790;(statearr_44803[7] = inst_44767__$1);
return statearr_44803;
})();var statearr_44804_44823 = state_44790__$1;(statearr_44804_44823[2] = null);
(statearr_44804_44823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 9))
{var inst_44770 = (state_44790[9]);var state_44790__$1 = state_44790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44790__$1,11,out,inst_44770);
} else
{if((state_val_44791 === 10))
{var inst_44782 = (state_44790[2]);var state_44790__$1 = state_44790;var statearr_44805_44824 = state_44790__$1;(statearr_44805_44824[2] = inst_44782);
(statearr_44805_44824[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44791 === 11))
{var inst_44770 = (state_44790[9]);var inst_44779 = (state_44790[2]);var inst_44767 = inst_44770;var state_44790__$1 = (function (){var statearr_44806 = state_44790;(statearr_44806[10] = inst_44779);
(statearr_44806[7] = inst_44767);
return statearr_44806;
})();var statearr_44807_44825 = state_44790__$1;(statearr_44807_44825[2] = null);
(statearr_44807_44825[1] = 2);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44811 = (new Array(11));(statearr_44811[0] = state_machine__39965__auto__);
(statearr_44811[1] = 1);
return statearr_44811;
});
var state_machine__39965__auto____1 = (function (state_44790){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_44790);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44812){if((e44812 instanceof Object))
{var ex__39968__auto__ = e44812;var statearr_44813_44826 = state_44790;(statearr_44813_44826[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44790);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44827 = state_44790;
state_44790 = G__44827;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_44790){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_44790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44814 = f__40035__auto__.call(null);(statearr_44814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44815);
return statearr_44814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__40034__auto___44962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_44932){var state_val_44933 = (state_44932[1]);if((state_val_44933 === 1))
{var inst_44895 = (new Array(n));var inst_44896 = inst_44895;var inst_44897 = 0;var state_44932__$1 = (function (){var statearr_44934 = state_44932;(statearr_44934[7] = inst_44896);
(statearr_44934[8] = inst_44897);
return statearr_44934;
})();var statearr_44935_44963 = state_44932__$1;(statearr_44935_44963[2] = null);
(statearr_44935_44963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 2))
{var state_44932__$1 = state_44932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44932__$1,4,ch);
} else
{if((state_val_44933 === 3))
{var inst_44930 = (state_44932[2]);var state_44932__$1 = state_44932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44932__$1,inst_44930);
} else
{if((state_val_44933 === 4))
{var inst_44900 = (state_44932[9]);var inst_44900__$1 = (state_44932[2]);var inst_44901 = (inst_44900__$1 == null);var inst_44902 = cljs.core.not.call(null,inst_44901);var state_44932__$1 = (function (){var statearr_44936 = state_44932;(statearr_44936[9] = inst_44900__$1);
return statearr_44936;
})();if(inst_44902)
{var statearr_44937_44964 = state_44932__$1;(statearr_44937_44964[1] = 5);
} else
{var statearr_44938_44965 = state_44932__$1;(statearr_44938_44965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 5))
{var inst_44900 = (state_44932[9]);var inst_44905 = (state_44932[10]);var inst_44896 = (state_44932[7]);var inst_44897 = (state_44932[8]);var inst_44904 = (inst_44896[inst_44897] = inst_44900);var inst_44905__$1 = (inst_44897 + 1);var inst_44906 = (inst_44905__$1 < n);var state_44932__$1 = (function (){var statearr_44939 = state_44932;(statearr_44939[11] = inst_44904);
(statearr_44939[10] = inst_44905__$1);
return statearr_44939;
})();if(cljs.core.truth_(inst_44906))
{var statearr_44940_44966 = state_44932__$1;(statearr_44940_44966[1] = 8);
} else
{var statearr_44941_44967 = state_44932__$1;(statearr_44941_44967[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 6))
{var inst_44897 = (state_44932[8]);var inst_44918 = (inst_44897 > 0);var state_44932__$1 = state_44932;if(cljs.core.truth_(inst_44918))
{var statearr_44943_44968 = state_44932__$1;(statearr_44943_44968[1] = 12);
} else
{var statearr_44944_44969 = state_44932__$1;(statearr_44944_44969[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 7))
{var inst_44928 = (state_44932[2]);var state_44932__$1 = state_44932;var statearr_44945_44970 = state_44932__$1;(statearr_44945_44970[2] = inst_44928);
(statearr_44945_44970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 8))
{var inst_44905 = (state_44932[10]);var inst_44896 = (state_44932[7]);var tmp44942 = inst_44896;var inst_44896__$1 = tmp44942;var inst_44897 = inst_44905;var state_44932__$1 = (function (){var statearr_44946 = state_44932;(statearr_44946[7] = inst_44896__$1);
(statearr_44946[8] = inst_44897);
return statearr_44946;
})();var statearr_44947_44971 = state_44932__$1;(statearr_44947_44971[2] = null);
(statearr_44947_44971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 9))
{var inst_44896 = (state_44932[7]);var inst_44910 = cljs.core.vec.call(null,inst_44896);var state_44932__$1 = state_44932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44932__$1,11,out,inst_44910);
} else
{if((state_val_44933 === 10))
{var inst_44916 = (state_44932[2]);var state_44932__$1 = state_44932;var statearr_44948_44972 = state_44932__$1;(statearr_44948_44972[2] = inst_44916);
(statearr_44948_44972[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 11))
{var inst_44912 = (state_44932[2]);var inst_44913 = (new Array(n));var inst_44896 = inst_44913;var inst_44897 = 0;var state_44932__$1 = (function (){var statearr_44949 = state_44932;(statearr_44949[12] = inst_44912);
(statearr_44949[7] = inst_44896);
(statearr_44949[8] = inst_44897);
return statearr_44949;
})();var statearr_44950_44973 = state_44932__$1;(statearr_44950_44973[2] = null);
(statearr_44950_44973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 12))
{var inst_44896 = (state_44932[7]);var inst_44920 = cljs.core.vec.call(null,inst_44896);var state_44932__$1 = state_44932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44932__$1,15,out,inst_44920);
} else
{if((state_val_44933 === 13))
{var state_44932__$1 = state_44932;var statearr_44951_44974 = state_44932__$1;(statearr_44951_44974[2] = null);
(statearr_44951_44974[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 14))
{var inst_44925 = (state_44932[2]);var inst_44926 = cljs.core.async.close_BANG_.call(null,out);var state_44932__$1 = (function (){var statearr_44952 = state_44932;(statearr_44952[13] = inst_44925);
return statearr_44952;
})();var statearr_44953_44975 = state_44932__$1;(statearr_44953_44975[2] = inst_44926);
(statearr_44953_44975[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44933 === 15))
{var inst_44922 = (state_44932[2]);var state_44932__$1 = state_44932;var statearr_44954_44976 = state_44932__$1;(statearr_44954_44976[2] = inst_44922);
(statearr_44954_44976[1] = 14);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_44958 = (new Array(14));(statearr_44958[0] = state_machine__39965__auto__);
(statearr_44958[1] = 1);
return statearr_44958;
});
var state_machine__39965__auto____1 = (function (state_44932){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_44932);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e44959){if((e44959 instanceof Object))
{var ex__39968__auto__ = e44959;var statearr_44960_44977 = state_44932;(statearr_44960_44977[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44978 = state_44932;
state_44932 = G__44978;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_44932){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_44932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_44961 = f__40035__auto__.call(null);(statearr_44961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___44962);
return statearr_44961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__40034__auto___45121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__40035__auto__ = (function (){var switch__39964__auto__ = (function (state_45091){var state_val_45092 = (state_45091[1]);if((state_val_45092 === 1))
{var inst_45050 = (new Array(0));var inst_45051 = inst_45050;var inst_45052 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_45091__$1 = (function (){var statearr_45093 = state_45091;(statearr_45093[7] = inst_45052);
(statearr_45093[8] = inst_45051);
return statearr_45093;
})();var statearr_45094_45122 = state_45091__$1;(statearr_45094_45122[2] = null);
(statearr_45094_45122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 2))
{var state_45091__$1 = state_45091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45091__$1,4,ch);
} else
{if((state_val_45092 === 3))
{var inst_45089 = (state_45091[2]);var state_45091__$1 = state_45091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45091__$1,inst_45089);
} else
{if((state_val_45092 === 4))
{var inst_45055 = (state_45091[9]);var inst_45055__$1 = (state_45091[2]);var inst_45056 = (inst_45055__$1 == null);var inst_45057 = cljs.core.not.call(null,inst_45056);var state_45091__$1 = (function (){var statearr_45095 = state_45091;(statearr_45095[9] = inst_45055__$1);
return statearr_45095;
})();if(inst_45057)
{var statearr_45096_45123 = state_45091__$1;(statearr_45096_45123[1] = 5);
} else
{var statearr_45097_45124 = state_45091__$1;(statearr_45097_45124[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 5))
{var inst_45055 = (state_45091[9]);var inst_45052 = (state_45091[7]);var inst_45059 = (state_45091[10]);var inst_45059__$1 = f.call(null,inst_45055);var inst_45060 = cljs.core._EQ_.call(null,inst_45059__$1,inst_45052);var inst_45061 = cljs.core.keyword_identical_QMARK_.call(null,inst_45052,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_45062 = (inst_45060) || (inst_45061);var state_45091__$1 = (function (){var statearr_45098 = state_45091;(statearr_45098[10] = inst_45059__$1);
return statearr_45098;
})();if(cljs.core.truth_(inst_45062))
{var statearr_45099_45125 = state_45091__$1;(statearr_45099_45125[1] = 8);
} else
{var statearr_45100_45126 = state_45091__$1;(statearr_45100_45126[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 6))
{var inst_45051 = (state_45091[8]);var inst_45076 = inst_45051.length;var inst_45077 = (inst_45076 > 0);var state_45091__$1 = state_45091;if(cljs.core.truth_(inst_45077))
{var statearr_45102_45127 = state_45091__$1;(statearr_45102_45127[1] = 12);
} else
{var statearr_45103_45128 = state_45091__$1;(statearr_45103_45128[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 7))
{var inst_45087 = (state_45091[2]);var state_45091__$1 = state_45091;var statearr_45104_45129 = state_45091__$1;(statearr_45104_45129[2] = inst_45087);
(statearr_45104_45129[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 8))
{var inst_45055 = (state_45091[9]);var inst_45051 = (state_45091[8]);var inst_45059 = (state_45091[10]);var inst_45064 = inst_45051.push(inst_45055);var tmp45101 = inst_45051;var inst_45051__$1 = tmp45101;var inst_45052 = inst_45059;var state_45091__$1 = (function (){var statearr_45105 = state_45091;(statearr_45105[7] = inst_45052);
(statearr_45105[8] = inst_45051__$1);
(statearr_45105[11] = inst_45064);
return statearr_45105;
})();var statearr_45106_45130 = state_45091__$1;(statearr_45106_45130[2] = null);
(statearr_45106_45130[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 9))
{var inst_45051 = (state_45091[8]);var inst_45067 = cljs.core.vec.call(null,inst_45051);var state_45091__$1 = state_45091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45091__$1,11,out,inst_45067);
} else
{if((state_val_45092 === 10))
{var inst_45074 = (state_45091[2]);var state_45091__$1 = state_45091;var statearr_45107_45131 = state_45091__$1;(statearr_45107_45131[2] = inst_45074);
(statearr_45107_45131[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 11))
{var inst_45055 = (state_45091[9]);var inst_45059 = (state_45091[10]);var inst_45069 = (state_45091[2]);var inst_45070 = (new Array(0));var inst_45071 = inst_45070.push(inst_45055);var inst_45051 = inst_45070;var inst_45052 = inst_45059;var state_45091__$1 = (function (){var statearr_45108 = state_45091;(statearr_45108[12] = inst_45069);
(statearr_45108[7] = inst_45052);
(statearr_45108[8] = inst_45051);
(statearr_45108[13] = inst_45071);
return statearr_45108;
})();var statearr_45109_45132 = state_45091__$1;(statearr_45109_45132[2] = null);
(statearr_45109_45132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 12))
{var inst_45051 = (state_45091[8]);var inst_45079 = cljs.core.vec.call(null,inst_45051);var state_45091__$1 = state_45091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45091__$1,15,out,inst_45079);
} else
{if((state_val_45092 === 13))
{var state_45091__$1 = state_45091;var statearr_45110_45133 = state_45091__$1;(statearr_45110_45133[2] = null);
(statearr_45110_45133[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 14))
{var inst_45084 = (state_45091[2]);var inst_45085 = cljs.core.async.close_BANG_.call(null,out);var state_45091__$1 = (function (){var statearr_45111 = state_45091;(statearr_45111[14] = inst_45084);
return statearr_45111;
})();var statearr_45112_45134 = state_45091__$1;(statearr_45112_45134[2] = inst_45085);
(statearr_45112_45134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45092 === 15))
{var inst_45081 = (state_45091[2]);var state_45091__$1 = state_45091;var statearr_45113_45135 = state_45091__$1;(statearr_45113_45135[2] = inst_45081);
(statearr_45113_45135[1] = 14);
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
});return ((function (switch__39964__auto__){
return (function() {
var state_machine__39965__auto__ = null;
var state_machine__39965__auto____0 = (function (){var statearr_45117 = (new Array(15));(statearr_45117[0] = state_machine__39965__auto__);
(statearr_45117[1] = 1);
return statearr_45117;
});
var state_machine__39965__auto____1 = (function (state_45091){while(true){
var ret_value__39966__auto__ = (function (){try{while(true){
var result__39967__auto__ = switch__39964__auto__.call(null,state_45091);if(cljs.core.keyword_identical_QMARK_.call(null,result__39967__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__39967__auto__;
}
break;
}
}catch (e45118){if((e45118 instanceof Object))
{var ex__39968__auto__ = e45118;var statearr_45119_45136 = state_45091;(statearr_45119_45136[5] = ex__39968__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39966__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45137 = state_45091;
state_45091 = G__45137;
continue;
}
} else
{return ret_value__39966__auto__;
}
break;
}
});
state_machine__39965__auto__ = function(state_45091){
switch(arguments.length){
case 0:
return state_machine__39965__auto____0.call(this);
case 1:
return state_machine__39965__auto____1.call(this,state_45091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__39965__auto____0;
state_machine__39965__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__39965__auto____1;
return state_machine__39965__auto__;
})()
;})(switch__39964__auto__))
})();var state__40036__auto__ = (function (){var statearr_45120 = f__40035__auto__.call(null);(statearr_45120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40034__auto___45121);
return statearr_45120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40036__auto__);
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
