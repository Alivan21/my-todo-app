import { createClient } from "@/utils/supabase/client";

export async function getTodos() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_complete", false);

  if (error) throw new Error(error.message);

  return data;
}

export async function getCompletedTodos() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_complete", true);

  if (error) throw new Error(error.message);

  return data;
}

export async function addTodo(task: string) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const { data, error } = await supabase.from("todos").insert([{ task, user_id: user.id }]);

  if (error) throw new Error(error.message);
  return data;
}

export async function updateTodoStatus(todoId: number, isCompleted: boolean) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const { data, error } = await supabase
    .from("todos")
    .update({ is_complete: isCompleted })
    .eq("id", todoId)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data;
}
