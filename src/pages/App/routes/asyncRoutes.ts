
import loadable from '@loadable/component'

// 注意：loadable import() 中不支持传入变量或者含有变量的字符串，例如 import(`../pages/${name}`)
export default [
  { path: '/fly', component: loadable(() => import('../../fly'))},
]