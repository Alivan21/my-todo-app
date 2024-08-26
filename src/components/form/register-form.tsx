import { Button, Form, Input } from "antd";

export default function RegisterForm() {
  return (
    <Form layout="vertical">
      <Form.Item label="Full Name">
        <Input placeholder="John Doe" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="demo@gmail.com" />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item>
        <Button block type="primary">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
