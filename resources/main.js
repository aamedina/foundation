goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../foundation/app.js", ['foundation.app'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../dommy/attrs.js", ['dommy.attrs'], ['cljs.core', 'clojure.string']);
goog.addDependency("../dommy/utils.js", ['dommy.utils'], ['cljs.core']);
goog.addDependency("../dommy/template.js", ['dommy.template'], ['dommy.attrs', 'cljs.core', 'clojure.string']);
goog.addDependency("../dommy/core.js", ['dommy.core'], ['dommy.attrs', 'cljs.core', 'dommy.template', 'dommy.utils', 'clojure.string']);
goog.addDependency("../foundation/app/router.js", ['foundation.app.router'], ['cljs.core', 'goog.string', 'clojure.string', 'dommy.core']);