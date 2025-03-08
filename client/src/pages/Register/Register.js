import React from "react";
import { Form,  message } from "antd";
import Button from "../../Componenets/Button";
import { Link } from 'react-router-dom';
import { registerUser } from "../../APICalls/user";


const Register = () => {
  const onFinish= async (values)=>{
    try{
      const response = await registerUser(values);
      if(response.success){
        message.sucess(response.message);
      }
    }catch(err){
      message.error(err);
    }
  }
  return (
    <div className="flex justify-center h-screen items-center bg-main">

   
    <div className="card p-3 w-400">
      <h1>Welcome to BookMyShow</h1>
      <Form layout="vertical" className="mt-1" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please Enter your name" }]}>
          <input type="text" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please Enter your email" }]} >
          <input type="email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please Enter your password" }]}  >
          <input type="password" />
        </Form.Item>
        <div className="flex flex-col mt-2 gap-1">
          <Button fullwidth title="Register" type="submit"/>
         <Link to="/login" className="text-primary flex justify-center"> Already have an account? login</Link>
        </div>
       
      </Form>
    </div>
    </div>
  );
};

export default Register;
