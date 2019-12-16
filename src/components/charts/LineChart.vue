<template>
  <div :class="className" :style="{height:height, width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler (val) {
        this.setOptions(val)
      }
    }
  },
  mounted () {
	  this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose();
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el)
      this.setOptions(this.chartData)
    },
    setOptions ({ data, xAxis, yAxis } = {}) {
      this.chart.setOption({
        xAxis: {
          name: xAxis ? xAxis.name : '',
          data: xAxis ? xAxis.data : [],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 50,
          right: 50,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          name: yAxis ? yAxis.name : '',
          axisTick: {
            show: false
          }
        },
        legend: {
          data: data ? data.map(item => item.name) : []
        },
        series: data
      }, { notMerge: true })
    }
  }
}
</script>
