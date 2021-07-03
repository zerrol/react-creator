import { hot } from "react-hot-loader/root"
import React from "react"
import { Router, Switch } from "react-router-dom"

import LayoutContainer from "./container/Layout"
import BlankContainer from "./container/Blank"
import { history, PageRouteProps } from "@router"
import { routes } from "./routes"
import { Redirect, useLocation } from "react-router"
import { isCurrentRouteInLayout } from "./util"

const App = () => {
  const location = useLocation()

  let isShowBlankContainer = true
  const blankRoutes: PageRouteProps[] = []
  const layoutRoutes: PageRouteProps[] = []

  function initialRoutes() {
    routes.forEach((route) => {
      route.pageOptions?.haveDefaultLayout
        ? layoutRoutes.push(route)
        : blankRoutes.push(route)

      if (isCurrentRouteInLayout(route, location.pathname)) {
        isShowBlankContainer = false
      }
    })
  }

  initialRoutes()

  return (
    <Router history={history}>
      <Switch>
        {isShowBlankContainer ? (
          <BlankContainer routes={blankRoutes} />
        ) : (
          <LayoutContainer routes={layoutRoutes} />
        )}
      </Switch>
    </Router>
  )
}

// 根节点包裹hot实现热更新
export default hot(App)
