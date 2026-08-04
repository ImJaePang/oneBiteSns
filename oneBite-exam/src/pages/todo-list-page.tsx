import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";

const dummyTodos = [
  { id: 1, content: "첫 번째 할 일" },
  { id: 2, content: "두 번째 할 일" },
  { id: 3, content: "세 번째 할 일" },
];

export default function TodoList() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoEditor />
      {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
