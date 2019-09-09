import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import routes from './routes'

export default () => {
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
      </Switch>
    </HashRouter>
  )

}
