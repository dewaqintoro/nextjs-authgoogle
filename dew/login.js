import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux';

import AuthGoogle from './components/googleAuth'



const LoginDew = (props,state) => {


  // console.log("ini props page login",props)
  // console.log("ini state",state)

  const router = useRouter()
  const onFinish = values => {
    // console.log('Received values of form: ', values.username);
    if(values.username === "admin" && values.password === "admin"){
      // console.log("ini siapa")
      router.push('/admin')
      // wadudu="1"
      // history.push('/app');
      // <Link href="/persebaran">
      // </Link>
		}else if(values.username === "2" && values.password === "2"){
			// console.log("ini siapa")
      wadudu="2"
      history.push('/app');
		}else{
      alert("user tidak ada")
      wadudu="4"
    }
  };
  return (
    <div className="formDew">


    <AuthGoogle/>
     
    <Form
      name="normal_login"
      className="login-form"
      id="loginDew"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item className="formAuth">
        <h1>Login</h1>
        <a href="">
          <img className="iconGoogle" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1597328370/icon/flat-color-icons_google_bbhrbd.png"/>
        </a>
        <a href="">
          <img src="https://res.cloudinary.com/dewaqintoro/image/upload/v1597328370/icon/fa-brands_facebook_dicqlm.png"/>
        </a>
        <p className="yourAccount">Or use your account</p>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username (admin)" />
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
          placeholder="Password (admin)"
        />
      </Form.Item>
 
      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* <a className="regis" href="http://localhost:3000/registrasi">register now!</a> */}
        <span className="kekLogin regis" onClick={() => router.push('/registrasi')}>
        register now!
        </span>
      </Form.Item>
    </Form>
    </div>
  )
}


export default connect() (LoginDew)
