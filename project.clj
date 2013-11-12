(defproject foundation "0.1.1-SNAPSHOT"
  :description "Pedestal app fork for CLJS"
  :url "https://github.com/aamedina/foundation"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [org.clojure/math.combinatorics "0.0.6"]
                 [org.clojure/core.typed "0.2.19"]
                 [org.clojure/core.match "0.2.0"]
                 [ring "1.2.0"]
                 [cljs-time "0.1.0-SNAPSHOT"]
                 [tailrecursion/cljs-priority-map "1.0.3"]
                 [compojure "1.1.5"]
                 [hiccup "1.0.4"]
                 [hickory "0.5.2"]
                 [riddley "0.1.6"]
                 [prismatic/dommy "0.1.2"]
                 [domina "1.0.2"]
                 [enlive "1.1.4"]]
  :source-paths ["dev" "src"]
  :main user
  :plugins [[com.cemerick/austin "0.1.3"]
            [com.cemerick/clojurescript.test "0.1.0"]]
  :jvm-opts ["-Xmx1g" "-server"]
  :cljs-path "resources/public/cljs"
  :repl-path ".repl"
  :out-path "out"
  :clean-targets [:target-path :cljs-path :repl-path :out-path])
