const commonConfig = require('./webpack/common')
const merge = require('webpack-merge')

// 开发环境配置
let config = require('./webpack/dev')

// 生产环境配置
if(process.env.NODE_ENV === 'production') {
  config = require('./webpack/prod')
}

module.exports = merge(commonConfig, config)
