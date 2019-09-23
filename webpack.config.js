const commonConfig = require('./webpack/common.config')
const merge = require('webpack-merge')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

// 开发环境配置
let config = require('./webpack/dev.config')

// 生产环境配置
if(process.env.NODE_ENV === 'production') {
  config = require('./webpack/prod.config')
}

config = merge.smart(commonConfig, config)
// console.log(config.module.rules)
module.exports = smp.wrap(config)
