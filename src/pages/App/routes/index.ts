import PageHome from '../../Home'
// import PageLogin from '../../Login'

export { default as asyncRoutes } from './asyncRoutes'

export const routes = [
  {
    path: '/home',
    component: PageHome,
    // pageOptions: {
    //   // 默认为true
    //   haveAuth: true,
    //   // 默认为true
    //   haveDefaultLayout: true
    // }
  }, 
  // {
  //   path: '/login',
  //   component: PageLogin,
  //   pageOptions: {
  //     haveAuth: false,
  //     haveDefaultLayout: false
  //   }
  // }
]
