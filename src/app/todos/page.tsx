import { redirect } from "next/navigation";
import TodoForm from "@/components/form/todo-form";
import CompletedTodo from "@/components/list/completed-todo-list";
import TodoList from "@/components/list/todo-list";
import Navbar from "@/components/navbar";
import { getCompletedTodos, getTodos } from "@/services/todo";
import { createClient } from "@/utils/supabase/server";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function TodoPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div className="mx-auto min-h-screen max-w-md space-y-8 px-2.5 md:max-w-2xl md:px-0">
      <Navbar />
      <main className="space-y-8">
        <TodoForm />
        <TodoListSSR />
        <CompletedTodoSSR />
      </main>
    </div>
  );
}

async function TodoListSSR() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoList />
    </HydrationBoundary>
  );
}

async function CompletedTodoSSR() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["completed-todos"],
    queryFn: getCompletedTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CompletedTodo />
    </HydrationBoundary>
  );
}
