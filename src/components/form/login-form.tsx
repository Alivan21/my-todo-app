"use client";

import { useState } from "react";
import { Login } from "@/services/auth";
import { LoginRequest } from "@/types/auth";
import { Button, Form, Input } from "antd";

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values: LoginRequest) => {
    try {
      console.log(values);
      setSubmitting(true);
      const formData = new FormData();
      formData.set("email", values.email);
      formData.set("password", values.password);
      await Login(formData);
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <Form className="!w-full !space-y-8" layout="vertical" onFinish={onFinish}>
      <Form.Item<LoginRequest>
        className="font-medium"
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="demo@gmail.com" />
      </Form.Item>
      <Form.Item<LoginRequest>
        className="font-medium"
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button block htmlType="submit" loading={submitting} type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
