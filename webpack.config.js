const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const INDEX_ENTRY = path.resolve(__dirname, './src/index.tsx')
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

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@api': path.join(__dirname, 'src/api')
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
          'style-loader', 
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
  devtool:"cheap-module-eval-source-map",

  devServer: {
    contentBase: DEV_OUTPUT,
    historyApiFallback: true, // 404重定向
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      "/api": "http://localhost:3000"
    }
  },

}