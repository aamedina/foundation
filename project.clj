(defproject foundation "0.1.0-SNAPSHOT"
  :url "https://github.com/aamedina/foundation"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public"
                 "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2120"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [org.clojure/math.combinatorics "0.0.7"]
                 [org.clojure/core.match "0.2.0"]
                 [foundation/cljs.core.logic "0.1.0-SNAPSHOT"]
                 [com.stuartsierra/flow "0.1.0"]
                 [ring "1.2.0"]
                 [formative "0.8.7"]
                 [automat "0.1.0-SNAPSHOT"]
                 [cljs-time "0.1.0-SNAPSHOT"]
                 [compojure "1.1.6"]
                 [hiccup "1.0.4"]
                 [hickory "0.5.2"]
                 [riddley "0.1.6"]
                 [inflections "0.9.5"]
                 [instaparse "1.2.12"]
                 [prismatic/schema "0.1.9"]
                 [prismatic/dommy "0.1.2"]
                 [enlive "1.1.4"]
                 [enfocus "2.1.0-SNAPSHOT"]
                 [garden "1.1.4"]
                 [com.stuartsierra/component "0.2.0"]
                 [avl.clj "0.0.9"]
                 [criterium "0.4.2"]]
  :source-paths ["dev" "src"]
  :main user
  :jvm-opts ["-Xmx1g" "-server"]
  :plugins [[com.cemerick/austin "0.1.3"]
            [com.cemerick/clojurescript.test "0.2.1"]
            [lein-cljsbuild "1.0.1-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:output-to "resources/main.js"
                                   :output-dir "resources/out"
                                   :source-map "resources/main.js.map"
                                   :source-map-path "resources/out"
                                   :optimizations :none}}
                       ;; {:source-paths ["src" "test"]
                       ;;  :compiler {:output-to "resources/simple.js"
                       ;;             :output-dir "resources/out_simple"
                       ;;             :source-map "resources/simple.js.map"
                       ;;             :source-map-path "out_simple"
                       ;;             :optimizations :simple}}
                       ;; {:source-paths ["src" "test"]
                       ;;  :compiler {:output-to "resources/adv.js"
                       ;;             :output-dir "resources/out_adv"
                       ;;             :source-map "resources/adv.js.map"
                       ;;             :source-map-path "out_adv"
                       ;;             :optimizations :advanced}}
                       ]})
