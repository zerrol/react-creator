import React from 'react'
import { Route } from 'react-router'
import { PageRouteProps } from './interface'

const AuthRoute = (props: PageRouteProps) => {
  return (
    <Route {...props}/> 
  )
}


export default AuthRoute