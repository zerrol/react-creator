import React from 'react'
import App from './routes'
import {render} from 'react-dom'
import 'mobx-react/batchingForReactDom'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import { ConfigProvider  } from 'antd'
import '@assets/css/index.global.less'

render(
  <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false} >
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
