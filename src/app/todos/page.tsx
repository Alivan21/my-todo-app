import TodoForm from "@/components/form/todo-form";
import CompletedTodo from "@/components/list/completed-todo-list";
import TodoList from "@/components/list/todo-list";
import Navbar from "@/components/navbar";

export default function TodoPage() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl space-y-8">
      <Navbar />
      <main className="space-y-8">
        <TodoForm />
        <TodoList />
        <CompletedTodo />
      </main>
    </div>
  );
}
