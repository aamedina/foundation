// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.rrb_vector');
goog.require('cljs.core');
goog.require('foundation.app.data.rrb_vector.protocols');
goog.require('foundation.app.data.rrb_vector.interop');
goog.require('foundation.app.data.rrb_vector.rrbt');
goog.require('foundation.app.data.rrb_vector.protocols');
/**
* Concatenates the given vectors in logarithmic time.
* @param {...*} var_args
*/
foundation.app.data.rrb_vector.catvec = (function() {
var catvec = null;
var catvec__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var catvec__1 = (function (v1){return v1;
});
var catvec__2 = (function (v1,v2){return foundation.app.data.rrb_vector.protocols._splicev.call(null,v1,v2);
});
var catvec__3 = (function (v1,v2,v3){return foundation.app.data.rrb_vector.protocols._splicev.call(null,foundation.app.data.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});
var catvec__4 = (function (v1,v2,v3,v4){return foundation.app.data.rrb_vector.protocols._splicev.call(null,foundation.app.data.rrb_vector.protocols._splicev.call(null,v1,v2),foundation.app.data.rrb_vector.protocols._splicev.call(null,v3,v4));
});
var catvec__5 = (function() { 
var G__16836__delegate = function (v1,v2,v3,v4,vn){return foundation.app.data.rrb_vector.protocols._splicev.call(null,foundation.app.data.rrb_vector.protocols._splicev.call(null,foundation.app.data.rrb_vector.protocols._splicev.call(null,v1,v2),foundation.app.data.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,catvec,vn));
};
var G__16836 = function (v1,v2,v3,v4,var_args){
var vn = null;if (arguments.length > 4) {
  vn = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__16836__delegate.call(this,v1,v2,v3,v4,vn);};
G__16836.cljs$lang$maxFixedArity = 4;
G__16836.cljs$lang$applyTo = (function (arglist__16837){
var v1 = cljs.core.first(arglist__16837);
arglist__16837 = cljs.core.next(arglist__16837);
var v2 = cljs.core.first(arglist__16837);
arglist__16837 = cljs.core.next(arglist__16837);
var v3 = cljs.core.first(arglist__16837);
arglist__16837 = cljs.core.next(arglist__16837);
var v4 = cljs.core.first(arglist__16837);
var vn = cljs.core.rest(arglist__16837);
return G__16836__delegate(v1,v2,v3,v4,vn);
});
G__16836.cljs$core$IFn$_invoke$arity$variadic = G__16836__delegate;
return G__16836;
})()
;
catvec = function(v1,v2,v3,v4,var_args){
var vn = var_args;
switch(arguments.length){
case 0:
return catvec__0.call(this);
case 1:
return catvec__1.call(this,v1);
case 2:
return catvec__2.call(this,v1,v2);
case 3:
return catvec__3.call(this,v1,v2,v3);
case 4:
return catvec__4.call(this,v1,v2,v3,v4);
default:
return catvec__5.cljs$core$IFn$_invoke$arity$variadic(v1,v2,v3,v4, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
catvec.cljs$lang$maxFixedArity = 4;
catvec.cljs$lang$applyTo = catvec__5.cljs$lang$applyTo;
catvec.cljs$core$IFn$_invoke$arity$0 = catvec__0;
catvec.cljs$core$IFn$_invoke$arity$1 = catvec__1;
catvec.cljs$core$IFn$_invoke$arity$2 = catvec__2;
catvec.cljs$core$IFn$_invoke$arity$3 = catvec__3;
catvec.cljs$core$IFn$_invoke$arity$4 = catvec__4;
catvec.cljs$core$IFn$_invoke$arity$variadic = catvec__5.cljs$core$IFn$_invoke$arity$variadic;
return catvec;
})()
;
/**
* Returns a new vector containing the elements of the given vector v
* lying between the start (inclusive) and end (exclusive) indices in
* logarithmic time. end defaults to end of vector. The resulting
* vector shares structure with the original, but does not hold on to
* any elements of the original vector lying outside the given index
* range.
*/
foundation.app.data.rrb_vector.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return foundation.app.data.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){return foundation.app.data.rrb_vector.protocols._slicev.call(null,v,start,end);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
/**
* Creates a new vector containing the args.
* @param {...*} var_args
*/
foundation.app.data.rrb_vector.vector = (function() {
var vector = null;
var vector__0 = (function (){var arr__16843 = (new Array(0));return (new cljs.core.rrb_vector.rrbt.Vector(0,5,cljs.core.PersistentVector.EMPTY_NODE,arr__16843,null,0));
});
var vector__1 = (function (x1){var arr__16844 = (new Array(1));(arr__16844[0] = x1);
return (new cljs.core.rrb_vector.rrbt.Vector(1,5,cljs.core.PersistentVector.EMPTY_NODE,arr__16844,null,null));
});
var vector__2 = (function (x1,x2){var arr__16845 = (new Array(2));(arr__16845[0] = x1);
(arr__16845[1] = x2);
return (new cljs.core.rrb_vector.rrbt.Vector(2,5,cljs.core.PersistentVector.EMPTY_NODE,arr__16845,null,null));
});
var vector__3 = (function (x1,x2,x3){var arr__16846 = (new Array(3));(arr__16846[0] = x1);
(arr__16846[1] = x2);
(arr__16846[2] = x3);
return (new cljs.core.rrb_vector.rrbt.Vector(3,5,cljs.core.PersistentVector.EMPTY_NODE,arr__16846,null,null));
});
var vector__4 = (function (x1,x2,x3,x4){var arr__16847 = (new Array(4));(arr__16847[0] = x1);
(arr__16847[1] = x2);
(arr__16847[2] = x3);
(arr__16847[3] = x4);
return (new cljs.core.rrb_vector.rrbt.Vector(4,5,cljs.core.PersistentVector.EMPTY_NODE,arr__16847,null,null));
});
var vector__5 = (function() { 
var G__16848__delegate = function (x1,x2,x3,x4,xn){return cljs.core.into.call(null,vector.call(null,x1,x2,x3,x4),xn);
};
var G__16848 = function (x1,x2,x3,x4,var_args){
var xn = null;if (arguments.length > 4) {
  xn = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__16848__delegate.call(this,x1,x2,x3,x4,xn);};
G__16848.cljs$lang$maxFixedArity = 4;
G__16848.cljs$lang$applyTo = (function (arglist__16849){
var x1 = cljs.core.first(arglist__16849);
arglist__16849 = cljs.core.next(arglist__16849);
var x2 = cljs.core.first(arglist__16849);
arglist__16849 = cljs.core.next(arglist__16849);
var x3 = cljs.core.first(arglist__16849);
arglist__16849 = cljs.core.next(arglist__16849);
var x4 = cljs.core.first(arglist__16849);
var xn = cljs.core.rest(arglist__16849);
return G__16848__delegate(x1,x2,x3,x4,xn);
});
G__16848.cljs$core$IFn$_invoke$arity$variadic = G__16848__delegate;
return G__16848;
})()
;
vector = function(x1,x2,x3,x4,var_args){
var xn = var_args;
switch(arguments.length){
case 0:
return vector__0.call(this);
case 1:
return vector__1.call(this,x1);
case 2:
return vector__2.call(this,x1,x2);
case 3:
return vector__3.call(this,x1,x2,x3);
case 4:
return vector__4.call(this,x1,x2,x3,x4);
default:
return vector__5.cljs$core$IFn$_invoke$arity$variadic(x1,x2,x3,x4, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vector.cljs$lang$maxFixedArity = 4;
vector.cljs$lang$applyTo = vector__5.cljs$lang$applyTo;
vector.cljs$core$IFn$_invoke$arity$0 = vector__0;
vector.cljs$core$IFn$_invoke$arity$1 = vector__1;
vector.cljs$core$IFn$_invoke$arity$2 = vector__2;
vector.cljs$core$IFn$_invoke$arity$3 = vector__3;
vector.cljs$core$IFn$_invoke$arity$4 = vector__4;
vector.cljs$core$IFn$_invoke$arity$variadic = vector__5.cljs$core$IFn$_invoke$arity$variadic;
return vector;
})()
;
/**
* Returns a new vector containing the contents of coll.
*/
foundation.app.data.rrb_vector.vec = (function vec(coll){return cljs.core.apply.call(null,foundation.app.data.rrb_vector.vector,coll);
});

//# sourceMappingURL=rrb_vector.js.map