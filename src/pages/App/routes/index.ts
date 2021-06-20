import { RouteProps } from 'react-router-dom'
import loadable from '@loadable/component'

import PageHome from '../../Home'
import PageLogin from '../../Login'

interface PageRouteProps extends RouteProps {
  pageOptions?: {
    haveAuth?: boolean,
    haveDefaultLayout?: boolean,
  }
}

export const routes: PageRouteProps[] = [
  {
    path: '/home',
    component: PageHome,
    pageOptions: {
      haveAuth: true,
      haveDefaultLayout: true
    }
  }, 
  {
    path: '/login',
    component: PageLogin,
  },
  { 
    path: '/fly', 
    // 按需加载的页面
    component: loadable(() => import('../../fly')),
    pageOptions: {
      haveAuth: true,
      haveDefaultLayout: true,
    }
  },
]
