import React from "react";
import { Form } from "antd";

const Register = () => {
  return (
    <div>
      <h1>Welcome to BookMyShow</h1>
      <Form layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please Enter your name" }]}
        >
          <input type="text" />
        </Form.Item>
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
        <Form.Item
          label="ForgotPassword"
          name="forgotPassword"
          rules={[{ required: true, message: "Please Enter your ForgotPassword" }]}
        >
          <input type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
