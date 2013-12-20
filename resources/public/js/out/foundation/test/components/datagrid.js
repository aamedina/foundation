// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.datagrid');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.test.templates');
goog.require('foundation.app.message');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.cells');
goog.require('dommy.template');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('foundation.app.message');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.test.cells');
goog.require('foundation.app.ui');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom324762 = document.createElement("div");dom324762.className = "autocomplete";
dom324762.appendChild((function (){var dom324763 = document.createElement("input");dom324763.className = "form-control";
if("text")
{dom324763.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom324763.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom324763;
})());
return dom324762;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom324770 = document.createElement("thead");dom324770.setAttribute("id","datagrid-header");
dom324770.appendChild((function (){var dom324771 = document.createElement("tr");dom324771.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__324772(s__324773){return (new cljs.core.LazySeq(null,(function (){var s__324773__$1 = s__324773;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__324773__$1);if(temp__4092__auto__)
{var s__324773__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__324773__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__324773__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__324775 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__324774 = 0;while(true){
if((i__324774 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__324774);cljs.core.chunk_append.call(null,b__324775,foundation.test.cells.th.call(null,col));
{
var G__324776 = (i__324774 + 1);
i__324774 = G__324776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324775),iter__324772.call(null,cljs.core.chunk_rest.call(null,s__324773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324775),null);
}
} else
{var col = cljs.core.first.call(null,s__324773__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__324772.call(null,cljs.core.rest.call(null,s__324773__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom324771;
})());
return dom324770;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom324782 = document.createElement("tr");dom324782.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__324783(s__324784){return (new cljs.core.LazySeq(null,(function (){var s__324784__$1 = s__324784;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__324784__$1);if(temp__4092__auto__)
{var s__324784__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__324784__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__324784__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__324786 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__324785 = 0;while(true){
if((i__324785 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__324785);cljs.core.chunk_append.call(null,b__324786,foundation.test.cells.td.call(null,col,model));
{
var G__324787 = (i__324785 + 1);
i__324785 = G__324787;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324786),iter__324783.call(null,cljs.core.chunk_rest.call(null,s__324784__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324786),null);
}
} else
{var col = cljs.core.first.call(null,s__324784__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__324783.call(null,cljs.core.rest.call(null,s__324784__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom324782;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){var dom324793 = document.createElement("tbody");dom324793.className = "datagrid-tbody";
dom324793.setAttribute("id","datagrid-body");
dom324793.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__324794(s__324795){return (new cljs.core.LazySeq(null,(function (){var s__324795__$1 = s__324795;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__324795__$1);if(temp__4092__auto__)
{var s__324795__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__324795__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__324795__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__324797 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__324796 = 0;while(true){
if((i__324796 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__324796);cljs.core.chunk_append.call(null,b__324797,foundation.test.components.datagrid.datagrid_row.call(null,model,columns));
{
var G__324798 = (i__324796 + 1);
i__324796 = G__324798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324797),iter__324794.call(null,cljs.core.chunk_rest.call(null,s__324795__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__324797),null);
}
} else
{var model = cljs.core.first.call(null,s__324795__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,columns),iter__324794.call(null,cljs.core.rest.call(null,s__324795__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom324793;
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom324810 = document.createElement("ol");dom324810.className = "breadcrumb";
dom324810.appendChild((function (){var dom324811 = document.createElement("li");dom324811.className = "active";
dom324811.setAttribute("id","account");
dom324811.appendChild((function (){var dom324812 = document.createElement("div");dom324812.className = "arrow-down";
return dom324812;
})());
dom324811.appendChild((function (){var dom324813 = document.createElement("a");dom324813.appendChild(document.createTextNode("Accounts"));
return dom324813;
})());
dom324811.appendChild((function (){var dom324814 = document.createElement("div");dom324814.className = "arrow-up";
return dom324814;
})());
return dom324811;
})());
dom324810.appendChild((function (){var dom324815 = document.createElement("li");dom324815.className = "hidden";
dom324815.setAttribute("id","campaign");
dom324815.appendChild((function (){var dom324816 = document.createElement("a");dom324816.appendChild(document.createTextNode("Campaigns"));
return dom324816;
})());
return dom324815;
})());
dom324810.appendChild((function (){var dom324817 = document.createElement("li");dom324817.className = "hidden";
dom324817.setAttribute("id","line_item");
dom324817.appendChild((function (){var dom324818 = document.createElement("a");dom324818.appendChild(document.createTextNode("Line Items"));
return dom324818;
})());
return dom324817;
})());
dom324810.appendChild((function (){var dom324819 = document.createElement("li");dom324819.className = "hidden";
dom324819.setAttribute("id","promoted_tweet");
dom324819.appendChild((function (){var dom324820 = document.createElement("a");dom324820.appendChild(document.createTextNode("Promoted Products"));
return dom324820;
})());
return dom324819;
})());
return dom324810;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.new_button = (function new_button(input){if(typeof foundation.test.components.datagrid.t324824 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t324824 = (function (input,new_button,meta324825){
this.input = input;
this.new_button = new_button;
this.meta324825 = meta324825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t324824.cljs$lang$type = true;
foundation.test.components.datagrid.t324824.cljs$lang$ctorStr = "foundation.test.components.datagrid/t324824";
foundation.test.components.datagrid.t324824.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t324824");
});
foundation.test.components.datagrid.t324824.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t324824.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t324824.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t324824.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t324824.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t324824.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new.btn.btn-success.btn-sm","button#new.btn.btn-success.btn-sm",634778506),"New"], null);
});
foundation.test.components.datagrid.t324824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324826){var self__ = this;
var _324826__$1 = this;return self__.meta324825;
});
foundation.test.components.datagrid.t324824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324826,meta324825__$1){var self__ = this;
var _324826__$1 = this;return (new foundation.test.components.datagrid.t324824(self__.input,self__.new_button,meta324825__$1));
});
foundation.test.components.datagrid.__GT_t324824 = (function __GT_t324824(input__$1,new_button__$1,meta324825){return (new foundation.test.components.datagrid.t324824(input__$1,new_button__$1,meta324825));
});
}
return (new foundation.test.components.datagrid.t324824(input,new_button,null));
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(input,id,model,coll){var dom324841 = document.createElement("div");dom324841.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom324841.setAttribute("id",id);
} else
{}
dom324841.appendChild((function (){var dom324842 = document.createElement("div");dom324842.className = "panel-heading";
dom324842.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom324842.appendChild((function (){var dom324843 = document.createElement("form");dom324843.className = "form-inline pull-right";
dom324843.appendChild((function (){var dom324844 = document.createElement("div");dom324844.className = "form-group";
dom324844.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom324844;
})());
return dom324843;
})());
return dom324842;
})());
dom324841.appendChild((function (){var dom324845 = document.createElement("div");dom324845.className = "panel-body";
dom324845.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom324845;
})());
dom324841.appendChild((function (){var dom324846 = document.createElement("div");dom324846.className = "panel-footer";
dom324846.appendChild((function (){var dom324847 = document.createElement("div");dom324847.className = "form-inline";
dom324847.appendChild((function (){var dom324848 = document.createElement("div");dom324848.className = "form-group";
dom324848.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.new_button.call(null,input)));
return dom324848;
})());
dom324847.appendChild((function (){var dom324849 = document.createElement("div");dom324849.className = "form-group";
dom324849.appendChild((function (){var dom324850 = document.createElement("button");dom324850.className = "btn btn-info btn-sm disabled";
dom324850.setAttribute("id","save");
dom324850.appendChild(document.createTextNode("Save"));
return dom324850;
})());
return dom324849;
})());
dom324847.appendChild((function (){var dom324851 = document.createElement("div");dom324851.className = "form-group";
dom324851.appendChild((function (){var dom324852 = document.createElement("button");dom324852.className = "btn btn-danger btn-sm disabled";
dom324852.setAttribute("id","delete");
dom324852.appendChild(document.createTextNode("Delete"));
return dom324852;
})());
return dom324851;
})());
dom324847.appendChild((function (){var dom324853 = document.createElement("div");dom324853.className = "form-group";
dom324853.appendChild((function (){var dom324854 = document.createElement("button");dom324854.className = "btn btn-primary btn-sm disabled";
dom324854.setAttribute("id","dupe");
dom324854.appendChild(document.createTextNode("Duplicate"));
return dom324854;
})());
return dom324853;
})());
return dom324847;
})());
return dom324846;
})());
return dom324841;
});
foundation.test.components.datagrid.datagrid = (function datagrid(input,id,state){if(typeof foundation.test.components.datagrid.t324858 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t324858 = (function (state,id,input,datagrid,meta324859){
this.state = state;
this.id = id;
this.input = input;
this.datagrid = datagrid;
this.meta324859 = meta324859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t324858.cljs$lang$type = true;
foundation.test.components.datagrid.t324858.cljs$lang$ctorStr = "foundation.test.components.datagrid/t324858";
foundation.test.components.datagrid.t324858.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t324858");
});
foundation.test.components.datagrid.t324858.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.datagrid.t324858.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#new","#new",1015055887)], null);
});
foundation.test.components.datagrid.t324858.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t324858.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.input,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t324858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_324860){var self__ = this;
var _324860__$1 = this;return self__.meta324859;
});
foundation.test.components.datagrid.t324858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_324860,meta324859__$1){var self__ = this;
var _324860__$1 = this;return (new foundation.test.components.datagrid.t324858(self__.state,self__.id,self__.input,self__.datagrid,meta324859__$1));
});
foundation.test.components.datagrid.__GT_t324858 = (function __GT_t324858(state__$1,id__$1,input__$1,datagrid__$1,meta324859){return (new foundation.test.components.datagrid.t324858(state__$1,id__$1,input__$1,datagrid__$1,meta324859));
});
}
return (new foundation.test.components.datagrid.t324858(state,id,input,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map