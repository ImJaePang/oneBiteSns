import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useUpdateTodoMutaion } from "@/hooks/mutations/use-update-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const handleDeleteClick = () => {};
  const { mutate } = useUpdateTodoMutaion();
  const handleCheckboxClick = () => {
    mutate({
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
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button variant={"destructive"} onClick={handleDeleteClick}>
        삭제
      </Button>
    </div>
  );
}
