(ns foundation.test
  (:require [clojure.browser.repl]
            [clojure.string :as str]
            [foundation.app :as app]
            [foundation.app.router :as r :refer [navigate! route]]
            [foundation.test.services :as services]
            [foundation.test.routes :as routes :refer [app-routes]])
  (:require-macros [secretary.macros :refer [defroute]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(defn ^:export -main []
  (let [router (r/router app-routes)]
    (navigate! router js/document.location.href :method :get)))
