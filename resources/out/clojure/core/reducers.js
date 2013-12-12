// Compiled by ClojureScript 0.0-2080
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
/**
* Like core/reduce except:
* When init is not provided, (f) is used.
* Maps are reduced with reduce-kv
*/
clojure.core.reducers.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){return reduce.call(null,f,f.call(null),coll);
});
var reduce__3 = (function (f,init,coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core._kv_reduce.call(null,coll,f,init);
} else
{if((coll == null))
{return init;
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f,init);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._reduce.call(null,coll,f,init);
} else
{return null;
}
}
}
}
});
reduce = function(f,init,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,init);
case 3:
return reduce__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
clojure.core.reducers.fold = clojure.core.reducers.reduce;
/**
* Given a reducible collection, and a transformation function xf,
* returns a reducible collection, where any supplied reducing
* fn will be transformed by xf. xf is a function of reducing fn to
* reducing fn.
*/
clojure.core.reducers.reducer = (function reducer(coll,xf){if(typeof clojure.core.reducers.t84923 !== 'undefined')
{} else
{
/**
* @constructor
*/
clojure.core.reducers.t84923 = (function (xf,coll,reducer,meta84924){
this.xf = xf;
this.coll = coll;
this.reducer = reducer;
this.meta84924 = meta84924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 917504;
})
clojure.core.reducers.t84923.cljs$lang$type = true;
clojure.core.reducers.t84923.cljs$lang$ctorStr = "clojure.core.reducers/t84923";
clojure.core.reducers.t84923.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"clojure.core.reducers/t84923");
});
clojure.core.reducers.t84923.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){var self__ = this;
var this$__$1 = this;return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});
clojure.core.reducers.t84923.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){var self__ = this;
var ___$1 = this;return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});
clojure.core.reducers.t84923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84925){var self__ = this;
var _84925__$1 = this;return self__.meta84924;
});
clojure.core.reducers.t84923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84925,meta84924__$1){var self__ = this;
var _84925__$1 = this;return (new clojure.core.reducers.t84923(self__.xf,self__.coll,self__.reducer,meta84924__$1));
});
clojure.core.reducers.__GT_t84923 = (function __GT_t84923(xf__$1,coll__$1,reducer__$1,meta84924){return (new clojure.core.reducers.t84923(xf__$1,coll__$1,reducer__$1,meta84924));
});
}
return (new clojure.core.reducers.t84923(xf,coll,reducer,null));
});
/**
* Given a foldable collection, and a transformation function xf,
* returns a foldable collection, where any supplied reducing
* fn will be transformed by xf. xf is a function of reducing fn to
* reducing fn.
*/
clojure.core.reducers.folder = (function folder(coll,xf){if(typeof clojure.core.reducers.t84929 !== 'undefined')
{} else
{
/**
* @constructor
*/
clojure.core.reducers.t84929 = (function (xf,coll,folder,meta84930){
this.xf = xf;
this.coll = coll;
this.folder = folder;
this.meta84930 = meta84930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 917504;
})
clojure.core.reducers.t84929.cljs$lang$type = true;
clojure.core.reducers.t84929.cljs$lang$ctorStr = "clojure.core.reducers/t84929";
clojure.core.reducers.t84929.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"clojure.core.reducers/t84929");
});
clojure.core.reducers.t84929.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){var self__ = this;
var ___$1 = this;return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});
clojure.core.reducers.t84929.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){var self__ = this;
var ___$1 = this;return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});
clojure.core.reducers.t84929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84931){var self__ = this;
var _84931__$1 = this;return self__.meta84930;
});
clojure.core.reducers.t84929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84931,meta84930__$1){var self__ = this;
var _84931__$1 = this;return (new clojure.core.reducers.t84929(self__.xf,self__.coll,self__.folder,meta84930__$1));
});
clojure.core.reducers.__GT_t84929 = (function __GT_t84929(xf__$1,coll__$1,folder__$1,meta84930){return (new clojure.core.reducers.t84929(xf__$1,coll__$1,folder__$1,meta84930));
});
}
return (new clojure.core.reducers.t84929(xf,coll,folder,null));
});
/**
* Applies f to every value in the reduction of coll. Foldable.
*/
clojure.core.reducers.map = (function() {
var map = null;
var map__1 = (function (f){return (function (x__14238__auto__){return map.call(null,f,x__14238__auto__);
});
});
var map__2 = (function (f,coll){return clojure.core.reducers.folder.call(null,coll,(function (f1){return (function() {
var G__84932 = null;
var G__84932__0 = (function (){return f1.call(null);
});
var G__84932__2 = (function (ret,v){return f1.call(null,ret,f.call(null,v));
});
var G__84932__3 = (function (ret,k,v){return f1.call(null,ret,f.call(null,k,v));
});
G__84932 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__84932__0.call(this);
case 2:
return G__84932__2.call(this,ret,k);
case 3:
return G__84932__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84932;
})()
}));
});
map = function(f,coll){
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
return map;
})()
;
/**
* Applies f to every value in the reduction of coll, concatenating the result
* colls of (f val). Foldable.
*/
clojure.core.reducers.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return (function (x__14238__auto__){return mapcat.call(null,f,x__14238__auto__);
});
});
var mapcat__2 = (function (f,coll){return clojure.core.reducers.folder.call(null,coll,(function (f1){return (function() {
var G__84933 = null;
var G__84933__0 = (function (){return f1.call(null);
});
var G__84933__2 = (function (ret,v){return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__84933__3 = (function (ret,k,v){return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__84933 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__84933__0.call(this);
case 2:
return G__84933__2.call(this,ret,k);
case 3:
return G__84933__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84933;
})()
}));
});
mapcat = function(f,coll){
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
case 2:
return mapcat__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$2 = mapcat__2;
return mapcat;
})()
;
/**
* Retains values in the reduction of coll for which (pred val)
* returns logical true. Foldable.
*/
clojure.core.reducers.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (x__14238__auto__){return filter.call(null,pred,x__14238__auto__);
});
});
var filter__2 = (function (pred,coll){return clojure.core.reducers.folder.call(null,coll,(function (f1){return (function() {
var G__84934 = null;
var G__84934__0 = (function (){return f1.call(null);
});
var G__84934__2 = (function (ret,v){if(cljs.core.truth_(pred.call(null,v)))
{return f1.call(null,ret,v);
} else
{return ret;
}
});
var G__84934__3 = (function (ret,k,v){if(cljs.core.truth_(pred.call(null,k,v)))
{return f1.call(null,ret,k,v);
} else
{return ret;
}
});
G__84934 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__84934__0.call(this);
case 2:
return G__84934__2.call(this,ret,k);
case 3:
return G__84934__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84934;
})()
}));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat foldable
* collection.
*/
clojure.core.reducers.flatten = (function() {
var flatten = null;
var flatten__0 = (function (){return (function (x__14238__auto__){return flatten.call(null,x__14238__auto__);
});
});
var flatten__1 = (function (coll){return clojure.core.reducers.folder.call(null,coll,(function (f1){return (function() {
var G__84935 = null;
var G__84935__0 = (function (){return f1.call(null);
});
var G__84935__2 = (function (ret,v){if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core._reduce.call(null,flatten.call(null,v),f1,ret);
} else
{return f1.call(null,ret,v);
}
});
G__84935 = function(ret,v){
switch(arguments.length){
case 0:
return G__84935__0.call(this);
case 2:
return G__84935__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84935;
})()
}));
});
flatten = function(coll){
switch(arguments.length){
case 0:
return flatten__0.call(this);
case 1:
return flatten__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flatten.cljs$core$IFn$_invoke$arity$0 = flatten__0;
flatten.cljs$core$IFn$_invoke$arity$1 = flatten__1;
return flatten;
})()
;
/**
* Removes values in the reduction of coll for which (pred val)
* returns logical true. Foldable.
*/
clojure.core.reducers.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return (function (x__14238__auto__){return remove.call(null,pred,x__14238__auto__);
});
});
var remove__2 = (function (pred,coll){return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Ends the reduction of coll when (pred val) returns logical false.
*/
clojure.core.reducers.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (x__14238__auto__){return take_while.call(null,pred,x__14238__auto__);
});
});
var take_while__2 = (function (pred,coll){return clojure.core.reducers.reducer.call(null,coll,(function (f1){return (function() {
var G__84936 = null;
var G__84936__0 = (function (){return f1.call(null);
});
var G__84936__2 = (function (ret,v){if(cljs.core.truth_(pred.call(null,v)))
{return f1.call(null,ret,v);
} else
{return cljs.core.reduced.call(null,ret);
}
});
var G__84936__3 = (function (ret,k,v){if(cljs.core.truth_(pred.call(null,k,v)))
{return f1.call(null,ret,k,v);
} else
{return cljs.core.reduced.call(null,ret);
}
});
G__84936 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__84936__0.call(this);
case 2:
return G__84936__2.call(this,ret,k);
case 3:
return G__84936__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84936;
})()
}));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
/**
* Ends the reduction of coll after consuming n values.
*/
clojure.core.reducers.take = (function() {
var take = null;
var take__1 = (function (n){return (function (x__14238__auto__){return take.call(null,n,x__14238__auto__);
});
});
var take__2 = (function (n,coll){return clojure.core.reducers.reducer.call(null,coll,(function (f1){var cnt = cljs.core.atom.call(null,n);return (function() {
var G__84937 = null;
var G__84937__0 = (function (){return f1.call(null);
});
var G__84937__2 = (function (ret,v){cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);
if((cljs.core.deref.call(null,cnt) < 0))
{return cljs.core.reduced.call(null,ret);
} else
{return f1.call(null,ret,v);
}
});
var G__84937__3 = (function (ret,k,v){cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);
if((cljs.core.deref.call(null,cnt) < 0))
{return cljs.core.reduced.call(null,ret);
} else
{return f1.call(null,ret,k,v);
}
});
G__84937 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__84937__0.call(this);
case 2:
return G__84937__2.call(this,ret,k);
case 3:
return G__84937__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84937;
})()
}));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Elides the first n values from the reduction of coll.
*/
clojure.core.reducers.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (x__14238__auto__){return drop.call(null,n,x__14238__auto__);
});
});
var drop__2 = (function (n,coll){return clojure.core.reducers.reducer.call(null,coll,(function (f1){var cnt = cljs.core.atom.call(null,n);return (function() {
var G__84938 = null;
var G__84938__0 = (function (){return f1.call(null);
});
var G__84938__2 = (function (ret,v){cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);
if((cljs.core.deref.call(null,cnt) < 0))
{return f1.call(null,ret,v);
} else
{return ret;
}
});
var G__84938__3 = (function (ret,k,v){cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);
if((cljs.core.deref.call(null,cnt) < 0))
{return f1.call(null,ret,k,v);
} else
{return ret;
}
});
G__84938 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__84938__0.call(this);
case 2:
return G__84938__2.call(this,ret,k);
case 3:
return G__84938__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84938;
})()
}));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;

/**
* @constructor
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
})
clojure.core.reducers.Cat.cljs$lang$type = true;
clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";
clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"clojure.core.reducers/Cat");
});
clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){var self__ = this;
var this$__$1 = this;return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});
clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){var self__ = this;
var ___$1 = this;return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});
clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.cnt;
});
clojure.core.reducers.__GT_Cat = (function __GT_Cat(cnt,left,right){return (new clojure.core.reducers.Cat(cnt,left,right));
});
/**
* A high-performance combining fn that yields the catenation of the
* reduced values. The result is reducible, foldable, seqable and
* counted, providing the identity collections are reducible, seqable
* and counted. The single argument version will build a combining fn
* with the supplied identity constructor. Tests for identity
* with (zero? (count x)). See also foldcat.
*/
clojure.core.reducers.cat = (function() {
var cat = null;
var cat__0 = (function (){return [];
});
var cat__1 = (function (ctor){return (function() {
var G__84939 = null;
var G__84939__0 = (function (){return ctor.call(null);
});
var G__84939__2 = (function (left,right){return cat.call(null,left,right);
});
G__84939 = function(left,right){
switch(arguments.length){
case 0:
return G__84939__0.call(this);
case 2:
return G__84939__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__84939;
})()
});
var cat__2 = (function (left,right){if((cljs.core.count.call(null,left) === 0))
{return right;
} else
{if((cljs.core.count.call(null,right) === 0))
{return left;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));
} else
{return null;
}
}
}
});
cat = function(left,right){
switch(arguments.length){
case 0:
return cat__0.call(this);
case 1:
return cat__1.call(this,left);
case 2:
return cat__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cat.cljs$core$IFn$_invoke$arity$0 = cat__0;
cat.cljs$core$IFn$_invoke$arity$1 = cat__1;
cat.cljs$core$IFn$_invoke$arity$2 = cat__2;
return cat;
})()
;
/**
* .adds x to acc and returns acc
*/
clojure.core.reducers.append_BANG_ = (function append_BANG_(acc,x){var G__84941 = acc;G__84941.push(x);
return G__84941;
});
/**
* Equivalent to (fold cat append! coll)
*/
clojure.core.reducers.foldcat = (function foldcat(coll){return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
* Builds a combining fn out of the supplied operator and identity
* constructor. op must be associative and ctor called with no args
* must return an identity value for it.
*/
clojure.core.reducers.monoid = (function monoid(op,ctor){return (function() {
var m = null;
var m__0 = (function (){return ctor.call(null);
});
var m__2 = (function (a,b){return op.call(null,a,b);
});
m = function(a,b){
switch(arguments.length){
case 0:
return m__0.call(this);
case 2:
return m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
m.cljs$core$IFn$_invoke$arity$0 = m__0;
m.cljs$core$IFn$_invoke$arity$2 = m__2;
return m;
})()
});

//# sourceMappingURL=reducers.js.map