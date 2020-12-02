import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Alert } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import firebase from '../firebase'
import './index.scss'

const LoginForm = () => {
  const [form] = Form.useForm()
  const [errAlert, setErrAlert] = useState(false)
  let history = useHistory()

  const onFinish = (values) => {
    firebase
      .doSignInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        localStorage.setItem('login', '1')
        history.push('/')
      })
      .catch((err) => {
        setErrAlert(true)
        form.resetFields()
      })
  }
  return (
    <Form
      name="normal_login"
      form={form}
      className="form-container login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div className="label ant-form-item">Login</div>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Email is invalid',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link className="login-form-forgot" to="/signup">
          Register now
        </Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      {errAlert && <Alert message="Error" description="Wrong password" type="error" showIcon />}
    </Form>
  )
}

export default LoginForm
