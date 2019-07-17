<template>
  <div class="table">
    <hot-table :data="data" :settings="hotSettings"></hot-table>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
// import Handsontable from 'handsontable';
import 'handsontable/languages/zh-CN';
import '../../node_modules/handsontable/dist/handsontable.full.css';
export default {
  name: 'Table',
  components: {
    HotTable
  },
  data() {
    return {
      data: [],
      hotSettings: {
        data:[], // 数据在这个里面,由数据填充表
        licenseKey: 'non-commercial-and-evaluation',
        startRows: 10, //初始行列数
        startCols: 35,
        minRows: 1, //最小行列
        minCols: 1,
        rowHeaders: true, //行表头
        colHeaders: [], //自定义列表头or 布尔值
        minSpareCols: 1, //列留白
        // minSpareRows: 2, //行留白
        className: "htCenter",
        currentRowClassName: "currentRow", //为选中行添加类名，可以更改样式
        currentColClassName: "currentCol", //为选中列添加类名
        autoWrapRow: true, //自动换行
        language:'zh-CN',
        contextMenu: [
           "row_above",
           "row_below",
           "col_left",
           "col_right",
           "---------",
           "remove_row",
           "remove_col",
           "---------",
           "alignment",
           'make_read_only',
           "borders",
           "copy",
           "cut"
        ],
        //右键效果
        fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"
        fixedColumnsLeft: 0, //固定左边列数
        fixedRowsTop: 1, //固定上边行数
        columns: [
          //添加每一列的数据类型和一些配置
          {data: 'subordindateUnit'}, // data后面跟的这个字段是上传对应的字段
          {
            data: "excelDetectTime",
            type: "time",
            timeFormat: "h:mm:ss a",
            correctFormat: true
          },
          {data: 'jobNumber'},
          {data: 'name'},
          {
            data: 'phone',
            type: "numeric"
          }, //数值
          {
            data: 'excelGender',
            type: "dropdown",
            source: ["男", "女"],
            strict: false
          },
          {
            data: 'excelBirthday',
            type: "date", //时间格式
            dateFormat: "YYYY-MM-DD",
            correctFormat: true,
            defaultDate: "1960-01-01"
          },
        ],
        updatePlayerList: null
      }
      };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table{
}
</style>
