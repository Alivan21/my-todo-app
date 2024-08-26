"use client";

import { Button, Form, Input } from "antd";

export default function TodoForm() {
  return (
    <Form className="!w-full !space-y-4" layout="vertical">
      <Form.Item className="font-semibold" label="New Task">
        <Input placeholder="eating a sweet candy..." />
      </Form.Item>
      <Form.Item>
        <Button block type="primary">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
}
