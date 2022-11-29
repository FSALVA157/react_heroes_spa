//import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/', {
      replace: true
    })
  };
  return (
    <div className="container mt-5">
      <div className="card" style={{width: 30+'rem'}}>
        <div className="card-body">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                

                <Form.Item >
                <div className="d-flex justify-content-between">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  
                </div>
                </Form.Item>
                
                <Form.Item>
                <div className="d-grid gap-2">
                  <Button
                    // onClick={handleLogin()}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button">
                    Log in
                  </Button>
                </div>
                <div className="d-flex justify-content-center">
                  Or  <a href="">register now!</a>
                </div>
                </Form.Item>
              </Form>

        </div>

      </div>
    </div>
  );
};
