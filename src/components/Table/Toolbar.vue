<template>
  <el-row type="flex" class="row-bg toolbar" justify="space-between">
    <el-col :span="6" class="left">
      <el-upload
        ref="upload"
        action="/"
        :show-file-list="false"
        :on-change="importExcel"
        :auto-upload="false">
        <el-button
          slot="trigger"
          icon="el-icon-upload"
          size="small"
          type="primary">上传文件</el-button>
        <div slot="tip" class="el-upload__tip">只能上传一个xls\xlsx文件，且不超过500kb</div>
      </el-upload>
    </el-col>
    <el-col :span="6" class="right">
      <el-button type="danger" size="small" icon="el-icon-download" :loading="isDownload" @click="download">下载</el-button>
      <el-button type="warning" size="small" icon="el-icon-refresh" :loading="isRefresh" @click="reset">重置</el-button>
    </el-col>
  </el-row>
</template>

<script>
import XLSX from 'xlsx'
export default {
  name: 'Toolbar',
  components: {},
  props: ['tableData'],
  data () {
    return {
      xlsxJson: [],
      isDownload: false,
      isRefresh: false
    }
  },
  methods: {
    importExcel (file) {
      const types = file.name.split('.')[1]
      const isFileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
      if (!isFileType) {
        this.$message('格式错误！请重新选择')
        return
      }
      this.file2Xce(file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          this.xlsxJson = tabJson
          this.$store.state.xlsxJson = tabJson
          this.$emit('getXlsxJson', tabJson)
        }
      })
    },
    file2Xce (file) {
      return new Promise(function (resolve) {
        const reader = new FileReader()
        reader.onload = function (e) {
          const data = e.target.result
          this.wb = XLSX.read(data, {
            type: 'binary'
          })
          const result = []
          this.wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName], {header:1})
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
      })
    },
    download (){
      console.log(this.tableData)
      let sheet = XLSX.utils.json_to_sheet(this.tableData);//将一个table对象转换成一个sheet对象
      this.openDownloadDialog(this.sheet2blob(sheet),'table2echarts.xlsx');
    },
    sheet2blob (sheet, sheetName){
      sheetName = sheetName || 'sheet1';
      let workbook = {
          SheetNames: [sheetName],
          Sheets: {}
      };
      workbook.Sheets[sheetName] = sheet; // 生成excel的配置项

      let wopts = {
          bookType: 'xlsx', // 要生成的文件类型
          bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
          type: 'binary'
      };
      let wbout = XLSX.write(workbook, wopts);
      let blob = new Blob([this.s2ab(wbout)], {
          type: "application/octet-stream"
      }); // 字符串转ArrayBuffer
      
      return blob;
    },
    s2ab (s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    },
    openDownloadDialog (url, saveName){
      if (typeof url == 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url); // 创建blob地址
      }
      let aLink = document.createElement('a');
      aLink.href = url;
      aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      let event;
      if (window.MouseEvent) event = new MouseEvent('click');
      else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      }
      aLink.dispatchEvent(event);
    },
    reset (){
      this.$emit('reset')
    }
  },
}
</script>
<style lang="scss" scoped>
.toolbar{
  white-space: nowrap;
  margin: 10px;
  .left{
    text-align: left;
  }
  .right{
    text-align: right;
  }
}
</style>
