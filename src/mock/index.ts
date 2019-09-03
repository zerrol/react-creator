import Mock from 'mockjs'
import {ResponseTest} from './constant'

Mock.setup({
  timeout: '200-600'
})

Mock.mock(RegExp(`.*/api/test$`), () => {
  return ResponseTest
}) // 客户管理列表
