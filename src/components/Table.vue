<template>
  <div class="table">
    <hot-table :settings="hotSettings"></hot-table>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import 'handsontable/languages/zh-CN';
import '../../node_modules/handsontable/dist/handsontable.full.css';
export default {
  name: 'Table',
  components: {
    HotTable
  },
  data() {
    return {
      hotSettings: {
        // data: [[],[]], // 数据在这个里面,由数据填充表
        licenseKey: 'non-commercial-and-evaluation',
        startRows: 20, //初始行列数
        startCols: 18,
        minRows: 20, //最小行列
        minCols: 18,
        rowHeaders: true, //行表头
        colHeaders: true, //自定义列表头or 布尔值
        minSpareCols: 1, //列留白
        minSpareRows: 1, //行留白
        className: "htCenter",
        currentRowClassName: "currentRow", //为选中行添加类名，可以更改样式
        currentColClassName: "currentCol", //为选中列添加类名
        autoWrapRow: true, //自动换行
        language:'zh-CN',
        //右键效果
        fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"
        fixedColumnsLeft: 0, //固定左边列数
        fixedRowsTop: 1, //固定上边行数
        contextMenu: { //右键
          items: {
            'row_above': {
              name: 'Insert row above this one (custom name)'
            },
            'row_below': {},
            'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
            'clear_custom': {
              name: '全部删除',
              callback: function() {
                this.clear();
              }
            }
          }
        },
        updatePlayerList: null
      }
      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table{
  width: 100%;
  height: 100%;
}
</style>
