import Mock from 'mockjs'
import {responseTest} from './constant'

Mock.setup({
  timeout: '200-600'
})

Mock.mock(RegExp(`.*/api/test$`), () => {
  return responseTest
}) // 客户管理列表
