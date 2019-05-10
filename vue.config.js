const webpack = require('webpack')
module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  productionSourceMap:false,
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
  
  configureWebpack: {
   plugins: [

       new webpack.ProvidePlugin({

         $: "jquery",

         jQuery: "jquery",

         "windows.jQuery": "jquery"

       })
     ]
  },
  runtimeCompiler: true, //关键点在这  
  lintOnSave:false,  // 关闭eslint
  // webpack-dev-server 相关配置
  
  devServer: {
    port: 8080,
     open: true,
  },
}
