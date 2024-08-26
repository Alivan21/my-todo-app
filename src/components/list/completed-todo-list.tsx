"use client";

import { List } from "antd";

export default function CompletedTodo() {
  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold">Completed Tasks</h2>
      <List
        dataSource={[
          { id: 1, title: "Task 1" },
          { id: 2, title: "Task 2" },
          { id: 3, title: "Task 3" },
        ]}
        renderItem={() => <List.Item>Task 1</List.Item>}
      />
    </div>
  );
}
