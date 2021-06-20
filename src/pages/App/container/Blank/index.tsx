import { AuthRoute, history, PageRouteProps } from "@router"
import React from "react"
import { Route, Router, Switch } from "react-router"

interface BlankContainerProps {
  routes: PageRouteProps[]
}

export default ({ routes }: BlankContainerProps) => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route) =>
          route.pageOptions?.haveAuth ? (
            <AuthRoute key={route.path?.toString()} {...route} />
          ) : (
            <Route key={route.path?.toString()} {...route} />
          )
        )}
      </Switch>
    </Router>
  )
}
