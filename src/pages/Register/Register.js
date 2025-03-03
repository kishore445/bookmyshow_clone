import React from "react";
import { Form } from "antd";
import Button from "../../Componenets/Button";
// import {Link } from "react-router-dom";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-main">

   
    <div className="card p-3 w-400">
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
        <div className="flex flex-col mt-2 gap-1">
          <Button fullwidth title="Register" type="submit"/>
         <Link to="/login" className="text-primary"> Already have an account? login</Link>
        </div>
       
      </Form>
    </div>
    </div>
  );
};

export default Register;
