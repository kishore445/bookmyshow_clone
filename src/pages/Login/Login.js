import React from "react";
import { Form } from "antd";
import Button from "../../Componenets/Button";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-main">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">Welcome Again! please login</h1>
        <hr/>
        <Form layout="vertical" className="mt-1">
<Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please Enter your email" }]}
        >
          <input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please Enter your password" }]}
        >
          <input type="password" />
        </Form.Item>
        <div className="flex flex-col mt-2 gap-1">
          <Button fullwidth title='login' type="submit"/>
            <Link to='/Register'className="text-primary">Don't have an account? Register</Link>
        </div>
        </Form>
      
      </div>
    </div>
  );
};

export default Login;
