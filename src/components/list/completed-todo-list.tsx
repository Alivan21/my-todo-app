"use client";

import { getCompletedTodos } from "@/services/todo";
import { useQuery } from "@tanstack/react-query";
import { List } from "antd";

export default function CompletedTodo() {
  const { data } = useQuery({
    queryKey: ["completed-todos"],
    queryFn: getCompletedTodos,
  });

  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold">Completed Tasks</h2>
      <List dataSource={data} renderItem={item => <List.Item>{item.task}</List.Item>} />
    </div>
  );
}
