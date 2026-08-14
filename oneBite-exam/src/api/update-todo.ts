import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

// Patial을 이용하면 부분적으로 보낼 수 있음
// & 교집합을 이용해서 {id : string}을 보내겠금
export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("update Todo Failed");
  const data: Todo = await response.json();
  return data;
}
