const path = require('path') 
const DEV_OUTPUT = path.join(__dirname, "../dist")
const SRC = path.join(__dirname, '../src')

module.exports = {
  mode: 'development',

  // module: {
  //   rules:[
  //     {
  //       test: /\.(t|j)sx?$/,
  //       include: SRC,
  //       enforce: 'pre',
  //       use: {
  //         loader: 'eslint-loader',
  //         // options: {
  //         //   cache: true
  //         // }
  //       }
  //     },
  //   ]
  // },

  devServer: {
    open: true,
    hot: true,
    contentBase: DEV_OUTPUT,
    historyApiFallback: true, // 404重定向
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:3000"
    }
  },
}