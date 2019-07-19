<template>
  <el-row type="flex" class="row-bg toolbar" justify="space-between">
    <el-col :span="6" class="left">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        accept=".xls, .xlsx"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :limit="1"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
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
export default {
  name: 'Toolbar',
  components: {},
  props: [],
  data () {
    return {
      fileList: [],
      isDownload: false,
      isRefresh: false
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit();
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    download (){
    },
    reset (){
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
