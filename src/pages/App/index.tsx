import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Router, Redirect,  Switch } from 'react-router-dom'

import Container from './container'
import { history } from '@routes'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Container />
      </Switch>
    </Router>
  )

}

// 根节点包裹hot实现热更新
export default hot(App)