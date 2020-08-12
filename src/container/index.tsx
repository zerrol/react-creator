import React from "react"
import { Layout, Menu } from "antd"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import { HashRouter, Redirect, Route, Switch, Link } from "react-router-dom"
import { useLocalStore, useObserver } from "mobx-react"

import { routes, asyncRoutes } from "@routes"
import styles from "./styles.less"

const { Header, Sider, Content } = Layout

export default () => {
  const store = useLocalStore(() => ({
    collapsed: false,
    toggle() {
      store.collapsed = !store.collapsed
    },
  }))

  return useObserver(() => (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={store.collapsed}>
        <div className={styles.logo} > demo </div>
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
        </Header>
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/home" />

            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
            {asyncRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </HashRouter>
      </Layout>
    </Layout>
  ))
}
