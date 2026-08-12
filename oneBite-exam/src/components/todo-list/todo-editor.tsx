import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutaion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TodoEditor() {
  // const createTodo = useCreteTodo();
  const { mutate, isPending } = useCreateTodoMutation();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    // createTodo(content);
    mutate(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="새로운 할 일을 입력하세요"
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
