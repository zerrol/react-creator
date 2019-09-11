
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',

  plugins: [
    // 每次打包前清除dist
    new CleanWebpackPlugin(),
    // 分离css文件
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
}