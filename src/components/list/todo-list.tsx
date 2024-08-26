"use client";

import { getTodos, updateTodoStatus } from "@/services/todo";
import { getQueryClient } from "@/utils/query-client";
import { CheckOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, List, message } from "antd";

export default function TodoList() {
  const queryClient = getQueryClient();
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const mutation = useMutation({
    mutationFn: ({ todoId, isComplete }: { todoId: number; isComplete: boolean }) =>
      updateTodoStatus(todoId, isComplete),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completed-todos"] });
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      message.success("Todo status updated successfully!");
    },
    onError: error => {
      message.error(error.message);
    },
  });

  const handleUpdateStatus = (id: number, isComplete: boolean) => {
    mutation.mutate({ todoId: id, isComplete: !isComplete });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-center text-2xl font-bold">Tasks</h2>
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <div className="flex w-full items-center justify-between">
              <p>{item.task}</p>
              <div>
                <Button
                  onClick={() => handleUpdateStatus(item.id, item.is_complete)}
                  type="primary"
                >
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
