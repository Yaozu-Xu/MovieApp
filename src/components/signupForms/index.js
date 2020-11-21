import React, { useState } from 'react'
import { Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import firebase from '../firebase'
import './index.scss'

const RegisterForm = () => {
  const [form] = Form.useForm()
  const [successAlert, setSuccessAlert] = useState(false)
  const [errAlert, setErrAlert] = useState(false)

  const onFinish = (values) => {
    firebase
      .doCreateUserWithEmailAndPassword(values.Email, values.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: values.username,
          })
          .then(() => {
            setSuccessAlert(true)
            form.resetFields()
          })
      })
      .catch((err) => setErrAlert(true))
  }
  return (
    <Form
      form={form}
      className="form-container login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <div className="label ant-form-item"> Sign Up </div>
      <Form.Item
        name="Email"
        rules={[
          {
            type: 'email',
            message: 'Email is invalid!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>{' '}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
          {
            min: 3,
            message: 'Length should >= 3',
          },
          {
            max: 12,
            message: 'Length should <= 12',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>{' '}
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
          {
            min: 6,
            message: 'Length should >= 6',
          },
          {
            max: 16,
            message: 'Length should <= 16',
          },
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>{' '}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up{' '}
        </Button>{' '}
      </Form.Item>{' '}
      {successAlert && <Alert message="Success" description="You have sign up successfully" type="success" showIcon />}
      {errAlert && <Alert message="Error" description="Server error" type="error" showIcon />}
    </Form>
  )
}

export default RegisterForm
