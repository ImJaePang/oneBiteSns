import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/use-todos-data";

// const dummyTodos = [
//   { id: 1, content: "첫 번째 할 일" },
//   { id: 2, content: "두 번째 할 일" },
//   { id: 3, content: "세 번째 할 일" },
// ];

export default function TodoList() {
  // const todos = useTodos();

  const { data: todoIds, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다 </div>;
  if (isLoading) return <div>로딩중입니다...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoEditor />
      {todoIds?.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
      {/* {todoIds?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))} */}
    </div>
  );
}
