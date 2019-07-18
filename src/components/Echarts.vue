<template>
  <div class="echarts">
      <div id="myChart"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  props: [],
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: 'echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  mounted () {
    this.drawLine();
  }
}
</script>
<style lang="scss">
.echarts{
  width: 100%;
  height: 100%;
  position: absolute;
  #myChart{
    width: 100%;
    height: 100%;
  }
}
</style>
