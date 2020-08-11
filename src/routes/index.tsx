import { hot } from 'react-hot-loader/root'
import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import Container from '../container'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Container />
      </Switch>
    </HashRouter>
  )

}

// 根节点包裹hot实现热更新
export default hot(App)