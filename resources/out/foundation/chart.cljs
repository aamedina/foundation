(ns foundation.chart
  (:require [cljs-time.core :as time]
            [dommy.core :as dom])
  (:require-macros [dommy.macros :refer [sel1]]))

(defn reset-series!
  [chart &
   {:keys [name data interval point-start]
    :or {name "" data [] interval (* 3600 1000)
         point-start (time/ago (time/days 1))}}]
  (doseq [series (.-series chart)]
    (.remove series))
  (.addSeries chart (clj->js {:data data
                              :pointInterval interval
                              :pointStart (.getTime point-start)})))

(defn chart-options
  [el]
  {:title {:text ""}
   :chart {:type "areaspline"
           :borderWidth 0
           :zoomType "x"
           :height 150
           :renderTo el
           :width (- js/document.body.clientWidth 40)
           :marginRight 15
           :marginLeft -15
           :marginTop 30
           :marginbottom -10
           :borderColor "transparent"
           :backgroundColor "transparent"
           :style
           {:fontFamily
            "'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif"
            :fontSize "10px"}
           :ignoreHiddenSeries true}
   :tooltip {:animation true :crosshairs true :borderRadius 0 :borderWidth 1}
   :xAxis {:type "datetime"
           :dateTimeLabelFormats {:day "%b %d" :hour "%l:%M %p"}
           :opposite false
           :tickPosition "inside"
           :tickLength 1
           :tickPixelInterval 130
           :maxPadding 0
           :labels {:y 16 :x 0}
           :plotLines [{:color "#bfbfc2" :dashStyle "dot" :width 1}
                       {:color "#bfbfc2" :dashStyle "dot" :width 1}]}
   :yAxis {:title {:text "" :style {:textTransform "uppercase"
                                    :color "#A3A3A2"}}
           :min 0
           :maxPadding 0
           :gridLineDashStyle "dot"
           :showFirstLabel false
           :showLastLabel true
           :tickPosition "inside"
           :labels {:x 40 :y -5}}
   :series []
   :plotOptions {:areaspline {:fillOpacity 0.10 :lineWidth 2
                              :marker {:radius 0}}}
   :legend {:enabled false}
   :credits {:enabled false}
   :exporting {:url "http://192.241.130.213:8081/export"
               :enabled false
               :buttons {:contextButton {:align "left" :y -5}}}
   :colors ["#527ACB"]})

(defn highchart []
  (js/Highcharts.Chart.
   (clj->js (chart-options (sel1 :div.analytics-highcharts)))))
