<template>
  <div class="echarts">
    <multipane class="horizontal-panes" layout="horizontal">
      <div class="pane" :style="{ minHeight: '5%', height: '33%', maxHeight: '95%' }">
        <div id="myChart"></div>
      </div>
      <multipane-resizer></multipane-resizer>
      <div class="pane" :style="{ minHeight: '5%', height: '33%', maxHeight: '95%' }">
        <!-- <div id="myChart"></div> -->
      </div>
      <multipane-resizer></multipane-resizer>
      <div class="pane" :style="{ flexGrow: 1 }">
        <!-- <div id="myChart"></div> -->
      </div>
    </multipane>
  </div>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane';
export default {
  name: 'Echarts',
  props: [],
  data () {
    return {
    }
  },
  components: {
    Multipane,
    MultipaneResizer
  },
  methods: {
    drawLine (){
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
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  position: absolute;
  .horizontal-panes {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    .pane {
      text-align: left;
      padding: 15px;
      overflow: hidden;
    }
    .multipane-resizer {
      margin: 0; 
      left: 0;
      position: relative;
      background: #fff;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      &:before {
        display: block;
        content: "";
        width: 40px;
        height: 2px;
        position: absolute;
        top: 3px;
        left: 50%;
        margin-top: 0;
        margin-left: -1.5px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
      &:hover {
        &:before {
          border-color: #999;
        }
      }
    }
  }
  #myChart{
    width: 100%;
    height: 100%;
  }
}
</style>
