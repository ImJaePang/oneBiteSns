import { DeleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: DeleteTodo,
    // 1. 캐시 무효화 -> invalidateQueries

    // 2. 수정 요청의 응답값을 활용 -> onSuccess
    onSuccess: (deletedTodo) => {
      queryclient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      });
    },

    // 3. 낙관적 업데이트를 활용 -> onMutate
  });
}
