var path = require('path') 

var MODULES = path.resolve(__dirname, './node_modules')

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  // entry: {
  //   main: './src/index.js',
  //   vendor: ['react', 'react-dom', 'react-router']
  // },

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
        test: /\.css$/,
        exclude: MODULES,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[path]__[hash:base64:5]]'
              }
            }
           
          }
        ]
      }
    ]
  },

  devServer: {
    publicPath: '/dist'
  },

}