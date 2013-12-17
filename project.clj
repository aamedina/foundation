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
                 [org.clojure/core.match "0.2.0"]
                 [ring "1.2.0"]
                 [formative "0.8.7"]
                 [cljs-time "0.1.0-SNAPSHOT"]
                 [compojure "1.1.6"]
                 [riddley "0.1.6"]
                 [inflections "0.9.5"]
                 [prismatic/dommy "0.1.2"]
                 [enlive "1.1.4"]
                 [enfocus "2.1.0-SNAPSHOT"]]
  :source-paths ["dev" "src" "test"]
  :jvm-opts ["-Xmx1g" "-server"]
  :plugins [[com.cemerick/austin "0.1.3"]
            [com.cemerick/clojurescript.test "0.2.1"]
            [lein-cljsbuild "1.0.1"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds
              [{:source-paths ["src" "test"]
                :compiler {:output-to "resources/public/js/main.js"
                           :output-dir "resources/public/js/out"
                           :source-map "resources/public/js/main.js.map"
                           :source-map-path "resources/public/js/out"
                           :optimizations :none}}]})
