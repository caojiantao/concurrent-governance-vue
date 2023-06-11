<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

let echart = echarts

export default {
  data() {
    return {}
  },
  methods: {
    initChart() {
      let chart = echart.init(document.getElementById('myEcharts'), 'dark')
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: 'category',
          data: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ]
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
            type: 'line',
            smooth: true
          }
        ]
      })
      window.onresize = function () {
        //自适应大小
        chart.resize()
      }
    }
  },
  mounted() {
    this.initChart()
  },
  unmounted() {
    echart.dispose
  }
}
</script>
