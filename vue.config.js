const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9999,
    https: false,
    hotOnly: false,
    proxy: null
  },
  publicPath: isProduction ? '/table2echarts/' : '/',
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  configureWebpack: config => {
    if (isProduction) {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex':'Vuex',
        'echarts': 'echarts',
        'element-ui': 'ElementUI',
        'moment': 'moment',
        'xlsx': 'XLSX',
        'handsontable': 'Handsontable',
        'core-js': 'coreJs',
        // '@handsontable/vue': '{ HotTable }',
      }
    }
  },
  chainWebpack: config => {
    if (isProduction) {
      if(process.env.npm_config_report){
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [{'analyzerPort': 8881}])
      }
    }
  }
}