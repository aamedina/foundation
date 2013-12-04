(defproject foundation "0.1.0-SNAPSHOT"
  :url "https://github.com/aamedina/foundation"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"sonatype-oss-public"
                 "https://oss.sonatype.org/content/groups/public/"}
  :dependencies [[org.clojure/clojure "1.6.0-alpha3"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [org.clojure/tools.namespace "0.2.4"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [org.clojure/math.combinatorics "0.0.7"]
                 [org.clojure/core.match "0.2.0"]
                 [foundation/cljs.core.logic "0.1.0-SNAPSHOT"]
                 [ring "1.2.0"]
                 [cljs-time "0.1.0-SNAPSHOT"]
                 [compojure "1.1.6"]
                 [hiccup "1.0.4"]
                 [hickory "0.5.2"]
                 [riddley "0.1.6"]
                 [inflections "0.9.5"]
                 [prismatic/dommy "0.1.2"]
                 [enlive "1.1.4"]]
  :source-paths ["dev" "src" "target/classes"]
  :main user
  :jvm-opts ["-Xmx1g" "-server"]
  :plugins [[com.cemerick/austin "0.1.3"]
            [com.cemerick/clojurescript.test "0.2.1"]
            [lein-cljsbuild "1.0.1-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild cljx.hooks]
  :cljsbuild {:builds [{:source-paths ["target/classes" "test"]
                        :compiler {:output-to "resources/main.js"
                                   :output-dir "resources/out"
                                   :source-map "resources/main.js.map"
                                   :source-map-path "out"
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
