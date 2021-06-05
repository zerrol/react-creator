const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const webpackProdConfig = {
  // webpack 4.x 默认使用的 uglyJsPlugin 进行压缩效率较低，可以使用 terser 进行优化
  mode: "production",

  optimization: {
    //webpack4 在 production 环境下默认启动了 ModuleConcatenationPlugin
    //（预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度），
    // 它可能会合并webpack-bundle-analyzer 输出中的模块的一部分，
    // 从而使报告不太详细。建议analyze时将此设置为false
    // concatenateModules: false,
    minimizer: [new TerserWebpackPlugin()],
  },

  plugins: [
    // 每次打包前清除dist
    new CleanWebpackPlugin(),
    // 分离css文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[id].[contenthash].css",
    }),
  ],
};

module.exports = (isAnalyze) => {
  if (isAnalyze) {
    webpackProdConfig.plugins.push(new BundleAnalyzerPlugin());
  }

  return webpackProdConfig;
};
