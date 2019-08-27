const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const INDEX_ENTRY = path.resolve(__dirname, './src/index.js')
const MODULES = path.resolve(__dirname, './node_modules')
const TEMPLATES = path.resolve(__dirname, './src/assets/templates/index.html')
const DEV_OUTPUT = path.join(__dirname, "./dist")

module.exports = {
  mode: 'development',

  entry: {
    main: INDEX_ENTRY,
    vendor: ['react', 'react-dom', 'react-router']
  },

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: MODULES,
        use: ['babel-loader']
      },
      {
        test: /\.scss|\.css$/,
        exclude: MODULES,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[path]__[hash:base64:5]]'  // css module
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    // 每次打包前清除dist
    new CleanWebpackPlugin(),
    // 生成html模板
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: TEMPLATES,
      hash: true
    })
  ],

  devServer: {
    contentBase: DEV_OUTPUT,
  },

}