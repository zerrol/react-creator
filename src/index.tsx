import React from 'react'
import {render} from 'react-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.less'

import App from './routes'

// function App() {
//   return (
//     <span>hello</span>
//   )
// }

render(
  <ConfigProvider>
    <App />
  </ConfigProvider>, 
  document.getElementById('root')
)