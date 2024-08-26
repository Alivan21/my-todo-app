import { createClient } from "@/utils/supabase/client";

export async function getTodos() {
  const supabase = createClient();
  const { data, error } = await supabase.from("todos").select("*").eq("is_complete", false);

  if (error) throw new Error(error.message);
  return data;
}

export async function getCompletedTodos() {
  const supabase = createClient();
  const { data, error } = await supabase.from("todos").select("*").eq("is_complete", true);

  if (error) throw new Error(error.message);
  return data;
}

export async function addTodo(task: string) {
  const supabase = createClient();
  const { data, error } = await supabase.from("todos").insert([{ task }]);
  if (error) throw new Error(error.message);
  return data;
}
