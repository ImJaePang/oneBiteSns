import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useUpdateTodoMutaion } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";

export default function TodoItem({ id }: { id: string }) {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updatetodo } = useUpdateTodoMutaion();

  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("Todo data is undefined");
  const isDone = todo?.isDone;
  const content = todo?.content;

  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  const handleCheckboxClick = () => {
    // console.log(isDone);
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
