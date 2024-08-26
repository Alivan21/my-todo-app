"use client";

import { addTodo } from "@/services/todo";
import { getQueryClient } from "@/utils/query-client";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";

export default function TodoForm() {
  const queryClient = getQueryClient();
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      message.success("Todo added successfully");
      form.resetFields();
    },
    onError: error => {
      message.error(error.message);
    },
  });

  const onFinish = ({ task }: { task: string }) => {
    mutation.mutate(task);
  };

  return (
    <Form className="!w-full !space-y-4" form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item className="font-semibold" label="New Task" name="task">
        <Input placeholder="eating a sweet candy..." />
      </Form.Item>
      <Form.Item>
        <Button block loading={mutation.isPending} type="primary">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
}
