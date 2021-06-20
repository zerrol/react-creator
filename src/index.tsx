import React from "react"
import App from "./pages/App"
import { render } from "react-dom"
import "mobx-react/batchingForReactDom"

import zhCN from "antd/lib/locale-provider/zh_CN"
import { ConfigProvider } from "antd"
import "@assets/css/index.less"
import { Router } from "react-router"
import history from "./router/history"

render(
  <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
    <Router history={history}>
      <App />
    </Router>
  </ConfigProvider>,
  document.getElementById("root")
)
