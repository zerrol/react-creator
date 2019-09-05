
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  plugins: [
    // 每次打包前清除dist
    new CleanWebpackPlugin()
  ]
}