import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: number) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
    staleTime: 1000 * 5 * 1, // 5초
  });
  // refetchOnMount: false,
  // refetchInterval: 1000,
}
