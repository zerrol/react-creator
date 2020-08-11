import { hot } from 'react-hot-loader/root'
import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import routes from './routes'
import asyncRoutes from './asyncRoutes'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home' />
        {
          routes.map(
            (route, index) => 
              <Route key={index} {...route} />
          )
        }
        {
          asyncRoutes.map(
            (route, index) => 
              <Route key={index} {...route} />
          )
        }

      </Switch>
    </HashRouter>
  )

}

// 根节点包裹hot实现热更新
export default hot(App)