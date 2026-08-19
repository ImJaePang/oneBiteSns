import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useUpdateTodoMutaion } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updatetodo } = useUpdateTodoMutaion();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  const handleCheckboxClick = () => {
    updatetodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          checked={isDone}
          onClick={handleCheckboxClick}
          disabled={isDeleteTodoPending}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        variant={"destructive"}
        onClick={handleDeleteClick}
        disabled={isDeleteTodoPending}
      >
        삭제
      </Button>
    </div>
  );
}
