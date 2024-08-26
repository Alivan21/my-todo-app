"use client";

import { CheckOutlined } from "@ant-design/icons";
import { Button, List } from "antd";

export default function TodoList() {
  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold">Tasks</h2>
      <List
        dataSource={[
          { id: 1, title: "Task 1" },
          { id: 2, title: "Task 2" },
          { id: 3, title: "Task 3" },
        ]}
        renderItem={item => (
          <List.Item>
            <div className="flex w-full items-center justify-between">
              <p>{item.title}</p>
              <div>
                <Button type="primary">
                  <CheckOutlined />
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
