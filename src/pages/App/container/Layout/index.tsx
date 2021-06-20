import React from "react"
import { Button, Layout, Menu } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  Link,
  Router,
} from "react-router-dom"
import { useLocalStore, useObserver } from "mobx-react"

import styles from "./styles.module.less"
import { AuthRoute, history, PageRouteProps } from "@router"

const { Header, Sider, Content } = Layout

interface LayoutContainerProps {
  routes: PageRouteProps[]
}

export default ({ routes }: LayoutContainerProps) => {
  const store = useLocalStore(() => ({
    collapsed: false,
    toggle() {
      store.collapsed = !store.collapsed
    },
    logout() {
      history.push('/login')
    }
  }))

  return useObserver(() => (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={store.collapsed}>
        <div className={styles.logo}> demo </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/fly">async fly</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles.site}>
        <Header className={styles.background} style={{ padding: 0 }}>
          {React.createElement(
            store.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: styles.trigger,
              onClick: store.toggle,
            }
          )}
          <Button onClick={store.logout}>退出登录</Button>
        </Header>
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
      </Layout>
    </Layout>
  ))
}
