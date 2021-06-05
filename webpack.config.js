const commonConfig = require('./webpack/common.config')
const merge = require('webpack-merge')

// 开发环境配置
let config = require('./webpack/dev.config')

// 生产环境配置
if(process.env.NODE_ENV !== 'development') {
  config = require('./webpack/prod.config')(process.env.NODE_ENV  === 'analyze') 
}

config = merge.smart(commonConfig, config)
module.exports = config
