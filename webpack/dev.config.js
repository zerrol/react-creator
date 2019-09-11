const path = require('path') 
const DEV_OUTPUT = path.join(__dirname, "./dist")

module.exports = {
  mode: 'development',

  devtool:"cheap-module-eval-source-map",

  devServer: {
    open: true,
    contentBase: DEV_OUTPUT,
    historyApiFallback: true, // 404重定向
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:3000"
    }
  },
}