const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const INDEX_ENTRY = path.resolve(__dirname, '../src/index.tsx')
const MOCK_ENTRY = path.resolve(__dirname, '../mock/index.ts')
const MODULES = path.resolve(__dirname, '../node_modules')
const TEMPLATES = path.resolve(__dirname, '../src/assets/templates/index.html')

module.exports = {

  entry: {
    // 主入口
    main: INDEX_ENTRY,
    // mock可以做为另一个入口
    mock: MOCK_ENTRY
  },

  output: {
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@api': path.join(__dirname, '../src/api')
    }
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: MODULES,
        use: ['babel-loader']
      },
      {
        test: /\.scss|\.css$/,
        exclude: MODULES,
        use: [
          // prod需要拆分loader，这里无法通过merge进行自动合并
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              sass: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[local]__[path]__[hash:base64:5]]'  // css module
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  optimization: {
    // 自动拆分node_modules代码
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single'
  },

  plugins: [
    // 生成html模板
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: TEMPLATES,
      hash: true
    })
  ],

}