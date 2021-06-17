import React from 'react'
import App from './pages/App'
import {render} from 'react-dom'
import 'mobx-react/batchingForReactDom'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import { ConfigProvider  } from 'antd'
import '@assets/css/index.less'

render(
  <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false} >
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
