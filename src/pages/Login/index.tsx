import React from 'react'
import { observer } from 'mobx-react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './styles.module.less'
import { history } from '@router'

export default observer(() => {
  const onFinish = () => {
    message.success('登录成功')
    history.push('/home')
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.form}>
        <div className={styles.title}>Hello React 管理系统</div>
        <Form
          name="page_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入你的账号!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>自动登录</Checkbox>
            </Form.Item>

            <a onClick={() => message.warn('可使用万能密码 mian_xiao_hua ')}>忘记密码</a>
          </Form.Item>

          <Form.Item>
            <Button
              // loading={loading}
              type="primary"
              htmlType="submit"
              className={styles.btn}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.tip}>建议使用Chrome/Edge(Chromium)浏览器</div>
      </div>
    </div>
  )
})