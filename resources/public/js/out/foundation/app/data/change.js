// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.change');
goog.require('cljs.core');
foundation.app.data.change.find_changes = (function find_changes(changes,old_map,new_map,path){var parent_path = cljs.core.butlast.call(null,path);var k = cljs.core.last.call(null,path);var old_m = ((cljs.core.seq.call(null,parent_path))?cljs.core.get_in.call(null,old_map,parent_path):old_map);var new_m = ((cljs.core.seq.call(null,parent_path))?cljs.core.get_in.call(null,new_map,parent_path):new_map);var o = cljs.core.get.call(null,old_m,k);var n = cljs.core.get.call(null,new_m,k);if(!(cljs.core.contains_QMARK_.call(null,old_m,k)))
{return cljs.core.update_in.call(null,changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if(!(cljs.core.contains_QMARK_.call(null,new_m,k)))
{return cljs.core.update_in.call(null,changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removed","removed",2105740242)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if((cljs.core.not_EQ_.call(null,o,n)) && ((!(cljs.core.map_QMARK_.call(null,o))) || (!(cljs.core.map_QMARK_.call(null,n)))))
{return cljs.core.update_in.call(null,changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated","updated",779473965)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),path);
} else
{if((cljs.core.not_EQ_.call(null,o,n)) && (cljs.core.map_QMARK_.call(null,o)) && (cljs.core.map_QMARK_.call(null,n)))
{return cljs.core.reduce.call(null,(function (a,k__$1){return find_changes.call(null,a,old_map,new_map,cljs.core.conj.call(null,path,k__$1));
}),changes,cljs.core.into.call(null,cljs.core.keys.call(null,n),cljs.core.keys.call(null,o)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return changes;
} else
{return null;
}
}
}
}
}
});
foundation.app.data.change.merge_changes = (function merge_changes(c1,c2){return cljs.core.merge_with.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),c1,c2);
});
foundation.app.data.change.descendent_QMARK_ = (function descendent_QMARK_(path_a,path_b){var vec__10405 = (((cljs.core.count.call(null,path_a) < cljs.core.count.call(null,path_b)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_a,path_b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_b,path_a], null));var small = cljs.core.nth.call(null,vec__10405,0,null);var large = cljs.core.nth.call(null,vec__10405,1,null);return cljs.core._EQ_.call(null,small,cljs.core.take.call(null,cljs.core.count.call(null,small),large));
});
foundation.app.data.change.remove_redundant_updates = (function remove_redundant_updates(updates){return cljs.core.reduce.call(null,(function (a,update){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10406_SHARP_){return foundation.app.data.change.descendent_QMARK_.call(null,p1__10406_SHARP_,update);
}),a)))
{return a;
} else
{return cljs.core.conj.call(null,a,update);
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.count,updates)));
});
foundation.app.data.change.remove_redundant_adds = (function remove_redundant_adds(adds){return cljs.core.reduce.call(null,(function (a,add){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10407_SHARP_){return foundation.app.data.change.descendent_QMARK_.call(null,p1__10407_SHARP_,add);
}),a)))
{return a;
} else
{return cljs.core.conj.call(null,a,add);
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.sort_by.call(null,cljs.core.count,adds));
});
foundation.app.data.change.remove_updates_covered_by_adds = (function remove_updates_covered_by_adds(updates,adds){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (u){return cljs.core.some.call(null,(function (a){return foundation.app.data.change.descendent_QMARK_.call(null,a,u);
}),adds);
}),updates));
});
foundation.app.data.change.remove_updates_covered_by_removes = (function remove_updates_covered_by_removes(updates,removes){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (u){return cljs.core.some.call(null,(function (r){return foundation.app.data.change.descendent_QMARK_.call(null,r,u);
}),removes);
}),updates));
});
foundation.app.data.change.compact = (function compact(old_m,new_m,p__10408){var map__10412 = p__10408;var map__10412__$1 = ((cljs.core.seq_QMARK_.call(null,map__10412))?cljs.core.apply.call(null,cljs.core.hash_map,map__10412):map__10412);var change = map__10412__$1;var inspect = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"inspect","inspect",2971358598));var removed = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"removed","removed",2105740242));var updated = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"updated","updated",779473965));var added = cljs.core.get.call(null,map__10412__$1,new cljs.core.Keyword(null,"added","added",1106564210));var change__$1 = cljs.core.reduce.call(null,(function (a,change_path){return foundation.app.data.change.find_changes.call(null,a,old_m,new_m,change_path);
}),change,inspect);var change__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"updated","updated",779473965).cljs$core$IFn$_invoke$arity$1(change__$1))?cljs.core.update_in.call(null,change__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated","updated",779473965)], null),foundation.app.data.change.remove_redundant_updates):change__$1);var change__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"added","added",1106564210).cljs$core$IFn$_invoke$arity$1(change__$2))?cljs.core.update_in.call(null,change__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210)], null),foundation.app.data.change.remove_redundant_adds):change__$2);var change__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"updated","updated",779473965).cljs$core$IFn$_invoke$arity$1(change__$3))?cljs.core.update_in.call(null,change__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated","updated",779473965)], null),foundation.app.data.change.remove_updates_covered_by_adds,new cljs.core.Keyword(null,"added","added",1106564210).cljs$core$IFn$_invoke$arity$1(change__$3)):change__$3);var change__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"updated","updated",779473965).cljs$core$IFn$_invoke$arity$1(change__$4))?cljs.core.update_in.call(null,change__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated","updated",779473965)], null),foundation.app.data.change.remove_updates_covered_by_removes,new cljs.core.Keyword(null,"removed","removed",2105740242).cljs$core$IFn$_invoke$arity$1(change__$4)):change__$4);return cljs.core.reduce.call(null,(function (a,p__10413){var vec__10414 = p__10413;var k = cljs.core.nth.call(null,vec__10414,0,null);var v = cljs.core.nth.call(null,vec__10414,1,null);if(cljs.core.empty_QMARK_.call(null,v))
{return a;
} else
{return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,change__$5,new cljs.core.Keyword(null,"inspect","inspect",2971358598)));
});

//# sourceMappingURL=change.js.map