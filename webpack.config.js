const commonConfig = require('./webpack/common.config')
const merge = require('webpack-merge')

// 开发环境配置
let config = require('./webpack/dev.config')

// 生产环境配置
if(process.env.NODE_ENV === 'production') {
  config = require('./webpack/prod.config')
}

config = merge.smart(commonConfig, config)
// console.log(config.module.rules)
module.exports = config
